// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../../../../utils/AvatarUtils.tsx";
import _modDef3285 from "../../../../Checkpoint.messages.js";
import _modDef3317 from "../../../../Checkpoint2026.messages.js";
import UnicodeEmojisDefault from "../../../../../emojis/UnicodeEmojis.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import CheckpointCardColors from "../../../../CheckpointCardColors.tsx";
import CheckpointStatsUtils from "../../../../CheckpointStatsUtils.tsx";
import GuildIcon from "../../../../../guild/native/GuildIcon.tsx";
import EmojiDefault from "../../../../../emojis/native/Emoji.tsx";
import useMeasuredLayoutDefault from "../../../../../screen/native/useMeasuredLayout.tsx";
import UnknownGameIcon from "../../../../../../design/components/Icon/native/redesign/generated/UnknownGameIcon.tsx";
import FlagIcon from "../../../../../../design/components/Icon/native/redesign/generated/FlagIcon.tsx";
import CheckpointScreen from "../../CheckpointScreen.tsx";
import CheckpointTextDefault from "../../CheckpointText.tsx";
import CheckpointStatNumberDefault from "../../CheckpointStatNumber.tsx";
import useIsCheckpointWideDefault from "../../../useIsCheckpointWide.tsx";
import CheckpointNumberUtils from "../../../CheckpointNumberUtils.tsx";
import CheckpointDisplayTextDefault from "../../CheckpointDisplayText.tsx";
import CheckpointRecapCardDefault from "../../CheckpointRecapCard.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../../a11y/AccessibilityStore.tsx";
import CheckpointStore from "../../../../CheckpointStore.tsx";

const GuildIconDefault = GuildIcon;
const CheckpointScreenDefault = CheckpointScreen;

