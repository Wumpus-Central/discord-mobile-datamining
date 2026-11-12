// === Module 14410: CheckpointSummaryStatsScreen ===

// Module 14410 (CheckpointSummaryStatsScreen)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import _modDef3237 from "module_3237" /* 3237 */;
import _modDef3269 from "module_3269" /* 3269 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5189 */;
import Text_Text from "Text/Text" /* 5866 */;
import FastImageDefault from "FastImage" /* 5957 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6338 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6684 */;
import GuildIcon from "GuildIcon" /* 7654 */;
import EmojiDefault from "Emoji" /* 7828 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7929 */;
import UnknownGameIcon from "UnknownGameIcon" /* 8309 */;
import FlagIcon from "FlagIcon" /* 11261 */;
import CheckpointScreen from "CheckpointScreen" /* 14160 */;
import CheckpointTextDefault from "CheckpointText" /* 14161 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 14373 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 14383 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 14389 */;
import CheckpointRecapCardDefault from "CheckpointRecapCard" /* 14411 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import CheckpointStore from "CheckpointStore" /* 14146 */;

const GuildIconDefault = GuildIcon;
const CheckpointScreenDefault = CheckpointScreen;

require = fn;
function NumberStat(arg0) {
  ({ value, color } = arg0);
  ({ label, statType } = arg0);
  const tmp = closure_12();
  items = [color];
  const memo = noop.useMemo(() => ({ color }), items);
  const obj2 = { style: tmp.stat, accessible: true, accessibilityLabel: null, children: null };
  const result = CheckpointNumberUtils.formatCheckpointStatNumber(value);
  obj2.accessibilityLabel = CheckpointNumberUtils.formatCheckpointStatAccessibilityLabel(statType, value);
  const items1 = [React5(CheckpointTextDefault, { variant: "body-md/medium", style: memo, children: label }), ];
  items1[1] = React5(View, { style: tmp.statNumber, children: React5(CheckpointStatNumberDefault, { value: result, color, size: 32 }) });
  obj2.children = items1;
  return React6(View, obj2);
}
function ItemStat(children) {
  ({ label, name, color } = children);
  const tmp = closure_12();
  items = [color];
  const memo = noop.useMemo(() => ({ color }), items);
  const obj = { style: tmp.stat, accessible: true, accessibilityLabel: "" + label + ", " + name, children: null };
  const items1 = [React5(CheckpointTextDefault, { variant: "body-md/medium", style: memo, children: label }), ];
  const obj2 = { style: tmp.item, children: null };
  const items2 = [React5(View, { style: tmp.itemIcon, children: children.icon }), ];
  const obj4 = { variant: "body-md/semibold", style: null, children: name };
  const items3 = [tmp.itemName, memo];
  obj4.style = items3;
  items2[1] = React5(CheckpointTextDefault, obj4);
  obj2.children = items2;
  items1[1] = React6(View, obj2);
  obj.children = items1;
  return React6(View, obj);
}
const View = fn(17).View;
const CheckpointConstants = fn(6314);
({ CHECKPOINT_PRIMARY: metroImportDefault, CHECKPOINT_CONTROL_SIZE } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const createStyles = fn(5243);
let obj2 = { container: { width: "100%", maxWidth: 400, alignSelf: "center", flexGrow: 1, alignItems: "center", gap: PX_16, paddingBottom: sum }, heading: { alignSelf: "stretch", gap: nativeDefault.space.PX_8 }, headingLabel: null, stats: null, row: null, stat: null, statNumber: null, item: null, itemName: null, itemIcon: null, guildAcronym: null, emoji: null, textEmoji: null };
let obj3 = { alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.headingLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.stats = { alignSelf: "stretch", gap: nativeDefault.space.PX_24 };
let obj5 = { alignSelf: "stretch", gap: nativeDefault.space.PX_24 };
obj2.row = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
let obj6 = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
obj2.stat = { flex: 1, gap: nativeDefault.space.PX_8 };
obj2.statNumber = { height: 24, justifyContent: "center" };
let obj7 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj2.item = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.itemName = { flexShrink: 1 };
let size = { width: 28, height: 28, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.none };
obj2.itemIcon = size;
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.guildAcronym = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.emoji = { width: 28, height: 28 };
const PlatformUtils = fn(1357);
let num;
if (PlatformUtils.isIOS()) {
  num = 30;
}
obj2.textEmoji = { fontSize: 24, lineHeight: num, textAlign: "center" };
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx");

export default function CheckpointSummaryStatsScreen() {
  const tmp = closure_12();
  items = [CheckpointStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ character: CheckpointStore.character, stats: CheckpointStore.stats, isCharacterCreatorEnabled: CheckpointStore.isCharacterCreatorEnabled }));
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
  ({ ref, onLayout } = tmp14);
  if (null != height) {
    const diff = checkpointScreenContentHeight - sum - PX_16 - height;
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
  let tmp25Result6 = React5(UnknownGameIcon.UnknownGameIcon, { size: "md", color: primaryBackgroundColor });
  const intl = util.intl;
  const tmp2Result7 = CheckpointScreen;
  const stringResult = intl.string(_modDef3269.s4qVni);
  const intl2 = util.intl;
  const toLocaleUpperCaseResult = intl.string(_modDef3269.s4qVni).toLocaleUpperCase();
  let icon;
  const stringResult1 = intl2.string(_modDef3237.y4M1na);
  if (first != null) {
    icon = first.guild.icon;
  }
  if (null != icon) {
    const obj4 = { guild: first.guild, size: GuildIcon.GuildIconSizes.SMALL, style: tmp.itemIcon };
    let tmp25Result = React5(GuildIconDefault, obj4);
    const tmp13Result7 = GuildIconDefault;
  } else {
    tmp25Result = tmp25Result6;
    if (null != first) {
      const obj5 = { style: null, children: null };
      const items2 = [, ];
      ({ itemIcon: arr11[0], guildAcronym: arr11[1] } = tmp);
      obj5.style = items2;
      const obj6 = { variant: "body-md/semibold", color: "text-overlay-light", allowFontScaling: false, children: CheckpointStatsUtils.getGuildAcronymCharacter(first.guild.name) };
      obj5.children = React5(Text_Text.Text, obj6);
      tmp25Result = React5(View, obj5);
      const tmp2Result8 = CheckpointStatsUtils;
    }
  }
  const obj7 = { style: tmp.container, children: null };
  const toLocaleUpperCaseResult1 = intl2.string(_modDef3237.y4M1na).toLocaleUpperCase();
  if (stateFromStoresObject.isCharacterCreatorEnabled) {
    const obj8 = { isStepFocusTarget: true, character, maxHeight: diff };
    let tmp25Result4 = React5(CheckpointRecapCardDefault, obj8);
  } else {
    const obj10 = { style: tmp.heading, children: null };
    const obj11 = { style: tmp.headingLabel, children: null };
    const obj12 = { size: "xs", color };
    const items3 = [React5(FlagIcon.FlagIcon, obj12), ];
    const obj13 = { isStepHeading: true, variant: "heading-sm/semibold", children: toLocaleUpperCaseResult };
    items3[1] = React5(CheckpointTextDefault, obj13);
    obj11.children = items3;
    const items4 = [React6(View, obj11), ];
    const obj14 = { children: toLocaleUpperCaseResult1 };
    items4[1] = React5(CheckpointDisplayTextDefault, obj14);
    obj10.children = items4;
    tmp25Result4 = React6(View, obj10);
  }
  const items5 = [tmp25Result4, ];
  const obj15 = { style: tmp.stats, ref, onLayout, children: null };
  const obj16 = { style: tmp.row, children: null };
  const obj17 = { label: null, statType: "voice", value: null, color: null };
  const intl3 = util.intl;
  obj17.label = intl3.string(_modDef3269.MSrV9z);
  let num;
  if (voice != null) {
    num = voice.totalVoiceMinutes;
  }
  if (num == null) {
    num = 0;
  }
  obj17.value = Math.round(num);
  obj17.color = primaryBackgroundColor;
  const items6 = [React5(NumberStat, obj17), ];
  const obj18 = { label: null, statType: "messages", value: null, color: null };
  const intl4 = util.intl;
  obj18.label = intl4.string(_modDef3269.hhh11L);
  let num2;
  if (messages != null) {
    num2 = messages.numMessagesSent;
  }
  if (num2 == null) {
    num2 = 0;
  }
  obj18.value = Math.round(num2);
  obj18.color = primaryBackgroundColor;
  items6[1] = React5(NumberStat, obj18);
  obj16.children = items6;
  const items7 = [React6(View, obj16), , , ];
  const obj19 = { style: tmp.row, children: null };
  const obj20 = { label: null, statType: "topServerDays", value: null, color: null };
  const intl5 = util.intl;
  obj20.label = intl5.string(_modDef3269["f5S+pt"]);
  let num3;
  if (first != null) {
    num3 = first.numDaysInteracted;
  }
  if (num3 == null) {
    num3 = 0;
  }
  obj20.value = Math.round(num3);
  obj20.color = primaryBackgroundColor;
  const items8 = [React5(NumberStat, obj20), ];
  const obj21 = { label: null, name: null, color: null, icon: null };
  const intl6 = util.intl;
  obj21.label = intl6.string(_modDef3237["8XPMJj"]);
  if (null != first) {
    let name = first.guild.name;
  } else {
    const intl7 = util.intl;
    name = intl7.string(_modDef3269.GultYJ);
  }
  obj21.name = name;
  obj21.color = primaryBackgroundColor;
  obj21.icon = tmp25Result;
  items8[1] = React5(ItemStat, obj21);
  obj19.children = items8;
  items7[1] = React6(View, obj19);
  const obj22 = { style: tmp.row, children: null };
  const obj23 = { label: null, statType: "emoji", value: null, color: null };
  const intl8 = util.intl;
  obj23.label = intl8.string(_modDef3269.xVSlv3);
  let num4;
  if (emojis != null) {
    num4 = emojis.numEmojisSent;
  }
  if (num4 == null) {
    num4 = 0;
  }
  obj23.value = Math.round(num4);
  obj23.color = primaryBackgroundColor;
  const items9 = [React5(NumberStat, obj23), ];
  const obj24 = { label: null, name: null, color: null, icon: null };
  const intl9 = util.intl;
  obj24.label = intl9.string(_modDef3237["3sARW7"]);
  if (null == first1) {
    const intl10 = util.intl;
    let stringResult2 = intl10.string(util.t.PoWNfe);
  } else if (null == first1.id) {
    stringResult2 = UnicodeEmojisDefault.convertSurrogateToName(first1.name);
    const tmp13Result9 = UnicodeEmojisDefault;
  } else {
    const _HermesInternal = HermesInternal;
    stringResult2 = ":" + first1.name + ":";
  }
  obj24.name = stringResult2;
  obj24.color = primaryBackgroundColor;
  let tmp25Result5 = tmp25Result6;
  if (null != first1) {
    let str2 = "";
    if (null == first1.id) {
      str2 = first1.name;
    }
    const obj25 = { name: str2, src: emojiURL, style: null, fastImageStyle: null, textEmojiStyle: null };
    ({ emoji: obj31.style, emoji: obj31.fastImageStyle, textEmoji: obj31.textEmojiStyle } = tmp);
    tmp25Result5 = React5(EmojiDefault, obj25);
    const tmp13Result10 = EmojiDefault;
  }
  obj24.icon = tmp25Result5;
  items9[1] = React5(ItemStat, obj24);
  obj22.children = items9;
  items7[2] = React6(View, obj22);
  const obj26 = { style: tmp.row, children: null };
  const obj27 = { label: null, statType: "gameDays", value: null, color: null };
  const intl11 = util.intl;
  obj27.label = intl11.string(_modDef3269.y2Y1DD);
  let num5;
  if (games != null) {
    num5 = games.totalDaysPlayed;
  }
  if (num5 == null) {
    num5 = 0;
  }
  obj27.value = Math.round(num5);
  obj27.color = primaryBackgroundColor;
  const items10 = [React5(NumberStat, obj27), ];
  const obj28 = { label: null, name: null, color: null, icon: null };
  const intl12 = util.intl;
  obj28.label = intl12.string(_modDef3237.RbT4Zq);
  if (null != game) {
    let name2 = game.name;
  } else {
    const intl13 = util.intl;
    name2 = intl13.string(util.t.PoWNfe);
  }
  obj28.name = name2;
  obj28.color = primaryBackgroundColor;
  if (null != applicationIconURL) {
    const obj29 = { source: null, style: null };
    const obj30 = { uri: applicationIconURL };
    obj29.source = obj30;
    obj29.style = tmp.itemIcon;
    tmp25Result6 = React5(FastImageDefault, obj29);
  }
  const obj32 = { children: null };
  obj28.icon = tmp25Result6;
  items10[1] = React5(ItemStat, obj28);
  obj26.children = items10;
  items7[3] = React6(View, obj26);
  obj15.children = items7;
  items5[1] = React6(View, obj15);
  obj7.children = items5;
  obj32.children = React6(View, obj7);
  return React5(CheckpointScreenDefault, obj32);
};