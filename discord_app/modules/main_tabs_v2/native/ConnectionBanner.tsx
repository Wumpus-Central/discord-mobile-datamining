// discord_app/modules/main_tabs_v2/native/ConnectionBanner.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../_runtime/metro/00683__.js";
import Constants from "../../../Constants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import _modDef6052 from "../../../../_runtime/metro/06052__.js";
import ConnectivityIndicatorStateStore2 from "../../connectivity/native/ConnectivityIndicatorStateStore.tsx";
import ConnectionIndicatorExperimentDefault from "ConnectionIndicatorExperiment.tsx";
import ConnectionUnknownIcon2 from "../../../design/components/Icon/native/redesign/generated/ConnectionUnknownIcon.tsx";
import ConnectionFineIcon2 from "../../../design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import YouBarConstants from "you_bar/YouBarConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;
const ConnectivityIndicatorStateStore = ConnectivityIndicatorStateStore2;
let _require, dependencyMap, importDefault, set;

let closure_12;
let hasOwnProperty;
let items;
let map1;
let metroRequire;
let obj2;
let rect;
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const constants = ConnectivityIndicatorStateStore2.ConnectivityIndicatorState;
const CONNECTION_BANNER_HEIGHT = YouBarConstants.CONNECTION_BANNER_HEIGHT;
const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const colors = ["transparent", "black", "black", "transparent"];
const locations = [0, 0.25, 0.75, 1];
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const locations2 = [0, 0.4, 0.75, 1];
const start2 = { x: 0, y: 0 };
const end2 = { x: 0, y: 1 };
let obj = {
  container: { position: "absolute", left: 0, right: 0, bottom: 0 },
  glow: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 },
  glowMaskGradient: { flex: 1 },
  content: rect,
  leadingSlot: { width: 16, height: 16, alignItems: "center", justifyContent: "center" },
  spinner: obj2,
};
rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: CONNECTION_BANNER_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
};
obj2 = { transform: items };
items = [{ scale: 0.8 }];
let closure_21 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (state) => {
      const obj = react2;
      const cResult = obj.c(12);
      state = state.state;
      const tmp4 = closure_21();
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.colors.INTERACTIVE_ICON_DEFAULT);
      if (constants.WAITING_FOR_NETWORK === state) {
        if (cResult[0] === token) {
          let tmp24;
          if (cResult[1] === tmp4.spinner) {
            tmp24 = cResult[2];
          }
          if (cResult[3] === tmp4.leadingSlot) {
            let tmp28;
            if (cResult[4] === tmp24) {
              tmp28 = cResult[5];
            }
            return tmp28;
          }
          const obj3 = { style: tmp4.leadingSlot, children: tmp24 };
          const tmp31 = closure_12(metroRequire, obj3);
          cResult[3] = tmp4.leadingSlot;
          cResult[4] = tmp24;
          cResult[5] = tmp31;
          tmp28 = tmp31;
        }
        const obj4 = { size: "small", color: token, style: tmp4.spinner };
        const tmp27 = closure_12(hasOwnProperty, obj4);
        cResult[0] = token;
        cResult[1] = tmp4.spinner;
        cResult[2] = tmp27;
        tmp24 = tmp27;
      } else if (constants.NO_CONNECTION === state) {
        let tmp17;
        let tmp20;
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { size: "xs", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
          const ConnectionUnknownIcon = ConnectionUnknownIcon2.ConnectionUnknownIcon;
          const tmp19 = closure_12(ConnectionUnknownIcon, obj5);
          cResult[6] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[6];
        }
        if (cResult[7] !== tmp4.leadingSlot) {
          const obj6 = { style: tmp4.leadingSlot, children: tmp17 };
          const tmp23 = closure_12(metroRequire, obj6);
          cResult[7] = tmp4.leadingSlot;
          cResult[8] = tmp23;
          tmp20 = tmp23;
        } else {
          tmp20 = cResult[8];
        }
        return tmp20;
      } else if (constants.BACK_ONLINE === state) {
        let tmp9;
        let tmp12;
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
          const ConnectionFineIcon = ConnectionFineIcon2.ConnectionFineIcon;
          const tmp11 = closure_12(ConnectionFineIcon, obj7);
          cResult[9] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[9];
        }
        if (cResult[10] !== tmp4.leadingSlot) {
          const obj8 = { style: tmp4.leadingSlot, children: tmp9 };
          const tmp15 = closure_12(metroRequire, obj8);
          cResult[10] = tmp4.leadingSlot;
          cResult[11] = tmp15;
          tmp12 = tmp15;
        } else {
          tmp12 = cResult[11];
        }
        return tmp12;
      }
    }
  : (state) => {
      let ConnectionFineIcon;
      let ConnectionUnknownIcon;
      let obj3;
      let obj5;
      let obj6;
      state = state.state;
      const tmp = closure_21();
      useToken;
      if (constants.WAITING_FOR_NETWORK === state) {
        const obj2 = { style: tmp.leadingSlot, children: closure_12(hasOwnProperty, obj3) };
        obj3 = { size: "small", color: tmp6, style: tmp.spinner };
        return closure_12(metroRequire, obj2);
      } else if (constants.NO_CONNECTION === state) {
        const obj4 = { style: tmp.leadingSlot, children: closure_12(ConnectionUnknownIcon, obj5) };
        obj5 = { size: "xs", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
        ConnectionUnknownIcon = ConnectionUnknownIcon2.ConnectionUnknownIcon;
        return closure_12(metroRequire, obj4);
      } else if (constants.BACK_ONLINE === state) {
        const obj = { style: tmp.leadingSlot, children: closure_12(ConnectionFineIcon, obj6) };
        obj6 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
        ConnectionFineIcon = ConnectionFineIcon2.ConnectionFineIcon;
        return closure_12(metroRequire, obj);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (state) => {
      let items;
      let tmp10;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(11);
      state = state.state;
      const tmp4 = closure_21();
      const content = tmp4.content;
      if (cResult[0] !== state) {
        const obj2 = { state };
        const tmp8 = closure_12(closure_22, obj2);
        cResult[0] = state;
        cResult[1] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      let str = "text-muted";
      if (state === constants.BACK_ONLINE) {
        str = "text-feedback-positive";
      }
      if (cResult[2] !== state) {
        let stringResult;
        if (constants.WAITING_FOR_NETWORK === state) {
          const intl2 = intl4.intl;
          stringResult = intl2.string(intl4.t.XKk1gp);
        } else if (constants.NO_CONNECTION === state) {
          const intl = intl4.intl;
          stringResult = intl.string(intl4.t.zPerw8);
        } else if (constants.BACK_ONLINE === state) {
          const intl3 = intl4.intl;
          stringResult = intl3.string(intl4.t.j8lYE2);
        }
        cResult[2] = state;
        cResult[3] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === str) {
        let tmp12;
        if (cResult[5] === tmp10) {
          tmp12 = cResult[6];
        }
        if (cResult[7] === tmp4.content) {
          if (cResult[8] === tmp5) {
            let tmp14;
            if (cResult[9] === tmp12) {
              tmp14 = cResult[10];
            }
            return tmp14;
          }
        }
        const obj3 = { style: content, children: items };
        items = [tmp5, tmp12];
        const tmp17 = map1(metroRequire, obj3);
        cResult[7] = tmp4.content;
        cResult[8] = tmp5;
        cResult[9] = tmp12;
        cResult[10] = tmp17;
        tmp14 = tmp17;
      }
      const tmp13 = closure_12(Text_Text.Text, {
        variant: "text-sm/medium",
        color: str,
        maxFontSizeMultiplier: 1.5,
        children: tmp10,
      });
      cResult[4] = str;
      cResult[5] = tmp10;
      cResult[6] = tmp13;
      tmp12 = tmp13;
    }
  : (state) => {
      let items;
      let stringResult;
      state = state.state;
      const obj = { style: closure_21().content, children: items };
      items = [closure_12(closure_22, { state })];
      let str = "text-muted";
      const Text = Text_Text.Text;
      if (state === constants.BACK_ONLINE) {
        str = "text-feedback-positive";
      }
      const obj2 = { variant: "text-sm/medium", color: str, maxFontSizeMultiplier: 1.5, children: stringResult };
      if (constants.WAITING_FOR_NETWORK === state) {
        const intl2 = intl4.intl;
        stringResult = intl2.string(intl4.t.XKk1gp);
      } else if (constants.NO_CONNECTION === state) {
        const intl = intl4.intl;
        stringResult = intl.string(intl4.t.zPerw8);
      } else if (constants.BACK_ONLINE === state) {
        const intl3 = intl4.intl;
        stringResult = intl3.string(intl4.t.j8lYE2);
      }
      items[1] = closure_12(Text, obj2);
      return map1(metroRequire, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (progress) => {
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(27);
      progress = progress.progress;
      const tmp3 = closure_21();
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.colors.ICON_FEEDBACK_POSITIVE);
      if (cResult[0] !== token) {
        const obj3 = _modDef683(token);
        const alphaResult = obj3.alpha(0);
        const cssResult = alphaResult.css();
        const alphaResult1 = obj3.alpha(0.1);
        const cssResult1 = alphaResult1.css();
        const alphaResult2 = obj3.alpha(0.28);
        const cssResult2 = alphaResult2.css();
        const alphaResult3 = obj3.alpha(0.55);
        const cssResult3 = alphaResult3.css();
        cResult[0] = token;
        cResult[1] = cssResult;
        cResult[2] = cssResult1;
        cResult[3] = cssResult2;
        cResult[4] = cssResult3;
        tmp9 = cssResult3;
        tmp8 = cssResult2;
        tmp7 = cssResult1;
        tmp6 = cssResult;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      if (cResult[5] === tmp6) {
        if (cResult[6] === tmp7) {
          if (cResult[7] === tmp8) {
            let tmp14;
            let tmp15;
            if (cResult[8] === tmp9) {
              tmp14 = cResult[9];
            }
            if (cResult[10] !== progress) {
              const obj4 = { opacity: progress };
              cResult[10] = progress;
              cResult[11] = obj4;
              tmp15 = obj4;
            } else {
              tmp15 = cResult[11];
            }
            if (cResult[12] === tmp3.glow) {
              let tmp16;
              let tmp17;
              if (cResult[13] === tmp15) {
                tmp16 = cResult[14];
              }
              if (cResult[15] !== tmp3.glowMaskGradient) {
                const obj5 = { style: tmp3.glowMaskGradient, colors, locations, start, end };
                const tmp23 = closure_12(LinearGradientDefault, obj5);
                cResult[15] = tmp3.glowMaskGradient;
                cResult[16] = tmp23;
                tmp17 = tmp23;
              } else {
                tmp17 = cResult[16];
              }
              if (cResult[17] === tmp14) {
                let tmp24;
                if (cResult[18] === tmp3.glowMaskGradient) {
                  tmp24 = cResult[19];
                }
                if (cResult[20] === tmp3.glow) {
                  if (cResult[21] === tmp17) {
                    let tmp30;
                    if (cResult[22] === tmp24) {
                      tmp30 = cResult[23];
                    }
                    if (cResult[24] === tmp30) {
                      let tmp33;
                      if (cResult[25] === tmp16) {
                        tmp33 = cResult[26];
                      }
                      return tmp33;
                    }
                    const obj6 = { style: tmp16, pointerEvents: "none", children: tmp30 };
                    const tmp35 = closure_12(ReanimatedRexportDefault.View, obj6);
                    cResult[24] = tmp30;
                    cResult[25] = tmp16;
                    cResult[26] = tmp35;
                    tmp33 = tmp35;
                  }
                }
                const obj7 = { style: tmp3.glow, maskElement: tmp17, children: tmp24 };
                const tmp32 = closure_12(_modDef6052, obj7);
                cResult[20] = tmp3.glow;
                cResult[21] = tmp17;
                cResult[22] = tmp24;
                cResult[23] = tmp32;
                tmp30 = tmp32;
              }
              const obj8 = {
                style: tmp3.glowMaskGradient,
                colors: tmp14,
                locations: locations2,
                start: start2,
                end: end2,
              };
              const tmp29 = closure_12(LinearGradientDefault, obj8);
              cResult[17] = tmp14;
              cResult[18] = tmp3.glowMaskGradient;
              cResult[19] = tmp29;
              tmp24 = tmp29;
            }
            const items = [tmp3.glow, tmp15];
            cResult[12] = tmp3.glow;
            cResult[13] = tmp15;
            cResult[14] = items;
            tmp16 = items;
          }
        }
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9];
      cResult[5] = tmp6;
      cResult[6] = tmp7;
      cResult[7] = tmp8;
      cResult[8] = tmp9;
      cResult[9] = items1;
      tmp14 = items1;
    }
  : (progress) => {
      let items1;
      let obj3;
      let obj4;
      let obj5;
      let tmp4;
      let token;
      progress = progress.progress;
      const tmp = closure_21();
      let obj = token(4580);
      token = obj.useToken(nativeDefault.colors.ICON_FEEDBACK_POSITIVE);
      let items = [token];
      const memo = react.useMemo(() => {
        const obj = _modDef683(token);
        const items = [, , ,];
        const alphaResult = obj.alpha(0);
        items[0] = alphaResult.css();
        const alphaResult1 = obj.alpha(0.1);
        items[1] = alphaResult1.css();
        const alphaResult2 = obj.alpha(0.28);
        items[2] = alphaResult2.css();
        const alphaResult3 = obj.alpha(0.55);
        items[3] = alphaResult3.css();
        return items;
      }, items);
      const obj2 = { style: items1, pointerEvents: "none", children: closure_12(tmp4, obj3) };
      items1 = [tmp.glow, { opacity: progress }];
      const View = ReanimatedRexportDefault.View;
      obj3 = {
        style: tmp.glow,
        maskElement: closure_12(LinearGradientDefault, obj4),
        children: closure_12(LinearGradientDefault, obj5),
      };
      obj4 = { style: tmp.glowMaskGradient, colors, locations, start, end };
      obj5 = { style: tmp.glowMaskGradient, colors: memo, locations: locations2, start: start2, end: end2 };
      tmp4 = _modDef6052;
      return closure_12(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let ref;
      let state;
      let tmp4;
      let tmp5;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(6);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConnectivityIndicatorStateStore];
        const fn = function s() {
          return state.getState();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      dependencyMap = react.useRef(null);
      if (cResult[2] === stateFromStores) {
        let tmp8;
        let tmp9;
        if (cResult[3] === arg0) {
          tmp8 = cResult[4];
          tmp9 = cResult[5];
        }
        const effect = react.useEffect(tmp8, tmp9);
      }
      class N {
        constructor() {
          const current = ref.current;
          ref.current = stateFromStores;
          if (null != current) {
            if (current === constants.HIDDEN) {
              if (stateFromStores !== constants.HIDDEN) {
                if (stateFromStores !== constants.BACK_ONLINE) {
                  let str = "hidden";
                  if (!closure_0) {
                    let str2 = "connecting";
                    if (stateFromStores === constants.NO_CONNECTION) {
                      str2 = "offline";
                    }
                    str = str2;
                  }
                  const obj2 = { connection_indicator_type: str };
                  const obj = AnalyticsUtilsDefault;
                  obj.track(AnalyticEvents.CONNECTION_INDICATOR_SHOWN, obj2);
                }
              }
            }
          }
        }
      }
      const items1 = [stateFromStores, arg0];
      cResult[2] = stateFromStores;
      cResult[3] = arg0;
      cResult[4] = N;
      cResult[5] = items1;
      tmp9 = items1;
      tmp8 = N;
    }
  : (arg0) => {
      let closure_0;
      let ref;
      let state;
      _require = arg0;
      let obj = require("get initialized");
      const items = [ConnectivityIndicatorStateStore];
      const stateFromStores = obj.useStateFromStores(items, () => state.getState());
      dependencyMap = react.useRef(null);
      const items1 = [stateFromStores, arg0];
      const effect = react.useEffect(() => {
        const current = ref.current;
        ref.current = stateFromStores;
        if (null != current) {
          if (current === constants.HIDDEN) {
            if (stateFromStores !== constants.HIDDEN) {
              if (stateFromStores !== constants.BACK_ONLINE) {
                let str = "hidden";
                if (!closure_0) {
                  let str2 = "connecting";
                  if (stateFromStores === constants.NO_CONNECTION) {
                    str2 = "offline";
                  }
                  str = str2;
                }
                const obj2 = { connection_indicator_type: str };
                const obj = AnalyticsUtilsDefault;
                obj.track(AnalyticEvents.CONNECTION_INDICATOR_SHOWN, obj2);
              }
            }
          }
        }
      }, items1);
    };
let closure_26 = {
  code: "function ConnectionBannerTsx1(finished){const{shouldShowBanner,runOnJS,setRenderState}=this.__closure;if(finished===true&&!shouldShowBanner){runOnJS(setRenderState)(null);}}",
};
const __initData = {
  code: "function ConnectionBannerTsx2(){const{progress,CONNECTION_BANNER_HEIGHT}=this.__closure;return{transform:[{translateY:(1-progress.get())*CONNECTION_BANNER_HEIGHT}],opacity:progress.get()};}",
};
let closure_28 = {
  code: "function ConnectionBannerTsx3(finished){const{shouldShowBanner,runOnJS,setRenderState}=this.__closure;if(finished===true&&!shouldShowBanner){runOnJS(setRenderState)(null);}}",
};
const __initData2 = {
  code: "function ConnectionBannerTsx4(){const{progress,CONNECTION_BANNER_HEIGHT}=this.__closure;return{transform:[{translateY:(1-progress.get())*CONNECTION_BANNER_HEIGHT}],opacity:progress.get()};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_1;
      let setRenderState;
      let sharedValue;
      let sharedValue1;
      let shouldShowBanner;
      let state;
      let tmp16;
      let tmp17;
      let tmp6;
      let tmp7;
      let tmp = _require;
      const tmp2 = sharedValue;
      let obj = require("react");
      const cResult = obj.c(25);
      const tmp4 = closure_21();
      const obj2 = require("useYouBarMargins");
      const youBarBottomMargin = obj2.useYouBarBottomMargin();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConnectivityIndicatorStateStore];
        let fn = function s() {
          return state.getState();
        };
        let num = 0;
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmpResult = tmp(tmp2[20]);
      const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      _require = tmp11;
      importDefault = tmp12;
      let tmp13 = null;
      if (stateFromStores !== constants.HIDDEN) {
        tmp13 = stateFromStores;
      }
      const tmpResult4 = tmp(tmp2[19]);
      sharedValue = tmpResult4.useSharedValue(0);
      [tmp16, tmp17] = sharedValue1.useState(tmp13);
      _slicedToArray(sharedValue1.useState(tmp13), 2);
      _slicedToArray = tmp17;
      const tmpResult5 = tmp(tmp2[19]);
      sharedValue1 = tmpResult5.useSharedValue(0);
      const tmp19 = null != tmp13 && tmp16 !== tmp13;
      if (tmp19) {
        tmp17(tmp13);
      }
      if (cResult[2] === sharedValue1) {
        let tmp21;
        let tmp22;
        if ((cResult[3] === stateFromStores) !== constants.HIDDEN) {
          tmp21 = cResult[4];
          tmp22 = cResult[5];
        }
        const effect = obj5.useEffect(tmp21, tmp22);
        if (cResult[6] === sharedValue) {
          let tmp24;
          let tmp25;
          let tmp31;
          if ((cResult[7] === stateFromStores) === constants.BACK_ONLINE) {
            tmp24 = cResult[8];
            tmp25 = cResult[9];
          }
          const effect1 = obj5.useEffect(tmp24, tmp25);
          const sum = youBarBottomMargin + CONNECTION_BANNER_HEIGHT;
          const tmpResult6 = tmp(tmp2[19]);
          class L {
            constructor() {
              let items;
              const obj = { transform: items, opacity: sharedValue1.get() };
              items = [{ translateY: (1 - sharedValue1.get()) * CONNECTION_BANNER_HEIGHT }];
              ({ translateY: (1 - sharedValue1.get()) * CONNECTION_BANNER_HEIGHT });
              return obj;
            }
          }
          const obj3 = { progress: sharedValue1, CONNECTION_BANNER_HEIGHT };
          L.__closure = obj3;
          L.__workletHash = 13973493587548;
          L.__initData = __initData;
          const animatedStyle = tmpResult6.useAnimatedStyle(L);
          if (cResult[10] !== sum) {
            const obj4 = { height: sum };
            cResult[10] = sum;
            class L {
              constructor() {
                let items;
                const obj = { transform: items, opacity: sharedValue1.get() };
                items = [{ translateY: (1 - sharedValue1.get()) * CONNECTION_BANNER_HEIGHT }];
                ({ translateY: (1 - sharedValue1.get()) * CONNECTION_BANNER_HEIGHT });
                return obj;
              }
            }
            tmp31 = obj4;
          } else {
            tmp31 = cResult[11];
          }
          if (cResult[12] === animatedStyle) {
            if (cResult[13] === tmp4.container) {
              let tmp32;
              if (cResult[14] === tmp31) {
                tmp32 = cResult[15];
              }
              if (cResult[16] === sharedValue) {
                let tmp33;
                let tmp37;
                if (cResult[17] === tmp16) {
                  tmp33 = cResult[18];
                }
                if (cResult[19] !== tmp16) {
                  let tmp38 = null;
                  if (null != tmp16) {
                    const obj6 = { state: tmp16 };
                    tmp38 = closure_12(closure_23, obj6);
                  }
                  cResult[19] = tmp16;
                  class L {
                    constructor() {
                      let items;
                      const obj = { transform: items, opacity: sharedValue1.get() };
                      items = [{ translateY: (1 - sharedValue1.get()) * CONNECTION_BANNER_HEIGHT }];
                      ({ translateY: (1 - sharedValue1.get()) * CONNECTION_BANNER_HEIGHT });
                      return obj;
                    }
                  }
                  tmp37 = tmp38;
                } else {
                  tmp37 = cResult[20];
                }
                if (cResult[21] === tmp32) {
                  if (cResult[22] === tmp33) {
                    let tmp41;
                    if (cResult[23] === tmp37) {
                      tmp41 = cResult[24];
                    }
                    return tmp41;
                  }
                }
                class L {
                  constructor() {
                    let items;
                    const obj = { transform: items, opacity: sharedValue1.get() };
                    items = [{ translateY: (1 - sharedValue1.get()) * CONNECTION_BANNER_HEIGHT }];
                    ({ translateY: (1 - sharedValue1.get()) * CONNECTION_BANNER_HEIGHT });
                    return obj;
                  }
                }
                tmp44[1] = tmp32;
                const items1 = [tmp33, tmp37];
                tmp44[2] = items1;
                const tmp45 = closure_13(require("ReanimatedRexport").View, tmp44);
                cResult[21] = tmp32;
                cResult[22] = tmp33;
                cResult[23] = tmp37;
                cResult[24] = tmp45;
                tmp41 = tmp45;
              }
              let tmp34 = null;
              if (tmp16 === constants.BACK_ONLINE) {
                const obj7 = { progress: sharedValue };
                tmp34 = closure_12(closure_24, obj7);
              }
              class L {
                constructor() {
                  let items;
                  const obj = { transform: items, opacity: sharedValue1.get() };
                  items = [{ translateY: (1 - sharedValue1.get()) * CONNECTION_BANNER_HEIGHT }];
                  ({ translateY: (1 - sharedValue1.get()) * CONNECTION_BANNER_HEIGHT });
                  return obj;
                }
              }
              cResult[17] = tmp16;
              cResult[18] = tmp34;
              tmp33 = tmp34;
            }
          }
          const items2 = [tmp4.container, tmp31, animatedStyle];
          cResult[12] = animatedStyle;
          cResult[13] = tmp4.container;
          cResult[14] = tmp31;
          cResult[15] = items2;
          tmp32 = items2;
        }
        const fn3 = function f() {
          let num = 0;
          set = sharedValue.set;
          const withSpring = spring.withSpring;
          spring;
          if (closure_1) {
            num = 1;
          }
          const result = set(withSpring(num, YOU_BAR_SPRING_CONFIG));
        };
        const items3 = [, sharedValue];
        cResult[6] = sharedValue;
        cResult[7] = stateFromStores === constants.BACK_ONLINE;
        cResult[8] = fn3;
        cResult[9] = items3;
        tmp25 = items3;
        tmp24 = fn3;
      }
      const fn2 = function h() {
        let num = 0;
        set = sharedValue1.set;
        const withSpring = spring.withSpring;
        spring;
        if (shouldShowBanner) {
          num = 1;
        }
        const fn = function t(arg0) {
          const tmp = true !== arg0 || closure_1_0;
          if (!tmp) {
            const obj = closure_0(sharedValue[19]);
            obj.runOnJS(setRenderState)(null);
          }
        };
        let obj = { shouldShowBanner, runOnJS: ReanimatedRexport.runOnJS, setRenderState: _slicedToArray };
        fn.__closure = obj;
        fn.__workletHash = 3065113239920;
        fn.__initData = __initData;
        const result = set(withSpring(num, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", fn));
      };
      const items4 = [stateFromStores !== constants.HIDDEN, sharedValue1];
      cResult[2] = sharedValue1;
      cResult[3] = stateFromStores !== constants.HIDDEN;
      cResult[4] = fn2;
      cResult[5] = items4;
      tmp22 = items4;
      tmp21 = fn2;
    }
  : () => {
      let closure_1;
      let items3;
      let items4;
      let setRenderState;
      let sharedValue;
      let sharedValue1;
      let shouldShowBanner;
      let state;
      let tmp12;
      let tmp13;
      const tmp2 = _require;
      let tmp = closure_21();
      let obj = require("useYouBarMargins");
      const youBarBottomMargin = obj.useYouBarBottomMargin();
      const obj2 = require("get initialized");
      let items = [ConnectivityIndicatorStateStore];
      const stateFromStores = obj2.useStateFromStores(items, () => state.getState());
      _require = tmp7;
      importDefault = tmp8;
      let tmp9 = null;
      if (stateFromStores !== constants.HIDDEN) {
        tmp9 = stateFromStores;
      }
      const tmp2Result = tmp2(sharedValue[19]);
      sharedValue = tmp2Result.useSharedValue(0);
      [tmp12, tmp13] = sharedValue1.useState(tmp9);
      _slicedToArray(sharedValue1.useState(tmp9), 2);
      _slicedToArray = tmp13;
      const tmp2Result3 = tmp2(sharedValue[19]);
      sharedValue1 = tmp2Result3.useSharedValue(0);
      const tmp15 = null != tmp9 && tmp12 !== tmp9;
      if (tmp15) {
        tmp13(tmp9);
      }
      const items1 = [stateFromStores !== constants.HIDDEN, sharedValue1];
      const effect = obj4.useEffect(() => {
        let num = 0;
        set = sharedValue1.set;
        const withSpring = spring.withSpring;
        spring;
        if (shouldShowBanner) {
          num = 1;
        }
        const fn = function t(arg0) {
          const tmp = true !== arg0 || closure_1_0;
          if (!tmp) {
            const obj = closure_0(sharedValue[19]);
            obj.runOnJS(setRenderState)(null);
          }
        };
        let obj = { shouldShowBanner, runOnJS: ReanimatedRexport.runOnJS, setRenderState: _slicedToArray };
        fn.__closure = obj;
        fn.__workletHash = 14365072236530;
        fn.__initData = __initData;
        const result = set(withSpring(num, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", fn));
      }, items1);
      const items2 = [stateFromStores === constants.BACK_ONLINE, sharedValue];
      const effect1 = obj4.useEffect(() => {
        let num = 0;
        set = sharedValue.set;
        const withSpring = spring.withSpring;
        spring;
        if (closure_1) {
          num = 1;
        }
        const result = set(withSpring(num, YOU_BAR_SPRING_CONFIG));
      }, items2);
      let fn = function w() {
        let items;
        const obj = { transform: items, opacity: sharedValue1.get() };
        items = [{ translateY: (1 - sharedValue1.get()) * CONNECTION_BANNER_HEIGHT }];
        ({ translateY: (1 - sharedValue1.get()) * CONNECTION_BANNER_HEIGHT });
        return obj;
      };
      const obj3 = { progress: sharedValue1, CONNECTION_BANNER_HEIGHT };
      fn.__closure = obj3;
      fn.__workletHash = 4433680948698;
      fn.__initData = __initData2;
      const tmp2Result4 = tmp2(sharedValue[19]);
      const animatedStyle = tmp2Result4.useAnimatedStyle(fn);
      const obj5 = { pointerEvents: "none", style: items3, children: items4 };
      items3 = [tmp.container, { height: youBarBottomMargin + CONNECTION_BANNER_HEIGHT }, animatedStyle];
      let tmp21 = null;
      const View = require("ReanimatedRexport").View;
      if (tmp12 === constants.BACK_ONLINE) {
        const obj6 = { progress: sharedValue };
        tmp21 = closure_12(closure_24, obj6);
      }
      items4 = [tmp21];
      let tmp24 = null;
      if (null != tmp12) {
        const obj7 = { state: tmp12 };
        tmp24 = closure_12(closure_23, obj7);
      }
      items4[1] = tmp24;
      return closure_13(View, obj5);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "ConnectionBanner" };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const obj3 = ConnectionIndicatorExperimentDefault;
      const config = obj3.useConfig(first);
      const hidden = config.hidden;
      const timeoutMs = config.timeoutMs;
      closure_25(hidden);
      let tmp6 = null;
      if (null != timeoutMs) {
        tmp6 = null;
        if (!hidden) {
          let tmp7;
          const _Symbol = Symbol;
          if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp10 = closure_12(closure_30, {});
            cResult[1] = tmp10;
            tmp7 = tmp10;
          } else {
            tmp7 = cResult[1];
          }
          tmp6 = tmp7;
        }
      }
      return tmp6;
    }
  : () => {
      const obj = ConnectionIndicatorExperimentDefault;
      const config = obj.useConfig({ location: "ConnectionBanner" });
      const hidden = config.hidden;
      const timeoutMs = config.timeoutMs;
      closure_25(hidden);
      let tmp3 = null;
      if (null != timeoutMs) {
        tmp3 = null;
        if (!hidden) {
          tmp3 = closure_12(closure_30, {});
        }
      }
      return tmp3;
    };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/ConnectionBanner.tsx");

export default tmp5;
