// === Module 6297: useInputAttachments ===

// Module 6297 (useInputAttachments)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5087 */;
import IconSize from "IconSize" /* 6298 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function InputAttachmentContainer(setWidth) {
  const cResult = c.c(15);
  ({ content, style } = setWidth);
  setWidth = setWidth.setWidth;
  const pressableProps = setWidth.pressableProps;
  if (null == content) {
    return null;
  } else {
    if (null == pressableProps) {
      if (cResult[9] !== setWidth) {
        const fn = function p(nativeEvent) {
          return setWidth(nativeEvent.nativeEvent.layout.width);
        };
        cResult[9] = setWidth;
        cResult[10] = fn;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[10];
      }
      if (cResult[11] === content) {
        if (cResult[12] === style) {
        }
      }
      const obj2 = { style, onLayout: tmp2, children: content };
      const tmp6 = <hasOwnProperty style={style} onLayout={tmp2}>{content}</hasOwnProperty>;
      cResult[11] = content;
      cResult[12] = style;
      cResult[13] = tmp2;
      cResult[14] = tmp6;
    }
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
      let tmp7 = fn2;
    } else {
      tmp7 = cResult[1];
    }
    if (cResult[2] !== setWidth) {
      const fn3 = function l(nativeEvent) {
        return setWidth(nativeEvent.nativeEvent.layout.width);
      };
      cResult[2] = setWidth;
      cResult[3] = fn3;
      let tmp8 = fn3;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === content) {
      if (cResult[5] === pressableProps) {
        if (cResult[6] === tmp7) {
        }
      }
    }
    const obj3 = { role: "button" };
    const merged = Object.assign(pressableProps);
    obj3.style = tmp7;
    obj3.onLayout = tmp8;
    obj3.children = content;
    const tmp15 = <React4 role="button" />;
    cResult[4] = content;
    cResult[5] = pressableProps;
    cResult[6] = tmp7;
    cResult[7] = tmp8;
    cResult[8] = tmp15;
  }
}) : (function InputAttachmentContainer(arg0) {
  ({ content, style } = arg0);
  ({ setWidth: dependencyMap, pressableProps } = arg0);
  if (null == content) {
    return null;
  } else if (null != pressableProps) {
    const obj2 = { role: "button" };
    const merged = Object.assign(pressableProps);
    pressableProps = function style(pressed) {
      const items = [style, { pointerEvents: "auto" }, ];
      let obj;
      if (pressed.pressed) {
        obj = { opacity: 0.2 };
      }
      items[2] = obj;
      return items;
    };
    obj2.style = pressableProps;
    obj2.onLayout = function onLayout(nativeEvent) {
      return dependencyMap(nativeEvent.nativeEvent.layout.width);
    };
    obj2.children = content;
    let tmp3 = <React4 role="button" />;
  } else {
    let obj = {
      style,
      onLayout(nativeEvent) {
          return dependencyMap(nativeEvent.nativeEvent.layout.width);
        },
      children: content
    };
    tmp3 = <hasOwnProperty style={style} onLayout={function onLayout(nativeEvent) {
      return dependencyMap(nativeEvent.nativeEvent.layout.width);
    }}>{content}</hasOwnProperty>;
  }
});
let closure_7 = tmp3;
ReactCompilerGating = fn(558);
function estimateAttachmentWidth(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = IconSize.ICON_SIZE.xs + arg1;
  }
  return num;
}
function renderInputAttachment(BaseIconImage, leadingText, text) {
  if (null != BaseIconImage) {
    let tmp2 = <BaseIconImage size="xs" color="input-icon-default" />;
  } else {
    tmp2 = null;
    if (null != leadingText) {
      const obj = { variant: "text-md/normal", style: text, children: leadingText };
      tmp2 = jsx(Text_Text.Text, { variant: "text-md/normal", style: text, children: leadingText });
    }
  }
  return tmp2;
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/useInputAttachments.native.tsx");

export { estimateAttachmentWidth };
export { renderInputAttachment };
export const InputAttachmentContainer = tmp3;
export const useInputAttachments = ReactCompilerGating.isReactCompilerEnabled() ? (function useInputAttachments(leadingIcon, leading) {
  const cResult = inputStyles(leadingIcon[7]).c(35);
  if (cResult[0] === leadingIcon.size) {
    if (cResult[1] === tmp4) {
      let tmp5 = cResult[2];
    }
    inputStyles = tmp(tmp2[8]).useInputStyles(tmp5);
    leadingIcon = leadingIcon.leadingIcon;
    ({ leadingText, trailingIcon } = leadingIcon);
    if (cResult[3] === leadingIcon) {
      if (cResult[4] === leadingText) {
        let leading1;
        if (leading != null) {
          leading1 = leading.leading;
        }
        if (cResult[5] === leading1) {
          if (cResult[6] === inputStyles.text) {
            let tmp10 = cResult[7];
          }
          let trailing1;
          if (leading != null) {
            trailing1 = leading.trailing;
          }
          if (cResult[8] === trailing1) {
            if (cResult[9] === inputStyles.text) {
              if (cResult[10] === trailingIcon) {
                if (null == leadingIcon) {
                  let leading2;
                  if (leading != null) {
                    leading2 = leading.leading;
                  }
                  if (null == leading2) {
                    let leadingIcon2 = inputStyles.leadingText;
                  }
                  if (null == trailingIcon) {
                    let trailing2;
                    if (leading != null) {
                      trailing2 = leading.trailing;
                    }
                    if (null == trailing2) {
                      let trailingIcon2 = inputStyles.trailingText;
                    }
                    if (cResult[13] === leadingIcon) {
                      if (cResult[14] === inputStyles.leadingIcon) {
                        let tmp21 = cResult[15];
                      }
                      const first = trailingIcon(noop.useState(tmp21), 2)[0];
                      if (cResult[16] === inputStyles.trailingIcon) {
                        if (cResult[17] === trailingIcon) {
                          let tmp26 = cResult[18];
                        }
                        const tmp22Result = trailingIcon(noop.useState(tmp26), 2);
                        const first1 = tmp22Result[0];
                        let prop;
                        if (leading != null) {
                          prop = leading.leadingPressableProps;
                        }
                        if (prop == null) {
                          prop = tmp8;
                        }
                        class L {
                          constructor() {
                            num = 0;
                            if (null != trailingIcon) {
                              tmp2 = closure_0;
                              tmp3 = closure_1;
                              num = closure_0(closure_1[4]).ICON_SIZE.xs + tmp;
                            }
                            return num;
                          }
                        }
                        const obj2 = { content: tmp10, setWidth: tmp25, pressableProps: prop, style: leadingIcon2 };
                        const tmp34 = <closure_7 content={tmp10} setWidth={tmp25} pressableProps={prop} style={leadingIcon2} />;
                        cResult[19] = tmp10;
                        cResult[20] = leadingIcon2;
                        cResult[21] = prop;
                        cResult[22] = tmp34;
                      }
                      class L {
                        constructor() {
                          num = 0;
                          if (null != trailingIcon) {
                            tmp2 = closure_0;
                            tmp3 = closure_1;
                            num = closure_0(closure_1[4]).ICON_SIZE.xs + tmp;
                          }
                          return num;
                        }
                      }
                      cResult[16] = inputStyles.trailingIcon;
                      cResult[17] = trailingIcon;
                      cResult[18] = L;
                      tmp26 = L;
                      const tmp23 = trailingIcon(noop.useState(tmp21), 2);
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
                    tmp21 = fn;
                  }
                  trailingIcon2 = inputStyles.trailingIcon;
                }
                leadingIcon2 = inputStyles.leadingIcon;
              }
            }
          }
          if (leading != null) {
            const trailing = leading.trailing;
          }
        }
      }
    }
    let leading3;
    if (leading != null) {
      leading3 = leading.leading;
    }
    if (leading3 != null) {
      cResult[3] = leadingIcon;
      cResult[4] = leadingText;
      if (leading != null) {
        leading = leading.leading;
      }
      class L {
        constructor() {
          num = 0;
          if (null != trailingIcon) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            num = closure_0(closure_1[4]).ICON_SIZE.xs + tmp;
          }
          return num;
        }
      }
      cResult[6] = inputStyles.text;
      cResult[7] = leading3;
      tmp10 = leading3;
    } else if (null != leadingIcon) {
      let tmp13 = <leadingIcon size="xs" color="input-icon-default" />;
    } else if (null != leadingText) {
      const obj3 = { variant: "text-md/normal", style: tmp12, children: leadingText };
      tmp13 = jsx(tmp(tmp2[5]).Text, { variant: "text-md/normal", style: tmp12, children: leadingText });
    }
    const tmpResult = tmp(tmp2[8]);
  }
  const obj4 = { size: leadingIcon.size, hasLeadingIcon: null != leadingIcon.leadingIcon };
  cResult[0] = leadingIcon.size;
  cResult[1] = null != leadingIcon.leadingIcon;
  cResult[2] = obj4;
  tmp5 = obj4;
  const obj = inputStyles(leadingIcon[7]);
}) : (function useInputAttachments(size, leading) {
  inputStyles = inputStyles(leadingIcon[8]).useInputStyles({ size: size.size, hasLeadingIcon: null != size.leadingIcon });
  leadingIcon = size.leadingIcon;
  ({ leadingText, trailingIcon } = size);
  const trailingText = size.trailingText;
  leading = undefined;
  ({ leadingPressableProps, trailingPressableProps } = size);
  if (leading != null) {
    leading = leading.leading;
  }
  if (leading != null) {
    let trailing;
    if (leading != null) {
      trailing = leading.trailing;
    }
    if (trailing != null) {
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
          [tmp21, tmp22] = trailingIcon(noop.useState(() => {
            let num = 0;
            if (null != leadingIcon) {
              num = IconSize.ICON_SIZE.xs + tmp;
            }
            return num;
          }), 2);
          const tmp23 = trailingIcon(noop.useState(() => {
            let num = 0;
            if (null != trailingIcon) {
              num = IconSize.ICON_SIZE.xs + tmp;
            }
            return num;
          }), 2);
          const first = tmp23[0];
          const obj3 = { content: leading, setWidth: tmp22, pressableProps: null, style: null };
          let prop;
          if (leading != null) {
            prop = leading.leadingPressableProps;
          }
          if (prop == null) {
            prop = leadingPressableProps;
          }
          const obj4 = { leading: null, trailing: null, inputStyle: null };
          obj3.pressableProps = prop;
          obj3.style = leadingIcon2;
          obj4.leading = <closure_7 content={leading} setWidth={tmp22} pressableProps={null} style={null} />;
          const obj5 = { content: trailing, setWidth: tmp23[1], pressableProps: null, style: null };
          let prop1;
          if (leading != null) {
            prop1 = leading.trailingPressableProps;
          }
          if (prop1 == null) {
            prop1 = trailingPressableProps;
          }
          obj5.pressableProps = prop1;
          obj5.style = trailingIcon2;
          obj4.trailing = <closure_7 content={trailing} setWidth={tmp23[1]} pressableProps={null} style={null} />;
          let diff;
          if (0 !== tmp21) {
            diff = tmp21 - inputStyles.padding.paddingHorizontal;
          }
          const obj6 = { marginStart: diff, marginEnd: null };
          let diff1;
          if (0 !== first) {
            diff1 = first - inputStyles.padding.paddingHorizontal;
          }
          obj6.marginEnd = diff1;
          obj4.inputStyle = obj6;
          return obj4;
        }
        trailingIcon2 = inputStyles.trailingIcon;
      }
      leadingIcon2 = inputStyles.leadingIcon;
    } else if (null != trailingIcon) {
      let tmp12 = <trailingIcon size="xs" color="input-icon-default" />;
    } else if (null != trailingText) {
      const obj7 = { variant: "text-md/normal", style: tmp11, children: trailingText };
      tmp12 = jsx(tmp(tmp2[5]).Text, { variant: "text-md/normal", style: tmp11, children: trailingText });
    }
  } else if (null != leadingIcon) {
    let tmp6 = <leadingIcon size="xs" color="input-icon-default" />;
  } else if (null != leadingText) {
    const obj8 = { variant: "text-md/normal", style: tmp5, children: leadingText };
    tmp6 = jsx(tmp(tmp2[5]).Text, { variant: "text-md/normal", style: tmp5, children: leadingText });
  }
  const obj = inputStyles(leadingIcon[8]);
  const obj2 = { size: size.size, hasLeadingIcon: null != size.leadingIcon };
});