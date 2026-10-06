// === Module 9982: EmojiPickerCategoriesUnicodeShortcutItem ===

// Module 9982 (EmojiPickerCategoriesUnicodeShortcutItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 9110 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let NODE_SIZE;
let metroRequire;
let size;
const View = react_native.View;
({ EXPRESSION_FOOTER_HEIGHT: metroRequire, NODE_SIZE } = Constants);
const jsx = Fragment.jsx;
let obj = { itemInner: size, fadedItemOpacity: { opacity: 0.5 } };
size = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx1(){const{blockRef}=this.__closure;return blockRef.get();}" };
const __initData2 = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx2(blockRef_0,previous){const{cheapWorkletShallowEqual,categoryIndex,EXPRESSION_FOOTER_HEIGHT,unicodeShortcutVisible,runOnJS,setUnicodeShortcutVisible}=this.__closure;if(blockRef_0==null||cheapWorkletShallowEqual(blockRef_0,previous!==null&&previous!==void 0?previous:undefined)){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;const categoryUnicodeShortcutVisible=categoryScrollPos>blockRef_0.end-(unicodeShortcutVisible?0:EXPRESSION_FOOTER_HEIGHT);runOnJS(setUnicodeShortcutVisible)(categoryUnicodeShortcutVisible);}" };
const __initData3 = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx3(){const{blockRef}=this.__closure;return blockRef.get();}" };
const __initData4 = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx4(blockRef_0,previous){const{cheapWorkletShallowEqual,categoryIndex,EXPRESSION_FOOTER_HEIGHT,unicodeShortcutVisible,runOnJS,setUnicodeShortcutVisible}=this.__closure;if(blockRef_0==null||cheapWorkletShallowEqual(blockRef_0,previous!==null&&previous!==void 0?previous:undefined)){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;const categoryUnicodeShortcutVisible=categoryScrollPos>blockRef_0.end-(unicodeShortcutVisible?0:EXPRESSION_FOOTER_HEIGHT);runOnJS(setUnicodeShortcutVisible)(categoryUnicodeShortcutVisible);}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((blockRef) => {
  let categoryIndex;
  let unicodeShortcutVisible;
  let tmp = blockRef;
  const obj = blockRef(categoryIndex[7]);
  const cResult = obj.c(17);
  blockRef = blockRef.blockRef;
  const category = blockRef.category;
  categoryIndex = blockRef.categoryIndex;
  const onPress = blockRef.onPress;
  const style = blockRef.style;
  const tmp4 = onPress(unicodeShortcutVisible.useState(false), 2);
  unicodeShortcutVisible = tmp4[0];
  let closure_5 = tmp6;
  const obj2 = blockRef(categoryIndex[8]);
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
      const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
      cheapWorkletShallowEqual2;
      const tmp = safeAreaState2;
      if (!cheapWorkletShallowEqual(end, tmp)) {
        let num = 0;
        const result = categoryIndex * metroRequire;
        end = end.end;
        if (!first) {
          num = metroRequire;
        }
        const diff = end - num;
        const tmp2Result = ReanimatedRexport;
        tmp2Result.runOnJS(closure_5)(result > diff);
      }
    }
  };
  fn.__closure = { cheapWorkletShallowEqual: blockRef(categoryIndex[9]).cheapWorkletShallowEqual, categoryIndex, EXPRESSION_FOOTER_HEIGHT, unicodeShortcutVisible, runOnJS: blockRef(categoryIndex[8]).runOnJS, setUnicodeShortcutVisible: tmp4[1] };
  fn.__workletHash = 10939263219533;
  fn.__initData = __initData2;
  ({ cheapWorkletShallowEqual: blockRef(categoryIndex[9]).cheapWorkletShallowEqual, categoryIndex, EXPRESSION_FOOTER_HEIGHT, unicodeShortcutVisible, runOnJS: blockRef(categoryIndex[8]).runOnJS, setUnicodeShortcutVisible: tmp4[1] });
  const animatedReaction = obj2.useAnimatedReaction(E, fn);
  const tmp8 = closure_8();
  if (cResult[0] === category) {
    if (cResult[1] === categoryIndex) {
      let tmp9;
      if (cResult[2] === onPress) {
        tmp9 = cResult[3];
      }
      let tmp10 = null;
      if (unicodeShortcutVisible) {
        let tmp12;
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[10]).intl;
          const stringResult = intl.string(tmp(categoryIndex[10]).t.gg3lOG);
          let num = 4;
          cResult[4] = stringResult;
          tmp12 = stringResult;
        } else {
          tmp12 = cResult[4];
        }
        if (cResult[5] === tmp8.fadedItemOpacity) {
          let tmp14;
          let tmp15;
          if (cResult[6] === tmp8.itemInner) {
            tmp14 = cResult[7];
          }
          if (cResult[8] !== category.id) {
            const tmp18 = jsx(category(categoryIndex[11]), { id: category.id });
            cResult[8] = category.id;
            cResult[9] = tmp18;
            tmp15 = tmp18;
          } else {
            tmp15 = cResult[9];
          }
          if (cResult[10] === tmp14) {
            let tmp19;
            if (cResult[11] === tmp15) {
              tmp19 = cResult[12];
            }
            if (cResult[13] === tmp9) {
              if (cResult[14] === style) {
                let tmp23;
                if (cResult[15] === tmp19) {
                  tmp23 = cResult[16];
                }
                tmp10 = tmp23;
              }
            }
            const tmp25 = jsx(tmp(categoryIndex[12]).PressableOpacity, { style, onPress: tmp9, accessibilityRole: "button", accessibilityLabel: tmp12, children: tmp19 });
            cResult[13] = tmp9;
            cResult[14] = style;
            cResult[15] = tmp19;
            cResult[16] = tmp25;
            tmp23 = tmp25;
          }
          const tmp22 = <closure_5 style={tmp14}>{tmp15}</closure_5>;
          cResult[10] = tmp14;
          cResult[11] = tmp15;
          cResult[12] = tmp22;
          tmp19 = tmp22;
        }
        const items = [, ];
        ({ itemInner: arr[0], fadedItemOpacity: arr[1] } = tmp8);
        cResult[5] = tmp8.fadedItemOpacity;
        cResult[6] = tmp8.itemInner;
        cResult[7] = items;
        tmp14 = items;
      }
      return tmp10;
    }
  }
  class H {
    constructor() {
      onPress(categoryIndex, category);
    }
  }
  cResult[0] = category;
  cResult[1] = categoryIndex;
  cResult[2] = onPress;
  cResult[3] = H;
  tmp9 = H;
}) : ((blockRef) => {
  blockRef = blockRef.blockRef;
  const category = blockRef.category;
  const categoryIndex = blockRef.categoryIndex;
  const onPress = blockRef.onPress;
  let unicodeShortcutVisible;
  const style = blockRef.style;
  let tmp = onPress(unicodeShortcutVisible.useState(false), 2);
  unicodeShortcutVisible = tmp[0];
  let closure_5 = tmp3;
  const tmp4 = blockRef;
  const obj = blockRef(categoryIndex[8]);
  class I {
    constructor() {
      return blockRef.get();
    }
  }
  I.__closure = { blockRef };
  I.__workletHash = 4231989001012;
  I.__initData = __initData3;
  const fn = function f(end, safeAreaState2) {
    if (null != end) {
      const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
      cheapWorkletShallowEqual2;
      const tmp = safeAreaState2;
      if (!cheapWorkletShallowEqual(end, tmp)) {
        let num = 0;
        const result = categoryIndex * metroRequire;
        end = end.end;
        if (!first) {
          num = metroRequire;
        }
        const diff = end - num;
        const tmp2Result = ReanimatedRexport;
        tmp2Result.runOnJS(closure_5)(result > diff);
      }
    }
  };
  fn.__closure = { cheapWorkletShallowEqual: blockRef(categoryIndex[9]).cheapWorkletShallowEqual, categoryIndex, EXPRESSION_FOOTER_HEIGHT, unicodeShortcutVisible, runOnJS: blockRef(categoryIndex[8]).runOnJS, setUnicodeShortcutVisible: tmp[1] };
  fn.__workletHash = 929118758347;
  fn.__initData = __initData4;
  ({ cheapWorkletShallowEqual: blockRef(categoryIndex[9]).cheapWorkletShallowEqual, categoryIndex, EXPRESSION_FOOTER_HEIGHT, unicodeShortcutVisible, runOnJS: blockRef(categoryIndex[8]).runOnJS, setUnicodeShortcutVisible: tmp[1] });
  const animatedReaction = obj.useAnimatedReaction(I, fn);
  const items = [categoryIndex, category, onPress];
  let tmp9 = null;
  const tmp7 = closure_8();
  if (unicodeShortcutVisible) {
    const PressableOpacity = tmp4(tmp5[12]).PressableOpacity;
    const intl = tmp4(tmp5[10]).intl;
    const items1 = [, ];
    ({ itemInner: arr2[0], fadedItemOpacity: arr2[1] } = tmp7);
    tmp9 = <PressableOpacity style={style} onPress={tmp8} accessibilityRole="button" accessibilityLabel={intl.string(tmp4(categoryIndex[10]).t.gg3lOG)}>{null}</PressableOpacity>;
  }
  return tmp9;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesUnicodeShortcutItem.tsx");

export default tmp3;