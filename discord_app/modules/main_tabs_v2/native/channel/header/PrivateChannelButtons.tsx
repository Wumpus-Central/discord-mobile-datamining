// === Module 14008: PrivateChannelButtons ===

// Module 14008 (PrivateChannelButtons)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import native from "native" /* 1202 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5711 */;
import useAlertStore from "useAlertStore" /* 5910 */;
import Pressables from "Pressables" /* 6908 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7146 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7867 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9716 */;
import getPrivateChannelCallDefault from "getPrivateChannelCall" /* 10628 */;
import useSearchContext from "useSearchContext" /* 13183 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 13243 */;
import ConfirmStartCall from "ConfirmStartCall" /* 14011 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 14012 */;
import ChannelHeader from "ChannelHeader" /* 14013 */;
import SafetyToolsButton from "SafetyToolsButton" /* 14029 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6772 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import RelationshipStore from "RelationshipStore" /* 4913 */;
import UserStore from "UserStore" /* 1392 */;
import VoiceStateStore from "VoiceStateStore" /* 5630 */;

const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;

require = fn;
const View = fn(17).View;
const NO_PARTICIPANTS = fn(6772).NO_PARTICIPANTS;
let closure_12 = fn(9712).setIsChannelDetailsSearchActive;
const Constants = fn(1087);
({ AnalyticEvents: map1, AnalyticsSections: closure_14, ChannelTypes: closure_15, ME: closure_16 } = Constants);
const ParticipantTypes = fn(5632).ParticipantTypes;
const CHANGELOG_URL = fn(4873).CHANGELOG_URL;
let closure_19 = fn(9713).SearchEntrypointAnalyticsLocations;
const Features = fn(5718).Features;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
const tmp4 = fn(1202).AVATAR_SIZE_MAP[fn(undefined, 1202).AvatarSizes.XSMALL];
let closure_23 = tmp4;
let obj = { direction: fn(1202).CutoutDirection.RIGHT, radius: tmp4 / 2 + 3, inset: -6 };
const createStyles = fn(4971);
let closure_25 = createStyles.createStyles(() => {
  obj = { privateChannelButtonsWrapper: { flexDirection: "row", gap: 12, paddingEnd: 1 }, button: { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, minHeight: nativeDefault.space.PX_32, minWidth: nativeDefault.space.PX_32, padding: nativeDefault.space.PX_4, justifyContent: "center", flexDirection: "row", alignItems: "center" }, disabledButton: { opacity: 0.6 }, overflowBadge: null };
  const size = { backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.round, width: height, height, justifyContent: "center", alignItems: "center", marginLeft: -6 };
  obj.overflowBadge = size;
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx");

export default noop.memo(function PrivateChannelButtons(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  let inappropriateConversationSafetyToolsWarningForChannel;
  closure_6 = undefined;
  closure_7 = undefined;
  let callParticipants;
  let visibleParticipants;
  let totalParticipantCount;
  closure_11 = undefined;
  let application;
  let callback;
  closure_14 = undefined;
  let callback2;
  const tmp = closure_25();
  dependencyMap = tmp;
  const items = [closure_7];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let recipientId;
  if (stateFromStores != null) {
    recipientId = stateFromStores.getRecipientId();
  }
  obj = channelId(504);
  const items1 = [closure_11];
  const items2 = [stateFromStores];
  const stateFromStores1 = channelId(504).useStateFromStores(items1, () => {
    let isInChannelResult = null != stateFromStores;
    if (isInChannelResult) {
      isInChannelResult = VoiceStateStore.isInChannel(tmp.id);
    }
    return isInChannelResult;
  }, items2);
  const tmp2Result = channelId(504);
  inappropriateConversationSafetyToolsWarningForChannel = channelId(10972).useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  closure_6 = tmp7;
  const tmp2Result8 = channelId(10972);
  const items3 = [visibleParticipants, totalParticipantCount];
  let stateFromStores2 = channelId(504).useStateFromStores(items3, () => {
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    let tmp2 = type === constants3.DM;
    if (tmp2) {
      tmp2 = null != recipientId;
    }
    if (tmp2) {
      let isBlockedResult = RelationshipStore.isBlocked(recipientId);
      if (!isBlockedResult) {
        const user = UserStore.getUser(recipientId);
        let isProvisional;
        if (user != null) {
          isProvisional = user.isProvisional;
        }
        isBlockedResult = true === isProvisional;
      }
      tmp2 = isBlockedResult;
    }
    return tmp2;
  });
  const tmp2Result9 = channelId(504);
  const items4 = [callParticipants];
  const stateFromStores3 = channelId(504).useStateFromStores(items4, () => callParticipants.supports(constants2.VIDEO));
  const VideoGuardExperiment = tmp2(14009).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig({ location: "PrivateChannelButtons" }).videoEnabled;
  closure_7 = tmp10;
  const tmp2Result10 = channelId(504);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const isCallActiveNullable = channelId(8338).useIsCallActiveNullable(id);
  const tmp2Result11 = channelId(8338);
  const items5 = [inappropriateConversationSafetyToolsWarningForChannel];
  callParticipants = channelId(504).useStateFromStoresObject(items5, () => {
    let isMultiUserDMResult;
    if (stateFromStores != null) {
      isMultiUserDMResult = stateFromStores.isMultiUserDM();
    }
    if (true === isMultiUserDMResult) {
      let participants = ChannelRTCStore.getParticipants(stateFromStores.id);
    } else {
      participants = NO_PARTICIPANTS;
    }
    const obj2 = { callParticipants: participants, participantsVersion: null };
    let isMultiUserDMResult1;
    if (stateFromStores != null) {
      isMultiUserDMResult1 = stateFromStores.isMultiUserDM();
    }
    let num = -1;
    if (true === isMultiUserDMResult1) {
      num = ChannelRTCStore.getParticipantsVersion(stateFromStores.id);
    }
    obj2.participantsVersion = num;
    return obj2;
  }).callParticipants;
  const items6 = [callParticipants];
  const memo = stateFromStores.useMemo(() => {
    const found = callParticipants.filter((type) => type.type === constants.USER);
    return { visibleParticipants: found.slice(0, 5), totalParticipantCount: found.length };
  }, items6);
  visibleParticipants = memo.visibleParticipants;
  totalParticipantCount = memo.totalParticipantCount;
  let isMultiUserDMResult;
  if (stateFromStores != null) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  let tmp15 = isMultiUserDMResult;
  if (isMultiUserDMResult) {
    tmp15 = callParticipants.length > 0;
  }
  closure_11 = tmp15;
  const tmp17 = screenIndex(14010)({ context: { type: "channel", channel: stateFromStores } });
  application = tmp17.application;
  let obj2 = { context: { type: "channel", channel: stateFromStores } };
  const tmp2Result12 = channelId(504);
  let tmp18 = null != channelId(6807).useDMAppChannelApplicationId(stateFromStores);
  if (tmp18) {
    tmp18 = "channel-secondary-view-chat" !== screenIndex;
  }
  const tmp2Result13 = channelId(6807);
  let tmp19 = null;
  if (tmp18) {
    tmp19 = channelId;
  }
  const channelChatUnread = channelId(9715).useChannelChatUnread(tmp19);
  const items7 = [stateFromStores];
  ({ hasUnread, mentionCount } = channelChatUnread);
  callback = obj9.useCallback(() => {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (null != stateFromStores) {
      if (stateFromStores.isPrivate()) {
        const obj2 = getPrivateChannelCallDefault(stateFromStores, flag);
        if (obj2.inCall) {
          obj2.onPress();
        } else {
          ConfirmStartCall.confirmStartCall(obj2.onPress);
        }
      }
    }
  }, items7);
  const items8 = [callback];
  closure_14 = obj9.useCallback(() => {
    callback(false);
  }, items8);
  const items9 = [callback, !videoEnabled];
  const items10 = [stateFromStores, channelId, screenIndex];
  const callback1 = obj9.useCallback(() => {
    if (closure_7) {
      const obj2 = { title: null };
      obj = useAlertStore;
      const intl = util.intl;
      obj2.title = intl.string(util.t["8jSzSe"]);
      obj.openAlert(VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, guild(VoicePanelVideoGuardErrorAlertDefault, obj2));
    } else {
      callback(true);
    }
  }, items9);
  callback2 = obj9.useCallback(() => {
    const result = ChannelHeader.navigateToChannelDetails(channelId, screenIndex, "private-channel-search-button");
    application(channelId, true, "action");
    if (null != stateFromStores) {
      const guildId = stateFromStores.getGuildId();
      const isThreadResult = stateFromStores.isThread();
      const channelDetailsSearchContext = useSearchContext.getChannelDetailsSearchContext(channelId, guildId, isThreadResult);
      const tmpResult = useSearchContext;
      const obj3 = { searchContext: channelDetailsSearchContext, searchLocation: constants.INDIVIDUAL_DM };
      search_tracking_TrackingDefault.trackSearchOpened(obj3);
    }
  }, items10);
  const items11 = [recipientId, stateFromStores, application];
  const items12 = [null != inappropriateConversationSafetyToolsWarningForChannel && null != recipientId, tmp.button, callback2, channelId, recipientId, , ];
  let id1;
  const callback3 = obj9.useCallback(() => {
    let tmp2 = null != recipientId;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      tmp2 = null != application;
    }
    if (tmp2) {
      const obj2 = { settings_type: "user", destination_pane: constants2.SETTINGS_APP_DMS_MENU, source_page: "app_dm_settings", application_id: application.id };
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
      const obj4 = { userId: recipientId, channel: stateFromStores, application };
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14028, dependencyMap.paths), "AppDMOptionsBottomSheet", obj4);
    }
  }, items11);
  if (inappropriateConversationSafetyToolsWarningForChannel != null) {
    id1 = inappropriateConversationSafetyToolsWarningForChannel.id;
  }
  items12[5] = id1;
  let type;
  if (inappropriateConversationSafetyToolsWarningForChannel != null) {
    type = inappropriateConversationSafetyToolsWarningForChannel.type;
  }
  items12[6] = type;
  const memo1 = obj9.useMemo(() => {
    if (closure_6) {
      const obj3 = { channelId, recipientId, warningId: null, warningType: null };
      ({ id: obj2.warningId, type: obj2.warningType } = inappropriateConversationSafetyToolsWarningForChannel);
      let tmpResult = guild(SafetyToolsButton.SafetyToolsButton, obj3);
    } else {
      obj = { style: button.button, onPress: callback2, accessibilityLabel: null, accessibilityRole: "button", children: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t["5h0QOP"]);
      obj.children = guild(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm" });
      tmpResult = guild(Pressables.PressableOpacity, obj);
    }
    return tmpResult;
  }, items12);
  if (screenIndex(6821)(channelId)) {
    let obj3 = {
      style: tmp.button,
      onPress: function handleChangelog() {
          screenIndex(button[41]).openURL(target);
          obj = screenIndex(button[41]);
          screenIndex(button[42]).track(callback.CHANGE_LOG_CTA_CLICKED, { cta_type: "channel_header", target });
        },
      accessibilityLabel: null,
      children: null
    };
    const intl6 = tmp2(1128).intl;
    obj3.accessibilityLabel = intl6.string(tmp2(1128).t["+KSnWX"]);
    obj3.children = closure_21(tmp2(14030).WindowLaunchIcon, { size: "sm" });
    let tmp28Result = closure_21(tmp2(6908).PressableOpacity, obj3);
  } else if (tmp17.isAppDM) {
    let tmp47Result2 = null;
    if (null != application) {
      let obj4 = { style: tmp.privateChannelButtonsWrapper, children: null };
      let tmp47Result = null;
      if (tmp18) {
        const obj5 = {
          style: tmp.button,
          onPress() {
                  return openChannelSecondaryViewChatDefault(value3, channelId);
                },
          accessibilityLabel: null,
          accessibilityRole: "button",
          children: null
        };
        const intl3 = tmp2(1128).intl;
        obj5.accessibilityLabel = intl3.string(tmp2(1128).t.kkKapG);
        const items13 = [closure_21(tmp2(8542).ChatIcon, { size: "sm" }), ];
        if (hasUnread) {
          let tmp50Result = closure_21(tmp2(14000).ButtonBadge, { badgePosition: "right" });
        } else {
          tmp50Result = null;
        }
        items13[1] = tmp50Result;
        obj5.children = items13;
        tmp47Result = closure_22(tmp2(6908).PressableOpacity, obj5);
      }
      const items14 = [tmp47Result, , ];
      const obj6 = { style: tmp.button, onPress: callback2, accessibilityLabel: null, accessibilityRole: "button", children: null };
      const intl4 = tmp2(1128).intl;
      obj6.accessibilityLabel = intl4.string(tmp2(1128).t["5h0QOP"]);
      obj6.children = closure_21(tmp2(7146).MagnifyingGlassIcon, { size: "sm" });
      items14[1] = closure_21(tmp2(6908).PressableOpacity, obj6);
      const obj7 = { style: tmp.button, onPress: callback3, accessibilityLabel: null, accessibilityRole: "button", children: null };
      const intl5 = tmp2(1128).intl;
      obj7.accessibilityLabel = intl5.string(tmp2(1128).t["+1H47t"]);
      obj7.children = closure_21(tmp2(7488).SettingsIcon, { size: "sm" });
      items14[2] = closure_21(tmp2(6908).PressableOpacity, obj7);
      obj4.children = items14;
      tmp47Result2 = closure_22(recipientId, obj4);
    }
    tmp28Result = tmp47Result2;
  } else {
    const obj8 = { style: tmp.privateChannelButtonsWrapper, children: null };
    let intl = tmp2(1128).intl;
    const string = intl.string;
    const t = tmp2(1128).t;
    if (tmp15) {
      let stringResult = string(t["0D/6Rz"]);
    } else if (stateFromStores1) {
      stringResult = string(t["4ry6yi"]);
    } else {
      stringResult = string(t.focH1t);
    }
    const obj10 = { accessibilityLabel: stringResult, accessibilityRole: "button", style: null, onPress: null, disabled: null, children: null };
    const items15 = [tmp.button, , ];
    let num2;
    if (tmp15) {
      num2 = 1;
    }
    const obj11 = { borderWidth: num2, borderColor: null };
    if (!tmp15) {
      obj11.borderColor = undefined;
      items15[1] = obj11;
      let disabledButton = null;
      if (stateFromStores2) {
        disabledButton = tmp.disabledButton;
      }
      items15[2] = disabledButton;
      obj10.style = items15;
      obj10.onPress = function onPress() {
        if (closure_11) {
          if (null != stateFromStores) {
            PrivateChannelCallUtils.openChannelCallModal(tmp);
          }
        }
        closure_14();
      };
      obj10.disabled = stateFromStores2;
      if (tmp15) {
        tmp16(587).unsafe_rawColors;
        const unsafe_rawColors1 = { size: "sm", color: null };
        unsafe_rawColors1.color = stateFromStores1 ? unsafe_rawColors1.GREEN_360 : unsafe_rawColors1.BRAND_400;
        closure_21(tmp2(8572).VoiceNormalIcon, unsafe_rawColors1);
        const tmp37 = stateFromStores1 ? unsafe_rawColors1.GREEN_360 : unsafe_rawColors1.BRAND_400;
      } else {
        if (stateFromStores1) {
          const obj12 = { size: "sm", color: tmp16(587).unsafe_rawColors.RED_400 };
          let tmp33Result2 = closure_21(tmp2(9722).PhoneHangUpIcon, obj12);
          let tmp36 = closure_21;
        } else {
          let GREEN_360;
          if (isCallActiveNullable) {
            GREEN_360 = tmp16(587).unsafe_rawColors.GREEN_360;
          }
          const obj13 = { size: "sm", color: GREEN_360 };
          tmp33Result2 = closure_21(tmp2(9720).PhoneCallIcon, obj13);
          tmp36 = closure_21;
        }
        const items16 = [
          tmp33Result2,
          visibleParticipants.map((user, index) => {
                  const diff = visibleParticipants.length - 1;
                  let num = -6;
                  if (0 === index) {
                    num = nativeDefault.space.PX_4;
                  }
                  obj = { style: { marginLeft: num }, user: user.user, guildId: "r", size: native.AvatarSizes.XSMALL, cutout: "focusedRewardId" };
                  if (index !== diff) {
                    const tmp7 = obj;
                  }
                  obj.cutout = tmp7;
                  return guild(native.CutoutableAvatarImage, obj, user.id);
                }),

        ];
        let tmp36Result = totalParticipantCount > 5;
        if (tmp36Result) {
          const obj14 = { style: tmp.overflowBadge, children: null };
          const obj15 = { variant: "text-xxs/semibold", color: "button-outline-primary-text", children: null };
          const items17 = ["+", totalParticipantCount - 5];
          obj15.children = items17;
          obj14.children = closure_22(tmp2(5234).Text, obj15);
          tmp36Result = tmp36(tmp29, obj14);
        }
        items16[2] = tmp36Result;
        obj10.children = items16;
        const items18 = [closure_22(tmp2(6908).PressableOpacity, obj10), , ];
        let tmp41 = null;
        if (!isMultiUserDMResult) {
          tmp41 = null;
          if (!stateFromStores1) {
            const items19 = [tmp.button, ];
            let disabledButton1 = null;
            if (videoEnabled) {
              if (stateFromStores2) {
                disabledButton1 = tmp.disabledButton;
              } else {
                disabledButton1 = null;
              }
            }
            const obj16 = { style: null, onPress: null, disabled: null, accessibilityLabel: null, accessibilityRole: "button", children: null };
            items19[1] = disabledButton1;
            obj16.style = items19;
            obj16.onPress = callback1;
            let tmp43 = !tmp10;
            if (videoEnabled) {
              if (!stateFromStores2) {
                stateFromStores2 = !stateFromStores3;
              }
              tmp43 = stateFromStores2;
            }
            obj16.disabled = tmp43;
            const intl2 = tmp2(1128).intl;
            obj16.accessibilityLabel = intl2.string(tmp2(1128).t.oCqlGG);
            if (videoEnabled) {
              let VideoDenyIcon = tmp2(11327).VideoIcon;
            } else {
              VideoDenyIcon = tmp2(14032).VideoDenyIcon;
            }
            obj16.children = tmp36(VideoDenyIcon, { size: "sm" });
            tmp36(tmp2(6908).PressableOpacity, obj16);
          }
        }
        items18[1] = tmp41;
        items18[2] = memo1;
        obj8.children = items18;
        tmp28Result = closure_22(tmp29, obj8);
      }
    } else {
      const unsafe_rawColors = tmp16(587).unsafe_rawColors;
    }
  }
  return tmp28Result;
});