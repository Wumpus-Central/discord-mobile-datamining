// === Module 7402: GuildBoostingSubscribeButton ===

// Module 7402 (GuildBoostingSubscribeButton)
import GuildBoostPurchasingUtils from "GuildBoostPurchasingUtils" /* 7403 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4455 */;

require = fn;
let closure_14 = async function _handleBoostPress(analyticsLocations, guildId, section) {
  c4 = 0;
  c5 = 0;
  return (async (arg0, value, arg2) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp2;
            const obj1 = { source: null, analyticsLocations: null, guildId: null, onBack: null };
            const obj2 = { page: constants3.PREMIUM_GUILD_USER_MODAL, section, object: constants.BUTTON_CTA, objectType: constants2.BUY };
            obj1.source = obj2;
            obj1.analyticsLocations = analyticsLocations;
            obj1.guildId = guildId;
            obj1.onBack = function onBack() {
              return guildId(section[9]).pop();
            };
            c4 = 1;
            c5 = 1;
            const obj3 = { value: GuildBoostPurchasingUtils.launchGuildBoostFlowOrAlert(obj1), done: false };
            return obj3;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          obj = closure_131_0(closure_131_2[10]);
          obj.closeApplyBoostModal();
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        c5 = tmp;
        throw tmp10;
      }
    }
  })();
};
let View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsObjects: closure_7, AnalyticsObjectTypes: closure_8, AnalyticsPages: closure_9, NOOP: c10 } = Constants);
let closure_11 = fn(5436).PremiumGuildSubscribeModalScenes;
const FractionalPremiumStates = fn(1373).FractionalPremiumStates;
let jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingSubscribeButton.tsx");

export default function GuildBoostingSubscribeButton(guild) {
  guild = guild.guild;
  const previousGuildSubscriptionSlot = guild.previousGuildSubscriptionSlot;
  const analyticsSection = guild.analyticsSection;
  const onAvailableSlotPress = guild.onAvailableSlotPress;
  const intent = guild.intent;
  View = onResult;
  ({ useShortenedCTA, styles, fractionalPremiumState, premiumGroupRole } = guild);
  const tmp3 = previousGuildSubscriptionSlot(analyticsSection[11])();
  const boostSlots = tmp3;
  let obj = guild(analyticsSection[12]);
  const navigation = obj.useNavigation();
  const analyticsLocations = previousGuildSubscriptionSlot(analyticsSection[13])().analyticsLocations;
  let items = [boostSlots];
  const stateFromStores = guild(analyticsSection[14]).useStateFromStores(items, () => {
    const keys = Object.keys(boostSlots.boostSlots);
    return keys.some((item) => null == boostSlots.boostSlots[item].premiumGuildSubscription && !boostSlots.boostSlots[item].isOnCooldown());
  });
  const items1 = [navigation, analyticsSection, onAvailableSlotPress, intent, guild.onResult];
  const callback = intent.useCallback((guildId, arg1) => {
    if (null != onAvailableSlotPress) {
      return tmp(guildId, arg1);
    } else {
      let obj = { guildId, guildBoostSlots: null, location: null, intent: null, onResult: null };
      let tmp2;
      if (null != arg1) {
        const items = [arg1];
        tmp2 = items;
      }
      obj.guildBoostSlots = tmp2;
      obj = { page: constants3.PREMIUM_GUILD_USER_MODAL, section: analyticsSection, object: constants.BUTTON_CTA, objectType: constants2.BUY };
      obj.location = obj;
      obj.intent = intent;
      obj.onResult = onResult;
      navigation.push(shouldUseMobileWebRedirectCheckout.CONFIRMATION, obj);
    }
  }, items1);
  let tmp8 = !stateFromStores;
  if (!stateFromStores) {
    tmp8 = fractionalPremiumState !== handleMobileWebRedirectCheckout.NONE || premiumGroupRole === tmp4(tmp2[15]).PremiumSubscriptionGroupRole.MEMBER;
    const tmp10 = fractionalPremiumState !== handleMobileWebRedirectCheckout.NONE || premiumGroupRole === tmp4(tmp2[15]).PremiumSubscriptionGroupRole.MEMBER;
  }
  const tmp11 = previousGuildSubscriptionSlot(analyticsSection[16])("guild_boost_subscribe_button");
  const shouldUseMobileWebRedirectCheckout = tmp11.shouldUseMobileWebRedirectCheckout;
  handleMobileWebRedirectCheckout = tmp11.handleMobileWebRedirectCheckout;
  const items2 = [tmp3, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout, guild.id, analyticsSection, stateFromStores, previousGuildSubscriptionSlot, analyticsLocations, callback];
  jsx = intent.useCallback(() => {
    if (closure_6) {
      let tmp8 = closure_2_10;
    } else if (stateFromStores) {
      tmp8 = callback(guild.id, previousGuildSubscriptionSlot);
    } else {
      if (shouldUseMobileWebRedirectCheckout) {
        if (null != guild.id) {
          tmp8 = handleMobileWebRedirectCheckout(analyticsLocations, tmp3.id);
        }
      }
      tmp8 = (function handleBoostPress() {
        const self = this;
        const apply = closure_1_14.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(analyticsLocations, guild.id, analyticsSection);
    }
    return tmp8;
  }, items2);
  obj = { style: styles, children: null };
  obj = {
    loading: tmp3,
    variant: "primary",
    onPress() {
      return closure_13();
    },
    disabled: tmp8,
    text: null,
    icon: null
  };
  const intl = tmp4(tmp2[18]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[18]).t;
  if (useShortenedCTA) {
    let stringResult = string(t.Uj0md3);
  } else {
    stringResult = string(t.gKmQ1G);
  }
  obj.text = stringResult;
  let tmp12Result;
  if (tmp8) {
    tmp12Result = tmp12(tmp4(tmp2[19]).LockIcon, { size: "xs", color: "white" });
  }
  obj.icon = tmp12Result;
  obj.children = jsx(guild(analyticsSection[17]).Button, obj);
  return jsx(View, obj);
};