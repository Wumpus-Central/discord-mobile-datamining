// === Module 6110: useInputAttachments ===

// Module 6110 (useInputAttachments)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import IconSize from "IconSize" /* 6111 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let setWidth;

let Platform;
let closure_4;
let hasOwnProperty;
({ Platform, Pressable: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((setWidth) => {
  let content;
  let style;
  let obj = react2;
  const cResult = obj.c(15);
  ({ content, style } = setWidth);
  setWidth = setWidth.setWidth;
  const pressableProps = setWidth.pressableProps;
  let tmp2 = null;
  if (null != content) {
    let tmp4;
    if (null != pressableProps) {
      let tmp8;
      let tmp9;
      if (cResult[0] !== style) {
        const fn2 = function n(pressed) {
          const items = [style, { pointerEvents: "auto" }, ];
          let obj;
          if (pressed.pressed) {
            obj = { opacity: 0.2 };
          }
          items[2] = obj;
          return items;
        };
        cResult[0] = style;
        cResult[1] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== setWidth) {
        const fn3 = function l(nativeEvent) {
          return setWidth(nativeEvent.nativeEvent.layout.width);
        };
        cResult[2] = setWidth;
        cResult[3] = fn3;
        tmp9 = fn3;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === content) {
        if (cResult[5] === pressableProps) {
          if (cResult[6] === tmp8) {
            let tmp10;
            if (cResult[7] === tmp9) {
              tmp10 = cResult[8];
            }
            tmp4 = tmp10;
          }
        }
      }
      const merged = Object.assign(pressableProps);
      const tmp16 = <React3 role="button" style={tmp8} onLayout={tmp9}>{content}</React3>;
      cResult[4] = content;
      cResult[5] = pressableProps;
      cResult[6] = tmp8;
      cResult[7] = tmp9;
      cResult[8] = tmp16;
      tmp10 = tmp16;
    } else {
      let tmp3;
      if (cResult[9] !== setWidth) {
        const fn = function p(nativeEvent) {
          return setWidth(nativeEvent.nativeEvent.layout.width);
        };
        cResult[9] = setWidth;
        cResult[10] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[10];
      }
      if (cResult[11] === content) {
        if (cResult[12] === style) {
          if (cResult[13] === tmp3) {
            tmp4 = cResult[14];
          }
        }
      }
      const tmp7 = <hasOwnProperty style={style} onLayout={tmp3}>{content}</hasOwnProperty>;
      cResult[11] = content;
      cResult[12] = style;
      cResult[13] = tmp3;
      cResult[14] = tmp7;
      tmp4 = tmp7;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}) : ((arg0) => {
  let closure_129_1;
  let content;
  let pressableProps;
  let style;
  ({ content, style } = arg0);
  ({ setWidth: closure_129_1, pressableProps } = arg0);
  let tmp = null;
  if (null != content) {
    let tmp4;
    if (null != pressableProps) {
      const merged = Object.assign(pressableProps);
      tmp4 = <React3 role="button" style={function style(pressed) {
        const items = [style, { pointerEvents: "auto" }, ];
        let obj;
        if (pressed.pressed) {
          obj = { opacity: 0.2 };
        }
        items[2] = obj;
        return items;
      }} onLayout={function onLayout(nativeEvent) {
        return closure_1_1(nativeEvent.nativeEvent.layout.width);
      }}>{content}</React3>;
    } else {
      tmp4 = <hasOwnProperty style={style} onLayout={function onLayout(nativeEvent) {
        return closure_1_1(nativeEvent.nativeEvent.layout.width);
      }}>{content}</hasOwnProperty>;
    }
    tmp = tmp4;
  }
  return tmp;
});
let closure_7 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((leadingIcon, leading) => {
  let diff1;
  let inputStyles;
  let leadingText;
  let trailingIcon;
  const tmp = inputStyles;
  const obj = inputStyles(leadingIcon[7]);
  const cResult = obj.c(35);
  if (cResult[0] === leadingIcon.size) {
    let tmp5;
    if (cResult[1] === null != leadingIcon.leadingIcon) {
      tmp5 = cResult[2];
    }
    const tmpResult = tmp(leadingIcon[8]);
    inputStyles = tmpResult.useInputStyles(tmp5);
    leadingIcon = leadingIcon.leadingIcon;
    ({ leadingText, trailingIcon } = leadingIcon);
    const trailingText = leadingIcon.trailingText;
    if (cResult[3] === leadingIcon) {
      if (cResult[4] === leadingText) {
        leading = undefined;
        const tmp10 = cResult[5];
        if (leading != null) {
          leading = leading.leading;
        }
        if (tmp10 === leading) {
          let tmp12;
          if (cResult[6] === inputStyles.text) {
            tmp12 = cResult[7];
          }
          let trailing;
          const tmp19 = cResult[8];
          if (leading != null) {
            trailing = leading.trailing;
          }
          if (tmp19 === trailing) {
            if (cResult[9] === inputStyles.text) {
              if (cResult[10] === trailingIcon) {
                let tmp21;
                if (cResult[11] === trailingText) {
                  tmp21 = cResult[12];
                }
                if (null == leadingIcon) {
                  let leadingIcon2;
                  let leading1;
                  if (leading != null) {
                    leading1 = leading.leading;
                  }
                  if (null == leading1) {
                    leadingIcon2 = inputStyles.leadingText;
                  }
                  if (null == trailingIcon) {
                    let trailingIcon2;
                    let trailing1;
                    if (leading != null) {
                      trailing1 = leading.trailing;
                    }
                    if (null == trailing1) {
                      trailingIcon2 = inputStyles.trailingText;
                    }
                    if (cResult[13] === leadingIcon) {
                      let tmp30;
                      if (cResult[14] === inputStyles.leadingIcon) {
                        tmp30 = cResult[15];
                      }
                      const first = trailingIcon(react.useState(tmp30), 2)[0];
                      trailingIcon(react.useState(tmp30), 2);
                      if (cResult[16] === inputStyles.trailingIcon) {
                        let tmp35;
                        if (cResult[17] === trailingIcon) {
                          tmp35 = cResult[18];
                        }
                        const tmp31Result = trailingIcon(react.useState(tmp35), 2);
                        const first1 = tmp31Result[0];
                        let prop;
                        const tmp38 = tmp31Result[1];
                        if (leading != null) {
                          prop = leading.leadingPressableProps;
                        }
                        if (prop == null) {
                          prop = tmp8;
                        }
                        if (cResult[19] === tmp12) {
                          if (cResult[20] === leadingIcon2) {
                            let tmp40;
                            if (cResult[21] === prop) {
                              tmp40 = cResult[22];
                            }
                            let prop1;
                            if (leading != null) {
                              prop1 = leading.trailingPressableProps;
                            }
                            if (prop1 == null) {
                              prop1 = tmp9;
                            }
                            if (cResult[23] === prop1) {
                              if (cResult[24] === tmp21) {
                                let tmp45;
                                if (cResult[25] === trailingIcon2) {
                                  tmp45 = cResult[26];
                                }
                                if (cResult[27] === first) {
                                  if (cResult[28] === inputStyles.padding) {
                                    let tmp49;
                                    if (cResult[29] === first1) {
                                      tmp49 = cResult[30];
                                    }
                                    if (cResult[31] === tmp49) {
                                      if (cResult[32] === tmp40) {
                                        let tmp52;
                                        if (cResult[33] === tmp45) {
                                          tmp52 = cResult[34];
                                        }
                                        return tmp52;
                                      }
                                    }
                                    const obj2 = { leading: tmp40, trailing: tmp45, inputStyle: tmp49 };
                                    cResult[31] = tmp49;
                                    cResult[32] = tmp40;
                                    cResult[33] = tmp45;
                                    cResult[34] = obj2;
                                    tmp52 = obj2;
                                  }
                                }
                                let diff;
                                if (0 !== first) {
                                  diff = first - inputStyles.padding.paddingHorizontal;
                                }
                                const obj3 = { marginStart: diff, marginEnd: diff1 };
                                diff1 = undefined;
                                if (0 !== first1) {
                                  diff1 = first1 - inputStyles.padding.paddingHorizontal;
                                }
                                cResult[27] = first;
                                cResult[28] = inputStyles.padding;
                                cResult[29] = first1;
                                cResult[30] = obj3;
                                tmp49 = obj3;
                              }
                            }
                            const tmp48 = <closure_7 content={tmp21} setWidth={tmp38} pressableProps={prop1} style={trailingIcon2} />;
                            cResult[23] = prop1;
                            cResult[24] = tmp21;
                            cResult[25] = trailingIcon2;
                            cResult[26] = tmp48;
                            tmp45 = tmp48;
                          }
                        }
                        const tmp43 = <closure_7 content={tmp12} setWidth={tmp34} pressableProps={prop} style={leadingIcon2} />;
                        cResult[19] = tmp12;
                        cResult[20] = leadingIcon2;
                        cResult[21] = prop;
                        cResult[22] = tmp43;
                        tmp40 = tmp43;
                      }
                      const fn2 = function w() {
                        let num = 0;
                        if (null != trailingIcon) {
                          num = IconSize.ICON_SIZE.xs + tmp;
                        }
                        return num;
                      };
                      cResult[16] = inputStyles.trailingIcon;
                      cResult[17] = trailingIcon;
                      cResult[18] = fn2;
                      tmp35 = fn2;
                    }
                    const fn = function f() {
                      let num = 0;
                      if (null != leadingIcon) {
                        num = IconSize.ICON_SIZE.xs + tmp;
                      }
                      return num;
                    };
                    cResult[13] = leadingIcon;
                    cResult[14] = inputStyles.leadingIcon;
                    cResult[15] = fn;
                    tmp30 = fn;
                  }
                  trailingIcon2 = inputStyles.trailingIcon;
                }
                leadingIcon2 = inputStyles.leadingIcon;
              }
            }
          }
          let trailing2;
          if (leading != null) {
            trailing2 = leading.trailing;
          }
          if (trailing2 == null) {
            let tmp24;
            if (null != trailingIcon) {
              tmp24 = <trailingIcon size="xs" color="input-icon-default" />;
            } else {
              tmp24 = null;
              if (null != trailingText) {
                tmp24 = jsx(tmp(tmp2[5]).Text, { variant: "text-md/normal", style: tmp23, children: trailingText });
              }
            }
            trailing2 = tmp24;
          }
          let trailing3;
          if (leading != null) {
            trailing3 = leading.trailing;
          }
          cResult[8] = trailing3;
          cResult[9] = inputStyles.text;
          cResult[10] = trailingIcon;
          cResult[11] = trailingText;
          cResult[12] = trailing2;
          tmp21 = trailing2;
        }
      }
    }
    let leading2;
    if (leading != null) {
      leading2 = leading.leading;
    }
    if (leading2 == null) {
      let tmp15;
      if (null != leadingIcon) {
        tmp15 = <leadingIcon size="xs" color="input-icon-default" />;
      } else {
        tmp15 = null;
        if (null != leadingText) {
          tmp15 = jsx(tmp(tmp2[5]).Text, { variant: "text-md/normal", style: tmp14, children: leadingText });
        }
      }
      leading2 = tmp15;
    }
    let num = 3;
    cResult[3] = leadingIcon;
    cResult[4] = leadingText;
    let leading3;
    if (leading != null) {
      leading3 = leading.leading;
    }
    cResult[5] = leading3;
    cResult[6] = inputStyles.text;
    cResult[7] = leading2;
    tmp12 = leading2;
  }
  const obj9 = { size: leadingIcon.size, hasLeadingIcon: null != leadingIcon.leadingIcon };
  cResult[0] = leadingIcon.size;
  cResult[1] = null != leadingIcon.leadingIcon;
  cResult[2] = obj9;
  tmp5 = obj9;
}) : ((size, leading) => {
  let diff1;
  let inputStyles;
  let leadingIcon;
  let leadingPressableProps;
  let leadingText;
  let obj8;
  let tmp19;
  let tmp20;
  let trailingIcon;
  let trailingPressableProps;
  const f91515 = () => {
    let num = 0;
    if (null != leadingIcon) {
      num = IconSize.ICON_SIZE.xs + tmp;
    }
    return num;
  };
  const tmp = inputStyles;
  const obj = inputStyles(leadingIcon[8]);
  const obj2 = { size: size.size, hasLeadingIcon: null != size.leadingIcon };
  inputStyles = obj.useInputStyles(obj2);
  leadingIcon = size.leadingIcon;
  ({ leadingText, trailingIcon } = size);
  const trailingText = size.trailingText;
  leading = undefined;
  ({ leadingPressableProps, trailingPressableProps } = size);
  if (leading != null) {
    leading = leading.leading;
  }
  if (leading == null) {
    let tmp6;
    if (null != leadingIcon) {
      tmp6 = <leadingIcon size="xs" color="input-icon-default" />;
    } else {
      tmp6 = null;
      if (null != leadingText) {
        tmp6 = jsx(tmp(tmp2[5]).Text, { variant: "text-md/normal", style: tmp5, children: leadingText });
      }
    }
    leading = tmp6;
  }
  let trailing;
  if (leading != null) {
    trailing = leading.trailing;
  }
  if (trailing == null) {
    let tmp11;
    if (null != trailingIcon) {
      tmp11 = <trailingIcon size="xs" color="input-icon-default" />;
    } else {
      tmp11 = null;
      if (null != trailingText) {
        tmp11 = jsx(tmp(tmp2[5]).Text, { variant: "text-md/normal", style: tmp10, children: trailingText });
      }
    }
    trailing = tmp11;
  }
  if (null == leadingIcon) {
    let leading1;
    if (leading != null) {
      leading1 = leading.leading;
    }
    if (null == leading1) {
      let leadingIcon2 = inputStyles.leadingText;
    }
    if (null == trailingIcon) {
      let trailing1;
      if (leading != null) {
        trailing1 = leading.trailing;
      }
      if (null == trailing1) {
        let trailingIcon2 = inputStyles.trailingText;
      }
      let num = 2;
      [tmp19, tmp20] = trailingIcon(react.useState(f91515), 2);
      trailingIcon(react.useState(f91515), 2);
      const tmp21 = trailingIcon(react.useState(() => {
        let num = 0;
        if (null != trailingIcon) {
          num = IconSize.ICON_SIZE.xs + tmp;
        }
        return num;
      }), 2);
      const first = tmp21[0];
      let prop;
      if (leading != null) {
        prop = leading.leadingPressableProps;
      }
      if (prop == null) {
        prop = leadingPressableProps;
      }
      let prop1;
      const obj6 = { leading: null, trailing: null, inputStyle: obj8 };
      if (leading != null) {
        prop1 = leading.trailingPressableProps;
      }
      if (prop1 == null) {
        prop1 = trailingPressableProps;
      }
      let diff;
      if (0 !== tmp19) {
        diff = tmp19 - inputStyles.padding.paddingHorizontal;
      }
      obj8 = { marginStart: diff, marginEnd: diff1 };
      diff1 = undefined;
      if (0 !== first) {
        diff1 = first - inputStyles.padding.paddingHorizontal;
      }
      return obj6;
    }
    trailingIcon2 = inputStyles.trailingIcon;
  }
  leadingIcon2 = inputStyles.leadingIcon;
});
function estimateAttachmentWidth(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = IconSize.ICON_SIZE.xs + arg1;
  }
  return num;
}
function renderInputAttachment(BaseIconImage, leadingText, text) {
  let tmp2;
  if (null != BaseIconImage) {
    tmp2 = <BaseIconImage size="xs" color="input-icon-default" />;
  } else {
    tmp2 = null;
    if (null != leadingText) {
      tmp2 = jsx(Text_Text.Text, { variant: "text-md/normal", style: text, children: leadingText });
    }
  }
  return tmp2;
}
const result = size.fileFinishedImporting("design/components/Input/native/useInputAttachments.native.tsx");

export { estimateAttachmentWidth };
export { renderInputAttachment };
export const InputAttachmentContainer = tmp3;
export const useInputAttachments = tmp4;