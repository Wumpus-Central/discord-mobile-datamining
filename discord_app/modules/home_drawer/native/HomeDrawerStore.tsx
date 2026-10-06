// === Module 15983: HomeDrawerStore ===

// Module 15983 (HomeDrawerStore)
import Constants from "Constants" /* 1085 */;
import _slicedToArray from "_slicedToArray" /* 4498 */;
import timing from "timing" /* 4897 */;
import HomeDrawerAnimations from "HomeDrawerAnimations" /* 15984 */;
import module_1254 from "module_1254" /* 1254 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set, set2, set3;

const DM_WIDTH = Constants.DM_WIDTH;
const withEqualityFn = module_1254.createWithEqualityFn((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  _require = arg0;
  dependencyMap = arg1;
  let obj = {
    panelX: obj2.makeMutable(0),
    snapX: obj3.makeMutable(0),
    isOpenTarget: obj4.makeMutable(false),
    gestureState: obj5.makeMutable({ active: false, initialX: 0, initialY: 0, panelX: 0 }),
    maxX: 0,
    lastInteractionAt: { current: 0 },
    isPanelTouchActive: obj6.makeMutable(false),
    setPanelX(open) {
      let gestureState;
      let isOpenTarget;
      let panelX;
      let snapX;
      const tmp = closure_1();
      ({ panelX, snapX, isOpenTarget, gestureState } = tmp);
      const maxX = tmp.maxX;
      if (isOpenTarget.get() !== "open" === open) {
        const result = isOpenTarget.set(tmp2);
        let num = 0;
        set3 = panelX.set;
        const withTiming = timing.withTiming;
        timing;
        if ("open" === open) {
          num = maxX;
        }
        set3(withTiming(num, HomeDrawerAnimations.HOME_DRAWER_SETTLE_TIMING, "animate-always"));
        set = snapX.set;
        const tmp9Result = timing;
        const result1 = set(tmp9Result.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_SETTLE_TIMING, "animate-always"));
        const obj = { active: false };
        set2 = gestureState.set;
        const merged = Object.assign(gestureState.get());
        set2(obj);
      }
    },
    updateMaxX(width, left) {
      const obj = { maxX: width.width - left.left - left.right - DM_WIDTH - 8 + 8 };
      closure_0(obj);
    },
    noteInteraction() {
      closure_1().lastInteractionAt.current = Date.now();
    }
  };
  obj2 = require("ReanimatedRexport");
  obj3 = require("ReanimatedRexport");
  obj4 = require("ReanimatedRexport");
  obj5 = require("ReanimatedRexport");
  obj6 = require("ReanimatedRexport");
  return obj;
}, _slicedToArray.shallow);
let result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerStore.tsx");

export default withEqualityFn;
export const computeMaxX = function computeMaxX(width, left) {
  return width.width - left.left - left.right - DM_WIDTH - 8 + 8;
};