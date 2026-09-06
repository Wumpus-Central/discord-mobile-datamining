// discord_app/modules/premium/gifting/native/MobileGiftIntentCardManager.tsx
import ChannelTypes from "../../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import Timers from "../../../../../discord_common/js/packages/timers/Timers.tsx";
import UserAffinitiesActionCreators from "../../../user_affinities/UserAffinitiesActionCreators.tsx";
import UserAffinitiesV2Store from "../../../user_affinities/UserAffinitiesV2Store.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import MessageStore from "../../../../stores/MessageStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import PremiumGiftingIntentStore from "../PremiumGiftingIntentStore.tsx";
import GiftIntentReconcilingManager from "../shared/GiftIntentReconcilingManager.tsx";

require = fn;
const PremiumConstants = fn(1373);
({ GiftIntentSecondaryAction: closure_7, GiftIntentType: closure_8 } = PremiumConstants);
class MobileGiftIntentCardManager extends tmp3 {}
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
          if (
            self.trySendGiftingPromptSystemMessage(id, constants2.FRIEND_ANNIVERSARY, found, constants.SEND_MESSAGE)
          ) {
            let tmpResult = tmp(10744);
            const result = tmpResult.logMessageGiftIntentShown(found);
            const userAffinity = self.getUserAffinity(found);
            tmpResult = tmp(8768);
            let obj = {
              name: tmp(1250).ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION,
              type: tmp(1250).ImpressionTypes.VIEW,
              properties: null,
            };
            obj = { gift_intent_type: constants2.FRIEND_ANNIVERSARY, dm_affinity: null, channel_id: null };
            let dmProbability;
            if (userAffinity != null) {
              dmProbability = userAffinity.dmProbability;
            }
            obj.dm_affinity = dmProbability;
            obj.channel_id = id;
            obj.properties = obj;
            tmpResult.trackImpression(obj);
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
