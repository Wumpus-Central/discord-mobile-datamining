// discord_app/modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import getDevicePixelRatioDefault from "../../../../../utils/getDevicePixelRatio.native.tsx";
import native2 from "../../../../../../discord_common/js/packages/design/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import NicknameUtilsDefault from "../../../../../utils/NicknameUtils.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import NativeViewDefault from "../../../../core/native/NativeView.tsx";
import ApplicationCommandTypes from "../../../../application_commands/ApplicationCommandTypes.tsx";
import TestModeUtils from "../../../../game_store/TestModeUtils.tsx";
import EmbeddedActivitiesNativeManagerDefault from "../../../../activities/native/EmbeddedActivitiesNativeManager.tsx";
import useEmbeddedActivityBackgroundDefault from "../../../../activities/utils/useEmbeddedActivityBackground.tsx";
import useActivityShelfItem from "../../../../activities/utils/useActivityShelfItem.tsx";
import useLaunchingActivityButtonStateDefault from "../../../../app_launcher/utils/useLaunchingActivityButtonState.tsx";
import ActivityShelfItemSummaryDefault from "ActivityShelfItemSummary.tsx";
import useActivityUsersDefault from "../../../../activities/useActivityUsers.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const useActivityShelfItemDefault = useActivityShelfItem;

require = fn;
function ActivityActionOverlay(arg0) {
  ({ action, context } = arg0);
  ({ applicationId, activityItem, launchingComponentId } = arg0);
  ({ id, name } = activityItem.application);
  if (useActivityShelfItem.ActivityAction.JOIN !== action) {
    if (tmp4(12057).ActivityAction.LEAVE !== action) {
      return null;
    }
  }
  let tmp8 = action === tmp4(12057).ActivityAction.LEAVE;
  if (tmp8) {
    let obj = { style: tmp3.ongoingActivityJoinedContainer };
    tmp8 = hasOwnProperty(tmp(5589), obj);
  }
  const items = [tmp8];
  id = undefined;
  const tmp10 = hasOwnProperty;
  tmp3 = closure_8();
  const tmp6 = React5;
  const tmp7 = timestampProducer;
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  obj = { children: null };
  items[1] = tmp10(ActivityShelfItemSummaryDefault, {
    channelId: id,
    applicationId: id,
    applicationName: name,
    submitting: useLaunchingActivityButtonStateDefault({ applicationId, context, launchingComponentId }).submitting,
  });
  obj.children = items;
  return tmp6(tmp7, obj);
}
function ParticipantsText(arg0) {
  ({ activityItem, channelId } = arg0);
  ({ action, guildId } = arg0);
  const tmp = closure_8();
  const arr = useActivityUsersDefault(activityItem.application.id, channelId);
  let obj = NicknameUtilsDefault;
  let first;
  if (arr != null) {
    first = arr[0];
  }
  const name = obj.getName(guildId, channelId, first);
  obj = { style: null, children: null };
  const items = [,];
  ({ participantsContainer: arr2[0], overlayBubble: arr2[1] } = tmp);
  obj.style = items;
  obj = { source: tmp2(12778), size: native.Icon.Sizes.EXTRA_SMALL, color: "white" };
  const items1 = [hasOwnProperty(native.Icon, obj)];
  const obj1 = {
    lineClamp: 1,
    style: tmp.participantsText,
    variant: "text-xxs/medium",
    color: "text-overlay-light",
    children: null,
  };
  if (action === useActivityShelfItem.ActivityAction.START) {
    let num2 = activityItem.application.maxParticipants;
    if (num2 == null) {
      num2 = 0;
    }
    let itemSubtitleForMaxPlayersShort = tmp9(12146).getItemSubtitleForMaxPlayersShort(num2);
    const tmp9Result = tmp9(12146);
  } else {
    itemSubtitleForMaxPlayersShort = name;
    if (arr.length > 1) {
      const intl = tmp9(1114).intl;
      const obj2 = { count: arr.length - 1, username: name };
      itemSubtitleForMaxPlayersShort = intl.formatToPlainString(tmp9(1114).t.cpe6CK, obj2);
    }
  }
  obj1.children = itemSubtitleForMaxPlayersShort;
  items1[1] = hasOwnProperty(Text_Text.Text, obj1);
  obj.children = items1;
  return React5(NativeViewDefault, obj);
}
const ANDROID_FOREGROUND_RIPPLE = fn(1182).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  imageOuterContainer: null,
  ongoingActivityJoinedContainer: null,
  overlayBubble: null,
  participantsContainer: null,
  participantsText: null,
  developerIconContainer: null,
  developerIconColor: null,
};
createStyles = {
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  height: 120,
  position: "relative",
  backgroundColor: "black",
  justifyContent: "center",
};
createStyles.container = createStyles;
createStyles.imageOuterContainer = { justifyContent: "center", alignItems: "center" };
createStyles.ongoingActivityJoinedContainer = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255,255,255,0.5)",
  zIndex: 1,
};
let obj1 = { backgroundColor: null, borderRadius: null };
const ColorUtils = fn(4409);
obj1.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.5);
obj1.borderRadius = nativeDefault.radii.round;
createStyles.overlayBubble = obj1;
createStyles.participantsContainer = {
  paddingHorizontal: 8,
  position: "absolute",
  left: 8,
  bottom: 8,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: 20,
};
createStyles.participantsText = { marginLeft: 4, lineHeight: 20 };
let size = {
  position: "absolute",
  top: 4,
  right: 4,
  width: 22,
  height: 22,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  alignItems: "center",
  justifyContent: "center",
};
createStyles.developerIconContainer = size;
createStyles.developerIconColor = { color: nativeDefault.colors.WHITE };
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx");

