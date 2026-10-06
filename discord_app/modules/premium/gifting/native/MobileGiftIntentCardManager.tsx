// discord_app/modules/premium/gifting/native/MobileGiftIntentCardManager.tsx
import ChannelTypes from "../../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import Timers from "../../../../../discord_common/js/packages/timers/Timers.tsx";
import UserAffinitiesActionCreators from "../../../user_affinities/UserAffinitiesActionCreators.tsx";
import UserAffinitiesV2Store from "../../../user_affinities/UserAffinitiesV2Store.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import MessageStore from "../../../../stores/MessageStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import PremiumGiftingIntentStore from "../PremiumGiftingIntentStore.tsx";
import PremiumConstants from "../../PremiumConstants.tsx";
import GiftIntentReconcilingManager from "../shared/GiftIntentReconcilingManager.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, set;

let metroImportAll;
let metroImportDefault;
({ GiftIntentSecondaryAction: metroImportDefault, GiftIntentType: metroImportAll } = PremiumConstants);
class MobileGiftIntentCardManager extends GiftIntentReconcilingManager {
  isChannelEligible(channel) {
    return channel.type === ChannelTypes.ChannelTypes.DM;
  }
  maybeSendCard(id, found) {
    let dmProbability;
    let obj2;
    const self = this;
    dependencyMap = id;
    _require = found;
    const tmp = _require;
    const EnableFriendAnniversaryNotifications = require("UserSettings").EnableFriendAnniversaryNotifications;
    if (EnableFriendAnniversaryNotifications.getSetting()) {
      if (!PremiumGiftingIntentStore.isGiftIntentMessageInCooldown(found)) {
        if (id === SelectedChannelStore.getChannelId()) {
          if (MessageStore.isReady(id)) {
            if (
              self.trySendGiftingPromptSystemMessage(id, constants2.FRIEND_ANNIVERSARY, found, constants.SEND_MESSAGE)
            ) {
              const tmpResult = tmp(10485);
              const result = tmpResult.logMessageGiftIntentShown(found);
              const userAffinity = self.getUserAffinity(found);
              const obj = {
                name: tmp(1260).ImpressionNames.GIFT_INTENT_UNREAD_NOTIFICATION,
                type: tmp(1260).ImpressionTypes.VIEW,
                properties: obj2,
              };
              const trackImpression = tmp(8455).trackImpression;
              tmp(8455);
              obj2 = { gift_intent_type: constants2.FRIEND_ANNIVERSARY, dm_affinity: dmProbability, channel_id: id };
              dmProbability = undefined;
              if (userAffinity != null) {
                dmProbability = userAffinity.dmProbability;
              }
              trackImpression(obj);
            }
          } else {
            MessageStore.whenReady(id, () => {
              if (SelectedChannelStore.getChannelId() === id) {
                self.maybeSendCard(tmp, found);
              }
            });
          }
        }
      }
    }
  }
  sendCardInSelectedChannelIfEligible(channelId) {
    const self = this;
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      if (self.isChannelEligible(channel)) {
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        set = new Set(channel.recipients);
        const friendAnniversaries = PremiumGiftingIntentStore.getFriendAnniversaries();
        const found = friendAnniversaries.find((item) => set.has(item));
        if (null != found) {
          const self4 = this;
          const self5 = this;
          const delayedCall = new Timers.DelayedCall(1000, () => {
            self.maybeSendCard(channel.id, found);
          });
          delayedCall.delay();
        }
      }
    }
  }
  onChannelSelect(channelId) {
    const result = this.sendCardInSelectedChannelIfEligible(channelId.channelId);
  }
  sendGiftingPromptSystemMessagesIfEligible() {
    const obj = UserAffinitiesActionCreators;
    const userAffinitiesV2 = obj.fetchUserAffinitiesV2();
    const result = this.sendCardInSelectedChannelIfEligible(SelectedChannelStore.getChannelId());
  }
}
const prototype = MobileGiftIntentCardManager.prototype;
const mobileGiftIntentCardManager = new MobileGiftIntentCardManager();
let result = size.fileFinishedImporting("modules/premium/gifting/native/MobileGiftIntentCardManager.tsx");

export default mobileGiftIntentCardManager;
