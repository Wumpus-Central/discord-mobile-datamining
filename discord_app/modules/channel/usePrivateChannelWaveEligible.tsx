// discord_app/modules/channel/usePrivateChannelWaveEligible.tsx
import reinjectEphemerals from "reinjectEphemerals";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import { ChannelFlags } from "set";
import { MessageTypes } from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { resetCache } from "../../utils/DateUtils.tsx";
import { useStrangerDangerWarning } from "../self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx";

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
  const items = [markAllUserIdListsStale];
  const stateFromStores = _initialize.useStateFromStores(items, () => {
    let isFriendResult = null != recipientId;
    if (isFriendResult) {
      isFriendResult = outer1_4.isFriend(tmp);
    }
    return isFriendResult;
  });
  const obj = _initialize;
  const items1 = [markAllUserIdListsStale];
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => {
    let isIgnoredResult = null != recipientId;
    if (isIgnoredResult) {
      isIgnoredResult = outer1_4.isIgnored(tmp);
    }
    return isIgnoredResult;
  });
  const obj2 = _initialize;
  const items2 = [reinjectEphemerals];
  const stateFromStores2 = _initialize.useStateFromStores(items2, () => {
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
  const obj3 = _initialize;
  const items3 = [reinjectEphemerals];
  const stateFromStores3 = _initialize.useStateFromStores(items3, () => outer1_3.hasCurrentUserSentWaveBlockingMessage(isDM.id));
  const obj4 = _initialize;
  const obj5 = recipientId(11);
  const extractTimestampResult = recipientId(11).extractTimestamp(isDM.id);
  const obj6 = _resetCache;
  const tmp9 = recipientId(3975)();
  const isWithinIntervalResult = obj6.isWithinInterval(recipientId(3975)(), recipientId(3975)(extractTimestampResult), 1814400000);
  const strangerDangerWarning = _useStrangerDangerWarning.useStrangerDangerWarning(isDM.id);
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