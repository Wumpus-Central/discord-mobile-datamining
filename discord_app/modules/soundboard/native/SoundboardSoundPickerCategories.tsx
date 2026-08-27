// discord_app/modules/soundboard/native/SoundboardSoundPickerCategories.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import SoundButtonOverlay from "../SoundboardTypes.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import GuildIconSizesDefault from "../../guild/native/GuildIcon.tsx";
import registerAssetDefault from "../../../../_runtime/10302_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/16571_registerAsset.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { setSearchQuery } from "../../expression_picker/ExpressionPickerStore.tsx";
import closure_8 from "../../../stores/UserStore.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function SoundCategoryItem(style) {
  ({ category, handlePressCategory: require, index: importDefault, locked } = style);
  if (locked === undefined) {
    locked = false;
  }
  const tmp = callback3();
  const type = category.categoryInfo.type;
  if (SoundButtonOverlay.SoundboardSoundGridSectionType.GUILD === type) {
    const guild = category.categoryInfo.guild;
    let name = guild.name;
    let obj = { guild: null, style: null };
    obj[0] = guild;
    obj[1] = tmp.guildItem;
    let tmp14Result = callback(GuildIconSizesDefault, obj);
    let tmp6 = null;
    let tmp7 = null;
  } else if (tmp2(4925).SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl4 = tmp2(1236).intl;
    name = intl4.string(tmp2(1236).t.y3LQCG);
    tmp6 = registerAssetDefault;
    tmp7 = null;
    tmp14Result = null;
  } else if (tmp2(4925).SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl3 = tmp2(1236).intl;
    name = intl3.string(tmp2(1236).t["+cGVV6"]);
    obj = { style: null };
    obj[0] = tmp.keyboardItem;
    tmp7 = callback(tmp2(4408).ClockIcon, obj);
    tmp6 = null;
    tmp14Result = null;
  } else if (tmp2(4925).SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl2 = tmp2(1236).intl;
    name = intl2.string(tmp2(1236).t.Rtvk9X);
    tmp6 = registerAssetDefault2;
    tmp7 = null;
    tmp14Result = null;
  } else if (tmp2(4925).SoundboardSoundGridSectionType.SEARCH === type) {
    const intl = tmp2(1236).intl;
    name = intl.string(tmp2(1236).t.sKt3xS);
    tmp6 = registerAssetDefault2;
    tmp7 = null;
    tmp14Result = null;
  } else {
    tmp6 = null;
    tmp7 = null;
    tmp14Result = null;
    name = null;
    if (tmp2(4925).SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
      const intl5 = tmp2(1236).intl;
      obj = { guildName: null };
      obj[0] = category.categoryInfo.guild.name;
      name = intl5.formatToPlainString(tmp2(1236).t.GXs41w, obj);
      obj1 = { style: null };
      obj1[0] = tmp.keyboardItem;
      tmp7 = callback(tmp2(8768).TrophyIcon, obj1);
      tmp6 = null;
      tmp14Result = null;
    }
  }
  const obj2 = {
    onPress() {
      return callback(closure_1);
    },
    accessibilityRole: "button",
    accessibilityLabel: name,
    children: null
  };
  const obj3 = { style: items, children: null };
  items = [tmp.item, style.style];
  if (tmp14Result == null) {
    tmp14Result = tmp7;
  }
  if (tmp14Result == null) {
    const obj4 = { style: null, source: null };
    obj4[0] = tmp.keyboardItem;
    obj4[1] = tmp6;
    tmp14Result = tmp14(tmp2(1297).Icon, obj4);
  }
  const items1 = [tmp14Result, ];
  if (locked) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.lockContainer;
    const obj6 = { style: null };
    obj6[0] = tmp.lock;
    obj5[1] = tmp14(tmp2(4996).LockIcon, obj6);
    locked = tmp14(tmp16, obj5);
  }
  items1[1] = locked;
  obj3[1] = items1;
  obj2[3] = closure_11(closure_5, obj3);
  return callback(PressableBase.PressableOpacity, obj2, name);
}
function getItemLayout(arg0, index) {
  return { length: closure_9, offset: closure_9 * index, index };
}
let c3 = importAllResult;
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ View: c5, FlatList: closure_6 } = get_ActivityIndicator);
({ CATEGORY_ICON_SIZE, EXPRESSION_FOOTER_HEIGHT: c9, NODE_SIZE, NODE_MARGIN } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { container: null, item: null, fadedItem: null, activeItem: null, guildItem: null, keyboardItem: null, lockContainer: null, lock: null };
obj = { borderTopWidth: StyleSheet.hairlineWidth, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
obj[0] = obj;
createCacheKey = { margin: NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" };
obj[1] = createCacheKey;
obj[2] = { opacity: 0.5 };
obj[3] = { opacity: 1, backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj[4] = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 };
obj[5] = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE };
let obj2 = { opacity: 1, backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj[6] = { width: 12, height: 12, position: "absolute", bottom: 0, end: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center" };
let obj3 = { width: 12, height: 12, position: "absolute", bottom: 0, end: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj[7] = { width: 7.5, height: 7.5, tintColor: ThemesDefault.colors.TEXT_DEFAULT };
let closure_12 = createCacheKey.createStyles(obj);
let closure_14 = importAllResult.memo(importAllResult.forwardRef((arg0, ref) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  return callback(closure_6, obj);
}));
let obj4 = { width: 7.5, height: 7.5, tintColor: ThemesDefault.colors.TEXT_DEFAULT };
const memoResult = importAllResult.memo(function SoundboardSoundPickerCategories(guildId) {
  guildId = guildId.guildId;
  const categoryIndex = guildId.categoryIndex;
  const listRef = guildId.listRef;
  importAllResult = undefined;
  let ref;
  closure_5 = undefined;
  closure_6 = undefined;
  let callback2;
  let stateFromStores;
  ({ categories, style } = guildId);
  const tmp = callback3();
  importAllResult = tmp;
  ref = importAllResult.useRef(null);
  closure_5 = importAllResult.useRef(null);
  closure_6 = importAllResult.useRef(null);
  const items = [categoryIndex];
  const effect = importAllResult.useEffect(() => {
    if (null != ref.current) {
      if (null != ref2.current) {
        if (null != ref.current) {
          const result = categoryIndex * closure_1_9;
          if (tmp7) {
            const current = tmp3.current;
            const obj = { offset: null };
            obj[0] = result;
            current.scrollToOffset(obj);
          }
          tmp7 = result > tmp2.current || result < tmp.current;
        }
      }
    }
  }, items);
  const callback = importAllResult.useCallback((nativeEvent) => {
    closure_5.current = 0;
    closure_6.current = nativeEvent.nativeEvent.layout.width;
  }, []);
  const items1 = [listRef];
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const contentOffset = nativeEvent.contentOffset;
    closure_5.current = contentOffset.x;
    closure_6.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
  }, []);
  callback2 = importAllResult.useCallback((arg0) => {
    closure_0 = arg0;
    callback2("");
    setImmediate(() => {
      let current;
      if (closure_1_2 != null) {
        current = tmp.current;
      }
      if (null != current) {
        current = tmp.current;
        const obj = { section: null, item: 0 };
        obj[0] = closure_0;
        current.scrollToLocation(obj);
        const result = guildId(listRef[18]).triggerHapticFeedback(categoryIndex(listRef[19]).IMPACT_LIGHT);
        const obj2 = guildId(listRef[18]);
      }
    });
  }, items1);
  let obj = guildId(listRef[20]);
  const items2 = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items2, () => categoryIndex(listRef[21]).canUseSoundboardEverywhere(stateFromStores.getCurrentUser()));
  const items3 = [stateFromStores, guildId, callback2, categoryIndex, , ];
  ({ activeItem: arr4[4], fadedItem: arr4[5] } = tmp);
  callback3 = importAllResult.useCallback((arg0) => {
    ({ item, index } = arg0);
    let result = !stateFromStores;
    if (!stateFromStores) {
      let obj = guildId(listRef[22]);
      result = obj.isSoundboardSectionNitroLocked(guildId, item.categoryInfo);
    }
    obj = { category: item, index, style: null, handlePressCategory: null, locked: null };
    if (null != categoryIndex) {
      if (index === categoryIndex) {
        let fadedItem = closure_3.activeItem;
      }
      obj[2] = fadedItem;
      obj[3] = callback2;
      obj[4] = result;
      return tmp5(tmp6, obj);
    }
    fadedItem = closure_3.fadedItem;
  }, items3);
  obj = { hostName: "soundboard-footer", children: null };
  obj = { style: items4, children: null };
  items4 = [tmp.container, { paddingBottom: categoryIndex(listRef[23])().bottom }, style];
  const items5 = [
    callback(categoryIndex(listRef[25]), { style: ref.absoluteFill }),
    callback(closure_14, {
      ref,
      getItemLayout,
      onLayout: callback,
      onScroll: callback1,
      data: categories,
      keyboardShouldPersistTaps: "always",
      horizontal: true,
      keyExtractor(key) {
        return String(key.key);
      },
      renderItem: callback3,
      showsHorizontalScrollIndicator: false
    })
  ];
  obj[1] = items5;
  obj[1] = callback2(closure_5, obj);
  return callback(guildId(listRef[24]).Portal, obj);
});
let result = require("set").fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerCategories.tsx");

export default memoResult;