export const toTitleCase = (value: string) =>
  value.replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());

export const toSentenceCase = (value: string) =>
  value
    .replace(/^\S/, (char) => char.toUpperCase())
    .replace(/[.!?]\s+\S/g, (match) => match.toUpperCase());
