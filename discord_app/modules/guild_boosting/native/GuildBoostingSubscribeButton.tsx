// === Module 6907: GuildBoostingSubscribeButton ===

// Module 6907 (GuildBoostingSubscribeButton)
import GuildBoostPurchasingUtils from "GuildBoostPurchasingUtils" /* 6909 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 6908 */;

require = fn;
function handleBoostPress() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _handleBoostPress() {
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
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp2;
            const obj4 = { source: null, analyticsLocations: null, guildId: null, onBack: null };
            const obj5 = { page: constants3.PREMIUM_GUILD_USER_MODAL, section, object: constants.BUTTON_CTA, objectType: constants2.BUY };
            obj4.source = obj5;
            obj4.analyticsLocations = analyticsLocations;
            obj4.guildId = guildId;
            obj4.onBack = function onBack() {
              return guildId(section[9]).pop();
            };
            c4 = 1;
            c5 = 1;
            const obj7 = { value: GuildBoostPurchasingUtils.launchGuildBoostFlowOrAlert(obj4), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_131_0(closure_131_2[10]).closeApplyBoostModal();
          c5 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp10) {
        c5 = tmp;
        throw tmp10;
      }
    }
  })();
};
let View = fn(17).View;
const Constants = fn(1085);
({ AnalyticsObjects: closure_7, AnalyticsObjectTypes: closure_8, AnalyticsPages: closure_9, NOOP: c10 } = Constants);
let closure_11 = fn(5614).PremiumGuildSubscribeModalScenes;
const FractionalPremiumStates = fn(1379).FractionalPremiumStates;
let jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingSubscribeButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(analyticsSection[12]).c(33);
  guild = guild.guild;
  const previousGuildSubscriptionSlot = guild.previousGuildSubscriptionSlot;
  ({ useShortenedCTA, styles, analyticsSection } = guild);
  const onAvailableSlotPress = guild.onAvailableSlotPress;
  const intent = guild.intent;
  View = onResult;
  ({ fractionalPremiumState, premiumGroupRole } = guild);
  const tmp5 = previousGuildSubscriptionSlot(analyticsSection[13])();
  const boostSlots = tmp5;
  let obj = guild(analyticsSection[12]);
  const tmp4 = previousGuildSubscriptionSlot;
  const navigation = guild(analyticsSection[14]).useNavigation();
  const analyticsLocations = previousGuildSubscriptionSlot(analyticsSection[15])().analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [boostSlots];
    const fn = function n() {
      const keys = Object.keys(boostSlots.boostSlots);
      return keys.some((item) => null == boostSlots.boostSlots[item].premiumGuildSubscription && !boostSlots.boostSlots[item].isOnCooldown());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let obj2 = guild(analyticsSection[14]);
  const stateFromStores = guild(analyticsSection[16]).useStateFromStores(tmp7, tmp8);
  if (cResult[2] === onAvailableSlotPress) {
    if (cResult[3] === analyticsSection) {
      if (cResult[4] === intent) {
        if (cResult[5] === navigation) {
          if (cResult[6] === onResult) {
            let tmp11 = cResult[7];
          }
          closure_10 = tmp11;
          let tmp12 = !stateFromStores;
          if (!stateFromStores) {
            tmp12 = fractionalPremiumState !== handleMobileWebRedirectCheckout.NONE || premiumGroupRole === tmp(analyticsSection[17]).PremiumSubscriptionGroupRole.MEMBER;
            const tmp14 = fractionalPremiumState !== handleMobileWebRedirectCheckout.NONE || premiumGroupRole === tmp(analyticsSection[17]).PremiumSubscriptionGroupRole.MEMBER;
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
                          if (cResult[16] === shouldUseMobileWebRedirectCheckout) {
                            let tmp16 = cResult[17];
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
                            if (useShortenedCTA) {
                              class D {
                                constructor() {
                                  return closure_13();
                                }
                              }
                              const stringResult = obj4.string(tmp(analyticsSection[19]).t);
                            } else {
                              class D {
                                constructor() {
                                  return closure_13();
                                }
                              }
                            }
                            cResult[20] = useShortenedCTA;
                            cResult[21] = stringResult;
                          } else {
                            class D {
                              constructor() {
                                return closure_13();
                              }
                            }
                            if (cResult[22] !== tmp12) {
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
                                const tmp22 = jsx(tmp(analyticsSection[20]).LockIcon, { size: "xs", color: "white" });
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
                            const obj3 = { loading: tmp5, variant: "primary", onPress: D, disabled: tmp12, text: tmp18, icon: tmp21 };
                            const tmp25 = jsx(tmp(analyticsSection[21]).Button, { loading: tmp5, variant: "primary", onPress: D, disabled: tmp12, text: tmp18, icon: tmp21 });
                            class E {
                              constructor() {
                                if (closure_6) {
                                  tmp9 = NOOP;
                                } else {
                                  tmp = closure_9;
                                  if (closure_9) {
                                    tmp12 = closure_10;
                                    tmp13 = guild;
                                    tmp14 = closure_1;
                                    tmp9 = closure_10(guild.id, closure_1);
                                  } else {
                                    tmp2 = closure_11;
                                    if (closure_11) {
                                      tmp4 = null;
                                      if (null != guild.id) {
                                        tmp10 = closure_12;
                                        tmp11 = analyticsLocations;
                                        tmp9 = closure_12(analyticsLocations, tmp3.id);
                                      }
                                    }
                                    tmp5 = handleBoostPress;
                                    tmp6 = analyticsLocations;
                                    tmp7 = guild;
                                    tmp8 = analyticsSection;
                                    tmp9 = handleBoostPress(analyticsLocations, guild.id, analyticsSection);
                                  }
                                }
                                return tmp9;
                              }
                            }
                            cResult[24] = tmp5;
                            cResult[25] = tmp12;
                            cResult[26] = D;
                            cResult[27] = tmp18;
                            cResult[28] = tmp21;
                            cResult[29] = tmp25;
                          }
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
              if (closure_6) {
                tmp9 = NOOP;
              } else {
                tmp = closure_9;
                if (closure_9) {
                  tmp12 = closure_10;
                  tmp13 = guild;
                  tmp14 = closure_1;
                  tmp9 = closure_10(guild.id, closure_1);
                } else {
                  tmp2 = closure_11;
                  if (closure_11) {
                    tmp4 = null;
                    if (null != guild.id) {
                      tmp10 = closure_12;
                      tmp11 = analyticsLocations;
                      tmp9 = closure_12(analyticsLocations, tmp3.id);
                    }
                  }
                  tmp5 = handleBoostPress;
                  tmp6 = analyticsLocations;
                  tmp7 = guild;
                  tmp8 = analyticsSection;
                  tmp9 = handleBoostPress(analyticsLocations, guild.id, analyticsSection);
                }
              }
              return tmp9;
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
    if (null != onAvailableSlotPress) {
      return tmp(guildId, arg1);
    } else {
      const obj2 = { guildId, guildBoostSlots: null, location: null, intent: null, onResult: null };
      let tmp2;
      if (null != arg1) {
        const items = [arg1];
        tmp2 = items;
      }
      obj2.guildBoostSlots = tmp2;
      const obj = { page: constants3.PREMIUM_GUILD_USER_MODAL, section: analyticsSection, object: constants.BUTTON_CTA, objectType: constants2.BUY };
      obj2.location = obj;
      obj2.intent = intent;
      obj2.onResult = onResult;
      navigation.push(shouldUseMobileWebRedirectCheckout.CONFIRMATION, obj2);
    }
  };
  cResult[2] = onAvailableSlotPress;
  cResult[3] = analyticsSection;
  cResult[4] = intent;
  cResult[5] = navigation;
  cResult[6] = guild.onResult;
  cResult[7] = fn2;
  tmp11 = fn2;
  const tmpResult = guild(analyticsSection[16]);
}) : ((guild) => {
  guild = guild.guild;
  const previousGuildSubscriptionSlot = guild.previousGuildSubscriptionSlot;
  const analyticsSection = guild.analyticsSection;
  const onAvailableSlotPress = guild.onAvailableSlotPress;
  const intent = guild.intent;
  View = onResult;
  ({ useShortenedCTA, styles, fractionalPremiumState, premiumGroupRole } = guild);
  const tmp3 = previousGuildSubscriptionSlot(analyticsSection[13])();
  const boostSlots = tmp3;
  const navigation = guild(analyticsSection[14]).useNavigation();
  const analyticsLocations = previousGuildSubscriptionSlot(analyticsSection[15])().analyticsLocations;
  let obj = guild(analyticsSection[14]);
  const tmp = previousGuildSubscriptionSlot;
  let items = [boostSlots];
  const stateFromStores = guild(analyticsSection[16]).useStateFromStores(items, () => {
    const keys = Object.keys(boostSlots.boostSlots);
    return keys.some((item) => null == boostSlots.boostSlots[item].premiumGuildSubscription && !boostSlots.boostSlots[item].isOnCooldown());
  });
  const items1 = [navigation, analyticsSection, onAvailableSlotPress, intent, guild.onResult];
  const callback = intent.useCallback((guildId, arg1) => {
    if (null != onAvailableSlotPress) {
      return tmp(guildId, arg1);
    } else {
      const obj2 = { guildId, guildBoostSlots: null, location: null, intent: null, onResult: null };
      let tmp2;
      if (null != arg1) {
        const items = [arg1];
        tmp2 = items;
      }
      obj2.guildBoostSlots = tmp2;
      const obj = { page: constants3.PREMIUM_GUILD_USER_MODAL, section: analyticsSection, object: constants.BUTTON_CTA, objectType: constants2.BUY };
      obj2.location = obj;
      obj2.intent = intent;
      obj2.onResult = onResult;
      navigation.push(shouldUseMobileWebRedirectCheckout.CONFIRMATION, obj2);
    }
  }, items1);
  let tmp8 = !stateFromStores;
  if (!stateFromStores) {
    tmp8 = fractionalPremiumState !== handleMobileWebRedirectCheckout.NONE || premiumGroupRole === tmp4(tmp2[17]).PremiumSubscriptionGroupRole.MEMBER;
    const tmp10 = fractionalPremiumState !== handleMobileWebRedirectCheckout.NONE || premiumGroupRole === tmp4(tmp2[17]).PremiumSubscriptionGroupRole.MEMBER;
  }
  const tmp11 = tmp(analyticsSection[18])("guild_boost_subscribe_button");
  const shouldUseMobileWebRedirectCheckout = tmp11.shouldUseMobileWebRedirectCheckout;
  handleMobileWebRedirectCheckout = tmp11.handleMobileWebRedirectCheckout;
  const items2 = [tmp3, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout, guild.id, analyticsSection, stateFromStores, previousGuildSubscriptionSlot, analyticsLocations, callback];
  jsx = intent.useCallback(() => {
    if (closure_6) {
      let tmp9 = v65535;
    } else if (stateFromStores) {
      tmp9 = callback(guild.id, previousGuildSubscriptionSlot);
    } else {
      if (shouldUseMobileWebRedirectCheckout) {
        if (null != guild.id) {
          tmp9 = handleMobileWebRedirectCheckout(analyticsLocations, tmp3.id);
        }
      }
      tmp9 = handleBoostPress(analyticsLocations, guild.id, analyticsSection);
    }
    return tmp9;
  }, items2);
  const obj4 = { style: styles, children: null };
  const obj5 = {
    loading: tmp3,
    variant: "primary",
    onPress() {
      return closure_13();
    },
    disabled: tmp8,
    text: null,
    icon: null
  };
  const intl = tmp4(tmp2[19]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[19]).t;
  if (useShortenedCTA) {
    let stringResult = string(t.Uj0md3);
  } else {
    stringResult = string(t.gKmQ1G);
  }
  obj5.text = stringResult;
  let tmp12Result;
  if (tmp8) {
    tmp12Result = tmp12(tmp4(tmp2[20]).LockIcon, { size: "xs", color: "white" });
  }
  obj5.icon = tmp12Result;
  obj4.children = jsx(guild(analyticsSection[21]).Button, obj5);
  return jsx(View, obj4);
});