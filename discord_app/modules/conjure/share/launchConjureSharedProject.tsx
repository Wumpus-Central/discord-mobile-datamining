// === Module 12283: launchConjureSharedProject ===

// Module 12283 (launchConjureSharedProject)
import openFrameDefault from "openFrame" /* 10688 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/launchConjureSharedProject.tsx");

export default function launchConjureSharedProject(arg0) {
  ({ applicationId, guildId, channelId } = arg0);
  return openFrameDefault({ applicationId, channel: null, launch: { entry: "share", sourceChannelId: channelId, sourceGuildId: guildId }, showErrorModal: false }).launched;
};