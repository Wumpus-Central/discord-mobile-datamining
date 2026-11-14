// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointEmojiStatsScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../../a11y/AccessibilityStore.tsx";
import CheckpointStore from "../../../../CheckpointStore.tsx";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const CheckpointConstants = fn(6377);
({ CHECKPOINT_PRIMARY: closure_8, CHECKPOINT_DARK_CYAN } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = { name: "\u{1F622}", animated: false };
const createStyles = fn(5306);
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
let PlatformUtils = fn(1380);
let num = 16;
if (PlatformUtils.isIOS()) {
  num = 14;
}
let obj10 = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
PlatformUtils = fn(1380);
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
  maxWidth: fn(14485).CHECKPOINT_WIDE_MAX_WIDTH,
};
let obj12 = {
  flexGrow: 1,
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  width: "100%",
  maxWidth: fn(14485).CHECKPOINT_WIDE_MAX_WIDTH,
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
  _require = tmp;
  const tmp4 = require("useIsCheckpointWide")();
  const checkpointScreenContentHeight = require("CheckpointScreen").useCheckpointScreenContentHeight(true);
  const result =
    Math.min(
      Math.min(
        require("useWindowDimensions")({ ignoreKeyboard: true }).width,
        require("useIsCheckpointWide").CHECKPOINT_WIDE_MAX_WIDTH,
      ) / 2,
      checkpointScreenContentHeight,
    ) / 392;
  let obj = require("CheckpointScreen");
  items = [AccessibilityStore];
  importDefault = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = require("initialize");
  const items1 = [CheckpointStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => {
    const stats = CheckpointStore.stats;
    let emojis;
    if (stats != null) {
      emojis = stats.emojis;
    }
    return emojis;
  });
  let obj3 = require("initialize");
  const items2 = [CheckpointStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    const globalStats = CheckpointStore.globalStats;
    let emojis;
    if (globalStats != null) {
      emojis = globalStats.emojis;
    }
    return emojis;
  });
  let obj4 = require("initialize");
  const items3 = [CheckpointStore];
  let stateFromStores2 = require("initialize").useStateFromStores(items3, () =>
    closure_0(first[14]).hasCheckpointEmojis(CheckpointStore.stats),
  );
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.numEmojisSent;
  }
  if (num == null) {
    num = 0;
  }
  const rounded = Math.round(num);
  let obj5 = require("initialize");
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
  [emoji, _slicedToArray] = noop.useState(tmp15 ? closure_11 : emojis[0]);
  const tmp5Result = require("CheckpointStatsUtils");
  noop = require("useCheckpointSound")(tmp2(tmp3[16]));
  let intl = tmp5(tmp3[17]).intl;
  const string = intl.string;
  if (tmp15) {
    let stringResult = string(tmp2(tmp3[18]).vnG9Sx);
  } else {
    stringResult = string(tmp2(tmp3[19]).ZTDCIv);
  }
  let formatToPlainStringResult;
  if (stateFromStores2) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp5(tmp3[17]).intl;
      const obj6 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[19]).I1qKWG, obj6);
    }
  }
  if (tmp15) {
    let EmojiSlightlySmilingFaceIcon = tmp5(tmp3[20]).EmojiFrowningFaceIcon;
  } else {
    EmojiSlightlySmilingFaceIcon = tmp5(tmp3[21]).EmojiSlightlySmilingFaceIcon;
  }
  const obj7 = { centered: tmp4, children: null };
  const obj8 = { style: tmp4 ? tmp.wideContainer : tmp.container, children: null };
  const obj9 = { style: tmp4 ? tmp.wideCubeContainer : tmp.emojiCubeContainer, children: null };
  const tmp2Result = require("useCheckpointSound");
  const obj10 = { emoji, scale: null };
  let tmp25;
  const tmp2Result5 = require("CheckpointScreen");
  if (tmp4) {
    tmp25 = result;
  }
  obj10.scale = tmp25;
  obj9.children = closure_9(require("EmojiCube"), obj10);
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
  const tmp2Result6 = require("EmojiCube");
  obj14.children = stringResult.toLocaleUpperCase();
  items6[1] = closure_9(require("CheckpointText"), obj14);
  obj12.children = items6;
  const items7 = [closure_10(View, obj12), , , ,];
  let tmp20Result = tmp14;
  if (tmp14) {
    const obj15 = { value: stateFromStores1.numEmojisSent };
    tmp20Result = closure_9(tmp2(tmp3[24]), obj15);
  }
  items7[1] = tmp20Result;
  if (stateFromStores2) {
    const obj16 = {
      accessible: true,
      accessibilityLabel: tmp5(tmp3[25]).formatCheckpointStatAccessibilityLabel("emoji", rounded),
      style: tmp.number,
      children: null,
    };
    const obj17 = { end: rounded };
    obj16.children = closure_9(tmp2(tmp3[26]), obj17);
    stateFromStores2 = closure_9(View, obj16);
    const tmp5Result3 = tmp5(tmp3[25]);
  }
  items7[2] = stateFromStores2;
  const obj18 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const tmp2Result7 = require("CheckpointText");
  if (tmp14) {
    const intl6 = tmp5(tmp3[17]).intl;
    const obj19 = { numEmojis: tmp5(tmp3[14]).formatCheckpointCompactNumber(stateFromStores1.numEmojisSent) };
    let formatToPlainStringResult1 = intl6.formatToPlainString(tmp2(tmp3[19])["660/Rr"], obj19);
    const tmp5Result4 = tmp5(tmp3[14]);
  } else if (tmp15) {
    const intl5 = tmp5(tmp3[17]).intl;
    formatToPlainStringResult1 = intl5.string(tmp2(tmp3[18]).BHbwK1);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp5(tmp3[17]).intl;
    const obj20 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
        return closure_1_9(closure_1(first[27]), { children }, arg1);
      },
    };
    formatToPlainStringResult1 = intl4.format(tmp2(tmp3[19]).o7vDrk, obj20);
  } else {
    const intl3 = tmp5(tmp3[17]).intl;
    const obj21 = { numEmojis: rounded };
    formatToPlainStringResult1 = intl3.format(tmp2(tmp3[19]).NFptic, obj21);
  }
  obj18.children = formatToPlainStringResult1;
  items7[3] = closure_9(require("CheckpointText"), obj18);
  let tmp20Result2 = !tmp15;
  if (!tmp15) {
    const obj22 = {
      style: tmp.emojis,
      children: emojis.map((emojiName, index) => {
        closure_0 = emojiName;
        let emojiURL;
        if (null != emojiName.id) {
          const obj2 = { id: emojiName.id, animated: null, size: 48 };
          let tmp5 = !closure_1;
          if (!closure_1) {
            tmp5 = true === emojiName.animated;
          }
          obj2.animated = tmp5;
          emojiURL = closure_1(first[28]).getEmojiURL(obj2);
          const obj = closure_1(first[28]);
        }
        const tmp6 = closure_1(first[29])(first, emojiName);
        const obj3 = {
          size: "sm",
          style: closure_0.emojiChip,
          shadowColor: null,
          accessibilityRole: "button",
          accessibilityLabel: null,
          accessibilityState: null,
          onPress: null,
          children: null,
        };
        let str = "transparent";
        if (!tmp6) {
          str = color;
        }
        obj3.shadowColor = str;
        const intl = closure_0(first[17]).intl;
        obj3.accessibilityLabel = intl.formatToPlainString(closure_1(first[19])["S5+pRg"], {
          emojiName: emojiName.name,
          rank: index + 1,
        });
        obj3.accessibilityState = { selected: tmp6 };
        obj3.onPress = function onPress() {
          closure_4();
          closure_3(closure_0);
        };
        const obj5 = {
          style: closure_0.emoji,
          fastImageStyle: closure_0.customEmoji,
          textEmojiStyle: closure_0.textEmoji,
          name: null,
          src: null,
        };
        let str2 = "";
        const obj4 = { emojiName: emojiName.name, rank: index + 1 };
        const tmp8 = closure_1(first[30]);
        if (null == emojiName.id) {
          str2 = emojiName.name;
        }
        obj5.name = str2;
        obj5.src = emojiURL;
        items = [
          closure_1_9(closure_1(first[31]), obj5),
          closure_1_9(closure_1(first[23]), {
            variant: "mono-md/bold",
            style: closure_0.rankText,
            children: index + 1,
          }),
        ];
        obj3.children = items;
        let name = emojiName.id;
        if (name == null) {
          name = emojiName.name;
        }
        return closure_1_10(tmp8, obj3, name);
      }),
    };
    tmp20Result2 = closure_9(View, obj22);
  }
  items7[4] = tmp20Result2;
  obj11.children = items7;
  items4[1] = closure_10(View, obj11);
  obj8.children = items4;
  obj7.children = closure_10(View, obj8);
  return closure_9(tmp2Result5, obj7);
}
