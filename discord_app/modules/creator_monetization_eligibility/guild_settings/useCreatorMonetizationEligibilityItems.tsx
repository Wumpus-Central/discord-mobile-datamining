// discord_app/modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationEligibilityItems.tsx
import util from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import formatDurationFromDaysDefault from "../../guild_role_subscriptions/formatDurationFromDays.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationEligibilityItems.tsx",
);

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
  let onEnableMFAClick = isUserMFAEnabled.useCallback(
    sortedByIneligible(function* () {
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
          return { value: "HermesInternal", done: null };
        } catch (tmp16) {
          c2 = tmp;
          throw tmp16;
        }
      }
    }),
    items,
  );
  let obj2 = require("useIsMFAEnabled");
  const enableMFAHook = require("useEnableMFAHook").useEnableMFAHook({ onEnableMFAClick });
  const items1 = [
    arg0,
    sortedByIneligible,
    isUserMFAEnabled,
    actions,
    isModerationMFAEnabled,
    enableMFAHook,
    onEnableMFAClick,
  ];
  return isUserMFAEnabled.useMemo(() => {
    if (null == closure_0) {
      return null;
    } else {
      ({ minimumOwnerAgeInYears, minimumSize, noRecentViolations } = closure_0);
      const obj2 = {
        key: "no_violations_requirement",
        checkedLabel: null,
        uncheckedLabel: null,
        description: null,
        checked: null,
        actionLabel: null,
        actionHandler: null,
      };
      const intl18 = util.intl;
      obj2.checkedLabel = intl18.string(util.t["1lGNPZ"]);
      const intl19 = util.intl;
      obj2.uncheckedLabel = intl19.string(util.t["D+gTJt"]);
      const intl20 = util.intl;
      const obj3 = {
        communityGuidelinesUrl: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.PUBLIC_GUILD_GUILDLINES),
      };
      obj2.description = intl20.format(util.t.HFY0m6, obj3);
      obj2.checked = closure_0.noRecentViolations;
      let stringResult;
      if (!noRecentViolations) {
        const intl = util.intl;
        stringResult = intl.string(util.t["xU2fl+"]);
      }
      obj2.actionLabel = stringResult;
      let fn;
      if (!noRecentViolations) {
        fn = () => {
          const tmp = onEligibilityBecameStale(4411);
          return tmp(onEligibilityBecameStale(2025).getSubmitRequestURL());
        };
      }
      obj2.actionHandler = fn;
      const items = [obj2];
      if (tmp3) {
        const obj = {
          key: "owner_age_requirement",
          checkedLabel: null,
          uncheckedLabel: null,
          description: null,
          checked: null,
        };
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
        const obj5 = {
          key: "member_count_requirement",
          checkedLabel: null,
          uncheckedLabel: null,
          description: null,
          checked: null,
        };
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
        const obj7 = {
          key: "server_age_requirement",
          checkedLabel: null,
          uncheckedLabel: null,
          description: null,
          checked: null,
        };
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
        const obj9 = {
          key: "weekly_communicator_count_requirement",
          checkedLabel: null,
          uncheckedLabel: null,
          description: null,
          checked: null,
        };
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
        const obj10 = {
          key: "member_retention_requirement",
          checkedLabel: null,
          uncheckedLabel: null,
          description: null,
          checked: null,
        };
        const intl24 = util.intl;
        obj10.checkedLabel = intl24.string(util.t.Qvq39M);
        const intl25 = util.intl;
        obj10.uncheckedLabel = intl25.string(util.t.azHboI);
        const intl26 = util.intl;
        obj10.description = intl26.string(util.t.u4rCYO);
        obj10.checked = closure_0.hasMemberRetention;
        items.push(obj10);
      }
      const obj11 = {
        key: "nsfw_requirement",
        checkedLabel: null,
        uncheckedLabel: null,
        description: null,
        checked: null,
      };
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
        const obj13 = {
          key: "2fa_requirement",
          checkedLabel: null,
          uncheckedLabel: null,
          description: null,
          checked: null,
          actionLabel: null,
          actionHandler: null,
        };
        const intl14 = util.intl;
        obj13.checkedLabel = intl14.string(util.t.NqVyFk);
        const intl15 = util.intl;
        obj13.uncheckedLabel = intl15.string(util.t.VcDNIV);
        const intl16 = util.intl;
        const obj14 = { enableMFAHook };
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
  }, items1);
}
