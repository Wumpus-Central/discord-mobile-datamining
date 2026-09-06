// discord_app/modules/user_settings/PreloadedUserSettingsMigrations.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage4 from "../../../discord_common/js/packages/storage/Storage.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import wrappers from "../../../discord_common/js/packages/protos/google/protobuf/wrappers.tsx";
import user_settings_UserSettingsUtils from "UserSettingsUtils.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import HotspotStore2 from "../hotspot/index.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

require = fn;
function migrateHotspotLocation(userContent, ACTIVITY_BEB_TUTORIAL, ACCOUNT_MULTIACCOUNT_TOOLTIP) {
  const HotspotStore = HotspotStore2.HotspotStore;
  let hasHiddenHotspotResult = HotspotStore.hasHiddenHotspot(ACTIVITY_BEB_TUTORIAL);
  if (hasHiddenHotspotResult) {
    if (null == userContent.userContent) {
      const UserContentSettings = tmp(1187).UserContentSettings;
      userContent.userContent = UserContentSettings.create();
    }
    if (null == userContent.userContent.dismissedContents) {
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array();
      userContent.userContent.dismissedContents = uint8Array;
    }
    let tmpResult = tmp(1942);
    let flag = false;
    if (!tmpResult.hasBit(userContent.userContent.dismissedContents, ACCOUNT_MULTIACCOUNT_TOOLTIP)) {
      tmpResult = tmp(1942);
      userContent.userContent.dismissedContents = tmpResult.addBit(
        userContent.userContent.dismissedContents,
        ACCOUNT_MULTIACCOUNT_TOOLTIP,
      );
      flag = true;
    }
    hasHiddenHotspotResult = flag;
  }
  return hasHiddenHotspotResult;
}
const ChannelNoticeTypes = fn(1074).ChannelNoticeTypes;
let closure_5 = fn(12414).MULTIACCOUNT_TOOLTIP_SEEN_KEY;
let items = [
  {
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
        const Storage = tmp16(510).Storage;
        value = Storage.get("recentsButtonTab2");
        if (null == value) {
          const Storage2 = tmp16(510).Storage;
          value = Storage2.get("unread-messages-collapsed-channels");
          if (value == null) {
            value = {};
          }
          let flag4 = flag2;
          let tmp4 = flag2;
          const keys = Object.keys();
          if (keys !== undefined) {
            tmp4 = flag4;
            while (keys[tmp] !== undefined) {
              if (!value[tmp7]) {
                continue;
              } else {
                let channel = ChannelStore.getChannel(tmp7);
                flag4 = tmp6;
                if (null == channel) {
                  continue;
                } else {
                  let obj2 = user_settings_UserSettingsUtils;
                  let str4 = channel.guild_id;
                  if (str4 == null) {
                    str4 = "0";
                  }
                  let result = obj2.mutateUserChannelSettings(inbox, str4, channel.id, (arg0) => {
                    arg0.collapsedInInbox = true;
                  });
                  flag4 = true;
                  continue;
                }
                continue;
              }
              continue;
            }
          }
          return tmp4;
        } else {
          if (value === { Mentions: "Recent Mentions", Unreads: "Inbox" }.Mentions) {
            let UNREADS = tmp16(1187).InboxTab.MENTIONS;
          } else {
            UNREADS = tmp16(1187).InboxTab.UNREADS;
          }
          obj.currentTab = UNREADS;
        }
      }
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("seenInboxTutorial");
      const Storage2 = Storage4.Storage;
      Storage2.remove("recentsButtonTab2");
      const Storage3 = Storage4.Storage;
      Storage3.remove("unread-messages-collapsed-channels");
    },
  },
  {
    version: 3,
    run(textAndImages) {
      const PersistedStore = initializeDefault.PersistedStore;
      const items = [
        () => {
          const Storage = Storage4.Storage;
          const diversitySurrogate = Storage.get("EmojiDiversitySurrogate") || "";
          return { diversitySurrogate };
        },
      ];
      const state = PersistedStore.migrateAndReadStoreState("EmojiStore", items).state;
      if (null == state) {
        return false;
      } else {
        let tmp2 = null != state.diversitySurrogate;
        if (tmp2) {
          tmp2 = "" !== state.diversitySurrogate;
        }
        let flag = false;
        if (tmp2) {
          if (null == textAndImages.textAndImages) {
            const TextAndImagesSettings = preloaded_user_settings.TextAndImagesSettings;
            textAndImages.textAndImages = TextAndImagesSettings.create();
          }
          if (null == textAndImages.textAndImages.diversitySurrogate) {
            const StringValue = wrappers.StringValue;
            textAndImages.textAndImages.diversitySurrogate = StringValue.create();
          }
          textAndImages.textAndImages.diversitySurrogate.value = state.diversitySurrogate;
          flag = true;
        }
        return flag;
      }
    },
    cleanup() {},
  },
  {
    version: 4,
    run(userContent) {
      const Storage = Storage4.Storage;
      let hasHiddenHotspotResult = true === Storage.get("HAS_SEEN_HUB_UPSELL");
      if (!hasHiddenHotspotResult) {
        const HotspotStore = tmp(7213).HotspotStore;
        hasHiddenHotspotResult = HotspotStore.hasHiddenHotspot(
          tmp(7213).HotspotLocations.HUB_SECOND_EMAIL_CONNECTION_UPSELL,
        );
      }
      let flag = false;
      if (hasHiddenHotspotResult) {
        const HUB_WAITLIST_UPSELL = tmp(1943).DismissibleContent.HUB_WAITLIST_UPSELL;
        if (null == userContent.userContent) {
          const UserContentSettings = tmp(1187).UserContentSettings;
          userContent.userContent = UserContentSettings.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array();
          userContent.userContent.dismissedContents = uint8Array;
        }
        let tmpResult = tmp(1942);
        let flag2 = false;
        if (!tmpResult.hasBit(userContent.userContent.dismissedContents, HUB_WAITLIST_UPSELL)) {
          tmpResult = tmp(1942);
          userContent.userContent.dismissedContents = tmpResult.addBit(
            userContent.userContent.dismissedContents,
            HUB_WAITLIST_UPSELL,
          );
          flag2 = true;
        }
        flag = flag2;
      }
      return flag;
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("HAS_SEEN_HUB_UPSELL");
    },
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
        const BoolValue = tmp13(1218).BoolValue;
        obj = { value: null };
        obj.value = obj.useRichChatTextBox;
        textAndImages.textAndImages.useRichChatInput = BoolValue.create(obj);
        flag = true;
      }
      if (typeof obj.renderSpoilers === "string") {
        const StringValue = tmp13(1218).StringValue;
        const obj1 = { value: obj.renderSpoilers };
        textAndImages.textAndImages.renderSpoilers = StringValue.create(obj1);
        flag = true;
      }
      if (typeof obj.useThreadSidebar === "boolean") {
        const BoolValue2 = tmp13(1218).BoolValue;
        const obj2 = { value: obj.useThreadSidebar };
        textAndImages.textAndImages.useThreadSidebar = BoolValue2.create(obj2);
        flag = true;
      }
      if (typeof obj.showInAppNotifications === "boolean") {
        const BoolValue3 = tmp13(1218).BoolValue;
        const obj3 = { value: obj.showInAppNotifications };
        textAndImages.notifications.showInAppNotifications = BoolValue3.create(obj3);
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
        const BoolValue4 = tmp13(1218).BoolValue;
        const obj4 = { value: obj.viewImageDescriptions };
        textAndImages.textAndImages.viewImageDescriptions = BoolValue4.create(obj4);
        flag = true;
      }
      if (typeof obj.showCommandSuggestions === "boolean") {
        const BoolValue5 = tmp13(1218).BoolValue;
        const obj5 = { value: obj.showCommandSuggestions };
        textAndImages.textAndImages.showCommandSuggestions = BoolValue5.create(obj5);
        flag = true;
      }
      if (typeof obj.alwaysPreviewVideo === "boolean") {
        const BoolValue6 = tmp13(1218).BoolValue;
        const obj6 = { value: obj.alwaysPreviewVideo };
        textAndImages.voiceAndVideo.alwaysPreviewVideo = BoolValue6.create(obj6);
        flag = true;
      }
      if (typeof obj.notifyFriendsOnGoLive === "boolean") {
        const BoolValue7 = tmp13(1218).BoolValue;
        const obj7 = { value: obj.notifyFriendsOnGoLive };
        textAndImages.notifications.notifyFriendsOnGoLive = BoolValue7.create(obj7);
        flag = true;
      }
      if (typeof obj.installShortcutDesktop === "boolean") {
        const BoolValue8 = tmp13(1218).BoolValue;
        const obj8 = { value: obj.installShortcutDesktop };
        textAndImages.gameLibrary.installShortcutDesktop = BoolValue8.create(obj8);
        flag = true;
      }
      if (typeof obj.installShortcutStartMenu === "boolean") {
        const BoolValue9 = tmp13(1218).BoolValue;
        const obj9 = { value: obj.installShortcutStartMenu };
        textAndImages.gameLibrary.installShortcutStartMenu = BoolValue9.create(obj9);
        flag = true;
      }
      if (typeof obj.allowActivityPartyPrivacyFriends === "boolean") {
        const BoolValue10 = tmp13(1218).BoolValue;
        const obj10 = { value: obj.allowActivityPartyPrivacyFriends };
        textAndImages.privacy.allowActivityPartyPrivacyFriends = BoolValue10.create(obj10);
        flag = true;
      }
      if (typeof obj.allowActivityPartyPrivacyVoiceChannel === "boolean") {
        const BoolValue11 = tmp13(1218).BoolValue;
        const obj11 = { value: obj.allowActivityPartyPrivacyVoiceChannel };
        textAndImages.privacy.allowActivityPartyPrivacyVoiceChannel = BoolValue11.create(obj11);
        flag = true;
      }
      if (typeof obj.rtcPanelShowVoiceStates === "boolean") {
        const BoolValue12 = tmp13(1218).BoolValue;
        const obj12 = { value: obj.rtcPanelShowVoiceStates };
        textAndImages.debug.rtcPanelShowVoiceStates = BoolValue12.create(obj12);
        flag = true;
      }
      return flag;
    },
    cleanup() {},
  },
  {
    version: 7,
    run(userContent) {
      return migrateHotspotLocation(
        userContent,
        HotspotStore2.HotspotLocations.APPLICATION_COMMAND_TOOLTIP,
        dismissible_content.DismissibleContent.APPLICATION_COMMAND_TOOLTIP,
      );
    },
    cleanup() {},
  },
  {
    version: 8,
    run(userContent) {
      return migrateHotspotLocation(
        userContent,
        HotspotStore2.HotspotLocations.CHANNEL_BANNER_MEMBER_LIST_NOTICE,
        dismissible_content.DismissibleContent.CHANNELINFO_CHANNELBANNER_NOTICE,
      );
    },
    cleanup() {},
  },
  {
    version: 9,
    run(userContent) {
      const HotspotStore = HotspotStore2.HotspotStore;
      if (HotspotStore.hasHiddenHotspot(HotspotStore2.HotspotLocations.MULTI_ACCOUNT_TOOLTIP)) {
        const Storage = tmp(510).Storage;
        const result = Storage.set(closure_5, "true");
      }
      return migrateHotspotLocation(
        userContent,
        HotspotStore2.HotspotLocations.MULTI_ACCOUNT_TOOLTIP,
        dismissible_content.DismissibleContent.ACCOUNT_MULTIACCOUNT_TOOLTIP,
      );
    },
    cleanup() {},
  },
  {
    version: 10,
    run(userContent) {
      let flag = migrateHotspotLocation(
        userContent,
        HotspotStore2.HotspotLocations.HUB_LINK_CHANNEL_NOTICE,
        dismissible_content.DismissibleContent.CHANNEL_NOTICE_HUBLINK,
      );
      const Storage = Storage4.Storage;
      let obj = Storage.get("channelNotices");
      if (obj == null) {
        obj = {};
      }
      let tmp4 = false === obj[ChannelNoticeTypes.INVITE];
      if (tmp4) {
        const CHANNEL_NOTICE_INVITE = tmp(1943).DismissibleContent.CHANNEL_NOTICE_INVITE;
        if (null == userContent.userContent) {
          const UserContentSettings = tmp(1187).UserContentSettings;
          userContent.userContent = UserContentSettings.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array();
          userContent.userContent.dismissedContents = uint8Array;
        }
        let tmpResult = tmp(1942);
        let flag2 = false;
        if (!tmpResult.hasBit(userContent.userContent.dismissedContents, CHANNEL_NOTICE_INVITE)) {
          tmpResult = tmp(1942);
          userContent.userContent.dismissedContents = tmpResult.addBit(
            userContent.userContent.dismissedContents,
            CHANNEL_NOTICE_INVITE,
          );
          flag2 = true;
        }
        tmp4 = flag2;
      }
      if (tmp4) {
        flag = true;
      }
      let tmp10 = false === obj[tmp3.QUICKSWITCHER];
      if (tmp10) {
        const CHANNEL_NOTICE_QUICKSWITCHER = tmp(1943).DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER;
        if (null == userContent.userContent) {
          const UserContentSettings2 = tmp(1187).UserContentSettings;
          userContent.userContent = UserContentSettings2.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array2 = Uint8Array;
          const uint8Array1 = new Uint8Array();
          userContent.userContent.dismissedContents = uint8Array1;
        }
        let flag3 = false;
        if (!tmpResult1.hasBit(userContent.userContent.dismissedContents, CHANNEL_NOTICE_QUICKSWITCHER)) {
          userContent.userContent.dismissedContents = tmp(1942).addBit(
            userContent.userContent.dismissedContents,
            CHANNEL_NOTICE_QUICKSWITCHER,
          );
          flag3 = true;
          const tmpResult2 = tmp(1942);
        }
        tmp10 = flag3;
        tmpResult1 = tmp(1942);
      }
      if (tmp10) {
        flag = true;
      }
      let tmp16 = false === obj[tmp3.GUILD_BOOSTING];
      if (tmp16) {
        const CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION =
          tmp(1943).DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION;
        if (null == userContent.userContent) {
          const UserContentSettings3 = tmp(1187).UserContentSettings;
          userContent.userContent = UserContentSettings3.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array3 = Uint8Array;
          const uint8Array2 = new Uint8Array();
          userContent.userContent.dismissedContents = uint8Array2;
        }
        let flag4 = false;
        if (!tmpResult3.hasBit(userContent.userContent.dismissedContents, CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION)) {
          userContent.userContent.dismissedContents = tmp(1942).addBit(
            userContent.userContent.dismissedContents,
            CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
          );
          flag4 = true;
          const tmpResult4 = tmp(1942);
        }
        tmp16 = flag4;
        tmpResult3 = tmp(1942);
      }
      if (tmp16) {
        flag = true;
      }
      return flag;
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("channelNotices");
    },
  },
  {
    version: 11,
    run(userContent) {
      let flag = false;
      if (
        migrateHotspotLocation(
          userContent,
          HotspotStore2.HotspotLocations.GUILD_EVENT_UPSELL,
          dismissible_content.DismissibleContent.GUILD_HEADER_EVENT_UPSELL,
        )
      ) {
        flag = true;
      }
      if (
        migrateHotspotLocation(
          userContent,
          HotspotStore2.HotspotLocations.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP,
          dismissible_content.DismissibleContent.GUILD_HEADER_ANIMATED_GUILD_BANNER,
        )
      ) {
        flag = true;
      }
      return flag;
    },
    cleanup() {},
  },
  {
    version: 12,
    run(userContent) {
      const Storage = Storage4.Storage;
      value = Storage.get("hideNag");
      if (value) {
        const NAGBAR_NOTICE_DOWNLOAD = tmp(1943).DismissibleContent.NAGBAR_NOTICE_DOWNLOAD;
        if (null == userContent.userContent) {
          const UserContentSettings = tmp(1187).UserContentSettings;
          userContent.userContent = UserContentSettings.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array();
          userContent.userContent.dismissedContents = uint8Array;
        }
        let tmpResult = tmp(1942);
        let flag = false;
        if (!tmpResult.hasBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_DOWNLOAD)) {
          tmpResult = tmp(1942);
          userContent.userContent.dismissedContents = tmpResult.addBit(
            userContent.userContent.dismissedContents,
            NAGBAR_NOTICE_DOWNLOAD,
          );
          flag = true;
        }
        value = flag;
      }
      let flag2 = false;
      if (value) {
        flag2 = true;
      }
      const Storage2 = tmp(510).Storage;
      value = Storage2.get("hideConnectSpotify");
      if (value) {
        const NAGBAR_NOTICE_CONNECT_SPOTIFY = tmp(1943).DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY;
        if (null == userContent.userContent) {
          const UserContentSettings2 = tmp(1187).UserContentSettings;
          userContent.userContent = UserContentSettings2.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array2 = Uint8Array;
          const uint8Array1 = new Uint8Array();
          userContent.userContent.dismissedContents = uint8Array1;
        }
        let flag3 = false;
        if (!tmpResult1.hasBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_CONNECT_SPOTIFY)) {
          userContent.userContent.dismissedContents = tmp(1942).addBit(
            userContent.userContent.dismissedContents,
            NAGBAR_NOTICE_CONNECT_SPOTIFY,
          );
          flag3 = true;
          const tmpResult2 = tmp(1942);
        }
        value = flag3;
        tmpResult1 = tmp(1942);
      }
      if (value) {
        flag2 = true;
      }
      const Storage3 = tmp(510).Storage;
      let value1 = Storage3.get("hideConnectPlayStation");
      if (value1) {
        const NAGBAR_NOTICE_CONNECT_PLAYSTATION = tmp(1943).DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION;
        if (null == userContent.userContent) {
          const UserContentSettings3 = tmp(1187).UserContentSettings;
          userContent.userContent = UserContentSettings3.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array3 = Uint8Array;
          const uint8Array2 = new Uint8Array();
          userContent.userContent.dismissedContents = uint8Array2;
        }
        let flag4 = false;
        if (!tmpResult3.hasBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_CONNECT_PLAYSTATION)) {
          userContent.userContent.dismissedContents = tmp(1942).addBit(
            userContent.userContent.dismissedContents,
            NAGBAR_NOTICE_CONNECT_PLAYSTATION,
          );
          flag4 = true;
          const tmpResult4 = tmp(1942);
        }
        value1 = flag4;
        tmpResult3 = tmp(1942);
      }
      if (value1) {
        flag2 = true;
      }
      return flag2;
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("hideNag");
      const Storage2 = Storage4.Storage;
      Storage2.remove("hideConnectSpotify");
      const Storage3 = Storage4.Storage;
      Storage3.remove("hideConnectPlayStation");
    },
  },
  {
    version: 13,
    run(userContent) {
      const Storage = Storage4.Storage;
      value = Storage.get("hidePremiumPromo");
      if (value) {
        const NAGBAR_NOTICE_PREMIUM_PROMO = tmp(1943).DismissibleContent.NAGBAR_NOTICE_PREMIUM_PROMO;
        if (null == userContent.userContent) {
          const UserContentSettings = tmp(1187).UserContentSettings;
          userContent.userContent = UserContentSettings.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array();
          userContent.userContent.dismissedContents = uint8Array;
        }
        let tmpResult = tmp(1942);
        let flag = false;
        if (!tmpResult.hasBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_PREMIUM_PROMO)) {
          tmpResult = tmp(1942);
          userContent.userContent.dismissedContents = tmpResult.addBit(
            userContent.userContent.dismissedContents,
            NAGBAR_NOTICE_PREMIUM_PROMO,
          );
          flag = true;
        }
        value = flag;
      }
      let flag2 = false;
      if (value) {
        flag2 = true;
      }
      const Storage2 = tmp(510).Storage;
      value = Storage2.get("hidePremiumTier2TrialEnding");
      if (value) {
        const NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING =
          tmp(1943).DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
        if (null == userContent.userContent) {
          const UserContentSettings2 = tmp(1187).UserContentSettings;
          userContent.userContent = UserContentSettings2.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array2 = Uint8Array;
          const uint8Array1 = new Uint8Array();
          userContent.userContent.dismissedContents = uint8Array1;
        }
        let flag3 = false;
        if (
          !tmpResult1.hasBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING)
        ) {
          userContent.userContent.dismissedContents = tmp(1942).addBit(
            userContent.userContent.dismissedContents,
            NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
          );
          flag3 = true;
          const tmpResult2 = tmp(1942);
        }
        value = flag3;
        tmpResult1 = tmp(1942);
      }
      if (value) {
        flag2 = true;
      }
      const Storage3 = tmp(510).Storage;
      let value1 = Storage3.get("hidePremiumReactivateNotice");
      if (value1) {
        const NAGBAR_NOTICE_PREMIUM_REACTIVATE = tmp(1943).DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE;
        if (null == userContent.userContent) {
          const UserContentSettings3 = tmp(1187).UserContentSettings;
          userContent.userContent = UserContentSettings3.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array3 = Uint8Array;
          const uint8Array2 = new Uint8Array();
          userContent.userContent.dismissedContents = uint8Array2;
        }
        let flag4 = false;
        if (!tmpResult3.hasBit(userContent.userContent.dismissedContents, NAGBAR_NOTICE_PREMIUM_REACTIVATE)) {
          userContent.userContent.dismissedContents = tmp(1942).addBit(
            userContent.userContent.dismissedContents,
            NAGBAR_NOTICE_PREMIUM_REACTIVATE,
          );
          flag4 = true;
          const tmpResult4 = tmp(1942);
        }
        value1 = flag4;
        tmpResult3 = tmp(1942);
      }
      if (value1) {
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
    },
  },
  {
    version: 14,
    run(userContent) {
      return migrateHotspotLocation(
        userContent,
        HotspotStore2.HotspotLocations.ACTIVITY_BEB_TUTORIAL,
        dismissible_content.DismissibleContent.ACTIVITIES_TUTORIAL_COACH_MARK,
      );
    },
    cleanup() {},
  },
  {
    version: 15,
    run(userContent) {
      return migrateHotspotLocation(
        userContent,
        HotspotStore2.HotspotLocations.NOW_PLAYING_CONSENT_CARD,
        dismissible_content.DismissibleContent.NOW_PLAYING_CONSENT_CARD,
      );
    },
    cleanup() {},
  },
  {
    version: 16,
    run(userContent) {
      const Storage = Storage4.Storage;
      value = Storage.get("PromotionsPersistedStore");
      if (null == value) {
        return false;
      } else {
        const lastDismissedOutboundPromotionStartDate = value._state.lastDismissedOutboundPromotionStartDate;
        let flag = null != lastDismissedOutboundPromotionStartDate;
        if (flag) {
          if (null == userContent.userContent) {
            const UserContentSettings = tmp(1187).UserContentSettings;
            userContent.userContent = UserContentSettings.create();
          }
          flag = null == userContent.userContent.lastDismissedOutboundPromotionStartDate;
        }
        if (flag) {
          const StringValue = tmp(1218).StringValue;
          const obj = { value: lastDismissedOutboundPromotionStartDate };
          userContent.userContent.lastDismissedOutboundPromotionStartDate = StringValue.create(obj);
          flag = true;
        }
        return flag;
      }
    },
    cleanup() {},
  },
  {
    version: 17,
    run(textAndImages) {
      const PersistedStore = initializeDefault.PersistedStore;
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
          const BoolValue = wrappers.BoolValue;
          const obj = { value: expressionSuggestionsEnabled };
          textAndImages.textAndImages.expressionSuggestionsEnabled = BoolValue.create(obj);
          flag = true;
        }
        return flag;
      }
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("ExpressionSuggestionsPersistedStore");
    },
  },
  {
    version: 18,
    run(userContent) {
      let flag = false;
      if (
        migrateHotspotLocation(
          userContent,
          HotspotStore2.HotspotLocations.GUILD_DELETE_FEEDBACK,
          dismissible_content.DismissibleContent.GUILD_DELETE_FEEDBACK,
        )
      ) {
        flag = true;
      }
      if (
        migrateHotspotLocation(
          userContent,
          HotspotStore2.HotspotLocations.GUILD_LEAVE_FEEDBACK,
          dismissible_content.DismissibleContent.GUILD_LEAVE_FEEDBACK,
        )
      ) {
        flag = true;
      }
      return flag;
    },
    cleanup() {},
  },
  {
    version: 19,
    run(userContent) {
      const Storage = Storage4.Storage;
      let flag = Storage.get("forumHelperCardStorageKey");
      if (flag == null) {
        flag = false;
      }
      let flag2 = false;
      if (flag) {
        const FORUM_CHANNEL_HELPER_CARD = tmp(1943).DismissibleContent.FORUM_CHANNEL_HELPER_CARD;
        if (null == userContent.userContent) {
          const UserContentSettings = tmp(1187).UserContentSettings;
          userContent.userContent = UserContentSettings.create();
        }
        if (null == userContent.userContent.dismissedContents) {
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array();
          userContent.userContent.dismissedContents = uint8Array;
        }
        let tmpResult = tmp(1942);
        let flag3 = false;
        if (!tmpResult.hasBit(userContent.userContent.dismissedContents, FORUM_CHANNEL_HELPER_CARD)) {
          tmpResult = tmp(1942);
          userContent.userContent.dismissedContents = tmpResult.addBit(
            userContent.userContent.dismissedContents,
            FORUM_CHANNEL_HELPER_CARD,
          );
          flag3 = true;
        }
        flag2 = flag3;
      }
      return flag2;
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("forumHelperCardStorageKey");
    },
  },
  {
    version: 20,
    run(userContent) {
      const Storage = Storage4.Storage;
      value = Storage.get("lastChangeLogId");
      if (null == value) {
        return false;
      } else {
        if (tmpResult.isSnowflake(value)) {
          if (null == userContent.userContent) {
            const UserContentSettings = tmp(1187).UserContentSettings;
            userContent.userContent = UserContentSettings.create();
          } else if (null != userContent.userContent) {
            if (null != userContent.userContent.lastReceivedChangelogId) {
              if ("0" !== userContent.userContent.lastReceivedChangelogId) {
                const Storage3 = tmp(510).Storage;
                Storage3.remove("lastChangeLogId");
                return false;
              }
            }
          }
          userContent.userContent.lastReceivedChangelogId = value;
          return true;
        } else {
          const Storage2 = tmp(510).Storage;
          Storage2.remove("lastChangeLogId");
          return false;
        }
        tmpResult = tmp(7521);
      }
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("lastChangeLogId");
    },
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
    cleanup() {},
  },
];
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/PreloadedUserSettingsMigrations.tsx");

export default items;
