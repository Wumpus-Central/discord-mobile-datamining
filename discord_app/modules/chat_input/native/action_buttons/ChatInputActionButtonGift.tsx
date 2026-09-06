// === Module 12248: ChatInputActionButtonGift ===

// Module 12248 (ChatInputActionButtonGift)
import nativeDefault from "native" /* 576 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 1945 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import PromotionsStore from "PromotionsStore" /* 10665 */;

require = fn;
const View = fn(17).View;
const ChatInputActionType = fn(11962).ChatInputActionType;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles(() => {
  const obj = { gradientContainerRefresh: null, transparentBackground: null };
  const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: nativeDefault.radii.sm };
  obj.gradientContainerRefresh = rect;
  obj.transparentBackground = { backgroundColor: "transparent" };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGift.tsx");

export default noop.memo(function ChatInputActionButtonGift(arg0) {
  ({ accessible, disabled, onPress: require } = arg0);
  let stateFromStores;
  let stateFromStores2;
  c5 = undefined;
  c6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  let obj = stateFromStores2;
  ({ channel, style, styleButton } = arg0);
  const ref = stateFromStores2.useRef(null);
  let obj1 = require("initialize");
  const items = [c6];
  stateFromStores = obj1.useStateFromStores(items, () => _undefined2.useReducedMotion);
  const tmp5 = closure_12();
  let obj2 = require("initialize");
  const items1 = [closure_7];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
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
  let obj3 = require("initialize");
  const items2 = [closure_7];
  stateFromStores2 = obj3.useStateFromStores(items2, () => {
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
  let tmp2Result = require("StringUtils");
  const isNullOrEmptyResult = tmp2Result.isNullOrEmpty(boxAnimationUrl);
  let tmp12 = !isNullOrEmptyResult;
  tmp2Result = require("StringUtils");
  const isNullOrEmptyResult1 = tmp2Result.isNullOrEmpty(trinketAnimationUrl);
  let tmp30Result = !isNullOrEmptyResult1;
  if (!isNullOrEmptyResult1) {
    tmp30Result = !tmp12;
  }
  [tmp17, c5] = stateFromStores1(obj.useState(false), 2);
  const callback = obj.useCallback((arg0) => {
    if (!arg0) {
      _undefined(true);
    }
  }, []);
  const tmp15 = stateFromStores1;
  const tmp16 = stateFromStores1(obj.useState(false), 2);
  if (!isNullOrEmptyResult) {
    let prop = null;
    if (!tmp17) {
      prop = require("dismissible_content").DismissibleContent.GIFTING_PROMOTION_ICON;
    }
  } else {
    prop = null;
  }
  const tmp2Result1 = require("useSelectedDismissibleContent");
  [tmp21, c6] = tmp15(require("useSelectedDismissibleContent").useSelectedSnowflakeBoundDismissibleContent(prop, stateFromStores2, undefined, true), 2);
  const tmp22 = tmp21 === require("dismissible_content").DismissibleContent.GIFTING_PROMOTION_ICON;
  if (!isNullOrEmptyResult) {
    tmp12 = tmp22;
  }
  closure_7 = tmp12;
  if (tmp30Result) {
    tmp30Result = tmp22;
  }
  closure_8 = tmp30Result;
  let transparentBackground = null != gradient;
  if (transparentBackground) {
    transparentBackground = gradient.colors.length > 0;
  }
  if (transparentBackground) {
    transparentBackground = tmp30Result;
  }
  const items3 = [tmp12, tmp22, tmp30Result, stateFromStores];
  const effect = obj.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = closure_7;
    }
    if (!tmp) {
      tmp = closure_8;
    }
    if (tmp) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        _undefined(true);
      }, 7000);
    }
  }, items3);
  obj = { style, children: null };
  if (tmp12) {
    obj = {
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
      accessibilityLabel: null
    };
    const intl2 = require("util").intl;
    obj.accessibilityLabel = intl2.string(require("util").t.Z1RnTk);
    let tmp24Result = closure_10(require("PremiumAnimatedGiftButton").PremiumAnimatedGiftButton, obj);
    let tmp30 = closure_10;
  } else {
    let tmp27Result = transparentBackground;
    if (transparentBackground) {
      obj1 = { style: tmp5.gradientContainerRefresh, useAngle: true, angle: null, angleCenter: null, colors: null };
      let num2 = gradient.angle;
      if (num2 == null) {
        num2 = 180;
      }
      obj1.angle = num2;
      obj1.angleCenter = { x: 0.5, y: 0.5 };
      obj1.colors = gradient.colors;
      tmp27Result = closure_10(ref(tmp3[18]), obj1);
      const tmp29 = ref(tmp3[18]);
    }
    const items4 = [tmp27Result, ];
    tmp30 = closure_10;
    obj2 = { ref, style: null, disabled: null, accessible: null, accessibilityLabel: null, active: false, IconComponent: null, onPress: null };
    const items5 = [styleButton, ];
    if (transparentBackground) {
      transparentBackground = tmp5.transparentBackground;
    }
    obj3 = { children: null };
    items5[1] = transparentBackground;
    obj2.style = items5;
    obj2.disabled = disabled;
    obj2.accessible = accessible;
    const intl = require("util").intl;
    obj2.accessibilityLabel = intl.string(require("util").t.Z1RnTk);
    obj2.IconComponent = require("GiftIcon").GiftIcon;
    obj2.onPress = function onPress(arg0) {
      if (null != stateFromStores1) {
        const obj = { dismissAction: ContentDismissActionType.TAKE_ACTION };
        const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_ICON, stateFromStores2, obj);
      }
      closure_1_0(arg0, ChatInputActionType.NITRO_GIFT, ref);
    };
    items4[1] = tmp30(ref(tmp3[19]), obj2);
    obj3.children = items4;
    tmp24Result = closure_11(tmp25, obj3);
    const tmp32 = ref(tmp3[19]);
  }
  const items6 = [tmp24Result, ];
  if (tmp30Result) {
    const obj4 = { trinketsAnimationUrl: trinketAnimationUrl };
    tmp30Result = tmp30(require("GiftIconTrinketsAnimation").GiftIconTrinketsAnimation, obj4);
  }
  items6[1] = tmp30Result;
  obj.children = items6;
  return closure_11(c5, obj);
});