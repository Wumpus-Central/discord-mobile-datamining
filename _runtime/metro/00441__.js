// _runtime/metro/00441__.js
import _isNativeReflectConstructDefault from "../00143__isNativeReflectConstruct.js";
import DEFAULT_INITIAL_NUM_TO_RENDER from "../00442_DEFAULT_INITIAL_NUM_TO_RENDER.js";

const FALLBACK_ESTIMATED_HEIGHT = DEFAULT_INITIAL_NUM_TO_RENDER.FALLBACK_ESTIMATED_HEIGHT;
let obj = {
  itemCount: DEFAULT_INITIAL_NUM_TO_RENDER.INITIAL_NUM_TO_RENDER,
  spacerStyle(arg0) {
    return { height: arg0 * FALLBACK_ESTIMATED_HEIGHT };
  }
};

export default obj;