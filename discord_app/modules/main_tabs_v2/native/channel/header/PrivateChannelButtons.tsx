// discord_app/modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppAnalyticsUtilsDefault from "../../../../app_analytics/AppAnalyticsUtils.tsx";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import MagnifyingGlassIcon from "../../../../../design/components/Icon/native/redesign/generated/MagnifyingGlassIcon.tsx";
import PrivateChannelCallUtils from "../../../../../utils/native/PrivateChannelCallUtils.tsx";
import AppChannelChat from "../../../../app_channels/AppChannelChat.tsx";
import getPrivateChannelCallDefault from "../../../../calls/native/getPrivateChannelCall.tsx";
import useSearchContext from "../../../../search/native/hooks/useSearchContext.tsx";
import search_tracking_TrackingDefault from "../../../../search/native/tracking/Tracking.tsx";
import ConfirmStartCall from "../../../../voice_calls/native/ConfirmStartCall.tsx";
import VoicePanelVideoGuardErrorAlert from "../../../../voice_panel/native/alerts/VoicePanelVideoGuardErrorAlert.tsx";
import ChannelHeader from "ChannelHeader.tsx";
import SafetyToolsButton from "../../../../self_mod/inappropriate_conversation/native/SafetyToolsButton.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../../calls/ChannelRTCStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../../../stores/MediaEngineStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../../../stores/VoiceStateStore.tsx";

const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;

