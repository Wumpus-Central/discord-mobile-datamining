// _runtime/metro/00444__.js
import _isNativeReflectConstructDefault from "../00143__isNativeReflectConstruct.js";
import DEFAULT_INITIAL_NUM_TO_RENDER from "../00442_DEFAULT_INITIAL_NUM_TO_RENDER.js";

const FALLBACK_ESTIMATED_WIDTH = DEFAULT_INITIAL_NUM_TO_RENDER.FALLBACK_ESTIMATED_WIDTH;
let obj = {
  itemCount: DEFAULT_INITIAL_NUM_TO_RENDER.INITIAL_NUM_TO_RENDER,
  spacerStyle(arg0) {
    return { width: arg0 * FALLBACK_ESTIMATED_WIDTH };
  }
};

export default obj;