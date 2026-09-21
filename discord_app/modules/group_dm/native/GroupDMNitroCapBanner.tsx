// === Module 17165: GroupDMNitroCapBanner ===

// Module 17165 (GroupDMNitroCapBanner)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4457 */;
import LinearGradientDefault from "LinearGradient" /* 5198 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8940 */;
import usePremiumPrimaryGradientColorsDefault from "usePremiumPrimaryGradientColors" /* 13686 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const locations = [0.0065, 0.5046, 0.9196];
const createStyles = fn(4756);
let obj2 = { wrapper: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16 }, pill: null, iconContainer: null, trailing: null, gradientClip: null, border: null, text: null };
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16 };
obj2.pill = { flexDirection: "row", alignItems: "center", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj4 = { flexDirection: "row", alignItems: "center", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.iconContainer = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, alignItems: "center", justifyContent: "center", marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let obj5 = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, alignItems: "center", justifyContent: "center", marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj2.trailing = { flexDirection: "row", alignItems: "center", marginStart: nativeDefault.space.PX_8 };
obj2.gradientClip = { overflow: "hidden" };
let obj6 = { flexDirection: "row", alignItems: "center", marginStart: nativeDefault.space.PX_8 };
obj2.border = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.text = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapBanner.tsx");

export default function GroupDMNitroCapBanner(showLeadingIcon) {
  let flag = showLeadingIcon.showLeadingIcon;
  ({ children, trailing } = showLeadingIcon);
  if (flag === undefined) {
    flag = true;
  }
  const tmp = closure_8();
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
  const obj2 = { style: null, children: null };
  const items = [tmp.wrapper, showLeadingIcon.wrapperStyle];
  obj2.style = items;
  const obj3 = { style: null, children: null };
  const items1 = [tmp.pill, { borderRadius: token }];
  obj3.style = items1;
  const obj4 = { style: null, children: null };
  const items2 = [React3.absoluteFill, tmp.gradientClip, { borderRadius: token }];
  obj4.style = items2;
  const obj5 = { style: null, useAngle: true, angle: 110.47, colors: usePremiumPrimaryGradientColorsDefault(), locations };
  const items3 = [React3.absoluteFill, { opacity: 0.2 }];
  obj5.style = items3;
  obj4.children = hasOwnProperty(LinearGradientDefault, obj5);
  const items4 = [hasOwnProperty(React4, obj4), , , , ];
  if (flag) {
    const obj6 = { style: tmp.iconContainer, children: null };
    const obj7 = { size: "md", color: nativeDefault.colors.WHITE };
    obj6.children = hasOwnProperty(NitroWheelIcon.NitroWheelIcon, obj7);
    flag = hasOwnProperty(React4, obj6);
  }
  items4[1] = flag;
  items4[2] = hasOwnProperty(React4, { style: tmp.text, children });
  items4[3] = hasOwnProperty(React4, { style: tmp.trailing, children: trailing });
  const obj10 = { style: null, pointerEvents: "none" };
  const items5 = [React3.absoluteFill, tmp.border, { borderRadius: token }];
  obj10.style = items5;
  items4[4] = hasOwnProperty(React4, obj10);
  obj3.children = items4;
  obj2.children = timestampProducer(React4, obj3);
  return hasOwnProperty(React4, obj2);
};