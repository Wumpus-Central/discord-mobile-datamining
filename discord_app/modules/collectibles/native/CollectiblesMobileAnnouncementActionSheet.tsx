// discord_app/modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import BottomSheetModal from "../../../../_runtime/05400_BottomSheetModal.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import _modDef19316 from "../../../../discord_assets/assets/collectibles/frames/announcement_sheet_frame.png.js";
import _modDef19317 from "../../../../discord_assets/assets/collectibles/frames/ea/announcement_key_1.png.js";
import noop from "../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
function CatEarsBackdrop() {
  const tmp = closure_10();
  const width = useWindowDimensionsDefault().width;
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  const result = (width - bound) / 2;
  const result1 = bound / 1200;
  let obj = BottomSheetModal;
  items = [closure_11, obj.useBottomSheet().animatedPosition, useSafeAreaInsetsDefault().top, 60];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp7, tmp8, tmp9, tmp10] = items;
  class CollectiblesMobileAnnouncementActionSheetTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: closure_0.get() + closure_1 - closure_2 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp8, tmp9, tmp10];
  CollectiblesMobileAnnouncementActionSheetTsx1.__closure = items1;
  CollectiblesMobileAnnouncementActionSheetTsx1.__workletHash = 11096597775309;
  CollectiblesMobileAnnouncementActionSheetTsx1.__initData = tmp7;
  const result2 = 56 * result1;
  const animatedStyle = _mod1652.useAnimatedStyle(CollectiblesMobileAnnouncementActionSheetTsx1);
  const obj3 = { style: null, children: null };
  const items2 = [tmp.mascotContainer, { left: result, right: result }, animatedStyle];
  obj3.style = items2;
  const obj4 = { style: null, children: null };
  const items3 = [tmp.mascotLayer];
  const rect = { top: -138 * result1, left: -result2, right: -result2 };
  items3[1] = rect;
  obj4.style = items3;
  const obj5 = {
    source: null,
    style: null,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
  };
  const obj6 = { uri: null };
  obj6.uri = _modDef19316;
  obj5.source = obj6;
  obj5.style = tmp.mascotImage;
  obj4.children = React5(FastImageDefault, obj5);
  obj3.children = React5(React4, obj4);
  return React5(_modDef1652.View, obj3);
}
function FeatureRow(arg0) {
  ({ icon, text } = arg0);
  const tmp = closure_10();
  const obj = { style: tmp.featureRow, children: null };
  items = [
    icon,
    React5(Text_Text.Text, { variant: "body-sm/medium", color: "text-subtle", style: tmp.featureText, children: text }),
  ];
  obj.children = items;
  return React6(React4, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
let closure_5 = fn(1074).CollectiblesMobileShopScreen;
const ACTION_SHEET_MAX_WIDTH = fn(5397).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = fn(4987).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5141);
let obj2 = {
  mascotContainer: null,
  mascotLayer: null,
  mascotImage: null,
  framePreviewImage: null,
  container: null,
  headerText: null,
  featureRow: null,
  featureText: null,
  featureRows: null,
};
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.pointerEvents = "none";
obj2.mascotContainer = obj3;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj2.mascotLayer = {};
obj2.mascotImage = { width: "100%", aspectRatio: 1.8324022346368716 };
obj2.framePreviewImage = { width: "100%", aspectRatio: 3.25, resizeMode: "contain" };
obj2.container = {
  padding: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_16,
};
obj2.headerText = { textAlign: "center" };
let obj4 = {};
let obj5 = {
  padding: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_16,
};
obj2.featureRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.featureText = { flex: 1 };
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.featureRows = { gap: nativeDefault.space.PX_32 };
let closure_10 = createStyles.createStyles(obj2);
let closure_11 = {
  code: "(function CollectiblesMobileAnnouncementActionSheetTsx1(){let[animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE]=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx");

export default function CollectiblesMobileAnnouncementActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
  importDefault = noop.useRef(false);
  dependencyMap = noop.useRef(markAsDismissed);
  items = [markAsDismissed];
  const effect = noop.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = noop.useEffect(
    () => () => {
      if (!ref.current) {
        ref2.current(constants2.AUTO_DISMISS);
      }
    },
    [],
  );
  const items1 = [markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(ContentDismissActionType.PRIMARY);
    const obj = CollectiblesActionCreators;
    const result = obj.openCollectiblesShopMobile({
      screen: constants.FEATURED_PAGE,
      analyticsLocations: [],
      analyticsSource: AnalyticsLocationDefault.ACTION_SHEET,
    });
  }, items1);
  const callback1 = noop.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const memo = noop.useMemo(() => closure_1_8(CatEarsBackdrop, {}), []);
  let obj = { onDismiss: callback1, backdropChildren: memo, children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = {
    source: null,
    style: null,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
  };
  const obj4 = { uri: _modDef19317 };
  obj3.source = obj4;
  obj3.style = tmp.framePreviewImage;
  const items3 = [closure_8(FastImageDefault, obj3), , ,];
  const obj5 = {
    variant: "heading-xl/semibold",
    color: "text-strong",
    accessibilityRole: "header",
    style: tmp.headerText,
    children: null,
  };
  const intl = markAsDismissed(1113).intl;
  obj5.children = intl.string(markAsDismissed(1113).t.vRCvqo);
  items3[1] = closure_8(markAsDismissed(5761).Text, obj5);
  const obj6 = { style: tmp.featureRows, children: null };
  const obj7 = { icon: closure_8(markAsDismissed(14515).PaintIllocon, { size: 32 }), text: null };
  const intl2 = markAsDismissed(1113).intl;
  obj7.text = intl2.string(markAsDismissed(1113).t["6ZWB0C"]);
  const items4 = [closure_8(FeatureRow, obj7), ,];
  const obj8 = { icon: closure_8(markAsDismissed(14503).HeartIllocon, { size: 32 }), text: null };
  const intl3 = markAsDismissed(1113).intl;
  obj8.text = intl3.string(markAsDismissed(1113).t.MkVbBY);
  items4[1] = closure_8(FeatureRow, obj8);
  const obj9 = { icon: closure_8(markAsDismissed(19318).ShopIllocon, { size: 32 }), text: null };
  const intl4 = markAsDismissed(1113).intl;
  obj9.text = intl4.string(markAsDismissed(1113).t["/4bQuG"]);
  items4[2] = closure_8(FeatureRow, obj9);
  obj6.children = items4;
  items3[2] = closure_9(closure_4, obj6);
  const obj10 = { size: "lg", text: null, onPress: null };
  const intl5 = markAsDismissed(1113).intl;
  obj10.text = intl5.string(markAsDismissed(1113).t.S9hXPI);
  obj10.onPress = callback;
  items3[3] = closure_8(markAsDismissed(5768).Button, obj10);
  obj2.children = items3;
  obj.children = closure_9(closure_4, obj2);
  return closure_8(markAsDismissed(5396).BottomSheet, obj);
}
