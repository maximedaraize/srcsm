export const srcsm = (string: string): string => {
  return string
    .split("")
    .map((item, index) =>
      index % 2 === 0 ? item.toUpperCase() : item.toLowerCase()
    )
    .join("");
};
