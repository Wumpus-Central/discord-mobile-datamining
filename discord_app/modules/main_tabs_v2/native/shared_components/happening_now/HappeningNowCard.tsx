// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCard.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import useColorThemeBackgroundDefault from "../../../../client_themes/native/useColorThemeBackground.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Card_Card from "../../../../../design/components/Card/native/Card.native.tsx";
import useIsWindowLargeDefault from "../../../../screen/native/useIsWindowLarge.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../../_runtime/00019_react.js";
import HappeningNowConstants from "HappeningNowConstants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let HAPPENING_NOW_BADGE_SIZE;
let HAPPENING_NOW_PANELS_CONTAINER_PADDING;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let map1;
let metroImportAll;
let obj2;
let unpackModuleId;
let closure_3 = ["children", "noMargin", "displayNameFont"];
let closure_4 = ["children", "variant"];
const View = react_native.View;
const HAPPENING_NOW_CARD_MARGIN_RIGHT = HappeningNowConstants.HAPPENING_NOW_CARD_MARGIN_RIGHT;
({
  HAPPENING_NOW_CARD_PADDING: metroImportAll,
  HAPPENING_NOW_CARD_HEIGHT: c9,
  HAPPENING_NOW_BADGE_SIZE,
} = HappeningNowConstants);
({
  HAPPENING_NOW_CARD_WIDTH_SMALL_MIN: unpackModuleId,
  HAPPENING_NOW_CARD_WIDTH_SMALL_MAX: closure_12,
  HAPPENING_NOW_CARD_WIDTH_MEDIUM_MIN: map1,
  HAPPENING_NOW_CARD_WIDTH_MEDIUM_MAX: closure_14,
  HAPPENING_NOW_CARD_WIDTH_LARGE_MIN: closure_15,
  HAPPENING_NOW_CARD_WIDTH_LARGE_MAX: closure_16,
  HAPPENING_NOW_CARD_PADDING_RIGHT: closure_17,
  HAPPENING_NOW_CARD_WIDTH_STRETCHY_MIN: closure_18,
  HAPPENING_NOW_CARD_WIDTH_STRETCHY_MAX: closure_19,
  HAPPENING_NOW_CARD_WIDTH_LARGE_PANELS_MAX: closure_20,
  HAPPENING_NOW_PANELS_CONTAINER_PADDING,
} = HappeningNowConstants);
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
let closure_23 = HAPPENING_NOW_PANELS_CONTAINER_PADDING + HAPPENING_NOW_CARD_MARGIN_RIGHT;
let createStyles = createStyles_mod;
let closure_24 = createStyles.createStyles((arg0, arg1, arg2) => {
  let obj;
  let obj7;
  let tmp2;
  let tmp6;
  if ("small" === arg0) {
    obj = { minWidth: unpackModuleId, maxWidth };
    const obj2 = { minWidth: unpackModuleId, maxWidth };
  } else if ("medium" === arg0) {
    obj = { minWidth: map1, maxWidth: maxWidth2 };
    const obj3 = { minWidth: map1, maxWidth: maxWidth2 };
  } else if ("large" === arg0) {
    const obj4 = { minWidth, maxWidth: tmp6 };
    if (arg1) {
      let diff;
      if (arg2) {
        diff = 252 - closure_23;
      } else {
        diff = closure_20;
      }
      tmp6 = diff;
    } else {
      tmp6 = authStore3;
    }
    obj = obj4;
  } else if ("stretchy" === arg0) {
    const obj5 = { minWidth: minWidth2, maxWidth: tmp2 };
    if (arg1) {
      let diff1;
      if (arg2) {
        diff1 = 252 - closure_23;
      } else {
        diff1 = closure_20;
      }
      tmp2 = diff1;
    } else {
      tmp2 = closure_19;
    }
    obj = obj5;
  } else if ("full" === arg0) {
    obj = { width: "auto", marginLeft: 0, marginRight: 0 };
  }
  const obj6 = { card: obj7, cardBadgeWrapper: { position: "absolute", top: 0, right: 0 }, cardBadge: size };
  obj7 = {
    padding: metroImportAll,
    paddingRight,
    marginRight: HAPPENING_NOW_CARD_MARGIN_RIGHT,
    height,
    flexDirection: "row",
    alignItems: "center",
  };
  const merged = Object.assign(obj);
  size = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: HAPPENING_NOW_BADGE_SIZE,
    height: HAPPENING_NOW_BADGE_SIZE,
  };
  return obj6;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (panelVariant) => {
      let IconComponent;
      let accessibilityHint;
      let accessibilityLabel;
      let items;
      let obj4;
      const obj = react2;
      const cResult = obj.c(17);
      let flag = panelVariant.panelVariant;
      const width = panelVariant.width;
      const tmp4 = useIsWindowLargeDefault();
      if (flag == null) {
        flag = false;
      }
      const tmp5Result = closure_24(width, flag, tmp4);
      ({ IconComponent, accessibilityLabel, accessibilityHint } = panelVariant);
      if (cResult[0] === panelVariant.style) {
        let tmp8;
        if (cResult[1] === tmp5Result.card) {
          tmp8 = cResult[2];
        }
        if (cResult[3] === IconComponent) {
          if (cResult[4] === tmp5Result.cardBadge) {
            let tmp10;
            if (cResult[5] === tmp5Result.cardBadgeWrapper) {
              tmp10 = cResult[6];
            }
            if (cResult[7] === accessibilityHint) {
              if (cResult[8] === accessibilityLabel) {
                if (cResult[9] === panelVariant.children) {
                  if (cResult[10] === panelVariant.onLongPress) {
                    if (cResult[11] === panelVariant.onPress) {
                      if (cResult[12] === tmp8) {
                        if (cResult[13] === str) {
                          if ((cResult[14] === null) == panelVariant.onPress) {
                            let tmp14;
                            if (cResult[15] === tmp10) {
                              tmp14 = cResult[16];
                            }
                            return tmp14;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj2 = {
              variant: "secondary",
              style: tmp8,
              onPress: panelVariant.onPress,
              border: "faint",
              shadow: str,
              onLongPress: panelVariant.onLongPress,
              disabled: null == panelVariant.onPress,
              accessibilityLabel,
              accessibilityHint,
              children: items,
            };
            items = [panelVariant.children, tmp10];
            const tmp16 = afk(Card_Card.Card, obj2);
            cResult[7] = accessibilityHint;
            cResult[8] = accessibilityLabel;
            cResult[9] = panelVariant.children;
            cResult[10] = panelVariant.onLongPress;
            cResult[11] = panelVariant.onPress;
            cResult[12] = tmp8;
            cResult[13] = str;
            cResult[14] = null == panelVariant.onPress;
            cResult[15] = tmp10;
            cResult[16] = tmp16;
            tmp14 = tmp16;
          }
        }
        let tmp11 = null;
        if (null != IconComponent) {
          const obj3 = { style: tmp5Result.cardBadgeWrapper, children: closure_21(View, obj4) };
          obj4 = {
            style: tmp5Result.cardBadge,
            children: closure_21(IconComponent, { size: "xxs", color: "icon-voice-connected" }),
          };
          tmp11 = closure_21(View, obj3);
        }
        cResult[3] = IconComponent;
        cResult[4] = tmp5Result.cardBadge;
        cResult[5] = tmp5Result.cardBadgeWrapper;
        cResult[6] = tmp11;
        tmp10 = tmp11;
      }
      const items1 = [tmp5Result.card, panelVariant.style];
      cResult[0] = panelVariant.style;
      cResult[1] = tmp5Result.card;
      cResult[2] = items1;
      tmp8 = items1;
    }
  : (onPress) => {
      let accessibilityHint;
      let accessibilityLabel;
      let items;
      let items1;
      let obj3;
      let str;
      let flag = onPress.panelVariant;
      const width = onPress.width;
      const tmp3 = useIsWindowLargeDefault();
      if (flag == null) {
        flag = false;
      }
      const tmp4Result = closure_24(width, flag, tmp3);
      const IconComponent = onPress.IconComponent;
      ({ accessibilityLabel, accessibilityHint } = onPress);
      const obj = {
        variant: "secondary",
        style: items,
        onPress: onPress.onPress,
        border: "faint",
        shadow: str,
        onLongPress: onPress.onLongPress,
        disabled: null == onPress.onPress,
        accessibilityLabel,
        accessibilityHint,
        children: items1,
      };
      items = [tmp4Result.card, onPress.style];
      str = undefined;
      const tmp6 = useColorThemeBackgroundDefault();
      const Card = Card_Card.Card;
      if (null == tmp6) {
        str = "low";
      }
      items1 = [onPress.children];
      let tmp8 = null;
      if (null != IconComponent) {
        const obj2 = { style: tmp4Result.cardBadgeWrapper, children: closure_21(View, obj3) };
        obj3 = {
          style: tmp4Result.cardBadge,
          children: closure_21(IconComponent, { size: "xxs", color: "icon-voice-connected" }),
        };
        tmp8 = closure_21(View, obj2);
      }
      items1[1] = tmp8;
      return afk(Card, obj);
    };
createStyles = createStyles_mod;
let obj = { cardHeaderMargin: obj2 };
obj2 = { marginRight: HAPPENING_NOW_BADGE_SIZE + 4 };
let closure_25 = createStyles.createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let displayNameFont;
      let noMargin;
      let tmp12;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(14);
      if (cResult[0] !== arg0) {
        ({ children, noMargin, displayNameFont } = arg0);
        const tmp10 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = children;
        cResult[2] = displayNameFont;
        cResult[3] = noMargin;
        cResult[4] = tmp10;
        tmp7 = tmp10;
        tmp6 = noMargin;
        tmp5 = displayNameFont;
        tmp4 = children;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      let cardHeaderMargin = null;
      if (!tmp6) {
        cardHeaderMargin = closure_25().cardHeaderMargin;
      }
      if (cResult[5] !== tmp5) {
        let tmp13 = null;
        if (null != tmp5) {
          tmp13 = { fontFamily: tmp5 };
          const obj2 = { fontFamily: tmp5 };
        }
        cResult[5] = tmp5;
        cResult[6] = tmp13;
        tmp12 = tmp13;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === cardHeaderMargin) {
        let tmp14;
        if (cResult[8] === tmp12) {
          tmp14 = cResult[9];
        }
        if (cResult[10] === tmp4) {
          if (cResult[11] === tmp7) {
            let tmp15;
            if (cResult[12] === tmp14) {
              tmp15 = cResult[13];
            }
            return tmp15;
          }
        }
        const obj3 = {
          variant: "text-md/medium",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          maxFontSizeMultiplier: 2,
          style: tmp14,
          children: tmp4,
        };
        const Text = Text_Text.Text;
        const merged = Object.assign(tmp7);
        const tmp20 = closure_21(Text, obj3);
        cResult[10] = tmp4;
        cResult[11] = tmp7;
        cResult[12] = tmp14;
        cResult[13] = tmp20;
        tmp15 = tmp20;
      }
      const items = [cardHeaderMargin, tmp12];
      cResult[7] = cardHeaderMargin;
      cResult[8] = tmp12;
      cResult[9] = items;
      tmp14 = items;
    }
  : (displayNameFont) => {
      let children;
      let noMargin;
      displayNameFont = displayNameFont.displayNameFont;
      ({ children, noMargin } = displayNameFont);
      const merged = Object.assign(displayNameFont, Object.assign({ children: 0, noMargin: 0, displayNameFont: 0 }));
      let cardHeaderMargin = null;
      const tmp2 = closure_25();
      const Text = Text_Text.Text;
      if (!noMargin) {
        cardHeaderMargin = tmp2.cardHeaderMargin;
      }
      const items = [cardHeaderMargin];
      let tmp5 = null;
      if (null != displayNameFont) {
        tmp5 = { fontFamily: displayNameFont };
        const obj = { fontFamily: displayNameFont };
      }
      const obj2 = {
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        lineClamp: 1,
        maxFontSizeMultiplier: 2,
        style: items,
        children,
      };
      items[1] = tmp5;
      const merged1 = Object.assign(merged);
      return closure_21(Text, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let str;
      let tmp4;
      let tmp5;
      let variant;
      const obj = react2;
      const cResult = obj.c(8);
      if (cResult[0] !== arg0) {
        ({ children, variant } = arg0);
        const tmp8 = _objectWithoutProperties(arg0, closure_4);
        cResult[0] = arg0;
        cResult[1] = children;
        cResult[2] = tmp8;
        cResult[3] = variant;
        str = variant;
        tmp5 = tmp8;
        tmp4 = children;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        str = cResult[3];
      }
      if (str == null) {
        str = "text-sm/normal";
      }
      if (cResult[4] === tmp4) {
        if (cResult[5] === tmp5) {
          let tmp9;
          if (cResult[6] === str) {
            tmp9 = cResult[7];
          }
          return tmp9;
        }
      }
      const obj2 = { variant: str, color: "text-subtle", lineClamp: 1, maxFontSizeMultiplier: 2, children: tmp4 };
      const Text = Text_Text.Text;
      const merged = Object.assign(tmp5);
      const tmp11 = closure_21(Text, obj2);
      cResult[4] = tmp4;
      cResult[5] = tmp5;
      cResult[6] = str;
      cResult[7] = tmp11;
      tmp9 = tmp11;
    }
  : (variant) => {
      let str = variant.variant;
      const children = variant.children;
      const merged = Object.assign(variant, Object.assign({ children: 0, variant: 0 }));
      const Text = Text_Text.Text;
      if (str == null) {
        str = "text-sm/normal";
      }
      const obj = { variant: str, color: "text-subtle", lineClamp: 1, maxFontSizeMultiplier: 2, children };
      const merged1 = Object.assign(merged);
      return closure_21(Text, obj);
    };
let size = size_mod;
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCard.tsx",
);

export default tmp5;
export const HappeningNowCardHeader = tmp6;
export const HappeningNowCardSubtitle = tmp7;
