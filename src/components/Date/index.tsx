import { format, parseISO } from 'date-fns';

interface Props {
  date: string;
}

export function Date({ date }: Props): JSX.Element {
  return <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time>;
}
