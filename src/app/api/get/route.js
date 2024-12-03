import dbConnect from "@/lib/dbConnector";
import TestData from "@/models/TestData";

export async function GET(req) {
  try {
    await dbConnect();
    const tests = await TestData.find({});
    return new Response(JSON.stringify({ success: true, data: tests }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
