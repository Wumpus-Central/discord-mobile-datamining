// === Module 11462: RoleName ===

// Module 11462 (RoleName)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7631 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, name: { flexShrink: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let colorString;
  let colorStrings;
  let dotBackground;
  let guildId;
  let items1;
  let role;
  let roleStyle;
  let textVariant;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(23);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  ({ guildId, colorString, colorStrings } = role);
  const tmpResult3 = enhanced_role_colors_EnhancedRoleColorUtils;
  const processColorStringsArray = tmpResult3.useProcessColorStringsArray(colorStrings);
  let tmp12 = "username" === stateFromStores;
  const tmpResult4 = enhanced_role_colors_EnhancedRoleColorUtils;
  const isRoleStyleAndRoleColorsEligibleForERC = tmpResult4.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, undefined, stateFromStores, processColorStringsArray);
  if (tmp12) {
    tmp12 = null != colorString;
  }
  if (cResult[2] === colorString) {
    if (cResult[3] === colorStrings) {
      if (cResult[4] === (undefined !== dotBackground && dotBackground)) {
        if (cResult[5] === guildId) {
          let tmp14;
          if (cResult[6] === stateFromStores) {
            tmp14 = cResult[7];
          }
          if (cResult[8] === colorString) {
            let tmp18;
            if (cResult[9] === tmp12) {
              tmp18 = cResult[10];
            }
            if (cResult[11] === tmp5.name) {
              let tmp20;
              if (cResult[12] === tmp18) {
                tmp20 = cResult[13];
              }
              let tmp21;
              if (isRoleStyleAndRoleColorsEligibleForERC) {
                tmp21 = processColorStringsArray;
              }
              if (cResult[14] === children) {
                if (cResult[15] === tmp20) {
                  if (cResult[16] === tmp21) {
                    let tmp22;
                    if (cResult[17] === str) {
                      tmp22 = cResult[18];
                    }
                    if (cResult[19] === tmp5.container) {
                      if (cResult[20] === tmp14) {
                        let tmp25;
                        if (cResult[21] === tmp22) {
                          tmp25 = cResult[22];
                        }
                        return tmp25;
                      }
                    }
                    const obj2 = { style: tmp5.container, children: items1 };
                    items1 = [tmp14, tmp22];
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
              const tmp24 = React3(Text_Text.Text, obj3);
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
            tmp19 = { color: colorString };
            const obj4 = { color: colorString };
          }
          cResult[8] = colorString;
          cResult[9] = tmp12;
          cResult[10] = tmp19;
          tmp18 = tmp19;
        }
      }
    }
  }
  let tmp15 = "dot" === stateFromStores && null != colorString;
  if (tmp15) {
    const obj5 = { color: colorString, colors: colorStrings, guildId, background: undefined !== dotBackground && dotBackground };
    tmp15 = React3(native.RoleDot, obj5);
  }
  cResult[2] = colorString;
  cResult[3] = colorStrings;
  cResult[4] = undefined !== dotBackground && dotBackground;
  cResult[5] = guildId;
  cResult[6] = stateFromStores;
  cResult[7] = tmp15;
  tmp14 = tmp15;
}) : ((children) => {
  let colorString;
  let colorStrings;
  let guildId;
  let items1;
  let items2;
  let role;
  let roleStyle;
  let textVariant;
  let tmp15;
  ({ role, textVariant } = children);
  children = children.children;
  if (textVariant === undefined) {
    textVariant = "text-md/medium";
  }
  let flag = children.dotBackground;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  ({ guildId, colorString, colorStrings } = role);
  const obj2 = enhanced_role_colors_EnhancedRoleColorUtils;
  const processColorStringsArray = obj2.useProcessColorStringsArray(colorStrings);
  let tmp9 = "dot" === stateFromStores;
  const obj4 = { style: tmp.container, children: items1 };
  const obj3 = enhanced_role_colors_EnhancedRoleColorUtils;
  const isRoleStyleAndRoleColorsEligibleForERC = obj3.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, undefined, stateFromStores, processColorStringsArray);
  if (tmp9) {
    tmp9 = null != colorString;
  }
  if (tmp9) {
    const obj5 = { color: colorString, colors: colorStrings, guildId, background: flag };
    tmp9 = React3(native.RoleDot, obj5);
  }
  items1 = [tmp9, ];
  const obj6 = { variant: textVariant, style: items2, lineClamp: 1, gradientColors: tmp15, children };
  items2 = [tmp.name, ];
  let tmp13;
  const Text = Text_Text.Text;
  if ("username" === stateFromStores) {
    if (null != colorString) {
      tmp13 = { color: colorString };
      const obj7 = { color: colorString };
    }
  }
  items2[1] = tmp13;
  tmp15 = undefined;
  if (isRoleStyleAndRoleColorsEligibleForERC) {
    tmp15 = processColorStringsArray;
  }
  items1[1] = React3(Text, obj6);
  return hasOwnProperty(View, obj4);
});
const result = size.fileFinishedImporting("modules/roles/native/RoleName.tsx");

export default tmp4;