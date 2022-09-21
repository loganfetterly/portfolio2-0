import { Experience } from "../typings";

export const fetchExperiences = async() => {
    const res = await fetch(`${process.env.local ? "" : "https://"}${process.env.local == "1" ? process.env.NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_VERCEL_URL}/api/getExperience`,
    {
      method: "GET",
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
      },
    });

    const data = await res.json()
    const experiences: Experience[] = data.experiences;

    return experiences;
};