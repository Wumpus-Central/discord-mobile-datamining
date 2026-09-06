// discord_app/modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppAnalyticsUtilsDefault from "../../../../app_analytics/AppAnalyticsUtils.tsx";
import PrivateChannelCallUtils from "../../../../../utils/native/PrivateChannelCallUtils.tsx";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import MagnifyingGlassIcon from "../../../../../design/components/Icon/native/redesign/generated/MagnifyingGlassIcon.tsx";
import getPrivateChannelCallDefault from "../../../../calls/native/getPrivateChannelCall.tsx";
import useSearchContext from "../../../../search/native/hooks/useSearchContext.tsx";
import search_tracking_TrackingDefault from "../../../../search/native/tracking/Tracking.tsx";
import ConfirmStartCall from "../../../../voice_calls/native/ConfirmStartCall.tsx";
import VoicePanelVideoGuardErrorAlert from "../../../../voice_panel/native/alerts/VoicePanelVideoGuardErrorAlert.tsx";
import ChannelHeader from "ChannelHeader.tsx";
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
const NO_PARTICIPANTS = fn(4576).NO_PARTICIPANTS;
let closure_12 = fn(7876).setIsChannelDetailsSearchActive;
const Constants = fn(1074);
({ AnalyticEvents: map1, AnalyticsSections: closure_14, ChannelTypes: closure_15 } = Constants);
const ParticipantTypes = fn(4581).ParticipantTypes;
const CHANGELOG_URL = fn(2010).CHANGELOG_URL;
let closure_18 = fn(7877).SearchEntrypointAnalyticsLocations;
const Features = fn(4585).Features;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
const tmp4 = fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.XSMALL];
let closure_22 = tmp4;
let button = { direction: fn(1178).CutoutDirection.RIGHT, radius: tmp4 / 2 + 3, inset: -6 };
const createStyles = fn(4560);
let closure_24 = createStyles.createStyles(() => {
  button = {
    privateChannelButtonsWrapper: { flexDirection: "row", gap: 12, paddingEnd: 1 },
    button: null,
    disabledButton: null,
    overflowBadge: null,
  };
  button = {
    borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
    minHeight: nativeDefault.space.PX_32,
    minWidth: nativeDefault.space.PX_32,
    padding: nativeDefault.space.PX_4,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  };
  button.button = button;
  button.disabledButton = { opacity: 0.6 };
  const size = {
    backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
    borderRadius: nativeDefault.radii.round,
    width: height,
    height,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -6,
  };
  button.overflowBadge = size;
  return button;
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
  const tmp = closure_24();
  dependencyMap = tmp;
  let obj = channelId(504);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let recipientId;
  if (stateFromStores != null) {
    recipientId = stateFromStores.getRecipientId();
  }
  let tmp2Result = tmp2(504);
  const items1 = [closure_11];
  const items2 = [stateFromStores];
  const stateFromStores1 = tmp2Result.useStateFromStores(
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
  tmp2Result = tmp2(11395);
  inappropriateConversationSafetyToolsWarningForChannel =
    tmp2Result.useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  closure_6 = tmp7;
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
        const user = UserStore.getUser(tmp5);
        let isProvisional;
        if (user != null) {
          isProvisional = user.isProvisional;
        }
        isBlockedResult = true === isProvisional;
      }
      tmp2 = isBlockedResult;
      tmp5 = recipientId;
    }
    return tmp2;
  });
  const tmp2Result1 = channelId(504);
  const items4 = [callParticipants];
  const stateFromStores3 = channelId(504).useStateFromStores(items4, () => callParticipants.supports(constants2.VIDEO));
  const VideoGuardExperiment = tmp2(13260).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig({ location: "PrivateChannelButtons" }).videoEnabled;
  closure_7 = tmp10;
  const tmp2Result2 = channelId(504);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const isCallActiveNullable = channelId(7981).useIsCallActiveNullable(id);
  const tmp2Result3 = channelId(7981);
  const items5 = [inappropriateConversationSafetyToolsWarningForChannel];
  callParticipants = channelId(504).useStateFromStoresObject(items5, () => {
    let obj = stateFromStores;
    let isMultiUserDMResult;
    if (stateFromStores != null) {
      isMultiUserDMResult = obj.isMultiUserDM();
    }
    if (true === isMultiUserDMResult) {
      let participants = ChannelRTCStore.getParticipants(obj.id);
    } else {
      participants = NO_PARTICIPANTS;
    }
    obj = { callParticipants: participants, participantsVersion: null };
    let isMultiUserDMResult1;
    if (obj != null) {
      isMultiUserDMResult1 = obj.isMultiUserDM();
    }
    let num = -1;
    if (true === isMultiUserDMResult1) {
      num = ChannelRTCStore.getParticipantsVersion(obj.id);
    }
    obj.participantsVersion = num;
    return obj;
  }).callParticipants;
  let obj8 = stateFromStores;
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
  obj = { context: { type: "channel", channel: stateFromStores } };
  const tmp17 = screenIndex(13261)(obj);
  application = tmp17.application;
  const items7 = [stateFromStores];
  callback = obj8.useCallback(() => {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (null != stateFromStores) {
      if (obj.isPrivate()) {
        const obj2 = getPrivateChannelCallDefault(obj, flag);
        if (obj2.inCall) {
          obj2.onPress();
        } else {
          ConfirmStartCall.confirmStartCall(obj2.onPress);
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
    if (closure_7) {
      const obj = { title: null };
      const intl = util.intl;
      obj.title = intl.string(util.t["8jSzSe"]);
      obj.openAlert(
        VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY,
        closure_2_20(VoicePanelVideoGuardErrorAlertDefault, obj),
      );
    } else {
      callback(true);
    }
  }, items9);
  callback2 = obj8.useCallback(() => {
    let obj = ChannelHeader;
    const result = obj.navigateToChannelDetails(channelId, screenIndex, "private-channel-search-button");
    application(channelId, true, "action");
    if (null != stateFromStores) {
      const guildId = obj2.getGuildId();
      const isThreadResult = obj2.isThread();
      const channelDetailsSearchContext = useSearchContext.getChannelDetailsSearchContext(
        channelId,
        guildId,
        isThreadResult,
      );
      const tmpResult = useSearchContext;
      obj = { searchContext: channelDetailsSearchContext, searchLocation: constants.INDIVIDUAL_DM };
      search_tracking_TrackingDefault.trackSearchOpened(obj);
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
  const callback3 = obj8.useCallback(() => {
    let tmp2 = null != recipientId;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      tmp2 = null != application;
    }
    if (tmp2) {
      let obj = {
        settings_type: "user",
        destination_pane: constants2.SETTINGS_APP_DMS_MENU,
        source_page: "app_dm_settings",
        application_id: application.id,
      };
      obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
      obj = { userId: recipientId, channel: stateFromStores, application };
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(13277, dependencyMap.paths),
        "AppDMOptionsBottomSheet",
        obj,
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
  const memo1 = obj8.useMemo(() => {
    if (closure_6) {
      let obj = { channelId, recipientId, warningId: null, warningType: null };
      ({ id: obj2.warningId, type: obj2.warningType } = inappropriateConversationSafetyToolsWarningForChannel);
      let tmpResult = tmp(tmp2(13278).SafetyToolsButton, obj);
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
      obj.children = closure_2_20(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm" });
      tmpResult = tmp(tmp2(5123).PressableOpacity, obj);
    }
    return tmpResult;
  }, items12);
  if (screenIndex(8374)(channelId)) {
    obj = {
      style: tmp.button,
      onPress() {
        let obj = screenIndex(button[39]);
        obj.openURL(target);
        obj = { cta_type: "channel_header", target };
        screenIndex(button[40]).track(callback.CHANGE_LOG_CTA_CLICKED, obj);
      },
      accessibilityLabel: null,
      children: null,
    };
    const intl5 = tmp2(1114).intl;
    obj.accessibilityLabel = intl5.string(tmp2(1114).t["+KSnWX"]);
    obj.children = closure_20(tmp2(12956).WindowLaunchIcon, { size: "sm" });
    let tmp25Result = closure_20(tmp2(5123).PressableOpacity, obj);
  } else if (tmp17.isAppDM) {
    let tmp43 = null;
    if (null != application) {
      const obj1 = { style: tmp.privateChannelButtonsWrapper, children: null };
      let obj2 = {
        style: tmp.button,
        onPress: callback2,
        accessibilityLabel: null,
        accessibilityRole: "button",
        children: null,
      };
      const intl3 = tmp2(1114).intl;
      obj2.accessibilityLabel = intl3.string(tmp2(1114).t["5h0QOP"]);
      obj2.children = closure_20(tmp2(7051).MagnifyingGlassIcon, { size: "sm" });
      const items13 = [closure_20(tmp2(5123).PressableOpacity, obj2)];
      let obj3 = {
        style: tmp.button,
        onPress: callback3,
        accessibilityLabel: null,
        accessibilityRole: "button",
        children: null,
      };
      const intl4 = tmp2(1114).intl;
      obj3.accessibilityLabel = intl4.string(tmp2(1114).t["+1H47t"]);
      obj3.children = closure_20(tmp2(7380).SettingsIcon, { size: "sm" });
      items13[1] = closure_20(tmp2(5123).PressableOpacity, obj3);
      obj1.children = items13;
      tmp43 = closure_21(recipientId, obj1);
    }
    tmp25Result = tmp43;
  } else {
    let obj4 = { style: tmp.privateChannelButtonsWrapper, children: null };
    let intl = tmp2(1114).intl;
    const string = intl.string;
    const t = tmp2(1114).t;
    if (tmp15) {
      let stringResult = string(t["0D/6Rz"]);
    } else if (stateFromStores1) {
      stringResult = string(t["4ry6yi"]);
    } else {
      stringResult = string(t.focH1t);
    }
    const obj5 = {
      accessibilityLabel: stringResult,
      accessibilityRole: "button",
      style: null,
      onPress: null,
      disabled: null,
      children: null,
    };
    const items14 = [tmp.button, ,];
    let num2;
    if (tmp15) {
      num2 = 1;
    }
    const obj6 = { borderWidth: num2, borderColor: null };
    if (!tmp15) {
      obj6.borderColor = undefined;
      items14[1] = obj6;
      let disabledButton = null;
      if (stateFromStores2) {
        disabledButton = tmp.disabledButton;
      }
      items14[2] = disabledButton;
      obj5.style = items14;
      obj5.onPress = function onPress() {
        if (closure_11) {
          if (null != stateFromStores) {
            PrivateChannelCallUtils.openChannelCallModal(tmp);
          }
        }
        closure_14();
      };
      obj5.disabled = stateFromStores2;
      if (tmp15) {
        tmp16(576).unsafe_rawColors;
        let unsafe_rawColors = { size: "sm", color: null };
        unsafe_rawColors.color = stateFromStores1 ? unsafe_rawColors.GREEN_360 : unsafe_rawColors.BRAND_400;
        let tmp30Result = tmp30(tmp2(5101).VoiceNormalIcon, unsafe_rawColors);
        const tmp34 = stateFromStores1 ? unsafe_rawColors.GREEN_360 : unsafe_rawColors.BRAND_400;
      } else {
        if (stateFromStores1) {
          const obj7 = { size: "sm", color: tmp16(576).unsafe_rawColors.RED_400 };
          tmp30Result = tmp30(tmp2(7882).PhoneHangUpIcon, obj7);
          let tmp33 = tmp30;
        } else {
          let GREEN_360;
          if (isCallActiveNullable) {
            GREEN_360 = tmp16(576).unsafe_rawColors.GREEN_360;
          }
          obj8 = { size: "sm", color: GREEN_360 };
          tmp30Result = tmp30(tmp2(7880).PhoneCallIcon, obj8);
          tmp33 = tmp30;
        }
        const items15 = [
          tmp30Result,
          visibleParticipants.map((user, index) => {
            const diff = visibleParticipants.length - 1;
            let num = -6;
            if (0 === index) {
              num = nativeDefault.space.PX_4;
            }
            const obj = {
              style: { marginLeft: num },
              user: user.user,
              guildId: "r",
              size: native.AvatarSizes.XSMALL,
              cutout: "absolute",
            };
            if (index !== diff) {
              const tmp7 = obj;
            }
            obj.cutout = tmp7;
            return closure_2_20(native.CutoutableAvatarImage, obj, user.id);
          }),
        ];
        let tmp33Result = totalParticipantCount > 5;
        if (tmp33Result) {
          const obj9 = { style: tmp.overflowBadge, children: null };
          const obj10 = { variant: "text-xxs/semibold", color: "button-outline-primary-text", children: null };
          const items16 = ["+", totalParticipantCount - 5];
          obj10.children = items16;
          obj9.children = tmp25(tmp2(4556).Text, obj10);
          tmp33Result = tmp33(tmp26, obj9);
        }
        items15[2] = tmp33Result;
        obj5.children = items15;
        const items17 = [tmp25(tmp2(5123).PressableOpacity, obj5), ,];
        let tmp38 = null;
        if (!isMultiUserDMResult) {
          tmp38 = null;
          if (!stateFromStores1) {
            const items18 = [tmp.button];
            let disabledButton1 = null;
            if (videoEnabled) {
              if (stateFromStores2) {
                disabledButton1 = tmp.disabledButton;
              } else {
                disabledButton1 = null;
              }
            }
            const obj11 = {
              style: null,
              onPress: null,
              disabled: null,
              accessibilityLabel: null,
              accessibilityRole: "button",
              children: null,
            };
            items18[1] = disabledButton1;
            obj11.style = items18;
            obj11.onPress = callback1;
            let tmp40 = !tmp10;
            if (videoEnabled) {
              if (!stateFromStores2) {
                stateFromStores2 = !stateFromStores3;
              }
              tmp40 = stateFromStores2;
            }
            obj11.disabled = tmp40;
            const intl2 = tmp2(1114).intl;
            obj11.accessibilityLabel = intl2.string(tmp2(1114).t.oCqlGG);
            if (videoEnabled) {
              let VideoDenyIcon = tmp2(10110).VideoIcon;
            } else {
              VideoDenyIcon = tmp2(13279).VideoDenyIcon;
            }
            obj11.children = tmp33(VideoDenyIcon, { size: "sm" });
            tmp33Result = tmp33(tmp2(5123).PressableOpacity, obj11);
          }
        }
        items17[1] = tmp38;
        items17[2] = memo1;
        obj4.children = items17;
        tmp25Result = tmp25(tmp26, obj4);
      }
    } else {
      unsafe_rawColors = tmp16(576).unsafe_rawColors;
    }
  }
  return tmp25Result;
});
