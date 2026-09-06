// discord_app/modules/channel/usePrivateChannelWaveEligible.tsx
import MessageStore from "../../stores/MessageStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";

const require = fn;
const ChannelFlags = fn(1964).ChannelFlags;
const MessageTypes = fn(1074).MessageTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/usePrivateChannelWaveEligible.tsx");

export const usePrivateChannelWaveEligible = function usePrivateChannelWaveEligible(isDM, arg1) {
  _require = isDM;
  let tmp = isDM.isDM() && !isDM.isSystemDM();
  if (tmp) {
    const rawRecipients = isDM.rawRecipients;
    tmp = !rawRecipients.some((bot) => bot.bot);
  }
  let recipientId = null;
  if (tmp) {
    recipientId = isDM.getRecipientId();
  }
  const items = [RelationshipStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let isFriendResult = null != recipientId;
    if (isFriendResult) {
      isFriendResult = RelationshipStore.isFriend(tmp);
    }
    return isFriendResult;
  });
  const obj = require("initialize");
  const items1 = [RelationshipStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let isIgnoredResult = null != recipientId;
    if (isIgnoredResult) {
      isIgnoredResult = RelationshipStore.isIgnored(tmp);
    }
    return isIgnoredResult;
  });
  const obj2 = require("initialize");
  const items2 = [MessageStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
    const messages = MessageStore.getMessages(isDM.id);
    let tmp = 1 === messages.length;
    if (tmp) {
      const firstResult = messages.first();
      let type;
      if (firstResult != null) {
        type = firstResult.type;
      }
      tmp = type === MessageTypes.FRIEND_REQUEST_ACCEPTED;
    }
    return tmp;
  });
  let hasFlagResult = isDM.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
  const obj3 = require("initialize");
  const items3 = [MessageStore];
  const stateFromStores3 = require("initialize").useStateFromStores(items3, () =>
    MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id),
  );
  const obj4 = require("initialize");
  const obj5 = recipientId(11);
  const extractTimestampResult = recipientId(11).extractTimestamp(isDM.id);
  const obj6 = require("DateUtils");
  const tmp9 = recipientId(4153)();
  const isWithinIntervalResult = obj6.isWithinInterval(
    recipientId(4153)(),
    recipientId(4153)(extractTimestampResult),
    1814400000,
  );
  const strangerDangerWarning = require("useStrangerDangerWarning").useStrangerDangerWarning(isDM.id);
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
