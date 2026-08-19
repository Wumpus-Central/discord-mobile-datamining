// === Module 5007: isStable ===

// Module 5007 (isStable)
import getConstantsAll from "getConstants" /* 1626 */;
import obj132 from "obj132" /* 500 */;

const ReleaseChannel = getConstantsAll.getConstants().ReleaseChannel;
obj132 = obj132.isAndroid();
if (obj132) {
  obj132 = -1 === ReleaseChannel.indexOf("canary");
}
if (obj132) {
  obj132 = -1 === ReleaseChannel.indexOf("beta");
}
let tmp3 = -1 !== ReleaseChannel.indexOf("debug");
if (!tmp3) {
  tmp3 = -1 !== ReleaseChannel.indexOf("developer");
}
let tmp4 = !tmp3;
if (!tmp3) {
  tmp4 = "stable" === ReleaseChannel || obj132;
}
const result = obj132.fileFinishedImporting("utils/ReleaseChannelUtils.native.tsx");

export const isStable = tmp4;
export const CurrentReleaseChannel = ReleaseChannel;