// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointEmojiStatsScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../../a11y/AccessibilityStore.tsx";
import CheckpointStore from "../../../../CheckpointStore.tsx";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const CheckpointConstants = fn(5970);
({ CHECKPOINT_PRIMARY: closure_8, CHECKPOINT_DARK_CYAN } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = { name: "\u{1F622}", animated: false };
const createStyles = fn(4945);
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
  const cResult = require("c").c(32);
  const tmp4 = closure_12();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function h() {
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
    class E {
      constructor() {
        stats = closure_1_7.stats;
        emojis = undefined;
        if (stats != null) {
          emojis = stats.emojis;
        }
        return emojis;
      }
    }
    cResult[2] = items1;
    cResult[3] = E;
    let tmp10 = E;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp10);
  let num5;
  if (stateFromStores1 != null) {
    num5 = stateFromStores1.numEmojisSent;
  }
  if (num5 == null) {
    num5 = 0;
  }
  const rounded = Math.round(num5);
  let emojis1;
  if (stateFromStores1 != null) {
    emojis1 = stateFromStores1.emojis;
  }
  if (cResult[4] !== emojis1) {
    let emojis2;
    if (stateFromStores1 != null) {
      emojis2 = stateFromStores1.emojis;
    }
    if (emojis2 == null) {
      emojis2 = [];
    }
    class E {
      constructor() {
        stats = closure_1_7.stats;
        emojis = undefined;
        if (stats != null) {
          emojis = stats.emojis;
        }
        return emojis;
      }
    }
    if (stateFromStores1 != null) {
      let emojis = stateFromStores1.emojis;
    }
    cResult[4] = emojis;
    cResult[5] = emojis2;
    let arr3 = emojis2;
  } else {
    arr3 = cResult[5];
  }
  [emoji, _slicedToArray] = noop.useState(0 === rounded || 0 === arr3.length ? closure_11 : arr3[0]);
  const tmpResult2 = require("initialize");
  const tmp19 = stateFromStores(emoji[13]);
  noop = stateFromStores(emoji[13])(stateFromStores(emoji[14]));
  let intl = tmp(tmp2[15]).intl;
  const string = intl.string;
  if (0 === rounded || 0 === arr3.length) {
    string(tmp18(tmp2[16]).vnG9Sx);
  } else {
    string(tmp18(tmp2[17]).ZTDCIv);
  }
  if (0 === rounded || 0 === arr3.length) {
    let EmojiSlightlySmilingFaceIcon = tmp(tmp2[18]).EmojiFrowningFaceIcon;
  } else {
    EmojiSlightlySmilingFaceIcon = tmp(tmp2[19]).EmojiSlightlySmilingFaceIcon;
  }
  if (cResult[6] !== emoji) {
    { emoji: null }.emoji = emoji;
    class E {
      constructor() {
        stats = closure_1_7.stats;
        emojis = undefined;
        if (stats != null) {
          emojis = stats.emojis;
        }
        return emojis;
      }
    }
    cResult[6] = emoji;
    cResult[7] = tmp24;
    let tmp22 = tmp24;
    let obj2 = { emoji: null };
  } else {
    tmp22 = cResult[7];
  }
  if (cResult[8] === tmp4.emojiCubeContainer) {
    let titleSpacing;
    if (tmp15) {
      titleSpacing = tmp4.titleSpacing;
    }
    class E {
      constructor() {
        stats = closure_1_7.stats;
        emojis = undefined;
        if (stats != null) {
          emojis = stats.emojis;
        }
        return emojis;
      }
    }
    const items2 = [tmp4.title, titleSpacing];
    cResult[11] = tmp4.title;
    cResult[12] = titleSpacing;
    cResult[13] = items2;
  }
  let obj3 = { style: tmp4.emojiCubeContainer, children: tmp22 };
  const tmp19Result = stateFromStores(emoji[13])(stateFromStores(emoji[14]));
  cResult[8] = tmp4.emojiCubeContainer;
  cResult[9] = tmp22;
  cResult[10] = closure_9(View, { style: tmp4.emojiCubeContainer, children: tmp22 });
  const tmp26 = closure_9(View, { style: tmp4.emojiCubeContainer, children: tmp22 });
}) : (function CheckpointEmojiStatsScreen() {
  const tmp = closure_12();
  _require = tmp;
  let items = [AccessibilityStore];
  importDefault = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = require("initialize");
  const items1 = [CheckpointStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => {
    stats = stats.stats;
    let emojis;
    if (stats != null) {
      emojis = stats.emojis;
    }
    return emojis;
  });
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.numEmojisSent;
  }
  if (num == null) {
    num = 0;
  }
  const rounded = Math.round(num);
  let emojis;
  if (stateFromStores != null) {
    emojis = stateFromStores.emojis;
  }
  if (emojis == null) {
    emojis = [];
  }
  [emoji, _slicedToArray] = noop.useState(0 === rounded || 0 === emojis.length ? closure_11 : emojis[0]);
  let obj2 = require("initialize");
  noop = require("useCheckpointSound")(require("../../../../../../../discord_assets/assets/checkpoint/click-next.mp3.js"));
  let intl = tmp2(tmp3[15]).intl;
  const string = intl.string;
  if (0 === rounded || 0 === emojis.length) {
    let stringResult = string(tmp9(tmp3[16]).vnG9Sx);
  } else {
    stringResult = string(tmp9(tmp3[17]).ZTDCIv);
  }
  if (0 === rounded || 0 === emojis.length) {
    let EmojiSlightlySmilingFaceIcon = tmp2(tmp3[18]).EmojiFrowningFaceIcon;
  } else {
    EmojiSlightlySmilingFaceIcon = tmp2(tmp3[19]).EmojiSlightlySmilingFaceIcon;
  }
  let obj3 = { style: tmp.container, children: null };
  let obj4 = { style: tmp.emojiCubeContainer, children: null };
  const tmp10 = require("useCheckpointSound");
  obj4.children = closure_9(require("EmojiCube"), { emoji });
  const items2 = [closure_9(View, obj4), ];
  let obj5 = { style: tmp.copy, children: null };
  const items3 = [tmp.title, ];
  let titleSpacing;
  if (0 === rounded || 0 === emojis.length) {
    titleSpacing = tmp.titleSpacing;
  }
  const obj6 = { style: items3, children: null };
  items3[1] = titleSpacing;
  const items4 = [closure_9(EmojiSlightlySmilingFaceIcon, { size: "xs", color }), ];
  const obj8 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const obj7 = { size: "xs", color };
  const tmp9Result = require("CheckpointScreen");
  obj8.children = stringResult.toLocaleUpperCase();
  items4[1] = closure_9(require("CheckpointText"), obj8);
  obj6.children = items4;
  const items5 = [closure_10(View, obj6), , , ];
  let tmp11Result2 = !tmp6;
  let tmp11Result = tmp11Result2;
  if (!(0 === rounded || 0 === emojis.length)) {
    const obj9 = { accessible: true, accessibilityLabel: null, style: null, children: null };
    const _HermesInternal = HermesInternal;
    obj9.accessibilityLabel = "" + rounded + " " + stringResult.toLocaleLowerCase();
    obj9.style = tmp.number;
    const obj10 = { end: rounded };
    obj9.children = closure_9(tmp9(tmp3[27]), obj10);
    tmp11Result = closure_9(View, obj9);
  }
  items5[1] = tmp11Result;
  const tmp9Result3 = require("CheckpointText");
  const intl2 = tmp2(tmp3[15]).intl;
  if (0 === rounded || 0 === emojis.length) {
    let stringResult1 = intl2.string(tmp9(tmp3[16]).BHbwK1);
  } else {
    const obj11 = { numEmojis: rounded };
    stringResult1 = intl2.format(tmp9(tmp3[17]).NFptic, obj11);
  }
  items5[2] = closure_9(require("CheckpointText"), { variant: "heading-lg/medium", children: stringResult1 });
  if (!(0 === rounded || 0 === emojis.length)) {
    const obj12 = {
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
            emojiURL = closure_1(first[22]).getEmojiURL(obj2);
            const obj = closure_1(first[22]);
          }
          const tmp6 = closure_1(first[23])(first, emojiName);
          const obj3 = { size: "sm", style: closure_0.emojiChip, shadowColor: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, children: null };
          let str = "transparent";
          if (!tmp6) {
            str = color;
          }
          obj3.shadowColor = str;
          const intl = closure_0(first[15]).intl;
          obj3.accessibilityLabel = intl.formatToPlainString(closure_1(first[17])["S5+pRg"], { emojiName: emojiName.name, rank: index + 1 });
          obj3.accessibilityState = { selected: tmp6 };
          obj3.onPress = function onPress() {
            closure_4();
            closure_3(closure_0);
          };
          const obj5 = { style: closure_0.emoji, fastImageStyle: closure_0.customEmoji, textEmojiStyle: closure_0.textEmoji, name: null, src: null };
          let str2 = "";
          const obj4 = { emojiName: emojiName.name, rank: index + 1 };
          const tmp8 = closure_1(first[24]);
          if (null == emojiName.id) {
            str2 = emojiName.name;
          }
          obj5.name = str2;
          obj5.src = emojiURL;
          const items = [closure_1_9(closure_1(first[25]), obj5), closure_1_9(closure_1(first[21]), { variant: "experimental/mono-md/bold", style: closure_0.rankText, children: index + 1 })];
          obj3.children = items;
          let name = emojiName.id;
          if (name == null) {
            name = emojiName.name;
          }
          return closure_1_10(tmp8, obj3, name);
        })
    };
    tmp11Result2 = closure_9(View, obj12);
  }
  const obj13 = { children: null };
  items5[3] = tmp11Result2;
  obj5.children = items5;
  items2[1] = closure_10(View, obj5);
  obj3.children = items2;
  obj13.children = closure_10(View, obj3);
  return closure_9(tmp9Result, obj13);
});