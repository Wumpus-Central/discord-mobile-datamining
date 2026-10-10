// === Module 17992: AutomodRemovedContentActionCreators ===

// Module 17992 (AutomodRemovedContentActionCreators)
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ChannelStore from "ChannelStore" /* 2065 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodRemovedContentActionCreators.native.tsx");

export const showRemovedMessageToast = function showRemovedMessageToast(arg0, channel_id) {
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
};
export const openRemovedContentModal = function openRemovedContentModal(action) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17993, dependencyMap.paths), "AutomodRemovedContentSheet", { action });
};