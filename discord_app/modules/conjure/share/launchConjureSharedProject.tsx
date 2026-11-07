// discord_app/modules/conjure/share/launchConjureSharedProject.tsx
import openFrameDefault from "../../frames/openFrame.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/share/launchConjureSharedProject.tsx");

export default function launchConjureSharedProject(arg0) {
  ({ applicationId, guildId, channelId } = arg0);
  return openFrameDefault({
    applicationId,
    channel: null,
    launch: { entry: "share", sourceChannelId: channelId, sourceGuildId: guildId },
    showErrorModal: false,
  }).launched;
}
