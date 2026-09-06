// === Module 10348: EmojiPickerCategoriesItem ===

// Module 10348 (EmojiPickerCategoriesItem)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let EmojiCategoryTypes = fn(5463).EmojiCategoryTypes;
const Constants = fn(1074);
({ CATEGORY_ICON_RIPPLE_CONFIG: closure_7, CATEGORY_ICON_SIZE, NODE_SIZE } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let obj = { itemInner: null, fadedItem: null, activeItem: null, guildItem: null, lockContainer: null, lock: null };
let size = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
obj.itemInner = size;
obj = { backgroundColor: nativeDefault.colors.ICON_TRANSPARENT };
obj.fadedItem = obj;
const createStyles = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.activeItem = createStyles;
obj.guildItem = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 };
const size1 = { width: 12, height: 12, position: "absolute", bottom: 0, end: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj.lockContainer = size1;
const size2 = { width: 7.5, height: 7.5, tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj.lock = size2;
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function EmojiPickerCategoriesItemTsx1(){const{withTiming,categoryIndexActive,index,timingStandard,styleColorActive,styleColorTransparent}=this.__closure;return{opacity:withTiming(categoryIndexActive.get()===index?1:0.5,timingStandard),backgroundColor:categoryIndexActive.get()===index?styleColorActive:styleColorTransparent};}" };
const __initData2 = { code: "function EmojiPickerCategoriesItemTsx2(){const{categoryIndexActive,index}=this.__closure;return categoryIndexActive.get()===index;}" };
const __initData3 = { code: "function EmojiPickerCategoriesItemTsx3(active,prev){const{runOnJS,setIsSelected}=this.__closure;if(active!==prev){runOnJS(setIsSelected)(active);}}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesItem.tsx");

export default noop.memo(function EmojiPickerCategoriesItem(category) {
  category = category.category;
  const categoryIndexActive = category.categoryIndexActive;
  const handlePressCategory = category.handlePressCategory;
  const index = category.index;
  let locked = category.locked;
  EmojiCategoryTypes = undefined;
  ({ loadingStyle, style } = category);
  const tmp = closure_10();
  const backgroundColor = tmp.activeItem.backgroundColor;
  const backgroundColor2 = tmp.fadedItem.backgroundColor;
  let obj = category(handlePressCategory[8]);
  class T {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[9]);
      obj2 = categoryIndexActive;
      num = 0.5;
      tmp3 = index;
      if (categoryIndexActive.get() === index) {
        num = 1;
      }
      obj = { opacity: obj.withTiming(num, tmp(tmp2[10]).timingStandard), backgroundColor: obj2.get() === tmp3 ? backgroundColor : backgroundColor };
      return obj;
    }
  }
  obj = { withTiming: category(handlePressCategory[9]).withTiming, categoryIndexActive, index, timingStandard: category(handlePressCategory[10]).timingStandard, styleColorActive: backgroundColor, styleColorTransparent: backgroundColor2 };
  T.__closure = obj;
  T.__workletHash = 3335518235623;
  T.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(T);
  const tmp5 = index(backgroundColor.useState(() => categoryIndexActive.get() === index), 2);
  EmojiCategoryTypes = tmp6;
  let obj2 = category(handlePressCategory[8]);
  const fn = function p() {
    return categoryIndexActive.get() === index;
  };
  fn.__closure = { categoryIndexActive, index };
  fn.__workletHash = 12996370114251;
  fn.__initData = __initData2;
  class E {
    constructor(arg0, arg1) {
      if (category !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[8]);
        tmp3 = closure_6;
        tmp4 = obj.runOnJS(closure_6)(category);
      }
      return;
    }
  }
  obj = { runOnJS: category(handlePressCategory[8]).runOnJS, setIsSelected: tmp6 };
  E.__closure = obj;
  E.__workletHash = 6056273557261;
  E.__initData = __initData3;
  const animatedReaction = obj2.useAnimatedReaction(fn, E);
  const items = [handlePressCategory, index, category];
  const callback = backgroundColor.useCallback(() => handlePressCategory(index, category), items);
  const obj1 = { androidRippleConfig, style, onPress: callback, accessibilityRole: "tab", accessibilityLabel: null, accessibilityState: null, children: null };
  if (category.type === EmojiCategoryTypes.GUILD) {
    let name = category.guild.name;
  } else {
    name = category.name;
  }
  obj1.accessibilityLabel = name;
  obj1.accessibilityState = { selected: tmp5[0] };
  obj2 = { style: null, children: null };
  const items1 = [tmp.itemInner, animatedStyle];
  obj2.style = items1;
  if (category.type === EmojiCategoryTypes.GUILD) {
    const obj3 = { guild: category.guild, loadingStyle, size: tmp2(tmp3[12]).GuildIconSizes.XSMALL, style: tmp.guildItem };
    let tmp9Result = closure_8(tmp12(tmp3[12]), obj3);
    const tmp12Result = tmp12(tmp3[12]);
  } else {
    const obj4 = { id: category.id };
    tmp9Result = closure_8(tmp12(tmp3[13]), obj4);
  }
  const items2 = [tmp9Result, ];
  if (locked) {
    const obj5 = { style: tmp.lockContainer, children: null };
    const obj6 = { style: tmp.lock };
    obj5.children = closure_8(tmp2(tmp3[14]).LockIcon, obj6);
    locked = closure_8(backgroundColor2, obj5);
  }
  items2[1] = locked;
  obj2.children = items2;
  obj1.children = closure_9(categoryIndexActive(handlePressCategory[8]).View, obj2);
  return closure_8(category(handlePressCategory[11]).PressableOpacity, obj1);
});