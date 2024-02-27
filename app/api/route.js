import { NextResponse } from "next/server";
export async function GET() {
  const res = await fetch("https://mocki.io/v1/ae832675-0711-48a0-8665-a186cd0e8489");
  const data = await res.json();
  return NextResponse.json(data);
}
