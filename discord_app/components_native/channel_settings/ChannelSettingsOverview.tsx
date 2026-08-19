// === Module 16028: PinImage ===

// Module 16028 (PinImage)
import applyDefault from "apply" /* 12 */;
import obj132 from "obj132" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import set2 from "set" /* 1400 */;
import set3 from "set" /* 1402 */;
import combinedDefault from "combined" /* 1993 */;
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4034 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import LinkIcon from "LinkIcon" /* 4318 */;
import XLargeIcon from "XLargeIcon" /* 4328 */;
import ClockIcon from "ClockIcon" /* 4338 */;
import Stack from "Stack" /* 4733 */;
import Text from "Text" /* 4734 */;
import allowChannelAccess from "allowChannelAccess" /* 4979 */;
import computeChannelName from "computeChannelName" /* 4984 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 5042 */;
import shouldShowAgeGateForVoiceChannel from "shouldShowAgeGateForVoiceChannel" /* 5252 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import PressableCard from "PressableCard" /* 6292 */;
import LockIcon from "LockIcon" /* 6890 */;
import TableSwitchRow from "TableSwitchRow" /* 7178 */;
import useCanUnarchiveThread from "useCanUnarchiveThread" /* 7234 */;
import patchThreadDefault from "patchThread" /* 7512 */;
import TextInput2 from "TextInput" /* 8071 */;
import Form from "Form" /* 8083 */;
import TextArea from "TextArea" /* 8092 */;
import TableRadioRow from "TableRadioRow" /* 8100 */;
import context from "context" /* 8101 */;
import initDefault from "init" /* 8132 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 8464 */;
import getAutoArchiveOptions from "getAutoArchiveOptions" /* 8465 */;
import registerAssetDefault from "registerAsset" /* 8764 */;
import GroupPlusIcon from "GroupPlusIcon" /* 9991 */;
import copyGuildChannelOrThreadLink from "copyGuildChannelOrThreadLink" /* 9995 */;
import Slider from "Slider" /* 13542 */;
import _modDef16031 from "module_16031" /* 16031 */;
import getSecondsSliderLabel from "getSecondsSliderLabel" /* 16032 */;
import getIsChannelNameSettingEditable from "getIsChannelNameSettingEditable" /* 16033 */;
import AutoArchiveDurationOptions from "AutoArchiveDurationOptions" /* 16034 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import storeThread from "storeThread" /* 4023 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import { isGuildNSFW } from "GuildNSFWContentLevel" /* 1434 */;
import normalizeChannelPropertyForCompare from "normalizeChannelPropertyForCompare" /* 8133 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import comparator from "comparator" /* 1980 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;
import initialize from "initialize" /* 16029 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { ChannelSettingsAutoFocusElement as closure_21 } from "ChannelSettingsAutoFocusElement" /* 16030 */;
import ME from "ME" /* 676 */;
import { MAX_FORUM_TAGS } from "FORUM_GUIDELINES_ACTION_SHEET" /* 7273 */;
import { DEFAULT_AUTO_ARCHIVE_DURATION as closure_42 } from "AbortCodes" /* 1235 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import set from "set" /* 1398 */;

