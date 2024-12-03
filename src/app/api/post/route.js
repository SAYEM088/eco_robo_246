import dbConnect from "@/lib/dbConnector";
import TestData from "@/models/TestData";

export async function POST(req) {
  try {
    const body = await req.json();
    await dbConnect();
    const newTest = new TestData(body);
    await newTest.save();
    return new Response(JSON.stringify({ success: true, data: newTest }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
