// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../../../../utils/AvatarUtils.tsx";
import _modDef3060 from "../../../../Checkpoint.messages.js";
import _modDef3092 from "../../../../Checkpoint2026.messages.js";
import UnicodeEmojisDefault from "../../../../../emojis/UnicodeEmojis.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import CheckpointCardColors from "../../../../CheckpointCardColors.tsx";
import CheckpointStatsUtils from "../../../../CheckpointStatsUtils.tsx";
import GuildIcon from "../../../../../guild/native/GuildIcon.tsx";
import EmojiDefault from "../../../../../emojis/native/Emoji.tsx";
import UnknownGameIcon from "../../../../../../design/components/Icon/native/redesign/generated/UnknownGameIcon.tsx";
import CheckpointScreen from "../../CheckpointScreen.tsx";
import CheckpointTextDefault from "../../CheckpointText.tsx";
import CheckpointStatNumberDefault from "../../CheckpointStatNumber.tsx";
import CheckpointRecapCardDefault from "../../CheckpointRecapCard.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../../a11y/AccessibilityStore.tsx";
import CheckpointStore from "../../../../CheckpointStore.tsx";

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
const CheckpointScreenDefault = CheckpointScreen;

require = fn;
function NumberStat(arg0) {
  ({ label, value, color } = arg0);
  const tmp = closure_12();
  const items = [color];
  const obj = { style: tmp.stat, accessible: true, accessibilityLabel: null, children: null };
  const memo = noop.useMemo(() => ({ color }), items);
  obj.accessibilityLabel = "" + label + ", " + value.toLocaleString(util.intl.currentLocale);
  const items1 = [
    React6(CheckpointTextDefault, { variant: "text-md/medium", style: memo, children: label }),
    React6(View, { style: tmp.statNumber, children: React6(CheckpointStatNumberDefault, { value, color, size: 32 }) }),
  ];
  obj.children = items1;
  return React7(View, obj);
}
function ItemStat(children) {
  ({ label, name, color } = children);
  const tmp = closure_12();
  const items = [color];
  const memo = noop.useMemo(() => ({ color }), items);
  const obj = { style: tmp.stat, accessible: true, accessibilityLabel: "" + label + ", " + name, children: null };
  const items1 = [React6(CheckpointTextDefault, { variant: "text-md/medium", style: memo, children: label })];
  const obj2 = { style: tmp.item, children: null };
  const items2 = [React6(View, { style: tmp.itemIcon, children: children.icon })];
  const obj4 = { variant: "text-md/bold", style: null, children: name };
  const items3 = [tmp.itemName, memo];
  obj4.style = items3;
  items2[1] = React6(CheckpointTextDefault, obj4);
  obj2.children = items2;
  items1[1] = React7(View, obj2);
  obj.children = items1;
  return React7(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const sum = fn(6066).CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const createStyles = fn(5014);
let obj2 = {
  container: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
    flexGrow: 1,
    alignItems: "center",
    gap: PX_16,
    paddingBottom: sum,
  },
  stats: { alignSelf: "stretch", gap: nativeDefault.space.PX_24 },
  row: null,
  stat: null,
  statNumber: null,
  item: null,
  itemName: null,
  itemIcon: null,
  guildAcronym: null,
  emoji: null,
  textEmoji: null,
};
let obj3 = { alignSelf: "stretch", gap: nativeDefault.space.PX_24 };
obj2.row = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
let obj4 = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
obj2.stat = { flex: 1, gap: nativeDefault.space.PX_8 };
obj2.statNumber = { height: 24, justifyContent: "center" };
let obj5 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj2.item = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.itemName = { flexShrink: 1 };
let size = {
  width: 28,
  height: 28,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.none,
};
obj2.itemIcon = size;
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.guildAcronym = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.emoji = { width: 28, height: 28 };
let PlatformUtils = fn(1376);
let num = 24;
if (PlatformUtils.isIOS()) {
  num = 28;
}
let obj8 = { fontSize: num, lineHeight: null, textAlign: "center" };
PlatformUtils = fn(1376);
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 32;
}
obj8.lineHeight = num2;
obj2.textEmoji = obj8;
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx",
);

