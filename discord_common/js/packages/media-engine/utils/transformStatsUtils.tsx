// === Module 4678: transformStatsUtils ===

// Module 4678 (transformStatsUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/utils/transformStatsUtils.tsx");

export const formatSinkWantStat = function formatSinkWantStat(id, ssrc, arg2) {
  let str = id[ssrc];
  if (null == str) {
    let str2 = "100";
    if (arg2) {
      const _HermesInternal = HermesInternal;
      str2 = "" + id.any + " (any)";
    }
    str = str2;
  } else {
    str = str.toString();
  }
  return str;
};
export const formatSinkWantAsInt = function formatSinkWantAsInt(id, ssrc) {
  let any = id[ssrc];
  if (null == any) {
    any = id.any;
  }
  return any;
};