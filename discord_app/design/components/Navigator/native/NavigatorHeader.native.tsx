// discord_app/design/components/Navigator/native/NavigatorHeader.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import HeaderDebugOverlayDefault from "../../../../modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx";
import ArrowLargeLeftIcon from "../../Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import _mod5943 from "../../../../../_runtime/metro/05943__.js";
import XSmallIcon from "../../Icon/native/redesign/generated/XSmallIcon.tsx";
import NavigatorConstants from "NavigatorConstants.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  const intl = tmp2(tmp3[12]).intl;
  const stringResult = intl.string(require("util").t.cpT0Cq);
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.onPress = onPress;
  obj2.label = stringResult;
  obj2.displayMode = "minimal";
  obj2.backImage = function backImage(tintColor) {
    const obj = { size: "md", style: null };
    const items = [headerButtonIcon.headerButtonIcon, { tintColor: tintColor.tintColor }];
    obj.style = items;
    return timestampProducer(XSmallIcon.XSmallIcon, obj);
  };
  obj2.accessibilityLabel = stringResult;
  return closure_6(require("../../../../../_runtime/metro/05943__.js").HeaderBackButton, obj2);
}
function CustomHeaderBackButton(onPress) {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
  onPress(5942).useNavigatorBackPressHandler(() => {
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
  return closure_6(onPress(5943).HeaderBackButton, obj2);
}
function HeaderTextButton(text) {
  text = text.text;
  const merged = Object.assign(text, Object.assign({ text: 0, labelStyle: 0 }));
  const obj = {};
  const merged1 = Object.assign(styles().headerBackTitleStyle);
  obj.marginHorizontal = 16;
  const items = [obj, text.labelStyle];
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
  return timestampProducer(_mod5943.HeaderBackButton, obj2);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  fauxHeaderWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" },
  headerTitle: null,
  headerBackTitleStyle: null,
  navigatorHeaderTitleContainer: null,
  navigatorHeaderContainer: null,
  navigatorHeaderSubtitle: null,
  headerButtonIcon: null,
  submittingIndicator: null,
};
let obj4 = {};
let merged = Object.assign(fn(4832).TextStyleSheet["redesign/heading-18/bold"]);
obj4.color = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
obj2.headerTitle = obj4;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.headerBackTitleStyle = {
  fontFamily: fn(1074).Fonts.PRIMARY_MEDIUM,
  fontSize: 16,
  letterSpacing: 0,
  lineHeight: 20,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
};
obj2.navigatorHeaderTitleContainer = { flexDirection: "row", justifyContent: "center", alignItems: "center" };
obj2.navigatorHeaderContainer = { flexDirection: "column", justifyContent: "center", alignItems: "center" };
obj2.navigatorHeaderSubtitle = { marginTop: -2 };
let size = { width: 24, height: 24, tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.headerButtonIcon = size;
const size1 = { width: 22, height: 22, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.submittingIndicator = size1;
const styles = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorHeader.native.tsx");

export const useStyles = styles;
export const NavigatorHeader = function NavigatorHeader(subtitle) {
  subtitle = subtitle.subtitle;
  ({ title, icon } = subtitle);
  const tmp = styles();
  const obj = { style: tmp.navigatorHeaderContainer, children: null };
  const obj2 = { style: tmp.navigatorHeaderTitleContainer, children: null };
  const items = [
    icon,
    timestampProducer(Text_Text.Text, {
      accessibilityRole: "header",
      "aria-level": "1",
      lineClamp: 1,
      variant: "redesign/heading-18/bold",
      color: "mobile-text-heading-primary",
      children: title,
    }),
  ];
  obj2.children = items;
  const items1 = [React5(React4, obj2), ,];
  let tmp6Result = null != subtitle;
  if (tmp6Result) {
    tmp6Result = "" !== subtitle;
  }
  if (tmp6Result) {
    const obj3 = {
      lineClamp: 1,
      style: tmp.navigatorHeaderSubtitle,
      variant: "text-xs/medium",
      color: "text-muted",
      children: subtitle,
    };
    tmp6Result = timestampProducer(Text_Text.Text, obj3);
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
export function getHeaderConditionalBackButton(callback1) {
  closure_0 = callback1;
  return (onPress) => {
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
export const FauxHeader = function FauxHeader(arg0) {
  ({ children, style } = arg0);
  const top = useSafeAreaInsetsDefault().top;
  const obj = { style: null, children: null };
  const items = [styles().fauxHeaderWrapper, ,];
  const tmp = styles();
  items[1] = { paddingTop: top, height: top + NavigatorConstants.NAV_BAR_HEIGHT };
  items[2] = style;
  obj.style = items;
  obj.children = children;
  return timestampProducer(React4, obj);
};
export const HeaderSubmittingIndicator = function HeaderSubmittingIndicator() {
  const tmp = styles();
  return timestampProducer(hasOwnProperty, {
    animating: true,
    style: tmp.submittingIndicator,
    color: tmp.submittingIndicator.color,
  });
};
