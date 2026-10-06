// discord_app/modules/conjure/publish/ConjurePatchNotesChannel.tsx
import Storage3 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import intl2 from "../../../intl/index.native.tsx";
import _modDef3753 from "../intl/ConjureUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

let set;

const VibegrationsPatchNotesLastChannelsByApp = "VibegrationsPatchNotesLastChannelsByApp";
const combined = "<#" + "9".repeat(20) + ">";
let result = size.fileFinishedImporting("modules/conjure/publish/ConjurePatchNotesChannel.tsx");

export const PLAY_LINE_CHANNEL_PLACEHOLDER = combined;
export const formatPlaySuffix = function formatPlaySuffix(PLAY_LINE_CHANNEL_PLACEHOLDER) {
  const intl = intl2.intl;
  const obj = { channel: PLAY_LINE_CHANNEL_PLACEHOLDER };
  return "\n\n" + intl.formatToPlainString(_modDef3753["2ECgBx"], obj);
};
export const lastPatchNotesChannel = function lastPatchNotesChannel(applicationId) {
  const Storage = Storage3.Storage;
  const value = Storage.get(VibegrationsPatchNotesLastChannelsByApp);
  let tmp2;
  if (value != null) {
    tmp2 = value[applicationId];
  }
  return tmp2;
};
export const rememberPatchNotesChannel = function rememberPatchNotesChannel(arg0, id) {
  const Storage = Storage3.Storage;
  const obj = {};
  set = Storage.set;
  const Storage2 = Storage3.Storage;
  const merged = Object.assign(Storage2.get(VibegrationsPatchNotesLastChannelsByApp));
  obj[arg0] = id;
  const result = set(VibegrationsPatchNotesLastChannelsByApp, obj);
};
