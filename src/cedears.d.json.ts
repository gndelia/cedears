export type Cedear = {
  isETF?: boolean;
  name: string;
  ratio: `${string}:${string}`;
  symbol: string;
};

export type Cedears = Cedear[];

declare const cedears: Cedears;
export default cedears;
