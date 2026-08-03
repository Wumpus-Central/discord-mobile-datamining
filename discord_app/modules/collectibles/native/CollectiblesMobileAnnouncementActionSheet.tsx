// === Module 15858: CatEarsBackdrop ===

// Module 15858 (CatEarsBackdrop)
import metadata from "metadata";
import get_ActivityIndicator from "QUICK_SWITCHER";
import { CollectiblesMobileShopScreen as closure_6 } from "items";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "Button";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c10;
let c4;
let c5;
let c9;
const require = arg1;
function CatEarsBackdrop() {
  const tmp = createCacheKey();
  const width = top(1474)().width;
  let obj = animatedPosition(5311);
  animatedPosition = obj.useBottomSheet().animatedPosition;
  top = top(1581)().top;
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  const result = (width - bound) / 2;
  const result1 = bound / 1200;
  let obj1 = animatedPosition(4116);
  const fn = function t() {
    let obj = { transform: null };
    obj = { translateY: animatedPosition.get() + top - 60 };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  fn.__closure = { animatedPosition, safeAreaTop: top, MASCOT_SAFE_AREA_NUDGE: 60 };
  fn.__workletHash = 6274760278164;
  fn.__initData = closure_12;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: items, children: null };
  items = [tmp.mascotContainer, { left: result, right: result }, animatedStyle];
  obj = { style: items1, children: null };
  items1 = [tmp.mascotLayer, ];
  obj1 = { top: -138 * result1, left: tmp6, right: tmp6 };
  items1[1] = obj1;
  const obj2 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  const obj3 = { uri: null };
  obj3[0] = top(15859);
  obj2[0] = obj3;
  obj2[1] = tmp.mascotImage;
  obj[1] = callback(closure_4, obj2);
  obj[1] = callback(closure_5, obj);
  return callback(top(4116).View, obj);
}
function FeatureRow(arg0) {
  let icon;
  let text;
  ({ icon, text } = arg0);
  const tmp = createCacheKey();
  let obj = { style: tmp.featureRow, children: null };
  const items = [icon, ];
  obj = { variant: "text-sm/medium", color: "text-subtle", style: tmp.featureText, children: text };
  items[1] = callback(require(4251) /* Text */.Text, obj);
  obj[1] = items;
  return callback2(closure_5, obj);
}
({ Image: c4, StyleSheet, View: c5 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { mascotContainer: null, mascotLayer: null, mascotImage: null, framePreviewImage: null, container: null, headerText: null, featureRow: null, featureText: null, featureRows: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.pointerEvents = "none";
createCacheKey[0] = createCacheKey;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey[1] = {};
createCacheKey[2] = { width: "100%", aspectRatio: 1.8324022346368716 };
createCacheKey[3] = { width: "100%", aspectRatio: 3.25, resizeMode: "contain" };
createCacheKey[4] = { padding: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_24, gap: require("Themes").space.PX_16 };
createCacheKey[5] = { textAlign: "center" };
let obj1 = {};
let obj2 = { padding: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_24, gap: require("Themes").space.PX_16 };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_16 };
createCacheKey[7] = { flex: 1 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_16 };
createCacheKey[8] = { gap: require("Themes").space.PX_32 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_12 = { code: "function CollectiblesMobileAnnouncementActionSheetTsx1(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}" };
let obj4 = { gap: require("Themes").space.PX_32 };
let result = require("items").fileFinishedImporting("modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx");

export default function CollectiblesMobileAnnouncementActionSheet(markAsDismissed) {
  let showEaNonPremiumMarketing;
  let showEaPremiumMarketing;
  let showGiftingMarketing;
  markAsDismissed = markAsDismissed.markAsDismissed;
  let importDefault;
  let dependencyMap;
  const tmp = createCacheKey();
  let obj = markAsDismissed(15860);
  const profileFramesMarketing = obj.useProfileFramesMarketing("CollectiblesMobileAnnouncementActionSheet");
  const intl = markAsDismissed(1236).intl;
  const string = intl.string;
  const t = markAsDismissed(1236).t;
  if (profileFramesMarketing.showEaPremiumMarketing) {
    let stringResult = string(t["7cmcJI"]);
  } else {
    stringResult = string(t.MkVbBY);
  }
  ({ showGiftingMarketing, showEaPremiumMarketing, showEaNonPremiumMarketing } = profileFramesMarketing);
  const intl2 = tmp2(1236).intl;
  const string2 = intl2.string;
  const t2 = tmp2(1236).t;
  if (showGiftingMarketing) {
    let string2Result = string2(t2["/4bQuG"]);
  } else if (showEaPremiumMarketing) {
    string2Result = string2(t2["5UI+bw"]);
  } else if (showEaNonPremiumMarketing) {
    string2Result = string2(t2["4a7pVU"]);
  } else {
    string2Result = string2(t2["+9vaAT"]);
  }
  importDefault = React.useRef(false);
  dependencyMap = React.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = React.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = React.useEffect(() => () => {
    if (!ref.current) {
      ref2.current(outer1_8.AUTO_DISMISS);
    }
  }, []);
  const items1 = [markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = React.useCallback(() => {
    callback.current = true;
    markAsDismissed(outer1_8.PRIMARY);
    let obj = markAsDismissed(6897);
    obj = { screen: outer1_6.FEATURED_PAGE, analyticsLocations: [], analyticsSource: callback(5601).ACTION_SHEET };
    const result = obj.openCollectiblesShopMobile(obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(outer1_8.USER_DISMISS);
  }, items2);
  const memo = React.useMemo(() => callback2(closure_13, {}), []);
  obj = { onDismiss: callback1, backdropChildren: memo, children: null };
  obj = { style: tmp.container, children: null };
  const obj1 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  const obj2 = { uri: null };
  obj2[0] = importDefault(15862);
  obj1[0] = obj2;
  obj1[1] = tmp.framePreviewImage;
  const items3 = [callback(closure_4, obj1), , , ];
  const obj3 = { variant: "heading-xl/bold", color: "text-strong", accessibilityRole: "header", style: tmp.headerText, children: null };
  const intl3 = tmp2(1236).intl;
  obj3[4] = intl3.string(markAsDismissed(1236).t.vRCvqo);
  items3[1] = callback(markAsDismissed(4251).Text, obj3);
  const obj4 = { style: tmp.featureRows, children: null };
  const obj5 = { icon: callback(markAsDismissed(5926).PaintIllocon, { size: 32 }), text: null };
  const intl4 = tmp2(1236).intl;
  obj5[1] = intl4.string(markAsDismissed(1236).t["6ZWB0C"]);
  const items4 = [callback(FeatureRow, obj5), callback(FeatureRow, { icon: callback(markAsDismissed(5926).HeartIllocon, { size: 32 }), text: stringResult }), ];
  const obj6 = { icon: callback(markAsDismissed(5926).HeartIllocon, { size: 32 }), text: stringResult };
  items4[2] = callback(FeatureRow, { icon: callback(markAsDismissed(5926).ShopIllocon, { size: 32 }), text: string2Result });
  obj4[1] = items4;
  items3[2] = callback2(closure_5, obj4);
  const obj8 = { size: "lg", text: null, onPress: null };
  const intl5 = tmp2(1236).intl;
  obj8[1] = intl5.string(markAsDismissed(1236).t.S9hXPI);
  obj8[2] = callback;
  items3[3] = callback(markAsDismissed(4666).Button, obj8);
  obj[1] = items3;
  obj[2] = callback2(closure_5, obj);
  return callback(markAsDismissed(5309).BottomSheet, obj);
};