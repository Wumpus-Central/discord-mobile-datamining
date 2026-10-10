// === Module 17037: ConjurePatchNotesChannel ===

// Module 17037 (ConjurePatchNotesChannel)
import Storage3 from "Storage" /* 510 */;
import util from "util" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import size from "module_2" /* 2 */;

const VibegrationsPatchNotesLastChannelsByApp = "VibegrationsPatchNotesLastChannelsByApp";
const combined = "<#" + "9".repeat(20) + ">";
let result = size.fileFinishedImporting("modules/conjure/publish/ConjurePatchNotesChannel.tsx");

export const PLAY_LINE_CHANNEL_PLACEHOLDER = combined;
export const formatPlaySuffix = function formatPlaySuffix(PLAY_LINE_CHANNEL_PLACEHOLDER) {
  const intl = util.intl;
  return "\n\n" + intl.formatToPlainString(_modDef3849["2ECgBx"], { channel: PLAY_LINE_CHANNEL_PLACEHOLDER });
};
export const lastPatchNotesChannel = function lastPatchNotesChannel(applicationId) {
  const Storage = Storage3.Storage;
  value = Storage.get(VibegrationsPatchNotesLastChannelsByApp);
  let tmp2;
  if (value != null) {
    tmp2 = value[applicationId];
  }
  return tmp2;
};
export const rememberPatchNotesChannel = function rememberPatchNotesChannel(arg0, id) {
  const Storage = Storage3.Storage;
  const obj = {};
  const Storage2 = Storage3.Storage;
  const merged = Object.assign(Storage2.get(VibegrationsPatchNotesLastChannelsByApp));
  obj[arg0] = id;
  const result = Storage.set(VibegrationsPatchNotesLastChannelsByApp, obj);
};