// === Module 6619: useInputAttachments ===

// Module 6619 (useInputAttachments)
import Text_Text from "Text/Text" /* 4556 */;
import IconSize from "IconSize" /* 6620 */;
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
        obj = { role: "button" };
        tmp6 = obj;
        tmp7 = pressableProps;
        merged = Object.assign(pressableProps);
        pressableProps = function style(pressed) {
          const items = [style, { pointerEvents: "auto" }, ];
          let obj;
          if (pressed.pressed) {
            obj = { opacity: 0.2 };
          }
          items[2] = obj;
          return items;
        };
        obj.style = pressableProps;
        obj.onLayout = function onLayout(nativeEvent) {
          return dependencyMap(nativeEvent.nativeEvent.layout.width);
        };
        obj.children = content;
        tmp3 = jsx(Pressable, obj);
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
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/useInputAttachments.native.tsx");

export const estimateAttachmentWidth = function estimateAttachmentWidth(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = IconSize.ICON_SIZE.xs + arg1;
  }
  return num;
};
export const renderInputAttachment = function renderInputAttachment(arg0, leadingText, text) {
  if (null != arg0) {
    let tmp2 = jsx(arg0, { size: "xs", color: "input-icon-default" });
  } else {
    tmp2 = null;
    if (null != leadingText) {
      const obj = { variant: "text-md/normal", style: text, children: leadingText };
      tmp2 = jsx(Text_Text.Text, { variant: "text-md/normal", style: text, children: leadingText });
    }
  }
  return tmp2;
};
export { InputAttachmentContainer };
export const useInputAttachments = function useInputAttachments(size, leading) {
  inputStyles(leadingIcon[6]);
  let obj = { size: size.size, hasLeadingIcon: null != size.leadingIcon };
  inputStyles = obj.useInputStyles(obj);
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
          obj = { content: leading, setWidth: tmp22, pressableProps: null, style: null };
          let prop;
          if (leading != null) {
            prop = leading.leadingPressableProps;
          }
          if (prop == null) {
            prop = leadingPressableProps;
          }
          const obj1 = { leading: null, trailing: null, inputStyle: null };
          obj.pressableProps = prop;
          obj.style = leadingIcon2;
          obj1.leading = <InputAttachmentContainer content={leading} setWidth={tmp22} pressableProps={null} style={null} />;
          const obj2 = { content: trailing, setWidth: tmp23[1], pressableProps: null, style: null };
          let prop1;
          if (leading != null) {
            prop1 = leading.trailingPressableProps;
          }
          if (prop1 == null) {
            prop1 = trailingPressableProps;
          }
          obj2.pressableProps = prop1;
          obj2.style = trailingIcon2;
          obj1.trailing = <InputAttachmentContainer content={trailing} setWidth={tmp23[1]} pressableProps={null} style={null} />;
          let diff;
          if (0 !== tmp21) {
            diff = tmp21 - inputStyles.padding.paddingHorizontal;
          }
          const obj3 = { marginStart: diff, marginEnd: null };
          let diff1;
          if (0 !== first) {
            diff1 = first - inputStyles.padding.paddingHorizontal;
          }
          obj3.marginEnd = diff1;
          obj1.inputStyle = obj3;
          return obj1;
        }
        trailingIcon2 = inputStyles.trailingIcon;
      }
      leadingIcon2 = inputStyles.leadingIcon;
    } else if (null != trailingIcon) {
      let tmp12 = <trailingIcon size="xs" color="input-icon-default" />;
    } else if (null != trailingText) {
      const obj4 = { variant: "text-md/normal", style: tmp11, children: trailingText };
      tmp12 = jsx(tmp(tmp2[5]).Text, { variant: "text-md/normal", style: tmp11, children: trailingText });
    }
  } else if (null != leadingIcon) {
    let tmp6 = <leadingIcon size="xs" color="input-icon-default" />;
  } else if (null != leadingText) {
    const obj5 = { variant: "text-md/normal", style: tmp5, children: leadingText };
    tmp6 = jsx(tmp(tmp2[5]).Text, { variant: "text-md/normal", style: tmp5, children: leadingText });
  }
};