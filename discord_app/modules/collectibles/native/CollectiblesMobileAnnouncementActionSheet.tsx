// === Module 16944: CollectiblesMobileAnnouncementActionSheet ===

// Module 16944 (CollectiblesMobileAnnouncementActionSheet)
import nativeDefault from "native" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import Text_Text from "Text/Text" /* 4556 */;
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7541 */;
import _modDef16945 from "module_16945" /* 16945 */;
import _modDef16947 from "module_16947" /* 16947 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function CatEarsBackdrop() {
  const tmp = closure_11();
  const width = useWindowDimensionsDefault().width;
  let obj = BottomSheetModal;
  const animatedPosition = obj.useBottomSheet().animatedPosition;
  const top = useSafeAreaInsetsDefault().top;
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  const result = (width - bound) / 2;
  const result1 = bound / 1200;
  let obj1 = ReanimatedRexport;
  const fn = function t() {
    let obj = { transform: null };
    obj = { translateY: animatedPosition.get() + top - 60 };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { animatedPosition, safeAreaTop: top, MASCOT_SAFE_AREA_NUDGE: 60 };
  fn.__workletHash = 6274760278164;
  fn.__initData = __initData;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: null, children: null };
  let items = [tmp.mascotContainer, { left: result, right: result }, animatedStyle];
  obj.style = items;
  obj = { style: null, children: null };
  const items1 = [tmp.mascotLayer, ];
  const rect = { top: -138 * result1, left: -56 * result1, right: -56 * result1 };
  items1[1] = rect;
  obj.style = items1;
  obj1 = { source: { uri: _modDef16945 }, style: tmp.mascotImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  obj.children = React7(React4, obj1);
  obj.children = React7(hasOwnProperty, obj);
  return React7(ReanimatedRexportDefault.View, obj);
}
function FeatureRow(arg0) {
  ({ icon, text } = arg0);
  const tmp = closure_11();
  let obj = { style: tmp.featureRow, children: null };
  const items = [icon, ];
  obj = { variant: "text-sm/medium", color: "text-subtle", style: tmp.featureText, children: text };
  items[1] = React7(Text_Text.Text, obj);
  obj.children = items;
  return closure_1_10(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(1076).CollectiblesMobileShopScreen;
const ACTION_SHEET_MAX_WIDTH = fn(7151).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { mascotContainer: null, mascotLayer: null, mascotImage: null, framePreviewImage: null, container: null, headerText: null, featureRow: null, featureText: null, featureRows: null };
createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.pointerEvents = "none";
createStyles.mascotContainer = createStyles;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.mascotLayer = {};
createStyles.mascotImage = { width: "100%", aspectRatio: 1.8324022346368716 };
createStyles.framePreviewImage = { width: "100%", aspectRatio: 3.25, resizeMode: "contain" };
createStyles.container = { padding: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
createStyles.headerText = { textAlign: "center" };
let obj1 = {};
let obj2 = { padding: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
createStyles.featureRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
createStyles.featureText = { flex: 1 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
createStyles.featureRows = { gap: nativeDefault.space.PX_32 };
let closure_11 = createStyles.createStyles(createStyles);
const __initData = { code: "function CollectiblesMobileAnnouncementActionSheetTsx1(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx");

export default function CollectiblesMobileAnnouncementActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  importDefault = undefined;
  dependencyMap = undefined;
  const tmp = closure_11();
  let obj = markAsDismissed(16946);
  const intl = markAsDismissed(1114).intl;
  const string = intl.string;
  const t = markAsDismissed(1114).t;
  if (obj.useProfileFramesMarketing("CollectiblesMobileAnnouncementActionSheet").showGiftingMarketing) {
    let stringResult = string(t["/4bQuG"]);
  } else {
    stringResult = string(t["+9vaAT"]);
  }
  importDefault = noop.useRef(false);
  dependencyMap = noop.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = noop.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = noop.useEffect(() => () => {
    if (!ref.current) {
      ref2.current(constants2.AUTO_DISMISS);
    }
  }, []);
  const items1 = [markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(ContentDismissActionType.PRIMARY);
    const obj = { screen: constants.FEATURED_PAGE, analyticsLocations: [], analyticsSource: AnalyticsLocationDefault.ACTION_SHEET };
    const result = obj.openCollectiblesShopMobile(obj);
  }, items1);
  const callback1 = noop.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const memo = noop.useMemo(() => closure_1_9(CatEarsBackdrop, {}), []);
  obj = { onDismiss: callback1, backdropChildren: memo, children: null };
  obj = { style: tmp.container, children: null };
  const obj1 = { source: { uri: _modDef16947 }, style: tmp.framePreviewImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  const items3 = [closure_9(closure_4, obj1), , , ];
  const obj3 = { variant: "heading-xl/bold", color: "text-strong", accessibilityRole: "header", style: tmp.headerText, children: null };
  const intl2 = tmp2(1114).intl;
  obj3.children = intl2.string(markAsDismissed(1114).t.vRCvqo);
  items3[1] = closure_9(markAsDismissed(4556).Text, obj3);
  const obj4 = { style: tmp.featureRows, children: null };
  const obj5 = { icon: closure_9(markAsDismissed(5692).PaintIllocon, { size: 32 }), text: null };
  const intl3 = tmp2(1114).intl;
  obj5.text = intl3.string(markAsDismissed(1114).t["6ZWB0C"]);
  const items4 = [closure_9(FeatureRow, obj5), , ];
  const obj6 = { icon: closure_9(markAsDismissed(5692).HeartIllocon, { size: 32 }), text: null };
  const intl4 = tmp2(1114).intl;
  obj6.text = intl4.string(markAsDismissed(1114).t.MkVbBY);
  items4[1] = closure_9(FeatureRow, obj6);
  const obj2 = { uri: _modDef16947 };
  items4[2] = closure_9(FeatureRow, { icon: closure_9(markAsDismissed(5692).ShopIllocon, { size: 32 }), text: stringResult });
  obj4.children = items4;
  items3[2] = closure_10(closure_5, obj4);
  const obj8 = { size: "lg", text: null, onPress: null };
  const intl5 = tmp2(1114).intl;
  obj8.text = intl5.string(markAsDismissed(1114).t.S9hXPI);
  obj8.onPress = callback;
  items3[3] = closure_9(markAsDismissed(4975).Button, obj8);
  obj.children = items3;
  obj.children = closure_10(closure_5, obj);
  return closure_9(markAsDismissed(7150).BottomSheet, obj);
};