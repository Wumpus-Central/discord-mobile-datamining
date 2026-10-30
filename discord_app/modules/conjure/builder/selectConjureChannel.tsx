// === Module 12780: selectConjureChannel ===

// Module 12780 (selectConjureChannel)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6700 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;

const StaticChannelRoute = fn(4865).StaticChannelRoute;
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