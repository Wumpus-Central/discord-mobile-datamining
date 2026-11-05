// discord_app/modules/emoji_picker/native/components/categories/EmojiPickerCategoriesUnicodeShortcutItem.tsx
import util from "../../../../../intl/index.native.tsx";
import _mod1652 from "../../../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../../../_runtime/metro/01705__.js";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import EmojiPickerCategoryIconDefault from "EmojiPickerCategoryIcon.tsx";
import cheapWorkletShallowEqual from "../../../../reanimated/native/cheapWorkletShallowEqual.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(1072);
({ EXPRESSION_FOOTER_HEIGHT: closure_6, NODE_SIZE } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5143);
let obj2 = { itemInner: null, fadedItemOpacity: { opacity: 0.5 } };
let size = {
  justifyContent: "center",
  alignItems: "center",
  height: NODE_SIZE,
  width: NODE_SIZE,
  borderRadius: NODE_SIZE / 2,
};
obj2.itemInner = size;
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = {
  code: "(function EmojiPickerCategoriesUnicodeShortcutItemTsx1(){let[blockRef]=this.__closure;return blockRef.get();})",
};
let closure_10 = {
  code: "(function EmojiPickerCategoriesUnicodeShortcutItemTsx2(blockRef,previous){let[cheapWorkletShallowEqual,categoryIndex,EXPRESSION_FOOTER_HEIGHT,unicodeShortcutVisible,scheduleOnRN,setUnicodeShortcutVisible]=this.__closure;if(blockRef==null||cheapWorkletShallowEqual(blockRef,previous!==null&&previous!==void 0?previous:undefined)){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;const categoryUnicodeShortcutVisible=categoryScrollPos>blockRef.end-(unicodeShortcutVisible?0:EXPRESSION_FOOTER_HEIGHT);scheduleOnRN(setUnicodeShortcutVisible,categoryUnicodeShortcutVisible);})",
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/emoji_picker/native/components/categories/EmojiPickerCategoriesUnicodeShortcutItem.tsx",
);

export default function EmojiPickerCategoriesUnicodeShortcutItem(category) {
  category = category.category;
  const categoryIndex = category.categoryIndex;
  c1 = categoryIndex;
  const onPress = category.onPress;
  c2 = onPress;
  ({ blockRef, style } = category);
  let tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  items = [closure_9, blockRef];
  c0 = undefined;
  [tmp5, tmp6] = items;
  class EmojiPickerCategoriesUnicodeShortcutItemTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items1 = [tmp6];
  EmojiPickerCategoriesUnicodeShortcutItemTsx1.__closure = items1;
  EmojiPickerCategoriesUnicodeShortcutItemTsx1.__workletHash = 6335031605135;
  EmojiPickerCategoriesUnicodeShortcutItemTsx1.__initData = tmp5;
  const items2 = [
    closure_10,
    cheapWorkletShallowEqual.cheapWorkletShallowEqual,
    categoryIndex,
    timestampProducer,
    first,
    _mod1705.scheduleOnRN,
    tmp[1],
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items2;
  class EmojiPickerCategoriesUnicodeShortcutItemTsx2 {
    constructor(arg0, arg1) {
      if (null != category) {
        tmp = arg1;
        tmp2 = closure_0;
        if (!tmp2(category, tmp)) {
          tmp3 = closure_1;
          tmp5 = closure_3;
          num = 0;
          result = closure_1 * closure_2;
          if (!closure_3) {
            num = closure_2;
          }
          tmp6 = closure_4;
          tmp7 = closure_5;
          tmp8 = closure_4(closure_5, result > category.end - num);
        }
      }
      return;
    }
  }
  const items3 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  EmojiPickerCategoriesUnicodeShortcutItemTsx2.__closure = items3;
  EmojiPickerCategoriesUnicodeShortcutItemTsx2.__workletHash = 7076312301625;
  EmojiPickerCategoriesUnicodeShortcutItemTsx2.__initData = tmp7;
  const animatedReaction = _mod1652.useAnimatedReaction(
    EmojiPickerCategoriesUnicodeShortcutItemTsx1,
    EmojiPickerCategoriesUnicodeShortcutItemTsx2,
  );
  const items4 = [categoryIndex, category, onPress];
  let tmp17 = null;
  if (first) {
    const obj2 = { style, onPress: tmp16, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.gg3lOG);
    const obj3 = { style: null, children: null };
    const items5 = [,];
    ({ itemInner: arr6[0], fadedItemOpacity: arr6[1] } = tmp15);
    obj3.style = items5;
    const obj4 = { id: category.id };
    obj3.children = jsx(EmojiPickerCategoryIconDefault, { id: category.id });
    obj2.children = <View style={null}>{null}</View>;
    tmp17 = jsx(Pressables.PressableOpacity, {
      style,
      onPress: tmp16,
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    });
  }
  return tmp17;
}
