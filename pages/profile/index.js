import useSWR from "swr";

const fetcher = (url) =>
  fetch(url).then((res) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(res.json());
      }, 1000);
    });
  });

export default function Profile() {
  const { data, error } = useSWR("/data.json", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
