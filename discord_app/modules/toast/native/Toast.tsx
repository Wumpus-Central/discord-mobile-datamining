// === Module 17141: Toast ===

// Module 17141 (Toast)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4580 */;
import Text_Text from "Text/Text" /* 4886 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const native = Icon(1188);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: null, multilineContainer: null, contentContainer: null };
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.container = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.xxl, padding: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1 };
let obj3 = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.xxl, padding: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1 };
obj2.multilineContainer = { paddingLeft: nativeDefault.space.PX_12 };
obj2.contentContainer = { marginLeft: 8, flexShrink: 1 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Icon = require;
  let tmp = dependencyMap;
  const cResult = c.c(13);
  ({ icon, IconComponent, iconColor, recolorLegacyIcon } = arg0);
  if (iconColor == null) {
    iconColor = "mobile-text-heading-primary";
  }
  const token = useToken.useToken(iconColor);
  if (cResult[0] === token) {
    if (cResult[1] === recolorLegacyIcon) {
      if (null != IconComponent) {
        if (cResult[3] === IconComponent) {
        }
        const obj3 = { size: "sm", color: token };
        const tmp20 = hasOwnProperty(IconComponent, obj3);
        cResult[3] = IconComponent;
        cResult[4] = token;
        cResult[5] = tmp20;
      } else if (typeof icon === "function") {
        if (cResult[6] !== icon) {
          const iconResult = icon();
          cResult[6] = icon;
          cResult[7] = iconResult;
          let tmp11 = iconResult;
        } else {
          tmp11 = cResult[7];
        }
        if (cResult[8] !== tmp11) {
          const obj4 = { children: tmp11 };
          const tmp16 = hasOwnProperty(timestampProducer, obj4);
          cResult[8] = tmp11;
          cResult[9] = tmp16;
        }
      } else if (null == icon) {
        return null;
      } else {
        if (cResult[10] === icon) {
        }
        Icon = native.Icon;
        const obj5 = { resizeMode: "contain", source: icon };
        const merged = Object.assign(tmp4);
        tmp = hasOwnProperty(Icon, obj5);
        cResult[10] = icon;
        cResult[11] = tmp4;
        cResult[12] = tmp;
      }
    }
  }
  if (recolorLegacyIcon) {
    const obj6 = { color: token };
    let obj7 = obj6;
  } else {
    obj7 = { disableColor: true };
  }
  cResult[0] = token;
  cResult[1] = recolorLegacyIcon;
  cResult[2] = obj7;
}) : ((recolorLegacyIcon) => {
  ({ icon, IconComponent, iconColor } = recolorLegacyIcon);
  if (iconColor == null) {
    iconColor = "mobile-text-heading-primary";
  }
  const token = useToken.useToken(iconColor);
  if (recolorLegacyIcon.recolorLegacyIcon) {
    const obj2 = { color: token };
    let obj3 = obj2;
  } else {
    obj3 = { disableColor: true };
  }
  if (null != IconComponent) {
    const obj4 = { size: "sm", color: token };
    let tmp8 = hasOwnProperty(IconComponent, obj4);
  } else if (typeof icon === "function") {
    const obj5 = { children: icon() };
    tmp8 = hasOwnProperty(timestampProducer, obj5);
  } else {
    tmp8 = null;
    if (null != icon) {
      const obj6 = { resizeMode: "contain", source: icon };
      const merged = Object.assign(obj3);
      tmp8 = hasOwnProperty(native.Icon, obj6);
    }
  }
  return tmp8;
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ content, onTextLayout } = arg0);
  const tmp4 = closure_8();
  if (typeof content === "function") {
    if (cResult[0] !== content) {
      const contentResult = content();
      cResult[0] = content;
      cResult[1] = contentResult;
      let tmp8 = contentResult;
    } else {
      tmp8 = cResult[1];
    }
    if (cResult[2] === tmp4.contentContainer) {
      if (cResult[3] === tmp8) {
        let tmp10 = cResult[4];
      }
      return tmp10;
    }
    const obj2 = { style: tmp4.contentContainer, children: tmp8 };
    const tmp13 = hasOwnProperty(View, obj2);
    cResult[2] = tmp4.contentContainer;
    cResult[3] = tmp8;
    cResult[4] = tmp13;
    tmp10 = tmp13;
  } else {
    if (cResult[5] === content) {
      if (cResult[6] === onTextLayout) {
        if (cResult[7] === tmp4.contentContainer) {
          let tmp5 = cResult[8];
        }
        return tmp5;
      }
    }
    const obj3 = { onTextLayout, style: tmp4.contentContainer, lineClamp: 3, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: content };
    const tmp7 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[5] = content;
    cResult[6] = onTextLayout;
    cResult[7] = tmp4.contentContainer;
    cResult[8] = tmp7;
    tmp5 = tmp7;
  }
}) : ((content) => {
  content = content.content;
  const tmp = closure_8();
  if (typeof content === "function") {
    const obj = { style: tmp.contentContainer, children: content() };
    let tmp4 = hasOwnProperty(View, obj);
  } else {
    const obj2 = { onTextLayout: content.onTextLayout, style: tmp.contentContainer, lineClamp: 3, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: content };
    tmp4 = hasOwnProperty(Text_Text.Text, obj2);
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
let obj4 = { paddingLeft: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/toast/native/Toast.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(16);
  ({ icon, iconColor, IconComponent, content, containerStyle, recolorLegacyIcon } = arg0);
  const tmp2 = closure_8();
  [tmp4, require] = noop.useState(false);
  noop.useRef(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(nativeEvent) {
      if (!ref.current) {
        tmp.current = true;
        require(nativeEvent.nativeEvent.lines.length > 1);
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  let multilineContainer = null;
  if (tmp4) {
    multilineContainer = tmp2.multilineContainer;
  }
  if (cResult[1] === containerStyle) {
    if (cResult[2] === tmp2.container) {
      if (cResult[3] === multilineContainer) {
        let tmp7 = cResult[4];
      }
      if (cResult[5] === IconComponent) {
        if (cResult[6] === icon) {
          if (cResult[7] === iconColor) {
            if (cResult[8] === recolorLegacyIcon) {
              let tmp8 = cResult[9];
            }
            if (cResult[10] !== content) {
              const obj2 = { content, onTextLayout: first };
              const tmp15 = hasOwnProperty(closure_10, obj2);
              cResult[10] = content;
              cResult[11] = tmp15;
              let tmp12 = tmp15;
            } else {
              tmp12 = cResult[11];
            }
            if (cResult[12] === tmp7) {
              if (cResult[13] === tmp8) {
                if (cResult[14] === tmp12) {
                  let tmp16 = cResult[15];
                }
                return tmp16;
              }
            }
            const obj3 = { style: tmp7, accessibilityElementsHidden: true, children: null };
            const items = [tmp8, tmp12];
            obj3.children = items;
            const tmp19 = React5(View, obj3);
            cResult[12] = tmp7;
            cResult[13] = tmp8;
            cResult[14] = tmp12;
            cResult[15] = tmp19;
            tmp16 = tmp19;
          }
        }
      }
      const obj4 = { icon, iconColor, IconComponent, recolorLegacyIcon };
      const tmp11 = hasOwnProperty(closure_9, obj4);
      cResult[5] = IconComponent;
      cResult[6] = icon;
      cResult[7] = iconColor;
      cResult[8] = recolorLegacyIcon;
      cResult[9] = tmp11;
      tmp8 = tmp11;
    }
  }
  const items1 = [tmp2.container, multilineContainer, containerStyle];
  cResult[1] = containerStyle;
  cResult[2] = tmp2.container;
  cResult[3] = multilineContainer;
  cResult[4] = items1;
  tmp7 = items1;
  const tmp3 = _slicedToArray(noop.useState(false), 2);
}) : ((arg0) => {
  c0 = undefined;
  ({ icon, iconColor, IconComponent, content, containerStyle, recolorLegacyIcon } = arg0);
  const tmp = closure_8();
  [tmp3, c0] = noop.useState(false);
  noop.useRef(false);
  const items = [tmp.container, , ];
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
  const items1 = [hasOwnProperty(closure_9, { icon, iconColor, IconComponent, recolorLegacyIcon }), hasOwnProperty(closure_10, { content, onTextLayout: callback })];
  obj.children = items1;
  return React5(View, obj);
});