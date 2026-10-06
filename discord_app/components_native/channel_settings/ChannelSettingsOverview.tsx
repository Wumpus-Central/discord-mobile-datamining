// discord_app/components_native/channel_settings/ChannelSettingsOverview.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import react_native from "../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import Constants2 from "../../../discord_common/js/shared/Constants.tsx";
import ThreadConstants from "../../modules/threads/ThreadConstants.tsx";
import intl15 from "../../intl/index.native.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import conjureTopicChannel from "../../modules/conjure/app_channel/conjureTopicChannel.tsx";
import ThreadSortOrder from "../../../discord_common/js/shared/shared-constants/ThreadSortOrder.tsx";
import ThreadSearchTagSetting from "../../../discord_common/js/shared/shared-constants/ThreadSearchTagSetting.tsx";
import GuildRecord from "../../records/GuildRecord.tsx";
import HelpdeskUtilsDefault from "../../utils/HelpdeskUtils.tsx";
import AppChannelPermissions from "../../modules/app_channels/AppChannelPermissions.tsx";
import UnicodeEmojisDefault from "../../modules/emojis/UnicodeEmojis.tsx";
import ToastActionCreatorsDefault from "../../modules/toast/native/ToastActionCreators.tsx";
import native from "../../../discord_common/js/packages/design/native.tsx";
import shared from "../../design/shared.tsx";
import XLargeIcon from "../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx";
import AssetRegistryDefault from "../../../_runtime/04811_AssetRegistry.js";
import LinkIcon from "../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import ClockIcon from "../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import ChannelUtils from "../../utils/ChannelUtils.tsx";
import useChannelName from "../../modules/channel/useChannelName.tsx";
import AppAnalyticsUtilsDefault from "../../modules/app_analytics/AppAnalyticsUtils.tsx";
import AgeGateUtils from "../../modules/age_gate/AgeGateUtils.tsx";
import Stack_Stack from "../../design/components/Stack/native/Stack.native.tsx";
import LockIcon from "../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import TableRow7 from "../../design/components/TableRow/native/TableRow.native.tsx";
import Card_Card from "../../design/components/Card/native/Card.native.tsx";
import TableRadioRow3 from "../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup2 from "../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRowGroup3 from "../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TextInput_TextInput from "../../design/components/TextInput/native/TextInput.native.tsx";
import TextArea2 from "../../design/components/TextInput/native/TextArea.native.tsx";
import TableSwitchRow2 from "../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import ThreadHooks from "../../modules/threads/ThreadHooks.tsx";
import ForumConstants from "../../modules/forums/ForumConstants.tsx";
import sanitizeThreadNameDefault from "../../modules/threads/sanitizeThreadName.tsx";
import ThreadActionCreatorsDefault from "../../modules/threads/ThreadActionCreators.tsx";
import HeaderShared from "../../modules/main_tabs_v2/native/shared_components/HeaderShared.tsx";
import ThreadAutoArchive from "../../modules/threads/ThreadAutoArchive.tsx";
import Form2 from "../../design/void/Form/native/index.tsx";
import sanitizeChannelNameDefault from "../../modules/channel/sanitizeChannelName.tsx";
import AppChannelApplicationSelectorDefault from "../../modules/app_channels/native/AppChannelApplicationSelector.tsx";
import GroupPlusIcon from "../../design/components/Icon/native/redesign/generated/GroupPlusIcon.tsx";
import ChannelSettingsActionCreatorsDefault from "../../actions/ChannelSettingsActionCreators.tsx";
import ChannelActionSheetUtils from "../../modules/channel/native/ChannelActionSheetUtils.tsx";
import AvailableForumTagDefault from "../../modules/forums/native/AvailableForumTag.tsx";
import threadActionSheets from "../../modules/threads/native/threadActionSheets.tsx";
import Slider2 from "../../design/components/Slider/native/Slider.native.tsx";
import ChannelSettingsConstants from "ChannelSettingsConstants.tsx";
import RegionActionCreatorsDefault from "../../actions/RegionActionCreators.tsx";
import SecondsSliderUtils from "../../utils/SecondsSliderUtils.tsx";
import ChannelSettingsUtils from "ChannelSettingsUtils.tsx";
import ThreadAutoArchiveBottomSheet from "../../modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx";
import getCannotSwapApplicationTextDefault from "../../modules/app_channels/getCannotSwapApplicationText.tsx";
import VoiceChannelAppSettingDefault from "../../modules/voice_channel_apps/native/VoiceChannelAppSetting.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../_runtime/00019_react.js";
import JoinedThreadsStore from "../../modules/threads/JoinedThreadsStore.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import ChannelSettingsStore from "../../stores/ChannelSettingsStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import RegionStore from "../../stores/RegionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import ChannelConstants from "../../modules/channel/ChannelConstants.tsx";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

