// === Module 9838: VibingWumpusModal ===

// Module 9838 (VibingWumpusModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Navigator from "Navigator" /* 6496 */;
import Constants2 from "Constants" /* 9784 */;
import InappropriateConversationsActionCreators from "InappropriateConversationsActionCreators" /* 9840 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import InappropriateConversationsConstants from "InappropriateConversationsConstants" /* 9839 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_0, importDefault, obj1, trackResult;

let c10;
let c9;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
function render() {
  return closure_1_12(closure_1_16, {});
}
({ Image: hasOwnProperty, View: metroRequire } = react_native);
const VIBING_WUMPUS_MODAL_KEY = Constants2.VIBING_WUMPUS_MODAL_KEY;
({ VibingWumpusAction: c9, VibingWumpusSource: c10 } = InappropriateConversationsConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, warningText: obj3, ctaContainer: obj4, takeoverHeader: { textAlign: "center" }, takeoverDescription: { textAlign: "center" }, wumpus: { height: 187 }, rings: { position: "absolute", width: "100%", height: 440, top: 120 } };
obj2 = { display: "flex", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16, height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_4 };
obj4 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_1;
  let constants3;
  let first;
  let ref;
  let stateFromStores;
  let tmp13;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  const tmp = first;
  let obj = first(ref[11]);
  const cResult = obj.c(45);
  const tmp4 = closure_15();
  const tmp5 = stateFromStores(react.useState(false), 2);
  first = tmp5[0];
  importDefault = tmp5[1];
  ref = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function _() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = tmp(ref[12]);
  stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        date = new Date();
        closure_0 = date;
        obj = closure_0(closure_2[13]);
        result = obj.playVibingWumpusMusic();
        obj2 = closure_1(closure_2[14]);
        obj1 = { source: closure_10.INAPPROPRIATE_CONVERSATION };
        trackResult = obj2.track(closure_11.VIBING_WUMPUS_VIEWED, obj1);
        return () => {
          let time;
          const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
          const track = closure_1(ref[14]).track;
          const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
          closure_1(ref[14]);
          date = new Date();
          time = date.getTime();
          track(VIBING_WUMPUS_CLOSED, obj);
          const obj3 = first(ref[13]);
          const result = obj3.stopVibingWumpusMusic();
        };
      }
    }
    const items1 = [];
    cResult[2] = E;
    cResult[3] = items1;
    tmp13 = items1;
  } else {
    class E {
      constructor() {
        date = new Date();
        closure_0 = date;
        obj = closure_0(closure_2[13]);
        result = obj.playVibingWumpusMusic();
        obj2 = closure_1(closure_2[14]);
        obj1 = { source: closure_10.INAPPROPRIATE_CONVERSATION };
        trackResult = obj2.track(closure_11.VIBING_WUMPUS_VIEWED, obj1);
        return () => {
          let time;
          const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
          const track = closure_1(ref[14]).track;
          const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
          closure_1(ref[14]);
          date = new Date();
          time = date.getTime();
          track(VIBING_WUMPUS_CLOSED, obj);
          const obj3 = first(ref[13]);
          const result = obj3.stopVibingWumpusMusic();
        };
      }
    }
    tmp13 = cResult[3];
  }
  const effect = react.useEffect(E, tmp13);
  if (cResult[4] === first) {
    class E {
      constructor() {
        date = new Date();
        closure_0 = date;
        obj = closure_0(closure_2[13]);
        result = obj.playVibingWumpusMusic();
        obj2 = closure_1(closure_2[14]);
        obj1 = { source: closure_10.INAPPROPRIATE_CONVERSATION };
        trackResult = obj2.track(closure_11.VIBING_WUMPUS_VIEWED, obj1);
        return () => {
          let time;
          const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
          const track = closure_1(ref[14]).track;
          const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
          closure_1(ref[14]);
          date = new Date();
          time = date.getTime();
          track(VIBING_WUMPUS_CLOSED, obj);
          const obj3 = first(ref[13]);
          const result = obj3.stopVibingWumpusMusic();
        };
      }
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          date = new Date();
          closure_0 = date;
          obj = closure_0(closure_2[13]);
          result = obj.playVibingWumpusMusic();
          obj2 = closure_1(closure_2[14]);
          obj1 = { source: closure_10.INAPPROPRIATE_CONVERSATION };
          trackResult = obj2.track(closure_11.VIBING_WUMPUS_VIEWED, obj1);
          return () => {
            let time;
            const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
            const track = closure_1(ref[14]).track;
            const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
            closure_1(ref[14]);
            date = new Date();
            time = date.getTime();
            track(VIBING_WUMPUS_CLOSED, obj);
            const obj3 = first(ref[13]);
            const result = obj3.stopVibingWumpusMusic();
          };
        }
      }
      cResult[7] = tmp16;
    } else {
      class E {
        constructor() {
          date = new Date();
          closure_0 = date;
          obj = closure_0(closure_2[13]);
          result = obj.playVibingWumpusMusic();
          obj2 = closure_1(closure_2[14]);
          obj1 = { source: closure_10.INAPPROPRIATE_CONVERSATION };
          trackResult = obj2.track(closure_11.VIBING_WUMPUS_VIEWED, obj1);
          return () => {
            let time;
            const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
            const track = closure_1(ref[14]).track;
            const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
            closure_1(ref[14]);
            date = new Date();
            time = date.getTime();
            track(VIBING_WUMPUS_CLOSED, obj);
            const obj3 = first(ref[13]);
            const result = obj3.stopVibingWumpusMusic();
          };
        }
      }
    }
    if (cResult[8] !== tmp4.rings) {
      class E {
        constructor() {
          date = new Date();
          closure_0 = date;
          obj = closure_0(closure_2[13]);
          result = obj.playVibingWumpusMusic();
          obj2 = closure_1(closure_2[14]);
          obj1 = { source: closure_10.INAPPROPRIATE_CONVERSATION };
          trackResult = obj2.track(closure_11.VIBING_WUMPUS_VIEWED, obj1);
          return () => {
            let time;
            const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
            const track = closure_1(ref[14]).track;
            const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
            closure_1(ref[14]);
            date = new Date();
            time = date.getTime();
            track(VIBING_WUMPUS_CLOSED, obj);
            const obj3 = first(ref[13]);
            const result = obj3.stopVibingWumpusMusic();
          };
        }
      }
      let obj3 = { source: require("AssetRegistry"), style: tmp4.rings };
      cResult[8] = tmp4.rings;
      cResult[9] = closure_12(closure_5, obj3);
      const tmp20 = closure_12(closure_5, obj3);
    } else {
      class E {
        constructor() {
          date = new Date();
          closure_0 = date;
          obj = closure_0(closure_2[13]);
          result = obj.playVibingWumpusMusic();
          obj2 = closure_1(closure_2[14]);
          obj1 = { source: closure_10.INAPPROPRIATE_CONVERSATION };
          trackResult = obj2.track(closure_11.VIBING_WUMPUS_VIEWED, obj1);
          return () => {
            let time;
            const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
            const track = closure_1(ref[14]).track;
            const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
            closure_1(ref[14]);
            date = new Date();
            time = date.getTime();
            track(VIBING_WUMPUS_CLOSED, obj);
            const obj3 = first(ref[13]);
            const result = obj3.stopVibingWumpusMusic();
          };
        }
      }
    }
    const _Symbol2 = Symbol;
    const container = tmp4.container;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          date = new Date();
          closure_0 = date;
          obj = closure_0(closure_2[13]);
          result = obj.playVibingWumpusMusic();
          obj2 = closure_1(closure_2[14]);
          obj1 = { source: closure_10.INAPPROPRIATE_CONVERSATION };
          trackResult = obj2.track(closure_11.VIBING_WUMPUS_VIEWED, obj1);
          return () => {
            let time;
            const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
            const track = closure_1(ref[14]).track;
            const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
            closure_1(ref[14]);
            date = new Date();
            time = date.getTime();
            track(VIBING_WUMPUS_CLOSED, obj);
            const obj3 = first(ref[13]);
            const result = obj3.stopVibingWumpusMusic();
          };
        }
      }
      cResult[10] = tmp22;
    } else {
      class E {
        constructor() {
          date = new Date();
          closure_0 = date;
          obj = closure_0(closure_2[13]);
          result = obj.playVibingWumpusMusic();
          obj2 = closure_1(closure_2[14]);
          obj1 = { source: closure_10.INAPPROPRIATE_CONVERSATION };
          trackResult = obj2.track(closure_11.VIBING_WUMPUS_VIEWED, obj1);
          return () => {
            let time;
            const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
            const track = closure_1(ref[14]).track;
            const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
            closure_1(ref[14]);
            date = new Date();
            time = date.getTime();
            track(VIBING_WUMPUS_CLOSED, obj);
            const obj3 = first(ref[13]);
            const result = obj3.stopVibingWumpusMusic();
          };
        }
      }
    }
    if (stateFromStores) {
      class E {
        constructor() {
          date = new Date();
          closure_0 = date;
          obj = closure_0(closure_2[13]);
          result = obj.playVibingWumpusMusic();
          obj2 = closure_1(closure_2[14]);
          obj1 = { source: closure_10.INAPPROPRIATE_CONVERSATION };
          trackResult = obj2.track(closure_11.VIBING_WUMPUS_VIEWED, obj1);
          return () => {
            let time;
            const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
            const track = closure_1(ref[14]).track;
            const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
            closure_1(ref[14]);
            date = new Date();
            time = date.getTime();
            track(VIBING_WUMPUS_CLOSED, obj);
            const obj3 = first(ref[13]);
            const result = obj3.stopVibingWumpusMusic();
          };
        }
      }
    }
    if (cResult[11] === tmp4.wumpus) {
      class E {
        constructor() {
          date = new Date();
          closure_0 = date;
          obj = closure_0(closure_2[13]);
          result = obj.playVibingWumpusMusic();
          obj2 = closure_1(closure_2[14]);
          obj1 = { source: closure_10.INAPPROPRIATE_CONVERSATION };
          trackResult = obj2.track(closure_11.VIBING_WUMPUS_VIEWED, obj1);
          return () => {
            let time;
            const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
            const track = closure_1(ref[14]).track;
            const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
            closure_1(ref[14]);
            date = new Date();
            time = date.getTime();
            track(VIBING_WUMPUS_CLOSED, obj);
            const obj3 = first(ref[13]);
            const result = obj3.stopVibingWumpusMusic();
          };
        }
      }
    }
    let obj4 = { source: tmp22, ref, autoPlay: !stateFromStores, loop: true, style: tmp4.wumpus, progress: undefined };
    cResult[11] = tmp4.wumpus;
    cResult[12] = undefined;
    cResult[13] = !stateFromStores;
    cResult[14] = closure_12(require("LottieAnimationView"), obj4);
    const tmp28 = closure_12(require("LottieAnimationView"), obj4);
  }
  class W {
    constructor() {
      const obj = InappropriateConversationsActionCreators;
      if (first) {
        const result = obj.playVibingWumpusMusic();
        const obj3 = { action: constants.PLAY };
        const obj4 = AnalyticsUtilsDefault;
        obj4.track(AnalyticEvents.VIBING_WUMPUS_ACTION, obj3);
      } else {
        const result1 = obj.pauseVibingWumpusMusic();
        const obj5 = { action: constants.PAUSE };
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(AnalyticEvents.VIBING_WUMPUS_ACTION, obj5);
      }
      let tmp14 = stateFromStores;
      if (!tmp14) {
        if (first) {
          const current = ref.current;
          if (current != null) {
            current.resume();
          }
        }
        closure_1(!first);
      }
      if (!tmp14) {
        tmp14 = first;
      }
      if (!tmp14) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.pause();
        }
      }
    }
  }
  cResult[4] = first;
  cResult[5] = stateFromStores;
  cResult[6] = W;
}) : (() => {
  let PauseIcon;
  let closure_1;
  let constants3;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let items4;
  let num;
  let obj12;
  let stateFromStores;
  let stringResult;
  let useReducedMotion;
  const tmp = closure_15();
  const tmp2 = stateFromStores(react.useState(false), 2);
  const first = tmp2[0];
  importDefault = tmp2[1];
  const ref = react.useRef(null);
  let obj = first(ref[12]);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = react.useEffect(() => {
    let date = new Date();
    let obj = date(ref[13]);
    let result = obj.playVibingWumpusMusic();
    let obj3 = { source: constants2.INAPPROPRIATE_CONVERSATION };
    const obj2 = closure_1(ref[14]);
    obj2.track(constants3.VIBING_WUMPUS_VIEWED, obj3);
    return () => {
      let time;
      const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
      const track = closure_1(ref[14]).track;
      const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
      closure_1(ref[14]);
      date = new Date();
      time = date.getTime();
      track(VIBING_WUMPUS_CLOSED, obj);
      const obj3 = first(ref[13]);
      const result = obj3.stopVibingWumpusMusic();
    };
  }, []);
  let obj2 = { source: require("AssetRegistry"), style: tmp.rings };
  const items1 = [closure_12(closure_5, obj2), ];
  let obj3 = { style: tmp.container, children: items2 };
  let obj4 = { source: first(ref[17]), ref, autoPlay: !stateFromStores, loop: true, style: tmp.wumpus, progress: num };
  let tmp14 = require("LottieAnimationView");
  num = undefined;
  const tmp12 = importDefault;
  if (stateFromStores) {
    num = 0.8;
  }
  items2 = [closure_12(tmp14, obj4), , ];
  let obj5 = { style: tmp.warningText, children: items3 };
  const obj6 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: intl.string(first(ref[19]).t.L4ifkZ) };
  const Text = tmp5(tmp6[20]).Text;
  intl = tmp5(tmp6[19]).intl;
  items3 = [closure_12(Text, obj6), ];
  const obj7 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: intl2.string(first(ref[19]).t.R8LCMZ) };
  const Text2 = tmp5(tmp6[20]).Text;
  intl2 = tmp5(tmp6[19]).intl;
  items3[1] = closure_12(Text2, obj7);
  items2[1] = closure_13(closure_6, obj5);
  const obj8 = { style: tmp.ctaContainer, children: items4 };
  const obj9 = {
    variant: "primary",
    size: "lg",
    text: intl3.string(first(ref[19]).t["8eKkaf"]),
    grow: true,
    onPress() {
      const obj = closure_1(ref[14]);
      const obj2 = { action: constants.BACK_TO_CONVERSATION };
      obj.track(constants3.VIBING_WUMPUS_ACTION, obj2);
      const obj3 = closure_1(ref[15]);
      obj3.popWithKey(VIBING_WUMPUS_MODAL_KEY);
    }
  };
  const Button = tmp5(tmp6[21]).Button;
  intl3 = tmp5(tmp6[19]).intl;
  items4 = [closure_12(Button, obj9), ];
  const Button2 = tmp5(tmp6[21]).Button;
  const intl4 = tmp5(tmp6[19]).intl;
  const string = intl4.string;
  const t = tmp5(tmp6[19]).t;
  if (first) {
    stringResult = string(t.RscU7I);
  } else {
    stringResult = string(t.ZcgDJX);
  }
  const obj10 = {
    variant: "tertiary",
    size: "lg",
    text: stringResult,
    grow: true,
    onPress() {
      const obj = InappropriateConversationsActionCreators;
      if (first) {
        const result = obj.playVibingWumpusMusic();
        const obj3 = { action: constants.PLAY };
        const obj4 = AnalyticsUtilsDefault;
        obj4.track(AnalyticEvents.VIBING_WUMPUS_ACTION, obj3);
      } else {
        const result1 = obj.pauseVibingWumpusMusic();
        const obj5 = { action: constants.PAUSE };
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(AnalyticEvents.VIBING_WUMPUS_ACTION, obj5);
      }
      let tmp14 = stateFromStores;
      if (!tmp14) {
        if (first) {
          const current = ref.current;
          if (current != null) {
            current.resume();
          }
        }
        closure_1(!first);
      }
      if (!tmp14) {
        tmp14 = first;
      }
      if (!tmp14) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.pause();
        }
      }
    },
    icon: closure_12(PauseIcon, obj12)
  };
  if (first) {
    PauseIcon = tmp5(tmp6[22]).PlayIcon;
  } else {
    PauseIcon = tmp5(tmp6[23]).PauseIcon;
  }
  const obj11 = { children: items1 };
  obj12 = { size: "md", color: tmp12(ref[9]).colors.REDESIGN_BUTTON_TERTIARY_TEXT };
  items4[1] = closure_12(Button2, obj10);
  items2[2] = closure_13(closure_6, obj8);
  items1[1] = closure_13(closure_6, obj3);
  return closure_13(closure_14, obj11);
});
let closure_16 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let obj3;
  let obj4;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { screens: obj3, initialRouteName: "VIBING_WUMPUS" };
    obj3 = { VIBING_WUMPUS: obj4 };
    obj4 = { title: "", fullscreen: true, headerShown: false, render };
    const tmp6 = closure_12(Navigator.Navigator, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  let obj2;
  const obj = { screens: obj2, initialRouteName: "VIBING_WUMPUS" };
  obj2 = { VIBING_WUMPUS: { title: "", fullscreen: true, headerShown: false, render } };
  return closure_12(Navigator.Navigator, obj);
});
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/VibingWumpusModal.tsx");

export default tmp7;
export const VibingWumpusScreen = tmp6;