require = fn;
function GlobalSummaryStats() {
  const tmp = closure_13();
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => character.character);
  const obj2 = CheckpointCardColors;
  const tmp6 = useIsCheckpointWideDefault();
  const obj3 = CheckpointCardColors;
  const checkpointScreenContentHeight = CheckpointScreen.useCheckpointScreenContentHeight();
  const tmp8 = useMeasuredLayoutDefault();
  const height = tmp8.height;
  const diff = checkpointScreenContentHeight - sum;
  let tmp10 = diff;
  ({ ref, onLayout } = tmp8);
  if (!tmp6) {
    let diff1;
    if (null != height) {
      diff1 = diff - PX_32 - height;
    }
    tmp10 = diff1;
  }
  const items1 = [, ,];
  ({ container: arr2[0], noDataContainer: arr2[1] } = tmp);
  let noDataWideContainer = tmp6;
  if (tmp6) {
    noDataWideContainer = tmp.noDataWideContainer;
  }
  const obj5 = { style: items1, children: null };
  items1[2] = noDataWideContainer;
  const items2 = [
    React5(CheckpointRecapCardDefault, {
      isStepFocusTarget: true,
      character: stateFromStores,
      maxHeight: tmp10,
      maxScale: 1.3432835820895523,
    }),
  ];
  const obj6 = { ref, onLayout, style: tmp.noDataDescription, children: null };
  let noDataDescriptionText = !tmp6;
  if (!tmp6) {
    noDataDescriptionText = tmp.noDataDescriptionText;
  }
  const obj7 = { variant: "body-md/medium", style: null, children: null };
  const items3 = [
    noDataDescriptionText,
    { color: obj2.getCardColors(obj3.getCharacterCardColorPalette(stateFromStores)).primaryBackgroundColor },
  ];
  obj7.style = items3;
  const intl = util.intl;
  obj7.children = intl.string(_modDef3317["GL+yOs"]);
  obj6.children = React5(CheckpointTextDefault, obj7);
  items2[1] = React5(View, obj6);
  obj5.children = items2;
  return React6(View, obj5);
}
function UserSummaryStats(stats) {
  stats = stats.stats;
  const tmp = closure_13();
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => character.character);
  ({ voice, messages, guilds } = stats);
  let first;
  if (guilds != null) {
    first = guilds.guilds[0];
  }
  ({ emojis, games } = stats);
  const items1 = [AccessibilityStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const tmp2Result = initialize;
  const characterCardColorPalette = CheckpointCardColors.getCharacterCardColorPalette(stateFromStores);
  const tmp2Result5 = CheckpointCardColors;
  const primaryBackgroundColor = CheckpointCardColors.getCardColors(characterCardColorPalette).primaryBackgroundColor;
  const tmp2Result6 = CheckpointCardColors;
  const checkpointScreenContentHeight = CheckpointScreen.useCheckpointScreenContentHeight();
  const tmp10 = useMeasuredLayoutDefault();
  const height = tmp10.height;
  ({ ref, onLayout } = tmp10);
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
    let tmp19 = !stateFromStores1;
    if (!stateFromStores1) {
      tmp19 = true === first1.animated;
    }
    obj2.animated = tmp19;
    const emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
    const tmp9Result = AvatarUtilsDefault;
  }
  let applicationIconURL;
  if (null != game) {
    ({ id: obj9.id, iconHash: obj9.icon } = game);
    applicationIconURL = AvatarUtilsDefault.getApplicationIconURL({ id: null, icon: null, fallbackAvatar: false });
    const obj3 = { id: null, icon: null, fallbackAvatar: false };
    const tmp9Result5 = AvatarUtilsDefault;
  }
  let tmp21Result6 = React5(UnknownGameIcon.UnknownGameIcon, { size: "md", color: primaryBackgroundColor });
  const intl = util.intl;
  const tmp2Result7 = CheckpointScreen;
  const stringResult = intl.string(_modDef3317.s4qVni);
  const intl2 = util.intl;
  const toLocaleUpperCaseResult = intl.string(_modDef3317.s4qVni).toLocaleUpperCase();
  let icon;
  const stringResult1 = intl2.string(_modDef3285.y4M1na);
  if (first != null) {
    icon = first.guild.icon;
  }
  if (null != icon) {
    const obj4 = { guild: first.guild, size: GuildIcon.GuildIconSizes.SMALL, style: tmp.itemIcon };
    let tmp21Result = React5(GuildIconDefault, obj4);
    const tmp9Result6 = GuildIconDefault;
  } else {
    tmp21Result = tmp21Result6;
    if (null != first) {
      const obj5 = { style: null, children: null };
      const items2 = [,];
      ({ itemIcon: arr9[0], guildAcronym: arr9[1] } = tmp);
      obj5.style = items2;
      const obj6 = {
        variant: "body-md/semibold",
        color: "text-overlay-light",
        allowFontScaling: false,
        children: CheckpointStatsUtils.getGuildAcronymCharacter(first.guild.name),
      };
      obj5.children = React5(Text_Text.Text, obj6);
      tmp21Result = React5(View, obj5);
      const tmp2Result8 = CheckpointStatsUtils;
    }
  }
  const obj7 = { style: tmp.container, children: null };
  if (null != stateFromStores) {
    const obj8 = { isStepFocusTarget: true, character: stateFromStores, maxHeight: diff };
    let tmp21Result4 = React5(CheckpointRecapCardDefault, obj8);
  } else {
    const obj10 = { style: tmp.heading, children: null };
    const obj11 = { style: tmp.headingLabel, children: null };
    const obj12 = { size: "xs", color };
    const items3 = [React5(FlagIcon.FlagIcon, obj12)];
    const obj13 = { isStepHeading: true, variant: "heading-sm/semibold", children: toLocaleUpperCaseResult };
    items3[1] = React5(CheckpointTextDefault, obj13);
    obj11.children = items3;
    const items4 = [React6(View, obj11)];
    const obj14 = { children: toLocaleUpperCaseResult1 };
    items4[1] = React5(CheckpointDisplayTextDefault, obj14);
    obj10.children = items4;
    tmp21Result4 = React6(View, obj10);
  }
  const items5 = [tmp21Result4];
  const obj15 = { style: tmp.stats, ref, onLayout, children: null };
  const obj16 = { style: tmp.row, children: null };
  const obj17 = { label: null, statType: "voice", value: null, color: null };
  const intl3 = util.intl;
  obj17.label = intl3.string(_modDef3317.MSrV9z);
  let num;
  if (voice != null) {
    num = voice.totalVoiceMinutes;
  }
  if (num == null) {
    num = 0;
  }
  obj17.value = Math.round(num);
  obj17.color = primaryBackgroundColor;
  const items6 = [React5(NumberStat, obj17)];
  const obj18 = { label: null, statType: "messages", value: null, color: null };
  const intl4 = util.intl;
  obj18.label = intl4.string(_modDef3317.hhh11L);
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
  const items7 = [React6(View, obj16), , ,];
  const obj19 = { style: tmp.row, children: null };
  const obj20 = { label: null, statType: "topServerDays", value: null, color: null };
  const intl5 = util.intl;
  obj20.label = intl5.string(_modDef3317["f5S+pt"]);
  let num3;
  if (first != null) {
    num3 = first.numDaysInteracted;
  }
  if (num3 == null) {
    num3 = 0;
  }
  obj20.value = Math.round(num3);
  obj20.color = primaryBackgroundColor;
  const items8 = [React5(NumberStat, obj20)];
  const obj21 = { label: null, name: null, color: null, icon: null };
  const intl6 = util.intl;
  obj21.label = intl6.string(_modDef3285["8XPMJj"]);
  if (null != first) {
    let name = first.guild.name;
  } else {
    const intl7 = util.intl;
    name = intl7.string(_modDef3317.GultYJ);
  }
  obj21.name = name;
  obj21.color = primaryBackgroundColor;
  obj21.icon = tmp21Result;
  items8[1] = React5(ItemStat, obj21);
  obj19.children = items8;
  items7[1] = React6(View, obj19);
  const obj22 = { style: tmp.row, children: null };
  const obj23 = { label: null, statType: "emoji", value: null, color: null };
  const intl8 = util.intl;
  obj23.label = intl8.string(_modDef3317.xVSlv3);
  let num4;
  if (emojis != null) {
    num4 = emojis.numEmojisSent;
  }
  if (num4 == null) {
    num4 = 0;
  }
  obj23.value = Math.round(num4);
  obj23.color = primaryBackgroundColor;
  const items9 = [React5(NumberStat, obj23)];
  const obj24 = { label: null, name: null, color: null, icon: null };
  const intl9 = util.intl;
  obj24.label = intl9.string(_modDef3285["3sARW7"]);
  if (null == first1) {
    const intl10 = util.intl;
    let stringResult2 = intl10.string(util.t.PoWNfe);
  } else if (null == first1.id) {
    stringResult2 = UnicodeEmojisDefault.convertSurrogateToName(first1.name);
    const tmp9Result7 = UnicodeEmojisDefault;
  } else {
    const _HermesInternal = HermesInternal;
    stringResult2 = ":" + first1.name + ":";
  }
  obj24.name = stringResult2;
  obj24.color = primaryBackgroundColor;
  let tmp21Result5 = tmp21Result6;
  if (null != first1) {
    let str2 = "";
    if (null == first1.id) {
      str2 = first1.name;
    }
    const obj25 = { name: str2, src: emojiURL, style: null, fastImageStyle: null, textEmojiStyle: null };
    ({ emoji: obj26.style, emoji: obj26.fastImageStyle, textEmoji: obj26.textEmojiStyle } = tmp);
    tmp21Result5 = React5(EmojiDefault, obj25);
    const tmp9Result8 = EmojiDefault;
  }
  obj24.icon = tmp21Result5;
  items9[1] = React5(ItemStat, obj24);
  obj22.children = items9;
  items7[2] = React6(View, obj22);
  const obj27 = { style: tmp.row, children: null };
  const obj28 = { label: null, statType: "gameDays", value: null, color: null };
  const intl11 = util.intl;
  obj28.label = intl11.string(_modDef3317.y2Y1DD);
  let num5;
  if (games != null) {
    num5 = games.totalDaysPlayed;
  }
  if (num5 == null) {
    num5 = 0;
  }
  obj28.value = Math.round(num5);
  obj28.color = primaryBackgroundColor;
  const items10 = [React5(NumberStat, obj28)];
  const obj29 = { label: null, name: null, color: null, icon: null };
  const intl12 = util.intl;
  obj29.label = intl12.string(_modDef3285.RbT4Zq);
  if (null != game) {
    let name2 = game.name;
  } else {
    const intl13 = util.intl;
    name2 = intl13.string(util.t.PoWNfe);
  }
  obj29.name = name2;
  obj29.color = primaryBackgroundColor;
  if (null != applicationIconURL) {
    const obj30 = { source: null, style: null };
    const obj31 = { uri: applicationIconURL };
    obj30.source = obj31;
    obj30.style = tmp.itemIcon;
    tmp21Result6 = React5(FastImageDefault, obj30);
  }
  obj29.icon = tmp21Result6;
  items10[1] = React5(ItemStat, obj29);
  obj27.children = items10;
  items7[3] = React6(View, obj27);
  obj15.children = items7;
  items5[1] = React6(View, obj15);
  obj7.children = items5;
  return React6(View, obj7);
}
function NumberStat(arg0) {
  ({ value, color } = arg0);
  ({ label, statType } = arg0);
  const tmp = closure_13();
  items = [color];
  const memo = noop.useMemo(() => ({ color }), items);
  const obj2 = { style: tmp.stat, accessible: true, accessibilityLabel: null, children: null };
  const result = CheckpointNumberUtils.formatCheckpointStatNumber(value);
  obj2.accessibilityLabel = CheckpointNumberUtils.formatCheckpointStatAccessibilityLabel(statType, value);
  const items1 = [React5(CheckpointTextDefault, { variant: "body-md/medium", style: memo, children: label })];
  items1[1] = React5(View, {
    style: tmp.statNumber,
    children: React5(CheckpointStatNumberDefault, { value: result, color, size: 32 }),
  });
  obj2.children = items1;
  return React6(View, obj2);
}
function ItemStat(children) {
  ({ label, name, color } = children);
  const tmp = closure_13();
  items = [color];
  const memo = noop.useMemo(() => ({ color }), items);
  const obj = { style: tmp.stat, accessible: true, accessibilityLabel: "" + label + ", " + name, children: null };
  const items1 = [React5(CheckpointTextDefault, { variant: "body-md/medium", style: memo, children: label })];
  const obj2 = { style: tmp.item, children: null };
  const items2 = [React5(View, { style: tmp.itemIcon, children: children.icon })];
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
const CheckpointConstants = fn(6377);
({ CHECKPOINT_PRIMARY: metroImportDefault, CHECKPOINT_CONTROL_SIZE } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_32 = nativeDefault.space.PX_32;
const sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const createStyles = fn(5306);
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
  noDataContainer: { justifyContent: "center", gap: PX_32 },
  noDataWideContainer: { flexDirection: "row", maxWidth: "100%" },
  heading: { alignSelf: "stretch", gap: nativeDefault.space.PX_8 },
  headingLabel: null,
  stats: null,
  noDataDescription: null,
  noDataDescriptionText: null,
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
let obj3 = { alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.headingLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.stats = { alignSelf: "stretch", gap: nativeDefault.space.PX_24 };
obj2.noDataDescription = { width: 240 };
obj2.noDataDescriptionText = { textAlign: "center" };
let obj5 = { alignSelf: "stretch", gap: nativeDefault.space.PX_24 };
obj2.row = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
let obj6 = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
obj2.stat = { flex: 1, gap: nativeDefault.space.PX_8 };
obj2.statNumber = { height: 24, justifyContent: "center" };
let obj7 = { flex: 1, gap: nativeDefault.space.PX_8 };
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
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.guildAcronym = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.emoji = { width: 28, height: 28 };
const PlatformUtils = fn(1360);
let num;
if (PlatformUtils.isIOS()) {
  num = 30;
}
obj2.textEmoji = { fontSize: 24, lineHeight: num, textAlign: "center" };
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx",
);

export default function CheckpointSummaryStatsScreen() {
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => stats.stats);
  if (null === stateFromStores) {
    let children = React5(GlobalSummaryStats, {});
  } else {
    const obj2 = { stats: stateFromStores };
    children = React5(UserSummaryStats, obj2);
  }
  return React5(CheckpointScreenDefault, { children });
}
