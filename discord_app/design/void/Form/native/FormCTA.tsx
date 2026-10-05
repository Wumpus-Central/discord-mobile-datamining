// discord_app/design/void/Form/native/FormCTA.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import native from "../../native.tsx";
import FormCheckbox from "../../../components/Forms/native/FormCheckbox.native.tsx";
import FormRowDefault from "FormRow.tsx";
import RowButton2 from "../../../components/TableRow/native/RowButton.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let obj2;
let obj3;
let obj4;
let obj5;
let size;
const View = react_native.View;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = {
  form: obj2,
  title: obj3,
  description: obj4,
  icon: size,
  completedIcon: { opacity: 0.3 },
  completedText: obj5,
};
obj2 = {
  borderRadius: nativeDefault.radii.xs,
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
};
createStyles = createStyles.createStyles;
obj3 = {
  fontSize: nativeDefault.space.PX_16,
  lineHeight: 18,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
};
obj4 = { fontSize: 12, lineHeight: 18, color: nativeDefault.colors.TEXT_SUBTLE, fontFamily: Fonts.PRIMARY_MEDIUM };
size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40 };
obj5 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_5 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let completed;
      let iconContainerStyle;
      let iconSource;
      let iconStyle;
      let items5;
      let onLongPress;
      let onPress;
      let style;
      let subtitle;
      let title;
      let titleStyle;
      let trailing;
      let variant;
      const obj = completed(576);
      const cResult = obj.c(58);
      ({ style, title, titleStyle, subtitle, completed } = arg0);
      ({ iconSource, iconStyle, iconContainerStyle, trailing } = arg0);
      ({ onPress, onLongPress, variant } = arg0);
      const tmp4 = closure_5();
      if (cResult[0] === completed) {
        if (cResult[1] === iconContainerStyle) {
          if (cResult[2] === iconSource) {
            if (cResult[3] === iconStyle) {
              if (cResult[4] === tmp4.completedIcon) {
                let tmp5;
                if (cResult[5] === tmp4.icon) {
                  tmp5 = cResult[6];
                }
                if (cResult[7] === completed) {
                  let tmp10;
                  if (cResult[8] === trailing) {
                    tmp10 = cResult[9];
                  }
                  if (cResult[10] === completed) {
                    if (cResult[11] === tmp4.completedText) {
                      if (cResult[12] === tmp4.description) {
                        let tmp11;
                        if (cResult[13] === subtitle) {
                          tmp11 = cResult[14];
                        }
                        if ("row-button" === variant) {
                          let tmp30;
                          if (cResult[15] !== completed) {
                            const obj2 = { checked: completed };
                            cResult[15] = completed;
                            cResult[16] = obj2;
                            tmp30 = obj2;
                          } else {
                            tmp30 = cResult[16];
                          }
                          let completedText;
                          if (completed) {
                            completedText = tmp4.completedText;
                          }
                          if (cResult[17] === tmp4.title) {
                            if (cResult[18] === completedText) {
                              let tmp32;
                              if (cResult[19] === titleStyle) {
                                tmp32 = cResult[20];
                              }
                              if (cResult[21] === tmp32) {
                                let tmp33;
                                let tmp37;
                                if (cResult[22] === title) {
                                  tmp33 = cResult[23];
                                }
                                if (cResult[24] !== tmp10) {
                                  const tmp10Result = tmp10();
                                  cResult[24] = tmp10;
                                  cResult[25] = tmp10Result;
                                  tmp37 = tmp10Result;
                                } else {
                                  tmp37 = cResult[25];
                                }
                                if (cResult[26] === tmp5) {
                                  if (cResult[27] === onLongPress) {
                                    if (cResult[28] === onPress) {
                                      if (cResult[29] === tmp11) {
                                        if (cResult[30] === tmp30) {
                                          if (cResult[31] === tmp33) {
                                            let tmp39;
                                            if (cResult[32] === tmp37) {
                                              tmp39 = cResult[33];
                                            }
                                            return tmp39;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                const tmp41 = jsx(completed(8897).RowButton, {
                                  arrow: false,
                                  onPress,
                                  onLongPress,
                                  accessibilityState: tmp30,
                                  label: tmp33,
                                  subLabel: tmp11,
                                  trailing: tmp37,
                                  icon: tmp5,
                                });
                                cResult[26] = tmp5;
                                cResult[27] = onLongPress;
                                cResult[28] = onPress;
                                cResult[29] = tmp11;
                                cResult[30] = tmp30;
                                cResult[31] = tmp33;
                                cResult[32] = tmp37;
                                cResult[33] = tmp41;
                                tmp39 = tmp41;
                              }
                              const tmp36 = jsx(trailing(6633).Label, { style: tmp32, text: title });
                              cResult[21] = tmp32;
                              cResult[22] = title;
                              cResult[23] = tmp36;
                              tmp33 = tmp36;
                            }
                          }
                          const items = [tmp4.title, completedText, titleStyle];
                          cResult[17] = tmp4.title;
                          cResult[18] = completedText;
                          cResult[19] = titleStyle;
                          cResult[20] = items;
                          tmp32 = items;
                        } else {
                          if (cResult[34] === style) {
                            let tmp16;
                            let tmp17;
                            if (cResult[35] === tmp4.form) {
                              tmp16 = cResult[36];
                            }
                            if (cResult[37] !== completed) {
                              const obj5 = { checked: completed };
                              cResult[37] = completed;
                              cResult[38] = obj5;
                              tmp17 = obj5;
                            } else {
                              tmp17 = cResult[38];
                            }
                            let completedText1;
                            if (completed) {
                              completedText1 = tmp4.completedText;
                            }
                            if (cResult[39] === tmp4.title) {
                              if (cResult[40] === completedText1) {
                                let tmp19;
                                if (cResult[41] === titleStyle) {
                                  tmp19 = cResult[42];
                                }
                                if (cResult[43] === tmp19) {
                                  let tmp20;
                                  let tmp24;
                                  if (cResult[44] === title) {
                                    tmp20 = cResult[45];
                                  }
                                  if (cResult[46] !== tmp10) {
                                    const tmp10Result2 = tmp10();
                                    cResult[46] = tmp10;
                                    cResult[47] = tmp10Result2;
                                    tmp24 = tmp10Result2;
                                  } else {
                                    tmp24 = cResult[47];
                                  }
                                  if (cResult[48] === tmp5) {
                                    if (cResult[49] === onLongPress) {
                                      if (cResult[50] === onPress) {
                                        if (cResult[51] === tmp11) {
                                          if (cResult[52] === tmp16) {
                                            if (cResult[53] === tmp17) {
                                              if (cResult[54] === tmp20) {
                                                if (cResult[55] === tmp24) {
                                                  let tmp26;
                                                  if (cResult[56] === variant) {
                                                    tmp26 = cResult[57];
                                                  }
                                                  return tmp26;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const tmp29 = jsx(trailing(6633), {
                                    start: true,
                                    end: true,
                                    variant,
                                    onPress,
                                    onLongPress,
                                    DEPRECATED_style: tmp16,
                                    accessibilityState: tmp17,
                                    label: tmp20,
                                    subLabel: tmp11,
                                    trailing: tmp24,
                                    leading: tmp5,
                                  });
                                  cResult[48] = tmp5;
                                  cResult[49] = onLongPress;
                                  cResult[50] = onPress;
                                  cResult[51] = tmp11;
                                  cResult[52] = tmp16;
                                  cResult[53] = tmp17;
                                  cResult[54] = tmp20;
                                  cResult[55] = tmp24;
                                  cResult[56] = variant;
                                  cResult[57] = tmp29;
                                  tmp26 = tmp29;
                                }
                                const tmp23 = jsx(trailing(6633).Label, { style: tmp19, text: title });
                                cResult[43] = tmp19;
                                cResult[44] = title;
                                cResult[45] = tmp23;
                                tmp20 = tmp23;
                              }
                            }
                            const items1 = [tmp4.title, completedText1, titleStyle];
                            cResult[39] = tmp4.title;
                            cResult[40] = completedText1;
                            cResult[41] = titleStyle;
                            cResult[42] = items1;
                            tmp19 = items1;
                          }
                          const items2 = [tmp4.form, style];
                          cResult[34] = style;
                          cResult[35] = tmp4.form;
                          cResult[36] = items2;
                          tmp16 = items2;
                        }
                      }
                    }
                  }
                  let tmp13Result = null;
                  if (undefined !== subtitle) {
                    const items3 = [tmp4.description];
                    let completedText2 = null;
                    const SubLabel = trailing(6633).SubLabel;
                    if (completed) {
                      completedText2 = tmp4.completedText;
                    }
                    items3[1] = completedText2;
                    tmp13Result = <SubLabel style={items3} text={subtitle} />;
                  }
                  cResult[10] = completed;
                  cResult[11] = tmp4.completedText;
                  cResult[12] = tmp4.description;
                  cResult[13] = subtitle;
                  cResult[14] = tmp13Result;
                  tmp11 = tmp13Result;
                }
                const fn = function h() {
                  let tmp2;
                  if (completed) {
                    tmp2 = jsx(FormCheckbox.FormCheckbox, { checked: true });
                  } else {
                    tmp2 = trailing;
                    if (trailing == null) {
                      tmp2 = jsx(FormRowDefault.Arrow, {});
                    }
                  }
                  return tmp2;
                };
                cResult[7] = completed;
                cResult[8] = trailing;
                cResult[9] = fn;
                tmp10 = fn;
              }
            }
          }
        }
      }
      let tmp7Result = null;
      if (null != iconSource) {
        const items4 = [iconContainerStyle];
        let completedIcon = null;
        if (completed) {
          completedIcon = tmp4.completedIcon;
        }
        items4[1] = completedIcon;
        ({ style: items5, source: iconSource, size: completed(1188).Icon.Sizes.CUSTOM, disableColor: true });
        items5 = [tmp4.icon, iconStyle];
        const Icon = completed(1188).Icon;
        tmp7Result = <View style={items4}>{null}</View>;
      }
      cResult[0] = completed;
      cResult[1] = iconContainerStyle;
      cResult[2] = iconSource;
      cResult[3] = iconStyle;
      cResult[4] = tmp4.completedIcon;
      cResult[5] = tmp4.icon;
      cResult[6] = tmp7Result;
      tmp5 = tmp7Result;
    }
  : (arg0) => {
      let completed;
      let iconContainerStyle;
      let iconSource;
      let iconStyle;
      let items1;
      let onLongPress;
      let onPress;
      let style;
      let subtitle;
      let title;
      let titleStyle;
      let tmp22Result1;
      let trailing;
      let variant;
      ({ title, titleStyle, subtitle, completed, iconSource, trailing, onPress, onLongPress, variant } = arg0);
      ({ style, iconStyle, iconContainerStyle } = arg0);
      const tmp = closure_5();
      let tmp3Result = null;
      if (null != iconSource) {
        const items = [iconContainerStyle];
        let completedIcon = null;
        if (completed) {
          completedIcon = tmp.completedIcon;
        }
        items[1] = completedIcon;
        ({ style: items1, source: iconSource, size: native.Icon.Sizes.CUSTOM, disableColor: true });
        items1 = [tmp.icon, iconStyle];
        const Icon = native.Icon;
        tmp3Result = <View style={items}>{null}</View>;
      }
      let tmp9Result = null;
      if (undefined !== subtitle) {
        const items2 = [tmp.description];
        let completedText = null;
        const SubLabel = FormRowDefault.SubLabel;
        if (completed) {
          completedText = tmp.completedText;
        }
        items2[1] = completedText;
        tmp9Result = <SubLabel style={items2} text={subtitle} />;
      }
      if ("row-button" === variant) {
        const obj5 = { checked: completed };
        const RowButton = RowButton2.RowButton;
        const items3 = [tmp.title, ,];
        let completedText1;
        const Label = FormRowDefault.Label;
        if (completed) {
          completedText1 = tmp.completedText;
        }
        items3[1] = completedText1;
        items3[2] = titleStyle;
        if (completed) {
          trailing = jsx(FormCheckbox.FormCheckbox, { checked: true });
        } else if (trailing == null) {
          trailing = jsx(FormRowDefault.Arrow, {});
        }
        tmp22Result1 = (
          <RowButton
            arrow={false}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityState={obj5}
            label={null}
            subLabel={tmp9Result}
            trailing={trailing}
            icon={tmp3Result}
          />
        );
      } else {
        let tmp22Result;
        const items4 = [tmp.form, style];
        const items5 = [tmp.title, ,];
        let completedText2;
        const obj8 = { checked: completed };
        FormRowDefault;
        const Label2 = FormRowDefault.Label;
        if (completed) {
          completedText2 = tmp.completedText;
        }
        items5[1] = completedText2;
        items5[2] = titleStyle;
        if (completed) {
          tmp22Result = jsx(FormCheckbox.FormCheckbox, { checked: true });
        } else {
          tmp22Result = trailing;
          if (trailing == null) {
            tmp22Result = jsx(FormRowDefault.Arrow, {});
          }
        }
        tmp22Result1 = (
          <tmp25
            start
            end
            variant={variant}
            onPress={onPress}
            onLongPress={onLongPress}
            DEPRECATED_style={items4}
            accessibilityState={obj8}
            label={null}
            subLabel={tmp9Result}
            trailing={tmp22Result}
            leading={tmp3Result}
          />
        );
      }
      return tmp22Result1;
    };
size = size_mod;
const result = size.fileFinishedImporting("design/void/Form/native/FormCTA.tsx");

export default tmp4;