require = fn;
class PinImage {
  constructor(arg0) {
    channelId = global.channelId;
    tmp = closure_46();
    tmp2 = channelId;
    tmp3 = closure_2;
    obj = require("initialize");
    items = [];
    items[0] = closure_17;
    tmp4 = undefined;
    if (obj.useStateFromStores(items, () => closure_1_17.hasUnreadPins(channelId))) {
      tmp5 = jsx;
      tmp6 = View;
      obj = { style: null, children: null };
      obj[0] = tmp.outer;
      obj1 = { style: null };
      obj1[0] = tmp.badge;
      obj[1] = jsx(View, obj1);
      tmp4 = jsx(View, obj);
    }
    obj2 = { style: global.style, children: null };
    items1 = [, ];
    items1[0] = jsx(require("PinIcon").PinIcon, {});
    items1[1] = tmp4;
    obj2[1] = items1;
    return jsxs(View, obj2);
  }
}
let c4 = importAllResult;
({ EDITABLE_VOICE_SETTINGS_TYPES: error, isGuildTextChannelType: closure_8, THREADED_CHANNEL_TYPES: c9, THREAD_CHANNEL_TYPES: c10 } = createChannelRecord);
({ AnalyticEvents: closure_22, BITRATE_DEFAULT: closure_23, BITRATE_MIN: closure_24, ChannelSettingsSections: closure_25, ChannelTypes: closure_26, ChannelTypesSets: closure_27, GuildFeatures: closure_28, GuildSettingsSections: closure_29, HelpdeskArticles: closure_30, MAX_CHANNEL_NAME_LENGTH: closure_31, MAX_VOICE_USER_LIMIT: closure_32, MAX_STAGE_VOICE_USER_LIMIT: closure_33, Permissions: closure_34, SettingsPaneTypes: closure_35, SLOWMODE_VALUES: closure_36, VideoQualityMode: closure_37 } = ME);
({ ChannelFlags: closure_38, MAX_CHANNEL_TOPIC_LENGTH: closure_39, MAX_FORUM_CHANNEL_TOPIC_LENGTH: closure_40 } = require("set"));
({ jsx: closure_43, jsxs: closure_44, Fragment: closure_45 } = jsxProd);
let createCacheKey = { position: "absolute", top: 2, right: -4, width: 12, height: 12, borderRadius: ThemesDefault.radii.md, justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.unsafe_rawColors.RED_400, width: 8, height: 8, borderRadius: ThemesDefault.radii.xs };
let closure_46 = createCacheKey.createStyles(createCacheKey);
let obj2 = { screenContainer: null, slider: null, stackPadding: null, alertText: null, tagsWrapper: null, addTagIconButtonWrapper: null, createTagButton: null, createTagButtonText: null };
obj2[0] = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingTop: ThemesDefault.space.PX_16 };
obj2[1] = { marginHorizontal: 15 };
createCacheKey = { paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
obj2[2] = createCacheKey;
obj2[3] = { marginTop: 16 };
obj2[4] = { display: "flex", flexDirection: "row", flexWrap: "wrap" };
obj2[5] = { justifyContent: "center", margin: ThemesDefault.space.PX_4 };
obj2[6] = { backgroundColor: "transparent", paddingHorizontal: 0, marginTop: ThemesDefault.space.PX_4 };
obj2[7] = { fontFamily: require("sum").Fonts.PRIMARY_SEMIBOLD, fontSize: 14 };
let closure_48 = createCacheKey.createLegacyClassComponentStyles(obj2);
const PureComponent = importAllResult.PureComponent;
class ChannelSettingsOverview extends PureComponent {
  constructor(arg0) {
    tmp = new tmp(global, tmp4, tmp3, tmp2);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp;
    obj = require("apply");
    tmp._cooldown = obj.findIndex(SLOWMODE_VALUES, (arg0) => arg0 >= store.props.channel.rateLimitPerUser);
    tmp.state = { hasChanges: false };
    tmp.pushScreen = function pushScreen(dependencyMap, arg1) {
      const items = [...arguments];
      const navigation = store.props.navigation;
      const items1 = [...items];
      navigation.push.apply(items1);
      if (items[0] !== closure_1_25.PERMISSIONS) {
        const obj = { settings_type: "channel", origin_pane: null, destination_pane: null };
        obj[1] = closure_1_35.CHANNEL_SETTINGS;
        obj[2] = items[0];
        obj.trackWithMetadata(closure_1_22.SETTINGS_PANE_VIEWED, obj);
      }
    };
    tmp.handleSave = function handleSave() {
      let obj = channel;
      if (channel.state.hasChanges) {
        channel = obj.props.channel;
        obj = { name: null, type: null, topic: null, position: null, bitrate: null, userLimit: null, defaultAutoArchiveDuration: null, nsfw: null, rateLimitPerUser: null, videoQualityMode: null, autoArchiveDuration: null, locked: null, invitable: null, flags: null, defaultSortOrder: null, defaultForumLayout: null, defaultTagSetting: null, iconEmoji: null, themeColor: null };
        ({ name: obj3[0], type: obj3[1], topic: obj3[2], position: obj3[3], bitrate: obj3[4], userLimit: obj3[5], defaultAutoArchiveDuration: obj3[6], nsfw: obj3[7], rateLimitPerUser: obj3[8], videoQualityMode: obj3[9], threadMetadata } = channel);
        let autoArchiveDuration;
        if (threadMetadata != null) {
          autoArchiveDuration = threadMetadata.autoArchiveDuration;
        }
        obj[10] = autoArchiveDuration;
        const threadMetadata2 = channel.threadMetadata;
        let locked;
        if (threadMetadata2 != null) {
          locked = threadMetadata2.locked;
        }
        obj[11] = locked;
        const threadMetadata3 = channel.threadMetadata;
        let invitable;
        if (threadMetadata3 != null) {
          invitable = threadMetadata3.invitable;
        }
        obj[12] = invitable;
        obj[13] = channel.flags;
        obj[14] = channel.getDefaultSortOrder();
        obj[15] = channel.defaultForumLayout;
        obj[16] = channel.getDefaultTagSetting();
        ({ iconEmoji: obj3[17], themeColor: obj3[18] } = channel);
        initDefault.saveChannel(channel.id, obj).then((result) => {
          if (200 === result.status) {
            let navigation = dispatcherDefault.open;
            let goBackResult = { key: "THREAD_SETTINGS_UPDATED", icon: null, content: null };
            goBackResult[1] = registerAssetDefault;
            const intl = channel(dependencyMap[30]).intl;
            const string = intl.string;
            let n2Y84J = channel(dependencyMap[30]).t;
            if (isThreadResult) {
              n2Y84J = n2Y84J.n2Y84J;
              let stringResult = string(n2Y84J);
            } else {
              stringResult = string(n2Y84J["FE/ohq"]);
            }
            goBackResult[2] = stringResult;
            navigation(goBackResult);
            navigation = channel.props.navigation;
            goBackResult = navigation.goBack();
            isThreadResult = channel.isThread();
          }
        });
        obj.setState({ hasChanges: false });
        const saveChannelResult = initDefault.saveChannel(channel.id, obj);
      }
    };
    tmp.handleChangeName = function handleChangeName(arg0) {
      const channel = store.props.channel;
      if (channel.isThread()) {
        let result = sanitizeThreadNameDefault(arg0, false);
      } else {
        const LIMITED_CHANNEL_NAME = closure_1_27.LIMITED_CHANNEL_NAME;
        result = arg0;
        if (LIMITED_CHANNEL_NAME.has(channel.type)) {
          result = store(dependencyMap[37]).sanitizeGuildTextChannelName(arg0);
          const obj2 = store(dependencyMap[37]);
        }
      }
      initDefault.updateChannel({ name: result });
      store.setState({ hasChanges: true });
    };
    tmp.handleBlurName = function handleBlurName() {
      let obj = store;
      const channel = store.props.channel;
      if (channel.isThread()) {
        const tmp3 = sanitizeThreadNameDefault(channel.name, true);
        if (tmp3 !== channel.name) {
          obj = { name: null };
          obj[0] = tmp3;
          initDefault.updateChannel(obj);
          obj.setState({ hasChanges: true });
          const tmpResult = initDefault;
        }
      }
    };
    tmp.handleChangeTopic = function handleChangeTopic(emojiName) {
      const obj = { topic: parseRawEmojiObjectDefault.translateInlineEmojiToSurrogates(emojiName) };
      obj.updateChannel(obj);
      store.setState({ hasChanges: true });
    };
    tmp.handleBitRateChange = function handleBitRateChange(arg0) {
      const obj = { bitrate: Math.round(arg0) };
      obj.updateChannel(obj);
      store.setState({ hasChanges: true });
    };
    tmp.handleVideoQualityModeChange = function handleVideoQualityModeChange(videoQualityMode) {
      const obj = { videoQualityMode };
      obj.updateChannel(obj);
      store.setState({ hasChanges: true });
    };
    tmp.handleNsfwChange = function handleNsfwChange(nsfw) {
      const obj = { nsfw };
      obj.updateChannel(obj);
      store.setState({ hasChanges: true });
    };
    tmp.handleThreadSpoilerChange = function handleThreadSpoilerChange(arg0) {
      const obj = store(dependencyMap[39]);
      const setFlagResult = store(dependencyMap[39]).setFlag(store.props.channel.flags, closure_1_38.IS_SPOILER_CHANNEL, arg0);
      initDefault.updateChannel({ flags: setFlagResult });
      store.setState({ hasChanges: true });
    };
    tmp.handleSlowmodeChange = function handleSlowmodeChange(arg0) {
      let hasChanges = store.state.hasChanges;
      const tmp2 = closure_1_36[Math.round(Math, arg0)];
      initDefault.updateChannel({ rateLimitPerUser: tmp2 });
      const AccessibilityAnnouncer = store(dependencyMap[40]).AccessibilityAnnouncer;
      const intl = store(dependencyMap[30]).intl;
      AccessibilityAnnouncer.announce(store(dependencyMap[41]).getSecondsSliderLabel(tmp2, false, intl.string(store(dependencyMap[30]).t.zvDu4h)));
      if (!hasChanges) {
        hasChanges = store.props.channel.rateLimitPerUser !== tmp2;
      }
      store.setState({ hasChanges });
      const obj2 = store(dependencyMap[41]);
    };
    tmp.handleDefaultAutoArchiveDurationChange = function handleDefaultAutoArchiveDurationChange(defaultAutoArchiveDuration) {
      const obj = { defaultAutoArchiveDuration };
      obj.updateChannel(obj);
      store.setState({ hasChanges: true });
    };
    tmp.handleAutoArchiveDurationChange = function handleAutoArchiveDurationChange(autoArchiveDuration) {
      const obj = { autoArchiveDuration };
      obj.updateChannel(obj);
      store.setState({ hasChanges: true });
    };
    tmp.handleDefaultSortOrderChange = function handleDefaultSortOrderChange(defaultSortOrder) {
      const obj = { defaultSortOrder };
      obj.updateChannel(obj);
      store.setState({ hasChanges: true });
    };
    tmp.handleDefaultTagSettingChange = function handleDefaultTagSettingChange(defaultTagSetting) {
      const obj = { defaultTagSetting };
      obj.updateChannel(obj);
      store.setState({ hasChanges: true });
    };
    tmp.handleInvitableChange = function handleInvitableChange(invitable) {
      const obj = { invitable };
      obj.updateChannel(obj);
      store.setState({ hasChanges: true });
    };
    tmp.handleAnnouncementChange = function handleAnnouncementChange(arg0) {
      const obj = { type: arg0 ? closure_1_26.GUILD_TEXT : closure_1_26.GUILD_ANNOUNCEMENT };
      obj.updateChannel(obj);
      store.setState({ hasChanges: true });
    };
    tmp.handleActiveChannelsRemovedChange = function handleActiveChannelsRemovedChange(arg0) {
      const obj = store(dependencyMap[39]);
      const setFlagResult = store(dependencyMap[39]).setFlag(store.props.channel.flags, closure_1_38.ACTIVE_CHANNELS_REMOVED, !arg0);
      initDefault.updateChannel({ flags: setFlagResult });
      store.setState({ hasChanges: true });
    };
    tmp.handleUserLimitChange = function handleUserLimitChange(arg0) {
      const obj = { userLimit: Math.round(arg0) };
      obj.updateChannel(obj);
      store.setState({ hasChanges: true });
    };
    closure_0 = tmp;
    tmp.handleDeleteChannel = closure_3(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === guild) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let channel = tmp5;
              closure_0 = tmp2;
              closure_0 = undefined;
              channel = undefined;
              guild = undefined;
              c3 = undefined;
              closure_4 = undefined;
              c5 = undefined;
              closure_0 = closure_1_48(closure_1_0.context);
              channel = closure_1_0.props.channel;
              guild = closure_1_15.getGuild(channel.getGuildId());
              guild = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0(guild[42]).isDefaultChannelThresholdMetAfterDelete(channel.getGuildId(), channel.id);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            c3 = arg1;
            if (null != guild) {
              const features = guild.features;
              if (features.has(closure_1_28.COMMUNITY)) {
                if (guild.rulesChannelId === closure_1_1.id) {
                  if (guild.rulesChannelId === closure_1_1.id) {
                    const intl2 = closure_1_0(guild[30]).intl;
                    let stringResult = intl2.string(closure_1_0(guild[30]).t.yjrZPl);
                  } else {
                    const intl = closure_1_0(guild[30]).intl;
                    stringResult = intl.string(closure_1_0(guild[30]).t["1B1/NB"]);
                  }
                  c5 = stringResult;
                  obj = closure_1_1(guild[43]);
                  const obj3 = { title: null, confirmText: null, children: null };
                  const intl3 = closure_1_0(guild[30]).intl;
                  obj3[0] = intl3.string(closure_1_0(guild[30]).t["TY/V+H"]);
                  const intl4 = closure_1_0(guild[30]).intl;
                  obj3[1] = intl4.string(closure_1_0(guild[30]).t.BddRzS);
                  const obj4 = { children: null };
                  const obj5 = { style: null, variant: "text-md/medium", children: null };
                  obj5[0] = closure_0.alertText;
                  obj5[2] = c5;
                  const items = [closure_1_43(closure_1_0(guild[44]).Text, obj5), ];
                  let obj6 = { style: null, variant: "text-md/medium", children: null };
                  obj6[0] = closure_0.alertText;
                  const intl5 = closure_1_0(guild[30]).intl;
                  const obj7 = { onClick: null };
                  obj7[0] = function onClick() {
                    channel(user[43]).close();
                    const obj = channel(user[43]);
                    channel(user[33]).close();
                    const obj2 = channel(user[33]);
                    channel(user[45]).open(user.id, closure_1_29.COMMUNITY);
                  };
                  obj6[2] = intl5.format(closure_1_0(guild[30]).t.LAJbDm, obj7);
                  items[1] = closure_1_43(closure_1_0(guild[44]).Text, obj6);
                  obj4[0] = items;
                  obj3[2] = closure_1_44(closure_1_45, obj4);
                  obj.show(obj3);
                  c3 = 3;
                }
              }
            }
            if (null != guild) {
              if (!c3) {
                obj6 = closure_1_1(guild[43]);
                const obj8 = { title: null, confirmText: null, children: null };
                const intl6 = closure_1_0(guild[30]).intl;
                obj8[0] = intl6.string(closure_1_0(guild[30]).t["TY/V+H"]);
                const intl7 = closure_1_0(guild[30]).intl;
                obj8[1] = intl7.string(closure_1_0(guild[30]).t.BddRzS);
                const obj9 = { children: null };
                const obj10 = { style: null, variant: "text-md/medium", children: null };
                obj10[0] = closure_0.alertText;
                const intl8 = closure_1_0(guild[30]).intl;
                obj10[2] = intl8.string(closure_1_0(guild[30]).t.iWlB6h);
                const items1 = [closure_1_43(closure_1_0(guild[44]).Text, obj10), ];
                const obj11 = { style: null, variant: "text-md/medium", children: null };
                obj11[0] = closure_0.alertText;
                const intl9 = closure_1_0(guild[30]).intl;
                let obj12 = { onClick: null };
                obj12[0] = function onClick() {
                  channel(user[43]).close();
                  const obj = channel(user[43]);
                  channel(user[33]).close();
                  const obj2 = channel(user[33]);
                  channel(user[45]).open(user.id, closure_1_29.ONBOARDING);
                };
                obj11[2] = intl9.format(closure_1_0(guild[30]).t.ajiBwB, obj12);
                items1[1] = closure_1_43(closure_1_0(guild[44]).Text, obj11);
                obj9[0] = items1;
                obj8[2] = closure_1_44(closure_1_45, obj9);
                obj6.show(obj8);
              }
            }
            obj12 = closure_1_0(guild[46]);
            closure_4 = obj12.computeChannelName(channel, closure_1_20, closure_1_19, true);
            let obj13 = closure_1_1(guild[43]);
            if (closure_1_0.props.isForumPost) {
              const intl11 = closure_1_0(guild[30]).intl;
              let stringResult1 = intl11.string(closure_1_0(guild[30]).t.nEOg1N);
            } else {
              const intl10 = closure_1_0(guild[30]).intl;
              const string = intl10.string;
              const t = closure_1_0(guild[30]).t;
              if (closure_1_0.props.isThread) {
                stringResult1 = string(t.H7vTe2);
              } else {
                stringResult1 = string(t["8D8Rsb"]);
              }
            }
            obj13 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
            obj13[0] = stringResult1;
            const intl12 = closure_1_0(guild[30]).intl;
            const obj14 = { channelName: null };
            obj14[0] = closure_4;
            obj13[1] = intl12.format(closure_1_0(guild[30]).t.a6Gz9J, obj14);
            const intl13 = closure_1_0(guild[30]).intl;
            obj13[2] = intl13.string(closure_1_0(guild[30]).t.gm1Vej);
            const intl14 = closure_1_0(guild[30]).intl;
            obj13[3] = intl14.string(closure_1_0(guild[30]).t.p89ACt);
            obj13[4] = closure_1_0.handleConfirmDeleteChannel;
            obj13[5] = closure_1_1(guild[47]).Colors.RED;
            obj13.show(obj13);
          }
        } catch (tmp129) {
          c3 = tmp;
          throw tmp129;
        }
      }
    });
    closure_0 = tmp;
    tmp.handleConfirmDeleteChannel = closure_3(function*() {
      closure_2 = tmp3;
      c4 = 1;
      yield closure_1_1(closure_1_2[33]).deleteChannel(closure_1_0.props.channel.id);
      if (1 === tmp7) {
        c4 = 0;
        closure_2 = closure_3;
        const aPIError = new closure_1_0(closure_1_2[49]).APIError(closure_2);
        const anyErrorMessage = aPIError.getAnyErrorMessage();
        let navigation = anyErrorMessage;
        if (anyErrorMessage == null) {
          const intl = closure_1_0(closure_1_2[30]).intl;
          navigation = intl.string(closure_1_0(closure_1_2[30]).t.CKsXk3);
        }
        const obj2 = { key: "CHANNEL_SETTINGS_DELETE_CHANNEL_ERROR", content: null };
        obj2[1] = navigation;
        closure_1_1(closure_1_2[34]).open(obj2);
        c6 = 3;
        const obj5 = closure_1_1(closure_1_2[34]);
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = closure_1_0(closure_1_2[48]);
        navigation = obj.getRootNavigationRef();
        obj1 = navigation;
        let isReadyResult;
        if (navigation != null) {
          isReadyResult = obj1.isReady();
        }
        if (isReadyResult) {
          navigation.goBack();
        }
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    });
    tmp.handlePressTag = function handlePressTag(tag) {
      store.pushScreen(closure_1_25.EDIT_FORUM_TAG, { tag });
    };
    tmp.handleToggleRequireTag = function handleToggleRequireTag() {
      let obj = store;
      if (store.props.canManageChannels) {
        const channel = obj.props.channel;
        const hasFlagResult = channel.hasFlag(closure_1_38.REQUIRE_TAG);
        const obj2 = store(dependencyMap[39]);
        const setFlagResult = store(dependencyMap[39]).setFlag(obj.props.channel.flags, closure_1_38.REQUIRE_TAG, !hasFlagResult);
        obj = { flags: null };
        obj[0] = setFlagResult;
        initDefault.updateChannel(obj);
        obj.setState({ hasChanges: true });
      }
    };
    tmp.handleToggleShowMediaDownloadOptions = function handleToggleShowMediaDownloadOptions() {
      let obj = store;
      if (store.props.canManageChannels) {
        const channel = obj.props.channel;
        const hasFlagResult = channel.hasFlag(closure_1_38.HIDE_MEDIA_DOWNLOAD_OPTIONS);
        const obj2 = store(dependencyMap[39]);
        const setFlagResult = store(dependencyMap[39]).setFlag(obj.props.channel.flags, closure_1_38.HIDE_MEDIA_DOWNLOAD_OPTIONS, !hasFlagResult);
        obj = { flags: null };
        obj[0] = setFlagResult;
        initDefault.updateChannel(obj);
        obj.setState({ hasChanges: true });
      }
    };
    tmp.getError = function getError(arg0) {
      const errors = store.props.errors;
      let tmp;
      if (errors != null) {
        tmp = errors[arg0];
      }
      return tmp;
    };
    tmp.state.hasChanges = closure_12.hasChanges();
    return tmp;
  }
}
const prototype = ChannelSettingsOverview.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  this.updateNavigation(undefined, this.state);
  if (tmp2) {
    let obj = _modDef16031;
    const regions = obj.fetchRegions(self.props.guild.id);
  }
  obj = { settings_type: "channel", destination_pane: constants6.CHANNEL_SETTINGS };
  collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
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
    const intl3 = hasChanges(1236).intl;
    const string = intl3.string;
    let BsJrhj = hasChanges(1236).t;
    if (props.isForumPost) {
      BsJrhj = BsJrhj.BsJrhj;
      let stringResult = string(BsJrhj);
    } else {
      stringResult = string(BsJrhj.d4n5Q1);
    }
  } else {
    if (type === constants2.GUILD_CATEGORY) {
      const intl2 = hasChanges(1236).intl;
      let stringResult1 = intl2.string(hasChanges(1236).t["/uELTj"]);
      let tmp3 = hasChanges;
    } else {
      tmp3 = hasChanges;
      let intl = hasChanges(1236).intl;
      stringResult1 = intl.string(hasChanges(1236).t.XPDhcc);
    }
    if (submitting) {
      let fn = tmp3(6314).HeaderSubmittingIndicator;
    } else {
      fn = (arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.onPress = self.handleSave;
        const intl = hasChanges(dependencyMap[30]).intl;
        obj.label = intl.string(hasChanges(dependencyMap[30]).t["R3BPH+"]);
        obj.disabled = !hasChanges;
        return closure_1_43(hasChanges(dependencyMap[32]).HeaderTextButton, obj);
      };
    }
    let obj = { headerRight: null, title: null };
    obj[0] = fn;
    obj[1] = stringResult1;
    navigation.setOptions(obj);
  }
};
prototype["renderChannelInfo"] = function renderChannelInfo() {
  const self = this;
  const props = this.props;
  ({ channel, canManageChannels, isThread } = props);
  ({ canManageThread, canSendMessages, isChannelOwner, isForumPost } = props);
  let hasItem = callback2(channel.type) && !isThread;
  if (!hasItem) {
    const GUILD_THREADS_ONLY = constants3.GUILD_THREADS_ONLY;
    hasItem = GUILD_THREADS_ONLY.has(channel.type);
  }
  let obj = getIsChannelNameSettingEditable;
  const isChannelNameSettingEditable = obj.getIsChannelNameSettingEditable({ canManageThread, canManageChannels, canSendMessages, isForumPost, isThread, isChannelOwner });
  if (channel.isForumPost()) {
    const intl4 = getSystemLocale.intl;
    let stringResult = intl4.string(getSystemLocale.t.uyVrTN);
  } else if (isThread) {
    const intl3 = getSystemLocale.intl;
    stringResult = intl3.string(getSystemLocale.t.j3XWjD);
  } else if (channel.type === constants2.GUILD_CATEGORY) {
    const intl2 = getSystemLocale.intl;
    stringResult = intl2.string(getSystemLocale.t.OCAkGP);
  } else {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t.PVbHDl);
  }
  obj = { ref: self.props.channelNameRef, label: stringResult, accessibilityLabel: stringResult, value: null, onChange: null, onBlur: null, isDisabled: null, maxLength: null, errorMessage: null, enableAndroidSanitizedInputWorkaround: true };
  const TextInput = TextInput2.TextInput;
  obj[3] = computeChannelName.computeChannelName(channel, closure_20, closure_19);
  ({ handleChangeName: obj2[4], handleBlurName: obj2[5] } = self);
  obj[6] = !isChannelNameSettingEditable;
  obj[7] = closure_31;
  obj[8] = self.getError("name");
  if (!hasItem) {
    obj = { children: null };
    const items = [tmp9, undefined];
    obj[0] = items;
    return callback4(closure_45, obj);
  } else {
    const intl5 = getSystemLocale.intl;
    const string = intl5.string;
    const t = getSystemLocale.t;
    if (isForumLikeChannelResult) {
      let stringResult1 = string(t.yR6HwZ);
    } else {
      stringResult1 = string(t.X8jMDh);
    }
    obj1 = { label: null, accessibilityLabel: null, value: null, onChange: null, isDisabled: null, autoCorrect: true, maxLength: null, errorMessage: null };
    obj1[0] = stringResult1;
    obj1[1] = stringResult1;
    isForumLikeChannelResult = channel.isForumLikeChannel();
    obj1[2] = parseRawEmojiObjectDefault.translateSurrogatesToInlineEmoji(channel.topic);
    obj1[3] = self.handleChangeTopic;
    obj1[4] = !canManageChannels;
    obj1[6] = channel.isForumLikeChannel() ? closure_40 : closure_39;
    obj1[7] = self.getError("topic");
    callback(TextArea.TextArea, obj1);
  }
  const tmp3Result = computeChannelName;
};
prototype["renderNsfwConfig"] = function renderNsfwConfig() {
  const channel = this.props.channel;
  let tmp7Result = null;
  if (channel.type === constants2.GUILD_TEXT) {
    tmp7Result = null;
    if (tmp2) {
      let obj = obj132;
      tmp7Result = null;
      if (!obj.isIOS()) {
        obj = { helperText: null, hasIcons: false, children: null };
        const intl = getSystemLocale.intl;
        obj[0] = intl.string(getSystemLocale.t["9eUgwR"]);
        obj = { label: null, value: null, onValueChange: null, disabled: null, subLabel: null };
        const intl2 = getSystemLocale.intl;
        obj[0] = intl2.string(getSystemLocale.t.Es25Yf);
        obj[1] = shouldShowAgeGateForVoiceChannel.isChannelOrGuildNSFW(channel);
        obj[2] = tmp.handleNsfwChange;
        obj[3] = tmp3;
        let stringResult;
        if (null != channel.linkedLobby) {
          const intl3 = getSystemLocale.intl;
          stringResult = intl3.string(getSystemLocale.t.l6uSVa);
        }
        obj[4] = stringResult;
        obj[2] = callback(TableSwitchRow.TableSwitchRow, obj);
        tmp7Result = callback(TableRowGroupTitle.TableRowGroup, obj, "nsfw-section");
        const tmp5Result = shouldShowAgeGateForVoiceChannel;
      }
    }
  }
  return tmp7Result;
};
prototype["renderThreadSpoiler"] = function renderThreadSpoiler() {
  const props = this.props;
  const channel = props.channel;
  let tmp = null;
  if (channel.isThread()) {
    let obj = { helperText: null, hasIcons: false, children: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.ddWXHa);
    obj = { label: null, value: null, onValueChange: null, disabled: null };
    const intl2 = getSystemLocale.intl;
    obj[0] = intl2.string(getSystemLocale.t.TvUHTb);
    obj[1] = channel.isSpoilerChannel();
    obj[2] = this.handleThreadSpoilerChange;
    obj[3] = !props.canManageThread;
    obj[2] = callback3(TableSwitchRow.TableSwitchRow, obj);
    tmp = callback3(TableRowGroupTitle.TableRowGroup, obj, "thread-spoiler-section");
  }
  return tmp;
};
prototype["renderSlowmode"] = function renderSlowmode() {
  const self = this;
  const channel = this.props.channel;
  if (channel.type !== constants2.GUILD_TEXT) {
    return null;
  }
  let obj = getSecondsSliderLabel;
  const intl = getSystemLocale.intl;
  const secondsSliderLabel = obj.getSecondsSliderLabel(channel.rateLimitPerUser, false, intl.string(getSystemLocale.t.zvDu4h));
  if (channel.isForumLikeChannel()) {
    const intl3 = getSystemLocale.intl;
    let stringResult = intl3.string(getSystemLocale.t["a+1pdO"]);
  } else {
    const intl2 = getSystemLocale.intl;
    const string = intl2.string;
    const t = getSystemLocale.t;
    if (isThreadResult) {
      stringResult = string(t.OMmNCv);
    } else {
      stringResult = string(t["HEA/DU"]);
    }
    isThreadResult = channel.isThread();
  }
  const items = [];
  obj = { border: "none", children: null };
  obj1 = { style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }, children: null };
  const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: { flexShrink: 1 }, children: null };
  const intl4 = getSystemLocale.intl;
  obj2[3] = intl4.string(getSystemLocale.t.piZgKF);
  const items1 = [callback3(Text.Text, obj2), callback3(Text.Text, { variant: "text-md/medium", color: "text-muted", children: secondsSliderLabel })];
  obj1[1] = items1;
  const items2 = [callback4(View, obj1), ];
  const obj3 = { style: items3, value: self._cooldown, minimumValue: 0, maximumValue: length.length - 1, onValueChange: self.handleSlowmodeChange, accessibilityLabel: null, accessibilityValue: null };
  items3 = [callback6(this.context).slider, { marginStart: -4, marginTop: 8 }];
  const intl5 = getSystemLocale.intl;
  obj3[5] = intl5.string(getSystemLocale.t.piZgKF);
  obj3[6] = { text: secondsSliderLabel };
  items2[1] = callback3(Slider.Slider, obj3);
  obj[1] = items2;
  obj[2] = callback4(PressableCard.Card, obj);
  items.push(callback3(TableRowGroupTitle.TableRowGroup, obj, "slowmode-section"));
  return items;
};
prototype["renderAutoArchiveDuration"] = function renderAutoArchiveDuration() {
  const props = this.props;
  const channel = props.channel;
  ({ canManageThread, isForumPost } = props);
  if (channel.isThread()) {
    if (canManageThread) {
      const intl = getSystemLocale.intl;
      const string = intl.string;
      const t = getSystemLocale.t;
      if (isForumPost) {
        let stringResult = string(t["3aJN9M"]);
        let tmp5 = require;
      } else {
        stringResult = string(t.YUXr4Z);
        tmp5 = require;
      }
      const obj = { title: null, description: null, selected: null, channel: null, onSelectDuration: null };
      const intl2 = tmp5(1236).intl;
      obj[0] = intl2.string(tmp5(1236).t.FGjMZS);
      obj[1] = stringResult;
      const threadMetadata = channel.threadMetadata;
      let autoArchiveDuration;
      if (threadMetadata != null) {
        autoArchiveDuration = threadMetadata.autoArchiveDuration;
      }
      if (autoArchiveDuration == null) {
        autoArchiveDuration = closure_42;
      }
      obj[2] = autoArchiveDuration;
      obj[3] = channel;
      obj[4] = this.handleAutoArchiveDurationChange;
      return callback(tmp5(16034).AutoArchiveDurationOptions, obj);
    }
  }
  return null;
};
prototype["renderInvitable"] = function renderInvitable() {
  const channel = this.props.channel;
  let tmp3 = null;
  if (null != channel.threadMetadata) {
    tmp3 = null;
    if (channel.type === constants2.PRIVATE_THREAD) {
      let obj = { description: null, hasIcons: false, children: null };
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t.cSyXJk);
      obj = { disabled: null, label: null, value: null, onValueChange: null };
      obj[0] = !tmp2;
      const intl2 = getSystemLocale.intl;
      obj[1] = intl2.string(getSystemLocale.t.s2rpNf);
      obj[2] = channel.threadMetadata.invitable;
      obj[3] = tmp.handleInvitableChange;
      obj[2] = callback3(TableSwitchRow.TableSwitchRow, obj);
      tmp3 = callback3(TableRowGroupTitle.TableRowGroup, obj, "thread-invitable-section");
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
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t.FGjMZS);
      obj[1] = getAutoArchiveOptions.getAutoArchiveDuration(channel, null);
      obj[2] = channel;
      obj[3] = this.handleDefaultAutoArchiveDurationChange;
      const intl2 = getSystemLocale.intl;
      const string = intl2.string;
      let fyXclY = getSystemLocale.t;
      if (isForumLikeChannelResult) {
        fyXclY = fyXclY.fyXclY;
        let stringResult = string(fyXclY);
      } else {
        stringResult = string(fyXclY.W3Noi9);
      }
      obj[4] = stringResult;
      callback(AutoArchiveDurationOptions.AutoArchiveDurationOptions, obj);
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
  }
  return tmp;
};
prototype["renderDefaultSortOrder"] = function renderDefaultSortOrder() {
  const props = this.props;
  const channel = props.channel;
  if (channel.isForumLikeChannel()) {
    if (props.canManageChannels) {
      const defaultSortOrder = channel.getDefaultSortOrder();
      let obj = { title: null, description: null, value: null, onChange: null, hasIcons: false, children: null };
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t.gePre2);
      const intl2 = getSystemLocale.intl;
      obj[1] = intl2.string(getSystemLocale.t["165cVX"]);
      obj[2] = defaultSortOrder;
      obj[3] = this.handleDefaultSortOrderChange;
      obj = { label: null, value: null };
      const intl3 = getSystemLocale.intl;
      obj[0] = intl3.string(getSystemLocale.t.ElZtzj);
      obj[1] = set2.ThreadSortOrder.LATEST_ACTIVITY;
      const items = [callback3(TableRadioRow.TableRadioRow, obj), ];
      obj = { label: null, value: null };
      const intl4 = getSystemLocale.intl;
      obj[0] = intl4.string(getSystemLocale.t.w28f3F);
      obj[1] = set2.ThreadSortOrder.CREATION_DATE;
      items[1] = callback3(TableRadioRow.TableRadioRow, obj);
      obj[5] = items;
      return callback4(context.TableRadioGroup, obj);
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
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t.Paxaug);
      const intl2 = getSystemLocale.intl;
      obj[1] = intl2.string(getSystemLocale.t.DqOl8J);
      obj[2] = defaultTagSetting;
      obj[3] = this.handleDefaultTagSettingChange;
      obj = { label: null, value: null };
      const intl3 = getSystemLocale.intl;
      obj[0] = intl3.string(getSystemLocale.t.rQ0ctQ);
      obj[1] = set3.ThreadSearchTagSetting.MATCH_SOME;
      const items = [callback3(TableRadioRow.TableRadioRow, obj), ];
      obj = { label: null, value: null };
      const intl4 = getSystemLocale.intl;
      obj[0] = intl4.string(getSystemLocale.t.FCXUu0);
      obj[1] = set3.ThreadSearchTagSetting.MATCH_ALL;
      items[1] = callback3(TableRadioRow.TableRadioRow, obj);
      obj[5] = items;
      return callback4(context.TableRadioGroup, obj);
    }
  }
  return null;
};
prototype["renderAnnouncement"] = function renderAnnouncement() {
  const self = this;
  const props = this.props;
  ({ channel, guild } = props);
  if (callback2(channel.type)) {
    if (null != guild) {
      const features = guild.features;
      if (features.has(constants4.NEWS)) {
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
            const intl = getSystemLocale.intl;
            const obj = { documentationLink: null };
            obj[0] = combinedDefault.getArticleURL(constants5.ANNOUNCEMENT_CHANNELS);
            const items1 = [intl.format(getSystemLocale.t.tI7KNX, obj), "\n\n", ];
            const intl2 = getSystemLocale.intl;
            items1[2] = intl2.string(getSystemLocale.t["2Ab4Id"]);
            obj[0] = items1;
            obj[0] = callback4(closure_45, obj);
            obj1 = { disabled: null, label: null, value: null, onValueChange: null };
            obj1[0] = !props.canManageChannels;
            const intl3 = getSystemLocale.intl;
            obj1[1] = intl3.string(getSystemLocale.t.Au2b7m);
            obj1[2] = channel.type === constants2.GUILD_ANNOUNCEMENT;
            const handleAnnouncementChange = self.handleAnnouncementChange;
            obj1[3] = handleAnnouncementChange.bind(self, channel.type === constants2.GUILD_ANNOUNCEMENT);
            obj[2] = callback3(TableSwitchRow.TableSwitchRow, obj1);
            items.push(callback3(TableRowGroupTitle.TableRowGroup, obj, "announcement-section"));
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
      let obj = allowChannelAccess;
      const bitrateLimit = obj.getBitrateLimit(guild, channel);
      const intl = getSystemLocale.intl;
      obj = { bitrate: null };
      obj[0] = closure_23 / 1000;
      obj[0] = intl.format(getSystemLocale.t.SbQJk5, obj);
      obj1 = { children: null };
      const obj2 = { style: null, children: null };
      obj2[0] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" };
      const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: null, children: null };
      obj3[2] = { flexShrink: 1 };
      const intl2 = getSystemLocale.intl;
      obj3[3] = intl2.string(getSystemLocale.t.w2d0vU);
      const items1 = [callback3(Text.Text, obj3), ];
      const obj4 = { variant: "text-md/medium", color: "text-muted", children: null };
      const _Math = Math;
      const _HermesInternal = HermesInternal;
      obj4[2] = "" + Math.round(channel.bitrate / 1000) + "kbps";
      items1[1] = callback3(Text.Text, obj4);
      obj2[1] = items1;
      const items2 = [callback4(View, obj2), ];
      const obj5 = { style: null, value: null, minimumValue: null, maximumValue: null, onValueChange: null };
      obj5[0] = tmp.slider;
      const _Math2 = Math;
      obj5[1] = Math.min(channel.bitrate, bitrateLimit);
      obj5[2] = closure_24;
      obj5[3] = bitrateLimit;
      obj5[4] = this.handleBitRateChange;
      items2[1] = callback3(Slider.Slider, obj5);
      obj1[0] = items2;
      obj[2] = callback4(PressableCard.Card, obj1);
      items.push(callback3(TableRowGroupTitle.TableRowGroup, obj, "bitrate-section"));
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
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t.jhJEJs);
      const intl2 = getSystemLocale.intl;
      obj[1] = intl2.format(getSystemLocale.t.c5W7Ss, {});
      let AUTO = channel.videoQualityMode;
      if (AUTO == null) {
        AUTO = constants7.AUTO;
      }
      obj[2] = AUTO;
      obj[3] = this.handleVideoQualityModeChange;
      obj = { label: null, value: null };
      const intl3 = getSystemLocale.intl;
      obj[0] = intl3.string(getSystemLocale.t.jjKYpu);
      obj[1] = constants7.AUTO;
      const items1 = [callback3(TableRadioRow.TableRadioRow, obj), ];
      obj = { label: null, value: null };
      const intl4 = getSystemLocale.intl;
      obj[0] = intl4.string(getSystemLocale.t["7jOoJE"]);
      obj[1] = constants7.FULL;
      items1[1] = callback3(TableRadioRow.TableRadioRow, obj);
      obj[5] = items1;
      items.push(callback2(context.TableRadioGroup, obj, "video-quality-section"));
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
        const intl2 = getSystemLocale.intl;
        let stringResult = intl2.string(getSystemLocale.t.XX5ciX);
        let tmp7 = require;
      } else {
        const intl = getSystemLocale.intl;
        let obj = { num: null };
        obj[0] = rounded;
        stringResult = intl.formatToPlainString(getSystemLocale.t["3uHFUR"], obj);
        tmp7 = require;
      }
      const tmp10 = channel.isGuildStageVoice() ? closure_33 : closure_32;
      const items = [];
      const intl3 = tmp7(1236).intl;
      const format = intl3.format;
      const t = tmp7(1236).t;
      if (isGuildStageVoiceResult) {
        let formatResult = format(t.OqZI8D, {});
      } else {
        formatResult = format(t["8yb3JT"], {});
      }
      obj = { description: null, hasIcons: false, children: null };
      obj[0] = formatResult;
      obj = { children: null };
      obj1 = { style: null, children: null };
      obj1[0] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" };
      const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: null, children: null };
      obj2[2] = { flexShrink: 1 };
      const intl4 = tmp7(1236).intl;
      obj2[3] = intl4.string(tmp7(1236).t["/AoSGN"]);
      const items1 = [callback(tmp7(4734).Text, obj2), ];
      const obj3 = { variant: "text-md/medium", color: "text-muted", children: null };
      obj3[2] = stringResult;
      items1[1] = callback(tmp7(4734).Text, obj3);
      obj1[1] = items1;
      const items2 = [callback4(View, obj1), ];
      const obj4 = { style: null, value: null, minimumValue: 0, maximumValue: null, onValueChange: null };
      obj4[0] = tmp.slider;
      const _Math2 = Math;
      obj4[1] = Math.min(channel.userLimit, tmp10);
      obj4[3] = tmp10;
      obj4[4] = this.handleUserLimitChange;
      items2[1] = callback(tmp7(13542).Slider, obj4);
      obj[0] = items2;
      obj[2] = callback4(tmp7(6292).Card, obj);
      items.push(callback(tmp7(6286).TableRowGroup, obj, "channel-user-limit"));
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
            found = regions.find((item, index) => item.id === channel.rtcRegion);
          }
          if (null != found) {
            let name = found.name;
          } else {
            const intl = channel(1236).intl;
            name = intl.string(channel(1236).t.JEmsap);
          }
          const items = [];
          let obj = { title: null, description: null, hasIcons: false, children: null };
          const intl2 = channel(1236).intl;
          obj[0] = intl2.string(channel(1236).t["Ms8bX+"]);
          const intl3 = channel(1236).intl;
          obj[1] = intl3.string(channel(1236).t["dbTs+z"]);
          obj = { label: null, trailing: null, arrow: true, disabled: null, onPress: null };
          const intl4 = channel(1236).intl;
          obj[0] = intl4.string(channel(1236).t["Ms8bX+"]);
          obj = { text: null };
          obj[0] = name;
          obj[1] = callback3(channel(6291).TableRow.TrailingText, obj);
          obj[3] = tmp2;
          obj[4] = function onPress() {
            return self.pushScreen(closure_1_25.CHANGE_RTC_REGION);
          };
          obj[3] = callback3(channel(6291).TableRow, obj);
          items.push(callback3(channel(6286).TableRowGroup, obj, "channel-region-override"));
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
      const VoiceInThreadsExperiment = useCanUnarchiveThread.VoiceInThreadsExperiment;
      const obj = { guildId: null, location: "9b50bd_1" };
      obj[0] = channel.guild_id;
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
    const intl = self(1236).intl;
    obj[0] = intl.string(self(1236).t.UAoMCL);
    if (tmp.type === constants2.GUILD_CATEGORY) {
      const intl3 = ShieldUserIcon(1236).intl;
      let stringResult = intl3.string(ShieldUserIcon(1236).t.PgkvDf);
    } else {
      const intl2 = ShieldUserIcon(1236).intl;
      stringResult = intl2.string(ShieldUserIcon(1236).t.BAZMBn);
    }
    obj = { label: null, arrow: true, icon: null, onPress: null };
    obj[0] = stringResult;
    ShieldUserIcon = ShieldUserIcon(8859).ShieldUserIcon;
    tmp2Result = callback(ShieldUserIcon, {});
    obj[2] = tmp2Result;
    obj[3] = function onPress() {
      return self.pushScreen(closure_1_25.PERMISSIONS, { origin: closure_1_25.OVERVIEW });
    };
    obj[2] = callback(self(6291).TableRow, obj);
    tmp2Result = callback(self(6286).TableRowGroup, obj);
  }
};
prototype["renderSettingsSection"] = function renderSettingsSection(items) {
  let tmp = null;
  if (items.length > 0) {
    const obj = { hasIcons: true, children: null };
    obj[1] = items;
    tmp = callback3(TableRowGroupTitle.TableRowGroup, obj);
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
    const intl = channel(1236).intl;
    obj[0] = intl.string(channel(1236).t.h850Ss);
    obj[2] = callback3(channel(10003).BellIcon, {});
    obj[3] = function onPress() {
      if (channel.isThread()) {
        let result = channel(dependencyMap[70]).showThreadNotificationsBottomSheet(channel);
        const obj = channel(dependencyMap[70]);
      } else {
        result = self.pushScreen(closure_1_25.NOTIFICATIONS);
      }
      return result;
    };
    items.push(callback3(channel(6291).TableRow, obj, "rowNotifications"));
  }
  if (callback2(channel.type)) {
    obj = { label: null, arrow: true, icon: null, onPress: null, disabled: null };
    const intl2 = channel(1236).intl;
    obj[0] = intl2.string(channel(1236).t["mp1N/2"]);
    obj = { channelId: null };
    obj[0] = channel.id;
    obj[2] = callback3(PinImage, obj);
    obj[3] = function onPress() {
      return self.pushScreen(closure_1_25.PINNED_MESSAGES);
    };
    obj[4] = self.props.pinDisabled;
    items.push(callback3(channel(6291).TableRow, obj, "rowPinnedMessages"));
  }
  if (canManageChannels) {
    canManageChannels = channel.type !== constants2.GUILD_CATEGORY;
  }
  if (canManageChannels) {
    canManageChannels = !channel.isThread();
  }
  if (canManageChannels) {
    obj1 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = channel(1236).intl;
    obj1[0] = intl3.string(channel(1236).t.ngRFjZ);
    obj1[2] = callback3(channel(4318).LinkIcon, {});
    obj1[3] = function onPress() {
      return self.pushScreen(closure_1_25.INSTANT_INVITES);
    };
    items.push(callback3(channel(6291).TableRow, obj1, "rowInstantInvites"));
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
    const intl = self(1236).intl;
    obj[0] = intl.string(self(1236).t.mOSViT);
    obj = { label: null, trailing: null, arrow: true, icon: null, onPress: null };
    const intl2 = self(1236).intl;
    obj[0] = intl2.string(self(1236).t["kQvoC/"]);
    if (channel.defaultForumLayout === self(1401).ForumLayout.GRID) {
      const intl4 = GridSquareIcon(1236).intl;
      let stringResult = intl4.string(GridSquareIcon(1236).t["8RswJG"]);
    } else {
      const intl3 = GridSquareIcon(1236).intl;
      stringResult = intl3.string(GridSquareIcon(1236).t["4HXEZG"]);
    }
    obj1 = { text: null };
    obj1[0] = stringResult;
    obj[1] = callback(self(6291).TableRow.TrailingText, obj1);
    if (channel.defaultForumLayout === GridSquareIcon(1401).ForumLayout.GRID) {
      GridSquareIcon = GridSquareIcon(16035).GridSquareIcon;
      obj = {};
      let tmpResult = callback(GridSquareIcon, obj);
    } else {
      tmpResult = callback(GridSquareIcon(8544).ListViewIcon, {});
    }
    obj[3] = tmpResult;
    obj[4] = function onPress() {
      return self.pushScreen(closure_1_25.DEFAULT_FORUM_LAYOUT);
    };
    obj[2] = callback(self(6291).TableRow, obj, "forumDefaultLayout");
    tmpResult = callback(self(6286).TableRowGroup, obj, "default-forum-layout");
  }
};
prototype["renderUncommonSettingsSection"] = function renderUncommonSettingsSection() {
  const self = this;
  const props = this.props;
  const canManageWebhooks = props.canManageWebhooks;
  let tmp = undefined !== canManageWebhooks && canManageWebhooks;
  closure_1 = tmp;
  let obj = require(self[75]);
  const result = obj.canUnlinkLobbyChannel(props.channel);
  require = result;
  if (!tmp) {
    tmp = result;
  }
  const items = [];
  if (tmp) {
    obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl = tmp2(tmp3[30]).intl;
    obj[0] = intl.string(tmp2(tmp3[30]).t.CIsNZw);
    obj[2] = callback3(tmp2(tmp3[76]).PuzzlePieceIcon, {});
    obj[3] = function onPress() {
      return self.pushScreen(closure_1_25.INTEGRATIONS, { canManageWebhooks: closure_1, canUnlinkLobby: closure_0 });
    };
    items.push(callback3(tmp2(tmp3[66]).TableRow, obj, "rowIntegrations"));
  }
  return self.renderSettingsSection(items);
};
prototype["renderThreadManagementActions"] = function renderThreadManagementActions() {
  const props = this.props;
  ({ channel: require, isThreadModerator, isLockedThread, isArchivedThread, isForumPost } = props);
  ({ canManageThread, canUnarchiveThread, hasJoinedThread } = props);
  if (hasJoinedThread) {
    const items = [null, , , , , ];
    let tmp8 = null;
    if (isArchivedThread) {
      tmp8 = null;
      if (canUnarchiveThread) {
        let obj = { icon: null, label: null, onPress: null };
        obj[0] = callback3(ClockIcon.ClockIcon, {});
        const intl2 = getSystemLocale.intl;
        const string2 = intl2.string;
        let cnRubV = getSystemLocale.t;
        if (isForumPost) {
          cnRubV = cnRubV.cnRubV;
          let string2Result = string2(cnRubV);
        } else {
          string2Result = string2(cnRubV.S9E4G7);
        }
        obj[1] = string2Result;
        obj[2] = function onPress() {
          return patchThreadDefault.unarchiveThread(closure_0, false);
        };
        callback3(TableRowInner.TableRow, obj);
      }
    }
    items[1] = tmp8;
    let tmp12 = null;
    if (!isArchivedThread) {
      tmp12 = null;
      if (canManageThread) {
        obj = { icon: null, label: null, onPress: null };
        obj[0] = callback3(XLargeIcon.XLargeIcon, {});
        const intl3 = getSystemLocale.intl;
        const string3 = intl3.string;
        let BTs4Kb = getSystemLocale.t;
        if (isForumPost) {
          BTs4Kb = BTs4Kb.BTs4Kb;
          let string3Result = string3(BTs4Kb);
        } else {
          string3Result = string3(BTs4Kb.wiIevd);
        }
        obj[1] = string3Result;
        obj[2] = function onPress() {
          return patchThreadDefault.archiveThread(closure_0, false);
        };
        callback3(TableRowInner.TableRow, obj);
      }
    }
    items[2] = tmp12;
    let tmp16 = null;
    if (isThreadModerator) {
      tmp16 = null;
      if (isLockedThread) {
        obj1 = { icon: null, label: null, onPress: null };
        obj1[0] = callback3(LockIcon.LockIcon, {});
        const intl4 = getSystemLocale.intl;
        const string4 = intl4.string;
        let t = getSystemLocale.t;
        if (isForumPost) {
          t = t["/OKSxp"];
          let string4Result = string4(t);
        } else {
          string4Result = string4(t["jeyb/W"]);
        }
        obj1[1] = string4Result;
        obj1[2] = function onPress() {
          return patchThreadDefault.unlockThread(closure_0);
        };
        callback3(TableRowInner.TableRow, obj1);
      }
    }
    items[3] = tmp16;
    let tmp21 = null;
    if (isThreadModerator) {
      tmp21 = null;
      if (!isLockedThread) {
        const obj2 = { icon: null, label: null, onPress: null };
        obj2[0] = callback3(LockIcon.LockIcon, {});
        const intl5 = getSystemLocale.intl;
        const string5 = intl5.string;
        let t1 = getSystemLocale.t;
        if (isForumPost) {
          t1 = t1["Ur/0Na"];
          let string5Result = string5(t1);
        } else {
          string5Result = string5(t1.HoCqm8);
        }
        obj2[1] = string5Result;
        obj2[2] = function onPress() {
          return patchThreadDefault.lockThread(closure_0);
        };
        callback3(TableRowInner.TableRow, obj2);
      }
    }
    const obj3 = { hasIcons: true, children: null };
    items[4] = tmp21;
    const obj4 = { icon: null, label: null, onPress: null };
    obj4[0] = callback3(LinkIcon.LinkIcon, {});
    const intl6 = getSystemLocale.intl;
    obj4[1] = intl6.string(getSystemLocale.t.WqhZss);
    obj4[2] = function onPress() {
      return copyGuildChannelOrThreadLink.copyGuildChannelOrThreadLink(closure_0.guild_id, closure_0.id);
    };
    items[5] = callback3(TableRowInner.TableRow, obj4);
    obj3[1] = items;
    return callback2(tmp4, obj3);
  } else {
    obj = { icon: null, label: null, onPress: null };
    obj[0] = callback3(GroupPlusIcon.GroupPlusIcon, {});
    const intl = getSystemLocale.intl;
    const string = intl.string;
    let ihLPiO = getSystemLocale.t;
    if (isForumPost) {
      ihLPiO = ihLPiO.ihLPiO;
      let stringResult = string(ihLPiO);
    } else {
      stringResult = string(ihLPiO["10kukS"]);
    }
    obj[1] = stringResult;
    obj[2] = function onPress() {
      return patchThreadDefault.joinThread(closure_0, "Context Menu");
    };
    callback3(TableRowInner.TableRow, obj);
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
    if (channel.type === constants2.GUILD_CATEGORY) {
      const intl3 = channel(1236).intl;
      let stringResult = intl3.string(channel(1236).t.ifbXnL);
      let tmp8 = channel;
    } else if (isForumPost) {
      const intl2 = channel(1236).intl;
      stringResult = intl2.string(channel(1236).t.nEOg1N);
      tmp8 = channel;
    } else {
      const intl = channel(1236).intl;
      const string = intl.string;
      let t = channel(1236).t;
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
      const items = [null, ];
      let obj = { variant: "danger", icon: null, label: null, onPress: null };
      obj[1] = callback3(tmp8(4333).TrashIcon, { color: "text-feedback-critical" });
      obj[2] = stringResult;
      obj[3] = this.handleDeleteChannel;
      items[1] = callback3(tmp8(6291).TableRow, obj);
      obj[1] = items;
      tmp = callback2(tmp14, obj);
    } else {
      obj = { variant: "danger", icon: null, label: null, onPress: null };
      obj[1] = callback3(tmp8(4316).UserMinusIcon, { color: "text-feedback-critical" });
      const intl4 = tmp8(1236).intl;
      const string2 = intl4.string;
      t = tmp8(1236).t;
      if (isForumPost) {
        t = t["2LsZdT"];
        let string2Result = string2(t);
      } else {
        string2Result = string2(t["fa/84m"]);
      }
      obj[2] = string2Result;
      obj[3] = function onPress() {
        return patchThreadDefault.leaveThread(channel, "Context Menu");
      };
      callback3(tmp8(6291).TableRow, obj);
    }
  }
  return tmp;
};
prototype["renderForumTags"] = function renderForumTags() {
  const self = this;
  const tmp = callback6(this.context);
  ({ channel, canManageChannels } = this.props);
  if (channel.isForumLikeChannel()) {
    let availableTags = channel.availableTags;
    if (availableTags != null) {
      const everyResult = availableTags.every((item, index) => item.moderated);
    }
    let tmp3 = canManageChannels;
    if (canManageChannels) {
      tmp3 = channel.availableTags.length < MAX_FORUM_TAGS;
    }
    error = self.getError("available_tags");
    let obj = { spacing: null, children: null };
    obj[0] = self(712).space.PX_12;
    obj = { title: null, description: null, hasIcons: false, children: null };
    const intl = canManageChannels(1236).intl;
    obj[0] = intl.string(canManageChannels(1236).t["P/y+sj"]);
    let stringResult;
    if (channel.availableTags.length <= 0) {
      const intl2 = canManageChannels(1236).intl;
      stringResult = intl2.string(canManageChannels(1236).t["3v8kZH"]);
    }
    obj[1] = stringResult;
    obj = { style: null, children: null };
    obj[0] = tmp.tagsWrapper;
    let tmp6Result = null;
    if (channel.availableTags.length > 0) {
      availableTags = channel.availableTags;
      const items = [availableTags.map((item, index) => closure_1_43(self(dependencyMap[86]), { tag: item, onPress: self.handlePressTag, disabled: !canManageChannels }, item.id)), ];
      let tmp10Result = null;
      if (tmp3) {
        obj1 = { style: null, children: null };
        obj1[0] = tmp.addTagIconButtonWrapper;
        const obj2 = { icon: null, size: "sm", onPress: null, accessibilityLabel: null };
        const obj3 = { size: "sm", color: null };
        obj3[1] = self(712).colors.WHITE;
        obj2[0] = callback(canManageChannels(9262).PlusSmallIcon, obj3);
        obj2[2] = function onPress() {
          return self.handlePressTag();
        };
        const intl3 = canManageChannels(1236).intl;
        obj2[3] = intl3.string(canManageChannels(1236).t["/jubeD"]);
        obj1[1] = callback(canManageChannels(8035).IconButton, obj2);
        tmp10Result = callback(View, obj1);
      }
      const obj4 = { children: null };
      items[1] = tmp10Result;
      obj4[0] = items;
      tmp6Result = callback2(closure_45, obj4);
    }
    obj[1] = tmp6Result;
    obj[3] = callback(View, obj);
    const items1 = [callback(canManageChannels(6286).TableRowGroup, obj), , , ];
    tmp10Result = null;
    if (channel.availableTags.length <= 0) {
      const obj5 = { disabled: null, onPress: null, style: null, accessibilityRole: "button", children: null };
      obj5[0] = !canManageChannels;
      obj5[1] = function onPress() {
        return self.handlePressTag();
      };
      obj5[2] = tmp.createTagButton;
      const obj6 = { variant: "text-sm/semibold", color: "text-brand", style: null, children: null };
      obj6[2] = tmp.createTagButtonText;
      const intl4 = canManageChannels(1236).intl;
      obj6[3] = intl4.string(canManageChannels(1236).t.F4is7L);
      obj5[4] = callback(canManageChannels(4734).Text, obj6);
      tmp10Result = callback(canManageChannels(5433).PressableOpacity, obj5);
    }
    items1[1] = tmp10Result;
    let tmp10Result1 = null != error && error.length > 0;
    if (tmp10Result1) {
      const obj7 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
      obj7[2] = error;
      tmp10Result1 = callback(canManageChannels(4734).Text, obj7);
    }
    items1[2] = tmp10Result1;
    let tmp18 = !canManageChannels;
    if (canManageChannels) {
      tmp18 = everyResult;
    }
    const obj8 = { hasIcons: false, children: null };
    const obj9 = { disabled: null, label: null, value: null, onValueChange: null };
    obj9[0] = tmp18;
    const intl5 = canManageChannels(1236).intl;
    obj9[1] = intl5.string(canManageChannels(1236).t.yX24uI);
    obj9[2] = channel.hasFlag(constants8.REQUIRE_TAG);
    obj9[3] = self.handleToggleRequireTag;
    obj8[1] = callback(canManageChannels(7178).TableSwitchRow, obj9);
    items1[3] = callback(canManageChannels(6286).TableRowGroup, obj8);
    obj[1] = items1;
    return callback2(canManageChannels(4733).Stack, obj);
  } else {
    return null;
  }
};
prototype["renderShowMediaDownloadOptions"] = function renderShowMediaDownloadOptions() {
  const props = this.props;
  const channel = props.channel;
  let tmp = null;
  if (channel.isMediaChannel()) {
    const obj = { disabled: null, label: null, subLabel: null, value: null, onValueChange: null };
    obj[0] = !props.canManageChannels;
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t.u8LZOt);
    const intl2 = getSystemLocale.intl;
    obj[2] = intl2.string(getSystemLocale.t.J4wCc7);
    obj[3] = !channel.hasFlag(constants8.HIDE_MEDIA_DOWNLOAD_OPTIONS);
    obj[4] = this.handleToggleShowMediaDownloadOptions;
    obj[1] = callback3(TableSwitchRow.TableSwitchRow, obj);
    tmp = callback3(TableRowGroupTitle.TableRowGroup, obj);
  }
  return tmp;
};
prototype["renderCategory"] = function renderCategory() {
  const self = this;
  const props = this.props;
  ({ category, canManageParent } = props);
  if (props.hasCategories) {
    if (props.channel.type !== constants2.GUILD_CATEGORY) {
      if (null == category) {
        const intl = self(1236).intl;
        let stringResult = intl.string(self(1236).t.GSfOoo);
        let tmp7 = self;
      } else {
        let obj = self(4984);
        stringResult = obj.computeChannelName(category, closure_20, closure_19);
        tmp7 = self;
      }
      obj = { icon: null, label: null, trailing: null, arrow: null, onPress: null };
      obj[0] = callback3(tmp7(15415).FolderPlusIcon, {});
      const intl2 = tmp7(1236).intl;
      obj[1] = intl2.string(tmp7(1236).t.vHCZwr);
      obj = { text: null };
      obj[0] = stringResult;
      obj[2] = callback3(tmp7(6291).TableRow.TrailingText, obj);
      obj[3] = canManageParent;
      let fn;
      if (canManageParent) {
        fn = () => self.pushScreen(closure_1_25.CHANGE_CATEGORY);
      }
      obj1 = { hasIcons: true, children: null };
      obj[4] = fn;
      obj1[1] = callback3(tmp7(6291).TableRow, obj);
      return callback3(tmp7(6286).TableRowGroup, obj1);
    }
  }
  return null;
};
prototype["renderThreadSettings"] = function renderThreadSettings() {
  const obj = { spacing: ThemesDefault.space.PX_24, style: callback6(this.context).stackPadding, children: null };
  const items = [this.renderChannelInfo(), this.renderCommonSettingsSection(), this.renderThreadManagementActions(), this.renderThreadSpoiler(), this.renderSlowmode(), this.renderAutoArchiveDuration(), this.renderInvitable(), this.renderDeleteButton()];
  obj[2] = items;
  obj[0] = callback4(Stack.Stack, obj);
  return callback3(Form.Form, obj);
};
prototype["renderChannelSettings"] = function renderChannelSettings() {
  const obj = { spacing: ThemesDefault.space.PX_24, style: callback6(this.context).stackPadding, children: null };
  const items = [this.renderChannelInfo(), this.renderForumTags(), this.renderCategory(), this.renderPermissions(), this.renderCommonSettingsSection(), this.renderDefaultForumLayout(), this.renderDefaultSortOrder(), this.renderDefaultTagSetting(), this.renderAnnouncement(), this.renderNsfwConfig(), this.renderSlowmode(), this.renderDefaultAutoArchiveDuration(), this.renderBitrateSettings(), this.renderVideoQualityModeSettings(), this.renderUserLimitSettings(), this.renderRegionOverride(), this.renderUncommonSettingsSection(), this.renderShowMediaDownloadOptions(), this.renderDeleteButton()];
  obj[2] = items;
  obj[0] = callback4(Stack.Stack, obj);
  return callback3(Form.Form, obj);
};
prototype["render"] = function render() {
  const self = this;
  if (this.props.isThread) {
    let renderThreadSettingsResult = self.renderThreadSettings();
  } else {
    renderThreadSettingsResult = self.renderChannelSettings();
  }
  const tmp = callback6(this.context);
  return callback3(View, { style: callback6(this.context).screenContainer, children: renderThreadSettingsResult });
};
ChannelSettingsOverview.contextType = require("ManaContext").ThemeContext;
let result = require("obj132").fileFinishedImporting("components_native/channel_settings/ChannelSettingsOverview.tsx");

