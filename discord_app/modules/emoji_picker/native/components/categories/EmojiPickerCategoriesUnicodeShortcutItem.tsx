// discord_app/modules/emoji_picker/native/components/categories/EmojiPickerCategoriesUnicodeShortcutItem.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let NODE_SIZE;
let closure_6;
const require = arg1;
({ EXPRESSION_FOOTER_HEIGHT: closure_6, NODE_SIZE } = ME);
createCacheKey = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
let closure_8 = createCacheKey.createStyles({ itemInner: createCacheKey, fadedItemOpacity: { opacity: 0.5 } });
let closure_9 = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx1(){const{blockRef}=this.__closure;return blockRef.get();}" };
let closure_10 = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx2(blockRef,previous){const{cheapWorkletShallowEqual,categoryIndex,EXPRESSION_FOOTER_HEIGHT,unicodeShortcutVisible,runOnJS,setUnicodeShortcutVisible}=this.__closure;if(blockRef==null||cheapWorkletShallowEqual(blockRef,previous!==null&&previous!==void 0?previous:undefined)){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;const categoryUnicodeShortcutVisible=categoryScrollPos>blockRef.end-(unicodeShortcutVisible?0:EXPRESSION_FOOTER_HEIGHT);runOnJS(setUnicodeShortcutVisible)(categoryUnicodeShortcutVisible);}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesUnicodeShortcutItem.tsx");

export default function EmojiPickerCategoriesUnicodeShortcutItem(blockRef) {
  blockRef = blockRef.blockRef;
  const category = blockRef.category;
  const categoryIndex = blockRef.categoryIndex;
  const onPress = blockRef.onPress;
  let first;
  let c5;
  let tmp = onPress(first.useState(false), 2);
  first = tmp[0];
  c5 = tmp3;
  let obj = blockRef(categoryIndex[6]);
  const fn = function f() {
    return blockRef.get();
  };
  fn.__closure = { blockRef };
  fn.__workletHash = 805688584630;
  fn.__initData = closure_9;
  const fn2 = function b(end, current) {
    if (null != end) {
      if (!obj.cheapWorkletShallowEqual(end, tmp)) {
        let num = 0;
        const result = categoryIndex * outer1_6;
        if (!first) {
          num = outer1_6;
        }
        const diff = end.end - num;
        tmp2(tmp3[6]).runOnJS(c5)(result > diff);
        const tmp2Result = tmp2(tmp3[6]);
      }
      obj = blockRef(categoryIndex[7]);
      tmp = current;
      tmp2 = blockRef;
      tmp3 = categoryIndex;
    }
  };
  obj = { cheapWorkletShallowEqual: blockRef(categoryIndex[7]).cheapWorkletShallowEqual, categoryIndex, EXPRESSION_FOOTER_HEIGHT: closure_6, unicodeShortcutVisible: first, runOnJS: blockRef(categoryIndex[6]).runOnJS, setUnicodeShortcutVisible: tmp3 };
  fn2.__closure = obj;
  fn2.__workletHash = 4994136030029;
  fn2.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const items = [categoryIndex, category, onPress];
  let tmp9 = null;
  if (first) {
    obj = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    obj[0] = blockRef.style;
    obj[1] = tmp8;
    const intl = tmp4(tmp5[9]).intl;
    obj[3] = intl.string(tmp4(tmp5[9]).t.gg3lOG);
    const obj1 = { style: null, children: null };
    const items1 = [, ];
    ({ itemInner: arr2[0], fadedItemOpacity: arr2[1] } = tmp7);
    obj1[0] = items1;
    const obj2 = { id: null };
    obj2[0] = category.id;
    obj1[1] = jsx(category(tmp5[10]), { id: null });
    obj[4] = <c5 style={null}>{null}</c5>;
    tmp9 = jsx(tmp4(tmp5[8]).PressableOpacity, { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null });
  }
  return tmp9;
};