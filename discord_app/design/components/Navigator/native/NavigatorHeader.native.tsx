// === Module 6314: HeaderBackImage ===

// Module 6314 (HeaderBackImage)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import Text from "Text" /* 4734 */;
import useHeaderDebugOverlayDefault from "useHeaderDebugOverlay" /* 6315 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 6316 */;
import Background from "Background" /* 6319 */;
import NAV_BAR_HEIGHT from "NAV_BAR_HEIGHT" /* 6370 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
class HeaderBackImage {
  constructor() {
    tmp = closure_8();
    obj = { size: "md", style: tmp.headerButtonIcon };
    return jsx(require("ArrowLargeLeftIcon").ArrowLargeLeftIcon, obj);
  }
}
function CloseButton(onPress) {
  let fn = onPress.onPress;
  const merged = Object.assign(onPress, Object.create(null));
  let _require;
  closure_1 = undefined;
  fn = undefined;
  _require = createCacheKey();
  let obj = _require(fn[10]);
  closure_1 = obj.useNavigation();
  if (fn == null) {
    fn = () => {

    };
  }
  _require(fn[11]).useNavigatorBackPressHandler(() => {
    fn();
    return true;
  });
  const intl = tmp2(tmp3[12]).intl;
  const stringResult = intl.string(_require(fn[12]).t.cpT0Cq);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.onPress = fn;
  obj.label = stringResult;
  obj.displayMode = "minimal";
  obj.backImage = function backImage(tintColor) {
    const style = [lib.headerButtonIcon, { tintColor: tintColor.tintColor }];
    return closure_1_6(lib(fn[14]).XSmallIcon, { size: "md", style });
  };
  obj.accessibilityLabel = stringResult;
  return callback(_require(fn[13]).HeaderBackButton, obj);
}
function CustomHeaderBackButton(onPress) {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.create(null));
  let obj = onPress(6318);
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
    return callback(closure_9, {});
  };
  return callback(onPress(6319).HeaderBackButton, obj);
}
function HeaderTextButton(text) {
  text = text.text;
  const merged = Object.assign(text, Object.create(null));
  let obj = {};
  const merged1 = Object.assign(createCacheKey().headerBackTitleStyle);
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
  return closure_6(Background.HeaderBackButton, obj);
}
noopAll;
({ View: c4, ActivityIndicator: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { fauxHeaderWrapper: null, headerTitle: null, headerBackTitleStyle: null, navigatorHeaderTitleContainer: null, navigatorHeaderContainer: null, navigatorHeaderSubtitle: null, headerButtonIcon: null, submittingIndicator: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
let obj1 = {};
let merged = Object.assign(require("Text").TextStyleSheet["redesign/heading-18/bold"]);
obj1.color = ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
createCacheKey[1] = obj1;
createCacheKey[2] = { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, fontSize: 16, letterSpacing: 0, lineHeight: 20, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[3] = { flexDirection: "row", justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { flexDirection: "column", justifyContent: "center", alignItems: "center" };
createCacheKey[5] = { marginTop: -2 };
const obj2 = { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, fontSize: 16, letterSpacing: 0, lineHeight: 20, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[6] = { width: 24, height: 24, tintColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
const obj3 = { width: 24, height: 24, tintColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[7] = { width: 22, height: 22, color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj4 = { width: 22, height: 22, color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("set").fileFinishedImporting("design/components/Navigator/native/NavigatorHeader.native.tsx");

export const useStyles = createCacheKey;
export const NavigatorHeader = function NavigatorHeader(subtitle) {
  subtitle = subtitle.subtitle;
  ({ title, icon } = subtitle);
  const tmp = createCacheKey();
  let obj = { style: tmp.navigatorHeaderContainer, children: null };
  obj = { style: tmp.navigatorHeaderTitleContainer, children: null };
  const items = [icon, callback(Text.Text, { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: title })];
  obj[1] = items;
  const items1 = [callback2(closure_4, obj), , ];
  let tmp6Result = null != subtitle;
  if (tmp6Result) {
    tmp6Result = "" !== subtitle;
  }
  if (tmp6Result) {
    obj = { lineClamp: 1, style: null, variant: "text-xs/medium", color: "text-muted", children: null };
    obj[1] = tmp.navigatorHeaderSubtitle;
    obj[4] = subtitle;
    tmp6Result = callback(Text.Text, obj);
  }
  items1[1] = tmp6Result;
  items1[2] = useHeaderDebugOverlayDefault("js-stack");
  obj[1] = items1;
  return callback2(closure_4, obj);
};
export { HeaderBackImage };
export const renderBackImage = function renderBackImage() {
  return callback(HeaderBackImage, {});
};
export function getHeaderCloseButton(pop) {
  closure_0 = pop;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.onPress = closure_0;
    return closure_1_6(closure_1_10, obj);
  };
}
export function getHeaderConditionalBackButton(handleBack) {
  closure_0 = handleBack;
  return (onPress) => {
    onPress = onPress.onPress;
    function _handlePress() {
      const self = this;
      const tmp = closure_2_3(function*() {
        if (c2 === 2) {
          c2 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_0 = tmp4;
                c1 = 1;
                c2 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_0();
                return obj1;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (arg1) {
                if (closure_0 != null) {
                  tmp6();
                }
              }
              c2 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp10) {
            c2 = tmp;
            throw tmp10;
          }
        }
      });
      closure_1 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    let obj = {};
    const merged = Object.assign(Object.assign(onPress, Object.create(null)));
    obj.onPress = function handlePress() {
      const self = this;
      const apply = _handlePress.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return closure_1_6(closure_1_11, obj);
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
    const merged = Object.assign(Object.assign(onPress, Object.create(null)));
    obj.onPress = function onPress() {
      if (onPress != null) {
        tmp();
      }
      if (!closure_1_1) {
        if (onPress != null) {
          tmp3();
        }
      }
    };
    return closure_1_6(closure_1_11, obj);
  };
}
export function getHeaderTextButton(intl, callback) {
  closure_0 = intl;
  closure_1 = callback;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.text = closure_0;
    obj.onPress = closure_1;
    return closure_1_6(closure_1_12, obj);
  };
}
export function getHeaderNoTitle() {
  return () => null;
}
export const FauxHeader = function FauxHeader(arg0) {
  ({ children, style } = arg0);
  const top = useSafeAreaInsetsDefault().top;
  let obj = { style: null, children: null };
  const items = [createCacheKey().fauxHeaderWrapper, , ];
  obj = { paddingTop: top, height: top + NAV_BAR_HEIGHT.NAV_BAR_HEIGHT };
  items[1] = obj;
  items[2] = style;
  obj[0] = items;
  obj[1] = children;
  return callback(closure_4, obj);
};
export const HeaderSubmittingIndicator = function HeaderSubmittingIndicator() {
  const tmp = createCacheKey();
  return callback(closure_5, { animating: true, style: tmp.submittingIndicator, color: tmp.submittingIndicator.color });
};