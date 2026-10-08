// === Module 9495: EmojiPickerCategoriesItem ===

// Module 9495 (EmojiPickerCategoriesItem)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import timingPresets from "timingPresets" /* 5094 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let EmojiCategoryTypes = fn(5996).EmojiCategoryTypes;
const Constants = fn(1085);
({ CATEGORY_ICON_RIPPLE_CONFIG: closure_7, CATEGORY_ICON_SIZE, NODE_SIZE } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj = { itemInner: null, fadedItem: { backgroundColor: nativeDefault.colors.ICON_TRANSPARENT }, activeItem: null, guildItem: null, lockContainer: null, lock: null };
let size = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
obj.itemInner = size;
let obj3 = { backgroundColor: nativeDefault.colors.ICON_TRANSPARENT };
obj.activeItem = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.guildItem = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 };
const size1 = { width: 12, height: 12, position: "absolute", bottom: 0, end: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj.lockContainer = size1;
const size2 = { width: 7.5, height: 7.5, tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj.lock = size2;
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function EmojiPickerCategoriesItemTsx1(){const{withTiming,categoryIndexActive,index,timingStandard,styleColorActive,styleColorTransparent}=this.__closure;return{opacity:withTiming(categoryIndexActive.get()===index?1:0.5,timingStandard),backgroundColor:categoryIndexActive.get()===index?styleColorActive:styleColorTransparent};}" };
const __initData2 = { code: "function EmojiPickerCategoriesItemTsx2(){const{categoryIndexActive,index}=this.__closure;return categoryIndexActive.get()===index;}" };
const __initData3 = { code: "function EmojiPickerCategoriesItemTsx3(active,prev){const{runOnJS,setIsSelected}=this.__closure;if(active!==prev){runOnJS(setIsSelected)(active);}}" };
const __initData4 = { code: "function EmojiPickerCategoriesItemTsx4(){const{withTiming,categoryIndexActive,index,timingStandard,styleColorActive,styleColorTransparent}=this.__closure;return{opacity:withTiming(categoryIndexActive.get()===index?1:0.5,timingStandard),backgroundColor:categoryIndexActive.get()===index?styleColorActive:styleColorTransparent};}" };
const __initData5 = { code: "function EmojiPickerCategoriesItemTsx5(){const{categoryIndexActive,index}=this.__closure;return categoryIndexActive.get()===index;}" };
const __initData6 = { code: "function EmojiPickerCategoriesItemTsx6(active,prev){const{runOnJS,setIsSelected}=this.__closure;if(active!==prev){runOnJS(setIsSelected)(active);}}" };
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesItem.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPickerCategoriesItem(category) {
  const cResult = type(handlePressCategory[9]).c(32);
  type = category.category;
  const categoryIndexActive = category.categoryIndexActive;
  handlePressCategory = category.handlePressCategory;
  const index = category.index;
  ({ loadingStyle, locked, style } = category);
  const tmp4 = closure_10();
  const backgroundColor = tmp4.activeItem.backgroundColor;
  const backgroundColor2 = tmp4.fadedItem.backgroundColor;
  let obj = type(handlePressCategory[9]);
  const fn = function u() {
    let num = 0.5;
    if (categoryIndexActive.get() === index) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, timingPresets.timingStandard), backgroundColor: categoryIndexActive.get() === index ? backgroundColor : backgroundColor2 };
  };
  const obj2 = type(handlePressCategory[10]);
  fn.__closure = { withTiming: type(handlePressCategory[11]).withTiming, categoryIndexActive, index, timingStandard: type(handlePressCategory[12]).timingStandard, styleColorActive: backgroundColor, styleColorTransparent: backgroundColor2 };
  fn.__workletHash = 3335518235623;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === categoryIndexActive) {
    if (cResult[1] === index) {
      let tmp6 = cResult[2];
    }
    [tmp10, tmp11] = index(backgroundColor.useState(tmp6), 2);
    EmojiCategoryTypes = tmp11;
    const tmp9 = index(backgroundColor.useState(tmp6), 2);
    class L {
      constructor() {
        return categoryIndexActive.get() === index;
      }
    }
    const obj4 = { categoryIndexActive, index };
    L.__closure = obj4;
    L.__workletHash = 12996370114251;
    L.__initData = __initData2;
    const fn3 = function j(arg0, arg1) {
      if (arg0 !== arg1) {
        ReanimatedRexport.runOnJS(closure_6)(arg0);
      }
    };
    const obj5 = { runOnJS: tmp(tmp2[10]).runOnJS, setIsSelected: tmp11 };
    fn3.__closure = obj5;
    fn3.__workletHash = 6056273557261;
    fn3.__initData = __initData3;
    const animatedReaction = tmp(tmp2[10]).useAnimatedReaction(L, fn3);
    if (cResult[3] === type) {
      if (cResult[4] === handlePressCategory) {
        if (cResult[5] === index) {
          let tmp15 = cResult[6];
        }
        if (type.type === EmojiCategoryTypes.GUILD) {
          let name = type.guild.name;
        } else {
          name = type.name;
        }
        if (cResult[7] !== tmp10) {
          const obj6 = { selected: tmp10 };
          cResult[7] = tmp10;
          cResult[8] = obj6;
          let tmp17 = obj6;
        } else {
          tmp17 = cResult[8];
        }
        if (cResult[9] === tmp4.itemInner) {
          if (cResult[10] === animatedStyle) {
            let tmp18 = cResult[11];
          }
          if (cResult[12] === type.guild) {
            if (cResult[13] === type.id) {
              if (cResult[14] === type.type) {
                if (cResult[15] === loadingStyle) {
                  if (cResult[16] === tmp4.guildItem) {
                    if (cResult[18] === locked) {
                      if (cResult[19] === tmp4.lock) {
                        if (cResult[20] === tmp4.lockContainer) {
                          let tmp27 = cResult[21];
                        }
                        if (cResult[22] === tmp18) {
                          if (cResult[23] === tmp19) {
                            if (cResult[24] === tmp27) {
                              let tmp31 = cResult[25];
                            }
                            if (cResult[26] === tmp15) {
                              if (cResult[27] === style) {
                                if (cResult[28] === name) {
                                  if (cResult[29] === tmp17) {
                                    if (cResult[30] === tmp31) {
                                      let tmp35 = cResult[31];
                                    }
                                    return tmp35;
                                  }
                                }
                              }
                            }
                            const obj7 = { androidRippleConfig, style, onPress: tmp15, accessibilityRole: "tab", accessibilityLabel: name, accessibilityState: null, children: null };
                            class L {
                              constructor() {
                                return categoryIndexActive.get() === index;
                              }
                            }
                            obj7.children = tmp31;
                            const tmp38 = closure_8(tmp(tmp2[16]).PressableOpacity, obj7);
                            cResult[26] = tmp15;
                            cResult[27] = style;
                            cResult[28] = name;
                            cResult[29] = tmp17;
                            cResult[30] = tmp31;
                            cResult[31] = tmp38;
                            tmp35 = tmp38;
                          }
                        }
                        const obj8 = { style: tmp18, children: null };
                        const items = [tmp19, tmp27];
                        class L {
                          constructor() {
                            return categoryIndexActive.get() === index;
                          }
                        }
                        const tmp34 = closure_9(categoryIndexActive(tmp2[10]).View, obj8);
                        cResult[22] = tmp18;
                        cResult[23] = tmp19;
                        cResult[24] = tmp27;
                        cResult[25] = tmp34;
                        tmp31 = tmp34;
                      }
                    }
                    let tmp28 = locked;
                    if (locked) {
                      const obj9 = { style: tmp4.lockContainer, children: null };
                      const obj10 = { style: tmp4.lock };
                      obj9.children = closure_8(tmp(tmp2[15]).LockIcon, obj10);
                      tmp28 = closure_8(backgroundColor2, obj9);
                    }
                    cResult[18] = locked;
                    cResult[19] = tmp4.lock;
                    class L {
                      constructor() {
                        return categoryIndexActive.get() === index;
                      }
                    }
                    cResult[21] = tmp28;
                    tmp27 = tmp28;
                  }
                }
              }
            }
          }
          if (type.type === tmp16.GUILD) {
            const obj11 = { guild: type.guild, loadingStyle, size: tmp(tmp2[13]).GuildIconSizes.XSMALL, style: tmp4.guildItem };
            let tmp22 = closure_8(categoryIndexActive(tmp2[13]), obj11);
            const tmp25 = categoryIndexActive(tmp2[13]);
          } else {
            const obj12 = { id: type.id };
            tmp22 = closure_8(categoryIndexActive(tmp2[14]), obj12);
          }
          cResult[12] = type.guild;
          ({ id: tmp3[13], type } = type);
          class L {
            constructor() {
              return categoryIndexActive.get() === index;
            }
          }
          cResult[15] = loadingStyle;
          loadingStyle = tmp4.guildItem;
          cResult[16] = loadingStyle;
          cResult[17] = tmp22;
        }
        const items1 = [tmp4.itemInner, animatedStyle];
        class L {
          constructor() {
            return categoryIndexActive.get() === index;
          }
        }
        cResult[10] = animatedStyle;
        cResult[11] = items1;
        tmp18 = items1;
        tmp16 = EmojiCategoryTypes;
      }
    }
    class D {
      constructor() {
        return handlePressCategory(index, category);
      }
    }
    cResult[3] = type;
    cResult[4] = handlePressCategory;
    cResult[5] = index;
    cResult[6] = D;
    tmp15 = D;
    const tmpResult = tmp(tmp2[10]);
  }
  const fn2 = function y() {
    return categoryIndexActive.get() === index;
  };
  cResult[0] = categoryIndexActive;
  cResult[1] = index;
  cResult[2] = fn2;
  tmp6 = fn2;
  const obj3 = { withTiming: type(handlePressCategory[11]).withTiming, categoryIndexActive, index, timingStandard: type(handlePressCategory[12]).timingStandard, styleColorActive: backgroundColor, styleColorTransparent: backgroundColor2 };
}) : (function EmojiPickerCategoriesItem(category) {
  category = category.category;
  const categoryIndexActive = category.categoryIndexActive;
  const handlePressCategory = category.handlePressCategory;
  const index = category.index;
  let locked = category.locked;
  ({ loadingStyle, style } = category);
  const tmp = closure_10();
  const backgroundColor = tmp.activeItem.backgroundColor;
  const backgroundColor2 = tmp.fadedItem.backgroundColor;
  const fn = function p() {
    let num = 0.5;
    if (categoryIndexActive.get() === index) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, timingPresets.timingStandard), backgroundColor: categoryIndexActive.get() === index ? backgroundColor : backgroundColor2 };
  };
  let obj = category(handlePressCategory[10]);
  fn.__closure = { withTiming: category(handlePressCategory[11]).withTiming, categoryIndexActive, index, timingStandard: category(handlePressCategory[12]).timingStandard, styleColorActive: backgroundColor, styleColorTransparent: backgroundColor2 };
  fn.__workletHash = 15742913042626;
  fn.__initData = __initData4;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const tmp5 = index(backgroundColor.useState(() => categoryIndexActive.get() === index), 2);
  EmojiCategoryTypes = tmp6;
  const obj2 = { withTiming: category(handlePressCategory[11]).withTiming, categoryIndexActive, index, timingStandard: category(handlePressCategory[12]).timingStandard, styleColorActive: backgroundColor, styleColorTransparent: backgroundColor2 };
  const fn2 = function f() {
    return categoryIndexActive.get() === index;
  };
  fn2.__closure = { categoryIndexActive, index };
  fn2.__workletHash = 5696781581292;
  fn2.__initData = __initData5;
  class T {
    constructor(arg0, arg1) {
      if (category !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[10]);
        tmp3 = closure_6;
        tmp4 = obj.runOnJS(closure_6)(category);
      }
      return;
    }
  }
  const obj3 = category(handlePressCategory[10]);
  T.__closure = { runOnJS: category(handlePressCategory[10]).runOnJS, setIsSelected: tmp5[1] };
  T.__workletHash = 12572214271848;
  T.__initData = __initData6;
  const animatedReaction = obj3.useAnimatedReaction(fn2, T);
  const items = [handlePressCategory, index, category];
  const callback = backgroundColor.useCallback(() => handlePressCategory(index, category), items);
  const obj5 = { androidRippleConfig, style, onPress: callback, accessibilityRole: "tab", accessibilityLabel: null, accessibilityState: null, children: null };
  if (category.type === EmojiCategoryTypes.GUILD) {
    let name = category.guild.name;
  } else {
    name = category.name;
  }
  obj5.accessibilityLabel = name;
  obj5.accessibilityState = { selected: tmp5[0] };
  const obj6 = { style: null, children: null };
  const items1 = [tmp.itemInner, animatedStyle];
  obj6.style = items1;
  if (category.type === EmojiCategoryTypes.GUILD) {
    const obj7 = { guild: category.guild, loadingStyle, size: tmp2(tmp3[13]).GuildIconSizes.XSMALL, style: tmp.guildItem };
    let tmp9Result = closure_8(tmp12(tmp3[13]), obj7);
    const tmp12Result = tmp12(tmp3[13]);
  } else {
    const obj8 = { id: category.id };
    tmp9Result = closure_8(tmp12(tmp3[14]), obj8);
  }
  const items2 = [tmp9Result, ];
  if (locked) {
    const obj9 = { style: tmp.lockContainer, children: null };
    const obj10 = { style: tmp.lock };
    obj9.children = closure_8(tmp2(tmp3[15]).LockIcon, obj10);
    locked = closure_8(backgroundColor2, obj9);
  }
  items2[1] = locked;
  obj6.children = items2;
  obj5.children = closure_9(categoryIndexActive(handlePressCategory[10]).View, obj6);
  return closure_8(category(handlePressCategory[16]).PressableOpacity, obj5);
}));