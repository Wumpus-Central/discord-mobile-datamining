// === Module 16298: SoundCategoryItem ===

// Module 16298 (SoundCategoryItem)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import ClockIcon from "ClockIcon" /* 4338 */;
import PressableBase from "PressableBase" /* 5433 */;
import SoundButtonOverlay from "SoundButtonOverlay" /* 6824 */;
import LockIcon from "LockIcon" /* 6890 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 7188 */;
import registerAssetDefault from "registerAsset" /* 10221 */;
import registerAssetDefault2 from "registerAsset" /* 16296 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { setSearchQuery } from "withEqualityFn" /* 16283 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
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
    let tmp13Result = callback(GuildIconSizesDefault, obj);
    let tmp4 = null;
    let tmp5 = null;
  } else if (SoundButtonOverlay.SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl3 = getSystemLocale.intl;
    name = intl3.string(getSystemLocale.t.y3LQCG);
    tmp4 = registerAssetDefault;
    tmp5 = null;
    tmp13Result = null;
  } else if (SoundButtonOverlay.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl2 = getSystemLocale.intl;
    name = intl2.string(getSystemLocale.t["+cGVV6"]);
    obj = { style: null };
    obj[0] = tmp.keyboardItem;
    tmp5 = callback(ClockIcon.ClockIcon, obj);
    tmp4 = null;
    tmp13Result = null;
  } else if (SoundButtonOverlay.SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl = getSystemLocale.intl;
    name = intl.string(getSystemLocale.t.Rtvk9X);
    tmp4 = registerAssetDefault2;
    tmp5 = null;
    tmp13Result = null;
  } else {
    tmp4 = null;
    tmp5 = null;
    tmp13Result = null;
    name = null;
    if (SoundButtonOverlay.SoundboardSoundGridSectionType.SEARCH === type) {
      const intl4 = getSystemLocale.intl;
      name = intl4.string(getSystemLocale.t.sKt3xS);
      tmp4 = registerAssetDefault2;
      tmp5 = null;
      tmp13Result = null;
    }
  }
  obj = {
    onPress() {
      return callback(closure_1);
    },
    accessibilityRole: "button",
    accessibilityLabel: name,
    children: null
  };
  obj1 = { style: items, children: null };
  items = [tmp.item, style.style];
  if (tmp13Result == null) {
    tmp13Result = tmp5;
  }
  if (tmp13Result == null) {
    const obj2 = { style: null, source: null };
    obj2[0] = tmp.keyboardItem;
    obj2[1] = tmp4;
    tmp13Result = callback(Button.Icon, obj2);
  }
  const items1 = [tmp13Result, ];
  if (locked) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.lockContainer;
    const obj4 = { style: null };
    obj4[0] = tmp.lock;
    obj3[1] = callback(LockIcon.LockIcon, obj4);
    locked = callback(closure_5, obj3);
  }
  items1[1] = locked;
  obj1[1] = items1;
  obj[3] = callback(closure_5, obj1);
  return callback(PressableBase.PressableOpacity, obj, name);
}
function getItemLayout(arg0, index) {
  return { length: closure_9, offset: closure_9 * index, index };
}
let c3 = importAllResult;
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ View: c5, FlatList: closure_6 } = get_ActivityIndicator);
({ CATEGORY_ICON_SIZE, EXPRESSION_FOOTER_HEIGHT: c9, NODE_SIZE, NODE_MARGIN } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { borderTopWidth: StyleSheet.hairlineWidth, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
obj[0] = obj;
const createCacheKey = { margin: NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" };
obj[1] = createCacheKey;
obj[2] = { opacity: 0.5 };
obj[3] = { opacity: 1, backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj[4] = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 };
obj[5] = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE };
obj[6] = { width: 12, height: 12, position: "absolute", bottom: 0, end: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj[7] = { width: 7.5, height: 7.5, tintColor: ThemesDefault.colors.TEXT_DEFAULT };
let closure_12 = createCacheKey.createStyles(obj);
let closure_14 = importAllResult.memo(importAllResult.forwardRef((arg0, ref) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  return callback(closure_6, obj);
}));
const memoResult = importAllResult.memo(function SoundboardSoundPickerCategories(guildId) {
  guildId = guildId.guildId;
  const categoryIndex = guildId.categoryIndex;
  const listRef = guildId.listRef;
  let stateFromStores;
  ({ categories, style } = guildId);
  const tmp = callback3();
  importAllResult = tmp;
  const ref = importAllResult.useRef(null);
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
  const callback2 = importAllResult.useCallback((arg0) => {
    closure_0 = arg0;
    callback2("");
    setImmediate(() => {
      let current;
      if (closure_1_2 != null) {
        current = closure_1_2.current;
      }
      if (null != current) {
        current = closure_1_2.current;
        const obj = { section: null, item: 0 };
        obj[0] = closure_0;
        current.scrollToLocation(obj);
        const result = guildId(listRef[17]).triggerHapticFeedback(categoryIndex(listRef[18]).IMPACT_LIGHT);
        const obj2 = guildId(listRef[17]);
      }
    });
  }, items1);
  let obj = guildId(listRef[19]);
  const items2 = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items2, () => categoryIndex(listRef[20]).canUseSoundboardEverywhere(stateFromStores.getCurrentUser()));
  const items3 = [stateFromStores, guildId, callback2, categoryIndex, , ];
  ({ activeItem: arr4[4], fadedItem: arr4[5] } = tmp);
  callback3 = importAllResult.useCallback((arg0) => {
    ({ item, index } = arg0);
    let result = !stateFromStores;
    if (!stateFromStores) {
      let obj = guildId(listRef[21]);
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
  obj = { style: items4, children: null };
  items4 = [tmp.container, { paddingBottom: categoryIndex(listRef[22])().bottom }, style];
  const items5 = [
    callback(categoryIndex(listRef[24]), { style: ref.absoluteFill }),
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
  return callback(guildId(listRef[23]).Portal, obj);
});
let result = require("obj132").fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerCategories.tsx");

export default memoResult;