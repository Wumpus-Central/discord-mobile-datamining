// discord_app/modules/toast/native/Toast.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function ToastIcon(recolorLegacyIcon) {
  ({ icon, IconComponent, iconColor } = recolorLegacyIcon);
  let obj = useToken;
  if (iconColor == null) {
    iconColor = "mobile-text-heading-primary";
  }
  const token = obj.useToken(iconColor);
  if (recolorLegacyIcon.recolorLegacyIcon) {
    obj = { color: token };
  } else {
    obj = { disableColor: true };
  }
  if (null != IconComponent) {
    const obj1 = { size: "sm", color: token };
    let tmp8 = hasOwnProperty(IconComponent, obj1);
  } else if (typeof icon === "function") {
    const obj2 = { children: icon() };
    tmp8 = hasOwnProperty(timestampProducer, obj2);
  } else {
    tmp8 = null;
    if (null != icon) {
      const obj3 = { resizeMode: "contain", source: icon };
      const merged = Object.assign(obj);
      tmp8 = hasOwnProperty(native.Icon, obj3);
    }
  }
  return tmp8;
}
function ToastContent(content) {
  content = content.content;
  const tmp = closure_8();
  if (typeof content === "function") {
    let obj = { style: tmp.contentContainer, children: content() };
    let tmp4 = hasOwnProperty(View, obj);
  } else {
    obj = {
      onTextLayout: content.onTextLayout,
      style: tmp.contentContainer,
      lineClamp: 3,
      variant: "text-sm/semibold",
      color: "mobile-text-heading-primary",
      children: content,
    };
    tmp4 = hasOwnProperty(Text_Text.Text, obj);
  }
  return tmp4;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, multilineContainer: null, contentContainer: null };
createStyles = {
  flexDirection: "row",
  alignItems: "center",
  borderRadius: nativeDefault.radii.xxl,
  padding: nativeDefault.space.PX_8,
  paddingRight: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 1,
};
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
createStyles.container = createStyles;
createStyles.multilineContainer = { paddingLeft: nativeDefault.space.PX_12 };
createStyles.contentContainer = { marginLeft: 8, flexShrink: 1 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/toast/native/Toast.tsx");

export default function Toast(arg0) {
  c0 = undefined;
  ({ icon, iconColor, IconComponent, content, containerStyle, recolorLegacyIcon } = arg0);
  const tmp = closure_8();
  [tmp3, c0] = _slicedToArray(noop.useState(false), 2);
  noop.useRef(false);
  const items = [tmp.container, ,];
  let multilineContainer = null;
  const callback = noop.useCallback((nativeEvent) => {
    if (!ref.current) {
      tmp.current = true;
      _undefined(nativeEvent.nativeEvent.lines.length > 1);
    }
  }, []);
  if (tmp3) {
    multilineContainer = tmp.multilineContainer;
  }
  const obj = { style: items, accessibilityElementsHidden: true, children: null };
  items[1] = multilineContainer;
  items[2] = containerStyle;
  const items1 = [
    hasOwnProperty(ToastIcon, { icon, iconColor, IconComponent, recolorLegacyIcon }),
    hasOwnProperty(ToastContent, { content, onTextLayout: callback }),
  ];
  obj.children = items1;
  return React5(View, obj);
}
