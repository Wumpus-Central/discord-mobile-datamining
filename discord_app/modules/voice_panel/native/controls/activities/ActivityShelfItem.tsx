// discord_app/modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../../design/void/native.tsx";
import getDevicePixelRatioDefault from "../../../../../utils/getDevicePixelRatio.native.tsx";
import ManaContext from "../../../../../../discord_common/js/packages/design/native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import getNicknameDefault from "../../../../../utils/NicknameUtils.tsx";
import PressableBase from "../../../../../design/void/Pressables/native/Pressables.tsx";
import setDefault from "../../../../core/native/NativeView.tsx";
import ApplicationCommandSectionType from "../../../../application_commands/ApplicationCommandTypes.tsx";
import isTestModeForApplication2 from "../../../../game_store/TestModeUtils.tsx";
import postMessageToWebViewDefault from "../../../../activities/native/EmbeddedActivitiesNativeManager.tsx";
import useEmbeddedActivityBackgroundDefault from "../../../../activities/utils/useEmbeddedActivityBackground.tsx";
import useActivityAction from "../../../../activities/utils/useActivityShelfItem.tsx";
import useActivityActionDefault from "../../../../activities/utils/useActivityShelfItem.tsx";
import useLaunchingActivityButtonStateDefault from "../../../../app_launcher/utils/useLaunchingActivityButtonState.tsx";
import ParticipantsSummaryDefault from "ActivityShelfItemSummary.tsx";
import useActivityUsersDefault from "../../../../activities/useActivityUsers.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { ANDROID_FOREGROUND_RIPPLE } from "../../../../../design/void/Form/native/FormConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import hexToRgba from "../../../../../utils/ColorUtils.tsx";

