// discord_app/modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import BottomSheetModal from "../../../../_runtime/05270_BottomSheetModal.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import _modDef18985 from "../../../../discord_assets/assets/collectibles/frames/announcement_sheet_frame.png.js";
import _modDef18986 from "../../../../discord_assets/assets/collectibles/frames/ea/announcement_key_1.png.js";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function CatEarsBackdrop() {
  const tmp = closure_10();
  const width = useWindowDimensionsDefault().width;
  const animatedPosition = BottomSheetModal.useBottomSheet().animatedPosition;
  const top = useSafeAreaInsetsDefault().top;
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  const result = (width - bound) / 2;
  const result1 = bound / 1200;
  const fn = function t() {
    const obj = { transform: null };
    const items = [{ translateY: animatedPosition.get() + top - 60 }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { animatedPosition, safeAreaTop: top, MASCOT_SAFE_AREA_NUDGE: 60 };
  fn.__workletHash = 6274760278164;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const obj3 = { style: null, children: null };
  let items = [tmp.mascotContainer, { left: result, right: result }, animatedStyle];
  obj3.style = items;
  const obj4 = { style: null, children: null };
  const items1 = [tmp.mascotLayer];
  const rect = { top: -138 * result1, left: -56 * result1, right: -56 * result1 };
  items1[1] = rect;
  obj4.style = items1;
  const obj5 = {
    source: null,
    style: null,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
  };
  const obj6 = { uri: null };
  obj6.uri = _modDef18985;
  obj5.source = obj6;
  obj5.style = tmp.mascotImage;
  obj4.children = React6(FastImageDefault, obj5);
  obj3.children = React6(React4, obj4);
  return React6(ReanimatedRexportDefault.View, obj3);
}
function FeatureRow(arg0) {
  ({ icon, text } = arg0);
  const tmp = closure_10();
  const obj = { style: tmp.featureRow, children: null };
  const items = [
    icon,
    React6(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", style: tmp.featureText, children: text }),
  ];
  obj.children = items;
  return React7(React4, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
let closure_5 = fn(1074).CollectiblesMobileShopScreen;
const ACTION_SHEET_MAX_WIDTH = fn(5268).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = fn(4855).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5009);
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
const __initData = {
  code: "function CollectiblesMobileAnnouncementActionSheetTsx1(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx");

export default function CollectiblesMobileAnnouncementActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
  importDefault = noop.useRef(false);
  dependencyMap = noop.useRef(markAsDismissed);
  const items = [markAsDismissed];
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
  const obj4 = { uri: _modDef18986 };
  obj3.source = obj4;
  obj3.style = tmp.framePreviewImage;
  const items3 = [closure_8(FastImageDefault, obj3), , ,];
  const obj5 = {
    variant: "heading-xl/bold",
    color: "text-strong",
    accessibilityRole: "header",
    style: tmp.headerText,
    children: null,
  };
  const intl = markAsDismissed(1114).intl;
  obj5.children = intl.string(markAsDismissed(1114).t.vRCvqo);
  items3[1] = closure_8(markAsDismissed(5619).Text, obj5);
  const obj6 = { style: tmp.featureRows, children: null };
  const obj7 = { icon: closure_8(markAsDismissed(14250).PaintIllocon, { size: 32 }), text: null };
  const intl2 = markAsDismissed(1114).intl;
  obj7.text = intl2.string(markAsDismissed(1114).t["6ZWB0C"]);
  const items4 = [closure_8(FeatureRow, obj7), ,];
  const obj8 = { icon: closure_8(markAsDismissed(14238).HeartIllocon, { size: 32 }), text: null };
  const intl3 = markAsDismissed(1114).intl;
  obj8.text = intl3.string(markAsDismissed(1114).t.MkVbBY);
  items4[1] = closure_8(FeatureRow, obj8);
  const obj9 = { icon: closure_8(markAsDismissed(18987).ShopIllocon, { size: 32 }), text: null };
  const intl4 = markAsDismissed(1114).intl;
  obj9.text = intl4.string(markAsDismissed(1114).t["/4bQuG"]);
  items4[2] = closure_8(FeatureRow, obj9);
  obj6.children = items4;
  items3[2] = closure_9(closure_4, obj6);
  const obj10 = { size: "lg", text: null, onPress: null };
  const intl5 = markAsDismissed(1114).intl;
  obj10.text = intl5.string(markAsDismissed(1114).t.S9hXPI);
  obj10.onPress = callback;
  items3[3] = closure_8(markAsDismissed(5629).Button, obj10);
  obj2.children = items3;
  obj.children = closure_9(closure_4, obj2);
  return closure_8(markAsDismissed(5267).BottomSheet, obj);
}
