// === Module 17064: AutomodRemovedContentActionCreators ===

// Module 17064 (AutomodRemovedContentActionCreators)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4525 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import ChannelStore from "ChannelStore" /* 2044 */;

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
    const obj2 = { key: null, content: null };
    const _HermesInternal = HermesInternal;
    obj2.key = "AUTOMOD_REMOVED_" + channel_id;
    const intl = util.intl;
    const obj3 = { channel: null };
    const _HermesInternal2 = HermesInternal;
    obj3.channel = "#" + name;
    obj2.content = intl.formatToPlainString(util.t["9U3Wb3"], obj3);
    ToastActionCreatorsDefault.open(obj2);
  }
};
export const openRemovedContentModal = function openRemovedContentModal(action) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17065, dependencyMap.paths), "AutomodRemovedContentSheet", { action });
};