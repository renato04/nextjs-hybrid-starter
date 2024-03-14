import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    console.log(req.nextUrl.origin)
    console.log(await req.json());
    // Handle actual request
    return NextResponse.redirect(`/page-a`,  302);  
}
  


    