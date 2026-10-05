// discord_app/components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import PermissionUtils from "../../utils/PermissionUtils.tsx";
import DenyIcon2 from "../../design/components/Icon/native/redesign/generated/DenyIcon.tsx";
import CheckmarkLargeBoldIcon2 from "../../design/components/Icon/native/redesign/generated/CheckmarkLargeBoldIcon.tsx";
import SlashIcon2 from "../../design/components/Icon/native/redesign/generated/SlashIcon.tsx";
import react from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import createStyles_mod from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let importDefault;

let c3;
let closure_4;
let obj2;
let obj3;
let obj4;
function getIcon(arg0, arg1, icon) {
  if (PermissionUtils.DENY === arg0) {
    const DenyIcon = DenyIcon2.DenyIcon;
    const colors3 = nativeDefault.colors;
    return <DenyIcon size="sm" style={icon.icon} color={arg1 ? colors3.WHITE : colors3.ICON_FEEDBACK_CRITICAL} />;
  } else if (PermissionUtils.ALLOW === arg0) {
    const CheckmarkLargeBoldIcon = CheckmarkLargeBoldIcon2.CheckmarkLargeBoldIcon;
    const colors2 = nativeDefault.colors;
    return (
      <CheckmarkLargeBoldIcon
        size="sm"
        style={icon.icon}
        color={arg1 ? colors2.WHITE : colors2.ICON_FEEDBACK_POSITIVE}
      />
    );
  } else if (PermissionUtils.PASSTHROUGH === arg0) {
    const SlashIcon = SlashIcon2.SlashIcon;
    const colors = nativeDefault.colors;
    return <SlashIcon size="sm" style={icon.icon} color={arg1 ? colors.WHITE : colors.INTERACTIVE_TEXT_DEFAULT} />;
  } else {
    return null;
  }
}
({ Pressable: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
const PX_4 = nativeDefault.space.PX_4;
const md = nativeDefault.radii.md;
let createStyles = createStyles_mod;
let obj = {
  ternaryCheckBox: obj2,
  iconWrapper: { borderRadius: md - PX_4, marginHorizontal: PX_4 / 2, justifyContent: "center", height: "100%" },
  icon: obj3,
  denyActive: obj4,
  denySelected: {
    backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
    borderRadius: nativeDefault.radii.sm - 2,
  },
  allowActive: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE },
  allowSelected: { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE },
  passthroughSelected: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED },
  passthroughActive: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER },
  disabled: { opacity: 0.3 },
};
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: md,
  height: nativeDefault.space.PX_32,
  paddingVertical: PX_4,
  paddingHorizontal: PX_4 / 2,
  flexDirection: "row",
};
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_8 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
({ backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.sm - 2 });
({ backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE });
({ backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE });
({ backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED });
({ backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER });
let closure_6 = createStyles(obj);
let items = [PermissionUtils.DENY, PermissionUtils.PASSTHROUGH, PermissionUtils.ALLOW];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selected) => {
      let accessibilityRole;
      let accessibilityState;
      let permissionTitle;
      let styles;
      let tmp4;
      let tmp6;
      let type;
      const obj = type(styles[11]);
      const cResult = obj.c(22);
      ({ permissionTitle, type } = selected);
      selected = selected.selected;
      styles = selected.styles;
      const onPress = selected.onPress;
      if (cResult[0] !== selected) {
        const obj2 = { selected };
        cResult[0] = selected;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = type(styles[12]);
      const radioA11yNative = tmpResult.useRadioA11yNative(tmp4);
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      if (cResult[2] !== type) {
        let stringResult;
        if (type(styles[5]).DENY === type) {
          const intl2 = type(tmp2[6]).intl;
          stringResult = intl2.string(type(tmp2[6]).t["6639O5"]);
        } else if (type(styles[5]).ALLOW === type) {
          const intl = type(tmp2[6]).intl;
          stringResult = intl.string(type(tmp2[6]).t.RzDfSk);
        } else if (type(styles[5]).PASSTHROUGH === type) {
          const intl3 = type(tmp2[6]).intl;
          stringResult = intl3.string(type(tmp2[6]).t.ujC3ZS);
        }
        cResult[2] = type;
        cResult[3] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === permissionTitle) {
        let obj4;
        if (cResult[5] === tmp6) {
          obj4 = cResult[6];
        }
        const joined = obj4.join(", ");
        if (cResult[7] === selected) {
          if (cResult[8] === styles) {
            let tmp10;
            if (cResult[9] === type) {
              tmp10 = cResult[10];
            }
            if (cResult[11] === selected) {
              if (cResult[12] === styles) {
                let tmp11;
                if (cResult[13] === type) {
                  tmp11 = cResult[14];
                }
                if (cResult[15] === accessibilityRole) {
                  if (cResult[16] === accessibilityState) {
                    if (cResult[17] === onPress) {
                      if (cResult[18] === joined) {
                        if (cResult[19] === tmp10) {
                          let tmp14;
                          if (cResult[20] === tmp11) {
                            tmp14 = cResult[21];
                          }
                          return tmp14;
                        }
                      }
                    }
                  }
                }
                class I {
                  constructor(arg0) {
                    tmp = selected;
                    if (!tmp) {
                      if (!selected.pressed) {
                        tmp2 = styles;
                        iconWrapper = styles.iconWrapper;
                      }
                      return iconWrapper;
                    }
                    tmp3 = type;
                    tmp4 = styles;
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    if (closure_0(closure_2[5]).DENY === type) {
                      tmp7 = tmp ? tmp4.denySelected : tmp4.denyActive;
                    } else if (tmp5(tmp6[5]).ALLOW === tmp3) {
                      tmp7 = tmp ? tmp4.allowSelected : tmp4.allowActive;
                    } else if (tmp5(tmp6[5]).PASSTHROUGH === tmp3) {
                      tmp7 = tmp ? tmp4.passthroughSelected : tmp4.passthroughActive;
                    }
                    items = [,];
                    items[0] = tmp7;
                    items[1] = tmp4.iconWrapper;
                    iconWrapper = items;
                    return;
                  }
                }
                tmp17[0] = accessibilityRole;
                tmp17[1] = joined;
                tmp17[2] = accessibilityState;
                tmp17[3] = tmp10;
                tmp17[4] = onPress;
                tmp17[5] = tmp11;
                const tmp18 = <closure_3 {...tmp17} />;
                cResult[15] = accessibilityRole;
                cResult[16] = accessibilityState;
                cResult[17] = onPress;
                cResult[18] = joined;
                cResult[19] = tmp10;
                cResult[20] = tmp11;
                cResult[21] = tmp18;
                tmp14 = tmp18;
              }
            }
            class I {
              constructor(arg0) {
                tmp = selected;
                if (!tmp) {
                  if (!selected.pressed) {
                    tmp2 = styles;
                    iconWrapper = styles.iconWrapper;
                  }
                  return iconWrapper;
                }
                tmp3 = type;
                tmp4 = styles;
                tmp5 = closure_0;
                tmp6 = closure_2;
                if (closure_0(closure_2[5]).DENY === type) {
                  tmp7 = tmp ? tmp4.denySelected : tmp4.denyActive;
                } else if (tmp5(tmp6[5]).ALLOW === tmp3) {
                  tmp7 = tmp ? tmp4.allowSelected : tmp4.allowActive;
                } else if (tmp5(tmp6[5]).PASSTHROUGH === tmp3) {
                  tmp7 = tmp ? tmp4.passthroughSelected : tmp4.passthroughActive;
                }
                items = [,];
                items[0] = tmp7;
                items[1] = tmp4.iconWrapper;
                iconWrapper = items;
                return;
              }
            }
            cResult[11] = selected;
            cResult[12] = styles;
            cResult[13] = type;
            cResult[14] = tmp13;
            tmp11 = tmp13;
          }
        }
        class I {
          constructor(arg0) {
            tmp = selected;
            if (!tmp) {
              if (!selected.pressed) {
                tmp2 = styles;
                iconWrapper = styles.iconWrapper;
              }
              return iconWrapper;
            }
            tmp3 = type;
            tmp4 = styles;
            tmp5 = closure_0;
            tmp6 = closure_2;
            if (closure_0(closure_2[5]).DENY === type) {
              tmp7 = tmp ? tmp4.denySelected : tmp4.denyActive;
            } else if (tmp5(tmp6[5]).ALLOW === tmp3) {
              tmp7 = tmp ? tmp4.allowSelected : tmp4.allowActive;
            } else if (tmp5(tmp6[5]).PASSTHROUGH === tmp3) {
              tmp7 = tmp ? tmp4.passthroughSelected : tmp4.passthroughActive;
            }
            items = [,];
            items[0] = tmp7;
            items[1] = tmp4.iconWrapper;
            iconWrapper = items;
            return;
          }
        }
        cResult[7] = selected;
        cResult[8] = styles;
        cResult[9] = type;
        cResult[10] = I;
        tmp10 = I;
      }
      items = [permissionTitle, tmp6];
      const found = items.filter(Boolean);
      cResult[4] = permissionTitle;
      cResult[5] = tmp6;
      cResult[6] = found;
      obj4 = found;
    }
  : (type) => {
      let onPress;
      let permissionTitle;
      let stringResult;
      type = type.type;
      const selected = type.selected;
      const styles = type.styles;
      ({ permissionTitle, onPress } = type);
      const obj = type(styles[12]);
      const radioA11yNative = obj.useRadioA11yNative({ selected });
      items = [permissionTitle];
      const accessibilityState = radioA11yNative.accessibilityState;
      if (type(styles[5]).DENY === type) {
        const intl2 = tmp(tmp2[6]).intl;
        stringResult = intl2.string(tmp(tmp2[6]).t["6639O5"]);
      } else if (type(styles[5]).ALLOW === type) {
        const intl = tmp(tmp2[6]).intl;
        stringResult = intl.string(tmp(tmp2[6]).t.RzDfSk);
      } else if (type(styles[5]).PASSTHROUGH === type) {
        const intl3 = tmp(tmp2[6]).intl;
        stringResult = intl3.string(tmp(tmp2[6]).t.ujC3ZS);
      }
      items[1] = stringResult;
      const found = items.filter(Boolean);
      return (
        <closure_3
          accessibilityRole={radioA11yNative.accessibilityRole}
          accessibilityLabel={found.join(", ")}
          accessibilityState={accessibilityState}
          style={function style(pressed) {
            let tmp7;
            if (!selected) {
              let iconWrapper;
              if (!pressed.pressed) {
                iconWrapper = styles.iconWrapper;
              }
              return iconWrapper;
            }
            if (PermissionUtils.DENY === type) {
              tmp7 = selected ? styles.denySelected : styles.denyActive;
            } else if (PermissionUtils.ALLOW === type) {
              tmp7 = selected ? styles.allowSelected : styles.allowActive;
            } else if (PermissionUtils.PASSTHROUGH === type) {
              tmp7 = selected ? styles.passthroughSelected : styles.passthroughActive;
            }
            items = [tmp7, styles.iconWrapper];
            iconWrapper = items;
          }}
          onPress={onPress}
        >
          {getIcon(type, selected, styles)}
        </closure_3>
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (permissionTitle) => {
        let disabled;
        let onValueChange;
        const obj = permissionTitle(onValueChange[11]);
        const cResult = obj.c(13);
        permissionTitle = permissionTitle.permissionTitle;
        const value = permissionTitle.value;
        importDefault = value;
        ({ disabled, onValueChange } = permissionTitle);
        let tmp2 = undefined !== disabled && disabled;
        const tmp3 = closure_6();
        const styles = tmp3;
        if (cResult[0] === tmp3.ternaryCheckBox) {
          let tmp5;
          if (cResult[1] === (tmp2 && tmp3.disabled)) {
            tmp5 = cResult[2];
          }
          let str = "auto";
          if (tmp2) {
            str = "none";
          }
          if (cResult[3] === onValueChange) {
            if (cResult[4] === permissionTitle) {
              if (cResult[5] === tmp3) {
                let tmp6;
                if (cResult[6] === value) {
                  tmp6 = cResult[7];
                }
                if (cResult[8] === permissionTitle) {
                  if (cResult[9] === tmp5) {
                    if (cResult[10] === str) {
                      let tmp9;
                      if (cResult[11] === tmp6) {
                        tmp9 = cResult[12];
                      }
                      return tmp9;
                    }
                  }
                }
                const tmp12 = (
                  <closure_4
                    style={tmp5}
                    pointerEvents={str}
                    accessibilityRole="radiogroup"
                    accessibilityLabel={permissionTitle}
                  >
                    {tmp6}
                  </closure_4>
                );
                cResult[8] = permissionTitle;
                cResult[9] = tmp5;
                cResult[10] = str;
                cResult[11] = tmp6;
                cResult[12] = tmp12;
                tmp9 = tmp12;
              }
            }
          }
          const mapped = items.map((type, index) => {
            permissionTitle = type;
            return (
              <closure_1_9
                key={"checkbox-" + index}
                permissionTitle={permissionTitle}
                type={type}
                selected={closure_1 === type}
                styles={styles}
                onPress={function onPress() {
                  const tmp2 = null != onValueChange && importDefault !== type;
                  if (tmp2) {
                    onValueChange(type);
                  }
                }}
              />
            );
          });
          cResult[3] = onValueChange;
          cResult[4] = permissionTitle;
          cResult[5] = tmp3;
          cResult[6] = value;
          cResult[7] = mapped;
          tmp6 = mapped;
        }
        items = [tmp3.ternaryCheckBox, tmp2 && tmp3.disabled];
        cResult[0] = tmp3.ternaryCheckBox;
        cResult[1] = tmp2 && tmp3.disabled;
        cResult[2] = items;
        tmp5 = items;
      }
    : (permissionTitle) => {
        let disabled;
        permissionTitle = permissionTitle.permissionTitle;
        ({ value: importDefault, disabled } = permissionTitle);
        if (disabled === undefined) {
          disabled = false;
        }
        const onValueChange = permissionTitle.onValueChange;
        const tmp = closure_6();
        const styles = tmp;
        items = [tmp.ternaryCheckBox];
        const disabled2 = disabled && tmp.disabled;
        items[1] = disabled2;
        let str = "auto";
        if (disabled) {
          str = "none";
        }
        return (
          <closure_4
            style={items}
            pointerEvents={str}
            accessibilityRole="radiogroup"
            accessibilityLabel={permissionTitle}
          >
            {items.map((type, index) => {
              permissionTitle = type;
              return (
                <closure_1_9
                  key={"checkbox-" + index}
                  permissionTitle={permissionTitle}
                  type={type}
                  selected={closure_1 === type}
                  styles={styles}
                  onPress={function onPress() {
                    const tmp2 = null != onValueChange && importDefault !== type;
                    if (tmp2) {
                      onValueChange(type);
                    }
                  }}
                />
              );
            })}
          </closure_4>
        );
      },
);
const result = size.fileFinishedImporting(
  "components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx",
);

export default memoResult;
