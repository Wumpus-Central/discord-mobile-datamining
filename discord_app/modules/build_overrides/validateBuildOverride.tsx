// discord_app/modules/build_overrides/validateBuildOverride.tsx
import _slicedToArray from "_slicedToArray";
import fetchFingerprint from "fetchFingerprint";
import { BUILD_OVERRIDE_TARGET_NAMES as closure_5 } from "BUILD_OVERRIDE_TARGET_NAMES";
import { PublicReleaseChannels } from "ME";

const require = arg1;
const result = require("BUILD_OVERRIDE_TARGET_NAMES").fileFinishedImporting("modules/build_overrides/validateBuildOverride.tsx");

export default function validateBuildOverride(targetBuildOverride, items1) {
  let allowedVersions;
  let expiresAt;
  let releaseChannel;
  let validForUserIds;
  if (null != targetBuildOverride) {
    if (null != items1) {
      ({ releaseChannel, expiresAt, validForUserIds, allowedVersions } = targetBuildOverride);
      const _Object = Object;
      const keys = Object.keys(targetBuildOverride.targetBuildOverride);
      if (0 === obj12.intersection(keys, items1).length) {
        let obj = { valid: false, reason: null };
        const intl5 = require(1236) /* getSystemLocale */.intl;
        obj = { requestedTargets: null };
        const mapped = keys.map((arg0) => {
          let str = table[arg0];
          if (str == null) {
            str = "unknown";
          }
          return str;
        });
        obj[0] = mapped.join(", ");
        obj[1] = intl5.formatToPlainString(require(1236) /* getSystemLocale */.t.wySUzv, obj);
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
            const intl4 = require(1236) /* getSystemLocale */.intl;
            const obj2 = { releaseChannel: null };
            obj2[0] = formatted;
            obj1[1] = intl4.formatToPlainString(require(1236) /* getSystemLocale */.t.GOEF0C, obj2);
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
              let tmp6 = callback;
              let tmp7 = callback(str3.split("."), 2);
              let first = tmp7[0];
              if ("*" === tmp7[1]) {
                let tmp9 = first;
                if (tmp2 === first) {
                  flag = true;
                  let tmp10 = iter;
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
            const intl = require(1236) /* getSystemLocale */.intl;
            const obj3 = { releaseChannel: null };
            obj3[0] = allowedVersions.join(", ");
            obj[1] = intl.formatToPlainString(require(1236) /* getSystemLocale */.t.GOEF0C, obj3);
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
            const intl3 = require(1236) /* getSystemLocale */.intl;
            obj4[1] = intl3.string(require(1236) /* getSystemLocale */.t["8eRE6S"]);
            let obj5 = obj4;
          }
          return obj5;
        }
        if (validForUserIds.length > 0) {
          if (!validForUserIds.includes(id.getId())) {
            obj5 = { valid: false, reason: null };
            const intl2 = require(1236) /* getSystemLocale */.intl;
            obj5[1] = intl2.string(require(1236) /* getSystemLocale */.t.qZgV0a);
          }
        }
        obj5 = { valid: true };
      }
      obj12 = importDefault(12);
    }
  }
  const obj6 = { valid: false, reason: null };
  const intl6 = require(1236) /* getSystemLocale */.intl;
  obj6[1] = intl6.string(require(1236) /* getSystemLocale */.t.d34xi4);
  return obj6;
};