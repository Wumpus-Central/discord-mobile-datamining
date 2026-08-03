import getSystemLocale from "getSystemLocale";
import noop from "noop";
import { HelpdeskArticles } from "ME";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationEligibilityItems.tsx");

export default function useCreatorMonetizationEligibilityItems(arg0) {
  const _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const onEligibilityBecameStale = obj.onEligibilityBecameStale;
  const actions = obj.actions;
  const sortedByIneligible = obj.sortedByIneligible;
  let isUserMFAEnabled;
  let isModerationMFAEnabled;
  let callback;
  let enableMFAHook;
  const isMFAEnabled = _require(actions[3]).useIsMFAEnabled();
  isUserMFAEnabled = isMFAEnabled.isUserMFAEnabled;
  isModerationMFAEnabled = isMFAEnabled.isModerationMFAEnabled;
  let items = [isUserMFAEnabled, isModerationMFAEnabled, onEligibilityBecameStale, actions];
  callback = isUserMFAEnabled.useCallback(sortedByIneligible(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp4;
            if (outer1_4) {
              if (!outer1_5) {
                let result;
                if (c2 != null) {
                  const onRequireModeratorMFAClick = c2.onRequireModeratorMFAClick;
                  if (onRequireModeratorMFAClick != null) {
                    result = onRequireModeratorMFAClick();
                  }
                }
                c1 = 1;
                c2 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = result;
                return obj1;
              }
            } else {
              let onEnableMFAClickResult;
              if (c2 != null) {
                const onEnableMFAClick = c2.onEnableMFAClick;
                if (onEnableMFAClick != null) {
                  onEnableMFAClickResult = onEnableMFAClick();
                }
              }
              c1 = 2;
              c2 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = onEnableMFAClickResult;
              return obj2;
            }
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        if (c1 != null) {
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
  let obj2 = _require(actions[3]);
  enableMFAHook = _require(actions[4]).useEnableMFAHook({ onEnableMFAClick: callback });
  const items1 = [arg0, sortedByIneligible, isUserMFAEnabled, actions, isModerationMFAEnabled, enableMFAHook, callback];
  return isUserMFAEnabled.useMemo(() => {
    let minimumOwnerAgeInYears;
    let minimumSize;
    let noRecentViolations;
    if (null == callback) {
      return null;
    } else {
      ({ minimumOwnerAgeInYears, minimumSize, noRecentViolations } = tmp);
      let obj = { key: "no_violations_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null, actionLabel: null, actionHandler: null };
      const intl18 = callback(actions[5]).intl;
      obj[1] = intl18.string(callback(actions[5]).t["1lGNPZ"]);
      const intl19 = callback(actions[5]).intl;
      obj[2] = intl19.string(callback(actions[5]).t["D+gTJt"]);
      const intl20 = callback(actions[5]).intl;
      obj = { communityGuidelinesUrl: null };
      obj[0] = onEligibilityBecameStale(actions[6]).getArticleURL(isModerationMFAEnabled.PUBLIC_GUILD_GUILDLINES);
      obj[3] = intl20.format(callback(actions[5]).t.HFY0m6, obj);
      obj[4] = tmp.noRecentViolations;
      let stringResult;
      if (!noRecentViolations) {
        const intl = tmp23(tmp24[5]).intl;
        stringResult = intl.string(tmp23(tmp24[5]).t["xU2fl+"]);
      }
      obj[5] = stringResult;
      let fn;
      if (!noRecentViolations) {
        fn = () => {
          const tmp = callback(3884);
          return tmp(callback(1945).getSubmitRequestURL());
        };
      }
      obj[6] = fn;
      const items = [obj];
      if (tmp3) {
        obj = { key: "owner_age_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
        const intl2 = tmp23(tmp24[5]).intl;
        obj[1] = intl2.string(tmp23(tmp24[5]).t["+F8haD"]);
        const intl3 = tmp23(tmp24[5]).intl;
        obj[2] = intl3.string(tmp23(tmp24[5]).t["5BwC/O"]);
        const intl4 = tmp23(tmp24[5]).intl;
        const obj1 = { minimumOwnerAgeInYears: null };
        obj1[0] = minimumOwnerAgeInYears;
        obj[3] = intl4.formatToPlainString(tmp23(tmp24[5]).t.DW1Vae, obj1);
        obj[4] = tmp.meetsOwnerAgeRequirement;
        items.push(obj);
      }
      if (tmp5) {
        const obj2 = { key: "member_count_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
        const intl5 = tmp23(tmp24[5]).intl;
        obj2[1] = intl5.string(tmp23(tmp24[5]).t.j7wXWo);
        const intl6 = tmp23(tmp24[5]).intl;
        obj2[2] = intl6.string(tmp23(tmp24[5]).t.W0suNz);
        const intl7 = tmp23(tmp24[5]).intl;
        const obj3 = { minimumSize: null };
        obj3[0] = minimumSize;
        obj2[3] = intl7.formatToPlainString(tmp23(tmp24[5]).t.up53zR, obj3);
        obj2[4] = tmp.hasSufficientMembers;
        items.push(obj2);
      }
      if (tmp7) {
        const obj4 = { key: "server_age_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
        const intl8 = tmp23(tmp24[5]).intl;
        obj4[1] = intl8.string(tmp23(tmp24[5]).t.mjbvWw);
        const intl9 = tmp23(tmp24[5]).intl;
        obj4[2] = intl9.string(tmp23(tmp24[5]).t["9BV6L6"]);
        const intl10 = tmp23(tmp24[5]).intl;
        const obj5 = { minimumAge: null };
        obj5[0] = onEligibilityBecameStale(tmp24[8])(tmp.minimumAgeInDays);
        obj4[3] = intl10.formatToPlainString(tmp23(tmp24[5]).t.Zwv84O, obj5);
        obj4[4] = tmp.meetsServerAgeRequirement;
        items.push(obj4);
      }
      if (null != tmp.weeklyCommunicators) {
        const obj6 = { key: "weekly_communicator_count_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
        const intl21 = tmp23(tmp24[5]).intl;
        obj6[1] = intl21.string(tmp23(tmp24[5]).t.Qw7qv4);
        const intl22 = tmp23(tmp24[5]).intl;
        obj6[2] = intl22.string(tmp23(tmp24[5]).t.b45kGG);
        const intl23 = tmp23(tmp24[5]).intl;
        obj6[3] = intl23.string(tmp23(tmp24[5]).t.NbtjEC);
        obj6[4] = tmp.weeklyCommunicators;
        items.push(obj6);
      }
      if (null != tmp.hasMemberRetention) {
        const obj7 = { key: "member_retention_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
        const intl24 = tmp23(tmp24[5]).intl;
        obj7[1] = intl24.string(tmp23(tmp24[5]).t.Qvq39M);
        const intl25 = tmp23(tmp24[5]).intl;
        obj7[2] = intl25.string(tmp23(tmp24[5]).t.azHboI);
        const intl26 = tmp23(tmp24[5]).intl;
        obj7[3] = intl26.string(tmp23(tmp24[5]).t.u4rCYO);
        obj7[4] = tmp.hasMemberRetention;
        items.push(obj7);
      }
      const obj8 = { key: "nsfw_requirement", checkedLabel: null, uncheckedLabel: null, description: null, checked: null };
      const intl11 = tmp23(tmp24[5]).intl;
      obj8[1] = intl11.string(callback(actions[5]).t.bymfTb);
      const intl12 = tmp23(tmp24[5]).intl;
      obj8[2] = intl12.string(callback(actions[5]).t["718pRA"]);
      const intl13 = tmp23(tmp24[5]).intl;
      obj8[3] = intl13.string(callback(actions[5]).t["5ZqX+j"]);
      obj8[4] = tmp.notNSFW;
      items.push(obj8);
      if (null != tmp.hasEnabled2FA) {
        const hasEnabled2FA2 = tmp.hasEnabled2FA;
        let tmp11 = !hasEnabled2FA2;
        if (!hasEnabled2FA2) {
          tmp11 = !isUserMFAEnabled;
        }
        if (tmp11) {
          let onEnableMFAClick;
          if (actions != null) {
            onEnableMFAClick = actions.onEnableMFAClick;
          }
          tmp11 = null != onEnableMFAClick;
        }
        const hasEnabled2FA = tmp.hasEnabled2FA;
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
        const intl14 = tmp23(tmp24[5]).intl;
        obj9[1] = intl14.string(tmp23(tmp24[5]).t.NqVyFk);
        const intl15 = tmp23(tmp24[5]).intl;
        obj9[2] = intl15.string(tmp23(tmp24[5]).t.VcDNIV);
        const intl16 = tmp23(tmp24[5]).intl;
        const obj10 = { enableMFAHook: null };
        obj10[0] = enableMFAHook;
        obj9[3] = intl16.format(tmp23(tmp24[5]).t["7NzkfV"], obj10);
        obj9[4] = tmp.hasEnabled2FA;
        let stringResult1;
        if (tmp11) {
          const intl17 = tmp23(tmp24[5]).intl;
          stringResult1 = intl17.string(tmp23(tmp24[5]).t.BU4Diu);
        }
        obj9[5] = stringResult1;
        let tmp18;
        if (tmp11) {
          tmp18 = callback;
        }
        obj9[6] = tmp18;
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