import { NextResponse } from "next/server";
import prisma from "@repo/db";

export async function GET() {
  await prisma.user.create({
    data: {
      number: "4354",
      password: "3453",
      email: "pawangmial.com",
      name: "sdf",
    },
  });

  return NextResponse.json({
    mes: "entry created",
  });
}
