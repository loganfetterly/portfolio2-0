import { PageInfo } from "../typings";

export const fetchPageInfo = async() => {
    const res = await fetch(`http://${process.env.VERCEL_URL}/api/getPageInfo`);

    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
};