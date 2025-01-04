export interface Point {
    x: number;
    y: number;
}
export type GlobalPoint = Point & { __brand: "GlobalPoint" };
export type LocalPoint = Point & { __brand: "LocalPoint" };