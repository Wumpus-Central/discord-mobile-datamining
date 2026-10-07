// === Module 17969: FormBigRadioBox ===

// Module 17969 (FormBigRadioBox)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4600 */;
import Text_Text from "Text/Text" /* 4892 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9455 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", alignItems: "flex-start", padding: 16 }, containerSelected: null, indicator: null, iconContainer: null, iconContainerSelected: null, title: null, disabled: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", alignItems: "flex-start", padding: 16 };
obj2.containerSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.indicator = { position: "absolute", right: 18, top: 18 };
let size = { height: 40, width: 40, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, justifyContent: "center", marginBottom: 16 };
obj2.iconContainer = size;
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.iconContainerSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.title = { marginBottom: 2 };
obj2.disabled = { opacity: 0.5 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormBigRadioBox.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  const cResult = c.c(33);
  ({ description, icon, title, selected, style, disabled } = onPress);
  let tmp4 = undefined !== disabled;
  if (tmp4) {
    tmp4 = disabled;
  }
  const tmp5 = closure_6();
  if (cResult[0] === tmp4) {
    if (cResult[1] === selected) {
      let tmp6 = cResult[2];
    }
    const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp6);
    ({ accessibilityRole, accessibilityState } = radioA11yNative);
    let containerSelected = selected;
    if (selected) {
      containerSelected = tmp5.containerSelected;
    }
    let disabled2 = tmp4;
    if (tmp4) {
      disabled2 = tmp5.disabled;
    }
    if (cResult[3] === style) {
      if (cResult[4] === tmp5.container) {
        if (cResult[5] === containerSelected) {
          if (cResult[6] === disabled2) {
            let tmp8 = cResult[7];
          }
          if (!tmp4) {
            onPress = onPress.onPress;
          }
          if (cResult[8] === selected) {
            if (cResult[9] === tmp5.indicator) {
              let tmp9 = cResult[10];
            }
            if (selected) {
              selected = tmp5.iconContainerSelected;
            }
            if (cResult[11] === tmp5.iconContainer) {
              if (cResult[12] === selected) {
                let tmp12 = cResult[13];
              }
              if (cResult[14] !== icon) {
                const obj2 = { source: icon };
                const tmp15 = React4(native.Icon, obj2);
                cResult[14] = icon;
                cResult[15] = tmp15;
                let tmp13 = tmp15;
              } else {
                tmp13 = cResult[15];
              }
              if (cResult[16] === tmp13) {
                if (cResult[17] === tmp12) {
                  let tmp16 = cResult[18];
                }
                if (cResult[19] === tmp5.title) {
                  if (cResult[20] === title) {
                    let tmp20 = cResult[21];
                  }
                  if (cResult[22] !== description) {
                    const obj3 = { variant: "text-sm/medium", color: "interactive-text-default", children: description };
                    const tmp25 = React4(Text_Text.Text, obj3);
                    cResult[22] = description;
                    cResult[23] = tmp25;
                    let tmp23 = tmp25;
                  } else {
                    tmp23 = cResult[23];
                  }
                  if (cResult[24] === accessibilityRole) {
                    if (cResult[25] === accessibilityState) {
                      if (cResult[26] === tmp16) {
                        if (cResult[27] === tmp20) {
                          if (cResult[28] === tmp23) {
                            if (cResult[29] === tmp8) {
                              if (cResult[30] === onPress) {
                                if (cResult[31] === tmp9) {
                                  let tmp26 = cResult[32];
                                }
                                return tmp26;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj4 = { style: tmp8, accessibilityRole, accessibilityState, onPress, children: null };
                  const items = [tmp9, tmp16, tmp20, tmp23];
                  obj4.children = items;
                  const tmp29 = hasOwnProperty(TouchableHitBoxDefault, obj4);
                  cResult[24] = accessibilityRole;
                  cResult[25] = accessibilityState;
                  cResult[26] = tmp16;
                  cResult[27] = tmp20;
                  cResult[28] = tmp23;
                  cResult[29] = tmp8;
                  cResult[30] = onPress;
                  cResult[31] = tmp9;
                  cResult[32] = tmp29;
                  tmp26 = tmp29;
                }
                const obj5 = { style: tmp5.title, accessibilityRole: "header", variant: "text-md/semibold", color: "interactive-text-default", children: title };
                const tmp22 = React4(Text_Text.Text, obj5);
                cResult[19] = tmp5.title;
                cResult[20] = title;
                cResult[21] = tmp22;
                tmp20 = tmp22;
              }
              const obj6 = { style: tmp12, children: tmp13 };
              const tmp19 = React4(View, obj6);
              cResult[16] = tmp13;
              cResult[17] = tmp12;
              cResult[18] = tmp19;
              tmp16 = tmp19;
            }
            const items1 = [tmp5.iconContainer, selected];
            cResult[11] = tmp5.iconContainer;
            cResult[12] = selected;
            cResult[13] = items1;
            tmp12 = items1;
          }
          const obj7 = { style: tmp5.indicator, active: selected };
          const tmp11 = React4(native.RadioIndicator, obj7);
          cResult[8] = selected;
          cResult[9] = tmp5.indicator;
          cResult[10] = tmp11;
          tmp9 = tmp11;
        }
      }
    }
    const items2 = [tmp5.container, containerSelected, disabled2, style];
    cResult[3] = style;
    cResult[4] = tmp5.container;
    cResult[5] = containerSelected;
    cResult[6] = disabled2;
    cResult[7] = items2;
    tmp8 = items2;
    const tmpResult = useA11yRolesNative;
  }
  const obj8 = { selected, disabled: tmp4 };
  cResult[0] = tmp4;
  cResult[1] = selected;
  cResult[2] = obj8;
  tmp6 = obj8;
}) : ((arg0) => {
  ({ selected, disabled } = arg0);
  ({ description, icon, title, style, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_6();
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const items = [tmp.container, , , ];
  let containerSelected = selected;
  if (selected) {
    containerSelected = tmp.containerSelected;
  }
  items[1] = containerSelected;
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp.disabled;
  }
  const obj2 = { style: items, accessibilityRole, accessibilityState, onPress: null, children: null };
  items[2] = disabled2;
  items[3] = style;
  let tmp7;
  if (!disabled) {
    tmp7 = onPress;
  }
  obj2.onPress = tmp7;
  const items1 = [React4(native.RadioIndicator, { style: tmp.indicator, active: selected }), , , ];
  const items2 = [tmp.iconContainer, ];
  if (selected) {
    selected = tmp.iconContainerSelected;
  }
  const obj3 = { style: tmp.indicator, active: selected };
  const tmp6 = TouchableHitBoxDefault;
  items2[1] = selected;
  items1[1] = React4(View, { style: items2, children: React4(native.Icon, { source: icon }) });
  items1[2] = React4(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "text-md/semibold", color: "interactive-text-default", children: title });
  items1[3] = React4(Text_Text.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: description });
  obj2.children = items1;
  return hasOwnProperty(tmp6, obj2);
});