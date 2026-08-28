// === Module 16471: useLaunchPadState ===

// Module 16471 (useLaunchPadState)
import closure_3 from "noop" /* 19 */;
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG" /* 11002 */;
import setLaunchPadPullTabExclusionRect from "setLaunchPadPullTabExclusionRect" /* 16472 */;

const require = arg1;
({ LAUNCH_PAD_PULL_TAB_MAX_POSITION: c4, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: c5 } = LAUNCH_PAD_SPRING_CONFIG);
let closure_6 = { active: false, initialLaunchPadPosition: 0, initialPullTabPosition: 0, initialTouchX: 0, initialTouchY: 0, positionOffsetX: 0, positionOffsetY: 0, startTime: -1, requiresPop: false, startShown: false };
let obj = { position: null, scale: 1, offset: 0, minimized: false };
obj[0] = setLaunchPadPullTabExclusionRect.getLaunchPadPullTabPositionCached();
let closure_8 = { code: "function setLaunchPadShown_useLaunchPadStateNativeTsx1(shown){const{launchPadShown}=this.__closure;launchPadShown.set(shown);}" };
let closure_9 = { code: "function setLaunchPadPosition_useLaunchPadStateNativeTsx2(value){const{launchPadSharedState}=this.__closure;launchPadSharedState.set(Math.max(Math.min(value,1),0));}" };
let closure_10 = { code: "function setLaunchPadPullTabBoundedPosition_useLaunchPadStateNativeTsx3(positionY){const{getWindowDimensionsWorklet,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_MAX_POSITION,getSafeAreaInsetsWorklet,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET,updateSharedValueIfChanged,runOnJS,persistLaunchPadPullTabPosition}=this.__closure;const positionYMax=getWindowDimensionsWorklet().height-launchPadPullTabState.get().offset-LAUNCH_PAD_PULL_TAB_MAX_POSITION;const positionYMin=getSafeAreaInsetsWorklet().top+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET;const position=Math.max(Math.min(positionY,positionYMax),positionYMin);updateSharedValueIfChanged(launchPadPullTabState,{position:position});runOnJS(persistLaunchPadPullTabPosition)(position);}" };
let closure_11 = { code: "function setLaunchPadPullTabTranslation_useLaunchPadStateNativeTsx4(translationY){const{gestureState,setLaunchPadPullTabBoundedPosition}=this.__closure;const positionY=gestureState.get().initialPullTabPosition+translationY;setLaunchPadPullTabBoundedPosition(positionY);}" };
let closure_12 = { code: "function setLaunchPadPullTabPosition_useLaunchPadStateNativeTsx5(position,offset){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{position:position,offset:offset});}" };
let closure_13 = { code: "function setLaunchPadPullTabScale_useLaunchPadStateNativeTsx6(scale){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{scale:scale});}" };
let closure_14 = { code: "function setLaunchPadPullTabMinimized_useLaunchPadStateNativeTsx7(minimized){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{minimized:minimized});}" };
let closure_15 = { code: "function onWindowHeightChange_useLaunchPadStateNativeTsx8(){const{launchPadPullTabState,setLaunchPadPullTabBoundedPosition}=this.__closure;const positionY=launchPadPullTabState.get().position;setLaunchPadPullTabBoundedPosition(positionY);}" };
let result = require("set").fileFinishedImporting("modules/launchpad/native/useLaunchPadState.native.tsx");

