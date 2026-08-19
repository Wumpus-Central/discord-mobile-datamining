// === Module 11448: ? ===

// Module 11448
import ThemesDefault from "Themes" /* 712 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importAllResult from "noop" /* 19 */;

const require = fn;
({ jsx: c4, jsxs: c5 } = jsxProd);
{ titleWrapper: { position: "absolute", top: 0, left: 0, right: 0, justifyContent: "center", alignItems: "center", padding: 16, height: require("VoicePanelControlsModes").CONTROLS_DRAWER_HEADER_SIZE }, titlePill: null, titlePillBG: null };
let obj = { borderRadius: ThemesDefault.radii.round, paddingHorizontal: 12, paddingTop: 1, paddingBottom: 2 };
obj[1] = obj;
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj[2] = createCacheKey;
let closure_6 = createCacheKey.createStyles(obj);
let closure_7 = { code: "function VoicePanelControlsDrawerTitleTsx1(){const{shown,_shown,disablePill,backgroundColor}=this.__closure;const showBGColor=shown!=null?shown.get():_shown.get();return{backgroundColor:showBGColor&&!disablePill?backgroundColor:'transparent'};}" };
const memoResult = importAllResult.memo(function VoicePanelControlsDrawerTitle(children) {
  let shown = children.shown;
  let flag = children.disablePill;
  if (flag === undefined) {
    flag = false;
  }
  let sharedValue;
  ({ style, blurStyle } = children);
  const tmp = callback();
  let obj = shown(sharedValue[6]);
  sharedValue = obj.useSharedValue(true);
  let backgroundColor = tmp.titlePillBG.backgroundColor;
  obj1 = shown(sharedValue[6]);
  const fn = function p() {
    if (null != shown) {
      let value = shown.get();
    } else {
      value = sharedValue.get();
    }
    backgroundColor = "transparent";
    if (value) {
      backgroundColor = "transparent";
    }
    return { backgroundColor };
  };
  fn.__closure = { shown, _shown: sharedValue, disablePill: flag, backgroundColor };
  fn.__workletHash = 14837285839887;
  fn.__initData = closure_7;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: items, children: null };
  items = [tmp.titleWrapper, style];
  const tmp2 = shown;
  const tmp7 = flag;
  const tmp8 = flag(sharedValue[7]);
  if (shown == null) {
    shown = sharedValue;
  }
  obj = { shown, style: backgroundColor.absoluteFillObject, blurStyle };
  const items1 = [callback(flag(sharedValue[8]), obj), ];
  obj1 = { style: items2, children: null };
  items2 = [tmp.titlePill, animatedStyle];
  const tmp10 = flag(sharedValue[8]);
  obj1[1] = callback(tmp2(sharedValue[10]).Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: children.title });
  items1[1] = callback(tmp7(sharedValue[9]), obj1);
  obj[1] = items1;
  return callback2(tmp8, obj);
});
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawerTitle.tsx");

export default memoResult;