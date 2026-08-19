// discord_app/modules/toast/native/Toast.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function ToastIcon(recolorLegacyIcon) {
  ({ icon, IconComponent, iconColor } = recolorLegacyIcon);
  let obj = map;
  if (iconColor == null) {
    iconColor = "mobile-text-heading-primary";
  }
  const token = obj.useToken(iconColor);
  if (recolorLegacyIcon.recolorLegacyIcon) {
    obj = { color: null };
    obj[0] = token;
  } else {
    obj = { disableColor: true };
  }
  if (null != IconComponent) {
    obj1 = { size: "sm", color: null };
    obj1[1] = token;
    let tmp8 = callback2(IconComponent, obj1);
  } else if (typeof icon === "function") {
    const obj2 = { children: null };
    obj2[0] = icon();
    tmp8 = callback2(closure_6, obj2);
  } else {
    tmp8 = null;
    if (null != icon) {
      const obj3 = { resizeMode: "contain", source: null };
      obj3[1] = icon;
      const merged = Object.assign(obj);
      tmp8 = callback2(Button.Icon, obj3);
    }
  }
  return tmp8;
}
function ToastContent(content) {
  content = content.content;
  const tmp = callback3();
  if (typeof content === "function") {
    let obj = { style: null, children: null };
    obj[0] = tmp.contentContainer;
    obj[1] = content();
    let tmp4 = callback2(View, obj);
  } else {
    obj = { onTextLayout: null, style: null, lineClamp: 3, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    obj[0] = content.onTextLayout;
    obj[1] = tmp.contentContainer;
    obj[5] = content;
    tmp4 = callback2(Text.Text, obj);
  }
  return tmp4;
}
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { flexDirection: "row", alignItems: "center", borderRadius: ThemesDefault.radii.xxl, padding: ThemesDefault.space.PX_8, paddingRight: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderWidth: 1 };
let merged = Object.assign(ThemesDefault.shadows.SHADOW_HIGH);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingLeft: ThemesDefault.space.PX_12 };
createCacheKey[2] = { marginLeft: 8, flexShrink: 1 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/toast/native/Toast.tsx");

export default function Toast(arg0) {
  c0 = undefined;
  ({ icon, iconColor, IconComponent, content, containerStyle, recolorLegacyIcon } = arg0);
  const tmp = callback3();
  [tmp3, c0] = callback(React.useState(false), 2);
  closure_1 = React.useRef(false);
  const items = [tmp.container, , ];
  let multilineContainer = null;
  callback = React.useCallback((nativeEvent) => {
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
  const items1 = [callback2(ToastIcon, { icon, iconColor, IconComponent, recolorLegacyIcon }), callback2(ToastContent, { content, onTextLayout: callback })];
  obj[2] = items1;
  return callback(View, obj);
};