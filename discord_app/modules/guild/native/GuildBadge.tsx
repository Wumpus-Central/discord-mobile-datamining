// === Module 6169: GuildBadge ===

// Module 6169 (GuildBadge)
import c from "c" /* 576 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2078 */;
import _modDef6170 from "module_6170" /* 6170 */;
import _modDef6171 from "module_6171" /* 6171 */;
import _modDef6172 from "module_6172" /* 6172 */;
import _modDef6173 from "module_6173" /* 6173 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const native = Icon(1200);
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
        return obj2[NONE];
      } else {
        obj2 = GuildRecordUtils;
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
let closure_2 = ["guild", "monocolored", "size"];
const GuildFeatures = fn(1085).GuildFeatures;
const jsx = fn(21).jsx;
let obj = { PARTNERED: 0, [0]: "PARTNERED", VERIFIED: 1, [1]: "VERIFIED", PARTNERED_BLACK: 2, [2]: "PARTNERED_BLACK", VERIFIED_BLACK: 3, [3]: "VERIFIED_BLACK", NONE: 4, [4]: "NONE" };
let obj2 = { [VERIFIED]: _modDef6170, [PARTNERED]: _modDef6171, [VERIFIED_BLACK]: _modDef6172, [PARTNERED_BLACK]: _modDef6173, [obj.NONE]: null };
({ VERIFIED, PARTNERED, VERIFIED_BLACK, PARTNERED_BLACK } = obj);
const ReactCompilerGating = fn(558);
if (ReactCompilerGating.isReactCompilerEnabled()) {
  class GuildBadge {
    constructor(arg0) {
      Icon = closure_0;
      tmp = closure_1;
      obj = closure_0(closure_1[10]);
      cResult = obj.c(12);
      if (cResult[0] !== global) {
        ({ guild, monocolored, size } = global);
        tmp6 = closure_3;
        tmp7 = closure_2;
        tmp8 = closure_3(global, closure_2);
        num = 0;
        cResult[0] = global;
        num2 = 1;
        cResult[1] = guild;
        num3 = 2;
        cResult[2] = tmp8;
        num4 = 3;
        cResult[3] = monocolored;
        num5 = 4;
        cResult[4] = size;
        MEDIUM = size;
        tmp5 = monocolored;
        tmp4 = tmp8;
        tmp3 = guild;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
        tmp5 = cResult[3];
        MEDIUM = cResult[4];
      }
      tmp9 = undefined !== tmp5 && tmp5;
      if (undefined === MEDIUM) {
        tmp10 = GuildBadge;
        MEDIUM = GuildBadge.Sizes.MEDIUM;
      }
      if (cResult[5] === tmp3) {
        if (cResult[6] === tmp9) {
          tmp11 = cResult[7];
        }
        tmp13 = null;
        if (null == tmp11) {
          return null;
        } else {
          if (cResult[8] === tmp4) {
            if (cResult[9] === MEDIUM) {
              if (cResult[10] === tmp11) {
                tmp14 = cResult[11];
              }
              tmp19 = tmp14;
            }
          }
          tmp15 = jsx;
          Icon = Icon(tmp[11]).Icon;
          obj1 = {};
          tmp16 = obj1;
          tmp17 = tmp4;
          merged = Object.assign(tmp4);
          obj1.size = MEDIUM;
          obj1.source = tmp11;
          tmp = jsx(Icon, obj1);
          num6 = 8;
          cResult[8] = tmp4;
          num7 = 9;
          cResult[9] = MEDIUM;
          num8 = 10;
          cResult[10] = tmp11;
          num9 = 11;
          cResult[11] = tmp;
          tmp14 = tmp;
        }
      }
      tmp12 = getGuildBadgeSource(tmp3, tmp9);
      cResult[5] = tmp3;
      cResult[6] = tmp9;
      cResult[7] = tmp12;
      tmp11 = tmp12;
      return;
    }
  }
} else {
  class GuildBadge {
    constructor(arg0) {
      Icon = closure_0;
      tmp = closure_1;
      obj = closure_0(closure_1[10]);
      cResult = obj.c(12);
      if (cResult[0] !== global) {
        ({ guild, monocolored, size } = global);
        tmp6 = closure_3;
        tmp7 = closure_2;
        tmp8 = closure_3(global, closure_2);
        num = 0;
        cResult[0] = global;
        num2 = 1;
        cResult[1] = guild;
        num3 = 2;
        cResult[2] = tmp8;
        num4 = 3;
        cResult[3] = monocolored;
        num5 = 4;
        cResult[4] = size;
        MEDIUM = size;
        tmp5 = monocolored;
        tmp4 = tmp8;
        tmp3 = guild;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
        tmp5 = cResult[3];
        MEDIUM = cResult[4];
      }
      tmp9 = undefined !== tmp5 && tmp5;
      if (undefined === MEDIUM) {
        tmp10 = GuildBadge;
        MEDIUM = GuildBadge.Sizes.MEDIUM;
      }
      if (cResult[5] === tmp3) {
        if (cResult[6] === tmp9) {
          tmp11 = cResult[7];
        }
        tmp13 = null;
        if (null == tmp11) {
          return null;
        } else {
          if (cResult[8] === tmp4) {
            if (cResult[9] === MEDIUM) {
              if (cResult[10] === tmp11) {
                tmp14 = cResult[11];
              }
              tmp19 = tmp14;
            }
          }
          tmp15 = jsx;
          Icon = Icon(tmp[11]).Icon;
          obj1 = {};
          tmp16 = obj1;
          tmp17 = tmp4;
          merged = Object.assign(tmp4);
          obj1.size = MEDIUM;
          obj1.source = tmp11;
          tmp = jsx(Icon, obj1);
          num6 = 8;
          cResult[8] = tmp4;
          num7 = 9;
          cResult[9] = MEDIUM;
          num8 = 10;
          cResult[10] = tmp11;
          num9 = 11;
          cResult[11] = tmp;
          tmp14 = tmp;
        }
      }
      tmp12 = getGuildBadgeSource(tmp3, tmp9);
      cResult[5] = tmp3;
      cResult[6] = tmp9;
      cResult[7] = tmp12;
      tmp11 = tmp12;
      return;
    }
  }
}
GuildBadge.Sizes = fn(1200).Icon.Sizes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/native/GuildBadge.tsx");

export default GuildBadge;
export { getGuildBadgeSource };