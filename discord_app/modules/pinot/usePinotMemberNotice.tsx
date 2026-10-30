// discord_app/modules/pinot/usePinotMemberNotice.tsx
import PinotMemberNoticeActionCreators from "PinotMemberNoticeActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import PinotMemberNoticeAckStore from "PinotMemberNoticeAckStore.tsx";

require = fn;
let closure_4 = { visible: false };
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/usePinotMemberNotice.tsx");

export function usePinotMemberNotice(channel, mobile_channel_header) {
  pinotPromotableChannelId = pinotPromotableChannelId(stateFromStores[2]).usePinotPromotableChannelId(
    channel,
    mobile_channel_header,
  );
  let obj = pinotPromotableChannelId(stateFromStores[2]);
  const tmp = pinotPromotableChannelId;
  const tmp2 = stateFromStores;
  let tmp4 = null;
  if (null != pinotPromotableChannelId) {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    tmp4 = guild_id;
  }
  let tmp6 = null;
  if (obj2.useIsPinotMemberNoticeEnabled(tmp4, mobile_channel_header)) {
    tmp6 = pinotPromotableChannelId;
  }
  pinotPromotableChannelId = tmp6;
  obj2 = pinotPromotableChannelId(stateFromStores[3]);
  const items = [PinotMemberNoticeAckStore];
  const items1 = [tmp6];
  stateFromStores = tmp(tmp2[4]).useStateFromStores(
    items,
    () => {
      let isAckedResult = null != pinotPromotableChannelId;
      if (isAckedResult) {
        isAckedResult = PinotMemberNoticeAckStore.isAcked(tmp);
      }
      return isAckedResult;
    },
    items1,
  );
  const items2 = [tmp6];
  dismiss = dismiss.useCallback(() => {
    if (null != pinotPromotableChannelId) {
      PinotMemberNoticeActionCreators.ackPinotMemberNotice(tmp);
    }
  }, items2);
  const items3 = [tmp6, stateFromStores, dismiss];
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
