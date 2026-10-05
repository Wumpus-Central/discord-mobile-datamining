// === Module 17923: FormBigRadioBox ===

// Module 17923 (FormBigRadioBox)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import react_native2 from "react-native" /* 4594 */;
import Text_Text from "Text/Text" /* 4886 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9442 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerSelected: obj3, indicator: { position: "absolute", right: 18, top: 18 }, iconContainer: size, iconContainerSelected: obj4, title: { marginBottom: 2 }, disabled: { opacity: 0.5 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", alignItems: "flex-start", padding: 16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
size = { height: 40, width: 40, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, justifyContent: "center", marginBottom: 16 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let accessibilityRole;
  let accessibilityState;
  let description;
  let disabled;
  let icon;
  let items;
  let selected;
  let style;
  let title;
  const obj = react2;
  const cResult = obj.c(33);
  ({ description, icon, title, selected, style, disabled } = onPress);
  let tmp4 = undefined !== disabled;
  onPress = onPress.onPress;
  if (tmp4) {
    tmp4 = disabled;
  }
  const tmp5 = closure_6();
  if (cResult[0] === tmp4) {
    let tmp6;
    if (cResult[1] === selected) {
      tmp6 = cResult[2];
    }
    const tmpResult = react_native2;
    const radioA11yNative = tmpResult.useRadioA11yNative(tmp6);
    ({ accessibilityRole, accessibilityState } = radioA11yNative);
    if (cResult[3] === style) {
      if (cResult[4] === tmp5.container) {
        if (cResult[5] === (selected && tmp5.containerSelected)) {
          let tmp10;
          if (cResult[6] === (tmp4 && tmp5.disabled)) {
            tmp10 = cResult[7];
          }
          if (cResult[8] === selected) {
            let tmp12;
            if (cResult[9] === tmp5.indicator) {
              tmp12 = cResult[10];
            }
            if (selected) {
              selected = tmp5.iconContainerSelected;
            }
            if (cResult[11] === tmp5.iconContainer) {
              let tmp15;
              let tmp16;
              if (cResult[12] === selected) {
                tmp15 = cResult[13];
              }
              if (cResult[14] !== icon) {
                const obj2 = { source: icon };
                const tmp18 = React3(native.Icon, obj2);
                cResult[14] = icon;
                cResult[15] = tmp18;
                tmp16 = tmp18;
              } else {
                tmp16 = cResult[15];
              }
              if (cResult[16] === tmp16) {
                let tmp19;
                if (cResult[17] === tmp15) {
                  tmp19 = cResult[18];
                }
                if (cResult[19] === tmp5.title) {
                  let tmp23;
                  let tmp26;
                  if (cResult[20] === title) {
                    tmp23 = cResult[21];
                  }
                  if (cResult[22] !== description) {
                    const obj3 = { variant: "text-sm/medium", color: "interactive-text-default", children: description };
                    const tmp28 = React3(Text_Text.Text, obj3);
                    cResult[22] = description;
                    cResult[23] = tmp28;
                    tmp26 = tmp28;
                  } else {
                    tmp26 = cResult[23];
                  }
                  if (cResult[24] === accessibilityRole) {
                    if (cResult[25] === accessibilityState) {
                      if (cResult[26] === tmp19) {
                        if (cResult[27] === tmp23) {
                          if (cResult[28] === tmp26) {
                            if (cResult[29] === tmp10) {
                              if (cResult[30] === tmp11) {
                                let tmp29;
                                if (cResult[31] === tmp12) {
                                  tmp29 = cResult[32];
                                }
                                return tmp29;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj4 = { style: tmp10, accessibilityRole, accessibilityState, onPress: tmp11, children: items };
                  items = [tmp12, tmp19, tmp23, tmp26];
                  const tmp32 = hasOwnProperty(TouchableHitBoxDefault, obj4);
                  cResult[24] = accessibilityRole;
                  cResult[25] = accessibilityState;
                  cResult[26] = tmp19;
                  cResult[27] = tmp23;
                  cResult[28] = tmp26;
                  cResult[29] = tmp10;
                  cResult[30] = tmp11;
                  cResult[31] = tmp12;
                  cResult[32] = tmp32;
                  tmp29 = tmp32;
                }
                const obj5 = { style: tmp5.title, accessibilityRole: "header", variant: "text-md/semibold", color: "interactive-text-default", children: title };
                const tmp25 = React3(Text_Text.Text, obj5);
                cResult[19] = tmp5.title;
                cResult[20] = title;
                cResult[21] = tmp25;
                tmp23 = tmp25;
              }
              const obj6 = { style: tmp15, children: tmp16 };
              const tmp22 = React3(View, obj6);
              cResult[16] = tmp16;
              cResult[17] = tmp15;
              cResult[18] = tmp22;
              tmp19 = tmp22;
            }
            const items1 = [tmp5.iconContainer, selected];
            cResult[11] = tmp5.iconContainer;
            cResult[12] = selected;
            cResult[13] = items1;
            tmp15 = items1;
          }
          const obj7 = { style: tmp5.indicator, active: selected };
          const tmp14 = React3(native.RadioIndicator, obj7);
          cResult[8] = selected;
          cResult[9] = tmp5.indicator;
          cResult[10] = tmp14;
          tmp12 = tmp14;
        }
      }
    }
    const items2 = [tmp5.container, selected && tmp5.containerSelected, tmp4 && tmp5.disabled, style];
    cResult[3] = style;
    cResult[4] = tmp5.container;
    cResult[5] = selected && tmp5.containerSelected;
    cResult[6] = tmp4 && tmp5.disabled;
    cResult[7] = items2;
    tmp10 = items2;
  }
  const obj8 = { selected, disabled: tmp4 };
  cResult[0] = tmp4;
  cResult[1] = selected;
  cResult[2] = obj8;
  tmp6 = obj8;
}) : ((arg0) => {
  let accessibilityRole;
  let accessibilityState;
  let description;
  let disabled;
  let icon;
  let items1;
  let onPress;
  let selected;
  let style;
  let title;
  let tmp8;
  ({ selected, disabled } = arg0);
  ({ description, icon, title, style, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_6();
  const obj = react_native2;
  const radioA11yNative = obj.useRadioA11yNative({ selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const items = [tmp.container, , , ];
  let containerSelected = selected;
  const tmp6 = TouchableHitBoxDefault;
  if (selected) {
    containerSelected = tmp.containerSelected;
  }
  items[1] = containerSelected;
  const obj2 = { style: items, accessibilityRole, accessibilityState, onPress: tmp8, children: items1 };
  const tmp7 = disabled && tmp.disabled;
  items[2] = tmp7;
  items[3] = style;
  tmp8 = undefined;
  if (!disabled) {
    tmp8 = onPress;
  }
  items1 = [, , , ];
  const obj3 = { style: tmp.indicator, active: selected };
  items1[0] = React3(native.RadioIndicator, obj3);
  const items2 = [tmp.iconContainer, ];
  if (selected) {
    selected = tmp.iconContainerSelected;
  }
  items2[1] = selected;
  const obj4 = { style: items2, children: React3(native.Icon, { source: icon }) };
  items1[1] = React3(View, obj4);
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "text-md/semibold", color: "interactive-text-default", children: title };
  items1[2] = React3(Text_Text.Text, obj5);
  items1[3] = React3(Text_Text.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: description });
  return hasOwnProperty(tmp6, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormBigRadioBox.tsx");

export default tmp5;