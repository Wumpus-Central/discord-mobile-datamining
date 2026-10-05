// === Module 14295: PreloadedUserSettingsMigrations ===

// Module 14295 (PreloadedUserSettingsMigrations)
import get_initializedDefault from "get initialized" /* 504 */;
import Storage4 from "Storage" /* 510 */;
import Constants from "Constants" /* 1085 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import wrappers from "wrappers" /* 1228 */;
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1233 */;
import Uint8ArrayUtils from "Uint8ArrayUtils" /* 2035 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import HotspotStore2 from "HotspotStore" /* 6712 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7030 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

function migrateHotspotLocation(userContent, HUB_LINK_CHANNEL_NOTICE, CHANNEL_NOTICE_HUBLINK) {
  const HotspotStore = HotspotStore2.HotspotStore;
  let hasHiddenHotspotResult = HotspotStore.hasHiddenHotspot(HUB_LINK_CHANNEL_NOTICE);
  if (hasHiddenHotspotResult) {
    if (null == userContent.userContent) {
      const UserContentSettings = preloaded_user_settings.UserContentSettings;
      userContent.userContent = UserContentSettings.create();
    }
    if (null == userContent.userContent.dismissedContents) {
      const _Uint8Array = Uint8Array;
      const self = this;
      const self2 = this;
      userContent = userContent.userContent;
      const uint8Array = new Uint8Array();
      userContent.dismissedContents = uint8Array;
    }
    let flag = false;
    const tmpResult = Uint8ArrayUtils;
    if (!tmpResult.hasBit(userContent.userContent.dismissedContents, CHANNEL_NOTICE_HUBLINK)) {
      const userContent2 = userContent.userContent;
      const tmpResult2 = Uint8ArrayUtils;
      userContent2.dismissedContents = tmpResult2.addBit(userContent.userContent.dismissedContents, CHANNEL_NOTICE_HUBLINK);
      flag = true;
    }
    hasHiddenHotspotResult = flag;
  }
  return hasHiddenHotspotResult;
}
const ChannelNoticeTypes = Constants.ChannelNoticeTypes;
let obj = {
  version: 2,
  run(inbox) {
    if (null != inbox.inbox) {
      return false;
    } else {
      const InboxSettings = preloaded_user_settings.InboxSettings;
      const obj = InboxSettings.create();
      inbox.inbox = obj;
      const Storage3 = Storage4.Storage;
      let flag2 = false;
      if (Storage3.get("seenInboxTutorial", false)) {
        obj.viewedTutorial = true;
        flag2 = true;
      }
      const Storage = Storage4.Storage;
      const value = Storage.get("recentsButtonTab2");
      if (null != value) {
        let UNREADS;
        if (value === { Mentions: "Recent Mentions", Unreads: "Inbox" }.Mentions) {
          UNREADS = preloaded_user_settings.InboxTab.MENTIONS;
        } else {
          UNREADS = preloaded_user_settings.InboxTab.UNREADS;
        }
        obj.currentTab = UNREADS;
        flag2 = true;
      }
      const Storage2 = Storage4.Storage;
      let value2 = Storage2.get("unread-messages-collapsed-channels");
      if (value2 == null) {
        value2 = {};
      }
      let flag3 = flag2;
      let tmp4 = flag2;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp4 = flag3;
        while (keys[tmp] !== undefined) {
          if (!value2[tmp7]) {
            continue;
          } else {
            let channel = ChannelStore.getChannel(tmp7);
            flag3 = tmp6;
            if (null == channel) {
              continue;
            } else {
              let tmp12 = user_settings_UserSettingsUtils;
              let str4 = channel.guild_id;
              let mutateUserChannelSettings = tmp12.mutateUserChannelSettings;
              if (str4 == null) {
                str4 = "0";
              }
              let result = mutateUserChannelSettings(inbox, str4, channel.id, (arg0) => {
                arg0.collapsedInInbox = true;
              });
              flag3 = true;
              continue;
            }
            continue;
          }
          continue;
        }
      }
      return tmp4;
    }
  },
  cleanup() {
    const Storage = Storage4.Storage;
    Storage.remove("seenInboxTutorial");
    const Storage2 = Storage4.Storage;
    Storage2.remove("recentsButtonTab2");
    const Storage3 = Storage4.Storage;
    Storage3.remove("unread-messages-collapsed-channels");
  }
};
let items = [
  obj,
  {
    version: 3,
    run(textAndImages) {
      const PersistedStore = get_initializedDefault.PersistedStore;
      const items = [
        () => {
          const Storage = Storage4.Storage;
          const diversitySurrogate = Storage.get("EmojiDiversitySurrogate") || "";
          return { diversitySurrogate };
        }
      ];
      const state = PersistedStore.migrateAndReadStoreState("EmojiStore", items).state;
      if (null == state) {
        return false;
      } else {
        let flag = false;
        const tmp2 = null != state.diversitySurrogate && "" !== state.diversitySurrogate;
        if (tmp2) {
          if (null == textAndImages.textAndImages) {
            const TextAndImagesSettings = preloaded_user_settings.TextAndImagesSettings;
            textAndImages.textAndImages = TextAndImagesSettings.create();
          }
          if (null == textAndImages.textAndImages.diversitySurrogate) {
            textAndImages = textAndImages.textAndImages;
            const StringValue = wrappers.StringValue;
            textAndImages.diversitySurrogate = StringValue.create();
          }
          textAndImages.textAndImages.diversitySurrogate.value = state.diversitySurrogate;
          flag = true;
        }
        return flag;
      }
    },
    cleanup() {

    }
  },
  {
    version: 5,
    run(textAndImages) {
      textAndImages = textAndImages.textAndImages;
      if (textAndImages == null) {
        const TextAndImagesSettings = preloaded_user_settings.TextAndImagesSettings;
        textAndImages = TextAndImagesSettings.create();
      }
      textAndImages.textAndImages = textAndImages;
      let notifications = textAndImages.notifications;
      if (notifications == null) {
        const NotificationSettings = preloaded_user_settings.NotificationSettings;
        notifications = NotificationSettings.create();
      }
      textAndImages.notifications = notifications;
      let privacy = textAndImages.privacy;
      if (privacy == null) {
        const PrivacySettings = preloaded_user_settings.PrivacySettings;
        privacy = PrivacySettings.create();
      }
      textAndImages.privacy = privacy;
      let voiceAndVideo = textAndImages.voiceAndVideo;
      if (voiceAndVideo == null) {
        const VoiceAndVideoSettings = preloaded_user_settings.VoiceAndVideoSettings;
        voiceAndVideo = VoiceAndVideoSettings.create();
      }
      textAndImages.voiceAndVideo = voiceAndVideo;
      let gameLibrary = textAndImages.gameLibrary;
      if (gameLibrary == null) {
        const GameLibrarySettings = preloaded_user_settings.GameLibrarySettings;
        gameLibrary = GameLibrarySettings.create();
      }
      textAndImages.gameLibrary = gameLibrary;
      let debug = textAndImages.debug;
      if (debug == null) {
        const DebugSettings = preloaded_user_settings.DebugSettings;
        debug = DebugSettings.create();
      }
      textAndImages.debug = debug;
      const Storage = Storage4.Storage;
      let obj = Storage.get("UserSettingsStore");
      if (obj == null) {
        obj = {};
      }
      let flag = false;
      if (typeof obj.useRichChatTextBox === "boolean") {
        const textAndImages2 = textAndImages.textAndImages;
        const BoolValue = wrappers.BoolValue;
        const obj2 = { value: obj.useRichChatTextBox };
        textAndImages2.useRichChatInput = BoolValue.create(obj2);
        flag = true;
      }
      if (typeof obj.renderSpoilers === "string") {
        const textAndImages3 = textAndImages.textAndImages;
        const StringValue = wrappers.StringValue;
        const obj3 = { value: obj.renderSpoilers };
        textAndImages3.renderSpoilers = StringValue.create(obj3);
        flag = true;
      }
      if (typeof obj.useThreadSidebar === "boolean") {
        const textAndImages4 = textAndImages.textAndImages;
        const BoolValue2 = wrappers.BoolValue;
        const obj4 = { value: obj.useThreadSidebar };
        textAndImages4.useThreadSidebar = BoolValue2.create(obj4);
        flag = true;
      }
      if (typeof obj.showInAppNotifications === "boolean") {
        const notifications2 = textAndImages.notifications;
        const BoolValue3 = wrappers.BoolValue;
        const obj5 = { value: obj.showInAppNotifications };
        notifications2.showInAppNotifications = BoolValue3.create(obj5);
        flag = true;
      }
      if (obj.emojiPickerCollapsedSections instanceof Array) {
        textAndImages.textAndImages.emojiPickerCollapsedSections = obj.emojiPickerCollapsedSections;
        flag = true;
      }
      if (obj.stickerPickerCollapsedSections instanceof Array) {
        textAndImages.textAndImages.stickerPickerCollapsedSections = obj.stickerPickerCollapsedSections;
        flag = true;
      }
      if (typeof obj.viewImageDescriptions === "boolean") {
        const textAndImages5 = textAndImages.textAndImages;
        const BoolValue4 = wrappers.BoolValue;
        const obj6 = { value: obj.viewImageDescriptions };
        textAndImages5.viewImageDescriptions = BoolValue4.create(obj6);
        flag = true;
      }
      if (typeof obj.showCommandSuggestions === "boolean") {
        const textAndImages6 = textAndImages.textAndImages;
        const BoolValue5 = wrappers.BoolValue;
        const obj7 = { value: obj.showCommandSuggestions };
        textAndImages6.showCommandSuggestions = BoolValue5.create(obj7);
        flag = true;
      }
      if (typeof obj.alwaysPreviewVideo === "boolean") {
        const voiceAndVideo2 = textAndImages.voiceAndVideo;
        const BoolValue6 = wrappers.BoolValue;
        const obj8 = { value: obj.alwaysPreviewVideo };
        voiceAndVideo2.alwaysPreviewVideo = BoolValue6.create(obj8);
        flag = true;
      }
      if (typeof obj.notifyFriendsOnGoLive === "boolean") {
        const notifications3 = textAndImages.notifications;
        const BoolValue7 = wrappers.BoolValue;
        const obj9 = { value: obj.notifyFriendsOnGoLive };
        notifications3.notifyFriendsOnGoLive = BoolValue7.create(obj9);
        flag = true;
      }
      if (typeof obj.installShortcutDesktop === "boolean") {
        const gameLibrary2 = textAndImages.gameLibrary;
        const BoolValue8 = wrappers.BoolValue;
        const obj10 = { value: obj.installShortcutDesktop };
        gameLibrary2.installShortcutDesktop = BoolValue8.create(obj10);
        flag = true;
      }
      if (typeof obj.installShortcutStartMenu === "boolean") {
        const gameLibrary3 = textAndImages.gameLibrary;
        const BoolValue9 = wrappers.BoolValue;
        const obj11 = { value: obj.installShortcutStartMenu };
        gameLibrary3.installShortcutStartMenu = BoolValue9.create(obj11);
        flag = true;
      }
      if (typeof obj.allowActivityPartyPrivacyFriends === "boolean") {
        const privacy2 = textAndImages.privacy;
        const BoolValue10 = wrappers.BoolValue;
        const obj12 = { value: obj.allowActivityPartyPrivacyFriends };
        privacy2.allowActivityPartyPrivacyFriends = BoolValue10.create(obj12);
        flag = true;
      }
      if (typeof obj.allowActivityPartyPrivacyVoiceChannel === "boolean") {
        const privacy3 = textAndImages.privacy;
        const BoolValue11 = wrappers.BoolValue;
        const obj13 = { value: obj.allowActivityPartyPrivacyVoiceChannel };
        privacy3.allowActivityPartyPrivacyVoiceChannel = BoolValue11.create(obj13);
        flag = true;
      }
      if (typeof obj.rtcPanelShowVoiceStates === "boolean") {
        const debug2 = textAndImages.debug;
        const BoolValue12 = wrappers.BoolValue;
        const obj14 = { value: obj.rtcPanelShowVoiceStates };
        debug2.rtcPanelShowVoiceStates = BoolValue12.create(obj14);
        flag = true;
      }
      return flag;
    },
    cleanup() {

    }
  },
  {
    version: 10,
    run(userContent) {
      let flag = migrateHotspotLocation(userContent, HotspotStore2.HotspotLocations.HUB_LINK_CHANNEL_NOTICE, dismissible_content.DismissibleContent.CHANNEL_NOTICE_HUBLINK);
      const Storage = Storage4.Storage;
      let obj = Storage.get("channelNotices");
      if (obj == null) {
        obj = {};
      }
      let tmp4 = false === obj[ChannelNoticeTypes.INVITE];
      if (tmp4) {
        const CHANNEL_NOTICE_INVITE = dismissible_content.DismissibleContent.CHANNEL_NOTICE_INVITE;
        if (null == userContent.userContent) {
          const UserContentSettings = preloaded_user_settings.UserContentSettings;
          userContent.userContent = UserContentSettings.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array = Uint8Array;
          const self = this;
          const self2 = this;
          userContent = userContent.userContent;
          const uint8Array = new Uint8Array();
          userContent.dismissedContents = uint8Array;
        }
        let flag2 = false;
        const tmpResult = Uint8ArrayUtils;
        if (!tmpResult.hasBit(userContent.userContent.dismissedContents, CHANNEL_NOTICE_INVITE)) {
          const userContent2 = userContent.userContent;
          const tmpResult6 = Uint8ArrayUtils;
          userContent2.dismissedContents = tmpResult6.addBit(userContent.userContent.dismissedContents, CHANNEL_NOTICE_INVITE);
          flag2 = true;
        }
        tmp4 = flag2;
      }
      if (tmp4) {
        flag = true;
      }
      let tmp8 = false === obj[ChannelNoticeTypes.QUICKSWITCHER];
      if (tmp8) {
        const CHANNEL_NOTICE_QUICKSWITCHER = dismissible_content.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER;
        if (null == userContent.userContent) {
          const UserContentSettings2 = preloaded_user_settings.UserContentSettings;
          userContent.userContent = UserContentSettings2.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array2 = Uint8Array;
          const self3 = this;
          const self4 = this;
          const userContent3 = userContent.userContent;
          const uint8Array1 = new Uint8Array();
          userContent3.dismissedContents = uint8Array1;
        }
        let flag3 = false;
        const tmpResult7 = Uint8ArrayUtils;
        if (!tmpResult7.hasBit(userContent.userContent.dismissedContents, CHANNEL_NOTICE_QUICKSWITCHER)) {
          const userContent4 = userContent.userContent;
          const tmpResult8 = Uint8ArrayUtils;
          userContent4.dismissedContents = tmpResult8.addBit(userContent.userContent.dismissedContents, CHANNEL_NOTICE_QUICKSWITCHER);
          flag3 = true;
        }
        tmp8 = flag3;
      }
      if (tmp8) {
        flag = true;
      }
      let tmp12 = false === obj[ChannelNoticeTypes.GUILD_BOOSTING];
      if (tmp12) {
        const CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION = dismissible_content.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION;
        if (null == userContent.userContent) {
          const UserContentSettings3 = preloaded_user_settings.UserContentSettings;
          userContent.userContent = UserContentSettings3.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array3 = Uint8Array;
          const self5 = this;
          const self6 = this;
          const userContent5 = userContent.userContent;
          const uint8Array2 = new Uint8Array();
          userContent5.dismissedContents = uint8Array2;
        }
        let flag4 = false;
        const tmpResult9 = Uint8ArrayUtils;
        if (!tmpResult9.hasBit(userContent.userContent.dismissedContents, CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION)) {
          const userContent6 = userContent.userContent;
          const tmpResult10 = Uint8ArrayUtils;
          userContent6.dismissedContents = tmpResult10.addBit(userContent.userContent.dismissedContents, CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION);
          flag4 = true;
        }
        tmp12 = flag4;
      }
      if (tmp12) {
        flag = true;
      }
      return flag;
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("channelNotices");
    }
  },
  {
    version: 12,
    run(userContent) {
      const Storage = Storage4.Storage;
      let value = Storage.get("hideNag");
      if (value) {
        const NAGBAR_NOTICE_DOWNLOAD = dismissible_content.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD;
        if (null == userContent.userContent) {
          const UserContentSettings = preloaded_user_settings.UserContentSettings;
          userContent.userContent = UserContentSettings.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array = Uint8Array;
          const self = this;
          const self2 = this;
          userContent = userContent.userContent;
          const uint8Array = new Uint8Array();
          userContent.dismissedContents = uint8Array;
        }
        let flag = false;
        const tmpResult = Uint8ArrayUtils;
        if (!tmpResult.hasBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_DOWNLOAD)) {
          const userContent2 = userContent.userContent;
          const tmpResult4 = Uint8ArrayUtils;
          userContent2.dismissedContents = tmpResult4.addBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_DOWNLOAD);
          flag = true;
        }
        value = flag;
      }
      let flag2 = false;
      if (value) {
        flag2 = true;
      }
      const Storage2 = Storage4.Storage;
      let value2 = Storage2.get("hideConnectSpotify");
      if (value2) {
        const NAGBAR_NOTICE_CONNECT_SPOTIFY = dismissible_content.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY;
        if (null == userContent.userContent) {
          const UserContentSettings2 = preloaded_user_settings.UserContentSettings;
          userContent.userContent = UserContentSettings2.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array2 = Uint8Array;
          const self3 = this;
          const self4 = this;
          const userContent3 = userContent.userContent;
          const uint8Array1 = new Uint8Array();
          userContent3.dismissedContents = uint8Array1;
        }
        let flag3 = false;
        const tmpResult5 = Uint8ArrayUtils;
        if (!tmpResult5.hasBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_CONNECT_SPOTIFY)) {
          const userContent4 = userContent.userContent;
          const tmpResult6 = Uint8ArrayUtils;
          userContent4.dismissedContents = tmpResult6.addBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_CONNECT_SPOTIFY);
          flag3 = true;
        }
        value2 = flag3;
      }
      if (value2) {
        flag2 = true;
      }
      return flag2;
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("hideNag");
      const Storage2 = Storage4.Storage;
      Storage2.remove("hideConnectSpotify");
    }
  },
  {
    version: 13,
    run(userContent) {
      const Storage = Storage4.Storage;
      let value = Storage.get("hidePremiumPromo");
      if (value) {
        const NAGBAR_NOTICE_PREMIUM_PROMO = dismissible_content.DismissibleContent.NAGBAR_NOTICE_PREMIUM_PROMO;
        if (null == userContent.userContent) {
          const UserContentSettings = preloaded_user_settings.UserContentSettings;
          userContent.userContent = UserContentSettings.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array = Uint8Array;
          const self = this;
          const self2 = this;
          userContent = userContent.userContent;
          const uint8Array = new Uint8Array();
          userContent.dismissedContents = uint8Array;
        }
        let flag = false;
        const tmpResult = Uint8ArrayUtils;
        if (!tmpResult.hasBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_PREMIUM_PROMO)) {
          const userContent2 = userContent.userContent;
          const tmpResult6 = Uint8ArrayUtils;
          userContent2.dismissedContents = tmpResult6.addBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_PREMIUM_PROMO);
          flag = true;
        }
        value = flag;
      }
      let flag2 = false;
      if (value) {
        flag2 = true;
      }
      const Storage2 = Storage4.Storage;
      let value3 = Storage2.get("hidePremiumTier2TrialEnding");
      if (value3) {
        const NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING = dismissible_content.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
        if (null == userContent.userContent) {
          const UserContentSettings2 = preloaded_user_settings.UserContentSettings;
          userContent.userContent = UserContentSettings2.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array2 = Uint8Array;
          const self3 = this;
          const self4 = this;
          const userContent3 = userContent.userContent;
          const uint8Array1 = new Uint8Array();
          userContent3.dismissedContents = uint8Array1;
        }
        let flag3 = false;
        const tmpResult7 = Uint8ArrayUtils;
        if (!tmpResult7.hasBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING)) {
          const userContent4 = userContent.userContent;
          const tmpResult8 = Uint8ArrayUtils;
          userContent4.dismissedContents = tmpResult8.addBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING);
          flag3 = true;
        }
        value3 = flag3;
      }
      if (value3) {
        flag2 = true;
      }
      const Storage3 = Storage4.Storage;
      let value4 = Storage3.get("hidePremiumReactivateNotice");
      if (value4) {
        const NAGBAR_NOTICE_PREMIUM_REACTIVATE = dismissible_content.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE;
        if (null == userContent.userContent) {
          const UserContentSettings3 = preloaded_user_settings.UserContentSettings;
          userContent.userContent = UserContentSettings3.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array3 = Uint8Array;
          const self5 = this;
          const self6 = this;
          const userContent5 = userContent.userContent;
          const uint8Array2 = new Uint8Array();
          userContent5.dismissedContents = uint8Array2;
        }
        let flag4 = false;
        const tmpResult9 = Uint8ArrayUtils;
        if (!tmpResult9.hasBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_PREMIUM_REACTIVATE)) {
          const userContent6 = userContent.userContent;
          const tmpResult10 = Uint8ArrayUtils;
          userContent6.dismissedContents = tmpResult10.addBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_PREMIUM_REACTIVATE);
          flag4 = true;
        }
        value4 = flag4;
      }
      if (value4) {
        flag2 = true;
      }
      return flag2;
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("hidePremiumPromo");
      const Storage2 = Storage4.Storage;
      Storage2.remove("hidePremiumTier2TrialEnding");
      const Storage3 = Storage4.Storage;
      Storage3.remove("hidePremiumReactivateNotice");
    }
  },
  {
    version: 15,
    run(userContent) {
      return migrateHotspotLocation(userContent, HotspotStore2.HotspotLocations.NOW_PLAYING_CONSENT_CARD, dismissible_content.DismissibleContent.NOW_PLAYING_CONSENT_CARD);
    },
    cleanup() {

    }
  },
  {
    version: 16,
    run(userContent) {
      const Storage = Storage4.Storage;
      const value = Storage.get("PromotionsPersistedStore");
      if (null == value) {
        return false;
      } else {
        const lastDismissedOutboundPromotionStartDate = value._state.lastDismissedOutboundPromotionStartDate;
        let flag = null != lastDismissedOutboundPromotionStartDate;
        if (flag) {
          if (null == userContent.userContent) {
            const UserContentSettings = preloaded_user_settings.UserContentSettings;
            userContent.userContent = UserContentSettings.create();
          }
          flag = null == userContent.userContent.lastDismissedOutboundPromotionStartDate;
        }
        if (flag) {
          userContent = userContent.userContent;
          const StringValue = wrappers.StringValue;
          const obj = { value: lastDismissedOutboundPromotionStartDate };
          userContent.lastDismissedOutboundPromotionStartDate = StringValue.create(obj);
          flag = true;
        }
        return flag;
      }
    },
    cleanup() {

    }
  },
  {
    version: 17,
    run(textAndImages) {
      const PersistedStore = get_initializedDefault.PersistedStore;
      const state = PersistedStore.migrateAndReadStoreState("ExpressionSuggestionsPersistedStore", null).state;
      if (null == state) {
        return false;
      } else {
        const expressionSuggestionsEnabled = state.expressionSuggestionsEnabled;
        let flag = null != expressionSuggestionsEnabled;
        if (flag) {
          if (null == textAndImages.textAndImages) {
            const TextAndImagesSettings = preloaded_user_settings.TextAndImagesSettings;
            textAndImages.textAndImages = TextAndImagesSettings.create();
          }
          flag = null == textAndImages.textAndImages.expressionSuggestionsEnabled;
        }
        if (flag) {
          textAndImages = textAndImages.textAndImages;
          const BoolValue = wrappers.BoolValue;
          const obj = { value: expressionSuggestionsEnabled };
          textAndImages.expressionSuggestionsEnabled = BoolValue.create(obj);
          flag = true;
        }
        return flag;
      }
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("ExpressionSuggestionsPersistedStore");
    }
  },
  {
    version: 20,
    run(userContent) {
      const Storage = Storage4.Storage;
      const value = Storage.get("lastChangeLogId");
      if (null == value) {
        return false;
      } else {
        const tmpResult = ApplicationCommandUtils;
        if (tmpResult.isSnowflake(value)) {
          if (null == userContent.userContent) {
            const UserContentSettings = preloaded_user_settings.UserContentSettings;
            userContent.userContent = UserContentSettings.create();
          } else if (null != userContent.userContent) {
            if (null != userContent.userContent.lastReceivedChangelogId) {
              if ("0" !== userContent.userContent.lastReceivedChangelogId) {
                const Storage3 = Storage4.Storage;
                Storage3.remove("lastChangeLogId");
                return false;
              }
            }
          }
          userContent.userContent.lastReceivedChangelogId = value;
          return true;
        } else {
          const Storage2 = Storage4.Storage;
          Storage2.remove("lastChangeLogId");
          return false;
        }
      }
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("lastChangeLogId");
    }
  },
  {
    version: 21,
    run(appearance) {
      appearance = appearance.appearance;
      let uiDensity;
      if (appearance != null) {
        uiDensity = appearance.uiDensity;
      }
      let flag = uiDensity === preloaded_user_settings.UIDensity.COMPACT;
      if (flag) {
        appearance.appearance.uiDensity = preloaded_user_settings.UIDensity.DEFAULT;
        flag = true;
      }
      return flag;
    },
    cleanup() {

    }
  },
  {
    version: 22,
    run(textAndImages) {
      const Storage = Storage4.Storage;
      const value = Storage.get("UnsyncedUserSettingsStore");
      let prop;
      if (value != null) {
        const _state = value._state;
        if (_state != null) {
          prop = _state.displayCompactAvatars;
        }
      }
      let tmp5 = true === prop;
      if (tmp5) {
        if (textAndImages.textAndImages == null) {
          const TextAndImagesSettings = preloaded_user_settings.TextAndImagesSettings;
          textAndImages.textAndImages = TextAndImagesSettings.create();
        }
        let flag = null == textAndImages.textAndImages.displayCompactAvatars;
        if (flag) {
          textAndImages = textAndImages.textAndImages;
          const BoolValue = wrappers.BoolValue;
          textAndImages.displayCompactAvatars = BoolValue.create({ value: true });
          flag = true;
        }
        tmp5 = flag;
      }
      return tmp5;
    },
    cleanup() {

    }
  }
];
let result = size.fileFinishedImporting("modules/user_settings/PreloadedUserSettingsMigrations.tsx");

export default items;