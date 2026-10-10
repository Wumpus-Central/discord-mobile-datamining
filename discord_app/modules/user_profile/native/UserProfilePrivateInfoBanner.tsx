// === Module 13370: UserProfilePrivateInfoBanner ===

// Module 13370 (UserProfilePrivateInfoBanner)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { banner: { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_4 = createStyles.createStyles(obj);
let obj2 = { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivateInfoBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfilePrivateInfoBanner(arg0) {
  const cResult = c.c(12);
  ({ username, containerBackground } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] !== containerBackground) {
    let tmp7 = null != containerBackground;
    if (tmp7) {
      const obj2 = { backgroundColor: containerBackground };
      tmp7 = obj2;
    }
    cResult[0] = containerBackground;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.banner) {
    if (cResult[3] === tmp5) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] !== username) {
      const intl = util.intl;
      const obj3 = { username };
      const formatResult = intl.format(util.t.P8ij6Z, obj3);
      cResult[5] = username;
      cResult[6] = formatResult;
      let tmp9 = formatResult;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] !== tmp9) {
      const obj4 = { variant: "text-sm/normal", children: tmp9 };
      const tmp13 = jsx(Text_Text.Text, { variant: "text-sm/normal", children: tmp9 });
      cResult[7] = tmp9;
      cResult[8] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[8];
    }
    if (cResult[9] === tmp8) {
      if (cResult[10] === tmp11) {
        let tmp14 = cResult[11];
      }
      return tmp14;
    }
    const obj5 = { style: tmp8, children: tmp11 };
    const tmp17 = <View style={tmp8}>{tmp11}</View>;
    cResult[9] = tmp8;
    cResult[10] = tmp11;
    cResult[11] = tmp17;
    tmp14 = tmp17;
  }
  const items = [tmp4.banner, tmp5];
  cResult[2] = tmp4.banner;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp8 = items;
}) : (function UserProfilePrivateInfoBanner(username) {
  const containerBackground = username.containerBackground;
  const items = [closure_4().banner, ];
  let tmp3 = null != containerBackground;
  if (tmp3) {
    const obj = { backgroundColor: containerBackground };
    tmp3 = obj;
  }
  const obj2 = { style: items, children: null };
  items[1] = tmp3;
  const obj3 = { variant: "text-sm/normal", children: null };
  const intl = util.intl;
  obj3.children = intl.format(util.t.P8ij6Z, { username: username.username });
  obj2.children = jsx(Text_Text.Text, { variant: "text-sm/normal", children: null });
  return <View style={items}>{null}</View>;
});