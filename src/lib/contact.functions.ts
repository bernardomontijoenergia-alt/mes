import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  nome: z.string().trim().min(1, "Informe seu nome").max(120),
  telefone: z.string().trim().min(6, "Telefone inválido").max(40),
  assunto: z.string().trim().min(1, "Descreva o assunto").max(500),
});

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin
      .from("contact_messages")
      .insert({
        nome: data.nome,
        telefone: data.telefone,
        assunto: data.assunto,
      });

    if (error) {
      console.error("[contact] insert failed:", error);
      throw new Error("Não foi possível registrar sua mensagem. Tente novamente.");
    }

    // TODO: notificação por e-mail é ativada após a configuração do domínio de e-mail
    // e o scaffold dos templates transacionais (destino: bernardo.montijoenergia@gmail.com).

    return { ok: true as const };
  });

