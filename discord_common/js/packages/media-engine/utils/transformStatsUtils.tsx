// === Module 4874: transformStatsUtils ===

// Module 4874 (transformStatsUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/utils/transformStatsUtils.tsx");

export const formatSinkWantStat = function formatSinkWantStat(id, ssrc, arg2) {
  if (null == id[ssrc]) {
    let str2 = "100";
    if (arg2) {
      const _HermesInternal = HermesInternal;
      str2 = "" + id.any + " (any)";
    }
    let str1 = str2;
  } else {
    str1 = str.toString();
  }
  return str1;
};
export const formatSinkWantAsInt = function formatSinkWantAsInt(id, ssrc) {
  let any = id[ssrc];
  if (null == any) {
    any = id.any;
  }
  return any;
};