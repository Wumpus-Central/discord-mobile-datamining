// === Module 16690: GroupDMNitroCapBanner ===

// Module 16690 (GroupDMNitroCapBanner)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import map from "map" /* 4262 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8662 */;
import usePremiumPrimaryGradientColorsDefault from "usePremiumPrimaryGradientColors" /* 13436 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = [0.0065, 0.5046, 0.9196];
createCacheKey = { wrapper: null, pill: null, iconContainer: null, trailing: null, gradientClip: null, border: null, text: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", paddingVertical: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj1 = { flexDirection: "row", alignItems: "center", paddingVertical: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[2] = { width: ThemesDefault.modules.mobile.TABLE_ROW_ICON_SIZE, alignItems: "center", justifyContent: "center", marginEnd: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
const obj2 = { width: ThemesDefault.modules.mobile.TABLE_ROW_ICON_SIZE, alignItems: "center", justifyContent: "center", marginEnd: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", marginStart: ThemesDefault.space.PX_8 };
createCacheKey[4] = { overflow: "hidden" };
let obj3 = { flexDirection: "row", alignItems: "center", marginStart: ThemesDefault.space.PX_8 };
createCacheKey[5] = { borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[6] = { flex: 1 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj4 = { borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
const result = require("set").fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapBanner.tsx");

export default function GroupDMNitroCapBanner(showLeadingIcon) {
  let flag = showLeadingIcon.showLeadingIcon;
  ({ children, trailing } = showLeadingIcon);
  if (flag === undefined) {
    flag = true;
  }
  const tmp = callback2();
  let obj = map;
  const token = obj.useToken(ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
  obj = { style: items, children: null };
  items = [tmp.wrapper, showLeadingIcon.wrapperStyle];
  obj = { style: items1, children: null };
  items1 = [tmp.pill, { borderRadius: token }];
  obj1 = { style: items2, children: null };
  items2 = [closure_3.absoluteFill, tmp.gradientClip, { borderRadius: token }];
  const tmp10 = closure_3;
  const tmp2 = require;
  const tmp4 = importDefault;
  const tmp6 = usePremiumPrimaryGradientColorsDefault();
  const tmp9 = closure_6;
  const items3 = [closure_3.absoluteFill, { opacity: 0.2 }];
  obj1[1] = callback(LinearGradientDefault, { style: items3, useAngle: true, angle: 110.47, colors: usePremiumPrimaryGradientColorsDefault(), locations: closure_7 });
  const items4 = [callback(closure_4, obj1), , , , ];
  if (flag) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.iconContainer;
    const obj4 = { size: "md", color: null };
    obj4[1] = ThemesDefault.colors.WHITE;
    obj3[1] = tmp7(NitroWheelIcon.NitroWheelIcon, obj4);
    flag = tmp7(tmp8, obj3);
  }
  items4[1] = flag;
  items4[2] = callback(closure_4, { style: tmp.text, children });
  items4[3] = callback(closure_4, { style: tmp.trailing, children: trailing });
  const items5 = [tmp10.absoluteFill, tmp.border, { borderRadius: token }];
  items4[4] = callback(closure_4, { style: items5, pointerEvents: "none" });
  obj[1] = items4;
  obj[1] = tmp9(closure_4, obj);
  return callback(closure_4, obj);
};