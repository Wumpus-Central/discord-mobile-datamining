// discord_app/modules/chat_input/native/action_buttons/ChatInputActionButtonGift.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtils from "../../../dismissible_content/DismissibleContentUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import PromotionsStore from "../../../premium/promotions/PromotionsStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ChatInputActionType = fn(12771).ChatInputActionType;
const ContentDismissActionType = fn(4855).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5009);
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
  let inHoldout;
  c6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  closure_9 = undefined;
  let callback;
  ({ channel, style, styleButton } = arg0);
  const ref = stateFromStores2.useRef(null);
  const items = [c6];
  stateFromStores = require("initialize").useStateFromStores(items, () => _undefined.useReducedMotion);
  const tmp5 = closure_12();
  let obj2 = require("initialize");
  const items1 = [closure_7];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    const marketingComponentByType = closure_7.getMarketingComponentByType(
      require("MarketingComponentType").MarketingComponentType.GIFT_ICON,
    );
    let giftIcon = null;
    if (null != marketingComponentByType) {
      giftIcon = null;
      if ("giftIcon" === marketingComponentByType.properties.properties.oneofKind) {
        giftIcon = marketingComponentByType.properties.properties.giftIcon;
      }
    }
    return giftIcon;
  });
  const obj3 = require("initialize");
  const items2 = [closure_7];
  stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
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
  const obj4 = require("initialize");
  const isNullOrEmptyResult = require("StringUtils").isNullOrEmpty(boxAnimationUrl);
  let tmp12 = !isNullOrEmptyResult;
  const tmp2Result = require("StringUtils");
  const isNullOrEmptyResult1 = require("StringUtils").isNullOrEmpty(trinketAnimationUrl);
  let tmp31Result = !isNullOrEmptyResult1;
  if (!isNullOrEmptyResult1) {
    tmp31Result = !tmp12;
  }
  const GiftingPromoMobileButtonAnimationDismissHoldoutExperiment =
    require("GiftingPromoMobileButtonAnimationDismissHoldoutExperiment").GiftingPromoMobileButtonAnimationDismissHoldoutExperiment;
  inHoldout = GiftingPromoMobileButtonAnimationDismissHoldoutExperiment.useConfig({
    location: "ChatInputActionButtonGift",
  }).inHoldout;
  const tmp15 = stateFromStores1;
  const tmp2Result3 = require("StringUtils");
  [tmp17, c6] = stateFromStores1(stateFromStores2.useState(false), 2);
  const tmp16 = stateFromStores1(stateFromStores2.useState(false), 2);
  if (!isNullOrEmptyResult) {
    let prop = null;
    if (!tmp17) {
      prop = require("dismissible_content").DismissibleContent.GIFTING_PROMOTION_ICON;
    }
  } else {
    prop = null;
  }
  const tmp15Result = tmp15(
    require("useSelectedDismissibleContent").useSelectedSnowflakeBoundDismissibleContent(
      prop,
      stateFromStores2,
      undefined,
      true,
    ),
    2,
  );
  closure_7 = tmp20;
  const tmp21 = tmp15Result[0] === require("dismissible_content").DismissibleContent.GIFTING_PROMOTION_ICON;
  if (!isNullOrEmptyResult) {
    tmp12 = tmp21;
  }
  closure_8 = tmp12;
  if (tmp31Result) {
    tmp31Result = tmp21;
  }
  closure_9 = tmp31Result;
  let transparentBackground = null != gradient;
  if (transparentBackground) {
    transparentBackground = gradient.colors.length > 0;
  }
  if (transparentBackground) {
    transparentBackground = tmp31Result;
  }
  const items3 = [inHoldout, tmp15Result[1]];
  callback = obj.useCallback(() => {
    _undefined(true);
    if (!inHoldout) {
      closure_7(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items3);
  const items4 = [callback];
  const items5 = [tmp12, tmp31Result, stateFromStores, callback];
  const callback1 = obj.useCallback((arg0) => {
    if (!arg0) {
      callback();
    }
  }, items4);
  const effect = obj.useEffect(() => {
    const timeout = setTimeout(callback, 7000);
    return () => clearTimeout(closure_0);
  }, items5);
  const obj5 = { style, children: null };
  if (tmp12) {
    const obj6 = {
      channelId: channel.id,
      animationDataUrl: boxAnimationUrl,
      disabled,
      active: false,
      loop: false,
      onPress(arg0) {
        closure_7(ContentDismissActionType.TAKE_ACTION);
        require(arg0, ChatInputActionType.NITRO_GIFT, ref);
      },
      onAnimationFinished: callback1,
      IconComponent: require("GiftIcon").GiftIcon,
      accessible,
      accessibilityLabel: null,
    };
    const intl2 = require("util").intl;
    obj6.accessibilityLabel = intl2.string(require("util").t.Z1RnTk);
    let tmp25Result = callback(require("PremiumAnimatedGiftButton").PremiumAnimatedGiftButton, obj6);
    let tmp31 = callback;
  } else {
    let tmp28Result = transparentBackground;
    if (transparentBackground) {
      const obj7 = {
        style: tmp5.gradientContainerRefresh,
        useAngle: true,
        angle: null,
        angleCenter: null,
        colors: null,
      };
      let num2 = gradient.angle;
      if (num2 == null) {
        num2 = 180;
      }
      obj7.angle = num2;
      obj7.angleCenter = { x: 0.5, y: 0.5 };
      obj7.colors = gradient.colors;
      tmp28Result = callback(ref(tmp3[19]), obj7);
      const tmp30 = ref(tmp3[19]);
    }
    const items6 = [tmp28Result];
    tmp31 = callback;
    const obj8 = {
      ref,
      style: null,
      disabled: null,
      accessible: null,
      accessibilityLabel: null,
      active: false,
      IconComponent: null,
      onPress: null,
    };
    const items7 = [styleButton];
    if (transparentBackground) {
      transparentBackground = tmp5.transparentBackground;
    }
    const obj9 = { children: null };
    items7[1] = transparentBackground;
    obj8.style = items7;
    obj8.disabled = disabled;
    obj8.accessible = accessible;
    const intl = require("util").intl;
    obj8.accessibilityLabel = intl.string(require("util").t.Z1RnTk);
    obj8.IconComponent = require("GiftIcon").GiftIcon;
    obj8.onPress = function onPress(arg0) {
      if (null != stateFromStores1) {
        const obj2 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
        const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(
          dismissible_content.DismissibleContent.GIFTING_PROMOTION_ICON,
          stateFromStores2,
          obj2,
        );
      }
      closure_1_0(arg0, ChatInputActionType.NITRO_GIFT, ref);
    };
    items6[1] = tmp31(ref(tmp3[20]), obj8);
    obj9.children = items6;
    tmp25Result = closure_11(tmp26, obj9);
    const tmp33 = ref(tmp3[20]);
  }
  const items8 = [tmp25Result];
  if (tmp31Result) {
    const obj10 = { trinketsAnimationUrl: trinketAnimationUrl };
    tmp31Result = tmp31(require("GiftIconTrinketsAnimation").GiftIconTrinketsAnimation, obj10);
  }
  items8[1] = tmp31Result;
  obj5.children = items8;
  return closure_11(inHoldout, obj5);
});
