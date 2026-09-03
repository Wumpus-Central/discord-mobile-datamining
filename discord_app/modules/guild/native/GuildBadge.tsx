// discord_app/modules/guild/native/GuildBadge.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import Button from "../../../design/void/native.tsx";
import fromGuildPropertiesWithAdditionalFields from "../../../utils/GuildRecordUtils.tsx";
import registerAssetDefault from "../../../../_runtime/07686_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/07687_registerAsset.js";
import registerAssetDefault3 from "../../../../_runtime/07688_registerAsset.js";
import registerAssetDefault4 from "../../../../_runtime/07689_registerAsset.js";
import { GuildFeatures } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
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
        obj2 = fromGuildPropertiesWithAdditionalFields;
      }
    }
  } else {
    obj = fromGuildPropertiesWithAdditionalFields;
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
    merged = Object.assign(global, Object.create(null));
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
      tmp2 = jsx(require("Button").Icon, obj);
    }
    return tmp2;
  }
}
noopAll;
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
  [VERIFIED]: registerAssetDefault,
  [PARTNERED]: registerAssetDefault2,
  [VERIFIED_BLACK]: registerAssetDefault3,
  [PARTNERED_BLACK]: registerAssetDefault4,
  [obj.NONE]: null,
};
({ VERIFIED, PARTNERED, VERIFIED_BLACK, PARTNERED_BLACK } = obj);
GuildBadge.Sizes = require("Button").Icon.Sizes;
const result = require("set").fileFinishedImporting("modules/guild/native/GuildBadge.tsx");

export default GuildBadge;
export { getGuildBadgeSource };
