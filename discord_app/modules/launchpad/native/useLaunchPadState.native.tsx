// === Module 19465: useLaunchPadState ===

// Module 19465 (useLaunchPadState)
import _mod1705 from "module_1705" /* 1705 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11376 */;
import useSafeAreaInsetsSharedValue from "useSafeAreaInsetsSharedValue" /* 11393 */;
import useWindowDimensionsSharedValue from "useWindowDimensionsSharedValue" /* 13042 */;
import LaunchPadPullTabCache2 from "LaunchPadPullTabCache" /* 19466 */;
import noop from "module_19" /* 19 */;

require = fn;
const LaunchPadConstants = fn(11690);
({ LAUNCH_PAD_PULL_TAB_MAX_POSITION: closure_4, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: hasOwnProperty } = LaunchPadConstants);
let closure_6 = { active: false, initialLaunchPadPosition: 0, initialPullTabPosition: 0, initialTouchX: 0, initialTouchY: 0, positionOffsetX: 0, positionOffsetY: 0, startTime: -1, requiresPop: false, startShown: false };
let obj = { position: null, scale: 1, offset: 0, minimized: false };
const LaunchPadPullTabCache = fn(19466);
obj.position = LaunchPadPullTabCache.getLaunchPadPullTabPositionCached();
let closure_8 = { code: "(function setLaunchPadShown_useLaunchPadStateNativeTsx1(shown){let[launchPadShown]=this.__closure;launchPadShown.set(shown);})" };
let closure_9 = { code: "(function setLaunchPadPosition_useLaunchPadStateNativeTsx2(value){let[launchPadSharedState]=this.__closure;launchPadSharedState.set(Math.max(Math.min(value,1),0));})" };
let closure_10 = { code: "(function setLaunchPadPullTabBoundedPosition_useLaunchPadStateNativeTsx3(positionY){let[getWindowDimensionsWorklet,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_MAX_POSITION,getSafeAreaInsetsWorklet,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET,updateSharedValueIfChanged,scheduleOnRN,persistLaunchPadPullTabPosition]=this.__closure;const positionYMax=getWindowDimensionsWorklet().height-launchPadPullTabState.get().offset-LAUNCH_PAD_PULL_TAB_MAX_POSITION;const positionYMin=getSafeAreaInsetsWorklet().top+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET;const position=Math.max(Math.min(positionY,positionYMax),positionYMin);updateSharedValueIfChanged(launchPadPullTabState,{position:position});scheduleOnRN(persistLaunchPadPullTabPosition,position);})" };
let closure_11 = { code: "(function setLaunchPadPullTabTranslation_useLaunchPadStateNativeTsx4(translationY){let[gestureState,setLaunchPadPullTabBoundedPosition]=this.__closure;const positionY=gestureState.get().initialPullTabPosition+translationY;setLaunchPadPullTabBoundedPosition(positionY);})" };
let closure_12 = { code: "(function setLaunchPadPullTabPosition_useLaunchPadStateNativeTsx5(position,offset){let[updateSharedValueIfChanged,launchPadPullTabState]=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{position:position,offset:offset});})" };
let closure_13 = { code: "(function setLaunchPadPullTabScale_useLaunchPadStateNativeTsx6(scale){let[updateSharedValueIfChanged,launchPadPullTabState]=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{scale:scale});})" };
let closure_14 = { code: "(function setLaunchPadPullTabMinimized_useLaunchPadStateNativeTsx7(minimized){let[updateSharedValueIfChanged,launchPadPullTabState]=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{minimized:minimized});})" };
let closure_15 = { code: "(function onWindowHeightChange_useLaunchPadStateNativeTsx8(){let[launchPadPullTabState,setLaunchPadPullTabBoundedPosition]=this.__closure;const positionY=launchPadPullTabState.get().position;setLaunchPadPullTabBoundedPosition(positionY);})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadState.native.tsx");

