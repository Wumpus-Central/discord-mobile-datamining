// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../../../../utils/AvatarUtils.tsx";
import useWindowDimensionsDefault from "../../../../../screen/useWindowDimensions.native.tsx";
import _modDef3287 from "../../../../Checkpoint.messages.js";
import _modDef3319 from "../../../../Checkpoint2026.messages.js";
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
import CheckpointRecapCard from "../../CheckpointRecapCard.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../../a11y/AccessibilityStore.tsx";
import CheckpointStore from "../../../../CheckpointStore.tsx";

const GuildIconDefault = GuildIcon;
const CheckpointScreenDefault = CheckpointScreen;
const CheckpointRecapCardDefault = CheckpointRecapCard;

require = fn;
function GlobalSummaryStats() {
  const tmp = closure_15();
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
  obj7.children = intl.string(_modDef3319["GL+yOs"]);
  obj6.children = React5(CheckpointTextDefault, obj7);
  items2[1] = React5(View, obj6);
  obj5.children = items2;
  return React6(View, obj5);
}
function UserSummaryStats(stats) {
  stats = stats.stats;
  const tmp = closure_15();
  const tmp4 = useIsCheckpointWideDefault();
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
  const tmp5Result = initialize;
  const characterCardColorPalette = CheckpointCardColors.getCharacterCardColorPalette(stateFromStores);
  const tmp5Result5 = CheckpointCardColors;
  const primaryBackgroundColor = CheckpointCardColors.getCardColors(characterCardColorPalette).primaryBackgroundColor;
  const tmp5Result6 = CheckpointCardColors;
  const checkpointScreenContentHeight = CheckpointScreen.useCheckpointScreenContentHeight(tmp4);
  const tmp5Result7 = CheckpointScreen;
  ({ height, ref, onLayout } = useMeasuredLayoutDefault());
  const size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  let num = 1;
  if (Math.min(size.width, size.height) >= 600) {
    num = 1.4;
  }
  let diff;
  if (null != height) {
    diff = checkpointScreenContentHeight - sum - PX_16 - height;
  }
  let bound = diff;
  if (tmp4) {
    let num2 = 240;
    if (1 < num) {
      num2 = CheckpointRecapCard.CARD_HEIGHT * num;
    }
    bound = Math.min(num2, checkpointScreenContentHeight);
  }
  if (null != diff) {
    const _Math = Math;
    const _Math2 = Math;
    sum = PX_16 + Math.min(Math.max(diff - CheckpointRecapCard.CARD_HEIGHT * num, 0), PX_48 - PX_16);
  } else {
    sum = PX_16;
  }
  let wideStatsExpanded = tmp4;
  if (tmp4) {
    wideStatsExpanded = null != height;
  }
  if (wideStatsExpanded) {
    wideStatsExpanded = height <= checkpointScreenContentHeight - 2 * closure_14;
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
    let tmp25 = !stateFromStores1;
    if (!stateFromStores1) {
      tmp25 = true === first1.animated;
    }
    obj2.animated = tmp25;
    const emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
    const tmp2Result = AvatarUtilsDefault;
  }
  let applicationIconURL;
  if (null != game) {
    ({ id: obj9.id, iconHash: obj9.icon } = game);
    applicationIconURL = AvatarUtilsDefault.getApplicationIconURL({ id: null, icon: null, fallbackAvatar: false });
    const obj3 = { id: null, icon: null, fallbackAvatar: false };
    const tmp2Result6 = AvatarUtilsDefault;
  }
  let tmp27Result6 = React5(UnknownGameIcon.UnknownGameIcon, { size: "md", color: primaryBackgroundColor });
  const intl = util.intl;
  const tmp11 = useMeasuredLayoutDefault();
  const stringResult = intl.string(_modDef3319.s4qVni);
  const intl2 = util.intl;
  const toLocaleUpperCaseResult = intl.string(_modDef3319.s4qVni).toLocaleUpperCase();
  let icon;
  const stringResult1 = intl2.string(_modDef3287.y4M1na);
  if (first != null) {
    icon = first.guild.icon;
  }
  if (null != icon) {
    const obj4 = { guild: first.guild, size: GuildIcon.GuildIconSizes.SMALL, style: tmp.itemIcon };
    let tmp27Result = React5(GuildIconDefault, obj4);
    const tmp2Result7 = GuildIconDefault;
  } else {
    tmp27Result = tmp27Result6;
    if (null != first) {
      const obj5 = { style: null, children: null };
      const items2 = [,];
      ({ itemIcon: arr14[0], guildAcronym: arr14[1] } = tmp);
      obj5.style = items2;
      const obj6 = {
        variant: "body-md/semibold",
        color: "text-overlay-light",
        allowFontScaling: false,
        children: CheckpointStatsUtils.getGuildAcronymCharacter(first.guild.name),
      };
      obj5.children = React5(Text_Text.Text, obj6);
      tmp27Result = React5(View, obj5);
      const tmp5Result8 = CheckpointStatsUtils;
    }
  }
  const items3 = [tmp.row];
  let wideRow = tmp4;
  if (tmp4) {
    wideRow = tmp.wideRow;
  }
  items3[1] = wideRow;
  let wideLeftStat;
  if (wideStatsExpanded) {
    wideLeftStat = tmp.wideLeftStat;
  }
  let wideRightStat;
  if (wideStatsExpanded) {
    wideRightStat = tmp.wideRightStat;
  }
  if (tmp4) {
    let wideContainer = tmp.wideContainer;
  } else {
    wideContainer = [tmp.container];
    const obj7 = { gap: sum };
    wideContainer[1] = obj7;
  }
  const obj8 = { style: wideContainer, children: null };
  if (null != stateFromStores) {
    let prop;
    if (tmp4) {
      if (!wideStatsExpanded) {
        prop = tmp.wideCardClearControls;
      }
    }
    const obj10 = { style: prop, children: null };
    const obj11 = { isStepFocusTarget: true, character: stateFromStores, maxHeight: bound, maxScale: num };
    obj10.children = React5(CheckpointRecapCardDefault, obj11);
    let tmp27Result4 = React5(View, obj10);
  } else {
    const items4 = [tmp.heading, ,];
    let wideHeading = tmp4;
    if (tmp4) {
      wideHeading = tmp.wideHeading;
    }
    items4[1] = wideHeading;
    let tmp38 = tmp4;
    if (tmp4) {
      let CARD_HEIGHT = bound;
      if (bound == null) {
        CARD_HEIGHT = CheckpointRecapCard.CARD_HEIGHT;
      }
      const obj12 = { width: null };
      const result = CheckpointRecapCard.CARD_WIDTH * CARD_HEIGHT;
      obj12.width = result / CheckpointRecapCard.CARD_HEIGHT;
      tmp38 = obj12;
    }
    const obj13 = { style: null, children: null };
    items4[2] = tmp38;
    obj13.style = items4;
    const obj14 = { style: tmp.headingLabel, children: null };
    const obj15 = { size: "xs", color };
    const items5 = [React5(FlagIcon.FlagIcon, obj15)];
    const obj16 = { isStepHeading: true, variant: "heading-sm/semibold", children: toLocaleUpperCaseResult };
    items5[1] = React5(CheckpointTextDefault, obj16);
    obj14.children = items5;
    const items6 = [React6(View, obj14)];
    let num5;
    if (tmp4) {
      num5 = 1;
    }
    const obj17 = { lineClamp: num5, adjustsFontSizeToFit: tmp4, children: toLocaleUpperCaseResult1 };
    items6[1] = React5(CheckpointDisplayTextDefault, obj17);
    obj13.children = items6;
    tmp27Result4 = React6(View, obj13);
    const tmp2Result8 = CheckpointDisplayTextDefault;
  }
  const items7 = [tmp27Result4];
  const items8 = [tmp.stats, ,];
  let wideStats = tmp4;
  if (tmp4) {
    wideStats = tmp.wideStats;
  }
  items8[1] = wideStats;
  if (wideStatsExpanded) {
    wideStatsExpanded = tmp.wideStatsExpanded;
  }
  const obj18 = { style: items8, ref, onLayout, children: null };
  items8[2] = wideStatsExpanded;
  const obj19 = { style: items3, children: null };
  const obj20 = { style: wideLeftStat, label: null, statType: "voice", value: null, color: null };
  const intl3 = util.intl;
  obj20.label = intl3.string(_modDef3319.MSrV9z);
  let num6;
  if (voice != null) {
    num6 = voice.totalVoiceMinutes;
  }
  if (num6 == null) {
    num6 = 0;
  }
  obj20.value = Math.round(num6);
  obj20.color = primaryBackgroundColor;
  const items9 = [React5(NumberStat, obj20)];
  const obj21 = { style: wideRightStat, label: null, statType: "messages", value: null, color: null };
  const intl4 = util.intl;
  obj21.label = intl4.string(_modDef3319.hhh11L);
  let num7;
  if (messages != null) {
    num7 = messages.numMessagesSent;
  }
  if (num7 == null) {
    num7 = 0;
  }
  obj21.value = Math.round(num7);
  obj21.color = primaryBackgroundColor;
  items9[1] = React5(NumberStat, obj21);
  obj19.children = items9;
  const items10 = [React6(View, obj19), , ,];
  const obj22 = { style: items3, children: null };
  const obj23 = { style: wideLeftStat, label: null, statType: "topServerDays", value: null, color: null };
  const intl5 = util.intl;
  obj23.label = intl5.string(_modDef3319["f5S+pt"]);
  let num8;
  if (first != null) {
    num8 = first.numDaysInteracted;
  }
  if (num8 == null) {
    num8 = 0;
  }
  obj23.value = Math.round(num8);
  obj23.color = primaryBackgroundColor;
  const items11 = [React5(NumberStat, obj23)];
  const obj24 = { style: wideRightStat, singleLine: tmp4, label: null, name: null, color: null, icon: null };
  const intl6 = util.intl;
  obj24.label = intl6.string(_modDef3287["8XPMJj"]);
  if (null != first) {
    let name = first.guild.name;
  } else {
    const intl7 = util.intl;
    name = intl7.string(_modDef3319.GultYJ);
  }
  obj24.name = name;
  obj24.color = primaryBackgroundColor;
  obj24.icon = tmp27Result;
  items11[1] = React5(ItemStat, obj24);
  obj22.children = items11;
  items10[1] = React6(View, obj22);
  const obj25 = { style: items3, children: null };
  const obj26 = { style: wideLeftStat, label: null, statType: "emoji", value: null, color: null };
  const intl8 = util.intl;
  obj26.label = intl8.string(_modDef3319.xVSlv3);
  let num9;
  if (emojis != null) {
    num9 = emojis.numEmojisSent;
  }
  if (num9 == null) {
    num9 = 0;
  }
  obj26.value = Math.round(num9);
  obj26.color = primaryBackgroundColor;
  const items12 = [React5(NumberStat, obj26)];
  const obj27 = { style: wideRightStat, singleLine: tmp4, label: null, name: null, color: null, icon: null };
  const intl9 = util.intl;
  obj27.label = intl9.string(_modDef3287["3sARW7"]);
  if (null == first1) {
    const intl10 = util.intl;
    let stringResult2 = intl10.string(util.t.PoWNfe);
  } else if (null == first1.id) {
    stringResult2 = UnicodeEmojisDefault.convertSurrogateToName(first1.name);
    const tmp2Result9 = UnicodeEmojisDefault;
  } else {
    const _HermesInternal = HermesInternal;
    stringResult2 = ":" + first1.name + ":";
  }
  obj27.name = stringResult2;
  obj27.color = primaryBackgroundColor;
  let tmp27Result5 = tmp27Result6;
  if (null != first1) {
    let str2 = "";
    if (null == first1.id) {
      str2 = first1.name;
    }
    const obj28 = { name: str2, src: emojiURL, style: null, fastImageStyle: null, textEmojiStyle: null };
    ({ emoji: obj34.style, emoji: obj34.fastImageStyle, textEmoji: obj34.textEmojiStyle } = tmp);
    tmp27Result5 = React5(EmojiDefault, obj28);
    const tmp2Result10 = EmojiDefault;
  }
  obj27.icon = tmp27Result5;
  items12[1] = React5(ItemStat, obj27);
  obj25.children = items12;
  items10[2] = React6(View, obj25);
  const obj29 = { style: items3, children: null };
  const obj30 = { style: wideLeftStat, label: null, statType: "gameDays", value: null, color: null };
  const intl11 = util.intl;
  obj30.label = intl11.string(_modDef3319.y2Y1DD);
  let num10;
  if (games != null) {
    num10 = games.totalDaysPlayed;
  }
  if (num10 == null) {
    num10 = 0;
  }
  obj30.value = Math.round(num10);
  obj30.color = primaryBackgroundColor;
  const items13 = [React5(NumberStat, obj30)];
  const obj31 = { style: wideRightStat, singleLine: tmp4, label: null, name: null, color: null, icon: null };
  const intl12 = util.intl;
  obj31.label = intl12.string(_modDef3287.RbT4Zq);
  if (null != game) {
    let name2 = game.name;
  } else {
    const intl13 = util.intl;
    name2 = intl13.string(util.t.PoWNfe);
  }
  obj31.name = name2;
  obj31.color = primaryBackgroundColor;
  if (null != applicationIconURL) {
    const obj32 = { source: null, style: null };
    const obj33 = { uri: applicationIconURL };
    obj32.source = obj33;
    obj32.style = tmp.itemIcon;
    tmp27Result6 = React5(FastImageDefault, obj32);
  }
  obj31.icon = tmp27Result6;
  items13[1] = React5(ItemStat, obj31);
  obj29.children = items13;
  items10[3] = React6(View, obj29);
  obj18.children = items10;
  items7[1] = React6(View, obj18);
  obj8.children = items7;
  return React6(View, obj8);
}
function NumberStat(arg0) {
  ({ value, color } = arg0);
  ({ label, statType, style } = arg0);
  const tmp = closure_15();
  items = [color];
  const memo = noop.useMemo(() => ({ color }), items);
  const obj2 = { style: null, accessible: true, accessibilityLabel: null, children: null };
  const items1 = [tmp.stat, style];
  obj2.style = items1;
  const result = CheckpointNumberUtils.formatCheckpointStatNumber(value);
  obj2.accessibilityLabel = CheckpointNumberUtils.formatCheckpointStatAccessibilityLabel(statType, value);
  const items2 = [React5(CheckpointTextDefault, { variant: "body-md/medium", style: memo, children: label })];
  items2[1] = React5(View, {
    style: tmp.statNumber,
    children: React5(CheckpointStatNumberDefault, { value: result, color, size: 32 }),
  });
  obj2.children = items2;
  return React6(View, obj2);
}
function ItemStat(arg0) {
  ({ label, name, color } = arg0);
  ({ icon, singleLine, style } = arg0);
  const tmp = closure_15();
  items = [color];
  const memo = noop.useMemo(() => ({ color }), items);
  const obj = { style: null, accessible: true, accessibilityLabel: "" + label + ", " + name, children: null };
  const items1 = [tmp.stat, style];
  obj.style = items1;
  const items2 = [React5(CheckpointTextDefault, { variant: "body-md/medium", style: memo, children: label })];
  const obj2 = { style: tmp.item, children: null };
  const items3 = [React5(View, { style: tmp.itemIcon, children: icon })];
  const obj4 = { variant: "body-md/semibold", style: null, lineClamp: null, children: null };
  const items4 = [tmp.itemName, memo];
  obj4.style = items4;
  let num;
  if (singleLine) {
    num = 1;
  }
  obj4.lineClamp = num;
  obj4.children = name;
  items3[1] = React5(CheckpointTextDefault, obj4);
  obj2.children = items3;
  items2[1] = React6(View, obj2);
  obj.children = items2;
  return React6(View, obj);
}
const View = fn(17).View;
const CheckpointConstants = fn(6375);
({ CHECKPOINT_PRIMARY: metroImportDefault, CHECKPOINT_CONTROL_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_48 = nativeDefault.space.PX_48;
const PX_32 = nativeDefault.space.PX_32;
let sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const PX_24 = nativeDefault.space.PX_24;
let closure_14 = CHECKPOINT_NAV_HEIGHT + nativeDefault.space.PX_24;
const createStyles = fn(5310);
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
  wideContainer: null,
  wideCardClearControls: null,
  wideHeading: null,
  wideStats: null,
  wideStatsExpanded: null,
  wideRow: null,
  wideLeftStat: null,
  wideRightStat: null,
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
obj2.wideContainer = {
  flexGrow: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  columnGap: nativeDefault.space.PX_40,
  paddingRight: 116,
};
let obj5 = {
  flexGrow: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  columnGap: nativeDefault.space.PX_40,
  paddingRight: 116,
};
obj2.wideCardClearControls = { paddingBottom: nativeDefault.space.PX_48 };
obj2.wideHeading = { alignSelf: "center" };
let obj6 = { paddingBottom: nativeDefault.space.PX_48 };
obj2.wideStats = { alignSelf: "center", width: 280 + PX_24, gap: nativeDefault.space.PX_16 };
obj2.wideStatsExpanded = { width: 140 + PX_24 + 240 };
obj2.wideRow = { columnGap: PX_24 };
obj2.wideLeftStat = { flex: 140 };
obj2.wideRightStat = { flex: 240 };
let obj7 = { alignSelf: "center", width: 280 + PX_24, gap: nativeDefault.space.PX_16 };
let obj8 = { width: 140 + PX_24 + 240 };
obj2.stats = { alignSelf: "stretch", gap: nativeDefault.space.PX_24 };
obj2.noDataDescription = { width: 240 };
obj2.noDataDescriptionText = { textAlign: "center" };
const obj9 = { alignSelf: "stretch", gap: nativeDefault.space.PX_24 };
obj2.row = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
let obj10 = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
obj2.stat = { flex: 1, gap: nativeDefault.space.PX_8 };
obj2.statNumber = { height: 24, justifyContent: "center" };
let obj11 = { flex: 1, gap: nativeDefault.space.PX_8 };
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
let obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.guildAcronym = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.emoji = { width: 28, height: 28 };
const PlatformUtils = fn(1360);
let num;
if (PlatformUtils.isIOS()) {
  num = 30;
}
obj2.textEmoji = { fontSize: 24, lineHeight: num, textAlign: "center" };
let closure_15 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx",
);

export default function CheckpointSummaryStatsScreen() {
  const tmp = useIsCheckpointWideDefault();
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => stats.stats);
  let tmp5 = tmp;
  if (tmp) {
    tmp5 = null !== stateFromStores;
  }
  const obj2 = { centered: tmp5, children: null };
  if (null === stateFromStores) {
    let tmp3Result = React5(GlobalSummaryStats, {});
  } else {
    const obj3 = { stats: stateFromStores };
    tmp3Result = React5(UserSummaryStats, obj3);
  }
  obj2.children = tmp3Result;
  return React5(CheckpointScreenDefault, obj2);
}
