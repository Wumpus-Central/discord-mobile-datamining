// discord_app/modules/user/UserStoreUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import hasFlag from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import Environments2 from "UserStoreConstants.tsx";
import ME from "../../Constants.tsx";

const Environments = Environments2.Environments;
({ PREMIUM_TYPE_NONE: c4, UserFlags: c5 } = ME);
const result = obj132.fileFinishedImporting("modules/user/UserStoreUtils.tsx");

export const validatePremiumType = function validatePremiumType(arg0, premiumType, premiumType2) {
  let tmp = arg0;
  if (!arg0) {
    tmp = undefined === premiumType;
  }
  if (!tmp) {
    _modDef38(premiumType2 === premiumType, "Premium type should not change for non-staff users");
  }
};
export const getEnv = function getEnv(arg0) {
  let str = "production";
  if ("production" === Environments.TEST) {
    str = "production";
    if (null != arg0) {
      str = arg0;
    }
  }
  return str;
};
export const isStaffEnv = function isStaffEnv(currentUser) {
  let str = "production";
  if ("production" === Environments.TEST) {
    str = "production";
    if (null != tmp) {
      str = tmp;
    }
  }
  let tmp4 = str === Environments.DEVELOPMENT;
  if (!tmp4) {
    const _window = window;
    tmp4 = window.GLOBAL_ENV.RELEASE_CHANNEL === Environments.STAGING;
  }
  if (!tmp4) {
    let tmp8 = null != currentUser;
    if (tmp8) {
      tmp8 = currentUser.isStaff() || currentUser.isStaffPersonal();
      const tmp9 = currentUser.isStaff() || currentUser.isStaffPersonal();
    }
    tmp4 = tmp8;
  }
  return tmp4;
};
export const isStaffEnvRawData = function isStaffEnvRawData(flags) {
  let str = "production";
  if ("production" === Environments.TEST) {
    str = "production";
    if (null != tmp) {
      str = tmp;
    }
  }
  let tmp4 = str !== Environments.DEVELOPMENT;
  if (tmp4) {
    const _window = window;
    tmp4 = window.GLOBAL_ENV.RELEASE_CHANNEL !== Environments.STAGING;
  }
  let tmp6 = !tmp4;
  if (tmp4) {
    let tmp9 = null != flags;
    if (tmp9) {
      let tmp10 = null == flags.flags;
      if (!tmp10) {
        tmp10 = !hasFlag.hasFlag(flags.flags, constants.STAFF);
      }
      let tmp14 = !tmp10;
      if (tmp10) {
        tmp14 = null != flags.personal_connection_id;
      }
      tmp9 = tmp14;
    }
    tmp6 = tmp9;
  }
  return tmp6;
};
export function getPremiumTypeFromRawValue(premium_type) {
  if (undefined === premium_type) {
    let tmp2 = premium_type;
  } else {
    tmp2 = null;
  }
  return tmp2;
}