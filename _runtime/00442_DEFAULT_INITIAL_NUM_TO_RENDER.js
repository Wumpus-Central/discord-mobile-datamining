// _runtime/00442_DEFAULT_INITIAL_NUM_TO_RENDER.js
import importDefaultResult from "00088_Dimensions.js";

const result = importDefaultResult.get("window").height / 7;

export const DEFAULT_INITIAL_NUM_TO_RENDER = 7;
export const INITIAL_NUM_TO_RENDER = 7;
export const FALLBACK_ESTIMATED_HEIGHT = result;
export const FALLBACK_ESTIMATED_WIDTH = importDefaultResult.get("window").width / 7;