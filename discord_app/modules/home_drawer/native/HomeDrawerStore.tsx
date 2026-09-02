// === Module 15846: withEqualityFn ===

// Module 15846 (withEqualityFn)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import isIterable from "isIterable" /* 4105 */;
import identity from "identity" /* 697 */;

const DM_WIDTH = ME.DM_WIDTH;
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  const _require = arg0;
  dependencyMap = arg1;
  let obj = { panelX: _require(4217).makeMutable(0), gestureState: null, maxX: 0, lastInteractionAt: null, isPanelTouchActive: null, setPanelX: null, updateMaxX: null, noteInteraction: null };
  const obj2 = _require(4217);
  obj[1] = _require(4217).makeMutable({ active: false, initialX: 0, initialY: 0, panelX: 0 });
  obj[3] = { current: 0 };
  const obj3 = _require(4217);
  obj[4] = _require(4217).makeMutable(false);
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
    callback({ maxX: width.width - left.left - left.right - closure_1_2 - 8 + 8 });
  };
  obj[7] = function noteInteraction(arg0, arg1) {
    callback2().lastInteractionAt.current = Date.now();
  };
  return obj;
}, isIterable.shallow);
let result = set.fileFinishedImporting("modules/home_drawer/native/HomeDrawerStore.tsx");

export default withEqualityFn;
export const computeMaxX = function computeMaxX(width, left) {
  return width.width - left.left - left.right - DM_WIDTH - 8 + 8;
};