// === Module 17884: MobileGiftIntentCardManager ===

// Module 17884 (MobileGiftIntentCardManager)
import ChannelTypes from "ChannelTypes" /* 1095 */;
import Timers from "Timers" /* 2037 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 10110 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7898 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import MessageStore from "MessageStore" /* 4977 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2096 */;
import PremiumGiftingIntentStore from "PremiumGiftingIntentStore" /* 8340 */;
import GiftIntentReconcilingManager from "GiftIntentReconcilingManager" /* 17885 */;

require = fn;
const PremiumConstants = fn(1374);
({ GiftIntentSecondaryAction: closure_7, GiftIntentType: closure_8 } = PremiumConstants);
class MobileGiftIntentCardManager extends tmp3 {
}
const prototype = MobileGiftIntentCardManager.prototype;
prototype["isChannelEligible"] = function isChannelEligible(channel) {
  return channel.type === ChannelTypes.ChannelTypes.DM;
};
prototype["maybeSendCard"] = function maybeSendCard(id, found) {
  const self = this;
  dependencyMap = id;
  _require = found;
  const EnableFriendAnniversaryNotifications = require("UserSettings").EnableFriendAnniversaryNotifications;
  if (EnableFriendAnniversaryNotifications.getSetting()) {
    if (!PremiumGiftingIntentStore.isGiftIntentMessageInCooldown(found)) {
      if (id === SelectedChannelStore.getChannelId()) {
        if (MessageStore.isReady(id)) {
          if (self.trySendGiftingPromptSystemMessage(id, constants2.FRIEND_ANNIVERSARY, found, constants.SEND_MESSAGE)) {
            const result = tmp(11007).logMessageGiftIntentShown(found);
            const userAffinity = self.getUserAffinity(found);
            const tmpResult = tmp(11007);
            const obj = { name: tmp(1249).ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION, type: tmp(1249).ImpressionTypes.VIEW, properties: null };
            const obj2 = { gift_intent_type: constants2.FRIEND_ANNIVERSARY, dm_affinity: null, channel_id: null };
            let dmProbability;
            if (userAffinity != null) {
              dmProbability = userAffinity.dmProbability;
            }
            obj2.dm_affinity = dmProbability;
            obj2.channel_id = id;
            obj.properties = obj2;
            tmp(9053).trackImpression(obj);
            const tmpResult2 = tmp(9053);
          }
        } else {
          MessageStore.whenReady(id, () => {
            if (SelectedChannelStore.getChannelId() === closure_1) {
              self.maybeSendCard(tmp, closure_0);
            }
          });
        }
      }
    }
  }
};
prototype["sendCardInSelectedChannelIfEligible"] = function sendCardInSelectedChannelIfEligible(channelId) {
  const self = this;
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    if (self.isChannelEligible(channel)) {
      const _Set = Set;
      const friendAnniversaries = PremiumGiftingIntentStore.getFriendAnniversaries();
      const found = friendAnniversaries.find((item) => set.has(item));
      if (null != found) {
        const delayedCall = new Timers.DelayedCall(1000, () => {
          self.maybeSendCard(channel.id, found);
        });
        delayedCall.delay();
      }
      const set = new Set(channel.recipients);
    }
  }
};
prototype["onChannelSelect"] = function onChannelSelect(channelId) {
  const result = this.sendCardInSelectedChannelIfEligible(channelId.channelId);
};
prototype["sendGiftingPromptSystemMessagesIfEligible"] = function sendGiftingPromptSystemMessagesIfEligible() {
  const userAffinitiesV2 = UserAffinitiesActionCreators.fetchUserAffinitiesV2();
  const result = this.sendCardInSelectedChannelIfEligible(SelectedChannelStore.getChannelId());
};
const mobileGiftIntentCardManager = new MobileGiftIntentCardManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/gifting/native/MobileGiftIntentCardManager.tsx");

export default mobileGiftIntentCardManager;