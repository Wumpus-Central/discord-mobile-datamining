// === Module 13430: CheckpointShareCardStats ===

// Module 13430 (CheckpointShareCardStats)
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 1892 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import UnknownGameIcon from "UnknownGameIcon" /* 8143 */;
import ChatIcon from "ChatIcon" /* 8643 */;
import ReactionIcon from "ReactionIcon" /* 9452 */;
import GameControllerIcon from "GameControllerIcon" /* 9727 */;
import ServerIcon from "ServerIcon" /* 9758 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11971 */;
import noop from "module_19" /* 19 */;

require = fn;
function StatIcon(size) {
  size = size.size;
  return hasOwnProperty(size.Icon, { size: "custom", color: nativeDefault.colors.BLACK, style: { width: size, height: size } });
}
function StatImage(arg0) {
  ({ uri, size } = arg0);
  if (null == uri) {
    const obj2 = { Icon: UnknownGameIcon.UnknownGameIcon, size };
    let tmp5 = hasOwnProperty(StatIcon, obj2);
  } else {
    const obj = { source: null, style: null };
    const obj3 = { uri };
    obj.source = obj3;
    const items = [tmp.statImage, ];
    const size1 = { width: size, height: size };
    items[1] = size1;
    obj.style = items;
    tmp5 = hasOwnProperty(FastImageDefault, obj);
  }
  return tmp5;
}
function StatRow(stat) {
  stat = stat.stat;
  ({ icon, layout, rowStyle } = stat);
  const tmp = closure_7();
  let tmp5 = null;
  if (null != stat) {
    const obj = { style: null, children: null };
    const items = [tmp.statRow, rowStyle, ];
    const obj2 = { backgroundColor: tmp4 };
    items[2] = obj2;
    obj.style = items;
    const items1 = [icon, ];
    const obj3 = { variant: layout.textVariant, style: tmp.statText, lineClamp: 1, allowFontScaling: false, children: stat.text };
    items1[1] = hasOwnProperty(Text_Text.Text, obj3);
    obj.children = items1;
    tmp5 = timestampProducer(View, obj);
  }
  return tmp5;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let obj2 = { statRow: { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4 }, statText: null, statImage: null, guildAcronym: null, unicodeEmoji: null };
let obj3 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4 };
obj2.statText = { flexShrink: 1, color: nativeDefault.colors.BLACK };
const obj4 = { flexShrink: 1, color: nativeDefault.colors.BLACK };
obj2.statImage = { borderWidth: 1, borderColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
let obj5 = { borderWidth: 1, borderColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
obj2.guildAcronym = { backgroundColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_20 };
obj2.unicodeEmoji = { fontSize: 9, lineHeight: 11 };
let closure_7 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardStats.tsx");

export default function CheckpointShareCardStats(arg0) {
  ({ stats, layout } = arg0);
  ({ style, rowStyle } = arg0);
  const tmp = closure_7();
  ({ iconSize, reactionsIcon } = layout);
  if (undefined === reactionsIcon) {
    reactionsIcon = ReactionIcon.ReactionIcon;
  }
  const rounded = Math.round(iconSize * getDevicePixelRatioDefault());
  ({ topGuild, topEmoji, topGame } = stats);
  let guildIcon;
  if (topGuild != null) {
    guildIcon = topGuild.guildIcon;
  }
  let guildIconURL;
  if (null != guildIcon) {
    const obj = { id: null, icon: null, size: null };
    ({ guildId: obj2.id, guildIcon: obj2.icon } = topGuild);
    obj.size = rounded;
    guildIconURL = AvatarUtilsDefault.getGuildIconURL(obj);
    const tmp4Result = AvatarUtilsDefault;
  }
  let applicationImageId;
  if (topGame != null) {
    applicationImageId = topGame.applicationImageId;
  }
  let applicationIconURL;
  if (null != applicationImageId) {
    const obj3 = { id: null, icon: null, size: null };
    ({ applicationId: obj4.id, applicationImageId: obj4.icon } = topGame);
    obj3.size = rounded;
    applicationIconURL = AvatarUtilsDefault.getApplicationIconURL(obj3);
    const tmp4Result3 = AvatarUtilsDefault;
  }
  if (null != guildIconURL) {
    const obj5 = { uri: guildIconURL, size: iconSize };
    let tmp13 = hasOwnProperty(StatImage, obj5);
    let tmp14 = hasOwnProperty;
  } else {
    const obj6 = { style: null, children: null };
    const items = [, , ];
    ({ statImage: arr3[0], guildAcronym: arr3[1] } = tmp);
    const size = { width: iconSize, height: iconSize };
    items[2] = size;
    obj6.style = items;
    const obj7 = { variant: "text-xxs/normal", color: "text-overlay-dark", allowFontScaling: false, children: stats.topGuildAcronymCharacter };
    obj6.children = hasOwnProperty(Text_Text.Text, obj7);
    tmp13 = hasOwnProperty(View, obj6);
    tmp14 = hasOwnProperty;
  }
  if (null == topEmoji) {
    const obj8 = { Icon: UnknownGameIcon.UnknownGameIcon, size: iconSize };
    let tmp14Result = tmp14(StatIcon, obj8);
  } else if (null != topEmoji.emojiId) {
    const obj9 = { uri: null, size: null };
    const obj10 = { id: topEmoji.emojiId, animated: false, size: rounded };
    obj9.uri = AvatarUtilsDefault.getEmojiURL(obj10);
    obj9.size = iconSize;
    tmp14Result = tmp14(StatImage, obj9);
    const tmp4Result4 = AvatarUtilsDefault;
  } else {
    const obj11 = { style: null, children: null };
    const items1 = [tmp.statImage, ];
    const size1 = { width: iconSize, height: iconSize };
    items1[1] = size1;
    obj11.style = items1;
    const obj12 = { variant: "text-xs/semibold", style: tmp.unicodeEmoji, allowFontScaling: false, children: topEmoji.emojiName };
    obj11.children = tmp14(Text_Text.Text, obj12);
    tmp14Result = tmp14(View, obj11);
  }
  const obj13 = { layout, rowStyle };
  const obj14 = { style, children: null };
  const obj15 = { icon: tmp14(StatIcon, { Icon: MicrophoneIcon.MicrophoneIcon, size: iconSize }), stat: stats.voice };
  const merged = Object.assign(obj13);
  const items2 = [tmp14(StatRow, obj15), , , , , , , ];
  const obj17 = { icon: null, stat: null };
  const obj16 = { Icon: MicrophoneIcon.MicrophoneIcon, size: iconSize };
  obj17.icon = tmp14(StatIcon, { Icon: ChatIcon.ChatIcon, size: iconSize });
  obj17.stat = stats.messages;
  const merged1 = Object.assign(obj13);
  items2[1] = tmp14(StatRow, obj17);
  const obj19 = { icon: null, stat: null };
  const obj18 = { Icon: ChatIcon.ChatIcon, size: iconSize };
  obj19.icon = tmp14(StatIcon, { Icon: ServerIcon.ServerIcon, size: iconSize });
  obj19.stat = stats.topGuildDaysInteracted;
  const merged2 = Object.assign(obj13);
  items2[2] = tmp14(StatRow, obj19);
  const merged3 = Object.assign(obj13);
  items2[3] = tmp14(StatRow, { icon: tmp13, stat: stats.topGuildName });
  const obj20 = { Icon: ServerIcon.ServerIcon, size: iconSize };
  const obj21 = { icon: tmp13, stat: stats.topGuildName };
  const merged4 = Object.assign(obj13);
  items2[4] = tmp14(StatRow, { icon: tmp14(StatIcon, { Icon: reactionsIcon, size: iconSize }), stat: stats.reactions });
  const merged5 = Object.assign(obj13);
  items2[5] = tmp14(StatRow, { icon: tmp14Result, stat: stats.topEmojiName });
  const obj24 = { icon: null, stat: null };
  const obj22 = { icon: tmp14(StatIcon, { Icon: reactionsIcon, size: iconSize }), stat: stats.reactions };
  const obj23 = { icon: tmp14Result, stat: stats.topEmojiName };
  obj24.icon = tmp14(StatIcon, { Icon: GameControllerIcon.GameControllerIcon, size: iconSize });
  obj24.stat = stats.daysPlayed;
  const merged6 = Object.assign(obj13);
  items2[6] = tmp14(StatRow, obj24);
  const obj25 = { Icon: GameControllerIcon.GameControllerIcon, size: iconSize };
  const merged7 = Object.assign(obj13);
  items2[7] = tmp14(StatRow, { icon: tmp14(StatImage, { uri: applicationIconURL, size: iconSize }), stat: stats.topGameName });
  obj14.children = items2;
  return timestampProducer(View, obj14);
};