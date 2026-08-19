// discord_app/modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import metadataDefault from "../../../../discord_assets/assets/collectibles/frames/ea/announcement_key_1.png.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { CollectiblesMobileShopScreen as closure_6 } from "../CollectiblesShopConstants.tsx";
import { ACTION_SHEET_MAX_WIDTH } from "../../action_sheet/native/ActionSheetConstants.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function CatEarsBackdrop() {
  const tmp = callback3();
  const width = top(1494)().width;
  let obj = animatedPosition(6952);
  animatedPosition = obj.useBottomSheet().animatedPosition;
  top = top(1629)().top;
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  const result = (width - bound) / 2;
  const result1 = bound / 1200;
  obj1 = animatedPosition(4115);
  const fn = function t() {
    const obj = { translateY: animatedPosition.get() + top - 60 };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  fn.__closure = { animatedPosition, safeAreaTop: top, MASCOT_SAFE_AREA_NUDGE: 60 };
  fn.__workletHash = 6274760278164;
  fn.__initData = closure_12;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let items = [tmp.mascotContainer, { left: result, right: result }, animatedStyle];
  obj = { style: items1, children: null };
  items1 = [tmp.mascotLayer, ];
  obj1 = { top: -138 * result1, left: tmp6, right: tmp6 };
  items1[1] = obj1;
  const obj2 = { source: { uri: top(16162) }, style: tmp.mascotImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  obj[1] = callback(closure_4, obj2);
  obj[1] = callback(closure_5, obj);
  return callback(top(4115).View, obj);
}
function FeatureRow(arg0) {
  ({ icon, text } = arg0);
  const tmp = callback3();
  const items = [icon, ];
  const obj = { variant: "text-sm/medium", color: "text-subtle", style: tmp.featureText, children: text };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(closure_5, obj);
}
({ Image: c4, StyleSheet, View: c5 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.pointerEvents = "none";
createCacheKey[0] = createCacheKey;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey[1] = {};
createCacheKey[2] = { width: "100%", aspectRatio: 1.8324022346368716 };
createCacheKey[3] = { width: "100%", aspectRatio: 3.25, resizeMode: "contain" };
createCacheKey[4] = { padding: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_16 };
createCacheKey[5] = { textAlign: "center" };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_16 };
createCacheKey[7] = { flex: 1 };
createCacheKey[8] = { gap: ThemesDefault.space.PX_32 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let closure_12 = { code: "function CollectiblesMobileAnnouncementActionSheetTsx1(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}" };
let result = require("obj132").fileFinishedImporting("modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx");

export default function CollectiblesMobileAnnouncementActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  importDefault = undefined;
  dependencyMap = undefined;
  const tmp = callback3();
  let obj = markAsDismissed(16163);
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
      ref2.current(closure_1_8.AUTO_DISMISS);
    }
  }, []);
  const items1 = [markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = React.useCallback(() => {
    callback.current = true;
    markAsDismissed(ContentDismissActionType.PRIMARY);
    markAsDismissed(5300);
    const obj = { screen: closure_1_6.FEATURED_PAGE, analyticsLocations: [], analyticsSource: callback(7159).ACTION_SHEET };
    const result = obj.openCollectiblesShopMobile(obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const memo = React.useMemo(() => callback2(closure_13, {}), []);
  obj = { style: tmp.container, children: null };
  obj1 = { source: { uri: metadataDefault }, style: tmp.framePreviewImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  const items3 = [callback(closure_4, obj1), , , ];
  const obj3 = { variant: "heading-xl/bold", color: "text-strong", accessibilityRole: "header", style: tmp.headerText, children: null };
  const intl3 = tmp2(1236).intl;
  obj3[4] = intl3.string(markAsDismissed(1236).t.vRCvqo);
  items3[1] = callback(markAsDismissed(4734).Text, obj3);
  const obj4 = { style: tmp.featureRows, children: null };
  const obj5 = { icon: callback(markAsDismissed(5447).PaintIllocon, { size: 32 }), text: null };
  const intl4 = tmp2(1236).intl;
  obj5[1] = intl4.string(markAsDismissed(1236).t["6ZWB0C"]);
  const items4 = [callback(FeatureRow, obj5), , ];
  items4[1] = callback(FeatureRow, { icon: callback(markAsDismissed(5447).HeartIllocon, { size: 32 }), text: stringResult });
  const obj6 = { icon: callback(markAsDismissed(5447).HeartIllocon, { size: 32 }), text: stringResult };
  items4[2] = callback(FeatureRow, { icon: callback(markAsDismissed(5447).ShopIllocon, { size: 32 }), text: string2Result });
  obj4[1] = items4;
  items3[2] = callback2(closure_5, obj4);
  const obj8 = { size: "lg", text: null, onPress: null };
  const intl5 = tmp2(1236).intl;
  obj8[1] = intl5.string(markAsDismissed(1236).t.S9hXPI);
  obj8[2] = callback;
  items3[3] = callback(markAsDismissed(4745).Button, obj8);
  obj[1] = items3;
  obj[2] = callback2(closure_5, obj);
  return callback(markAsDismissed(6950).BottomSheet, obj);
};