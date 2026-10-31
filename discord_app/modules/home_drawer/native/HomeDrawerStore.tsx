// === Module 18061: HomeDrawerStore ===

// Module 18061 (HomeDrawerStore)
import Constants from "Constants" /* 1072 */;
import _mod4929 from "module_4929" /* 4929 */;
import timing from "timing" /* 5254 */;
import HomeDrawerAnimations from "HomeDrawerAnimations" /* 18062 */;
import identity from "module_1254" /* 1254 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const DM_WIDTH = Constants.DM_WIDTH;
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  let obj = { panelX: require("ReanimatedRexport").makeMutable(0), snapX: null, isOpenTarget: null, gestureState: null, maxX: 0, lastInteractionAt: null, isPanelTouchActive: null, setPanelX: null, updateMaxX: null, noteInteraction: null };
  const obj2 = require("ReanimatedRexport");
  obj.snapX = require("ReanimatedRexport").makeMutable(0);
  let obj3 = require("ReanimatedRexport");
  obj.isOpenTarget = require("ReanimatedRexport").makeMutable(false);
  const obj4 = require("ReanimatedRexport");
  obj.gestureState = require("ReanimatedRexport").makeMutable({ active: false, initialX: 0, initialY: 0, panelX: 0 });
  obj.lastInteractionAt = { current: 0 };
  const obj5 = require("ReanimatedRexport");
  obj.isPanelTouchActive = require("ReanimatedRexport").makeMutable(false);
  obj.setPanelX = function setPanelX(arg0) {
    const tmp = closure_1();
    ({ panelX, snapX, isOpenTarget, gestureState } = tmp);
    if (isOpenTarget.get() !== "open" === arg0) {
      const result = isOpenTarget.set(tmp2);
      let num = 0;
      if (tmp2) {
        num = tmp.maxX;
      }
      const result1 = panelX.set(timing.withTiming(num, HomeDrawerAnimations.HOME_DRAWER_SETTLE_TIMING, "animate-always"));
      const result2 = snapX.set(timing.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_SETTLE_TIMING, "animate-always"));
      const obj = {};
      const merged = Object.assign(gestureState.get());
      obj.active = false;
      const result3 = gestureState.set(obj);
      const tmp9Result = timing;
    }
  };
  obj.updateMaxX = function updateMaxX(width, left) {
    closure_0({ maxX: width.width - left.left - left.right - DM_WIDTH - 8 + 8 });
  };
  obj.noteInteraction = function noteInteraction() {
    closure_1().lastInteractionAt.current = Date.now();
  };
  return obj;
}, _mod4929.shallow);
let result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerStore.tsx");

export default withEqualityFn;
export function computeMaxX(width, left) {
  return width.width - left.left - left.right - DM_WIDTH - 8 + 8;
}