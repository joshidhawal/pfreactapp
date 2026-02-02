import z from "zod";

export const envSchema = z.object({
  VITE_API_URL: z.string().nonempty("VITE_API_URL is required"),
  VITE_API_PORT: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "VITE_API_PORT must be a positive number",
    }),
  LOG_LEVEL: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val > 1 && val < 5, {
      message: "Configure a correct LOG_LEVEL",
    }),
});
