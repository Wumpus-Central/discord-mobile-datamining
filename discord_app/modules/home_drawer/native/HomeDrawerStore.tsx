// === Module 17576: HomeDrawerStore ===

// Module 17576 (HomeDrawerStore)
import Constants from "Constants" /* 1071 */;
import _mod4832 from "module_4832" /* 4832 */;
import timing_timing from "timing/timing" /* 5127 */;
import HomeDrawerAnimations from "HomeDrawerAnimations" /* 17577 */;
import identity from "module_1257" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const DM_WIDTH = Constants.DM_WIDTH;
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  let obj = { panelX: require("module_1653").makeMutable(0), snapX: null, isOpenTarget: null, gestureState: null, maxX: 0, lastInteractionAt: null, isPanelTouchActive: null, setPanelX: null, updateMaxX: null, noteInteraction: null };
  const obj2 = require("module_1653");
  obj.snapX = require("module_1653").makeMutable(0);
  let obj3 = require("module_1653");
  obj.isOpenTarget = require("module_1653").makeMutable(false);
  const obj4 = require("module_1653");
  obj.gestureState = require("module_1653").makeMutable({ active: false, initialX: 0, initialY: 0, panelX: 0 });
  obj.lastInteractionAt = { current: 0 };
  const obj5 = require("module_1653");
  obj.isPanelTouchActive = require("module_1653").makeMutable(false);
  obj.setPanelX = function setPanelX(arg0) {
    const tmp = closure_1();
    ({ panelX, snapX, isOpenTarget, gestureState } = tmp);
    if (isOpenTarget.get() !== "open" === arg0) {
      const result = isOpenTarget.set(tmp2);
      let num = 0;
      if (tmp2) {
        num = tmp.maxX;
      }
      const result1 = panelX.set(timing_timing.withTiming(num, HomeDrawerAnimations.HOME_DRAWER_SETTLE_TIMING, "animate-always"));
      const result2 = snapX.set(timing_timing.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_SETTLE_TIMING, "animate-always"));
      const obj = {};
      const merged = Object.assign(gestureState.get());
      obj.active = false;
      const result3 = gestureState.set(obj);
      const tmp9Result = timing_timing;
    }
  };
  obj.updateMaxX = function updateMaxX(width, left) {
    closure_0({ maxX: width.width - left.left - left.right - DM_WIDTH - 8 + 8 });
  };
  obj.noteInteraction = function noteInteraction() {
    closure_1().lastInteractionAt.current = Date.now();
  };
  return obj;
}, _mod4832.shallow);
let result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerStore.tsx");

export default withEqualityFn;
export function computeMaxX(width, left) {
  return width.width - left.left - left.right - DM_WIDTH - 8 + 8;
}