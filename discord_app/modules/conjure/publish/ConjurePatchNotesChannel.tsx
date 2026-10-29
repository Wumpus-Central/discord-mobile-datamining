// === Module 12475: ConjurePatchNotesChannel ===

// Module 12475 (ConjurePatchNotesChannel)
import Storage3 from "Storage" /* 510 */;
import util from "util" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import size from "module_2" /* 2 */;

const ConjurePatchNotesLastChannelsByApp = "ConjurePatchNotesLastChannelsByApp";
const combined = "<#" + "9".repeat(20) + ">";
let result = size.fileFinishedImporting("modules/conjure/publish/ConjurePatchNotesChannel.tsx");

export const PLAY_LINE_CHANNEL_PLACEHOLDER = combined;
export function formatPlaySuffix(PLAY_LINE_CHANNEL_PLACEHOLDER) {
  const intl = util.intl;
  return "\n\n" + intl.formatToPlainString(_modDef3864["2ECgBx"], { channel: PLAY_LINE_CHANNEL_PLACEHOLDER });
}
export function lastPatchNotesChannel(applicationId) {
  const Storage = Storage3.Storage;
  value = Storage.get(ConjurePatchNotesLastChannelsByApp);
  let tmp2;
  if (value != null) {
    tmp2 = value[applicationId];
  }
  return tmp2;
}
export function rememberPatchNotesChannel(arg0, id) {
  const Storage = Storage3.Storage;
  const obj = {};
  const Storage2 = Storage3.Storage;
  const merged = Object.assign(Storage2.get(ConjurePatchNotesLastChannelsByApp));
  obj[arg0] = id;
  const result = Storage.set(ConjurePatchNotesLastChannelsByApp, obj);
}