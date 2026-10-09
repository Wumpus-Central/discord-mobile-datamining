// discord_app/design/components/Navigator/native/NavigatorHeader.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import HeaderDebugOverlayDefault from "../../../../modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx";
import ArrowLargeLeftIcon from "../../Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import XSmallIcon from "../../Icon/native/redesign/generated/XSmallIcon.tsx";
import _mod6214 from "../../../../../_runtime/metro/06214__.js";
import NavigatorConstants from "NavigatorConstants.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["onPress"];
let closure_4 = ["onPress"];
let closure_5 = ["text", "labelStyle"];
get_ActivityIndicator = fn(17);
({ View: closure_8, ActivityIndicator: closure_9 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
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
let merged = Object.assign(fn(5087).TextStyleSheet["redesign/heading-18/bold"]);
obj4.color = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
obj2.headerTitle = obj4;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.headerBackTitleStyle = {
  fontFamily: fn(1085).Fonts.PRIMARY_MEDIUM,
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
fn(558);
let obj5 = {
  fontFamily: fn(1085).Fonts.PRIMARY_MEDIUM,
  fontSize: 16,
  letterSpacing: 0,
  lineHeight: 20,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
};
let ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HeaderBackImage() {
      const cResult = c.c(2);
      const tmp4 = styles();
      if (cResult[0] !== tmp4.headerButtonIcon) {
        const obj2 = { size: "md", style: tmp4.headerButtonIcon };
        const tmp7 = collapsed(ArrowLargeLeftIcon.ArrowLargeLeftIcon, obj2);
        cResult[0] = tmp4.headerButtonIcon;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : function HeaderBackImage() {
      const tmp = styles();
      return collapsed(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md", style: styles().headerButtonIcon });
    };
let closure_13 = tmp8;
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CloseButton(onPress) {
      const cResult = require("c").c(15);
      if (cResult[0] !== onPress) {
        onPress = onPress.onPress;
        const tmp8 = _objectWithoutProperties(onPress, closure_3);
        cResult[0] = onPress;
        cResult[1] = onPress;
        cResult[2] = tmp8;
        let tmp5 = tmp8;
        let tmp4 = onPress;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = styles();
      _require = tmp9;
      let obj = require("c");
      const navigation = require("Link").useNavigation();
      if (cResult[3] === navigation) {
        if (cResult[4] === tmp4) {
          let tmp11 = cResult[5];
        }
        dependencyMap = tmp11;
        if (cResult[6] !== tmp11) {
          class B {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
          cResult[6] = tmp11;
          cResult[7] = B;
        } else {
          class B {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
        }
        tmp(6211).useNavigatorBackPressHandler(B);
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
          const stringResult = obj4.string(tmp(1126).t.cpT0Cq);
          cResult[8] = stringResult;
        } else {
          class B {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
        }
        if (cResult[9] !== tmp9.headerButtonIcon) {
          class B {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
          cResult[9] = tmp9.headerButtonIcon;
          cResult[10] = tmp19;
        } else {
          class B {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
        }
        if (cResult[11] === tmp11) {
          class B {
            constructor() {
              tmp = closure_2();
              return true;
            }
          }
        }
        const obj2 = {};
        const merged = Object.assign(tmp5);
        obj2.onPress = tmp11;
        obj2.label = tmp16;
        obj2.displayMode = "minimal";
        obj2.backImage = tmp19;
        obj2.accessibilityLabel = tmp16;
        const tmp25 = closure_10(tmp(6214).HeaderBackButton, obj2);
        cResult[11] = tmp11;
        cResult[12] = tmp5;
        cResult[13] = tmp19;
        cResult[14] = tmp25;
        const tmpResult2 = tmp(6211);
      }
      if (tmp4 == null) {
        class B {
          constructor() {
            tmp = closure_2();
            return true;
          }
        }
      }
      cResult[3] = navigation;
      cResult[4] = tmp4;
      cResult[5] = tmp4;
      tmp11 = tmp12;
      const tmpResult = require("Link");
    }
  : function CloseButton(onPress) {
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
      const intl = tmp2(tmp3[15]).intl;
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
        return collapsed(XSmallIcon.XSmallIcon, obj);
      };
      obj2.accessibilityLabel = stringResult;
      return closure_10(require("../../../../../_runtime/metro/06214__.js").HeaderBackButton, obj2);
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CustomHeaderBackButton(onPress) {
      const cResult = require("c").c(9);
      if (cResult[0] !== onPress) {
        onPress = onPress.onPress;
        _require = onPress;
        const tmp8 = _objectWithoutProperties(onPress, closure_4);
        cResult[0] = onPress;
        cResult[1] = onPress;
        cResult[2] = tmp8;
        let tmp5 = tmp8;
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
        let tmp9 = fn;
      } else {
        tmp9 = cResult[4];
      }
      const obj = require("c");
      require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(tmp9);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function u() {
          return closure_1_10(closure_1_13, {});
        };
        cResult[5] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp5) {
          let tmp12 = cResult[8];
        }
        return tmp12;
      }
      const obj2 = {};
      const merged = Object.assign(tmp5);
      obj2.onPress = tmp4;
      obj2.displayMode = "minimal";
      obj2.backImage = tmp11;
      const tmp14 = closure_10(require("../../../../../_runtime/metro/06214__.js").HeaderBackButton, obj2);
      cResult[6] = tmp4;
      cResult[7] = tmp5;
      cResult[8] = tmp14;
      tmp12 = tmp14;
      const tmpResult = require("useNavigatorBackPressHandler");
    }
  : function CustomHeaderBackButton(onPress) {
      onPress = onPress.onPress;
      const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
      onPress(6211).useNavigatorBackPressHandler(() => {
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
        return closure_1_10(closure_1_13, {});
      };
      return closure_10(onPress(6214).HeaderBackButton, obj2);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HeaderTextButton(arg0) {
      const cResult = c.c(15);
      if (cResult[0] !== arg0) {
        ({ text, labelStyle } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_5);
        cResult[0] = arg0;
        cResult[1] = tmp9;
        cResult[2] = labelStyle;
        cResult[3] = text;
        let tmp6 = text;
        let tmp5 = labelStyle;
        let tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      const tmp10 = styles();
      if (cResult[4] !== tmp10.headerBackTitleStyle) {
        const obj2 = {};
        const merged = Object.assign(tmp10.headerBackTitleStyle);
        obj2.marginHorizontal = 16;
        cResult[4] = tmp10.headerBackTitleStyle;
        cResult[5] = obj2;
        let tmp11 = obj2;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp11) {
          let tmp14 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function h() {
            return null;
          };
          cResult[9] = fn;
          let tmp16 = fn;
        } else {
          tmp16 = cResult[9];
        }
        let tmp17;
        if (tmpResult.isAndroid()) {
          tmp17 = tmp6;
        }
        if (cResult[10] === tmp14) {
          if (cResult[11] === tmp4) {
            if (cResult[12] === tmp17) {
              if (cResult[13] === tmp6) {
                let tmp18 = cResult[14];
              }
              return tmp18;
            }
          }
        }
        const obj3 = {};
        const merged1 = Object.assign(tmp4);
        obj3.label = tmp6;
        obj3.displayMode = "default";
        obj3.labelStyle = tmp14;
        obj3.backImage = tmp16;
        obj3.accessibilityLabel = tmp17;
        const tmp23 = collapsed(_mod6214.HeaderBackButton, obj3);
        cResult[10] = tmp14;
        cResult[11] = tmp4;
        cResult[12] = tmp17;
        cResult[13] = tmp6;
        cResult[14] = tmp23;
        tmp18 = tmp23;
        tmpResult = PlatformUtils;
      }
      const items = [tmp11, tmp5];
      cResult[6] = tmp5;
      cResult[7] = tmp11;
      cResult[8] = items;
      tmp14 = items;
    }
  : function HeaderTextButton(text) {
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
      return collapsed(_mod6214.HeaderBackButton, obj2);
    };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NavigatorHeader(arg0) {
      const cResult = c.c(14);
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
        const tmp8 = collapsed(Text_Text.Text, obj2);
        cResult[0] = title;
        cResult[1] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === icon) {
        if (cResult[3] === tmp4.navigatorHeaderTitleContainer) {
          if (cResult[4] === tmp6) {
            let tmp9 = cResult[5];
          }
          if (cResult[6] === tmp4.navigatorHeaderSubtitle) {
            if (cResult[7] === subtitle) {
              let tmp11 = cResult[8];
            }
            if (cResult[9] === tmp5) {
              if (cResult[10] === tmp4.navigatorHeaderContainer) {
                if (cResult[11] === tmp9) {
                  if (cResult[12] === tmp11) {
                    let tmp15 = cResult[13];
                  }
                  return tmp15;
                }
              }
            }
            const obj3 = { style: tmp4.navigatorHeaderContainer, children: null };
            const items = [tmp9, tmp11, tmp5];
            obj3.children = items;
            const tmp18 = closure_1_11(closure_1_8, obj3);
            cResult[9] = tmp5;
            cResult[10] = tmp4.navigatorHeaderContainer;
            cResult[11] = tmp9;
            cResult[12] = tmp11;
            cResult[13] = tmp18;
            tmp15 = tmp18;
          }
          let tmp13 = null != subtitle;
          if (tmp13) {
            tmp13 = "" !== subtitle;
          }
          if (tmp13) {
            const obj4 = {
              lineClamp: 1,
              style: tmp4.navigatorHeaderSubtitle,
              variant: "text-xs/medium",
              color: "text-muted",
              children: subtitle,
            };
            tmp13 = collapsed(Text_Text.Text, obj4);
          }
          cResult[6] = tmp4.navigatorHeaderSubtitle;
          cResult[7] = subtitle;
          cResult[8] = tmp13;
          tmp11 = tmp13;
        }
      }
      const obj5 = { style: tmp4.navigatorHeaderTitleContainer, children: null };
      const items1 = [icon, tmp6];
      obj5.children = items1;
      const tmp10 = closure_1_11(closure_1_8, obj5);
      cResult[2] = icon;
      cResult[3] = tmp4.navigatorHeaderTitleContainer;
      cResult[4] = tmp6;
      cResult[5] = tmp10;
      tmp9 = tmp10;
    }
  : function NavigatorHeader(subtitle) {
      subtitle = subtitle.subtitle;
      ({ title, icon } = subtitle);
      const tmp = styles();
      const obj = { style: tmp.navigatorHeaderContainer, children: null };
      const obj2 = { style: tmp.navigatorHeaderTitleContainer, children: null };
      const items = [
        icon,
        collapsed(Text_Text.Text, {
          accessibilityRole: "header",
          "aria-level": "1",
          lineClamp: 1,
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          children: title,
        }),
      ];
      obj2.children = items;
      const items1 = [closure_1_11(closure_1_8, obj2), ,];
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
        tmp6Result = collapsed(Text_Text.Text, obj3);
      }
      items1[1] = tmp6Result;
      items1[2] = HeaderDebugOverlayDefault("js-stack");
      obj.children = items1;
      return closure_1_11(closure_1_8, obj);
    };
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FauxHeader(arg0) {
      const cResult = c.c(10);
      ({ children, style } = arg0);
      const tmp2 = styles();
      const top = useSafeAreaInsetsDefault().top;
      const sum = top + NavigatorConstants.NAV_BAR_HEIGHT;
      if (cResult[0] === top) {
        if (cResult[1] === sum) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] === style) {
          if (cResult[4] === tmp2.fauxHeaderWrapper) {
            if (cResult[5] === tmp4) {
              let tmp5 = cResult[6];
            }
            if (cResult[7] === children) {
              if (cResult[8] === tmp5) {
                let tmp6 = cResult[9];
              }
              return tmp6;
            }
            const obj2 = { style: tmp5, children };
            const tmp9 = collapsed(closure_1_8, obj2);
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
      ({ children, style } = arg0);
      const top = useSafeAreaInsetsDefault().top;
      const obj = { style: null, children: null };
      const items = [styles().fauxHeaderWrapper, ,];
      const tmp = styles();
      items[1] = { paddingTop: top, height: top + NavigatorConstants.NAV_BAR_HEIGHT };
      items[2] = style;
      obj.style = items;
      obj.children = children;
      return collapsed(closure_1_8, obj);
    };
size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorHeader.native.tsx");

export const useStyles = styles;
export const NavigatorHeader = tmp7;
export const HeaderBackImage = tmp8;
export const renderBackImage = function renderBackImage() {
  return collapsed(closure_13, {});
};
export function getHeaderCloseButton(pop) {
  const onPress = pop;
  return function renderCloseButton(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.onPress = onPress;
    return collapsed(closure_14, obj);
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
            return { value: "IconComponent", done: null };
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
    return closure_1_10(closure_1_15, obj);
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
    return closure_1_10(closure_1_15, obj);
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
    return collapsed(closure_16, obj);
  };
}
export function getHeaderNoTitle() {
  return () => null;
}
export const FauxHeader = tmp9;
export const HeaderSubmittingIndicator = ReactCompilerGating.isReactCompilerEnabled()
  ? function HeaderSubmittingIndicator() {
      const cResult = c.c(2);
      const tmp2 = styles();
      if (cResult[0] !== tmp2.submittingIndicator) {
        const obj2 = { animating: true, style: tmp2.submittingIndicator, color: tmp2.submittingIndicator.color };
        const tmp6 = collapsed(options, obj2);
        cResult[0] = tmp2.submittingIndicator;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function HeaderSubmittingIndicator() {
      const tmp = styles();
      return collapsed(options, {
        animating: true,
        style: tmp.submittingIndicator,
        color: tmp.submittingIndicator.color,
      });
    };