require = fn;
const View = fn(17).View;
const NO_PARTICIPANTS = fn(6252).NO_PARTICIPANTS;
let closure_12 = fn(9531).setIsChannelDetailsSearchActive;
const Constants = fn(1085);
({ AnalyticEvents: map1, AnalyticsSections: closure_14, ChannelTypes: closure_15 } = Constants);
const ParticipantTypes = fn(5174).ParticipantTypes;
const CHANGELOG_URL = fn(2115).CHANGELOG_URL;
let closure_18 = fn(9532).SearchEntrypointAnalyticsLocations;
const Features = fn(5176).Features;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
const tmp4 = fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.XSMALL];
let closure_22 = tmp4;
let obj = { direction: fn(1200).CutoutDirection.RIGHT, radius: tmp4 / 2 + 3, inset: -6 };
const createStyles = fn(5151);
let closure_24 = createStyles.createStyles(() => {
  obj = {
    privateChannelButtonsWrapper: { flexDirection: "row", gap: 12, paddingEnd: 1 },
    button: {
      borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
      minHeight: nativeDefault.space.PX_32,
      minWidth: nativeDefault.space.PX_32,
      padding: nativeDefault.space.PX_4,
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
    },
    disabledButton: { opacity: 0.6 },
    overflowBadge: null,
  };
  const size = {
    backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
    borderRadius: nativeDefault.radii.round,
    width: height,
    height,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -6,
  };
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
  let isAppChannelChatOpen;
  let callback;
  closure_15 = undefined;
  let callback2;
  const tmp = closure_24();
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
  const stateFromStores1 = channelId(504).useStateFromStores(
    items1,
    () => {
      let isInChannelResult = null != stateFromStores;
      if (isInChannelResult) {
        isInChannelResult = VoiceStateStore.isInChannel(tmp.id);
      }
      return isInChannelResult;
    },
    items2,
  );
  const tmp2Result = channelId(504);
  inappropriateConversationSafetyToolsWarningForChannel =
    channelId(10661).useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  closure_6 = tmp7;
  const tmp2Result9 = channelId(10661);
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
  const tmp2Result10 = channelId(504);
  const items4 = [callParticipants];
  const stateFromStores3 = channelId(504).useStateFromStores(items4, () => callParticipants.supports(constants2.VIDEO));
  const VideoGuardExperiment = tmp2(13677).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig({ location: "PrivateChannelButtons" }).videoEnabled;
  closure_7 = tmp10;
  const tmp2Result11 = channelId(504);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const isCallActiveNullable = channelId(8216).useIsCallActiveNullable(id);
  const tmp2Result12 = channelId(8216);
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
  const tmp17 = screenIndex(13678)({ context: { type: "channel", channel: stateFromStores } });
  application = tmp17.application;
  let obj2 = { context: { type: "channel", channel: stateFromStores } };
  const tmp2Result13 = channelId(504);
  const tmp18 = null != channelId(6282).useDMAppChannelApplicationId(stateFromStores);
  const tmp2Result14 = channelId(6282);
  let tmp19 = null;
  if (tmp18) {
    tmp19 = channelId;
  }
  isAppChannelChatOpen = channelId(9535).useIsAppChannelChatOpen(tmp19);
  const tmp2Result15 = channelId(9535);
  let tmp21 = null;
  if (tmp18) {
    tmp21 = channelId;
  }
  const appChannelChatUnread = channelId(9535).useAppChannelChatUnread(tmp21);
  const items7 = [stateFromStores];
  ({ hasUnread, mentionCount } = appChannelChatUnread);
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
  closure_15 = obj9.useCallback(() => {
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
      obj.openAlert(
        VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY,
        constants2(VoicePanelVideoGuardErrorAlertDefault, obj2),
      );
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
      const channelDetailsSearchContext = useSearchContext.getChannelDetailsSearchContext(
        channelId,
        guildId,
        isThreadResult,
      );
      const tmpResult = useSearchContext;
      const obj3 = { searchContext: channelDetailsSearchContext, searchLocation: constants.INDIVIDUAL_DM };
      search_tracking_TrackingDefault.trackSearchOpened(obj3);
    }
  }, items10);
  const items11 = [recipientId, stateFromStores, application];
  const items12 = [
    null != inappropriateConversationSafetyToolsWarningForChannel && null != recipientId,
    tmp.button,
    callback2,
    channelId,
    recipientId,
    ,
  ];
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
      const obj2 = {
        settings_type: "user",
        destination_pane: constants2.SETTINGS_APP_DMS_MENU,
        source_page: "app_dm_settings",
        application_id: application.id,
      };
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
      const obj4 = { userId: recipientId, channel: stateFromStores, application };
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(13696, dependencyMap.paths),
        "AppDMOptionsBottomSheet",
        obj4,
      );
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
      let tmpResult = constants2(SafetyToolsButton.SafetyToolsButton, obj3);
    } else {
      obj = {
        style: button.button,
        onPress: callback2,
        accessibilityLabel: null,
        accessibilityRole: "button",
        children: null,
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t["5h0QOP"]);
      obj.children = constants2(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm" });
      tmpResult = constants2(Pressables.PressableOpacity, obj);
    }
    return tmpResult;
  }, items12);
  if (screenIndex(6307)(channelId)) {
    let obj3 = {
      style: tmp.button,
      onPress: function handleChangelog() {
        screenIndex(button[41]).openURL(target);
        obj = screenIndex(button[41]);
        screenIndex(button[42]).track(isAppChannelChatOpen.CHANGE_LOG_CTA_CLICKED, {
          cta_type: "channel_header",
          target,
        });
      },
      accessibilityLabel: null,
      children: null,
    };
    const intl6 = tmp2(1126).intl;
    obj3.accessibilityLabel = intl6.string(tmp2(1126).t["+KSnWX"]);
    obj3.children = closure_20(tmp2(13698).WindowLaunchIcon, { size: "sm" });
    let tmp30Result = closure_20(tmp2(6405).PressableOpacity, obj3);
  } else if (tmp17.isAppDM) {
    let tmp49Result2 = null;
    if (null != application) {
      let obj4 = { style: tmp.privateChannelButtonsWrapper, children: null };
      let tmp49Result = null;
      if (tmp18) {
        const obj5 = {
          style: tmp.button,
          onPress() {
            obj = AppChannelChat;
            if (isAppChannelChatOpen) {
              let closeAppChannelChatResult = obj.closeAppChannelChat(channelId);
            } else {
              closeAppChannelChatResult = obj.openAppChannelChat(null, channelId);
            }
            return closeAppChannelChatResult;
          },
          accessibilityLabel: null,
          accessibilityRole: "button",
          children: null,
        };
        const intl3 = tmp2(1126).intl;
        const t2 = tmp2(1126).t;
        obj5.accessibilityLabel = intl3.string(isAppChannelChatOpen ? t2["5MstTl"] : t2.kkKapG);
        if (isAppChannelChatOpen) {
          let ChatIcon = tmp2(8451).AppsIcon;
        } else {
          ChatIcon = tmp2(8416).ChatIcon;
        }
        const items13 = [closure_20(ChatIcon, { size: "sm" })];
        let tmp52Result = null;
        if (!isAppChannelChatOpen) {
          if (hasUnread) {
            tmp52Result = closure_20(tmp2(13673).ButtonBadge, { badgePosition: "right" });
          } else {
            tmp52Result = null;
          }
        }
        items13[1] = tmp52Result;
        obj5.children = items13;
        tmp49Result = closure_21(tmp2(6405).PressableOpacity, obj5);
      }
      const items14 = [tmp49Result, ,];
      const obj6 = {
        style: tmp.button,
        onPress: callback2,
        accessibilityLabel: null,
        accessibilityRole: "button",
        children: null,
      };
      const intl4 = tmp2(1126).intl;
      obj6.accessibilityLabel = intl4.string(tmp2(1126).t["5h0QOP"]);
      obj6.children = closure_20(tmp2(6960).MagnifyingGlassIcon, { size: "sm" });
      items14[1] = closure_20(tmp2(6405).PressableOpacity, obj6);
      const obj7 = {
        style: tmp.button,
        onPress: callback3,
        accessibilityLabel: null,
        accessibilityRole: "button",
        children: null,
      };
      const intl5 = tmp2(1126).intl;
      obj7.accessibilityLabel = intl5.string(tmp2(1126).t["+1H47t"]);
      obj7.children = closure_20(tmp2(7313).SettingsIcon, { size: "sm" });
      items14[2] = closure_20(tmp2(6405).PressableOpacity, obj7);
      obj4.children = items14;
      tmp49Result2 = closure_21(recipientId, obj4);
    }
    tmp30Result = tmp49Result2;
  } else {
    const obj8 = { style: tmp.privateChannelButtonsWrapper, children: null };
    let intl = tmp2(1126).intl;
    const string = intl.string;
    const t = tmp2(1126).t;
    if (tmp15) {
      let stringResult = string(t["0D/6Rz"]);
    } else if (stateFromStores1) {
      stringResult = string(t["4ry6yi"]);
    } else {
      stringResult = string(t.focH1t);
    }
    const obj10 = {
      accessibilityLabel: stringResult,
      accessibilityRole: "button",
      style: null,
      onPress: null,
      disabled: null,
      children: null,
    };
    const items15 = [tmp.button, ,];
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
        closure_15();
      };
      obj10.disabled = stateFromStores2;
      if (tmp15) {
        tmp16(587).unsafe_rawColors;
        const unsafe_rawColors1 = { size: "sm", color: null };
        unsafe_rawColors1.color = stateFromStores1 ? unsafe_rawColors1.GREEN_360 : unsafe_rawColors1.BRAND_400;
        closure_20(tmp2(8446).VoiceNormalIcon, unsafe_rawColors1);
        const tmp39 = stateFromStores1 ? unsafe_rawColors1.GREEN_360 : unsafe_rawColors1.BRAND_400;
      } else {
        if (stateFromStores1) {
          const obj12 = { size: "sm", color: tmp16(587).unsafe_rawColors.RED_400 };
          let tmp35Result2 = closure_20(tmp2(9544).PhoneHangUpIcon, obj12);
          let tmp38 = closure_20;
        } else {
          let GREEN_360;
          if (isCallActiveNullable) {
            GREEN_360 = tmp16(587).unsafe_rawColors.GREEN_360;
          }
          const obj13 = { size: "sm", color: GREEN_360 };
          tmp35Result2 = closure_20(tmp2(9542).PhoneCallIcon, obj13);
          tmp38 = closure_20;
        }
        const items16 = [
          tmp35Result2,
          visibleParticipants.map((user, index) => {
            const diff = visibleParticipants.length - 1;
            let num = -6;
            if (0 === index) {
              num = nativeDefault.space.PX_4;
            }
            obj = {
              style: { marginLeft: num },
              user: user.user,
              guildId: "r",
              size: native.AvatarSizes.XSMALL,
              cutout: "aria-live",
            };
            if (index !== diff) {
              const tmp7 = obj;
            }
            obj.cutout = tmp7;
            return constants2(native.CutoutableAvatarImage, obj, user.id);
          }),
        ];
        let tmp38Result = totalParticipantCount > 5;
        if (tmp38Result) {
          const obj14 = { style: tmp.overflowBadge, children: null };
          const obj15 = { variant: "text-xxs/semibold", color: "button-outline-primary-text", children: null };
          const items17 = ["+", totalParticipantCount - 5];
          obj15.children = items17;
          obj14.children = closure_21(tmp2(5147).Text, obj15);
          tmp38Result = tmp38(tmp31, obj14);
        }
        items16[2] = tmp38Result;
        obj10.children = items16;
        const items18 = [closure_21(tmp2(6405).PressableOpacity, obj10), ,];
        let tmp43 = null;
        if (!isMultiUserDMResult) {
          tmp43 = null;
          if (!stateFromStores1) {
            const items19 = [tmp.button];
            let disabledButton1 = null;
            if (videoEnabled) {
              if (stateFromStores2) {
                disabledButton1 = tmp.disabledButton;
              } else {
                disabledButton1 = null;
              }
            }
            const obj16 = {
              style: null,
              onPress: null,
              disabled: null,
              accessibilityLabel: null,
              accessibilityRole: "button",
              children: null,
            };
            items19[1] = disabledButton1;
            obj16.style = items19;
            obj16.onPress = callback1;
            let tmp45 = !tmp10;
            if (videoEnabled) {
              if (!stateFromStores2) {
                stateFromStores2 = !stateFromStores3;
              }
              tmp45 = stateFromStores2;
            }
            obj16.disabled = tmp45;
            const intl2 = tmp2(1126).intl;
            obj16.accessibilityLabel = intl2.string(tmp2(1126).t.oCqlGG);
            if (videoEnabled) {
              let VideoDenyIcon = tmp2(11093).VideoIcon;
            } else {
              VideoDenyIcon = tmp2(13700).VideoDenyIcon;
            }
            obj16.children = tmp38(VideoDenyIcon, { size: "sm" });
            tmp38(tmp2(6405).PressableOpacity, obj16);
          }
        }
        items18[1] = tmp43;
        items18[2] = memo1;
        obj8.children = items18;
        tmp30Result = closure_21(tmp31, obj8);
      }
    } else {
      const unsafe_rawColors = tmp16(587).unsafe_rawColors;
    }
  }
  return tmp30Result;
});
