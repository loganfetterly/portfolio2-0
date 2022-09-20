import { Experience } from "../typings";

export const fetchExperiences = async() => {
    const res = await fetch(`http://${process.env.URL}/api/getExperience`,
    {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59",
        Accept: "application/json; charset=UTF-8",
      },
    });

    const data = await res.json()
    const experiences: Experience[] = data.experiences;

    return experiences;
};