import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    console.log(req);
  
    // Handle actual request
    const { where } = await req.json();
    console.log(where)
    redirect('/');

}
  