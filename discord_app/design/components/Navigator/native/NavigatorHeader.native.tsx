// === Module 5624: NavigatorHeader ===

// Module 5624 (NavigatorHeader)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text_Text from "Text/Text" /* 4556 */;
import HeaderDebugOverlayDefault from "HeaderDebugOverlay" /* 5625 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 5628 */;
import _mod5631 from "module_5631" /* 5631 */;
import XSmallIcon from "XSmallIcon" /* 5680 */;
import NavigatorConstants from "NavigatorConstants" /* 5682 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
class HeaderBackImage {
  constructor() {
    tmp = closure_8();
    obj = { size: "md", style: tmp.headerButtonIcon };
    return jsx(closure_0(closure_2[9]).ArrowLargeLeftIcon, obj);
  }
}
function CloseButton(onPress) {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
  onPress = undefined;
  _require = createStyles();
  let obj = require("Link");
  closure_1 = obj.useNavigation();
  if (onPress == null) {
    onPress = () => {
      closure_1.pop();
    };
  }
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => {
    fn();
    return true;
  });
  const intl = tmp2(tmp3[12]).intl;
  const stringResult = intl.string(require("util").t.cpT0Cq);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.onPress = onPress;
  obj.label = stringResult;
  obj.displayMode = "minimal";
  obj.backImage = function backImage(tintColor) {
    const obj = { size: "md", style: null };
    const items = [headerButtonIcon.headerButtonIcon, { tintColor: tintColor.tintColor }];
    obj.style = items;
    return timestampProducer(XSmallIcon.XSmallIcon, obj);
  };
  obj.accessibilityLabel = stringResult;
  return closure_6(require("module_5631").HeaderBackButton, obj);
}
function CustomHeaderBackButton(onPress) {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
  let obj = onPress(5630);
  obj.useNavigatorBackPressHandler(() => {
    if (null != onPress) {
      tmp();
    }
    return null != onPress;
  });
  obj = {};
  const merged1 = Object.assign(merged);
  obj.onPress = onPress;
  obj.displayMode = "minimal";
  obj.backImage = function backImage() {
    return closure_1_6(HeaderBackImage, {});
  };
  return closure_6(onPress(5631).HeaderBackButton, obj);
}
function HeaderTextButton(text) {
  text = text.text;
  const merged = Object.assign(text, Object.assign({ text: 0, labelStyle: 0 }));
  let obj = {};
  const merged1 = Object.assign(createStyles().headerBackTitleStyle);
  obj.marginHorizontal = 16;
  const items = [obj, text.labelStyle];
  obj = {};
  const merged2 = Object.assign(merged);
  obj.label = text;
  obj.displayMode = "default";
  obj.labelStyle = items;
  obj.backImage = function backImage() {
    return null;
  };
  let tmp5;
  if (obj3.isAndroid()) {
    tmp5 = text;
  }
  obj.accessibilityLabel = tmp5;
  return timestampProducer(_mod5631.HeaderBackButton, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { fauxHeaderWrapper: null, headerTitle: null, headerBackTitleStyle: null, navigatorHeaderTitleContainer: null, navigatorHeaderContainer: null, navigatorHeaderSubtitle: null, headerButtonIcon: null, submittingIndicator: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createStyles.fauxHeaderWrapper = createStyles;
let obj1 = {};
let merged = Object.assign(fn(4556).TextStyleSheet["redesign/heading-18/bold"]);
obj1.color = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
createStyles.headerTitle = obj1;
createStyles.headerBackTitleStyle = { fontFamily: fn(1074).Fonts.PRIMARY_MEDIUM, fontSize: 16, letterSpacing: 0, lineHeight: 20, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.navigatorHeaderTitleContainer = { flexDirection: "row", justifyContent: "center", alignItems: "center" };
createStyles.navigatorHeaderContainer = { flexDirection: "column", justifyContent: "center", alignItems: "center" };
createStyles.navigatorHeaderSubtitle = { marginTop: -2 };
let size = { width: 24, height: 24, tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.headerButtonIcon = size;
const size1 = { width: 22, height: 22, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.submittingIndicator = size1;
createStyles = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorHeader.native.tsx");

export const useStyles = createStyles;
export const NavigatorHeader = function NavigatorHeader(subtitle) {
  subtitle = subtitle.subtitle;
  ({ title, icon } = subtitle);
  const tmp = createStyles();
  let obj = { style: tmp.navigatorHeaderContainer, children: null };
  obj = { style: tmp.navigatorHeaderTitleContainer, children: null };
  const items = [icon, timestampProducer(Text_Text.Text, { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: title })];
  obj.children = items;
  const items1 = [React5(React4, obj), , ];
  let tmp6Result = null != subtitle;
  if (tmp6Result) {
    tmp6Result = "" !== subtitle;
  }
  if (tmp6Result) {
    obj = { lineClamp: 1, style: tmp.navigatorHeaderSubtitle, variant: "text-xs/medium", color: "text-muted", children: subtitle };
    tmp6Result = timestampProducer(Text_Text.Text, obj);
  }
  items1[1] = tmp6Result;
  items1[2] = HeaderDebugOverlayDefault("js-stack");
  obj.children = items1;
  return React5(React4, obj);
};
export { HeaderBackImage };
export const renderBackImage = function renderBackImage() {
  return timestampProducer(HeaderBackImage, {});
};
export function getHeaderCloseButton(pop) {
  const onPress = pop;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.onPress = onPress;
    return timestampProducer(CloseButton, obj);
  };
}
export function getHeaderConditionalBackButton(handleBack) {
  closure_0 = handleBack;
  return (onPress) => {
    onPress = onPress.onPress;
    closure_1 = async function _handlePress(arg0, value) {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              c1 = 1;
              c2 = 1;
              const obj1 = { value: tmp4(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
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
export const FauxHeader = function FauxHeader(arg0) {
  ({ children, style } = arg0);
  const top = useSafeAreaInsetsDefault().top;
  let obj = { style: null, children: null };
  const items = [createStyles().fauxHeaderWrapper, , ];
  obj = { paddingTop: top, height: top + NavigatorConstants.NAV_BAR_HEIGHT };
  items[1] = obj;
  items[2] = style;
  obj.style = items;
  obj.children = children;
  return timestampProducer(React4, obj);
};
export const HeaderSubmittingIndicator = function HeaderSubmittingIndicator() {
  const tmp = createStyles();
  return timestampProducer(hasOwnProperty, { animating: true, style: tmp.submittingIndicator, color: tmp.submittingIndicator.color });
};