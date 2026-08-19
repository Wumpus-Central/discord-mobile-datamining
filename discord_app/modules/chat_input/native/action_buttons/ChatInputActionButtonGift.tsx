// === Module 11411: ? ===

// Module 11411
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import createEmptyPromotionsByType from "createEmptyPromotionsByType" /* 7628 */;
import { ChatInputActionType } from "TextAreaCta" /* 11149 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let c4 = importAllResult;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles(() => {
  let obj = { position: "absolute", top: 0, left: ThemesDefault.space.PX_4, right: ThemesDefault.space.PX_4, bottom: 0, borderRadius: ThemesDefault.radii.round };
  obj[0] = obj;
  obj = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: ThemesDefault.radii.sm };
  obj[1] = obj;
  obj[2] = { backgroundColor: "transparent" };
  return obj;
});
const memoResult = importAllResult.memo(function ChatInputActionButtonGift(arg0) {
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
  obj1 = require(stateFromStores[10]);
  const items = [c6];
  stateFromStores = obj1.useStateFromStores(items, () => _undefined2.useReducedMotion);
  let obj2 = require(stateFromStores[11]);
  const tmp5 = callback2();
  let obj3 = require(stateFromStores[10]);
  const items1 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const marketingComponentByType = store.getMarketingComponentByType(callback(stateFromStores[12]).MarketingComponentType.GIFT_ICON);
    let giftIcon = null;
    if (null != marketingComponentByType) {
      giftIcon = null;
      if ("giftIcon" === marketingComponentByType.properties.properties.oneofKind) {
        giftIcon = marketingComponentByType.properties.properties.giftIcon;
      }
    }
    return giftIcon;
  });
  let obj4 = require(stateFromStores[10]);
  const items2 = [closure_7];
  stateFromStores2 = obj4.useStateFromStores(items2, () => {
    const giftPromotion = store.getGiftPromotion();
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
  let tmp2Result = require(tmp3[13]);
  const isNullOrEmptyResult = tmp2Result.isNullOrEmpty(boxAnimationUrl);
  let tmp12 = !isNullOrEmptyResult;
  tmp2Result = require(tmp3[13]);
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
      prop = require(tmp3[15]).DismissibleContent.GIFTING_PROMOTION_ICON;
    }
  } else {
    prop = null;
  }
  const tmp2Result1 = require(stateFromStores[14]);
  [tmp21, c6] = tmp15(require(stateFromStores[14]).useSelectedSnowflakeBoundDismissibleContent(prop, stateFromStores2, undefined, true), 2);
  const tmp22 = tmp21 === require(stateFromStores[15]).DismissibleContent.GIFTING_PROMOTION_ICON;
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
        callback(true);
      }, 7000);
    }
  }, items3);
  obj = { style, children: null };
  if (tmp12) {
    obj = { channelId: null, animationDataUrl: null, disabled: null, active: false, loop: false, onPress: null, onAnimationFinished: null, IconComponent: null, accessible: null, accessibilityLabel: null };
    obj[0] = channel.id;
    obj[1] = boxAnimationUrl;
    obj[2] = disabled;
    obj[5] = function onPress(arg0) {
      _undefined2(ContentDismissActionType.TAKE_ACTION);
      callback(arg0, constants.NITRO_GIFT, ref);
    };
    obj[6] = callback;
    obj[7] = require(tmp3[17]).GiftIcon;
    obj[8] = accessible;
    const intl2 = require(tmp3[18]).intl;
    obj[9] = intl2.string(require(tmp3[18]).t.Z1RnTk);
    let tmp24Result = callback(require(tmp3[16]).PremiumAnimatedGiftButton, obj);
    let tmp30 = callback;
  } else {
    let tmp27Result = transparentBackground;
    if (transparentBackground) {
      obj1 = { style: null, useAngle: true, angle: null, angleCenter: null, colors: null };
      obj1[0] = obj2.useMobileVisualRefreshConfig({ location: "ChatInputActionButtonGift" }).enabled ? tmp5.gradientContainerRefresh : tmp5.gradientContainer;
      let num2 = gradient.angle;
      if (num2 == null) {
        num2 = 180;
      }
      obj1[2] = num2;
      obj1[3] = { x: 0.5, y: 0.5 };
      obj1[4] = gradient.colors;
      tmp27Result = callback(ref(tmp3[19]), obj1);
      const tmp29 = ref(tmp3[19]);
    }
    const items4 = [tmp27Result, ];
    tmp30 = callback;
    obj2 = { ref: null, style: null, disabled: null, accessible: null, accessibilityLabel: null, active: false, IconComponent: null, onPress: null };
    obj2[0] = ref;
    const items5 = [styleButton, ];
    if (transparentBackground) {
      transparentBackground = tmp5.transparentBackground;
    }
    obj3 = { children: null };
    items5[1] = transparentBackground;
    obj2[1] = items5;
    obj2[2] = disabled;
    obj2[3] = accessible;
    const intl = require(tmp3[18]).intl;
    obj2[4] = intl.string(require(tmp3[18]).t.Z1RnTk);
    obj2[6] = require(tmp3[17]).GiftIcon;
    obj2[7] = function onPress(arg0) {
      if (null != stateFromStores1) {
        require(stateFromStores[21]);
        const obj = { dismissAction: null };
        obj[0] = ContentDismissActionType.TAKE_ACTION;
        const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(require(stateFromStores[15]).DismissibleContent.GIFTING_PROMOTION_ICON, stateFromStores2, obj);
      }
      callback(arg0, constants.NITRO_GIFT, ref);
    };
    items4[1] = tmp30(ref(tmp3[20]), obj2);
    obj3[0] = items4;
    tmp24Result = callback(tmp25, obj3);
    const tmp32 = ref(tmp3[20]);
  }
  const items6 = [tmp24Result, ];
  if (tmp30Result) {
    obj4 = { trinketsAnimationUrl: null };
    obj4[0] = trinketAnimationUrl;
    tmp30Result = tmp30(require(tmp3[22]).GiftIconTrinketsAnimation, obj4);
  }
  items6[1] = tmp30Result;
  obj[1] = items6;
  return callback(c5, obj);
});
let result = require("obj132").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGift.tsx");

export default memoResult;