// === Module 7209: isStable ===

// Module 7209 (isStable)
import getConstantsAll from "getConstants" /* 1626 */;
import set from "set" /* 500 */;

const ReleaseChannel = getConstantsAll.getConstants().ReleaseChannel;
set = set.isAndroid();
if (set) {
  set = -1 === ReleaseChannel.indexOf("canary");
}
if (set) {
  set = -1 === ReleaseChannel.indexOf("beta");
}
let tmp3 = -1 !== ReleaseChannel.indexOf("debug");
if (!tmp3) {
  tmp3 = -1 !== ReleaseChannel.indexOf("developer");
}
let tmp4 = !tmp3;
if (!tmp3) {
  tmp4 = "stable" === ReleaseChannel || set;
  const tmp5 = "stable" === ReleaseChannel || set;
}
const result = set.fileFinishedImporting("utils/ReleaseChannelUtils.native.tsx");

export const isStable = tmp4;
export const CurrentReleaseChannel = ReleaseChannel;