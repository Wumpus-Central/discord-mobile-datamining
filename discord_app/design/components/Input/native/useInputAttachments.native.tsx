// discord_app/design/components/Input/native/useInputAttachments.native.tsx
import Text from "../../Text/native/Text.tsx";
import ICON_SIZE from "../../Icon/IconSize.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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
({ Platform, Pressable: c5, View: closure_6 } = get_ActivityIndicator);
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
  let obj = inputStyles(trailingIcon[7]);
  obj = { size: size.size, hasLeadingIcon: null != size.leadingIcon, isRefreshEnabled: leadingIcon(trailingIcon[6])("useInputAttachments") };
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
          [tmp22, tmp23] = callback(React.useState(() => {
            let num = 0;
            if (null != leadingIcon) {
              num = inputStyles(trailingIcon[4]).ICON_SIZE.xs + tmp;
            }
            return num;
          }), 2);
          const tmp24 = callback(React.useState(() => {
            let num = 0;
            if (null != trailingIcon) {
              num = inputStyles(trailingIcon[4]).ICON_SIZE.xs + tmp;
            }
            return num;
          }), 2);
          const first = tmp24[0];
          obj = { content: null, setWidth: null, pressableProps: null, style: null };
          obj[0] = leading;
          obj[1] = tmp23;
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
          obj2[1] = tmp24[1];
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
          if (0 !== tmp22) {
            diff = tmp22 - inputStyles.padding.paddingHorizontal;
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
      let tmp13 = <trailingIcon size="xs" color="input-icon-default" />;
    } else {
      tmp13 = null;
      if (null != trailingText) {
        const obj4 = { variant: "text-md/normal", style: null, children: null };
        obj4[1] = tmp12;
        obj4[2] = trailingText;
        tmp13 = jsx(tmp3(tmp[5]).Text, { variant: "text-md/normal", style: null, children: null });
      }
    }
  } else if (null != leadingIcon) {
    let tmp7 = <leadingIcon size="xs" color="input-icon-default" />;
  } else {
    tmp7 = null;
    if (null != leadingText) {
      const obj5 = { variant: "text-md/normal", style: null, children: null };
      obj5[1] = tmp6;
      obj5[2] = leadingText;
      tmp7 = jsx(tmp3(tmp[5]).Text, { variant: "text-md/normal", style: null, children: null });
    }
  }
};