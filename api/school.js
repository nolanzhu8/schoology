export default async function handler(req, res) {
  const url = 'https://taming.io' + req.url;
  const response = await fetch(url);
  const data = await response.text();
  res.send(data);
}
