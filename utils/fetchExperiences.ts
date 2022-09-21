import { Experience } from "../typings";

export const fetchExperiences = async() => {
    const res = await fetch(`${process.env.local ? "" : "https://"}${process.env.local ? process.env.NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_VERCEL_URL}/api/getExperience`,
    {
      method: "GET",
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': '*',
      },
    });

    const data = await res.json()
    const experiences: Experience[] = data.experiences;

    return experiences;
};