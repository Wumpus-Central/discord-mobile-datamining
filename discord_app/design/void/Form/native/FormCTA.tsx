// discord_app/design/void/Form/native/FormCTA.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../native.tsx";
import FormCheckbox2 from "../../../components/Forms/native/FormCheckbox.native.tsx";
import FormRowDefault from "FormRow.tsx";
import RowButton from "../../../components/TableRow/native/RowButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Fonts = fn(1096).Fonts;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = {
  form: {
    borderRadius: nativeDefault.radii.xs,
    paddingVertical: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_12,
  },
  title: null,
  description: null,
  icon: null,
  completedIcon: null,
  completedText: null,
};
let obj3 = {
  borderRadius: nativeDefault.radii.xs,
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
};
obj2.title = {
  fontSize: nativeDefault.space.PX_16,
  lineHeight: 18,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
};
let obj4 = {
  fontSize: nativeDefault.space.PX_16,
  lineHeight: 18,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
};
obj2.description = {
  fontSize: 12,
  lineHeight: 18,
  color: nativeDefault.colors.TEXT_SUBTLE,
  fontFamily: Fonts.PRIMARY_MEDIUM,
};
let size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40 };
obj2.icon = size;
obj2.completedIcon = { opacity: 0.3 };
let obj5 = { fontSize: 12, lineHeight: 18, color: nativeDefault.colors.TEXT_SUBTLE, fontFamily: Fonts.PRIMARY_MEDIUM };
obj2.completedText = { color: nativeDefault.colors.TEXT_MUTED };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { color: nativeDefault.colors.TEXT_MUTED };
size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormCTA.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FormCTA(arg0) {
      const cResult = completed(576).c(58);
      ({ style, title, titleStyle, subtitle, completed } = arg0);
      ({ iconSource, iconStyle, iconContainerStyle, trailing } = arg0);
      ({ onPress, onLongPress, variant } = arg0);
      const tmp4 = closure_5();
      if (cResult[0] === completed) {
        if (cResult[1] === iconContainerStyle) {
          if (cResult[2] === iconSource) {
            if (cResult[3] === iconStyle) {
              if (cResult[4] === tmp4.completedIcon) {
                if (cResult[5] === tmp4.icon) {
                  let tmp5 = cResult[6];
                }
                if (cResult[7] === completed) {
                  if (cResult[8] === trailing) {
                    let tmp10 = cResult[9];
                  }
                  if (cResult[10] === completed) {
                    if (cResult[11] === tmp4.completedText) {
                      if (cResult[12] === tmp4.description) {
                        if (cResult[13] === subtitle) {
                          let tmp11 = cResult[14];
                        }
                        if ("row-button" === variant) {
                          if (cResult[15] !== completed) {
                            const obj2 = { checked: completed };
                            cResult[15] = completed;
                            cResult[16] = obj2;
                            let tmp30 = obj2;
                          } else {
                            tmp30 = cResult[16];
                          }
                          let completedText;
                          if (completed) {
                            completedText = tmp4.completedText;
                          }
                          if (cResult[17] === tmp4.title) {
                            if (cResult[18] === completedText) {
                              if (cResult[19] === titleStyle) {
                                let tmp32 = cResult[20];
                              }
                              if (cResult[21] === tmp32) {
                                if (cResult[22] === title) {
                                  let tmp33 = cResult[23];
                                }
                                if (cResult[24] !== tmp10) {
                                  const tmp10Result = tmp10();
                                  cResult[24] = tmp10;
                                  cResult[25] = tmp10Result;
                                  let tmp37 = tmp10Result;
                                } else {
                                  tmp37 = cResult[25];
                                }
                                if (cResult[26] === tmp5) {
                                  if (cResult[27] === onLongPress) {
                                    if (cResult[28] === onPress) {
                                      if (cResult[29] === tmp11) {
                                        if (cResult[30] === tmp30) {
                                          if (cResult[31] === tmp33) {
                                            if (cResult[32] === tmp37) {
                                              let tmp39 = cResult[33];
                                            }
                                            return tmp39;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj3 = {
                                  arrow: false,
                                  onPress,
                                  onLongPress,
                                  accessibilityState: tmp30,
                                  label: tmp33,
                                  subLabel: tmp11,
                                  trailing: tmp37,
                                  icon: tmp5,
                                };
                                const tmp41 = jsx(completed(8565).RowButton, {
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
                              const obj4 = { style: tmp32, text: title };
                              const tmp36 = jsx(trailing(6824).Label, { style: tmp32, text: title });
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
                            if (cResult[35] === tmp4.form) {
                              let tmp16 = cResult[36];
                            }
                            if (cResult[37] !== completed) {
                              const obj5 = { checked: completed };
                              cResult[37] = completed;
                              cResult[38] = obj5;
                              let tmp17 = obj5;
                            } else {
                              tmp17 = cResult[38];
                            }
                            let completedText1;
                            if (completed) {
                              completedText1 = tmp4.completedText;
                            }
                            if (cResult[39] === tmp4.title) {
                              if (cResult[40] === completedText1) {
                                if (cResult[41] === titleStyle) {
                                  let tmp19 = cResult[42];
                                }
                                if (cResult[43] === tmp19) {
                                  if (cResult[44] === title) {
                                    let tmp20 = cResult[45];
                                  }
                                  if (cResult[46] !== tmp10) {
                                    const tmp10Result2 = tmp10();
                                    cResult[46] = tmp10;
                                    cResult[47] = tmp10Result2;
                                    let tmp24 = tmp10Result2;
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
                                                  if (cResult[56] === variant) {
                                                    let tmp26 = cResult[57];
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
                                  const obj6 = {
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
                                  };
                                  const tmp29 = jsx(trailing(6824), {
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
                                const obj7 = { style: tmp19, text: title };
                                const tmp23 = jsx(trailing(6824).Label, { style: tmp19, text: title });
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
                    if (completed) {
                      completedText2 = tmp4.completedText;
                    }
                    const obj8 = { style: null, text: null };
                    items3[1] = completedText2;
                    obj8.style = items3;
                    obj8.text = subtitle;
                    tmp13Result = jsx(trailing(6824).SubLabel, { style: null, text: null });
                  }
                  cResult[10] = completed;
                  cResult[11] = tmp4.completedText;
                  cResult[12] = tmp4.description;
                  cResult[13] = subtitle;
                  cResult[14] = tmp13Result;
                  tmp11 = tmp13Result;
                }
                function renderTrailing() {
                  if (completed) {
                    let tmp = jsx(FormCheckbox2.FormCheckbox, { checked: true });
                  } else {
                    tmp = trailing;
                    if (trailing == null) {
                      tmp = jsx(FormRowDefault.Arrow, {});
                    }
                  }
                  return tmp;
                }
                cResult[7] = completed;
                cResult[8] = trailing;
                cResult[9] = renderTrailing;
                tmp10 = renderTrailing;
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
        const obj9 = { style: null, children: null };
        items4[1] = completedIcon;
        obj9.style = items4;
        const obj10 = { style: null, source: null, size: null, disableColor: true };
        const items5 = [tmp4.icon, iconStyle];
        obj10.style = items5;
        obj10.source = iconSource;
        obj10.size = completed(1200).Icon.Sizes.CUSTOM;
        obj9.children = jsx(completed(1200).Icon, { style: null, source: null, size: null, disableColor: true });
        tmp7Result = <View style={null}>{null}</View>;
      }
      cResult[0] = completed;
      cResult[1] = iconContainerStyle;
      cResult[2] = iconSource;
      cResult[3] = iconStyle;
      cResult[4] = tmp4.completedIcon;
      cResult[5] = tmp4.icon;
      cResult[6] = tmp7Result;
      tmp5 = tmp7Result;
      const obj = completed(576);
    }
  : function FormCTA(arg0) {
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
        const obj = { style: null, children: null };
        items[1] = completedIcon;
        obj.style = items;
        const obj2 = { style: null, source: null, size: null, disableColor: true };
        const items1 = [tmp.icon, iconStyle];
        obj2.style = items1;
        obj2.source = iconSource;
        obj2.size = native.Icon.Sizes.CUSTOM;
        obj.children = jsx(native.Icon, { style: null, source: null, size: null, disableColor: true });
        tmp3Result = <View style={null}>{null}</View>;
      }
      let tmp9Result = null;
      if (undefined !== subtitle) {
        const items2 = [tmp.description];
        let completedText = null;
        if (completed) {
          completedText = tmp.completedText;
        }
        const obj3 = { style: null, text: null };
        items2[1] = completedText;
        obj3.style = items2;
        obj3.text = subtitle;
        tmp9Result = jsx(FormRowDefault.SubLabel, { style: null, text: null });
      }
      if ("row-button" === variant) {
        let FormCheckbox = require;
        const obj4 = {
          arrow: false,
          onPress,
          onLongPress,
          accessibilityState: null,
          label: null,
          subLabel: null,
          trailing: null,
          icon: null,
        };
        const obj5 = { checked: completed };
        obj4.accessibilityState = obj5;
        const items3 = [tmp.title, ,];
        let completedText1;
        if (completed) {
          completedText1 = tmp.completedText;
        }
        const obj6 = { style: null, text: null };
        items3[1] = completedText1;
        items3[2] = titleStyle;
        obj6.style = items3;
        obj6.text = title;
        obj4.label = jsx(FormRowDefault.Label, { style: null, text: null });
        obj4.subLabel = tmp9Result;
        if (completed) {
          FormCheckbox = FormCheckbox(6184).FormCheckbox;
          const obj7 = { checked: true };
          trailing = <FormCheckbox checked />;
        } else if (trailing == null) {
          trailing = jsx(FormRowDefault.Arrow, {});
        }
        obj4.trailing = trailing;
        obj4.icon = tmp3Result;
        jsx(RowButton.RowButton, {
          arrow: false,
          onPress,
          onLongPress,
          accessibilityState: null,
          label: null,
          subLabel: null,
          trailing: null,
          icon: null,
        });
      } else {
        const obj8 = {
          start: true,
          end: true,
          variant,
          onPress,
          onLongPress,
          DEPRECATED_style: null,
          accessibilityState: null,
          label: null,
          subLabel: null,
          trailing: null,
          leading: null,
        };
        const items4 = [tmp.form, style];
        obj8.DEPRECATED_style = items4;
        const obj9 = { checked: completed };
        obj8.accessibilityState = obj9;
        const items5 = [tmp.title, ,];
        let completedText2;
        if (completed) {
          completedText2 = tmp.completedText;
        }
        const obj10 = { style: null, text: null };
        items5[1] = completedText2;
        items5[2] = titleStyle;
        obj10.style = items5;
        obj10.text = title;
        obj8.label = jsx(FormRowDefault.Label, { style: null, text: null });
        obj8.subLabel = tmp9Result;
        if (completed) {
          let tmp20Result = jsx(FormCheckbox2.FormCheckbox, { checked: true });
        } else {
          tmp20Result = trailing;
          if (trailing == null) {
            tmp20Result = jsx(FormRowDefault.Arrow, {});
          }
        }
        obj8.trailing = tmp20Result;
        obj8.leading = tmp3Result;
        return jsx(FormRowDefault, {
          start: true,
          end: true,
          variant,
          onPress,
          onLongPress,
          DEPRECATED_style: null,
          accessibilityState: null,
          label: null,
          subLabel: null,
          trailing: null,
          leading: null,
        });
      }
    };
