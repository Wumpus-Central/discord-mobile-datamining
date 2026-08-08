// discord_app/modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx
import importAllResult from "useIsCallActive";
import { View } from "initialize";
import getParticipants from "getParticipants";
import { NO_PARTICIPANTS } from "getParticipants";
import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";
import { setIsChannelDetailsSearchActive as closure_11 } from "useChannelDetailsStore";
import ME from "ME";
import { ParticipantTypes } from "ParticipantTypes";
import { CHANGELOG_URL } from "CHANGELOG_MODAL_KEY";
import { SearchEntrypointAnalyticsLocations as closure_17 } from "SearchEntrypointAnalyticsLocations";
import jsxProd from "getPrivateChannelCall";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";

let closure_12;
let closure_14;
let closure_18;
let closure_19;
let map1;
const require = arg1;
let c3 = importAllResult;
({ AnalyticEvents: closure_12, AnalyticsSections: map1, ChannelTypes: closure_14 } = ME);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const tmp4 = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.XSMALL];
let closure_20 = tmp4;
let obj = { direction: require("Button").CutoutDirection.RIGHT, radius: tmp4 / 2 + 3, inset: -6 };
let closure_22 = createCacheKey.createStyles((arg0) => {
  let obj = { privateChannelButtonsWrapper: { flexDirection: "row", gap: 12, paddingEnd: 1 }, button: null, disabledButton: null, overflowBadge: null };
  let prop;
  if (!arg0) {
    prop = Themes.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
  }
  obj = { backgroundColor: prop, borderRadius: Themes.modules.button.BORDER_RADIUS, minHeight: Themes.space.PX_32, minWidth: Themes.space.PX_32, padding: Themes.space.PX_4, justifyContent: "center", flexDirection: "row", alignItems: "center" };
  obj[1] = obj;
  obj[2] = { opacity: 0.6 };
  obj = { backgroundColor: Themes.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: Themes.radii.round, width: closure_20, height: closure_20, justifyContent: "center", alignItems: "center", marginLeft: -6 };
  obj[3] = obj;
  return obj;
});
const memoResult = importAllResult.memo(function PrivateChannelButtons(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  let dependencyMap;
  let stateFromStores;
  let recipientId;
  let inappropriateConversationSafetyToolsWarningForChannel;
  let c6;
  let callParticipants;
  let visibleParticipants;
  let totalParticipantCount;
  let c10;
  let application;
  let callback;
  let closure_13;
  let callback2;
  const tmp3 = callback3(screenIndex(1348)("PrivateChannelButtons"));
  dependencyMap = tmp3;
  let obj = channelId(589);
  const items = [callParticipants];
  stateFromStores = obj.useStateFromStores(items, () => callParticipants.getChannel(channelId));
  recipientId = undefined;
  if (stateFromStores != null) {
    recipientId = stateFromStores.getRecipientId();
  }
  let tmp4Result = tmp4(589);
  const items1 = [c10];
  const items2 = [stateFromStores];
  const stateFromStores1 = tmp4Result.useStateFromStores(items1, () => {
    let isInChannelResult = null != stateFromStores;
    if (isInChannelResult) {
      isInChannelResult = _undefined2.isInChannel(tmp.id);
    }
    return isInChannelResult;
  }, items2);
  tmp4Result = tmp4(10376);
  inappropriateConversationSafetyToolsWarningForChannel = tmp4Result.useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  c6 = tmp8;
  const items3 = [visibleParticipants, totalParticipantCount];
  const stateFromStores2 = channelId(589).useStateFromStores(items3, () => {
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    let tmp2 = type === callback2.DM;
    if (tmp2) {
      tmp2 = null != recipientId;
    }
    if (tmp2) {
      let isBlockedResult = visibleParticipants.isBlocked(recipientId);
      if (!isBlockedResult) {
        const user = totalParticipantCount.getUser(tmp5);
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
  const tmp4Result1 = channelId(589);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const isCallActiveNullable = channelId(8088).useIsCallActiveNullable(id);
  const tmp4Result2 = channelId(8088);
  const items4 = [inappropriateConversationSafetyToolsWarningForChannel];
  callParticipants = channelId(589).useStateFromStoresObject(items4, () => {
    let obj = stateFromStores;
    let isMultiUserDMResult;
    if (stateFromStores != null) {
      isMultiUserDMResult = obj.isMultiUserDM();
    }
    if (true === isMultiUserDMResult) {
      let participants = inappropriateConversationSafetyToolsWarningForChannel.getParticipants(obj.id);
    } else {
      participants = c6;
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
  let obj7 = stateFromStores;
  const items5 = [callParticipants];
  const memo = stateFromStores.useMemo(() => {
    const found = callParticipants.filter((type) => type.type === constants.USER);
    return { visibleParticipants: found.slice(0, 5), totalParticipantCount: found.length };
  }, items5);
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
  c10 = tmp14;
  const tmp15 = screenIndex(12542)({ context: { type: "channel", channel: stateFromStores } });
  application = tmp15.application;
  const items6 = [stateFromStores];
  callback = obj7.useCallback(() => {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (null != stateFromStores) {
      if (obj.isPrivate()) {
        const obj2 = screenIndex(_undefined[21])(obj, flag);
        if (obj2.inCall) {
          obj2.onPress();
        } else {
          channelId(tmp2[22]).confirmStartCall(obj2.onPress);
          const obj3 = channelId(tmp2[22]);
        }
        tmp2 = _undefined;
      }
    }
  }, items6);
  const items7 = [callback];
  closure_13 = obj7.useCallback(() => {
    callback(false);
  }, items7);
  const items8 = [callback];
  const items9 = [stateFromStores, channelId, screenIndex];
  const callback1 = obj7.useCallback(() => {
    callback(true);
  }, items8);
  callback2 = obj7.useCallback(() => {
    let obj = channelId(_undefined[23]);
    const result = obj.navigateToChannelDetails(channelId, screenIndex, "private-channel-search-button");
    application(channelId, true, "action");
    if (null != stateFromStores) {
      const guildId = obj2.getGuildId();
      const isThreadResult = obj2.isThread();
      const channelDetailsSearchContext = channelId(tmp2[24]).getChannelDetailsSearchContext(channelId, guildId, isThreadResult);
      const tmpResult = channelId(tmp2[24]);
      obj = { searchContext: null, searchLocation: null };
      obj[0] = channelDetailsSearchContext;
      obj[1] = outer1_17.INDIVIDUAL_DM;
      screenIndex(tmp2[25]).trackSearchOpened(obj);
      const obj4 = screenIndex(tmp2[25]);
    }
  }, items9);
  const items10 = [recipientId, stateFromStores, application];
  const items11 = [null != inappropriateConversationSafetyToolsWarningForChannel && null != recipientId, tmp3.button, callback2, channelId, recipientId, , ];
  let id1;
  callback3 = obj7.useCallback(() => {
    let tmp2 = null != recipientId;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      tmp2 = null != application;
    }
    if (tmp2) {
      let obj = screenIndex(_undefined[26]);
      obj = { settings_type: "user", destination_pane: null, source_page: "app_dm_settings", application_id: null };
      obj[1] = lib.SETTINGS_APP_DMS_MENU;
      obj[3] = application.id;
      obj.trackWithMetadata(callback.SETTINGS_PANE_VIEWED, obj);
      obj = { userId: null, channel: null, application: null };
      obj[0] = recipientId;
      obj[1] = stateFromStores;
      obj[2] = application;
      screenIndex(_undefined[27]).openLazy(channelId(_undefined[29])(_undefined[28], _undefined.paths), "AppDMOptionsBottomSheet", obj);
      const obj3 = screenIndex(_undefined[27]);
    }
  }, items10);
  if (inappropriateConversationSafetyToolsWarningForChannel != null) {
    id1 = inappropriateConversationSafetyToolsWarningForChannel.id;
  }
  items11[5] = id1;
  let type;
  if (inappropriateConversationSafetyToolsWarningForChannel != null) {
    type = inappropriateConversationSafetyToolsWarningForChannel.type;
  }
  items11[6] = type;
  const memo1 = obj7.useMemo(() => {
    if (c6) {
      let obj = { channelId: null, recipientId: null, warningId: null, warningType: null };
      obj[0] = channelId;
      obj[1] = recipientId;
      ({ id: obj2[2], type: obj2[3] } = inappropriateConversationSafetyToolsWarningForChannel);
      let tmpResult = tmp(tmp2(tmp3[33]).SafetyToolsButton, obj);
    } else {
      obj = { style: null, onPress: null, accessibilityLabel: null, accessibilityRole: "button", children: null };
      obj[0] = _undefined.button;
      obj[1] = callback2;
      const intl = channelId(_undefined[31]).intl;
      obj[2] = intl.string(channelId(_undefined[31]).t["5h0QOP"]);
      obj[4] = outer1_18(channelId(_undefined[32]).MagnifyingGlassIcon, { size: "sm" });
      tmpResult = tmp(tmp2(tmp3[30]).PressableOpacity, obj);
    }
    return tmpResult;
  }, items11);
  if (screenIndex(8936)(channelId)) {
    obj = { style: null, onPress: null, accessibilityLabel: null, children: null };
    obj[0] = tmp3.button;
    obj[1] = function onPress() {
      let obj = screenIndex(_undefined[35]);
      obj.openURL(closure_16);
      obj = { cta_type: "channel_header", target: closure_16 };
      screenIndex(_undefined[36]).track(callback.CHANGE_LOG_CTA_CLICKED, obj);
    };
    const intl5 = tmp4(1236).intl;
    obj[2] = intl5.string(tmp4(1236).t["+KSnWX"]);
    obj[3] = callback(tmp4(12231).WindowLaunchIcon, { size: "sm" });
    let tmp23Result = callback(tmp4(4846).PressableOpacity, obj);
  } else if (tmp15.isAppDM) {
    let tmp39 = null;
    if (null != application) {
      obj = { style: null, children: null };
      obj[0] = tmp3.privateChannelButtonsWrapper;
      const obj1 = { style: null, onPress: null, accessibilityLabel: null, accessibilityRole: "button", children: null };
      obj1[0] = tmp3.button;
      obj1[1] = callback2;
      const intl3 = tmp4(1236).intl;
      obj1[2] = intl3.string(tmp4(1236).t["5h0QOP"]);
      obj1[4] = callback(tmp4(6006).MagnifyingGlassIcon, { size: "sm" });
      const items12 = [callback(tmp4(4846).PressableOpacity, obj1), ];
      let obj2 = { style: null, onPress: null, accessibilityLabel: null, accessibilityRole: "button", children: null };
      obj2[0] = tmp3.button;
      obj2[1] = callback3;
      const intl4 = tmp4(1236).intl;
      obj2[2] = intl4.string(tmp4(1236).t.oCqlGG);
      obj2[4] = callback(tmp4(6011).SettingsIcon, { size: "sm" });
      items12[1] = callback(tmp4(4846).PressableOpacity, obj2);
      obj[1] = items12;
      tmp39 = callback2(recipientId, obj);
    }
    tmp23Result = tmp39;
  } else {
    let obj3 = { style: null, children: null };
    obj3[0] = tmp3.privateChannelButtonsWrapper;
    let intl = tmp4(1236).intl;
    const string = intl.string;
    const t = tmp4(1236).t;
    if (tmp14) {
      let stringResult = string(t["0D/6Rz"]);
    } else if (stateFromStores1) {
      stringResult = string(t["4ry6yi"]);
    } else {
      stringResult = string(t.focH1t);
    }
    let obj4 = { accessibilityLabel: null, accessibilityRole: "button", style: null, onPress: null, disabled: null, children: null };
    obj4[0] = stringResult;
    const items13 = [tmp3.button, , ];
    let num2;
    if (tmp14) {
      num2 = 1;
    }
    const obj5 = { borderWidth: null, borderColor: null };
    obj5[0] = num2;
    if (!tmp14) {
      obj5[1] = undefined;
      items13[1] = obj5;
      let disabledButton = null;
      if (stateFromStores2) {
        disabledButton = tmp3.disabledButton;
      }
      items13[2] = disabledButton;
      obj4[2] = items13;
      obj4[3] = function onPress() {
        if (c10) {
          if (null != stateFromStores) {
            channelId(_undefined[39]).openChannelCallModal(tmp);
            const obj = channelId(_undefined[39]);
          }
        }
        lib();
      };
      obj4[4] = stateFromStores2;
      if (tmp14) {
        let unsafe_rawColors = tmp(712).unsafe_rawColors;
        unsafe_rawColors = { size: "sm", color: null };
        unsafe_rawColors[1] = stateFromStores1 ? unsafe_rawColors.GREEN_360 : unsafe_rawColors.BRAND_400;
        let tmp28Result = tmp28(tmp4(4829).VoiceNormalIcon, unsafe_rawColors);
        const tmp32 = stateFromStores1 ? unsafe_rawColors.GREEN_360 : unsafe_rawColors.BRAND_400;
      } else {
        if (stateFromStores1) {
          const obj6 = { size: "sm", color: null };
          obj6[1] = tmp(712).unsafe_rawColors.RED_400;
          tmp28Result = tmp28(tmp4(8400).PhoneHangUpIcon, obj6);
          let tmp31 = tmp28;
        } else {
          let GREEN_360;
          if (isCallActiveNullable) {
            GREEN_360 = tmp(712).unsafe_rawColors.GREEN_360;
          }
          obj7 = { size: "sm", color: null };
          obj7[1] = GREEN_360;
          tmp28Result = tmp28(tmp4(8398).PhoneCallIcon, obj7);
          tmp31 = tmp28;
        }
        const items14 = [
          tmp28Result,
          visibleParticipants.map((user) => {
                  const diff = visibleParticipants.length - 1;
                  let num = -6;
                  if (0 === arg1) {
                    num = screenIndex(tmp4[15]).space.PX_4;
                  }
                  const obj = { style: { marginLeft: num }, user: user.user, guildId: "r", size: 0, cutout: "absolute" };
                  obj[3] = channelId(_undefined[13]).AvatarSizes.XSMALL;
                  if (arg1 !== diff) {
                    const tmp7 = outer1_21;
                  }
                  obj[4] = tmp7;
                  return outer1_18(channelId(_undefined[13]).CutoutableAvatarImage, obj, user.id);
                }),

        ];
        let tmp31Result = totalParticipantCount > 5;
        if (tmp31Result) {
          const obj8 = { style: null, children: null };
          obj8[0] = tmp3.overflowBadge;
          const obj9 = { variant: "text-xxs/semibold", color: "button-outline-primary-text", children: null };
          const items15 = ["+", totalParticipantCount - 5];
          obj9[2] = items15;
          obj8[1] = tmp23(tmp4(4299).Text, obj9);
          tmp31Result = tmp31(tmp24, obj8);
        }
        items14[2] = tmp31Result;
        obj4[5] = items14;
        const items16 = [tmp23(tmp4(4846).PressableOpacity, obj4), , ];
        tmp31Result = null;
        if (!isMultiUserDMResult) {
          tmp31Result = null;
          if (!stateFromStores1) {
            const items17 = [tmp3.button, ];
            let disabledButton1 = null;
            if (stateFromStores2) {
              disabledButton1 = tmp3.disabledButton;
            }
            const obj10 = { style: null, onPress: null, disabled: null, accessibilityLabel: null, accessibilityRole: "button", children: null };
            items17[1] = disabledButton1;
            obj10[0] = items17;
            obj10[1] = callback1;
            obj10[2] = stateFromStores2;
            const intl2 = tmp4(1236).intl;
            obj10[3] = intl2.string(tmp4(1236).t.oCqlGG);
            obj10[5] = tmp31(tmp4(7714).VideoIcon, { size: "sm" });
            tmp31Result = tmp31(tmp4(4846).PressableOpacity, obj10);
          }
        }
        items16[1] = tmp31Result;
        items16[2] = memo1;
        obj3[1] = items16;
        tmp23Result = tmp23(tmp24, obj3);
      }
    } else {
      unsafe_rawColors = tmp(712).unsafe_rawColors;
    }
  }
  return tmp23Result;
});
let result = require("getParticipants").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx");

export default memoResult;