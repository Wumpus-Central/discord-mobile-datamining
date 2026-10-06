// discord_app/modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl6 from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ChangelogConstants from "../../../../changelog/ChangelogConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelRTCStore2 from "../../../../calls/ChannelRTCStore.tsx";
import CallConstants from "../../../../calls/CallConstants.tsx";
import Constants2 from "../../../../../../discord_common/js/packages/media-engine/Constants.tsx";
import AppAnalyticsUtilsDefault from "../../../../app_analytics/AppAnalyticsUtils.tsx";
import PrivateChannelCallUtils from "../../../../../utils/native/PrivateChannelCallUtils.tsx";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import MagnifyingGlassIcon from "../../../../../design/components/Icon/native/redesign/generated/MagnifyingGlassIcon.tsx";
import ChannelDetailsStore from "../../sidebar/details/stores/ChannelDetailsStore.tsx";
import TrackingConstants from "../../../../search/native/tracking/TrackingConstants.tsx";
import getPrivateChannelCallDefault from "../../../../calls/native/getPrivateChannelCall.tsx";
import useSearchContext from "../../../../search/native/hooks/useSearchContext.tsx";
import search_tracking_TrackingDefault from "../../../../search/native/tracking/Tracking.tsx";
import ConfirmStartCall from "../../../../voice_calls/native/ConfirmStartCall.tsx";
import VoicePanelVideoGuardErrorAlert from "../../../../voice_panel/native/alerts/VoicePanelVideoGuardErrorAlert.tsx";
import ChannelHeader from "ChannelHeader.tsx";
import SafetyToolsButton from "../../../../self_mod/inappropriate_conversation/native/SafetyToolsButton.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../../../stores/MediaEngineStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../../../stores/VoiceStateStore.tsx";
import Constants from "../../../../../Constants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;
const ChannelRTCStore = ChannelRTCStore2;
let dependencyMap;

