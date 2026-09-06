// === Module 16023: withEqualityFn ===

// Module 16023 (withEqualityFn)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import isIterable from "isIterable" /* 4184 */;
import identity from "identity" /* 1244 */;

const DM_WIDTH = ME.DM_WIDTH;
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  const _require = arg0;
  dependencyMap = arg1;
  let obj = { panelX: _require(4296).makeMutable(0), snapX: null, isOpenTarget: null, gestureState: null, maxX: 0, lastInteractionAt: null, isPanelTouchActive: null, setPanelX: null, updateMaxX: null, noteInteraction: null };
  const obj2 = _require(4296);
  obj[1] = _require(4296).makeMutable(0);
  let obj3 = _require(4296);
  obj[2] = _require(4296).makeMutable(false);
  const obj4 = _require(4296);
  obj[3] = _require(4296).makeMutable({ active: false, initialX: 0, initialY: 0, panelX: 0 });
  obj[5] = { current: 0 };
  const obj5 = _require(4296);
  obj[6] = _require(4296).makeMutable(false);
  obj[7] = function setPanelX(arg0, arg1) {
    const tmp = dependencyMap();
    ({ panelX, snapX, isOpenTarget, gestureState } = tmp);
    if (isOpenTarget.get() !== "open" === arg0) {
      const result = isOpenTarget.set(tmp2);
      let num = 0;
      if (tmp2) {
        num = tmp.maxX;
      }
      const result1 = panelX.set(callback(4561).withTiming(num, tmp9(16024).HOME_DRAWER_SETTLE_TIMING));
      const obj3 = callback(4561);
      const result2 = snapX.set(callback(4561).withTiming(0, tmp9(16024).HOME_DRAWER_SETTLE_TIMING));
      const obj = {};
      const merged = Object.assign(gestureState.get());
      obj.active = false;
      const result3 = gestureState.set(obj);
      const tmp9Result = callback(4561);
    }
  };
  obj[8] = function updateMaxX(width, left) {
    callback({ maxX: width.width - left.left - left.right - closure_1_2 - 8 + 8 });
  };
  obj[9] = function noteInteraction() {
    dependencyMap().lastInteractionAt.current = Date.now();
  };
  return obj;
}, isIterable.shallow);
let result = set.fileFinishedImporting("modules/home_drawer/native/HomeDrawerStore.tsx");

export default withEqualityFn;
export const computeMaxX = function computeMaxX(width, left) {
  return width.width - left.left - left.right - DM_WIDTH - 8 + 8;
};