// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointEmojiStatsScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import _modDef1343 from "../../../../../../../_runtime/metro/01343__.js";
import AvatarUtilsDefault from "../../../../../../utils/AvatarUtils.tsx";
import _modDef3341 from "../../../../Checkpoint2026.messages.js";
import EmojiDefault from "../../../../../emojis/native/Emoji.tsx";
import CheckpointTextDefault from "../../CheckpointText.tsx";
import useCheckpointPressSoundDefault from "../../../useCheckpointPressSound.tsx";
import CheckpointPressableDefault from "../../CheckpointPressable.tsx";
import _modDef12642 from "../../../../../../../discord_assets/assets/checkpoint/2026/sfx/selected.mp3.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../../a11y/AccessibilityStore.tsx";
import CheckpointStore from "../../../../CheckpointStore.tsx";

const require = globalThis.__r;

require = fn;
function EmojiChip(emoji) {
  emoji = emoji.emoji;
  ({ rank, isActive, isReducedMotion, onSelect: importDefault } = emoji);
  const tmp = closure_12();
  const obj = {
    source: _modDef12642,
    onPress() {
      return importDefault(emoji);
    },
  };
  let emojiURL;
  ({ onPressIn, onPressWithSound } = useCheckpointPressSoundDefault(obj));
  if (null != emoji.id) {
    const obj2 = { id: emoji.id, animated: null, size: 48 };
    let tmp7 = !isReducedMotion;
    if (!isReducedMotion) {
      tmp7 = true === emoji.animated;
    }
    obj2.animated = tmp7;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
    const tmp2Result = AvatarUtilsDefault;
  }
  const obj3 = {
    size: "sm",
    style: tmp.emojiChip,
    shadowColor: null,
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityState: null,
    onPressIn: null,
    onPress: null,
    children: null,
  };
  let str = "transparent";
  const tmp4Result = useCheckpointPressSoundDefault(obj);
  if (!isActive) {
    str = color;
  }
  obj3.shadowColor = str;
  const intl = util.intl;
  obj3.accessibilityLabel = intl.formatToPlainString(_modDef3341["S5+pRg"], { emojiName: emoji.name, rank });
  obj3.accessibilityState = { selected: isActive };
  obj3.onPressIn = onPressIn;
  obj3.onPress = onPressWithSound;
  const obj5 = {
    style: tmp.emoji,
    fastImageStyle: tmp.customEmoji,
    textEmojiStyle: tmp.textEmoji,
    name: null,
    src: null,
  };
  let str2 = "";
  const obj4 = { emojiName: emoji.name, rank };
  const tmp2Result3 = CheckpointPressableDefault;
  if (null == emoji.id) {
    str2 = emoji.name;
  }
  obj5.name = str2;
  obj5.src = emojiURL;
  items = [
    React6(EmojiDefault, obj5),
    React6(CheckpointTextDefault, { variant: "mono-md/bold", style: tmp.rankText, children: rank }),
  ];
  obj3.children = items;
  return refs(tmp2Result3, obj3);
}
const View = fn(17).View;
const CheckpointConstants = fn(5850);
({ CHECKPOINT_PRIMARY: closure_8, CHECKPOINT_DARK_CYAN } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = { name: "\u{1F622}", animated: false };
const createStyles = fn(4794);
let obj2 = {
  container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 },
  emojiCubeContainer: { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" },
  copy: { flexShrink: 1 },
  title: null,
  titleText: null,
  titleSpacing: null,
  number: null,
  emojis: null,
  emojiChip: null,
  emoji: null,
  customEmoji: null,
  textEmoji: null,
  rankText: null,
  wideContainer: null,
  wideCubeContainer: null,
  wideCopy: null,
};
let obj3 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj2.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.titleText = { flexShrink: 1 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.titleSpacing = { marginBottom: nativeDefault.space.PX_16 };
let obj5 = { marginBottom: nativeDefault.space.PX_16 };
obj2.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let obj6 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj2.emojis = {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
  marginTop: nativeDefault.space.PX_16,
};
let obj7 = {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
  marginTop: nativeDefault.space.PX_16,
};
obj2.emojiChip = {
  gap: nativeDefault.space.PX_8,
  paddingLeft: nativeDefault.space.PX_4,
  paddingRight: nativeDefault.space.PX_8,
  borderWidth: 1,
  borderColor: CHECKPOINT_DARK_CYAN,
  backgroundColor: nativeDefault.colors.BLACK,
};
obj2.emoji = { width: 20, height: 20 };
obj2.customEmoji = { width: 20, height: 20 };
let PlatformUtils = fn(1378);
let num = 16;
if (PlatformUtils.isIOS()) {
  num = 14;
}
let obj10 = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
PlatformUtils = fn(1378);
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 20;
}
obj10.lineHeight = num2;
obj10.color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj2.textEmoji = obj10;
obj2.rankText = { fontSize: 14, lineHeight: 18 };
let obj8 = {
  gap: nativeDefault.space.PX_8,
  paddingLeft: nativeDefault.space.PX_4,
  paddingRight: nativeDefault.space.PX_8,
  borderWidth: 1,
  borderColor: CHECKPOINT_DARK_CYAN,
  backgroundColor: nativeDefault.colors.BLACK,
};
obj2.wideContainer = {
  flexGrow: 1,
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  width: "100%",
  maxWidth: fn(12607).CHECKPOINT_WIDE_MAX_WIDTH,
};
let obj12 = {
  flexGrow: 1,
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  width: "100%",
  maxWidth: fn(12607).CHECKPOINT_WIDE_MAX_WIDTH,
};
obj2.wideCubeContainer = {
  width: "50%",
  alignSelf: "stretch",
  alignItems: "center",
  justifyContent: "center",
  paddingRight: nativeDefault.space.PX_32,
};
let obj13 = {
  width: "50%",
  alignSelf: "stretch",
  alignItems: "center",
  justifyContent: "center",
  paddingRight: nativeDefault.space.PX_32,
};
obj2.wideCopy = { width: "50%", paddingLeft: nativeDefault.space.PX_32 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointEmojiStatsScreen.tsx",
);

export default function CheckpointEmojiStatsScreen() {
  const tmp = closure_12();
  const tmp4 = emoji(12607)();
  const checkpointScreenContentHeight = require("CheckpointScreen").useCheckpointScreenContentHeight(true);
  const result =
    Math.min(
      Math.min(emoji(1494)({ ignoreKeyboard: true }).width, require("useIsCheckpointWide").CHECKPOINT_WIDE_MAX_WIDTH) /
        2,
      checkpointScreenContentHeight,
    ) / 392;
  const obj = require("CheckpointScreen");
  items = [AccessibilityStore];
  _require = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = require("initialize");
  const items1 = [CheckpointStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => {
    const stats = CheckpointStore.stats;
    let emojis;
    if (stats != null) {
      emojis = stats.emojis;
    }
    return emojis;
  });
  const obj3 = require("initialize");
  const items2 = [CheckpointStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    const globalStats = CheckpointStore.globalStats;
    let emojis;
    if (globalStats != null) {
      emojis = globalStats.emojis;
    }
    return emojis;
  });
  const obj4 = require("initialize");
  const items3 = [CheckpointStore];
  let stateFromStores2 = require("initialize").useStateFromStores(items3, () =>
    isReducedMotion(onSelect[22]).hasCheckpointEmojis(CheckpointStore.stats),
  );
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.numEmojisSent;
  }
  if (num == null) {
    num = 0;
  }
  const rounded = Math.round(num);
  const obj5 = require("initialize");
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.numEmojisSentPercentile;
  }
  const checkpointTopPercent = require("CheckpointStatsUtils").getCheckpointTopPercent(prop);
  let tmp14 = !stateFromStores2;
  if (!stateFromStores2) {
    tmp14 = null != stateFromStores1;
  }
  let tmp15 = !stateFromStores2;
  if (!stateFromStores2) {
    tmp15 = !tmp14;
  }
  if (tmp14) {
    let emojis = stateFromStores1.emojis;
  } else if (stateFromStores != null) {
    emojis = stateFromStores.emojis;
  }
  if (emojis == null) {
    emojis = [];
  }
  [emoji, dependencyMap] = noop.useState(tmp15 ? closure_11 : emojis[0]);
  const intl = tmp5(1112).intl;
  const string = intl.string;
  if (tmp15) {
    let stringResult = string(tmp2(3309).vnG9Sx);
  } else {
    stringResult = string(tmp2(3341).ZTDCIv);
  }
  let formatToPlainStringResult;
  if (stateFromStores2) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp5(1112).intl;
      const obj6 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(3341).I1qKWG, obj6);
    }
  }
  if (tmp15) {
    let EmojiSlightlySmilingFaceIcon = tmp5(12643).EmojiFrowningFaceIcon;
  } else {
    EmojiSlightlySmilingFaceIcon = tmp5(12398).EmojiSlightlySmilingFaceIcon;
  }
  const obj7 = { centered: tmp4, children: null };
  const obj8 = { style: tmp4 ? tmp.wideContainer : tmp.container, children: null };
  const obj9 = { style: tmp4 ? tmp.wideCubeContainer : tmp.emojiCubeContainer, children: null };
  const tmp5Result = require("CheckpointStatsUtils");
  const obj10 = { emoji, scale: null };
  let tmp24;
  const tmp2Result = emoji(12387);
  if (tmp4) {
    tmp24 = result;
  }
  obj10.scale = tmp24;
  obj9.children = closure_9(emoji(12645), obj10);
  const items4 = [closure_9(View, obj9)];
  const obj11 = { style: tmp4 ? tmp.wideCopy : tmp.copy, children: null };
  const items5 = [tmp.title];
  let titleSpacing;
  if (tmp15) {
    titleSpacing = tmp.titleSpacing;
  }
  const obj12 = { style: items5, children: null };
  items5[1] = titleSpacing;
  const items6 = [closure_9(EmojiSlightlySmilingFaceIcon, { size: "xs", color })];
  const obj14 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: null };
  const obj13 = { size: "xs", color };
  const tmp2Result4 = emoji(12645);
  obj14.children = stringResult.toLocaleUpperCase();
  items6[1] = closure_9(emoji(12388), obj14);
  obj12.children = items6;
  const items7 = [closure_10(View, obj12), , , ,];
  let tmp19Result = tmp14;
  if (tmp14) {
    const obj15 = { value: stateFromStores1.numEmojisSent };
    tmp19Result = closure_9(tmp2(12627), obj15);
  }
  items7[1] = tmp19Result;
  if (stateFromStores2) {
    const obj16 = {
      accessible: true,
      accessibilityLabel: tmp5(12629).formatCheckpointStatAccessibilityLabel("emoji", rounded),
      style: tmp.number,
      children: null,
    };
    const obj17 = { end: rounded };
    obj16.children = closure_9(tmp2(12628), obj17);
    stateFromStores2 = closure_9(View, obj16);
    const tmp5Result3 = tmp5(12629);
  }
  items7[2] = stateFromStores2;
  const obj18 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const tmp2Result5 = emoji(12388);
  if (tmp14) {
    const intl6 = tmp5(1112).intl;
    const obj19 = { numEmojis: tmp5(6220).formatCheckpointCompactNumber(stateFromStores1.numEmojisSent) };
    let formatToPlainStringResult1 = intl6.formatToPlainString(tmp2(3341)["660/Rr"], obj19);
    const tmp5Result4 = tmp5(6220);
  } else if (tmp15) {
    const intl5 = tmp5(1112).intl;
    formatToPlainStringResult1 = intl5.string(tmp2(3309).BHbwK1);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp5(1112).intl;
    const obj20 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
        return closure_1_9(first(onSelect[30]), { children }, arg1);
      },
    };
    formatToPlainStringResult1 = intl4.format(tmp2(3341).o7vDrk, obj20);
  } else {
    const intl3 = tmp5(1112).intl;
    const obj21 = { numEmojis: rounded };
    formatToPlainStringResult1 = intl3.format(tmp2(3341).NFptic, obj21);
  }
  obj18.children = formatToPlainStringResult1;
  items7[3] = closure_9(emoji(12388), obj18);
  let tmp19Result2 = !tmp15;
  if (!tmp15) {
    const obj22 = {
      style: tmp.emojis,
      children: emojis.map((emoji, index) => {
        let name = emoji.id;
        if (name == null) {
          name = emoji.name;
        }
        return React6(
          EmojiChip,
          { emoji, rank: index + 1, isActive: _modDef1343(first, emoji), isReducedMotion, onSelect },
          name,
        );
      }),
    };
    tmp19Result2 = closure_9(View, obj22);
  }
  items7[4] = tmp19Result2;
  obj11.children = items7;
  items4[1] = closure_10(View, obj11);
  obj8.children = items4;
  obj7.children = closure_10(View, obj8);
  return closure_9(tmp2Result, obj7);
}