let closure_14;
let closure_15;
let closure_20;
let closure_21;
let map1;
const View = react_native.View;
const NO_PARTICIPANTS = ChannelRTCStore2.NO_PARTICIPANTS;
let closure_12 = ChannelDetailsStore.setIsChannelDetailsSearchActive;
({ AnalyticEvents: map1, AnalyticsSections: closure_14, ChannelTypes: closure_15 } = Constants);
const ParticipantTypes = CallConstants.ParticipantTypes;
const CHANGELOG_URL = ChangelogConstants.CHANGELOG_URL;
let closure_18 = TrackingConstants.SearchEntrypointAnalyticsLocations;
const Features = Constants2.Features;
({ jsx: closure_20, jsxs: closure_21 } = Fragment);
const tmp4 = native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL];
let closure_22 = tmp4;
let obj = { direction: native.CutoutDirection.RIGHT, radius: tmp4 / 2 + 3, inset: -6 };
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
    overflowBadge: size,
  };
  ({
    borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
    minHeight: nativeDefault.space.PX_32,
    minWidth: nativeDefault.space.PX_32,
    padding: nativeDefault.space.PX_4,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  });
  size = {
    backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
    borderRadius: nativeDefault.radii.round,
    width: height,
    height,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -6,
  };
  return obj;
});
const memoResult = react.memo(function PrivateChannelButtons(channelId) {
  let VideoDenyIcon;
  let button;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let obj15;
  let target;
  let tmp26Result;
  let tmp29;
  let tmp38;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  let inappropriateConversationSafetyToolsWarningForChannel;
  let closure_6;
  let closure_7;
  let callParticipants;
  let visibleParticipants;
  let totalParticipantCount;
  let closure_11;
  let application;
  let callback;
  let closure_14;
  let callback2;
  const tmp = closure_24();
  dependencyMap = tmp;
  let tmp2 = channelId;
  obj = channelId(504);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let recipientId;
  if (stateFromStores != null) {
    recipientId = stateFromStores.getRecipientId();
  }
  const items1 = [closure_11];
  const items2 = [stateFromStores];
  const tmp2Result = tmp2(504);
  const stateFromStores1 = tmp2Result.useStateFromStores(
    items1,
    () => {
      const isInChannelResult = null != stateFromStores && VoiceStateStore.isInChannel(tmp.id);
      return isInChannelResult;
    },
    items2,
  );
  const tmp2Result6 = tmp2(9844);
  inappropriateConversationSafetyToolsWarningForChannel =
    tmp2Result6.useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  let tmp7 = null != inappropriateConversationSafetyToolsWarningForChannel && null != recipientId;
  closure_6 = tmp7;
  const items3 = [visibleParticipants, totalParticipantCount];
  const tmp2Result7 = tmp2(504);
  let stateFromStores2 = tmp2Result7.useStateFromStores(items3, () => {
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    let tmp2 = type === callback2.DM && null != recipientId;
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
  const items4 = [callParticipants];
  const tmp2Result8 = tmp2(504);
  const stateFromStores3 = tmp2Result8.useStateFromStores(items4, () => callParticipants.supports(constants2.VIDEO));
  const VideoGuardExperiment = tmp2(13120).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig({ location: "PrivateChannelButtons" }).videoEnabled;
  closure_7 = tmp10;
  let id;
  const useIsCallActiveNullable = tmp2(7651).useIsCallActiveNullable;
  tmp2(7651);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const isCallActiveNullable = useIsCallActiveNullable(id);
  const items5 = [inappropriateConversationSafetyToolsWarningForChannel];
  const tmp2Result10 = tmp2(504);
  callParticipants = tmp2Result10.useStateFromStoresObject(items5, () => {
    let num;
    let participants;
    let isMultiUserDMResult;
    if (stateFromStores != null) {
      isMultiUserDMResult = stateFromStores.isMultiUserDM();
    }
    if (true === isMultiUserDMResult) {
      participants = ChannelRTCStore.getParticipants(stateFromStores.id);
    } else {
      participants = NO_PARTICIPANTS;
    }
    let isMultiUserDMResult1;
    const obj2 = { callParticipants: participants, participantsVersion: num };
    if (stateFromStores != null) {
      isMultiUserDMResult1 = stateFromStores.isMultiUserDM();
    }
    num = -1;
    if (true === isMultiUserDMResult1) {
      num = ChannelRTCStore.getParticipantsVersion(stateFromStores.id);
    }
    return obj2;
  }).callParticipants;
  const items6 = [callParticipants];
  const memo = stateFromStores.useMemo(() => {
    const found = callParticipants.filter((type) => type.type === constants.USER);
    obj = { visibleParticipants: found.slice(0, 5), totalParticipantCount: found.length };
    return obj;
  }, items6);
  visibleParticipants = memo.visibleParticipants;
  totalParticipantCount = memo.totalParticipantCount;
  let isMultiUserDMResult;
  if (stateFromStores != null) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  let tmp16 = isMultiUserDMResult;
  if (tmp16) {
    let num = 0;
    tmp16 = callParticipants.length > 0;
  }
  closure_11 = tmp16;
  let obj2 = { context: { type: "channel", channel: stateFromStores } };
  const tmp18 = screenIndex(13121)(obj2);
  application = tmp18.application;
  const items7 = [stateFromStores];
  const isAppDM = tmp18.isAppDM;
  callback = obj8.useCallback(() => {
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
          const obj3 = ConfirmStartCall;
          obj3.confirmStartCall(obj2.onPress);
        }
      }
    }
  }, items7);
  const items8 = [callback];
  closure_14 = obj8.useCallback(() => {
    callback(false);
  }, items8);
  const items9 = [callback, !videoEnabled];
  const items10 = [stateFromStores, channelId, screenIndex];
  const callback1 = obj8.useCallback(() => {
    let intl;
    if (closure_7) {
      const openAlert = useAlertStore.openAlert;
      useAlertStore;
      const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY;
      obj = { title: intl.string(intl6.t["8jSzSe"]) };
      const tmp9 = VoicePanelVideoGuardErrorAlertDefault;
      intl = intl6.intl;
      openAlert(VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, closure_20(tmp9, obj));
    } else {
      callback(true);
    }
  }, items9);
  callback2 = obj8.useCallback(() => {
    obj = ChannelHeader;
    const result = obj.navigateToChannelDetails(channelId, screenIndex, "private-channel-search-button");
    application(channelId, true, "action");
    if (null != stateFromStores) {
      const guildId = stateFromStores.getGuildId();
      const isThreadResult = stateFromStores.isThread();
      const tmpResult = useSearchContext;
      const channelDetailsSearchContext = tmpResult.getChannelDetailsSearchContext(channelId, guildId, isThreadResult);
      const obj3 = { searchContext: channelDetailsSearchContext, searchLocation: constants.INDIVIDUAL_DM };
      const obj4 = search_tracking_TrackingDefault;
      obj4.trackSearchOpened(obj3);
    }
  }, items10);
  const items11 = [recipientId, stateFromStores, application];
  const items12 = [tmp7, tmp.button, callback2, channelId, recipientId, ,];
  let id1;
  const callback3 = obj8.useCallback(() => {
    const tmp2 = null != recipientId && null != stateFromStores && null != application;
    if (tmp2) {
      const obj2 = {
        settings_type: "user",
        destination_pane: closure_14.SETTINGS_APP_DMS_MENU,
        source_page: "app_dm_settings",
        application_id: application.id,
      };
      obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(map1.SETTINGS_PANE_VIEWED, obj2);
      const obj4 = { userId: recipientId, channel: stateFromStores, application };
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(13138, dependencyMap.paths), "AppDMOptionsBottomSheet", obj4);
    }
  }, items11);
  const useMemo = obj8.useMemo;
  if (inappropriateConversationSafetyToolsWarningForChannel != null) {
    id1 = inappropriateConversationSafetyToolsWarningForChannel.id;
  }
  items12[5] = id1;
  let type;
  if (inappropriateConversationSafetyToolsWarningForChannel != null) {
    type = inappropriateConversationSafetyToolsWarningForChannel.type;
  }
  items12[6] = type;
  const memo1 = useMemo(() => {
    let intl;
    let tmpResult;
    if (closure_6) {
      const obj3 = { channelId, recipientId, warningId: null, warningType: null };
      ({ id: obj2.warningId, type: obj2.warningType } = inappropriateConversationSafetyToolsWarningForChannel);
      tmpResult = closure_20(SafetyToolsButton.SafetyToolsButton, obj3);
    } else {
      obj = {
        style: button.button,
        onPress: callback2,
        accessibilityLabel: intl.string(intl6.t["5h0QOP"]),
        accessibilityRole: "button",
        children: closure_20(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm" }),
      };
      const PressableOpacity = Pressables.PressableOpacity;
      intl = intl6.intl;
      tmpResult = closure_20(PressableOpacity, obj);
    }
    return tmpResult;
  }, items12);
  if (screenIndex(7530)(channelId)) {
    let obj3 = {
      style: tmp.button,
      onPress() {
        obj = screenIndex(button[39]);
        obj.openURL(target);
        const obj2 = screenIndex(button[40]);
        const obj3 = { cta_type: "channel_header", target };
        obj2.track(callback.CHANGE_LOG_CTA_CLICKED, obj3);
      },
      accessibilityLabel: intl5.string(tmp2(1126).t["+KSnWX"]),
      children: closure_20(tmp2(12772).WindowLaunchIcon, { size: "sm" }),
    };
    const PressableOpacity5 = tmp2(5916).PressableOpacity;
    intl5 = tmp2(1126).intl;
    tmp26Result = closure_20(PressableOpacity5, obj3);
  } else if (isAppDM) {
    let tmp40 = null;
    if (null != application) {
      let obj4 = { style: tmp.privateChannelButtonsWrapper, children: items13 };
      const obj5 = {
        style: tmp.button,
        onPress: callback2,
        accessibilityLabel: intl3.string(tmp2(1126).t["5h0QOP"]),
        accessibilityRole: "button",
        children: closure_20(tmp2(6555).MagnifyingGlassIcon, { size: "sm" }),
      };
      const PressableOpacity3 = tmp2(5916).PressableOpacity;
      intl3 = tmp2(1126).intl;
      items13 = [closure_20(PressableOpacity3, obj5)];
      const obj6 = {
        style: tmp.button,
        onPress: callback3,
        accessibilityLabel: intl4.string(tmp2(1126).t["+1H47t"]),
        accessibilityRole: "button",
        children: closure_20(tmp2(6893).SettingsIcon, { size: "sm" }),
      };
      const PressableOpacity4 = tmp2(5916).PressableOpacity;
      intl4 = tmp2(1126).intl;
      items13[1] = closure_20(PressableOpacity4, obj6);
      tmp40 = closure_21(recipientId, obj4);
    }
    tmp26Result = tmp40;
  } else {
    let stringResult;
    let tmp31Result;
    let tmp34;
    const obj7 = { style: tmp.privateChannelButtonsWrapper, children: items17 };
    let PressableOpacity = tmp2(5916).PressableOpacity;
    let intl = tmp2(1126).intl;
    const string = intl.string;
    const t = tmp2(1126).t;
    if (tmp16) {
      stringResult = string(t["0D/6Rz"]);
    } else if (stateFromStores1) {
      stringResult = string(t["4ry6yi"]);
    } else {
      stringResult = string(t.focH1t);
    }
    const obj9 = {
      accessibilityLabel: stringResult,
      accessibilityRole: "button",
      style: items14,
      onPress() {
        if (closure_11) {
          if (null != stateFromStores) {
            obj = PrivateChannelCallUtils;
            obj.openChannelCallModal(tmp2);
          }
        }
        closure_14();
      },
      disabled: stateFromStores2,
      children: items15,
    };
    items14 = [tmp.button, ,];
    let num2;
    if (tmp16) {
      num2 = 1;
    }
    const obj10 = { borderWidth: num2, borderColor: tmp29 };
    tmp29 = undefined;
    if (tmp16) {
      const unsafe_rawColors = tmp17(587).unsafe_rawColors;
      tmp29 = stateFromStores1 ? unsafe_rawColors.GREEN_360 : unsafe_rawColors.BRAND_400;
    }
    items14[1] = obj10;
    let disabledButton = null;
    if (stateFromStores2) {
      disabledButton = tmp.disabledButton;
    }
    items14[2] = disabledButton;
    if (tmp16) {
      const VoiceNormalIcon = tmp2(5892).VoiceNormalIcon;
      const unsafe_rawColors2 = tmp17(587).unsafe_rawColors;
      const obj11 = { size: "sm", color: stateFromStores1 ? unsafe_rawColors2.GREEN_360 : unsafe_rawColors2.BRAND_400 };
      tmp31Result = closure_20(VoiceNormalIcon, obj11);
      tmp34 = closure_20;
    } else if (stateFromStores1) {
      const obj12 = { size: "sm", color: screenIndex(587).unsafe_rawColors.RED_400 };
      const PhoneHangUpIcon = tmp2(7536).PhoneHangUpIcon;
      tmp31Result = closure_20(PhoneHangUpIcon, obj12);
      tmp34 = closure_20;
    } else {
      let GREEN_360;
      const PhoneCallIcon = tmp2(7534).PhoneCallIcon;
      if (isCallActiveNullable) {
        GREEN_360 = tmp17(587).unsafe_rawColors.GREEN_360;
      }
      const obj13 = { size: "sm", color: GREEN_360 };
      tmp31Result = closure_20(PhoneCallIcon, obj13);
      tmp34 = closure_20;
    }
    items15 = [
      tmp31Result,
      visibleParticipants.map((user, index) => {
        let tmp7;
        const diff = visibleParticipants.length - 1;
        let num = -6;
        const CutoutableAvatarImage = native.CutoutableAvatarImage;
        if (0 === index) {
          num = nativeDefault.space.PX_4;
        }
        obj = {
          style: { marginLeft: num },
          user: user.user,
          guildId: "r",
          size: native.AvatarSizes.XSMALL,
          cutout: tmp7,
        };
        if (index !== diff) {
          tmp7 = obj;
        }
        return closure_20(CutoutableAvatarImage, obj, user.id);
      }),
    ];
    let tmp34Result = totalParticipantCount > 5;
    if (tmp34Result) {
      const obj14 = { style: tmp.overflowBadge, children: closure_21(tmp2(4892).Text, obj15) };
      obj15 = { variant: "text-xxs/semibold", color: "button-outline-primary-text", children: items16 };
      items16 = ["+", totalParticipantCount - 5];
      tmp34Result = tmp34(tmp27, obj14);
    }
    items15[2] = tmp34Result;
    items17 = [closure_21(PressableOpacity, obj9), ,];
    let tmp34Result2 = null;
    if (!isMultiUserDMResult) {
      tmp34Result2 = null;
      if (!stateFromStores1) {
        const items18 = [tmp.button];
        let disabledButton1 = null;
        const PressableOpacity2 = tmp2(5916).PressableOpacity;
        if (videoEnabled) {
          if (stateFromStores2) {
            disabledButton1 = tmp.disabledButton;
          } else {
            disabledButton1 = null;
          }
        }
        items18[1] = disabledButton1;
        const obj16 = {
          style: items18,
          onPress: callback1,
          disabled: tmp38,
          accessibilityLabel: intl2.string(tmp2(1126).t.oCqlGG),
          accessibilityRole: "button",
          children: tmp34(VideoDenyIcon, { size: "sm" }),
        };
        tmp38 = !tmp10;
        if (videoEnabled) {
          if (!stateFromStores2) {
            stateFromStores2 = !stateFromStores3;
          }
          tmp38 = stateFromStores2;
        }
        intl2 = tmp2(1126).intl;
        if (videoEnabled) {
          VideoDenyIcon = tmp2(11247).VideoIcon;
        } else {
          VideoDenyIcon = tmp2(13140).VideoDenyIcon;
        }
        tmp34Result2 = tmp34(PressableOpacity2, obj16);
      }
    }
    items17[1] = tmp34Result2;
    items17[2] = memo1;
    tmp26Result = closure_21(tmp27, obj7);
  }
  return tmp26Result;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx");

export default memoResult;
