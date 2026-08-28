// === Module 16454: CatEarsBackdrop ===

// Module 16454 (CatEarsBackdrop)
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4442 */;
import metadataDefault from "metadata" /* 16457 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { CollectiblesMobileShopScreen as closure_6 } from "items" /* 678 */;
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO" /* 5588 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
function CatEarsBackdrop() {
  const tmp = callback3();
  const width = top(1494)().width;
  let obj = animatedPosition(5589);
  animatedPosition = obj.useBottomSheet().animatedPosition;
  top = top(1629)().top;
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  const result = (width - bound) / 2;
  const result1 = bound / 1200;
  obj1 = animatedPosition(4186);
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
  const obj2 = { source: { uri: top(16455) }, style: tmp.mascotImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  obj[1] = callback(closure_4, obj2);
  obj[1] = callback(closure_5, obj);
  return callback(top(4186).View, obj);
}
function FeatureRow(arg0) {
  ({ icon, text } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.featureRow, children: null };
  const items = [icon, ];
  obj = { variant: "text-sm/medium", color: "text-subtle", style: tmp.featureText, children: text };
  items[1] = callback(Text.Text, obj);
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
createCacheKey[4] = { padding: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_16 };
createCacheKey[5] = { textAlign: "center" };
let obj1 = {};
let obj2 = { padding: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_16 };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_16 };
createCacheKey[7] = { flex: 1 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_16 };
createCacheKey[8] = { gap: ThemesDefault.space.PX_32 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let closure_12 = { code: "function CollectiblesMobileAnnouncementActionSheetTsx1(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}" };
let obj4 = { gap: ThemesDefault.space.PX_32 };
let result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx");

export default function CollectiblesMobileAnnouncementActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  importDefault = undefined;
  dependencyMap = undefined;
  const tmp = callback3();
  let obj = markAsDismissed(16456);
  const intl = markAsDismissed(1236).intl;
  const string = intl.string;
  const t = markAsDismissed(1236).t;
  if (obj.useProfileFramesMarketing("CollectiblesMobileAnnouncementActionSheet").showGiftingMarketing) {
    let stringResult = string(t["/4bQuG"]);
  } else {
    stringResult = string(t["+9vaAT"]);
  }
  importDefault = React.useRef(false);
  dependencyMap = React.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = React.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = React.useEffect(() => () => {
    if (!ref.current) {
      ref2.current(closure_1_8.AUTO_DISMISS);
    }
  }, []);
  const items1 = [markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = React.useCallback(() => {
    callback.current = true;
    markAsDismissed(closure_1_8.PRIMARY);
    let obj = markAsDismissed(7233);
    obj = { screen: closure_1_6.FEATURED_PAGE, analyticsLocations: [], analyticsSource: callback(5938).ACTION_SHEET };
    const result = obj.openCollectiblesShopMobile(obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(closure_1_8.USER_DISMISS);
  }, items2);
  const memo = React.useMemo(() => callback2(closure_13, {}), []);
  obj = { onDismiss: callback1, backdropChildren: memo, children: null };
  obj = { style: tmp.container, children: null };
  obj1 = { source: { uri: metadataDefault }, style: tmp.framePreviewImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  const items3 = [callback(closure_4, obj1), , , ];
  const obj3 = { variant: "heading-xl/bold", color: "text-strong", accessibilityRole: "header", style: tmp.headerText, children: null };
  const intl2 = tmp2(1236).intl;
  obj3[4] = intl2.string(markAsDismissed(1236).t.vRCvqo);
  items3[1] = callback(markAsDismissed(4442).Text, obj3);
  const obj4 = { style: tmp.featureRows, children: null };
  const obj5 = { icon: callback(markAsDismissed(6221).PaintIllocon, { size: 32 }), text: null };
  const intl3 = tmp2(1236).intl;
  obj5[1] = intl3.string(markAsDismissed(1236).t["6ZWB0C"]);
  const items4 = [callback(FeatureRow, obj5), , ];
  const obj6 = { icon: callback(markAsDismissed(6221).HeartIllocon, { size: 32 }), text: null };
  const intl4 = tmp2(1236).intl;
  obj6[1] = intl4.string(markAsDismissed(1236).t.MkVbBY);
  items4[1] = callback(FeatureRow, obj6);
  const obj2 = { uri: metadataDefault };
  items4[2] = callback(FeatureRow, { icon: callback(markAsDismissed(6221).ShopIllocon, { size: 32 }), text: stringResult });
  obj4[1] = items4;
  items3[2] = callback2(closure_5, obj4);
  const obj8 = { size: "lg", text: null, onPress: null };
  const intl5 = tmp2(1236).intl;
  obj8[1] = intl5.string(markAsDismissed(1236).t.S9hXPI);
  obj8[2] = callback;
  items3[3] = callback(markAsDismissed(4893).Button, obj8);
  obj[1] = items3;
  obj[2] = callback2(closure_5, obj);
  return callback(markAsDismissed(5587).BottomSheet, obj);
};