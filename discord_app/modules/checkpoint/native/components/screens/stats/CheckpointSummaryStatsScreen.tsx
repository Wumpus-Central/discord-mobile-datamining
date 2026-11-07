// === Module 13915: CheckpointSummaryStatsScreen ===

// Module 13915 (CheckpointSummaryStatsScreen)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import _modDef3216 from "module_3216" /* 3216 */;
import _modDef3248 from "module_3248" /* 3248 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5086 */;
import Text_Text from "Text/Text" /* 5751 */;
import FastImageDefault from "FastImage" /* 5842 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6223 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6569 */;
import GuildIcon from "GuildIcon" /* 7020 */;
import EmojiDefault from "Emoji" /* 7363 */;
import UnknownGameIcon from "UnknownGameIcon" /* 8213 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9069 */;
import CheckpointScreen from "CheckpointScreen" /* 13875 */;
import CheckpointTextDefault from "CheckpointText" /* 13877 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 13880 */;
import CheckpointRecapCardDefault from "CheckpointRecapCard" /* 13916 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import CheckpointStore from "CheckpointStore" /* 13667 */;

const GuildIconDefault = GuildIcon;
const CheckpointScreenDefault = CheckpointScreen;

require = fn;
function NumberStat(arg0) {
  ({ label, value, color } = arg0);
  const tmp = closure_11();
  items = [color];
  const obj = { style: tmp.stat, accessible: true, accessibilityLabel: null, children: null };
  const memo = noop.useMemo(() => ({ color }), items);
  obj.accessibilityLabel = "" + label + ", " + value.toLocaleString(util.intl.currentLocale);
  const items1 = [metroImportDefault(CheckpointTextDefault, { variant: "body-md/medium", style: memo, children: label }), metroImportDefault(View, { style: tmp.statNumber, children: metroImportDefault(CheckpointStatNumberDefault, { value, color, size: 32 }) })];
  obj.children = items1;
  return React5(View, obj);
}
function ItemStat(children) {
  ({ label, name, color } = children);
  const tmp = closure_11();
  items = [color];
  const memo = noop.useMemo(() => ({ color }), items);
  const obj = { style: tmp.stat, accessible: true, accessibilityLabel: "" + label + ", " + name, children: null };
  const items1 = [metroImportDefault(CheckpointTextDefault, { variant: "body-md/medium", style: memo, children: label }), ];
  const obj2 = { style: tmp.item, children: null };
  const items2 = [metroImportDefault(View, { style: tmp.itemIcon, children: children.icon }), ];
  const obj4 = { variant: "body-md/semibold", style: null, children: name };
  const items3 = [tmp.itemName, memo];
  obj4.style = items3;
  items2[1] = metroImportDefault(CheckpointTextDefault, obj4);
  obj2.children = items2;
  items1[1] = React5(View, obj2);
  obj.children = items1;
  return React5(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const sum = fn(6199).CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const createStyles = fn(5140);
let obj2 = { container: { width: "100%", maxWidth: 400, alignSelf: "center", flexGrow: 1, alignItems: "center", gap: PX_16, paddingBottom: sum }, stats: { alignSelf: "stretch", gap: nativeDefault.space.PX_24 }, row: null, stat: null, statNumber: null, item: null, itemName: null, itemIcon: null, guildAcronym: null, emoji: null, textEmoji: null };
let obj3 = { alignSelf: "stretch", gap: nativeDefault.space.PX_24 };
obj2.row = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
let obj4 = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
obj2.stat = { flex: 1, gap: nativeDefault.space.PX_8 };
obj2.statNumber = { height: 24, justifyContent: "center" };
let obj5 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj2.item = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.itemName = { flexShrink: 1 };
let size = { width: 28, height: 28, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.none };
obj2.itemIcon = size;
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.guildAcronym = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.emoji = { width: 28, height: 28 };
const PlatformUtils = fn(1357);
let num;
if (PlatformUtils.isIOS()) {
  num = 30;
}
obj2.textEmoji = { fontSize: 24, lineHeight: num, textAlign: "center" };
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx");

export default function CheckpointSummaryStatsScreen() {
  const tmp = closure_11();
  items = [CheckpointStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ character: CheckpointStore.character, stats: CheckpointStore.stats }));
  ({ character, stats } = stateFromStoresObject);
  let voice;
  if (stats != null) {
    voice = stats.voice;
  }
  let messages;
  if (stats != null) {
    messages = stats.messages;
  }
  let first;
  if (stats != null) {
    const guilds = stats.guilds;
    if (guilds != null) {
      first = guilds.guilds[0];
    }
  }
  let emojis;
  if (stats != null) {
    emojis = stats.emojis;
  }
  let games;
  if (stats != null) {
    games = stats.games;
  }
  const items1 = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const tmp2Result = initialize;
  const characterCardColorPalette = CheckpointCardColors.getCharacterCardColorPalette(character);
  const tmp2Result5 = CheckpointCardColors;
  const primaryBackgroundColor = CheckpointCardColors.getCardColors(characterCardColorPalette).primaryBackgroundColor;
  const tmp2Result6 = CheckpointCardColors;
  const checkpointScreenContentHeight = CheckpointScreen.useCheckpointScreenContentHeight();
  const tmp14 = useMeasuredLayoutDefault();
  const height = tmp14.height;
  let diff;
  ({ ref, onLayout } = tmp14);
  if (null != height) {
    diff = checkpointScreenContentHeight - sum - PX_16 - height;
  }
  let first1;
  if (emojis != null) {
    first1 = emojis.emojis[0];
  }
  let game;
  if (games != null) {
    const first2 = games.games[0];
    if (first2 != null) {
      game = first2.game;
    }
  }
  let id;
  if (first1 != null) {
    id = first1.id;
  }
  if (null != id) {
    const obj2 = { id: first1.id, animated: null, size: 48 };
    let tmp23 = !stateFromStores;
    if (!stateFromStores) {
      tmp23 = true === first1.animated;
    }
    obj2.animated = tmp23;
    const emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
    const tmp13Result = AvatarUtilsDefault;
  }
  let applicationIconURL;
  if (null != game) {
    ({ id: obj9.id, iconHash: obj9.icon } = game);
    applicationIconURL = AvatarUtilsDefault.getApplicationIconURL({ id: null, icon: null, fallbackAvatar: false });
    const obj3 = { id: null, icon: null, fallbackAvatar: false };
    const tmp13Result6 = AvatarUtilsDefault;
  }
  let tmp25Result4 = metroImportDefault(UnknownGameIcon.UnknownGameIcon, { size: "md", color: primaryBackgroundColor });
  let icon;
  if (first != null) {
    icon = first.guild.icon;
  }
  if (null != icon) {
    const obj4 = { guild: first.guild, size: GuildIcon.GuildIconSizes.SMALL, style: tmp.itemIcon };
    let tmp25Result = metroImportDefault(GuildIconDefault, obj4);
    const tmp13Result7 = GuildIconDefault;
  } else {
    tmp25Result = tmp25Result4;
    if (null != first) {
      const obj5 = { style: null, children: null };
      const items2 = [, ];
      ({ itemIcon: arr9[0], guildAcronym: arr9[1] } = tmp);
      obj5.style = items2;
      const obj6 = { variant: "body-md/semibold", color: "text-overlay-light", allowFontScaling: false, children: CheckpointStatsUtils.getGuildAcronymCharacter(first.guild.name) };
      obj5.children = metroImportDefault(Text_Text.Text, obj6);
      tmp25Result = metroImportDefault(View, obj5);
      const tmp2Result8 = CheckpointStatsUtils;
    }
  }
  const obj7 = { style: tmp.container, children: null };
  const tmp2Result7 = CheckpointScreen;
  const items3 = [metroImportDefault(CheckpointRecapCardDefault, { isStepFocusTarget: true, character, maxHeight: diff }), ];
  const obj8 = { style: tmp.stats, ref, onLayout, children: null };
  const obj10 = { style: tmp.row, children: null };
  const obj11 = { label: null, value: null, color: null };
  const intl = util.intl;
  obj11.label = intl.string(_modDef3248.MSrV9z);
  let num;
  if (voice != null) {
    num = voice.totalVoiceMinutes;
  }
  if (num == null) {
    num = 0;
  }
  obj11.value = Math.round(num);
  obj11.color = primaryBackgroundColor;
  const items4 = [metroImportDefault(NumberStat, obj11), ];
  const obj12 = { label: null, value: null, color: null };
  const intl2 = util.intl;
  obj12.label = intl2.string(_modDef3248.hhh11L);
  let num2;
  if (messages != null) {
    num2 = messages.numMessagesSent;
  }
  if (num2 == null) {
    num2 = 0;
  }
  obj12.value = Math.round(num2);
  obj12.color = primaryBackgroundColor;
  items4[1] = metroImportDefault(NumberStat, obj12);
  obj10.children = items4;
  const items5 = [React5(View, obj10), , , ];
  const obj13 = { style: tmp.row, children: null };
  const obj14 = { label: null, value: null, color: null };
  const intl3 = util.intl;
  obj14.label = intl3.string(_modDef3248["f5S+pt"]);
  let num3;
  if (first != null) {
    num3 = first.numDaysInteracted;
  }
  if (num3 == null) {
    num3 = 0;
  }
  obj14.value = Math.round(num3);
  obj14.color = primaryBackgroundColor;
  const items6 = [metroImportDefault(NumberStat, obj14), ];
  const obj15 = { label: null, name: null, color: null, icon: null };
  const intl4 = util.intl;
  obj15.label = intl4.string(_modDef3216["8XPMJj"]);
  if (null != first) {
    let name = first.guild.name;
  } else {
    const intl5 = util.intl;
    name = intl5.string(_modDef3248.GultYJ);
  }
  obj15.name = name;
  obj15.color = primaryBackgroundColor;
  obj15.icon = tmp25Result;
  items6[1] = metroImportDefault(ItemStat, obj15);
  obj13.children = items6;
  items5[1] = React5(View, obj13);
  const obj16 = { style: tmp.row, children: null };
  const obj17 = { label: null, value: null, color: null };
  const intl6 = util.intl;
  obj17.label = intl6.string(_modDef3248.xVSlv3);
  let num4;
  if (emojis != null) {
    num4 = emojis.numEmojisSent;
  }
  if (num4 == null) {
    num4 = 0;
  }
  obj17.value = Math.round(num4);
  obj17.color = primaryBackgroundColor;
  const items7 = [metroImportDefault(NumberStat, obj17), ];
  const obj18 = { label: null, name: null, color: null, icon: null };
  const intl7 = util.intl;
  obj18.label = intl7.string(_modDef3216["3sARW7"]);
  if (null == first1) {
    const intl8 = util.intl;
    let stringResult = intl8.string(util.t.PoWNfe);
  } else if (null == first1.id) {
    stringResult = UnicodeEmojisDefault.convertSurrogateToName(first1.name);
    const tmp13Result9 = UnicodeEmojisDefault;
  } else {
    const _HermesInternal = HermesInternal;
    stringResult = ":" + first1.name + ":";
  }
  obj18.name = stringResult;
  obj18.color = primaryBackgroundColor;
  let tmp25Result3 = tmp25Result4;
  if (null != first1) {
    let str2 = "";
    if (null == first1.id) {
      str2 = first1.name;
    }
    const obj19 = { name: str2, src: emojiURL, style: null, fastImageStyle: null, textEmojiStyle: null };
    ({ emoji: obj23.style, emoji: obj23.fastImageStyle, textEmoji: obj23.textEmojiStyle } = tmp);
    tmp25Result3 = metroImportDefault(EmojiDefault, obj19);
    const tmp13Result10 = EmojiDefault;
  }
  obj18.icon = tmp25Result3;
  items7[1] = metroImportDefault(ItemStat, obj18);
  obj16.children = items7;
  items5[2] = React5(View, obj16);
  const obj20 = { style: tmp.row, children: null };
  const obj21 = { label: null, value: null, color: null };
  const intl9 = util.intl;
  obj21.label = intl9.string(_modDef3248.y2Y1DD);
  let num5;
  if (games != null) {
    num5 = games.totalDaysPlayed;
  }
  if (num5 == null) {
    num5 = 0;
  }
  obj21.value = Math.round(num5);
  obj21.color = primaryBackgroundColor;
  const items8 = [metroImportDefault(NumberStat, obj21), ];
  const obj22 = { label: null, name: null, color: null, icon: null };
  const intl10 = util.intl;
  obj22.label = intl10.string(_modDef3216.RbT4Zq);
  if (null != game) {
    let name2 = game.name;
  } else {
    const intl11 = util.intl;
    name2 = intl11.string(util.t.PoWNfe);
  }
  obj22.name = name2;
  obj22.color = primaryBackgroundColor;
  if (null != applicationIconURL) {
    const obj24 = { source: null, style: null };
    const obj25 = { uri: applicationIconURL };
    obj24.source = obj25;
    obj24.style = tmp.itemIcon;
    tmp25Result4 = metroImportDefault(FastImageDefault, obj24);
  }
  const obj26 = { children: null };
  obj22.icon = tmp25Result4;
  items8[1] = metroImportDefault(ItemStat, obj22);
  obj20.children = items8;
  items5[3] = React5(View, obj20);
  obj8.children = items5;
  items3[1] = React5(View, obj8);
  obj7.children = items3;
  obj26.children = React5(View, obj7);
  return metroImportDefault(CheckpointScreenDefault, obj26);
};