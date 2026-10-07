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
let View = fn(17).View;
const ChatInputActionType = fn(11589).ChatInputActionType;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4896);
let closure_12 = createStyles.createStyles(() => {
  const obj = { gradientContainerRefresh: null, transparentBackground: null };
  const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: nativeDefault.radii.sm };
  obj.gradientContainerRefresh = rect;
  obj.transparentBackground = { backgroundColor: "transparent" };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGift.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = onPress(stateFromStores[11]).c(42);
        ({ accessible, disabled, channel, onPress } = arg0);
        ({ style, styleButton } = arg0);
        stateFromStores2.useRef(null);
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
        let obj = onPress(stateFromStores[11]);
        let obj2 = stateFromStores2;
        stateFromStores = onPress(stateFromStores[12]).useStateFromStores(tmp5, tmp6);
        closure_12();
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [PromotionsStore];
          const fn2 = function h() {
            const marketingComponentByType = closure_7.getMarketingComponentByType(
              onPress(stateFromStores[13]).MarketingComponentType.GIFT_ICON,
            );
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
          let tmp11 = fn2;
          let tmp10 = items1;
        } else {
          tmp10 = cResult[2];
          tmp11 = cResult[3];
        }
        const tmpResult = onPress(stateFromStores[12]);
        const stateFromStores1 = onPress(stateFromStores[12]).useStateFromStores(tmp10, tmp11);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [PromotionsStore];
          class P {
            constructor() {
              giftPromotion = closure_7.getGiftPromotion();
              str = undefined;
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
          let tmp15 = P;
          let tmp14 = items2;
        } else {
          tmp14 = cResult[4];
          tmp15 = cResult[5];
        }
        const tmpResult6 = onPress(stateFromStores[12]);
        stateFromStores2 = onPress(stateFromStores[12]).useStateFromStores(tmp14, tmp15);
        let boxAnimationUrl;
        if (stateFromStores1 != null) {
          boxAnimationUrl = stateFromStores1.boxAnimationUrl;
        }
        let trinketAnimationUrl;
        if (stateFromStores1 != null) {
          trinketAnimationUrl = stateFromStores1.trinketAnimationUrl;
        }
        if (stateFromStores1 != null) {
          const gradient = stateFromStores1.gradient;
        }
        if (cResult[6] !== boxAnimationUrl) {
          const isNullOrEmptyResult = onPress(tmp2[14]).isNullOrEmpty(boxAnimationUrl);
          class P {
            constructor() {
              giftPromotion = closure_7.getGiftPromotion();
              str = undefined;
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
          let tmp20 = isNullOrEmptyResult;
          const tmpResult8 = onPress(tmp2[14]);
        } else {
          tmp20 = cResult[7];
        }
        if (cResult[8] === !tmp20) {
          if (cResult[9] === trinketAnimationUrl) {
            let tmp23 = cResult[10];
          }
          class P {
            constructor() {
              giftPromotion = closure_7.getGiftPromotion();
              str = undefined;
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
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class L {
              constructor(arg0) {
                if (!arg0) {
                  tmp = closure_5;
                  flag = true;
                  tmp2 = closure_5(true);
                }
                return;
              }
            }
            cResult[11] = L;
            class P {
              constructor() {
                giftPromotion = closure_7.getGiftPromotion();
                str = undefined;
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
                if (!arg0) {
                  tmp = closure_5;
                  flag = true;
                  tmp2 = closure_5(true);
                }
                return;
              }
            }
          }
          const tmpResult9 = onPress(tmp2[15]);
          if (!tmp20) {
            class L {
              constructor(arg0) {
                if (!arg0) {
                  tmp = closure_5;
                  flag = true;
                  tmp2 = closure_5(true);
                }
                return;
              }
            }
            if (!tmp27[0]) {
              class L {
                constructor(arg0) {
                  if (!arg0) {
                    tmp = closure_5;
                    flag = true;
                    tmp2 = closure_5(true);
                  }
                  return;
                }
              }
            }
          } else {
            class L {
              constructor(arg0) {
                if (!arg0) {
                  tmp = closure_5;
                  flag = true;
                  tmp2 = closure_5(true);
                }
                return;
              }
            }
          }
          const tmp26Result = tmp26(
            tmpResult9.useSelectedSnowflakeBoundDismissibleContent(tmp28, stateFromStores2, undefined, true),
            2,
          );
          closure_6 = tmp26Result[1];
          tmp26Result[0] === onPress(tmp2[16]).DismissibleContent.GIFTING_PROMOTION_ICON;
          if (!tmp20) {
            class L {
              constructor(arg0) {
                if (!arg0) {
                  tmp = closure_5;
                  flag = true;
                  tmp2 = closure_5(true);
                }
                return;
              }
            }
          }
          PromotionsStore = tmp22;
          if (tmp23) {
            class L {
              constructor(arg0) {
                if (!arg0) {
                  tmp = closure_5;
                  flag = true;
                  tmp2 = closure_5(true);
                }
                return;
              }
            }
          }
          closure_8 = tmp23;
          let tmp34 = null != gradient;
          if (tmp34) {
            class L {
              constructor(arg0) {
                if (!arg0) {
                  tmp = closure_5;
                  flag = true;
                  tmp2 = closure_5(true);
                }
                return;
              }
            }
            tmp34 = gradient.colors.length > 0;
          }
          if (tmp34) {
            class L {
              constructor(arg0) {
                if (!arg0) {
                  tmp = closure_5;
                  flag = true;
                  tmp2 = closure_5(true);
                }
                return;
              }
            }
          }
          if (cResult[12] === tmp22) {
            class L {
              constructor(arg0) {
                if (!arg0) {
                  tmp = closure_5;
                  flag = true;
                  tmp2 = closure_5(true);
                }
                return;
              }
            }
          }
          class H {
            constructor() {
              tmp = closure_2;
              if (closure_2) {
                tmp = closure_7;
              }
              if (!tmp) {
                tmp = closure_8;
              }
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
          cResult[12] = tmp22;
          cResult[13] = tmp23;
          cResult[14] = stateFromStores;
          cResult[15] = H;
        }
        const tmpResult7 = onPress(stateFromStores[12]);
        const isNullOrEmptyResult1 = onPress(stateFromStores[14]).isNullOrEmpty(trinketAnimationUrl);
        if (!isNullOrEmptyResult1) {
          class L {
            constructor(arg0) {
              if (!arg0) {
                tmp = closure_5;
                flag = true;
                tmp2 = closure_5(true);
              }
              return;
            }
          }
        }
        cResult[8] = !tmp20;
        cResult[9] = trinketAnimationUrl;
        cResult[10] = !isNullOrEmptyResult1;
        tmp23 = tmp25;
        const tmpResult10 = onPress(stateFromStores[14]);
      }
    : (arg0) => {
        ({ accessible, disabled, onPress: require } = arg0);
        let stateFromStores;
        let stateFromStores2;
        c5 = undefined;
        c6 = undefined;
        closure_7 = undefined;
        closure_8 = undefined;
        ({ channel, style, styleButton } = arg0);
        const ref = stateFromStores2.useRef(null);
        const items = [c6];
        stateFromStores = require("initialize").useStateFromStores(items, () => _undefined2.useReducedMotion);
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
        let tmp30Result = !isNullOrEmptyResult1;
        if (!isNullOrEmptyResult1) {
          tmp30Result = !tmp12;
        }
        const tmp15 = stateFromStores1;
        const tmp2Result3 = require("StringUtils");
        [tmp17, c5] = stateFromStores1(stateFromStores2.useState(false), 2);
        const callback = obj.useCallback((arg0) => {
          if (!arg0) {
            _undefined(true);
          }
        }, []);
        const tmp16 = stateFromStores1(stateFromStores2.useState(false), 2);
        if (!isNullOrEmptyResult) {
          let prop = null;
          if (!tmp17) {
            prop = require("dismissible_content").DismissibleContent.GIFTING_PROMOTION_ICON;
          }
        } else {
          prop = null;
        }
        const tmp2Result4 = require("useSelectedDismissibleContent");
        [tmp21, c6] = tmp15(
          require("useSelectedDismissibleContent").useSelectedSnowflakeBoundDismissibleContent(
            prop,
            stateFromStores2,
            undefined,
            true,
          ),
          2,
        );
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
        const obj5 = { style, children: null };
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
            accessibilityLabel: null,
          };
          const intl2 = require("util").intl;
          obj6.accessibilityLabel = intl2.string(require("util").t.Z1RnTk);
          let tmp24Result = closure_10(require("PremiumAnimatedGiftButton").PremiumAnimatedGiftButton, obj6);
          let tmp30 = closure_10;
        } else {
          let tmp27Result = transparentBackground;
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
            tmp27Result = closure_10(ref(tmp3[20]), obj7);
            const tmp29 = ref(tmp3[20]);
          }
          const items4 = [tmp27Result];
          tmp30 = closure_10;
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
          const items5 = [styleButton];
          if (transparentBackground) {
            transparentBackground = tmp5.transparentBackground;
          }
          const obj9 = { children: null };
          items5[1] = transparentBackground;
          obj8.style = items5;
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
          items4[1] = tmp30(ref(tmp3[21]), obj8);
          obj9.children = items4;
          tmp24Result = closure_11(tmp25, obj9);
          const tmp32 = ref(tmp3[21]);
        }
        const items6 = [tmp24Result];
        if (tmp30Result) {
          const obj10 = { trinketsAnimationUrl: trinketAnimationUrl };
          tmp30Result = tmp30(require("GiftIconTrinketsAnimation").GiftIconTrinketsAnimation, obj10);
        }
        items6[1] = tmp30Result;
        obj5.children = items6;
        return closure_11(c5, obj5);
      },
);
