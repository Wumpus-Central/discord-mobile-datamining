// discord_app/modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../calls/ChannelRTCStore.tsx";
import { NO_PARTICIPANTS } from "../../../../calls/ChannelRTCStore.tsx";
import closure_7 from "../../../../../stores/ChannelStore.tsx";
import closure_8 from "../../../../../stores/MediaEngineStore.tsx";
import closure_9 from "../../../../../stores/RelationshipStore.tsx";
import closure_10 from "../../../../../stores/UserStore.tsx";
import closure_11 from "../../../../../stores/VoiceStateStore.tsx";
import { setIsChannelDetailsSearchActive as closure_12 } from "../../sidebar/details/stores/ChannelDetailsStore.tsx";
import ME from "../../../../../Constants.tsx";
import { ParticipantTypes } from "../../../../calls/CallConstants.tsx";
import { CHANGELOG_URL } from "../../../../changelog/ChangelogConstants.tsx";
import { SearchEntrypointAnalyticsLocations as closure_18 } from "../../../../search/native/tracking/TrackingConstants.tsx";
import { Features } from "../../../../../../discord_common/js/packages/media-engine/Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
({ AnalyticEvents: map1, AnalyticsSections: closure_14, ChannelTypes: closure_15 } = ME);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
const tmp4 = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.XSMALL];
let closure_22 = tmp4;
let obj = { direction: require("Button").CutoutDirection.RIGHT, radius: tmp4 / 2 + 3, inset: -6 };
let closure_24 = createCacheKey.createStyles(() => {
  obj = { privateChannelButtonsWrapper: { flexDirection: "row", gap: 12, paddingEnd: 1 }, button: null, disabledButton: null, overflowBadge: null };
  obj = { borderRadius: ThemesDefault.modules.button.BORDER_RADIUS, minHeight: ThemesDefault.space.PX_32, minWidth: ThemesDefault.space.PX_32, padding: ThemesDefault.space.PX_4, justifyContent: "center", flexDirection: "row", alignItems: "center" };
  obj[1] = obj;
  obj[2] = { opacity: 0.6 };
  obj = { backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: ThemesDefault.radii.round, width: closure_22, height: closure_22, justifyContent: "center", alignItems: "center", marginLeft: -6 };
  obj[3] = obj;
  return obj;
});
const memoResult = importAllResult.memo(function PrivateChannelButtons(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  dependencyMap = undefined;
  let stateFromStores;
  let recipientId;
  let inappropriateConversationSafetyToolsWarningForChannel;
  closure_6 = undefined;
  let callParticipants;
  let visibleParticipants;
  let totalParticipantCount;
  closure_10 = undefined;
  let application;
  let callback;
  closure_13 = undefined;
  let callback2;
  const tmp = callback3();
  dependencyMap = tmp;
  obj = channelId(589);
  const items = [callParticipants];
  stateFromStores = obj.useStateFromStores(items, () => callParticipants.getChannel(channelId));
  recipientId = undefined;
  if (stateFromStores != null) {
    recipientId = stateFromStores.getRecipientId();
  }
  let tmp2Result = tmp2(589);
  const items1 = [application];
  const items2 = [stateFromStores];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    let isInChannelResult = null != stateFromStores;
    if (isInChannelResult) {
      isInChannelResult = application.isInChannel(tmp.id);
    }
    return isInChannelResult;
  }, items2);
  tmp2Result = tmp2(11029);
  inappropriateConversationSafetyToolsWarningForChannel = tmp2Result.useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  closure_6 = tmp7;
  const items3 = [totalParticipantCount, closure_10];
  let stateFromStores2 = channelId(589).useStateFromStores(items3, () => {
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    let tmp2 = type === closure_1_15.DM;
    if (tmp2) {
      tmp2 = null != recipientId;
    }
    if (tmp2) {
      let isBlockedResult = totalParticipantCount.isBlocked(recipientId);
      if (!isBlockedResult) {
        user = user.getUser(tmp5);
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
  const tmp2Result1 = channelId(589);
  const items4 = [visibleParticipants];
  const stateFromStores3 = channelId(589).useStateFromStores(items4, () => visibleParticipants.supports(constants.VIDEO));
  const tmp2Result2 = channelId(589);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const isCallActiveNullable = channelId(7890).useIsCallActiveNullable(id);
  const tmp2Result3 = channelId(7890);
  const items5 = [inappropriateConversationSafetyToolsWarningForChannel];
  callParticipants = channelId(589).useStateFromStoresObject(items5, () => {
    obj = stateFromStores;
    let isMultiUserDMResult;
    if (stateFromStores != null) {
      isMultiUserDMResult = obj.isMultiUserDM();
    }
    if (true === isMultiUserDMResult) {
      let participants = inappropriateConversationSafetyToolsWarningForChannel.getParticipants(obj.id);
    } else {
      participants = closure_6;
    }
    obj = { callParticipants: participants, participantsVersion: null };
    let isMultiUserDMResult1;
    if (obj != null) {
      isMultiUserDMResult1 = obj.isMultiUserDM();
    }
    let num = -1;
    if (true === isMultiUserDMResult1) {
      num = inappropriateConversationSafetyToolsWarningForChannel.getParticipantsVersion(obj.id);
    }
    obj[1] = num;
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
  let tmp14 = isMultiUserDMResult;
  if (isMultiUserDMResult) {
    tmp14 = callParticipants.length > 0;
  }
  closure_10 = tmp14;
  const tmp16 = screenIndex(12926)({ context: { type: "channel", channel: stateFromStores } });
  application = tmp16.application;
  const items7 = [stateFromStores];
  callback = obj8.useCallback(() => {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (null != stateFromStores) {
      if (obj.isPrivate()) {
        const obj2 = screenIndex(closure_2[22])(obj, flag);
        if (obj2.inCall) {
          obj2.onPress();
        } else {
          channelId(tmp2[23]).confirmStartCall(obj2.onPress);
          const obj3 = channelId(tmp2[23]);
        }
        tmp2 = closure_2;
      }
    }
  }, items7);
  const items8 = [callback];
  closure_13 = obj8.useCallback(() => {
    callback(false);
  }, items8);
  const items9 = [callback];
  const items10 = [stateFromStores, channelId, screenIndex];
  const callback1 = obj8.useCallback(() => {
    callback(true);
  }, items9);
  callback2 = obj8.useCallback(() => {
    obj = channelId(closure_2[24]);
    const result = obj.navigateToChannelDetails(channelId, screenIndex, "private-channel-search-button");
    callback(channelId, true, "action");
    if (null != stateFromStores) {
      const guildId = obj2.getGuildId();
      const isThreadResult = obj2.isThread();
      const channelDetailsSearchContext = channelId(tmp2[25]).getChannelDetailsSearchContext(channelId, guildId, isThreadResult);
      const tmpResult = channelId(tmp2[25]);
      obj = { searchContext: null, searchLocation: null };
      obj[0] = channelDetailsSearchContext;
      obj[1] = closure_1_18.INDIVIDUAL_DM;
      screenIndex(tmp2[26]).trackSearchOpened(obj);
      const obj4 = screenIndex(tmp2[26]);
    }
  }, items10);
  const items11 = [recipientId, stateFromStores, application];
  const items12 = [null != inappropriateConversationSafetyToolsWarningForChannel && null != recipientId, tmp.button, callback2, channelId, recipientId, , ];
  let id1;
  callback3 = obj8.useCallback(() => {
    let tmp2 = null != recipientId;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      tmp2 = null != application;
    }
    if (tmp2) {
      obj = screenIndex(closure_2[27]);
      obj = { settings_type: "user", destination_pane: null, source_page: "app_dm_settings", application_id: null };
      obj[1] = callback2.SETTINGS_APP_DMS_MENU;
      obj[3] = application.id;
      obj.trackWithMetadata(lib.SETTINGS_PANE_VIEWED, obj);
      obj = { userId: null, channel: null, application: null };
      obj[0] = recipientId;
      obj[1] = stateFromStores;
      obj[2] = application;
      screenIndex(closure_2[28]).openLazy(channelId(closure_2[30])(closure_2[29], closure_2.paths), "AppDMOptionsBottomSheet", obj);
      const obj3 = screenIndex(closure_2[28]);
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
      obj = { channelId: null, recipientId: null, warningId: null, warningType: null };
      obj[0] = channelId;
      obj[1] = recipientId;
      ({ id: obj2[2], type: obj2[3] } = inappropriateConversationSafetyToolsWarningForChannel);
      let tmpResult = tmp(tmp2(tmp3[34]).SafetyToolsButton, obj);
    } else {
      obj = { style: null, onPress: null, accessibilityLabel: null, accessibilityRole: "button", children: null };
      obj[0] = closure_2.button;
      obj[1] = callback2;
      const intl = channelId(closure_2[32]).intl;
      obj[2] = intl.string(channelId(closure_2[32]).t["5h0QOP"]);
      obj[4] = closure_1_20(channelId(closure_2[33]).MagnifyingGlassIcon, { size: "sm" });
      tmpResult = tmp(tmp2(tmp3[31]).PressableOpacity, obj);
    }
    return tmpResult;
  }, items12);
  if (screenIndex(8645)(channelId)) {
    obj = { style: null, onPress: null, accessibilityLabel: null, children: null };
    obj[0] = tmp.button;
    obj[1] = function onPress() {
      obj = screenIndex(closure_2[36]);
      obj.openURL(closure_17);
      obj = { cta_type: "channel_header", target: closure_17 };
      screenIndex(closure_2[37]).track(lib.CHANGE_LOG_CTA_CLICKED, obj);
    };
    const intl5 = tmp2(1236).intl;
    obj[2] = intl5.string(tmp2(1236).t["+KSnWX"]);
    obj[3] = callback(tmp2(12820).WindowLaunchIcon, { size: "sm" });
    let tmp24Result = callback(tmp2(5068).PressableOpacity, obj);
  } else if (tmp16.isAppDM) {
    let tmp40 = null;
    if (null != application) {
      obj = { style: null, children: null };
      obj[0] = tmp.privateChannelButtonsWrapper;
      obj1 = { style: null, onPress: null, accessibilityLabel: null, accessibilityRole: "button", children: null };
      obj1[0] = tmp.button;
      obj1[1] = callback2;
      const intl3 = tmp2(1236).intl;
      obj1[2] = intl3.string(tmp2(1236).t["5h0QOP"]);
      obj1[4] = callback(tmp2(6235).MagnifyingGlassIcon, { size: "sm" });
      const items13 = [callback(tmp2(5068).PressableOpacity, obj1), ];
      let obj2 = { style: null, onPress: null, accessibilityLabel: null, accessibilityRole: "button", children: null };
      obj2[0] = tmp.button;
      obj2[1] = callback3;
      const intl4 = tmp2(1236).intl;
      obj2[2] = intl4.string(tmp2(1236).t["+1H47t"]);
      obj2[4] = callback(tmp2(6240).SettingsIcon, { size: "sm" });
      items13[1] = callback(tmp2(5068).PressableOpacity, obj2);
      obj[1] = items13;
      tmp40 = callback2(recipientId, obj);
    }
    tmp24Result = tmp40;
  } else {
    let obj3 = { style: null, children: null };
    obj3[0] = tmp.privateChannelButtonsWrapper;
    let intl = tmp2(1236).intl;
    const string = intl.string;
    const t = tmp2(1236).t;
    if (tmp14) {
      let stringResult = string(t["0D/6Rz"]);
    } else if (stateFromStores1) {
      stringResult = string(t["4ry6yi"]);
    } else {
      stringResult = string(t.focH1t);
    }
    let obj4 = { accessibilityLabel: null, accessibilityRole: "button", style: null, onPress: null, disabled: null, children: null };
    obj4[0] = stringResult;
    const items14 = [tmp.button, , ];
    let num2;
    if (tmp14) {
      num2 = 1;
    }
    const obj5 = { borderWidth: null, borderColor: null };
    obj5[0] = num2;
    if (!tmp14) {
      obj5[1] = undefined;
      items14[1] = obj5;
      let disabledButton = null;
      if (stateFromStores2) {
        disabledButton = tmp.disabledButton;
      }
      items14[2] = disabledButton;
      obj4[2] = items14;
      obj4[3] = function onPress() {
        if (closure_10) {
          if (null != stateFromStores) {
            channelId(closure_2[40]).openChannelCallModal(tmp);
            obj = channelId(closure_2[40]);
          }
        }
        lib();
      };
      obj4[4] = stateFromStores2;
      if (tmp14) {
        let unsafe_rawColors = tmp15(712).unsafe_rawColors;
        unsafe_rawColors = { size: "sm", color: null };
        unsafe_rawColors[1] = stateFromStores1 ? unsafe_rawColors.GREEN_360 : unsafe_rawColors.BRAND_400;
        let tmp29Result = tmp29(tmp2(5050).VoiceNormalIcon, unsafe_rawColors);
        const tmp33 = stateFromStores1 ? unsafe_rawColors.GREEN_360 : unsafe_rawColors.BRAND_400;
      } else {
        if (stateFromStores1) {
          const obj6 = { size: "sm", color: null };
          obj6[1] = tmp15(712).unsafe_rawColors.RED_400;
          tmp29Result = tmp29(tmp2(7625).PhoneHangUpIcon, obj6);
          let tmp32 = tmp29;
        } else {
          let GREEN_360;
          if (isCallActiveNullable) {
            GREEN_360 = tmp15(712).unsafe_rawColors.GREEN_360;
          }
          const obj7 = { size: "sm", color: null };
          obj7[1] = GREEN_360;
          tmp29Result = tmp29(tmp2(7623).PhoneCallIcon, obj7);
          tmp32 = tmp29;
        }
        const items15 = [
          tmp29Result,
          visibleParticipants.map((user) => {
                  const diff = visibleParticipants.length - 1;
                  let num = -6;
                  if (0 === arg1) {
                    num = screenIndex(tmp4[17]).space.PX_4;
                  }
                  obj = { style: { marginLeft: num }, user: user.user, guildId: "r", size: false, cutout: false };
                  obj[3] = channelId(closure_2[15]).AvatarSizes.XSMALL;
                  if (arg1 !== diff) {
                    const tmp7 = closure_1_23;
                  }
                  obj[4] = tmp7;
                  return closure_1_20(channelId(closure_2[15]).CutoutableAvatarImage, obj, user.id);
                }),

        ];
        let tmp32Result = totalParticipantCount > 5;
        if (tmp32Result) {
          obj8 = { style: null, children: null };
          obj8[0] = tmp.overflowBadge;
          const obj9 = { variant: "text-xxs/semibold", color: "button-outline-primary-text", children: null };
          const items16 = ["+", totalParticipantCount - 5];
          obj9[2] = items16;
          obj8[1] = tmp24(tmp2(4474).Text, obj9);
          tmp32Result = tmp32(tmp25, obj8);
        }
        items15[2] = tmp32Result;
        obj4[5] = items15;
        const items17 = [tmp24(tmp2(5068).PressableOpacity, obj4), , ];
        tmp32Result = null;
        if (!isMultiUserDMResult) {
          tmp32Result = null;
          if (!stateFromStores1) {
            const items18 = [tmp.button, ];
            if (stateFromStores2) {
              let disabledButton1 = tmp.disabledButton;
            } else {
              disabledButton1 = null;
            }
            const obj10 = { style: null, onPress: null, disabled: null, accessibilityLabel: null, accessibilityRole: "button", children: null };
            items18[1] = disabledButton1;
            obj10[0] = items18;
            obj10[1] = callback1;
            if (!stateFromStores2) {
              stateFromStores2 = !stateFromStores3;
            }
            obj10[2] = stateFromStores2;
            const intl2 = tmp2(1236).intl;
            obj10[3] = intl2.string(tmp2(1236).t.oCqlGG);
            obj10[5] = tmp32(tmp2(10193).VideoIcon, { size: "sm" });
            tmp32Result = tmp32(tmp2(5068).PressableOpacity, obj10);
          }
        }
        items17[1] = tmp32Result;
        items17[2] = memo1;
        obj3[1] = items17;
        tmp24Result = tmp24(tmp25, obj3);
      }
    } else {
      unsafe_rawColors = tmp15(712).unsafe_rawColors;
    }
  }
  return tmp24Result;
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx");

export default memoResult;