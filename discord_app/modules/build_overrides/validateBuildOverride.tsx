// === Module 13060: validateBuildOverride ===

// Module 13060 (validateBuildOverride)
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import intl7 from "intl" /* 1126 */;
import BuildOverrideConstants from "BuildOverrideConstants" /* 1367 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let closure_5 = BuildOverrideConstants.BUILD_OVERRIDE_TARGET_NAMES;
const PublicReleaseChannels = Constants.PublicReleaseChannels;
const result = size.fileFinishedImporting("modules/build_overrides/validateBuildOverride.tsx");

export default function validateBuildOverride(targetBuildOverride, items3, Version) {
  let GOEF0C;
  let allowedVersions;
  let expiresAt;
  let formatToPlainString;
  let formatToPlainString2;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let mapped;
  let obj3;
  let obj6;
  let releaseChannel;
  let validForUserIds;
  let wySUzv;
  if (null != targetBuildOverride) {
    if (null != items3) {
      ({ releaseChannel, expiresAt, validForUserIds, allowedVersions } = targetBuildOverride);
      const _Object = Object;
      const keys = Object.keys(targetBuildOverride.targetBuildOverride);
      const obj12 = _modDef12;
      if (0 === obj12.intersection(keys, items3).length) {
        const obj2 = { valid: false, reason: formatToPlainString2(wySUzv, obj3) };
        const intl5 = intl7.intl;
        formatToPlainString2 = intl5.formatToPlainString;
        obj3 = { requestedTargets: mapped.join(", ") };
        wySUzv = intl7.t.wySUzv;
        mapped = keys.map((item) => {
          let str = closure_1_5[item];
          if (str == null) {
            str = "unknown";
          }
          return str;
        });
        return obj2;
      } else {
        let obj8;
        if (null != releaseChannel) {
          const _window = window;
          if (releaseChannel !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
            if (releaseChannel === PublicReleaseChannels.PTB) {
              let formatted = releaseChannel.toUpperCase();
            } else {
              const str5 = releaseChannel.charAt(0);
              const formatted1 = str5.toUpperCase();
              const _HermesInternal = HermesInternal;
              formatted = "" + formatted1 + releaseChannel.slice(1);
            }
            const obj4 = { valid: false, reason: intl4.formatToPlainString(intl7.t.GOEF0C, obj5) };
            intl4 = intl7.intl;
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
            let str = ".";
            const first = _slicedToArray(Version.split("."), 1)[0];
            const iter = allowedVersions[Symbol.iterator]();
            const str3 = iter.next();
            while (iter !== undefined) {
              let tmp7 = _slicedToArray(str3.split("."), 2);
              let first1 = tmp7[0];
              if ("*" === tmp7[1]) {
                if (first === first1) {
                  flag = true;
                  iter.return();
                  break;
                }
                break;
              }
              continue;
            }
          }
          if (!flag) {
            const obj = { valid: false, reason: formatToPlainString(GOEF0C, obj6) };
            const intl = intl7.intl;
            formatToPlainString = intl.formatToPlainString;
            obj6 = { releaseChannel: allowedVersions.join(", ") };
            GOEF0C = intl7.t.GOEF0C;
            return obj;
          }
        }
        let time = null;
        if (null != expiresAt) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          const date = new Date(expiresAt);
          time = date.getTime();
        }
        if (null != time) {
          const _Date2 = Date;
          if (time < Date.now()) {
            const obj7 = { valid: false, reason: intl3.string(intl7.t["8eRE6S"]) };
            intl3 = intl7.intl;
            obj8 = obj7;
          }
          return obj8;
        }
        if (validForUserIds.length > 0) {
          if (!validForUserIds.includes(AuthenticationStore.getId())) {
            obj8 = { valid: false, reason: intl2.string(intl7.t.qZgV0a) };
            intl2 = intl7.intl;
          }
        }
        obj8 = { valid: true };
      }
    }
  }
  const obj9 = { valid: false, reason: intl6.string(intl7.t.d34xi4) };
  intl6 = intl7.intl;
  return obj9;
};