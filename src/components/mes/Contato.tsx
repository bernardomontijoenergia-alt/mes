import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { submitContactMessage } from "@/lib/contact.functions";
import { Reveal } from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

export function Contato() {
  const submit = useServerFn(submitContactMessage);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ nome: "", telefone: "", assunto: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      await submit({ data: form });
      setStatus("success");
      setForm({ nome: "", telefone: "", assunto: "" });
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível enviar. Tente novamente em instantes.",
      );
    }
  };

  return (
    <section id="contato" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent">
              Fale conosco
            </div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-primary">
              Envie uma mensagem
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Preencha o formulário e nossa equipe entrará em contato o mais rápido possível.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border/70 bg-card p-6 sm:p-10 shadow-soft"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="nome" className="block text-sm font-medium text-primary">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  maxLength={120}
                  value={form.nome}
                  onChange={onChange}
                  disabled={status === "sending"}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:opacity-60"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="telefone" className="block text-sm font-medium text-primary">
                  Telefone
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  maxLength={40}
                  value={form.telefone}
                  onChange={onChange}
                  disabled={status === "sending"}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:opacity-60"
                  placeholder="(31) 99999-9999"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="assunto" className="block text-sm font-medium text-primary">
                  Assunto
                </label>
                <textarea
                  id="assunto"
                  name="assunto"
                  required
                  maxLength={500}
                  rows={5}
                  value={form.assunto}
                  onChange={onChange}
                  disabled={status === "sending"}
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:opacity-60"
                  placeholder="Como podemos ajudar?"
                />
                <div className="mt-1 text-right text-xs text-muted-foreground">
                  {form.assunto.length}/500
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="min-h-[24px] text-sm" aria-live="polite">
                {status === "success" && (
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle2 size={18} />
                    Mensagem enviada! Retornaremos em breve.
                  </div>
                )}
                {status === "error" && (
                  <div className="text-destructive">{error}</div>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar mensagem
                  </>
                )}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
