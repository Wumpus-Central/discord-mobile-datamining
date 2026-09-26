// discord_app/modules/guild_automod/AutomodRemovedContentActionCreators.native.tsx
import util from "../../intl/index.native.tsx";
import asyncRequireImpl from "../../../_runtime/01981_asyncRequireImpl.js";
import ToastActionCreatorsDefault from "../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

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
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(17093, dependencyMap.paths),
    "AutomodRemovedContentSheet",
    { action },
  );
};
