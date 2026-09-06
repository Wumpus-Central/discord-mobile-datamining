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
import Text_Text from "../../design/components/Text/native/Text.tsx";
import ChannelUtils from "../../utils/ChannelUtils.tsx";
import useChannelName from "../../modules/channel/useChannelName.tsx";
import AppAnalyticsUtilsDefault from "../../modules/app_analytics/AppAnalyticsUtils.tsx";
import Stack_Stack from "../../design/components/Stack/native/Stack.native.tsx";
import Card from "../../design/components/Card/native/Card.native.tsx";
import TableRadioGroup from "../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRowGroup from "../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableRadioRow from "../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableSwitchRow from "../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import ThreadHooks from "../../modules/threads/ThreadHooks.tsx";
import sanitizeThreadNameDefault from "../../modules/threads/sanitizeThreadName.tsx";
import ThreadActionCreatorsDefault from "../../modules/threads/ThreadActionCreators.tsx";
import HeaderShared from "../../modules/main_tabs_v2/native/shared_components/HeaderShared.tsx";
import Form from "../../design/void/Form/native/index.tsx";
import ChannelSettingsActionCreatorsDefault from "../../actions/ChannelSettingsActionCreators.tsx";
import ThreadAutoArchive from "../../modules/threads/ThreadAutoArchive.tsx";
import _modDef9566 from "../../../_runtime/metro/09566__.js";
import sanitizeChannelNameDefault from "../../modules/channel/sanitizeChannelName.tsx";
import AppChannelApplicationSelectorDefault from "../../modules/app_channels/native/AppChannelApplicationSelector.tsx";
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
      obj = { style: null, children: null };
      obj.style = tmp.outer;
      obj1 = { style: null };
      obj1.style = tmp.badge;
      obj.children = jsx(View, obj1);
      tmp4 = jsx(View, obj);
    }
    obj2 = { style: global.style, children: null };
    items1 = [,];
    items1[0] = jsx(tmp2(tmp3[25]).PinIcon, {});
    items1[1] = tmp4;
    obj2.children = items1;
    return jsxs(View, obj2);
  }
}
const View = fn(17).View;
const ChannelRecord = fn(1961);
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
const isGuildNSFW = fn(1975).isGuildNSFW;
let closure_25 = fn(16811).ChannelSettingsAutoFocusElement;
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
const ChannelConstants = fn(1964);
({
  ChannelFlags: closure_42,
  MAX_CHANNEL_TOPIC_LENGTH: closure_43,
  MAX_FORUM_CHANNEL_TOPIC_LENGTH: closure_44,
} = ChannelConstants);
const MAX_FORUM_TAGS = fn(7273).MAX_FORUM_TAGS;
let closure_46 = fn(1113).DEFAULT_AUTO_ARCHIVE_DURATION;
const jsxProd = fn(21);
({ jsx: closure_47, jsxs: closure_48, Fragment: closure_49 } = jsxProd);
fn(4560);
let createStyles = { outer: null, badge: null };
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
createStyles.outer = size;
const size1 = {
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  width: 8,
  height: 8,
  borderRadius: nativeDefault.radii.xs,
};
createStyles.badge = size1;
let closure_50 = createStyles.createStyles(createStyles);
fn(4560);
createStyles = {
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
let obj1 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  paddingTop: nativeDefault.space.PX_16,
};
createStyles.stackPadding = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
createStyles.alertText = { marginTop: 16 };
createStyles.tagsWrapper = { display: "flex", flexDirection: "row", flexWrap: "wrap" };
let obj2 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
createStyles.addTagIconButtonWrapper = { justifyContent: "center", margin: nativeDefault.space.PX_4 };
createStyles = { backgroundColor: "transparent", paddingHorizontal: 0, marginTop: nativeDefault.space.PX_4 };
createStyles.createTagButton = createStyles;
createStyles.createTagButtonText = { fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, fontSize: 14 };
let closure_52 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class ChannelSettingsOverview extends PureComponent {
  constructor(arg0) {
    tmp = new tmp(global, tmp4, tmp3, tmp2);
    closure_0 = tmp;
    obj = closure_1(closure_2[27]);
    tmp._cooldown = obj.findIndex(SLOWMODE_VALUES, (arg0) => arg0 >= closure_0.props.channel.rateLimitPerUser);
    tmp.state = { hasChanges: false };
    tmp.pushScreen = function pushScreen() {
      const items = [...arguments];
      const navigation = closure_0.props.navigation;
      const items1 = [...items];
      navigation.push.apply(items1);
      if (items[0] !== constants2.PERMISSIONS) {
        const obj = { settings_type: "channel", origin_pane: constants8.CHANNEL_SETTINGS, destination_pane: items[0] };
        obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
      }
    };
    tmp.handleSave = function handleSave() {
      let obj = channel;
      if (channel.state.hasChanges) {
        channel = obj.props.channel;
        obj = {
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
        obj.autoArchiveDuration = autoArchiveDuration;
        const threadMetadata2 = channel.threadMetadata;
        let locked;
        if (threadMetadata2 != null) {
          locked = threadMetadata2.locked;
        }
        obj.locked = locked;
        const threadMetadata3 = channel.threadMetadata;
        let invitable;
        if (threadMetadata3 != null) {
          invitable = threadMetadata3.invitable;
        }
        obj.invitable = invitable;
        obj.flags = channel.flags;
        obj.defaultSortOrder = channel.getDefaultSortOrder();
        obj.defaultForumLayout = channel.defaultForumLayout;
        obj.defaultTagSetting = channel.getDefaultTagSetting();
        ({ iconEmoji: obj3.iconEmoji, themeColor: obj3.themeColor, application_id: obj3.applicationId } = channel);
        ChannelSettingsActionCreatorsDefault.saveChannel(channel.id, obj).then((status) => {
          if (200 === status.status) {
            let navigation = ToastActionCreatorsDefault.open;
            let goBackResult = { key: "THREAD_SETTINGS_UPDATED", icon: _modDef9566, content: null };
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
        const saveChannelResult = ChannelSettingsActionCreatorsDefault.saveChannel(channel.id, obj);
      }
    };
    tmp.handleChangeName = function handleChangeName(arg0) {
      const obj = { name: sanitizeChannelNameDefault(arg0, closure_0.props.channel.type) };
      obj.updateChannel(obj);
      closure_0.setState({ hasChanges: true });
    };
    tmp.handleBlurName = function handleBlurName() {
      let obj = closure_0;
      const channel = closure_0.props.channel;
      if (channel.isThread()) {
        const tmp3 = sanitizeThreadNameDefault(channel.name, true);
        if (tmp3 !== channel.name) {
          obj = { name: tmp3 };
          tmp(8625).updateChannel(obj);
          obj.setState({ hasChanges: true });
          const tmpResult = tmp(8625);
        }
        tmp = importDefault;
      }
    };
    tmp.handleChangeTopic = function handleChangeTopic(emojiName) {
      const obj = { topic: UnicodeEmojisDefault.translateInlineEmojiToSurrogates(emojiName) };
      obj.updateChannel(obj);
      closure_0.setState({ hasChanges: true });
    };
    tmp.handleBitRateChange = function handleBitRateChange(arg0) {
      const obj = { bitrate: Math.round(arg0) };
      obj.updateChannel(obj);
      closure_0.setState({ hasChanges: true });
    };
    tmp.handleVideoQualityModeChange = function handleVideoQualityModeChange(videoQualityMode) {
      const obj = { videoQualityMode };
      obj.updateChannel(obj);
      closure_0.setState({ hasChanges: true });
    };
    tmp.handleNsfwChange = function handleNsfwChange(nsfw) {
      const obj = { nsfw };
      obj.updateChannel(obj);
      closure_0.setState({ hasChanges: true });
    };
    tmp.handleThreadSpoilerChange = function handleThreadSpoilerChange(arg0) {
      const setFlagResult = FlagUtils.setFlag(closure_0.props.channel.flags, constants10.IS_SPOILER_CHANNEL, arg0);
      ChannelSettingsActionCreatorsDefault.updateChannel({ flags: setFlagResult });
      closure_0.setState({ hasChanges: true });
    };
    tmp.handleSlowmodeChange = function handleSlowmodeChange(arg0) {
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
    tmp.handleDefaultAutoArchiveDurationChange = function handleDefaultAutoArchiveDurationChange(
      defaultAutoArchiveDuration,
    ) {
      const obj = { defaultAutoArchiveDuration };
      obj.updateChannel(obj);
      closure_0.setState({ hasChanges: true });
    };
    tmp.handleAutoArchiveDurationChange = function handleAutoArchiveDurationChange(autoArchiveDuration) {
      const obj = { autoArchiveDuration };
      obj.updateChannel(obj);
      closure_0.setState({ hasChanges: true });
    };
    tmp.handleDefaultSortOrderChange = function handleDefaultSortOrderChange(defaultSortOrder) {
      const obj = { defaultSortOrder };
      obj.updateChannel(obj);
      closure_0.setState({ hasChanges: true });
    };
    tmp.handleDefaultTagSettingChange = function handleDefaultTagSettingChange(defaultTagSetting) {
      const obj = { defaultTagSetting };
      obj.updateChannel(obj);
      closure_0.setState({ hasChanges: true });
    };
    tmp.handleInvitableChange = function handleInvitableChange(invitable) {
      const obj = { invitable };
      obj.updateChannel(obj);
      closure_0.setState({ hasChanges: true });
    };
    tmp.handleAnnouncementChange = function handleAnnouncementChange(arg0) {
      const obj = { type: arg0 ? tmp.GUILD_TEXT : tmp.GUILD_ANNOUNCEMENT };
      obj.updateChannel(obj);
      closure_0.setState({ hasChanges: true });
    };
    tmp.handleActiveChannelsRemovedChange = function handleActiveChannelsRemovedChange(arg0) {
      const setFlagResult = FlagUtils.setFlag(
        closure_0.props.channel.flags,
        constants10.ACTIVE_CHANNELS_REMOVED,
        !arg0,
      );
      ChannelSettingsActionCreatorsDefault.updateChannel({ flags: setFlagResult });
      closure_0.setState({ hasChanges: true });
    };
    tmp.handleUserLimitChange = function handleUserLimitChange(arg0) {
      const obj = { userLimit: Math.round(arg0) };
      obj.updateChannel(obj);
      closure_0.setState({ hasChanges: true });
    };
    closure_129_0 = tmp;
    tmp.handleDeleteChannel = closure_3(async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
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
              const obj1 = {
                value: tmp2(9740).isDefaultChannelThresholdMetAfterDelete(channel.getGuildId(), channel.id),
                done: false,
              };
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_3 = value;
            if (null != guild2) {
              const features = guild2.features;
              if (features.has(constants.COMMUNITY)) {
                if (guild2.rulesChannelId === closure_128_1.id) {
                  if (guild2.rulesChannelId === closure_128_1.id) {
                    const intl2 = tmp2(1114).intl;
                    let stringResult = intl2.string(tmp2(1114).t.yjrZPl);
                  } else {
                    const intl = tmp2(1114).intl;
                    stringResult = intl.string(tmp2(1114).t["1B1/NB"]);
                  }
                  closure_128_5 = stringResult;
                  obj = tmp5(4905);
                  const obj3 = { title: null, confirmText: null, children: null };
                  const intl3 = tmp2(1114).intl;
                  obj3.title = intl3.string(tmp2(1114).t["TY/V+H"]);
                  const intl4 = tmp2(1114).intl;
                  obj3.confirmText = intl4.string(tmp2(1114).t.BddRzS);
                  const obj4 = { children: null };
                  const obj5 = { style: closure_128_0.alertText, variant: "text-md/medium", children: closure_128_5 };
                  const items = [closure_1_47(tmp2(4556).Text, obj5)];
                  let obj6 = { style: closure_128_0.alertText, variant: "text-md/medium", children: null };
                  const intl5 = tmp2(1114).intl;
                  const obj7 = {
                    onClick() {
                      closure_1(user[43]).close();
                      const obj = closure_1(user[43]);
                      closure_1(user[33]).close();
                      const obj2 = closure_1(user[33]);
                      closure_1(user[45]).open(user.id, constants2.COMMUNITY);
                    },
                  };
                  obj6.children = intl5.format(tmp2(1114).t.LAJbDm, obj7);
                  items[1] = closure_1_47(tmp2(4556).Text, obj6);
                  obj4.children = items;
                  obj3.children = closure_1_48(closure_1_49, obj4);
                  obj.show(obj3);
                  c3 = 3;
                }
              }
            }
            if (null != guild2) {
              if (!closure_128_3) {
                obj6 = tmp5(4905);
                const obj8 = { title: null, confirmText: null, children: null };
                const intl6 = tmp2(1114).intl;
                obj8.title = intl6.string(tmp2(1114).t["TY/V+H"]);
                const intl7 = tmp2(1114).intl;
                obj8.confirmText = intl7.string(tmp2(1114).t.BddRzS);
                const obj9 = { children: null };
                const obj10 = { style: closure_128_0.alertText, variant: "text-md/medium", children: null };
                const intl8 = tmp2(1114).intl;
                obj10.children = intl8.string(tmp2(1114).t.iWlB6h);
                const items1 = [closure_1_47(tmp2(4556).Text, obj10)];
                const obj11 = { style: closure_128_0.alertText, variant: "text-md/medium", children: null };
                const intl9 = tmp2(1114).intl;
                let obj12 = {
                  onClick() {
                    closure_1(user[43]).close();
                    const obj = closure_1(user[43]);
                    closure_1(user[33]).close();
                    const obj2 = closure_1(user[33]);
                    closure_1(user[45]).open(user.id, constants2.ONBOARDING);
                  },
                };
                obj11.children = intl9.format(tmp2(1114).t.ajiBwB, obj12);
                items1[1] = closure_1_47(tmp2(4556).Text, obj11);
                obj9.children = items1;
                obj8.children = closure_1_48(closure_1_49, obj9);
                obj6.show(obj8);
              }
            }
            obj12 = tmp2(4713);
            closure_128_4 = obj12.computeChannelName(closure_128_1, UserStore, RelationshipStore, true);
            let obj13 = tmp5(4905);
            if (closure_129_0.props.isForumPost) {
              const intl11 = tmp2(1114).intl;
              let stringResult1 = intl11.string(tmp2(1114).t.nEOg1N);
            } else {
              const intl10 = tmp2(1114).intl;
              const string = intl10.string;
              const t = tmp2(1114).t;
              if (closure_129_0.props.isThread) {
                stringResult1 = string(t.H7vTe2);
              } else {
                stringResult1 = string(t["8D8Rsb"]);
              }
            }
            obj13 = {
              title: stringResult1,
              body: null,
              cancelText: null,
              confirmText: null,
              onConfirm: null,
              confirmColor: null,
            };
            const intl12 = tmp2(1114).intl;
            const obj14 = { channelName: closure_128_4 };
            obj13.body = intl12.format(tmp2(1114).t.a6Gz9J, obj14);
            const intl13 = tmp2(1114).intl;
            obj13.cancelText = intl13.string(tmp2(1114).t.gm1Vej);
            const intl14 = tmp2(1114).intl;
            obj13.confirmText = intl14.string(tmp2(1114).t.p89ACt);
            obj13.onConfirm = closure_129_0.handleConfirmDeleteChannel;
            obj13.confirmColor = tmp5(4994).Colors.RED;
            obj13.show(obj13);
          }
        } catch (tmp129) {
          c3 = tmp;
          throw tmp129;
        }
      }
    });
    closure_130_0 = tmp;
    tmp.handleConfirmDeleteChannel = closure_3(async () => {
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
        throw arg1;
      } else if (arg0 !== 2) {
        const rootNavigationRef = content(tmp3[48]).getRootNavigationRef();
        let isReadyResult;
        if (rootNavigationRef != null) {
          isReadyResult = obj1.isReady();
        }
        if (isReadyResult) {
          rootNavigationRef.goBack();
        }
        c4 = 0;
        content(tmp3[48]);
        obj1 = rootNavigationRef;
      }
      return arg1;
    });
    tmp.handlePressTag = function handlePressTag(tag) {
      closure_0.pushScreen(constants2.EDIT_FORUM_TAG, { tag });
    };
    tmp.handleToggleRequireTag = function handleToggleRequireTag() {
      let obj = closure_0;
      if (closure_0.props.canManageChannels) {
        const channel = obj.props.channel;
        const hasFlagResult = channel.hasFlag(constants10.REQUIRE_TAG);
        const setFlagResult = FlagUtils.setFlag(obj.props.channel.flags, constants10.REQUIRE_TAG, !hasFlagResult);
        obj = { flags: setFlagResult };
        ChannelSettingsActionCreatorsDefault.updateChannel(obj);
        obj.setState({ hasChanges: true });
      }
    };
    tmp.handleToggleShowMediaDownloadOptions = function handleToggleShowMediaDownloadOptions() {
      let obj = closure_0;
      if (closure_0.props.canManageChannels) {
        const channel = obj.props.channel;
        const hasFlagResult = channel.hasFlag(constants10.HIDE_MEDIA_DOWNLOAD_OPTIONS);
        const setFlagResult = FlagUtils.setFlag(
          obj.props.channel.flags,
          constants10.HIDE_MEDIA_DOWNLOAD_OPTIONS,
          !hasFlagResult,
        );
        obj = { flags: setFlagResult };
        ChannelSettingsActionCreatorsDefault.updateChannel(obj);
        obj.setState({ hasChanges: true });
      }
    };
    tmp.getError = function getError(arg0) {
      const errors = closure_0.props.errors;
      let tmp;
      if (errors != null) {
        tmp = errors[arg0];
      }
      return tmp;
    };
    tmp.handleApplicationChange = function handleApplicationChange(applicationId) {
      const obj = { applicationId };
      obj.updateChannel(obj);
      closure_0.setState({ hasChanges: true });
    };
    tmp.state.hasChanges = closure_16.hasChanges();
    return tmp;
  }
}
const prototype = ChannelSettingsOverview.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  this.updateNavigation(undefined, this.state);
  if (tmp2) {
    let obj = RegionActionCreatorsDefault;
    const regions = obj.fetchRegions(self.props.guild.id);
  }
  obj = { settings_type: "channel", destination_pane: constants8.CHANNEL_SETTINGS };
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
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
    const intl3 = hasChanges(1114).intl;
    const string = intl3.string;
    let BsJrhj = hasChanges(1114).t;
    if (props.isForumPost) {
      BsJrhj = BsJrhj.BsJrhj;
      let stringResult = string(BsJrhj);
    } else {
      stringResult = string(BsJrhj.d4n5Q1);
    }
  } else {
    if (type === constants3.GUILD_CATEGORY) {
      const intl2 = hasChanges(1114).intl;
      let stringResult1 = intl2.string(hasChanges(1114).t["/uELTj"]);
      let tmp3 = hasChanges;
    } else {
      tmp3 = hasChanges;
      let intl = hasChanges(1114).intl;
      stringResult1 = intl.string(hasChanges(1114).t.XPDhcc);
    }
    if (submitting) {
      let fn = tmp3(5624).HeaderSubmittingIndicator;
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
  let obj = ChannelSettingsUtils;
  const isChannelNameSettingEditable = obj.getIsChannelNameSettingEditable({
    canManageThread,
    canManageChannels,
    canSendMessages,
    isForumPost,
    isThread,
    isChannelOwner,
  });
  if (channel.isForumPost()) {
    const intl4 = tmp3(1114).intl;
    let stringResult = intl4.string(tmp3(1114).t.uyVrTN);
  } else if (isThread) {
    const intl3 = tmp3(1114).intl;
    stringResult = intl3.string(tmp3(1114).t.j3XWjD);
  } else if (channel.type === constants3.GUILD_CATEGORY) {
    const intl2 = tmp3(1114).intl;
    stringResult = intl2.string(tmp3(1114).t.OCAkGP);
  } else {
    const intl = tmp3(1114).intl;
    stringResult = intl.string(tmp3(1114).t.PVbHDl);
  }
  obj = {
    ref: self.props.channelNameRef,
    label: stringResult,
    value: null,
    onChange: null,
    onBlur: null,
    isDisabled: null,
    maxLength: null,
    errorMessage: null,
    enableAndroidSanitizedInputWorkaround: true,
  };
  const TextInput = tmp3(6606).TextInput;
  obj.value = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
  ({ handleChangeName: obj2.onChange, handleBlurName: obj2.onBlur } = self);
  obj.isDisabled = !isChannelNameSettingEditable;
  obj.maxLength = maxLength;
  obj.errorMessage = self.getError("name");
  if (!hasItem) {
    obj = { children: null };
    const items = [tmp9, self.renderApplication(), undefined];
    obj.children = items;
    return __V(__h, obj);
  } else {
    const intl5 = tmp3(1114).intl;
    const string = intl5.string;
    const t = tmp3(1114).t;
    if (isForumLikeChannelResult) {
      let stringResult1 = string(t.yR6HwZ);
    } else {
      stringResult1 = string(t.X8jMDh);
    }
    const obj1 = {
      label: stringResult1,
      value: null,
      onChange: null,
      isDisabled: null,
      autoCorrect: true,
      maxLength: null,
      errorMessage: null,
    };
    isForumLikeChannelResult = channel.isForumLikeChannel();
    obj1.value = UnicodeEmojisDefault.translateSurrogatesToInlineEmoji(channel.topic);
    obj1.onChange = self.handleChangeTopic;
    obj1.isDisabled = !canManageChannels;
    obj1.maxLength = channel.isForumLikeChannel() ? closure_1_44 : closure_1_43;
    obj1.errorMessage = self.getError("topic");
    closure_1_47(tmp3(7085).TextArea, obj1);
  }
};
prototype["renderNsfwConfig"] = function renderNsfwConfig() {
  const props = this.props;
  const channel = props.channel;
  ({ canManageChannels, isNSFWDisabled } = props);
  let tmp = null;
  if (set5.has(channel.type)) {
    tmp = null;
    if (canManageChannels) {
      let obj = PlatformUtils;
      tmp = null;
      if (!obj.isIOS()) {
        obj = { helperText: null, hasIcons: false, children: null };
        const intl = tmp2(1114).intl;
        obj.helperText = intl.string(tmp2(1114).t["9eUgwR"]);
        obj = { label: null, value: null, onValueChange: null, disabled: null, subLabel: null };
        const intl2 = tmp2(1114).intl;
        obj.label = intl2.string(tmp2(1114).t.Es25Yf);
        obj.value = tmp2(4771).isChannelOrGuildNSFW(channel);
        obj.onValueChange = this.handleNsfwChange;
        obj.disabled = isNSFWDisabled;
        let stringResult;
        if (null != channel.linkedLobby) {
          const intl3 = tmp2(1114).intl;
          stringResult = intl3.string(tmp2(1114).t.l6uSVa);
        }
        obj.subLabel = stringResult;
        obj.children = closure_1_47(tmp2(7201).TableSwitchRow, obj);
        tmp = tmp4(tmp2(5687).TableRowGroup, obj, "nsfw-section");
        const tmp2Result = tmp2(4771);
      }
    }
  }
  return tmp;
};
prototype["renderThreadSpoiler"] = function renderThreadSpoiler() {
  const props = this.props;
  const channel = props.channel;
  let tmp = null;
  if (channel.isThread()) {
    let obj = { helperText: null, hasIcons: false, children: null };
    const intl = util.intl;
    obj.helperText = intl.string(util.t.ddWXHa);
    obj = { label: null, value: null, onValueChange: null, disabled: null };
    const intl2 = util.intl;
    obj.label = intl2.string(util.t.TvUHTb);
    obj.value = channel.isSpoilerChannel();
    obj.onValueChange = this.handleThreadSpoilerChange;
    obj.disabled = !props.canManageThread;
    obj.children = closure_1_47(TableSwitchRow.TableSwitchRow, obj);
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
      let obj = SecondsSliderUtils;
      const intl = util.intl;
      const secondsSliderLabel = obj.getSecondsSliderLabel(channel.rateLimitPerUser, false, intl.string(util.t.zvDu4h));
      if (channel.isForumLikeChannel()) {
        const intl3 = tmp4(1114).intl;
        let stringResult = intl3.string(tmp4(1114).t["a+1pdO"]);
      } else {
        const intl2 = tmp4(1114).intl;
        const string = intl2.string;
        const t = tmp4(1114).t;
        if (isThreadResult) {
          stringResult = string(t.OMmNCv);
        } else {
          stringResult = string(t["HEA/DU"]);
        }
        isThreadResult = channel.isThread();
      }
      const items = [];
      obj = { helperText: stringResult, hasIcons: false, children: null };
      obj = { border: "none", children: null };
      const obj1 = {
        style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" },
        children: null,
      };
      const obj2 = {
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        style: { flexShrink: 1 },
        children: null,
      };
      const intl4 = tmp4(1114).intl;
      obj2.children = intl4.string(util.t.piZgKF);
      const items1 = [closure_1_47(Text_Text.Text, obj2)];
      const obj3 = { variant: "text-md/medium", color: "text-muted", children: secondsSliderLabel };
      items1[1] = closure_1_47(Text_Text.Text, obj3);
      obj1.children = items1;
      const items2 = [__V(View, obj1)];
      const obj4 = {
        style: null,
        value: null,
        minimumValue: 0,
        maximumValue: null,
        onValueChange: null,
        accessibilityLabel: null,
        accessibilityValue: null,
      };
      const items3 = [tmp.slider, { marginStart: -4, marginTop: 8 }];
      obj4.style = items3;
      obj4.value = self._cooldown;
      obj4.maximumValue = length.length - 1;
      obj4.onValueChange = self.handleSlowmodeChange;
      const intl5 = tmp4(1114).intl;
      obj4.accessibilityLabel = intl5.string(util.t.piZgKF);
      const obj5 = { text: secondsSliderLabel };
      obj4.accessibilityValue = obj5;
      items2[1] = closure_1_47(Slider.Slider, obj4);
      obj.children = items2;
      obj.children = __V(Card.Card, obj);
      items.push(closure_1_47(TableRowGroup.TableRowGroup, obj, "slowmode-section"));
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
        let tmp5 = tmp;
      } else {
        stringResult = string(t.YUXr4Z);
        tmp5 = tmp;
      }
      const obj = { title: null, description: null, selected: null, channel: null, onSelectDuration: null };
      const intl2 = tmp5(1114).intl;
      obj.title = intl2.string(tmp5(1114).t.FGjMZS);
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
      return closure_1_47(tmp5(16815).AutoArchiveDurationOptions, obj);
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
      let obj = { description: null, hasIcons: false, children: null };
      const intl = util.intl;
      obj.description = intl.string(util.t.cSyXJk);
      obj = { disabled: !tmp2, label: null, value: null, onValueChange: null };
      const intl2 = util.intl;
      obj.label = intl2.string(util.t.s2rpNf);
      obj.value = channel.threadMetadata.invitable;
      obj.onValueChange = tmp.handleInvitableChange;
      obj.children = closure_1_47(TableSwitchRow.TableSwitchRow, obj);
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
      const tmp2 = closure_1_47;
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
      tmp2(ThreadAutoArchiveBottomSheet.AutoArchiveDurationOptions, obj);
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
      let obj = { title: null, description: null, value: null, onChange: null, hasIcons: false, children: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.gePre2);
      const intl2 = util.intl;
      obj.description = intl2.string(util.t["165cVX"]);
      obj.value = defaultSortOrder;
      obj.onChange = this.handleDefaultSortOrderChange;
      obj = { label: null, value: null };
      const intl3 = util.intl;
      obj.label = intl3.string(util.t.ElZtzj);
      obj.value = ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY;
      const items = [closure_1_47(TableRadioRow.TableRadioRow, obj)];
      obj = { label: null, value: null };
      const intl4 = util.intl;
      obj.label = intl4.string(util.t.w28f3F);
      obj.value = ThreadSortOrder.ThreadSortOrder.CREATION_DATE;
      items[1] = closure_1_47(TableRadioRow.TableRadioRow, obj);
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
      let obj = { title: null, description: null, value: null, onChange: null, hasIcons: false, children: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.Paxaug);
      const intl2 = util.intl;
      obj.description = intl2.string(util.t.DqOl8J);
      obj.value = defaultTagSetting;
      obj.onChange = this.handleDefaultTagSettingChange;
      obj = { label: null, value: null };
      const intl3 = util.intl;
      obj.label = intl3.string(util.t.rQ0ctQ);
      obj.value = ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME;
      const items = [closure_1_47(TableRadioRow.TableRadioRow, obj)];
      obj = { label: null, value: null };
      const intl4 = util.intl;
      obj.label = intl4.string(util.t.FCXUu0);
      obj.value = ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_ALL;
      items[1] = closure_1_47(TableRadioRow.TableRadioRow, obj);
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
            let obj = { description: null, hasIcons: false, children: null };
            obj = { children: null };
            const intl = util.intl;
            obj = { documentationLink: HelpdeskUtilsDefault.getArticleURL(constants6.ANNOUNCEMENT_CHANNELS) };
            const items1 = [intl.format(util.t.tI7KNX, obj), "\n\n"];
            const intl2 = util.intl;
            items1[2] = intl2.string(util.t["2Ab4Id"]);
            obj.children = items1;
            obj.description = __V(__h, obj);
            const obj1 = { disabled: !props.canManageChannels, label: null, value: null, onValueChange: null };
            const intl3 = util.intl;
            obj1.label = intl3.string(util.t.Au2b7m);
            obj1.value = channel.type === constants3.GUILD_ANNOUNCEMENT;
            const handleAnnouncementChange = self.handleAnnouncementChange;
            obj1.onValueChange = handleAnnouncementChange.bind(self, channel.type === constants3.GUILD_ANNOUNCEMENT);
            obj.children = closure_1_47(TableSwitchRow.TableSwitchRow, obj1);
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
      let obj = ChannelUtils;
      const bitrateLimit = obj.getBitrateLimit(guild, channel);
      obj = { description: null, hasIcons: false, children: null };
      const intl = util.intl;
      obj = { bitrate: __initData5 / 1000 };
      obj.description = intl.format(util.t.SbQJk5, obj);
      const obj1 = { children: null };
      const obj2 = {
        style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" },
        children: null,
      };
      const obj3 = {
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        style: { flexShrink: 1 },
        children: null,
      };
      const intl2 = util.intl;
      obj3.children = intl2.string(util.t.w2d0vU);
      const items1 = [closure_1_47(Text_Text.Text, obj3)];
      const obj4 = { variant: "text-md/medium", color: "text-muted", children: null };
      const _Math = Math;
      const _HermesInternal = HermesInternal;
      obj4.children = "" + Math.round(channel.bitrate / 1000) + "kbps";
      items1[1] = closure_1_47(Text_Text.Text, obj4);
      obj2.children = items1;
      const items2 = [__V(View, obj2)];
      const obj5 = { style: tmp.slider, value: null, minimumValue: null, maximumValue: null, onValueChange: null };
      const _Math2 = Math;
      obj5.value = Math.min(channel.bitrate, bitrateLimit);
      obj5.minimumValue = minimumValue;
      obj5.maximumValue = bitrateLimit;
      obj5.onValueChange = this.handleBitRateChange;
      items2[1] = closure_1_47(Slider.Slider, obj5);
      obj1.children = items2;
      obj.children = __V(Card.Card, obj1);
      items.push(closure_1_47(TableRowGroup.TableRowGroup, obj, "bitrate-section"));
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
      let obj = { title: null, description: null, value: null, onChange: null, hasIcons: false, children: null };
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
      obj = { label: null, value: null };
      const intl3 = tmp2(1114).intl;
      obj.label = intl3.string(util.t.jjKYpu);
      obj.value = constants9.AUTO;
      const items1 = [closure_1_47(TableRadioRow.TableRadioRow, obj)];
      obj = { label: null, value: null };
      const intl4 = tmp2(1114).intl;
      obj.label = intl4.string(util.t["7jOoJE"]);
      obj.value = constants9.FULL;
      items1[1] = closure_1_47(TableRadioRow.TableRadioRow, obj);
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
        let obj = { num: rounded };
        stringResult = intl.formatToPlainString(util.t["3uHFUR"], obj);
        tmp7 = require;
      }
      const tmp10 = channel.isGuildStageVoice() ? __initData15 : __initData14;
      const items = [];
      const intl3 = tmp7(1114).intl;
      const format = intl3.format;
      const t = tmp7(1114).t;
      if (isGuildStageVoiceResult) {
        let formatResult = format(t.OqZI8D, {});
      } else {
        formatResult = format(t["8yb3JT"], {});
      }
      obj = { description: formatResult, hasIcons: false, children: null };
      obj = { children: null };
      const obj1 = {
        style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" },
        children: null,
      };
      const obj2 = {
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        style: { flexShrink: 1 },
        children: null,
      };
      const intl4 = tmp7(1114).intl;
      obj2.children = intl4.string(tmp7(1114).t["/AoSGN"]);
      const items1 = [closure_1_47(tmp7(4556).Text, obj2)];
      const obj3 = { variant: "text-md/medium", color: "text-muted", children: stringResult };
      items1[1] = closure_1_47(tmp7(4556).Text, obj3);
      obj1.children = items1;
      const items2 = [__V(View, obj1)];
      const obj4 = { style: tmp.slider, value: null, minimumValue: 0, maximumValue: null, onValueChange: null };
      const _Math2 = Math;
      obj4.value = Math.min(channel.userLimit, tmp10);
      obj4.maximumValue = tmp10;
      obj4.onValueChange = this.handleUserLimitChange;
      items2[1] = closure_1_47(tmp7(14178).Slider, obj4);
      obj.children = items2;
      obj.children = __V(tmp7(5607).Card, obj);
      items.push(closure_1_47(tmp7(5687).TableRowGroup, obj, "channel-user-limit"));
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
            const intl = channel(1114).intl;
            name = intl.string(channel(1114).t.JEmsap);
          }
          const items = [];
          let obj = { title: null, description: null, hasIcons: false, children: null };
          const intl2 = channel(1114).intl;
          obj.title = intl2.string(channel(1114).t["Ms8bX+"]);
          const intl3 = channel(1114).intl;
          obj.description = intl3.string(channel(1114).t["dbTs+z"]);
          obj = { label: null, trailing: null, arrow: true, disabled: null, onPress: null };
          const intl4 = channel(1114).intl;
          obj.label = intl4.string(channel(1114).t["Ms8bX+"]);
          obj = { text: name };
          obj.trailing = closure_47(channel(5605).TableRow.TrailingText, obj);
          obj.disabled = tmp2;
          obj.onPress = function onPress() {
            return self.pushScreen(constants2.CHANGE_RTC_REGION);
          };
          obj.children = closure_47(channel(5605).TableRow, obj);
          items.push(closure_47(channel(5687).TableRowGroup, obj, "channel-region-override"));
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
    let obj = { helperText: null, hasIcons: true, children: null };
    const intl = self(1114).intl;
    obj.helperText = intl.string(self(1114).t.UAoMCL);
    if (tmp.type === constants3.GUILD_CATEGORY) {
      const intl3 = ShieldUserIcon(1114).intl;
      let stringResult = intl3.string(ShieldUserIcon(1114).t.PgkvDf);
    } else {
      const intl2 = ShieldUserIcon(1114).intl;
      stringResult = intl2.string(ShieldUserIcon(1114).t.BAZMBn);
    }
    obj = { label: stringResult, arrow: true, icon: null, onPress: null };
    ShieldUserIcon = ShieldUserIcon(9752).ShieldUserIcon;
    tmp2Result = tmp2(ShieldUserIcon, {});
    obj.icon = tmp2Result;
    obj.onPress = function onPress() {
      return self.pushScreen(constants2.PERMISSIONS, { origin: constants2.OVERVIEW });
    };
    obj.children = closure_47(self(5605).TableRow, obj);
    tmp2Result = tmp2(self(5687).TableRowGroup, obj);
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
    const intl = channel(1114).intl;
    obj.label = intl.string(channel(1114).t.h850Ss);
    obj.icon = closure_47(channel(9776).BellIcon, {});
    obj.onPress = function onPress() {
      if (channel.isThread()) {
        let result = threadActionSheets.showThreadNotificationsBottomSheet(channel);
      } else {
        result = self.pushScreen(constants2.NOTIFICATIONS);
      }
      return result;
    };
    items.push(closure_47(channel(5605).TableRow, obj, "rowNotifications"));
  }
  if (closure_8(channel.type)) {
    obj = { label: null, arrow: true, icon: null, onPress: null, disabled: null };
    const intl2 = channel(1114).intl;
    obj.label = intl2.string(channel(1114).t["mp1N/2"]);
    obj = { channelId: channel.id };
    obj.icon = closure_47(PinImage, obj);
    obj.onPress = function onPress() {
      return self.pushScreen(constants2.PINNED_MESSAGES);
    };
    obj.disabled = self.props.pinDisabled;
    items.push(closure_47(channel(5605).TableRow, obj, "rowPinnedMessages"));
  }
  if (canManageChannels) {
    canManageChannels = channel.type !== constants3.GUILD_CATEGORY;
  }
  if (canManageChannels) {
    canManageChannels = !channel.isThread();
  }
  if (canManageChannels) {
    const obj1 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = channel(1114).intl;
    obj1.label = intl3.string(channel(1114).t.ngRFjZ);
    obj1.icon = closure_47(channel(4503).LinkIcon, {});
    obj1.onPress = function onPress() {
      return self.pushScreen(constants2.INSTANT_INVITES);
    };
    items.push(closure_47(channel(5605).TableRow, obj1, "rowInstantInvites"));
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
    let obj = { description: null, hasIcons: true, children: null };
    const intl = self(1114).intl;
    obj.description = intl.string(self(1114).t.mOSViT);
    obj = { label: null, trailing: null, arrow: true, icon: null, onPress: null };
    const intl2 = self(1114).intl;
    obj.label = intl2.string(self(1114).t["kQvoC/"]);
    if (channel.defaultForumLayout === self(1967).ForumLayout.GRID) {
      const intl4 = GridSquareIcon(1114).intl;
      let stringResult = intl4.string(GridSquareIcon(1114).t["8RswJG"]);
    } else {
      const intl3 = GridSquareIcon(1114).intl;
      stringResult = intl3.string(GridSquareIcon(1114).t["4HXEZG"]);
    }
    const obj1 = { text: stringResult };
    obj.trailing = closure_47(self(5605).TableRow.TrailingText, obj1);
    if (channel.defaultForumLayout === GridSquareIcon(1967).ForumLayout.GRID) {
      GridSquareIcon = GridSquareIcon(16817).GridSquareIcon;
      obj = {};
      let tmpResult = tmp(GridSquareIcon, obj);
    } else {
      tmpResult = tmp(GridSquareIcon(7093).ListViewIcon, {});
    }
    obj.icon = tmpResult;
    obj.onPress = function onPress() {
      return self.pushScreen(constants2.DEFAULT_FORUM_LAYOUT);
    };
    obj.children = closure_47(self(5605).TableRow, obj, "forumDefaultLayout");
    tmpResult = tmp(self(5687).TableRowGroup, obj, "default-forum-layout");
  }
};
prototype["renderUncommonSettingsSection"] = function renderUncommonSettingsSection() {
  const self = this;
  const props = this.props;
  let canManageWebhooks = props.canManageWebhooks;
  let tmp = undefined !== canManageWebhooks && canManageWebhooks;
  canManageWebhooks = tmp;
  let obj = require("LobbyUtils");
  const result = obj.canUnlinkLobbyChannel(props.channel);
  require = result;
  if (!tmp) {
    tmp = result;
  }
  const items = [];
  if (tmp) {
    obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl = tmp2(tmp3[30]).intl;
    obj.label = intl.string(tmp2(tmp3[30]).t.CIsNZw);
    obj.icon = closure_47(tmp2(tmp3[80]).PuzzlePieceIcon, {});
    obj.onPress = function onPress() {
      return self.pushScreen(constants2.INTEGRATIONS, { canManageWebhooks, canUnlinkLobby: result });
    };
    items.push(closure_47(tmp2(tmp3[70]).TableRow, obj, "rowIntegrations"));
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
        let obj = { icon: closure_47(tmp2(4523).ClockIcon, {}), label: null, onPress: null };
        const intl2 = tmp2(1114).intl;
        const string2 = intl2.string;
        let cnRubV = tmp2(1114).t;
        if (isForumPost) {
          cnRubV = cnRubV.cnRubV;
          let string2Result = string2(cnRubV);
        } else {
          string2Result = string2(cnRubV.S9E4G7);
        }
        obj.label = string2Result;
        obj.onPress = function onPress() {
          return ThreadActionCreatorsDefault.unarchiveThread(require, false);
        };
        closure_47(tmp2(5605).TableRow, obj);
      }
    }
    items[1] = tmp8;
    let tmp12 = null;
    if (!isArchivedThread) {
      tmp12 = null;
      if (canManageThread) {
        obj = { icon: closure_47(tmp2(4513).XLargeIcon, {}), label: null, onPress: null };
        const intl3 = tmp2(1114).intl;
        const string3 = intl3.string;
        let BTs4Kb = tmp2(1114).t;
        if (isForumPost) {
          BTs4Kb = BTs4Kb.BTs4Kb;
          let string3Result = string3(BTs4Kb);
        } else {
          string3Result = string3(BTs4Kb.wiIevd);
        }
        obj.label = string3Result;
        obj.onPress = function onPress() {
          return ThreadActionCreatorsDefault.archiveThread(require, false);
        };
        closure_47(tmp2(5605).TableRow, obj);
      }
    }
    items[2] = tmp12;
    let tmp16 = null;
    if (isThreadModerator) {
      tmp16 = null;
      if (isLockedThread) {
        const obj1 = { icon: closure_47(tmp2(5095).LockIcon, {}), label: null, onPress: null };
        const intl4 = tmp2(1114).intl;
        const string4 = intl4.string;
        let t = tmp2(1114).t;
        if (isForumPost) {
          t = t["/OKSxp"];
          let string4Result = string4(t);
        } else {
          string4Result = string4(t["jeyb/W"]);
        }
        obj1.label = string4Result;
        obj1.onPress = function onPress() {
          return ThreadActionCreatorsDefault.unlockThread(require);
        };
        closure_47(tmp2(5605).TableRow, obj1);
      }
    }
    items[3] = tmp16;
    let tmp21 = null;
    if (isThreadModerator) {
      tmp21 = null;
      if (!isLockedThread) {
        const obj2 = { icon: closure_47(tmp2(5095).LockIcon, {}), label: null, onPress: null };
        const intl5 = tmp2(1114).intl;
        const string5 = intl5.string;
        let t1 = tmp2(1114).t;
        if (isForumPost) {
          t1 = t1["Ur/0Na"];
          let string5Result = string5(t1);
        } else {
          string5Result = string5(t1.HoCqm8);
        }
        obj2.label = string5Result;
        obj2.onPress = function onPress() {
          return ThreadActionCreatorsDefault.lockThread(require);
        };
        closure_47(tmp2(5605).TableRow, obj2);
      }
    }
    const obj3 = { hasIcons: true, children: null };
    items[4] = tmp21;
    const obj4 = { icon: closure_47(tmp2(4503).LinkIcon, {}), label: null, onPress: null };
    const intl6 = tmp2(1114).intl;
    obj4.label = intl6.string(tmp2(1114).t.WqhZss);
    obj4.onPress = function onPress() {
      return ChannelActionSheetUtils.copyGuildChannelOrThreadLink(closure_1_0.guild_id, closure_1_0.id);
    };
    items[5] = closure_47(tmp2(5605).TableRow, obj4);
    obj3.children = items;
    return closure_48(tmp4, obj3);
  } else {
    obj = { icon: closure_47(tmp2(10032).GroupPlusIcon, {}), label: null, onPress: null };
    const intl = tmp2(1114).intl;
    const string = intl.string;
    let ihLPiO = tmp2(1114).t;
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
    closure_47(tmp2(5605).TableRow, obj);
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
      const intl3 = channel(1114).intl;
      let stringResult = intl3.string(channel(1114).t.ifbXnL);
      let tmp8 = channel;
    } else if (isForumPost) {
      const intl2 = channel(1114).intl;
      stringResult = intl2.string(channel(1114).t.nEOg1N);
      tmp8 = channel;
    } else {
      const intl = channel(1114).intl;
      const string = intl.string;
      let t = channel(1114).t;
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
      let obj = { hasIcons: true, children: null };
      const items = [null];
      obj = {
        variant: "danger",
        icon: closure_47(tmp8(4518).TrashIcon, { color: "text-feedback-critical" }),
        label: stringResult,
        onPress: this.handleDeleteChannel,
      };
      items[1] = closure_47(tmp8(5605).TableRow, obj);
      obj.children = items;
      tmp = tmp13(tmp14, obj);
    } else {
      obj = {
        variant: "danger",
        icon: closure_47(tmp8(4501).UserMinusIcon, { color: "text-feedback-critical" }),
        label: null,
        onPress: null,
      };
      const intl4 = tmp8(1114).intl;
      const string2 = intl4.string;
      t = tmp8(1114).t;
      if (isForumPost) {
        t = t["2LsZdT"];
        let string2Result = string2(t);
      } else {
        string2Result = string2(t["fa/84m"]);
      }
      obj.label = string2Result;
      obj.onPress = function onPress() {
        return ThreadActionCreatorsDefault.leaveThread(channel, "Context Menu");
      };
      closure_47(tmp8(5605).TableRow, obj);
    }
    tmp13 = closure_48;
  }
  return tmp;
};
prototype["renderForumTags"] = function renderForumTags() {
  const self = this;
  const tmp = closure_52(this.context);
  ({ channel, canManageChannels } = this.props);
  if (channel.isForumLikeChannel()) {
    let availableTags = channel.availableTags;
    if (availableTags != null) {
      const everyResult = availableTags.every((moderated) => moderated.moderated);
    }
    let tmp3 = canManageChannels;
    if (canManageChannels) {
      tmp3 = channel.availableTags.length < MAX_FORUM_TAGS;
    }
    const error = self.getError("available_tags");
    let obj = { spacing: self(576).space.PX_12, children: null };
    obj = { title: null, description: null, hasIcons: false, children: null };
    const intl = canManageChannels(1114).intl;
    obj.title = intl.string(canManageChannels(1114).t["P/y+sj"]);
    let stringResult;
    if (channel.availableTags.length <= 0) {
      const intl2 = tmp7(1114).intl;
      stringResult = intl2.string(tmp7(1114).t["3v8kZH"]);
    }
    obj.description = stringResult;
    obj = { style: tmp.tagsWrapper, children: null };
    let tmp6Result = null;
    if (channel.availableTags.length > 0) {
      availableTags = channel.availableTags;
      const items = [
        availableTags.map((tag) =>
          closure_2_47(
            AvailableForumTagDefault,
            { tag, onPress: self.handlePressTag, disabled: !canManageChannels },
            tag.id,
          ),
        ),
      ];
      let tmp10Result = null;
      if (tmp3) {
        const obj1 = { style: tmp.addTagIconButtonWrapper, children: null };
        const obj2 = { icon: null, size: "sm", onPress: null, accessibilityLabel: null };
        const obj3 = { size: "sm", color: self(576).colors.WHITE };
        obj2.icon = tmp10(tmp7(8867).PlusSmallIcon, obj3);
        obj2.onPress = function onPress() {
          return self.handlePressTag();
        };
        const intl3 = tmp7(1114).intl;
        obj2.accessibilityLabel = intl3.string(tmp7(1114).t["/jubeD"]);
        obj1.children = tmp10(tmp7(8097).IconButton, obj2);
        tmp10Result = tmp10(tmp12, obj1);
      }
      const obj4 = { children: null };
      items[1] = tmp10Result;
      obj4.children = items;
      tmp6Result = tmp6(closure_49, obj4);
    }
    obj.children = tmp6Result;
    obj.children = closure_47(View, obj);
    const items1 = [closure_47(canManageChannels(5687).TableRowGroup, obj), , ,];
    tmp10Result = null;
    if (channel.availableTags.length <= 0) {
      const obj5 = {
        disabled: !canManageChannels,
        onPress() {
          return self.handlePressTag();
        },
        style: tmp.createTagButton,
        accessibilityRole: "button",
        children: null,
      };
      const obj6 = { variant: "text-sm/semibold", color: "text-brand", style: tmp.createTagButtonText, children: null };
      const intl4 = tmp7(1114).intl;
      obj6.children = intl4.string(tmp7(1114).t.F4is7L);
      obj5.children = tmp10(tmp7(4556).Text, obj6);
      tmp10Result = tmp10(tmp7(5123).PressableOpacity, obj5);
    }
    items1[1] = tmp10Result;
    let tmp10Result1 = null != error && error.length > 0;
    if (tmp10Result1) {
      const obj7 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
      tmp10Result1 = tmp10(tmp7(4556).Text, obj7);
    }
    items1[2] = tmp10Result1;
    let tmp18 = !canManageChannels;
    if (canManageChannels) {
      tmp18 = everyResult;
    }
    const obj8 = { hasIcons: false, children: null };
    const obj9 = { disabled: tmp18, label: null, value: null, onValueChange: null };
    const intl5 = tmp7(1114).intl;
    obj9.label = intl5.string(canManageChannels(1114).t.yX24uI);
    obj9.value = channel.hasFlag(constants10.REQUIRE_TAG);
    obj9.onValueChange = self.handleToggleRequireTag;
    obj8.children = closure_47(canManageChannels(7201).TableSwitchRow, obj9);
    items1[3] = closure_47(canManageChannels(5687).TableRowGroup, obj8);
    obj.children = items1;
    return closure_48(canManageChannels(4973).Stack, obj);
  } else {
    return null;
  }
};
prototype["renderShowMediaDownloadOptions"] = function renderShowMediaDownloadOptions() {
  const props = this.props;
  const channel = props.channel;
  let tmp = null;
  if (channel.isMediaChannel()) {
    let obj = { hasIcons: false, children: null };
    obj = { disabled: !props.canManageChannels, label: null, subLabel: null, value: null, onValueChange: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.u8LZOt);
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t.J4wCc7);
    obj.value = !channel.hasFlag(constants10.HIDE_MEDIA_DOWNLOAD_OPTIONS);
    obj.onValueChange = this.handleToggleShowMediaDownloadOptions;
    obj.children = closure_1_47(TableSwitchRow.TableSwitchRow, obj);
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
        const intl = self(1114).intl;
        let stringResult = intl.string(self(1114).t.GSfOoo);
        let tmp7 = self;
      } else {
        let obj = self(4713);
        stringResult = obj.computeChannelName(category, UserStore, RelationshipStore);
        tmp7 = self;
      }
      obj = {
        icon: closure_47(tmp7(16154).FolderPlusIcon, {}),
        label: null,
        trailing: null,
        arrow: null,
        onPress: null,
      };
      const intl2 = tmp7(1114).intl;
      obj.label = intl2.string(tmp7(1114).t.vHCZwr);
      obj = { text: stringResult };
      obj.trailing = closure_47(tmp7(5605).TableRow.TrailingText, obj);
      obj.arrow = canManageParent;
      let fn;
      if (canManageParent) {
        fn = () => self.pushScreen(constants2.CHANGE_CATEGORY);
      }
      const obj1 = { hasIcons: true, children: null };
      obj.onPress = fn;
      obj1.children = closure_47(tmp7(5605).TableRow, obj);
      return closure_47(tmp7(5687).TableRowGroup, obj1);
    }
  }
  return null;
};
prototype["renderThreadSettings"] = function renderThreadSettings() {
  let obj = { children: null };
  obj = { spacing: nativeDefault.space.PX_24, style: closure_52(this.context).stackPadding, children: null };
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
  obj.children = items;
  obj.children = __V(Stack_Stack.Stack, obj);
  return closure_1_47(Form.Form, obj);
};
prototype["renderChannelSettings"] = function renderChannelSettings() {
  let obj = { children: null };
  obj = { spacing: nativeDefault.space.PX_24, style: closure_52(this.context).stackPadding, children: null };
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
  obj.children = items;
  obj.children = __V(Stack_Stack.Stack, obj);
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
ChannelSettingsOverview.contextType = fn(4271).ThemeContext;
size = fn(2);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsOverview.tsx");

export default function ConnectedChannelSettingsOverview(arg0) {
  ({ channelId: require, autoFocusElement } = arg0);
  let navigation;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(require));
  let obj2 = require("initialize");
  const items1 = [ChannelSettingsStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => channel.getChannel());
  const obj4 = require("initialize");
  const isThreadModerator = require("ThreadHooks").useIsThreadModerator(stateFromStores);
  const obj5 = require("ThreadHooks");
  const items2 = [JoinedThreadsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => {
    let isMutedResult;
    if (null != stateFromStores) {
      isMutedResult = JoinedThreadsStore.isMuted(tmp.id);
    }
    const obj = { isMutedThread: isMutedResult, hasJoinedThread: null };
    let hasJoinedResult;
    if (null != stateFromStores) {
      hasJoinedResult = JoinedThreadsStore.hasJoined(tmp.id);
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
      let obj = stateFromStores;
      if (null == stateFromStores) {
        obj = { isThread: false, submitting, errors };
        return obj;
      } else {
        const guild = GuildStore.getGuild(obj.getGuildId());
        channel = ChannelStore.getChannel(obj.parent_id);
        const currentUser = UserStore.getCurrentUser();
        const hasItem = set3.has(obj.type);
        obj = {
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
        const regions = RegionStore.getRegions(obj.getGuildId());
        obj.hasCategories = GuildChannelStore.hasCategories(obj.guild_id);
        obj.pinDisabled = shouldHideChannelContent;
        obj.canManageChannels = PermissionStore.can(constants7.MANAGE_CHANNELS, obj);
        obj.isChannelOwner = null != currentUser && obj.ownerId === currentUser.id;
        if (null != channel) {
          let canResult = obj5.can(tmp21.MANAGE_CHANNELS, channel);
        } else {
          canResult = obj5.can(tmp21.MANAGE_CHANNELS, guild);
        }
        obj.canManageParent = canResult;
        obj.canManageRoles = PermissionStore.can(constants7.MANAGE_ROLES, obj);
        obj.canSendMessages = PermissionStore.can(constants7.SEND_MESSAGES, obj);
        obj.canManageWebhooks = set7.has(obj.type) && PermissionStore.can(constants7.MANAGE_WEBHOOKS, obj);
        const tmp4 = set7.has(obj.type) && PermissionStore.can(constants7.MANAGE_WEBHOOKS, obj);
        obj.canUnarchiveThread = ThreadHooks.canUnarchiveThread(obj);
        obj.regions = regions;
        obj.submitting = submitting;
        obj.errors = errors;
        obj.isNSFWDisabled = isGuildNSFW(guild) || null != obj.linkedLobby;
        return obj;
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
    obj = {};
    const merged = Object.assign(stateFromStoresObject1);
    obj.channel = stateFromStores1;
    obj.navigation = navigation;
    obj.isThreadModerator = isThreadModerator;
    let isLockedThreadResult;
    if (stateFromStores != null) {
      isLockedThreadResult = stateFromStores.isLockedThread();
    }
    obj.isLockedThread = isLockedThreadResult;
    let isArchivedThreadResult;
    if (stateFromStores != null) {
      isArchivedThreadResult = stateFromStores.isArchivedThread();
    }
    obj.isArchivedThread = isArchivedThreadResult;
    obj.canManageThread = canManageThread;
    obj.canUnarchiveThread = stateFromStoresObject1.canUnarchiveThread;
    obj.isMutedThread = isMutedThread;
    obj.hasJoinedThread = hasJoinedThread;
    let isForumPostResult;
    if (stateFromStores != null) {
      isForumPostResult = stateFromStores.isForumPost();
    }
    obj.isForumPost = isForumPostResult;
    obj.channelNameRef = ref;
    tmp11Result = closure_47(ChannelSettingsOverview, obj);
  }
  return tmp11Result;
}
export { PinImage };
