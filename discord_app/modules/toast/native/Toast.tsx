// === Module 17170: Toast ===

// Module 17170 (Toast)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import useToken2 from "useToken" /* 4586 */;
import Text_Text from "Text/Text" /* 4892 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, multilineContainer: obj3, contentContainer: { marginLeft: 8, flexShrink: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.xxl, padding: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1 };
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj3 = { paddingLeft: nativeDefault.space.PX_12 };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let IconComponent;
  let icon;
  let iconColor;
  let obj6;
  let recolorLegacyIcon;
  const obj = react2;
  const cResult = obj.c(13);
  ({ icon, IconComponent, iconColor, recolorLegacyIcon } = arg0);
  const useToken = useToken2.useToken;
  useToken2;
  if (iconColor == null) {
    iconColor = "mobile-text-heading-primary";
  }
  const token = useToken(iconColor);
  if (cResult[0] === token) {
    let tmp6;
    let tmp13;
    if (cResult[1] === recolorLegacyIcon) {
      tmp6 = cResult[2];
    }
    if (null != IconComponent) {
      if (cResult[3] === IconComponent) {
        let tmp20;
        if (cResult[4] === token) {
          tmp20 = cResult[5];
        }
        tmp13 = tmp20;
      }
      const obj2 = { size: "sm", color: token };
      const tmp22 = hasOwnProperty(IconComponent, obj2);
      cResult[3] = IconComponent;
      cResult[4] = token;
      cResult[5] = tmp22;
      tmp20 = tmp22;
    } else if (typeof icon === "function") {
      let tmp14;
      let tmp16;
      if (cResult[6] !== icon) {
        const iconResult = icon();
        cResult[6] = icon;
        cResult[7] = iconResult;
        tmp14 = iconResult;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] !== tmp14) {
        const obj3 = { children: tmp14 };
        const tmp19 = hasOwnProperty(metroRequire, obj3);
        cResult[8] = tmp14;
        cResult[9] = tmp19;
        tmp16 = tmp19;
      } else {
        tmp16 = cResult[9];
      }
      tmp13 = tmp16;
    } else {
      tmp13 = null;
      if (null != icon) {
        if (cResult[10] === icon) {
          let tmp7;
          if (cResult[11] === tmp6) {
            tmp7 = cResult[12];
          }
          tmp13 = tmp7;
        }
        const obj4 = { resizeMode: "contain", source: icon };
        const Icon = native.Icon;
        const merged = Object.assign(tmp6);
        const tmp12 = hasOwnProperty(Icon, obj4);
        cResult[10] = icon;
        cResult[11] = tmp6;
        cResult[12] = tmp12;
        tmp7 = tmp12;
      }
    }
    return tmp13;
  }
  if (recolorLegacyIcon) {
    obj6 = { color: token };
    const obj5 = { color: token };
  } else {
    obj6 = { disableColor: true };
  }
  cResult[0] = token;
  cResult[1] = recolorLegacyIcon;
  cResult[2] = obj6;
  tmp6 = obj6;
}) : ((recolorLegacyIcon) => {
  let IconComponent;
  let icon;
  let iconColor;
  let obj;
  let tmp9;
  ({ icon, IconComponent, iconColor } = recolorLegacyIcon);
  recolorLegacyIcon = recolorLegacyIcon.recolorLegacyIcon;
  const useToken = useToken2.useToken;
  useToken2;
  if (iconColor == null) {
    iconColor = "mobile-text-heading-primary";
  }
  const token = useToken(iconColor);
  if (recolorLegacyIcon) {
    obj = { color: token };
    const obj2 = { color: token };
  } else {
    obj = { disableColor: true };
  }
  if (null != IconComponent) {
    const obj3 = { size: "sm", color: token };
    tmp9 = hasOwnProperty(IconComponent, obj3);
  } else if (typeof icon === "function") {
    const obj4 = { children: icon() };
    tmp9 = hasOwnProperty(metroRequire, obj4);
  } else {
    tmp9 = null;
    if (null != icon) {
      const obj5 = { resizeMode: "contain", source: icon };
      const Icon = native.Icon;
      const merged = Object.assign(obj);
      tmp9 = hasOwnProperty(Icon, obj5);
    }
  }
  return tmp9;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let content;
  let onTextLayout;
  const obj = react2;
  const cResult = obj.c(9);
  ({ content, onTextLayout } = arg0);
  const tmp4 = closure_8();
  if (typeof content === "function") {
    let tmp8;
    const contentContainer = tmp4.contentContainer;
    if (cResult[0] !== content) {
      const contentResult = content();
      cResult[0] = content;
      cResult[1] = contentResult;
      tmp8 = contentResult;
    } else {
      tmp8 = cResult[1];
    }
    if (cResult[2] === tmp4.contentContainer) {
      let tmp10;
      if (cResult[3] === tmp8) {
        tmp10 = cResult[4];
      }
      return tmp10;
    }
    const obj2 = { style: contentContainer, children: tmp8 };
    const tmp13 = hasOwnProperty(View, obj2);
    cResult[2] = tmp4.contentContainer;
    cResult[3] = tmp8;
    cResult[4] = tmp13;
    tmp10 = tmp13;
  } else {
    if (cResult[5] === content) {
      if (cResult[6] === onTextLayout) {
        let tmp5;
        if (cResult[7] === tmp4.contentContainer) {
          tmp5 = cResult[8];
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
  let tmp4;
  content = content.content;
  const onTextLayout = content.onTextLayout;
  const tmp = closure_8();
  if (typeof content === "function") {
    const obj = { style: tmp.contentContainer, children: content() };
    tmp4 = hasOwnProperty(View, obj);
  } else {
    const obj2 = { onTextLayout, style: tmp.contentContainer, lineClamp: 3, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: content };
    tmp4 = hasOwnProperty(Text_Text.Text, obj2);
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let IconComponent;
  let closure_129_0;
  let containerStyle;
  let content;
  let first;
  let icon;
  let iconColor;
  let items;
  let recolorLegacyIcon;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(16);
  ({ icon, iconColor, IconComponent, content, containerStyle, recolorLegacyIcon } = arg0);
  const tmp2 = closure_8();
  [tmp4, closure_129_0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  let closure_1 = react.useRef(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(nativeEvent) {
      if (!ref.current) {
        tmp.current = true;
        closure_1_0(nativeEvent.nativeEvent.lines.length > 1);
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let multilineContainer = null;
  if (tmp4) {
    multilineContainer = tmp2.multilineContainer;
  }
  if (cResult[1] === containerStyle) {
    if (cResult[2] === tmp2.container) {
      let tmp7;
      if (cResult[3] === multilineContainer) {
        tmp7 = cResult[4];
      }
      if (cResult[5] === IconComponent) {
        if (cResult[6] === icon) {
          if (cResult[7] === iconColor) {
            let tmp8;
            let tmp12;
            if (cResult[8] === recolorLegacyIcon) {
              tmp8 = cResult[9];
            }
            if (cResult[10] !== content) {
              const obj2 = { content, onTextLayout: first };
              const tmp15 = hasOwnProperty(closure_10, obj2);
              cResult[10] = content;
              cResult[11] = tmp15;
              tmp12 = tmp15;
            } else {
              tmp12 = cResult[11];
            }
            if (cResult[12] === tmp7) {
              if (cResult[13] === tmp8) {
                let tmp16;
                if (cResult[14] === tmp12) {
                  tmp16 = cResult[15];
                }
                return tmp16;
              }
            }
            const obj3 = { style: tmp7, accessibilityElementsHidden: true, children: items };
            items = [tmp8, tmp12];
            const tmp19 = metroImportDefault(View, obj3);
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
}) : ((arg0) => {
  let IconComponent;
  let c0;
  let containerStyle;
  let content;
  let icon;
  let iconColor;
  let items1;
  let recolorLegacyIcon;
  let tmp3;
  c0 = undefined;
  ({ icon, iconColor, IconComponent, content, containerStyle, recolorLegacyIcon } = arg0);
  const tmp = closure_8();
  [tmp3, c0] = _slicedToArray(react.useState(false), 2);
  const tmp2 = _slicedToArray(react.useState(false), 2);
  let closure_1 = react.useRef(false);
  const items = [tmp.container, , ];
  let multilineContainer = null;
  const callback = react.useCallback((nativeEvent) => {
    if (!ref.current) {
      tmp.current = true;
      _undefined(nativeEvent.nativeEvent.lines.length > 1);
    }
  }, []);
  if (tmp3) {
    multilineContainer = tmp.multilineContainer;
  }
  const obj = { style: items, accessibilityElementsHidden: true, children: items1 };
  items[1] = multilineContainer;
  items[2] = containerStyle;
  items1 = [hasOwnProperty(closure_9, { icon, iconColor, IconComponent, recolorLegacyIcon }), hasOwnProperty(closure_10, { content, onTextLayout: callback })];
  return metroImportDefault(View, obj);
});
const result = size.fileFinishedImporting("modules/toast/native/Toast.tsx");

export default tmp5;