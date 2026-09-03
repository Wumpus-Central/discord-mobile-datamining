// === Module 7155: _handleBoostPress ===

// Module 7155 (_handleBoostPress)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "handleGuildBoostsUpdate" /* 4370 */;
import ME from "ME" /* 673 */;
import { PremiumGuildSubscribeModalScenes as closure_11 } from "PremiumGuildSubscribeModalScenes" /* 5388 */;
import { FractionalPremiumStates } from "GuildFeatures" /* 1923 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
function _handleBoostPress() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp2;
              obj1 = { source: null, analyticsLocations: null, guildId: null, onBack: null };
              const obj2 = { page: null, section: null, object: null, objectType: null };
              obj2[0] = closure_1_9.PREMIUM_GUILD_USER_MODAL;
              obj2[1] = dependencyMap;
              obj2[2] = closure_1_7.BUTTON_CTA;
              obj2[3] = closure_1_8.BUY;
              obj1[0] = obj2;
              obj1[1] = callback;
              obj1[2] = closure_1;
              obj1[3] = function onBack() {
                return callback(table[9]).pop();
              };
              c4 = 1;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback(7156).launchGuildBoostFlowOrAlert(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            obj = callback(5386);
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
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticsObjects: error, AnalyticsObjectTypes: closure_8, AnalyticsPages: c9, NOOP: c10 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingSubscribeButton.tsx");

export default function GuildBoostingSubscribeButton(guild) {
  guild = guild.guild;
  const previousGuildSubscriptionSlot = guild.previousGuildSubscriptionSlot;
  const analyticsSection = guild.analyticsSection;
  const onAvailableSlotPress = guild.onAvailableSlotPress;
  const intent = guild.intent;
  View = onResult;
  ({ useShortenedCTA, styles, fractionalPremiumState, premiumGroupRole } = guild);
  const tmp3 = previousGuildSubscriptionSlot(analyticsSection[11])();
  closure_6 = tmp3;
  let obj = guild(analyticsSection[12]);
  const navigation = obj.useNavigation();
  const analyticsLocations = previousGuildSubscriptionSlot(analyticsSection[13])().analyticsLocations;
  let items = [closure_6];
  const stateFromStores = guild(analyticsSection[14]).useStateFromStores(items, () => {
    const keys = Object.keys(boostSlots.boostSlots);
    return keys.some((arg0) => null == boostSlots.boostSlots[arg0].premiumGuildSubscription && !boostSlots.boostSlots[arg0].isOnCooldown());
  });
  const items1 = [navigation, analyticsSection, onAvailableSlotPress, intent, guild.onResult];
  const callback = intent.useCallback((arg0, arg1) => {
    if (null != onAvailableSlotPress) {
      return tmp(arg0, arg1);
    } else {
      let obj = { guildId: null, guildBoostSlots: null, location: null, intent: null, onResult: null };
      obj[0] = arg0;
      let tmp2;
      if (null != arg1) {
        const items = [arg1];
        tmp2 = items;
      }
      obj[1] = tmp2;
      obj = { page: null, section: null, object: null, objectType: null };
      obj[0] = stateFromStores.PREMIUM_GUILD_USER_MODAL;
      obj[1] = analyticsSection;
      obj[2] = navigation.BUTTON_CTA;
      obj[3] = analyticsLocations.BUY;
      obj[2] = obj;
      obj[3] = intent;
      obj[4] = closure_5;
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
  closure_13 = intent.useCallback(() => {
    if (closure_6) {
      let tmp8 = callback;
    } else if (stateFromStores) {
      tmp8 = callback(guild.id, previousGuildSubscriptionSlot);
    } else {
      if (shouldUseMobileWebRedirectCheckout) {
        if (null != guild.id) {
          tmp8 = handleMobileWebRedirectCheckout(analyticsLocations, tmp3.id);
        }
      }
      tmp8 = (function handleBoostPress(analyticsLocations, id, analyticsSection) {
        const self = this;
        const apply = closure_14.apply;
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
      return callback();
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
  obj[4] = stringResult;
  let tmp12Result;
  if (tmp8) {
    tmp12Result = tmp12(tmp4(tmp2[19]).LockIcon, { size: "xs", color: "white" });
  }
  obj[5] = tmp12Result;
  obj[1] = closure_13(guild(analyticsSection[17]).Button, obj);
  return closure_13(View, obj);
};