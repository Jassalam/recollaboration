
export async function POST(req){
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL);
    const createUser = await User.create()
    return Response.json(createUser);
}