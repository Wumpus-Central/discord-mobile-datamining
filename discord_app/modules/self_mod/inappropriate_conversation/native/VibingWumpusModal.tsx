// discord_app/modules/self_mod/inappropriate_conversation/native/VibingWumpusModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import InappropriateConversationsActionCreators from "../InappropriateConversationsActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
class VibingWumpusScreen {
  constructor() {
    tmp = closure_15();
    tmp2 = closure_3(closure_4.useState(false), 2);
    first = tmp2[0];
    closure_0 = first;
    closure_1 = tmp2[1];
    ref = closure_4.useRef(null);
    closure_2 = ref;
    tmp5 = closure_0;
    tmp6 = closure_2;
    obj = closure_0(closure_2[10]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    closure_3 = stateFromStores;
    effect = closure_4.useEffect(() => {
      let date = new Date();
      let obj = date(ref[11]);
      let result = obj.playVibingWumpusMusic();
      obj = { source: constants2.INAPPROPRIATE_CONVERSATION };
      closure_1(ref[12]).track(constants3.VIBING_WUMPUS_VIEWED, obj);
      return () => {
        closure_1(ref[12]);
        const obj = { duration_open_ms: null, source: null };
        date = new Date();
        const time = date.getTime();
        obj.duration_open_ms = time - date.getTime();
        obj.source = constants2.INAPPROPRIATE_CONVERSATION;
        obj.track(constants3.VIBING_WUMPUS_CLOSED, obj);
        const result = first(ref[11]).stopVibingWumpusMusic();
      };
    }, []);
    tmp9 = jsxs;
    tmp11 = jsx;
    obj = { source: closure_1(closure_2[13]), style: tmp.rings };
    tmp10 = Fragment;
    tmp12 = closure_1;
    items1 = [,];
    items1[0] = jsx(Image, obj);
    tmp13 = View;
    obj1 = { style: tmp.container, children: null };
    obj2 = { source: null, ref: null, autoPlay: null, loop: true, style: null, progress: null };
    tmp14 = closure_1(closure_2[14]);
    obj2.source = closure_0(closure_2[15]);
    obj2.ref = ref;
    obj2.autoPlay = !stateFromStores;
    obj2.style = tmp.wumpus;
    num = undefined;
    if (stateFromStores) {
      num = 0.8;
    }
    obj2.progress = num;
    items2 = [, ,];
    items2[0] = tmp11(tmp14, obj2);
    obj3 = { style: tmp.warningText, children: null };
    obj4 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: null };
    intl = tmp5(tmp6[17]).intl;
    obj4.children = intl.string(tmp5(tmp6[17]).t.L4ifkZ);
    items3 = [,];
    items3[0] = tmp11(tmp5(tmp6[16]).Text, obj4);
    obj5 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: null };
    intl2 = tmp5(tmp6[17]).intl;
    obj5.children = intl2.string(tmp5(tmp6[17]).t.R8LCMZ);
    items3[1] = tmp11(tmp5(tmp6[16]).Text, obj5);
    obj3.children = items3;
    items2[1] = tmp9(tmp13, obj3);
    obj6 = { style: tmp.ctaContainer, children: null };
    obj7 = { variant: "primary", size: "lg", text: null, grow: true, onPress: null };
    intl3 = tmp5(tmp6[17]).intl;
    obj7.text = intl3.string(tmp5(tmp6[17]).t["8eKkaf"]);
    obj7.onPress = function onPress() {
      closure_1(ref[12]);
      const obj = { action: constants.BACK_TO_CONVERSATION };
      obj.track(constants3.VIBING_WUMPUS_ACTION, obj);
      closure_1(ref[19]).popWithKey(VIBING_WUMPUS_MODAL_KEY);
    };
    items4 = [,];
    items4[0] = tmp11(tmp5(tmp6[18]).Button, obj7);
    intl4 = tmp5(tmp6[17]).intl;
    string = intl4.string;
    t = tmp5(tmp6[17]).t;
    if (first) {
      stringResult = string(t.RscU7I);
    } else {
      stringResult = string(t.ZcgDJX);
    }
    obj8 = {
      variant: "tertiary",
      size: "lg",
      text: stringResult,
      grow: true,
      onPress() {
        let obj = InappropriateConversationsActionCreators;
        if (first) {
          const result = obj.playVibingWumpusMusic();
          obj = { action: constants.PLAY };
          AnalyticsUtilsDefault.track(AnalyticEvents.VIBING_WUMPUS_ACTION, obj);
        } else {
          const result1 = obj.pauseVibingWumpusMusic();
          obj = { action: constants.PAUSE };
          AnalyticsUtilsDefault.track(AnalyticEvents.VIBING_WUMPUS_ACTION, obj);
        }
        let tmp14 = stateFromStores;
        if (!stateFromStores) {
          if (tmp) {
            const current = ref.current;
            if (current != null) {
              current.resume();
            }
          }
          closure_1(!tmp);
        }
        if (!tmp14) {
          tmp14 = tmp;
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
      PauseIcon = tmp5(tmp6[20]).PlayIcon;
    } else {
      PauseIcon = tmp5(tmp6[21]).PauseIcon;
    }
    obj9 = { children: null };
    obj10 = { size: "md", color: tmp12(tmp6[9]).colors.REDESIGN_BUTTON_TERTIARY_TEXT };
    obj8.icon = tmp11(PauseIcon, obj10);
    items4[1] = tmp11(tmp5(tmp6[18]).Button, obj8);
    obj6.children = items4;
    items2[2] = tmp9(tmp13, obj6);
    obj1.children = items2;
    items1[1] = tmp9(tmp13, obj1);
    obj9.children = items1;
    return tmp9(tmp10, obj9);
  }
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const VIBING_WUMPUS_MODAL_KEY = fn(11363).VIBING_WUMPUS_MODAL_KEY;
const InappropriateConversationsConstants = fn(11403);
({ VibingWumpusAction: closure_9, VibingWumpusSource: c10 } = InappropriateConversationsConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  warningText: null,
  ctaContainer: null,
  takeoverHeader: null,
  takeoverDescription: null,
  wumpus: null,
  rings: null,
};
createStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: nativeDefault.space.PX_32,
  gap: nativeDefault.space.PX_16,
  height: "100%",
};
createStyles.container = createStyles;
createStyles.warningText = { marginBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_4 };
let obj1 = { marginBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_4 };
createStyles.ctaContainer = {
  display: "flex",
  alignItems: "center",
  alignSelf: "stretch",
  gap: nativeDefault.space.PX_16,
};
createStyles.takeoverHeader = { textAlign: "center" };
createStyles.takeoverDescription = { textAlign: "center" };
createStyles.wumpus = { height: 187 };
createStyles.rings = { position: "absolute", width: "100%", height: 440, top: 120 };
const __initData = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/VibingWumpusModal.tsx");

export default function VibingWumpusModal() {
  let obj = { screens: null, initialRouteName: "VIBING_WUMPUS" };
  obj = {
    VIBING_WUMPUS: {
      title: "",
      fullscreen: true,
      headerShown: false,
      render() {
        return closure_1_12(VibingWumpusScreen, {});
      },
    },
  };
  obj.screens = obj;
  return closure_1_12(Navigator.Navigator, obj);
}
export { VibingWumpusScreen };
