// discord_app/modules/stickers/native/StickerPickerCategories.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../stores/GuildStore.tsx";
import { useStickerPickerStore } from "StickerPickerStore.tsx";
import ME from "../../../Constants.tsx";
import { ExpressionPickerViewType } from "../../expression_picker/ExpressionPickerConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c4 = importAllResult;
({ AnalyticEvents: closure_8, AnalyticsPages: c9, CATEGORY_ICON_RIPPLE_CONFIG: c10, CATEGORY_ICON_SIZE } = ME);
const EXPRESSION_FOOTER_HEIGHT = ME.EXPRESSION_FOOTER_HEIGHT;
const NODE_SIZE = ME.NODE_SIZE;
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
obj = { list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT }, item: { height: EXPRESSION_FOOTER_HEIGHT, width: EXPRESSION_FOOTER_HEIGHT, justifyContent: "center", alignItems: "center" }, itemInner: obj, fadedItem: { opacity: 0.5 }, activeItem: null, guildIcon: null, guildItemPlaceholder: null };
obj = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
createCacheKey = { opacity: 1, backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj[4] = createCacheKey;
obj[5] = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 };
obj[6] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
let closure_16 = createCacheKey.createStyles(obj);
let closure_17 = importAllResult.memo((category) => {
  category = category.category;
  const onPressCategory = category.onPressCategory;
  const index = category.index;
  const isActive = category.isActive;
  let guild;
  const tmp = callback2();
  const AnimateStickers = category(index[10]).AnimateStickers;
  const setting = AnimateStickers.useSetting();
  let obj = category(index[11]);
  let shouldAnimateStickerResult = obj.shouldAnimateSticker(setting, false);
  guild = null;
  if (category.type === category(index[12]).StickerCategoryTypes.GUILD) {
    guild = guild.getGuild(category.id);
  }
  const items = [category, guild, index, onPressCategory];
  const callback = importAllResult.useCallback(() => {
    let tmp4 = category.type !== category(index[12]).StickerCategoryTypes.PACK;
    if (tmp4) {
      tmp4 = tmp.type !== category(tmp3[12]).StickerCategoryTypes.GUILD;
    }
    if (!tmp4) {
      let obj = onPressCategory(tmp3[13]);
      obj = { location: null, tab: null, sticker_pack_id: null, guild_id: null };
      obj = { page: null };
      obj[0] = closure_1_9.EXPRESSION_PICKER;
      obj[0] = obj;
      obj[1] = closure_1_13.STICKER;
      obj[2] = tmp.id;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      obj[3] = id;
      obj.track(closure_1_8.EXPRESSION_PICKER_CATEGORY_SELECTED, obj);
    }
    let tmp12Result;
    if (onPressCategory != null) {
      tmp12Result = tmp12(index);
    }
    return tmp12Result;
  }, items);
  obj = { androidRippleConfig: closure_10, accessibilityRole: "tab", accessibilityLabel: category.name, accessibilityState: { selected: isActive }, disabled: 0 === category.stickers.length, onPress: null, style: null, children: null };
  let tmp10;
  if (category.stickers.length > 0) {
    tmp10 = callback;
  }
  obj[5] = tmp10;
  obj[6] = tmp.item;
  const items1 = [tmp.itemInner, ];
  obj = { style: items1, children: null };
  items1[1] = isActive ? tmp.activeItem : tmp.fadedItem;
  if (null != category.icon) {
    obj1 = { style: null, disableColor: null, source: null };
    obj1[0] = tmp.guildIcon;
    obj1[1] = category.type === tmp2(tmp3[12]).StickerCategoryTypes.PACK;
    obj1[2] = tmp2(tmp3[16]).makeSource(category.icon);
    let tmp9Result = tmp9(tmp2(tmp3[15]).Icon, obj1);
    const tmp2Result = tmp2(tmp3[16]);
  } else if (category.type === tmp2(tmp3[12]).StickerCategoryTypes.GUILD) {
    const obj2 = { guild: null, loadingStyle: null, size: null, style: null };
    obj2[0] = guild;
    obj2[1] = tmp.guildItemPlaceholder;
    obj2[2] = tmp2(tmp3[17]).GuildIconSizes.XSMALL;
    obj2[3] = tmp.guildIcon;
    tmp9Result = tmp9(onPressCategory(tmp3[17]), obj2);
    const tmp17 = onPressCategory(tmp3[17]);
  } else {
    if ("previewSticker" in category) {
      if (null != category.previewSticker) {
        let previewSticker = category.previewSticker;
      }
      const obj3 = { sticker: null, animated: null, size: null };
      obj3[0] = previewSticker;
      if (shouldAnimateStickerResult) {
        shouldAnimateStickerResult = isActive;
      }
      obj3[1] = shouldAnimateStickerResult;
      obj3[2] = CATEGORY_ICON_SIZE;
      tmp9Result = tmp9(tmp13, obj3);
    }
    previewSticker = category.stickers[0];
  }
  obj[1] = tmp9Result;
  obj[7] = closure_14(View, obj);
  return closure_14(category(index[14]).PressableOpacity, obj);
});
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
let result = require("set").fileFinishedImporting("modules/stickers/native/StickerPickerCategories.tsx");

