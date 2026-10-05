// === Module 17884: useCreatorMonetizationEligibilityItems ===

// Module 17884 (useCreatorMonetizationEligibilityItems)
import Constants from "Constants" /* 1085 */;
import intl27 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import formatDurationFromDaysDefault from "formatDurationFromDays" /* 17887 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2;

const HelpdeskArticles = Constants.HelpdeskArticles;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled();
let result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationEligibilityItems.tsx");

export default function useCreatorMonetizationEligibilityItems(hasEnabled2FA, arg1) {
  let HFY0m6;
  let Zwv84O;
  let actions;
  let format;
  let formatToPlainString;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl21;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl26;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isModerationMFAEnabled;
  let memo;
  let minimumOwnerAgeInYears;
  let minimumSize;
  let noRecentViolations;
  let obj11;
  let obj12;
  let obj14;
  let obj19;
  let obj7;
  let obj9;
  let onEligibilityBecameStale;
  let onEnableMFAClick;
  let sortedByIneligible;
  let stringResult;
  let stringResult1;
  let tmp32;
  let tmp45;
  let tmp = onEnableMFAClick;
  if (tmp) {
    let tmp14;
    const tmp12 = actions;
    let obj4 = require("react");
    let num = 31;
    const cResult = obj4.c(31);
    if (cResult[0] !== arg1) {
      let obj3 = arg1;
      if (undefined === arg1) {
        obj3 = {};
      }
      cResult[0] = arg1;
      cResult[1] = obj3;
      tmp14 = obj3;
    } else {
      tmp14 = cResult[1];
    }
    const onEligibilityBecameStale2 = tmp14.onEligibilityBecameStale;
    const actions2 = tmp14.actions;
    const sortedByIneligible2 = tmp14.sortedByIneligible;
    const tmp11Result = require("useIsMFAEnabled");
    const isMFAEnabled = tmp11Result.useIsMFAEnabled();
    const isUserMFAEnabled2 = isMFAEnabled.isUserMFAEnabled;
    const isModerationMFAEnabled2 = isMFAEnabled.isModerationMFAEnabled;
    if (cResult[2] === actions2) {
      if (cResult[3] === isModerationMFAEnabled2) {
        if (cResult[4] === isUserMFAEnabled2) {
          let tmp16;
          let tmp18;
          if (cResult[5] === onEligibilityBecameStale2) {
            tmp16 = cResult[6];
          }
          if (cResult[7] !== tmp16) {
            let obj5 = { onEnableMFAClick: tmp16 };
            cResult[7] = tmp16;
            cResult[8] = obj5;
            tmp18 = obj5;
          } else {
            tmp18 = cResult[8];
          }
          const tmp11Result2 = require("useEnableMFAHook");
          const enableMFAHook = tmp11Result2.useEnableMFAHook(tmp18);
          let tmp21 = null;
          if (null != hasEnabled2FA) {
            let tmp24;
            ({ minimumOwnerAgeInYears, minimumSize, noRecentViolations } = hasEnabled2FA);
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const fn2 = function q() {
                const tmp = onEligibilityBecameStale(actions[7]);
                const obj = onEligibilityBecameStale(actions[8]);
                return tmp(obj.getSubmitRequestURL());
              };
              cResult[9] = fn2;
              tmp24 = fn2;
            } else {
              tmp24 = cResult[9];
            }
            onEnableMFAClick = undefined;
            const tmp25 = cResult[10];
            if (actions2 != null) {
              onEnableMFAClick = actions2.onEnableMFAClick;
            }
            if (tmp25 === onEnableMFAClick) {
              let prop;
              const tmp51 = cResult[11];
              if (actions2 != null) {
                prop = actions2.onRequireModeratorMFAClick;
              }
              if (tmp51 === prop) {
                if (cResult[12] === hasEnabled2FA.hasEnabled2FA) {
                  if (cResult[13] === hasEnabled2FA.hasMemberRetention) {
                    if (cResult[14] === hasEnabled2FA.hasSufficientMembers) {
                      if (cResult[15] === hasEnabled2FA.meetsOwnerAgeRequirement) {
                        if (cResult[16] === hasEnabled2FA.meetsServerAgeRequirement) {
                          if (cResult[17] === hasEnabled2FA.minimumAgeInDays) {
                            if (cResult[18] === hasEnabled2FA.noRecentViolations) {
                              if (cResult[19] === hasEnabled2FA.notNSFW) {
                                if (cResult[20] === hasEnabled2FA.weeklyCommunicators) {
                                  if (cResult[21] === enableMFAHook) {
                                    if (cResult[22] === tmp16) {
                                      if (cResult[23] === isModerationMFAEnabled2) {
                                        if (cResult[24] === isUserMFAEnabled2) {
                                          if (cResult[25] === minimumOwnerAgeInYears) {
                                            if (cResult[26] === minimumSize) {
                                              if (cResult[27] === !noRecentViolations) {
                                                let tmp28;
                                                if (cResult[28] === sortedByIneligible2) {
                                                  tmp28 = cResult[29];
                                                }
                                                tmp21 = tmp28;
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
            let obj6 = { key: "no_violations_requirement", checkedLabel: intl.string(require("intl").t["1lGNPZ"]), uncheckedLabel: intl2.string(require("intl").t["D+gTJt"]), description: format(HFY0m6, obj7), checked: hasEnabled2FA.noRecentViolations, actionLabel: stringResult, actionHandler: tmp32 };
            intl = require("intl").intl;
            intl2 = require("intl").intl;
            let intl3 = require("intl").intl;
            format = intl3.format;
            obj7 = { communityGuidelinesUrl: obj11.getArticleURL(isModerationMFAEnabled.PUBLIC_GUILD_GUILDLINES) };
            HFY0m6 = require("intl").t.HFY0m6;
            obj11 = onEligibilityBecameStale(tmp12[8]);
            stringResult = undefined;
            const tmp29 = onEligibilityBecameStale;
            if (!noRecentViolations) {
              let intl4 = require("intl").intl;
              stringResult = intl4.string(require("intl").t["xU2fl+"]);
            }
            tmp32 = undefined;
            if (!noRecentViolations) {
              tmp32 = tmp24;
            }
            let items = [obj6];
            const tmp33 = null != minimumOwnerAgeInYears && null != hasEnabled2FA.meetsOwnerAgeRequirement;
            if (tmp33) {
              let obj8 = { key: "owner_age_requirement", checkedLabel: intl5.string(require("intl").t["+F8haD"]), uncheckedLabel: intl6.string(require("intl").t["5BwC/O"]), description: intl7.formatToPlainString(require("intl").t.DW1Vae, obj9), checked: hasEnabled2FA.meetsOwnerAgeRequirement };
              let push = items.push;
              intl5 = require("intl").intl;
              intl6 = require("intl").intl;
              intl7 = require("intl").intl;
              obj9 = { minimumOwnerAgeInYears };
              push(obj8);
            }
            const tmp35 = null != minimumSize && null != hasEnabled2FA.hasSufficientMembers;
            if (tmp35) {
              let obj10 = { key: "member_count_requirement", checkedLabel: intl8.string(require("intl").t.j7wXWo), uncheckedLabel: intl9.string(require("intl").t.W0suNz), description: intl10.formatToPlainString(require("intl").t.up53zR, obj12), checked: hasEnabled2FA.hasSufficientMembers };
              let push2 = items.push;
              intl8 = require("intl").intl;
              intl9 = require("intl").intl;
              intl10 = require("intl").intl;
              obj12 = { minimumSize };
              push2(obj10);
            }
            const tmp37 = null != hasEnabled2FA.minimumAgeInDays && null != hasEnabled2FA.meetsServerAgeRequirement;
            if (tmp37) {
              let obj13 = { key: "server_age_requirement", checkedLabel: intl11.string(require("intl").t.mjbvWw), uncheckedLabel: intl12.string(require("intl").t["9BV6L6"]), description: formatToPlainString(Zwv84O, obj14), checked: hasEnabled2FA.meetsServerAgeRequirement };
              let push3 = items.push;
              intl11 = require("intl").intl;
              intl12 = require("intl").intl;
              let intl13 = require("intl").intl;
              formatToPlainString = intl13.formatToPlainString;
              obj14 = { minimumAge: tmp29(tmp12[10])(hasEnabled2FA.minimumAgeInDays) };
              Zwv84O = require("intl").t.Zwv84O;
              push3(obj13);
            }
            if (null != hasEnabled2FA.weeklyCommunicators) {
              let push6 = items.push;
              const obj15 = { key: "weekly_communicator_count_requirement", checkedLabel: intl21.string(require("intl").t.Qw7qv4), uncheckedLabel: intl22.string(require("intl").t.b45kGG), description: intl23.string(require("intl").t.NbtjEC), checked: hasEnabled2FA.weeklyCommunicators };
              intl21 = require("intl").intl;
              intl22 = require("intl").intl;
              intl23 = require("intl").intl;
              push6(obj15);
            }
            if (null != hasEnabled2FA.hasMemberRetention) {
              let push7 = items.push;
              const obj16 = { key: "member_retention_requirement", checkedLabel: intl24.string(require("intl").t.Qvq39M), uncheckedLabel: intl25.string(require("intl").t.azHboI), description: intl26.string(require("intl").t.u4rCYO), checked: hasEnabled2FA.hasMemberRetention };
              intl24 = require("intl").intl;
              intl25 = require("intl").intl;
              intl26 = require("intl").intl;
              push7(obj16);
            }
            let push4 = items.push;
            const obj17 = { key: "nsfw_requirement", checkedLabel: intl14.string(require("intl").t.bymfTb), uncheckedLabel: intl15.string(require("intl").t["718pRA"]), description: intl16.string(require("intl").t["5ZqX+j"]), checked: hasEnabled2FA.notNSFW };
            intl14 = require("intl").intl;
            intl15 = require("intl").intl;
            intl16 = require("intl").intl;
            push4(obj17);
            if (null != hasEnabled2FA.hasEnabled2FA) {
              let tmp40 = !hasEnabled2FA.hasEnabled2FA && !isUserMFAEnabled2;
              if (tmp40) {
                let onEnableMFAClick1;
                if (actions2 != null) {
                  onEnableMFAClick1 = actions2.onEnableMFAClick;
                }
                tmp40 = null != onEnableMFAClick1;
              }
              let tmp42 = !hasEnabled2FA.hasEnabled2FA && !isModerationMFAEnabled2;
              if (tmp42) {
                let prop1;
                if (actions2 != null) {
                  prop1 = actions2.onRequireModeratorMFAClick;
                }
                tmp42 = null != prop1;
              }
              if (!tmp40) {
                tmp40 = tmp42;
              }
              let push5 = items.push;
              const obj18 = { key: "2fa_requirement", checkedLabel: intl17.string(require("intl").t.NqVyFk), uncheckedLabel: intl18.string(require("intl").t.VcDNIV), description: intl19.format(require("intl").t["7NzkfV"], obj19), checked: hasEnabled2FA.hasEnabled2FA, actionLabel: stringResult1, actionHandler: tmp45 };
              intl17 = require("intl").intl;
              intl18 = require("intl").intl;
              intl19 = require("intl").intl;
              stringResult1 = undefined;
              obj19 = { enableMFAHook };
              if (tmp40) {
                let intl20 = require("intl").intl;
                stringResult1 = intl20.string(require("intl").t.BU4Diu);
              }
              tmp45 = undefined;
              if (tmp40) {
                tmp45 = tmp16;
              }
              push5(obj18);
            }
            if (true === sortedByIneligible2) {
              const _Symbol2 = Symbol;
              if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                class D {
                  constructor(checked) {
                    let num = -1;
                    if (checked.checked) {
                      num = 0;
                    }
                    return num;
                  }
                }
                cResult[30] = D;
              } else {
                class D {
                  constructor(checked) {
                    let num = -1;
                    if (checked.checked) {
                      num = 0;
                    }
                    return num;
                  }
                }
              }
              let sorted = items.sort(D);
            }
            if (actions2 != null) {
              class D {
                constructor(checked) {
                  let num = -1;
                  if (checked.checked) {
                    num = 0;
                  }
                  return num;
                }
              }
            }
            cResult[10] = undefined;
            if (actions2 != null) {
              class D {
                constructor(checked) {
                  let num = -1;
                  if (checked.checked) {
                    num = 0;
                  }
                  return num;
                }
              }
            }
            cResult[11] = undefined;
            cResult[12] = hasEnabled2FA.hasEnabled2FA;
            cResult[13] = hasEnabled2FA.hasMemberRetention;
            cResult[14] = hasEnabled2FA.hasSufficientMembers;
            cResult[15] = hasEnabled2FA.meetsOwnerAgeRequirement;
            cResult[16] = hasEnabled2FA.meetsServerAgeRequirement;
            cResult[17] = hasEnabled2FA.minimumAgeInDays;
            cResult[18] = hasEnabled2FA.noRecentViolations;
            cResult[19] = hasEnabled2FA.notNSFW;
            cResult[20] = hasEnabled2FA.weeklyCommunicators;
            cResult[21] = enableMFAHook;
            cResult[22] = tmp16;
            cResult[23] = isModerationMFAEnabled2;
            cResult[24] = isUserMFAEnabled2;
            cResult[25] = minimumOwnerAgeInYears;
            cResult[26] = minimumSize;
            cResult[27] = !noRecentViolations;
            cResult[28] = sortedByIneligible2;
            cResult[29] = items;
            tmp28 = items;
          }
          memo = tmp21;
        }
      }
    }
    let closure_0 = sortedByIneligible(function*() {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
              closure_0 = tmp3;
              const tmp19 = c2;
              if (tmp19) {
                if (!sortedByIneligible) {
                  let result;
                  const tmp8 = c1;
                  if (c1 != null) {
                    const onRequireModeratorMFAClick = tmp8.onRequireModeratorMFAClick;
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
                const tmp4 = c1;
                if (c1 != null) {
                  onEnableMFAClick = tmp4.onEnableMFAClick;
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
          } else if (1 === c1) {
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
            tmp12();
          }
          c2 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          c2 = 3;
          throw tmp15;
        }
      }
    });
    let fn = function() {
      return closure_0(...arguments);
    };
    cResult[2] = actions2;
    cResult[3] = isModerationMFAEnabled2;
    cResult[4] = isUserMFAEnabled2;
    cResult[5] = onEligibilityBecameStale2;
    cResult[6] = fn;
    tmp16 = fn;
  } else {
    class D {
      constructor(checked) {
        let num = -1;
        if (checked.checked) {
          num = 0;
        }
        return num;
      }
    }
    const tmp2 = arg1;
    if (arg1 === undefined) {
      class D {
        constructor(checked) {
          let num = -1;
          if (checked.checked) {
            num = 0;
          }
          return num;
        }
      }
    }
    onEligibilityBecameStale = tmp2.onEligibilityBecameStale;
    actions = tmp2.actions;
    sortedByIneligible = tmp2.sortedByIneligible;
    let tmp4 = actions;
    let obj = require("useIsMFAEnabled");
    const isMFAEnabled1 = obj.useIsMFAEnabled();
    const isUserMFAEnabled = isMFAEnabled1.isUserMFAEnabled;
    isModerationMFAEnabled = isMFAEnabled1.isModerationMFAEnabled;
    let tmp7 = sortedByIneligible;
    const items1 = [isUserMFAEnabled, isModerationMFAEnabled, onEligibilityBecameStale, actions];
    onEnableMFAClick = isUserMFAEnabled.useCallback(sortedByIneligible(function*() {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
              let closure_0 = tmp3;
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
          } else if (1 === c1) {
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
            tmp12();
          }
          c2 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          c2 = 3;
          throw tmp15;
        }
      }
    }), items1);
    let obj2 = require("useEnableMFAHook");
    const obj20 = { onEnableMFAClick };
    const enableMFAHook1 = obj2.useEnableMFAHook(obj20);
    const items2 = [hasEnabled2FA, sortedByIneligible, isUserMFAEnabled, actions, isModerationMFAEnabled, enableMFAHook1, onEnableMFAClick];
    memo = isUserMFAEnabled.useMemo(() => {
      let HFY0m6;
      let Zwv84O;
      let fn;
      let format;
      let formatToPlainString;
      let intl11;
      let intl12;
      let intl13;
      let intl14;
      let intl15;
      let intl16;
      let intl18;
      let intl19;
      let intl2;
      let intl21;
      let intl22;
      let intl23;
      let intl24;
      let intl25;
      let intl26;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let intl9;
      let minimumOwnerAgeInYears;
      let minimumSize;
      let noRecentViolations;
      let obj12;
      let obj14;
      let obj3;
      let obj4;
      let obj6;
      let obj8;
      let stringResult;
      let stringResult1;
      let tmp18;
      if (null == closure_1_0) {
        return null;
      } else {
        ({ minimumOwnerAgeInYears, minimumSize, noRecentViolations } = closure_1_0);
        const obj2 = { key: "no_violations_requirement", checkedLabel: intl18.string(intl27.t["1lGNPZ"]), uncheckedLabel: intl19.string(intl27.t["D+gTJt"]), description: format(HFY0m6, obj3), checked: closure_1_0.noRecentViolations, actionLabel: stringResult, actionHandler: fn };
        intl18 = intl27.intl;
        intl19 = intl27.intl;
        const intl20 = intl27.intl;
        format = intl20.format;
        obj3 = { communityGuidelinesUrl: obj12.getArticleURL(HelpdeskArticles.PUBLIC_GUILD_GUILDLINES) };
        HFY0m6 = intl27.t.HFY0m6;
        stringResult = undefined;
        obj12 = HelpdeskUtilsDefault;
        if (!noRecentViolations) {
          const intl = intl27.intl;
          stringResult = intl.string(intl27.t["xU2fl+"]);
        }
        fn = undefined;
        if (!noRecentViolations) {
          fn = () => {
            const tmp = onEligibilityBecameStale(actions[7]);
            const obj = onEligibilityBecameStale(actions[8]);
            return tmp(obj.getSubmitRequestURL());
          };
        }
        const items = [obj2];
        const tmp3 = null != minimumOwnerAgeInYears && null != closure_1_0.meetsOwnerAgeRequirement;
        if (tmp3) {
          let obj = { key: "owner_age_requirement", checkedLabel: intl2.string(intl27.t["+F8haD"]), uncheckedLabel: intl3.string(intl27.t["5BwC/O"]), description: intl4.formatToPlainString(intl27.t.DW1Vae, obj4), checked: closure_1_0.meetsOwnerAgeRequirement };
          const push = items.push;
          intl2 = intl27.intl;
          intl3 = intl27.intl;
          intl4 = intl27.intl;
          obj4 = { minimumOwnerAgeInYears };
          push(obj);
        }
        const tmp5 = null != minimumSize && null != closure_1_0.hasSufficientMembers;
        if (tmp5) {
          const push2 = items.push;
          const obj5 = { key: "member_count_requirement", checkedLabel: intl5.string(intl27.t.j7wXWo), uncheckedLabel: intl6.string(intl27.t.W0suNz), description: intl7.formatToPlainString(intl27.t.up53zR, obj6), checked: closure_1_0.hasSufficientMembers };
          intl5 = intl27.intl;
          intl6 = intl27.intl;
          intl7 = intl27.intl;
          obj6 = { minimumSize };
          push2(obj5);
        }
        const tmp7 = null != closure_1_0.minimumAgeInDays && null != closure_1_0.meetsServerAgeRequirement;
        if (tmp7) {
          const push3 = items.push;
          const obj7 = { key: "server_age_requirement", checkedLabel: intl8.string(intl27.t.mjbvWw), uncheckedLabel: intl9.string(intl27.t["9BV6L6"]), description: formatToPlainString(Zwv84O, obj8), checked: closure_1_0.meetsServerAgeRequirement };
          intl8 = intl27.intl;
          intl9 = intl27.intl;
          const intl10 = intl27.intl;
          formatToPlainString = intl10.formatToPlainString;
          obj8 = { minimumAge: formatDurationFromDaysDefault(closure_1_0.minimumAgeInDays) };
          Zwv84O = intl27.t.Zwv84O;
          push3(obj7);
        }
        if (null != closure_1_0.weeklyCommunicators) {
          const push6 = items.push;
          const obj9 = { key: "weekly_communicator_count_requirement", checkedLabel: intl21.string(intl27.t.Qw7qv4), uncheckedLabel: intl22.string(intl27.t.b45kGG), description: intl23.string(intl27.t.NbtjEC), checked: closure_1_0.weeklyCommunicators };
          intl21 = intl27.intl;
          intl22 = intl27.intl;
          intl23 = intl27.intl;
          push6(obj9);
        }
        if (null != closure_1_0.hasMemberRetention) {
          const push7 = items.push;
          const obj10 = { key: "member_retention_requirement", checkedLabel: intl24.string(intl27.t.Qvq39M), uncheckedLabel: intl25.string(intl27.t.azHboI), description: intl26.string(intl27.t.u4rCYO), checked: closure_1_0.hasMemberRetention };
          intl24 = intl27.intl;
          intl25 = intl27.intl;
          intl26 = intl27.intl;
          push7(obj10);
        }
        const push4 = items.push;
        const obj11 = { key: "nsfw_requirement", checkedLabel: intl11.string(intl27.t.bymfTb), uncheckedLabel: intl12.string(intl27.t["718pRA"]), description: intl13.string(intl27.t["5ZqX+j"]), checked: closure_1_0.notNSFW };
        intl11 = intl27.intl;
        intl12 = intl27.intl;
        intl13 = intl27.intl;
        push4(obj11);
        if (null != closure_1_0.hasEnabled2FA) {
          let tmp11 = !closure_1_0.hasEnabled2FA && !isUserMFAEnabled;
          if (tmp11) {
            onEnableMFAClick = undefined;
            if (actions != null) {
              onEnableMFAClick = actions.onEnableMFAClick;
            }
            tmp11 = null != onEnableMFAClick;
          }
          let tmp13 = !closure_1_0.hasEnabled2FA && !isModerationMFAEnabled;
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
          const push5 = items.push;
          const obj13 = { key: "2fa_requirement", checkedLabel: intl14.string(intl27.t.NqVyFk), uncheckedLabel: intl15.string(intl27.t.VcDNIV), description: intl16.format(intl27.t["7NzkfV"], obj14), checked: closure_1_0.hasEnabled2FA, actionLabel: stringResult1, actionHandler: tmp18 };
          intl14 = intl27.intl;
          intl15 = intl27.intl;
          intl16 = intl27.intl;
          stringResult1 = undefined;
          obj14 = { enableMFAHook: enableMFAHook1 };
          if (tmp11) {
            const intl17 = intl27.intl;
            stringResult1 = intl17.string(intl27.t.BU4Diu);
          }
          tmp18 = undefined;
          if (tmp11) {
            tmp18 = callback;
          }
          push5(obj13);
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
  }
  return memo;
};