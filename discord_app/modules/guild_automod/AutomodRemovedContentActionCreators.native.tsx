// === Module 19561: AutomodRemovedContentActionCreators ===

// Module 19561 (AutomodRemovedContentActionCreators)
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5832 */;
import ChannelStore from "ChannelStore" /* 4990 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodRemovedContentActionCreators.native.tsx");

export function showRemovedMessageToast(arg0, channel_id) {
  const channel = ChannelStore.getChannel(channel_id);
  let name;
  if (channel != null) {
    name = channel.name;
  }
  if (null != name) {
    const _HermesInternal = HermesInternal;
    const obj2 = { text: null };
    const combined = "AUTOMOD_REMOVED_" + channel_id;
    const intl = util.intl;
    const obj3 = { channel: null };
    const _HermesInternal2 = HermesInternal;
    obj3.channel = "#" + name;
    obj2.text = intl.formatToPlainString(util.t["9U3Wb3"], obj3);
    ToastActionCreatorsDefault.open(combined, obj2);
  }
}
export function openRemovedContentModal(action) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19562, dependencyMap.paths), "AutomodRemovedContentSheet", { action });
}