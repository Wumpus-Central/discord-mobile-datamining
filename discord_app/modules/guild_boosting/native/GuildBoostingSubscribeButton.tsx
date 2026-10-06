// === Module 6917: GuildBoostingSubscribeButton ===

// Module 6917 (GuildBoostingSubscribeButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PremiumGuildSubscribeConstants from "PremiumGuildSubscribeConstants" /* 5621 */;
import GuildBoostPurchasingUtils from "GuildBoostPurchasingUtils" /* 6919 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 6918 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3, guild, navigation;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
function handleBoostPress() {
  return obj(...arguments);
}
let location = function _handleBoostPress() {
  let obj = _asyncToGenerator(async (analyticsLocations, guildId, section) => {
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value, arg2) => {
      let obj5;
      let obj6;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_3 = tmp;
              const obj4 = {
                source: obj5,
                analyticsLocations,
                guildId,
                onBack() {
                          const arr = guildId(section[9]);
                          return arr.pop();
                        }
              };
              c4 = 1;
              c5 = 1;
              obj5 = { page: constants3.PREMIUM_GUILD_USER_MODAL, section, object: constants.BUTTON_CTA, objectType: constants2.BUY };
              const obj7 = { value: obj6.launchGuildBoostFlowOrAlert(obj4), done: false };
              obj6 = GuildBoostPurchasingUtils;
              return obj7;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            const obj = closure_131_0(closure_131_2[10]);
            obj.closeApplyBoostModal();
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          c5 = 3;
          throw tmp9;
        }
      }
    })();
  });
  return obj(...arguments);
};
let View = react_native.View;
({ AnalyticsObjects: metroImportDefault, AnalyticsObjectTypes: metroImportAll, AnalyticsPages: c9, NOOP: c10 } = Constants);
let closure_11 = PremiumGuildSubscribeConstants.PremiumGuildSubscribeModalScenes;
const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
let jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let analyticsSection;
  let closure_13;
  let fractionalPremiumState;
  let handleMobileWebRedirectCheckout;
  let premiumGroupRole;
  let styles;
  let tmp7;
  let tmp8;
  let useShortenedCTA;
  let tmp = guild;
  const obj = guild(analyticsSection[12]);
  const cResult = obj.c(33);
  guild = guild.guild;
  const previousGuildSubscriptionSlot = guild.previousGuildSubscriptionSlot;
  ({ useShortenedCTA, styles, analyticsSection } = guild);
  const onAvailableSlotPress = guild.onAvailableSlotPress;
  const intent = guild.intent;
  View = onResult;
  ({ fractionalPremiumState, premiumGroupRole } = guild);
  const tmp4 = previousGuildSubscriptionSlot;
  const tmp5 = previousGuildSubscriptionSlot(analyticsSection[13])();
  const boostSlots = tmp5;
  let obj2 = guild(analyticsSection[14]);
  navigation = obj2.useNavigation();
  const analyticsLocations = previousGuildSubscriptionSlot(analyticsSection[15])().analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [boostSlots];
    const fn = function n() {
      const keys = Object.keys(boostSlots.boostSlots);
      return keys.some((item) => {
        const tmp = null == boostSlots.boostSlots[item].premiumGuildSubscription && !boostSlots.boostSlots[item].isOnCooldown();
        return tmp;
      });
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(analyticsSection[16]);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[2] === onAvailableSlotPress) {
    if (cResult[3] === analyticsSection) {
      if (cResult[4] === intent) {
        if (cResult[5] === navigation) {
          let tmp11;
          if (cResult[6] === guild.onResult) {
            tmp11 = cResult[7];
          }
          let closure_10 = tmp11;
          let tmp12 = !stateFromStores;
          if (tmp12) {
            tmp12 = fractionalPremiumState !== handleMobileWebRedirectCheckout.NONE || premiumGroupRole === tmp(analyticsSection[17]).PremiumSubscriptionGroupRole.MEMBER;
            fractionalPremiumState !== handleMobileWebRedirectCheckout.NONE || premiumGroupRole === tmp(analyticsSection[17]).PremiumSubscriptionGroupRole.MEMBER;
          }
          const tmp15 = tmp4(analyticsSection[18])("guild_boost_subscribe_button");
          const shouldUseMobileWebRedirectCheckout = tmp15.shouldUseMobileWebRedirectCheckout;
          handleMobileWebRedirectCheckout = tmp15.handleMobileWebRedirectCheckout;
          if (cResult[8] === analyticsLocations) {
            if (cResult[9] === analyticsSection) {
              if (cResult[10] === guild.id) {
                if (cResult[11] === handleMobileWebRedirectCheckout) {
                  if (cResult[12] === stateFromStores) {
                    if (cResult[13] === tmp5) {
                      if (cResult[14] === tmp11) {
                        if (cResult[15] === previousGuildSubscriptionSlot) {
                          let tmp16;
                          if (cResult[16] === shouldUseMobileWebRedirectCheckout) {
                            tmp16 = cResult[17];
                          }
                          jsx = tmp16;
                          if (cResult[18] !== tmp16) {
                            class D {
                              constructor() {
                                return closure_13();
                              }
                            }
                            cResult[18] = tmp16;
                            cResult[19] = D;
                          } else {
                            class D {
                              constructor() {
                                return closure_13();
                              }
                            }
                          }
                          if (cResult[20] !== useShortenedCTA) {
                            class D {
                              constructor() {
                                return closure_13();
                              }
                            }
                            const string = tmp19.string;
                            const t = tmp(analyticsSection[19]).t;
                            if (useShortenedCTA) {
                              class D {
                                constructor() {
                                  return closure_13();
                                }
                              }
                            } else {
                              class D {
                                constructor() {
                                  return closure_13();
                                }
                              }
                            }
                            cResult[20] = useShortenedCTA;
                            cResult[21] = tmp20;
                          } else {
                            class D {
                              constructor() {
                                return closure_13();
                              }
                            }
                          }
                          if (cResult[22] !== tmp12) {
                            let tmp22;
                            class D {
                              constructor() {
                                return closure_13();
                              }
                            }
                            if (tmp12) {
                              class D {
                                constructor() {
                                  return closure_13();
                                }
                              }
                              tmp22 = jsx(tmp(analyticsSection[20]).LockIcon, { size: "xs", color: "white" });
                            }
                            cResult[22] = tmp12;
                            cResult[23] = tmp22;
                          } else {
                            class D {
                              constructor() {
                                return closure_13();
                              }
                            }
                          }
                          if (cResult[24] === tmp5) {
                            class D {
                              constructor() {
                                return closure_13();
                              }
                            }
                          }
                          class E {
                            constructor() {
                              let tmp10;
                              if (boostSlots) {
                                tmp10 = authStore;
                              } else if (stateFromStores) {
                                tmp10 = c10(guild.id, previousGuildSubscriptionSlot);
                              } else {
                                if (shouldUseMobileWebRedirectCheckout) {
                                  if (null != guild.id) {
                                    tmp10 = handleMobileWebRedirectCheckout(analyticsLocations, tmp4.id);
                                  }
                                }
                                tmp10 = handleBoostPress(analyticsLocations, guild.id, analyticsSection);
                              }
                              return tmp10;
                            }
                          }
                          cResult[24] = tmp5;
                          cResult[25] = tmp12;
                          cResult[26] = D;
                          cResult[27] = tmp20;
                          cResult[28] = tmp21;
                          cResult[29] = jsx(tmp(analyticsSection[21]).Button, { loading: tmp5, variant: "primary", onPress: D, disabled: tmp12, text: null, icon: tmp21 });
                          const tmp25 = jsx(tmp(analyticsSection[21]).Button, { loading: tmp5, variant: "primary", onPress: D, disabled: tmp12, text: null, icon: tmp21 });
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          class E {
            constructor() {
              let tmp10;
              if (boostSlots) {
                tmp10 = authStore;
              } else if (stateFromStores) {
                tmp10 = c10(guild.id, previousGuildSubscriptionSlot);
              } else {
                if (shouldUseMobileWebRedirectCheckout) {
                  if (null != guild.id) {
                    tmp10 = handleMobileWebRedirectCheckout(analyticsLocations, tmp4.id);
                  }
                }
                tmp10 = handleBoostPress(analyticsLocations, guild.id, analyticsSection);
              }
              return tmp10;
            }
          }
          cResult[8] = analyticsLocations;
          cResult[9] = analyticsSection;
          cResult[10] = guild.id;
          cResult[11] = handleMobileWebRedirectCheckout;
          cResult[12] = stateFromStores;
          cResult[13] = tmp5;
          cResult[14] = tmp11;
          cResult[15] = previousGuildSubscriptionSlot;
          cResult[16] = shouldUseMobileWebRedirectCheckout;
          cResult[17] = E;
          tmp16 = E;
        }
      }
    }
  }
  const fn2 = function j(guildId, arg1) {
    let tmp2;
    if (null != onAvailableSlotPress) {
      return tmp(guildId, arg1);
    } else {
      const obj2 = { guildId, guildBoostSlots: tmp2, location, intent, onResult: View };
      tmp2 = undefined;
      const push = navigation.push;
      const CONFIRMATION = shouldUseMobileWebRedirectCheckout.CONFIRMATION;
      if (null != arg1) {
        const items = [arg1];
        tmp2 = items;
      }
      location = { page: stateFromStores.PREMIUM_GUILD_USER_MODAL, section: analyticsSection, object: metroImportDefault.BUTTON_CTA, objectType: metroImportAll.BUY };
      push(CONFIRMATION, obj2);
    }
  };
  cResult[2] = onAvailableSlotPress;
  cResult[3] = analyticsSection;
  cResult[4] = intent;
  cResult[5] = navigation;
  cResult[6] = guild.onResult;
  cResult[7] = fn2;
  tmp11 = fn2;
}) : ((guild) => {
  let Button;
  let closure_13;
  let fractionalPremiumState;
  let handleMobileWebRedirectCheckout;
  let obj5;
  let premiumGroupRole;
  let stringResult;
  let styles;
  let tmp12Result;
  let useShortenedCTA;
  guild = guild.guild;
  const previousGuildSubscriptionSlot = guild.previousGuildSubscriptionSlot;
  const analyticsSection = guild.analyticsSection;
  const onAvailableSlotPress = guild.onAvailableSlotPress;
  const intent = guild.intent;
  View = onResult;
  let tmp2 = analyticsSection;
  ({ useShortenedCTA, styles, fractionalPremiumState, premiumGroupRole } = guild);
  let tmp = previousGuildSubscriptionSlot;
  const tmp3 = previousGuildSubscriptionSlot(analyticsSection[13])();
  const boostSlots = tmp3;
  const tmp4 = guild;
  const obj = guild(analyticsSection[14]);
  navigation = obj.useNavigation();
  const analyticsLocations = previousGuildSubscriptionSlot(analyticsSection[15])().analyticsLocations;
  let obj2 = guild(analyticsSection[16]);
  let items = [boostSlots];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const keys = Object.keys(boostSlots.boostSlots);
    return keys.some((item) => {
      const tmp = null == boostSlots.boostSlots[item].premiumGuildSubscription && !boostSlots.boostSlots[item].isOnCooldown();
      return tmp;
    });
  });
  const items1 = [navigation, analyticsSection, onAvailableSlotPress, intent, guild.onResult];
  const callback = intent.useCallback((guildId, arg1) => {
    let tmp2;
    if (null != onAvailableSlotPress) {
      return tmp(guildId, arg1);
    } else {
      const obj2 = { guildId, guildBoostSlots: tmp2, location, intent, onResult: View };
      tmp2 = undefined;
      const push = navigation.push;
      const CONFIRMATION = shouldUseMobileWebRedirectCheckout.CONFIRMATION;
      if (null != arg1) {
        const items = [arg1];
        tmp2 = items;
      }
      location = { page: stateFromStores.PREMIUM_GUILD_USER_MODAL, section: analyticsSection, object: metroImportDefault.BUTTON_CTA, objectType: metroImportAll.BUY };
      push(CONFIRMATION, obj2);
    }
  }, items1);
  let tmp8 = !stateFromStores;
  const obj3 = intent;
  if (tmp8) {
    let tmp10 = fractionalPremiumState !== handleMobileWebRedirectCheckout.NONE || premiumGroupRole === tmp4(tmp2[17]).PremiumSubscriptionGroupRole.MEMBER;
    tmp8 = tmp10;
  }
  const tmp11 = tmp(tmp2[18])("guild_boost_subscribe_button");
  const shouldUseMobileWebRedirectCheckout = tmp11.shouldUseMobileWebRedirectCheckout;
  handleMobileWebRedirectCheckout = tmp11.handleMobileWebRedirectCheckout;
  const items2 = [tmp3, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout, guild.id, analyticsSection, stateFromStores, previousGuildSubscriptionSlot, analyticsLocations, callback];
  jsx = obj3.useCallback(() => {
    let tmp10;
    if (boostSlots) {
      tmp10 = authStore;
    } else if (stateFromStores) {
      tmp10 = callback(guild.id, previousGuildSubscriptionSlot);
    } else {
      if (shouldUseMobileWebRedirectCheckout) {
        if (null != guild.id) {
          tmp10 = handleMobileWebRedirectCheckout(analyticsLocations, tmp4.id);
        }
      }
      tmp10 = handleBoostPress(analyticsLocations, guild.id, analyticsSection);
    }
    return tmp10;
  }, items2);
  const obj4 = { style: styles, children: jsx(Button, obj5) };
  obj5 = {
    loading: tmp3,
    variant: "primary",
    onPress() {
      return closure_13();
    },
    disabled: tmp8,
    text: stringResult,
    icon: tmp12Result
  };
  Button = tmp4(tmp2[21]).Button;
  const intl = tmp4(tmp2[19]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[19]).t;
  const tmp13 = View;
  if (useShortenedCTA) {
    stringResult = string(t.Uj0md3);
  } else {
    stringResult = string(t.gKmQ1G);
  }
  tmp12Result = undefined;
  if (tmp8) {
    tmp12Result = tmp12(tmp4(tmp2[20]).LockIcon, { size: "xs", color: "white" });
  }
  return jsx(tmp13, obj4);
});
const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingSubscribeButton.tsx");

export default tmp3;