require = arg1;
function ActivityActionOverlay(arg0) {
  ({ action, context } = arg0);
  ({ applicationId, activityItem, launchingComponentId } = arg0);
  ({ id, name } = activityItem.application);
  if (useActivityAction.ActivityAction.JOIN !== action) {
    if (tmp4(11596).ActivityAction.LEAVE !== action) {
      return null;
    }
  }
  let tmp8 = action === tmp4(11596).ActivityAction.LEAVE;
  if (tmp8) {
    let obj = { style: null };
    obj[0] = tmp3.ongoingActivityJoinedContainer;
    tmp8 = callback(tmp(5974), obj);
  }
  const items = [tmp8, ];
  id = undefined;
  const tmp10 = callback;
  tmp3 = callback2();
  const tmp6 = closure_7;
  const tmp7 = closure_6;
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  obj = { children: null };
  items[1] = tmp10(ParticipantsSummaryDefault, { channelId: id, applicationId: id, applicationName: name, submitting: useLaunchingActivityButtonStateDefault({ applicationId, context, launchingComponentId }).submitting });
  obj[0] = items;
  return tmp6(tmp7, obj);
}
function ParticipantsText(arg0) {
  ({ activityItem, channelId } = arg0);
  ({ action, guildId } = arg0);
  const tmp = callback2();
  const arr = useActivityUsersDefault(activityItem.application.id, channelId);
  let obj = getNicknameDefault;
  let first;
  if (arr != null) {
    first = arr[0];
  }
  const name = obj.getName(guildId, channelId, first);
  obj = { style: items, children: null };
  items = [, ];
  ({ participantsContainer: arr2[0], overlayBubble: arr2[1] } = tmp);
  obj = { source: tmp2(12283), size: Button.Icon.Sizes.EXTRA_SMALL, color: "white" };
  const items1 = [callback(Button.Icon, obj), ];
  obj1 = { lineClamp: 1, style: tmp.participantsText, variant: "text-xxs/medium", color: "text-overlay-light", children: null };
  if (action === useActivityAction.ActivityAction.START) {
    let num2 = activityItem.application.maxParticipants;
    if (num2 == null) {
      num2 = 0;
    }
    let itemSubtitleForMaxPlayersShort = tmp9(11683).getItemSubtitleForMaxPlayersShort(num2);
    const tmp9Result = tmp9(11683);
  } else {
    itemSubtitleForMaxPlayersShort = name;
    if (arr.length > 1) {
      const intl = tmp9(1236).intl;
      const obj2 = { count: null, username: null };
      obj2[0] = arr.length - 1;
      obj2[1] = name;
      itemSubtitleForMaxPlayersShort = intl.formatToPlainString(tmp9(1236).t.cpe6CK, obj2);
    }
  }
  obj1[4] = itemSubtitleForMaxPlayersShort;
  items1[1] = callback(Text.Text, obj1);
  obj[1] = items1;
  return closure_7(setDefault, obj);
}
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, imageOuterContainer: null, ongoingActivityJoinedContainer: null, overlayBubble: null, participantsContainer: null, participantsText: null, developerIconContainer: null, developerIconColor: null };
createCacheKey = { borderRadius: ThemesDefault.radii.md, overflow: "hidden", height: 120, position: "relative", backgroundColor: "black", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { justifyContent: "center", alignItems: "center" };
createCacheKey[2] = { position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(255,255,255,0.5)", zIndex: 1 };
let obj1 = { backgroundColor: null, borderRadius: null };
obj1[0] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.BLACK, 0.5);
obj1[1] = ThemesDefault.radii.round;
createCacheKey[3] = obj1;
createCacheKey[4] = { paddingHorizontal: 8, position: "absolute", left: 8, bottom: 8, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height: 20 };
createCacheKey[5] = { marginLeft: 4, lineHeight: 20 };
createCacheKey[6] = { position: "absolute", top: 4, right: 4, width: 22, height: 22, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
let obj2 = { position: "absolute", top: 4, right: 4, width: 22, height: 22, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
createCacheKey[7] = { color: ThemesDefault.colors.WHITE };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const obj3 = { color: ThemesDefault.colors.WHITE };
let result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx");

export default function ActivityShelfItem(arg0) {
  ({ itemDimensions, activityItem, context, disableBadges } = arg0);
  ({ guildId, locationObject, onActivityItemSelected } = arg0);
  if (disableBadges === undefined) {
    disableBadges = false;
  }
  const tmp = callback2();
  let channel = null;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  ({ width, height } = itemDimensions);
  const result = width * getDevicePixelRatioDefault();
  const id = closure_3.useId();
  let obj = { activityItem, context, guildId, locationObject, onActivityItemSelected, embeddedActivitiesManager: postMessageToWebViewDefault, backgroundResolution: result, assetNames: ["embedded_cover"], launchingComponentId: id, commandOrigin: ApplicationCommandSectionType.CommandOrigin.VOICE_UI };
  const tmp7 = useActivityActionDefault;
  ({ activityAction, imageBackground, onActivityItemSelected: onActivityItemSelected2, labelType } = useActivityActionDefault(obj));
  obj = { applicationId: activityItem.application.id, size: result, names: ["embedded_background"] };
  let tmp10 = useEmbeddedActivityBackgroundDefault(obj);
  let tmp11 = !disableBadges;
  if (!disableBadges) {
    const items = [tmp8(11596).ActivityAction.LEAVE, tmp8(11596).ActivityAction.JOIN];
    tmp11 = !items.includes(activityAction);
  }
  const tmp7Result = useActivityActionDefault(obj);
  const isTestModeForApplication = isTestModeForApplication2.useIsTestModeForApplication(activityItem.application.id);
  obj = { activeOpacity: 0.7, onPress: onActivityItemSelected2, disabled: activityAction === tmp8(11596).ActivityAction.LEAVE, androidRippleConfig: ANDROID_FOREGROUND_RIPPLE, style: items1, children: null };
  items1 = [tmp.container, { width, height }];
  obj1 = { style: tmp.imageOuterContainer, children: null };
  let tmp3Result = tmp3(5974);
  const obj2 = { accessibilityLabel: activityItem.application.name, imageBackground: null, aspectRatio: null };
  tmp3Result = tmp3(16692);
  if (activityAction === useActivityAction.ActivityAction.START) {
    tmp10 = imageBackground;
  }
  obj2[1] = tmp10;
  obj2[2] = width / height;
  const items2 = [closure_5(tmp3Result, obj2), closure_5(ActivityActionOverlay, { action: activityAction, applicationId: activityItem.application.id, context, activityItem, launchingComponentId: id })];
  obj1[1] = items2;
  const items3 = [closure_7(tmp3Result, obj1), , ];
  let tmp15Result = null;
  if (tmp11) {
    const obj4 = { labelType: null };
    obj4[0] = labelType;
    tmp15Result = tmp15(tmp3(11625), obj4);
  }
  items3[1] = tmp15Result;
  tmp15Result = null;
  if (tmp11) {
    tmp15Result = null;
    if (isTestModeForApplication) {
      const obj5 = { style: null, children: null };
      obj5[0] = tmp.developerIconContainer;
      const obj6 = { size: null, source: null, color: null };
      obj6[0] = tmp8(1297).Icon.Sizes.REFRESH_SMALL_16;
      obj6[1] = tmp3(16696);
      obj6[2] = tmp.developerIconColor.color;
      obj5[1] = tmp15(tmp8(1297).Icon, obj6);
      tmp15Result = tmp15(tmp3(5974), obj5);
      const tmp3Result1 = tmp3(5974);
    }
  }
  items3[2] = tmp15Result;
  const items4 = [closure_7(ManaContext.ThemeContextProvider, { theme: "dark", children: items3 }), ];
  let tmp15Result1 = activityAction === tmp8(11596).ActivityAction.START;
  if (tmp15Result1) {
    const obj7 = { action: null, channelId: null, guildId: null, activityItem: null };
    obj7[0] = activityAction;
    let id1;
    if (channel != null) {
      id1 = channel.id;
    }
    obj7[1] = id1;
    guildId = undefined;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    obj7[2] = guildId;
    obj7[3] = activityItem;
    tmp15Result1 = tmp15(ParticipantsText, obj7);
    const tmp21 = ParticipantsText;
  }
  items4[1] = tmp15Result1;
  obj[5] = items4;
  return closure_7(PressableBase.PressableOpacity, obj);
};