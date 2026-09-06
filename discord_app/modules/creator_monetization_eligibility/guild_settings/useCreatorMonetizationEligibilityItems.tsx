// === Module 17687: useCreatorMonetizationEligibilityItems ===

// Module 17687 (useCreatorMonetizationEligibilityItems)
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import formatDurationFromDaysDefault from "formatDurationFromDays" /* 17690 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const size = fn(2);
let result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationEligibilityItems.tsx");

export default function useCreatorMonetizationEligibilityItems(arg0) {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const onEligibilityBecameStale = obj.onEligibilityBecameStale;
  const actions = obj.actions;
  const sortedByIneligible = obj.sortedByIneligible;
  const isMFAEnabled = require("useIsMFAEnabled").useIsMFAEnabled();
  const isUserMFAEnabled = isMFAEnabled.isUserMFAEnabled;
  const isModerationMFAEnabled = isMFAEnabled.isModerationMFAEnabled;
  let items = [isUserMFAEnabled, isModerationMFAEnabled, onEligibilityBecameStale, actions];
  let onEnableMFAClick = isUserMFAEnabled.useCallback(sortedByIneligible(function*() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
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
                const obj1 = { value: result, done: false };
                return obj1;
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
              const obj2 = { value: onEnableMFAClickResult, done: false };
              return obj2;
            }
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        }
        if (closure_128_1 != null) {
          tmp13();
        }
        c2 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp16) {
        c2 = tmp;
        throw tmp16;
      }
    }
  }), items);
  let obj2 = require("useIsMFAEnabled");
  const enableMFAHook = require("useEnableMFAHook").useEnableMFAHook({ onEnableMFAClick });
  const items1 = [arg0, sortedByIneligible, isUserMFAEnabled, actions, isModerationMFAEnabled, enableMFAHook, onEnableMFAClick];
  return isUserMFAEnabled.useMemo(() => {
    if (null == closure_0) {
      return null;
    } else {
      ({ minimumOwnerAgeInYears, minimumSize, noRecentViolations } = closure_0);
      let obj = { key: "no_violations_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null, actionLabel: null, actionHandler: null };
      const intl18 = util.intl;
      obj.checkedLabel = intl18.string(util.t["1lGNPZ"]);
      const intl19 = util.intl;
      obj.uncheckedLabel = intl19.string(util.t["D+gTJt"]);
      const intl20 = util.intl;
      obj = { communityGuidelinesUrl: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.PUBLIC_GUILD_GUILDLINES) };
      obj.description = intl20.format(util.t.HFY0m6, obj);
      obj.checked = closure_0.noRecentViolations;
      let stringResult;
      if (!noRecentViolations) {
        const intl = util.intl;
        stringResult = intl.string(util.t["xU2fl+"]);
      }
      obj.actionLabel = stringResult;
      let fn;
      if (!noRecentViolations) {
        fn = () => {
          const tmp = onEligibilityBecameStale(4249);
          return tmp(onEligibilityBecameStale(2024).getSubmitRequestURL());
        };
      }
      obj.actionHandler = fn;
      const items = [obj];
      if (tmp3) {
        obj = { key: "owner_age_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
        const intl2 = util.intl;
        obj.checkedLabel = intl2.string(util.t["+F8haD"]);
        const intl3 = util.intl;
        obj.uncheckedLabel = intl3.string(util.t["5BwC/O"]);
        const intl4 = util.intl;
        const obj1 = { minimumOwnerAgeInYears };
        obj.description = intl4.formatToPlainString(util.t.DW1Vae, obj1);
        obj.checked = closure_0.meetsOwnerAgeRequirement;
        items.push(obj);
      }
      if (tmp5) {
        const obj2 = { key: "member_count_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
        const intl5 = util.intl;
        obj2.checkedLabel = intl5.string(util.t.j7wXWo);
        const intl6 = util.intl;
        obj2.uncheckedLabel = intl6.string(util.t.W0suNz);
        const intl7 = util.intl;
        const obj3 = { minimumSize };
        obj2.description = intl7.formatToPlainString(util.t.up53zR, obj3);
        obj2.checked = closure_0.hasSufficientMembers;
        items.push(obj2);
      }
      if (tmp7) {
        const obj4 = { key: "server_age_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
        const intl8 = util.intl;
        obj4.checkedLabel = intl8.string(util.t.mjbvWw);
        const intl9 = util.intl;
        obj4.uncheckedLabel = intl9.string(util.t["9BV6L6"]);
        const intl10 = util.intl;
        const obj5 = { minimumAge: formatDurationFromDaysDefault(closure_0.minimumAgeInDays) };
        obj4.description = intl10.formatToPlainString(util.t.Zwv84O, obj5);
        obj4.checked = closure_0.meetsServerAgeRequirement;
        items.push(obj4);
      }
      if (null != closure_0.weeklyCommunicators) {
        const obj6 = { key: "weekly_communicator_count_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
        const intl21 = util.intl;
        obj6.checkedLabel = intl21.string(util.t.Qw7qv4);
        const intl22 = util.intl;
        obj6.uncheckedLabel = intl22.string(util.t.b45kGG);
        const intl23 = util.intl;
        obj6.description = intl23.string(util.t.NbtjEC);
        obj6.checked = closure_0.weeklyCommunicators;
        items.push(obj6);
      }
      if (null != closure_0.hasMemberRetention) {
        const obj7 = { key: "member_retention_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
        const intl24 = util.intl;
        obj7.checkedLabel = intl24.string(util.t.Qvq39M);
        const intl25 = util.intl;
        obj7.uncheckedLabel = intl25.string(util.t.azHboI);
        const intl26 = util.intl;
        obj7.description = intl26.string(util.t.u4rCYO);
        obj7.checked = closure_0.hasMemberRetention;
        items.push(obj7);
      }
      const obj8 = { key: "nsfw_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
      const intl11 = util.intl;
      obj8.checkedLabel = intl11.string(util.t.bymfTb);
      const intl12 = util.intl;
      obj8.uncheckedLabel = intl12.string(util.t["718pRA"]);
      const intl13 = util.intl;
      obj8.description = intl13.string(util.t["5ZqX+j"]);
      obj8.checked = closure_0.notNSFW;
      items.push(obj8);
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
        const obj9 = { key: "2fa_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null, actionLabel: null, actionHandler: null };
        const intl14 = util.intl;
        obj9.checkedLabel = intl14.string(util.t.NqVyFk);
        const intl15 = util.intl;
        obj9.uncheckedLabel = intl15.string(util.t.VcDNIV);
        const intl16 = util.intl;
        const obj10 = { enableMFAHook };
        obj9.description = intl16.format(util.t["7NzkfV"], obj10);
        obj9.checked = closure_0.hasEnabled2FA;
        let stringResult1;
        if (tmp11) {
          const intl17 = util.intl;
          stringResult1 = intl17.string(util.t.BU4Diu);
        }
        obj9.actionLabel = stringResult1;
        let tmp18;
        if (tmp11) {
          tmp18 = callback;
        }
        obj9.actionHandler = tmp18;
        items.push(obj9);
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
  }, items1);
};