//Query Params
const API_KEY = "dz421DMzsdaXSIJ4wFx31bh6alhptv5ZQpuVhKkW";
const BASE_URL = "https://api.nasa.gov/planetary/apod";
const HD = true;

// <data> is a string formatted into YYYY-MM-DD
const apiData = async (DATE) => {
  const data = await fetch(
    `${BASE_URL}?api_key=${API_KEY}&hd=${HD}&date=${DATE}`
  ).catch((err) => {
    return err;
  });

  let json;
  data.ok
    ? (json = { ...(await data.json()), ok: true })
    : (json = { ok: false, error: "Invalid input" });
  return json;
};

export default apiData;