export default function useLaunchPadState() {
  obj = sharedValue(sharedValue2[3]);
  sharedValue = obj.useSharedValue(closure_6);
  const sharedValue1 = sharedValue(sharedValue2[3]).useSharedValue(obj);
  let obj2 = sharedValue(sharedValue2[3]);
  sharedValue2 = sharedValue(sharedValue2[3]).useSharedValue(0);
  let obj3 = sharedValue(sharedValue2[3]);
  const sharedValue3 = sharedValue(sharedValue2[3]).useSharedValue(false);
  const items = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  obj = {
    launchPadSharedState: sharedValue2,
    launchPadPullTabState: sharedValue1,
    launchPadShown: sharedValue3,
    gestureState: sharedValue,
    updaters: sharedValue3.useMemo(() => {
      function setLaunchPadShown(arg0) {
        const result = closure_3.set(arg0);
      }
      obj = { launchPadShown: sharedValue3 };
      setLaunchPadShown.__closure = obj;
      setLaunchPadShown.__workletHash = 12645438005571;
      setLaunchPadShown.__initData = closure_1_8;
      function setLaunchPadPosition(arg0) {
        const result = closure_2.set(Math.max(Math.min(arg0, 1), 0));
      }
      obj = { launchPadSharedState: sharedValue2 };
      setLaunchPadPosition.__closure = obj;
      setLaunchPadPosition.__workletHash = 6880435508235;
      setLaunchPadPosition.__initData = closure_1_9;
      function setLaunchPadPullTabBoundedPosition(position) {
        const diff = setLaunchPadPullTabBoundedPosition(closure_1_2[4]).getWindowDimensionsWorklet().height - closure_1.get().offset - closure_1_4;
        obj = setLaunchPadPullTabBoundedPosition(closure_1_2[4]);
        const sum = setLaunchPadPullTabBoundedPosition(closure_1_2[5]).getSafeAreaInsetsWorklet().top + closure_1_5;
        const bound = Math.max(Math.min(position, diff), sum);
        closure_1_1(closure_1_2[6])(closure_1, { position: bound });
        const obj2 = setLaunchPadPullTabBoundedPosition(closure_1_2[5]);
        setLaunchPadPullTabBoundedPosition(closure_1_2[3]).runOnJS(setLaunchPadPullTabBoundedPosition(closure_1_2[2]).persistLaunchPadPullTabPosition)(bound);
      }
      obj = { getWindowDimensionsWorklet: sharedValue(sharedValue2[4]).getWindowDimensionsWorklet, launchPadPullTabState: sharedValue1, LAUNCH_PAD_PULL_TAB_MAX_POSITION: closure_1_4, getSafeAreaInsetsWorklet: sharedValue(sharedValue2[5]).getSafeAreaInsetsWorklet, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: closure_1_5, updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), runOnJS: sharedValue(sharedValue2[3]).runOnJS, persistLaunchPadPullTabPosition: sharedValue(sharedValue2[2]).persistLaunchPadPullTabPosition };
      setLaunchPadPullTabBoundedPosition.__closure = obj;
      setLaunchPadPullTabBoundedPosition.__workletHash = 1905227275114;
      setLaunchPadPullTabBoundedPosition.__initData = closure_1_10;
      obj1 = { setLaunchPadShown, setLaunchPadPosition, setLaunchPadPullTabTranslation, setLaunchPadPullTabPosition: null, setLaunchPadPullTabScale: null, setLaunchPadPullTabMinimized: null, onWindowHeightChange: null };
      setLaunchPadPullTabTranslation = function setLaunchPadPullTabTranslation(translationY) {
        setLaunchPadPullTabBoundedPosition(setLaunchPadPullTabBoundedPosition.get().initialPullTabPosition + translationY);
      };
      setLaunchPadPullTabTranslation.__closure = { gestureState: setLaunchPadPullTabBoundedPosition, setLaunchPadPullTabBoundedPosition };
      setLaunchPadPullTabTranslation.__workletHash = 11096032645208;
      setLaunchPadPullTabTranslation.__initData = closure_1_11;
      function setLaunchPadPullTabPosition(diff2, offset) {
        closure_1_1(closure_1_2[6])(closure_1, { position: diff2, offset });
      }
      setLaunchPadPullTabPosition.__closure = { updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), launchPadPullTabState: sharedValue1 };
      setLaunchPadPullTabPosition.__workletHash = 14398804359967;
      setLaunchPadPullTabPosition.__initData = closure_1_12;
      obj1[3] = setLaunchPadPullTabPosition;
      function setLaunchPadPullTabScale(closure_1_9) {
        closure_1_1(closure_1_2[6])(closure_1, { scale: closure_1_9 });
      }
      let obj2 = { gestureState: setLaunchPadPullTabBoundedPosition, setLaunchPadPullTabBoundedPosition };
      const obj3 = { updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), launchPadPullTabState: sharedValue1 };
      setLaunchPadPullTabScale.__closure = { updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), launchPadPullTabState: sharedValue1 };
      setLaunchPadPullTabScale.__workletHash = 4772968963371;
      setLaunchPadPullTabScale.__initData = closure_1_13;
      obj1[4] = setLaunchPadPullTabScale;
      function setLaunchPadPullTabMinimized(minimized) {
        closure_1_1(closure_1_2[6])(closure_1, { minimized });
      }
      const obj4 = { updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), launchPadPullTabState: sharedValue1 };
      setLaunchPadPullTabMinimized.__closure = { updateSharedValueIfChanged: sharedValue1(sharedValue2[6]), launchPadPullTabState: sharedValue1 };
      setLaunchPadPullTabMinimized.__workletHash = 2379539261994;
      setLaunchPadPullTabMinimized.__initData = closure_1_14;
      obj1[5] = setLaunchPadPullTabMinimized;
      function onWindowHeightChange() {
        setLaunchPadPullTabBoundedPosition(closure_1_1.get().position);
      }
      onWindowHeightChange.__closure = { launchPadPullTabState: sharedValue1, setLaunchPadPullTabBoundedPosition };
      onWindowHeightChange.__workletHash = 17230667749428;
      onWindowHeightChange.__initData = closure_1_15;
      obj1[6] = onWindowHeightChange;
      return obj1;
    }, items)
  };
  return obj;
};