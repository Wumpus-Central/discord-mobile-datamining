// === Module 7067: NavigatorHeader ===

// Module 7067 (NavigatorHeader)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import NavigatorConstants from "NavigatorConstants" /* 5716 */;
import Text_Text from "Text/Text" /* 5753 */;
import useFontScale from "useFontScale" /* 5768 */;
import HeaderDebugOverlayDefault from "HeaderDebugOverlay" /* 7068 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 7071 */;
import _mod7074 from "module_7074" /* 7074 */;
import XSmallIcon from "XSmallIcon" /* 7123 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
class HeaderBackImage {
  constructor() {
    tmp = closure_8();
    obj = { size: "md", style: tmp.headerButtonIcon };
    return jsx(closure_0(closure_2[10]).ArrowLargeLeftIcon, obj);
  }
}
function CloseButton(onPress) {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
  onPress = undefined;
  _require = styles();
  closure_1 = require("Link").useNavigation();
  if (onPress == null) {
    onPress = () => {
      closure_1.pop();
    };
  }
  let obj = require("Link");
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => {
    fn();
    return true;
  });
  const intl = tmp2(tmp3[13]).intl;
  const stringResult = intl.string(require("util").t.cpT0Cq);
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.onPress = onPress;
  obj2.label = stringResult;
  obj2.displayMode = "minimal";
  obj2.backImage = function backImage(tintColor) {
    const obj = { size: "md", style: null };
    items = [headerButtonIcon.headerButtonIcon, { tintColor: tintColor.tintColor }];
    obj.style = items;
    return timestampProducer(XSmallIcon.XSmallIcon, obj);
  };
  obj2.accessibilityLabel = stringResult;
  return closure_6(require("module_7074").HeaderBackButton, obj2);
}
function CustomHeaderBackButton(onPress) {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
  onPress(7073).useNavigatorBackPressHandler(() => {
    if (null != onPress) {
      tmp();
    }
    return null != onPress;
  });
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.onPress = onPress;
  obj2.displayMode = "minimal";
  obj2.backImage = function backImage() {
    return closure_1_6(HeaderBackImage, {});
  };
  return closure_6(onPress(7074).HeaderBackButton, obj2);
}
function HeaderTextButton(text) {
  text = text.text;
  const merged = Object.assign(text, Object.assign({ text: 0, labelStyle: 0 }));
  const obj = {};
  const merged1 = Object.assign(styles().headerBackTitleStyle);
  obj.marginHorizontal = 16;
  items = [obj, text.labelStyle];
  const obj2 = {};
  const merged2 = Object.assign(merged);
  obj2.label = text;
  obj2.displayMode = "default";
  obj2.labelStyle = items;
  obj2.backImage = function backImage() {
    return null;
  };
  let tmp5;
  if (obj3.isAndroid()) {
    tmp5 = text;
  }
  obj2.accessibilityLabel = tmp5;
  return timestampProducer(_mod7074.HeaderBackButton, obj2);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5142);
let obj2 = { fauxHeaderWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" }, headerTitle: null, headerBackTitleStyle: null, navigatorHeaderTitleContainer: null, navigatorHeaderContainer: null, navigatorHeaderSubtitle: null, headerButtonIcon: null, submittingIndicator: null };
let obj4 = {};
let merged = Object.assign(fn(5753).TextStyleSheet["heading-md/semibold"]);
obj4.color = nativeDefault.colors.TEXT_STRONG;
obj2.headerTitle = obj4;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.headerBackTitleStyle = { fontFamily: fn(1072).Fonts.PRIMARY_MEDIUM, fontSize: 16, letterSpacing: 0, lineHeight: 20, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.navigatorHeaderTitleContainer = { flexDirection: "row", justifyContent: "center", alignItems: "center" };
obj2.navigatorHeaderContainer = { flexDirection: "column", justifyContent: "center", alignItems: "center" };
obj2.navigatorHeaderSubtitle = { marginTop: 2 };
let size = { width: 24, height: 24, tintColor: nativeDefault.colors.ICON_DEFAULT };
obj2.headerButtonIcon = size;
const size1 = { width: 22, height: 22, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.submittingIndicator = size1;
const styles = createStyles.createStyles(obj2);
let closure_9 = { height: 54, titleVariant: "heading-sm/semibold", subtitleVariant: "body-xs/normal" };
let closure_10 = { height: 58, titleVariant: "heading-md/semibold", subtitleVariant: "body-sm/normal" };
let closure_11 = { height: 62, titleVariant: "heading-lg/semibold", subtitleVariant: "body-md/normal" };
size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorHeader.native.tsx");

export const useStyles = styles;
export function useNavigatorHeaderSize() {
  const fontScale = useFontScale.useFontScale();
  if (fontScale < 1) {
    let tmp2 = closure_9;
  } else {
    tmp2 = fontScale > 1 ? closure_11 : closure_10;
  }
  return tmp2;
}
export function NavigatorHeader(subtitle) {
  subtitle = subtitle.subtitle;
  ({ title, icon } = subtitle);
  const tmp = styles();
  const tmp3 = HeaderDebugOverlayDefault("js-stack");
  const fontScale = useFontScale.useFontScale();
  if (fontScale < 1) {
    let tmp6 = closure_9;
  } else {
    tmp6 = fontScale > 1 ? closure_11 : closure_10;
  }
  const obj2 = { style: tmp.navigatorHeaderContainer, children: null };
  const obj3 = { style: tmp.navigatorHeaderTitleContainer, children: null };
  items = [icon, ];
  ({ titleVariant, subtitleVariant } = tmp6);
  items[1] = timestampProducer(Text_Text.Text, { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, allowFontScaling: false, variant: titleVariant, color: "text-strong", children: title });
  obj3.children = items;
  const items1 = [metroImportDefault(React4, obj3), , ];
  let tmp9Result = null != subtitle;
  if (tmp9Result) {
    tmp9Result = "" !== subtitle;
  }
  if (tmp9Result) {
    const obj4 = { lineClamp: 1, allowFontScaling: false, style: tmp.navigatorHeaderSubtitle, variant: subtitleVariant, color: "text-subtle", children: subtitle };
    tmp9Result = timestampProducer(Text_Text.Text, obj4);
  }
  items1[1] = tmp9Result;
  items1[2] = tmp3;
  obj2.children = items1;
  return metroImportDefault(React4, obj2);
}
export { HeaderBackImage };
export function renderBackImage() {
  return timestampProducer(HeaderBackImage, {});
}
export function getHeaderCloseButton(pop) {
  const onPress = pop;
  return function renderCloseButton(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.onPress = onPress;
    return timestampProducer(CloseButton, obj);
  };
}
export function getHeaderConditionalBackButton(callback1) {
  closure_0 = callback1;
  return function renderBackButton(onPress) {
    onPress = onPress.onPress;
    closure_1 = async function _handlePress() {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c1 = 1;
              c2 = 1;
              const obj4 = { value: tmp4(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (value) {
              if (closure_128_0 != null) {
                tmp6();
              }
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c2 = tmp;
          throw tmp10;
        }
      }
    };
    let obj = {};
    const merged = Object.assign(Object.assign(onPress, Object.assign({ onPress: 0 })));
    obj.onPress = function handlePress() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return closure_1_6(CustomHeaderBackButton, obj);
  };
}
export function getHeaderBackButton(onClose, arg1) {
  closure_0 = onClose;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  return function renderBackImage(onPress) {
    onPress = onPress.onPress;
    const obj = {};
    const merged = Object.assign(Object.assign(onPress, Object.assign({ onPress: 0 })));
    obj.onPress = function onPress() {
      if (closure_0 != null) {
        tmp();
      }
      if (!flag) {
        if (onPress != null) {
          tmp3();
        }
      }
    };
    return closure_1_6(CustomHeaderBackButton, obj);
  };
}
export function getHeaderTextButton(intl, callback) {
  const text = intl;
  const onPress = callback;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.text = text;
    obj.onPress = onPress;
    return timestampProducer(HeaderTextButton, obj);
  };
}
export function getHeaderNoTitle() {
  return () => null;
}
export function FauxHeader(arg0) {
  ({ children, style } = arg0);
  const top = useSafeAreaInsetsDefault().top;
  const obj = { style: null, children: null };
  items = [styles().fauxHeaderWrapper, , ];
  const tmp = styles();
  items[1] = { paddingTop: top, height: top + NavigatorConstants.NAV_BAR_HEIGHT };
  items[2] = style;
  obj.style = items;
  obj.children = children;
  return timestampProducer(React4, obj);
}
export function HeaderSubmittingIndicator() {
  const tmp = styles();
  return timestampProducer(hasOwnProperty, { animating: true, style: tmp.submittingIndicator, color: tmp.submittingIndicator.color });
}