export default function useLaunchPadState() {
  obj = sharedValue(sharedValue2[3]);
  sharedValue = obj.useSharedValue(closure_6);
  const sharedValue1 = sharedValue(sharedValue2[3]).useSharedValue(obj);
  const obj2 = sharedValue(sharedValue2[3]);
  sharedValue2 = sharedValue(sharedValue2[3]).useSharedValue(0);
  const obj3 = sharedValue(sharedValue2[3]);
  const sharedValue3 = sharedValue(sharedValue2[3]).useSharedValue(false);
  items = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  const obj4 = sharedValue(sharedValue2[3]);
  return {
    launchPadSharedState: sharedValue2,
    launchPadPullTabState: sharedValue1,
    launchPadShown: sharedValue3,
    gestureState: sharedValue,
    updaters: sharedValue3.useMemo(() => {
      items = [closure_8, sharedValue3];
      [tmp, tmp2] = items;
      function setLaunchPadShown(arg0) {
        const result = _undefined.set(arg0);
      }
      const items1 = [tmp2];
      setLaunchPadShown.__closure = items1;
      setLaunchPadShown.__workletHash = 5897650808218;
      setLaunchPadShown.__initData = tmp;
      const items2 = [closure_9, sharedValue2];
      [tmp3, tmp4] = items2;
      function setLaunchPadPosition(arg0) {
        const result = _undefined.set(Math.max(Math.min(arg0, 1), 0));
      }
      const items3 = [tmp4];
      setLaunchPadPosition.__closure = items3;
      setLaunchPadPosition.__workletHash = 13366630538162;
      setLaunchPadPosition.__initData = tmp3;
      const items4 = [closure_10, useWindowDimensionsSharedValue.getWindowDimensionsWorklet, sharedValue1, React4, useSafeAreaInsetsSharedValue.getSafeAreaInsetsWorklet, hasOwnProperty, updateSharedValueIfChangedDefault, _mod1705.scheduleOnRN, LaunchPadPullTabCache2.persistLaunchPadPullTabPosition];
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items4;
      function setLaunchPadPullTabBoundedPosition(arg0) {
        const diff = _undefined().height - _undefined2.get().offset - c2;
        const sum = _undefined3().top + c4;
        const bound = Math.max(Math.min(arg0, diff), sum);
        _undefined4(_undefined2, { position: bound });
        _undefined5(c7, bound);
      }
      const items5 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      setLaunchPadPullTabBoundedPosition.__closure = items5;
      setLaunchPadPullTabBoundedPosition.__workletHash = 14223632177086;
      setLaunchPadPullTabBoundedPosition.__initData = tmp8;
      const items6 = [scale, sharedValue, setLaunchPadPullTabBoundedPosition];
      [tmp17, tmp18, tmp19] = items6;
      function setLaunchPadPullTabTranslation(translationY) {
        _undefined2(_undefined.get().initialPullTabPosition + translationY);
      }
      const items7 = [tmp18, tmp19];
      setLaunchPadPullTabTranslation.__closure = items7;
      setLaunchPadPullTabTranslation.__workletHash = 4090476742433;
      setLaunchPadPullTabTranslation.__initData = tmp17;
      const items8 = [closure_12, updateSharedValueIfChangedDefault, sharedValue1];
      [tmp20, tmp21, tmp22] = items8;
      function setLaunchPadPullTabPosition(diff2, offset) {
        _undefined(c1, { position: diff2, offset });
      }
      const items9 = [tmp21, tmp22];
      setLaunchPadPullTabPosition.__closure = items9;
      setLaunchPadPullTabPosition.__workletHash = 12903570360774;
      setLaunchPadPullTabPosition.__initData = tmp20;
      const items10 = [closure_13, updateSharedValueIfChangedDefault, sharedValue1];
      [tmp23, tmp24, tmp25] = items10;
      function setLaunchPadPullTabScale(c11) {
        _undefined(c1, { scale });
      }
      const items11 = [tmp24, tmp25];
      setLaunchPadPullTabScale.__closure = items11;
      setLaunchPadPullTabScale.__workletHash = 16625772964306;
      setLaunchPadPullTabScale.__initData = tmp23;
      const items12 = [closure_14, updateSharedValueIfChangedDefault, sharedValue1];
      [tmp26, tmp27, tmp28] = items12;
      function setLaunchPadPullTabMinimized(minimized) {
        _undefined(c1, { minimized });
      }
      const items13 = [tmp27, tmp28];
      setLaunchPadPullTabMinimized.__closure = items13;
      setLaunchPadPullTabMinimized.__workletHash = 6973146176435;
      setLaunchPadPullTabMinimized.__initData = tmp26;
      const items14 = [closure_15, sharedValue1, setLaunchPadPullTabBoundedPosition];
      c0 = undefined;
      c1 = undefined;
      [tmp29, tmp30, tmp31] = items14;
      function onWindowHeightChange() {
        _undefined2(_undefined.get().position);
      }
      const items15 = [tmp30, tmp31];
      onWindowHeightChange.__closure = items15;
      onWindowHeightChange.__workletHash = 2843925742829;
      onWindowHeightChange.__initData = tmp29;
      return { setLaunchPadShown, setLaunchPadPosition, setLaunchPadPullTabTranslation, setLaunchPadPullTabPosition, setLaunchPadPullTabScale, setLaunchPadPullTabMinimized, onWindowHeightChange };
    }, items)
  };
};