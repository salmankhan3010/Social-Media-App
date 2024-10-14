import { z } from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, "Name can't be empty"),
  username: z.string().min(2, "Too short"),
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 charactors."),
});
export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 charactors."),
});

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string()
});
