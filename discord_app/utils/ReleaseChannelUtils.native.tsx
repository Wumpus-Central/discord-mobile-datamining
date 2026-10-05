// discord_app/utils/ReleaseChannelUtils.native.tsx
import react_native from "native/ClientInfoUtils.tsx";
import PlatformUtils_mod from "PlatformUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const ReleaseChannel = react_native.getConstants().ReleaseChannel;
let PlatformUtils = PlatformUtils_mod;
PlatformUtils =
  PlatformUtils.isAndroid() && -1 === ReleaseChannel.indexOf("canary") && -1 === ReleaseChannel.indexOf("beta");
let tmp4 = !(-1 !== ReleaseChannel.indexOf("debug") || -1 !== ReleaseChannel.indexOf("developer"));
const tmp3 = -1 !== ReleaseChannel.indexOf("debug") || -1 !== ReleaseChannel.indexOf("developer");
if (tmp4) {
  tmp4 = "stable" === ReleaseChannel || PlatformUtils;
}
const result = size.fileFinishedImporting("utils/ReleaseChannelUtils.native.tsx");

export const isStable = tmp4;
export const CurrentReleaseChannel = ReleaseChannel;
