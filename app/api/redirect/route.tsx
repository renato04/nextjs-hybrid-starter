import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    console.log(req.nextUrl.origin)
    console.log(await req.json());
    // Handle actual request
    return Response.redirect(`${req.nextUrl.origin}/page-a`,  302);  
}
  


    