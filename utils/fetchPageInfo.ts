import { PageInfo } from "../typings";

export const fetchPageInfo = async() => {
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`,
    {
      method: "GET",
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': '*',
      },
    });

    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
};