// === Module 10184: VibingWumpusScreen ===

// Module 10184 (VibingWumpusScreen)
import _slicedToArray from "_slicedToArray";
import module_4399 from "module_4399";
import get_ActivityIndicator from "getSystemLocale";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { VIBING_WUMPUS_MODAL_KEY } from "LOCATION_CONTEXT_MOBILE";
import VibingWumpusAction from "VibingWumpusAction";
import { AnalyticEvents } from "ME";
import jsxProd from "PauseIcon";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let closure_12;
let closure_14;
let closure_6;
let map1;
const require = arg1;
class VibingWumpusScreen {
  constructor() {
    tmp = Fragment();
    tmp2 = _slicedToArray(module_4399.useState(false), 2);
    first = tmp2[0];
    useState = first;
    closure_1 = tmp2[1];
    ref = module_4399.useRef(null);
    closure_2 = ref;
    tmp5 = useState;
    tmp6 = closure_2;
    obj = require("defaultAreStatesEqual");
    items = [];
    items[0] = View;
    stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    _slicedToArray = stateFromStores;
    effect = module_4399.useEffect(() => {
      let date = new Date();
      let obj = date(ref[11]);
      let result = obj.playVibingWumpusMusic();
      obj = { source: constants2.INAPPROPRIATE_CONVERSATION };
      callback(ref[12]).track(constants3.VIBING_WUMPUS_VIEWED, obj);
      return () => {
        let obj = outer1_1(outer1_2[12]);
        obj = { duration_open_ms: null, source: null };
        const date = new Date();
        const time = date.getTime();
        obj[0] = time - date.getTime();
        obj[1] = outer1_10.INAPPROPRIATE_CONVERSATION;
        obj.track(outer1_11.VIBING_WUMPUS_CLOSED, obj);
        const result = date(outer1_2[11]).stopVibingWumpusMusic();
      };
    }, []);
    tmp9 = jsxs;
    tmp11 = jsx;
    obj = { source: require("registerAsset"), style: tmp.rings };
    tmp10 = Fragment;
    tmp12 = closure_1;
    items1 = [, ];
    items1[0] = jsx(Image, obj);
    tmp13 = View;
    obj1 = { style: tmp.container, children: null };
    obj2 = { source: null, ref: null, autoPlay: null, loop: true, style: null, progress: null };
    tmp14 = require("play");
    obj2[0] = require("module_10188");
    obj2[1] = ref;
    obj2[2] = !stateFromStores;
    obj2[4] = tmp.wumpus;
    num = undefined;
    if (stateFromStores) {
      num = 0.8;
    }
    obj2[5] = num;
    items2 = [, , ];
    items2[0] = tmp11(tmp14, obj2);
    obj3 = { style: tmp.warningText, children: null };
    obj4 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: null };
    intl = require("getSystemLocale").intl;
    obj4[3] = intl.string(require("getSystemLocale").t.L4ifkZ);
    items3 = [, ];
    items3[0] = tmp11(require("Text").Text, obj4);
    obj5 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: null };
    intl2 = require("getSystemLocale").intl;
    obj5[2] = intl2.string(require("getSystemLocale").t.R8LCMZ);
    items3[1] = tmp11(require("Text").Text, obj5);
    obj3[1] = items3;
    items2[1] = tmp9(tmp13, obj3);
    obj6 = { style: tmp.ctaContainer, children: null };
    obj7 = { variant: "primary", size: "lg", text: null, grow: true, onPress: null };
    intl3 = require("getSystemLocale").intl;
    obj7[2] = intl3.string(require("getSystemLocale").t["8eKkaf"]);
    obj7[4] = function onPress() {
      let obj = callback(ref[12]);
      obj = { action: constants.BACK_TO_CONVERSATION };
      obj.track(constants3.VIBING_WUMPUS_ACTION, obj);
      callback(ref[19]).popWithKey(closure_8);
    };
    items4 = [, ];
    items4[0] = tmp11(require("Button").Button, obj7);
    intl4 = require("getSystemLocale").intl;
    string = intl4.string;
    t = require("getSystemLocale").t;
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
            let obj = first(ref[11]);
            if (first) {
              const result = obj.playVibingWumpusMusic();
              obj = { action: null };
              obj[0] = outer1_9.PLAY;
              callback(ref[12]).track(outer1_11.VIBING_WUMPUS_ACTION, obj);
              const obj4 = callback(ref[12]);
            } else {
              const result1 = obj.pauseVibingWumpusMusic();
              obj = { action: null };
              obj[0] = outer1_9.PAUSE;
              callback(ref[12]).track(outer1_11.VIBING_WUMPUS_ACTION, obj);
              const obj2 = callback(ref[12]);
            }
            let tmp14 = stateFromStores;
            if (!stateFromStores) {
              if (tmp) {
                const current = ref.current;
                if (current != null) {
                  current.resume();
                }
              }
              callback(!tmp);
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
      icon: null
    };
    if (first) {
      PauseIcon = require("PlayIcon").PlayIcon;
    } else {
      PauseIcon = require("PauseIcon").PauseIcon;
    }
    obj9 = { children: null };
    obj10 = { size: "md", color: require("Themes").colors.REDESIGN_BUTTON_TERTIARY_TEXT };
    obj8[5] = tmp11(PauseIcon, obj10);
    items4[1] = tmp11(require("Button").Button, obj8);
    obj6[1] = items4;
    items2[2] = tmp9(tmp13, obj6);
    obj1[1] = items2;
    items1[1] = tmp9(tmp13, obj1);
    obj9[0] = items1;
    return tmp9(tmp10, obj9);
  }
}
({ Image: c5, View: closure_6 } = get_ActivityIndicator);
({ VibingWumpusAction: c9, VibingWumpusSource: c10 } = VibingWumpusAction);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
createCacheKey = { container: null, warningText: null, ctaContainer: null, takeoverHeader: null, takeoverDescription: null, wumpus: null, rings: null };
createCacheKey = { display: "flex", alignItems: "center", justifyContent: "center", padding: require("Themes").space.PX_32, gap: require("Themes").space.PX_16, height: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: require("Themes").space.PX_16, gap: require("Themes").space.PX_4 };
let obj1 = { marginBottom: require("Themes").space.PX_16, gap: require("Themes").space.PX_4 };
createCacheKey[2] = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: require("Themes").space.PX_16 };
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { textAlign: "center" };
createCacheKey[5] = { height: 187 };
createCacheKey[6] = { position: "absolute", width: "100%", height: 440, top: 120 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: require("Themes").space.PX_16 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/VibingWumpusModal.tsx");

export default function VibingWumpusModal() {
  const VIBING_WUMPUS = {
    title: "",
    fullscreen: true,
    headerShown: false,
    render() {
      return callback(closure_16, {});
    }
  };
  return callback(require(5574) /* NavigationStack */.Navigator, { screens: { VIBING_WUMPUS }, initialRouteName: "VIBING_WUMPUS" });
};
export { VibingWumpusScreen };