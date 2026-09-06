// discord_app/modules/user_profile/native/UserProfileUpsellCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const Gradients = fn(7432).Gradients;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  upsellButton: null,
  titleContainer: null,
  linearGradient: null,
  outer: null,
  scroll: null,
  inner: null,
};
createStyles = { marginTop: 8, flexShrink: 0, borderRadius: nativeDefault.radii.round, gap: 4 };
createStyles.upsellButton = createStyles;
createStyles.titleContainer = { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 };
createStyles.linearGradient = { width: "100%", height: "100%", position: "absolute", overflow: "hidden" };
createStyles.outer = { marginHorizontal: fn(7208).PROFILE_SIDE_PADDING - 1 };
let obj1 = { marginHorizontal: fn(7208).PROFILE_SIDE_PADDING - 1 };
createStyles.scroll = {
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles.inner = { paddingVertical: 12, paddingHorizontal: 14 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellCard.tsx");

export default function UserProfileUpsellCard(headerText) {
  headerText = headerText.headerText;
  ({ style, children, ctaText, showLinearGradient, cardStyle, contentStyle, ctaStyle, onPress } = headerText);
  const tmp = closure_8();
  _require = tmp;
  let obj = {
    borderWidth: 1,
    style: null,
    direction: require("native").GradientBorder.Direction.HORIZONTAL,
    colors: Gradients.PREMIUM_TIER_2,
    borderRadius: nativeDefault.radii.lg,
    children: null,
  };
  let items = [tmp.outer, style];
  obj.style = items;
  obj = { bounces: false, style: null, contentContainerStyle: null, children: null };
  const items1 = [tmp.scroll, cardStyle];
  obj.style = items1;
  const items2 = [tmp.inner, contentStyle];
  obj.contentContainerStyle = items2;
  let tmp6Result = null;
  if (null != headerText) {
    obj = { style: tmp.titleContainer, children: null };
    const obj1 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, size: "xs" };
    const items3 = [closure_6(tmp3(8662).NitroWheelIcon, obj1)];
    const obj2 = { variant: "heading-sm/bold", children: headerText };
    items3[1] = closure_6(tmp3(4556).Text, obj2);
    obj.children = items3;
    tmp6Result = closure_7(closure_3, obj);
  }
  const items4 = [tmp6Result, children];
  const obj3 = {
    style: null,
    onPress,
    text: ctaText,
    color: require("native").ButtonColors.GREEN,
    renderIcon() {
      return closure_1_6(closure_0(dependencyMap[8]).NitroWheelIcon, { color: "white", size: "xs" });
    },
    renderLinearGradient: null,
  };
  const items5 = [tmp.upsellButton, ctaStyle];
  obj3.style = items5;
  let fn;
  if (showLinearGradient) {
    fn = () => {
      const obj = {
        style: null,
        start: ConstantsIOS.HorizontalGradient.START,
        end: ConstantsIOS.HorizontalGradient.END,
        colors: Gradients.PREMIUM_TIER_2_TRI_COLOR,
      };
      const items = [closure_0.linearGradient];
      obj.style = items;
      return timestampProducer(LinearGradientDefault, obj);
    };
  }
  obj3.renderLinearGradient = fn;
  items4[2] = closure_6(require("native").ShinyButton, obj3);
  obj.children = items4;
  obj.children = closure_7(closure_4, obj);
  return closure_6(require("native").GradientBorder, obj);
}
