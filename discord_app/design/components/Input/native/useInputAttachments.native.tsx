// === Module 6228: InputAttachmentContainer ===

// Module 6228 (InputAttachmentContainer)
import Text from "Text" /* 4474 */;
import ICON_SIZE from "ICON_SIZE" /* 6002 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
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
          return callback(nativeEvent.nativeEvent.layout.width);
        };
        obj.children = content;
        tmp3 = jsx(Pressable, obj);
      } else {
        tmp = jsx;
        tmp2 = View;
        obj = { style: null, onLayout: null, children: null };
        obj[0] = style;
        obj[1] = function onLayout(nativeEvent) {
          return callback(nativeEvent.nativeEvent.layout.width);
        };
        obj[2] = content;
        tmp3 = jsx(View, obj);
      }
      tmp9 = tmp3;
    }
    return;
  }
}
({ Platform, Pressable: c4, View: c5 } = get_ActivityIndicator);
const result = require("set").fileFinishedImporting("design/components/Input/native/useInputAttachments.native.tsx");

export const estimateAttachmentWidth = function estimateAttachmentWidth(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = ICON_SIZE.ICON_SIZE.xs + arg1;
  }
  return num;
};
export const renderInputAttachment = function renderInputAttachment(arg0, leadingText, text) {
  if (null != arg0) {
    let tmp2 = jsx(arg0, { size: "xs", color: "input-icon-default" });
  } else {
    tmp2 = null;
    if (null != leadingText) {
      const obj = { variant: "text-md/normal", style: null, children: null };
      obj[1] = text;
      obj[2] = leadingText;
      tmp2 = jsx(Text.Text, { variant: "text-md/normal", style: null, children: null });
    }
  }
  return tmp2;
};
export { InputAttachmentContainer };
export const useInputAttachments = function useInputAttachments(size, leading) {
  let obj = inputStyles(leadingIcon[6]);
  obj = { size: size.size, hasLeadingIcon: null != size.leadingIcon };
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
          [tmp21, tmp22] = trailingIcon(React.useState(() => {
            let num = 0;
            if (null != leadingIcon) {
              num = inputStyles(leadingIcon[4]).ICON_SIZE.xs + tmp;
            }
            return num;
          }), 2);
          const tmp23 = trailingIcon(React.useState(() => {
            let num = 0;
            if (null != trailingIcon) {
              num = inputStyles(leadingIcon[4]).ICON_SIZE.xs + tmp;
            }
            return num;
          }), 2);
          const first = tmp23[0];
          obj = { content: null, setWidth: null, pressableProps: null, style: null };
          obj[0] = leading;
          obj[1] = tmp22;
          let prop;
          if (leading != null) {
            prop = leading.leadingPressableProps;
          }
          if (prop == null) {
            prop = leadingPressableProps;
          }
          obj1 = { leading: null, trailing: null, inputStyle: null };
          obj[2] = prop;
          obj[3] = leadingIcon2;
          obj1[0] = <InputAttachmentContainer content={null} setWidth={null} pressableProps={null} style={null} />;
          const obj2 = { content: null, setWidth: null, pressableProps: null, style: null };
          obj2[0] = trailing;
          obj2[1] = tmp23[1];
          let prop1;
          if (leading != null) {
            prop1 = leading.trailingPressableProps;
          }
          if (prop1 == null) {
            prop1 = trailingPressableProps;
          }
          obj2[2] = prop1;
          obj2[3] = trailingIcon2;
          obj1[1] = <InputAttachmentContainer content={null} setWidth={null} pressableProps={null} style={null} />;
          let diff;
          if (0 !== tmp21) {
            diff = tmp21 - inputStyles.padding.paddingHorizontal;
          }
          const obj3 = { marginStart: null, marginEnd: null };
          obj3[0] = diff;
          let diff1;
          if (0 !== first) {
            diff1 = first - inputStyles.padding.paddingHorizontal;
          }
          obj3[1] = diff1;
          obj1[2] = obj3;
          return obj1;
        }
        trailingIcon2 = inputStyles.trailingIcon;
      }
      leadingIcon2 = inputStyles.leadingIcon;
    } else if (null != trailingIcon) {
      let tmp12 = <trailingIcon size="xs" color="input-icon-default" />;
    } else {
      tmp12 = null;
      if (null != trailingText) {
        const obj4 = { variant: "text-md/normal", style: null, children: null };
        obj4[1] = tmp11;
        obj4[2] = trailingText;
        tmp12 = jsx(tmp(tmp2[5]).Text, { variant: "text-md/normal", style: null, children: null });
      }
    }
  } else if (null != leadingIcon) {
    let tmp6 = <leadingIcon size="xs" color="input-icon-default" />;
  } else {
    tmp6 = null;
    if (null != leadingText) {
      const obj5 = { variant: "text-md/normal", style: null, children: null };
      obj5[1] = tmp5;
      obj5[2] = leadingText;
      tmp6 = jsx(tmp(tmp2[5]).Text, { variant: "text-md/normal", style: null, children: null });
    }
  }
};