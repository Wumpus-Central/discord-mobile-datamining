// === Module 12959: UserProfilePrivateBanner ===

// Module 12959 (UserProfilePrivateBanner)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import LockIcon from "LockIcon" /* 5879 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { banner: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, paddingTop: 18, paddingBottom: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, position: "relative", zIndex: fn(6707).PROFILE_TOP_LAYER_Z_INDEX } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, paddingTop: 18, paddingBottom: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, position: "relative", zIndex: fn(6707).PROFILE_TOP_LAYER_Z_INDEX };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivateBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((primaryColor) => {
  const cResult = c.c(9);
  primaryColor = primaryColor.primaryColor;
  const tmp4 = closure_6();
  if (cResult[0] !== primaryColor) {
    let tmp7 = null != primaryColor;
    if (tmp7) {
      const obj2 = { backgroundColor: utils_ColorUtils.int2hex(primaryColor) };
      tmp7 = obj2;
      const tmpResult = utils_ColorUtils;
    }
    cResult[0] = primaryColor;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.banner) {
    if (cResult[3] === tmp5) {
      let tmp8 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { size: "xs", color: nativeDefault.colors.TEXT_DEFAULT };
      const tmp13 = React4(LockIcon.LockIcon, obj3);
      cResult[5] = tmp13;
      let tmp10 = tmp13;
    } else {
      tmp10 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "text-sm/medium", color: "text-default", children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t.KPnd2O);
      const tmp16 = React4(Text_Text.Text, obj4);
      cResult[6] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] !== tmp8) {
      const obj5 = { style: tmp8, children: null };
      const items = [tmp10, tmp14];
      obj5.children = items;
      const tmp20 = hasOwnProperty(View, obj5);
      cResult[7] = tmp8;
      cResult[8] = tmp20;
      let tmp17 = tmp20;
    } else {
      tmp17 = cResult[8];
    }
    return tmp17;
  }
  const items1 = [tmp4.banner, tmp5];
  cResult[2] = tmp4.banner;
  cResult[3] = tmp5;
  cResult[4] = items1;
  tmp8 = items1;
}) : ((primaryColor) => {
  primaryColor = primaryColor.primaryColor;
  const items = [closure_6().banner, ];
  let tmp3 = null != primaryColor;
  if (tmp3) {
    const obj = { backgroundColor: utils_ColorUtils.int2hex(primaryColor) };
    tmp3 = obj;
  }
  const obj3 = { style: items, children: null };
  items[1] = tmp3;
  const items1 = [React4(LockIcon.LockIcon, { size: "xs", color: nativeDefault.colors.TEXT_DEFAULT }), ];
  const obj5 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.KPnd2O);
  items1[1] = React4(Text_Text.Text, obj5);
  obj3.children = items1;
  return hasOwnProperty(View, obj3);
});