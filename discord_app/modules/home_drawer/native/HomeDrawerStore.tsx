// discord_app/modules/home_drawer/native/HomeDrawerStore.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";
import isIterable from "../../../../_runtime/04006_isIterable.js";
import identity from "../../../../_runtime/00700_identity.js";
import { ReanimatedRexport } from "../../reanimated/ReanimatedRexport.tsx";

const DM_WIDTH = ME.DM_WIDTH;
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  const _require = arg0;
  dependencyMap = arg1;
  let obj = { panelX: require("../../reanimated/ReanimatedRexport.tsx").makeMutable(0), gestureState: null, maxX: 0, lastInteractionAt: null, isPanelTouchActive: null, setPanelX: null, updateMaxX: null, noteInteraction: null };
  const obj2 = ReanimatedRexport;
  obj[1] = require("../../reanimated/ReanimatedRexport.tsx").makeMutable({ active: false, initialX: 0, initialY: 0, panelX: 0 });
  obj[3] = { current: 0 };
  const obj3 = ReanimatedRexport;
  obj[4] = require("../../reanimated/ReanimatedRexport.tsx").makeMutable(false);
  obj[5] = function setPanelX(arg0) {
    ({ panelX, gestureState } = callback2());
    if ("open" === arg0) {
      const result = panelX.set(tmp2);
    } else {
      const result1 = panelX.set(0);
    }
    const obj = {};
    const merged = Object.assign(gestureState.get());
    obj.active = false;
    const result2 = gestureState.set(obj);
  };
  obj[6] = function updateMaxX(width, left) {
    callback({ maxX: width.width - left.left - left.right - DM_WIDTH - 8 + 8 });
  };
  obj[7] = function noteInteraction(arg0, arg1) {
    callback2().lastInteractionAt.current = Date.now();
  };
  return obj;
}, isIterable.shallow);
let result = obj132.fileFinishedImporting("modules/home_drawer/native/HomeDrawerStore.tsx");

export default withEqualityFn;
export const computeMaxX = function computeMaxX(width, left) {
  return width.width - left.left - left.right - DM_WIDTH - 8 + 8;
};