export default function ActivityShelfItem(arg0) {
  ({ itemDimensions, activityItem, context, disableBadges } = arg0);
  ({ guildId, locationObject, onActivityItemSelected } = arg0);
  if (disableBadges === undefined) {
    disableBadges = false;
  }
  const tmp = closure_8();
  let channel = null;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  ({ width, height } = itemDimensions);
  const result = width * getDevicePixelRatioDefault();
  const id = noop.useId();
  let obj = {
    activityItem,
    context,
    guildId,
    locationObject,
    onActivityItemSelected,
    embeddedActivitiesManager: EmbeddedActivitiesNativeManagerDefault,
    backgroundResolution: result,
    assetNames: ["embedded_cover"],
    launchingComponentId: id,
    commandOrigin: ApplicationCommandTypes.CommandOrigin.VOICE_UI,
  };
  ({
    activityAction,
    imageBackground,
    onActivityItemSelected: onActivityItemSelected2,
    labelType,
  } = useActivityShelfItemDefault(obj));
  obj = { applicationId: activityItem.application.id, size: result, names: ["embedded_background"] };
  let tmp10 = useEmbeddedActivityBackgroundDefault(obj);
  let tmp11 = !disableBadges;
  if (!disableBadges) {
    const items = [tmp8(12057).ActivityAction.LEAVE, tmp8(12057).ActivityAction.JOIN];
    tmp11 = !items.includes(activityAction);
  }
  const tmp7Result = useActivityShelfItemDefault(obj);
  const isTestModeForApplication = TestModeUtils.useIsTestModeForApplication(activityItem.application.id);
  obj = {
    activeOpacity: 0.7,
    onPress: onActivityItemSelected2,
    disabled: activityAction === tmp8(12057).ActivityAction.LEAVE,
    androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
    style: null,
    children: null,
  };
  const items1 = [tmp.container, { width, height }];
  obj.style = items1;
  const obj1 = { style: tmp.imageOuterContainer, children: null };
  tmp3(5589);
  const obj2 = { accessibilityLabel: activityItem.application.name, imageBackground: null, aspectRatio: null };
  const tmp3Result = tmp3(17147);
  if (activityAction === useActivityShelfItem.ActivityAction.START) {
    tmp10 = imageBackground;
  }
  obj2.imageBackground = tmp10;
  obj2.aspectRatio = width / height;
  const items2 = [
    hasOwnProperty(tmp3Result, obj2),
    hasOwnProperty(ActivityActionOverlay, {
      action: activityAction,
      applicationId: activityItem.application.id,
      context,
      activityItem,
      launchingComponentId: id,
    }),
  ];
  obj1.children = items2;
  const items3 = [React5(tmp3Result, obj1), ,];
  let tmp15Result = null;
  if (tmp11) {
    const obj4 = { labelType };
    tmp15Result = tmp15(tmp3(12086), obj4);
  }
  items3[1] = tmp15Result;
  tmp15Result = null;
  if (tmp11) {
    tmp15Result = null;
    if (isTestModeForApplication) {
      const obj5 = { style: tmp.developerIconContainer, children: null };
      const obj6 = {
        size: tmp8(1178).Icon.Sizes.REFRESH_SMALL_16,
        source: tmp3(17151),
        color: tmp.developerIconColor.color,
      };
      obj5.children = tmp15(tmp8(1178).Icon, obj6);
      tmp15Result = tmp15(tmp3(5589), obj5);
      const tmp3Result1 = tmp3(5589);
    }
  }
  items3[2] = tmp15Result;
  const items4 = [React5(native2.ThemeContextProvider, { theme: "dark", children: items3 })];
  let tmp15Result1 = activityAction === tmp8(12057).ActivityAction.START;
  if (tmp15Result1) {
    const obj7 = { action: activityAction, channelId: null, guildId: null, activityItem: null };
    let id1;
    if (channel != null) {
      id1 = channel.id;
    }
    obj7.channelId = id1;
    guildId = undefined;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    obj7.guildId = guildId;
    obj7.activityItem = activityItem;
    tmp15Result1 = tmp15(ParticipantsText, obj7);
  }
  items4[1] = tmp15Result1;
  obj.children = items4;
  return React5(Pressables.PressableOpacity, obj);
}
