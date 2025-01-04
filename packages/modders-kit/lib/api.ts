import type { GameApi } from "./main";

export let api: GameApi;

export function initApi(gameApi: GameApi) {
    api = gameApi;
}
