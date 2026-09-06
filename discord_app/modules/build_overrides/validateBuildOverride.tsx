// === Module 13221: validateBuildOverride ===

// Module 13221 (validateBuildOverride)
import _modDef12 from "module_12" /* 12 */;
import util from "util" /* 1114 */;
import _slicedToArray from "module_32" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
let closure_5 = fn(1363).BUILD_OVERRIDE_TARGET_NAMES;
const PublicReleaseChannels = fn(1074).PublicReleaseChannels;
const size = fn(2);
const result = size.fileFinishedImporting("modules/build_overrides/validateBuildOverride.tsx");

export default function validateBuildOverride(targetBuildOverride, items2, arg2) {
  if (null != targetBuildOverride) {
    if (null != items2) {
      ({ releaseChannel, expiresAt, validForUserIds, allowedVersions } = targetBuildOverride);
      const _Object = Object;
      const keys = Object.keys(targetBuildOverride.targetBuildOverride);
      if (0 === obj12.intersection(keys, items2).length) {
        let obj = { valid: false, reason: null };
        const intl5 = util.intl;
        obj = { requestedTargets: null };
        const mapped = keys.map((item) => {
          let str = closure_1_5[item];
          if (str == null) {
            str = "unknown";
          }
          return str;
        });
        obj.requestedTargets = mapped.join(", ");
        obj.reason = intl5.formatToPlainString(util.t.wySUzv, obj);
        return obj;
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
            const obj1 = { valid: false, reason: null };
            const intl4 = util.intl;
            const obj2 = { releaseChannel: formatted };
            obj1.reason = intl4.formatToPlainString(util.t.GOEF0C, obj2);
            return obj1;
          }
        }
        if (null != allowedVersions) {
          let flag = false;
          if (null == arg2) {
            flag = false;
          } else if (allowedVersions.includes(arg2)) {
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
            obj = { valid: false, reason: null };
            const intl = util.intl;
            const obj3 = { releaseChannel: allowedVersions.join(", ") };
            obj.reason = intl.formatToPlainString(util.t.GOEF0C, obj3);
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
            const obj4 = { valid: false, reason: null };
            const intl3 = util.intl;
            obj4.reason = intl3.string(util.t["8eRE6S"]);
            let obj5 = obj4;
          }
          return obj5;
        }
        if (validForUserIds.length > 0) {
          if (!validForUserIds.includes(AuthenticationStore.getId())) {
            obj5 = { valid: false, reason: null };
            const intl2 = util.intl;
            obj5.reason = intl2.string(util.t.qZgV0a);
          }
        }
        obj5 = { valid: true };
      }
      obj12 = _modDef12;
    }
  }
  const obj6 = { valid: false, reason: null };
  const intl6 = util.intl;
  obj6.reason = intl6.string(util.t.d34xi4);
  return obj6;
};