// discord_app/components_native/channel_settings/ChannelSettingsOverview.tsx
import GuildNSFWContentLevel from "GuildNSFWContentLevel";
import importAllResult from "AbortCodes";
import { View } from "set";
import storeThread from "storeThread";
import createChannelRecord from "createChannelRecord";
import { isGuildNSFW } from "GuildNSFWContentLevel";
import normalizeChannelPropertyForCompare from "normalizeChannelPropertyForCompare";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import initialize from "initialize";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ChannelSettingsAutoFocusElement as closure_21 } from "ChannelSettingsAutoFocusElement";
import ME from "ME";
import set from "set";
import { MAX_FORUM_TAGS } from "FORUM_GUIDELINES_ACTION_SHEET";
import { DEFAULT_AUTO_ARCHIVE_DURATION as closure_42 } from "AbortCodes";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import set from "get ActivityIndicator";

let c10;
let c9;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
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
let closure_43;
let closure_44;
let closure_45;
let error;
let metroImportAll;
let require = arg1;
class PinImage {
  constructor(arg0) {
    channelId = global.channelId;
    tmp = Fragment();
    tmp2 = channelId;
    tmp3 = closure_2;
    obj = require("initialize");
    items = [];
    items[0] = isGuildNSFW;
    tmp4 = undefined;
    if (obj.useStateFromStores(items, () => outer1_17.hasUnreadPins(channelId))) {
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
({ EDITABLE_VOICE_SETTINGS_TYPES: error, isGuildTextChannelType: metroImportAll, THREADED_CHANNEL_TYPES: c9, THREAD_CHANNEL_TYPES: c10 } = createChannelRecord);
({ AnalyticEvents: closure_22, BITRATE_DEFAULT: closure_23, BITRATE_MIN: closure_24, ChannelSettingsSections: closure_25, ChannelTypes: closure_26, ChannelTypesSets: closure_27, GuildFeatures: closure_28, GuildSettingsSections: closure_29, HelpdeskArticles: closure_30, MAX_CHANNEL_NAME_LENGTH: closure_31, MAX_VOICE_USER_LIMIT: closure_32, MAX_STAGE_VOICE_USER_LIMIT: closure_33, Permissions: closure_34, SettingsPaneTypes: closure_35, SLOWMODE_VALUES: closure_36, VideoQualityMode: closure_37 } = ME);
({ ChannelFlags: closure_38, MAX_CHANNEL_TOPIC_LENGTH: closure_39, MAX_FORUM_CHANNEL_TOPIC_LENGTH: closure_40 } = set);
({ jsx: closure_43, jsxs: closure_44, Fragment: closure_45 } = jsxProd);
createCacheKey = { outer: null, badge: null };
createCacheKey = { position: "absolute", top: 2, right: -4, width: 12, height: 12, borderRadius: require("Themes").radii.md, justifyContent: "center", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").unsafe_rawColors.RED_400, width: 8, height: 8, borderRadius: require("Themes").radii.xs };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { screenContainer: null, slider: null, stackPadding: null, alertText: null, tagsWrapper: null, addTagIconButtonWrapper: null, createTagButton: null, createTagButtonText: null };
let obj1 = { backgroundColor: require("Themes").unsafe_rawColors.RED_400, width: 8, height: 8, borderRadius: require("Themes").radii.xs };
obj2[0] = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingTop: require("Themes").space.PX_16 };
obj2[1] = { marginHorizontal: 15 };
createCacheKey = { paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
obj2[2] = createCacheKey;
obj2[3] = { marginTop: 16 };
obj2[4] = { display: "flex", flexDirection: "row", flexWrap: "wrap" };
let obj3 = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingTop: require("Themes").space.PX_16 };
obj2[5] = { justifyContent: "center", margin: require("Themes").space.PX_4 };
let obj5 = { justifyContent: "center", margin: require("Themes").space.PX_4 };
obj2[6] = { backgroundColor: "transparent", paddingHorizontal: 0, marginTop: require("Themes").space.PX_4 };
obj2[7] = { fontFamily: require("sum").Fonts.PRIMARY_SEMIBOLD, fontSize: 14 };
let closure_48 = createCacheKey.createLegacyClassComponentStyles(obj2);
const PureComponent = importAllResult.PureComponent;
class ChannelSettingsOverview extends PureComponent {
  constructor(arg0) {
    tmp = new tmp(global, tmp4, tmp3, tmp2);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp;
    obj = require("apply");
    tmp._cooldown = obj.findIndex(SLOWMODE_VALUES, (arg0) => arg0 >= tmp.props.channel.rateLimitPerUser);
    tmp.state = { hasChanges: false };
    tmp.pushScreen = function pushScreen(INSTANT_INVITES, arg1) {
      const items = [...arguments];
      const navigation = tmp.props.navigation;
      const items1 = [...items];
      navigation.push.apply(items1);
      if (items[0] !== outer1_25.PERMISSIONS) {
        let obj = outer1_1(outer1_2[29]);
        obj = { settings_type: "channel", origin_pane: null, destination_pane: null };
        obj[1] = outer1_35.CHANNEL_SETTINGS;
        obj[2] = items[0];
        obj.trackWithMetadata(outer1_22.SETTINGS_PANE_VIEWED, obj);
      }
    };
    tmp.handleSave = function handleSave() {
      let threadMetadata;
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
        const obj2 = outer1_1(outer1_2[33]);
        outer1_1(outer1_2[33]).saveChannel(channel.id, obj).then((status) => {
          if (200 === status.status) {
            let navigation = outer2_1(outer2_2[34]).open;
            let goBackResult = { key: "THREAD_SETTINGS_UPDATED", icon: null, content: null };
            goBackResult[1] = outer2_1(outer2_2[35]);
            const tmp6 = outer2_1(outer2_2[34]);
            const intl = channel(outer2_2[30]).intl;
            const string = intl.string;
            let n2Y84J = channel(outer2_2[30]).t;
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
        const saveChannelResult = outer1_1(outer1_2[33]).saveChannel(channel.id, obj);
      }
    };
    tmp.handleChangeName = function handleChangeName(arg0) {
      const channel = tmp.props.channel;
      if (channel.isThread()) {
        let result = outer1_1(outer1_2[36])(arg0, false);
      } else {
        const LIMITED_CHANNEL_NAME = outer1_27.LIMITED_CHANNEL_NAME;
        result = arg0;
        if (LIMITED_CHANNEL_NAME.has(channel.type)) {
          result = tmp(outer1_2[37]).sanitizeGuildTextChannelName(arg0);
          const obj2 = tmp(outer1_2[37]);
        }
      }
      outer1_1(outer1_2[33]).updateChannel({ name: result });
      tmp.setState({ hasChanges: true });
    };
    tmp.handleBlurName = function handleBlurName() {
      let obj = tmp;
      const channel = tmp.props.channel;
      if (channel.isThread()) {
        const tmp3 = outer1_1(outer1_2[36])(channel.name, true);
        if (tmp3 !== channel.name) {
          obj = { name: null };
          obj[0] = tmp3;
          tmp(tmp2[33]).updateChannel(obj);
          obj.setState({ hasChanges: true });
          const tmpResult = tmp(tmp2[33]);
        }
        tmp2 = outer1_2;
      }
    };
    tmp.handleChangeTopic = function handleChangeTopic(emojiName) {
      let obj = outer1_1(outer1_2[33]);
      obj = { topic: null };
      obj[0] = outer1_1(outer1_2[38]).translateInlineEmojiToSurrogates(emojiName);
      obj.updateChannel(obj);
      tmp.setState({ hasChanges: true });
    };
    tmp.handleBitRateChange = function handleBitRateChange(arg0) {
      let obj = outer1_1(outer1_2[33]);
      obj = { bitrate: Math.round(arg0) };
      obj.updateChannel(obj);
      tmp.setState({ hasChanges: true });
    };
    tmp.handleVideoQualityModeChange = function handleVideoQualityModeChange(videoQualityMode) {
      let obj = outer1_1(outer1_2[33]);
      obj = { videoQualityMode };
      obj.updateChannel(obj);
      tmp.setState({ hasChanges: true });
    };
    tmp.handleNsfwChange = function handleNsfwChange(nsfw) {
      let obj = outer1_1(outer1_2[33]);
      obj = { nsfw };
      obj.updateChannel(obj);
      tmp.setState({ hasChanges: true });
    };
    tmp.handleThreadSpoilerChange = function handleThreadSpoilerChange(arg0) {
      const obj = tmp(outer1_2[39]);
      const setFlagResult = tmp(outer1_2[39]).setFlag(tmp.props.channel.flags, outer1_38.IS_SPOILER_CHANNEL, arg0);
      outer1_1(outer1_2[33]).updateChannel({ flags: setFlagResult });
      tmp.setState({ hasChanges: true });
    };
    tmp.handleSlowmodeChange = function handleSlowmodeChange(arg0) {
      let hasChanges = tmp.state.hasChanges;
      const tmp2 = outer1_36[Math.round(Math, arg0)];
      outer1_1(outer1_2[33]).updateChannel({ rateLimitPerUser: tmp2 });
      const AccessibilityAnnouncer = tmp(outer1_2[40]).AccessibilityAnnouncer;
      const obj = outer1_1(outer1_2[33]);
      const intl = tmp(outer1_2[30]).intl;
      AccessibilityAnnouncer.announce(tmp(outer1_2[41]).getSecondsSliderLabel(tmp2, false, intl.string(tmp(outer1_2[30]).t.zvDu4h)));
      if (!hasChanges) {
        hasChanges = tmp.props.channel.rateLimitPerUser !== tmp2;
      }
      tmp.setState({ hasChanges });
    };
    tmp.handleDefaultAutoArchiveDurationChange = function handleDefaultAutoArchiveDurationChange(defaultAutoArchiveDuration) {
      let obj = outer1_1(outer1_2[33]);
      obj = { defaultAutoArchiveDuration };
      obj.updateChannel(obj);
      tmp.setState({ hasChanges: true });
    };
    tmp.handleAutoArchiveDurationChange = function handleAutoArchiveDurationChange(autoArchiveDuration) {
      let obj = outer1_1(outer1_2[33]);
      obj = { autoArchiveDuration };
      obj.updateChannel(obj);
      tmp.setState({ hasChanges: true });
    };
    tmp.handleDefaultSortOrderChange = function handleDefaultSortOrderChange(defaultSortOrder) {
      let obj = outer1_1(outer1_2[33]);
      obj = { defaultSortOrder };
      obj.updateChannel(obj);
      tmp.setState({ hasChanges: true });
    };
    tmp.handleDefaultTagSettingChange = function handleDefaultTagSettingChange(defaultTagSetting) {
      let obj = outer1_1(outer1_2[33]);
      obj = { defaultTagSetting };
      obj.updateChannel(obj);
      tmp.setState({ hasChanges: true });
    };
    tmp.handleInvitableChange = function handleInvitableChange(invitable) {
      let obj = outer1_1(outer1_2[33]);
      obj = { invitable };
      obj.updateChannel(obj);
      tmp.setState({ hasChanges: true });
    };
    tmp.handleAnnouncementChange = function handleAnnouncementChange(arg0) {
      let obj = outer1_1(outer1_2[33]);
      obj = { type: arg0 ? tmp.GUILD_TEXT : tmp.GUILD_ANNOUNCEMENT };
      obj.updateChannel(obj);
      outer1_26.setState({ hasChanges: true });
    };
    tmp.handleActiveChannelsRemovedChange = function handleActiveChannelsRemovedChange(arg0) {
      const obj = tmp(outer1_2[39]);
      const setFlagResult = tmp(outer1_2[39]).setFlag(tmp.props.channel.flags, outer1_38.ACTIVE_CHANNELS_REMOVED, !arg0);
      outer1_1(outer1_2[33]).updateChannel({ flags: setFlagResult });
      tmp.setState({ hasChanges: true });
    };
    tmp.handleUserLimitChange = function handleUserLimitChange(arg0) {
      let obj = outer1_1(outer1_2[33]);
      obj = { userLimit: Math.round(arg0) };
      obj.updateChannel(obj);
      tmp.setState({ hasChanges: true });
    };
    closure_0 = tmp;
    tmp.handleDeleteChannel = GuildNSFWContentLevel(function*() {
      if (c3 === 2) {
        c3 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp3;
        if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
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
                let closure_0 = tmp2;
                closure_0 = undefined;
                channel = undefined;
                guild = undefined;
                c3 = undefined;
                let closure_4;
                let c5;
                throwTypeErrorResult = outer1_48;
                throwTypeErrorResult = outer1_0;
                closure_0 = outer1_48(outer1_0.context);
                throwTypeErrorResult = outer1_0;
                channel = outer1_0.props.channel;
                throwTypeErrorResult = outer1_15;
                guild = outer1_15.getGuild(channel.getGuildId());
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = guild;
                guild = 1;
                c3 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_0(guild[42]).isDefaultChannelThresholdMetAfterDelete(channel.getGuildId(), channel.id);
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
              throwTypeErrorResult = closure_0;
              c3 = arg1;
              throwTypeErrorResult = guild;
              if (null != guild) {
                throwTypeErrorResult = closure_0;
                throwTypeErrorResult = channel;
                throwTypeErrorResult = guild;
                const features = guild.features;
                throwTypeErrorResult = outer1_28;
                if (features.has(outer1_28.COMMUNITY)) {
                  if (guild.rulesChannelId === outer1_1.id) {
                    if (guild.rulesChannelId === outer1_1.id) {
                      const intl2 = outer1_0(guild[30]).intl;
                      let stringResult = intl2.string(outer1_0(guild[30]).t.yjrZPl);
                    } else {
                      const intl = outer1_0(guild[30]).intl;
                      stringResult = intl.string(outer1_0(guild[30]).t["1B1/NB"]);
                    }
                    c5 = stringResult;
                    obj = outer1_1(guild[43]);
                    const obj3 = { title: null, confirmText: null, children: null };
                    const intl3 = outer1_0(guild[30]).intl;
                    obj3[0] = intl3.string(outer1_0(guild[30]).t["TY/V+H"]);
                    const intl4 = outer1_0(guild[30]).intl;
                    obj3[1] = intl4.string(outer1_0(guild[30]).t.BddRzS);
                    const obj4 = { children: null };
                    const obj5 = { style: null, variant: "text-md/medium", children: null };
                    obj5[0] = closure_0.alertText;
                    obj5[2] = c5;
                    const items = [outer1_43(outer1_0(guild[44]).Text, obj5), ];
                    let obj6 = { style: null, variant: "text-md/medium", children: null };
                    obj6[0] = closure_0.alertText;
                    const intl5 = outer1_0(guild[30]).intl;
                    const obj7 = { onClick: null };
                    obj7[0] = function onClick() {
                      channel(user[43]).close();
                      const obj = channel(user[43]);
                      channel(user[33]).close();
                      const obj2 = channel(user[33]);
                      channel(user[45]).open(user.id, outer1_29.COMMUNITY);
                    };
                    obj6[2] = intl5.format(outer1_0(guild[30]).t.LAJbDm, obj7);
                    items[1] = outer1_43(outer1_0(guild[44]).Text, obj6);
                    obj4[0] = items;
                    obj3[2] = outer1_44(outer1_45, obj4);
                    obj.show(obj3);
                    c3 = 3;
                  }
                }
              }
              if (null != guild) {
                throwTypeErrorResult = closure_0;
                throwTypeErrorResult = c3;
                if (!c3) {
                  obj6 = outer1_1(guild[43]);
                  const obj8 = { title: null, confirmText: null, children: null };
                  const intl6 = outer1_0(guild[30]).intl;
                  obj8[0] = intl6.string(outer1_0(guild[30]).t["TY/V+H"]);
                  const intl7 = outer1_0(guild[30]).intl;
                  obj8[1] = intl7.string(outer1_0(guild[30]).t.BddRzS);
                  const obj9 = { children: null };
                  const obj10 = { style: null, variant: "text-md/medium", children: null };
                  obj10[0] = closure_0.alertText;
                  const intl8 = outer1_0(guild[30]).intl;
                  obj10[2] = intl8.string(outer1_0(guild[30]).t.iWlB6h);
                  const items1 = [outer1_43(outer1_0(guild[44]).Text, obj10), ];
                  const obj11 = { style: null, variant: "text-md/medium", children: null };
                  obj11[0] = closure_0.alertText;
                  const intl9 = outer1_0(guild[30]).intl;
                  let obj12 = { onClick: null };
                  obj12[0] = function onClick() {
                    channel(user[43]).close();
                    const obj = channel(user[43]);
                    channel(user[33]).close();
                    const obj2 = channel(user[33]);
                    channel(user[45]).open(user.id, outer1_29.ONBOARDING);
                  };
                  obj11[2] = intl9.format(outer1_0(guild[30]).t.ajiBwB, obj12);
                  items1[1] = outer1_43(outer1_0(guild[44]).Text, obj11);
                  obj9[0] = items1;
                  obj8[2] = outer1_44(outer1_45, obj9);
                  obj6.show(obj8);
                }
              }
              obj12 = outer1_0(guild[46]);
              closure_4 = obj12.computeChannelName(channel, outer1_20, outer1_19, true);
              let obj13 = outer1_1(guild[43]);
              if (outer1_0.props.isForumPost) {
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = guild;
                const intl11 = outer1_0(guild[30]).intl;
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = guild;
                throwTypeErrorResult = intl11.string(outer1_0(guild[30]).t.nEOg1N);
              } else {
                throwTypeErrorResult = channel;
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = guild;
                const intl10 = outer1_0(guild[30]).intl;
                const string = intl10.string;
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = guild;
                const t = outer1_0(guild[30]).t;
                if (outer1_0.props.isThread) {
                  throwTypeErrorResult = string(t.H7vTe2);
                } else {
                  throwTypeErrorResult = string(t["8D8Rsb"]);
                }
              }
              obj13 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
              throwTypeErrorResult = closure_0;
              throwTypeErrorResult = channel;
              obj13[0] = throwTypeErrorResult;
              throwTypeErrorResult = outer1_0;
              throwTypeErrorResult = guild;
              const intl12 = outer1_0(guild[30]).intl;
              throwTypeErrorResult = outer1_0;
              throwTypeErrorResult = guild;
              const obj14 = { channelName: null };
              throwTypeErrorResult = closure_4;
              obj14[0] = closure_4;
              obj13[1] = intl12.format(outer1_0(guild[30]).t.a6Gz9J, obj14);
              throwTypeErrorResult = outer1_0;
              throwTypeErrorResult = guild;
              const intl13 = outer1_0(guild[30]).intl;
              throwTypeErrorResult = outer1_0;
              throwTypeErrorResult = guild;
              obj13[2] = intl13.string(outer1_0(guild[30]).t.gm1Vej);
              throwTypeErrorResult = outer1_0;
              throwTypeErrorResult = guild;
              const intl14 = outer1_0(guild[30]).intl;
              throwTypeErrorResult = outer1_0;
              throwTypeErrorResult = guild;
              obj13[3] = intl14.string(outer1_0(guild[30]).t.p89ACt);
              throwTypeErrorResult = outer1_0;
              obj13[4] = outer1_0.handleConfirmDeleteChannel;
              throwTypeErrorResult = outer1_1;
              throwTypeErrorResult = guild;
              obj13[5] = outer1_1(guild[47]).Colors.RED;
              throwTypeErrorResult = obj13.show(obj13);
            }
          } catch (throwTypeErrorResult) {
            c3 = throwTypeErrorResult;
            throw throwTypeErrorResult;
          }
        }
      }
    });
    closure_0 = tmp;
    tmp.handleConfirmDeleteChannel = GuildNSFWContentLevel(function*() {
      let closure_2 = tmp3;
      let c4 = 1;
      yield outer1_1(outer1_2[33]).deleteChannel(outer1_0.props.channel.id);
      if (1 === tmp7) {
        c4 = 0;
        closure_2 = GuildNSFWContentLevel;
        const aPIError = new outer1_0(outer1_2[49]).APIError(closure_2);
        const anyErrorMessage = aPIError.getAnyErrorMessage();
        let navigation = anyErrorMessage;
        if (anyErrorMessage == null) {
          const intl = outer1_0(outer1_2[30]).intl;
          navigation = intl.string(outer1_0(outer1_2[30]).t.CKsXk3);
        }
        const obj2 = { key: "CHANNEL_SETTINGS_DELETE_CHANNEL_ERROR", content: null };
        obj2[1] = navigation;
        outer1_1(outer1_2[34]).open(obj2);
        let c6 = 3;
        const obj5 = outer1_1(outer1_2[34]);
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = outer1_0(outer1_2[48]);
        navigation = obj.getRootNavigationRef();
        const obj1 = navigation;
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
      tmp.pushScreen(outer1_25.EDIT_FORUM_TAG, { tag });
    };
    tmp.handleToggleRequireTag = function handleToggleRequireTag() {
      let obj = tmp;
      if (tmp.props.canManageChannels) {
        const channel = obj.props.channel;
        const hasFlagResult = channel.hasFlag(outer1_38.REQUIRE_TAG);
        const obj2 = outer1_38(outer1_2[39]);
        const setFlagResult = outer1_38(outer1_2[39]).setFlag(obj.props.channel.flags, outer1_38.REQUIRE_TAG, !hasFlagResult);
        obj = { flags: null };
        obj[0] = setFlagResult;
        outer1_1(outer1_2[33]).updateChannel(obj);
        obj.setState({ hasChanges: true });
        const obj3 = outer1_1(outer1_2[33]);
      }
    };
    tmp.handleToggleShowMediaDownloadOptions = function handleToggleShowMediaDownloadOptions() {
      let obj = tmp;
      if (tmp.props.canManageChannels) {
        const channel = obj.props.channel;
        const hasFlagResult = channel.hasFlag(outer1_38.HIDE_MEDIA_DOWNLOAD_OPTIONS);
        const obj2 = outer1_38(outer1_2[39]);
        const setFlagResult = outer1_38(outer1_2[39]).setFlag(obj.props.channel.flags, outer1_38.HIDE_MEDIA_DOWNLOAD_OPTIONS, !hasFlagResult);
        obj = { flags: null };
        obj[0] = setFlagResult;
        outer1_1(outer1_2[33]).updateChannel(obj);
        obj.setState({ hasChanges: true });
        const obj3 = outer1_1(outer1_2[33]);
      }
    };
    tmp.getError = function getError(arg0) {
      const errors = tmp.props.errors;
      tmp = undefined;
      if (errors != null) {
        tmp = errors[arg0];
      }
      return tmp;
    };
    tmp.state.hasChanges = isGuildNSFW.hasChanges();
    return tmp;
  }
}
const prototype = ChannelSettingsOverview.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  this.updateNavigation(undefined, this.state);
  if (tmp2) {
    let obj = importDefault(15759);
    const regions = obj.fetchRegions(self.props.guild.id);
  }
  obj = { settings_type: "channel", destination_pane: constants6.CHANNEL_SETTINGS };
  importDefault(4479).trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
};
prototype["componentDidUpdate"] = function componentDidUpdate(arg0, arg1) {
  this.updateNavigation(arg0, arg1);
};
prototype["updateNavigation"] = function updateNavigation(submitting, hasChanges) {
  let isThread;
  let navigation;
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
      let tmp11 = tmp9;
      let tmp12 = tmp8;
    } else {
      stringResult = string(BsJrhj.d4n5Q1);
      tmp11 = tmp9;
      tmp12 = tmp8;
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
      let fn = tmp3(5238).HeaderSubmittingIndicator;
    } else {
      fn = (arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.onPress = self.handleSave;
        const intl = hasChanges(outer1_2[30]).intl;
        obj.label = intl.string(hasChanges(outer1_2[30]).t["R3BPH+"]);
        obj.disabled = !hasChanges;
        return outer1_43(hasChanges(outer1_2[32]).HeaderTextButton, obj);
      };
    }
    let obj = { headerRight: null, title: null };
    obj[0] = fn;
    obj[1] = stringResult1;
    navigation.setOptions(obj);
  }
};
prototype["renderChannelInfo"] = function renderChannelInfo() {
  let canManageChannels;
  let canManageThread;
  let canSendMessages;
  let channel;
  let isChannelOwner;
  let isForumPost;
  let isThread;
  const self = this;
  const props = this.props;
  ({ channel, canManageChannels, isThread } = props);
  ({ canManageThread, canSendMessages, isChannelOwner, isForumPost } = props);
  let hasItem = callback2(channel.type) && !isThread;
  if (!hasItem) {
    const GUILD_THREADS_ONLY = constants3.GUILD_THREADS_ONLY;
    hasItem = GUILD_THREADS_ONLY.has(channel.type);
  }
  let obj = require(15761) /* getIsChannelNameSettingEditable */;
  const isChannelNameSettingEditable = obj.getIsChannelNameSettingEditable({ canManageThread, canManageChannels, canSendMessages, isForumPost, isThread, isChannelOwner });
  if (channel.isForumPost()) {
    const intl4 = tmp3(1236).intl;
    let stringResult = intl4.string(tmp3(1236).t.uyVrTN);
  } else if (isThread) {
    const intl3 = tmp3(1236).intl;
    stringResult = intl3.string(tmp3(1236).t.j3XWjD);
  } else if (channel.type === constants2.GUILD_CATEGORY) {
    const intl2 = tmp3(1236).intl;
    stringResult = intl2.string(tmp3(1236).t.OCAkGP);
  } else {
    const intl = tmp3(1236).intl;
    stringResult = intl.string(tmp3(1236).t.PVbHDl);
  }
  obj = { ref: self.props.channelNameRef, label: stringResult, accessibilityLabel: stringResult, value: null, onChange: null, onBlur: null, isDisabled: null, maxLength: null, errorMessage: null, enableAndroidSanitizedInputWorkaround: true };
  const TextInput = tmp3(7713).TextInput;
  obj[3] = require(4475) /* computeChannelName */.computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
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
    const intl5 = tmp3(1236).intl;
    const string = intl5.string;
    const t = tmp3(1236).t;
    if (isForumLikeChannelResult) {
      let stringResult1 = string(t.yR6HwZ);
    } else {
      stringResult1 = string(t.X8jMDh);
    }
    const obj1 = { label: null, accessibilityLabel: null, value: null, onChange: null, isDisabled: null, autoCorrect: true, maxLength: null, errorMessage: null };
    obj1[0] = stringResult1;
    obj1[1] = stringResult1;
    isForumLikeChannelResult = channel.isForumLikeChannel();
    obj1[2] = importDefault(3926).translateSurrogatesToInlineEmoji(channel.topic);
    obj1[3] = self.handleChangeTopic;
    obj1[4] = !canManageChannels;
    obj1[6] = channel.isForumLikeChannel() ? closure_40 : closure_39;
    obj1[7] = self.getError("topic");
    closure_43(tmp3(7786).TextArea, obj1);
    const obj5 = importDefault(3926);
  }
};
prototype["renderNsfwConfig"] = function renderNsfwConfig() {
  const channel = this.props.channel;
  let tmp7Result = null;
  if (channel.type === constants2.GUILD_TEXT) {
    tmp7Result = null;
    if (tmp2) {
      let obj = require(500) /* set */;
      tmp7Result = null;
      if (!obj.isIOS()) {
        obj = { helperText: null, hasIcons: false, children: null };
        const intl = tmp5(1236).intl;
        obj[0] = intl.string(tmp5(1236).t["9eUgwR"]);
        obj = { label: null, value: null, onValueChange: null, disabled: null, subLabel: null };
        const intl2 = tmp5(1236).intl;
        obj[0] = intl2.string(tmp5(1236).t.Es25Yf);
        obj[1] = tmp5(4498).isChannelOrGuildNSFW(channel);
        obj[2] = tmp.handleNsfwChange;
        obj[3] = tmp3;
        let stringResult;
        if (null != channel.linkedLobby) {
          const intl3 = tmp5(1236).intl;
          stringResult = intl3.string(tmp5(1236).t.l6uSVa);
        }
        obj[4] = stringResult;
        obj[2] = closure_43(tmp5(5650).TableSwitchRow, obj);
        tmp7Result = tmp7(tmp5(5649).TableRowGroup, obj, "nsfw-section");
        const tmp5Result = tmp5(4498);
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
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t.ddWXHa);
    obj = { label: null, value: null, onValueChange: null, disabled: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl2.string(require(1236) /* getSystemLocale */.t.TvUHTb);
    obj[1] = channel.isSpoilerChannel();
    obj[2] = this.handleThreadSpoilerChange;
    obj[3] = !props.canManageThread;
    obj[2] = callback3(require(5650) /* TableSwitchRow */.TableSwitchRow, obj);
    tmp = callback3(require(5649) /* TableRowGroupTitle */.TableRowGroup, obj, "thread-spoiler-section");
  }
  return tmp;
};
prototype["renderSlowmode"] = function renderSlowmode() {
  const self = this;
  const channel = this.props.channel;
  if (channel.type !== constants2.GUILD_TEXT) {
    return null;
  }
  let obj = require(15760) /* getSecondsSliderLabel */;
  const intl = require(1236) /* getSystemLocale */.intl;
  const secondsSliderLabel = obj.getSecondsSliderLabel(channel.rateLimitPerUser, false, intl.string(require(1236) /* getSystemLocale */.t.zvDu4h));
  if (channel.isForumLikeChannel()) {
    const intl3 = tmp5(1236).intl;
    let stringResult = intl3.string(tmp5(1236).t["a+1pdO"]);
  } else {
    const intl2 = tmp5(1236).intl;
    const string = intl2.string;
    const t = tmp5(1236).t;
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
  const obj1 = { style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }, children: null };
  const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: { flexShrink: 1 }, children: null };
  const intl4 = tmp5(1236).intl;
  obj2[3] = intl4.string(require(1236) /* getSystemLocale */.t.piZgKF);
  const items1 = [callback3(require(4281) /* Text */.Text, obj2), callback3(require(4281) /* Text */.Text, { variant: "text-md/medium", color: "text-muted", children: secondsSliderLabel })];
  obj1[1] = items1;
  const items2 = [callback4(View, obj1), ];
  const obj3 = { style: items3, value: self._cooldown, minimumValue: 0, maximumValue: length.length - 1, onValueChange: self.handleSlowmodeChange, accessibilityLabel: null, accessibilityValue: null };
  items3 = [callback5(this.context).slider, { marginStart: -4, marginTop: 8 }];
  const intl5 = tmp5(1236).intl;
  obj3[5] = intl5.string(require(1236) /* getSystemLocale */.t.piZgKF);
  obj3[6] = { text: secondsSliderLabel };
  items2[1] = callback3(require(13336) /* Slider */.Slider, obj3);
  obj[1] = items2;
  obj[2] = callback4(require(5317) /* PressableCard */.Card, obj);
  items.push(callback3(require(5649) /* TableRowGroupTitle */.TableRowGroup, obj, "slowmode-section"));
  return items;
};
prototype["renderAutoArchiveDuration"] = function renderAutoArchiveDuration() {
  let canManageThread;
  let isForumPost;
  const props = this.props;
  const channel = props.channel;
  ({ canManageThread, isForumPost } = props);
  if (channel.isThread()) {
    if (canManageThread) {
      const intl = require(1236) /* getSystemLocale */.intl;
      const string = intl.string;
      const t = require(1236) /* getSystemLocale */.t;
      if (isForumPost) {
        let stringResult = string(t["3aJN9M"]);
        let tmp5 = tmp;
      } else {
        stringResult = string(t.YUXr4Z);
        tmp5 = tmp;
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
      return closure_43(tmp5(15762).AutoArchiveDurationOptions, obj);
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
      const intl = require(1236) /* getSystemLocale */.intl;
      obj[0] = intl.string(require(1236) /* getSystemLocale */.t.cSyXJk);
      obj = { disabled: null, label: null, value: null, onValueChange: null };
      obj[0] = !tmp2;
      const intl2 = require(1236) /* getSystemLocale */.intl;
      obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.s2rpNf);
      obj[2] = channel.threadMetadata.invitable;
      obj[3] = tmp.handleInvitableChange;
      obj[2] = callback3(require(5650) /* TableSwitchRow */.TableSwitchRow, obj);
      tmp3 = callback3(require(5649) /* TableRowGroupTitle */.TableRowGroup, obj, "thread-invitable-section");
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
      const intl = require(1236) /* getSystemLocale */.intl;
      obj[0] = intl.string(require(1236) /* getSystemLocale */.t.FGjMZS);
      obj[1] = require(8167) /* getAutoArchiveOptions */.getAutoArchiveDuration(channel, null);
      obj[2] = channel;
      obj[3] = this.handleDefaultAutoArchiveDurationChange;
      const obj2 = require(8167) /* getAutoArchiveOptions */;
      const tmp2 = closure_43;
      const intl2 = require(1236) /* getSystemLocale */.intl;
      const string = intl2.string;
      let fyXclY = require(1236) /* getSystemLocale */.t;
      if (isForumLikeChannelResult) {
        fyXclY = fyXclY.fyXclY;
        let stringResult = string(fyXclY);
      } else {
        stringResult = string(fyXclY.W3Noi9);
      }
      obj[4] = stringResult;
      tmp2(require(15762) /* AutoArchiveDurationOptions */.AutoArchiveDurationOptions, obj);
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
      const intl = require(1236) /* getSystemLocale */.intl;
      obj[0] = intl.string(require(1236) /* getSystemLocale */.t.gePre2);
      const intl2 = require(1236) /* getSystemLocale */.intl;
      obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["165cVX"]);
      obj[2] = defaultSortOrder;
      obj[3] = this.handleDefaultSortOrderChange;
      obj = { label: null, value: null };
      const intl3 = require(1236) /* getSystemLocale */.intl;
      obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.ElZtzj);
      obj[1] = require(1381) /* set */.ThreadSortOrder.LATEST_ACTIVITY;
      const items = [callback3(require(7794) /* TableRadioRow */.TableRadioRow, obj), ];
      obj = { label: null, value: null };
      const intl4 = require(1236) /* getSystemLocale */.intl;
      obj[0] = intl4.string(require(1236) /* getSystemLocale */.t.w28f3F);
      obj[1] = require(1381) /* set */.ThreadSortOrder.CREATION_DATE;
      items[1] = callback3(require(7794) /* TableRadioRow */.TableRadioRow, obj);
      obj[5] = items;
      return callback4(require(7795) /* context */.TableRadioGroup, obj);
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
      const intl = require(1236) /* getSystemLocale */.intl;
      obj[0] = intl.string(require(1236) /* getSystemLocale */.t.Paxaug);
      const intl2 = require(1236) /* getSystemLocale */.intl;
      obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.DqOl8J);
      obj[2] = defaultTagSetting;
      obj[3] = this.handleDefaultTagSettingChange;
      obj = { label: null, value: null };
      const intl3 = require(1236) /* getSystemLocale */.intl;
      obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.rQ0ctQ);
      obj[1] = require(1383) /* set */.ThreadSearchTagSetting.MATCH_SOME;
      const items = [callback3(require(7794) /* TableRadioRow */.TableRadioRow, obj), ];
      obj = { label: null, value: null };
      const intl4 = require(1236) /* getSystemLocale */.intl;
      obj[0] = intl4.string(require(1236) /* getSystemLocale */.t.FCXUu0);
      obj[1] = require(1383) /* set */.ThreadSearchTagSetting.MATCH_ALL;
      items[1] = callback3(require(7794) /* TableRadioRow */.TableRadioRow, obj);
      obj[5] = items;
      return callback4(require(7795) /* context */.TableRadioGroup, obj);
    }
  }
  return null;
};
prototype["renderAnnouncement"] = function renderAnnouncement() {
  let channel;
  let guild;
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
            let obj = { description: null, hasIcons: false, children: null };
            obj = { children: null };
            const intl = require(1236) /* getSystemLocale */.intl;
            obj = { documentationLink: null };
            obj[0] = importDefault(1945).getArticleURL(constants5.ANNOUNCEMENT_CHANNELS);
            const items1 = [intl.format(require(1236) /* getSystemLocale */.t.tI7KNX, obj), "\n\n", ];
            const intl2 = require(1236) /* getSystemLocale */.intl;
            items1[2] = intl2.string(require(1236) /* getSystemLocale */.t["2Ab4Id"]);
            obj[0] = items1;
            obj[0] = callback4(closure_45, obj);
            const obj1 = { disabled: null, label: null, value: null, onValueChange: null };
            obj1[0] = !props.canManageChannels;
            const intl3 = require(1236) /* getSystemLocale */.intl;
            obj1[1] = intl3.string(require(1236) /* getSystemLocale */.t.Au2b7m);
            obj1[2] = channel.type === constants2.GUILD_ANNOUNCEMENT;
            const handleAnnouncementChange = self.handleAnnouncementChange;
            obj1[3] = handleAnnouncementChange.bind(self, channel.type === constants2.GUILD_ANNOUNCEMENT);
            obj[2] = callback3(require(5650) /* TableSwitchRow */.TableSwitchRow, obj1);
            items.push(callback3(require(5649) /* TableRowGroupTitle */.TableRowGroup, obj, "announcement-section"));
            return items;
          }
        }
      }
    }
  }
  return null;
};
prototype["renderBitrateSettings"] = function renderBitrateSettings() {
  let canManageChannels;
  let guild;
  const props = this.props;
  const channel = props.channel;
  ({ canManageChannels, guild } = props);
  if (this.showVoiceSettings()) {
    if (canManageChannels) {
      const items = [];
      let obj = require(4467) /* allowChannelAccess */;
      const bitrateLimit = obj.getBitrateLimit(guild, channel);
      obj = { description: null, hasIcons: false, children: null };
      const intl = require(1236) /* getSystemLocale */.intl;
      obj = { bitrate: null };
      obj[0] = closure_23 / 1000;
      obj[0] = intl.format(require(1236) /* getSystemLocale */.t.SbQJk5, obj);
      const obj1 = { children: null };
      const obj2 = { style: null, children: null };
      obj2[0] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" };
      const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: null, children: null };
      obj3[2] = { flexShrink: 1 };
      const intl2 = require(1236) /* getSystemLocale */.intl;
      obj3[3] = intl2.string(require(1236) /* getSystemLocale */.t.w2d0vU);
      const items1 = [callback3(require(4281) /* Text */.Text, obj3), ];
      const obj4 = { variant: "text-md/medium", color: "text-muted", children: null };
      const _Math = Math;
      const _HermesInternal = HermesInternal;
      obj4[2] = "" + Math.round(channel.bitrate / 1000) + "kbps";
      items1[1] = callback3(require(4281) /* Text */.Text, obj4);
      obj2[1] = items1;
      const items2 = [callback4(View, obj2), ];
      const obj5 = { style: null, value: null, minimumValue: null, maximumValue: null, onValueChange: null };
      obj5[0] = tmp.slider;
      const _Math2 = Math;
      obj5[1] = Math.min(channel.bitrate, bitrateLimit);
      obj5[2] = closure_24;
      obj5[3] = bitrateLimit;
      obj5[4] = this.handleBitRateChange;
      items2[1] = callback3(require(13336) /* Slider */.Slider, obj5);
      obj1[0] = items2;
      obj[2] = callback4(require(5317) /* PressableCard */.Card, obj1);
      items.push(callback3(require(5649) /* TableRowGroupTitle */.TableRowGroup, obj, "bitrate-section"));
      return items;
    }
  }
  return null;
};
prototype["renderVideoQualityModeSettings"] = function renderVideoQualityModeSettings() {
  let canManageChannels;
  let channel;
  ({ channel, canManageChannels } = this.props);
  if (this.showVoiceSettings()) {
    if (canManageChannels) {
      const items = [];
      let obj = { title: null, description: null, value: null, onChange: null, hasIcons: false, children: null };
      const intl = require(1236) /* getSystemLocale */.intl;
      obj[0] = intl.string(require(1236) /* getSystemLocale */.t.jhJEJs);
      const intl2 = require(1236) /* getSystemLocale */.intl;
      obj[1] = intl2.format(require(1236) /* getSystemLocale */.t.c5W7Ss, {});
      let AUTO = channel.videoQualityMode;
      if (AUTO == null) {
        AUTO = constants7.AUTO;
      }
      obj[2] = AUTO;
      obj[3] = this.handleVideoQualityModeChange;
      obj = { label: null, value: null };
      const intl3 = tmp2(1236).intl;
      obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.jjKYpu);
      obj[1] = constants7.AUTO;
      const items1 = [callback3(require(7794) /* TableRadioRow */.TableRadioRow, obj), ];
      obj = { label: null, value: null };
      const intl4 = tmp2(1236).intl;
      obj[0] = intl4.string(require(1236) /* getSystemLocale */.t["7jOoJE"]);
      obj[1] = constants7.FULL;
      items1[1] = callback3(require(7794) /* TableRadioRow */.TableRadioRow, obj);
      obj[5] = items1;
      items.push(closure_44(require(7795) /* context */.TableRadioGroup, obj, "video-quality-section"));
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
        const intl2 = require(1236) /* getSystemLocale */.intl;
        let stringResult = intl2.string(require(1236) /* getSystemLocale */.t.XX5ciX);
        let tmp7 = require;
      } else {
        const intl = require(1236) /* getSystemLocale */.intl;
        let obj = { num: null };
        obj[0] = rounded;
        stringResult = intl.formatToPlainString(require(1236) /* getSystemLocale */.t["3uHFUR"], obj);
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
      const obj1 = { style: null, children: null };
      obj1[0] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" };
      const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: null, children: null };
      obj2[2] = { flexShrink: 1 };
      const intl4 = tmp7(1236).intl;
      obj2[3] = intl4.string(tmp7(1236).t["/AoSGN"]);
      const items1 = [closure_43(tmp7(4281).Text, obj2), ];
      const obj3 = { variant: "text-md/medium", color: "text-muted", children: null };
      obj3[2] = stringResult;
      items1[1] = closure_43(tmp7(4281).Text, obj3);
      obj1[1] = items1;
      const items2 = [callback4(View, obj1), ];
      const obj4 = { style: null, value: null, minimumValue: 0, maximumValue: null, onValueChange: null };
      obj4[0] = tmp.slider;
      const _Math2 = Math;
      obj4[1] = Math.min(channel.userLimit, tmp10);
      obj4[3] = tmp10;
      obj4[4] = this.handleUserLimitChange;
      items2[1] = closure_43(tmp7(13336).Slider, obj4);
      obj[0] = items2;
      obj[2] = callback4(tmp7(5317).Card, obj);
      items.push(closure_43(tmp7(5649).TableRowGroup, obj, "channel-user-limit"));
      return items;
    }
  }
  return null;
};
prototype["renderRegionOverride"] = function renderRegionOverride() {
  let channel;
  let regions;
  let self = this;
  self = this;
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
          obj[1] = callback3(channel(5315).TableRow.TrailingText, obj);
          obj[3] = tmp2;
          obj[4] = function onPress() {
            return self.pushScreen(outer1_25.CHANGE_RTC_REGION);
          };
          obj[3] = callback3(channel(5315).TableRow, obj);
          items.push(callback3(channel(5649).TableRowGroup, obj, "channel-region-override"));
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
      const VoiceInThreadsExperiment = require(5798) /* useCanUnarchiveThread */.VoiceInThreadsExperiment;
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
    ShieldUserIcon = ShieldUserIcon(8928).ShieldUserIcon;
    tmp2Result = tmp2(ShieldUserIcon, {});
    obj[2] = tmp2Result;
    obj[3] = function onPress() {
      return self.pushScreen(outer1_25.PERMISSIONS, { origin: outer1_25.OVERVIEW });
    };
    obj[2] = closure_43(self(5315).TableRow, obj);
    tmp2Result = tmp2(self(5649).TableRowGroup, obj);
  }
};
prototype["renderSettingsSection"] = function renderSettingsSection(items) {
  let tmp = null;
  if (items.length > 0) {
    const obj = { hasIcons: true, children: null };
    obj[1] = items;
    tmp = callback3(require(5649) /* TableRowGroupTitle */.TableRowGroup, obj);
  }
  return tmp;
};
prototype["renderCommonSettingsSection"] = function renderCommonSettingsSection() {
  let self = this;
  self = this;
  const props = this.props;
  const channel = props.channel;
  let canManageChannels = props.canManageChannels;
  const items = [];
  if (tmp2) {
    let obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl = channel(1236).intl;
    obj[0] = intl.string(channel(1236).t.h850Ss);
    obj[2] = callback3(channel(9058).BellIcon, {});
    obj[3] = function onPress() {
      if (channel.isThread()) {
        let result = channel(outer1_2[70]).showThreadNotificationsBottomSheet(channel);
        const obj = channel(outer1_2[70]);
      } else {
        result = self.pushScreen(outer1_25.NOTIFICATIONS);
      }
      return result;
    };
    items.push(callback3(channel(5315).TableRow, obj, "rowNotifications"));
  }
  if (callback2(channel.type)) {
    obj = { label: null, arrow: true, icon: null, onPress: null, disabled: null };
    const intl2 = channel(1236).intl;
    obj[0] = intl2.string(channel(1236).t["mp1N/2"]);
    obj = { channelId: null };
    obj[0] = channel.id;
    obj[2] = callback3(PinImage, obj);
    obj[3] = function onPress() {
      return self.pushScreen(outer1_25.PINNED_MESSAGES);
    };
    obj[4] = self.props.pinDisabled;
    items.push(callback3(channel(5315).TableRow, obj, "rowPinnedMessages"));
  }
  if (canManageChannels) {
    canManageChannels = channel.type !== constants2.GUILD_CATEGORY;
  }
  if (canManageChannels) {
    canManageChannels = !channel.isThread();
  }
  if (canManageChannels) {
    const obj1 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = channel(1236).intl;
    obj1[0] = intl3.string(channel(1236).t.ngRFjZ);
    obj1[2] = callback3(channel(4229).LinkIcon, {});
    obj1[3] = function onPress() {
      return self.pushScreen(outer1_25.INSTANT_INVITES);
    };
    items.push(callback3(channel(5315).TableRow, obj1, "rowInstantInvites"));
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
    obj = { description: null, hasIcons: true, children: null };
    const intl = self(1236).intl;
    obj[0] = intl.string(self(1236).t.mOSViT);
    obj = { label: null, trailing: null, arrow: true, icon: null, onPress: null };
    const intl2 = self(1236).intl;
    obj[0] = intl2.string(self(1236).t["kQvoC/"]);
    if (channel.defaultForumLayout === self(1382).ForumLayout.GRID) {
      const intl4 = GridSquareIcon(1236).intl;
      let stringResult = intl4.string(GridSquareIcon(1236).t["8RswJG"]);
    } else {
      const intl3 = GridSquareIcon(1236).intl;
      stringResult = intl3.string(GridSquareIcon(1236).t["4HXEZG"]);
    }
    const obj1 = { text: null };
    obj1[0] = stringResult;
    obj[1] = closure_43(self(5315).TableRow.TrailingText, obj1);
    if (channel.defaultForumLayout === GridSquareIcon(1382).ForumLayout.GRID) {
      GridSquareIcon = GridSquareIcon(15763).GridSquareIcon;
      obj = {};
      let tmpResult = tmp(GridSquareIcon, obj);
    } else {
      tmpResult = tmp(GridSquareIcon(8245).ListViewIcon, {});
    }
    obj[3] = tmpResult;
    obj[4] = function onPress() {
      return self.pushScreen(outer1_25.DEFAULT_FORUM_LAYOUT);
    };
    obj[2] = closure_43(self(5315).TableRow, obj, "forumDefaultLayout");
    tmpResult = tmp(self(5649).TableRowGroup, obj, "default-forum-layout");
  }
};
prototype["renderUncommonSettingsSection"] = function renderUncommonSettingsSection() {
  let self = this;
  self = this;
  const props = this.props;
  const canManageWebhooks = props.canManageWebhooks;
  let tmp = undefined !== canManageWebhooks && canManageWebhooks;
  const importDefault = tmp;
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
      return self.pushScreen(outer1_25.INTEGRATIONS, { canManageWebhooks: closure_1, canUnlinkLobby: closure_0 });
    };
    items.push(callback3(tmp2(tmp3[66]).TableRow, obj, "rowIntegrations"));
  }
  return self.renderSettingsSection(items);
};
prototype["renderThreadManagementActions"] = function renderThreadManagementActions() {
  let canManageThread;
  let canUnarchiveThread;
  let hasJoinedThread;
  let isArchivedThread;
  let isForumPost;
  let isLockedThread;
  let isThreadModerator;
  let require;
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
        obj[0] = callback3(tmp2(4249).ClockIcon, {});
        const intl2 = tmp2(1236).intl;
        const string2 = intl2.string;
        let cnRubV = tmp2(1236).t;
        if (isForumPost) {
          cnRubV = cnRubV.cnRubV;
          let string2Result = string2(cnRubV);
        } else {
          string2Result = string2(cnRubV.S9E4G7);
        }
        obj[1] = string2Result;
        obj[2] = function onPress() {
          return outer1_1(outer1_2[78]).unarchiveThread(closure_0, false);
        };
        callback3(tmp2(5315).TableRow, obj);
        const tmp9 = callback3;
      }
    }
    items[1] = tmp8;
    let tmp12 = null;
    if (!isArchivedThread) {
      tmp12 = null;
      if (canManageThread) {
        obj = { icon: null, label: null, onPress: null };
        obj[0] = callback3(tmp2(4239).XLargeIcon, {});
        const intl3 = tmp2(1236).intl;
        const string3 = intl3.string;
        let BTs4Kb = tmp2(1236).t;
        if (isForumPost) {
          BTs4Kb = BTs4Kb.BTs4Kb;
          let string3Result = string3(BTs4Kb);
        } else {
          string3Result = string3(BTs4Kb.wiIevd);
        }
        obj[1] = string3Result;
        obj[2] = function onPress() {
          return outer1_1(outer1_2[78]).archiveThread(closure_0, false);
        };
        callback3(tmp2(5315).TableRow, obj);
        const tmp13 = callback3;
      }
    }
    items[2] = tmp12;
    let tmp16 = null;
    if (isThreadModerator) {
      tmp16 = null;
      if (isLockedThread) {
        const obj1 = { icon: null, label: null, onPress: null };
        obj1[0] = callback3(tmp2(4804).LockIcon, {});
        const intl4 = tmp2(1236).intl;
        const string4 = intl4.string;
        _OKSxp = tmp2(1236).t;
        if (isForumPost) {
          _OKSxp = _OKSxp["/OKSxp"];
          let string4Result = string4(_OKSxp);
        } else {
          string4Result = string4(_OKSxp["jeyb/W"]);
        }
        obj1[1] = string4Result;
        obj1[2] = function onPress() {
          return outer1_1(outer1_2[78]).unlockThread(closure_0);
        };
        callback3(tmp2(5315).TableRow, obj1);
        const tmp17 = callback3;
      }
    }
    items[3] = tmp16;
    let tmp20 = null;
    if (isThreadModerator) {
      tmp20 = null;
      if (!isLockedThread) {
        const obj2 = { icon: null, label: null, onPress: null };
        obj2[0] = callback3(tmp2(4804).LockIcon, {});
        const intl5 = tmp2(1236).intl;
        const string5 = intl5.string;
        Ur_0Na = tmp2(1236).t;
        if (isForumPost) {
          Ur_0Na = Ur_0Na["Ur/0Na"];
          let string5Result = string5(Ur_0Na);
        } else {
          string5Result = string5(Ur_0Na.HoCqm8);
        }
        obj2[1] = string5Result;
        obj2[2] = function onPress() {
          return outer1_1(outer1_2[78]).lockThread(closure_0);
        };
        callback3(tmp2(5315).TableRow, obj2);
        const tmp21 = callback3;
      }
    }
    const obj3 = { hasIcons: true, children: null };
    items[4] = tmp20;
    const obj4 = { icon: null, label: null, onPress: null };
    obj4[0] = callback3(tmp2(4229).LinkIcon, {});
    const intl6 = tmp2(1236).intl;
    obj4[1] = intl6.string(tmp2(1236).t.WqhZss);
    obj4[2] = function onPress() {
      return outer1_0(outer1_2[82]).copyGuildChannelOrThreadLink(closure_0.guild_id, closure_0.id);
    };
    items[5] = callback3(tmp2(5315).TableRow, obj4);
    obj3[1] = items;
    return closure_44(tmp4, obj3);
  } else {
    obj = { icon: null, label: null, onPress: null };
    obj[0] = callback3(tmp2(9637).GroupPlusIcon, {});
    const intl = tmp2(1236).intl;
    const string = intl.string;
    let ihLPiO = tmp2(1236).t;
    if (isForumPost) {
      ihLPiO = ihLPiO.ihLPiO;
      let stringResult = string(ihLPiO);
    } else {
      stringResult = string(ihLPiO["10kukS"]);
    }
    obj[1] = stringResult;
    obj[2] = function onPress() {
      return outer1_1(outer1_2[78]).joinThread(closure_0, "Context Menu");
    };
    callback3(tmp2(5315).TableRow, obj);
    const tmp5 = callback3;
  }
};
prototype["renderDeleteButton"] = function renderDeleteButton() {
  let canManageChannels;
  let hasJoinedThread;
  let isForumPost;
  let isThreadModerator;
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
      const t = channel(1236).t;
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
      const items = [null, ];
      obj = { variant: "danger", icon: null, label: null, onPress: null };
      obj[1] = callback3(tmp8(4244).TrashIcon, { color: "text-feedback-critical" });
      obj[2] = stringResult;
      obj[3] = this.handleDeleteChannel;
      items[1] = callback3(tmp8(5315).TableRow, obj);
      obj[1] = items;
      tmp = tmp13(tmp14, obj);
    } else {
      obj = { variant: "danger", icon: null, label: null, onPress: null };
      obj[1] = callback3(tmp8(4227).UserMinusIcon, { color: "text-feedback-critical" });
      const intl4 = tmp8(1236).intl;
      const string2 = intl4.string;
      if (isForumPost) {
        let string2Result = string2(_2LsZdT);
      } else {
        string2Result = string2(_2LsZdT["fa/84m"]);
      }
      obj[2] = string2Result;
      obj[3] = function onPress() {
        return outer1_1(outer1_2[78]).leaveThread(channel, "Context Menu");
      };
      callback3(tmp8(5315).TableRow, obj);
      const tmp17 = callback3;
    }
    tmp13 = closure_44;
  }
  return tmp;
};
prototype["renderForumTags"] = function renderForumTags() {
  let canManageChannels;
  let channel;
  let self = this;
  self = this;
  const tmp = callback5(this.context);
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
    let obj = { spacing: null, children: null };
    obj[0] = self(712).space.PX_12;
    obj = { title: null, description: null, hasIcons: false, children: null };
    const intl = canManageChannels(1236).intl;
    obj[0] = intl.string(canManageChannels(1236).t["P/y+sj"]);
    let stringResult;
    if (channel.availableTags.length <= 0) {
      const intl2 = tmp7(1236).intl;
      stringResult = intl2.string(tmp7(1236).t["3v8kZH"]);
    }
    obj[1] = stringResult;
    obj = { style: null, children: null };
    obj[0] = tmp.tagsWrapper;
    let tmp6Result = null;
    if (channel.availableTags.length > 0) {
      availableTags = channel.availableTags;
      const items = [availableTags.map((id) => outer1_43(self(outer1_2[86]), { tag: id, onPress: self.handlePressTag, disabled: !canManageChannels }, id.id)), ];
      let tmp10Result = null;
      if (tmp3) {
        const obj1 = { style: null, children: null };
        obj1[0] = tmp.addTagIconButtonWrapper;
        const obj2 = { icon: null, size: "sm", onPress: null, accessibilityLabel: null };
        const obj3 = { size: "sm", color: null };
        obj3[1] = self(712).colors.WHITE;
        obj2[0] = tmp10(tmp7(9350).PlusSmallIcon, obj3);
        obj2[2] = function onPress() {
          return self.handlePressTag();
        };
        const intl3 = tmp7(1236).intl;
        obj2[3] = intl3.string(tmp7(1236).t["/jubeD"]);
        obj1[1] = tmp10(tmp7(7672).IconButton, obj2);
        tmp10Result = tmp10(tmp12, obj1);
      }
      const obj4 = { children: null };
      items[1] = tmp10Result;
      obj4[0] = items;
      tmp6Result = tmp6(closure_45, obj4);
      const tmp14 = closure_45;
    }
    obj[1] = tmp6Result;
    obj[3] = closure_43(View, obj);
    const items1 = [closure_43(canManageChannels(5649).TableRowGroup, obj), , , ];
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
      const intl4 = tmp7(1236).intl;
      obj6[3] = intl4.string(tmp7(1236).t.F4is7L);
      obj5[4] = tmp10(tmp7(4281).Text, obj6);
      tmp10Result = tmp10(tmp7(4812).PressableOpacity, obj5);
    }
    items1[1] = tmp10Result;
    let tmp10Result1 = null != error && error.length > 0;
    if (tmp10Result1) {
      const obj7 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
      obj7[2] = error;
      tmp10Result1 = tmp10(tmp7(4281).Text, obj7);
    }
    items1[2] = tmp10Result1;
    let tmp18 = !canManageChannels;
    if (canManageChannels) {
      tmp18 = everyResult;
    }
    const obj8 = { hasIcons: false, children: null };
    const obj9 = { disabled: null, label: null, value: null, onValueChange: null };
    obj9[0] = tmp18;
    const intl5 = tmp7(1236).intl;
    obj9[1] = intl5.string(canManageChannels(1236).t.yX24uI);
    obj9[2] = channel.hasFlag(constants8.REQUIRE_TAG);
    obj9[3] = self.handleToggleRequireTag;
    obj8[1] = closure_43(canManageChannels(5650).TableSwitchRow, obj9);
    items1[3] = closure_43(canManageChannels(5649).TableRowGroup, obj8);
    obj[1] = items1;
    return closure_44(canManageChannels(4693).Stack, obj);
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
    obj = { disabled: null, label: null, subLabel: null, value: null, onValueChange: null };
    obj[0] = !props.canManageChannels;
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl.string(require(1236) /* getSystemLocale */.t.u8LZOt);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.J4wCc7);
    obj[3] = !channel.hasFlag(constants8.HIDE_MEDIA_DOWNLOAD_OPTIONS);
    obj[4] = this.handleToggleShowMediaDownloadOptions;
    obj[1] = callback3(require(5650) /* TableSwitchRow */.TableSwitchRow, obj);
    tmp = callback3(require(5649) /* TableRowGroupTitle */.TableRowGroup, obj);
  }
  return tmp;
};
prototype["renderCategory"] = function renderCategory() {
  let canManageParent;
  let category;
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
        let obj = self(4475);
        stringResult = obj.computeChannelName(category, mergeGuildAvatar, upsertRelationship);
        tmp7 = self;
      }
      obj = { icon: null, label: null, trailing: null, arrow: null, onPress: null };
      obj[0] = callback3(tmp7(15161).FolderPlusIcon, {});
      const intl2 = tmp7(1236).intl;
      obj[1] = intl2.string(tmp7(1236).t.vHCZwr);
      obj = { text: null };
      obj[0] = stringResult;
      obj[2] = callback3(tmp7(5315).TableRow.TrailingText, obj);
      obj[3] = canManageParent;
      let fn;
      if (canManageParent) {
        fn = () => self.pushScreen(outer1_25.CHANGE_CATEGORY);
      }
      const obj1 = { hasIcons: true, children: null };
      obj[4] = fn;
      obj1[1] = callback3(tmp7(5315).TableRow, obj);
      return callback3(tmp7(5649).TableRowGroup, obj1);
    }
  }
  return null;
};
prototype["renderThreadSettings"] = function renderThreadSettings() {
  let obj = { children: null };
  obj = { spacing: null, style: null, children: null };
  obj[0] = importDefault(712).space.PX_24;
  obj[1] = callback5(this.context).stackPadding;
  const items = [this.renderChannelInfo(), this.renderCommonSettingsSection(), this.renderThreadManagementActions(), this.renderThreadSpoiler(), this.renderSlowmode(), this.renderAutoArchiveDuration(), this.renderInvitable(), this.renderDeleteButton()];
  obj[2] = items;
  obj[0] = callback4(require(4693) /* Stack */.Stack, obj);
  return callback3(require(7777) /* Form */.Form, obj);
};
prototype["renderChannelSettings"] = function renderChannelSettings() {
  let obj = { children: null };
  obj = { spacing: null, style: null, children: null };
  obj[0] = importDefault(712).space.PX_24;
  obj[1] = callback5(this.context).stackPadding;
  const items = [this.renderChannelInfo(), this.renderForumTags(), this.renderCategory(), this.renderPermissions(), this.renderCommonSettingsSection(), this.renderDefaultForumLayout(), this.renderDefaultSortOrder(), this.renderDefaultTagSetting(), this.renderAnnouncement(), this.renderNsfwConfig(), this.renderSlowmode(), this.renderDefaultAutoArchiveDuration(), this.renderBitrateSettings(), this.renderVideoQualityModeSettings(), this.renderUserLimitSettings(), this.renderRegionOverride(), this.renderUncommonSettingsSection(), this.renderShowMediaDownloadOptions(), this.renderDeleteButton()];
  obj[2] = items;
  obj[0] = callback4(require(4693) /* Stack */.Stack, obj);
  return callback3(require(7777) /* Form */.Form, obj);
};
prototype["render"] = function render() {
  const self = this;
  if (this.props.isThread) {
    let renderThreadSettingsResult = self.renderThreadSettings();
  } else {
    renderThreadSettingsResult = self.renderChannelSettings();
  }
  const tmp = callback5(this.context);
  return callback3(View, { style: callback5(this.context).screenContainer, children: renderThreadSettingsResult });
};
ChannelSettingsOverview.contextType = require("ManaContext").ThemeContext;
let result = set.fileFinishedImporting("components_native/channel_settings/ChannelSettingsOverview.tsx");

