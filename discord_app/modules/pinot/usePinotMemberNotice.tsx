// === Module 11322: usePinotMemberNotice ===

// Module 11322 (usePinotMemberNotice)
import PinotMemberNoticeActionCreators from "PinotMemberNoticeActionCreators" /* 11329 */;
import noop from "module_19" /* 19 */;
import PinotMemberNoticeAckStore from "PinotMemberNoticeAckStore" /* 11323 */;

require = fn;
let closure_4 = { visible: false };
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/usePinotMemberNotice.tsx");

export function usePinotMemberNotice(channel, mobile_channel_header) {
  pinotPromotableChannelId = pinotPromotableChannelId(stateFromStores[2]).usePinotPromotableChannelId(channel, mobile_channel_header);
  let obj = pinotPromotableChannelId(stateFromStores[2]);
  let tmp4 = null;
  if (null != pinotPromotableChannelId) {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    tmp4 = guild_id;
  }
  const isPinotMemberNoticeEnabled = pinotPromotableChannelId(stateFromStores[3]).useIsPinotMemberNoticeEnabled(tmp4, mobile_channel_header);
  const obj2 = pinotPromotableChannelId(stateFromStores[3]);
  const canMessageInPinotChannel = pinotPromotableChannelId(stateFromStores[4]).useCanMessageInPinotChannel(channel);
  pinotPromotableChannelId(stateFromStores[5]);
  let tmp10 = null;
  if (isPinotMemberNoticeEnabled) {
    tmp10 = null;
    if (canMessageInPinotChannel) {
      tmp10 = null;
      if (!tmp9) {
        tmp10 = pinotPromotableChannelId;
      }
    }
  }
  pinotPromotableChannelId = tmp10;
  const tmpResult = pinotPromotableChannelId(stateFromStores[4]);
  const items = [PinotMemberNoticeAckStore];
  const items1 = [tmp10];
  stateFromStores = pinotPromotableChannelId(stateFromStores[6]).useStateFromStores(items, () => {
    let isHiddenResult = null != pinotPromotableChannelId;
    if (isHiddenResult) {
      isHiddenResult = PinotMemberNoticeAckStore.isHidden(tmp);
    }
    return isHiddenResult;
  }, items1);
  const items2 = [tmp10];
  dismiss = dismiss.useCallback(() => {
    if (null != pinotPromotableChannelId) {
      PinotMemberNoticeActionCreators.ackPinotMemberNotice(tmp);
    }
  }, items2);
  const items3 = [tmp10, stateFromStores, dismiss];
  return dismiss.useMemo(() => {
    if (null != pinotPromotableChannelId) {
      if (!stateFromStores) {
        let obj = { visible: true, dismiss };
      }
      return obj;
    }
    obj = closure_4;
  }, items3);
}