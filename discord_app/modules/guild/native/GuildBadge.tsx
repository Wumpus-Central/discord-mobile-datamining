// === Module 5984: GuildBadge ===

// Module 5984 (GuildBadge)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2066 */;
import AssetRegistryDefault from "AssetRegistry" /* 5985 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 5986 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 5987 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 5988 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let PARTNERED;
let PARTNERED_BLACK;
let VERIFIED;
let VERIFIED_BLACK;
function getGuildBadgeSource(guild, flag) {
  let NONE = obj.NONE;
  const VERIFIED = GuildFeatures.VERIFIED;
  let tmp3 = null != guild;
  if (tmp3) {
    let hasItem;
    obj = GuildRecordUtils;
    if (obj.isGuildRecord(guild)) {
      const features3 = guild.features;
      hasItem = features3.has(VERIFIED);
    } else {
      const _Array = Array;
      if (Array.isArray(guild.features)) {
        const features2 = guild.features;
        hasItem = features2.includes(VERIFIED);
      } else {
        const features = guild.features;
        let hasItem1;
        const _Boolean = Boolean;
        if (features != null) {
          hasItem1 = features.has(VERIFIED);
        }
        hasItem = _Boolean(hasItem1);
      }
    }
    tmp3 = hasItem;
  }
  if (tmp3) {
    NONE = flag ? tmp.VERIFIED_BLACK : tmp.VERIFIED;
  } else {
    const PARTNERED = GuildFeatures.PARTNERED;
    let tmp9 = null != guild;
    if (tmp9) {
      let hasItem2;
      obj2 = GuildRecordUtils;
      if (obj2.isGuildRecord(guild)) {
        const features6 = guild.features;
        hasItem2 = features6.has(PARTNERED);
      } else {
        const _Array2 = Array;
        if (Array.isArray(guild.features)) {
          const features5 = guild.features;
          hasItem2 = features5.includes(PARTNERED);
        } else {
          const features4 = guild.features;
          let hasItem3;
          const _Boolean2 = Boolean;
          if (features4 != null) {
            hasItem3 = features4.has(PARTNERED);
          }
          hasItem2 = _Boolean2(hasItem3);
        }
      }
      tmp9 = hasItem2;
    }
    if (tmp9) {
      NONE = flag ? tmp.PARTNERED_BLACK : tmp.PARTNERED;
    }
  }
  return obj2[NONE];
}
let closure_2 = ["guild", "monocolored", "size"];
const GuildFeatures = Constants.GuildFeatures;
const jsx = Fragment.jsx;
let obj = { PARTNERED: 0, [0]: "PARTNERED", VERIFIED: 1, [1]: "VERIFIED", PARTNERED_BLACK: 2, [2]: "PARTNERED_BLACK", VERIFIED_BLACK: 3, [3]: "VERIFIED_BLACK", NONE: 4, [4]: "NONE" };
let obj2 = { [VERIFIED]: AssetRegistryDefault, [PARTNERED]: AssetRegistryDefault2, [VERIFIED_BLACK]: AssetRegistryDefault3, [PARTNERED_BLACK]: AssetRegistryDefault4, [obj.NONE]: null };
({ VERIFIED, PARTNERED, VERIFIED_BLACK, PARTNERED_BLACK } = obj);
if (ReactCompilerGating.isReactCompilerEnabled()) {
  class GuildBadge {
    constructor(arg0) {
      let MEDIUM;
      let guild;
      let monocolored;
      let tmp4;
      let tmp5;
      let tmp6;
      obj = react2;
      const cResult = obj.c(12);
      if (cResult[0] !== arg0) {
        ({ guild, monocolored, size } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = guild;
        cResult[2] = tmp9;
        cResult[3] = monocolored;
        cResult[4] = size;
        MEDIUM = size;
        tmp6 = monocolored;
        tmp5 = tmp9;
        tmp4 = guild;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        MEDIUM = cResult[4];
      }
      if (undefined === MEDIUM) {
        MEDIUM = GuildBadge.Sizes.MEDIUM;
      }
      if (cResult[5] === tmp4) {
        let tmp12;
        if (cResult[6] === (undefined !== tmp6 && tmp6)) {
          tmp12 = cResult[7];
        }
        let tmp14 = null;
        if (null != tmp12) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === MEDIUM) {
              let tmp15;
              if (cResult[10] === tmp12) {
                tmp15 = cResult[11];
              }
              tmp14 = tmp15;
            }
          }
          const Icon = native.Icon;
          const merged = Object.assign(tmp5);
          const tmp20 = <Icon size={MEDIUM} source={tmp12} />;
          cResult[8] = tmp5;
          cResult[9] = MEDIUM;
          cResult[10] = tmp12;
          cResult[11] = tmp20;
          tmp15 = tmp20;
        }
        return tmp14;
      }
      const tmp13 = getGuildBadgeSource(tmp4, undefined !== tmp6 && tmp6);
      cResult[5] = tmp4;
      cResult[6] = undefined !== tmp6 && tmp6;
      cResult[7] = tmp13;
      tmp12 = tmp13;
    }
  }
} else {
  class GuildBadge {
    constructor(monocolored) {
      let flag = monocolored.monocolored;
      const guild = monocolored.guild;
      if (flag === undefined) {
        flag = false;
      }
      let MEDIUM = monocolored.size;
      if (MEDIUM === undefined) {
        MEDIUM = GuildBadge.Sizes.MEDIUM;
      }
      let tmp2 = null;
      const merged = Object.assign(monocolored, Object.assign({ guild: 0, monocolored: 0, size: 0 }));
      const tmp4 = getGuildBadgeSource(guild, flag);
      if (null != tmp4) {
        const Icon = native.Icon;
        const merged1 = Object.assign(merged);
        tmp2 = <Icon size={MEDIUM} source={tmp4} />;
      }
      return tmp2;
    }
  }
}
GuildBadge.Sizes = native.Icon.Sizes;
const result = size.fileFinishedImporting("modules/guild/native/GuildBadge.tsx");

export default GuildBadge;
export { getGuildBadgeSource };