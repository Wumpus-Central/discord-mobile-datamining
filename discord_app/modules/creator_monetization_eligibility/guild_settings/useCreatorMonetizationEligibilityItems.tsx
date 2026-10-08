// === Module 18217: useCreatorMonetizationEligibilityItems ===

// Module 18217 (useCreatorMonetizationEligibilityItems)
import util from "util" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import formatDurationFromDaysDefault from "formatDurationFromDays" /* 18220 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
let result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationEligibilityItems.tsx");

export default function useCreatorMonetizationEligibilityItems(arg0, arg1) {
  let weeklyCommunicators = arg0;
  if (onEnableMFAClick) {
    const tmp10 = _require;
    let BU4Diu = actions;
    const cResult = require("c").c(31);
    if (cResult[0] !== arg1) {
      let obj3 = arg1;
      if (undefined === arg1) {
        obj3 = {};
      }
      cResult[0] = arg1;
      cResult[1] = obj3;
      let tmp12 = obj3;
    } else {
      tmp12 = cResult[1];
    }
    const onEligibilityBecameStale2 = tmp12.onEligibilityBecameStale;
    closure_129_0 = onEligibilityBecameStale2;
    const actions2 = tmp12.actions;
    closure_129_1 = actions2;
    const sortedByIneligible2 = tmp12.sortedByIneligible;
    let obj4 = require("c");
    const isMFAEnabled = tmp10(BU4Diu[5]).useIsMFAEnabled();
    const isUserMFAEnabled2 = isMFAEnabled.isUserMFAEnabled;
    closure_129_2 = isUserMFAEnabled2;
    const isModerationMFAEnabled2 = isMFAEnabled.isModerationMFAEnabled;
    closure_129_3 = isModerationMFAEnabled2;
    if (cResult[2] === actions2) {
      if (cResult[3] === isModerationMFAEnabled2) {
        if (cResult[4] === isUserMFAEnabled2) {
          if (cResult[5] === onEligibilityBecameStale2) {
            let tmp14 = cResult[6];
          }
          if (cResult[7] !== tmp14) {
            let obj5 = { onEnableMFAClick: tmp14 };
            cResult[7] = tmp14;
            cResult[8] = obj5;
            let tmp16 = obj5;
          } else {
            tmp16 = cResult[8];
          }
          const enableMFAHook = tmp10(BU4Diu[6]).useEnableMFAHook(tmp16);
          let tmp18 = null;
          if (null == weeklyCommunicators) {
            let memo = null;
          } else {
            ({ minimumOwnerAgeInYears, minimumSize, noRecentViolations } = weeklyCommunicators);
            notNSFW = globalThis;
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              function handleContactSupportClick() {
                const tmp = onEligibilityBecameStale(actions[7]);
                return tmp(onEligibilityBecameStale(actions[8]).getSubmitRequestURL());
              }
              cResult[9] = handleContactSupportClick;
              let push = handleContactSupportClick;
            } else {
              push = cResult[9];
            }
            onEnableMFAClick = undefined;
            if (actions2 != tmp18) {
              onEnableMFAClick = actions2.onEnableMFAClick;
            }
            if (cResult[10] === onEnableMFAClick) {
              let prop;
              if (actions2 != tmp18) {
                prop = actions2.onRequireModeratorMFAClick;
              }
              if (cResult[11] === prop) {
                if (cResult[12] === weeklyCommunicators.hasEnabled2FA) {
                  if (cResult[13] === weeklyCommunicators.hasMemberRetention) {
                    if (cResult[14] === weeklyCommunicators.hasSufficientMembers) {
                      if (cResult[15] === weeklyCommunicators.meetsOwnerAgeRequirement) {
                        if (cResult[16] === weeklyCommunicators.meetsServerAgeRequirement) {
                          if (cResult[17] === weeklyCommunicators.minimumAgeInDays) {
                            if (cResult[18] === weeklyCommunicators.noRecentViolations) {
                              if (cResult[19] === weeklyCommunicators.notNSFW) {
                                if (cResult[20] === weeklyCommunicators.weeklyCommunicators) {
                                  if (cResult[21] === enableMFAHook) {
                                    if (cResult[22] === tmp14) {
                                      if (cResult[23] === isModerationMFAEnabled2) {
                                        if (cResult[24] === isUserMFAEnabled2) {
                                          if (cResult[25] === minimumOwnerAgeInYears) {
                                            if (cResult[26] === minimumSize) {
                                              if (cResult[27] === tmp20) {
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            let obj6 = { key: "no_violations_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null, actionLabel: null, actionHandler: null };
            let intl = tmp10(BU4Diu[9]).intl;
            obj6.checkedLabel = intl.string(tmp10(BU4Diu[9]).t["1lGNPZ"]);
            let intl2 = tmp10(BU4Diu[9]).intl;
            obj6.uncheckedLabel = intl2.string(tmp10(BU4Diu[9]).t["D+gTJt"]);
            let intl3 = tmp10(BU4Diu[9]).intl;
            let obj7 = { communityGuidelinesUrl: onEligibilityBecameStale(BU4Diu[8]).getArticleURL(isModerationMFAEnabled.PUBLIC_GUILD_GUILDLINES) };
            obj6.description = intl3.format(tmp10(BU4Diu[9]).t.HFY0m6, obj7);
            obj6.checked = weeklyCommunicators.noRecentViolations;
            let stringResult;
            if (!noRecentViolations) {
              let intl4 = tmp10(BU4Diu[9]).intl;
              stringResult = intl4.string(tmp10(BU4Diu[9]).t["xU2fl+"]);
            }
            obj6.actionLabel = stringResult;
            let tmp27;
            if (!noRecentViolations) {
              tmp27 = push;
            }
            obj6.actionHandler = tmp27;
            let items = [obj6];
            if (tmp28) {
              let obj8 = { key: "owner_age_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
              let intl5 = tmp10(BU4Diu[9]).intl;
              obj8.checkedLabel = intl5.string(tmp10(BU4Diu[9]).t["+F8haD"]);
              let intl6 = tmp10(BU4Diu[9]).intl;
              obj8.uncheckedLabel = intl6.string(tmp10(BU4Diu[9]).t["5BwC/O"]);
              let intl7 = tmp10(BU4Diu[9]).intl;
              let obj9 = { minimumOwnerAgeInYears };
              obj8.description = intl7.formatToPlainString(tmp10(BU4Diu[9]).t.DW1Vae, obj9);
              obj8.checked = weeklyCommunicators.meetsOwnerAgeRequirement;
              items.push(obj8);
            }
            if (tmp30) {
              let obj10 = { key: "member_count_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
              let intl8 = tmp10(BU4Diu[9]).intl;
              obj10.checkedLabel = intl8.string(tmp10(BU4Diu[9]).t.j7wXWo);
              let intl9 = tmp10(BU4Diu[9]).intl;
              obj10.uncheckedLabel = intl9.string(tmp10(BU4Diu[9]).t.W0suNz);
              let intl10 = tmp10(BU4Diu[9]).intl;
              const obj12 = { minimumSize };
              obj10.description = intl10.formatToPlainString(tmp10(BU4Diu[9]).t.up53zR, obj12);
              obj10.checked = weeklyCommunicators.hasSufficientMembers;
              items.push(obj10);
            }
            if (tmp32) {
              let obj13 = { key: "server_age_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
              let intl11 = tmp10(BU4Diu[9]).intl;
              obj13.checkedLabel = intl11.string(tmp10(BU4Diu[9]).t.mjbvWw);
              let intl12 = tmp10(BU4Diu[9]).intl;
              obj13.uncheckedLabel = intl12.string(tmp10(BU4Diu[9]).t["9BV6L6"]);
              let intl13 = tmp10(BU4Diu[9]).intl;
              let obj14 = { minimumAge: tmp24(BU4Diu[10])(weeklyCommunicators.minimumAgeInDays) };
              obj13.description = intl13.formatToPlainString(tmp10(BU4Diu[9]).t.Zwv84O, obj14);
              obj13.checked = weeklyCommunicators.meetsServerAgeRequirement;
              items.push(obj13);
            }
            if (tmp18 != weeklyCommunicators.weeklyCommunicators) {
              const obj15 = { key: "weekly_communicator_count_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
              let intl21 = tmp10(BU4Diu[9]).intl;
              obj15.checkedLabel = intl21.string(tmp10(BU4Diu[9]).t.Qw7qv4);
              let intl22 = tmp10(BU4Diu[9]).intl;
              obj15.uncheckedLabel = intl22.string(tmp10(BU4Diu[9]).t.b45kGG);
              let intl23 = tmp10(BU4Diu[9]).intl;
              obj15.description = intl23.string(tmp10(BU4Diu[9]).t.NbtjEC);
              obj15.checked = weeklyCommunicators.weeklyCommunicators;
              items.push(obj15);
            }
            if (tmp18 != weeklyCommunicators.hasMemberRetention) {
              const obj16 = { key: "member_retention_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
              let intl24 = tmp10(BU4Diu[9]).intl;
              obj16.checkedLabel = intl24.string(tmp10(BU4Diu[9]).t.Qvq39M);
              let intl25 = tmp10(BU4Diu[9]).intl;
              obj16.uncheckedLabel = intl25.string(tmp10(BU4Diu[9]).t.azHboI);
              let intl26 = tmp10(BU4Diu[9]).intl;
              obj16.description = intl26.string(tmp10(BU4Diu[9]).t.u4rCYO);
              obj16.checked = weeklyCommunicators.hasMemberRetention;
              items.push(obj16);
            }
            push = items.push;
            const obj17 = { key: "nsfw_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
            let intl14 = tmp10(BU4Diu[9]).intl;
            obj17.checkedLabel = intl14.string(tmp10(BU4Diu[9]).t.bymfTb);
            let intl15 = tmp10(BU4Diu[9]).intl;
            obj17.uncheckedLabel = intl15.string(tmp10(BU4Diu[9]).t["718pRA"]);
            let intl16 = tmp10(BU4Diu[9]).intl;
            obj17.description = intl16.string(tmp10(BU4Diu[9]).t["5ZqX+j"]);
            noRecentViolations = weeklyCommunicators.notNSFW;
            obj17.checked = noRecentViolations;
            push(obj17);
            if (tmp18 != weeklyCommunicators.hasEnabled2FA) {
              let hasEnabled2FA2 = weeklyCommunicators.hasEnabled2FA;
              let tmp35 = !hasEnabled2FA2;
              if (!hasEnabled2FA2) {
                tmp35 = !isUserMFAEnabled2;
              }
              if (tmp35) {
                let onEnableMFAClick1;
                if (actions2 != tmp18) {
                  onEnableMFAClick1 = actions2.onEnableMFAClick;
                }
                tmp35 = tmp18 != onEnableMFAClick1;
              }
              let hasEnabled2FA = weeklyCommunicators.hasEnabled2FA;
              let tmp37 = !hasEnabled2FA;
              if (!hasEnabled2FA) {
                tmp37 = !isModerationMFAEnabled2;
              }
              if (tmp37) {
                let prop1;
                if (actions2 != tmp18) {
                  prop1 = actions2.onRequireModeratorMFAClick;
                }
                tmp37 = tmp18 != prop1;
              }
              if (!tmp35) {
                tmp35 = tmp37;
              }
              const obj18 = { key: "2fa_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null, actionLabel: null, actionHandler: null };
              let intl17 = tmp10(BU4Diu[9]).intl;
              obj18.checkedLabel = intl17.string(tmp10(BU4Diu[9]).t.NqVyFk);
              let intl18 = tmp10(BU4Diu[9]).intl;
              obj18.uncheckedLabel = intl18.string(tmp10(BU4Diu[9]).t.VcDNIV);
              let intl19 = tmp10(BU4Diu[9]).intl;
              const obj19 = { enableMFAHook };
              obj18.description = intl19.format(tmp10(BU4Diu[9]).t["7NzkfV"], obj19);
              obj18.checked = weeklyCommunicators.hasEnabled2FA;
              let stringResult1;
              if (tmp35) {
                let intl20 = tmp10(BU4Diu[9]).intl;
                BU4Diu = tmp10(BU4Diu[9]).t.BU4Diu;
                stringResult1 = intl20.string(BU4Diu);
              }
              obj18.actionLabel = stringResult1;
              noRecentViolations = undefined;
              if (tmp35) {
                noRecentViolations = tmp14;
              }
              obj18.actionHandler = noRecentViolations;
              items.push(obj18);
            }
            if (true !== sortedByIneligible2) {
              let onEnableMFAClick2;
              if (actions2 != tmp18) {
                onEnableMFAClick2 = actions2.onEnableMFAClick;
              }
              cResult[10] = onEnableMFAClick2;
              tmp18 = actions2 == tmp18;
              let prop2;
              if (!tmp18) {
                prop2 = actions2.onRequireModeratorMFAClick;
              }
              cResult[11] = prop2;
              cResult[12] = weeklyCommunicators.hasEnabled2FA;
              cResult[13] = weeklyCommunicators.hasMemberRetention;
              cResult[14] = weeklyCommunicators.hasSufficientMembers;
              cResult[15] = weeklyCommunicators.meetsOwnerAgeRequirement;
              cResult[16] = weeklyCommunicators.meetsServerAgeRequirement;
              cResult[17] = weeklyCommunicators.minimumAgeInDays;
              ({ noRecentViolations: tmp11[18], notNSFW } = weeklyCommunicators);
              cResult[19] = notNSFW;
              weeklyCommunicators = weeklyCommunicators.weeklyCommunicators;
              cResult[20] = weeklyCommunicators;
              cResult[21] = enableMFAHook;
              cResult[22] = tmp14;
              cResult[23] = isModerationMFAEnabled2;
              cResult[24] = isUserMFAEnabled2;
              cResult[25] = minimumOwnerAgeInYears;
              cResult[26] = minimumSize;
              cResult[27] = tmp20;
              cResult[28] = sortedByIneligible2;
              cResult[29] = items;
            } else {
              const _Symbol2 = notNSFW.Symbol;
              if (cResult[30] === _Symbol2.for("react.memo_cache_sentinel")) {
                class D {
                  constructor(arg0) {
                    num = -1;
                    if (arg0.checked) {
                      num = 0;
                    }
                    return num;
                  }
                }
                cResult[30] = D;
              } else {
                class D {
                  constructor(arg0) {
                    num = -1;
                    if (arg0.checked) {
                      num = 0;
                    }
                    return num;
                  }
                }
              }
              let sorted = items.sort(D);
            }
            let obj11 = onEligibilityBecameStale(BU4Diu[8]);
            tmp24 = onEligibilityBecameStale;
            tmp28 = tmp18 != minimumOwnerAgeInYears && tmp18 != weeklyCommunicators.meetsOwnerAgeRequirement;
            tmp30 = tmp18 != minimumSize && tmp18 != weeklyCommunicators.hasSufficientMembers;
            tmp32 = tmp18 != weeklyCommunicators.minimumAgeInDays && tmp18 != weeklyCommunicators.meetsServerAgeRequirement;
          }
          const tmp10Result2 = tmp10(BU4Diu[6]);
        }
      }
    }
    _require = sortedByIneligible(function*() {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === onEligibilityBecameStale) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp4;
              if (c2) {
                if (!sortedByIneligible) {
                  let result;
                  if (onEligibilityBecameStale != null) {
                    const onRequireModeratorMFAClick = onEligibilityBecameStale.onRequireModeratorMFAClick;
                    if (onRequireModeratorMFAClick != null) {
                      result = onRequireModeratorMFAClick();
                    }
                  }
                  onEligibilityBecameStale = 1;
                  c2 = 1;
                  const obj4 = { value: result, done: false };
                  return obj4;
                }
              } else {
                let onEnableMFAClickResult;
                if (onEligibilityBecameStale != null) {
                  onEnableMFAClick = onEligibilityBecameStale.onEnableMFAClick;
                  if (onEnableMFAClick != null) {
                    onEnableMFAClickResult = onEnableMFAClick();
                  }
                }
                onEligibilityBecameStale = 2;
                c2 = 1;
                const obj5 = { value: onEnableMFAClickResult, done: false };
                return obj5;
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          }
          if (closure_0 != null) {
            tmp13();
          }
          c2 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp16) {
          c2 = tmp;
          throw tmp16;
        }
      }
    });
    function t2() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[2] = actions2;
    cResult[3] = isModerationMFAEnabled2;
    cResult[4] = isUserMFAEnabled2;
    cResult[5] = onEligibilityBecameStale2;
    cResult[6] = t2;
    tmp14 = t2;
    const tmp10Result = tmp10(BU4Diu[5]);
  } else {
    class D {
      constructor(arg0) {
        num = -1;
        if (arg0.checked) {
          num = 0;
        }
        return num;
      }
    }
    if (arg1 === undefined) {
      class D {
        constructor(arg0) {
          num = -1;
          if (arg0.checked) {
            num = 0;
          }
          return num;
        }
      }
    }
    onEligibilityBecameStale = tmp.onEligibilityBecameStale;
    actions = tmp.actions;
    sortedByIneligible = tmp.sortedByIneligible;
    const isMFAEnabled1 = require("useIsMFAEnabled").useIsMFAEnabled();
    const isUserMFAEnabled = isMFAEnabled1.isUserMFAEnabled;
    isModerationMFAEnabled = isMFAEnabled1.isModerationMFAEnabled;
    const items1 = [isUserMFAEnabled, isModerationMFAEnabled, onEligibilityBecameStale, actions];
    onEnableMFAClick = isUserMFAEnabled.useCallback(sortedByIneligible(function*() {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp4;
              if (isUserMFAEnabled) {
                if (!isModerationMFAEnabled) {
                  let result;
                  if (actions != null) {
                    const onRequireModeratorMFAClick = actions.onRequireModeratorMFAClick;
                    if (onRequireModeratorMFAClick != null) {
                      result = onRequireModeratorMFAClick();
                    }
                  }
                  c1 = 1;
                  c2 = 1;
                  const obj4 = { value: result, done: false };
                  return obj4;
                }
              } else {
                let onEnableMFAClickResult;
                if (actions != null) {
                  onEnableMFAClick = actions.onEnableMFAClick;
                  if (onEnableMFAClick != null) {
                    onEnableMFAClickResult = onEnableMFAClick();
                  }
                }
                c1 = 2;
                c2 = 1;
                const obj5 = { value: onEnableMFAClickResult, done: false };
                return obj5;
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          }
          if (closure_128_1 != null) {
            tmp13();
          }
          c2 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp16) {
          c2 = tmp;
          throw tmp16;
        }
      }
    }), items1);
    let obj = require("useIsMFAEnabled");
    const obj20 = { onEnableMFAClick };
    const enableMFAHook1 = require("useEnableMFAHook").useEnableMFAHook(obj20);
    const items2 = [weeklyCommunicators, sortedByIneligible, isUserMFAEnabled, actions, isModerationMFAEnabled, enableMFAHook1, onEnableMFAClick];
    memo = isUserMFAEnabled.useMemo(() => {
      if (null == closure_0) {
        return null;
      } else {
        ({ minimumOwnerAgeInYears, minimumSize, noRecentViolations } = closure_0);
        const obj2 = { key: "no_violations_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null, actionLabel: null, actionHandler: null };
        const intl18 = util.intl;
        obj2.checkedLabel = intl18.string(util.t["1lGNPZ"]);
        const intl19 = util.intl;
        obj2.uncheckedLabel = intl19.string(util.t["D+gTJt"]);
        const intl20 = util.intl;
        const obj3 = { communityGuidelinesUrl: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.PUBLIC_GUILD_GUILDLINES) };
        obj2.description = intl20.format(util.t.HFY0m6, obj3);
        obj2.checked = closure_0.noRecentViolations;
        let stringResult;
        if (!noRecentViolations) {
          const intl = util.intl;
          stringResult = intl.string(util.t["xU2fl+"]);
        }
        obj2.actionLabel = stringResult;
        let handleContactSupportClick;
        if (!noRecentViolations) {
          handleContactSupportClick = function handleContactSupportClick() {
            const tmp = onEligibilityBecameStale(4757);
            return tmp(onEligibilityBecameStale(2127).getSubmitRequestURL());
          };
        }
        obj2.actionHandler = handleContactSupportClick;
        const items = [obj2];
        if (tmp3) {
          const obj = { key: "owner_age_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
          const intl2 = util.intl;
          obj.checkedLabel = intl2.string(util.t["+F8haD"]);
          const intl3 = util.intl;
          obj.uncheckedLabel = intl3.string(util.t["5BwC/O"]);
          const intl4 = util.intl;
          const obj4 = { minimumOwnerAgeInYears };
          obj.description = intl4.formatToPlainString(util.t.DW1Vae, obj4);
          obj.checked = closure_0.meetsOwnerAgeRequirement;
          items.push(obj);
        }
        if (tmp5) {
          const obj5 = { key: "member_count_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
          const intl5 = util.intl;
          obj5.checkedLabel = intl5.string(util.t.j7wXWo);
          const intl6 = util.intl;
          obj5.uncheckedLabel = intl6.string(util.t.W0suNz);
          const intl7 = util.intl;
          const obj6 = { minimumSize };
          obj5.description = intl7.formatToPlainString(util.t.up53zR, obj6);
          obj5.checked = closure_0.hasSufficientMembers;
          items.push(obj5);
        }
        if (tmp7) {
          const obj7 = { key: "server_age_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
          const intl8 = util.intl;
          obj7.checkedLabel = intl8.string(util.t.mjbvWw);
          const intl9 = util.intl;
          obj7.uncheckedLabel = intl9.string(util.t["9BV6L6"]);
          const intl10 = util.intl;
          const obj8 = { minimumAge: formatDurationFromDaysDefault(closure_0.minimumAgeInDays) };
          obj7.description = intl10.formatToPlainString(util.t.Zwv84O, obj8);
          obj7.checked = closure_0.meetsServerAgeRequirement;
          items.push(obj7);
        }
        if (null != closure_0.weeklyCommunicators) {
          const obj9 = { key: "weekly_communicator_count_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
          const intl21 = util.intl;
          obj9.checkedLabel = intl21.string(util.t.Qw7qv4);
          const intl22 = util.intl;
          obj9.uncheckedLabel = intl22.string(util.t.b45kGG);
          const intl23 = util.intl;
          obj9.description = intl23.string(util.t.NbtjEC);
          obj9.checked = closure_0.weeklyCommunicators;
          items.push(obj9);
        }
        if (null != closure_0.hasMemberRetention) {
          const obj10 = { key: "member_retention_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
          const intl24 = util.intl;
          obj10.checkedLabel = intl24.string(util.t.Qvq39M);
          const intl25 = util.intl;
          obj10.uncheckedLabel = intl25.string(util.t.azHboI);
          const intl26 = util.intl;
          obj10.description = intl26.string(util.t.u4rCYO);
          obj10.checked = closure_0.hasMemberRetention;
          items.push(obj10);
        }
        const obj11 = { key: "nsfw_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
        const intl11 = util.intl;
        obj11.checkedLabel = intl11.string(util.t.bymfTb);
        const intl12 = util.intl;
        obj11.uncheckedLabel = intl12.string(util.t["718pRA"]);
        const intl13 = util.intl;
        obj11.description = intl13.string(util.t["5ZqX+j"]);
        obj11.checked = closure_0.notNSFW;
        items.push(obj11);
        if (null != closure_0.hasEnabled2FA) {
          const hasEnabled2FA2 = closure_0.hasEnabled2FA;
          let tmp11 = !hasEnabled2FA2;
          if (!hasEnabled2FA2) {
            tmp11 = !isUserMFAEnabled;
          }
          if (tmp11) {
            onEnableMFAClick = undefined;
            if (actions != null) {
              onEnableMFAClick = actions.onEnableMFAClick;
            }
            tmp11 = null != onEnableMFAClick;
          }
          const hasEnabled2FA = closure_0.hasEnabled2FA;
          let tmp13 = !hasEnabled2FA;
          if (!hasEnabled2FA) {
            tmp13 = !isModerationMFAEnabled;
          }
          if (tmp13) {
            let prop;
            if (actions != null) {
              prop = actions.onRequireModeratorMFAClick;
            }
            tmp13 = null != prop;
          }
          if (!tmp11) {
            tmp11 = tmp13;
          }
          const obj13 = { key: "2fa_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null, actionLabel: null, actionHandler: null };
          const intl14 = util.intl;
          obj13.checkedLabel = intl14.string(util.t.NqVyFk);
          const intl15 = util.intl;
          obj13.uncheckedLabel = intl15.string(util.t.VcDNIV);
          const intl16 = util.intl;
          const obj14 = { enableMFAHook: enableMFAHook1 };
          obj13.description = intl16.format(util.t["7NzkfV"], obj14);
          obj13.checked = closure_0.hasEnabled2FA;
          let stringResult1;
          if (tmp11) {
            const intl17 = util.intl;
            stringResult1 = intl17.string(util.t.BU4Diu);
          }
          obj13.actionLabel = stringResult1;
          let tmp18;
          if (tmp11) {
            tmp18 = callback;
          }
          obj13.actionHandler = tmp18;
          items.push(obj13);
        }
        if (true === sortedByIneligible) {
          const sorted = items.sort((checked) => {
            let num = -1;
            if (checked.checked) {
              num = 0;
            }
            return num;
          });
        }
        return items;
      }
    }, items2);
    let obj2 = require("useEnableMFAHook");
  }
  return memo;
};