let c2, c3, c5, c6, channelId, navigation;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
let closure_34;
let closure_35;
let closure_36;
let closure_37;
let closure_38;
let closure_39;
let closure_40;
let closure_41;
let closure_42;
let closure_43;
let closure_44;
let closure_47;
let closure_48;
let closure_49;
let map1;
let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let size1;
let unpackModuleId;
const View = react_native.View;
({
  EDITABLE_VOICE_SETTINGS_TYPES: metroImportDefault,
  isGuildTextChannelType: metroImportAll,
  THREADED_CHANNEL_TYPES: c9,
  THREAD_CHANNEL_TYPES: c10,
  SLOWMODE_CHANNEL_TYPES: unpackModuleId,
  NSFW_CHANNEL_TYPES: closure_12,
  TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES: map1,
  GUILD_WEBHOOK_CHANNEL_TYPES: closure_14,
} = ChannelRecord);
const isGuildNSFW = GuildRecord.isGuildNSFW;
let closure_25 = ChannelSettingsConstants.ChannelSettingsAutoFocusElement;
({
  AnalyticEvents: closure_26,
  BITRATE_DEFAULT: closure_27,
  BITRATE_MIN: closure_28,
  ChannelSettingsSections: closure_29,
  ChannelTypes: closure_30,
  ChannelTypesSets: closure_31,
  GuildFeatures: closure_32,
  GuildSettingsSections: closure_33,
  HelpdeskArticles: closure_34,
  MAX_CHANNEL_NAME_LENGTH: closure_35,
  MAX_VOICE_USER_LIMIT: closure_36,
  MAX_STAGE_VOICE_USER_LIMIT: closure_37,
  Permissions: closure_38,
  SettingsPaneTypes: closure_39,
  SLOWMODE_VALUES: closure_40,
  VideoQualityMode: closure_41,
} = Constants);
({
  ChannelFlags: closure_42,
  MAX_CHANNEL_TOPIC_LENGTH: closure_43,
  MAX_FORUM_CHANNEL_TOPIC_LENGTH: closure_44,
} = ChannelConstants);
const MAX_FORUM_TAGS = ForumConstants.MAX_FORUM_TAGS;
let closure_46 = ThreadConstants.DEFAULT_AUTO_ARCHIVE_DURATION;
const Fonts = Constants2.Fonts;
({ jsx: closure_47, jsxs: closure_48, Fragment: closure_49 } = Fragment);
let createStyles = createStyles_mod;
let obj = { outer: size, badge: size1 };
size = {
  position: "absolute",
  top: 2,
  right: -4,
  width: 12,
  height: 12,
  borderRadius: nativeDefault.radii.md,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles = createStyles.createStyles;
size1 = {
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  width: 8,
  height: 8,
  borderRadius: nativeDefault.radii.xs,
};
let closure_50 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let items1;
      let tmp17;
      let tmp7;
      const obj = channelId(576);
      const cResult = obj.c(12);
      channelId = channelId.channelId;
      const style = channelId.style;
      const tmp4 = closure_50();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function s() {
          return ReadStateStore.hasUnreadPins(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let tmp8;
      const tmpResult = channelId(504);
      if (tmpResult.useStateFromStores(first, tmp7)) {
        let tmp9;
        if (cResult[3] !== tmp4.badge) {
          const obj2 = { style: tmp4.badge };
          const tmp12 = closure_47(View, obj2);
          cResult[3] = tmp4.badge;
          cResult[4] = tmp12;
          tmp9 = tmp12;
        } else {
          tmp9 = cResult[4];
        }
        if (cResult[5] === tmp4.outer) {
          let tmp13;
          if (cResult[6] === tmp9) {
            tmp13 = cResult[7];
          }
          tmp8 = tmp13;
        }
        const obj3 = { style: tmp4.outer, children: tmp9 };
        const tmp16 = closure_47(View, obj3);
        cResult[5] = tmp4.outer;
        cResult[6] = tmp9;
        cResult[7] = tmp16;
        tmp13 = tmp16;
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp19 = closure_47(channelId(10705).PinIcon, {});
        cResult[8] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[8];
      }
      if (cResult[9] === tmp8) {
        let tmp20;
        if (cResult[10] === style) {
          tmp20 = cResult[11];
        }
        return tmp20;
      }
      const obj4 = { style, children: items1 };
      items1 = [tmp17, tmp8];
      const tmp21 = closure_48(View, obj4);
      cResult[9] = tmp8;
      cResult[10] = style;
      cResult[11] = tmp21;
      tmp20 = tmp21;
    }
  : (channelId) => {
      let items1;
      let obj3;
      channelId = channelId.channelId;
      const style = channelId.style;
      const tmp = closure_50();
      const items = [ReadStateStore];
      let tmp4;
      const obj = channelId(504);
      const tmp2 = channelId;
      if (obj.useStateFromStores(items, () => ReadStateStore.hasUnreadPins(channelId))) {
        const obj2 = { style: tmp.outer, children: closure_47(View, obj3) };
        obj3 = { style: tmp.badge };
        tmp4 = closure_47(View, obj2);
      }
      const obj4 = { style, children: items1 };
      items1 = [closure_47(tmp2(10705).PinIcon, {}), tmp4];
      return closure_48(View, obj4);
    };
let closure_51 = tmp8;
createStyles = createStyles_mod;
let obj2 = {
  screenContainer: obj3,
  slider: { marginHorizontal: 15 },
  stackPadding: obj4,
  alertText: { marginTop: 16 },
  tagsWrapper: { display: "flex", flexDirection: "row", flexWrap: "wrap" },
  addTagIconButtonWrapper: obj5,
  createTagButton: obj6,
  createTagButtonText: { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14 },
};
obj3 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  paddingTop: nativeDefault.space.PX_16,
};
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj4 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj5 = { justifyContent: "center", margin: nativeDefault.space.PX_4 };
obj6 = { backgroundColor: "transparent", paddingHorizontal: 0, marginTop: nativeDefault.space.PX_4 };
const isGuildMetadataLoaded = createLegacyClassComponentStyles(obj2);
const PureComponent = react.PureComponent;
class ChannelSettingsOverview extends PureComponent {
  constructor(arg0) {
    let tmp;
    let tmp2;
    let tmp3;
    const tmp5 = new tmp(arg0, tmp4, tmp3, tmp2);
    let obj = _modDef12;
    tmp5._cooldown = obj.findIndex(closure_40, (arg0) => arg0 >= closure_0.props.channel.rateLimitPerUser);
    tmp5.state = { hasChanges: false };
    tmp5.pushScreen = function pushScreen() {
      const items = [...arguments];
      navigation = closure_0.props.navigation;
      const items1 = [...items];
      navigation.push.apply(items1);
      if (items[0] !== constants2.PERMISSIONS) {
        const obj2 = { settings_type: "channel", origin_pane: constants4.CHANNEL_SETTINGS, destination_pane: items[0] };
        const obj = AppAnalyticsUtilsDefault;
        obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
      }
    };
    tmp5.handleSave = function handleSave() {
      let autoArchiveDuration;
      let channel;
      let invitable;
      let locked;
      let threadMetadata;
      let obj = channel;
      if (channel.state.hasChanges) {
        channel = obj.props.channel;
        ({
          name: obj2.name,
          type: obj2.type,
          topic: obj2.topic,
          position: obj2.position,
          bitrate: obj2.bitrate,
          userLimit: obj2.userLimit,
          defaultAutoArchiveDuration: obj2.defaultAutoArchiveDuration,
          nsfw: obj2.nsfw,
          rateLimitPerUser: obj2.rateLimitPerUser,
          videoQualityMode: obj2.videoQualityMode,
          threadMetadata,
        } = channel);
        const obj3 = {
          name: null,
          type: null,
          topic: null,
          position: null,
          bitrate: null,
          userLimit: null,
          defaultAutoArchiveDuration: null,
          nsfw: null,
          rateLimitPerUser: null,
          videoQualityMode: null,
          autoArchiveDuration,
          locked,
          invitable,
          flags: channel.flags,
          defaultSortOrder: channel.getDefaultSortOrder(),
          defaultForumLayout: channel.defaultForumLayout,
          defaultTagSetting: channel.getDefaultTagSetting(),
          iconEmoji: null,
          themeColor: null,
          applicationId: null,
        };
        autoArchiveDuration = undefined;
        const saveChannel = ChannelSettingsActionCreatorsDefault.saveChannel;
        const id = channel.id;
        ChannelSettingsActionCreatorsDefault;
        if (threadMetadata != null) {
          autoArchiveDuration = threadMetadata.autoArchiveDuration;
        }
        const threadMetadata2 = channel.threadMetadata;
        locked = undefined;
        if (threadMetadata2 != null) {
          locked = threadMetadata2.locked;
        }
        const threadMetadata3 = channel.threadMetadata;
        invitable = undefined;
        if (threadMetadata3 != null) {
          invitable = threadMetadata3.invitable;
        }
        ({ iconEmoji: obj2.iconEmoji, themeColor: obj2.themeColor, application_id: obj2.applicationId } = channel);
        const saveChannelResult = saveChannel(id, obj3);
        saveChannelResult.then((status) => {
          let stringResult;
          if (200 === status.status) {
            const obj = { key: "THREAD_SETTINGS_UPDATED", icon: AssetRegistryDefault, content: stringResult };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            const isThreadResult = channel.isThread();
            const intl = intl15.intl;
            const string = intl.string;
            const t = intl15.t;
            if (isThreadResult) {
              stringResult = string(t.n2Y84J);
            } else {
              stringResult = string(t["FE/ohq"]);
            }
            open(obj);
            navigation = channel.props.navigation;
            navigation.goBack();
          }
        });
        obj.setState({ hasChanges: false });
      }
    };
    tmp5.handleChangeName = function handleChangeName(arg0) {
      const channel = closure_0.props.channel;
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { name: sanitizeChannelNameDefault(arg0, channel.type) };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleBlurName = function handleBlurName() {
      const channel = closure_0.props.channel;
      if (channel.isThread()) {
        const tmp3 = sanitizeThreadNameDefault(channel.name, true);
        if (tmp3 !== channel.name) {
          const obj2 = { name: tmp3 };
          const tmpResult = ChannelSettingsActionCreatorsDefault;
          tmpResult.updateChannel(obj2);
          closure_0.setState({ hasChanges: true });
        }
      }
    };
    tmp5.handleChangeTopic = function handleChangeTopic(emojiName) {
      let obj2;
      const obj = { topic: obj2.translateInlineEmojiToSurrogates(emojiName) };
      const updateChannel = ChannelSettingsActionCreatorsDefault.updateChannel;
      ChannelSettingsActionCreatorsDefault;
      obj2 = UnicodeEmojisDefault;
      updateChannel(obj);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleBitRateChange = function handleBitRateChange(arg0) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { bitrate: Math.round(arg0) };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleVideoQualityModeChange = function handleVideoQualityModeChange(videoQualityMode) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { videoQualityMode };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleNsfwChange = function handleNsfwChange(nsfw) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { nsfw };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleThreadSpoilerChange = function handleThreadSpoilerChange(setting) {
      const channel = closure_0.props.channel;
      const obj = FlagUtils;
      const setFlagResult = obj.setFlag(channel.flags, constants5.IS_SPOILER_CHANNEL, setting);
      const obj2 = ChannelSettingsActionCreatorsDefault;
      obj2.updateChannel({ flags: setFlagResult });
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleSlowmodeChange = function handleSlowmodeChange(arg0) {
      let hasChanges = closure_0.state.hasChanges;
      const channel = closure_0.props.channel;
      const tmp2 = closure_40[Math.round(Math, arg0)];
      const obj = ChannelSettingsActionCreatorsDefault;
      obj.updateChannel({ rateLimitPerUser: tmp2 });
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const getSecondsSliderLabel = SecondsSliderUtils.getSecondsSliderLabel;
      SecondsSliderUtils;
      const intl = intl15.intl;
      announce(getSecondsSliderLabel(tmp2, false, intl.string(intl15.t.zvDu4h)));
      const setState = closure_0.setState;
      if (!hasChanges) {
        hasChanges = channel.rateLimitPerUser !== tmp2;
      }
      setState({ hasChanges });
    };
    tmp5.handleDefaultAutoArchiveDurationChange = function handleDefaultAutoArchiveDurationChange(
      defaultAutoArchiveDuration,
    ) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { defaultAutoArchiveDuration };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleAutoArchiveDurationChange = function handleAutoArchiveDurationChange(autoArchiveDuration) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { autoArchiveDuration };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleDefaultSortOrderChange = function handleDefaultSortOrderChange(defaultSortOrder) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { defaultSortOrder };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleDefaultTagSettingChange = function handleDefaultTagSettingChange(defaultTagSetting) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { defaultTagSetting };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleInvitableChange = function handleInvitableChange(invitable) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { invitable };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleAnnouncementChange = function handleAnnouncementChange(arg0) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { type: arg0 ? constants3.GUILD_TEXT : constants3.GUILD_ANNOUNCEMENT };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleActiveChannelsRemovedChange = function handleActiveChannelsRemovedChange(arg0) {
      const channel = closure_0.props.channel;
      const obj = FlagUtils;
      const setFlagResult = obj.setFlag(channel.flags, constants5.ACTIVE_CHANNELS_REMOVED, !arg0);
      const obj2 = ChannelSettingsActionCreatorsDefault;
      obj2.updateChannel({ flags: setFlagResult });
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleUserLimitChange = function handleUserLimitChange(arg0) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { userLimit: Math.round(arg0) };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.handleDeleteChannel = _asyncToGenerator(async () => {
      let closure_1;
      let intl12;
      let intl13;
      let intl14;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let intl9;
      let items;
      let items1;
      let obj12;
      let obj15;
      let obj17;
      let obj6;
      let obj9;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          let closure_3;
          let channelName;
          let children;
          let channel;
          let user;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              tmp = undefined;
              closure_3 = undefined;
              channelName = undefined;
              children = undefined;
              tmp = closure_1_52(tmp.context);
              channel = tmp.props.channel;
              user = guild.getGuild(channel.getGuildId());
              const obj18 = tmp(c2[44]);
              c2 = 1;
              c3 = 1;
              const obj4 = {
                value: obj18.isDefaultChannelThresholdMetAfterDelete(channel.getGuildId(), channel.id),
                done: false,
              };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let stringResult1;
            closure_3 = value;
            if (null != user) {
              const features = user.features;
              if (features.has(constants.COMMUNITY)) {
                let stringResult;
                if (user.rulesChannelId !== channel.id) {
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
                if (user.rulesChannelId === channel.id) {
                  const intl2 = tmp(c2[32]).intl;
                  stringResult = intl2.string(tmp(c2[32]).t.yjrZPl);
                } else {
                  const intl = tmp(c2[32]).intl;
                  stringResult = intl.string(tmp(c2[32]).t["1B1/NB"]);
                }
                children = stringResult;
                let obj = {
                  title: intl3.string(tmp(c2[32]).t["TY/V+H"]),
                  confirmText: intl4.string(tmp(c2[32]).t.BddRzS),
                  children: closure_1_48(closure_1_49, obj6),
                };
                const show = tmp4(c2[45]).show;
                const tmp29 = tmp4(c2[45]);
                intl3 = tmp(c2[32]).intl;
                intl4 = tmp(c2[32]).intl;
                obj6 = { children: items };
                const obj7 = { style: tmp.alertText, variant: "text-md/medium", children };
                items = [closure_1_47(tmp(c2[46]).Text, obj7)];
                const obj8 = {
                  style: tmp.alertText,
                  variant: "text-md/medium",
                  children: intl5.format(tmp(c2[32]).t.LAJbDm, obj9),
                };
                const Text = tmp(c2[46]).Text;
                intl5 = tmp(c2[32]).intl;
                obj9 = {
                  onClick() {
                    const obj = closure_1(user[45]);
                    obj.close();
                    const obj2 = closure_1(user[35]);
                    obj2.close();
                    const obj3 = closure_1(user[47]);
                    obj3.open(user.id, constants2.COMMUNITY);
                  },
                };
                items[1] = closure_1_47(Text, obj8);
                show(obj);
              }
            }
            if (null != user) {
              const tmp142 = closure_3;
              if (!tmp142) {
                const obj10 = {
                  title: intl6.string(tmp(c2[32]).t["TY/V+H"]),
                  confirmText: intl7.string(tmp(c2[32]).t.BddRzS),
                  children: closure_1_48(closure_1_49, obj12),
                };
                const show2 = tmp4(c2[45]).show;
                const tmp59 = tmp4(c2[45]);
                intl6 = tmp(c2[32]).intl;
                intl7 = tmp(c2[32]).intl;
                obj12 = { children: items1 };
                const obj13 = {
                  style: tmp.alertText,
                  variant: "text-md/medium",
                  children: intl8.string(tmp(c2[32]).t.iWlB6h),
                };
                const Text2 = tmp(c2[46]).Text;
                intl8 = tmp(c2[32]).intl;
                items1 = [closure_1_47(Text2, obj13)];
                const obj14 = {
                  style: tmp.alertText,
                  variant: "text-md/medium",
                  children: intl9.format(tmp(c2[32]).t.ajiBwB, obj15),
                };
                const Text3 = tmp(c2[46]).Text;
                intl9 = tmp(c2[32]).intl;
                obj15 = {
                  onClick() {
                    const obj = closure_1(user[45]);
                    obj.close();
                    const obj2 = closure_1(user[35]);
                    obj2.close();
                    const obj3 = closure_1(user[47]);
                    obj3.open(user.id, constants2.ONBOARDING);
                  },
                };
                items1[1] = closure_1_47(Text3, obj14);
                show2(obj10);
              }
            }
            const obj11 = tmp(c2[48]);
            channelName = obj11.computeChannelName(channel, closure_1_24, closure_1_23, true);
            const show3 = tmp4(c2[45]).show;
            const tmp97 = tmp4(c2[45]);
            if (closure_129_0.props.isForumPost) {
              const intl11 = tmp(c2[32]).intl;
              stringResult1 = intl11.string(tmp(c2[32]).t.nEOg1N);
            } else {
              const isThread = closure_129_0.props.isThread;
              const intl10 = tmp(c2[32]).intl;
              const string = intl10.string;
              const t = tmp(c2[32]).t;
              if (isThread) {
                stringResult1 = string(t.H7vTe2);
              } else {
                stringResult1 = string(t["8D8Rsb"]);
              }
            }
            const obj16 = {
              title: stringResult1,
              body: intl12.format(tmp(c2[32]).t.a6Gz9J, obj17),
              cancelText: intl13.string(tmp(c2[32]).t.gm1Vej),
              confirmText: intl14.string(tmp(c2[32]).t.p89ACt),
              onConfirm: closure_129_0.handleConfirmDeleteChannel,
              confirmColor: tmp4(c2[49]).Colors.RED,
            };
            intl12 = tmp(c2[32]).intl;
            obj17 = { channelName };
            intl13 = tmp(c2[32]).intl;
            intl14 = tmp(c2[32]).intl;
            show3(obj16);
          }
        } catch (tmp130) {
          c3 = 3;
          throw tmp130;
        }
      }
    });
    let closure_0 = tmp5;
    tmp5.handleConfirmDeleteChannel = _asyncToGenerator(async function () {
      let closure_1;
      let obj6;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let closure_2;
          let content;
          let anyErrorMessage;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp;
              content = undefined;
              anyErrorMessage = undefined;
              c4 = 1;
              const channel = content.props.channel;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj6.deleteChannel(channel.id), done: false };
              obj6 = anyErrorMessage(closure_2[35]);
              return obj5;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              closure_2 = closure_3;
              const self = this;
              const self2 = this;
              const aPIError = new content(closure_2[51]).APIError(closure_2);
              anyErrorMessage = aPIError.getAnyErrorMessage();
              content = anyErrorMessage;
              const open = anyErrorMessage(closure_2[36]).open;
              const tmp23 = anyErrorMessage(closure_2[36]);
              if (anyErrorMessage == null) {
                const intl = content(closure_2[32]).intl;
                content = intl.string(content(closure_2[32]).t.CKsXk3);
              }
              const obj7 = { key: "CHANNEL_SETTINGS_DELETE_CHANNEL_ERROR", content };
              open(obj7);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              const obj = content(closure_2[50]);
              content = obj.getRootNavigationRef();
              let isReadyResult;
              const obj2 = content;
              if (content != null) {
                isReadyResult = obj2.isReady();
              }
              if (isReadyResult) {
                content.goBack();
              }
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp35) {
          closure_3 = tmp35;
          if (0 === c4) {
            c6 = 3;
            throw tmp35;
          } else {
            c5 = 1;
          }
        }
      }
    });
    tmp5.handlePressTag = function handlePressTag(tag) {
      const obj = { tag };
      closure_0.pushScreen(constants2.EDIT_FORUM_TAG, obj);
    };
    tmp5.handleToggleRequireTag = function handleToggleRequireTag() {
      if (closure_0.props.canManageChannels) {
        const channel = closure_0.props.channel;
        const hasFlagResult = channel.hasFlag(constants5.REQUIRE_TAG);
        const obj2 = FlagUtils;
        const obj4 = { flags: obj2.setFlag(closure_0.props.channel.flags, constants5.REQUIRE_TAG, !hasFlagResult) };
        const obj3 = ChannelSettingsActionCreatorsDefault;
        obj3.updateChannel(obj4);
        closure_0.setState({ hasChanges: true });
      }
    };
    tmp5.handleToggleShowMediaDownloadOptions = function handleToggleShowMediaDownloadOptions() {
      if (closure_0.props.canManageChannels) {
        const channel = closure_0.props.channel;
        const hasFlagResult = channel.hasFlag(constants5.HIDE_MEDIA_DOWNLOAD_OPTIONS);
        const obj2 = FlagUtils;
        const obj4 = {
          flags: obj2.setFlag(closure_0.props.channel.flags, constants5.HIDE_MEDIA_DOWNLOAD_OPTIONS, !hasFlagResult),
        };
        const obj3 = ChannelSettingsActionCreatorsDefault;
        obj3.updateChannel(obj4);
        closure_0.setState({ hasChanges: true });
      }
    };
    tmp5.getError = function getError(arg0) {
      const errors = closure_0.props.errors;
      let tmp;
      if (errors != null) {
        tmp = errors[arg0];
      }
      return tmp;
    };
    tmp5.handleApplicationChange = function handleApplicationChange(applicationId) {
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { applicationId };
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp5.state.hasChanges = ChannelSettingsStore.hasChanges();
    return tmp5;
  }
  componentDidMount() {
    const self = this;
    this.updateNavigation(undefined, this.state);
    const tmp2 = null == this.props.regions && null != self.props.guild;
    if (tmp2) {
      const obj = RegionActionCreatorsDefault;
      const regions = obj.fetchRegions(self.props.guild.id);
    }
    const obj2 = AppAnalyticsUtilsDefault;
    const obj3 = { settings_type: "channel", destination_pane: constants8.CHANNEL_SETTINGS };
    obj2.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj3);
  }
  componentDidUpdate(arg0, arg1) {
    this.updateNavigation(arg0, arg1);
  }
  updateNavigation(submitting, hasChanges) {
    let fn;
    let isThread;
    let stringResult1;
    let tmp3;
    const self = this;
    const props = this.props;
    ({ navigation, submitting, isThread } = props);
    const type = props.channel.type;
    hasChanges = this.state.hasChanges;
    const isForumPost = props.isForumPost;
    if (isThread) {
      let stringResult;
      let tmp12;
      const intl3 = hasChanges(1126).intl;
      const string = intl3.string;
      const t = hasChanges(1126).t;
      if (isForumPost) {
        stringResult = string(t.BsJrhj);
        tmp12 = tmp8;
      } else {
        stringResult = string(t.d4n5Q1);
        tmp12 = tmp8;
      }
      tmp3 = tmp12;
      stringResult1 = stringResult;
    } else if (type === constants3.GUILD_CATEGORY) {
      const intl2 = hasChanges(1126).intl;
      stringResult1 = intl2.string(hasChanges(1126).t["/uELTj"]);
      tmp3 = hasChanges;
    } else {
      tmp3 = hasChanges;
      let intl = hasChanges(1126).intl;
      stringResult1 = intl.string(hasChanges(1126).t.XPDhcc);
    }
    const setOptions = navigation.setOptions;
    if (submitting) {
      fn = tmp3(6017).HeaderSubmittingIndicator;
    } else {
      fn = (arg0) => {
        let intl;
        const obj = { onPress: self.handleSave, label: intl.string(intl15.t["R3BPH+"]), disabled: !hasChanges };
        const HeaderTextButton = HeaderShared.HeaderTextButton;
        const merged = Object.assign(arg0);
        intl = intl15.intl;
        return vanityURLCode(HeaderTextButton, obj);
      };
    }
    setOptions({ headerRight: fn, title: stringResult1 });
  }
  renderChannelInfo() {
    let canManageChannels;
    let canManageThread;
    let canSendMessages;
    let channel;
    let isChannelOwner;
    let isForumPost;
    let isThread;
    let items;
    let obj6;
    let stringResult;
    let tmp5Result;
    const self = this;
    const props = this.props;
    ({ channel, canManageChannels, isThread } = props);
    ({ canManageThread, canSendMessages, isChannelOwner, isForumPost } = props);
    let hasItem = metroImportAll(channel.type) && !isThread;
    if (!hasItem) {
      const GUILD_THREADS_ONLY = constants4.GUILD_THREADS_ONLY;
      hasItem = GUILD_THREADS_ONLY.has(channel.type);
    }
    if (hasItem) {
      const obj = conjureTopicChannel;
      hasItem = !obj.isConjureLegacyTopicChannel(channel.type, channel.topic_);
    }
    const obj2 = ChannelSettingsUtils;
    const isChannelNameSettingEditable = obj2.getIsChannelNameSettingEditable({
      canManageThread,
      canManageChannels,
      canSendMessages,
      isForumPost,
      isThread,
      isChannelOwner,
    });
    if (channel.isForumPost()) {
      const intl4 = intl15.intl;
      stringResult = intl4.string(intl15.t.uyVrTN);
    } else if (isThread) {
      const intl3 = intl15.intl;
      stringResult = intl3.string(intl15.t.j3XWjD);
    } else if (channel.type === constants3.GUILD_CATEGORY) {
      const intl2 = intl15.intl;
      stringResult = intl2.string(intl15.t.OCAkGP);
    } else {
      const intl = intl15.intl;
      stringResult = intl.string(intl15.t.PVbHDl);
    }
    const obj4 = {
      ref: self.props.channelNameRef,
      label: stringResult,
      value: tmp5Result.computeChannelName(channel, UserStore, RelationshipStore),
      onChange: null,
      onBlur: null,
      disabled: !isChannelNameSettingEditable,
      maxLength,
      errorMessage: self.getError("name"),
      enableAndroidSanitizedInputWorkaround: true,
    };
    const TextInput = TextInput_TextInput.TextInput;
    ({ handleChangeName: obj3.onChange, handleBlurName: obj3.onBlur } = self);
    let tmp10Result;
    tmp5Result = useChannelName;
    const tmp11 = vanityURLCode(TextInput, obj4);
    if (hasItem) {
      let stringResult1;
      const isForumLikeChannelResult = channel.isForumLikeChannel();
      const intl5 = intl15.intl;
      const string = intl5.string;
      const t = intl15.t;
      if (isForumLikeChannelResult) {
        stringResult1 = string(t.yR6HwZ);
      } else {
        stringResult1 = string(t.X8jMDh);
      }
      const obj5 = {
        label: stringResult1,
        value: obj6.translateSurrogatesToInlineEmoji(channel.topic),
        onChange: self.handleChangeTopic,
        disabled: !canManageChannels,
        autoCorrect: true,
        maxLength: channel.isForumLikeChannel() ? numOpens : closure_43,
        errorMessage: self.getError("topic"),
      };
      const TextArea = TextArea2.TextArea;
      obj6 = UnicodeEmojisDefault;
      tmp10Result = vanityURLCode(TextArea, obj5);
    }
    const obj7 = { children: items };
    items = [tmp11, self.renderApplication(), tmp10Result];
    return closure_48(lastJoinedRecommendedGuild, obj7);
  }
  renderNsfwConfig() {
    let TableSwitchRow;
    let canManageChannels;
    let intl;
    let intl2;
    let isNSFWDisabled;
    let obj3;
    let stringResult;
    let tmp2Result;
    const props = this.props;
    const channel = props.channel;
    ({ canManageChannels, isNSFWDisabled } = props);
    let tmp = null;
    if (set5.has(channel.type)) {
      tmp = null;
      if (canManageChannels) {
        tmp = null;
        const obj = PlatformUtils;
        if (!obj.isIOS()) {
          const obj2 = {
            helperText: intl.string(intl15.t["9eUgwR"]),
            hasIcons: false,
            children: vanityURLCode(TableSwitchRow, obj3),
          };
          const TableRowGroup = TableRowGroup3.TableRowGroup;
          intl = intl15.intl;
          obj3 = {
            label: intl2.string(intl15.t.Es25Yf),
            value: tmp2Result.isChannelOrGuildNSFW(channel),
            onValueChange: this.handleNsfwChange,
            disabled: isNSFWDisabled,
            subLabel: stringResult,
          };
          TableSwitchRow = TableSwitchRow2.TableSwitchRow;
          intl2 = intl15.intl;
          stringResult = undefined;
          tmp2Result = AgeGateUtils;
          if (null != channel.linkedLobby) {
            const intl3 = intl15.intl;
            stringResult = intl3.string(intl15.t.l6uSVa);
          }
          tmp = vanityURLCode(TableRowGroup, obj2, "nsfw-section");
        }
      }
    }
    return tmp;
  }
  renderThreadSpoiler() {
    let TableSwitchRow;
    let intl;
    let intl2;
    let obj2;
    const props = this.props;
    const channel = props.channel;
    const canManageThread = props.canManageThread;
    let tmp = null;
    if (channel.isThread()) {
      const obj = {
        helperText: intl.string(intl15.t.ddWXHa),
        hasIcons: false,
        children: vanityURLCode(TableSwitchRow, obj2),
      };
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      intl = intl15.intl;
      obj2 = {
        label: intl2.string(intl15.t.TvUHTb),
        value: channel.isSpoilerChannel(),
        onValueChange: this.handleThreadSpoilerChange,
        disabled: !canManageThread,
      };
      TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      intl2 = intl15.intl;
      tmp = vanityURLCode(TableRowGroup, obj, "thread-spoiler-section");
    }
    return tmp;
  }
  renderSlowmode() {
    let Card;
    let canManageChannels;
    let channel;
    let intl4;
    let intl5;
    let items1;
    let items2;
    let items3;
    let obj2;
    let obj7;
    const self = this;
    const props = this.props;
    ({ channel, canManageChannels } = props);
    const isThreadModerator = props.isThreadModerator;
    const tmp = closure_52(this.context);
    if (unpackModuleId.has(channel.type)) {
      if (channel.isThread()) {
        canManageChannels = isThreadModerator;
      }
      if (canManageChannels) {
        let stringResult;
        const getSecondsSliderLabel = SecondsSliderUtils.getSecondsSliderLabel;
        const rateLimitPerUser = channel.rateLimitPerUser;
        SecondsSliderUtils;
        const intl = intl15.intl;
        const secondsSliderLabel = getSecondsSliderLabel(rateLimitPerUser, false, intl.string(intl15.t.zvDu4h));
        if (channel.isForumLikeChannel()) {
          const intl3 = intl15.intl;
          stringResult = intl3.string(intl15.t["a+1pdO"]);
        } else {
          const isThreadResult = channel.isThread();
          const intl2 = intl15.intl;
          const string = intl2.string;
          const t = intl15.t;
          if (isThreadResult) {
            stringResult = string(t.OMmNCv);
          } else {
            stringResult = string(t["HEA/DU"]);
          }
        }
        const items = [];
        const push = items.push;
        const obj = { helperText: stringResult, hasIcons: false, children: closure_48(Card, obj2) };
        const TableRowGroup = TableRowGroup3.TableRowGroup;
        obj2 = { border: "none", children: items2 };
        const obj3 = {
          style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" },
          children: items1,
        };
        Card = Card_Card.Card;
        const obj4 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          style: { flexShrink: 1 },
          children: intl4.string(intl15.t.piZgKF),
        };
        const Text = Text_Text.Text;
        intl4 = intl15.intl;
        items1 = [vanityURLCode(Text, obj4)];
        const obj5 = { variant: "text-md/medium", color: "text-muted", children: secondsSliderLabel };
        items1[1] = vanityURLCode(Text_Text.Text, obj5);
        items2 = [closure_48(View, obj3)];
        const obj6 = {
          style: items3,
          value: self._cooldown,
          minimumValue: 0,
          maximumValue: length.length - 1,
          onValueChange: self.handleSlowmodeChange,
          accessibilityLabel: intl5.string(intl15.t.piZgKF),
          accessibilityValue: obj7,
        };
        items3 = [tmp.slider, { marginStart: -4, marginTop: 8 }];
        const Slider = Slider2.Slider;
        intl5 = intl15.intl;
        obj7 = { text: secondsSliderLabel };
        items2[1] = vanityURLCode(Slider, obj6);
        push(vanityURLCode(TableRowGroup, obj, "slowmode-section"));
        return items;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  renderAutoArchiveDuration() {
    let autoArchiveDuration;
    let canManageThread;
    let intl2;
    let isForumPost;
    const props = this.props;
    const channel = props.channel;
    ({ canManageThread, isForumPost } = props);
    if (channel.isThread()) {
      if (canManageThread) {
        let stringResult;
        let tmp5;
        const intl = intl15.intl;
        const string = intl.string;
        const t = intl15.t;
        if (isForumPost) {
          stringResult = string(t["3aJN9M"]);
          tmp5 = require;
        } else {
          stringResult = string(t.YUXr4Z);
          tmp5 = require;
        }
        const obj = {
          title: intl2.string(tmp5(1126).t.FGjMZS),
          description: stringResult,
          selected: autoArchiveDuration,
          channel,
          onSelectDuration: this.handleAutoArchiveDurationChange,
        };
        const AutoArchiveDurationOptions = tmp5(17015).AutoArchiveDurationOptions;
        intl2 = tmp5(1126).intl;
        const threadMetadata = channel.threadMetadata;
        autoArchiveDuration = undefined;
        if (threadMetadata != null) {
          autoArchiveDuration = threadMetadata.autoArchiveDuration;
        }
        if (autoArchiveDuration == null) {
          autoArchiveDuration = closure_46;
        }
        return vanityURLCode(AutoArchiveDurationOptions, obj);
      }
    }
    return null;
  }
  renderInvitable() {
    let TableSwitchRow;
    let intl;
    let intl2;
    let obj2;
    const channel = this.props.channel;
    let tmp3 = null;
    if (null != channel.threadMetadata) {
      tmp3 = null;
      if (channel.type === constants3.PRIVATE_THREAD) {
        const obj = {
          description: intl.string(intl15.t.cSyXJk),
          hasIcons: false,
          children: vanityURLCode(TableSwitchRow, obj2),
        };
        const TableRowGroup = TableRowGroup3.TableRowGroup;
        intl = intl15.intl;
        obj2 = {
          disabled: !tmp2,
          label: intl2.string(intl15.t.s2rpNf),
          value: channel.threadMetadata.invitable,
          onValueChange: tmp.handleInvitableChange,
        };
        TableSwitchRow = TableSwitchRow2.TableSwitchRow;
        intl2 = intl15.intl;
        tmp3 = vanityURLCode(TableRowGroup, obj, "thread-invitable-section");
      }
    }
    return tmp3;
  }
  renderDefaultAutoArchiveDuration() {
    let intl;
    let obj2;
    let stringResult;
    const props = this.props;
    const channel = props.channel;
    const canManageChannels = props.canManageChannels;
    let tmp = null;
    if (set2.has(channel.type)) {
      tmp = null;
      if (canManageChannels) {
        const obj = {
          title: intl.string(intl15.t.FGjMZS),
          selected: obj2.getAutoArchiveDuration(channel, null),
          channel,
          onSelectDuration: this.handleDefaultAutoArchiveDurationChange,
          description: stringResult,
        };
        const AutoArchiveDurationOptions = ThreadAutoArchiveBottomSheet.AutoArchiveDurationOptions;
        intl = intl15.intl;
        obj2 = ThreadAutoArchive;
        const isForumLikeChannelResult = channel.isForumLikeChannel();
        const intl2 = intl15.intl;
        const string = intl2.string;
        const t = intl15.t;
        if (isForumLikeChannelResult) {
          stringResult = string(t.fyXclY);
        } else {
          stringResult = string(t.W3Noi9);
        }
        tmp = vanityURLCode(AutoArchiveDurationOptions, obj);
      }
    }
    return tmp;
  }
  renderApplication() {
    let canManageChannels;
    let channel;
    let guild;
    let tmp6;
    ({ channel, guild, canManageChannels } = this.props);
    if (channel.type === constants3.GUILD_APP) {
      if (null != guild) {
        const obj2 = conjureTopicChannel;
        if (!obj2.isConjureLegacyTopicChannel(channel.type, channel.topic_)) {
          if (canManageChannels) {
            canManageChannels = PermissionStore.can(
              AppChannelPermissions.SWAP_APP_CHANNEL_APPLICATION_PERMISSIONS,
              channel,
            );
          }
          const obj = {
            guildId: guild.id,
            channelId: null,
            selectedApplicationId: null,
            onChange: tmp.handleApplicationChange,
            disabled: !canManageChannels,
            description: tmp6,
          };
          ({ id: obj.channelId, application_id: obj.selectedApplicationId } = channel);
          tmp6 = undefined;
          const tmp5 = AppChannelApplicationSelectorDefault;
          if (!canManageChannels) {
            tmp6 = getCannotSwapApplicationTextDefault(channel);
          }
          return vanityURLCode(tmp5, obj);
        }
      }
    }
    return null;
  }
  renderVoiceChannelApp() {
    const guild = this.props.guild;
    let tmp3 = null;
    if (null != guild) {
      const obj = { channel: tmp2, guildId: guild.id, onChange: tmp.handleApplicationChange };
      tmp3 = vanityURLCode(VoiceChannelAppSettingDefault, obj);
    }
    return tmp3;
  }
  renderDefaultSortOrder() {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    const props = this.props;
    const channel = props.channel;
    const canManageChannels = props.canManageChannels;
    if (channel.isForumLikeChannel()) {
      if (canManageChannels) {
        const defaultSortOrder = channel.getDefaultSortOrder();
        const obj = {
          title: intl.string(intl15.t.gePre2),
          description: intl2.string(intl15.t["165cVX"]),
          value: defaultSortOrder,
          onChange: this.handleDefaultSortOrderChange,
          hasIcons: false,
          children: items,
        };
        const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
        intl = intl15.intl;
        intl2 = intl15.intl;
        const obj2 = { label: intl3.string(intl15.t.ElZtzj), value: ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY };
        const TableRadioRow = TableRadioRow3.TableRadioRow;
        intl3 = intl15.intl;
        items = [vanityURLCode(TableRadioRow, obj2)];
        const obj3 = { label: intl4.string(intl15.t.w28f3F), value: ThreadSortOrder.ThreadSortOrder.CREATION_DATE };
        const TableRadioRow2 = TableRadioRow3.TableRadioRow;
        intl4 = intl15.intl;
        items[1] = vanityURLCode(TableRadioRow2, obj3);
        return closure_48(TableRadioGroup, obj);
      }
    }
    return null;
  }
  renderDefaultTagSetting() {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    const props = this.props;
    const channel = props.channel;
    const canManageChannels = props.canManageChannels;
    if (channel.isForumLikeChannel()) {
      if (canManageChannels) {
        const defaultTagSetting = channel.getDefaultTagSetting();
        const obj = {
          title: intl.string(intl15.t.Paxaug),
          description: intl2.string(intl15.t.DqOl8J),
          value: defaultTagSetting,
          onChange: this.handleDefaultTagSettingChange,
          hasIcons: false,
          children: items,
        };
        const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
        intl = intl15.intl;
        intl2 = intl15.intl;
        const obj2 = {
          label: intl3.string(intl15.t.rQ0ctQ),
          value: ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME,
        };
        const TableRadioRow = TableRadioRow3.TableRadioRow;
        intl3 = intl15.intl;
        items = [vanityURLCode(TableRadioRow, obj2)];
        const obj3 = {
          label: intl4.string(intl15.t.FCXUu0),
          value: ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_ALL,
        };
        const TableRadioRow2 = TableRadioRow3.TableRadioRow;
        intl4 = intl15.intl;
        items[1] = vanityURLCode(TableRadioRow2, obj3);
        return closure_48(TableRadioGroup, obj);
      }
    }
    return null;
  }
  renderAnnouncement() {
    let TableSwitchRow;
    let channel;
    let guild;
    let handleAnnouncementChange;
    let intl3;
    let items1;
    let obj2;
    let obj4;
    let obj5;
    const self = this;
    const props = this.props;
    ({ channel, guild } = props);
    const canManageChannels = props.canManageChannels;
    if (map1.has(channel.type)) {
      if (null != guild) {
        const features = guild.features;
        if (features.has(constants5.NEWS)) {
          let rulesChannelId;
          const id = channel.id;
          if (guild != null) {
            rulesChannelId = guild.rulesChannelId;
          }
          if (id !== rulesChannelId) {
            let prop;
            const id2 = channel.id;
            if (guild != null) {
              prop = guild.publicUpdatesChannelId;
            }
            if (id2 !== prop) {
              const items = [];
              const push = items.push;
              const obj = {
                description: closure_48(lastJoinedRecommendedGuild, obj2),
                hasIcons: false,
                children: vanityURLCode(TableSwitchRow, obj5),
              };
              obj2 = { children: items1 };
              const TableRowGroup = TableRowGroup3.TableRowGroup;
              const intl = intl15.intl;
              const format = intl.format;
              const obj3 = { documentationLink: obj4.getArticleURL(constants6.ANNOUNCEMENT_CHANNELS) };
              const tI7KNX = intl15.t.tI7KNX;
              obj4 = HelpdeskUtilsDefault;
              items1 = [format(tI7KNX, obj3), "\n\n"];
              const intl2 = intl15.intl;
              items1[2] = intl2.string(intl15.t["2Ab4Id"]);
              obj5 = {
                disabled: !canManageChannels,
                label: intl3.string(intl15.t.Au2b7m),
                value: channel.type === constants3.GUILD_ANNOUNCEMENT,
                onValueChange: handleAnnouncementChange.bind(self, channel.type === constants3.GUILD_ANNOUNCEMENT),
              };
              TableSwitchRow = TableSwitchRow2.TableSwitchRow;
              intl3 = intl15.intl;
              handleAnnouncementChange = self.handleAnnouncementChange;
              push(vanityURLCode(TableRowGroup, obj, "announcement-section"));
              return items;
            }
          }
        }
      }
    }
    return null;
  }
  renderBitrateSettings() {
    let Card;
    let canManageChannels;
    let guild;
    let intl;
    let intl2;
    let items1;
    let items2;
    let obj3;
    let obj4;
    const props = this.props;
    const channel = props.channel;
    ({ canManageChannels, guild } = props);
    const tmp = closure_52(this.context);
    if (this.showVoiceSettings()) {
      if (canManageChannels) {
        const items = [];
        const obj = ChannelUtils;
        const bitrateLimit = obj.getBitrateLimit(guild, channel);
        const push = items.push;
        const obj2 = {
          description: intl.format(intl15.t.SbQJk5, obj3),
          hasIcons: false,
          children: closure_48(Card, obj4),
        };
        const TableRowGroup = TableRowGroup3.TableRowGroup;
        intl = intl15.intl;
        obj3 = { bitrate: closure_27 / 1000 };
        obj4 = { children: items2 };
        const obj5 = {
          style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" },
          children: items1,
        };
        Card = Card_Card.Card;
        const obj6 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          style: { flexShrink: 1 },
          children: intl2.string(intl15.t.w2d0vU),
        };
        const Text = Text_Text.Text;
        intl2 = intl15.intl;
        items1 = [vanityURLCode(Text, obj6)];
        const _Math = Math;
        const obj7 = {
          variant: "text-md/medium",
          color: "text-muted",
          children: "" + Math.round(channel.bitrate / 1000) + "kbps",
        };
        const Text2 = Text_Text.Text;
        const _HermesInternal = HermesInternal;
        items1[1] = vanityURLCode(Text2, obj7);
        items2 = [closure_48(View, obj5)];
        const _Math2 = Math;
        const obj8 = {
          style: tmp.slider,
          value: Math.min(channel.bitrate, bitrateLimit),
          minimumValue,
          maximumValue: bitrateLimit,
          onValueChange: this.handleBitRateChange,
        };
        const Slider = Slider2.Slider;
        items2[1] = vanityURLCode(Slider, obj8);
        push(vanityURLCode(TableRowGroup, obj2, "bitrate-section"));
        return items;
      }
    }
    return null;
  }
  renderVideoQualityModeSettings() {
    let AUTO;
    let canManageChannels;
    let channel;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items1;
    ({ channel, canManageChannels } = this.props);
    if (this.showVoiceSettings()) {
      if (canManageChannels) {
        const items = [];
        const push = items.push;
        const obj = {
          title: intl.string(intl15.t.jhJEJs),
          description: intl2.format(intl15.t.c5W7Ss, {}),
          value: AUTO,
          onChange: this.handleVideoQualityModeChange,
          hasIcons: false,
          children: items1,
        };
        const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
        intl = intl15.intl;
        intl2 = intl15.intl;
        AUTO = channel.videoQualityMode;
        if (AUTO == null) {
          AUTO = constants9.AUTO;
        }
        const obj2 = { label: intl3.string(intl15.t.jjKYpu), value: constants9.AUTO };
        const TableRadioRow = TableRadioRow3.TableRadioRow;
        intl3 = intl15.intl;
        items1 = [vanityURLCode(TableRadioRow, obj2)];
        const obj3 = { label: intl4.string(intl15.t["7jOoJE"]), value: constants9.FULL };
        const TableRadioRow2 = TableRadioRow3.TableRadioRow;
        intl4 = intl15.intl;
        items1[1] = vanityURLCode(TableRadioRow2, obj3);
        push(closure_48(TableRadioGroup, obj, "video-quality-section"));
        return items;
      }
    }
    return null;
  }
  renderUserLimitSettings() {
    let Card;
    let intl4;
    let items1;
    let items2;
    let obj3;
    const props = this.props;
    const channel = props.channel;
    const canManageChannels = props.canManageChannels;
    const tmp = closure_52(this.context);
    if (this.showVoiceSettings()) {
      if (canManageChannels) {
        let stringResult;
        let tmp7;
        let formatResult;
        const _Math = Math;
        const rounded = Math.round(channel.userLimit);
        if (0 === rounded) {
          const intl2 = intl15.intl;
          stringResult = intl2.string(intl15.t.XX5ciX);
          tmp7 = require;
        } else {
          const intl = intl15.intl;
          const obj = { num: rounded };
          stringResult = intl.formatToPlainString(intl15.t["3uHFUR"], obj);
          tmp7 = require;
        }
        const tmp10 = channel.isGuildStageVoice() ? closure_37 : closure_36;
        const items = [];
        const push = items.push;
        const TableRowGroup = tmp7(6081).TableRowGroup;
        const isGuildStageVoiceResult = channel.isGuildStageVoice();
        const intl3 = tmp7(1126).intl;
        const format = intl3.format;
        const t = tmp7(1126).t;
        if (isGuildStageVoiceResult) {
          formatResult = format(t.OqZI8D, {});
        } else {
          formatResult = format(t["8yb3JT"], {});
        }
        const obj2 = { description: formatResult, hasIcons: false, children: closure_48(Card, obj3) };
        obj3 = { children: items2 };
        const obj4 = {
          style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" },
          children: items1,
        };
        Card = tmp7(6002).Card;
        const obj5 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          style: { flexShrink: 1 },
          children: intl4.string(tmp7(1126).t["/AoSGN"]),
        };
        const Text = tmp7(4892).Text;
        intl4 = tmp7(1126).intl;
        items1 = [vanityURLCode(Text, obj5)];
        const obj6 = { variant: "text-md/medium", color: "text-muted", children: stringResult };
        items1[1] = vanityURLCode(tmp7(4892).Text, obj6);
        items2 = [closure_48(View, obj4)];
        const _Math2 = Math;
        const obj7 = {
          style: tmp.slider,
          value: Math.min(channel.userLimit, tmp10),
          minimumValue: 0,
          maximumValue: tmp10,
          onValueChange: this.handleUserLimitChange,
        };
        const Slider = tmp7(14294).Slider;
        items2[1] = vanityURLCode(Slider, obj7);
        push(vanityURLCode(TableRowGroup, obj2, "channel-user-limit"));
        return items;
      }
    }
    return null;
  }
  renderRegionOverride() {
    let TableRow;
    let channel;
    let intl2;
    let intl3;
    let intl4;
    let obj2;
    let obj3;
    let regions;
    const self = this;
    const props = this.props;
    ({ regions, channel } = props);
    if (null == props.guild) {
      return null;
    } else {
      if (self.showVoiceSettings()) {
        if (tmp) {
          if (!channel.isGuildStageVoice()) {
            let name;
            let found = null;
            const tmp2 = null == regions || 0 === regions.length;
            if (null != regions) {
              found = regions.find((id) => id.id === channel.rtcRegion);
            }
            if (null != found) {
              name = found.name;
            } else {
              const intl = channel(1126).intl;
              name = intl.string(channel(1126).t.JEmsap);
            }
            const items = [];
            const push = items.push;
            const obj = {
              title: intl2.string(channel(1126).t["Ms8bX+"]),
              description: intl3.string(channel(1126).t["dbTs+z"]),
              hasIcons: false,
              children: closure_47(TableRow, obj2),
            };
            const TableRowGroup = channel(6081).TableRowGroup;
            intl2 = channel(1126).intl;
            intl3 = channel(1126).intl;
            obj2 = {
              label: intl4.string(channel(1126).t["Ms8bX+"]),
              trailing: closure_47(channel(6000).TableRow.TrailingText, obj3),
              arrow: true,
              disabled: tmp2,
              onPress() {
                return self.pushScreen(constants.CHANGE_RTC_REGION);
              },
            };
            TableRow = channel(6000).TableRow;
            intl4 = channel(1126).intl;
            obj3 = { text: name };
            push(closure_47(TableRowGroup, obj, "channel-region-override"));
            return items;
          }
        }
      }
      return null;
    }
  }
  showVoiceSettings() {
    const channel = this.props.channel;
    let hasItem = null != channel && null != channel.guild_id && metroImportDefault.has(channel.type);
    if (hasItem) {
      let enabled = channel.isGuildVocal();
      if (!enabled) {
        const VoiceInThreadsExperiment = ThreadHooks.VoiceInThreadsExperiment;
        const obj = { guildId: channel.guild_id, location: "9b50bd_1" };
        enabled = VoiceInThreadsExperiment.getCurrentConfig(obj).enabled;
      }
      hasItem = enabled;
    }
    return hasItem;
  }
  renderPermissions() {
    let TableRow;
    let intl;
    let obj2;
    const self = this;
    let tmp3Result = null;
    if (this.props.canManageRoles) {
      let stringResult;
      let obj = { helperText: intl.string(self(1126).t.UAoMCL), hasIcons: true, children: closure_47(TableRow, obj2) };
      const TableRowGroup = self(6081).TableRowGroup;
      intl = self(1126).intl;
      TableRow = self(6000).TableRow;
      if (tmp.type === constants3.GUILD_CATEGORY) {
        const intl3 = tmp4(1126).intl;
        stringResult = intl3.string(tmp4(1126).t.PgkvDf);
      } else {
        const intl2 = tmp4(1126).intl;
        stringResult = intl2.string(tmp4(1126).t.BAZMBn);
      }
      obj2 = {
        label: stringResult,
        arrow: true,
        icon: closure_47(self(9267).ShieldUserIcon, {}),
        onPress() {
          const obj = { origin: constants.OVERVIEW };
          return self.pushScreen(constants.PERMISSIONS, obj);
        },
      };
      tmp3Result = closure_47(TableRowGroup, obj);
    }
    return tmp3Result;
  }
  renderSettingsSection(items) {
    let tmp = null;
    if (items.length > 0) {
      const obj = { hasIcons: true, children: items };
      tmp = vanityURLCode(TableRowGroup3.TableRowGroup, obj);
    }
    return tmp;
  }
  renderCommonSettingsSection() {
    let intl;
    let intl2;
    let intl3;
    let obj3;
    const self = this;
    const props = this.props;
    const channel = props.channel;
    let canManageChannels = props.canManageChannels;
    const items = [];
    const tmp2 = closure_8(channel.type) || channel.isGuildStageVoice();
    if (tmp2) {
      const push = items.push;
      let obj = {
        label: intl.string(channel(1126).t.h850Ss),
        arrow: true,
        icon: closure_47(channel(9301).BellIcon, {}),
        onPress() {
          let result;
          if (channel.isThread()) {
            const obj = threadActionSheets;
            result = obj.showThreadNotificationsBottomSheet(channel);
          } else {
            result = self.pushScreen(constants.NOTIFICATIONS);
          }
          return result;
        },
      };
      const TableRow = channel(6000).TableRow;
      intl = channel(1126).intl;
      push(closure_47(TableRow, obj, "rowNotifications"));
    }
    if (closure_8(channel.type)) {
      const push2 = items.push;
      const obj2 = {
        label: intl2.string(channel(1126).t["mp1N/2"]),
        arrow: true,
        icon: closure_47(closure_51, obj3),
        onPress() {
          return self.pushScreen(constants.PINNED_MESSAGES);
        },
        disabled: self.props.pinDisabled,
      };
      const TableRow2 = channel(6000).TableRow;
      intl2 = channel(1126).intl;
      obj3 = { channelId: channel.id };
      push2(closure_47(TableRow2, obj2, "rowPinnedMessages"));
    }
    if (canManageChannels) {
      canManageChannels = channel.type !== constants3.GUILD_CATEGORY;
    }
    if (canManageChannels) {
      canManageChannels = !channel.isThread();
    }
    if (canManageChannels) {
      const push3 = items.push;
      const obj4 = {
        label: intl3.string(channel(1126).t.ngRFjZ),
        arrow: true,
        icon: closure_47(channel(4845).LinkIcon, {}),
        onPress() {
          return self.pushScreen(constants.INSTANT_INVITES);
        },
      };
      const TableRow3 = channel(6000).TableRow;
      intl3 = channel(1126).intl;
      push3(closure_47(TableRow3, obj4, "rowInstantInvites"));
    }
    return self.renderSettingsSection(items);
  }
  renderDefaultForumLayout() {
    let TableRow;
    let TrailingText;
    let intl;
    let intl2;
    let obj2;
    let obj3;
    let tmp2Result;
    const self = this;
    const channel = this.props.channel;
    let tmp = null;
    if (channel.isForumChannel()) {
      let stringResult;
      const obj = {
        description: intl.string(self(1126).t.mOSViT),
        hasIcons: true,
        children: closure_47(TableRow, obj2, "forumDefaultLayout"),
      };
      const TableRowGroup = self(6081).TableRowGroup;
      intl = self(1126).intl;
      obj2 = {
        label: intl2.string(self(1126).t["kQvoC/"]),
        trailing: closure_47(TrailingText, obj3),
        arrow: true,
        icon: tmp2Result,
        onPress() {
          return self.pushScreen(constants.DEFAULT_FORUM_LAYOUT);
        },
      };
      TableRow = self(6000).TableRow;
      intl2 = self(1126).intl;
      TrailingText = self(6000).TableRow.TrailingText;
      if (channel.defaultForumLayout === self(2062).ForumLayout.GRID) {
        const intl4 = tmp3(1126).intl;
        stringResult = intl4.string(tmp3(1126).t["8RswJG"]);
      } else {
        const intl3 = tmp3(1126).intl;
        stringResult = intl3.string(tmp3(1126).t["4HXEZG"]);
      }
      obj3 = { text: stringResult };
      if (channel.defaultForumLayout === self(2062).ForumLayout.GRID) {
        tmp2Result = closure_47(tmp3(17022).GridSquareIcon, {});
      } else {
        tmp2Result = closure_47(tmp3(6595).ListViewIcon, {});
      }
      tmp = closure_47(TableRowGroup, obj, "default-forum-layout");
    }
    return tmp;
  }
  renderUncommonSettingsSection() {
    let intl;
    let require;
    const self = this;
    const props = this.props;
    let canManageWebhooks = props.canManageWebhooks;
    let tmp = undefined !== canManageWebhooks && canManageWebhooks;
    canManageWebhooks = tmp;
    const channel = props.channel;
    let obj = require("LobbyUtils");
    const result = obj.canUnlinkLobbyChannel(channel);
    require = result;
    if (!tmp) {
      tmp = result;
    }
    const items = [];
    if (tmp) {
      const push = items.push;
      const obj2 = {
        label: intl.string(require("intl").t.CIsNZw),
        arrow: true,
        icon: closure_47(require("PuzzlePieceIcon").PuzzlePieceIcon, {}),
        onPress() {
          const obj = { canManageWebhooks, canUnlinkLobby: require };
          return self.pushScreen(constants.INTEGRATIONS, obj);
        },
      };
      const TableRow = tmp2(tmp3[74]).TableRow;
      intl = tmp2(tmp3[32]).intl;
      push(closure_47(TableRow, obj2, "rowIntegrations"));
    }
    return self.renderSettingsSection(items);
  }
  renderThreadManagementActions() {
    let canManageThread;
    let canUnarchiveThread;
    let hasJoinedThread;
    let intl6;
    let isArchivedThread;
    let isForumPost;
    let isLockedThread;
    let isThreadModerator;
    let require;
    let string2Result;
    let string3Result;
    let string4Result;
    let string5Result;
    let stringResult;
    const props = this.props;
    ({ channel: require, isThreadModerator, isLockedThread, isArchivedThread, isForumPost } = props);
    ({ canManageThread, canUnarchiveThread, hasJoinedThread } = props);
    let tmp5Result = null;
    const TableRowGroup = TableRowGroup3.TableRowGroup;
    if (!hasJoinedThread) {
      let obj = {
        icon: closure_47(GroupPlusIcon.GroupPlusIcon, {}),
        label: stringResult,
        onPress() {
          const obj = ThreadActionCreatorsDefault;
          return obj.joinThread(_require, "Context Menu");
        },
      };
      const TableRow = TableRow7.TableRow;
      const intl = intl15.intl;
      const string = intl.string;
      const t = intl15.t;
      if (isForumPost) {
        stringResult = string(t.ihLPiO);
      } else {
        stringResult = string(t["10kukS"]);
      }
      tmp5Result = closure_47(TableRow, obj);
    }
    const items = [tmp5Result, , , , ,];
    let tmp8Result = null;
    if (isArchivedThread) {
      tmp8Result = null;
      if (canUnarchiveThread) {
        const obj2 = {
          icon: closure_47(ClockIcon.ClockIcon, {}),
          label: string2Result,
          onPress() {
            const obj = ThreadActionCreatorsDefault;
            return obj.unarchiveThread(_require, false);
          },
        };
        const TableRow2 = TableRow7.TableRow;
        const intl2 = intl15.intl;
        const string2 = intl2.string;
        const t2 = intl15.t;
        if (isForumPost) {
          string2Result = string2(t2.cnRubV);
        } else {
          string2Result = string2(t2.S9E4G7);
        }
        tmp8Result = closure_47(TableRow2, obj2);
      }
    }
    items[1] = tmp8Result;
    let tmp11Result = null;
    if (!isArchivedThread) {
      tmp11Result = null;
      if (canManageThread) {
        const obj3 = {
          icon: closure_47(XLargeIcon.XLargeIcon, {}),
          label: string3Result,
          onPress() {
            const obj = ThreadActionCreatorsDefault;
            return obj.archiveThread(_require, false);
          },
        };
        const TableRow3 = TableRow7.TableRow;
        const intl3 = intl15.intl;
        const string3 = intl3.string;
        const t3 = intl15.t;
        if (isForumPost) {
          string3Result = string3(t3.BTs4Kb);
        } else {
          string3Result = string3(t3.wiIevd);
        }
        tmp11Result = closure_47(TableRow3, obj3);
      }
    }
    items[2] = tmp11Result;
    let tmp14Result = null;
    if (isThreadModerator) {
      tmp14Result = null;
      if (isLockedThread) {
        const obj4 = {
          icon: closure_47(LockIcon.LockIcon, {}),
          label: string4Result,
          onPress() {
            const obj = ThreadActionCreatorsDefault;
            return obj.unlockThread(_require);
          },
        };
        const TableRow4 = TableRow7.TableRow;
        const intl4 = intl15.intl;
        const string4 = intl4.string;
        const t4 = intl15.t;
        if (isForumPost) {
          string4Result = string4(t4["/OKSxp"]);
        } else {
          string4Result = string4(t4["jeyb/W"]);
        }
        tmp14Result = closure_47(TableRow4, obj4);
      }
    }
    items[3] = tmp14Result;
    let tmp17Result = null;
    if (isThreadModerator) {
      tmp17Result = null;
      if (!isLockedThread) {
        const obj5 = {
          icon: closure_47(LockIcon.LockIcon, {}),
          label: string5Result,
          onPress() {
            const obj = ThreadActionCreatorsDefault;
            return obj.lockThread(_require);
          },
        };
        const TableRow5 = TableRow7.TableRow;
        const intl5 = intl15.intl;
        const string5 = intl5.string;
        const t5 = intl15.t;
        if (isForumPost) {
          string5Result = string5(t5["Ur/0Na"]);
        } else {
          string5Result = string5(t5.HoCqm8);
        }
        tmp17Result = closure_47(TableRow5, obj5);
      }
    }
    const obj6 = { hasIcons: true, children: items };
    items[4] = tmp17Result;
    const obj7 = {
      icon: closure_47(LinkIcon.LinkIcon, {}),
      label: intl6.string(intl15.t.WqhZss),
      onPress() {
        const obj = ChannelActionSheetUtils;
        return obj.copyGuildChannelOrThreadLink(_require.guild_id, _require.id);
      },
    };
    const TableRow6 = TableRow7.TableRow;
    intl6 = intl15.intl;
    items[5] = closure_47(TableRow6, obj7);
    return closure_48(TableRowGroup, obj6);
  }
  renderDeleteButton() {
    let canManageChannels;
    let hasJoinedThread;
    let isForumPost;
    let isThreadModerator;
    let items;
    let string2Result;
    const props = this.props;
    const channel = props.channel;
    ({ canManageChannels, isForumPost } = props);
    ({ isThreadModerator, hasJoinedThread } = props);
    if (channel.isThread()) {
      canManageChannels = isThreadModerator;
    }
    let tmp = null;
    if (canManageChannels) {
      let stringResult;
      let tmp8;
      if (channel.type === constants3.GUILD_CATEGORY) {
        const intl3 = channel(1126).intl;
        stringResult = intl3.string(channel(1126).t.ifbXnL);
        tmp8 = channel;
      } else if (isForumPost) {
        const intl2 = channel(1126).intl;
        stringResult = intl2.string(channel(1126).t.nEOg1N);
        tmp8 = channel;
      } else {
        const isThreadResult = channel.isThread();
        const intl = channel(1126).intl;
        const string = intl.string;
        const t = channel(1126).t;
        if (isThreadResult) {
          stringResult = string(t.H7vTe2);
          tmp8 = tmp4;
        } else {
          stringResult = string(t["8D8Rsb"]);
          tmp8 = tmp4;
        }
      }
      let tmp16Result = null;
      const TableRowGroup = tmp8(6081).TableRowGroup;
      if (hasJoinedThread) {
        let obj = {
          variant: "danger",
          icon: closure_47(tmp8(4843).UserMinusIcon, { color: "text-feedback-critical" }),
          label: string2Result,
          onPress() {
            const obj = ThreadActionCreatorsDefault;
            return obj.leaveThread(channel, "Context Menu");
          },
        };
        const TableRow = tmp8(6000).TableRow;
        const intl4 = tmp8(1126).intl;
        const string2 = intl4.string;
        const t2 = tmp8(1126).t;
        if (isForumPost) {
          string2Result = string2(t2["2LsZdT"]);
        } else {
          string2Result = string2(t2["fa/84m"]);
        }
        tmp16Result = closure_47(TableRow, obj);
      }
      const obj2 = { hasIcons: true, children: items };
      items = [tmp16Result];
      const obj3 = {
        variant: "danger",
        icon: closure_47(tmp8(4853).TrashIcon, { color: "text-feedback-critical" }),
        label: stringResult,
        onPress: this.handleDeleteChannel,
      };
      const TableRow2 = tmp8(6000).TableRow;
      items[1] = closure_47(TableRow2, obj3);
      tmp = closure_48(TableRowGroup, obj2);
    }
    return tmp;
  }
  renderForumTags() {
    let IconButton;
    let PlusSmallIcon;
    let Text;
    let canManageChannels;
    let channel;
    let intl;
    let intl3;
    let intl4;
    let intl5;
    let items1;
    let obj12;
    let obj3;
    let obj5;
    let obj6;
    let obj9;
    let stringResult;
    let tmp6Result;
    const self = this;
    const tmp = closure_52(this.context);
    ({ channel, canManageChannels } = this.props);
    if (channel.isForumLikeChannel()) {
      let everyResult;
      const availableTags = channel.availableTags;
      if (availableTags != null) {
        everyResult = availableTags.every((moderated) => moderated.moderated);
      }
      const tmp3 = canManageChannels && channel.availableTags.length < MAX_FORUM_TAGS;
      const error = self.getError("available_tags");
      let obj = { spacing: self(587).space.PX_12, children: items1 };
      const Stack = canManageChannels(5600).Stack;
      const obj2 = {
        title: intl.string(canManageChannels(1126).t["P/y+sj"]),
        description: stringResult,
        hasIcons: false,
        children: closure_47(View, obj3),
      };
      const TableRowGroup = canManageChannels(6081).TableRowGroup;
      intl = canManageChannels(1126).intl;
      stringResult = undefined;
      const tmp9 = self;
      if (channel.availableTags.length <= 0) {
        const intl2 = canManageChannels(1126).intl;
        stringResult = intl2.string(canManageChannels(1126).t["3v8kZH"]);
      }
      obj3 = { style: tmp.tagsWrapper, children: tmp6Result };
      tmp6Result = null;
      if (channel.availableTags.length > 0) {
        const availableTags1 = channel.availableTags;
        const items = [
          availableTags1.map((tag) => {
            const obj = { tag, onPress: self.handlePressTag, disabled: !canManageChannels };
            return vanityURLCode(AvailableForumTagDefault, obj, tag.id);
          }),
        ];
        let tmp10Result = null;
        if (tmp3) {
          const obj4 = { style: tmp.addTagIconButtonWrapper, children: closure_47(IconButton, obj5) };
          obj5 = {
            icon: closure_47(PlusSmallIcon, obj6),
            size: "sm",
            onPress() {
              return self.handlePressTag();
            },
            accessibilityLabel: intl3.string(canManageChannels(1126).t["/jubeD"]),
          };
          IconButton = canManageChannels(7586).IconButton;
          obj6 = { size: "sm", color: tmp9(587).colors.WHITE };
          PlusSmallIcon = canManageChannels(8562).PlusSmallIcon;
          intl3 = canManageChannels(1126).intl;
          tmp10Result = closure_47(View, obj4);
        }
        const obj7 = { children: items };
        items[1] = tmp10Result;
        tmp6Result = closure_48(closure_49, obj7);
      }
      items1 = [closure_47(TableRowGroup, obj2), , ,];
      let tmp10Result3 = null;
      if (channel.availableTags.length <= 0) {
        const obj8 = {
          disabled: !canManageChannels,
          onPress() {
            return self.handlePressTag();
          },
          style: tmp.createTagButton,
          accessibilityRole: "button",
          children: closure_47(Text, obj9),
        };
        const PressableOpacity = canManageChannels(5916).PressableOpacity;
        obj9 = {
          variant: "text-sm/semibold",
          color: "text-brand",
          style: tmp.createTagButtonText,
          children: intl4.string(canManageChannels(1126).t.F4is7L),
        };
        Text = canManageChannels(4892).Text;
        intl4 = canManageChannels(1126).intl;
        tmp10Result3 = closure_47(PressableOpacity, obj8);
      }
      items1[1] = tmp10Result3;
      let tmp10Result4 = null != error && error.length > 0;
      if (tmp10Result4) {
        const obj10 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
        tmp10Result4 = closure_47(canManageChannels(4892).Text, obj10);
      }
      items1[2] = tmp10Result4;
      const TableRowGroup2 = canManageChannels(6081).TableRowGroup;
      let tmp18 = !canManageChannels;
      const TableSwitchRow = canManageChannels(6705).TableSwitchRow;
      if (canManageChannels) {
        tmp18 = everyResult;
      }
      const obj11 = { hasIcons: false, children: closure_47(TableSwitchRow, obj12) };
      obj12 = {
        disabled: tmp18,
        label: intl5.string(canManageChannels(1126).t.yX24uI),
        value: channel.hasFlag(constants10.REQUIRE_TAG),
        onValueChange: self.handleToggleRequireTag,
      };
      intl5 = canManageChannels(1126).intl;
      items1[3] = closure_47(TableRowGroup2, obj11);
      return closure_48(Stack, obj);
    } else {
      return null;
    }
  }
  renderShowMediaDownloadOptions() {
    let TableSwitchRow;
    let intl;
    let intl2;
    let obj2;
    const props = this.props;
    const channel = props.channel;
    const canManageChannels = props.canManageChannels;
    let tmp = null;
    if (channel.isMediaChannel()) {
      const obj = { hasIcons: false, children: vanityURLCode(TableSwitchRow, obj2) };
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      obj2 = {
        disabled: !canManageChannels,
        label: intl.string(intl15.t.u8LZOt),
        subLabel: intl2.string(intl15.t.J4wCc7),
        value: !channel.hasFlag(constants10.HIDE_MEDIA_DOWNLOAD_OPTIONS),
        onValueChange: this.handleToggleShowMediaDownloadOptions,
      };
      TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      intl = intl15.intl;
      intl2 = intl15.intl;
      tmp = vanityURLCode(TableRowGroup, obj);
    }
    return tmp;
  }
  renderCategory() {
    let canManageParent;
    let category;
    let fn;
    let intl2;
    let obj3;
    const self = this;
    const props = this.props;
    ({ category, canManageParent } = props);
    if (props.hasCategories) {
      if (props.channel.type !== constants3.GUILD_CATEGORY) {
        let stringResult;
        let tmp7;
        if (null == category) {
          const intl = self(1126).intl;
          stringResult = intl.string(self(1126).t.GSfOoo);
          tmp7 = self;
        } else {
          const obj = self(5049);
          stringResult = obj.computeChannelName(category, UserStore, RelationshipStore);
          tmp7 = self;
        }
        const TableRowGroup = tmp7(6081).TableRowGroup;
        const obj2 = {
          icon: closure_47(tmp7(16118).FolderPlusIcon, {}),
          label: intl2.string(tmp7(1126).t.vHCZwr),
          trailing: closure_47(tmp7(6000).TableRow.TrailingText, obj3),
          arrow: canManageParent,
          onPress: fn,
        };
        const TableRow = tmp7(6000).TableRow;
        intl2 = tmp7(1126).intl;
        fn = undefined;
        obj3 = { text: stringResult };
        if (canManageParent) {
          fn = () => self.pushScreen(constants.CHANGE_CATEGORY);
        }
        const obj4 = { hasIcons: true, children: closure_47(TableRow, obj2) };
        return closure_47(TableRowGroup, obj4);
      }
    }
    return null;
  }
  renderThreadSettings() {
    let Stack;
    let items;
    let obj2;
    const obj = { children: closure_48(Stack, obj2) };
    const tmp = closure_52(this.context);
    const Form = Form2.Form;
    obj2 = { spacing: nativeDefault.space.PX_24, style: tmp.stackPadding, children: items };
    Stack = Stack_Stack.Stack;
    items = [
      this.renderChannelInfo(),
      this.renderCommonSettingsSection(),
      this.renderThreadManagementActions(),
      this.renderThreadSpoiler(),
      this.renderSlowmode(),
      this.renderAutoArchiveDuration(),
      this.renderInvitable(),
      this.renderDeleteButton(),
    ];
    return vanityURLCode(Form, obj);
  }
  renderChannelSettings() {
    let Stack;
    let items;
    let obj2;
    const obj = { children: closure_48(Stack, obj2) };
    const tmp = closure_52(this.context);
    const Form = Form2.Form;
    obj2 = { spacing: nativeDefault.space.PX_24, style: tmp.stackPadding, children: items };
    Stack = Stack_Stack.Stack;
    items = [
      this.renderChannelInfo(),
      this.renderForumTags(),
      this.renderCategory(),
      this.renderPermissions(),
      this.renderCommonSettingsSection(),
      this.renderDefaultForumLayout(),
      this.renderDefaultSortOrder(),
      this.renderDefaultTagSetting(),
      this.renderAnnouncement(),
      this.renderNsfwConfig(),
      this.renderVoiceChannelApp(),
      this.renderSlowmode(),
      this.renderDefaultAutoArchiveDuration(),
      this.renderBitrateSettings(),
      this.renderVideoQualityModeSettings(),
      this.renderUserLimitSettings(),
      this.renderRegionOverride(),
      this.renderUncommonSettingsSection(),
      this.renderShowMediaDownloadOptions(),
      this.renderDeleteButton(),
    ];
    return vanityURLCode(Form, obj);
  }
  render() {
    let renderThreadSettingsResult;
    const self = this;
    const tmp = closure_52(this.context);
    if (this.props.isThread) {
      renderThreadSettingsResult = self.renderThreadSettings();
    } else {
      renderThreadSettingsResult = self.renderChannelSettings();
    }
    const obj = { style: tmp.screenContainer, children: renderThreadSettingsResult };
    return vanityURLCode(View, obj);
  }
}
const prototype = ChannelSettingsOverview.prototype;
ChannelSettingsOverview.contextType = native.ThemeContext;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let hasJoinedThread;
      let isMutedThread;
      let items5;
      let tmp10;
      let tmp14;
      let tmp20;
      let tmp30;
      let tmp7;
      let tmp9;
      let obj = channelId(navigation[25]);
      const cResult = obj.c(26);
      channelId = channelId.channelId;
      const autoFocusElement = channelId.autoFocusElement;
      let obj2 = channelId(navigation[100]);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function l() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = channelId(navigation[26]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelSettingsStore];
        class C {
          constructor() {
            return channel.getChannel();
          }
        }
        cResult[3] = items1;
        cResult[4] = C;
        tmp10 = C;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      const tmpResult7 = channelId(navigation[26]);
      const stateFromStores1 = tmpResult7.useStateFromStores(tmp9, tmp10);
      const tmpResult8 = channelId(navigation[75]);
      const isThreadModerator = tmpResult8.useIsThreadModerator(stateFromStores);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [JoinedThreadsStore];
        class C {
          constructor() {
            return channel.getChannel();
          }
        }
        cResult[5] = items2;
        tmp14 = items2;
      } else {
        tmp14 = cResult[5];
      }
      if (cResult[6] !== stateFromStores) {
        class L {
          constructor() {
            let hasJoinedResult;
            let isMutedResult;
            if (null != stateFromStores) {
              isMutedResult = JoinedThreadsStore.isMuted(stateFromStores.id);
            }
            const obj = { isMutedThread: isMutedResult, hasJoinedThread: hasJoinedResult };
            hasJoinedResult = undefined;
            if (null != stateFromStores) {
              hasJoinedResult = JoinedThreadsStore.hasJoined(stateFromStores.id);
            }
            return obj;
          }
        }
        cResult[6] = stateFromStores;
        class C {
          constructor() {
            return channel.getChannel();
          }
        }
        cResult[7] = L;
      } else {
        class L {
          constructor() {
            let hasJoinedResult;
            let isMutedResult;
            if (null != stateFromStores) {
              isMutedResult = JoinedThreadsStore.isMuted(stateFromStores.id);
            }
            const obj = { isMutedThread: isMutedResult, hasJoinedThread: hasJoinedResult };
            hasJoinedResult = undefined;
            if (null != stateFromStores) {
              hasJoinedResult = JoinedThreadsStore.hasJoined(stateFromStores.id);
            }
            return obj;
          }
        }
      }
      const tmpResult9 = channelId(navigation[26]);
      const stateFromStoresObject = tmpResult9.useStateFromStoresObject(tmp14, L);
      ({ isMutedThread, hasJoinedThread } = stateFromStoresObject);
      const tmpResult10 = channelId(navigation[75]);
      const canManageThread = tmpResult10.useCanManageThread(stateFromStores);
      const tmpResult11 = channelId(navigation[59]);
      const shouldHideChannelContent = tmpResult11.useShouldHideChannelContent(stateFromStores);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            let hasJoinedResult;
            let isMutedResult;
            if (null != stateFromStores) {
              isMutedResult = JoinedThreadsStore.isMuted(stateFromStores.id);
            }
            const obj = { isMutedThread: isMutedResult, hasJoinedThread: hasJoinedResult };
            hasJoinedResult = undefined;
            if (null != stateFromStores) {
              hasJoinedResult = JoinedThreadsStore.hasJoined(stateFromStores.id);
            }
            return obj;
          }
        }
        const items3 = [ChannelSettingsStore, , , , , ,];
        class C {
          constructor() {
            return channel.getChannel();
          }
        }
        items3[1] = GuildStore;
        items3[2] = ChannelStore;
        items3[3] = UserStore;
        items3[4] = RegionStore;
        items3[5] = GuildChannelStore;
        items3[6] = PermissionStore;
        cResult[8] = items3;
        tmp20 = items3;
      } else {
        class L {
          constructor() {
            let hasJoinedResult;
            let isMutedResult;
            if (null != stateFromStores) {
              isMutedResult = JoinedThreadsStore.isMuted(stateFromStores.id);
            }
            const obj = { isMutedThread: isMutedResult, hasJoinedThread: hasJoinedResult };
            hasJoinedResult = undefined;
            if (null != stateFromStores) {
              hasJoinedResult = JoinedThreadsStore.hasJoined(stateFromStores.id);
            }
            return obj;
          }
        }
      }
      if (cResult[9] === stateFromStores) {
        class L {
          constructor() {
            let hasJoinedResult;
            let isMutedResult;
            if (null != stateFromStores) {
              isMutedResult = JoinedThreadsStore.isMuted(stateFromStores.id);
            }
            const obj = { isMutedThread: isMutedResult, hasJoinedThread: hasJoinedResult };
            hasJoinedResult = undefined;
            if (null != stateFromStores) {
              hasJoinedResult = JoinedThreadsStore.hasJoined(stateFromStores.id);
            }
            return obj;
          }
        }
        const tmpResult12 = channelId(navigation[26]);
        const stateFromStoresObject1 = tmpResult12.useStateFromStoresObject(tmp20, P, items5);
        class C {
          constructor() {
            return channel.getChannel();
          }
        }
        const ref = shouldHideChannelContent.useRef(null);
        if (cResult[13] === autoFocusElement) {
          let tmp34Result;
          class L {
            constructor() {
              let hasJoinedResult;
              let isMutedResult;
              if (null != stateFromStores) {
                isMutedResult = JoinedThreadsStore.isMuted(stateFromStores.id);
              }
              const obj = { isMutedThread: isMutedResult, hasJoinedThread: hasJoinedResult };
              hasJoinedResult = undefined;
              if (null != stateFromStores) {
                hasJoinedResult = JoinedThreadsStore.hasJoined(stateFromStores.id);
              }
              return obj;
            }
          }
          const effect = obj10.useEffect(V, tmp30);
          if (cResult[17] === canManageThread) {
            class L {
              constructor() {
                let hasJoinedResult;
                let isMutedResult;
                if (null != stateFromStores) {
                  isMutedResult = JoinedThreadsStore.isMuted(stateFromStores.id);
                }
                const obj = { isMutedThread: isMutedResult, hasJoinedThread: hasJoinedResult };
                hasJoinedResult = undefined;
                if (null != stateFromStores) {
                  hasJoinedResult = JoinedThreadsStore.hasJoined(stateFromStores.id);
                }
                return obj;
              }
            }
          }
          class C {
            constructor() {
              return channel.getChannel();
            }
          }
          if (null != stateFromStores1) {
            class L {
              constructor() {
                let hasJoinedResult;
                let isMutedResult;
                if (null != stateFromStores) {
                  isMutedResult = JoinedThreadsStore.isMuted(stateFromStores.id);
                }
                const obj = { isMutedThread: isMutedResult, hasJoinedThread: hasJoinedResult };
                hasJoinedResult = undefined;
                if (null != stateFromStores) {
                  hasJoinedResult = JoinedThreadsStore.hasJoined(stateFromStores.id);
                }
                return obj;
              }
            }
            class C {
              constructor() {
                return channel.getChannel();
              }
            }
            const merged = Object.assign(stateFromStoresObject1);
            tmp36.channel = stateFromStores1;
            tmp36.navigation = navigation;
            class V {
              constructor() {
                return closure_2.addListener("transitionEnd", (data) => {
                  if (!data.data.closing) {
                    if (autoFocusElement === constants.CHANNEL_NAME) {
                      const current = ref.current;
                      let focusResult;
                      if (current != null) {
                        focusResult = current.focus();
                      }
                      return focusResult;
                    }
                  }
                });
              }
            }
            if (stateFromStores != null) {
              class L {
                constructor() {
                  let hasJoinedResult;
                  let isMutedResult;
                  if (null != stateFromStores) {
                    isMutedResult = JoinedThreadsStore.isMuted(stateFromStores.id);
                  }
                  const obj = { isMutedThread: isMutedResult, hasJoinedThread: hasJoinedResult };
                  hasJoinedResult = undefined;
                  if (null != stateFromStores) {
                    hasJoinedResult = JoinedThreadsStore.hasJoined(stateFromStores.id);
                  }
                  return obj;
                }
              }
            }
            tmp36.isLockedThread = undefined;
            if (stateFromStores != null) {
              class L {
                constructor() {
                  let hasJoinedResult;
                  let isMutedResult;
                  if (null != stateFromStores) {
                    isMutedResult = JoinedThreadsStore.isMuted(stateFromStores.id);
                  }
                  const obj = { isMutedThread: isMutedResult, hasJoinedThread: hasJoinedResult };
                  hasJoinedResult = undefined;
                  if (null != stateFromStores) {
                    hasJoinedResult = JoinedThreadsStore.hasJoined(stateFromStores.id);
                  }
                  return obj;
                }
              }
            }
            tmp36.isArchivedThread = undefined;
            tmp36.canManageThread = canManageThread;
            tmp36.canUnarchiveThread = stateFromStoresObject1.canUnarchiveThread;
            tmp36.isMutedThread = isMutedThread;
            tmp36.hasJoinedThread = hasJoinedThread;
            if (stateFromStores != null) {
              class L {
                constructor() {
                  let hasJoinedResult;
                  let isMutedResult;
                  if (null != stateFromStores) {
                    isMutedResult = JoinedThreadsStore.isMuted(stateFromStores.id);
                  }
                  const obj = { isMutedThread: isMutedResult, hasJoinedThread: hasJoinedResult };
                  hasJoinedResult = undefined;
                  if (null != stateFromStores) {
                    hasJoinedResult = JoinedThreadsStore.hasJoined(stateFromStores.id);
                  }
                  return obj;
                }
              }
            }
            tmp36.isForumPost = undefined;
            tmp36.channelNameRef = ref;
            tmp34Result = tmp34(ChannelSettingsOverview, tmp36);
          }
          cResult[17] = canManageThread;
          class V {
            constructor() {
              return closure_2.addListener("transitionEnd", (data) => {
                if (!data.data.closing) {
                  if (autoFocusElement === constants.CHANNEL_NAME) {
                    const current = ref.current;
                    let focusResult;
                    if (current != null) {
                      focusResult = current.focus();
                    }
                    return focusResult;
                  }
                }
              });
            }
          }
          cResult[19] = stateFromStores1;
          cResult[20] = hasJoinedThread;
          cResult[21] = isMutedThread;
          cResult[22] = isThreadModerator;
          cResult[23] = navigation;
          cResult[24] = stateFromStoresObject1;
          cResult[25] = tmp34Result;
        }
        class V {
          constructor() {
            return closure_2.addListener("transitionEnd", (data) => {
              if (!data.data.closing) {
                if (autoFocusElement === constants.CHANNEL_NAME) {
                  const current = ref.current;
                  let focusResult;
                  if (current != null) {
                    focusResult = current.focus();
                  }
                  return focusResult;
                }
              }
            });
          }
        }
        const items4 = [autoFocusElement, navigation];
        cResult[13] = autoFocusElement;
        cResult[14] = navigation;
        cResult[15] = V;
        cResult[16] = items4;
        tmp30 = items4;
      }
      class P {
        constructor() {
          let canResult;
          let errors;
          let obj2;
          let regions;
          let submitting;
          const props = ChannelSettingsStore.getProps();
          ({ submitting, errors } = props);
          if (null == stateFromStores) {
            return { isThread: false, submitting, errors };
          } else {
            const guild = GuildStore.getGuild(stateFromStores.getGuildId());
            channel = ChannelStore.getChannel(stateFromStores.parent_id);
            const currentUser = UserStore.getCurrentUser();
            const hasItem = set.has(stateFromStores.type);
            const obj4 = {
              isThread: hasItem,
              guild,
              category: channel,
              hasCategories: GuildChannelStore.hasCategories(stateFromStores.guild_id),
              pinDisabled: shouldHideChannelContent,
              canManageChannels: PermissionStore.can(constants.MANAGE_CHANNELS, stateFromStores),
              isChannelOwner: null != currentUser && stateFromStores.ownerId === currentUser.id,
              canManageParent: canResult,
              canManageRoles: PermissionStore.can(constants.MANAGE_ROLES, stateFromStores),
              canSendMessages: PermissionStore.can(constants.SEND_MESSAGES, stateFromStores),
              canManageWebhooks:
                set2.has(stateFromStores.type) && PermissionStore.can(constants.MANAGE_WEBHOOKS, stateFromStores),
              canUnarchiveThread: obj2.canUnarchiveThread(stateFromStores),
              regions,
              submitting,
              errors,
              isNSFWDisabled: isGuildNSFW(guild) || null != stateFromStores.linkedLobby,
            };
            regions = RegionStore.getRegions(stateFromStores.getGuildId());
            if (null != channel) {
              canResult = PermissionStore.can(constants.MANAGE_CHANNELS, channel);
            } else {
              canResult = PermissionStore.can(constants.MANAGE_CHANNELS, guild);
            }
            set2.has(stateFromStores.type) && PermissionStore.can(constants.MANAGE_WEBHOOKS, stateFromStores);
            obj2 = ThreadHooks;
            isGuildNSFW(guild) || null != stateFromStores.linkedLobby;
            return obj4;
          }
        }
      }
      items5 = [stateFromStores, shouldHideChannelContent];
      cResult[9] = stateFromStores;
      cResult[10] = shouldHideChannelContent;
      cResult[11] = P;
      cResult[12] = items5;
    }
  : (arg0) => {
      let autoFocusElement;
      let hasJoinedThread;
      let isArchivedThreadResult;
      let isForumPostResult;
      let isLockedThreadResult;
      let isMutedThread;
      let require;
      ({ channelId: require, autoFocusElement } = arg0);
      navigation = undefined;
      let obj = require("useNavigation");
      navigation = obj.useNavigation();
      let obj2 = require("get initialized");
      const items = [ChannelStore];
      const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(_require));
      let obj4 = require("get initialized");
      const items1 = [ChannelSettingsStore];
      const stateFromStores1 = obj4.useStateFromStores(items1, () => channel.getChannel());
      const obj5 = require("ThreadHooks");
      const isThreadModerator = obj5.useIsThreadModerator(stateFromStores);
      const items2 = [JoinedThreadsStore];
      const obj6 = require("get initialized");
      const stateFromStoresObject = obj6.useStateFromStoresObject(items2, () => {
        let hasJoinedResult;
        let isMutedResult;
        if (null != stateFromStores) {
          isMutedResult = JoinedThreadsStore.isMuted(stateFromStores.id);
        }
        const obj = { isMutedThread: isMutedResult, hasJoinedThread: hasJoinedResult };
        hasJoinedResult = undefined;
        if (null != stateFromStores) {
          hasJoinedResult = JoinedThreadsStore.hasJoined(stateFromStores.id);
        }
        return obj;
      });
      ({ isMutedThread, hasJoinedThread } = stateFromStoresObject);
      const obj7 = require("ThreadHooks");
      const canManageThread = obj7.useCanManageThread(stateFromStores);
      const obj8 = require("AgeGateUtils");
      const shouldHideChannelContent = obj8.useShouldHideChannelContent(stateFromStores);
      const items3 = [
        ChannelSettingsStore,
        GuildStore,
        ChannelStore,
        UserStore,
        RegionStore,
        GuildChannelStore,
        PermissionStore,
      ];
      const items4 = [stateFromStores, shouldHideChannelContent];
      const obj9 = require("get initialized");
      const stateFromStoresObject1 = obj9.useStateFromStoresObject(
        items3,
        () => {
          let canResult;
          let errors;
          let obj2;
          let regions;
          let submitting;
          const props = ChannelSettingsStore.getProps();
          ({ submitting, errors } = props);
          if (null == stateFromStores) {
            return { isThread: false, submitting, errors };
          } else {
            const guild = GuildStore.getGuild(stateFromStores.getGuildId());
            channel = ChannelStore.getChannel(stateFromStores.parent_id);
            const currentUser = UserStore.getCurrentUser();
            const hasItem = set.has(stateFromStores.type);
            const obj4 = {
              isThread: hasItem,
              guild,
              category: channel,
              hasCategories: GuildChannelStore.hasCategories(stateFromStores.guild_id),
              pinDisabled: shouldHideChannelContent,
              canManageChannels: PermissionStore.can(constants.MANAGE_CHANNELS, stateFromStores),
              isChannelOwner: null != currentUser && stateFromStores.ownerId === currentUser.id,
              canManageParent: canResult,
              canManageRoles: PermissionStore.can(constants.MANAGE_ROLES, stateFromStores),
              canSendMessages: PermissionStore.can(constants.SEND_MESSAGES, stateFromStores),
              canManageWebhooks:
                set2.has(stateFromStores.type) && PermissionStore.can(constants.MANAGE_WEBHOOKS, stateFromStores),
              canUnarchiveThread: obj2.canUnarchiveThread(stateFromStores),
              regions,
              submitting,
              errors,
              isNSFWDisabled: isGuildNSFW(guild) || null != stateFromStores.linkedLobby,
            };
            regions = RegionStore.getRegions(stateFromStores.getGuildId());
            if (null != channel) {
              canResult = PermissionStore.can(constants.MANAGE_CHANNELS, channel);
            } else {
              canResult = PermissionStore.can(constants.MANAGE_CHANNELS, guild);
            }
            set2.has(stateFromStores.type) && PermissionStore.can(constants.MANAGE_WEBHOOKS, stateFromStores);
            obj2 = ThreadHooks;
            isGuildNSFW(guild) || null != stateFromStores.linkedLobby;
            return obj4;
          }
        },
        items4,
      );
      const ref = shouldHideChannelContent.useRef(null);
      const items5 = [autoFocusElement, navigation];
      const effect = shouldHideChannelContent.useEffect(
        () =>
          navigation.addListener("transitionEnd", (data) => {
            if (!data.data.closing) {
              if (autoFocusElement === constants.CHANNEL_NAME) {
                const current = ref.current;
                let focusResult;
                if (current != null) {
                  focusResult = current.focus();
                }
                return focusResult;
              }
            }
          }),
        items5,
      );
      let tmp11Result = null;
      if (null != stateFromStores1) {
        const obj3 = {
          channel: stateFromStores1,
          navigation,
          isThreadModerator,
          isLockedThread: isLockedThreadResult,
          isArchivedThread: isArchivedThreadResult,
          canManageThread,
          canUnarchiveThread: stateFromStoresObject1.canUnarchiveThread,
          isMutedThread,
          hasJoinedThread,
          isForumPost: isForumPostResult,
          channelNameRef: ref,
        };
        const merged = Object.assign(stateFromStoresObject1);
        isLockedThreadResult = undefined;
        if (stateFromStores != null) {
          isLockedThreadResult = stateFromStores.isLockedThread();
        }
        isArchivedThreadResult = undefined;
        if (stateFromStores != null) {
          isArchivedThreadResult = stateFromStores.isArchivedThread();
        }
        isForumPostResult = undefined;
        if (stateFromStores != null) {
          isForumPostResult = stateFromStores.isForumPost();
        }
        tmp11Result = closure_47(ChannelSettingsOverview, obj3);
      }
      return tmp11Result;
    };
size = size_mod;
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsOverview.tsx");

export default tmp10;
export const PinImage = tmp8;
