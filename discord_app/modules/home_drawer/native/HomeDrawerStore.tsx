// discord_app/modules/home_drawer/native/HomeDrawerStore.tsx
import { DM_WIDTH } from "ME";
import identity from "identity";
import { ReanimatedRexport } from "../../reanimated/ReanimatedRexport.tsx";

const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  const _require = arg0;
  const dependencyMap = arg1;
  let obj = { panelX: null, gestureState: null, maxX: 0, lastInteractionAt: null, isPanelTouchActive: null, setPanelX: null, updateMaxX: null, noteInteraction: null };
  obj[0] = _ReanimatedRexport.makeMutable(0);
  const obj2 = _ReanimatedRexport;
  obj[1] = _ReanimatedRexport.makeMutable({ active: false, initialX: 0, initialY: 0, panelX: 0 });
  obj[3] = { current: 0 };
  const obj3 = _ReanimatedRexport;
  obj[4] = _ReanimatedRexport.makeMutable(false);
  obj[5] = function setPanelX(arg0) {
    let gestureState;
    let panelX;
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
    callback({ maxX: width.width - left.left - left.right - outer1_2 - 8 + 8 });
  };
  obj[7] = function noteInteraction(arg0, arg1) {
    callback2().lastInteractionAt.current = Date.now();
  };
  return obj;
}, require("isIterable").shallow);
let result = require("module_4083").fileFinishedImporting("modules/home_drawer/native/HomeDrawerStore.tsx");

export default withEqualityFn;
export const computeMaxX = function computeMaxX(width, left) {
  return width.width - left.left - left.right - DM_WIDTH - 8 + 8;
};