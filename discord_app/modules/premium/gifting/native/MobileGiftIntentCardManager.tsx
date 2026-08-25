// === Module 16813: isChannelEligible ===

// Module 16813 (isChannelEligible)
import set2 from "set" /* 692 */;
import fetchUserAffinitiesV2 from "fetchUserAffinitiesV2" /* 9229 */;
import onPostConnectionOpenDefault from "onPostConnectionOpen" /* 16814 */;
import closure_2 from "recomputeAffinities" /* 7265 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "reinjectEphemerals" /* 4623 */;
import closure_5 from "handleConnectionOpen" /* 1981 */;
import closure_6 from "getCurrentTime" /* 8331 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

require = arg1;
({ GiftIntentSecondaryAction: error, GiftIntentType: closure_8 } = GuildFeatures);
onPostConnectionOpenDefault;
class MobileGiftIntentCardManager extends tmp3 {
}
const prototype = MobileGiftIntentCardManager.prototype;
prototype["isChannelEligible"] = function isChannelEligible(channel) {
  return channel.type === set2.ChannelTypes.DM;
};
prototype["maybeSendCard"] = function maybeSendCard(id, closure_0) {
  let self = this;
  self = this;
  dependencyMap = id;
  const _require = closure_0;
  const EnableFriendAnniversaryNotifications = _require(4070).EnableFriendAnniversaryNotifications;
  if (EnableFriendAnniversaryNotifications.getSetting()) {
    if (!closure_6.isGiftIntentMessageInCooldown(closure_0)) {
      if (id === store.getChannelId()) {
        if (ready.isReady(id)) {
          if (self.trySendGiftingPromptSystemMessage(id, constants2.FRIEND_ANNIVERSARY, closure_0, constants.SEND_MESSAGE)) {
            let tmpResult = tmp(7468);
            const result = tmpResult.logMessageGiftIntentShown(closure_0);
            const userAffinity = self.getUserAffinity(closure_0);
            tmpResult = tmp(9497);
            let obj = { name: null, type: null, properties: null };
            obj[0] = tmp(503).ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION;
            obj[1] = tmp(503).ImpressionTypes.VIEW;
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
            if (closure_1_5.getChannelId() === closure_1) {
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
  const channel = self.getChannel(channelId);
  if (null != channel) {
    if (self.isChannelEligible(channel)) {
      const _Set = Set;
      const set = new Set(channel.recipients);
      const friendAnniversaries = closure_6.getFriendAnniversaries();
      const found = friendAnniversaries.find((arg0) => set.has(arg0));
      if (null != found) {
        const delayedCall = new found(channel[12]).DelayedCall(1000, () => {
          self.maybeSendCard(channel.id, found);
        });
        delayedCall.delay();
      }
    }
  }
};
prototype["onChannelSelect"] = function onChannelSelect(channelId) {
  const result = this.sendCardInSelectedChannelIfEligible(channelId.channelId);
};
prototype["sendGiftingPromptSystemMessagesIfEligible"] = function sendGiftingPromptSystemMessagesIfEligible() {
  const userAffinitiesV2 = fetchUserAffinitiesV2.fetchUserAffinitiesV2();
  const result = this.sendCardInSelectedChannelIfEligible(store.getChannelId());
};
const mobileGiftIntentCardManager = new MobileGiftIntentCardManager();
let result = require("set").fileFinishedImporting("modules/premium/gifting/native/MobileGiftIntentCardManager.tsx");

export default mobileGiftIntentCardManager;