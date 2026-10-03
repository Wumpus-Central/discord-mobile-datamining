// discord_app/modules/dismissible_content/NewUserDismissibleContentRegistry.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DcfNewUserCooldownExperiment from "DcfNewUserCooldownExperiment.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore.tsx";

const require = globalThis.__r;

require = fn;
const dependencyMap2 = {
  [fn(2036).DismissibleContent.MJ_NEW_USER_CHAT_BAR]: 0,
  [fn(2036).DismissibleContent.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0,
  [fn(2036).DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0,
  [fn(2036).DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0,
  [fn(2036).DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0,
  [fn(2036).DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0,
  [fn(2036).DismissibleContent.WHATS_NEW_SERVER_PROFILE_FLIP]: 0,
  [fn(2036).DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE]: 0,
  [fn(2036).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD]: 0,
  [fn(2036).DismissibleContent.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0,
  [fn(2036).DismissibleContent.TRIAL_NUX_EMOJI_BUTTON]: 0,
  [fn(2036).DismissibleContent.TRIAL_NUX_EMOJI_PICKER]: 0,
  [fn(2036).DismissibleContent.TRIAL_NUX_STREAM_COACH_MARK]: 0,
  [fn(2036).DismissibleContent.OVERLAY_OOP_SETTINGS_NUX]: 0,
  [fn(2036).DismissibleContent.OVERLAY_OOP_WELCOME_NUX]: 0,
  [fn(2036).DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_NUX]: 0,
  [fn(2036).DismissibleContent.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX]: 0,
  [fn(2036).DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX]: 0,
  [fn(2036).DismissibleContent.REVERSE_TRIAL_NITRO_TAB_BADGE_V2]: 0,
  [fn(2036).DismissibleContent.PERMADECOS_NITRO_TAB_NEW_BADGE]: 0,
  [fn(2036).DismissibleContent.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE]: 0,
  [fn(2036).DismissibleContent.NITRO_DROP_REWARD]: 0,
};
const ReactCompilerGating = fn(558);
function isUserAccountOldEnough(arg0, arg1, arg2) {
  let tmp = null != arg0;
  if (tmp) {
    let tmp7 = dependencyMap2[arg1];
    if (tmp7 == null) {
      tmp7 = arg2;
    }
    tmp = SnowflakeUtilsDefault.age(arg0) >= tmp7;
    const ageResult = SnowflakeUtilsDefault.age(arg0);
  }
  return tmp;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/NewUserDismissibleContentRegistry.tsx");

export const useNewUserDismissibleContent = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr) => {
      const cResult = dcfNewUserCooldown(576).c(9);
      let obj = dcfNewUserCooldown(576);
      const tmp = dcfNewUserCooldown;
      dcfNewUserCooldown = dcfNewUserCooldown(4721).useDcfNewUserCooldown();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore, DismissibleContentFrameworkStore];
        class E {
          constructor() {
            obj = {
              userId: closure_1_3.getId(),
              newUserMinAgeRequiredOverridden: closure_1_4.newUserMinAgeRequiredOverridden,
            };
            return obj;
          }
        }
        cResult[0] = items;
        cResult[1] = E;
        tmp5 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const obj2 = dcfNewUserCooldown(4721);
      const stateFromStoresObject = tmp(573).useStateFromStoresObject(tmp5, E);
      const userId = stateFromStoresObject.userId;
      if (stateFromStoresObject.newUserMinAgeRequiredOverridden) {
        return arr;
      } else {
        if (cResult[2] === arr) {
          if (cResult[3] === dcfNewUserCooldown) {
            if (cResult[4] === userId) {
              return cResult[5];
            }
          }
        }
        if (cResult[6] === dcfNewUserCooldown) {
          if (cResult[7] === userId) {
            let tmp10 = cResult[8];
          }
          const found = arr.filter(tmp10);
          class A {
            constructor(arg0) {
              tmp3 = null != userId;
              if (tmp3) {
                tmp4 = arr;
                tmp5 = closure_1;
                tmp6 = closure_2;
                obj = closure_1(closure_2[7]);
                tmp8 = closure_5;
                tmp9 = closure_5[arr];
                ageResult = obj.age(tmp);
                if (tmp9 == null) {
                  tmp9 = tmp2;
                }
                tmp3 = ageResult >= tmp9;
              }
              return tmp3;
            }
          }
          cResult[2] = arr;
          class E {
            constructor() {
              obj = {
                userId: closure_1_3.getId(),
                newUserMinAgeRequiredOverridden: closure_1_4.newUserMinAgeRequiredOverridden,
              };
              return obj;
            }
          }
          cResult[4] = userId;
          cResult[5] = found;
        }
        class A {
          constructor(arg0) {
            tmp3 = null != userId;
            if (tmp3) {
              tmp4 = arr;
              tmp5 = closure_1;
              tmp6 = closure_2;
              obj = closure_1(closure_2[7]);
              tmp8 = closure_5;
              tmp9 = closure_5[arr];
              ageResult = obj.age(tmp);
              if (tmp9 == null) {
                tmp9 = tmp2;
              }
              tmp3 = ageResult >= tmp9;
            }
            return tmp3;
          }
        }
        cResult[6] = dcfNewUserCooldown;
        class E {
          constructor() {
            obj = {
              userId: closure_1_3.getId(),
              newUserMinAgeRequiredOverridden: closure_1_4.newUserMinAgeRequiredOverridden,
            };
            return obj;
          }
        }
        cResult[7] = userId;
        cResult[8] = A;
        tmp10 = A;
      }
      const tmpResult = tmp(573);
    }
  : (arr) => {
      _require = require("DcfNewUserCooldownExperiment").useDcfNewUserCooldown();
      let obj = require("DcfNewUserCooldownExperiment");
      const items = [AuthenticationStore, DismissibleContentFrameworkStore];
      const stateFromStoresObject = require("useStateFromStores").useStateFromStoresObject(items, () => ({
        userId: id.getId(),
        newUserMinAgeRequiredOverridden: DismissibleContentFrameworkStore.newUserMinAgeRequiredOverridden,
      }));
      const userId = stateFromStoresObject.userId;
      let found = arr;
      if (!stateFromStoresObject.newUserMinAgeRequiredOverridden) {
        found = arr.filter((item) => {
          let tmp3 = null != userId;
          if (tmp3) {
            let tmp9 = closure_5[item];
            if (tmp9 == null) {
              tmp9 = tmp2;
            }
            tmp3 = SnowflakeUtilsDefault.age(tmp) >= tmp9;
            const ageResult = SnowflakeUtilsDefault.age(tmp);
          }
          return tmp3;
        });
      }
      return found;
    };
export const disableNewUserDismissibleContent = function disableNewUserDismissibleContent(
  PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
) {
  const newUserMinAgeRequiredOverridden = DismissibleContentFrameworkStore.newUserMinAgeRequiredOverridden;
  let tmp = !newUserMinAgeRequiredOverridden;
  if (!newUserMinAgeRequiredOverridden) {
    const id = AuthenticationStore.getId();
    DcfNewUserCooldownExperiment;
    let tmp9 = null != id;
    if (tmp9) {
      let tmp14 = dependencyMap2[PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE];
      if (tmp14 == null) {
        tmp14 = tmp7;
      }
      tmp9 = SnowflakeUtilsDefault.age(id) >= tmp14;
      const ageResult = SnowflakeUtilsDefault.age(id);
    }
    tmp = !tmp9;
  }
  return tmp;
};
export { isUserAccountOldEnough };
