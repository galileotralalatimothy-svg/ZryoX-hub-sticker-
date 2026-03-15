let stickers = [];

export default function handler(req, res) {

if (req.method === "POST") {

let url = req.body.url;

if (url) {
stickers.push(url);
}

return res.status(200).json({ success: true });

}

if (req.method === "GET") {

return res.status(200).json({
stickers: stickers
});

}

}
