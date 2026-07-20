CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  telefone text NOT NULL,
  assunto text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_messages TO anon;
GRANT SELECT, INSERT ON public.contact_messages TO authenticated;
GRANT ALL ON public.contact_messages TO service_role;

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact message"
  ON public.contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(nome) BETWEEN 1 AND 120
    AND char_length(telefone) BETWEEN 6 AND 40
    AND char_length(assunto) BETWEEN 1 AND 500
  );