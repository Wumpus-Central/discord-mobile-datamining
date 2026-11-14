// === Module 7637: useInputAttachments ===

// Module 7637 (useInputAttachments)
import Text_Text from "Text/Text" /* 5929 */;
import IconSize from "IconSize" /* 7638 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
class InputAttachmentContainer {
  constructor(arg0) {
    ({ content, style } = global);
    ({ setWidth, pressableProps } = global);
    if (null == content) {
      return null;
    } else {
      if (null != pressableProps) {
        tmp4 = jsx;
        tmp5 = Pressable;
        obj1 = { role: "button" };
        tmp6 = obj1;
        tmp7 = pressableProps;
        merged = Object.assign(pressableProps);
        pressableProps = function style(pressed) {
          items = [style, { pointerEvents: "auto" }, ];
          let obj;
          if (pressed.pressed) {
            obj = { opacity: 0.2 };
          }
          items[2] = obj;
          return items;
        };
        obj1.style = pressableProps;
        obj1.onLayout = function onLayout(nativeEvent) {
          return dependencyMap(nativeEvent.nativeEvent.layout.width);
        };
        obj1.children = content;
        tmp3 = jsx(Pressable, obj1);
      } else {
        tmp = jsx;
        tmp2 = View;
        obj = { style: null, onLayout: null, children: null };
        obj.style = style;
        obj.onLayout = function onLayout(nativeEvent) {
          return dependencyMap(nativeEvent.nativeEvent.layout.width);
        };
        obj.children = content;
        tmp3 = jsx(View, obj);
      }
      tmp9 = tmp3;
    }
    return;
  }
}
get_ActivityIndicator = fn(17);
({ Platform, Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let c7 = "input-icon-default";
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/useInputAttachments.native.tsx");

export function estimateAttachmentWidth(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = IconSize.ICON_SIZE.xs + arg1;
  }
  return num;
}
export function renderInputAttachment(BaseIconImage, leadingText, text) {
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = c7;
  }
  if (null != BaseIconImage) {
    const obj2 = { size: "xs", color: tmp };
    let tmp3 = <BaseIconImage size="xs" color={tmp} />;
  } else {
    tmp3 = null;
    if (null != leadingText) {
      const obj = { variant: "body-md/normal", style: text, children: leadingText };
      tmp3 = jsx(Text_Text.Text, { variant: "body-md/normal", style: text, children: leadingText });
    }
  }
  return tmp3;
}
export { InputAttachmentContainer };
export function useInputAttachments(merged, leadingPressableProps) {
  inputStyles = inputStyles(leadingIcon[6]).useInputStyles({ size: merged.size, hasLeadingIcon: null != merged.leadingIcon });
  leadingIcon = merged.leadingIcon;
  ({ leadingText, leadingPressableProps, trailingIcon } = merged);
  const trailingText = merged.trailingText;
  let prop;
  if (leadingPressableProps != null) {
    prop = leadingPressableProps.leadingPressableProps;
  }
  if (prop == null) {
    prop = leadingPressableProps;
  }
  noop = tmp5;
  let tmp6 = null == leadingIcon;
  if (tmp6) {
    let leading;
    if (leadingPressableProps != null) {
      leading = leadingPressableProps.leading;
    }
    tmp6 = null == leading;
  }
  let tmp8 = tmp5;
  if (null != prop) {
    tmp8 = tmp6;
  }
  if (tmp8) {
    tmp8 = null != leadingText;
  }
  closure_4 = tmp8;
  items = [null != prop, , , ];
  ({ text: arr[1], leadingDividerText: arr[2], placeholderText: arr[3] } = inputStyles);
  let leading1;
  const memo = noop.useMemo(() => {
    items = [inputStyles.text, ];
    if (closure_3) {
      items[1] = inputStyles.leadingDividerText;
      let tmp2 = items;
    } else {
      items[1] = inputStyles.placeholderText;
      tmp2 = items;
    }
    return tmp2;
  }, items);
  if (leadingPressableProps != null) {
    leading1 = leadingPressableProps.leading;
  }
  if (leading1 != null) {
    let trailing;
    if (leadingPressableProps != null) {
      trailing = leadingPressableProps.trailing;
    }
    if (trailing != null) {
      const tmp22 = tmp6 ? inputStyles.leadingText : inputStyles.leadingIcon;
      closure_5 = tmp22;
      const items1 = [tmp22, tmp8, inputStyles.leadingDivider];
      if (null == trailingIcon) {
        let trailing1;
        if (leadingPressableProps != null) {
          trailing1 = leadingPressableProps.trailing;
        }
        if (null == trailing1) {
          let trailingIcon2 = inputStyles.trailingText;
        }
        [tmp27, tmp28] = trailingIcon(obj3.useState(() => {
          let num = 0;
          if (null != leadingIcon) {
            num = IconSize.ICON_SIZE.xs + tmp;
          }
          return num;
        }), 2);
        const tmp26 = trailingIcon(obj3.useState(() => {
          let num = 0;
          if (null != leadingIcon) {
            num = IconSize.ICON_SIZE.xs + tmp;
          }
          return num;
        }), 2);
        let num3 = 0;
        [tmp30, tmp31] = trailingIcon(obj3.useState(() => {
          let num = 0;
          if (null != trailingIcon) {
            num = IconSize.ICON_SIZE.xs + tmp;
          }
          return num;
        }), 2);
        if (tmp8) {
          num3 = inputStyles.padding.paddingHorizontal;
        }
        let num4 = 0;
        if (null != leading1) {
          num4 = tmp27 + num3;
        }
        let num5 = 0;
        if (null != trailing) {
          num5 = tmp30;
        }
        const obj4 = { content: leading1, setWidth: tmp28, pressableProps: null, style: null };
        let prop1;
        if (leadingPressableProps != null) {
          prop1 = leadingPressableProps.leadingPressableProps;
        }
        if (prop1 == null) {
          prop1 = leadingPressableProps;
        }
        const obj5 = { leading: null, trailing: null, inputStyle: null };
        obj4.pressableProps = prop1;
        obj4.style = tmp23;
        obj5.leading = <InputAttachmentContainer content={leading1} setWidth={tmp28} pressableProps={null} style={null} />;
        const obj6 = { content: trailing, setWidth: tmp31, pressableProps: null, style: null };
        let prop2;
        if (leadingPressableProps != null) {
          prop2 = leadingPressableProps.trailingPressableProps;
        }
        if (prop2 == null) {
          prop2 = merged.trailingPressableProps;
        }
        obj6.pressableProps = prop2;
        obj6.style = trailingIcon2;
        obj5.trailing = <InputAttachmentContainer content={trailing} setWidth={tmp31} pressableProps={null} style={null} />;
        let diff;
        if (0 !== num4) {
          diff = num4 - inputStyles.padding.paddingHorizontal;
        }
        const obj7 = { marginStart: diff, marginEnd: null };
        let diff1;
        if (0 !== num5) {
          diff1 = num5 - inputStyles.padding.paddingHorizontal;
        }
        obj7.marginEnd = diff1;
        obj5.inputStyle = obj7;
        return obj5;
      }
      trailingIcon2 = inputStyles.trailingIcon;
    } else if (null != trailingIcon) {
      const obj8 = { size: "xs", color: tmp17 };
      let tmp18 = <trailingIcon size="xs" color={tmp17} />;
    } else if (null != trailingText) {
      const obj9 = { variant: "body-md/normal", style: tmp16, children: trailingText };
      tmp18 = jsx(tmp(tmp2[5]).Text, { variant: "body-md/normal", style: tmp16, children: trailingText });
    }
  } else {
    let str = "icon-default";
    if (!tmp5) {
      str = c7;
    }
    if (str === undefined) {
      str = c7;
    }
    if (null != leadingIcon) {
      const obj10 = { size: "xs", color: str };
      let tmp11 = <leadingIcon size="xs" color={str} />;
    } else if (null != leadingText) {
      const obj11 = { variant: "body-md/normal", style: memo, children: leadingText };
      tmp11 = jsx(tmp(tmp2[5]).Text, { variant: "body-md/normal", style: memo, children: leadingText });
    }
  }
  let obj = inputStyles(leadingIcon[6]);
  const obj2 = { size: merged.size, hasLeadingIcon: null != merged.leadingIcon };
}