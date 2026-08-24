// === Module 16420: ChannelButtonIcons ===

// Module 16420 (ChannelButtonIcons)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import CollapsingText from "CollapsingText" /* 4751 */;
import getNicknameDefault from "getNickname" /* 4801 */;
import computeChannelNameDefault from "computeChannelName" /* 4989 */;
import registerAssetDefault from "registerAsset" /* 6330 */;
import registerAssetDefault2 from "registerAsset" /* 6878 */;
import registerAssetDefault3 from "registerAsset" /* 8014 */;
import TwinButtons from "TwinButtons" /* 8848 */;
import ShieldLockIcon from "ShieldLockIcon" /* 9784 */;
import dismissPanelDefault from "dismissPanel" /* 11488 */;
import QuestActivityButtonInnerDefault from "QuestActivityButtonInner" /* 16347 */;
import useVoicePanelHeaderUserStateIcons from "useVoicePanelHeaderUserStateIcons" /* 16418 */;
import registerAssetDefault4 from "registerAsset" /* 16421 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "addApplication" /* 4482 */;
import closure_6 from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4549 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
function ChannelButtonIcons() {
  let obj = { style: callback3().channelButtons, children: null };
  obj = { size: "xs", accessibilityLabel: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.VHXh8a);
  const items = [callback(ShieldLockIcon.ShieldLockIcon, obj), ];
  obj = { source: registerAssetDefault };
  items[1] = callback(CollapsingText.BaseTextButton.Icon, obj);
  obj[1] = items;
  return callback2(View, obj);
}
function ChannelButton(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(589);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getChannel(channelId));
  let str = computeChannelNameDefault(stateFromStores);
  const isCallSecureFramesVerified = channelId(9728).useIsCallSecureFramesVerified({ channelId });
  obj = { accessibilityRole: "button", accessibilityHint: null, text: null, icon: null, iconOpticalOffsetMargin: null, iconPosition: "end", onPress: null, maxFontSizeMultiplier: 2 };
  const intl = channelId(1236).intl;
  obj[1] = intl.string(channelId(1236).t["Y2b7+e"]);
  if (str == null) {
    str = "???";
  }
  obj[2] = str;
  if (isCallSecureFramesVerified) {
    let tmp3Result = tmp5(ChannelButtonIcons, {});
  } else {
    tmp3Result = tmp3(6330);
  }
  obj[3] = tmp3Result;
  obj[4] = -ThemesDefault.space.PX_4;
  obj[6] = channelId.onPress;
  return closure_9(channelId(8848).HeaderButton, obj);
}
function StreamButton(arg0) {
  ({ participant, onPress } = arg0);
  const context = importAllResult.useContext(dismissPanelDefault);
  ({ guildId, channelId } = context);
  let obj = getNicknameDefault;
  const name = obj.useName(guildId, channelId, participant.user);
  obj = { accessibilityRole: "button", accessibilityHint: null, accessibilityLabel: null, text: null, icon: null, iconPosition: "start", onPress: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["Y2b7+e"]);
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.formatToPlainString(getSystemLocale.t.I0mOAs, { username: name });
  obj[3] = name;
  obj[4] = registerAssetDefault4;
  obj[6] = onPress;
  return callback(TwinButtons.HeaderButton, obj);
}
function ActivityButton(participant) {
  participant = participant.participant;
  let obj = participant(589);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getApplication(participant.applicationId));
  obj = { direction: "horizontal", spacing: ThemesDefault.space.PX_8, children: null };
  obj = { accessibilityRole: "button", accessibilityHint: null, text: null, icon: null, iconPosition: "start", onPress: null, shrink: true };
  const intl = participant(1236).intl;
  obj[1] = intl.string(participant(1236).t["Y2b7+e"]);
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "???";
  }
  obj[2] = str;
  obj[3] = registerAssetDefault3;
  obj[5] = participant.onPress;
  const items1 = [closure_9(participant(8848).HeaderButton, obj), closure_9(QuestActivityButtonInnerDefault, { applicationId: participant.applicationId })];
  obj[2] = items1;
  return closure_10(participant(4738).Stack, obj);
}
function UserButton(participant) {
  participant = participant.participant;
  const context = importAllResult.useContext(dismissPanelDefault);
  ({ guildId, channelId } = context);
  let obj = getNicknameDefault;
  const name = obj.useName(guildId, channelId, participant.user);
  const tmp = callback3();
  const voicePanelHeaderUserStateIcons = useVoicePanelHeaderUserStateIcons.useVoicePanelHeaderUserStateIcons(participant, guildId, tmp.userIcons);
  obj = { accessibilityRole: "button", accessibilityHint: null, icon: null, iconPosition: null, text: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["Y2b7+e"]);
  obj[2] = voicePanelHeaderUserStateIcons;
  let str;
  if (null != voicePanelHeaderUserStateIcons) {
    str = "start";
  }
  obj[3] = str;
  obj[4] = name;
  obj[5] = participant.onPress;
  return closure_9(TwinButtons.HeaderButton, obj);
}
function StageButton(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(589);
  const items = [closure_6];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getStageInstanceByChannel(channelId), items1);
  const items2 = [closure_7];
  const stateFromStores1 = channelId(589).useStateFromStores(items2, () => closure_1_7.getChannel(channelId));
  const obj2 = channelId(589);
  const tmp5 = importDefault;
  obj = { accessibilityRole: "button", accessibilityHint: null, text: null, icon: null, iconPosition: "start", onPress: null };
  const intl = channelId(1236).intl;
  obj[1] = intl.string(channelId(1236).t["Y2b7+e"]);
  let topic;
  if (stateFromStores != null) {
    topic = stateFromStores.topic;
  }
  if (topic == null) {
    topic = tmp6;
  }
  if (topic == null) {
    const intl2 = tmp(1236).intl;
    topic = intl2.string(tmp(1236).t.zLZPmk);
  }
  obj[2] = topic;
  obj[3] = registerAssetDefault2;
  obj[5] = channelId.onPress;
  return closure_9(channelId(8848).HeaderButton, obj);
}
let c3 = importAllResult;
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ userIcons: { marginLeft: -6 }, channelButtons: { alignItems: "center", flexDirection: "row", gap: 2 } });
const memoResult = importAllResult.memo(function VoicePanelTitleButton() {
  const context = importAllResult.useContext(channelId(11488));
  const guildId = context.guildId;
  channelId = context.channelId;
  ({ channelType, focused } = context);
  let obj = guildId(9032);
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(focused, (id) => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    return id;
  });
  const tmp3 = channelId(16417)(derivedStateFromSharedValue, channelId, guildId);
  const items = [guildId, channelId];
  const onPress = importAllResult.useCallback(() => {
    const result = guildId(closure_1_2[28]).openVoicePanelSettingsActionSheet(guildId, channelId);
  }, items);
  if (null != tmp3) {
    if (tmp3.type === ParticipantTypes.STREAM) {
      obj = { participant: null, onPress: null };
      obj[0] = tmp3;
      obj[1] = onPress;
      return callback(StreamButton, obj);
    } else if (tmp3.type === tmp5.ACTIVITY) {
      obj = { participant: null, onPress: null };
      obj[0] = tmp3;
      obj[1] = onPress;
      return callback(ActivityButton, obj);
    } else if (tmp3.type === tmp5.USER) {
      obj1 = { participant: null, onPress: null };
      obj1[0] = tmp3;
      obj1[1] = onPress;
      return callback(UserButton, obj1);
    }
  }
  return callback(channelType === guildId(692).ChannelTypes.GUILD_STAGE_VOICE ? StageButton : ChannelButton, { channelId, onPress });
});
let result = require("set").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelTitleButton.tsx");

export default memoResult;