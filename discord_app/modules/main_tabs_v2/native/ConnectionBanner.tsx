// discord_app/modules/main_tabs_v2/native/ConnectionBanner.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../_runtime/metro/00683__.js";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import _modDef6052 from "../../../../_runtime/metro/06052__.js";
import ConnectionIndicatorExperimentDefault from "ConnectionIndicatorExperiment.tsx";
import ConnectionUnknownIcon from "../../../design/components/Icon/native/redesign/generated/ConnectionUnknownIcon.tsx";
import ConnectionFineIcon from "../../../design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConnectivityIndicatorStateStore from "../../connectivity/native/ConnectivityIndicatorStateStore.tsx";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const constants = fn(13497).ConnectivityIndicatorState;
const YouBarConstants = fn(14899);
const CONNECTION_BANNER_HEIGHT = YouBarConstants.CONNECTION_BANNER_HEIGHT;
const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const colors = ["transparent", "black", "black", "transparent"];
const locations = [0, 0.25, 0.75, 1];
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const locations2 = [0, 0.4, 0.75, 1];
const start2 = { x: 0, y: 0 };
const end2 = { x: 0, y: 1 };
const createStyles = fn(4890);
let obj2 = {
  container: { position: "absolute", left: 0, right: 0, bottom: 0 },
  glow: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 },
  glowMaskGradient: { flex: 1 },
  content: null,
  leadingSlot: null,
  spinner: null,
};
const rect = {
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
obj2.content = rect;
obj2.leadingSlot = { width: 16, height: 16, alignItems: "center", justifyContent: "center" };
let obj3 = { transform: null };
let items = [{ scale: 0.8 }];
obj3.transform = items;
obj2.spinner = obj3;
let closure_21 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (state) => {
      const cResult = c.c(12);
      state = state.state;
      const tmp4 = closure_21();
      const token = useToken.useToken(nativeDefault.colors.INTERACTIVE_ICON_DEFAULT);
      if (constants.WAITING_FOR_NETWORK === state) {
        if (cResult[0] === token) {
          if (cResult[1] === tmp4.spinner) {
            let tmp24 = cResult[2];
          }
          if (cResult[3] === tmp4.leadingSlot) {
            if (cResult[4] === tmp24) {
              let tmp28 = cResult[5];
            }
            return tmp28;
          }
          const obj3 = { style: tmp4.leadingSlot, children: tmp24 };
          const tmp31 = __initData(timestampProducer, obj3);
          cResult[3] = tmp4.leadingSlot;
          cResult[4] = tmp24;
          cResult[5] = tmp31;
          tmp28 = tmp31;
        }
        const obj4 = { size: "small", color: token, style: tmp4.spinner };
        const tmp27 = __initData(hasOwnProperty, obj4);
        cResult[0] = token;
        cResult[1] = tmp4.spinner;
        cResult[2] = tmp27;
        tmp24 = tmp27;
      } else if (constants.NO_CONNECTION === state) {
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { size: "xs", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
          const tmp19 = __initData(ConnectionUnknownIcon.ConnectionUnknownIcon, obj5);
          cResult[6] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[6];
        }
        if (cResult[7] !== tmp4.leadingSlot) {
          const obj6 = { style: tmp4.leadingSlot, children: tmp17 };
          const tmp23 = __initData(timestampProducer, obj6);
          cResult[7] = tmp4.leadingSlot;
          cResult[8] = tmp23;
          let tmp20 = tmp23;
        } else {
          tmp20 = cResult[8];
        }
        return tmp20;
      } else if (constants.BACK_ONLINE === state) {
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
          const tmp11 = __initData(ConnectionFineIcon.ConnectionFineIcon, obj7);
          cResult[9] = tmp11;
          let tmp9 = tmp11;
        } else {
          tmp9 = cResult[9];
        }
        if (cResult[10] !== tmp4.leadingSlot) {
          const obj8 = { style: tmp4.leadingSlot, children: tmp9 };
          const tmp15 = __initData(timestampProducer, obj8);
          cResult[10] = tmp4.leadingSlot;
          cResult[11] = tmp15;
          let tmp12 = tmp15;
        } else {
          tmp12 = cResult[11];
        }
        return tmp12;
      }
    }
  : (state) => {
      state = state.state;
      const tmp = closure_21();
      useToken;
      if (constants.WAITING_FOR_NETWORK === state) {
        const obj2 = { style: tmp.leadingSlot, children: null };
        const obj3 = { size: "small", color: tmp6, style: tmp.spinner };
        obj2.children = __initData(hasOwnProperty, obj3);
        return __initData(timestampProducer, obj2);
      } else if (constants.NO_CONNECTION === state) {
        const obj4 = { style: tmp.leadingSlot, children: null };
        const obj5 = { size: "xs", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
        obj4.children = __initData(ConnectionUnknownIcon.ConnectionUnknownIcon, obj5);
        return __initData(timestampProducer, obj4);
      } else if (constants.BACK_ONLINE === state) {
        const obj = { style: tmp.leadingSlot, children: null };
        const obj6 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
        obj.children = __initData(ConnectionFineIcon.ConnectionFineIcon, obj6);
        return __initData(timestampProducer, obj);
      }
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (state) => {
      const cResult = c.c(11);
      state = state.state;
      const tmp4 = closure_21();
      if (cResult[0] !== state) {
        const obj2 = { state };
        const tmp8 = __initData(closure_22, obj2);
        cResult[0] = state;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      let str = "text-muted";
      if (state === constants.BACK_ONLINE) {
        str = "text-feedback-positive";
      }
      if (cResult[2] !== state) {
        if (constants.WAITING_FOR_NETWORK === state) {
          const intl2 = util.intl;
          let stringResult = intl2.string(util.t.XKk1gp);
          cResult[2] = state;
          cResult[3] = stringResult;
        } else if (constants.NO_CONNECTION !== state) {
          if (constants.BACK_ONLINE === state) {
            const intl3 = util.intl;
            stringResult = intl3.string(util.t.j8lYE2);
          }
        }
        const intl = util.intl;
        stringResult = intl.string(util.t.zPerw8);
      } else {
        if (cResult[4] === str) {
          if (cResult[5] === tmp10) {
            let tmp13 = cResult[6];
          }
          if (cResult[7] === tmp4.content) {
            if (cResult[8] === tmp5) {
              if (cResult[9] === tmp13) {
                let tmp16 = cResult[10];
              }
              return tmp16;
            }
          }
          const obj3 = { style: tmp4.content, children: null };
          const items = [tmp5, tmp13];
          obj3.children = items;
          const tmp19 = __initData2(timestampProducer, obj3);
          cResult[7] = tmp4.content;
          cResult[8] = tmp5;
          cResult[9] = tmp13;
          cResult[10] = tmp19;
          tmp16 = tmp19;
        }
        const obj4 = { variant: "text-sm/medium", color: str, maxFontSizeMultiplier: 1.5, children: cResult[3] };
        const tmp15 = __initData(Text_Text.Text, obj4);
        cResult[4] = str;
        cResult[5] = cResult[3];
        cResult[6] = tmp15;
        tmp13 = tmp15;
      }
    }
  : (state) => {
      state = state.state;
      const obj = { style: closure_21().content, children: null };
      const items = [__initData(closure_22, { state })];
      let str = "text-muted";
      if (state === constants.BACK_ONLINE) {
        str = "text-feedback-positive";
      }
      const obj2 = { variant: "text-sm/medium", color: str, maxFontSizeMultiplier: 1.5, children: null };
      if (constants.WAITING_FOR_NETWORK === state) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t.XKk1gp);
      } else if (constants.NO_CONNECTION === state) {
        const intl = util.intl;
        stringResult = intl.string(util.t.zPerw8);
      } else if (constants.BACK_ONLINE === state) {
        const intl3 = util.intl;
        stringResult = intl3.string(util.t.j8lYE2);
      }
      obj2.children = stringResult;
      items[1] = __initData(Text_Text.Text, obj2);
      obj.children = items;
      return __initData2(timestampProducer, obj);
    };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (progress) => {
      const cResult = c.c(27);
      progress = progress.progress;
      const tmp3 = closure_21();
      const token = useToken.useToken(nativeDefault.colors.ICON_FEEDBACK_POSITIVE);
      if (cResult[0] !== token) {
        const obj3 = _modDef683(token);
        const cssResult = obj3.alpha(0).css();
        const alphaResult = obj3.alpha(0);
        const cssResult1 = obj3.alpha(0.1).css();
        const alphaResult1 = obj3.alpha(0.1);
        const cssResult2 = obj3.alpha(0.28).css();
        const alphaResult2 = obj3.alpha(0.28);
        const cssResult3 = obj3.alpha(0.55).css();
        cResult[0] = token;
        cResult[1] = cssResult;
        cResult[2] = cssResult1;
        cResult[3] = cssResult2;
        cResult[4] = cssResult3;
        let tmp9 = cssResult3;
        let tmp8 = cssResult2;
        let tmp7 = cssResult1;
        let tmp6 = cssResult;
        const alphaResult3 = obj3.alpha(0.55);
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      if (cResult[5] === tmp6) {
        if (cResult[6] === tmp7) {
          if (cResult[7] === tmp8) {
            if (cResult[8] === tmp9) {
              let tmp14 = cResult[9];
            }
            if (cResult[10] !== progress) {
              const obj4 = { opacity: progress };
              cResult[10] = progress;
              cResult[11] = obj4;
              let tmp15 = obj4;
            } else {
              tmp15 = cResult[11];
            }
            if (cResult[12] === tmp3.glow) {
              if (cResult[13] === tmp15) {
                let tmp16 = cResult[14];
              }
              if (cResult[15] !== tmp3.glowMaskGradient) {
                const obj5 = { style: tmp3.glowMaskGradient, colors, locations, start, end };
                const tmp23 = __initData(LinearGradientDefault, obj5);
                cResult[15] = tmp3.glowMaskGradient;
                cResult[16] = tmp23;
                let tmp17 = tmp23;
              } else {
                tmp17 = cResult[16];
              }
              if (cResult[17] === tmp14) {
                if (cResult[18] === tmp3.glowMaskGradient) {
                  let tmp24 = cResult[19];
                }
                if (cResult[20] === tmp3.glow) {
                  if (cResult[21] === tmp17) {
                    if (cResult[22] === tmp24) {
                      let tmp30 = cResult[23];
                    }
                    if (cResult[24] === tmp30) {
                      if (cResult[25] === tmp16) {
                        let tmp33 = cResult[26];
                      }
                      return tmp33;
                    }
                    const obj6 = { style: tmp16, pointerEvents: "none", children: tmp30 };
                    const tmp35 = __initData(ReanimatedRexportDefault.View, obj6);
                    cResult[24] = tmp30;
                    cResult[25] = tmp16;
                    cResult[26] = tmp35;
                    tmp33 = tmp35;
                  }
                }
                const obj7 = { style: tmp3.glow, maskElement: tmp17, children: tmp24 };
                const tmp32 = __initData(_modDef6052, obj7);
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
              const tmp29 = __initData(LinearGradientDefault, obj8);
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
  : (opacity) => {
      let token;
      const tmp = closure_21();
      token = token(4580).useToken(nativeDefault.colors.ICON_FEEDBACK_POSITIVE);
      let items = [token];
      const memo = noop.useMemo(() => {
        const obj = _modDef683(token);
        const items = [obj.alpha(0).css(), , ,];
        const alphaResult = obj.alpha(0);
        items[1] = obj.alpha(0.1).css();
        const alphaResult1 = obj.alpha(0.1);
        items[2] = obj.alpha(0.28).css();
        const alphaResult2 = obj.alpha(0.28);
        items[3] = obj.alpha(0.55).css();
        return items;
      }, items);
      const obj2 = { style: null, pointerEvents: "none", children: null };
      const items1 = [tmp.glow, { opacity: opacity.progress }];
      obj2.style = items1;
      const obj3 = { style: tmp.glow, maskElement: null, children: null };
      let obj = token(4580);
      obj3.maskElement = closure_12(LinearGradientDefault, {
        style: tmp.glowMaskGradient,
        colors,
        locations,
        start,
        end,
      });
      obj3.children = closure_12(LinearGradientDefault, {
        style: tmp.glowMaskGradient,
        colors: memo,
        locations: locations2,
        start: start2,
        end: end2,
      });
      obj2.children = closure_12(_modDef6052, obj3);
      return closure_12(ReanimatedRexportDefault.View, obj2);
    };
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(6);
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
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
      dependencyMap = noop.useRef(null);
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === arg0) {
          let tmp8 = cResult[4];
          let tmp9 = cResult[5];
        }
        const effect = noop.useEffect(tmp8, tmp9);
      }
      class N {
        constructor() {
          current = closure_2.current;
          tmp = closure_1;
          closure_2.current = closure_1;
          if (null != current) {
            tmp7 = closure_8;
            if (current === closure_8.HIDDEN) {
              if (tmp !== tmp7.HIDDEN) {
                if (tmp !== tmp7.BACK_ONLINE) {
                  tmp2 = closure_0;
                  str = "hidden";
                  if (!closure_0) {
                    str2 = "connecting";
                    if (tmp === tmp7.NO_CONNECTION) {
                      str2 = "offline";
                    }
                    str = str2;
                  }
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[21]);
                  tmp5 = AnalyticEvents;
                  obj1 = { connection_indicator_type: null };
                  obj1.connection_indicator_type = str;
                  trackResult = obj.track(AnalyticEvents.CONNECTION_INDICATOR_SHOWN, obj1);
                }
              }
            }
          }
          return;
        }
      }
      const items1 = [stateFromStores, arg0];
      cResult[2] = stateFromStores;
      cResult[3] = arg0;
      cResult[4] = N;
      cResult[5] = items1;
      tmp9 = items1;
      tmp8 = N;
      const tmpResult = require("initialize");
    }
  : (arg0) => {
      _require = arg0;
      const items = [ConnectivityIndicatorStateStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => state.getState());
      dependencyMap = noop.useRef(null);
      const items1 = [stateFromStores, arg0];
      const effect = noop.useEffect(() => {
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
                AnalyticsUtilsDefault.track(AnalyticEvents.CONNECTION_INDICATOR_SHOWN, obj2);
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
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(25);
      const tmp4 = closure_21();
      let obj = require("c");
      const youBarBottomMargin = require("useYouBarMargins").useYouBarBottomMargin();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConnectivityIndicatorStateStore];
        let fn = function s() {
          return state.getState();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      let obj2 = require("useYouBarMargins");
      const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp7);
      _require = tmp11;
      importDefault = tmp12;
      let tmp13 = null;
      if (stateFromStores !== constants.HIDDEN) {
        tmp13 = stateFromStores;
      }
      const tmpResult = require("initialize");
      sharedValue = require("ReanimatedRexport").useSharedValue(0);
      const tmpResult4 = require("ReanimatedRexport");
      [tmp16, tmp17] = sharedValue1.useState(tmp13);
      _slicedToArray = tmp17;
      const tmp15 = _slicedToArray(sharedValue1.useState(tmp13), 2);
      sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
      if (tmp19) {
        tmp17(tmp13);
      }
      if (cResult[2] === sharedValue1) {
        if (cResult[3] === tmp11) {
          let tmp21 = cResult[4];
          let tmp22 = cResult[5];
        }
        const effect = obj5.useEffect(tmp21, tmp22);
        if (cResult[6] === sharedValue) {
          if (cResult[7] === tmp12) {
            let tmp24 = cResult[8];
            let tmp25 = cResult[9];
          }
          const effect1 = obj5.useEffect(tmp24, tmp25);
          const sum = youBarBottomMargin + CONNECTION_BANNER_HEIGHT;
          class L {
            constructor() {
              obj = { transform: null, opacity: null };
              obj1 = { translateY: (1 - closure_4.get()) * CONNECTION_BANNER_HEIGHT };
              items = [];
              items[0] = obj1;
              obj.transform = items;
              obj.opacity = closure_4.get();
              return obj;
            }
          }
          const obj3 = { progress: sharedValue1, CONNECTION_BANNER_HEIGHT };
          L.__closure = obj3;
          L.__workletHash = 13973493587548;
          L.__initData = __initData;
          const animatedStyle = tmp(tmp2[19]).useAnimatedStyle(L);
          if (cResult[10] !== sum) {
            const obj4 = { height: sum };
            cResult[10] = sum;
            class L {
              constructor() {
                obj = { transform: null, opacity: null };
                obj1 = { translateY: (1 - closure_4.get()) * CONNECTION_BANNER_HEIGHT };
                items = [];
                items[0] = obj1;
                obj.transform = items;
                obj.opacity = closure_4.get();
                return obj;
              }
            }
            let tmp31 = obj4;
          } else {
            tmp31 = cResult[11];
          }
          if (cResult[12] === animatedStyle) {
            if (cResult[13] === tmp4.container) {
              if (cResult[14] === tmp31) {
                let tmp32 = cResult[15];
              }
              if (cResult[16] === sharedValue) {
                if (cResult[17] === tmp16) {
                  let tmp33 = cResult[18];
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
                      obj = { transform: null, opacity: null };
                      obj1 = { translateY: (1 - closure_4.get()) * CONNECTION_BANNER_HEIGHT };
                      items = [];
                      items[0] = obj1;
                      obj.transform = items;
                      obj.opacity = closure_4.get();
                      return obj;
                    }
                  }
                  let tmp37 = tmp38;
                } else {
                  tmp37 = cResult[20];
                }
                if (cResult[21] === tmp32) {
                  if (cResult[22] === tmp33) {
                    if (cResult[23] === tmp37) {
                      let tmp41 = cResult[24];
                    }
                    return tmp41;
                  }
                }
                class L {
                  constructor() {
                    obj = { transform: null, opacity: null };
                    obj1 = { translateY: (1 - closure_4.get()) * CONNECTION_BANNER_HEIGHT };
                    items = [];
                    items[0] = obj1;
                    obj.transform = items;
                    obj.opacity = closure_4.get();
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
                  obj = { transform: null, opacity: null };
                  obj1 = { translateY: (1 - closure_4.get()) * CONNECTION_BANNER_HEIGHT };
                  items = [];
                  items[0] = obj1;
                  obj.transform = items;
                  obj.opacity = closure_4.get();
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
          const tmpResult6 = tmp(tmp2[19]);
        }
        const fn3 = function f() {
          let num = 0;
          if (closure_1) {
            num = 1;
          }
          const result = sharedValue.set(spring.withSpring(num, YOU_BAR_SPRING_CONFIG));
        };
        const items3 = [, sharedValue];
        cResult[6] = sharedValue;
        cResult[7] = tmp12;
        cResult[8] = fn3;
        cResult[9] = items3;
        tmp25 = items3;
        tmp24 = fn3;
      }
      const fn2 = function h() {
        let num = 0;
        if (shouldShowBanner) {
          num = 1;
        }
        const fn = function t(arg0) {
          if (!tmp) {
            closure_0(sharedValue[19]).runOnJS(setRenderState)(null);
            const obj = closure_0(sharedValue[19]);
          }
          tmp = true !== arg0 || shouldShowBanner;
        };
        let obj = spring;
        fn.__closure = { shouldShowBanner, runOnJS: ReanimatedRexport.runOnJS, setRenderState };
        fn.__workletHash = 3065113239920;
        fn.__initData = __initData;
        const result = sharedValue1.set(obj.withSpring(num, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", fn));
        const obj2 = { shouldShowBanner, runOnJS: ReanimatedRexport.runOnJS, setRenderState };
      };
      const items4 = [stateFromStores !== constants.HIDDEN, sharedValue1];
      cResult[2] = sharedValue1;
      cResult[3] = stateFromStores !== constants.HIDDEN;
      cResult[4] = fn2;
      cResult[5] = items4;
      tmp22 = items4;
      tmp21 = fn2;
      tmp19 = null != tmp13 && tmp16 !== tmp13;
      const tmpResult5 = require("ReanimatedRexport");
    }
  : () => {
      let tmp = closure_21();
      const youBarBottomMargin = require("useYouBarMargins").useYouBarBottomMargin();
      let obj = require("useYouBarMargins");
      let items = [ConnectivityIndicatorStateStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => state.getState());
      _require = tmp7;
      importDefault = tmp8;
      let tmp9 = null;
      if (stateFromStores !== constants.HIDDEN) {
        tmp9 = stateFromStores;
      }
      let obj2 = require("initialize");
      sharedValue = require("ReanimatedRexport").useSharedValue(0);
      const tmp2Result = require("ReanimatedRexport");
      [tmp12, tmp13] = sharedValue1.useState(tmp9);
      _slicedToArray = tmp13;
      const tmp11 = _slicedToArray(sharedValue1.useState(tmp9), 2);
      sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
      if (tmp15) {
        tmp13(tmp9);
      }
      const items1 = [stateFromStores !== constants.HIDDEN, sharedValue1];
      const effect = obj4.useEffect(() => {
        let num = 0;
        if (shouldShowBanner) {
          num = 1;
        }
        const fn = function t(arg0) {
          if (!tmp) {
            closure_0(sharedValue[19]).runOnJS(setRenderState)(null);
            const obj = closure_0(sharedValue[19]);
          }
          tmp = true !== arg0 || shouldShowBanner;
        };
        let obj = spring;
        fn.__closure = { shouldShowBanner, runOnJS: ReanimatedRexport.runOnJS, setRenderState };
        fn.__workletHash = 14365072236530;
        fn.__initData = __initData;
        const result = sharedValue1.set(obj.withSpring(num, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", fn));
        const obj2 = { shouldShowBanner, runOnJS: ReanimatedRexport.runOnJS, setRenderState };
      }, items1);
      const items2 = [stateFromStores === constants.BACK_ONLINE, sharedValue];
      const effect1 = obj4.useEffect(() => {
        let num = 0;
        if (closure_1) {
          num = 1;
        }
        const result = sharedValue.set(spring.withSpring(num, YOU_BAR_SPRING_CONFIG));
      }, items2);
      tmp15 = null != tmp9 && tmp12 !== tmp9;
      const tmp2Result3 = require("ReanimatedRexport");
      let fn = function w() {
        const obj = { transform: null, opacity: null };
        const items = [{ translateY: (1 - sharedValue1.get()) * CONNECTION_BANNER_HEIGHT }];
        obj.transform = items;
        obj.opacity = sharedValue1.get();
        return obj;
      };
      fn.__closure = { progress: sharedValue1, CONNECTION_BANNER_HEIGHT };
      fn.__workletHash = 4433680948698;
      fn.__initData = __initData2;
      const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
      const obj5 = { pointerEvents: "none", style: null, children: null };
      const items3 = [tmp.container, { height: youBarBottomMargin + CONNECTION_BANNER_HEIGHT }, animatedStyle];
      obj5.style = items3;
      let tmp21 = null;
      if (tmp12 === constants.BACK_ONLINE) {
        const obj6 = { progress: sharedValue };
        tmp21 = closure_12(closure_24, obj6);
      }
      const items4 = [tmp21];
      let tmp24 = null;
      if (null != tmp12) {
        const obj7 = { state: tmp12 };
        tmp24 = closure_12(closure_23, obj7);
      }
      items4[1] = tmp24;
      obj5.children = items4;
      return closure_13(require("ReanimatedRexport").View, obj5);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/ConnectionBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "ConnectionBanner" };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const config = ConnectionIndicatorExperimentDefault.useConfig(first);
      const hidden = config.hidden;
      closure_25(hidden);
      let tmp6 = null;
      if (null != config.timeoutMs) {
        tmp6 = null;
        if (!hidden) {
          const _Symbol = Symbol;
          if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp10 = __initData(closure_30, {});
            cResult[1] = tmp10;
          }
        }
      }
      return tmp6;
    }
  : () => {
      const config = ConnectionIndicatorExperimentDefault.useConfig({ location: "ConnectionBanner" });
      const hidden = config.hidden;
      closure_25(hidden);
      let tmp3 = null;
      if (null != config.timeoutMs) {
        tmp3 = null;
        if (!hidden) {
          tmp3 = __initData(closure_30, {});
        }
      }
      return tmp3;
    };
