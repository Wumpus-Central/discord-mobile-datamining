// discord_app/design/components/Navigator/native/NavigatorHeader.native.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import HeaderDebugOverlayDefault from "../../../../modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx";
import ArrowLargeLeftIcon from "../../Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import XSmallIcon from "../../Icon/native/redesign/generated/XSmallIcon.tsx";
import _mod6026 from "../../../../../_runtime/metro/06026__.js";
import NavigatorConstants from "NavigatorConstants.native.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c1, c2, dependencyMap, navigation;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let size;
let size1;
let unpackModuleId;
let closure_3 = ["onPress"];
let closure_4 = ["onPress"];
let closure_5 = ["text", "labelStyle"];
({ View: metroImportAll, ActivityIndicator: c9 } = react_native);
const Fonts = Constants.Fonts;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  fauxHeaderWrapper: obj2,
  headerTitle: obj3,
  headerBackTitleStyle: obj4,
  navigatorHeaderTitleContainer: { flexDirection: "row", justifyContent: "center", alignItems: "center" },
  navigatorHeaderContainer: { flexDirection: "column", justifyContent: "center", alignItems: "center" },
  navigatorHeaderSubtitle: { marginTop: -2 },
  headerButtonIcon: size,
  submittingIndicator: size1,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let merged = Object.assign(Text_Text.TextStyleSheet["redesign/heading-18/bold"]);
