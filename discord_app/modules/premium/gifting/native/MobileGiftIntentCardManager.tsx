// === Module 16685: isChannelEligible ===

// Module 16685 (isChannelEligible)
import set2 from "set" /* 692 */;
import fetchUserAffinitiesV2 from "fetchUserAffinitiesV2" /* 9637 */;
import onPostConnectionOpenDefault from "onPostConnectionOpen" /* 16686 */;
import closure_3 from "recomputeAffinities" /* 5407 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "reinjectEphemerals" /* 4994 */;
import closure_6 from "handleConnectionOpen" /* 1979 */;
import closure_7 from "getCurrentTime" /* 8290 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

require = arg1;
({ GiftIntentSecondaryAction: closure_8, GiftIntentType: c9 } = GuildFeatures);
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
  closure_1 = id;
  const _require = closure_0;
  const EnableFriendAnniversaryNotifications = _require(self[8]).EnableFriendAnniversaryNotifications;
  if (EnableFriendAnniversaryNotifications.getSetting()) {
    if (!closure_7.isGiftIntentMessageInCooldown(closure_0)) {
      if (id === store.getChannelId()) {
        if (ready.isReady(id)) {
          if (self.trySendGiftingPromptSystemMessage(id, constants2.FRIEND_ANNIVERSARY, closure_0, constants.SEND_MESSAGE)) {
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
            if (closure_1_6.getChannelId() === closure_1) {
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
      const friendAnniversaries = closure_7.getFriendAnniversaries();
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
let result = require("set").fileFinishedImporting("modules/premium/gifting/native/MobileGiftIntentCardManager.tsx");

export default mobileGiftIntentCardManager;