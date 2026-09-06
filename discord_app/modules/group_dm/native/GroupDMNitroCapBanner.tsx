// discord_app/modules/group_dm/native/GroupDMNitroCapBanner.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import usePremiumPrimaryGradientColorsDefault from "../../premium/native/usePremiumPrimaryGradientColors.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const locations = [0.0065, 0.5046, 0.9196];
fn(4560);
let createStyles = {
  wrapper: null,
  pill: null,
  iconContainer: null,
  trailing: null,
  gradientClip: null,
  border: null,
  text: null,
};
createStyles = {
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_16,
};
createStyles.wrapper = createStyles;
createStyles.pill = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
let obj1 = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
createStyles.iconContainer = {
  width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
  alignItems: "center",
  justifyContent: "center",
  marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
let obj2 = {
  width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
  alignItems: "center",
  justifyContent: "center",
  marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
createStyles.trailing = { flexDirection: "row", alignItems: "center", marginStart: nativeDefault.space.PX_8 };
createStyles.gradientClip = { overflow: "hidden" };
let obj3 = { flexDirection: "row", alignItems: "center", marginStart: nativeDefault.space.PX_8 };
createStyles.border = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.text = { flex: 1 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapBanner.tsx");

export default function GroupDMNitroCapBanner(showLeadingIcon) {
  let flag = showLeadingIcon.showLeadingIcon;
  ({ children, trailing } = showLeadingIcon);
  if (flag === undefined) {
    flag = true;
  }
  const tmp = closure_8();
  let obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
  obj = { style: null, children: null };
  const items = [tmp.wrapper, showLeadingIcon.wrapperStyle];
  obj.style = items;
  obj = { style: null, children: null };
  const items1 = [tmp.pill, { borderRadius: token }];
  obj.style = items1;
  const obj1 = { style: null, children: null };
  const items2 = [React3.absoluteFill, tmp.gradientClip, { borderRadius: token }];
  obj1.style = items2;
  const obj2 = {
    style: null,
    useAngle: true,
    angle: 110.47,
    colors: usePremiumPrimaryGradientColorsDefault(),
    locations,
  };
  const items3 = [React3.absoluteFill, { opacity: 0.2 }];
  obj2.style = items3;
  obj1.children = hasOwnProperty(LinearGradientDefault, obj2);
  const items4 = [hasOwnProperty(React4, obj1), , , ,];
  if (flag) {
    const obj3 = { style: tmp.iconContainer, children: null };
    const obj4 = { size: "md", color: nativeDefault.colors.WHITE };
    obj3.children = hasOwnProperty(NitroWheelIcon.NitroWheelIcon, obj4);
    flag = hasOwnProperty(React4, obj3);
  }
  items4[1] = flag;
  items4[2] = hasOwnProperty(React4, { style: tmp.text, children });
  items4[3] = hasOwnProperty(React4, { style: tmp.trailing, children: trailing });
  const obj7 = { style: null, pointerEvents: "none" };
  const items5 = [React3.absoluteFill, tmp.border, { borderRadius: token }];
  obj7.style = items5;
  items4[4] = hasOwnProperty(React4, obj7);
  obj.children = items4;
  obj.children = timestampProducer(React4, obj);
  return hasOwnProperty(React4, obj);
}
