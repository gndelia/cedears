export type Cedear = {
  isETF?: boolean;
  name: string;
  ratio: `${string}:${string}`;
  symbol: string;
};

export type Cedears = {
  list: Cedear[];
  validSince: string;
};

declare const cedears: Cedears;
export default cedears;
