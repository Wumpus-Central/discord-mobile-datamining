// discord_app/modules/guild/native/GuildBadge.tsx
import native from "../../../design/void/native.tsx";
import GuildRecordUtils from "../../../utils/GuildRecordUtils.tsx";
import _modDef5591 from "../../../../_runtime/metro/05591__.js";
import _modDef5592 from "../../../../_runtime/metro/05592__.js";
import _modDef5593 from "../../../../_runtime/metro/05593__.js";
import _modDef5594 from "../../../../_runtime/metro/05594__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function getGuildBadgeSource(guild, flag) {
  let has = guild;
  let NONE = obj.NONE;
  const VERIFIED = GuildFeatures.VERIFIED;
  if (null == guild) {
    if (!tmp3) {
      const PARTNERED = tmp2.PARTNERED;
      if (null == has) {
        if (tmp11) {
          NONE = flag ? tmp.PARTNERED_BLACK : tmp.PARTNERED;
        }
        return obj[NONE];
      } else {
        if (obj2.isGuildRecord(has)) {
          const features6 = has.features;
          has = features6.has;
          let hasItem = has(PARTNERED);
        } else {
          const _Array2 = Array;
          if (Array.isArray(has.features)) {
            const features5 = has.features;
            hasItem = features5.includes(PARTNERED);
          } else {
            const features4 = has.features;
            let hasItem1;
            if (features4 != null) {
              hasItem1 = features4.has(PARTNERED);
            }
            hasItem = Boolean(hasItem1);
          }
        }
        obj2 = GuildRecordUtils;
      }
    }
  } else {
    obj = GuildRecordUtils;
    if (obj.isGuildRecord(has)) {
      const features3 = has.features;
      let hasItem2 = features3.has(VERIFIED);
    } else {
      const _Array = Array;
      if (Array.isArray(has.features)) {
        const features2 = has.features;
        hasItem2 = features2.includes(VERIFIED);
      } else {
        const features = has.features;
        let hasItem3;
        if (features != null) {
          hasItem3 = features.has(VERIFIED);
        }
        hasItem2 = Boolean(hasItem3);
      }
    }
  }
}
class GuildBadge {
  constructor(arg0) {
    flag = global.monocolored;
    if (flag === undefined) {
      flag = false;
    }
    MEDIUM = global.size;
    if (MEDIUM === undefined) {
      tmp = GuildBadge;
      MEDIUM = GuildBadge.Sizes.MEDIUM;
    }
    tmp2 = null;
    merged = Object.assign(global, Object.assign({ guild: 0, monocolored: 0, size: 0 }));
    tmp4 = getGuildBadgeSource(global.guild, flag);
    if (null != tmp4) {
      tmp5 = jsx;
      tmp6 = closure_0;
      tmp7 = closure_1;
      obj = {};
      tmp8 = obj;
      tmp9 = merged;
      merged1 = Object.assign(merged);
      obj.size = MEDIUM;
      obj.source = tmp4;
      tmp2 = jsx(closure_0(closure_1[8]).Icon, obj);
    }
    return tmp2;
  }
}
const GuildFeatures = fn(1074).GuildFeatures;
const jsx = fn(21).jsx;
let obj = {
  PARTNERED: 0,
  [0]: "PARTNERED",
  VERIFIED: 1,
  [1]: "VERIFIED",
  PARTNERED_BLACK: 2,
  [2]: "PARTNERED_BLACK",
  VERIFIED_BLACK: 3,
  [3]: "VERIFIED_BLACK",
  NONE: 4,
  [4]: "NONE",
};
obj = {
  [VERIFIED]: _modDef5591,
  [PARTNERED]: _modDef5592,
  [VERIFIED_BLACK]: _modDef5593,
  [PARTNERED_BLACK]: _modDef5594,
  [obj.NONE]: null,
};
({ VERIFIED, PARTNERED, VERIFIED_BLACK, PARTNERED_BLACK } = obj);
GuildBadge.Sizes = fn(1178).Icon.Sizes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/native/GuildBadge.tsx");

export default GuildBadge;
export { getGuildBadgeSource };
