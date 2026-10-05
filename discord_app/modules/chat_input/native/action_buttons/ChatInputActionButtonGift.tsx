// === Module 11878: ChatInputActionButtonGift ===

// Module 11878 (ChatInputActionButtonGift)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2038 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ChatInputConstants from "ChatInputConstants" /* 11576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import PromotionsStore_mod from "PromotionsStore" /* 10396 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_6, num, tmp2;

let c10;
let unpackModuleId;
let View = react_native.View;
let PromotionsStore = PromotionsStore_mod;
const ChatInputActionType = ChatInputConstants.ChatInputActionType;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles(() => {
  let rect;
  const obj = { gradientContainerRefresh: rect, transparentBackground: { backgroundColor: "transparent" } };
  rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: nativeDefault.radii.sm };
  return obj;
});
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessible;
  let channel;
  let closure_5;
  let closure_7;
  let disabled;
  let gradient;
  let onPress;
  let stateFromStores;
  let stateFromStores2;
  let style;
  let styleButton;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp20;
  let tmp5;
  let tmp6;
  let obj = onPress(stateFromStores[11]);
  const cResult = obj.c(42);
  ({ accessible, disabled, channel, onPress } = arg0);
  ({ style, styleButton } = arg0);
  let obj2 = stateFromStores2;
  const ref = stateFromStores2.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_6];
    const fn = function f() {
      return closure_6.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = onPress(stateFromStores[12]);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  closure_12();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PromotionsStore];
    const fn2 = function h() {
      const marketingComponentByType = closure_7.getMarketingComponentByType(onPress(stateFromStores[13]).MarketingComponentType.GIFT_ICON);
      let giftIcon = null;
      if (null != marketingComponentByType) {
        giftIcon = null;
        if ("giftIcon" === marketingComponentByType.properties.properties.oneofKind) {
          giftIcon = marketingComponentByType.properties.properties.giftIcon;
        }
      }
      return giftIcon;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp11 = fn2;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult6 = onPress(stateFromStores[12]);
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp10, tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PromotionsStore];
    class P {
      constructor() {
        const giftPromotion = closure_7.getGiftPromotion();
        let str;
        if (giftPromotion != null) {
          str = giftPromotion.id;
        }
        if (str == null) {
          str = "";
        }
        return str;
      }
    }
    cResult[4] = items2;
    cResult[5] = P;
    tmp15 = P;
    tmp14 = items2;
  } else {
    tmp14 = cResult[4];
    tmp15 = cResult[5];
  }
  const tmpResult7 = onPress(stateFromStores[12]);
  stateFromStores2 = tmpResult7.useStateFromStores(tmp14, tmp15);
  let boxAnimationUrl;
  if (stateFromStores1 != null) {
    boxAnimationUrl = stateFromStores1.boxAnimationUrl;
  }
  let trinketAnimationUrl;
  if (stateFromStores1 != null) {
    trinketAnimationUrl = stateFromStores1.trinketAnimationUrl;
  }
  if (stateFromStores1 != null) {
    gradient = stateFromStores1.gradient;
  }
  if (cResult[6] !== boxAnimationUrl) {
    const tmpResult8 = onPress(stateFromStores[14]);
    const isNullOrEmptyResult = tmpResult8.isNullOrEmpty(boxAnimationUrl);
    class P {
      constructor() {
        const giftPromotion = closure_7.getGiftPromotion();
        let str;
        if (giftPromotion != null) {
          str = giftPromotion.id;
        }
        if (str == null) {
          str = "";
        }
        return str;
      }
    }
    cResult[7] = isNullOrEmptyResult;
    tmp20 = isNullOrEmptyResult;
  } else {
    tmp20 = cResult[7];
  }
  if (cResult[8] === !tmp20) {
    let tmp23;
    if (cResult[9] === trinketAnimationUrl) {
      tmp23 = cResult[10];
    }
    class P {
      constructor() {
        const giftPromotion = closure_7.getGiftPromotion();
        let str;
        if (giftPromotion != null) {
          str = giftPromotion.id;
        }
        if (str == null) {
          str = "";
        }
        return str;
      }
    }
    const tmp27 = stateFromStores1(obj2.useState(false), 2);
    View = tmp27[1];
    const _Symbol = Symbol;
    const first = tmp27[0];
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor(arg0) {
          const tmp = arg0;
          if (!tmp) {
            closure_5(true);
          }
        }
      }
      cResult[11] = L;
      class P {
        constructor() {
          const giftPromotion = closure_7.getGiftPromotion();
          let str;
          if (giftPromotion != null) {
            str = giftPromotion.id;
          }
          if (str == null) {
            str = "";
          }
          return str;
        }
      }
    } else {
      class L {
        constructor(arg0) {
          const tmp = arg0;
          if (!tmp) {
            closure_5(true);
          }
        }
      }
    }
    const useSelectedSnowflakeBoundDismissibleContent = onPress(stateFromStores[15]).useSelectedSnowflakeBoundDismissibleContent;
    const tmpResult9 = onPress(stateFromStores[15]);
    if (!tmp20) {
      class L {
        constructor(arg0) {
          const tmp = arg0;
          if (!tmp) {
            closure_5(true);
          }
        }
      }
      if (!first) {
        class L {
          constructor(arg0) {
            const tmp = arg0;
            if (!tmp) {
              closure_5(true);
            }
          }
        }
      }
    } else {
      class L {
        constructor(arg0) {
          const tmp = arg0;
          if (!tmp) {
            closure_5(true);
          }
        }
      }
    }
    const tmp26Result = tmp26(useSelectedSnowflakeBoundDismissibleContent(tmp30, stateFromStores2, undefined, true), 2);
    closure_6 = tmp26Result[1];
    tmp26Result[0] === onPress(stateFromStores[16]).DismissibleContent.GIFTING_PROMOTION_ICON;
    if (!tmp20) {
      class L {
        constructor(arg0) {
          const tmp = arg0;
          if (!tmp) {
            closure_5(true);
          }
        }
      }
    }
    PromotionsStore = tmp22;
    if (tmp23) {
      class L {
        constructor(arg0) {
          const tmp = arg0;
          if (!tmp) {
            closure_5(true);
          }
        }
      }
    }
    let closure_8 = tmp23;
    let tmp36 = null != gradient;
    if (tmp36) {
      class L {
        constructor(arg0) {
          const tmp = arg0;
          if (!tmp) {
            closure_5(true);
          }
        }
      }
      tmp36 = gradient.colors.length > 0;
    }
    if (tmp36) {
      class L {
        constructor(arg0) {
          const tmp = arg0;
          if (!tmp) {
            closure_5(true);
          }
        }
      }
    }
    if (cResult[12] === !tmp20) {
      class L {
        constructor(arg0) {
          const tmp = arg0;
          if (!tmp) {
            closure_5(true);
          }
        }
      }
    }
    class H {
      constructor() {
        tmp = closure_2 && closure_7 || closure_8;
        if (tmp) {
          tmp2 = globalThis;
          _setTimeout = setTimeout;
          num = 7000;
          timerId = setTimeout(() => {
            closure_1_5(true);
          }, 7000);
        }
        return;
      }
    }
    cResult[12] = !tmp20;
    cResult[13] = tmp23;
    cResult[14] = stateFromStores;
    cResult[15] = H;
  }
  const tmpResult10 = onPress(stateFromStores[14]);
  const tmp25 = !tmpResult10.isNullOrEmpty(trinketAnimationUrl) && !(!tmp20);
  cResult[8] = !tmp20;
  cResult[9] = trinketAnimationUrl;
  cResult[10] = tmp25;
  tmp23 = tmp25;
}) : ((arg0) => {
  let _undefined;
  let _undefined2;
  let accessible;
  let c5;
  let c6;
  let channel;
  let disabled;
  let intl;
  let intl2;
  let items5;
  let items6;
  let num2;
  let prop;
  let style;
  let styleButton;
  let tmp17;
  let tmp22;
  let tmp25Result;
  let tmp31;
  ({ accessible, disabled, onPress: require } = arg0);
  let stateFromStores;
  let stateFromStores2;
  c5 = undefined;
  c6 = undefined;
  let closure_7;
  let closure_8;
  let obj = stateFromStores2;
  ({ channel, style, styleButton } = arg0);
  const ref = stateFromStores2.useRef(null);
  let obj2 = require("get initialized");
  const items = [c6];
  stateFromStores = obj2.useStateFromStores(items, () => _undefined2.useReducedMotion);
  const tmp5 = closure_12();
  const items1 = [closure_7];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const marketingComponentByType = closure_7.getMarketingComponentByType(require("MarketingComponentType").MarketingComponentType.GIFT_ICON);
    let giftIcon = null;
    if (null != marketingComponentByType) {
      giftIcon = null;
      if ("giftIcon" === marketingComponentByType.properties.properties.oneofKind) {
        giftIcon = marketingComponentByType.properties.properties.giftIcon;
      }
    }
    return giftIcon;
  });
  const items2 = [closure_7];
  const obj4 = require("get initialized");
  stateFromStores2 = obj4.useStateFromStores(items2, () => {
    const giftPromotion = closure_7.getGiftPromotion();
    let str;
    if (giftPromotion != null) {
      str = giftPromotion.id;
    }
    if (str == null) {
      str = "";
    }
    return str;
  });
  let boxAnimationUrl;
  if (stateFromStores1 != null) {
    boxAnimationUrl = stateFromStores1.boxAnimationUrl;
  }
  let trinketAnimationUrl;
  if (stateFromStores1 != null) {
    trinketAnimationUrl = stateFromStores1.trinketAnimationUrl;
  }
  let gradient;
  if (stateFromStores1 != null) {
    gradient = stateFromStores1.gradient;
  }
  const tmp2Result = require("StringUtils");
  const isNullOrEmptyResult = tmp2Result.isNullOrEmpty(boxAnimationUrl);
  let tmp12 = !isNullOrEmptyResult;
  const tmp2Result3 = require("StringUtils");
  let tmp31Result = !tmp2Result3.isNullOrEmpty(trinketAnimationUrl) && !tmp12;
  tmp2Result3.isNullOrEmpty(trinketAnimationUrl);
  [tmp17, c5] = stateFromStores1(obj.useState(false), 2);
  stateFromStores1(obj.useState(false), 2);
  const callback = obj.useCallback((arg0) => {
    const tmp = arg0;
    if (!tmp) {
      _undefined(true);
    }
  }, []);
  const useSelectedSnowflakeBoundDismissibleContent = require("useSelectedDismissibleContent").useSelectedSnowflakeBoundDismissibleContent;
  require("useSelectedDismissibleContent");
  if (!isNullOrEmptyResult) {
    prop = null;
    if (!tmp17) {
      prop = require("dismissible_content").DismissibleContent.GIFTING_PROMOTION_ICON;
    }
  } else {
    prop = null;
  }
  [tmp22, c6] = stateFromStores1(useSelectedSnowflakeBoundDismissibleContent(prop, stateFromStores2, undefined, true), 2);
  stateFromStores1(useSelectedSnowflakeBoundDismissibleContent(prop, stateFromStores2, undefined, true), 2);
  const tmp23 = tmp22 === require("dismissible_content").DismissibleContent.GIFTING_PROMOTION_ICON;
  if (!isNullOrEmptyResult) {
    tmp12 = tmp23;
  }
  closure_7 = tmp12;
  if (tmp31Result) {
    tmp31Result = tmp23;
  }
  closure_8 = tmp31Result;
  let transparentBackground = null != gradient;
  if (transparentBackground) {
    transparentBackground = gradient.colors.length > 0;
  }
  if (transparentBackground) {
    transparentBackground = tmp31Result;
  }
  const items3 = [tmp12, tmp23, tmp31Result, stateFromStores];
  const effect = obj.useEffect(() => {
    const tmp = stateFromStores && closure_7 || closure_8;
    if (tmp) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        _undefined(true);
      }, 7000);
    }
  }, items3);
  const obj5 = { style, children: items6 };
  if (tmp12) {
    const obj6 = {
      channelId: channel.id,
      animationDataUrl: boxAnimationUrl,
      disabled,
      active: false,
      loop: false,
      onPress(arg0) {
          _undefined2(ContentDismissActionType.TAKE_ACTION);
          require(arg0, ChatInputActionType.NITRO_GIFT, ref);
        },
      onAnimationFinished: callback,
      IconComponent: require("GiftIcon").GiftIcon,
      accessible,
      accessibilityLabel: intl2.string(require("intl").t.Z1RnTk)
    };
    const PremiumAnimatedGiftButton = require("PremiumAnimatedGiftButton").PremiumAnimatedGiftButton;
    intl2 = require("intl").intl;
    tmp25Result = closure_10(PremiumAnimatedGiftButton, obj6);
    tmp31 = closure_10;
  } else {
    let tmp28Result = transparentBackground;
    if (tmp28Result) {
      const obj7 = { style: tmp5.gradientContainerRefresh, useAngle: true, angle: num2, angleCenter: { x: 0.5, y: 0.5 }, colors: gradient.colors };
      num2 = gradient.angle;
      const tmp30 = ref(stateFromStores[20]);
      if (num2 == null) {
        num2 = 180;
      }
      tmp28Result = closure_10(tmp30, obj7);
    }
    const items4 = [tmp28Result, ];
    tmp31 = closure_10;
    const obj8 = {
      ref,
      style: items5,
      disabled,
      accessible,
      accessibilityLabel: intl.string(require("intl").t.Z1RnTk),
      active: false,
      IconComponent: require("GiftIcon").GiftIcon,
      onPress(arg0) {
          if (null != stateFromStores1) {
            const obj2 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
            const obj = DismissibleContentUtils;
            const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_ICON, stateFromStores2, obj2);
          }
          require(arg0, ChatInputActionType.NITRO_GIFT, ref);
        }
    };
    items5 = [styleButton, ];
    const tmp33 = ref(stateFromStores[21]);
    if (transparentBackground) {
      transparentBackground = tmp5.transparentBackground;
    }
    const obj9 = { children: items4 };
    items5[1] = transparentBackground;
    intl = require("intl").intl;
    items4[1] = tmp31(tmp33, obj8);
    tmp25Result = closure_11(tmp26, obj9);
  }
  items6 = [tmp25Result, ];
  if (tmp31Result) {
    const obj10 = { trinketsAnimationUrl: trinketAnimationUrl };
    tmp31Result = tmp31(require("GiftIconTrinketsAnimation").GiftIconTrinketsAnimation, obj10);
  }
  items6[1] = tmp31Result;
  return closure_11(c5, obj5);
}));
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGift.tsx");

export default memoResult;