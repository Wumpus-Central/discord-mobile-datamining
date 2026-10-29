// === Module 11074: usePinotMemberNotice ===

// Module 11074 (usePinotMemberNotice)
import PinotMemberNoticeActionCreators from "PinotMemberNoticeActionCreators" /* 11076 */;
import noop from "module_19" /* 19 */;
import PinotMemberNoticeAckStore from "PinotMemberNoticeAckStore" /* 11075 */;

require = fn;
let closure_4 = { visible: false };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/usePinotMemberNotice.tsx");

export const usePinotMemberNotice = ReactCompilerGating.isReactCompilerEnabled() ? (function usePinotMemberNotice(guild_id, arg1) {
  const cResult = pinotPromotableChannelId(576).c(10);
  let obj = pinotPromotableChannelId(576);
  const tmp = pinotPromotableChannelId;
  pinotPromotableChannelId = pinotPromotableChannelId(11069).usePinotPromotableChannelId(guild_id, arg1);
  const obj2 = pinotPromotableChannelId(11069);
  let tmp5 = null;
  if (null != pinotPromotableChannelId) {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    tmp5 = guild_id;
  }
  let tmp7 = null;
  if (obj3.useIsPinotMemberNoticeEnabled(tmp5, arg1)) {
    tmp7 = pinotPromotableChannelId;
  }
  pinotPromotableChannelId = tmp7;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PinotMemberNoticeAckStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp7) {
    const fn = function u() {
      let isAckedResult = null != pinotPromotableChannelId;
      if (isAckedResult) {
        isAckedResult = PinotMemberNoticeAckStore.isAcked(tmp);
      }
      return isAckedResult;
    };
    const items1 = [tmp7];
    cResult[1] = tmp7;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp11 = items1;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  obj3 = pinotPromotableChannelId(11070);
  const stateFromStores = tmp(504).useStateFromStores(first, tmp10, tmp11);
  if (cResult[4] !== tmp7) {
    const fn2 = function v() {
      if (null != pinotPromotableChannelId) {
        PinotMemberNoticeActionCreators.ackPinotMemberNotice(tmp);
      }
    };
    cResult[4] = tmp7;
    cResult[5] = fn2;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp13) {
    if (cResult[7] === stateFromStores) {
      if (cResult[8] === tmp7) {
        return cResult[9];
      }
    }
  }
  if (null != tmp7) {
    if (!stateFromStores) {
      let obj4 = { visible: true, dismiss: tmp13 };
    }
    cResult[6] = tmp13;
    cResult[7] = stateFromStores;
    cResult[8] = tmp7;
    cResult[9] = obj4;
  }
  obj4 = closure_4;
  const tmpResult = tmp(504);
}) : (function usePinotMemberNotice(guild_id, arg1) {
  pinotPromotableChannelId = pinotPromotableChannelId(stateFromStores[4]).usePinotPromotableChannelId(guild_id, arg1);
  let obj = pinotPromotableChannelId(stateFromStores[4]);
  const tmp = pinotPromotableChannelId;
  const tmp2 = stateFromStores;
  let tmp4 = null;
  if (null != pinotPromotableChannelId) {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    tmp4 = guild_id;
  }
  let tmp6 = null;
  if (obj2.useIsPinotMemberNoticeEnabled(tmp4, arg1)) {
    tmp6 = pinotPromotableChannelId;
  }
  pinotPromotableChannelId = tmp6;
  obj2 = pinotPromotableChannelId(stateFromStores[5]);
  const items = [PinotMemberNoticeAckStore];
  const items1 = [tmp6];
  stateFromStores = tmp(tmp2[6]).useStateFromStores(items, () => {
    let isAckedResult = null != pinotPromotableChannelId;
    if (isAckedResult) {
      isAckedResult = PinotMemberNoticeAckStore.isAcked(tmp);
    }
    return isAckedResult;
  }, items1);
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
});