export default function ConnectedChannelSettingsOverview(arg0) {
  let autoFocusElement;
  let hasJoinedThread;
  let isMutedThread;
  let require;
  ({ channelId: require, autoFocusElement } = arg0);
  let navigation;
  let stateFromStores;
  let shouldHideChannelContent;
  let ref;
  let obj = require(navigation[92]);
  navigation = obj.useNavigation();
  const items = [ensureGuildLoaded];
  stateFromStores = require(navigation[24]).useStateFromStores(items, () => outer1_13.getChannel(closure_0));
  let obj2 = require(navigation[24]);
  const items1 = [normalizeChannelPropertyForCompare];
  const stateFromStores1 = require(navigation[24]).useStateFromStores(items1, () => channel.getChannel());
  const obj4 = require(navigation[24]);
  const isThreadModerator = require(navigation[67]).useIsThreadModerator(stateFromStores);
  const obj5 = require(navigation[67]);
  const items2 = [storeThread];
  const stateFromStoresObject = require(navigation[24]).useStateFromStoresObject(items2, () => {
    let isMutedResult;
    if (null != stateFromStores) {
      isMutedResult = outer1_6.isMuted(tmp.id);
    }
    const obj = { isMutedThread: isMutedResult, hasJoinedThread: null };
    let hasJoinedResult;
    if (null != stateFromStores) {
      hasJoinedResult = outer1_6.hasJoined(tmp.id);
    }
    obj[1] = hasJoinedResult;
    return obj;
  });
  ({ isMutedThread, hasJoinedThread } = stateFromStoresObject);
  const obj6 = require(navigation[24]);
  const canManageThread = require(navigation[67]).useCanManageThread(stateFromStores);
  const obj7 = require(navigation[67]);
  shouldHideChannelContent = require(navigation[56]).useShouldHideChannelContent(stateFromStores);
  const obj8 = require(navigation[56]);
  const items3 = [normalizeChannelPropertyForCompare, createGuildRecordFromRust, ensureGuildLoaded, mergeGuildAvatar, initialize, comparator, getUncachedChannelPermissions];
  const items4 = [stateFromStores, shouldHideChannelContent];
  const stateFromStoresObject1 = require(navigation[24]).useStateFromStoresObject(items3, () => {
    let errors;
    let submitting;
    const props = outer1_12.getProps();
    ({ submitting, errors } = props);
    let obj = stateFromStores;
    if (null == stateFromStores) {
      obj = { isThread: false, submitting: null, errors: null };
      obj[1] = submitting;
      obj[2] = errors;
      return obj;
    } else {
      const guild = outer1_15.getGuild(obj.getGuildId());
      const channel = outer1_13.getChannel(obj.parent_id);
      const currentUser = outer1_20.getCurrentUser();
      const hasItem = outer1_10.has(obj.type);
      obj = { isThread: null, guild: null, category: null, hasCategories: null, pinDisabled: null, canManageChannels: null, isChannelOwner: null, canManageParent: null, canManageRoles: null, canSendMessages: null, canManageWebhooks: null, canUnarchiveThread: null, regions: null, submitting: null, errors: null, isNSFWDisabled: null };
      obj[0] = hasItem;
      obj[1] = guild;
      obj[2] = channel;
      const regions = outer1_18.getRegions(obj.getGuildId());
      obj[3] = outer1_14.hasCategories(obj.guild_id);
      obj[4] = shouldHideChannelContent;
      obj[5] = outer1_16.can(outer1_34.MANAGE_CHANNELS, obj);
      obj[6] = null != currentUser && obj.ownerId === currentUser.id;
      if (null != channel) {
        let canResult = obj5.can(tmp21.MANAGE_CHANNELS, channel);
      } else {
        canResult = obj5.can(tmp21.MANAGE_CHANNELS, guild);
      }
      obj[7] = canResult;
      obj[8] = outer1_16.can(outer1_34.MANAGE_ROLES, obj);
      obj[9] = outer1_16.can(outer1_34.SEND_MESSAGES, obj);
      obj[10] = outer1_8(obj.type) && outer1_16.can(outer1_34.MANAGE_WEBHOOKS, obj);
      const tmp4 = outer1_8(obj.type) && outer1_16.can(outer1_34.MANAGE_WEBHOOKS, obj);
      obj[11] = outer1_0(navigation[67]).canUnarchiveThread(obj);
      obj[12] = regions;
      obj[13] = submitting;
      obj[14] = errors;
      const obj2 = outer1_0(navigation[67]);
      obj[15] = outer1_11(guild) || null != obj.linkedLobby;
      return obj;
    }
  }, items4);
  ref = shouldHideChannelContent.useRef(null);
  const items5 = [autoFocusElement, navigation];
  const effect = shouldHideChannelContent.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    if (!data.data.closing) {
      if (closure_1 === outer1_21.CHANNEL_NAME) {
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
    tmp11Result = closure_43(ChannelSettingsOverview, obj);
    const tmp11 = closure_43;
    const tmp12 = ChannelSettingsOverview;
  }
  return tmp11Result;
};
export { PinImage };