import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Champs requis manquants." }, { status: 400 });
    }
    if (password.length < 6) {
      return NextResponse.json({ message: "Le mot de passe doit contenir au moins 6 caractères." }, { status: 400 });
    }
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: "Cet email est déjà utilisé." }, { status: 400 });
    }
    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);
    // Création de l'utilisateur
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return NextResponse.json({ message: "Inscription réussie." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Erreur serveur." }, { status: 500 });
  }
}
