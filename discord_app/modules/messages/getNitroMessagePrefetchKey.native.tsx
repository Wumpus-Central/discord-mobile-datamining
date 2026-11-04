// discord_app/modules/messages/getNitroMessagePrefetchKey.native.tsx
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import NitroFetchExperiment from "../network/NitroFetchExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/getNitroMessagePrefetchKey.native.tsx");

export function getNitroMessagePrefetchKey(channelId) {
  if (obj.isAndroid()) {
    return NitroFetchExperiment.getMessagePrefetchKey(channelId);
  }
  obj = PlatformUtils;
}
