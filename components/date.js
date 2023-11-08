import dayjs from "dayjs";

export default function Date({ dateString }) {
  const date = dayjs(dateString);

  return <time dateTime={date}>{date.format("YYYY-MM-DD HH:mm:ss")}</time>;
}
