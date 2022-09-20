import { Experience } from "../typings";

export const fetchExperiences = async() => {
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getExperience`);

    const data = await res.json()
    const experiences: Experience[] = data.experiences;

    return experiences;
};