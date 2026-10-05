// === Module 8307: InAppReportsUserPreview ===

// Module 8307 (InAppReportsUserPreview)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import Text_Text from "Text/Text" /* 4886 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6469 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let user;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: obj2, title: { lineHeight: 16, marginBottom: 8 }, userContainer: obj3, userProfileInfo: { marginLeft: 8 } };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 12 };
let closure_5 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let items;
  let items1;
  let items2;
  let title;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(34);
  user = user.user;
  const tmp4 = closure_5();
  const obj2 = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow("InAppReportsUserPreview", "text-xs/bold");
  if (cResult[0] !== tmp4.borderColor.color) {
    const tmpResult = ColorUtils;
    const hexWithOpacityResult = tmpResult.hexWithOpacity(tmp4.borderColor.color, 0.08);
    cResult[0] = tmp4.borderColor.color;
    cResult[1] = hexWithOpacityResult;
    tmp6 = hexWithOpacityResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === typeConsolidationEyebrow.style) {
    let tmp8;
    let tmp9;
    if (cResult[3] === tmp4.title) {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== typeConsolidationEyebrow.style) {
      let stringResult;
      if (null != typeConsolidationEyebrow.style) {
        const intl2 = intl3.intl;
        stringResult = intl2.string(intl3.t.Rsth7z);
      } else {
        const intl = intl3.intl;
        const str = intl.string(intl3.t.Rsth7z);
        stringResult = str.toUpperCase();
      }
      cResult[5] = typeConsolidationEyebrow.style;
      cResult[6] = stringResult;
      tmp9 = stringResult;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] === typeConsolidationEyebrow.variant) {
      if (cResult[8] === tmp8) {
        let tmp12;
        let tmp15;
        if (cResult[9] === tmp9) {
          tmp12 = cResult[10];
        }
        if (cResult[11] !== tmp6) {
          const obj3 = { borderColor: tmp6 };
          cResult[11] = tmp6;
          cResult[12] = obj3;
          tmp15 = obj3;
        } else {
          tmp15 = cResult[12];
        }
        if (cResult[13] === tmp4.userContainer) {
          let tmp16;
          let tmp17;
          let tmp20;
          let tmp24;
          if (cResult[14] === tmp15) {
            tmp16 = cResult[15];
          }
          if (cResult[16] !== user) {
            const obj4 = { size: native.AvatarSizes.LARGE_48, user, guildId: "r" };
            const Avatar = native.Avatar;
            const tmp19 = _false(Avatar, obj4);
            cResult[16] = user;
            cResult[17] = tmp19;
            tmp17 = tmp19;
          } else {
            tmp17 = cResult[17];
          }
          if (cResult[18] !== user.globalName) {
            let tmp22 = null != user.globalName;
            if (tmp22) {
              const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: user.globalName };
              tmp22 = _false(Text_Text.Text, obj5);
            }
            cResult[18] = user.globalName;
            cResult[19] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[19];
          }
          if (cResult[20] !== user.username) {
            const obj6 = { color: "text-default", variant: "text-sm/normal", children: user.username };
            const tmp26 = _false(Text_Text.Text, obj6);
            cResult[20] = user.username;
            cResult[21] = tmp26;
            tmp24 = tmp26;
          } else {
            tmp24 = cResult[21];
          }
          if (cResult[22] === tmp4.userProfileInfo) {
            if (cResult[23] === tmp20) {
              let tmp27;
              if (cResult[24] === tmp24) {
                tmp27 = cResult[25];
              }
              if (cResult[26] === tmp27) {
                if (cResult[27] === tmp16) {
                  let tmp31;
                  if (cResult[28] === tmp17) {
                    tmp31 = cResult[29];
                  }
                  if (cResult[30] === tmp4.container) {
                    if (cResult[31] === tmp31) {
                      let tmp35;
                      if (cResult[32] === tmp12) {
                        tmp35 = cResult[33];
                      }
                      return tmp35;
                    }
                  }
                  const obj7 = { style: tmp4.container, children: items };
                  items = [tmp12, tmp31];
                  const tmp38 = React3(View, obj7);
                  cResult[30] = tmp4.container;
                  cResult[31] = tmp31;
                  cResult[32] = tmp12;
                  cResult[33] = tmp38;
                  tmp35 = tmp38;
                }
              }
              const obj8 = { style: tmp16, children: items1 };
              items1 = [tmp17, tmp27];
              const tmp34 = React3(View, obj8);
              cResult[26] = tmp27;
              cResult[27] = tmp16;
              cResult[28] = tmp17;
              cResult[29] = tmp34;
              tmp31 = tmp34;
            }
          }
          const obj9 = { style: tmp4.userProfileInfo, children: items2 };
          items2 = [tmp20, tmp24];
          const tmp30 = React3(View, obj9);
          cResult[22] = tmp4.userProfileInfo;
          cResult[23] = tmp20;
          cResult[24] = tmp24;
          cResult[25] = tmp30;
          tmp27 = tmp30;
        }
        const items3 = [tmp4.userContainer, tmp15];
        cResult[13] = tmp4.userContainer;
        cResult[14] = tmp15;
        cResult[15] = items3;
        tmp16 = items3;
      }
    }
    const obj10 = { style: tmp8, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: tmp9 };
    const tmp14 = _false(Text_Text.Text, obj10);
    cResult[7] = typeConsolidationEyebrow.variant;
    cResult[8] = tmp8;
    cResult[9] = tmp9;
    cResult[10] = tmp14;
    tmp12 = tmp14;
  }
  if (null != typeConsolidationEyebrow.style) {
    const items4 = [tmp4.title, typeConsolidationEyebrow.style];
    title = items4;
  } else {
    title = tmp4.title;
  }
  cResult[2] = typeConsolidationEyebrow.style;
  cResult[3] = tmp4.title;
  cResult[4] = title;
  tmp8 = title;
}) : ((user) => {
  let items1;
  let items2;
  let items3;
  let items4;
  let stringResult;
  let title;
  user = user.user;
  const tmp = closure_5();
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("InAppReportsUserPreview", "text-xs/bold");
  const obj3 = { style: tmp.container, children: items1 };
  const obj2 = ColorUtils;
  const hexWithOpacityResult = obj2.hexWithOpacity(tmp.borderColor.color, 0.08);
  const Text = Text_Text.Text;
  if (null != typeConsolidationEyebrow.style) {
    const items = [tmp.title, typeConsolidationEyebrow.style];
    title = items;
  } else {
    title = tmp.title;
  }
  const obj4 = { style: title, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: stringResult };
  if (null != typeConsolidationEyebrow.style) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(intl3.t.Rsth7z);
  } else {
    const intl = intl3.intl;
    const str = intl.string(intl3.t.Rsth7z);
    stringResult = str.toUpperCase();
  }
  items1 = [_false(Text, obj4), ];
  const obj5 = { style: items2, children: items3 };
  items2 = [tmp.userContainer, { borderColor: hexWithOpacityResult }];
  const obj6 = { size: native.AvatarSizes.LARGE_48, user, guildId: "r" };
  const Avatar = native.Avatar;
  items3 = [_false(Avatar, obj6), ];
  let tmp8Result = null != user.globalName;
  const obj7 = { style: tmp.userProfileInfo, children: items4 };
  if (tmp8Result) {
    const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: user.globalName };
    tmp8Result = _false(Text_Text.Text, obj8);
  }
  items4 = [tmp8Result, ];
  const obj9 = { color: "text-default", variant: "text-sm/normal", children: user.username };
  items4[1] = _false(Text_Text.Text, obj9);
  items3[1] = React3(View, obj7);
  items1[1] = React3(View, obj5);
  return React3(View, obj3);
});
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUserPreview.tsx");

export default tmp5;