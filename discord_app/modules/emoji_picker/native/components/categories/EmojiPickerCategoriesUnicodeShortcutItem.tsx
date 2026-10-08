// === Module 9511: EmojiPickerCategoriesUnicodeShortcutItem ===

// Module 9511 (EmojiPickerCategoriesUnicodeShortcutItem)
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9512 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ EXPRESSION_FOOTER_HEIGHT: metroRequire, NODE_SIZE } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { itemInner: null, fadedItemOpacity: { opacity: 0.5 } };
let size = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
obj2.itemInner = size;
let closure_8 = createStyles.createStyles(obj2);
const __initData = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx1(){const{blockRef}=this.__closure;return blockRef.get();}" };
const __initData2 = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx2(blockRef_0,previous){const{cheapWorkletShallowEqual,categoryIndex,EXPRESSION_FOOTER_HEIGHT,unicodeShortcutVisible,runOnJS,setUnicodeShortcutVisible}=this.__closure;if(blockRef_0==null||cheapWorkletShallowEqual(blockRef_0,previous!==null&&previous!==void 0?previous:undefined)){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;const categoryUnicodeShortcutVisible=categoryScrollPos>blockRef_0.end-(unicodeShortcutVisible?0:EXPRESSION_FOOTER_HEIGHT);runOnJS(setUnicodeShortcutVisible)(categoryUnicodeShortcutVisible);}" };
const __initData3 = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx3(){const{blockRef}=this.__closure;return blockRef.get();}" };
const __initData4 = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx4(blockRef_0,previous){const{cheapWorkletShallowEqual,categoryIndex,EXPRESSION_FOOTER_HEIGHT,unicodeShortcutVisible,runOnJS,setUnicodeShortcutVisible}=this.__closure;if(blockRef_0==null||cheapWorkletShallowEqual(blockRef_0,previous!==null&&previous!==void 0?previous:undefined)){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;const categoryUnicodeShortcutVisible=categoryScrollPos>blockRef_0.end-(unicodeShortcutVisible?0:EXPRESSION_FOOTER_HEIGHT);runOnJS(setUnicodeShortcutVisible)(categoryUnicodeShortcutVisible);}" };
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesUnicodeShortcutItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPickerCategoriesUnicodeShortcutItem(blockRef) {
  let PressableOpacity = blockRef;
  let tmp = categoryIndex;
  const cResult = blockRef(categoryIndex[7]).c(17);
  blockRef = blockRef.blockRef;
  const category = blockRef.category;
  categoryIndex = blockRef.categoryIndex;
  const onPress = blockRef.onPress;
  const style = blockRef.style;
  const tmp3 = onPress(unicodeShortcutVisible.useState(false), 2);
  unicodeShortcutVisible = tmp3[0];
  closure_5 = tmp5;
  let obj = blockRef(categoryIndex[7]);
  class E {
    constructor() {
      return blockRef.get();
    }
  }
  E.__closure = { blockRef };
  E.__workletHash = 805688584630;
  E.__initData = __initData;
  const fn = function s(end, safeAreaState2) {
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
      tmp = safeAreaState2;
    }
  };
  const obj2 = blockRef(categoryIndex[8]);
  fn.__closure = { cheapWorkletShallowEqual: blockRef(categoryIndex[9]).cheapWorkletShallowEqual, categoryIndex, EXPRESSION_FOOTER_HEIGHT, unicodeShortcutVisible, runOnJS: blockRef(categoryIndex[8]).runOnJS, setUnicodeShortcutVisible: tmp3[1] };
  fn.__workletHash = 10939263219533;
  fn.__initData = __initData2;
  const animatedReaction = obj2.useAnimatedReaction(E, fn);
  const tmp7 = closure_8();
  if (cResult[0] === category) {
    if (cResult[1] === categoryIndex) {
      if (cResult[2] === onPress) {
        let tmp8 = cResult[3];
      }
      if (!unicodeShortcutVisible) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = PressableOpacity(tmp[10]).intl;
          const stringResult = intl.string(PressableOpacity(tmp[10]).t.gg3lOG);
          cResult[4] = stringResult;
          let tmp11 = stringResult;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] === tmp7.fadedItemOpacity) {
          if (cResult[6] === tmp7.itemInner) {
            let tmp13 = cResult[7];
          }
          if (cResult[8] !== category.id) {
            const obj4 = { id: category.id };
            const tmp17 = jsx(category(tmp[11]), { id: category.id });
            cResult[8] = category.id;
            cResult[9] = tmp17;
            let tmp14 = tmp17;
          } else {
            tmp14 = cResult[9];
          }
          if (cResult[10] === tmp13) {
            if (cResult[11] === tmp14) {
              let tmp18 = cResult[12];
            }
            if (cResult[13] === tmp8) {
              if (cResult[14] === style) {
              }
            }
            PressableOpacity = PressableOpacity(tmp[12]).PressableOpacity;
            const obj5 = { style, onPress: tmp8, accessibilityRole: "button", accessibilityLabel: tmp11, children: tmp18 };
            tmp = <PressableOpacity style={style} onPress={tmp8} accessibilityRole="button" accessibilityLabel={tmp11}>{tmp18}</PressableOpacity>;
            cResult[13] = tmp8;
            cResult[14] = style;
            cResult[15] = tmp18;
            cResult[16] = tmp;
          }
          const obj6 = { style: tmp13, children: tmp14 };
          const tmp21 = <closure_5 style={tmp13}>{tmp14}</closure_5>;
          cResult[10] = tmp13;
          cResult[11] = tmp14;
          cResult[12] = tmp21;
          tmp18 = tmp21;
        }
        const items = [, ];
        ({ itemInner: arr[0], fadedItemOpacity: arr[1] } = tmp7);
        cResult[5] = tmp7.fadedItemOpacity;
        cResult[6] = tmp7.itemInner;
        cResult[7] = items;
        tmp13 = items;
      }
    }
  }
  class H {
    constructor() {
      tmp = onPress(categoryIndex, category);
      return;
    }
  }
  cResult[0] = category;
  cResult[1] = categoryIndex;
  cResult[2] = onPress;
  cResult[3] = H;
  tmp8 = H;
  const obj3 = { cheapWorkletShallowEqual: blockRef(categoryIndex[9]).cheapWorkletShallowEqual, categoryIndex, EXPRESSION_FOOTER_HEIGHT, unicodeShortcutVisible, runOnJS: blockRef(categoryIndex[8]).runOnJS, setUnicodeShortcutVisible: tmp3[1] };
}) : (function EmojiPickerCategoriesUnicodeShortcutItem(blockRef) {
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
  fn.__workletHash = 4231989001012;
  fn.__initData = __initData3;
  class I {
    constructor(arg0, arg1) {
      if (null != blockRef) {
        tmp = arg1;
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[9]);
        if (!obj.cheapWorkletShallowEqual(blockRef, tmp)) {
          tmp4 = categoryIndex;
          tmp6 = closure_4;
          num = 0;
          result = categoryIndex * EXPRESSION_FOOTER_HEIGHT;
          if (!closure_4) {
            num = EXPRESSION_FOOTER_HEIGHT;
          }
          diff = blockRef.end - num;
          tmp2Result = tmp2(tmp3[8]);
          tmp8 = closure_5;
          tmp9 = tmp2Result.runOnJS(closure_5)(result > diff);
        }
      }
      return;
    }
  }
  let obj = blockRef(categoryIndex[8]);
  I.__closure = { cheapWorkletShallowEqual: blockRef(categoryIndex[9]).cheapWorkletShallowEqual, categoryIndex, EXPRESSION_FOOTER_HEIGHT, unicodeShortcutVisible, runOnJS: blockRef(categoryIndex[8]).runOnJS, setUnicodeShortcutVisible: tmp[1] };
  I.__workletHash = 929118758347;
  I.__initData = __initData4;
  const animatedReaction = obj.useAnimatedReaction(fn, I);
  const obj2 = { cheapWorkletShallowEqual: blockRef(categoryIndex[9]).cheapWorkletShallowEqual, categoryIndex, EXPRESSION_FOOTER_HEIGHT, unicodeShortcutVisible, runOnJS: blockRef(categoryIndex[8]).runOnJS, setUnicodeShortcutVisible: tmp[1] };
  const items = [categoryIndex, category, onPress];
  let tmp9 = null;
  if (unicodeShortcutVisible) {
    const obj3 = { style: blockRef.style, onPress: tmp8, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = tmp4(tmp5[10]).intl;
    obj3.accessibilityLabel = intl.string(tmp4(tmp5[10]).t.gg3lOG);
    const obj4 = { style: null, children: null };
    const items1 = [, ];
    ({ itemInner: arr2[0], fadedItemOpacity: arr2[1] } = tmp7);
    obj4.style = items1;
    const obj5 = { id: category.id };
    obj4.children = jsx(category(tmp5[11]), { id: category.id });
    obj3.children = <closure_5 style={null}>{null}</closure_5>;
    tmp9 = jsx(tmp4(tmp5[12]).PressableOpacity, { style: blockRef.style, onPress: tmp8, accessibilityRole: "button", accessibilityLabel: null, children: null });
  }
  return tmp9;
});