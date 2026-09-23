// discord_app/modules/vibegrations/lib/VibegrationsPatchNotesChannel.tsx
import Storage3 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3712 from "../intl/VibegrationsUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const VibegrationsPatchNotesLastChannels = "VibegrationsPatchNotesLastChannels";
const combined = "<#" + "9".repeat(20) + ">";
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPatchNotesChannel.tsx");

export const PLAY_LINE_CHANNEL_PLACEHOLDER = combined;
export const formatPlaySuffix = function formatPlaySuffix(PLAY_LINE_CHANNEL_PLACEHOLDER) {
  const intl = util.intl;
  return "\n\n" + intl.formatToPlainString(_modDef3712.bhoZhI, { channel: PLAY_LINE_CHANNEL_PLACEHOLDER });
};
export const lastPatchNotesChannel = function lastPatchNotesChannel(guildId) {
  const Storage = Storage3.Storage;
  value = Storage.get(VibegrationsPatchNotesLastChannels);
  let tmp2;
  if (value != null) {
    tmp2 = value[guildId];
  }
  return tmp2;
};
export const rememberPatchNotesChannel = function rememberPatchNotesChannel(arg0, id) {
  const Storage = Storage3.Storage;
  const obj = {};
  const Storage2 = Storage3.Storage;
  const merged = Object.assign(Storage2.get(VibegrationsPatchNotesLastChannels));
  obj[arg0] = id;
  const result = Storage.set(VibegrationsPatchNotesLastChannels, obj);
};
