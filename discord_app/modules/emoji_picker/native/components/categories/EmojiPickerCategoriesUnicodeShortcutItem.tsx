// === Module 10625: EmojiPickerCategoriesUnicodeShortcutItem ===

// Module 10625 (EmojiPickerCategoriesUnicodeShortcutItem)
import ReanimatedRexport from "ReanimatedRexport" /* 4493 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9670 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ EXPRESSION_FOOTER_HEIGHT: metroRequire, NODE_SIZE } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj2 = { itemInner: null, fadedItemOpacity: { opacity: 0.5 } };
let size = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
obj2.itemInner = size;
let closure_8 = createStyles.createStyles(obj2);
const __initData = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx1(){const{blockRef}=this.__closure;return blockRef.get();}" };
const __initData2 = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx2(blockRef,previous){const{cheapWorkletShallowEqual,categoryIndex,EXPRESSION_FOOTER_HEIGHT,unicodeShortcutVisible,runOnJS,setUnicodeShortcutVisible}=this.__closure;if(blockRef==null||cheapWorkletShallowEqual(blockRef,previous!==null&&previous!==void 0?previous:undefined)){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;const categoryUnicodeShortcutVisible=categoryScrollPos>blockRef.end-(unicodeShortcutVisible?0:EXPRESSION_FOOTER_HEIGHT);runOnJS(setUnicodeShortcutVisible)(categoryUnicodeShortcutVisible);}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesUnicodeShortcutItem.tsx");

export default function EmojiPickerCategoriesUnicodeShortcutItem(blockRef) {
  blockRef = blockRef.blockRef;
  const category = blockRef.category;
  const categoryIndex = blockRef.categoryIndex;
  const onPress = blockRef.onPress;
  let unicodeShortcutVisible;
  let tmp = onPress(unicodeShortcutVisible.useState(false), 2);
  unicodeShortcutVisible = tmp[0];
  closure_5 = tmp3;
  const fn = function f() {
    return blockRef.get();
  };
  fn.__closure = { blockRef };
  fn.__workletHash = 805688584630;
  fn.__initData = __initData;
  const fn2 = function b(end, current) {
    if (null != end) {
      if (!obj.cheapWorkletShallowEqual(end, tmp)) {
        let num = 0;
        const result = categoryIndex * EXPRESSION_FOOTER_HEIGHT;
        if (!first) {
          num = EXPRESSION_FOOTER_HEIGHT;
        }
        const diff = end.end - num;
        ReanimatedRexport.runOnJS(closure_5)(result > diff);
        const tmp2Result = ReanimatedRexport;
      }
      obj = cheapWorkletShallowEqual;
      tmp = current;
    }
  };
  let obj = blockRef(categoryIndex[6]);
  fn2.__closure = { cheapWorkletShallowEqual: blockRef(categoryIndex[7]).cheapWorkletShallowEqual, categoryIndex, EXPRESSION_FOOTER_HEIGHT, unicodeShortcutVisible, runOnJS: blockRef(categoryIndex[6]).runOnJS, setUnicodeShortcutVisible: tmp[1] };
  fn2.__workletHash = 4994136030029;
  fn2.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const obj2 = { cheapWorkletShallowEqual: blockRef(categoryIndex[7]).cheapWorkletShallowEqual, categoryIndex, EXPRESSION_FOOTER_HEIGHT, unicodeShortcutVisible, runOnJS: blockRef(categoryIndex[6]).runOnJS, setUnicodeShortcutVisible: tmp[1] };
  const items = [categoryIndex, category, onPress];
  let tmp9 = null;
  if (unicodeShortcutVisible) {
    const obj3 = { style: blockRef.style, onPress: tmp8, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = tmp4(tmp5[9]).intl;
    obj3.accessibilityLabel = intl.string(tmp4(tmp5[9]).t.gg3lOG);
    const obj4 = { style: null, children: null };
    const items1 = [, ];
    ({ itemInner: arr2[0], fadedItemOpacity: arr2[1] } = tmp7);
    obj4.style = items1;
    const obj5 = { id: category.id };
    obj4.children = jsx(category(tmp5[10]), { id: category.id });
    obj3.children = <closure_5 style={null}>{null}</closure_5>;
    tmp9 = jsx(tmp4(tmp5[8]).PressableOpacity, { style: blockRef.style, onPress: tmp8, accessibilityRole: "button", accessibilityLabel: null, children: null });
  }
  return tmp9;
};