// discord_app/modules/self_mod/inappropriate_conversation/native/VibingWumpusModal.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import InappropriateConversationsActionCreators from "../InappropriateConversationsActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const VIBING_WUMPUS_MODAL_KEY = fn(9784).VIBING_WUMPUS_MODAL_KEY;
const InappropriateConversationsConstants = fn(9839);
({ VibingWumpusAction: closure_9, VibingWumpusSource: c10 } = InappropriateConversationsConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: nativeDefault.space.PX_32,
    gap: nativeDefault.space.PX_16,
    height: "100%",
  },
  warningText: null,
  ctaContainer: null,
  takeoverHeader: null,
  takeoverDescription: null,
  wumpus: null,
  rings: null,
};
let obj3 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: nativeDefault.space.PX_32,
  gap: nativeDefault.space.PX_16,
  height: "100%",
};
obj2.warningText = { marginBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_4 };
let obj4 = { marginBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_4 };
obj2.ctaContainer = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
obj2.takeoverHeader = { textAlign: "center" };
obj2.takeoverDescription = { textAlign: "center" };
obj2.wumpus = { height: 187 };
obj2.rings = { position: "absolute", width: "100%", height: 440, top: 120 };
let closure_15 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = first(ref[11]).c(45);
      const tmp4 = closure_15();
      const tmp5 = stateFromStores(noop.useState(false), 2);
      first = tmp5[0];
      importDefault = tmp5[1];
      ref = noop.useRef(null);
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
      let obj = first(ref[11]);
      stateFromStores = first(ref[12]).useStateFromStores(tmp8, tmp9);
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
              const obj2 = { duration_open_ms: null, source: null };
              date = new Date();
              const time = date.getTime();
              obj2.duration_open_ms = time - date.getTime();
              obj2.source = constants2.INAPPROPRIATE_CONVERSATION;
              closure_1(ref[14]).track(constants3.VIBING_WUMPUS_CLOSED, obj2);
              const obj = closure_1(ref[14]);
              const result = first(ref[13]).stopVibingWumpusMusic();
            };
          }
        }
        const items1 = [];
        cResult[2] = E;
        cResult[3] = items1;
        let tmp13 = items1;
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
              const obj2 = { duration_open_ms: null, source: null };
              date = new Date();
              const time = date.getTime();
              obj2.duration_open_ms = time - date.getTime();
              obj2.source = constants2.INAPPROPRIATE_CONVERSATION;
              closure_1(ref[14]).track(constants3.VIBING_WUMPUS_CLOSED, obj2);
              const obj = closure_1(ref[14]);
              const result = first(ref[13]).stopVibingWumpusMusic();
            };
          }
        }
        tmp13 = cResult[3];
      }
      const effect = noop.useEffect(E, tmp13);
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
              const obj2 = { duration_open_ms: null, source: null };
              date = new Date();
              const time = date.getTime();
              obj2.duration_open_ms = time - date.getTime();
              obj2.source = constants2.INAPPROPRIATE_CONVERSATION;
              closure_1(ref[14]).track(constants3.VIBING_WUMPUS_CLOSED, obj2);
              const obj = closure_1(ref[14]);
              const result = first(ref[13]).stopVibingWumpusMusic();
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
                const obj2 = { duration_open_ms: null, source: null };
                date = new Date();
                const time = date.getTime();
                obj2.duration_open_ms = time - date.getTime();
                obj2.source = constants2.INAPPROPRIATE_CONVERSATION;
                closure_1(ref[14]).track(constants3.VIBING_WUMPUS_CLOSED, obj2);
                const obj = closure_1(ref[14]);
                const result = first(ref[13]).stopVibingWumpusMusic();
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
                const obj2 = { duration_open_ms: null, source: null };
                date = new Date();
                const time = date.getTime();
                obj2.duration_open_ms = time - date.getTime();
                obj2.source = constants2.INAPPROPRIATE_CONVERSATION;
                closure_1(ref[14]).track(constants3.VIBING_WUMPUS_CLOSED, obj2);
                const obj = closure_1(ref[14]);
                const result = first(ref[13]).stopVibingWumpusMusic();
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
                const obj2 = { duration_open_ms: null, source: null };
                date = new Date();
                const time = date.getTime();
                obj2.duration_open_ms = time - date.getTime();
                obj2.source = constants2.INAPPROPRIATE_CONVERSATION;
                closure_1(ref[14]).track(constants3.VIBING_WUMPUS_CLOSED, obj2);
                const obj = closure_1(ref[14]);
                const result = first(ref[13]).stopVibingWumpusMusic();
              };
            }
          }
          let obj3 = { source: require("../../../../../_runtime/metro/09841__.js"), style: tmp4.rings };
          const tmp20 = closure_12(closure_5, obj3);
          cResult[8] = tmp4.rings;
          cResult[9] = tmp20;
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
                const obj2 = { duration_open_ms: null, source: null };
                date = new Date();
                const time = date.getTime();
                obj2.duration_open_ms = time - date.getTime();
                obj2.source = constants2.INAPPROPRIATE_CONVERSATION;
                closure_1(ref[14]).track(constants3.VIBING_WUMPUS_CLOSED, obj2);
                const obj = closure_1(ref[14]);
                const result = first(ref[13]).stopVibingWumpusMusic();
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
                const obj2 = { duration_open_ms: null, source: null };
                date = new Date();
                const time = date.getTime();
                obj2.duration_open_ms = time - date.getTime();
                obj2.source = constants2.INAPPROPRIATE_CONVERSATION;
                closure_1(ref[14]).track(constants3.VIBING_WUMPUS_CLOSED, obj2);
                const obj = closure_1(ref[14]);
                const result = first(ref[13]).stopVibingWumpusMusic();
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
                const obj2 = { duration_open_ms: null, source: null };
                date = new Date();
                const time = date.getTime();
                obj2.duration_open_ms = time - date.getTime();
                obj2.source = constants2.INAPPROPRIATE_CONVERSATION;
                closure_1(ref[14]).track(constants3.VIBING_WUMPUS_CLOSED, obj2);
                const obj = closure_1(ref[14]);
                const result = first(ref[13]).stopVibingWumpusMusic();
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
                const obj2 = { duration_open_ms: null, source: null };
                date = new Date();
                const time = date.getTime();
                obj2.duration_open_ms = time - date.getTime();
                obj2.source = constants2.INAPPROPRIATE_CONVERSATION;
                closure_1(ref[14]).track(constants3.VIBING_WUMPUS_CLOSED, obj2);
                const obj = closure_1(ref[14]);
                const result = first(ref[13]).stopVibingWumpusMusic();
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
                const obj2 = { duration_open_ms: null, source: null };
                date = new Date();
                const time = date.getTime();
                obj2.duration_open_ms = time - date.getTime();
                obj2.source = constants2.INAPPROPRIATE_CONVERSATION;
                closure_1(ref[14]).track(constants3.VIBING_WUMPUS_CLOSED, obj2);
                const obj = closure_1(ref[14]);
                const result = first(ref[13]).stopVibingWumpusMusic();
              };
            }
          }
        }
        let obj4 = {
          source: tmp22,
          ref,
          autoPlay: !stateFromStores,
          loop: true,
          style: tmp4.wumpus,
          progress: undefined,
        };
        const tmp28 = closure_12(require("LottieAnimationView"), obj4);
        cResult[11] = tmp4.wumpus;
        cResult[12] = undefined;
        cResult[13] = !stateFromStores;
        cResult[14] = tmp28;
      }
      class W {
        constructor() {
          tmp = closure_0;
          obj = closure_0(closure_2[13]);
          if (closure_0) {
            result = obj.playVibingWumpusMusic();
            tmp9 = closure_1;
            tmp10 = closure_2;
            obj4 = closure_1(closure_2[14]);
            tmp11 = AnalyticEvents;
            obj1 = { action: null };
            tmp12 = VibingWumpusAction;
            obj1.action = VibingWumpusAction.PLAY;
            trackResult = obj4.track(AnalyticEvents.VIBING_WUMPUS_ACTION, obj1);
          } else {
            result1 = obj.pauseVibingWumpusMusic();
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj2 = closure_1(closure_2[14]);
            tmp5 = AnalyticEvents;
            obj6 = { action: null };
            tmp6 = VibingWumpusAction;
            obj6.action = VibingWumpusAction.PAUSE;
            trackResult1 = obj2.track(AnalyticEvents.VIBING_WUMPUS_ACTION, obj6);
          }
          tmp14 = closure_3;
          if (!closure_3) {
            if (tmp) {
              tmp15 = closure_2;
              current = closure_2.current;
              tmp16 = null;
              if (current != null) {
                resumeResult = current.resume();
              }
            }
            tmp21 = closure_1;
            tmp22 = closure_1(!tmp);
            return;
          }
          if (!tmp14) {
            tmp14 = tmp;
          }
          if (!tmp14) {
            tmp18 = closure_2;
            current2 = closure_2.current;
            tmp19 = null;
            if (current2 != null) {
              pauseResult = current2.pause();
            }
          }
          return;
        }
      }
      cResult[4] = first;
      cResult[5] = stateFromStores;
      cResult[6] = W;
      const tmpResult = first(ref[12]);
    }
  : () => {
      const tmp = closure_15();
      const tmp2 = stateFromStores(noop.useState(false), 2);
      const first = tmp2[0];
      importDefault = tmp2[1];
      const ref = noop.useRef(null);
      const items = [AccessibilityStore];
      stateFromStores = first(ref[12]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const effect = noop.useEffect(() => {
        let date = new Date();
        let result = date(ref[13]).playVibingWumpusMusic();
        let obj = date(ref[13]);
        closure_1(ref[14]).track(constants3.VIBING_WUMPUS_VIEWED, { source: constants2.INAPPROPRIATE_CONVERSATION });
        return () => {
          const obj2 = { duration_open_ms: null, source: null };
          date = new Date();
          const time = date.getTime();
          obj2.duration_open_ms = time - date.getTime();
          obj2.source = constants2.INAPPROPRIATE_CONVERSATION;
          closure_1(ref[14]).track(constants3.VIBING_WUMPUS_CLOSED, obj2);
          const obj = closure_1(ref[14]);
          const result = first(ref[13]).stopVibingWumpusMusic();
        };
      }, []);
      let obj = first(ref[12]);
      const items1 = [
        closure_12(closure_5, { source: require("../../../../../_runtime/metro/09841__.js"), style: tmp.rings }),
      ];
      let obj3 = { style: tmp.container, children: null };
      let obj4 = { source: null, ref: null, autoPlay: null, loop: true, style: null, progress: null };
      let obj2 = { source: require("../../../../../_runtime/metro/09841__.js"), style: tmp.rings };
      const tmp12 = importDefault;
      obj4.source = first(ref[17]);
      obj4.ref = ref;
      obj4.autoPlay = !stateFromStores;
      obj4.style = tmp.wumpus;
      let num;
      if (stateFromStores) {
        num = 0.8;
      }
      obj4.progress = num;
      const items2 = [closure_12(require("LottieAnimationView"), obj4), ,];
      let obj5 = { style: tmp.warningText, children: null };
      const obj6 = {
        variant: "heading-xl/semibold",
        style: tmp.takeoverHeader,
        accessibilityRole: "header",
        children: null,
      };
      const intl = tmp5(tmp6[19]).intl;
      obj6.children = intl.string(first(ref[19]).t.L4ifkZ);
      const items3 = [closure_12(first(ref[20]).Text, obj6)];
      const obj7 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: null };
      const intl2 = tmp5(tmp6[19]).intl;
      obj7.children = intl2.string(first(ref[19]).t.R8LCMZ);
      items3[1] = closure_12(first(ref[20]).Text, obj7);
      obj5.children = items3;
      items2[1] = closure_13(closure_6, obj5);
      const obj8 = { style: tmp.ctaContainer, children: null };
      const obj9 = { variant: "primary", size: "lg", text: null, grow: true, onPress: null };
      const intl3 = tmp5(tmp6[19]).intl;
      obj9.text = intl3.string(first(ref[19]).t["8eKkaf"]);
      obj9.onPress = function onPress() {
        closure_1(ref[14]).track(constants3.VIBING_WUMPUS_ACTION, { action: constants.BACK_TO_CONVERSATION });
        const obj = closure_1(ref[14]);
        const obj2 = { action: constants.BACK_TO_CONVERSATION };
        closure_1(ref[15]).popWithKey(VIBING_WUMPUS_MODAL_KEY);
      };
      const items4 = [closure_12(first(ref[21]).Button, obj9)];
      const intl4 = tmp5(tmp6[19]).intl;
      const string = intl4.string;
      const t = tmp5(tmp6[19]).t;
      if (first) {
        let stringResult = string(t.RscU7I);
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
            AnalyticsUtilsDefault.track(AnalyticEvents.VIBING_WUMPUS_ACTION, obj3);
          } else {
            const result1 = obj.pauseVibingWumpusMusic();
            const obj5 = { action: constants.PAUSE };
            AnalyticsUtilsDefault.track(AnalyticEvents.VIBING_WUMPUS_ACTION, obj5);
          }
          let tmp14 = stateFromStores;
          if (!stateFromStores) {
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
        icon: null,
      };
      if (first) {
        let PauseIcon = tmp5(tmp6[22]).PlayIcon;
      } else {
        PauseIcon = tmp5(tmp6[23]).PauseIcon;
      }
      const obj11 = { children: null };
      let tmp14 = require("LottieAnimationView");
      obj10.icon = closure_12(PauseIcon, { size: "md", color: tmp12(ref[9]).colors.REDESIGN_BUTTON_TERTIARY_TEXT });
      items4[1] = closure_12(first(ref[21]).Button, obj10);
      obj8.children = items4;
      items2[2] = closure_13(closure_6, obj8);
      obj3.children = items2;
      items1[1] = closure_13(closure_6, obj3);
      obj11.children = items1;
      return closure_13(closure_14, obj11);
    };
let closure_16 = tmp5;
ReactCompilerGating = fn(558);
let obj5 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/VibingWumpusModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { screens: null, initialRouteName: "VIBING_WUMPUS" };
        const obj3 = { VIBING_WUMPUS: null };
        const obj4 = {
          title: "",
          fullscreen: true,
          headerShown: false,
          render() {
            return closure_1_12(closure_1_16, {});
          },
        };
        obj3.VIBING_WUMPUS = obj4;
        obj2.screens = obj3;
        const tmp6 = __initData(Navigator.Navigator, obj2);
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      const obj = {
        screens: {
          VIBING_WUMPUS: {
            title: "",
            fullscreen: true,
            headerShown: false,
            render() {
              return closure_1_12(closure_1_16, {});
            },
          },
        },
        initialRouteName: "VIBING_WUMPUS",
      };
      return __initData(Navigator.Navigator, obj);
    };
export const VibingWumpusScreen = tmp5;
