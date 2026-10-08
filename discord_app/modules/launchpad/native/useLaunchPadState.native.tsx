// discord_app/modules/launchpad/native/useLaunchPadState.native.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import useSafeAreaInsetsSharedValue from "../../safe_area/useSafeAreaInsetsSharedValue.native.tsx";
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import useWindowDimensionsSharedValue from "../../screen/useWindowDimensionsSharedValue.native.tsx";
import LaunchPadPullTabCache2 from "LaunchPadPullTabCache.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const LaunchPadConstants = fn(11258);
({ LAUNCH_PAD_PULL_TAB_MAX_POSITION: closure_4, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: hasOwnProperty } =
  LaunchPadConstants);
let closure_6 = {
  active: false,
  initialLaunchPadPosition: 0,
  initialPullTabPosition: 0,
  initialTouchX: 0,
  initialTouchY: 0,
  positionOffsetX: 0,
  positionOffsetY: 0,
  startTime: -1,
  requiresPop: false,
  startShown: false,
};
let __closure = { position: null, scale: 1, offset: 0, minimized: false };
const LaunchPadPullTabCache = fn(17694);
__closure.position = LaunchPadPullTabCache.getLaunchPadPullTabPositionCached();
const __initData = {
  code: "function setLaunchPadShown_useLaunchPadStateNativeTsx1(shown){const{launchPadShown}=this.__closure;launchPadShown.set(shown);}",
};
const __initData2 = {
  code: "function setLaunchPadPosition_useLaunchPadStateNativeTsx2(value){const{launchPadSharedState}=this.__closure;launchPadSharedState.set(Math.max(Math.min(value,1),0));}",
};
const __initData3 = {
  code: "function setLaunchPadPullTabBoundedPosition_useLaunchPadStateNativeTsx3(positionY){const{getWindowDimensionsWorklet,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_MAX_POSITION,getSafeAreaInsetsWorklet,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET,updateSharedValueIfChanged,runOnJS,persistLaunchPadPullTabPosition}=this.__closure;const positionYMax=getWindowDimensionsWorklet().height-launchPadPullTabState.get().offset-LAUNCH_PAD_PULL_TAB_MAX_POSITION;const positionYMin=getSafeAreaInsetsWorklet().top+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET;const position=Math.max(Math.min(positionY,positionYMax),positionYMin);updateSharedValueIfChanged(launchPadPullTabState,{position:position});runOnJS(persistLaunchPadPullTabPosition)(position);}",
};
const __initData4 = {
  code: "function setLaunchPadPullTabTranslation_useLaunchPadStateNativeTsx4(translationY){const{gestureState,setLaunchPadPullTabBoundedPosition}=this.__closure;const positionY_0=gestureState.get().initialPullTabPosition+translationY;setLaunchPadPullTabBoundedPosition(positionY_0);}",
};
const __initData5 = {
  code: "function setLaunchPadPullTabPosition_useLaunchPadStateNativeTsx5(position_0,offset){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{position:position_0,offset:offset});}",
};
const __initData6 = {
  code: "function setLaunchPadPullTabScale_useLaunchPadStateNativeTsx6(scale){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{scale:scale});}",
};
const __initData7 = {
  code: "function setLaunchPadPullTabMinimized_useLaunchPadStateNativeTsx7(minimized){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{minimized:minimized});}",
};
const __initData8 = {
  code: "function onWindowHeightChange_useLaunchPadStateNativeTsx8(){const{launchPadPullTabState,setLaunchPadPullTabBoundedPosition}=this.__closure;const positionY_1=launchPadPullTabState.get().position;setLaunchPadPullTabBoundedPosition(positionY_1);}",
};
let closure_16 = {
  code: "function setLaunchPadShown_useLaunchPadStateNativeTsx9(shown){const{launchPadShown}=this.__closure;launchPadShown.set(shown);}",
};
let closure_17 = {
  code: "function setLaunchPadPosition_useLaunchPadStateNativeTsx10(value){const{launchPadSharedState}=this.__closure;launchPadSharedState.set(Math.max(Math.min(value,1),0));}",
};
let closure_18 = {
  code: "function setLaunchPadPullTabBoundedPosition_useLaunchPadStateNativeTsx11(positionY){const{getWindowDimensionsWorklet,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_MAX_POSITION,getSafeAreaInsetsWorklet,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET,updateSharedValueIfChanged,runOnJS,persistLaunchPadPullTabPosition}=this.__closure;const positionYMax=getWindowDimensionsWorklet().height-launchPadPullTabState.get().offset-LAUNCH_PAD_PULL_TAB_MAX_POSITION;const positionYMin=getSafeAreaInsetsWorklet().top+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET;const position=Math.max(Math.min(positionY,positionYMax),positionYMin);updateSharedValueIfChanged(launchPadPullTabState,{position:position});runOnJS(persistLaunchPadPullTabPosition)(position);}",
};
let closure_19 = {
  code: "function setLaunchPadPullTabTranslation_useLaunchPadStateNativeTsx12(translationY){const{gestureState,setLaunchPadPullTabBoundedPosition}=this.__closure;const positionY_0=gestureState.get().initialPullTabPosition+translationY;setLaunchPadPullTabBoundedPosition(positionY_0);}",
};
let closure_20 = {
  code: "function setLaunchPadPullTabPosition_useLaunchPadStateNativeTsx13(position_0,offset){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{position:position_0,offset:offset});}",
};
let closure_21 = {
  code: "function setLaunchPadPullTabScale_useLaunchPadStateNativeTsx14(scale){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{scale:scale});}",
};
let closure_22 = {
  code: "function setLaunchPadPullTabMinimized_useLaunchPadStateNativeTsx15(minimized){const{updateSharedValueIfChanged,launchPadPullTabState}=this.__closure;updateSharedValueIfChanged(launchPadPullTabState,{minimized:minimized});}",
};
let closure_23 = {
  code: "function onWindowHeightChange_useLaunchPadStateNativeTsx16(){const{launchPadPullTabState,setLaunchPadPullTabBoundedPosition}=this.__closure;const positionY_1=launchPadPullTabState.get().position;setLaunchPadPullTabBoundedPosition(positionY_1);}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadState.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useLaunchPadState() {
      let obj = sharedValue(sharedValue2[4]);
      const cResult = obj.c(32);
      sharedValue = sharedValue(sharedValue2[5]).useSharedValue(closure_6);
      let obj2 = sharedValue(sharedValue2[5]);
      const sharedValue1 = sharedValue(sharedValue2[5]).useSharedValue(obj);
      const obj3 = sharedValue(sharedValue2[5]);
      sharedValue2 = sharedValue(sharedValue2[5]).useSharedValue(0);
      const obj4 = sharedValue(sharedValue2[5]);
      const sharedValue3 = sharedValue(sharedValue2[5]).useSharedValue(false);
      if (cResult[0] !== sharedValue3) {
        function setLaunchPadShown(arg0) {
          const result = sharedValue3.set(arg0);
        }
        const obj6 = { launchPadShown: sharedValue3 };
        setLaunchPadShown.__closure = obj6;
        setLaunchPadShown.__workletHash = 12645438005571;
        setLaunchPadShown.__initData = __initData;
        cResult[0] = sharedValue3;
        cResult[1] = setLaunchPadShown;
        let tmp8 = setLaunchPadShown;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== sharedValue2) {
        function setLaunchPadPosition(arg0) {
          const result = sharedValue2.set(Math.max(Math.min(arg0, 1), 0));
        }
        const obj7 = { launchPadSharedState: sharedValue2 };
        setLaunchPadPosition.__closure = obj7;
        setLaunchPadPosition.__workletHash = 6880435508235;
        setLaunchPadPosition.__initData = __initData2;
        cResult[2] = sharedValue2;
        cResult[3] = setLaunchPadPosition;
        let tmp10 = setLaunchPadPosition;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== sharedValue1) {
        function setLaunchPadPullTabBoundedPosition(arg0) {
          const diff =
            useWindowDimensionsSharedValue.getWindowDimensionsWorklet().height -
            sharedValue1.get().offset -
            LAUNCH_PAD_PULL_TAB_MAX_POSITION;
          const sum = useSafeAreaInsetsSharedValue.getSafeAreaInsetsWorklet().top + LAUNCH_PAD_PULL_TAB_SCALE_OFFSET;
          const bound = Math.max(Math.min(arg0, diff), sum);
          updateSharedValueIfChangedDefault(sharedValue1, { position: bound });
          ReanimatedRexport.runOnJS(LaunchPadPullTabCache2.persistLaunchPadPullTabPosition)(bound);
        }
        const obj8 = {
          getWindowDimensionsWorklet: tmp(tmp2[6]).getWindowDimensionsWorklet,
          launchPadPullTabState: sharedValue1,
          LAUNCH_PAD_PULL_TAB_MAX_POSITION,
          getSafeAreaInsetsWorklet: tmp(tmp2[7]).getSafeAreaInsetsWorklet,
          LAUNCH_PAD_PULL_TAB_SCALE_OFFSET,
          updateSharedValueIfChanged: sharedValue1(tmp2[8]),
          runOnJS: tmp(tmp2[5]).runOnJS,
          persistLaunchPadPullTabPosition: tmp(tmp2[2]).persistLaunchPadPullTabPosition,
        };
        setLaunchPadPullTabBoundedPosition.__closure = obj8;
        setLaunchPadPullTabBoundedPosition.__workletHash = 1905227275114;
        setLaunchPadPullTabBoundedPosition.__initData = __initData3;
        cResult[4] = sharedValue1;
        cResult[5] = setLaunchPadPullTabBoundedPosition;
        let tmp12 = setLaunchPadPullTabBoundedPosition;
      } else {
        tmp12 = cResult[5];
      }
      LAUNCH_PAD_PULL_TAB_MAX_POSITION = tmp12;
      if (cResult[6] === sharedValue) {
        if (cResult[7] === tmp12) {
          let tmp17 = cResult[8];
        }
        if (cResult[9] !== sharedValue1) {
          function setLaunchPadPullTabPosition(position, offset) {
            updateSharedValueIfChangedDefault(sharedValue1, { position, offset });
          }
          const obj9 = { updateSharedValueIfChanged: sharedValue1(tmp2[8]), launchPadPullTabState: sharedValue1 };
          setLaunchPadPullTabPosition.__closure = obj9;
          setLaunchPadPullTabPosition.__workletHash = 6850185694143;
          setLaunchPadPullTabPosition.__initData = __initData5;
          cResult[9] = sharedValue1;
          cResult[10] = setLaunchPadPullTabPosition;
          let tmp18 = setLaunchPadPullTabPosition;
        } else {
          tmp18 = cResult[10];
        }
        if (cResult[11] !== sharedValue1) {
          function setLaunchPadPullTabScale(scale) {
            updateSharedValueIfChangedDefault(sharedValue1, { scale });
          }
          const obj10 = { updateSharedValueIfChanged: sharedValue1(tmp2[8]), launchPadPullTabState: sharedValue1 };
          setLaunchPadPullTabScale.__closure = obj10;
          setLaunchPadPullTabScale.__workletHash = 4772968963371;
          setLaunchPadPullTabScale.__initData = __initData6;
          cResult[11] = sharedValue1;
          cResult[12] = setLaunchPadPullTabScale;
          let tmp21 = setLaunchPadPullTabScale;
        } else {
          tmp21 = cResult[12];
        }
        if (cResult[13] !== sharedValue1) {
          function setLaunchPadPullTabMinimized(minimized) {
            updateSharedValueIfChangedDefault(sharedValue1, { minimized });
          }
          const obj11 = { updateSharedValueIfChanged: sharedValue1(tmp2[8]), launchPadPullTabState: sharedValue1 };
          setLaunchPadPullTabMinimized.__closure = obj11;
          setLaunchPadPullTabMinimized.__workletHash = 2379539261994;
          setLaunchPadPullTabMinimized.__initData = __initData7;
          cResult[13] = sharedValue1;
          cResult[14] = setLaunchPadPullTabMinimized;
          let tmp24 = setLaunchPadPullTabMinimized;
        } else {
          tmp24 = cResult[14];
        }
        if (cResult[15] === sharedValue1) {
          if (cResult[16] === tmp12) {
            let tmp27 = cResult[17];
          }
          if (cResult[18] === tmp27) {
            if (cResult[19] === tmp10) {
              if (cResult[20] === tmp24) {
                if (cResult[21] === tmp18) {
                  if (cResult[22] === tmp21) {
                    if (cResult[23] === tmp17) {
                      if (cResult[24] === tmp8) {
                        let tmp29 = cResult[25];
                      }
                      if (cResult[26] === sharedValue) {
                        if (cResult[27] === sharedValue1) {
                          if (cResult[28] === sharedValue2) {
                            if (cResult[29] === sharedValue3) {
                              if (cResult[30] === tmp29) {
                                let tmp30 = cResult[31];
                              }
                              return tmp30;
                            }
                          }
                        }
                      }
                      const obj12 = {
                        launchPadSharedState: sharedValue2,
                        launchPadPullTabState: sharedValue1,
                        launchPadShown: sharedValue3,
                        gestureState: sharedValue,
                        updaters: tmp29,
                      };
                      cResult[26] = sharedValue;
                      cResult[27] = sharedValue1;
                      cResult[28] = sharedValue2;
                      cResult[29] = sharedValue3;
                      cResult[30] = tmp29;
                      cResult[31] = obj12;
                      tmp30 = obj12;
                    }
                  }
                }
              }
            }
          }
          const obj13 = {
            setLaunchPadShown: tmp8,
            setLaunchPadPosition: tmp10,
            setLaunchPadPullTabTranslation: tmp17,
            setLaunchPadPullTabPosition: tmp18,
            setLaunchPadPullTabScale: tmp21,
            setLaunchPadPullTabMinimized: tmp24,
            onWindowHeightChange: tmp27,
          };
          cResult[18] = tmp27;
          cResult[19] = tmp10;
          cResult[20] = tmp24;
          cResult[21] = tmp18;
          cResult[22] = tmp21;
          cResult[23] = tmp17;
          cResult[24] = tmp8;
          cResult[25] = obj13;
          tmp29 = obj13;
        }
        function onWindowHeightChange() {
          closure_4(sharedValue1.get().position);
        }
        const obj14 = { launchPadPullTabState: sharedValue1, setLaunchPadPullTabBoundedPosition: tmp12 };
        onWindowHeightChange.__closure = obj14;
        onWindowHeightChange.__workletHash = 16093376747956;
        onWindowHeightChange.__initData = __initData8;
        cResult[15] = sharedValue1;
        cResult[16] = tmp12;
        cResult[17] = onWindowHeightChange;
        tmp27 = onWindowHeightChange;
      }
      function setLaunchPadPullTabTranslation(arg0) {
        closure_4(sharedValue.get().initialPullTabPosition + arg0);
      }
      setLaunchPadPullTabTranslation.__closure = {
        gestureState: sharedValue,
        setLaunchPadPullTabBoundedPosition: tmp12,
      };
      setLaunchPadPullTabTranslation.__workletHash = 9220255796568;
      setLaunchPadPullTabTranslation.__initData = __initData4;
      cResult[6] = sharedValue;
      cResult[7] = tmp12;
      cResult[8] = setLaunchPadPullTabTranslation;
      tmp17 = setLaunchPadPullTabTranslation;
      const obj5 = sharedValue(sharedValue2[5]);
    }
  : function useLaunchPadState() {
      let obj = sharedValue(sharedValue2[5]);
      sharedValue = obj.useSharedValue(closure_6);
      const sharedValue1 = sharedValue(sharedValue2[5]).useSharedValue(obj);
      let obj2 = sharedValue(sharedValue2[5]);
      sharedValue2 = sharedValue(sharedValue2[5]).useSharedValue(0);
      let obj3 = sharedValue(sharedValue2[5]);
      const sharedValue3 = sharedValue(sharedValue2[5]).useSharedValue(false);
      const items = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
      let obj4 = sharedValue(sharedValue2[5]);
      return {
        launchPadSharedState: sharedValue2,
        launchPadPullTabState: sharedValue1,
        launchPadShown: sharedValue3,
        gestureState: sharedValue,
        updaters: sharedValue3.useMemo(() => {
          function setLaunchPadShown(arg0) {
            const result = sharedValue3.set(arg0);
          }
          __closure = { launchPadShown: sharedValue3 };
          setLaunchPadShown.__closure = __closure;
          setLaunchPadShown.__workletHash = 2141751600715;
          setLaunchPadShown.__initData = __initData;
          function setLaunchPadPosition(arg0) {
            const result = sharedValue2.set(Math.max(Math.min(arg0, 1), 0));
          }
          setLaunchPadPosition.__closure = { launchPadSharedState: sharedValue2 };
          setLaunchPadPosition.__workletHash = 3036375090904;
          setLaunchPadPosition.__initData = __initData2;
          function setLaunchPadPullTabBoundedPosition(arg0) {
            const diff =
              sharedValue(sharedValue2[6]).getWindowDimensionsWorklet().height -
              closure_1_1.get().offset -
              LAUNCH_PAD_PULL_TAB_MAX_POSITION;
            const obj = sharedValue(sharedValue2[6]);
            const sum = sharedValue(sharedValue2[7]).getSafeAreaInsetsWorklet().top + LAUNCH_PAD_PULL_TAB_SCALE_OFFSET;
            const bound = Math.max(Math.min(arg0, diff), sum);
            sharedValue1(sharedValue2[8])(closure_1_1, { position: bound });
            const obj2 = sharedValue(sharedValue2[7]);
            sharedValue(sharedValue2[5]).runOnJS(sharedValue(sharedValue2[2]).persistLaunchPadPullTabPosition)(bound);
          }
          setLaunchPadPullTabBoundedPosition.__closure = {
            getWindowDimensionsWorklet: sharedValue(sharedValue2[6]).getWindowDimensionsWorklet,
            launchPadPullTabState: sharedValue1,
            LAUNCH_PAD_PULL_TAB_MAX_POSITION,
            getSafeAreaInsetsWorklet: sharedValue(sharedValue2[7]).getSafeAreaInsetsWorklet,
            LAUNCH_PAD_PULL_TAB_SCALE_OFFSET,
            updateSharedValueIfChanged: sharedValue1(sharedValue2[8]),
            runOnJS: sharedValue(sharedValue2[5]).runOnJS,
            persistLaunchPadPullTabPosition: sharedValue(sharedValue2[2]).persistLaunchPadPullTabPosition,
          };
          setLaunchPadPullTabBoundedPosition.__workletHash = 1408606511545;
          setLaunchPadPullTabBoundedPosition.__initData = __initData3;
          const obj4 = {
            setLaunchPadShown,
            setLaunchPadPosition,
            setLaunchPadPullTabTranslation: null,
            setLaunchPadPullTabPosition: null,
            setLaunchPadPullTabScale: null,
            setLaunchPadPullTabMinimized: null,
            onWindowHeightChange: null,
          };
          function setLaunchPadPullTabTranslation(arg0) {
            setLaunchPadPullTabBoundedPosition(sharedValue.get().initialPullTabPosition + arg0);
          }
          setLaunchPadPullTabTranslation.__closure = {
            gestureState: setLaunchPadPullTabBoundedPosition,
            setLaunchPadPullTabBoundedPosition,
          };
          setLaunchPadPullTabTranslation.__workletHash = 10179367798639;
          setLaunchPadPullTabTranslation.__initData = __initData4;
          obj4.setLaunchPadPullTabTranslation = setLaunchPadPullTabTranslation;
          function setLaunchPadPullTabPosition(position, offset) {
            sharedValue1(sharedValue2[8])(closure_1_1, { position, offset });
          }
          let obj2 = { launchPadSharedState: sharedValue2 };
          const obj3 = {
            getWindowDimensionsWorklet: sharedValue(sharedValue2[6]).getWindowDimensionsWorklet,
            launchPadPullTabState: sharedValue1,
            LAUNCH_PAD_PULL_TAB_MAX_POSITION,
            getSafeAreaInsetsWorklet: sharedValue(sharedValue2[7]).getSafeAreaInsetsWorklet,
            LAUNCH_PAD_PULL_TAB_SCALE_OFFSET,
            updateSharedValueIfChanged: sharedValue1(sharedValue2[8]),
            runOnJS: sharedValue(sharedValue2[5]).runOnJS,
            persistLaunchPadPullTabPosition: sharedValue(sharedValue2[2]).persistLaunchPadPullTabPosition,
          };
          const obj5 = { gestureState: setLaunchPadPullTabBoundedPosition, setLaunchPadPullTabBoundedPosition };
          setLaunchPadPullTabPosition.__closure = {
            updateSharedValueIfChanged: sharedValue1(sharedValue2[8]),
            launchPadPullTabState: sharedValue1,
          };
          setLaunchPadPullTabPosition.__workletHash = 10672582165192;
          setLaunchPadPullTabPosition.__initData = __initData5;
          obj4.setLaunchPadPullTabPosition = setLaunchPadPullTabPosition;
          function setLaunchPadPullTabScale(scale) {
            sharedValue1(sharedValue2[8])(closure_1_1, { scale });
          }
          const obj6 = {
            updateSharedValueIfChanged: sharedValue1(sharedValue2[8]),
            launchPadPullTabState: sharedValue1,
          };
          setLaunchPadPullTabScale.__closure = {
            updateSharedValueIfChanged: sharedValue1(sharedValue2[8]),
            launchPadPullTabState: sharedValue1,
          };
          setLaunchPadPullTabScale.__workletHash = 11683465594520;
          setLaunchPadPullTabScale.__initData = __initData6;
          obj4.setLaunchPadPullTabScale = setLaunchPadPullTabScale;
          function setLaunchPadPullTabMinimized(minimized) {
            sharedValue1(sharedValue2[8])(closure_1_1, { minimized });
          }
          const obj7 = {
            updateSharedValueIfChanged: sharedValue1(sharedValue2[8]),
            launchPadPullTabState: sharedValue1,
          };
          setLaunchPadPullTabMinimized.__closure = {
            updateSharedValueIfChanged: sharedValue1(sharedValue2[8]),
            launchPadPullTabState: sharedValue1,
          };
          setLaunchPadPullTabMinimized.__workletHash = 13110719005625;
          setLaunchPadPullTabMinimized.__initData = __initData7;
          obj4.setLaunchPadPullTabMinimized = setLaunchPadPullTabMinimized;
          function onWindowHeightChange() {
            setLaunchPadPullTabBoundedPosition(sharedValue1.get().position);
          }
          onWindowHeightChange.__closure = { launchPadPullTabState: sharedValue1, setLaunchPadPullTabBoundedPosition };
          onWindowHeightChange.__workletHash = 16524574498091;
          onWindowHeightChange.__initData = __initData8;
          obj4.onWindowHeightChange = onWindowHeightChange;
          return obj4;
        }, items),
      };
    };
