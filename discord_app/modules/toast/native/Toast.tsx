import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
const require = arg1;
function ToastIcon(recolorLegacyIcon) {
  let IconComponent;
  let icon;
  let iconColor;
  ({ icon, IconComponent, iconColor } = recolorLegacyIcon);
  let obj = require(3897) /* map */;
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
    const obj1 = { size: "sm", color: null };
    obj1[1] = token;
    let tmp8 = callback2(IconComponent, obj1);
  } else if (typeof icon === "fileFinishedImporting") {
    const obj2 = { children: null };
    obj2[0] = icon();
    tmp8 = callback2(closure_6, obj2);
  } else {
    tmp8 = null;
    if (null != icon) {
      const obj3 = { resizeMode: "contain", source: null };
      obj3[1] = icon;
      const merged = Object.assign(obj);
      tmp8 = callback2(require(1297) /* Button */.Icon, obj3);
    }
  }
  return tmp8;
}
function ToastContent(content) {
  content = content.content;
  const tmp = createCacheKey();
  if (typeof content === "fileFinishedImporting") {
    let obj = { style: null, children: null };
    obj[0] = tmp.contentContainer;
    obj[1] = content();
    let tmp4 = callback2(View, obj);
  } else {
    obj = { onTextLayout: null, style: null, lineClamp: 3, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    obj[0] = content.onTextLayout;
    obj[1] = tmp.contentContainer;
    obj[5] = content;
    tmp4 = callback2(require(4189) /* Text */.Text, obj);
  }
  return tmp4;
}
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, multilineContainer: null, contentContainer: null };
createCacheKey = { flexDirection: "row", alignItems: "center", borderRadius: require("Themes").radii.xxl, padding: require("Themes").space.PX_8, paddingRight: require("Themes").space.PX_12, backgroundColor: require("Themes").colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderColor: require("Themes").colors.BORDER_SUBTLE, borderWidth: 1 };
let merged = Object.assign(require("Themes").shadows.SHADOW_HIGH);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingLeft: require("Themes").space.PX_12 };
createCacheKey[2] = { marginLeft: 8, flexShrink: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingLeft: require("Themes").space.PX_12 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/toast/native/Toast.tsx");

export default function Toast(arg0) {
  let IconComponent;
  let c0;
  let containerStyle;
  let content;
  let icon;
  let iconColor;
  let recolorLegacyIcon;
  let tmp3;
  c0 = undefined;
  let closure_1;
  ({ icon, iconColor, IconComponent, content, containerStyle, recolorLegacyIcon } = arg0);
  const tmp = createCacheKey();
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
  return closure_7(View, obj);
};