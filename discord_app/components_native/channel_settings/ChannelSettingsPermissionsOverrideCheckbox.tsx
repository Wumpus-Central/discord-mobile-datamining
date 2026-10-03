// === Module 16990: ChannelSettingsPermissionsOverrideCheckbox ===

// Module 16990 (ChannelSettingsPermissionsOverrideCheckbox)
import nativeDefault from "native" /* 587 */;
import PermissionUtils from "PermissionUtils" /* 4514 */;
import DenyIcon from "DenyIcon" /* 7588 */;
import CheckmarkLargeBoldIcon from "CheckmarkLargeBoldIcon" /* 8451 */;
import SlashIcon from "SlashIcon" /* 16991 */;
import noop from "module_19" /* 19 */;

require = fn;
function getIcon(arg0, arg1, icon) {
  if (PermissionUtils.DENY === arg0) {
    const obj2 = { size: "sm", style: icon.icon, color: null };
    const colors3 = nativeDefault.colors;
    obj2.color = arg1 ? colors3.WHITE : colors3.ICON_FEEDBACK_CRITICAL;
    return jsx(DenyIcon.DenyIcon, { size: "sm", style: icon.icon, color: null });
  } else if (PermissionUtils.ALLOW === arg0) {
    const obj3 = { size: "sm", style: icon.icon, color: null };
    const colors2 = nativeDefault.colors;
    obj3.color = arg1 ? colors2.WHITE : colors2.ICON_FEEDBACK_POSITIVE;
    return jsx(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, { size: "sm", style: icon.icon, color: null });
  } else if (PermissionUtils.PASSTHROUGH === arg0) {
    const obj = { size: "sm", style: icon.icon, color: null };
    const colors = nativeDefault.colors;
    obj.color = arg1 ? colors.WHITE : colors.INTERACTIVE_TEXT_DEFAULT;
    return jsx(SlashIcon.SlashIcon, { size: "sm", style: icon.icon, color: null });
  } else {
    return null;
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const PX_4 = nativeDefault.space.PX_4;
const md = nativeDefault.radii.md;
const createStyles = fn(4890);
let obj = { ternaryCheckBox: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: md, height: nativeDefault.space.PX_32, paddingVertical: PX_4, paddingHorizontal: PX_4 / 2, flexDirection: "row" }, iconWrapper: { borderRadius: md - PX_4, marginHorizontal: PX_4 / 2, justifyContent: "center", height: "100%" }, icon: null, denyActive: null, denySelected: null, allowActive: null, allowSelected: null, passthroughSelected: null, passthroughActive: null, disabled: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: md, height: nativeDefault.space.PX_32, paddingVertical: PX_4, paddingHorizontal: PX_4 / 2, flexDirection: "row" };
obj.icon = { marginHorizontal: nativeDefault.space.PX_8 };
let obj4 = { marginHorizontal: nativeDefault.space.PX_8 };
obj.denyActive = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
const obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
obj.denySelected = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.sm - 2 };
const obj6 = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.sm - 2 };
obj.allowActive = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE };
const obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE };
obj.allowSelected = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
const obj8 = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
obj.passthroughSelected = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
const obj9 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.passthroughActive = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
obj.disabled = { opacity: 0.3 };
let closure_6 = createStyles.createStyles(obj);
let items = [fn(4514).DENY, fn(4514).PASSTHROUGH, fn(4514).ALLOW];
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((selected) => {
  let v6639O5 = styles;
  const cResult = type(styles[11]).c(22);
  ({ permissionTitle, type } = selected);
  selected = selected.selected;
  styles = selected.styles;
  const onPress = selected.onPress;
  if (cResult[0] !== selected) {
    const obj2 = { selected };
    cResult[0] = selected;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const obj = type(styles[11]);
  const radioA11yNative = type(v6639O5[12]).useRadioA11yNative(tmp4);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (cResult[2] !== type) {
    if (type(v6639O5[5]).DENY === type) {
      const intl2 = type(v6639O5[6]).intl;
      v6639O5 = type(v6639O5[6]).t["6639O5"];
      let stringResult = intl2.string(v6639O5);
      cResult[2] = type;
      cResult[3] = stringResult;
    } else if (type(v6639O5[5]).ALLOW !== type) {
      if (type(v6639O5[5]).PASSTHROUGH === type) {
        const intl3 = type(v6639O5[6]).intl;
        stringResult = intl3.string(type(v6639O5[6]).t.ujC3ZS);
      }
    }
    const intl = type(v6639O5[6]).intl;
    stringResult = intl.string(type(v6639O5[6]).t.RzDfSk);
  } else {
    if (cResult[4] === permissionTitle) {
      if (cResult[5] === tmp6) {
        let obj4 = cResult[6];
      }
      const joined = obj4.join(", ");
      if (cResult[7] === selected) {
        if (cResult[8] === styles) {
          if (cResult[9] === type) {
            let tmp12 = cResult[10];
          }
          if (cResult[11] === selected) {
            if (cResult[12] === styles) {
              if (cResult[13] === type) {
                let tmp13 = cResult[14];
              }
              if (cResult[15] === accessibilityRole) {
                if (cResult[16] === accessibilityState) {
                  if (cResult[17] === onPress) {
                    if (cResult[18] === joined) {
                      if (cResult[19] === tmp12) {
                        if (cResult[20] === tmp13) {
                          let tmp16 = cResult[21];
                        }
                        return tmp16;
                      }
                    }
                  }
                }
              }
              class I {
                constructor(arg0) {
                  items = selected;
                  if (!selected) {
                    if (!selected.pressed) {
                      tmp = styles;
                      return styles.iconWrapper;
                    }
                  }
                  tmp2 = type;
                  iconWrapper = styles;
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  if (closure_0(closure_2[5]).DENY === type) {
                    tmp6 = items ? iconWrapper.denySelected : iconWrapper.denyActive;
                  } else {
                    if (tmp3(tmp4[5]).ALLOW === tmp2) {
                      tmp5 = items ? iconWrapper.allowSelected : iconWrapper.allowActive;
                    } else if (tmp3(tmp4[5]).PASSTHROUGH === tmp2) {
                      tmp5 = items ? iconWrapper.passthroughSelected : iconWrapper.passthroughActive;
                    }
                    items = [, ];
                    items[0] = tmp5;
                    iconWrapper = iconWrapper.iconWrapper;
                    items[1] = iconWrapper;
                    tmp7 = items;
                  }
                  return;
                }
              }
              tmp19[0] = accessibilityRole;
              tmp19[1] = joined;
              tmp19[2] = accessibilityState;
              tmp19[3] = tmp12;
              tmp19[4] = onPress;
              tmp19[5] = tmp13;
              const tmp20 = <closure_3 {...tmp19} />;
              cResult[15] = accessibilityRole;
              cResult[16] = accessibilityState;
              cResult[17] = onPress;
              cResult[18] = joined;
              cResult[19] = tmp12;
              cResult[20] = tmp13;
              cResult[21] = tmp20;
              tmp16 = tmp20;
            }
          }
          class I {
            constructor(arg0) {
              items = selected;
              if (!selected) {
                if (!selected.pressed) {
                  tmp = styles;
                  return styles.iconWrapper;
                }
              }
              tmp2 = type;
              iconWrapper = styles;
              tmp3 = closure_0;
              tmp4 = closure_2;
              if (closure_0(closure_2[5]).DENY === type) {
                tmp6 = items ? iconWrapper.denySelected : iconWrapper.denyActive;
              } else {
                if (tmp3(tmp4[5]).ALLOW === tmp2) {
                  tmp5 = items ? iconWrapper.allowSelected : iconWrapper.allowActive;
                } else if (tmp3(tmp4[5]).PASSTHROUGH === tmp2) {
                  tmp5 = items ? iconWrapper.passthroughSelected : iconWrapper.passthroughActive;
                }
                items = [, ];
                items[0] = tmp5;
                iconWrapper = iconWrapper.iconWrapper;
                items[1] = iconWrapper;
                tmp7 = items;
              }
              return;
            }
          }
          cResult[11] = selected;
          cResult[12] = styles;
          cResult[13] = type;
          cResult[14] = tmp15;
          tmp13 = tmp15;
        }
      }
      class I {
        constructor(arg0) {
          items = selected;
          if (!selected) {
            if (!selected.pressed) {
              tmp = styles;
              return styles.iconWrapper;
            }
          }
          tmp2 = type;
          iconWrapper = styles;
          tmp3 = closure_0;
          tmp4 = closure_2;
          if (closure_0(closure_2[5]).DENY === type) {
            tmp6 = items ? iconWrapper.denySelected : iconWrapper.denyActive;
          } else {
            if (tmp3(tmp4[5]).ALLOW === tmp2) {
              tmp5 = items ? iconWrapper.allowSelected : iconWrapper.allowActive;
            } else if (tmp3(tmp4[5]).PASSTHROUGH === tmp2) {
              tmp5 = items ? iconWrapper.passthroughSelected : iconWrapper.passthroughActive;
            }
            items = [, ];
            items[0] = tmp5;
            iconWrapper = iconWrapper.iconWrapper;
            items[1] = iconWrapper;
            tmp7 = items;
          }
          return;
        }
      }
      cResult[7] = selected;
      cResult[8] = styles;
      cResult[9] = type;
      cResult[10] = I;
      tmp12 = I;
    }
    items = [permissionTitle, ];
    const _Boolean = Boolean;
    const found = items.filter(Boolean);
    cResult[4] = permissionTitle;
    cResult[5] = cResult[3];
    cResult[6] = found;
    obj4 = found;
  }
  const tmpResult = type(v6639O5[12]);
}) : ((type) => {
  type = type.type;
  const selected = type.selected;
  const styles = type.styles;
  ({ permissionTitle, onPress } = type);
  const radioA11yNative = type(styles[12]).useRadioA11yNative({ selected });
  const obj2 = { accessibilityRole: radioA11yNative.accessibilityRole, accessibilityLabel: null, accessibilityState: null, style: null, onPress: null, children: null };
  items = [permissionTitle, ];
  if (type(styles[5]).DENY === type) {
    const intl2 = tmp(tmp2[6]).intl;
    let stringResult = intl2.string(tmp(tmp2[6]).t["6639O5"]);
  } else if (tmp(tmp2[5]).ALLOW === type) {
    const intl = tmp(tmp2[6]).intl;
    stringResult = intl.string(tmp(tmp2[6]).t.RzDfSk);
  } else if (tmp(tmp2[5]).PASSTHROUGH === type) {
    const intl3 = tmp(tmp2[6]).intl;
    stringResult = intl3.string(tmp(tmp2[6]).t.ujC3ZS);
  }
  items[1] = stringResult;
  const found = items.filter(Boolean);
  obj2.accessibilityLabel = found.join(", ");
  obj2.accessibilityState = radioA11yNative.accessibilityState;
  obj2.style = function style(pressed) {
    items = selected;
    if (!selected) {
      if (!pressed.pressed) {
        return styles.iconWrapper;
      }
    }
    let iconWrapper = styles;
    if (PermissionUtils.DENY !== type) {
      if (PermissionUtils.ALLOW === type) {
        let tmp5 = items ? iconWrapper.allowSelected : iconWrapper.allowActive;
      } else if (PermissionUtils.PASSTHROUGH === type) {
        tmp5 = items ? iconWrapper.passthroughSelected : iconWrapper.passthroughActive;
      }
      items = [tmp5, ];
      iconWrapper = iconWrapper.iconWrapper;
      items[1] = iconWrapper;
    }
  };
  obj2.onPress = onPress;
  obj2.children = getIcon(type, selected, styles);
  return <closure_3 accessibilityRole={radioA11yNative.accessibilityRole} accessibilityLabel={null} accessibilityState={null} style={null} onPress={null}>{null}</closure_3>;
});
ReactCompilerGating = fn(558);
const obj10 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((permissionTitle) => {
  const cResult = permissionTitle(onValueChange[11]).c(13);
  permissionTitle = permissionTitle.permissionTitle;
  value = permissionTitle.value;
  importDefault = value;
  ({ disabled, onValueChange } = permissionTitle);
  const tmp3 = closure_6();
  const styles = tmp3;
  let disabled2 = tmp2;
  if (undefined !== disabled && disabled) {
    disabled2 = tmp3.disabled;
  }
  if (cResult[0] === tmp3.ternaryCheckBox) {
    if (cResult[1] === disabled2) {
      let tmp4 = cResult[2];
    }
    let str = "auto";
    if (tmp2) {
      str = "none";
    }
    if (cResult[3] === onValueChange) {
      if (cResult[4] === permissionTitle) {
        if (cResult[5] === tmp3) {
          if (cResult[6] === value) {
            let tmp5 = cResult[7];
          }
          if (cResult[8] === permissionTitle) {
            if (cResult[9] === tmp4) {
              if (cResult[10] === str) {
                if (cResult[11] === tmp5) {
                  let tmp8 = cResult[12];
                }
                return tmp8;
              }
            }
          }
          const obj2 = { style: tmp4, pointerEvents: str, accessibilityRole: "radiogroup", accessibilityLabel: permissionTitle, children: tmp5 };
          const tmp11 = <closure_4 style={tmp4} pointerEvents={str} accessibilityRole="radiogroup" accessibilityLabel={permissionTitle}>{tmp5}</closure_4>;
          cResult[8] = permissionTitle;
          cResult[9] = tmp4;
          cResult[10] = str;
          cResult[11] = tmp5;
          cResult[12] = tmp11;
          tmp8 = tmp11;
        }
      }
    }
    const mapped = items.map((type, index) => {
      permissionTitle = type;
      return <closure_1_9 key={"checkbox-" + index} permissionTitle={permissionTitle} type={type} selected={closure_1 === type} styles={styles} onPress={function onPress() {
        let tmp2 = null != onValueChange;
        if (tmp2) {
          tmp2 = value !== closure_0;
        }
        if (tmp2) {
          onValueChange(closure_0);
        }
      }} />;
    });
    cResult[3] = onValueChange;
    cResult[4] = permissionTitle;
    cResult[5] = tmp3;
    cResult[6] = value;
    cResult[7] = mapped;
    tmp5 = mapped;
  }
  items = [tmp3.ternaryCheckBox, disabled2];
  cResult[0] = tmp3.ternaryCheckBox;
  cResult[1] = disabled2;
  cResult[2] = items;
  tmp4 = items;
  const obj = permissionTitle(onValueChange[11]);
}) : ((permissionTitle) => {
  permissionTitle = permissionTitle.permissionTitle;
  ({ value: importDefault, disabled } = permissionTitle);
  if (disabled === undefined) {
    disabled = false;
  }
  const onValueChange = permissionTitle.onValueChange;
  const tmp = closure_6();
  const styles = tmp;
  items = [tmp.ternaryCheckBox, ];
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp.disabled;
  }
  const obj = { style: items, pointerEvents: null, accessibilityRole: "radiogroup", accessibilityLabel: null, children: null };
  items[1] = disabled2;
  let str = "auto";
  if (disabled) {
    str = "none";
  }
  obj.pointerEvents = str;
  obj.accessibilityLabel = permissionTitle;
  obj.children = items.map((type, index) => {
    permissionTitle = type;
    return <closure_1_9 key={"checkbox-" + index} permissionTitle={permissionTitle} type={type} selected={closure_1 === type} styles={styles} onPress={function onPress() {
      let tmp2 = null != onValueChange;
      if (tmp2) {
        tmp2 = importDefault !== closure_0;
      }
      if (tmp2) {
        onValueChange(closure_0);
      }
    }} />;
  });
  return <closure_4 style={items} pointerEvents={null} accessibilityRole="radiogroup" accessibilityLabel={null}>{null}</closure_4>;
}));