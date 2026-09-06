// === Module 7603: ReleaseChannelUtils ===

// Module 7603 (ReleaseChannelUtils)
import ClientInfoUtils from "ClientInfoUtils" /* 1364 */;

const ReleaseChannel = ClientInfoUtils.getConstants().ReleaseChannel;
let PlatformUtils = fn(1115);
PlatformUtils = PlatformUtils.isAndroid();
if (PlatformUtils) {
  PlatformUtils = -1 === ReleaseChannel.indexOf("canary");
}
if (PlatformUtils) {
  PlatformUtils = -1 === ReleaseChannel.indexOf("beta");
}
let tmp3 = -1 !== ReleaseChannel.indexOf("debug");
if (!tmp3) {
  tmp3 = -1 !== ReleaseChannel.indexOf("developer");
}
let tmp4 = !tmp3;
if (!tmp3) {
  tmp4 = "stable" === ReleaseChannel || PlatformUtils;
  const tmp5 = "stable" === ReleaseChannel || PlatformUtils;
}
const size = fn(2);
const result = size.fileFinishedImporting("utils/ReleaseChannelUtils.native.tsx");

export const isStable = tmp4;
export const CurrentReleaseChannel = ReleaseChannel;