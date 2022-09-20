import { Experience } from "../typings";

export const fetchExperiences = async() => {
    const res = await fetch(`${process.env.URL}/api/getExperience`,
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