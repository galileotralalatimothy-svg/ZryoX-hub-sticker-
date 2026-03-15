export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}

let body = req.body;

if (!body.url) {
return res.status(400).json({ error: "No url" });
}

return res.status(200).json({
success: true,
url: body.url
});

}