export default function ConnectedChannelSettingsOverview(arg0) {
  ({ channelId: require, autoFocusElement } = arg0);
  let navigation;
  let obj = require(navigation[92]);
  navigation = obj.useNavigation();
  const items = [closure_13];
  const stateFromStores = require(navigation[24]).useStateFromStores(items, () => closure_1_13.getChannel(closure_0));
  let obj2 = require(navigation[24]);
  const items1 = [closure_12];
  const stateFromStores1 = require(navigation[24]).useStateFromStores(items1, () => channel.getChannel());
  const obj4 = require(navigation[24]);
  const isThreadModerator = require(navigation[67]).useIsThreadModerator(stateFromStores);
  const obj5 = require(navigation[67]);
  const items2 = [closure_6];
  const stateFromStoresObject = require(navigation[24]).useStateFromStoresObject(items2, () => {
    let isMutedResult;
    if (null != stateFromStores) {
      isMutedResult = closure_1_6.isMuted(stateFromStores.id);
    }
    const obj = { isMutedThread: isMutedResult, hasJoinedThread: null };
    let hasJoinedResult;
    if (null != stateFromStores) {
      hasJoinedResult = closure_1_6.hasJoined(stateFromStores.id);
    }
    obj[1] = hasJoinedResult;
    return obj;
  });
  ({ isMutedThread, hasJoinedThread } = stateFromStoresObject);
  const obj6 = require(navigation[24]);
  const canManageThread = require(navigation[67]).useCanManageThread(stateFromStores);
  const obj7 = require(navigation[67]);
  const shouldHideChannelContent = require(navigation[56]).useShouldHideChannelContent(stateFromStores);
  const obj8 = require(navigation[56]);
  const items3 = [closure_12, closure_15, closure_13, closure_20, closure_18, closure_14, closure_16];
  const items4 = [stateFromStores, shouldHideChannelContent];
  const stateFromStoresObject1 = require(navigation[24]).useStateFromStoresObject(items3, () => {
    const props = closure_1_12.getProps();
    ({ submitting, errors } = props);
    let obj = stateFromStores;
    if (null == stateFromStores) {
      obj = { isThread: false, submitting: null, errors: null };
      obj[1] = submitting;
      obj[2] = errors;
      return obj;
    } else {
      const guild = closure_1_15.getGuild(obj.getGuildId());
      const channel = closure_1_13.getChannel(obj.parent_id);
      const currentUser = closure_1_20.getCurrentUser();
      const hasItem = closure_1_10.has(obj.type);
      obj = { isThread: null, guild: null, category: null, hasCategories: null, pinDisabled: null, canManageChannels: null, isChannelOwner: null, canManageParent: null, canManageRoles: null, canSendMessages: null, canManageWebhooks: null, canUnarchiveThread: null, regions: null, submitting: null, errors: null, isNSFWDisabled: null };
      obj[0] = hasItem;
      obj[1] = guild;
      obj[2] = channel;
      const regions = closure_1_18.getRegions(obj.getGuildId());
      obj[3] = closure_1_14.hasCategories(obj.guild_id);
      obj[4] = shouldHideChannelContent;
      obj[5] = closure_1_16.can(closure_1_34.MANAGE_CHANNELS, obj);
      obj[6] = null != currentUser && obj.ownerId === currentUser.id;
      if (null != channel) {
        let canResult = closure_1_16.can(closure_1_34.MANAGE_CHANNELS, channel);
      } else {
        canResult = closure_1_16.can(closure_1_34.MANAGE_CHANNELS, guild);
      }
      obj[7] = canResult;
      obj[8] = closure_1_16.can(closure_1_34.MANAGE_ROLES, obj);
      obj[9] = closure_1_16.can(closure_1_34.SEND_MESSAGES, obj);
      obj[10] = closure_1_8(obj.type) && closure_1_16.can(closure_1_34.MANAGE_WEBHOOKS, obj);
      const tmp4 = closure_1_8(obj.type) && closure_1_16.can(closure_1_34.MANAGE_WEBHOOKS, obj);
      obj[11] = require(navigation[67]).canUnarchiveThread(obj);
      obj[12] = regions;
      obj[13] = submitting;
      obj[14] = errors;
      const obj2 = require(navigation[67]);
      obj[15] = isGuildNSFW(guild) || null != obj.linkedLobby;
      return obj;
    }
  }, items4);
  const ref = shouldHideChannelContent.useRef(null);
  const items5 = [autoFocusElement, navigation];
  const effect = shouldHideChannelContent.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    if (!data.data.closing) {
      if (closure_1 === closure_1_21.CHANNEL_NAME) {
        const current = ref.current;
        let focusResult;
        if (current != null) {
          focusResult = current.focus();
        }
        return focusResult;
      }
    }
  }), items5);
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
    tmp11Result = callback(ChannelSettingsOverview, obj);
  }
  return tmp11Result;
};
export { PinImage };