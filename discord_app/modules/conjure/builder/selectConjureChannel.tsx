// === Module 18672: selectConjureChannel ===

// Module 18672 (selectConjureChannel)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6408 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4695 */;

const StaticChannelRoute = fn(4648).StaticChannelRoute;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/builder/selectConjureChannel.tsx");

export default function selectConjureChannel(guildId, messageId) {
  let tmp = null != messageId;
  if (tmp) {
    tmp = SelectedChannelStore.getCurrentlySelectedChannelId() !== StaticChannelRoute.CONJURE;
  }
  if (tmp) {
    const obj2 = { guildId, channelId: StaticChannelRoute.CONJURE, messageId, opensChannel: false };
    const channel = SelectedChannelActionCreatorsDefault.selectChannel(obj2);
  }
};