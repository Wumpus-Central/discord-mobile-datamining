// discord_app/modules/premium/gifting/native/MobileGiftIntentCardManager.tsx
import recomputeAffinities from "recomputeAffinities";
import ensureGuildLoaded from "ensureGuildLoaded";
import reinjectEphemerals from "reinjectEphemerals";
import handleConnectionOpen from "handleConnectionOpen";
import getCurrentTime from "getCurrentTime";
import GuildFeatures from "GuildFeatures";
import "onPostConnectionOpen";
import { set } from "../../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import { fetchUserAffinitiesV2 } from "../../../user_affinities/UserAffinitiesActionCreators.tsx";

let c9;
let metroImportAll;
const require = arg1;
({ GiftIntentSecondaryAction: metroImportAll, GiftIntentType: c9 } = GuildFeatures);
class MobileGiftIntentCardManager extends tmp3 {
}
const prototype = MobileGiftIntentCardManager.prototype;
prototype["isChannelEligible"] = function isChannelEligible(channel) {
  return channel.type === set.ChannelTypes.DM;
};
prototype["maybeSendCard"] = function maybeSendCard(id, closure_0) {
  let self = this;
  self = this;
  let closure_1 = id;
  const _require = closure_0;
  const EnableFriendAnniversaryNotifications = _require(self[8]).EnableFriendAnniversaryNotifications;
  if (EnableFriendAnniversaryNotifications.getSetting()) {
    if (!getCurrentTime.isGiftIntentMessageInCooldown(closure_0)) {
      if (id === store.getChannelId()) {
        if (ready.isReady(id)) {
          if (self.trySendGiftingPromptSystemMessage(id, constants2.FRIEND_ANNIVERSARY, closure_0, constants.SEND_MESSAGE, "maybeSendCard")) {
            let tmpResult = tmp(tmp2[9]);
            const result = tmpResult.logMessageGiftIntentShown(closure_0);
            userAffinity = userAffinity.getUserAffinity(closure_0);
            tmpResult = tmp(tmp2[10]);
            let obj = { name: null, type: null, properties: null };
            obj[0] = tmp(tmp2[11]).ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION;
            obj[1] = tmp(tmp2[11]).ImpressionTypes.VIEW;
            obj = { gift_intent_type: null, dm_affinity: null, channel_id: null };
            obj[0] = tmp6.FRIEND_ANNIVERSARY;
            let dmProbability;
            if (userAffinity != null) {
              dmProbability = userAffinity.dmProbability;
            }
            obj[1] = dmProbability;
            obj[2] = id;
            obj[2] = obj;
            tmpResult.trackImpression(obj);
          }
          tmp6 = constants2;
        } else {
          obj5.whenReady(id, () => {
            if (outer1_6.getChannelId() === closure_1) {
              self.maybeSendCard(tmp, closure_0);
            }
          });
        }
        obj5 = ready;
      }
    }
  }
};
prototype["sendCardInSelectedChannelIfEligible"] = function sendCardInSelectedChannelIfEligible(channelId) {
  let self = this;
  self = this;
  channel = channel.getChannel(channelId);
  if (null != channel) {
    if (self.isChannelEligible(channel)) {
      const _Set = Set;
      const set = new Set(channel.recipients);
      const friendAnniversaries = getCurrentTime.getFriendAnniversaries();
      const found = friendAnniversaries.find((arg0) => set.has(arg0));
      if (null != found) {
        const delayedCall = new found(set[12]).DelayedCall(1000, () => {
          self.maybeSendCard(channel.id, found);
        });
        delayedCall.delay();
      }
    }
  }
};
prototype["maybeFetchUserAffinities"] = function maybeFetchUserAffinities() {
  if (obj.getConfig({ location: "MobileGiftIntentCardManager" }).enabled) {
    const userAffinitiesV2 = fetchUserAffinitiesV2.fetchUserAffinitiesV2();
    const obj2 = fetchUserAffinitiesV2;
  }
};
prototype["onChannelSelect"] = function onChannelSelect(channelId) {
  const result = this.sendCardInSelectedChannelIfEligible(channelId.channelId);
};
prototype["sendGiftingPromptSystemMessagesIfEligible"] = function sendGiftingPromptSystemMessagesIfEligible() {
  const result = this.maybeFetchUserAffinities();
  const result1 = this.sendCardInSelectedChannelIfEligible(store.getChannelId());
};
const mobileGiftIntentCardManager = new MobileGiftIntentCardManager();
let result = require("reinjectEphemerals").fileFinishedImporting("modules/premium/gifting/native/MobileGiftIntentCardManager.tsx");

export default mobileGiftIntentCardManager;