// === Module 11449: RoleName ===

// Module 11449 (RoleName)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7620 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, name: { flexShrink: 1 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/roles/native/RoleName.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(23);
  ({ role, children, textVariant, dotBackground } = arg0);
  let str = "text-md/medium";
  if (undefined !== textVariant) {
    str = textVariant;
  }
  const tmp5 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function v() {
      return roleStyle.roleStyle;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
  ({ guildId, colorString, colorStrings } = role);
  const tmpResult = initialize;
  const processColorStringsArray = enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(colorStrings);
  const tmpResult3 = enhanced_role_colors_EnhancedRoleColorUtils;
  let tmp12 = "username" === stateFromStores;
  const isRoleStyleAndRoleColorsEligibleForERC = enhanced_role_colors_EnhancedRoleColorUtils.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, undefined, stateFromStores, processColorStringsArray);
  if (tmp12) {
    tmp12 = null != colorString;
  }
  if (cResult[2] === colorString) {
    if (cResult[3] === colorStrings) {
      if (cResult[4] === tmp4) {
        if (cResult[5] === guildId) {
          if (cResult[6] === stateFromStores) {
            let tmp14 = cResult[7];
          }
          if (cResult[8] === colorString) {
            if (cResult[9] === tmp12) {
              let tmp18 = cResult[10];
            }
            if (cResult[11] === tmp5.name) {
              if (cResult[12] === tmp18) {
                let tmp20 = cResult[13];
              }
              let tmp21;
              if (isRoleStyleAndRoleColorsEligibleForERC) {
                tmp21 = processColorStringsArray;
              }
              if (cResult[14] === children) {
                if (cResult[15] === tmp20) {
                  if (cResult[16] === tmp21) {
                    if (cResult[17] === str) {
                      let tmp22 = cResult[18];
                    }
                    if (cResult[19] === tmp5.container) {
                      if (cResult[20] === tmp14) {
                        if (cResult[21] === tmp22) {
                          let tmp25 = cResult[22];
                        }
                        return tmp25;
                      }
                    }
                    const obj2 = { style: tmp5.container, children: null };
                    const items1 = [tmp14, tmp22];
                    obj2.children = items1;
                    const tmp28 = hasOwnProperty(View, obj2);
                    cResult[19] = tmp5.container;
                    cResult[20] = tmp14;
                    cResult[21] = tmp22;
                    cResult[22] = tmp28;
                    tmp25 = tmp28;
                  }
                }
              }
              const obj3 = { variant: str, style: tmp20, lineClamp: 1, gradientColors: tmp21, children };
              const tmp24 = React4(Text_Text.Text, obj3);
              cResult[14] = children;
              cResult[15] = tmp20;
              cResult[16] = tmp21;
              cResult[17] = str;
              cResult[18] = tmp24;
              tmp22 = tmp24;
            }
            const items2 = [tmp5.name, tmp18];
            cResult[11] = tmp5.name;
            cResult[12] = tmp18;
            cResult[13] = items2;
            tmp20 = items2;
          }
          let tmp19;
          if (tmp12) {
            const obj4 = { color: colorString };
            tmp19 = obj4;
          }
          cResult[8] = colorString;
          cResult[9] = tmp12;
          cResult[10] = tmp19;
          tmp18 = tmp19;
        }
      }
    }
  }
  let tmp15 = "dot" === stateFromStores;
  if (tmp15) {
    tmp15 = null != colorString;
  }
  if (tmp15) {
    const obj5 = { color: colorString, colors: colorStrings, guildId, background: tmp4 };
    tmp15 = React4(native.RoleDot, obj5);
  }
  cResult[2] = colorString;
  cResult[3] = colorStrings;
  cResult[4] = undefined !== dotBackground && dotBackground;
  cResult[5] = guildId;
  cResult[6] = stateFromStores;
  cResult[7] = tmp15;
  tmp14 = tmp15;
  const tmpResult4 = enhanced_role_colors_EnhancedRoleColorUtils;
}) : ((dotBackground) => {
  ({ role, textVariant } = dotBackground);
  if (textVariant === undefined) {
    textVariant = "text-md/medium";
  }
  let flag = dotBackground.dotBackground;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
  ({ guildId, colorString, colorStrings } = role);
  const processColorStringsArray = enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(colorStrings);
  const obj4 = { style: tmp.container, children: null };
  let tmp9 = "dot" === stateFromStores;
  const isRoleStyleAndRoleColorsEligibleForERC = enhanced_role_colors_EnhancedRoleColorUtils.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, undefined, stateFromStores, processColorStringsArray);
  if (tmp9) {
    tmp9 = null != colorString;
  }
  if (tmp9) {
    const obj5 = { color: colorString, colors: colorStrings, guildId, background: flag };
    tmp9 = React4(native.RoleDot, obj5);
  }
  const items1 = [tmp9, ];
  const obj6 = { variant: textVariant, style: null, lineClamp: 1, gradientColors: null, children: null };
  const items2 = [tmp.name, ];
  let tmp13;
  if ("username" === stateFromStores) {
    if (null != colorString) {
      const obj7 = { color: colorString };
      tmp13 = obj7;
    }
  }
  items2[1] = tmp13;
  obj6.style = items2;
  let tmp15;
  if (isRoleStyleAndRoleColorsEligibleForERC) {
    tmp15 = processColorStringsArray;
  }
  obj6.gradientColors = tmp15;
  obj6.children = dotBackground.children;
  items1[1] = React4(Text_Text.Text, obj6);
  obj4.children = items1;
  return hasOwnProperty(View, obj4);
});