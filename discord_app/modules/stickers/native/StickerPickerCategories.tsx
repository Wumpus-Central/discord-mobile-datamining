// === Module 10419: StickerPickerCategories ===

// Module 10419 (StickerPickerCategories)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4529 */;
import StickersTypes from "StickersTypes" /* 5268 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const View = fn(17).View;
let useStickerPickerStore = fn(10390).useStickerPickerStore;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AnalyticsPages: closure_9, CATEGORY_ICON_RIPPLE_CONFIG: c10, CATEGORY_ICON_SIZE } = Constants);
const EXPRESSION_FOOTER_HEIGHT = Constants.EXPRESSION_FOOTER_HEIGHT;
const NODE_SIZE = Constants.NODE_SIZE;
const ExpressionPickerViewType = fn(1219).ExpressionPickerViewType;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let obj = { list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT }, item: { height: EXPRESSION_FOOTER_HEIGHT, width: EXPRESSION_FOOTER_HEIGHT, justifyContent: "center", alignItems: "center" }, itemInner: null, fadedItem: { opacity: 0.5 }, activeItem: null, guildIcon: null, guildItemPlaceholder: null };
let size = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
obj.itemInner = size;
obj = { opacity: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.activeItem = obj;
obj.guildIcon = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 };
const createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj.guildItemPlaceholder = createStyles;
let closure_16 = createStyles.createStyles(obj);
let closure_17 = noop.memo((category) => {
  category = category.category;
  const onPressCategory = category.onPressCategory;
  const index = category.index;
  const isActive = category.isActive;
  const tmp = closure_16();
  const AnimateStickers = category(index[10]).AnimateStickers;
  const setting = AnimateStickers.useSetting();
  let obj = category(index[11]);
  let shouldAnimateStickerResult = obj.shouldAnimateSticker(setting, false);
  let guild = null;
  if (category.type === category(index[12]).StickerCategoryTypes.GUILD) {
    guild = GuildStore.getGuild(category.id);
  }
  const items = [category, guild, index, onPressCategory];
  const callback = noop.useCallback(() => {
    let tmp4 = category.type !== StickersTypes.StickerCategoryTypes.PACK;
    if (tmp4) {
      tmp4 = tmp.type !== StickersTypes.StickerCategoryTypes.GUILD;
    }
    if (!tmp4) {
      let obj = { location: null, tab: null, sticker_pack_id: null, guild_id: null };
      obj = { page: constants2.EXPRESSION_PICKER };
      obj.location = obj;
      obj.tab = ExpressionPickerViewType.STICKER;
      obj.sticker_pack_id = tmp.id;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      obj.guild_id = id;
      obj.track(constants.EXPRESSION_PICKER_CATEGORY_SELECTED, obj);
    }
    let tmp12Result;
    if (onPressCategory != null) {
      tmp12Result = tmp12(index);
    }
    return tmp12Result;
  }, items);
  obj = { androidRippleConfig, accessibilityRole: "tab", accessibilityLabel: category.name, accessibilityState: { selected: isActive }, disabled: 0 === category.stickers.length, onPress: null, style: null, children: null };
  let tmp10;
  if (category.stickers.length > 0) {
    tmp10 = callback;
  }
  obj.onPress = tmp10;
  obj.style = tmp.item;
  const items1 = [tmp.itemInner, ];
  obj = { style: items1, children: null };
  items1[1] = isActive ? tmp.activeItem : tmp.fadedItem;
  if (null != category.icon) {
    const obj1 = { style: tmp.guildIcon, disableColor: category.type === tmp2(tmp3[12]).StickerCategoryTypes.PACK, source: tmp2(tmp3[16]).makeSource(category.icon) };
    let tmp9Result = tmp9(tmp2(tmp3[15]).Icon, obj1);
    const tmp2Result = tmp2(tmp3[16]);
  } else if (category.type === tmp2(tmp3[12]).StickerCategoryTypes.GUILD) {
    const obj2 = { guild, loadingStyle: tmp.guildItemPlaceholder, size: tmp2(tmp3[17]).GuildIconSizes.XSMALL, style: tmp.guildIcon };
    tmp9Result = tmp9(onPressCategory(tmp3[17]), obj2);
    const tmp17 = onPressCategory(tmp3[17]);
  } else {
    if ("previewSticker" in category) {
      if (null != category.previewSticker) {
        let previewSticker = category.previewSticker;
      }
      const obj3 = { sticker: previewSticker, animated: null, size: null };
      if (shouldAnimateStickerResult) {
        shouldAnimateStickerResult = isActive;
      }
      obj3.animated = shouldAnimateStickerResult;
      obj3.size = CATEGORY_ICON_SIZE;
      tmp9Result = tmp9(tmp13, obj3);
    }
    previewSticker = category.stickers[0];
  }
  obj.children = tmp9Result;
  obj.children = closure_14(View, obj);
  return closure_14(category(index[14]).PressableOpacity, obj);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerCategories.tsx");

export default function _default(categories) {
  categories = categories.categories;
  const categoryIndex = categories.categoryIndex;
  let first;
  const tmp = closure_16();
  dependencyMap = first.useRef(undefined);
  const ref = first.useRef(null);
  let items = [categories];
  const memo = first.useMemo(() => {
    const items = [categories.length];
    return items;
  }, items);
  let tmp4 = ref(first.useState(null), 2);
  first = tmp4[0];
  closure_5 = tmp4[1];
  let tmp6 = ref(first.useState(false), 2);
  const first1 = tmp6[0];
  useStickerPickerStore = tmp6[1];
  const tmp8 = useStickerPickerStore((setPackToScrollTo) => setPackToScrollTo.setPackToScrollTo);
  closure_8 = tmp8;
  const items1 = [categories];
  const effect = first.useEffect(() => {
    const findIndexResult = categories.findIndex((type) => type.type === categories(closure_1_2[12]).StickerCategoryTypes.PACK);
    if (findIndexResult >= 0) {
      closure_5(findIndexResult);
    }
  }, items1);
  const items2 = [categoryIndex];
  const effect1 = first.useEffect(() => {
    if (null != closure_2.current) {
      if (null != ref.current) {
        const result = categoryIndex * EXPRESSION_FOOTER_HEIGHT;
        let tmp6 = result > tmp.current.end;
        if (!tmp6) {
          tmp6 = result < tmp.current.start;
        }
        if (tmp6) {
          const current = tmp2.current;
          const obj = { section: 0, item: tmp3, animated: false };
          current.scrollToLocation(obj);
        }
        tmp3 = categoryIndex;
      }
    }
  }, items2);
  const items3 = [first, first1];
  const callback = first.useCallback(() => {
    let tmp2 = null != first;
    if (tmp2) {
      tmp2 = null != closure_2.current;
    }
    if (tmp2) {
      let num = 0;
      const result = first * EXPRESSION_FOOTER_HEIGHT;
      if (!first1) {
        num = EXPRESSION_FOOTER_HEIGHT;
      }
      closure_7(result > closure_2.current.end - num);
    }
  }, items3);
  const items4 = [callback];
  const items5 = [categories, tmp8];
  const callback1 = first.useCallback((nativeEvent) => {
    closure_2.current = { start: nativeEvent.nativeEvent.contentOffset.x, end: nativeEvent.nativeEvent.contentOffset.x + nativeEvent.nativeEvent.layoutMeasurement.width };
    callback();
  }, items4);
  const callback2 = first.useCallback((arg0) => {
    closure_8(categories[arg0].id);
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items5);
  const items6 = [first, callback2];
  const items7 = [callback];
  const callback3 = first.useCallback(() => {
    if (null != first) {
      callback2(tmp);
      closure_7(false);
    }
  }, items6);
  const items8 = [categories, categoryIndex, callback2];
  const callback4 = first.useCallback((nativeEvent) => {
    if (null == closure_2.current) {
      const obj = { start: 0, end: nativeEvent.nativeEvent.layout.width };
      tmp.current = obj;
      callback();
    }
  }, items7);
  const callback5 = first.useCallback((arg0, index) => closure_2_14(closure_17, { category: categories[index], index, isActive: index === categoryIndex, onPressCategory: callback2 }), items8);
  let obj = { portalHostName: "expression-footer", style: categories.style, children: null };
  const tmp17 = categoryIndex;
  const tmp19 = categoryIndex(10358)();
  const tmp20 = closure_15;
  obj = { estimatedListSize: "windowSize", horizontal: true, itemSize: EXPRESSION_FOOTER_HEIGHT, keyboardShouldPersistTaps: "always", listId: ExpressionPickerViewType.STICKER, onLayout: callback4, onScroll: callback1, placeholderConfig: tmp19, ref, scrollReporting: "callbacks", sections: memo, renderItem: callback5, showsHorizontalScrollIndicator: false, style: tmp.list };
  const items9 = [closure_14(categoryIndex(7055), obj), ];
  let tmp22Result = null != first && first1;
  if (tmp22Result) {
    obj = { onPress: callback3, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = categories(1114).intl;
    obj.accessibilityLabel = intl.string(categories(1114).t.rzCcjK);
    const obj1 = { style: null, children: null };
    const items10 = [, ];
    ({ item: arr11[0], fadedItem: arr11[1] } = tmp);
    obj1.style = items10;
    const obj2 = { style: tmp.guildIcon, source: tmp17(10420) };
    obj1.children = tmp22(categories(1178).Icon, obj2);
    obj.children = tmp22(closure_5, obj1);
    tmp22Result = tmp22(categories(5123).PressableOpacity, obj);
  }
  items9[1] = tmp22Result;
  obj.children = items9;
  return tmp20(categoryIndex(10359), obj);
};