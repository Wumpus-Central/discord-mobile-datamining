// === Module 10210: EmojiPickerCategoriesItem ===

// Module 10210 (EmojiPickerCategoriesItem)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5400 */;
import timingPresets from "timingPresets" /* 5403 */;
import GuildIcon from "GuildIcon" /* 7045 */;
import Pressables from "Pressables" /* 7068 */;
import LockIcon from "LockIcon" /* 8759 */;
import EmojiPickerCategoryIconDefault from "EmojiPickerCategoryIcon" /* 10211 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;
const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const EmojiCategoryTypes = fn(6879).EmojiCategoryTypes;
const Constants = fn(1072);
({ CATEGORY_ICON_RIPPLE_CONFIG: metroImportDefault, CATEGORY_ICON_SIZE, NODE_SIZE } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5170);
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
let closure_11 = { code: "(function EmojiPickerCategoriesItemTsx1(){let[withTiming,categoryIndexActive,index,timingStandard,styleColorActive,styleColorTransparent]=this.__closure;return{opacity:withTiming(categoryIndexActive.get()===index?1:0.5,timingStandard),backgroundColor:categoryIndexActive.get()===index?styleColorActive:styleColorTransparent};})" };
let closure_12 = { code: "(function EmojiPickerCategoriesItemTsx2(){let[categoryIndexActive,index]=this.__closure;return categoryIndexActive.get()===index;})" };
let closure_13 = { code: "(function EmojiPickerCategoriesItemTsx3(active,prev){let[scheduleOnRN,setIsSelected]=this.__closure;if(active!==prev){scheduleOnRN(setIsSelected,active);}})" };
let obj4 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesItem.tsx");

export default noop.memo(function EmojiPickerCategoriesItem(category) {
  category = category.category;
  const categoryIndexActive = category.categoryIndexActive;
  const handlePressCategory = category.handlePressCategory;
  const index = category.index;
  let locked = category.locked;
  ({ loadingStyle, style } = category);
  const tmp = closure_10();
  items = [closure_11, timing_timing.withTiming, categoryIndexActive, index, timingPresets.timingStandard, tmp.activeItem.backgroundColor, tmp.fadedItem.backgroundColor];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  class EmojiPickerCategoriesItemTsx1 {
    constructor() {
      obj = closure_1;
      tmp = closure_0;
      num = 0.5;
      tmp2 = closure_2;
      if (closure_1.get() === closure_2) {
        num = 1;
      }
      obj1 = { opacity: tmp(num, closure_3), backgroundColor: obj.get() === tmp2 ? closure_4 : closure_5 };
      return obj1;
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
  EmojiPickerCategoriesItemTsx1.__closure = items1;
  EmojiPickerCategoriesItemTsx1.__workletHash = 13103741049438;
  EmojiPickerCategoriesItemTsx1.__initData = tmp4;
  const animatedStyle = _mod1652.useAnimatedStyle(EmojiPickerCategoriesItemTsx1);
  [tmp13, tmp14] = noop.useState(() => _undefined2.get() === c3);
  const tmp12 = _slicedToArray(noop.useState(() => _undefined2.get() === c3), 2);
  const items2 = [closure_12, categoryIndexActive, index];
  c0 = undefined;
  c1 = undefined;
  [tmp15, tmp16, tmp17] = items2;
  class EmojiPickerCategoriesItemTsx2 {
    constructor() {
      return closure_0.get() === closure_1;
    }
  }
  const items3 = [tmp16, tmp17];
  EmojiPickerCategoriesItemTsx2.__closure = items3;
  EmojiPickerCategoriesItemTsx2.__workletHash = 5439677363570;
  EmojiPickerCategoriesItemTsx2.__initData = tmp15;
  const items4 = [closure_13, _mod1705.scheduleOnRN, tmp14];
  c0 = undefined;
  c1 = undefined;
  [tmp18, tmp19, tmp20] = items4;
  class EmojiPickerCategoriesItemTsx3 {
    constructor(arg0, arg1) {
      if (category !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, category);
      }
      return;
    }
  }
  const items5 = [tmp19, tmp20];
  EmojiPickerCategoriesItemTsx3.__closure = items5;
  EmojiPickerCategoriesItemTsx3.__workletHash = 17327361424281;
  EmojiPickerCategoriesItemTsx3.__initData = tmp18;
  const animatedReaction = _mod1652.useAnimatedReaction(EmojiPickerCategoriesItemTsx2, EmojiPickerCategoriesItemTsx3);
  const items6 = [handlePressCategory, index, category];
  const callback = noop.useCallback(() => _undefined3(c3, c0), items6);
  const obj3 = { androidRippleConfig, style, onPress: callback, accessibilityRole: "tab", accessibilityLabel: null, accessibilityState: null, children: null };
  if (category.type === EmojiCategoryTypes.GUILD) {
    let name = category.guild.name;
  } else {
    name = category.name;
  }
  obj3.accessibilityLabel = name;
  obj3.accessibilityState = { selected: tmp13 };
  const obj4 = { style: null, children: null };
  const items7 = [tmp.itemInner, animatedStyle];
  obj4.style = items7;
  if (category.type === EmojiCategoryTypes.GUILD) {
    const obj5 = { guild: category.guild, loadingStyle, size: GuildIcon.GuildIconSizes.XSMALL, style: tmp.guildItem };
    let tmp23Result = React5(GuildIconDefault, obj5);
    const tmp26Result = GuildIconDefault;
  } else {
    const obj6 = { id: category.id };
    tmp23Result = React5(EmojiPickerCategoryIconDefault, obj6);
  }
  const items8 = [tmp23Result, ];
  if (locked) {
    const obj7 = { style: tmp.lockContainer, children: null };
    const obj8 = { style: tmp.lock };
    obj7.children = React5(LockIcon.LockIcon, obj8);
    locked = React5(View, obj7);
  }
  items8[1] = locked;
  obj4.children = items8;
  obj3.children = React6(_modDef1652.View, obj4);
  return React5(Pressables.PressableOpacity, obj3);
});