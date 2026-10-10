// === Module 13534: InAppReportsUserPreview ===

// Module 13534 (InAppReportsUserPreview)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import ColorUtils from "ColorUtils" /* 4967 */;
import Text_Text from "Text/Text" /* 5088 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6662 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, title: { lineHeight: 16, marginBottom: 8 }, userContainer: null, userProfileInfo: null };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.userContainer = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 12 };
obj2.userProfileInfo = { marginLeft: 8 };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUserPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserPreview(user) {
  const cResult = c.c(34);
  user = user.user;
  const tmp4 = closure_5();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("InAppReportsUserPreview", "text-xs/bold");
  if (cResult[0] !== tmp4.borderColor.color) {
    const hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp4.borderColor.color, 0.08);
    cResult[0] = tmp4.borderColor.color;
    cResult[1] = hexWithOpacityResult;
    let tmp6 = hexWithOpacityResult;
    const tmpResult = ColorUtils;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === typeConsolidationEyebrow.style) {
    if (cResult[3] === tmp4.title) {
      if (cResult[5] !== typeConsolidationEyebrow.style) {
        if (null != typeConsolidationEyebrow.style) {
          const intl2 = util.intl;
          let stringResult = intl2.string(util.t.Rsth7z);
        } else {
          const intl = util.intl;
          stringResult = intl.string(util.t.Rsth7z).toUpperCase();
          const str = intl.string(util.t.Rsth7z);
        }
        cResult[5] = typeConsolidationEyebrow.style;
        cResult[6] = stringResult;
      } else {
        if (cResult[7] === typeConsolidationEyebrow.variant) {
          if (cResult[8] === tmp8) {
            if (cResult[9] === tmp9) {
              let tmp13 = cResult[10];
            }
            if (cResult[11] !== tmp6) {
              const obj3 = { borderColor: tmp6 };
              cResult[11] = tmp6;
              cResult[12] = obj3;
              let tmp16 = obj3;
            } else {
              tmp16 = cResult[12];
            }
            if (cResult[13] === tmp4.userContainer) {
              if (cResult[14] === tmp16) {
                let tmp17 = cResult[15];
              }
              if (cResult[16] !== user) {
                const obj4 = { size: native.AvatarSizes.LARGE_48, user, guildId: "Array" };
                const tmp20 = React3(native.Avatar, obj4);
                cResult[16] = user;
                cResult[17] = tmp20;
                let tmp18 = tmp20;
              } else {
                tmp18 = cResult[17];
              }
              if (cResult[18] !== user.globalName) {
                let tmp23 = null != user.globalName;
                if (tmp23) {
                  const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: user.globalName };
                  tmp23 = React3(Text_Text.Text, obj5);
                }
                cResult[18] = user.globalName;
                cResult[19] = tmp23;
                let tmp21 = tmp23;
              } else {
                tmp21 = cResult[19];
              }
              if (cResult[20] !== user.username) {
                const obj6 = { color: "text-default", variant: "text-sm/normal", children: user.username };
                const tmp27 = React3(Text_Text.Text, obj6);
                cResult[20] = user.username;
                cResult[21] = tmp27;
                let tmp25 = tmp27;
              } else {
                tmp25 = cResult[21];
              }
              if (cResult[22] === tmp4.userProfileInfo) {
                if (cResult[23] === tmp21) {
                  if (cResult[24] === tmp25) {
                    let tmp28 = cResult[25];
                  }
                  if (cResult[26] === tmp28) {
                    if (cResult[27] === tmp17) {
                      if (cResult[28] === tmp18) {
                        let tmp32 = cResult[29];
                      }
                      if (cResult[30] === tmp4.container) {
                        if (cResult[31] === tmp32) {
                          if (cResult[32] === tmp13) {
                            let tmp36 = cResult[33];
                          }
                          return tmp36;
                        }
                      }
                      const obj7 = { style: tmp4.container, children: null };
                      const items = [tmp13, tmp32];
                      obj7.children = items;
                      const tmp39 = React4(View, obj7);
                      cResult[30] = tmp4.container;
                      cResult[31] = tmp32;
                      cResult[32] = tmp13;
                      cResult[33] = tmp39;
                      tmp36 = tmp39;
                    }
                  }
                  const obj8 = { style: tmp17, children: null };
                  const items1 = [tmp18, tmp28];
                  obj8.children = items1;
                  const tmp35 = React4(View, obj8);
                  cResult[26] = tmp28;
                  cResult[27] = tmp17;
                  cResult[28] = tmp18;
                  cResult[29] = tmp35;
                  tmp32 = tmp35;
                }
              }
              const obj9 = { style: tmp4.userProfileInfo, children: null };
              const items2 = [tmp21, tmp25];
              obj9.children = items2;
              const tmp31 = React4(View, obj9);
              cResult[22] = tmp4.userProfileInfo;
              cResult[23] = tmp21;
              cResult[24] = tmp25;
              cResult[25] = tmp31;
              tmp28 = tmp31;
            }
            const items3 = [tmp4.userContainer, tmp16];
            cResult[13] = tmp4.userContainer;
            cResult[14] = tmp16;
            cResult[15] = items3;
            tmp17 = items3;
          }
        }
        const obj10 = { style: tmp8, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: cResult[6] };
        const tmp15 = React3(Text_Text.Text, obj10);
        cResult[7] = typeConsolidationEyebrow.variant;
        cResult[8] = tmp8;
        cResult[9] = cResult[6];
        cResult[10] = tmp15;
        tmp13 = tmp15;
      }
    }
  }
  if (null != typeConsolidationEyebrow.style) {
    const items4 = [tmp4.title, typeConsolidationEyebrow.style];
    let title = items4;
  } else {
    title = tmp4.title;
  }
  cResult[2] = typeConsolidationEyebrow.style;
  cResult[3] = tmp4.title;
  cResult[4] = title;
}) : (function UserPreview(user) {
  user = user.user;
  const tmp = closure_5();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("InAppReportsUserPreview", "text-xs/bold");
  const obj3 = { style: tmp.container, children: null };
  if (null != typeConsolidationEyebrow.style) {
    const items = [tmp.title, typeConsolidationEyebrow.style];
    let title = items;
  } else {
    title = tmp.title;
  }
  const obj4 = { style: title, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: null };
  if (null != typeConsolidationEyebrow.style) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.Rsth7z);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t.Rsth7z).toUpperCase();
    const str = intl.string(util.t.Rsth7z);
  }
  obj4.children = stringResult;
  const items1 = [React3(Text_Text.Text, obj4), ];
  const obj5 = { style: null, children: null };
  const items2 = [tmp.userContainer, { borderColor: ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj5.style = items2;
  const hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08);
  const items3 = [React3(native.Avatar, { size: native.AvatarSizes.LARGE_48, user, guildId: "Array" }), ];
  const obj7 = { style: tmp.userProfileInfo, children: null };
  let tmp8Result = null != user.globalName;
  if (tmp8Result) {
    const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: user.globalName };
    tmp8Result = React3(Text_Text.Text, obj8);
  }
  const items4 = [tmp8Result, React3(Text_Text.Text, { color: "text-default", variant: "text-sm/normal", children: user.username })];
  obj7.children = items4;
  items3[1] = React4(View, obj7);
  obj5.children = items3;
  items1[1] = React4(View, obj5);
  obj3.children = items1;
  return React4(View, obj3);
});