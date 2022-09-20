import { Social } from "../typings";

export const fetchSocials = async() => {
    const res = await fetch(`${process.env.URL}/api/getSocials`,
    {
      method: "GET",
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': '*',
      },
    });

    const data = await res.json()
    const socials: Social[] = data.socials;

    return socials;
};