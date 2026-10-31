// === Module 13647: CheckpointEmojiStatsScreen ===

// Module 13647 (CheckpointEmojiStatsScreen)
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import CheckpointStore from "CheckpointStore" /* 13421 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const CheckpointConstants = fn(6066);
({ CHECKPOINT_PRIMARY: closure_8, CHECKPOINT_DARK_CYAN } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = { name: "\u{1F622}", animated: false };
const createStyles = fn(5014);
let obj2 = { container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 }, emojiCubeContainer: { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" }, copy: { flexShrink: 1 }, title: null, titleText: null, titleSpacing: null, number: null, emojis: null, emojiChip: null, emoji: null, customEmoji: null, textEmoji: null, rankText: null };
let obj3 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj2.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.titleText = { flexShrink: 1 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.titleSpacing = { marginBottom: nativeDefault.space.PX_16 };
let obj5 = { marginBottom: nativeDefault.space.PX_16 };
obj2.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let obj6 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj2.emojis = { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", width: "100%", marginTop: nativeDefault.space.PX_16 };
let obj7 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", width: "100%", marginTop: nativeDefault.space.PX_16 };
obj2.emojiChip = { gap: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_4, paddingRight: nativeDefault.space.PX_8, borderWidth: 1, borderColor: CHECKPOINT_DARK_CYAN, backgroundColor: nativeDefault.colors.BLACK };
obj2.emoji = { width: 20, height: 20 };
obj2.customEmoji = { width: 20, height: 20 };
let PlatformUtils = fn(1375);
let num = 16;
if (PlatformUtils.isIOS()) {
  num = 20;
}
let obj10 = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
PlatformUtils = fn(1375);
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 24;
}
obj10.lineHeight = num2;
obj10.color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj2.textEmoji = obj10;
obj2.rankText = { fontSize: 14, lineHeight: 18 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointEmojiStatsScreen.tsx");

export default function CheckpointEmojiStatsScreen() {
  const tmp = closure_12();
  _require = tmp;
  let items = [AccessibilityStore];
  importDefault = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = require("initialize");
  const items1 = [CheckpointStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => {
    const stats = CheckpointStore.stats;
    let emojis;
    if (stats != null) {
      emojis = stats.emojis;
    }
    return emojis;
  });
  let obj2 = require("initialize");
  const items2 = [CheckpointStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    const globalStats = CheckpointStore.globalStats;
    let emojis;
    if (globalStats != null) {
      emojis = globalStats.emojis;
    }
    return emojis;
  });
  let obj3 = require("initialize");
  const items3 = [CheckpointStore];
  let stateFromStores2 = require("initialize").useStateFromStores(items3, () => closure_0(first[11]).hasCheckpointEmojis(CheckpointStore.stats));
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.numEmojisSent;
  }
  if (num == null) {
    num = 0;
  }
  const rounded = Math.round(num);
  let obj4 = require("initialize");
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.numEmojisSentPercentile;
  }
  const checkpointTopPercent = require("CheckpointStatsUtils").getCheckpointTopPercent(prop);
  let tmp10 = !stateFromStores2;
  if (!stateFromStores2) {
    tmp10 = null != stateFromStores1;
  }
  let tmp11 = !stateFromStores2;
  if (!stateFromStores2) {
    tmp11 = !tmp10;
  }
  if (tmp10) {
    let emojis = stateFromStores1.emojis;
  } else if (stateFromStores != null) {
    emojis = stateFromStores.emojis;
  }
  if (emojis == null) {
    emojis = [];
  }
  [emoji, _slicedToArray] = noop.useState(tmp11 ? closure_11 : emojis[0]);
  const tmp2Result = require("CheckpointStatsUtils");
  noop = require("useCheckpointSound")(require("module_13441"));
  let intl = tmp2(tmp3[14]).intl;
  const string = intl.string;
  if (tmp11) {
    let stringResult = string(tmp14(tmp3[15]).vnG9Sx);
  } else {
    stringResult = string(tmp14(tmp3[16]).ZTDCIv);
  }
  let formatToPlainStringResult;
  if (stateFromStores2) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp2(tmp3[14]).intl;
      let obj5 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(tmp14(tmp3[16]).I1qKWG, obj5);
    }
  }
  if (tmp11) {
    let EmojiSlightlySmilingFaceIcon = tmp2(tmp3[17]).EmojiFrowningFaceIcon;
  } else {
    EmojiSlightlySmilingFaceIcon = tmp2(tmp3[18]).EmojiSlightlySmilingFaceIcon;
  }
  const obj6 = { style: tmp.container, children: null };
  const obj7 = { style: tmp.emojiCubeContainer, children: null };
  const tmp15 = require("useCheckpointSound");
  obj7.children = closure_9(require("EmojiCube"), { emoji });
  const items4 = [closure_9(View, obj7), ];
  const obj8 = { style: tmp.copy, children: null };
  const items5 = [tmp.title, ];
  let titleSpacing;
  if (tmp11) {
    titleSpacing = tmp.titleSpacing;
  }
  const obj9 = { style: items5, children: null };
  items5[1] = titleSpacing;
  const items6 = [closure_9(EmojiSlightlySmilingFaceIcon, { size: "xs", color }), ];
  const obj11 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const obj10 = { size: "xs", color };
  const tmp14Result = require("CheckpointScreen");
  obj11.children = stringResult.toLocaleUpperCase();
  items6[1] = closure_9(require("CheckpointText"), obj11);
  obj9.children = items6;
  const items7 = [closure_10(View, obj9), , , , ];
  let tmp17Result = tmp10;
  if (tmp10) {
    const obj12 = { value: stateFromStores1.numEmojisSent };
    tmp17Result = closure_9(tmp14(tmp3[22]), obj12);
  }
  items7[1] = tmp17Result;
  if (stateFromStores2) {
    const obj13 = { accessible: true, accessibilityLabel: null, style: null, children: null };
    const _HermesInternal = HermesInternal;
    obj13.accessibilityLabel = "" + rounded + " " + stringResult.toLocaleLowerCase();
    obj13.style = tmp.number;
    const obj14 = { end: rounded };
    obj13.children = closure_9(tmp14(tmp3[23]), obj14);
    stateFromStores2 = closure_9(View, obj13);
  }
  items7[2] = stateFromStores2;
  const obj15 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const tmp14Result3 = require("CheckpointText");
  if (tmp10) {
    const intl6 = tmp2(tmp3[14]).intl;
    const obj16 = { numEmojis: tmp2(tmp3[11]).formatCheckpointCompactNumber(stateFromStores1.numEmojisSent) };
    let formatToPlainStringResult1 = intl6.formatToPlainString(tmp14(tmp3[16])["660/Rr"], obj16);
    const tmp2Result2 = tmp2(tmp3[11]);
  } else if (tmp11) {
    const intl5 = tmp2(tmp3[14]).intl;
    formatToPlainStringResult1 = intl5.string(tmp14(tmp3[15]).BHbwK1);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp2(tmp3[14]).intl;
    const obj17 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          return closure_1_9(closure_1(first[24]), { children }, arg1);
        }
    };
    formatToPlainStringResult1 = intl4.format(tmp14(tmp3[16]).o7vDrk, obj17);
  } else {
    const intl3 = tmp2(tmp3[14]).intl;
    const obj18 = { numEmojis: rounded };
    formatToPlainStringResult1 = intl3.format(tmp14(tmp3[16]).NFptic, obj18);
  }
  obj15.children = formatToPlainStringResult1;
  items7[3] = closure_9(require("CheckpointText"), obj15);
  let tmp17Result2 = !tmp11;
  if (!tmp11) {
    const obj19 = {
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
            emojiURL = closure_1(first[25]).getEmojiURL(obj2);
            const obj = closure_1(first[25]);
          }
          const tmp6 = closure_1(first[26])(first, emojiName);
          const obj3 = { size: "sm", style: closure_0.emojiChip, shadowColor: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, children: null };
          let str = "transparent";
          if (!tmp6) {
            str = color;
          }
          obj3.shadowColor = str;
          const intl = closure_0(first[14]).intl;
          obj3.accessibilityLabel = intl.formatToPlainString(closure_1(first[16])["S5+pRg"], { emojiName: emojiName.name, rank: index + 1 });
          obj3.accessibilityState = { selected: tmp6 };
          obj3.onPress = function onPress() {
            closure_4();
            closure_3(closure_0);
          };
          const obj5 = { style: closure_0.emoji, fastImageStyle: closure_0.customEmoji, textEmojiStyle: closure_0.textEmoji, name: null, src: null };
          let str2 = "";
          const obj4 = { emojiName: emojiName.name, rank: index + 1 };
          const tmp8 = closure_1(first[27]);
          if (null == emojiName.id) {
            str2 = emojiName.name;
          }
          obj5.name = str2;
          obj5.src = emojiURL;
          const items = [closure_1_9(closure_1(first[28]), obj5), closure_1_9(closure_1(first[21]), { variant: "experimental/mono-md/bold", style: closure_0.rankText, children: index + 1 })];
          obj3.children = items;
          let name = emojiName.id;
          if (name == null) {
            name = emojiName.name;
          }
          return closure_1_10(tmp8, obj3, name);
        })
    };
    tmp17Result2 = closure_9(View, obj19);
  }
  const obj20 = { children: null };
  items7[4] = tmp17Result2;
  obj8.children = items7;
  items4[1] = closure_10(View, obj8);
  obj6.children = items4;
  obj20.children = closure_10(View, obj6);
  return closure_9(tmp14Result, obj20);
};