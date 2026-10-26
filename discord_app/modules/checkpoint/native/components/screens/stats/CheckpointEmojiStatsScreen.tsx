// === Module 12998: CheckpointEmojiStatsScreen ===

// Module 12998 (CheckpointEmojiStatsScreen)
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import CheckpointStore from "CheckpointStore" /* 12956 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const CheckpointConstants = fn(6015);
({ CHECKPOINT_PRIMARY: closure_8, CHECKPOINT_DARK_CYAN } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = { name: "\u{1F622}", animated: false };
const createStyles = fn(4971);
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
let PlatformUtils = fn(1384);
let num = 16;
if (PlatformUtils.isIOS()) {
  num = 20;
}
let obj10 = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
PlatformUtils = fn(1384);
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 24;
}
obj10.lineHeight = num2;
obj10.color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj2.textEmoji = obj10;
obj2.rankText = { fontSize: 14, lineHeight: 18 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj8 = { gap: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_4, paddingRight: nativeDefault.space.PX_8, borderWidth: 1, borderColor: CHECKPOINT_DARK_CYAN, backgroundColor: nativeDefault.colors.BLACK };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointEmojiStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointEmojiStatsScreen() {
  const cResult = require("c").c(41);
  const tmp4 = closure_12();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function j() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CheckpointStore];
    const fn2 = function x() {
      const stats = CheckpointStore.stats;
      let emojis;
      if (stats != null) {
        emojis = stats.emojis;
      }
      return emojis;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [CheckpointStore];
    const fn3 = function _() {
      const globalStats = CheckpointStore.globalStats;
      let emojis;
      if (globalStats != null) {
        emojis = globalStats.emojis;
      }
      return emojis;
    };
    cResult[4] = items2;
    cResult[5] = fn3;
    let tmp14 = fn3;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const tmpResult4 = require("initialize");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp13, tmp14);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [CheckpointStore];
    class F {
      constructor() {
        obj = closure_0(closure_2[13]);
        return obj.hasCheckpointEmojis(closure_1_7.stats);
      }
    }
    cResult[6] = items3;
    cResult[7] = F;
    let tmp18 = F;
    let tmp17 = items3;
  } else {
    tmp17 = cResult[6];
    tmp18 = cResult[7];
  }
  const tmpResult5 = require("initialize");
  const stateFromStores3 = require("initialize").useStateFromStores(tmp17, tmp18);
  let num9;
  if (stateFromStores1 != null) {
    num9 = stateFromStores1.numEmojisSent;
  }
  if (num9 == null) {
    num9 = 0;
  }
  const rounded = Math.round(num9);
  let tmp22 = !stateFromStores3;
  if (!stateFromStores3) {
    tmp22 = null != stateFromStores2;
  }
  let tmp23 = !stateFromStores3;
  if (!stateFromStores3) {
    tmp23 = !tmp22;
  }
  let emojis;
  if (stateFromStores1 != null) {
    emojis = stateFromStores1.emojis;
  }
  if (cResult[8] === emojis) {
    if (cResult[9] === stateFromStores2) {
      class F {
        constructor() {
          obj = closure_0(closure_2[13]);
          return obj.hasCheckpointEmojis(closure_1_7.stats);
        }
      }
      emoji = tmp28[0];
      closure_3 = tmp28[1];
      const tmp31 = stateFromStores(tmp2[14]);
      closure_4 = stateFromStores(tmp2[14])(stateFromStores(tmp2[15]));
      let intl = tmp(tmp2[16]).intl;
      const string = intl.string;
      if (tmp23) {
        string(tmp30(tmp2[17]).vnG9Sx);
      } else {
        string(tmp30(tmp2[18]).ZTDCIv);
      }
      if (tmp23) {
        let EmojiSlightlySmilingFaceIcon = tmp(tmp2[19]).EmojiFrowningFaceIcon;
      } else {
        EmojiSlightlySmilingFaceIcon = tmp(tmp2[20]).EmojiSlightlySmilingFaceIcon;
      }
      if (cResult[12] !== emoji) {
        { emoji: null }.emoji = emoji;
        class F {
          constructor() {
            obj = closure_0(closure_2[13]);
            return obj.hasCheckpointEmojis(closure_1_7.stats);
          }
        }
        cResult[12] = emoji;
        cResult[13] = tmp36;
        let tmp34 = tmp36;
        let obj2 = { emoji: null };
      } else {
        tmp34 = cResult[13];
      }
      if (cResult[14] === tmp4.emojiCubeContainer) {
        let titleSpacing;
        if (tmp23) {
          titleSpacing = tmp4.titleSpacing;
        }
        class F {
          constructor() {
            obj = closure_0(closure_2[13]);
            return obj.hasCheckpointEmojis(closure_1_7.stats);
          }
        }
        const items4 = [tmp4.title, titleSpacing];
        cResult[17] = tmp4.title;
        cResult[18] = titleSpacing;
        cResult[19] = items4;
      }
      let obj3 = { style: tmp4.emojiCubeContainer, children: tmp34 };
      const tmp40 = closure_9(View, obj3);
      cResult[14] = tmp4.emojiCubeContainer;
      cResult[15] = tmp34;
      cResult[16] = tmp40;
      const tmp31Result = stateFromStores(tmp2[14])(stateFromStores(tmp2[15]));
    }
  }
  if (tmp22) {
    let emojis1 = stateFromStores2.emojis;
  } else if (stateFromStores1 != null) {
    emojis1 = stateFromStores1.emojis;
  }
  if (emojis1 == null) {
    emojis1 = [];
  }
  let emojis2;
  if (stateFromStores1 != null) {
    emojis2 = stateFromStores1.emojis;
  }
  cResult[8] = emojis2;
  cResult[9] = stateFromStores2;
  cResult[10] = tmp22;
  cResult[11] = emojis1;
  const tmpResult6 = require("initialize");
}) : (function CheckpointEmojiStatsScreen() {
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
  let stateFromStores2 = require("initialize").useStateFromStores(items3, () => closure_0(first[13]).hasCheckpointEmojis(CheckpointStore.stats));
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.numEmojisSent;
  }
  if (num == null) {
    num = 0;
  }
  const rounded = Math.round(num);
  let tmp8 = !stateFromStores2;
  if (!stateFromStores2) {
    tmp8 = null != stateFromStores1;
  }
  let tmp9 = !stateFromStores2;
  if (!stateFromStores2) {
    tmp9 = !tmp8;
  }
  if (tmp8) {
    let emojis = stateFromStores1.emojis;
  } else if (stateFromStores != null) {
    emojis = stateFromStores.emojis;
  }
  if (emojis == null) {
    emojis = [];
  }
  [emoji, _slicedToArray] = noop.useState(tmp9 ? closure_11 : emojis[0]);
  let obj4 = require("initialize");
  noop = require("useCheckpointSound")(require("module_12964"));
  let intl = tmp2(tmp3[16]).intl;
  const string = intl.string;
  if (tmp9) {
    let stringResult = string(tmp12(tmp3[17]).vnG9Sx);
  } else {
    stringResult = string(tmp12(tmp3[18]).ZTDCIv);
  }
  if (tmp9) {
    let EmojiSlightlySmilingFaceIcon = tmp2(tmp3[19]).EmojiFrowningFaceIcon;
  } else {
    EmojiSlightlySmilingFaceIcon = tmp2(tmp3[20]).EmojiSlightlySmilingFaceIcon;
  }
  let obj5 = { style: tmp.container, children: null };
  const obj6 = { style: tmp.emojiCubeContainer, children: null };
  const tmp13 = require("useCheckpointSound");
  obj6.children = closure_9(require("EmojiCube"), { emoji });
  const items4 = [closure_9(View, obj6), ];
  const obj7 = { style: tmp.copy, children: null };
  const items5 = [tmp.title, ];
  let titleSpacing;
  if (tmp9) {
    titleSpacing = tmp.titleSpacing;
  }
  const obj8 = { style: items5, children: null };
  items5[1] = titleSpacing;
  const items6 = [closure_9(EmojiSlightlySmilingFaceIcon, { size: "xs", color }), ];
  const obj10 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const obj9 = { size: "xs", color };
  const tmp12Result = require("CheckpointScreen");
  obj10.children = stringResult.toLocaleUpperCase();
  items6[1] = closure_9(require("CheckpointText"), obj10);
  obj8.children = items6;
  const items7 = [closure_10(View, obj8), , , , ];
  let tmp14Result = tmp8;
  if (tmp8) {
    const obj11 = { value: stateFromStores1.numEmojisSent };
    tmp14Result = closure_9(tmp12(tmp3[22]), obj11);
  }
  items7[1] = tmp14Result;
  if (stateFromStores2) {
    const obj12 = { accessible: true, accessibilityLabel: null, style: null, children: null };
    const _HermesInternal = HermesInternal;
    obj12.accessibilityLabel = "" + rounded + " " + stringResult.toLocaleLowerCase();
    obj12.style = tmp.number;
    const obj13 = { end: rounded };
    obj12.children = closure_9(tmp12(tmp3[29]), obj13);
    stateFromStores2 = closure_9(View, obj12);
  }
  items7[2] = stateFromStores2;
  const tmp12Result3 = require("CheckpointText");
  const intl2 = tmp2(tmp3[16]).intl;
  if (tmp8) {
    const obj14 = { numEmojis: null };
    const _Intl = Intl;
    const numberFormat = new Intl.NumberFormat(tmp2(tmp3[16]).intl.currentLocale, { notation: "compact", compactDisplay: "long" });
    obj14.numEmojis = numberFormat.format(stateFromStores1.numEmojisSent);
    let formatToPlainStringResult = intl2.formatToPlainString(tmp12(tmp3[18])["660/Rr"], obj14);
  } else if (tmp9) {
    formatToPlainStringResult = intl2.string(tmp12(tmp3[17]).BHbwK1);
  } else {
    const obj15 = { numEmojis: rounded };
    formatToPlainStringResult = intl2.format(tmp12(tmp3[18]).NFptic, obj15);
  }
  items7[3] = closure_9(require("CheckpointText"), { variant: "heading-lg/medium", children: formatToPlainStringResult });
  let tmp14Result2 = !tmp9;
  if (!tmp9) {
    const obj16 = {
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
            emojiURL = closure_1(first[24]).getEmojiURL(obj2);
            const obj = closure_1(first[24]);
          }
          const tmp6 = closure_1(first[25])(first, emojiName);
          const obj3 = { size: "sm", style: closure_0.emojiChip, shadowColor: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, children: null };
          let str = "transparent";
          if (!tmp6) {
            str = color;
          }
          obj3.shadowColor = str;
          const intl = closure_0(first[16]).intl;
          obj3.accessibilityLabel = intl.formatToPlainString(closure_1(first[18])["S5+pRg"], { emojiName: emojiName.name, rank: index + 1 });
          obj3.accessibilityState = { selected: tmp6 };
          obj3.onPress = function onPress() {
            closure_4();
            closure_3(closure_0);
          };
          const obj5 = { style: closure_0.emoji, fastImageStyle: closure_0.customEmoji, textEmojiStyle: closure_0.textEmoji, name: null, src: null };
          let str2 = "";
          const obj4 = { emojiName: emojiName.name, rank: index + 1 };
          const tmp8 = closure_1(first[26]);
          if (null == emojiName.id) {
            str2 = emojiName.name;
          }
          obj5.name = str2;
          obj5.src = emojiURL;
          const items = [closure_1_9(closure_1(first[27]), obj5), closure_1_9(closure_1(first[23]), { variant: "experimental/mono-md/bold", style: closure_0.rankText, children: index + 1 })];
          obj3.children = items;
          let name = emojiName.id;
          if (name == null) {
            name = emojiName.name;
          }
          return closure_1_10(tmp8, obj3, name);
        })
    };
    tmp14Result2 = closure_9(View, obj16);
  }
  const obj17 = { children: null };
  items7[4] = tmp14Result2;
  obj7.children = items7;
  items4[1] = closure_10(View, obj7);
  obj5.children = items4;
  obj17.children = closure_10(View, obj5);
  return closure_9(tmp12Result, obj17);
});