export default function CheckpointSummaryStatsScreen() {
  const tmp = closure_12();
  const items = [CheckpointStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({
    character: CheckpointStore.character,
    stats: CheckpointStore.stats,
  }));
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
  const tmp2Result7 = CheckpointScreen;
  [tmp14, require] = noop.useState(null);
  let diff;
  if (null != tmp14) {
    diff = checkpointScreenContentHeight - closure_11 - PX_16 - tmp14;
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
    let tmp24 = !stateFromStores;
    if (!stateFromStores) {
      tmp24 = true === first1.animated;
    }
    obj2.animated = tmp24;
    const emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
  }
  let applicationIconURL;
  if (null != game) {
    ({ id: obj9.id, iconHash: obj9.icon } = game);
    applicationIconURL = AvatarUtilsDefault.getApplicationIconURL({ id: null, icon: null, fallbackAvatar: false });
    const obj3 = { id: null, icon: null, fallbackAvatar: false };
  }
  let tmp27Result4 = closure_8(UnknownGameIcon.UnknownGameIcon, { size: "md", color: primaryBackgroundColor });
  let icon;
  if (first != null) {
    icon = first.guild.icon;
  }
  if (null != icon) {
    const obj4 = { guild: first.guild, size: GuildIcon.GuildIconSizes.SMALL, style: tmp.itemIcon };
    let tmp27Result = closure_8(GuildIconDefault, obj4);
  } else {
    tmp27Result = tmp27Result4;
    if (null != first) {
      const obj5 = { style: null, children: null };
      const items2 = [,];
      ({ itemIcon: arr9[0], guildAcronym: arr9[1] } = tmp);
      obj5.style = items2;
      const obj7 = {
        variant: "text-md/semibold",
        color: "text-overlay-light",
        allowFontScaling: false,
        children: CheckpointStatsUtils.getGuildAcronymCharacter(first.guild.name),
      };
      obj5.children = closure_8(Text_Text.Text, obj7);
      tmp27Result = closure_8(View, obj5);
      const tmp2Result8 = CheckpointStatsUtils;
    }
  }
  const obj10 = { style: tmp.container, children: null };
  const tmp13 = _slicedToArray(noop.useState(null), 2);
  const items3 = [closure_8(CheckpointRecapCardDefault, { isStepFocusTarget: true, character, maxHeight: diff })];
  const obj11 = {
    style: tmp.stats,
    onLayout: function handleStatsLayout(nativeEvent) {
      require(nativeEvent.nativeEvent.layout.height);
    },
    children: null,
  };
  const obj12 = { style: tmp.row, children: null };
  const obj13 = { label: null, value: null, color: null };
  const intl = util.intl;
  obj13.label = intl.string(_modDef3092.MSrV9z);
  let num;
  if (voice != null) {
    num = voice.totalVoiceMinutes;
  }
  if (num == null) {
    num = 0;
  }
  obj13.value = Math.round(num);
  obj13.color = primaryBackgroundColor;
  const items4 = [closure_8(NumberStat, obj13)];
  const obj14 = { label: null, value: null, color: null };
  const intl2 = util.intl;
  obj14.label = intl2.string(_modDef3092.hhh11L);
  let num2;
  if (messages != null) {
    num2 = messages.numMessagesSent;
  }
  if (num2 == null) {
    num2 = 0;
  }
  obj14.value = Math.round(num2);
  obj14.color = primaryBackgroundColor;
  items4[1] = closure_8(NumberStat, obj14);
  obj12.children = items4;
  const items5 = [closure_9(View, obj12), , ,];
  const obj15 = { style: tmp.row, children: null };
  const obj16 = { label: null, value: null, color: null };
  const intl3 = util.intl;
  obj16.label = intl3.string(_modDef3092["f5S+pt"]);
  let num3;
  if (first != null) {
    num3 = first.numDaysInteracted;
  }
  if (num3 == null) {
    num3 = 0;
  }
  obj16.value = Math.round(num3);
  obj16.color = primaryBackgroundColor;
  const items6 = [closure_8(NumberStat, obj16)];
  const obj17 = { label: null, name: null, color: null, icon: null };
  const intl4 = util.intl;
  obj17.label = intl4.string(_modDef3060["8XPMJj"]);
  if (null != first) {
    let name = first.guild.name;
  } else {
    const intl5 = util.intl;
    name = intl5.string(_modDef3092.GultYJ);
  }
  obj17.name = name;
  obj17.color = primaryBackgroundColor;
  obj17.icon = tmp27Result;
  items6[1] = closure_8(ItemStat, obj17);
  obj15.children = items6;
  items5[1] = closure_9(View, obj15);
  const obj18 = { style: tmp.row, children: null };
  const obj19 = { label: null, value: null, color: null };
  const intl6 = util.intl;
  obj19.label = intl6.string(_modDef3092.xVSlv3);
  let num4;
  if (emojis != null) {
    num4 = emojis.numEmojisSent;
  }
  if (num4 == null) {
    num4 = 0;
  }
  obj19.value = Math.round(num4);
  obj19.color = primaryBackgroundColor;
  const items7 = [closure_8(NumberStat, obj19)];
  const obj20 = { label: null, name: null, color: null, icon: null };
  const intl7 = util.intl;
  obj20.label = intl7.string(_modDef3060["3sARW7"]);
  if (null == first1) {
    const intl8 = util.intl;
    let stringResult = intl8.string(util.t.PoWNfe);
  } else if (null == first1.id) {
    stringResult = UnicodeEmojisDefault.convertSurrogateToName(first1.name);
    const tmp33Result = UnicodeEmojisDefault;
  } else {
    const _HermesInternal = HermesInternal;
    stringResult = ":" + first1.name + ":";
  }
  obj20.name = stringResult;
  obj20.color = primaryBackgroundColor;
  let tmp27Result3 = tmp27Result4;
  if (null != first1) {
    let str2 = "";
    if (null == first1.id) {
      str2 = first1.name;
    }
    const obj21 = { name: str2, src: emojiURL, style: null, fastImageStyle: null, textEmojiStyle: null };
    ({ emoji: obj23.style, emoji: obj23.fastImageStyle, textEmoji: obj23.textEmojiStyle } = tmp);
    tmp27Result3 = closure_8(EmojiDefault, obj21);
    const tmp33Result2 = EmojiDefault;
  }
  obj20.icon = tmp27Result3;
  items7[1] = closure_8(ItemStat, obj20);
  obj18.children = items7;
  items5[2] = closure_9(View, obj18);
  const obj22 = { style: tmp.row, children: null };
  const obj24 = { label: null, value: null, color: null };
  const intl9 = util.intl;
  obj24.label = intl9.string(_modDef3092.y2Y1DD);
  let num5;
  if (games != null) {
    num5 = games.totalDaysPlayed;
  }
  if (num5 == null) {
    num5 = 0;
  }
  obj24.value = Math.round(num5);
  obj24.color = primaryBackgroundColor;
  const items8 = [closure_8(NumberStat, obj24)];
  const obj25 = { label: null, name: null, color: null, icon: null };
  const intl10 = util.intl;
  obj25.label = intl10.string(_modDef3060.RbT4Zq);
  if (null != game) {
    let name2 = game.name;
  } else {
    const intl11 = util.intl;
    name2 = intl11.string(util.t.PoWNfe);
  }
  obj25.name = name2;
  obj25.color = primaryBackgroundColor;
  if (null != applicationIconURL) {
    const obj26 = { source: null, style: null };
    const obj27 = { uri: applicationIconURL };
    obj26.source = obj27;
    obj26.style = tmp.itemIcon;
    tmp27Result4 = closure_8(FastImageDefault, obj26);
  }
  const obj28 = { children: null };
  obj25.icon = tmp27Result4;
  items8[1] = closure_8(ItemStat, obj25);
  obj22.children = items8;
  items5[3] = closure_9(View, obj22);
  obj11.children = items5;
  items3[1] = closure_9(View, obj11);
  obj10.children = items3;
  obj28.children = closure_9(View, obj10);
  return closure_8(CheckpointScreenDefault, obj28);
}
