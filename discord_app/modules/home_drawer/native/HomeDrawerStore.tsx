// discord_app/modules/home_drawer/native/HomeDrawerStore.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import isIterable from "../../../../_runtime/04184_isIterable.js";
import identity from "../../../../_runtime/01244_identity.js";
import { ReanimatedRexport } from "../../reanimated/ReanimatedRexport.tsx";

const DM_WIDTH = ME.DM_WIDTH;
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  const _require = arg0;
  dependencyMap = arg1;
  let obj = {
    panelX: require("../../reanimated/ReanimatedRexport.tsx").makeMutable(0),
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
  const obj2 = ReanimatedRexport;
  obj[1] = require("../../reanimated/ReanimatedRexport.tsx").makeMutable(0);
  let obj3 = ReanimatedRexport;
  obj[2] = require("../../reanimated/ReanimatedRexport.tsx").makeMutable(false);
  const obj4 = ReanimatedRexport;
  obj[3] = require("../../reanimated/ReanimatedRexport.tsx").makeMutable({
    active: false,
    initialX: 0,
    initialY: 0,
    panelX: 0,
  });
  obj[5] = { current: 0 };
  const obj5 = ReanimatedRexport;
  obj[6] = require("../../reanimated/ReanimatedRexport.tsx").makeMutable(false);
  obj[7] = function setPanelX(arg0, arg1) {
    const tmp = dependencyMap();
    ({ panelX, snapX, isOpenTarget, gestureState } = tmp);
    if ((isOpenTarget.get() !== "open") === arg0) {
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
