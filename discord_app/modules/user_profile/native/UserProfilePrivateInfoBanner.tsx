// === Module 12929: UserProfilePrivateInfoBanner ===

// Module 12929 (UserProfilePrivateInfoBanner)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { banner: obj2 };
obj2 = { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_4 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let containerBackground;
  let tmp5;
  let username;
  const obj = react;
  const cResult = obj.c(12);
  ({ username, containerBackground } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] !== containerBackground) {
    let tmp7 = null != containerBackground;
    if (tmp7) {
      tmp7 = { backgroundColor: containerBackground };
      const obj2 = { backgroundColor: containerBackground };
    }
    cResult[0] = containerBackground;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.banner) {
    let tmp8;
    let tmp9;
    let tmp11;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== username) {
      const intl = intl2.intl;
      const obj3 = { username };
      const formatResult = intl.format(intl2.t.P8ij6Z, obj3);
      cResult[5] = username;
      cResult[6] = formatResult;
      tmp9 = formatResult;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] !== tmp9) {
      const tmp13 = jsx(Text_Text.Text, { variant: "text-sm/normal", children: tmp9 });
      cResult[7] = tmp9;
      cResult[8] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[8];
    }
    if (cResult[9] === tmp8) {
      let tmp14;
      if (cResult[10] === tmp11) {
        tmp14 = cResult[11];
      }
      return tmp14;
    }
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
}) : ((containerBackground) => {
  let intl;
  containerBackground = containerBackground.containerBackground;
  const username = containerBackground.username;
  const items = [closure_4().banner, ];
  let tmp3 = null != containerBackground;
  if (tmp3) {
    tmp3 = { backgroundColor: containerBackground };
    const obj = { backgroundColor: containerBackground };
  }
  items[1] = tmp3;
  ({ variant: "text-sm/normal", children: intl.format(intl2.t.P8ij6Z, { username }) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <View style={items}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivateInfoBanner.tsx");

export default tmp2;