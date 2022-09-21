import { Skill } from "../typings";

export const fetchSkills = async() => {
    const res = await fetch(`${process.env.local ? "" : "https://"}${process.env.local ? process.env.NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_VERCEL_URL}/api/getSkills`,
    {
      method: "GET",
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': '*',
      },
    });

    const data = await res.json()
    const skills: Skill[] = data.skills;

    return skills;
};