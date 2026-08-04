import Button from "Button";
import { ANDROID_FOREGROUND_RIPPLE } from "semanticColor";
import jsxProd from "useActivityUsers";
import createCacheKey from "createCacheKey";
import hexToRgba from "hexToRgba";

let c5;
let closure_6;
let error;
const require = arg1;
function ActivityActionOverlay(arg0) {
  let action;
  let activityItem;
  let applicationId;
  let context;
  let id;
  let launchingComponentId;
  let name;
  ({ action, context } = arg0);
  ({ applicationId, activityItem, launchingComponentId } = arg0);
  ({ id, name } = activityItem.application);
  if (require(11356) /* useActivityAction */.ActivityAction.JOIN !== action) {
    if (tmp4(11356).ActivityAction.LEAVE !== action) {
      return null;
    }
  }
  let tmp8 = action === tmp4(11356).ActivityAction.LEAVE;
  if (tmp8) {
    let obj = { style: null };
    obj[0] = tmp3.ongoingActivityJoinedContainer;
    tmp8 = callback(tmp(5663), obj);
  }
  const items = [tmp8, ];
  id = undefined;
  const tmp10 = callback;
  tmp3 = createCacheKey();
  const tmp6 = closure_7;
  const tmp7 = closure_6;
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  obj = { children: null };
  items[1] = tmp10(importDefault(16092), { channelId: id, applicationId: id, applicationName: name, submitting: importDefault(11441)({ applicationId, context, launchingComponentId }).submitting });
  obj[0] = items;
  return tmp6(tmp7, obj);
}
function ParticipantsText(arg0) {
  let action;
  let activityItem;
  let channelId;
  let guildId;
  ({ activityItem, channelId } = arg0);
  ({ action, guildId } = arg0);
  const tmp = createCacheKey();
  const arr = importDefault(16093)(activityItem.application.id, channelId);
  let obj = importDefault(4474);
  let first;
  if (arr != null) {
    first = arr[0];
  }
  const name = obj.getName(guildId, channelId, first);
  obj = { style: items, children: null };
  items = [, ];
  ({ participantsContainer: arr2[0], overlayBubble: arr2[1] } = tmp);
  obj = { source: null, size: null, color: "white" };
  obj[0] = importDefault(12041);
  obj[1] = require(1297) /* Button */.Icon.Sizes.EXTRA_SMALL;
  const items1 = [callback(require(1297) /* Button */.Icon, obj), ];
  const obj1 = { lineClamp: 1, style: tmp.participantsText, variant: "text-xxs/medium", color: "text-overlay-light", children: null };
  if (action === require(11356) /* useActivityAction */.ActivityAction.START) {
    let num2 = activityItem.application.maxParticipants;
    if (num2 == null) {
      num2 = 0;
    }
    let itemSubtitleForMaxPlayersShort = tmp9(11446).getItemSubtitleForMaxPlayersShort(num2);
    const tmp9Result = tmp9(11446);
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
  items1[1] = callback(require(4281) /* Text */.Text, obj1);
  obj[1] = items1;
  return closure_7(importDefault(5663), obj);
}
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, imageOuterContainer: null, ongoingActivityJoinedContainer: null, overlayBubble: null, participantsContainer: null, participantsText: null, developerIconContainer: null, developerIconColor: null };
createCacheKey = { borderRadius: require("Themes").radii.md, overflow: "hidden", height: 120, position: "relative", backgroundColor: "black", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { justifyContent: "center", alignItems: "center" };
createCacheKey[2] = { position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(255,255,255,0.5)", zIndex: 1 };
let obj1 = { backgroundColor: null, borderRadius: null };
obj1[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.BLACK, 0.5);
obj1[1] = require("Themes").radii.round;
createCacheKey[3] = obj1;
createCacheKey[4] = { paddingHorizontal: 8, position: "absolute", left: 8, bottom: 8, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height: 20 };
createCacheKey[5] = { marginLeft: 4, lineHeight: 20 };
createCacheKey[6] = { position: "absolute", top: 4, right: 4, width: 22, height: 22, borderRadius: require("Themes").radii.md, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
let obj2 = { position: "absolute", top: 4, right: 4, width: 22, height: 22, borderRadius: require("Themes").radii.md, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
createCacheKey[7] = { color: require("Themes").colors.WHITE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj3 = { color: require("Themes").colors.WHITE };
let result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx");

export default function ActivityShelfItem(arg0) {
  let activityAction;
  let activityItem;
  let context;
  let disableBadges;
  let guildId;
  let height;
  let imageBackground;
  let itemDimensions;
  let labelType;
  let locationObject;
  let onActivityItemSelected;
  let onActivityItemSelected2;
  let width;
  ({ itemDimensions, activityItem, context, disableBadges } = arg0);
  ({ guildId, locationObject, onActivityItemSelected } = arg0);
  if (disableBadges === undefined) {
    disableBadges = false;
  }
  const tmp = createCacheKey();
  let channel = null;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  ({ width, height } = itemDimensions);
  const result = width * importDefault(1849)();
  const id = Button.useId();
  let obj = { activityItem, context, guildId, locationObject, onActivityItemSelected, embeddedActivitiesManager: null, backgroundResolution: null, assetNames: null, launchingComponentId: null, commandOrigin: null };
  obj[5] = importDefault(10538);
  obj[6] = result;
  obj[7] = ["embedded_cover"];
  obj[8] = id;
  obj[9] = require(6891) /* ApplicationCommandSectionType */.CommandOrigin.VOICE_UI;
  const tmp7 = importDefault(11356);
  ({ activityAction, imageBackground, onActivityItemSelected: onActivityItemSelected2, labelType } = importDefault(11356)(obj));
  obj = { applicationId: activityItem.application.id, size: result, names: ["embedded_background"] };
  let tmp10 = importDefault(10643)(obj);
  let tmp11 = !disableBadges;
  if (!disableBadges) {
    const items = [tmp8(11356).ActivityAction.LEAVE, tmp8(11356).ActivityAction.JOIN];
    tmp11 = !items.includes(activityAction);
  }
  const tmp7Result = importDefault(11356)(obj);
  const isTestModeForApplication = require(7508) /* isTestModeForApplication */.useIsTestModeForApplication(activityItem.application.id);
  obj = { activeOpacity: 0.7, onPress: onActivityItemSelected2, disabled: null, androidRippleConfig: null, style: null, children: null };
  obj[2] = activityAction === require(11356) /* useActivityAction */.ActivityAction.LEAVE;
  obj[3] = ANDROID_FOREGROUND_RIPPLE;
  const items1 = [tmp.container, { width, height }];
  obj[4] = items1;
  const obj1 = { style: tmp.imageOuterContainer, children: null };
  let tmp3Result = tmp3(5663);
  const obj2 = { accessibilityLabel: activityItem.application.name, imageBackground: null, aspectRatio: null };
  tmp3Result = tmp3(16091);
  if (activityAction === require(11356) /* useActivityAction */.ActivityAction.START) {
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
    tmp15Result = tmp15(tmp3(11384), obj4);
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
      obj6[1] = tmp3(16095);
      obj6[2] = tmp.developerIconColor.color;
      obj5[1] = tmp15(tmp8(1297).Icon, obj6);
      tmp15Result = tmp15(tmp3(5663), obj5);
      const tmp3Result1 = tmp3(5663);
    }
  }
  items3[2] = tmp15Result;
  const items4 = [closure_7(require(3997) /* ManaContext */.ThemeContextProvider, { theme: "dark", children: items3 }), ];
  let tmp15Result1 = activityAction === tmp8(11356).ActivityAction.START;
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
  return closure_7(require(4812) /* PressableBase */.PressableOpacity, obj);
};