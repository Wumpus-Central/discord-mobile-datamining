// discord_app/utils/ReleaseChannelUtils.native.tsx
import getConstantsAll from "native/ClientInfoUtils.tsx";
import obj132 from "PlatformUtils.tsx";

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