// discord_app/modules/channel/usePrivateChannelWaveEligible.tsx
import closure_3 from "../../stores/MessageStore.tsx";
import closure_4 from "../../stores/RelationshipStore.tsx";
import { ChannelFlags } from "ChannelConstants.tsx";
import { MessageTypes } from "../../Constants.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { resetCache } from "../../utils/DateUtils.tsx";

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
  const items = [closure_4];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => {
      let isFriendResult = null != recipientId;
      if (isFriendResult) {
        isFriendResult = closure_1_4.isFriend(tmp);
      }
      return isFriendResult;
    },
  );
  const obj = initialize;
  const items1 = [closure_4];
  const stateFromStores1 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items1,
    () => {
      let isIgnoredResult = null != recipientId;
      if (isIgnoredResult) {
        isIgnoredResult = closure_1_4.isIgnored(tmp);
      }
      return isIgnoredResult;
    },
  );
  const obj2 = initialize;
  const items2 = [closure_3];
  const stateFromStores2 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items2,
    () => {
      const messages = closure_1_3.getMessages(isDM.id);
      let tmp = 1 === messages.length;
      if (tmp) {
        const firstResult = messages.first();
        let type;
        if (firstResult != null) {
          type = firstResult.type;
        }
        tmp = type === closure_1_6.FRIEND_REQUEST_ACCEPTED;
      }
      return tmp;
    },
  );
  let hasFlagResult = isDM.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
  const obj3 = initialize;
  const items3 = [closure_3];
  const stateFromStores3 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items3,
    () => closure_1_3.hasCurrentUserSentWaveBlockingMessage(isDM.id),
  );
  const obj4 = initialize;
  const obj5 = recipientId(11);
  const extractTimestampResult = recipientId(11).extractTimestamp(isDM.id);
  const obj6 = resetCache;
  const tmp9 = recipientId(4153)();
  const isWithinIntervalResult = obj6.isWithinInterval(
    recipientId(4153)(),
    recipientId(4153)(extractTimestampResult),
    1814400000,
  );
  const strangerDangerWarning =
    require("../self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx").useStrangerDangerWarning(isDM.id);
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
