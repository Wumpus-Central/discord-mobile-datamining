// discord_app/modules/user_profile/native/UserProfileUpsellCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import LinearGradientDefault from "../../../../_runtime/05198_LinearGradient.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const Gradients = fn(7674).Gradients;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  upsellButton: { marginTop: 8, flexShrink: 0, borderRadius: nativeDefault.radii.round, gap: 4 },
  titleContainer: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 },
  linearGradient: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" },
  outer: null,
  scroll: null,
  inner: null,
};
let obj3 = { marginTop: 8, flexShrink: 0, borderRadius: nativeDefault.radii.round, gap: 4 };
obj2.outer = { marginHorizontal: fn(7453).PROFILE_SIDE_PADDING - 1 };
let obj4 = { marginHorizontal: fn(7453).PROFILE_SIDE_PADDING - 1 };
obj2.scroll = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.inner = { paddingVertical: 12, paddingHorizontal: 14 };
let closure_8 = createStyles.createStyles(obj2);
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
  const obj2 = { bounces: false, style: null, contentContainerStyle: null, children: null };
  const items1 = [tmp.scroll, cardStyle];
  obj2.style = items1;
  const items2 = [tmp.inner, contentStyle];
  obj2.contentContainerStyle = items2;
  let tmp6Result = null;
  if (null != headerText) {
    const obj3 = { style: tmp.titleContainer, children: null };
    const obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, size: "xs" };
    const items3 = [closure_6(tmp3(8940).NitroWheelIcon, obj4)];
    const obj5 = { variant: "heading-sm/bold", children: headerText };
    items3[1] = closure_6(tmp3(4752).Text, obj5);
    obj3.children = items3;
    tmp6Result = closure_7(closure_3, obj3);
  }
  const items4 = [tmp6Result, children];
  const obj6 = {
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
  obj6.style = items5;
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
  obj6.renderLinearGradient = fn;
  items4[2] = closure_6(require("native").ShinyButton, obj6);
  obj2.children = items4;
  obj.children = closure_7(closure_4, obj2);
  return closure_6(require("native").GradientBorder, obj);
}
