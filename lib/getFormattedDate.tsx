export default function getFormttedDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-UK", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
