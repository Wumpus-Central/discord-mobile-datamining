// discord_app/modules/home_drawer/native/HomeDrawerStore.tsx
import Constants from "../../../Constants.tsx";
import _mod5058 from "../../../../_runtime/metro/05058__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import HomeDrawerAnimations from "HomeDrawerAnimations.tsx";
import identity from "../../../../_runtime/metro/01254__.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const DM_WIDTH = Constants.DM_WIDTH;
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  let obj = {
    panelX: require("../../../../_runtime/metro/01652__.js").makeMutable(0),
    snapX: null,
    isOpenTarget: null,
    gestureState: null,
    maxX: 0,
    lastInteractionAt: null,
    isPanelTouchActive: null,
    setPanelX: null,
    updateMaxX: null,
    noteInteraction: null,
  };
  const obj2 = require("../../../../_runtime/metro/01652__.js");
  obj.snapX = require("../../../../_runtime/metro/01652__.js").makeMutable(0);
  let obj3 = require("../../../../_runtime/metro/01652__.js");
  obj.isOpenTarget = require("../../../../_runtime/metro/01652__.js").makeMutable(false);
  const obj4 = require("../../../../_runtime/metro/01652__.js");
  obj.gestureState = require("../../../../_runtime/metro/01652__.js").makeMutable({
    active: false,
    initialX: 0,
    initialY: 0,
    panelX: 0,
  });
  obj.lastInteractionAt = { current: 0 };
  const obj5 = require("../../../../_runtime/metro/01652__.js");
  obj.isPanelTouchActive = require("../../../../_runtime/metro/01652__.js").makeMutable(false);
  obj.setPanelX = function setPanelX(arg0) {
    const tmp = closure_1();
    ({ panelX, snapX, isOpenTarget, gestureState } = tmp);
    if ((isOpenTarget.get() !== "open") === arg0) {
      const result = isOpenTarget.set(tmp2);
      let num = 0;
      if (tmp2) {
        num = tmp.maxX;
      }
      const result1 = panelX.set(
        timing_timing.withTiming(num, HomeDrawerAnimations.HOME_DRAWER_SETTLE_TIMING, "animate-always"),
      );
      const result2 = snapX.set(
        timing_timing.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_SETTLE_TIMING, "animate-always"),
      );
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
}, _mod5058.shallow);
let result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerStore.tsx");

export default withEqualityFn;
export function computeMaxX(width, left) {
  return width.width - left.left - left.right - DM_WIDTH - 8 + 8;
}