export default function _default(categories) {
  categories = categories.categories;
  const categoryIndex = categories.categoryIndex;
  dependencyMap = undefined;
  let ref;
  let first;
  closure_5 = undefined;
  let first1;
  useStickerPickerStore = undefined;
  closure_8 = undefined;
  let callback;
  let callback2;
  const tmp = callback2();
  dependencyMap = first.useRef(undefined);
  ref = first.useRef(null);
  let items = [categories];
  const memo = first.useMemo(() => {
    const items = [categories.length];
    return items;
  }, items);
  let tmp4 = ref(first.useState(null), 2);
  first = tmp4[0];
  closure_5 = tmp4[1];
  let tmp6 = ref(first.useState(false), 2);
  first1 = tmp6[0];
  useStickerPickerStore = tmp6[1];
  const tmp8 = useStickerPickerStore((setPackToScrollTo) => setPackToScrollTo.setPackToScrollTo);
  closure_8 = tmp8;
  const items1 = [categories];
  const effect = first.useEffect(() => {
    const findIndexResult = categories.findIndex((type) => type.type === callback(table[12]).StickerCategoryTypes.PACK);
    if (findIndexResult >= 0) {
      callback(findIndexResult);
    }
  }, items1);
  const items2 = [categoryIndex];
  const effect1 = first.useEffect(() => {
    if (null != closure_2.current) {
      if (null != ref.current) {
        const result = categoryIndex * closure_1_12;
        let tmp6 = result > tmp.current.end;
        if (!tmp6) {
          tmp6 = result < tmp.current.start;
        }
        if (tmp6) {
          const current = tmp2.current;
          const obj = { section: 0, item: null, animated: false };
          obj[1] = tmp3;
          current.scrollToLocation(obj);
        }
        tmp3 = categoryIndex;
      }
    }
  }, items2);
  const items3 = [first, first1];
  callback = first.useCallback(() => {
    let tmp2 = null != first;
    if (tmp2) {
      tmp2 = null != closure_2.current;
    }
    if (tmp2) {
      let num = 0;
      const result = first * closure_1_12;
      if (!first1) {
        num = closure_1_12;
      }
      closure_7(result > closure_2.current.end - num);
      const tmp4 = closure_7;
    }
  }, items3);
  const items4 = [callback];
  const items5 = [categories, tmp8];
  const callback1 = first.useCallback((nativeEvent) => {
    closure_2.current = { start: nativeEvent.nativeEvent.contentOffset.x, end: nativeEvent.nativeEvent.contentOffset.x + nativeEvent.nativeEvent.layoutMeasurement.width };
    callback();
  }, items4);
  callback2 = first.useCallback((arg0) => {
    callback3(categories[arg0].id);
    const result = categories(closure_2[19]).triggerHapticFeedback(categoryIndex(closure_2[20]).IMPACT_LIGHT);
  }, items5);
  const items6 = [first, callback2];
  const items7 = [callback];
  const callback3 = first.useCallback(() => {
    if (null != first) {
      callback2(tmp);
      callback2(false);
    }
  }, items6);
  const items8 = [categories, categoryIndex, callback2];
  const callback4 = first.useCallback((nativeEvent) => {
    if (null == closure_2.current) {
      const obj = { start: 0, end: null };
      obj[1] = nativeEvent.nativeEvent.layout.width;
      tmp.current = obj;
      callback();
    }
  }, items7);
  const callback5 = first.useCallback((arg0, index) => closure_1_14(closure_1_17, { category: categories[index], index, isActive: index === categoryIndex, onPressCategory: callback2 }), items8);
  let obj = { portalHostName: "expression-footer", style: categories.style, children: null };
  const tmp17 = categoryIndex;
  const tmp19 = categoryIndex(8918)();
  const tmp20 = closure_15;
  obj = { estimatedListSize: "windowSize", horizontal: true, itemSize: EXPRESSION_FOOTER_HEIGHT, keyboardShouldPersistTaps: "always", listId: ExpressionPickerViewType.STICKER, onLayout: callback4, onScroll: callback1, placeholderConfig: tmp19, ref, scrollReporting: "callbacks", sections: memo, renderItem: callback5, showsHorizontalScrollIndicator: false, style: tmp.list };
  const items9 = [callback(categoryIndex(8681), obj), ];
  let tmp22Result = null != first && first1;
  if (tmp22Result) {
    obj = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    obj[0] = callback3;
    const intl = categories(1236).intl;
    obj[2] = intl.string(categories(1236).t.rzCcjK);
    obj1 = { style: null, children: null };
    const items10 = [, ];
    ({ item: arr11[0], fadedItem: arr11[1] } = tmp);
    obj1[0] = items10;
    const obj2 = { style: null, source: null };
    obj2[0] = tmp.guildIcon;
    obj2[1] = tmp17(10140);
    obj1[1] = tmp22(categories(1297).Icon, obj2);
    obj[3] = tmp22(closure_5, obj1);
    tmp22Result = tmp22(categories(4949).PressableOpacity, obj);
  }
  items9[1] = tmp22Result;
  obj[2] = items9;
  return tmp20(categoryIndex(8919), obj);
};