// === Module 13376: validateBuildOverride ===

// Module 13376 (validateBuildOverride)
import _modDef12 from "module_12" /* 12 */;
import util from "util" /* 1115 */;
import _slicedToArray from "module_32" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
let closure_5 = fn(1362).BUILD_OVERRIDE_TARGET_NAMES;
const PublicReleaseChannels = fn(1074).PublicReleaseChannels;
const size = fn(2);
const result = size.fileFinishedImporting("modules/build_overrides/validateBuildOverride.tsx");

export default function validateBuildOverride(targetBuildOverride, items3, Version) {
  if (null != targetBuildOverride) {
    if (null != items3) {
      ({ releaseChannel, expiresAt, validForUserIds, allowedVersions } = targetBuildOverride);
      const _Object = Object;
      const keys = Object.keys(targetBuildOverride.targetBuildOverride);
      if (0 === obj12.intersection(keys, items3).length) {
        const obj2 = { valid: false, reason: null };
        const intl5 = util.intl;
        const obj3 = { requestedTargets: null };
        const mapped = keys.map((item) => {
          let str = closure_1_5[item];
          if (str == null) {
            str = "unknown";
          }
          return str;
        });
        obj3.requestedTargets = mapped.join(", ");
        obj2.reason = intl5.formatToPlainString(util.t.wySUzv, obj3);
        return obj2;
      } else {
        if (null != releaseChannel) {
          const _window = window;
          if (releaseChannel !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
            if (releaseChannel === PublicReleaseChannels.PTB) {
              let formatted = releaseChannel.toUpperCase();
            } else {
              const formatted1 = releaseChannel.charAt(0).toUpperCase();
              const _HermesInternal = HermesInternal;
              formatted = "" + formatted1 + releaseChannel.slice(1);
              const str5 = releaseChannel.charAt(0);
            }
            const obj4 = { valid: false, reason: null };
            const intl4 = util.intl;
            const obj5 = { releaseChannel: formatted };
            obj4.reason = intl4.formatToPlainString(util.t.GOEF0C, obj5);
            return obj4;
          }
        }
        if (null != allowedVersions) {
          let flag = false;
          if (null == Version) {
            flag = false;
          } else if (allowedVersions.includes(Version)) {
            flag = true;
          } else {
            const iter = allowedVersions[Symbol.iterator]();
            while (iter !== undefined) {
              let tmp7 = _slicedToArray(str3.split("."), 2);
              let first = tmp7[0];
              if ("*" === tmp7[1]) {
                if (tmp2 === first) {
                  flag = true;
                  iter.return();
                  break;
                }
                break;
              }
              continue;
            }
            str3 = iter.next();
          }
          if (!flag) {
            const obj = { valid: false, reason: null };
            const intl = util.intl;
            const obj6 = { releaseChannel: allowedVersions.join(", ") };
            obj.reason = intl.formatToPlainString(util.t.GOEF0C, obj6);
            return obj;
          }
        }
        let time = null;
        if (null != expiresAt) {
          const _Date = Date;
          const date = new Date(expiresAt);
          time = date.getTime();
        }
        if (null != time) {
          const _Date2 = Date;
          if (time < Date.now()) {
            const obj7 = { valid: false, reason: null };
            const intl3 = util.intl;
            obj7.reason = intl3.string(util.t["8eRE6S"]);
            let obj8 = obj7;
          }
          return obj8;
        }
        if (validForUserIds.length > 0) {
          if (!validForUserIds.includes(AuthenticationStore.getId())) {
            obj8 = { valid: false, reason: null };
            const intl2 = util.intl;
            obj8.reason = intl2.string(util.t.qZgV0a);
          }
        }
        obj8 = { valid: true };
      }
      obj12 = _modDef12;
    }
  }
  const obj9 = { valid: false, reason: null };
  const intl6 = util.intl;
  obj9.reason = intl6.string(util.t.d34xi4);
  return obj9;
};