// discord_app/modules/dismissible_content/NewUserDismissibleContentRegistry.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DcfNewUserCooldownExperiment from "DcfNewUserCooldownExperiment.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, tmp4, tmp8;

let closure_5 = {
  [dismissible_content.DismissibleContent.MJ_NEW_USER_CHAT_BAR]: 0,
  [dismissible_content.DismissibleContent.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0,
  [dismissible_content.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0,
  [dismissible_content.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0,
  [dismissible_content.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0,
  [dismissible_content.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0,
  [dismissible_content.DismissibleContent.WHATS_NEW_SERVER_PROFILE_FLIP]: 0,
  [dismissible_content.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE]: 0,
  [dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD]: 0,
  [dismissible_content.DismissibleContent.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0,
  [dismissible_content.DismissibleContent.TRIAL_NUX_EMOJI_BUTTON]: 0,
  [dismissible_content.DismissibleContent.TRIAL_NUX_EMOJI_PICKER]: 0,
  [dismissible_content.DismissibleContent.TRIAL_NUX_STREAM_COACH_MARK]: 0,
  [dismissible_content.DismissibleContent.OVERLAY_OOP_SETTINGS_NUX]: 0,
  [dismissible_content.DismissibleContent.OVERLAY_OOP_WELCOME_NUX]: 0,
  [dismissible_content.DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_NUX]: 0,
  [dismissible_content.DismissibleContent.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX]: 0,
  [dismissible_content.DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX]: 0,
  [dismissible_content.DismissibleContent.REVERSE_TRIAL_NITRO_TAB_BADGE_V2]: 0,
  [dismissible_content.DismissibleContent.PERMADECOS_NITRO_TAB_NEW_BADGE]: 0,
  [dismissible_content.DismissibleContent.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE]: 0,
  [dismissible_content.DismissibleContent.NITRO_DROP_REWARD]: 0,
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr) => {
      let dcfNewUserCooldown;
      let id;
      let tmp5;
      let tmp6;
      const tmp = dcfNewUserCooldown;
      let obj = dcfNewUserCooldown(576);
      const cResult = obj.c(9);
      const obj2 = dcfNewUserCooldown(4721);
      dcfNewUserCooldown = obj2.useDcfNewUserCooldown();
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
      const tmpResult = tmp(573);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, E);
      const userId = stateFromStoresObject.userId;
      if (stateFromStoresObject.newUserMinAgeRequiredOverridden) {
        return arr;
      } else {
        let tmp10;
        if (cResult[2] === arr) {
          if (cResult[3] === dcfNewUserCooldown) {
            if (cResult[4] === userId) {
              tmp10 = cResult[5];
            }
            return tmp10;
          }
        }
        if (cResult[6] === dcfNewUserCooldown) {
          let tmp11;
          if (cResult[7] === userId) {
            tmp11 = cResult[8];
          }
          const found = arr.filter(tmp11);
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
          tmp10 = found;
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
        tmp11 = A;
      }
    }
  : (arr) => {
      let closure_0;
      let id;
      let obj = require("DcfNewUserCooldownExperiment");
      _require = obj.useDcfNewUserCooldown();
      const items = [AuthenticationStore, DismissibleContentFrameworkStore];
      const obj2 = require("useStateFromStores");
      const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
        const obj = {
          userId: id.getId(),
          newUserMinAgeRequiredOverridden: DismissibleContentFrameworkStore.newUserMinAgeRequiredOverridden,
        };
        return obj;
      });
      const userId = stateFromStoresObject.userId;
      let found = arr;
      if (!stateFromStoresObject.newUserMinAgeRequiredOverridden) {
        found = arr.filter((item) => {
          let tmp3 = null != userId;
          if (tmp3) {
            let tmp9 = closure_5[item];
            const obj = SnowflakeUtilsDefault;
            const ageResult = obj.age(tmp);
            if (tmp9 == null) {
              tmp9 = tmp2;
            }
            tmp3 = ageResult >= tmp9;
          }
          return tmp3;
        });
      }
      return found;
    };
function isUserAccountOldEnough(arg0, arg1, arg2) {
  let tmp = null != arg0;
  if (tmp) {
    let tmp7 = closure_5[arg1];
    const obj = SnowflakeUtilsDefault;
    const ageResult = obj.age(arg0);
    if (tmp7 == null) {
      tmp7 = arg2;
    }
    tmp = ageResult >= tmp7;
  }
  return tmp;
}
const result = size.fileFinishedImporting("modules/dismissible_content/NewUserDismissibleContentRegistry.tsx");

export const useNewUserDismissibleContent = tmp2;
export const disableNewUserDismissibleContent = function disableNewUserDismissibleContent(
  PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
) {
  let tmp = !DismissibleContentFrameworkStore.newUserMinAgeRequiredOverridden;
  if (tmp) {
    const id = AuthenticationStore.getId();
    DcfNewUserCooldownExperiment;
    let tmp9 = null != id;
    if (tmp9) {
      let tmp14 = closure_5[PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE];
      const obj = SnowflakeUtilsDefault;
      const ageResult = obj.age(id);
      if (tmp14 == null) {
        tmp14 = tmp7;
      }
      tmp9 = ageResult >= tmp14;
    }
    tmp = !tmp9;
  }
  return tmp;
};
export { isUserAccountOldEnough };
