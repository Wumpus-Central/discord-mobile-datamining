// === Module 13806: EmojiCube ===

// Module 13806 (EmojiCube)
import nativeDefault from "native" /* 575 */;
import EmojiDefault from "Emoji" /* 7420 */;
import _slicedToArray from "module_32" /* 32 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

const require = fn;
function createFaceTransforms(items, items2, items1) {
  [tmp, tmp2] = items;
  [tmp3, tmp4] = items2;
  [tmp5, tmp6] = items1;
  const result = Math.atan2(2 * (tmp * tmp3 + tmp2 * tmp4), tmp * tmp + tmp2 * tmp2 - tmp3 * tmp3 - tmp4 * tmp4) / 2;
  const cosResult = Math.cos(result);
  const sinResult = Math.sin(result);
  const sum = tmp * cosResult + tmp3 * sinResult;
  const sum1 = tmp2 * cosResult + tmp4 * sinResult;
  const hypotResult = Math.hypot(sum, sum1);
  const obj = { transform: null };
  items = [{ translateX: tmp5 * c6 / 2 }, { translateY: tmp6 * c6 / 2 }, { rotate: "" + Math.atan2(sum1, sum) + "rad" }, { scaleX: hypotResult }, { scaleY: (tmp * tmp4 - tmp3 * tmp2) / hypotResult }];
  obj.transform = items;
  items1 = [obj, ];
  const obj4 = { transform: null };
  items2 = [{ rotate: `${-tmp7}rad` }];
  obj4.transform = items2;
  items1[1] = obj4;
  return items1;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
let c6 = 200;
let items = [0.8322767019271851, -0.37332993745803833];
let items1 = [0.5543603897094727, 0.560490608215332];
let items2 = [0, 0.739239513874054];
let items3 = [-items2[0], -items2[1]];
let items4 = [-items[0], -items[1]];
[tmp4, tmp5] = createFaceTransforms(items, items1, items3);
const importDefaultResultResult = _slicedToArray(createFaceTransforms(items, items1, items3), 2);
[tmp7, tmp8] = createFaceTransforms(items1, items2, items4);
const importDefaultResultResult1 = _slicedToArray(createFaceTransforms(items1, items2, items4), 2);
[tmp10, tmp11] = createFaceTransforms(items, items2, items1);
const createStyles = fn(5141);
let obj2 = { container: { position: "relative", width: 200, height: 200 }, face: { position: "absolute", top: 0, left: 0, width: 200, height: 200 }, emoji: { position: "absolute", top: 0, left: 0, width: 200, height: 200, borderWidth: 2, borderColor: fn(6186).CHECKPOINT_PRIMARY, overflow: "hidden" }, customEmoji: { width: 196, height: 196 }, textEmoji: null, topFace: null, leftFace: null, rightFace: null, topEmoji: null, leftEmoji: null, rightEmoji: null };
let PlatformUtils = fn(1357);
let num = 196;
if (PlatformUtils.isIOS()) {
  num = 200;
}
let obj4 = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
PlatformUtils = fn(1357);
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 229.99999999999997;
}
obj4.lineHeight = num2;
obj4.color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj2.textEmoji = obj4;
obj2.topFace = tmp4;
obj2.leftFace = tmp7;
obj2.rightFace = tmp10;
obj2.topEmoji = tmp5;
obj2.leftEmoji = tmp8;
obj2.rightEmoji = tmp11;
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/emoji/EmojiCube.tsx");

export default function EmojiCube(emoji) {
  emoji = emoji.emoji;
  dependencyMap = undefined;
  items = [AccessibilityStore];
  const stateFromStores = emoji(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let emojiURL;
  if (null != emoji.id) {
    const obj3 = { id: emoji.id, animated: null, size: 48 };
    let tmp5 = !stateFromStores;
    if (!stateFromStores) {
      tmp5 = true === emoji.animated;
    }
    obj3.animated = tmp5;
    emojiURL = emojiURL(1411).getEmojiURL(obj3);
    let obj2 = emojiURL(1411);
  }
  const tmp6 = closure_7();
  dependencyMap = tmp6;
  const obj4 = { style: null, children: null };
  let items1 = [tmp6.container, , ];
  const obj5 = { transform: null };
  let obj = emoji(504);
  const items2 = [{ scale: emojiURL(1493)().width / 392 }];
  obj5.transform = items2;
  items1[1] = obj5;
  items1[2] = emoji.style;
  obj4.style = items1;
  const items3 = [, ];
  ({ topFace: arr4[0], topEmoji: arr4[1] } = tmp6);
  const items4 = [items3, , ];
  const items5 = [, ];
  ({ leftFace: arr6[0], leftEmoji: arr6[1] } = tmp6);
  items4[1] = items5;
  const items6 = [, ];
  ({ rightFace: arr7[0], rightEmoji: arr7[1] } = tmp6);
  items4[2] = items6;
  obj4.children = items4.map((item, index) => {
    [tmp, tmp2] = item;
    const obj = { style: null, children: null };
    items = [closure_2.face, tmp];
    obj.style = items;
    const obj2 = { style: null, fastImageStyle: closure_2.customEmoji, textEmojiStyle: closure_2.textEmoji, name: null, src: null };
    const items1 = [closure_2.emoji, tmp2];
    obj2.style = items1;
    let str = "";
    if (null == emoji.id) {
      str = emoji.name;
    }
    obj2.name = str;
    obj2.src = emojiURL;
    obj.children = jsx(EmojiDefault, { style: null, fastImageStyle: closure_2.customEmoji, textEmojiStyle: closure_2.textEmoji, name: null, src: null });
    return <View key={index} style={null}>{null}</View>;
  });
  return <View style={null}>{null}</View>;
};