// discord_app/components_native/channel_settings/ChannelSettingsOverview.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import ThreadSortOrder from "../../../discord_common/js/shared/shared-constants/ThreadSortOrder.tsx";
import ThreadSearchTagSetting from "../../../discord_common/js/shared/shared-constants/ThreadSearchTagSetting.tsx";
import HelpdeskUtilsDefault from "../../utils/HelpdeskUtils.tsx";
import AppChannelPermissions from "../../modules/app_channels/AppChannelPermissions.tsx";
import UnicodeEmojisDefault from "../../modules/emojis/UnicodeEmojis.tsx";
import ToastActionCreatorsDefault from "../../modules/toast/native/ToastActionCreators.tsx";
import shared from "../../design/shared.tsx";
import LinkIcon from "../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import XLargeIcon from "../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx";
import ClockIcon from "../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import ChannelUtils from "../../utils/ChannelUtils.tsx";
import useChannelName from "../../modules/channel/useChannelName.tsx";
import AppAnalyticsUtilsDefault from "../../modules/app_analytics/AppAnalyticsUtils.tsx";
import AgeGateUtils from "../../modules/age_gate/AgeGateUtils.tsx";
import Stack_Stack from "../../design/components/Stack/native/Stack.native.tsx";
import LockIcon from "../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import TableRow from "../../design/components/TableRow/native/TableRow.native.tsx";
import Card from "../../design/components/Card/native/Card.native.tsx";
import TableRadioGroup from "../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRowGroup from "../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableRadioRow from "../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TextInput2 from "../../design/components/TextInput/native/TextInput.native.tsx";
import TextArea from "../../design/components/TextInput/native/TextArea.native.tsx";
import TableSwitchRow from "../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import ThreadHooks from "../../modules/threads/ThreadHooks.tsx";
import sanitizeThreadNameDefault from "../../modules/threads/sanitizeThreadName.tsx";
import ThreadActionCreatorsDefault from "../../modules/threads/ThreadActionCreators.tsx";
import HeaderShared from "../../modules/main_tabs_v2/native/shared_components/HeaderShared.tsx";
import Form from "../../design/void/Form/native/index.tsx";
import ChannelSettingsActionCreatorsDefault from "../../actions/ChannelSettingsActionCreators.tsx";
import ThreadAutoArchive from "../../modules/threads/ThreadAutoArchive.tsx";
import _modDef8810 from "../../../_runtime/metro/08810__.js";
import sanitizeChannelNameDefault from "../../modules/channel/sanitizeChannelName.tsx";
import AppChannelApplicationSelectorDefault from "../../modules/app_channels/native/AppChannelApplicationSelector.tsx";
import GroupPlusIcon from "../../design/components/Icon/native/redesign/generated/GroupPlusIcon.tsx";
import ChannelActionSheetUtils from "../../modules/channel/native/ChannelActionSheetUtils.tsx";
import AvailableForumTagDefault from "../../modules/forums/native/AvailableForumTag.tsx";
import threadActionSheets from "../../modules/threads/native/threadActionSheets.tsx";
import Slider from "../../design/components/Slider/native/Slider.native.tsx";
import RegionActionCreatorsDefault from "../../actions/RegionActionCreators.tsx";
import SecondsSliderUtils from "../../utils/SecondsSliderUtils.tsx";
import ChannelSettingsUtils from "ChannelSettingsUtils.tsx";
import ThreadAutoArchiveBottomSheet from "../../modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx";
import getCannotSwapApplicationTextDefault from "../../modules/app_channels/getCannotSwapApplicationText.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import JoinedThreadsStore from "../../modules/threads/JoinedThreadsStore.tsx";
import ChannelSettingsStore from "../../stores/ChannelSettingsStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import RegionStore from "../../stores/RegionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
class PinImage {
  constructor(arg0) {
    channelId = global.channelId;
    tmp = closure_50();
    tmp2 = channelId;
    tmp3 = closure_2;
    obj = channelId(closure_2[24]);
    items = [];
    items[0] = closure_21;
    tmp4 = undefined;
    if (obj.useStateFromStores(items, () => ReadStateStore.hasUnreadPins(channelId))) {
      tmp5 = jsx;
      tmp6 = View;
      obj1 = { style: null, children: null };
      obj1.style = tmp.outer;
      obj5 = { style: null };
      obj5.style = tmp.badge;
      obj1.children = jsx(View, obj5);
      tmp4 = jsx(View, obj1);
    }
    obj6 = { style: global.style, children: null };
    items1 = [,];
    items1[0] = jsx(tmp2(tmp3[25]).PinIcon, {});
    items1[1] = tmp4;
    obj6.children = items1;
    return jsxs(View, obj6);
  }
}
const View = fn(17).View;
const ChannelRecord = fn(2049);
({
  EDITABLE_VOICE_SETTINGS_TYPES: closure_7,
  isGuildTextChannelType: closure_8,
  THREADED_CHANNEL_TYPES: closure_9,
  THREAD_CHANNEL_TYPES: c10,
  SLOWMODE_CHANNEL_TYPES: closure_11,
  NSFW_CHANNEL_TYPES: closure_12,
  TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES: map1,
  GUILD_WEBHOOK_CHANNEL_TYPES: closure_14,
} = ChannelRecord);
const isGuildNSFW = fn(2063).isGuildNSFW;
let closure_25 = fn(16629).ChannelSettingsAutoFocusElement;
const Constants = fn(1074);
({
  AnalyticEvents: closure_26,
  BITRATE_DEFAULT: closure_27,
  BITRATE_MIN: closure_28,
  ChannelSettingsSections: closure_29,
  ChannelTypes: closure_30,
  ChannelTypesSets: items,
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
const ChannelConstants = fn(2052);
({
  ChannelFlags: closure_42,
  MAX_CHANNEL_TOPIC_LENGTH: closure_43,
  MAX_FORUM_CHANNEL_TOPIC_LENGTH: closure_44,
} = ChannelConstants);
const MAX_FORUM_TAGS = fn(6691).MAX_FORUM_TAGS;
let closure_46 = fn(1114).DEFAULT_AUTO_ARCHIVE_DURATION;
const jsxProd = fn(21);
({ jsx: closure_47, jsxs: closure_48, Fragment: closure_49 } = jsxProd);
let createStyles = fn(4836);
let obj2 = { outer: null, badge: null };
let size = {
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
obj2.outer = size;
const size1 = {
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  width: 8,
  height: 8,
  borderRadius: nativeDefault.radii.xs,
};
obj2.badge = size1;
let closure_50 = createStyles.createStyles(obj2);
createStyles = fn(4836);
let obj3 = {
  screenContainer: {
    flex: 1,
    backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
    paddingTop: nativeDefault.space.PX_16,
  },
  slider: { marginHorizontal: 15 },
  stackPadding: null,
  alertText: null,
  tagsWrapper: null,
  addTagIconButtonWrapper: null,
  createTagButton: null,
  createTagButtonText: null,
};
let obj4 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  paddingTop: nativeDefault.space.PX_16,
};
obj3.stackPadding = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj3.alertText = { marginTop: 16 };
obj3.tagsWrapper = { display: "flex", flexDirection: "row", flexWrap: "wrap" };
let obj6 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj3.addTagIconButtonWrapper = { justifyContent: "center", margin: nativeDefault.space.PX_4 };
let obj7 = { justifyContent: "center", margin: nativeDefault.space.PX_4 };
obj3.createTagButton = { backgroundColor: "transparent", paddingHorizontal: 0, marginTop: nativeDefault.space.PX_4 };
obj3.createTagButtonText = { fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, fontSize: 14 };
let closure_52 = createStyles.createLegacyClassComponentStyles(obj3);
const PureComponent = noop.PureComponent;
class ChannelSettingsOverview extends PureComponent {
  constructor(arg0) {
    tmp1 = new tmp(global, tmp4, tmp3, tmp2);
    closure_0 = tmp1;
    obj = closure_1(closure_2[27]);
    tmp1._cooldown = obj.findIndex(SLOWMODE_VALUES, (arg0) => arg0 >= closure_0.props.channel.rateLimitPerUser);
    tmp1.state = { hasChanges: false };
    tmp1.pushScreen = function pushScreen() {
      const items = [...arguments];
      const navigation = closure_0.props.navigation;
      const items1 = [...items];
      navigation.push.apply(items1);
      if (items[0] !== constants2.PERMISSIONS) {
        const obj2 = { settings_type: "channel", origin_pane: constants8.CHANNEL_SETTINGS, destination_pane: items[0] };
        AppAnalyticsUtilsDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
      }
    };
    tmp1.handleSave = function handleSave() {
      if (channel.state.hasChanges) {
        channel = obj.props.channel;
        const obj4 = {
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
          autoArchiveDuration: null,
          locked: null,
          invitable: null,
          flags: null,
          defaultSortOrder: null,
          defaultForumLayout: null,
          defaultTagSetting: null,
          iconEmoji: null,
          themeColor: null,
          applicationId: null,
        };
        ({
          name: obj3.name,
          type: obj3.type,
          topic: obj3.topic,
          position: obj3.position,
          bitrate: obj3.bitrate,
          userLimit: obj3.userLimit,
          defaultAutoArchiveDuration: obj3.defaultAutoArchiveDuration,
          nsfw: obj3.nsfw,
          rateLimitPerUser: obj3.rateLimitPerUser,
          videoQualityMode: obj3.videoQualityMode,
          threadMetadata,
        } = channel);
        let autoArchiveDuration;
        if (threadMetadata != null) {
          autoArchiveDuration = threadMetadata.autoArchiveDuration;
        }
        obj4.autoArchiveDuration = autoArchiveDuration;
        const threadMetadata2 = channel.threadMetadata;
        let locked;
        if (threadMetadata2 != null) {
          locked = threadMetadata2.locked;
        }
        obj4.locked = locked;
        const threadMetadata3 = channel.threadMetadata;
        let invitable;
        if (threadMetadata3 != null) {
          invitable = threadMetadata3.invitable;
        }
        obj4.invitable = invitable;
        obj4.flags = channel.flags;
        obj4.defaultSortOrder = channel.getDefaultSortOrder();
        obj4.defaultForumLayout = channel.defaultForumLayout;
        obj4.defaultTagSetting = channel.getDefaultTagSetting();
        ({ iconEmoji: obj3.iconEmoji, themeColor: obj3.themeColor, application_id: obj3.applicationId } = channel);
        ChannelSettingsActionCreatorsDefault.saveChannel(channel.id, obj4).then((status) => {
          if (200 === status.status) {
            let navigation = ToastActionCreatorsDefault.open;
            let goBackResult = { key: "THREAD_SETTINGS_UPDATED", icon: _modDef8810, content: null };
            const intl = util.intl;
            const string = intl.string;
            let n2Y84J = util.t;
            if (isThreadResult) {
              n2Y84J = n2Y84J.n2Y84J;
              let stringResult = string(n2Y84J);
            } else {
              stringResult = string(n2Y84J["FE/ohq"]);
            }
            goBackResult.content = stringResult;
            navigation(goBackResult);
            navigation = props.props.navigation;
            goBackResult = navigation.goBack();
            isThreadResult = channel.isThread();
          }
        });
        obj.setState({ hasChanges: false });
        const saveChannelResult = ChannelSettingsActionCreatorsDefault.saveChannel(channel.id, obj4);
      }
    };
    tmp1.handleChangeName = function handleChangeName(arg0) {
      const obj = ChannelSettingsActionCreatorsDefault;
      obj.updateChannel({ name: sanitizeChannelNameDefault(arg0, closure_0.props.channel.type) });
      closure_0.setState({ hasChanges: true });
    };
    tmp1.handleBlurName = function handleBlurName() {
      const channel = closure_0.props.channel;
      if (channel.isThread()) {
        const tmp3 = sanitizeThreadNameDefault(channel.name, true);
        if (tmp3 !== channel.name) {
          const obj2 = { name: tmp3 };
          ChannelSettingsActionCreatorsDefault.updateChannel(obj2);
          closure_0.setState({ hasChanges: true });
          const tmpResult = ChannelSettingsActionCreatorsDefault;
        }
      }
    };
    tmp1.handleChangeTopic = function handleChangeTopic(emojiName) {
      const obj2 = { topic: null };
      const obj = ChannelSettingsActionCreatorsDefault;
      obj2.topic = UnicodeEmojisDefault.translateInlineEmojiToSurrogates(emojiName);
      obj.updateChannel(obj2);
      closure_0.setState({ hasChanges: true });
    };
    tmp1.handleBitRateChange = function handleBitRateChange(arg0) {
      const obj = ChannelSettingsActionCreatorsDefault;
      obj.updateChannel({ bitrate: Math.round(arg0) });
      closure_0.setState({ hasChanges: true });
    };
    tmp1.handleVideoQualityModeChange = function handleVideoQualityModeChange(videoQualityMode) {
      ChannelSettingsActionCreatorsDefault.updateChannel({ videoQualityMode });
      closure_0.setState({ hasChanges: true });
    };
    tmp1.handleNsfwChange = function handleNsfwChange(nsfw) {
      ChannelSettingsActionCreatorsDefault.updateChannel({ nsfw });
      closure_0.setState({ hasChanges: true });
    };
    tmp1.handleThreadSpoilerChange = function handleThreadSpoilerChange(setting) {
      const setFlagResult = FlagUtils.setFlag(closure_0.props.channel.flags, constants10.IS_SPOILER_CHANNEL, setting);
      ChannelSettingsActionCreatorsDefault.updateChannel({ flags: setFlagResult });
      closure_0.setState({ hasChanges: true });
    };
    tmp1.handleSlowmodeChange = function handleSlowmodeChange(arg0) {
      let hasChanges = closure_0.state.hasChanges;
      const tmp2 = length[Math.round(Math, arg0)];
      ChannelSettingsActionCreatorsDefault.updateChannel({ rateLimitPerUser: tmp2 });
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(
        SecondsSliderUtils.getSecondsSliderLabel(tmp2, false, intl.string(util.t.zvDu4h)),
      );
      if (!hasChanges) {
        hasChanges = closure_0.props.channel.rateLimitPerUser !== tmp2;
      }
      closure_0.setState({ hasChanges });
    };
    tmp1.handleDefaultAutoArchiveDurationChange = function handleDefaultAutoArchiveDurationChange(
      defaultAutoArchiveDuration,
    ) {
      ChannelSettingsActionCreatorsDefault.updateChannel({ defaultAutoArchiveDuration });
      closure_0.setState({ hasChanges: true });
    };
    tmp1.handleAutoArchiveDurationChange = function handleAutoArchiveDurationChange(autoArchiveDuration) {
      ChannelSettingsActionCreatorsDefault.updateChannel({ autoArchiveDuration });
      closure_0.setState({ hasChanges: true });
    };
    tmp1.handleDefaultSortOrderChange = function handleDefaultSortOrderChange(defaultSortOrder) {
      ChannelSettingsActionCreatorsDefault.updateChannel({ defaultSortOrder });
      closure_0.setState({ hasChanges: true });
    };
    tmp1.handleDefaultTagSettingChange = function handleDefaultTagSettingChange(defaultTagSetting) {
      ChannelSettingsActionCreatorsDefault.updateChannel({ defaultTagSetting });
      closure_0.setState({ hasChanges: true });
    };
    tmp1.handleInvitableChange = function handleInvitableChange(invitable) {
      ChannelSettingsActionCreatorsDefault.updateChannel({ invitable });
      closure_0.setState({ hasChanges: true });
    };
    tmp1.handleAnnouncementChange = function handleAnnouncementChange(arg0) {
      ChannelSettingsActionCreatorsDefault.updateChannel({
        type: arg0 ? constants3.GUILD_TEXT : constants3.GUILD_ANNOUNCEMENT,
      });
      closure_0.setState({ hasChanges: true });
      const obj2 = { type: arg0 ? constants3.GUILD_TEXT : constants3.GUILD_ANNOUNCEMENT };
    };
    tmp1.handleActiveChannelsRemovedChange = function handleActiveChannelsRemovedChange(arg0) {
      const setFlagResult = FlagUtils.setFlag(
        closure_0.props.channel.flags,
        constants10.ACTIVE_CHANNELS_REMOVED,
        !arg0,
      );
      ChannelSettingsActionCreatorsDefault.updateChannel({ flags: setFlagResult });
      closure_0.setState({ hasChanges: true });
    };
    tmp1.handleUserLimitChange = function handleUserLimitChange(arg0) {
      const obj = ChannelSettingsActionCreatorsDefault;
      obj.updateChannel({ userLimit: Math.round(arg0) });
      closure_0.setState({ hasChanges: true });
    };
    closure_129_0 = tmp1;
    tmp1.handleDeleteChannel = closure_3(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              let guild2;
              closure_128_3 = undefined;
              closure_128_4 = undefined;
              closure_128_5 = undefined;
              closure_128_0 = closure_1_52(tmp2.context);
              const channel = tmp2.props.channel;
              closure_128_1 = channel;
              guild2 = guild.getGuild(channel.getGuildId());
              dependencyMap = 1;
              c3 = 1;
              const obj4 = {
                value: tmp2(9018).isDefaultChannelThresholdMetAfterDelete(channel.getGuildId(), channel.id),
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
            closure_128_3 = value;
            if (null != guild2) {
              const features = guild2.features;
              if (features.has(constants.COMMUNITY)) {
                if (guild2.rulesChannelId === closure_128_1.id) {
                  if (guild2.rulesChannelId === closure_128_1.id) {
                    const intl2 = tmp2(1115).intl;
                    let stringResult = intl2.string(tmp2(1115).t.yjrZPl);
                  } else {
                    const intl = tmp2(1115).intl;
                    stringResult = intl.string(tmp2(1115).t["1B1/NB"]);
                  }
                  closure_128_5 = stringResult;
                  const obj6 = { title: null, confirmText: null, children: null };
                  const intl3 = tmp2(1115).intl;
                  obj6.title = intl3.string(tmp2(1115).t["TY/V+H"]);
                  const intl4 = tmp2(1115).intl;
                  obj6.confirmText = intl4.string(tmp2(1115).t.BddRzS);
                  const obj8 = { children: null };
                  const obj9 = { style: closure_128_0.alertText, variant: "text-md/medium", children: closure_128_5 };
                  const items = [closure_1_47(tmp2(4832).Text, obj9)];
                  const obj10 = { style: closure_128_0.alertText, variant: "text-md/medium", children: null };
                  const intl5 = tmp2(1115).intl;
                  const obj11 = {
                    onClick() {
                      closure_1(user[43]).close();
                      const obj = closure_1(user[43]);
                      closure_1(user[33]).close();
                      const obj2 = closure_1(user[33]);
                      closure_1(user[45]).open(user.id, constants2.COMMUNITY);
                    },
                  };
                  obj10.children = intl5.format(tmp2(1115).t.LAJbDm, obj11);
                  items[1] = closure_1_47(tmp2(4832).Text, obj10);
                  obj8.children = items;
                  obj6.children = closure_1_48(closure_1_49, obj8);
                  tmp5(5204).show(obj6);
                  c3 = 3;
                  let obj = tmp5(5204);
                }
              }
            }
            if (null != guild2) {
              if (!closure_128_3) {
                const obj12 = { title: null, confirmText: null, children: null };
                const intl6 = tmp2(1115).intl;
                obj12.title = intl6.string(tmp2(1115).t["TY/V+H"]);
                const intl7 = tmp2(1115).intl;
                obj12.confirmText = intl7.string(tmp2(1115).t.BddRzS);
                const obj15 = { children: null };
                const obj16 = { style: closure_128_0.alertText, variant: "text-md/medium", children: null };
                const intl8 = tmp2(1115).intl;
                obj16.children = intl8.string(tmp2(1115).t.iWlB6h);
                const items1 = [closure_1_47(tmp2(4832).Text, obj16)];
                const obj17 = { style: closure_128_0.alertText, variant: "text-md/medium", children: null };
                const intl9 = tmp2(1115).intl;
                const obj18 = {
                  onClick() {
                    closure_1(user[43]).close();
                    const obj = closure_1(user[43]);
                    closure_1(user[33]).close();
                    const obj2 = closure_1(user[33]);
                    closure_1(user[45]).open(user.id, constants2.ONBOARDING);
                  },
                };
                obj17.children = intl9.format(tmp2(1115).t.ajiBwB, obj18);
                items1[1] = closure_1_47(tmp2(4832).Text, obj17);
                obj15.children = items1;
                obj12.children = closure_1_48(closure_1_49, obj15);
                tmp5(5204).show(obj12);
                const obj7 = tmp5(5204);
              }
            }
            const obj13 = tmp2(4989);
            closure_128_4 = obj13.computeChannelName(closure_128_1, UserStore, RelationshipStore, true);
            if (closure_129_0.props.isForumPost) {
              const intl11 = tmp2(1115).intl;
              let stringResult1 = intl11.string(tmp2(1115).t.nEOg1N);
            } else {
              const intl10 = tmp2(1115).intl;
              const string = intl10.string;
              const t = tmp2(1115).t;
              if (closure_129_0.props.isThread) {
                stringResult1 = string(t.H7vTe2);
              } else {
                stringResult1 = string(t["8D8Rsb"]);
              }
            }
            const obj19 = {
              title: stringResult1,
              body: null,
              cancelText: null,
              confirmText: null,
              onConfirm: null,
              confirmColor: null,
            };
            const intl12 = tmp2(1115).intl;
            const obj20 = { channelName: closure_128_4 };
            obj19.body = intl12.format(tmp2(1115).t.a6Gz9J, obj20);
            const intl13 = tmp2(1115).intl;
            obj19.cancelText = intl13.string(tmp2(1115).t.gm1Vej);
            const intl14 = tmp2(1115).intl;
            obj19.confirmText = intl14.string(tmp2(1115).t.p89ACt);
            obj19.onConfirm = closure_129_0.handleConfirmDeleteChannel;
            obj19.confirmColor = tmp5(5300).Colors.RED;
            tmp5(5204).show(obj19);
            const obj14 = tmp5(5204);
          }
        } catch (tmp129) {
          c3 = tmp;
          throw tmp129;
        }
      }
    });
    closure_130_0 = tmp1;
    tmp1.handleConfirmDeleteChannel = closure_3(async () => {
      await closure_1(tmp3[33]).deleteChannel(content.props.channel.id);
      if (1 === tmp7) {
        c4 = 0;
        closure_129_2 = closure_3;
        const aPIError = new content(tmp3[49]).APIError(closure_129_2);
        const anyErrorMessage = aPIError.getAnyErrorMessage();
        content = anyErrorMessage;
        if (anyErrorMessage == null) {
          const intl = content(tmp3[30]).intl;
          content = intl.string(content(tmp3[30]).t.CKsXk3);
        }
        closure_1(tmp3[34]).open({ key: "CHANNEL_SETTINGS_DELETE_CHANNEL_ERROR", content });
        c6 = 3;
        closure_1(tmp3[34]);
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 !== 2) {
        const rootNavigationRef = content(tmp3[48]).getRootNavigationRef();
        let isReadyResult;
        if (rootNavigationRef != null) {
          isReadyResult = obj2.isReady();
        }
        if (isReadyResult) {
          rootNavigationRef.goBack();
        }
        c4 = 0;
        content(tmp3[48]);
        obj2 = rootNavigationRef;
      }
      return value;
    });
    tmp1.handlePressTag = function handlePressTag(tag) {
      closure_0.pushScreen(constants2.EDIT_FORUM_TAG, { tag });
    };
    tmp1.handleToggleRequireTag = function handleToggleRequireTag() {
      if (closure_0.props.canManageChannels) {
        const channel = closure_0.props.channel;
        const hasFlagResult = channel.hasFlag(constants10.REQUIRE_TAG);
        const setFlagResult = FlagUtils.setFlag(closure_0.props.channel.flags, constants10.REQUIRE_TAG, !hasFlagResult);
        const obj4 = { flags: setFlagResult };
        ChannelSettingsActionCreatorsDefault.updateChannel(obj4);
        closure_0.setState({ hasChanges: true });
      }
    };
    tmp1.handleToggleShowMediaDownloadOptions = function handleToggleShowMediaDownloadOptions() {
      if (closure_0.props.canManageChannels) {
        const channel = closure_0.props.channel;
        const hasFlagResult = channel.hasFlag(constants10.HIDE_MEDIA_DOWNLOAD_OPTIONS);
        const setFlagResult = FlagUtils.setFlag(
          closure_0.props.channel.flags,
          constants10.HIDE_MEDIA_DOWNLOAD_OPTIONS,
          !hasFlagResult,
        );
        const obj4 = { flags: setFlagResult };
        ChannelSettingsActionCreatorsDefault.updateChannel(obj4);
        closure_0.setState({ hasChanges: true });
      }
    };
    tmp1.getError = function getError(arg0) {
      const errors = closure_0.props.errors;
      let tmp;
      if (errors != null) {
        tmp = errors[arg0];
      }
      return tmp;
    };
    tmp1.handleApplicationChange = function handleApplicationChange(applicationId) {
      ChannelSettingsActionCreatorsDefault.updateChannel({ applicationId });
      closure_0.setState({ hasChanges: true });
    };
    tmp1.state.hasChanges = closure_16.hasChanges();
    return tmp1;
  }
}
const prototype = ChannelSettingsOverview.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  this.updateNavigation(undefined, this.state);
  if (tmp2) {
    const regions = RegionActionCreatorsDefault.fetchRegions(self.props.guild.id);
  }
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, {
    settings_type: "channel",
    destination_pane: constants8.CHANNEL_SETTINGS,
  });
  const obj3 = { settings_type: "channel", destination_pane: constants8.CHANNEL_SETTINGS };
  tmp2 = null == this.props.regions && null != self.props.guild;
};
prototype["componentDidUpdate"] = function componentDidUpdate(arg0, arg1) {
  this.updateNavigation(arg0, arg1);
};
prototype["updateNavigation"] = function updateNavigation(submitting, hasChanges) {
  const self = this;
  const props = this.props;
  ({ navigation, submitting, isThread } = props);
  const type = props.channel.type;
  hasChanges = this.state.hasChanges;
  if (isThread) {
    const intl3 = hasChanges(1115).intl;
    const string = intl3.string;
    let BsJrhj = hasChanges(1115).t;
    if (props.isForumPost) {
      BsJrhj = BsJrhj.BsJrhj;
      let stringResult = string(BsJrhj);
    } else {
      stringResult = string(BsJrhj.d4n5Q1);
    }
  } else {
    if (type === constants3.GUILD_CATEGORY) {
      const intl2 = hasChanges(1115).intl;
      let stringResult1 = intl2.string(hasChanges(1115).t["/uELTj"]);
      let tmp3 = hasChanges;
    } else {
      tmp3 = hasChanges;
      let intl = hasChanges(1115).intl;
      stringResult1 = intl.string(hasChanges(1115).t.XPDhcc);
    }
    if (submitting) {
      let fn = tmp3(5936).HeaderSubmittingIndicator;
    } else {
      fn = (arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.onPress = self.handleSave;
        const intl = util.intl;
        obj.label = intl.string(util.t["R3BPH+"]);
        obj.disabled = !hasChanges;
        return closure_2_47(HeaderShared.HeaderTextButton, obj);
      };
    }
    let obj = { headerRight: fn, title: stringResult1 };
    navigation.setOptions(obj);
  }
};
prototype["renderChannelInfo"] = function renderChannelInfo() {
  const self = this;
  const props = this.props;
  ({ channel, canManageChannels, isThread } = props);
  ({ canManageThread, canSendMessages, isChannelOwner, isForumPost } = props);
  let hasItem = React6(channel.type) && !isThread;
  if (!hasItem) {
    const GUILD_THREADS_ONLY = constants4.GUILD_THREADS_ONLY;
    hasItem = GUILD_THREADS_ONLY.has(channel.type);
  }
  const isChannelNameSettingEditable = ChannelSettingsUtils.getIsChannelNameSettingEditable({
    canManageThread,
    canManageChannels,
    canSendMessages,
    isForumPost,
    isThread,
    isChannelOwner,
  });
  if (channel.isForumPost()) {
    const intl4 = util.intl;
    let stringResult = intl4.string(util.t.uyVrTN);
  } else if (isThread) {
    const intl3 = util.intl;
    stringResult = intl3.string(util.t.j3XWjD);
  } else if (channel.type === constants3.GUILD_CATEGORY) {
    const intl2 = util.intl;
    stringResult = intl2.string(util.t.OCAkGP);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t.PVbHDl);
  }
  const obj3 = {
    ref: self.props.channelNameRef,
    label: stringResult,
    value: null,
    onChange: null,
    onBlur: null,
    disabled: null,
    maxLength: null,
    errorMessage: null,
    enableAndroidSanitizedInputWorkaround: true,
  };
  const TextInput = TextInput2.TextInput;
  obj3.value = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
  ({ handleChangeName: obj2.onChange, handleBlurName: obj2.onBlur } = self);
  obj3.disabled = !isChannelNameSettingEditable;
  obj3.maxLength = maxLength;
  obj3.errorMessage = self.getError("name");
  if (!hasItem) {
    const obj4 = { children: null };
    const items = [tmp9, self.renderApplication(), undefined];
    obj4.children = items;
    return __V(__h, obj4);
  } else {
    const intl5 = util.intl;
    const string = intl5.string;
    const t = util.t;
    if (isForumLikeChannelResult) {
      let stringResult1 = string(t.yR6HwZ);
    } else {
      stringResult1 = string(t.X8jMDh);
    }
    const obj6 = {
      label: stringResult1,
      value: null,
      onChange: null,
      disabled: null,
      autoCorrect: true,
      maxLength: null,
      errorMessage: null,
    };
    isForumLikeChannelResult = channel.isForumLikeChannel();
    obj6.value = UnicodeEmojisDefault.translateSurrogatesToInlineEmoji(channel.topic);
    obj6.onChange = self.handleChangeTopic;
    obj6.disabled = !canManageChannels;
    obj6.maxLength = channel.isForumLikeChannel() ? closure_1_44 : closure_1_43;
    obj6.errorMessage = self.getError("topic");
    closure_1_47(TextArea.TextArea, obj6);
  }
  const tmp3Result = useChannelName;
};
prototype["renderNsfwConfig"] = function renderNsfwConfig() {
  const props = this.props;
  const channel = props.channel;
  ({ canManageChannels, isNSFWDisabled } = props);
  let tmp = null;
  if (set5.has(channel.type)) {
    tmp = null;
    if (canManageChannels) {
      tmp = null;
      if (!obj.isIOS()) {
        const obj2 = { helperText: null, hasIcons: false, children: null };
        const intl = util.intl;
        obj2.helperText = intl.string(util.t["9eUgwR"]);
        const obj3 = { label: null, value: null, onValueChange: null, disabled: null, subLabel: null };
        const intl2 = util.intl;
        obj3.label = intl2.string(util.t.Es25Yf);
        obj3.value = AgeGateUtils.isChannelOrGuildNSFW(channel);
        obj3.onValueChange = this.handleNsfwChange;
        obj3.disabled = isNSFWDisabled;
        let stringResult;
        if (null != channel.linkedLobby) {
          const intl3 = util.intl;
          stringResult = intl3.string(util.t.l6uSVa);
        }
        obj3.subLabel = stringResult;
        obj2.children = closure_1_47(TableSwitchRow.TableSwitchRow, obj3);
        tmp = closure_1_47(TableRowGroup.TableRowGroup, obj2, "nsfw-section");
        const tmp2Result = AgeGateUtils;
      }
      obj = PlatformUtils;
    }
  }
  return tmp;
};
prototype["renderThreadSpoiler"] = function renderThreadSpoiler() {
  const props = this.props;
  const channel = props.channel;
  let tmp = null;
  if (channel.isThread()) {
    const obj = { helperText: null, hasIcons: false, children: null };
    const intl = util.intl;
    obj.helperText = intl.string(util.t.ddWXHa);
    const obj2 = { label: null, value: null, onValueChange: null, disabled: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.TvUHTb);
    obj2.value = channel.isSpoilerChannel();
    obj2.onValueChange = this.handleThreadSpoilerChange;
    obj2.disabled = !props.canManageThread;
    obj.children = closure_1_47(TableSwitchRow.TableSwitchRow, obj2);
    tmp = closure_1_47(TableRowGroup.TableRowGroup, obj, "thread-spoiler-section");
  }
  return tmp;
};
prototype["renderSlowmode"] = function renderSlowmode() {
  const self = this;
  const props = this.props;
  ({ channel, canManageChannels } = props);
  if (set4.has(channel.type)) {
    if (channel.isThread()) {
      canManageChannels = props.isThreadModerator;
    }
    if (canManageChannels) {
      const intl = util.intl;
      const secondsSliderLabel = SecondsSliderUtils.getSecondsSliderLabel(
        channel.rateLimitPerUser,
        false,
        intl.string(util.t.zvDu4h),
      );
      if (channel.isForumLikeChannel()) {
        const intl3 = util.intl;
        let stringResult = intl3.string(util.t["a+1pdO"]);
      } else {
        const intl2 = util.intl;
        const string = intl2.string;
        const t = util.t;
        if (isThreadResult) {
          stringResult = string(t.OMmNCv);
        } else {
          stringResult = string(t["HEA/DU"]);
        }
        isThreadResult = channel.isThread();
      }
      const items = [];
      const obj2 = { helperText: stringResult, hasIcons: false, children: null };
      const obj3 = { border: "none", children: null };
      const obj4 = {
        style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" },
        children: null,
      };
      const obj5 = {
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        style: { flexShrink: 1 },
        children: null,
      };
      const intl4 = util.intl;
      obj5.children = intl4.string(util.t.piZgKF);
      const items1 = [closure_1_47(Text_Text.Text, obj5)];
      const obj6 = { variant: "text-md/medium", color: "text-muted", children: secondsSliderLabel };
      items1[1] = closure_1_47(Text_Text.Text, obj6);
      obj4.children = items1;
      const items2 = [__V(View, obj4)];
      const obj7 = {
        style: null,
        value: null,
        minimumValue: 0,
        maximumValue: null,
        onValueChange: null,
        accessibilityLabel: null,
        accessibilityValue: null,
      };
      const items3 = [tmp.slider, { marginStart: -4, marginTop: 8 }];
      obj7.style = items3;
      obj7.value = self._cooldown;
      obj7.maximumValue = length.length - 1;
      obj7.onValueChange = self.handleSlowmodeChange;
      const intl5 = util.intl;
      obj7.accessibilityLabel = intl5.string(util.t.piZgKF);
      const obj8 = { text: secondsSliderLabel };
      obj7.accessibilityValue = obj8;
      items2[1] = closure_1_47(Slider.Slider, obj7);
      obj3.children = items2;
      obj2.children = __V(Card.Card, obj3);
      items.push(closure_1_47(TableRowGroup.TableRowGroup, obj2, "slowmode-section"));
      return items;
    } else {
      return null;
    }
  } else {
    return null;
  }
  tmp = closure_52(this.context);
};
prototype["renderAutoArchiveDuration"] = function renderAutoArchiveDuration() {
  const props = this.props;
  const channel = props.channel;
  ({ canManageThread, isForumPost } = props);
  if (channel.isThread()) {
    if (canManageThread) {
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (isForumPost) {
        let stringResult = string(t["3aJN9M"]);
        let tmp5 = require;
      } else {
        stringResult = string(t.YUXr4Z);
        tmp5 = require;
      }
      const obj = { title: null, description: null, selected: null, channel: null, onSelectDuration: null };
      const intl2 = tmp5(1115).intl;
      obj.title = intl2.string(tmp5(1115).t.FGjMZS);
      obj.description = stringResult;
      const threadMetadata = channel.threadMetadata;
      let autoArchiveDuration;
      if (threadMetadata != null) {
        autoArchiveDuration = threadMetadata.autoArchiveDuration;
      }
      if (autoArchiveDuration == null) {
        autoArchiveDuration = closure_46;
      }
      obj.selected = autoArchiveDuration;
      obj.channel = channel;
      obj.onSelectDuration = this.handleAutoArchiveDurationChange;
      return closure_1_47(tmp5(16633).AutoArchiveDurationOptions, obj);
    }
  }
  return null;
};
prototype["renderInvitable"] = function renderInvitable() {
  const channel = this.props.channel;
  let tmp3 = null;
  if (null != channel.threadMetadata) {
    tmp3 = null;
    if (channel.type === constants3.PRIVATE_THREAD) {
      const obj = { description: null, hasIcons: false, children: null };
      const intl = util.intl;
      obj.description = intl.string(util.t.cSyXJk);
      const obj2 = { disabled: !tmp2, label: null, value: null, onValueChange: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.s2rpNf);
      obj2.value = channel.threadMetadata.invitable;
      obj2.onValueChange = tmp.handleInvitableChange;
      obj.children = closure_1_47(TableSwitchRow.TableSwitchRow, obj2);
      tmp3 = closure_1_47(TableRowGroup.TableRowGroup, obj, "thread-invitable-section");
    }
  }
  return tmp3;
};
prototype["renderDefaultAutoArchiveDuration"] = function renderDefaultAutoArchiveDuration() {
  const props = this.props;
  const channel = props.channel;
  let tmp = null;
  if (set2.has(channel.type)) {
    tmp = null;
    if (props.canManageChannels) {
      const obj = { title: null, selected: null, channel: null, onSelectDuration: null, description: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.FGjMZS);
      obj.selected = ThreadAutoArchive.getAutoArchiveDuration(channel, null);
      obj.channel = channel;
      obj.onSelectDuration = this.handleDefaultAutoArchiveDurationChange;
      const intl2 = util.intl;
      const string = intl2.string;
      let fyXclY = util.t;
      if (isForumLikeChannelResult) {
        fyXclY = fyXclY.fyXclY;
        let stringResult = string(fyXclY);
      } else {
        stringResult = string(fyXclY.W3Noi9);
      }
      obj.description = stringResult;
      closure_1_47(ThreadAutoArchiveBottomSheet.AutoArchiveDurationOptions, obj);
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
  }
  return tmp;
};
prototype["renderApplication"] = function renderApplication() {
  ({ channel, guild, canManageChannels } = this.props);
  if (channel.type === constants3.GUILD_APP) {
    if (null != guild) {
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
        onChange: null,
        disabled: null,
        description: null,
      };
      ({ id: obj.channelId, application_id: obj.selectedApplicationId } = channel);
      obj.onChange = tmp.handleApplicationChange;
      obj.disabled = !canManageChannels;
      let tmp9;
      if (!canManageChannels) {
        tmp9 = getCannotSwapApplicationTextDefault(channel);
      }
      obj.description = tmp9;
      return closure_1_47(AppChannelApplicationSelectorDefault, obj);
    }
  }
  return null;
};
prototype["renderDefaultSortOrder"] = function renderDefaultSortOrder() {
  const props = this.props;
  const channel = props.channel;
  if (channel.isForumLikeChannel()) {
    if (props.canManageChannels) {
      const defaultSortOrder = channel.getDefaultSortOrder();
      const obj = { title: null, description: null, value: null, onChange: null, hasIcons: false, children: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.gePre2);
      const intl2 = util.intl;
      obj.description = intl2.string(util.t["165cVX"]);
      obj.value = defaultSortOrder;
      obj.onChange = this.handleDefaultSortOrderChange;
      const obj2 = { label: null, value: null };
      const intl3 = util.intl;
      obj2.label = intl3.string(util.t.ElZtzj);
      obj2.value = ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY;
      const items = [closure_1_47(TableRadioRow.TableRadioRow, obj2)];
      const obj3 = { label: null, value: null };
      const intl4 = util.intl;
      obj3.label = intl4.string(util.t.w28f3F);
      obj3.value = ThreadSortOrder.ThreadSortOrder.CREATION_DATE;
      items[1] = closure_1_47(TableRadioRow.TableRadioRow, obj3);
      obj.children = items;
      return __V(TableRadioGroup.TableRadioGroup, obj);
    }
  }
  return null;
};
prototype["renderDefaultTagSetting"] = function renderDefaultTagSetting() {
  const props = this.props;
  const channel = props.channel;
  if (channel.isForumLikeChannel()) {
    if (props.canManageChannels) {
      const defaultTagSetting = channel.getDefaultTagSetting();
      const obj = { title: null, description: null, value: null, onChange: null, hasIcons: false, children: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.Paxaug);
      const intl2 = util.intl;
      obj.description = intl2.string(util.t.DqOl8J);
      obj.value = defaultTagSetting;
      obj.onChange = this.handleDefaultTagSettingChange;
      const obj2 = { label: null, value: null };
      const intl3 = util.intl;
      obj2.label = intl3.string(util.t.rQ0ctQ);
      obj2.value = ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME;
      const items = [closure_1_47(TableRadioRow.TableRadioRow, obj2)];
      const obj3 = { label: null, value: null };
      const intl4 = util.intl;
      obj3.label = intl4.string(util.t.FCXUu0);
      obj3.value = ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_ALL;
      items[1] = closure_1_47(TableRadioRow.TableRadioRow, obj3);
      obj.children = items;
      return __V(TableRadioGroup.TableRadioGroup, obj);
    }
  }
  return null;
};
prototype["renderAnnouncement"] = function renderAnnouncement() {
  const self = this;
  const props = this.props;
  ({ channel, guild } = props);
  if (set6.has(channel.type)) {
    if (null != guild) {
      const features = guild.features;
      if (features.has(constants5.NEWS)) {
        let rulesChannelId;
        if (guild != null) {
          rulesChannelId = guild.rulesChannelId;
        }
        if (channel.id !== rulesChannelId) {
          let prop;
          if (guild != null) {
            prop = guild.publicUpdatesChannelId;
          }
          if (channel.id !== prop) {
            const items = [];
            const obj = { description: null, hasIcons: false, children: null };
            const obj2 = { children: null };
            const intl = util.intl;
            const obj3 = { documentationLink: HelpdeskUtilsDefault.getArticleURL(constants6.ANNOUNCEMENT_CHANNELS) };
            const items1 = [intl.format(util.t.tI7KNX, obj3), "\n\n"];
            const intl2 = util.intl;
            items1[2] = intl2.string(util.t["2Ab4Id"]);
            obj2.children = items1;
            obj.description = __V(__h, obj2);
            const obj5 = { disabled: !props.canManageChannels, label: null, value: null, onValueChange: null };
            const intl3 = util.intl;
            obj5.label = intl3.string(util.t.Au2b7m);
            obj5.value = channel.type === constants3.GUILD_ANNOUNCEMENT;
            const handleAnnouncementChange = self.handleAnnouncementChange;
            obj5.onValueChange = handleAnnouncementChange.bind(self, channel.type === constants3.GUILD_ANNOUNCEMENT);
            obj.children = closure_1_47(TableSwitchRow.TableSwitchRow, obj5);
            items.push(closure_1_47(TableRowGroup.TableRowGroup, obj, "announcement-section"));
            return items;
          }
        }
      }
    }
  }
  return null;
};
prototype["renderBitrateSettings"] = function renderBitrateSettings() {
  const props = this.props;
  const channel = props.channel;
  ({ canManageChannels, guild } = props);
  if (this.showVoiceSettings()) {
    if (canManageChannels) {
      const items = [];
      const bitrateLimit = ChannelUtils.getBitrateLimit(guild, channel);
      const obj2 = { description: null, hasIcons: false, children: null };
      const intl = util.intl;
      const obj3 = { bitrate: __initData5 / 1000 };
      obj2.description = intl.format(util.t.SbQJk5, obj3);
      const obj4 = { children: null };
      const obj5 = {
        style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" },
        children: null,
      };
      const obj6 = {
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        style: { flexShrink: 1 },
        children: null,
      };
      const intl2 = util.intl;
      obj6.children = intl2.string(util.t.w2d0vU);
      const items1 = [closure_1_47(Text_Text.Text, obj6)];
      const obj7 = { variant: "text-md/medium", color: "text-muted", children: null };
      const _Math = Math;
      const _HermesInternal = HermesInternal;
      obj7.children = "" + Math.round(channel.bitrate / 1000) + "kbps";
      items1[1] = closure_1_47(Text_Text.Text, obj7);
      obj5.children = items1;
      const items2 = [__V(View, obj5)];
      const obj8 = { style: tmp.slider, value: null, minimumValue: null, maximumValue: null, onValueChange: null };
      const _Math2 = Math;
      obj8.value = Math.min(channel.bitrate, bitrateLimit);
      obj8.minimumValue = minimumValue;
      obj8.maximumValue = bitrateLimit;
      obj8.onValueChange = this.handleBitRateChange;
      items2[1] = closure_1_47(Slider.Slider, obj8);
      obj4.children = items2;
      obj2.children = __V(Card.Card, obj4);
      items.push(closure_1_47(TableRowGroup.TableRowGroup, obj2, "bitrate-section"));
      return items;
    }
  }
  return null;
};
prototype["renderVideoQualityModeSettings"] = function renderVideoQualityModeSettings() {
  ({ channel, canManageChannels } = this.props);
  if (this.showVoiceSettings()) {
    if (canManageChannels) {
      const items = [];
      const obj = { title: null, description: null, value: null, onChange: null, hasIcons: false, children: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.jhJEJs);
      const intl2 = util.intl;
      obj.description = intl2.format(util.t.c5W7Ss, {});
      let AUTO = channel.videoQualityMode;
      if (AUTO == null) {
        AUTO = constants9.AUTO;
      }
      obj.value = AUTO;
      obj.onChange = this.handleVideoQualityModeChange;
      const obj2 = { label: null, value: null };
      const intl3 = util.intl;
      obj2.label = intl3.string(util.t.jjKYpu);
      obj2.value = constants9.AUTO;
      const items1 = [closure_1_47(TableRadioRow.TableRadioRow, obj2)];
      const obj3 = { label: null, value: null };
      const intl4 = util.intl;
      obj3.label = intl4.string(util.t["7jOoJE"]);
      obj3.value = constants9.FULL;
      items1[1] = closure_1_47(TableRadioRow.TableRadioRow, obj3);
      obj.children = items1;
      items.push(__V(TableRadioGroup.TableRadioGroup, obj, "video-quality-section"));
      return items;
    }
  }
  return null;
};
prototype["renderUserLimitSettings"] = function renderUserLimitSettings() {
  const props = this.props;
  const channel = props.channel;
  if (this.showVoiceSettings()) {
    if (props.canManageChannels) {
      const _Math = Math;
      const rounded = Math.round(channel.userLimit);
      if (0 === rounded) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t.XX5ciX);
        let tmp7 = require;
      } else {
        const intl = util.intl;
        const obj = { num: rounded };
        stringResult = intl.formatToPlainString(util.t["3uHFUR"], obj);
        tmp7 = require;
      }
      const tmp10 = channel.isGuildStageVoice() ? __initData15 : __initData14;
      const items = [];
      const intl3 = tmp7(1115).intl;
      const format = intl3.format;
      const t = tmp7(1115).t;
      if (isGuildStageVoiceResult) {
        let formatResult = format(t.OqZI8D, {});
      } else {
        formatResult = format(t["8yb3JT"], {});
      }
      const obj2 = { description: formatResult, hasIcons: false, children: null };
      const obj3 = { children: null };
      const obj4 = {
        style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" },
        children: null,
      };
      const obj5 = {
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        style: { flexShrink: 1 },
        children: null,
      };
      const intl4 = tmp7(1115).intl;
      obj5.children = intl4.string(tmp7(1115).t["/AoSGN"]);
      const items1 = [closure_1_47(tmp7(4832).Text, obj5)];
      const obj6 = { variant: "text-md/medium", color: "text-muted", children: stringResult };
      items1[1] = closure_1_47(tmp7(4832).Text, obj6);
      obj4.children = items1;
      const items2 = [__V(View, obj4)];
      const obj7 = { style: tmp.slider, value: null, minimumValue: 0, maximumValue: null, onValueChange: null };
      const _Math2 = Math;
      obj7.value = Math.min(channel.userLimit, tmp10);
      obj7.maximumValue = tmp10;
      obj7.onValueChange = this.handleUserLimitChange;
      items2[1] = closure_1_47(tmp7(13998).Slider, obj7);
      obj3.children = items2;
      obj2.children = __V(tmp7(5919).Card, obj3);
      items.push(closure_1_47(tmp7(5999).TableRowGroup, obj2, "channel-user-limit"));
      return items;
    }
  }
  return null;
};
prototype["renderRegionOverride"] = function renderRegionOverride() {
  const self = this;
  const props = this.props;
  ({ regions, channel } = props);
  if (null == props.guild) {
    return null;
  } else {
    if (self.showVoiceSettings()) {
      if (tmp) {
        if (!channel.isGuildStageVoice()) {
          let tmp2 = null == regions;
          if (!tmp2) {
            tmp2 = 0 === regions.length;
          }
          let found = null;
          if (null != regions) {
            found = regions.find((id) => id.id === channel.rtcRegion);
          }
          if (null != found) {
            let name = found.name;
          } else {
            const intl = channel(1115).intl;
            name = intl.string(channel(1115).t.JEmsap);
          }
          const items = [];
          const obj = { title: null, description: null, hasIcons: false, children: null };
          const intl2 = channel(1115).intl;
          obj.title = intl2.string(channel(1115).t["Ms8bX+"]);
          const intl3 = channel(1115).intl;
          obj.description = intl3.string(channel(1115).t["dbTs+z"]);
          const obj2 = { label: null, trailing: null, arrow: true, disabled: null, onPress: null };
          const intl4 = channel(1115).intl;
          obj2.label = intl4.string(channel(1115).t["Ms8bX+"]);
          const obj3 = { text: name };
          obj2.trailing = closure_47(channel(5917).TableRow.TrailingText, obj3);
          obj2.disabled = tmp2;
          obj2.onPress = function onPress() {
            return self.pushScreen(constants2.CHANGE_RTC_REGION);
          };
          obj.children = closure_47(channel(5917).TableRow, obj2);
          items.push(closure_47(channel(5999).TableRowGroup, obj, "channel-region-override"));
          return items;
        }
      }
    }
    return null;
  }
};
prototype["showVoiceSettings"] = function showVoiceSettings() {
  const channel = this.props.channel;
  let hasItem = null != channel && null != channel.guild_id;
  if (hasItem) {
    hasItem = set.has(channel.type);
  }
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
};
prototype["renderPermissions"] = function renderPermissions() {
  const self = this;
  if (!this.props.canManageRoles) {
    return null;
  } else {
    let ShieldUserIcon = self;
    let tmp2Result = dependencyMap;
    const obj = { helperText: null, hasIcons: true, children: null };
    const intl = self(1115).intl;
    obj.helperText = intl.string(self(1115).t.UAoMCL);
    if (tmp.type === constants3.GUILD_CATEGORY) {
      const intl3 = ShieldUserIcon(1115).intl;
      let stringResult = intl3.string(ShieldUserIcon(1115).t.PgkvDf);
    } else {
      const intl2 = ShieldUserIcon(1115).intl;
      stringResult = intl2.string(ShieldUserIcon(1115).t.BAZMBn);
    }
    const obj2 = { label: stringResult, arrow: true, icon: null, onPress: null };
    ShieldUserIcon = ShieldUserIcon(9033).ShieldUserIcon;
    tmp2Result = closure_47(ShieldUserIcon, {});
    obj2.icon = tmp2Result;
    obj2.onPress = function onPress() {
      return self.pushScreen(constants2.PERMISSIONS, { origin: constants2.OVERVIEW });
    };
    obj.children = closure_47(self(5917).TableRow, obj2);
    closure_47(self(5999).TableRowGroup, obj);
  }
};
prototype["renderSettingsSection"] = function renderSettingsSection(items) {
  let tmp = null;
  if (items.length > 0) {
    const obj = { hasIcons: true, children: items };
    tmp = closure_1_47(TableRowGroup.TableRowGroup, obj);
  }
  return tmp;
};
prototype["renderCommonSettingsSection"] = function renderCommonSettingsSection() {
  const self = this;
  const props = this.props;
  const channel = props.channel;
  let canManageChannels = props.canManageChannels;
  const items = [];
  if (tmp2) {
    let obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl = channel(1115).intl;
    obj.label = intl.string(channel(1115).t.h850Ss);
    obj.icon = closure_47(channel(9067).BellIcon, {});
    obj.onPress = function onPress() {
      if (channel.isThread()) {
        let result = threadActionSheets.showThreadNotificationsBottomSheet(channel);
      } else {
        result = self.pushScreen(constants2.NOTIFICATIONS);
      }
      return result;
    };
    items.push(closure_47(channel(5917).TableRow, obj, "rowNotifications"));
  }
  if (closure_8(channel.type)) {
    const obj2 = { label: null, arrow: true, icon: null, onPress: null, disabled: null };
    const intl2 = channel(1115).intl;
    obj2.label = intl2.string(channel(1115).t["mp1N/2"]);
    const obj3 = { channelId: channel.id };
    obj2.icon = closure_47(PinImage, obj3);
    obj2.onPress = function onPress() {
      return self.pushScreen(constants2.PINNED_MESSAGES);
    };
    obj2.disabled = self.props.pinDisabled;
    items.push(closure_47(channel(5917).TableRow, obj2, "rowPinnedMessages"));
  }
  if (canManageChannels) {
    canManageChannels = channel.type !== constants3.GUILD_CATEGORY;
  }
  if (canManageChannels) {
    canManageChannels = !channel.isThread();
  }
  if (canManageChannels) {
    const obj4 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = channel(1115).intl;
    obj4.label = intl3.string(channel(1115).t.ngRFjZ);
    obj4.icon = closure_47(channel(4775).LinkIcon, {});
    obj4.onPress = function onPress() {
      return self.pushScreen(constants2.INSTANT_INVITES);
    };
    items.push(closure_47(channel(5917).TableRow, obj4, "rowInstantInvites"));
  }
  return self.renderSettingsSection(items);
};
prototype["renderDefaultForumLayout"] = function renderDefaultForumLayout() {
  const self = this;
  const channel = this.props.channel;
  if (!channel.isForumChannel()) {
    return null;
  } else {
    let GridSquareIcon = self;
    let obj = dependencyMap;
    const obj2 = { description: null, hasIcons: true, children: null };
    const intl = self(1115).intl;
    obj2.description = intl.string(self(1115).t.mOSViT);
    const obj3 = { label: null, trailing: null, arrow: true, icon: null, onPress: null };
    const intl2 = self(1115).intl;
    obj3.label = intl2.string(self(1115).t["kQvoC/"]);
    if (channel.defaultForumLayout === self(2055).ForumLayout.GRID) {
      const intl4 = GridSquareIcon(1115).intl;
      let stringResult = intl4.string(GridSquareIcon(1115).t["8RswJG"]);
    } else {
      const intl3 = GridSquareIcon(1115).intl;
      stringResult = intl3.string(GridSquareIcon(1115).t["4HXEZG"]);
    }
    const obj4 = { text: stringResult };
    obj3.trailing = closure_47(self(5917).TableRow.TrailingText, obj4);
    if (channel.defaultForumLayout === GridSquareIcon(2055).ForumLayout.GRID) {
      GridSquareIcon = GridSquareIcon(16635).GridSquareIcon;
      obj = {};
      let tmpResult = closure_47(GridSquareIcon, obj);
    } else {
      tmpResult = closure_47(GridSquareIcon(6514).ListViewIcon, {});
    }
    obj3.icon = tmpResult;
    obj3.onPress = function onPress() {
      return self.pushScreen(constants2.DEFAULT_FORUM_LAYOUT);
    };
    obj2.children = closure_47(self(5917).TableRow, obj3, "forumDefaultLayout");
    closure_47(self(5999).TableRowGroup, obj2, "default-forum-layout");
  }
};
prototype["renderUncommonSettingsSection"] = function renderUncommonSettingsSection() {
  const self = this;
  const props = this.props;
  let canManageWebhooks = props.canManageWebhooks;
  let tmp = undefined !== canManageWebhooks && canManageWebhooks;
  canManageWebhooks = tmp;
  const result = require("LobbyUtils").canUnlinkLobbyChannel(props.channel);
  require = result;
  if (!tmp) {
    tmp = result;
  }
  const items = [];
  if (tmp) {
    const obj2 = { label: null, arrow: true, icon: null, onPress: null };
    const intl = tmp2(tmp3[30]).intl;
    obj2.label = intl.string(tmp2(tmp3[30]).t.CIsNZw);
    obj2.icon = closure_47(tmp2(tmp3[80]).PuzzlePieceIcon, {});
    obj2.onPress = function onPress() {
      return self.pushScreen(constants2.INTEGRATIONS, { canManageWebhooks, canUnlinkLobby: result });
    };
    items.push(closure_47(tmp2(tmp3[70]).TableRow, obj2, "rowIntegrations"));
  }
  return self.renderSettingsSection(items);
};
prototype["renderThreadManagementActions"] = function renderThreadManagementActions() {
  const props = this.props;
  ({ channel: require, isThreadModerator, isLockedThread, isArchivedThread, isForumPost } = props);
  ({ canManageThread, canUnarchiveThread, hasJoinedThread } = props);
  if (hasJoinedThread) {
    const items = [null, , , , ,];
    let tmp8 = null;
    if (isArchivedThread) {
      tmp8 = null;
      if (canUnarchiveThread) {
        const obj2 = { icon: closure_47(ClockIcon.ClockIcon, {}), label: null, onPress: null };
        const intl2 = util.intl;
        const string2 = intl2.string;
        let cnRubV = util.t;
        if (isForumPost) {
          cnRubV = cnRubV.cnRubV;
          let string2Result = string2(cnRubV);
        } else {
          string2Result = string2(cnRubV.S9E4G7);
        }
        obj2.label = string2Result;
        obj2.onPress = function onPress() {
          return ThreadActionCreatorsDefault.unarchiveThread(require, false);
        };
        closure_47(TableRow.TableRow, obj2);
      }
    }
    items[1] = tmp8;
    let tmp12 = null;
    if (!isArchivedThread) {
      tmp12 = null;
      if (canManageThread) {
        const obj3 = { icon: closure_47(XLargeIcon.XLargeIcon, {}), label: null, onPress: null };
        const intl3 = util.intl;
        const string3 = intl3.string;
        let BTs4Kb = util.t;
        if (isForumPost) {
          BTs4Kb = BTs4Kb.BTs4Kb;
          let string3Result = string3(BTs4Kb);
        } else {
          string3Result = string3(BTs4Kb.wiIevd);
        }
        obj3.label = string3Result;
        obj3.onPress = function onPress() {
          return ThreadActionCreatorsDefault.archiveThread(require, false);
        };
        closure_47(TableRow.TableRow, obj3);
      }
    }
    items[2] = tmp12;
    let tmp16 = null;
    if (isThreadModerator) {
      tmp16 = null;
      if (isLockedThread) {
        const obj4 = { icon: closure_47(LockIcon.LockIcon, {}), label: null, onPress: null };
        const intl4 = util.intl;
        const string4 = intl4.string;
        let t = util.t;
        if (isForumPost) {
          t = t["/OKSxp"];
          let string4Result = string4(t);
        } else {
          string4Result = string4(t["jeyb/W"]);
        }
        obj4.label = string4Result;
        obj4.onPress = function onPress() {
          return ThreadActionCreatorsDefault.unlockThread(require);
        };
        closure_47(TableRow.TableRow, obj4);
      }
    }
    items[3] = tmp16;
    let tmp21 = null;
    if (isThreadModerator) {
      tmp21 = null;
      if (!isLockedThread) {
        const obj5 = { icon: closure_47(LockIcon.LockIcon, {}), label: null, onPress: null };
        const intl5 = util.intl;
        const string5 = intl5.string;
        let t1 = util.t;
        if (isForumPost) {
          t1 = t1["Ur/0Na"];
          let string5Result = string5(t1);
        } else {
          string5Result = string5(t1.HoCqm8);
        }
        obj5.label = string5Result;
        obj5.onPress = function onPress() {
          return ThreadActionCreatorsDefault.lockThread(require);
        };
        closure_47(TableRow.TableRow, obj5);
      }
    }
    const obj6 = { hasIcons: true, children: null };
    items[4] = tmp21;
    const obj7 = { icon: closure_47(LinkIcon.LinkIcon, {}), label: null, onPress: null };
    const intl6 = util.intl;
    obj7.label = intl6.string(util.t.WqhZss);
    obj7.onPress = function onPress() {
      return ChannelActionSheetUtils.copyGuildChannelOrThreadLink(closure_1_0.guild_id, closure_1_0.id);
    };
    items[5] = closure_47(TableRow.TableRow, obj7);
    obj6.children = items;
    return closure_48(tmp4, obj6);
  } else {
    const obj = { icon: closure_47(GroupPlusIcon.GroupPlusIcon, {}), label: null, onPress: null };
    const intl = util.intl;
    const string = intl.string;
    let ihLPiO = util.t;
    if (isForumPost) {
      ihLPiO = ihLPiO.ihLPiO;
      let stringResult = string(ihLPiO);
    } else {
      stringResult = string(ihLPiO["10kukS"]);
    }
    obj.label = stringResult;
    obj.onPress = function onPress() {
      return ThreadActionCreatorsDefault.joinThread(require, "Context Menu");
    };
    closure_47(TableRow.TableRow, obj);
  }
};
prototype["renderDeleteButton"] = function renderDeleteButton() {
  const props = this.props;
  const channel = props.channel;
  ({ canManageChannels, isForumPost } = props);
  ({ isThreadModerator, hasJoinedThread } = props);
  if (channel.isThread()) {
    canManageChannels = isThreadModerator;
  }
  let tmp = null;
  if (canManageChannels) {
    if (channel.type === constants3.GUILD_CATEGORY) {
      const intl3 = channel(1115).intl;
      let stringResult = intl3.string(channel(1115).t.ifbXnL);
      let tmp8 = channel;
    } else if (isForumPost) {
      const intl2 = channel(1115).intl;
      stringResult = intl2.string(channel(1115).t.nEOg1N);
      tmp8 = channel;
    } else {
      const intl = channel(1115).intl;
      const string = intl.string;
      const t = channel(1115).t;
      if (isThreadResult) {
        stringResult = string(t.H7vTe2);
        tmp8 = tmp4;
      } else {
        stringResult = string(t["8D8Rsb"]);
        tmp8 = tmp4;
      }
      isThreadResult = channel.isThread();
    }
    if (!hasJoinedThread) {
      const obj2 = { hasIcons: true, children: null };
      const items = [null];
      const obj3 = {
        variant: "danger",
        icon: closure_47(tmp8(4790).TrashIcon, { color: "text-feedback-critical" }),
        label: stringResult,
        onPress: this.handleDeleteChannel,
      };
      items[1] = closure_47(tmp8(5917).TableRow, obj3);
      obj2.children = items;
      tmp = closure_48(tmp14, obj2);
    } else {
      const obj = {
        variant: "danger",
        icon: closure_47(tmp8(4773).UserMinusIcon, { color: "text-feedback-critical" }),
        label: null,
        onPress: null,
      };
      const intl4 = tmp8(1115).intl;
      const string2 = intl4.string;
      let t1 = tmp8(1115).t;
      if (isForumPost) {
        t1 = t1["2LsZdT"];
        let string2Result = string2(t1);
      } else {
        string2Result = string2(t1["fa/84m"]);
      }
      obj.label = string2Result;
      obj.onPress = function onPress() {
        return ThreadActionCreatorsDefault.leaveThread(channel, "Context Menu");
      };
      closure_47(tmp8(5917).TableRow, obj);
    }
  }
  return tmp;
};
prototype["renderForumTags"] = function renderForumTags() {
  const self = this;
  const tmp = closure_52(this.context);
  ({ channel, canManageChannels } = this.props);
  if (channel.isForumLikeChannel()) {
    const availableTags = channel.availableTags;
    if (availableTags != null) {
      const everyResult = availableTags.every((moderated) => moderated.moderated);
    }
    let tmp3 = canManageChannels;
    if (canManageChannels) {
      tmp3 = channel.availableTags.length < MAX_FORUM_TAGS;
    }
    const error = self.getError("available_tags");
    const obj = { spacing: self(576).space.PX_12, children: null };
    const obj2 = { title: null, description: null, hasIcons: false, children: null };
    const intl = canManageChannels(1115).intl;
    obj2.title = intl.string(canManageChannels(1115).t["P/y+sj"]);
    let stringResult;
    if (channel.availableTags.length <= 0) {
      const intl2 = canManageChannels(1115).intl;
      stringResult = intl2.string(canManageChannels(1115).t["3v8kZH"]);
    }
    obj2.description = stringResult;
    const obj3 = { style: tmp.tagsWrapper, children: null };
    let tmp6Result = null;
    if (channel.availableTags.length > 0) {
      const availableTags1 = channel.availableTags;
      const items = [
        availableTags1.map((tag) =>
          closure_2_47(
            AvailableForumTagDefault,
            { tag, onPress: self.handlePressTag, disabled: !canManageChannels },
            tag.id,
          ),
        ),
      ];
      let tmp10Result = null;
      if (tmp3) {
        const obj4 = { style: tmp.addTagIconButtonWrapper, children: null };
        const obj5 = { icon: null, size: "sm", onPress: null, accessibilityLabel: null };
        const obj6 = { size: "sm", color: self(576).colors.WHITE };
        obj5.icon = closure_47(canManageChannels(8332).PlusSmallIcon, obj6);
        obj5.onPress = function onPress() {
          return self.handlePressTag();
        };
        const intl3 = canManageChannels(1115).intl;
        obj5.accessibilityLabel = intl3.string(canManageChannels(1115).t["/jubeD"]);
        obj4.children = closure_47(canManageChannels(7363).IconButton, obj5);
        tmp10Result = closure_47(View, obj4);
      }
      const obj7 = { children: null };
      items[1] = tmp10Result;
      obj7.children = items;
      tmp6Result = closure_48(closure_49, obj7);
    }
    obj3.children = tmp6Result;
    obj2.children = closure_47(View, obj3);
    const items1 = [closure_47(canManageChannels(5999).TableRowGroup, obj2), , ,];
    let tmp10Result3 = null;
    if (channel.availableTags.length <= 0) {
      const obj8 = {
        disabled: !canManageChannels,
        onPress() {
          return self.handlePressTag();
        },
        style: tmp.createTagButton,
        accessibilityRole: "button",
        children: null,
      };
      const obj9 = { variant: "text-sm/semibold", color: "text-brand", style: tmp.createTagButtonText, children: null };
      const intl4 = canManageChannels(1115).intl;
      obj9.children = intl4.string(canManageChannels(1115).t.F4is7L);
      obj8.children = closure_47(canManageChannels(4832).Text, obj9);
      tmp10Result3 = closure_47(canManageChannels(5435).PressableOpacity, obj8);
    }
    items1[1] = tmp10Result3;
    let tmp10Result4 = null != error && error.length > 0;
    if (tmp10Result4) {
      const obj10 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
      tmp10Result4 = closure_47(canManageChannels(4832).Text, obj10);
    }
    items1[2] = tmp10Result4;
    let tmp18 = !canManageChannels;
    if (canManageChannels) {
      tmp18 = everyResult;
    }
    const obj11 = { hasIcons: false, children: null };
    const obj12 = { disabled: tmp18, label: null, value: null, onValueChange: null };
    const intl5 = canManageChannels(1115).intl;
    obj12.label = intl5.string(canManageChannels(1115).t.yX24uI);
    obj12.value = channel.hasFlag(constants10.REQUIRE_TAG);
    obj12.onValueChange = self.handleToggleRequireTag;
    obj11.children = closure_47(canManageChannels(6621).TableSwitchRow, obj12);
    items1[3] = closure_47(canManageChannels(5999).TableRowGroup, obj11);
    obj.children = items1;
    return closure_48(canManageChannels(5279).Stack, obj);
  } else {
    return null;
  }
};
prototype["renderShowMediaDownloadOptions"] = function renderShowMediaDownloadOptions() {
  const props = this.props;
  const channel = props.channel;
  let tmp = null;
  if (channel.isMediaChannel()) {
    const obj = { hasIcons: false, children: null };
    const obj2 = { disabled: !props.canManageChannels, label: null, subLabel: null, value: null, onValueChange: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t.u8LZOt);
    const intl2 = util.intl;
    obj2.subLabel = intl2.string(util.t.J4wCc7);
    obj2.value = !channel.hasFlag(constants10.HIDE_MEDIA_DOWNLOAD_OPTIONS);
    obj2.onValueChange = this.handleToggleShowMediaDownloadOptions;
    obj.children = closure_1_47(TableSwitchRow.TableSwitchRow, obj2);
    tmp = closure_1_47(TableRowGroup.TableRowGroup, obj);
  }
  return tmp;
};
prototype["renderCategory"] = function renderCategory() {
  const self = this;
  const props = this.props;
  ({ category, canManageParent } = props);
  if (props.hasCategories) {
    if (props.channel.type !== constants3.GUILD_CATEGORY) {
      if (null == category) {
        const intl = self(1115).intl;
        let stringResult = intl.string(self(1115).t.GSfOoo);
        let tmp7 = self;
      } else {
        stringResult = self(4989).computeChannelName(category, UserStore, RelationshipStore);
        tmp7 = self;
        const obj = self(4989);
      }
      const obj2 = {
        icon: closure_47(tmp7(15788).FolderPlusIcon, {}),
        label: null,
        trailing: null,
        arrow: null,
        onPress: null,
      };
      const intl2 = tmp7(1115).intl;
      obj2.label = intl2.string(tmp7(1115).t.vHCZwr);
      const obj3 = { text: stringResult };
      obj2.trailing = closure_47(tmp7(5917).TableRow.TrailingText, obj3);
      obj2.arrow = canManageParent;
      let fn;
      if (canManageParent) {
        fn = () => self.pushScreen(constants2.CHANGE_CATEGORY);
      }
      const obj4 = { hasIcons: true, children: null };
      obj2.onPress = fn;
      obj4.children = closure_47(tmp7(5917).TableRow, obj2);
      return closure_47(tmp7(5999).TableRowGroup, obj4);
    }
  }
  return null;
};
prototype["renderThreadSettings"] = function renderThreadSettings() {
  const obj = { children: null };
  const obj2 = { spacing: nativeDefault.space.PX_24, style: closure_52(this.context).stackPadding, children: null };
  const items = [
    this.renderChannelInfo(),
    this.renderCommonSettingsSection(),
    this.renderThreadManagementActions(),
    this.renderThreadSpoiler(),
    this.renderSlowmode(),
    this.renderAutoArchiveDuration(),
    this.renderInvitable(),
    this.renderDeleteButton(),
  ];
  obj2.children = items;
  obj.children = __V(Stack_Stack.Stack, obj2);
  return closure_1_47(Form.Form, obj);
};
prototype["renderChannelSettings"] = function renderChannelSettings() {
  const obj = { children: null };
  const obj2 = { spacing: nativeDefault.space.PX_24, style: closure_52(this.context).stackPadding, children: null };
  const items = [
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
  obj2.children = items;
  obj.children = __V(Stack_Stack.Stack, obj2);
  return closure_1_47(Form.Form, obj);
};
prototype["render"] = function render() {
  const self = this;
  if (this.props.isThread) {
    let renderThreadSettingsResult = self.renderThreadSettings();
  } else {
    renderThreadSettingsResult = self.renderChannelSettings();
  }
  const tmp = closure_52(this.context);
  return closure_1_47(View, { style: closure_52(this.context).screenContainer, children: renderThreadSettingsResult });
};
ChannelSettingsOverview.contextType = fn(4540).ThemeContext;
size = fn(2);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsOverview.tsx");

export default function ConnectedChannelSettingsOverview(arg0) {
  ({ channelId: require, autoFocusElement } = arg0);
  let navigation;
  navigation = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(require));
  let obj2 = require("initialize");
  const items1 = [ChannelSettingsStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => channel.getChannel());
  let obj4 = require("initialize");
  const isThreadModerator = require("ThreadHooks").useIsThreadModerator(stateFromStores);
  const obj5 = require("ThreadHooks");
  const items2 = [JoinedThreadsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => {
    let isMutedResult;
    if (null != stateFromStores) {
      isMutedResult = JoinedThreadsStore.isMuted(stateFromStores.id);
    }
    const obj = { isMutedThread: isMutedResult, hasJoinedThread: null };
    let hasJoinedResult;
    if (null != stateFromStores) {
      hasJoinedResult = JoinedThreadsStore.hasJoined(stateFromStores.id);
    }
    obj.hasJoinedThread = hasJoinedResult;
    return obj;
  });
  ({ isMutedThread, hasJoinedThread } = stateFromStoresObject);
  const obj6 = require("initialize");
  const canManageThread = require("ThreadHooks").useCanManageThread(stateFromStores);
  const obj7 = require("ThreadHooks");
  const shouldHideChannelContent = require("AgeGateUtils").useShouldHideChannelContent(stateFromStores);
  const obj8 = require("AgeGateUtils");
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
  const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(
    items3,
    () => {
      const props = ChannelSettingsStore.getProps();
      ({ submitting, errors } = props);
      if (null == stateFromStores) {
        const obj3 = { isThread: false, submitting, errors };
        return obj3;
      } else {
        const guild = GuildStore.getGuild(stateFromStores.getGuildId());
        channel = ChannelStore.getChannel(stateFromStores.parent_id);
        const currentUser = UserStore.getCurrentUser();
        const hasItem = set3.has(stateFromStores.type);
        const obj4 = {
          isThread: hasItem,
          guild,
          category: channel,
          hasCategories: null,
          pinDisabled: null,
          canManageChannels: null,
          isChannelOwner: null,
          canManageParent: null,
          canManageRoles: null,
          canSendMessages: null,
          canManageWebhooks: null,
          canUnarchiveThread: null,
          regions: null,
          submitting: null,
          errors: null,
          isNSFWDisabled: null,
        };
        const regions = RegionStore.getRegions(stateFromStores.getGuildId());
        obj4.hasCategories = GuildChannelStore.hasCategories(stateFromStores.guild_id);
        obj4.pinDisabled = shouldHideChannelContent;
        obj4.canManageChannels = PermissionStore.can(constants7.MANAGE_CHANNELS, stateFromStores);
        obj4.isChannelOwner = null != currentUser && stateFromStores.ownerId === currentUser.id;
        if (null != channel) {
          let canResult = PermissionStore.can(constants7.MANAGE_CHANNELS, channel);
        } else {
          canResult = PermissionStore.can(constants7.MANAGE_CHANNELS, guild);
        }
        obj4.canManageParent = canResult;
        obj4.canManageRoles = PermissionStore.can(constants7.MANAGE_ROLES, stateFromStores);
        obj4.canSendMessages = PermissionStore.can(constants7.SEND_MESSAGES, stateFromStores);
        obj4.canManageWebhooks =
          set7.has(stateFromStores.type) && PermissionStore.can(constants7.MANAGE_WEBHOOKS, stateFromStores);
        const tmp4 = set7.has(stateFromStores.type) && PermissionStore.can(constants7.MANAGE_WEBHOOKS, stateFromStores);
        obj4.canUnarchiveThread = ThreadHooks.canUnarchiveThread(stateFromStores);
        obj4.regions = regions;
        obj4.submitting = submitting;
        obj4.errors = errors;
        obj4.isNSFWDisabled = isGuildNSFW(guild) || null != stateFromStores.linkedLobby;
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
    let obj3 = {};
    const merged = Object.assign(stateFromStoresObject1);
    obj3.channel = stateFromStores1;
    obj3.navigation = navigation;
    obj3.isThreadModerator = isThreadModerator;
    let isLockedThreadResult;
    if (stateFromStores != null) {
      isLockedThreadResult = stateFromStores.isLockedThread();
    }
    obj3.isLockedThread = isLockedThreadResult;
    let isArchivedThreadResult;
    if (stateFromStores != null) {
      isArchivedThreadResult = stateFromStores.isArchivedThread();
    }
    obj3.isArchivedThread = isArchivedThreadResult;
    obj3.canManageThread = canManageThread;
    obj3.canUnarchiveThread = stateFromStoresObject1.canUnarchiveThread;
    obj3.isMutedThread = isMutedThread;
    obj3.hasJoinedThread = hasJoinedThread;
    let isForumPostResult;
    if (stateFromStores != null) {
      isForumPostResult = stateFromStores.isForumPost();
    }
    obj3.isForumPost = isForumPostResult;
    obj3.channelNameRef = ref;
    tmp11Result = closure_47(ChannelSettingsOverview, obj3);
  }
  return tmp11Result;
}
export { PinImage };