obj4 = {
  fontFamily: Fonts.PRIMARY_MEDIUM,
  fontSize: 16,
  letterSpacing: 0,
  lineHeight: 20,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
};
size = { width: 24, height: 24, tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
size1 = { width: 22, height: 22, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const styles = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let icon;
      let items;
      let items1;
      let subtitle;
      let title;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(14);
      ({ title, subtitle, icon } = arg0);
      const tmp4 = styles();
      const tmp5 = HeaderDebugOverlayDefault("js-stack");
      if (cResult[0] !== title) {
        const obj2 = {
          accessibilityRole: "header",
          "aria-level": "1",
          lineClamp: 1,
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          children: title,
        };
        const tmp8 = authStore(Text_Text.Text, obj2);
        cResult[0] = title;
        cResult[1] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === icon) {
        if (cResult[3] === tmp4.navigatorHeaderTitleContainer) {
          let tmp9;
          if (cResult[4] === tmp6) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === tmp4.navigatorHeaderSubtitle) {
            let tmp11;
            if (cResult[7] === subtitle) {
              tmp11 = cResult[8];
            }
            if (cResult[9] === tmp5) {
              if (cResult[10] === tmp4.navigatorHeaderContainer) {
                if (cResult[11] === tmp9) {
                  let tmp15;
                  if (cResult[12] === tmp11) {
                    tmp15 = cResult[13];
                  }
                  return tmp15;
                }
              }
            }
            const obj3 = { style: tmp4.navigatorHeaderContainer, children: items };
            items = [tmp9, tmp11, tmp5];
            const tmp18 = unpackModuleId(metroImportAll, obj3);
            cResult[9] = tmp5;
            cResult[10] = tmp4.navigatorHeaderContainer;
            cResult[11] = tmp9;
            cResult[12] = tmp11;
            cResult[13] = tmp18;
            tmp15 = tmp18;
          }
          let tmp13 = null != subtitle && "" !== subtitle;
          if (tmp13) {
            const obj4 = {
              lineClamp: 1,
              style: tmp4.navigatorHeaderSubtitle,
              variant: "text-xs/medium",
              color: "text-muted",
              children: subtitle,
            };
            tmp13 = authStore(Text_Text.Text, obj4);
          }
          cResult[6] = tmp4.navigatorHeaderSubtitle;
          cResult[7] = subtitle;
          cResult[8] = tmp13;
          tmp11 = tmp13;
        }
      }
      const obj5 = { style: tmp4.navigatorHeaderTitleContainer, children: items1 };
      items1 = [icon, tmp6];
      const tmp10 = unpackModuleId(metroImportAll, obj5);
      cResult[2] = icon;
      cResult[3] = tmp4.navigatorHeaderTitleContainer;
      cResult[4] = tmp6;
      cResult[5] = tmp10;
      tmp9 = tmp10;
    }
  : (subtitle) => {
      let icon;
      let items;
      let items1;
      let title;
      subtitle = subtitle.subtitle;
      ({ title, icon } = subtitle);
      const tmp = styles();
      const obj2 = { style: tmp.navigatorHeaderTitleContainer, children: items };
      items = [icon];
      const obj = { style: tmp.navigatorHeaderContainer, children: items1 };
      const tmp3 = HeaderDebugOverlayDefault("js-stack");
      items[1] = authStore(Text_Text.Text, {
        accessibilityRole: "header",
        "aria-level": "1",
        lineClamp: 1,
        variant: "redesign/heading-18/bold",
        color: "mobile-text-heading-primary",
        children: title,
      });
      items1 = [unpackModuleId(metroImportAll, obj2), ,];
      let tmp6Result = null != subtitle && "" !== subtitle;
      if (tmp6Result) {
        const obj3 = {
          lineClamp: 1,
          style: tmp.navigatorHeaderSubtitle,
          variant: "text-xs/medium",
          color: "text-muted",
          children: subtitle,
        };
        tmp6Result = authStore(Text_Text.Text, obj3);
      }
      items1[1] = tmp6Result;
      items1[2] = tmp3;
      return unpackModuleId(metroImportAll, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp4 = styles();
      if (cResult[0] !== tmp4.headerButtonIcon) {
        const obj2 = { size: "md", style: tmp4.headerButtonIcon };
        const tmp7 = authStore(ArrowLargeLeftIcon.ArrowLargeLeftIcon, obj2);
        cResult[0] = tmp4.headerButtonIcon;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const obj = { size: "md", style: styles().headerButtonIcon };
      return authStore(ArrowLargeLeftIcon.ArrowLargeLeftIcon, obj);
    };
let closure_13 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let closure_2;
      let headerButtonIcon;
      let tmp4;
      let tmp5;
      let obj = require("react");
      const cResult = obj.c(15);
      if (cResult[0] !== onPress) {
        onPress = onPress.onPress;
        const tmp8 = _objectWithoutProperties(onPress, closure_3);
        cResult[0] = onPress;
        cResult[1] = onPress;
        cResult[2] = tmp8;
        tmp5 = tmp8;
        tmp4 = onPress;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = styles();
      _require = tmp9;
      const tmpResult = require("Link");
      navigation = tmpResult.useNavigation();
      if (cResult[3] === navigation) {
        let tmp11;
        let tmp12;
        let tmp15;
        let tmp17;
        if (cResult[4] === tmp4) {
          tmp11 = cResult[5];
        }
        dependencyMap = tmp11;
        if (cResult[6] !== tmp11) {
          const fn2 = function b() {
            closure_2();
            return true;
          };
          cResult[6] = tmp11;
          cResult[7] = fn2;
          tmp12 = fn2;
        } else {
          tmp12 = cResult[7];
        }
        const tmpResult2 = require("useNavigatorBackPressHandler");
        tmpResult2.useNavigatorBackPressHandler(tmp12);
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(require("intl").t.cpT0Cq);
          cResult[8] = stringResult;
          tmp15 = stringResult;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] !== tmp9.headerButtonIcon) {
          const fn3 = function p(tintColor) {
            let items;
            const obj = { size: "md", style: items };
            items = [headerButtonIcon.headerButtonIcon, { tintColor: tintColor.tintColor }];
            return authStore(XSmallIcon.XSmallIcon, obj);
          };
          cResult[9] = tmp9.headerButtonIcon;
          cResult[10] = fn3;
          tmp17 = fn3;
        } else {
          tmp17 = cResult[10];
        }
        if (cResult[11] === tmp11) {
          if (cResult[12] === tmp5) {
            let tmp18;
            if (cResult[13] === tmp17) {
              tmp18 = cResult[14];
            }
            return tmp18;
          }
        }
        const obj2 = {
          onPress: tmp11,
          label: tmp15,
          displayMode: "minimal",
          backImage: tmp17,
          accessibilityLabel: tmp15,
        };
        const HeaderBackButton = tmp(6026).HeaderBackButton;
        const merged = Object.assign(tmp5);
        const tmp23 = closure_10(HeaderBackButton, obj2);
        cResult[11] = tmp11;
        cResult[12] = tmp5;
        cResult[13] = tmp17;
        cResult[14] = tmp23;
        tmp18 = tmp23;
      }
      let fn = tmp4;
      if (tmp4 == null) {
        fn = () => {
          navigation.pop();
        };
      }
      cResult[3] = navigation;
      cResult[4] = tmp4;
      cResult[5] = fn;
      tmp11 = fn;
    }
  : (onPress) => {
      let headerButtonIcon;
      onPress = onPress.onPress;
      const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
      onPress = undefined;
      _require = styles();
      let obj = require("Link");
      let closure_1 = obj.useNavigation();
      if (onPress == null) {
        onPress = () => {
          closure_1.pop();
        };
      }
      const tmp2Result = require("useNavigatorBackPressHandler");
      tmp2Result.useNavigatorBackPressHandler(() => {
        fn();
        return true;
      });
      const intl = tmp2(tmp3[15]).intl;
      const stringResult = intl.string(require("intl").t.cpT0Cq);
      const obj2 = {
        onPress,
        label: stringResult,
        displayMode: "minimal",
        backImage(tintColor) {
          let items;
          const obj = { size: "md", style: items };
          items = [headerButtonIcon.headerButtonIcon, { tintColor: tintColor.tintColor }];
          return authStore(XSmallIcon.XSmallIcon, obj);
        },
        accessibilityLabel: stringResult,
      };
      const HeaderBackButton = tmp2(tmp3[17]).HeaderBackButton;
      const merged1 = Object.assign(merged);
      return closure_10(HeaderBackButton, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let closure_0;
      let tmp11;
      let tmp5;
      let tmp9;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(9);
      if (cResult[0] !== onPress) {
        onPress = onPress.onPress;
        _require = onPress;
        const tmp8 = _objectWithoutProperties(onPress, closure_4);
        cResult[0] = onPress;
        cResult[1] = onPress;
        cResult[2] = tmp8;
        tmp5 = tmp8;
      } else {
        _require = cResult[1];
        tmp5 = cResult[2];
      }
      if (cResult[3] !== tmp4) {
        const fn = function s() {
          if (null != closure_0) {
            tmp();
          }
          return null != closure_0;
        };
        cResult[3] = tmp4;
        cResult[4] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[4];
      }
      const tmpResult = tmp(6023);
      tmpResult.useNavigatorBackPressHandler(tmp9);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function u() {
          return closure_1_10(closure_1_13, {});
        };
        cResult[5] = fn2;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp4) {
        let tmp12;
        if (cResult[7] === tmp5) {
          tmp12 = cResult[8];
        }
        return tmp12;
      }
      const obj2 = { onPress: tmp4, displayMode: "minimal", backImage: tmp11 };
      const HeaderBackButton = tmp(6026).HeaderBackButton;
      const merged = Object.assign(tmp5);
      const tmp14 = closure_10(HeaderBackButton, obj2);
      cResult[6] = tmp4;
      cResult[7] = tmp5;
      cResult[8] = tmp14;
      tmp12 = tmp14;
    }
  : (onPress) => {
      onPress = onPress.onPress;
      const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
      const obj = onPress(6023);
      obj.useNavigatorBackPressHandler(() => {
        if (null != onPress) {
          tmp();
        }
        return null != onPress;
      });
      const obj2 = {
        onPress,
        displayMode: "minimal",
        backImage() {
          return closure_1_10(closure_1_13, {});
        },
      };
      const HeaderBackButton = onPress(6026).HeaderBackButton;
      const merged1 = Object.assign(merged);
      return closure_10(HeaderBackButton, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HeaderTextButton(arg0) {
      let labelStyle;
      let text;
      let tmp11;
      let tmp4;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(15);
      if (cResult[0] !== arg0) {
        ({ text, labelStyle } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_5);
        cResult[0] = arg0;
        cResult[1] = tmp9;
        cResult[2] = labelStyle;
        cResult[3] = text;
        tmp6 = text;
        tmp5 = labelStyle;
        tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      const tmp10 = styles();
      if (cResult[4] !== tmp10.headerBackTitleStyle) {
        const obj2 = { marginHorizontal: 16 };
        const merged = Object.assign(tmp10.headerBackTitleStyle);
        cResult[4] = tmp10.headerBackTitleStyle;
        cResult[5] = obj2;
        tmp11 = obj2;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        let tmp14;
        if (cResult[7] === tmp11) {
          tmp14 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor() {
              return null;
            }
          }
          cResult[9] = B;
        } else {
          class B {
            constructor() {
              return null;
            }
          }
        }
        const tmpResult = PlatformUtils;
        if (tmpResult.isAndroid()) {
          class B {
            constructor() {
              return null;
            }
          }
        }
        if (cResult[10] === tmp14) {
          class B {
            constructor() {
              return null;
            }
          }
        }
        const obj3 = {
          label: tmp6,
          displayMode: "default",
          labelStyle: tmp14,
          backImage: B,
          accessibilityLabel: undefined,
        };
        const HeaderBackButton = _mod6026.HeaderBackButton;
        const merged1 = Object.assign(tmp4);
        cResult[10] = tmp14;
        cResult[11] = tmp4;
        cResult[12] = undefined;
        cResult[13] = tmp6;
        cResult[14] = authStore(HeaderBackButton, obj3);
        const tmp23 = authStore(HeaderBackButton, obj3);
      }
      const items = [tmp11, tmp5];
      cResult[6] = tmp5;
      cResult[7] = tmp11;
      cResult[8] = items;
      tmp14 = items;
    }
  : function HeaderTextButton(text) {
      let tmp5;
      text = text.text;
      const labelStyle = text.labelStyle;
      const merged = Object.assign(text, Object.assign({ text: 0, labelStyle: 0 }));
      const obj = { marginHorizontal: 16 };
      const merged1 = Object.assign(styles().headerBackTitleStyle);
      const items = [obj, labelStyle];
      const obj2 = {
        label: text,
        displayMode: "default",
        labelStyle: items,
        backImage() {
          return null;
        },
        accessibilityLabel: tmp5,
      };
      const HeaderBackButton = _mod6026.HeaderBackButton;
      const merged2 = Object.assign(merged);
      tmp5 = undefined;
      const obj3 = PlatformUtils;
      if (obj3.isAndroid()) {
        tmp5 = text;
      }
      return authStore(HeaderBackButton, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FauxHeader(arg0) {
      let children;
      let style;
      const obj = react2;
      const cResult = obj.c(10);
      ({ children, style } = arg0);
      const tmp2 = styles();
      const top = useSafeAreaInsetsDefault().top;
      const sum = top + NavigatorConstants.NAV_BAR_HEIGHT;
      if (cResult[0] === top) {
        let tmp4;
        if (cResult[1] === sum) {
          tmp4 = cResult[2];
        }
        if (cResult[3] === style) {
          if (cResult[4] === tmp2.fauxHeaderWrapper) {
            let tmp5;
            if (cResult[5] === tmp4) {
              tmp5 = cResult[6];
            }
            if (cResult[7] === children) {
              let tmp6;
              if (cResult[8] === tmp5) {
                tmp6 = cResult[9];
              }
              return tmp6;
            }
            const obj2 = { style: tmp5, children };
            const tmp9 = authStore(metroImportAll, obj2);
            cResult[7] = children;
            cResult[8] = tmp5;
            cResult[9] = tmp9;
            tmp6 = tmp9;
          }
        }
        const items = [tmp2.fauxHeaderWrapper, tmp4, style];
        cResult[3] = style;
        cResult[4] = tmp2.fauxHeaderWrapper;
        cResult[5] = tmp4;
        cResult[6] = items;
        tmp5 = items;
      }
      const obj3 = { paddingTop: top, height: sum };
      cResult[0] = top;
      cResult[1] = sum;
      cResult[2] = obj3;
      tmp4 = obj3;
    }
  : function FauxHeader(arg0) {
      let children;
      let items;
      let style;
      ({ children, style } = arg0);
      const tmp = styles();
      const top = useSafeAreaInsetsDefault().top;
      const obj = { style: items, children };
      items = [tmp.fauxHeaderWrapper, { paddingTop: top, height: top + NavigatorConstants.NAV_BAR_HEIGHT }, style];
      ({ paddingTop: top, height: top + NavigatorConstants.NAV_BAR_HEIGHT });
      return authStore(metroImportAll, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HeaderSubmittingIndicator() {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = styles();
      if (cResult[0] !== tmp2.submittingIndicator) {
        const obj2 = { animating: true, style: tmp2.submittingIndicator, color: tmp2.submittingIndicator.color };
        const tmp6 = authStore(React4, obj2);
        cResult[0] = tmp2.submittingIndicator;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function HeaderSubmittingIndicator() {
      const tmp = styles();
      const obj = { animating: true, style: tmp.submittingIndicator, color: tmp.submittingIndicator.color };
      return authStore(React4, obj);
    };
size = size_mod;
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorHeader.native.tsx");

export const useStyles = styles;
export const NavigatorHeader = tmp8;
export const HeaderBackImage = tmp9;
export const renderBackImage = function renderBackImage() {
  return authStore(closure_13, {});
};
export function getHeaderCloseButton(pop) {
  const onPress = pop;
  return (arg0) => {
    const obj = { onPress };
    const merged = Object.assign(arg0);
    return authStore(closure_14, obj);
  };
}
export function getHeaderConditionalBackButton(callback1) {
  let closure_0 = callback1;
  return (onPress) => {
    onPress = onPress.onPress;
    let obj = function _handlePress() {
      obj = _asyncToGenerator(async () => {
        let closure_0;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
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
                const obj4 = { value: tmp3(), done: false };
                return obj4;
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
                  tmp5();
                }
              }
              c2 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp9) {
            c2 = 3;
            throw tmp9;
          }
        }
      });
      return obj(...arguments);
    };
    obj = {
      onPress: function handlePress() {
        return obj(...arguments);
      },
    };
    const merged = Object.assign(Object.assign(onPress, Object.assign({ onPress: 0 })));
    return closure_1_10(closure_1_15, obj);
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
    const obj = {
      onPress() {
        if (onClose != null) {
          tmp();
        }
        const tmp3 = !flag;
        if (tmp3) {
          if (onPress != null) {
            tmp4();
          }
        }
      },
    };
    const merged = Object.assign(Object.assign(onPress, Object.assign({ onPress: 0 })));
    return closure_1_10(closure_1_15, obj);
  };
}
export function getHeaderTextButton(intl, callback) {
  const text = intl;
  const onPress = callback;
  return (arg0) => {
    const obj = { text, onPress };
    const merged = Object.assign(arg0);
    return authStore(closure_16, obj);
  };
}
export function getHeaderNoTitle() {
  return () => null;
}
export const FauxHeader = tmp10;
export const HeaderSubmittingIndicator = tmp11;
