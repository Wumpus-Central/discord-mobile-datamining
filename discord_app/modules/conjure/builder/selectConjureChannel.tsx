// === Module 12631: selectConjureChannel ===

// Module 12631 (selectConjureChannel)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6693 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4908 */;

const StaticChannelRoute = fn(4864).StaticChannelRoute;
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