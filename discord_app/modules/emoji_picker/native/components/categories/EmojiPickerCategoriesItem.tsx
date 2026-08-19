// === Module 9424: ? ===

// Module 9424
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { EmojiCategoryTypes } from "EmojiCategoryTypes" /* 6731 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
let c4 = importAllResult;
({ CATEGORY_ICON_RIPPLE_CONFIG: error, CATEGORY_ICON_SIZE, NODE_SIZE } = ME);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let obj = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
const createCacheKey = { backgroundColor: ThemesDefault.colors.ICON_TRANSPARENT };
obj[1] = createCacheKey;
obj[2] = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj[3] = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 };
obj[4] = { width: 12, height: 12, position: "absolute", bottom: 0, end: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj[5] = { width: 7.5, height: 7.5, tintColor: ThemesDefault.colors.TEXT_DEFAULT };
let closure_10 = createCacheKey.createStyles(obj);
let closure_11 = { code: "function EmojiPickerCategoriesItemTsx1(){const{withTiming,categoryIndexActive,index,timingStandard,styleColorActive,styleColorTransparent}=this.__closure;return{opacity:withTiming(categoryIndexActive.get()===index?1:0.5,timingStandard),backgroundColor:categoryIndexActive.get()===index?styleColorActive:styleColorTransparent};}" };
let closure_12 = { code: "function EmojiPickerCategoriesItemTsx2(){const{categoryIndexActive,index}=this.__closure;return categoryIndexActive.get()===index;}" };
let closure_13 = { code: "function EmojiPickerCategoriesItemTsx3(active,prev){const{runOnJS,setIsSelected}=this.__closure;if(active!==prev){runOnJS(setIsSelected)(active);}}" };
const memoResult = importAllResult.memo(function EmojiPickerCategoriesItem(category) {
  category = category.category;
  const categoryIndexActive = category.categoryIndexActive;
  const handlePressCategory = category.handlePressCategory;
  const index = category.index;
  let locked = category.locked;
  EmojiCategoryTypes = undefined;
  ({ loadingStyle, style } = category);
  const tmp = callback();
  const backgroundColor = tmp.activeItem.backgroundColor;
  const backgroundColor2 = tmp.fadedItem.backgroundColor;
  let obj = category(handlePressCategory[8]);
  class T {
    constructor() {
      tmp = category;
      tmp2 = handlePressCategory;
      obj = category(handlePressCategory[9]);
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
  T.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(T);
  const tmp5 = index(backgroundColor.useState(() => categoryIndexActive.get() === index), 2);
  EmojiCategoryTypes = tmp6;
  let obj2 = category(handlePressCategory[8]);
  const fn = function p() {
    return categoryIndexActive.get() === index;
  };
  fn.__closure = { categoryIndexActive, index };
  fn.__workletHash = 12996370114251;
  fn.__initData = closure_12;
  class E {
    constructor(arg0, arg1) {
      if (category !== arg1) {
        tmp = category;
        tmp2 = handlePressCategory;
        obj = category(handlePressCategory[8]);
        tmp3 = closure_6;
        tmp4 = obj.runOnJS(closure_6)(category);
      }
      return;
    }
  }
  obj = { runOnJS: category(handlePressCategory[8]).runOnJS, setIsSelected: tmp6 };
  E.__closure = obj;
  E.__workletHash = 6056273557261;
  E.__initData = closure_13;
  const animatedReaction = obj2.useAnimatedReaction(fn, E);
  const items = [handlePressCategory, index, category];
  callback = backgroundColor.useCallback(() => handlePressCategory(index, category), items);
  obj1 = { androidRippleConfig: closure_7, style, onPress: callback, accessibilityRole: "tab", accessibilityLabel: null, accessibilityState: null, children: null };
  if (category.type === EmojiCategoryTypes.GUILD) {
    let name = category.guild.name;
  } else {
    name = category.name;
  }
  obj1[4] = name;
  obj1[5] = { selected: tmp5[0] };
  obj2 = { style: items1, children: null };
  items1 = [tmp.itemInner, animatedStyle];
  if (category.type === EmojiCategoryTypes.GUILD) {
    const obj3 = { guild: null, loadingStyle: null, size: null, style: null };
    obj3[0] = category.guild;
    obj3[1] = loadingStyle;
    obj3[2] = tmp2(tmp3[12]).GuildIconSizes.XSMALL;
    obj3[3] = tmp.guildItem;
    let tmp9Result = callback(tmp12(tmp3[12]), obj3);
    const tmp12Result = tmp12(tmp3[12]);
  } else {
    const obj4 = { id: null };
    obj4[0] = category.id;
    tmp9Result = callback(tmp12(tmp3[13]), obj4);
  }
  const items2 = [tmp9Result, ];
  if (locked) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.lockContainer;
    const obj6 = { style: null };
    obj6[0] = tmp.lock;
    obj5[1] = callback(tmp2(tmp3[14]).LockIcon, obj6);
    locked = callback(backgroundColor2, obj5);
  }
  items2[1] = locked;
  obj2[1] = items2;
  obj1[6] = callback2(categoryIndexActive(handlePressCategory[8]).View, obj2);
  return callback(category(handlePressCategory[11]).PressableOpacity, obj1);
});
const result = require("obj132").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesItem.tsx");

export default memoResult;