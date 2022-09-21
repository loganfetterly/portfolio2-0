import { Project } from "../typings";

export const fetchProjects = async() => {
    const res = await fetch(`${process.env.local ? process.env.NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_VERCEL_URL}/api/getProjects`,
    {
      method: "GET",
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': '*',
      },
    });

    const data = await res.json()
    const projects: Project[] = data.projects;

    return projects;
};