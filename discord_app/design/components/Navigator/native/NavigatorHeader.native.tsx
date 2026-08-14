// discord_app/design/components/Navigator/native/NavigatorHeader.native.tsx
import closure_3 from "createCacheKey";
import "noop";
import get_ActivityIndicator from "NAV_BAR_HEIGHT";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Background } from "../../../../../_runtime/05338_Background.js";
import { useHeaderDebugOverlay } from "../../../../modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx";
import { useSafeAreaInsets } from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import { Text } from "../../Text/native/Text.tsx";
import { NAV_BAR_HEIGHT } from "NavigatorConstants.native.tsx";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
class HeaderBackImage {
  constructor() {
    tmp = jsxs();
    obj = { size: "md", style: tmp.headerButtonIcon };
    return jsx(require("ArrowLargeLeftIcon").ArrowLargeLeftIcon, obj);
  }
}
function CloseButton(onPress) {
  let fn = onPress.onPress;
  const merged = Object.assign(onPress, Object.create(null));
  let _require;
  let closure_1;
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
    return outer1_6(lib(fn[14]).XSmallIcon, { size: "md", style });
  };
  obj.accessibilityLabel = stringResult;
  return callback(_require(fn[13]).HeaderBackButton, obj);
}
function CustomHeaderBackButton(onPress) {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.create(null));
  let obj = onPress(5337);
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
  return callback(onPress(5338).HeaderBackButton, obj);
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
({ View: c4, ActivityIndicator: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { fauxHeaderWrapper: null, headerTitle: null, headerBackTitleStyle: null, navigatorHeaderTitleContainer: null, navigatorHeaderContainer: null, navigatorHeaderSubtitle: null, headerButtonIcon: null, submittingIndicator: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
let obj1 = {};
let merged = Object.assign(require("Text").TextStyleSheet["redesign/heading-18/bold"]);
obj1.color = require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY;
createCacheKey[1] = obj1;
createCacheKey[2] = { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, fontSize: 16, letterSpacing: 0, lineHeight: 20, color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[3] = { flexDirection: "row", justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { flexDirection: "column", justifyContent: "center", alignItems: "center" };
createCacheKey[5] = { marginTop: -2 };
const obj2 = { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, fontSize: 16, letterSpacing: 0, lineHeight: 20, color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[6] = { width: 24, height: 24, tintColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
const obj3 = { width: 24, height: 24, tintColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[7] = { width: 22, height: 22, color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj4 = { width: 22, height: 22, color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Navigator/native/NavigatorHeader.native.tsx");

export const useStyles = createCacheKey;
export const NavigatorHeader = function NavigatorHeader(subtitle) {
  let icon;
  let title;
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
  items1[2] = useHeaderDebugOverlay("js-stack");
  obj[1] = items1;
  return callback2(closure_4, obj);
};
export { HeaderBackImage };
export const renderBackImage = function renderBackImage() {
  return callback(HeaderBackImage, {});
};
export function getHeaderCloseButton(pop) {
  let closure_0 = pop;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.onPress = closure_0;
    return outer1_6(outer1_10, obj);
  };
}
export function getHeaderConditionalBackButton(handleBack) {
  let closure_0 = handleBack;
  return (onPress) => {
    onPress = onPress.onPress;
    function _handlePress() {
      const self = this;
      const tmp = outer2_3(function*() {
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
            return { value: "HermesInternal", done: null };
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
                let closure_0 = tmp4;
                c1 = 1;
                c2 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_0();
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
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp10) {
            c2 = tmp;
            throw tmp10;
          }
        }
      });
      const _handlePress = tmp;
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
    return outer1_6(outer1_11, obj);
  };
}
export function getHeaderBackButton(onClose, arg1) {
  let closure_0 = onClose;
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
      if (!outer1_1) {
        if (onPress != null) {
          tmp3();
        }
      }
    };
    return outer1_6(outer1_11, obj);
  };
}
export function getHeaderTextButton(intl, callback) {
  let closure_0 = intl;
  let closure_1 = callback;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.text = closure_0;
    obj.onPress = closure_1;
    return outer1_6(outer1_12, obj);
  };
}
export function getHeaderNoTitle() {
  return () => null;
}
export const FauxHeader = function FauxHeader(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const top = useSafeAreaInsets().top;
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