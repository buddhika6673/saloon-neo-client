import { NextResponse } from "next/server";

export function GET(){
    console.log ("get request received")
}
export async function POST(req){
const body =await req.json()
console.log(body);
const message = "good morning"+body.designation+" + body.student+"welcome to the "+body.subject +" class"
console.log(message);
return NextResponse.json({})
}
export function PUT(){
    console.log ("put request received")
}
export function DELETE(){
    console.log ("delete  request received")
}