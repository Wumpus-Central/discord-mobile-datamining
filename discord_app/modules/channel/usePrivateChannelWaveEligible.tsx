import reinjectEphemerals from "reinjectEphemerals";
import upsertRelationship from "upsertRelationship";
import { ChannelFlags } from "set";
import { MessageTypes } from "ME";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/channel/usePrivateChannelWaveEligible.tsx");

export const usePrivateChannelWaveEligible = function usePrivateChannelWaveEligible(isDM, arg1) {
  const _require = isDM;
  let tmp = isDM.isDM() && !isDM.isSystemDM();
  if (tmp) {
    const rawRecipients = isDM.rawRecipients;
    tmp = !rawRecipients.some((bot) => bot.bot);
  }
  let recipientId = null;
  if (tmp) {
    recipientId = isDM.getRecipientId();
  }
  const items = [upsertRelationship];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let isFriendResult = null != recipientId;
    if (isFriendResult) {
      isFriendResult = outer1_4.isFriend(tmp);
    }
    return isFriendResult;
  });
  const obj = _require(589);
  const items1 = [upsertRelationship];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => {
    let isIgnoredResult = null != recipientId;
    if (isIgnoredResult) {
      isIgnoredResult = outer1_4.isIgnored(tmp);
    }
    return isIgnoredResult;
  });
  const obj2 = _require(589);
  const items2 = [reinjectEphemerals];
  const stateFromStores2 = _require(589).useStateFromStores(items2, () => {
    const messages = outer1_3.getMessages(isDM.id);
    let tmp = 1 === messages.length;
    if (tmp) {
      const firstResult = messages.first();
      let type;
      if (firstResult != null) {
        type = firstResult.type;
      }
      tmp = type === outer1_6.FRIEND_REQUEST_ACCEPTED;
    }
    return tmp;
  });
  let hasFlagResult = isDM.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
  const obj3 = _require(589);
  const items3 = [reinjectEphemerals];
  const stateFromStores3 = _require(589).useStateFromStores(items3, () => outer1_3.hasCurrentUserSentWaveBlockingMessage(isDM.id));
  const obj4 = _require(589);
  const obj5 = recipientId(11);
  const extractTimestampResult = recipientId(11).extractTimestamp(isDM.id);
  const obj6 = _require(3955);
  const tmp9 = recipientId(3867)();
  const isWithinIntervalResult = obj6.isWithinInterval(recipientId(3867)(), recipientId(3867)(extractTimestampResult), 1814400000);
  const strangerDangerWarning = _require(10254).useStrangerDangerWarning(isDM.id);
  if (tmp) {
    tmp = stateFromStores;
  }
  if (tmp) {
    tmp = !stateFromStores1;
  }
  if (tmp) {
    if (!hasFlagResult) {
      hasFlagResult = null == arg1;
    }
    if (!hasFlagResult) {
      hasFlagResult = stateFromStores2;
    }
    tmp = hasFlagResult;
  }
  if (tmp) {
    tmp = !stateFromStores3;
  }
  if (tmp) {
    tmp = isWithinIntervalResult;
  }
  if (tmp) {
    tmp = null == strangerDangerWarning;
  }
  return tmp;
};