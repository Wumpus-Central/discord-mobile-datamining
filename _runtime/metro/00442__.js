// _runtime/metro/00442__.js
import Dimensions from "../00088_Dimensions.js";

const result = Dimensions.get("window").height / 7;

export const DEFAULT_INITIAL_NUM_TO_RENDER = 7;
export const INITIAL_NUM_TO_RENDER = 7;
export const FALLBACK_ESTIMATED_HEIGHT = result;
export const FALLBACK_ESTIMATED_WIDTH = Dimensions.get("window").width / 7;
