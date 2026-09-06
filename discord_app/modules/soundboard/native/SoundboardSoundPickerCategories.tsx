// === Module 17079: SoundboardSoundPickerCategories ===

// Module 17079 (SoundboardSoundPickerCategories)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import ClockIcon from "ClockIcon" /* 4523 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4529 */;
import SoundboardTypes from "SoundboardTypes" /* 5020 */;
import LockIcon from "LockIcon" /* 5095 */;
import Pressables from "Pressables" /* 5123 */;
import GuildIconDefault from "GuildIcon" /* 5584 */;
import TrophyIcon from "TrophyIcon" /* 8717 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 9965 */;
import _modDef10391 from "module_10391" /* 10391 */;
import _modDef17077 from "module_17077" /* 17077 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function SoundCategoryItem(style) {
  ({ category, handlePressCategory: require, index: importDefault, locked } = style);
  if (locked === undefined) {
    locked = false;
  }
  const tmp = closure_12();
  const type = category.categoryInfo.type;
  if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
    const guild = category.categoryInfo.guild;
    let name = guild.name;
    let obj = { guild, style: tmp.guildItem };
    let tmp14Result = closure_1_10(GuildIconDefault, obj);
    let tmp6 = null;
    let tmp7 = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl4 = util.intl;
    name = intl4.string(util.t.y3LQCG);
    tmp6 = _modDef10391;
    tmp7 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl3 = util.intl;
    name = intl3.string(util.t["+cGVV6"]);
    obj = { style: tmp.keyboardItem };
    tmp7 = closure_1_10(ClockIcon.ClockIcon, obj);
    tmp6 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl2 = util.intl;
    name = intl2.string(util.t.Rtvk9X);
    tmp6 = _modDef17077;
    tmp7 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
    const intl = util.intl;
    name = intl.string(util.t.sKt3xS);
    tmp6 = _modDef17077;
    tmp7 = null;
    tmp14Result = null;
  } else {
    tmp6 = null;
    tmp7 = null;
    tmp14Result = null;
    name = null;
    if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
      const intl5 = util.intl;
      obj = { guildName: category.categoryInfo.guild.name };
      name = intl5.formatToPlainString(util.t.GXs41w, obj);
      const obj1 = { style: tmp.keyboardItem };
      tmp7 = closure_1_10(TrophyIcon.TrophyIcon, obj1);
      tmp6 = null;
      tmp14Result = null;
    }
  }
  const obj2 = {
    onPress() {
      return require(importDefault);
    },
    accessibilityRole: "button",
    accessibilityLabel: name,
    children: null
  };
  const obj3 = { style: null, children: null };
  const items = [tmp.item, style.style];
  obj3.style = items;
  if (tmp14Result == null) {
    tmp14Result = tmp7;
  }
  if (tmp14Result == null) {
    const obj4 = { style: tmp.keyboardItem, source: tmp6 };
    tmp14Result = closure_1_10(native.Icon, obj4);
  }
  const items1 = [tmp14Result, ];
  if (locked) {
    const obj5 = { style: tmp.lockContainer, children: null };
    const obj6 = { style: tmp.lock };
    obj5.children = closure_1_10(LockIcon.LockIcon, obj6);
    locked = closure_1_10(hasOwnProperty, obj5);
  }
  items1[1] = locked;
  obj3.children = items1;
  obj2.children = closure_1_11(hasOwnProperty, obj3);
  return closure_1_10(Pressables.PressableOpacity, obj2, name);
}
function getItemLayout(arg0, index) {
  return { length: React7, offset: React7 * index, index };
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ View: hasOwnProperty, FlatList: metroRequire } = get_ActivityIndicator);
const setSearchQuery = fn(17061).setSearchQuery;
const Constants = fn(1074);
({ CATEGORY_ICON_SIZE, EXPRESSION_FOOTER_HEIGHT: closure_9, NODE_SIZE, NODE_MARGIN } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let obj = { container: null, item: null, fadedItem: null, activeItem: null, guildItem: null, keyboardItem: null, lockContainer: null, lock: null };
obj = { borderTopWidth: StyleSheet.hairlineWidth, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
let size = { margin: NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" };
obj.item = size;
obj.fadedItem = { opacity: 0.5 };
const createStyles = { opacity: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.activeItem = createStyles;
obj.guildItem = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 };
obj.keyboardItem = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE };
const size1 = { width: 12, height: 12, position: "absolute", bottom: 0, end: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj.lockContainer = size1;
const size2 = { width: 7.5, height: 7.5, tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj.lock = size2;
let closure_12 = createStyles.createStyles(obj);
let closure_14 = noop.memo(noop.forwardRef((arg0, ref) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  return closure_1_10(timestampProducer, obj);
}));
size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerCategories.tsx");

export default noop.memo(function SoundboardSoundPickerCategories(guildId) {
  guildId = guildId.guildId;
  const categoryIndex = guildId.categoryIndex;
  const listRef = guildId.listRef;
  let stateFromStores;
  ({ categories, style } = guildId);
  const tmp = closure_12();
  noop = tmp;
  noop.useRef(null);
  const ref = noop.useRef(null);
  noop.useRef(null);
  const items = [categoryIndex];
  const effect = noop.useEffect(() => {
    if (null != ref.current) {
      if (null != ref2.current) {
        if (null != ref.current) {
          const result = categoryIndex * React7;
          if (tmp7) {
            const current = tmp3.current;
            const obj = { offset: result };
            current.scrollToOffset(obj);
          }
          tmp7 = result > tmp2.current || result < tmp.current;
        }
      }
    }
  }, items);
  const callback = noop.useCallback((nativeEvent) => {
    closure_5.current = 0;
    closure_6.current = nativeEvent.nativeEvent.layout.width;
  }, []);
  const items1 = [listRef];
  const callback1 = noop.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const contentOffset = nativeEvent.contentOffset;
    closure_5.current = contentOffset.x;
    closure_6.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
  }, []);
  const callback2 = noop.useCallback((section) => {
    callback2("");
    setImmediate(() => {
      let current;
      if (listRef != null) {
        current = listRef.current;
      }
      if (null != current) {
        current = listRef.current;
        const obj = { section, item: 0 };
        current.scrollToLocation(obj);
        const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      }
    });
  }, items1);
  let obj = guildId(listRef[20]);
  const items2 = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items2, () => categoryIndex(listRef[21]).canUseSoundboardEverywhere(stateFromStores.getCurrentUser()));
  const items3 = [stateFromStores, guildId, callback2, categoryIndex, , ];
  ({ activeItem: arr4[4], fadedItem: arr4[5] } = tmp);
  const callback3 = noop.useCallback((arg0) => {
    ({ item, index } = arg0);
    let result = !stateFromStores;
    if (!stateFromStores) {
      let obj = PremiumFeatureUpsellUtils;
      result = obj.isSoundboardSectionNitroLocked(guildId, item.categoryInfo);
    }
    obj = { category: item, index, style: null, handlePressCategory: null, locked: null };
    if (null != categoryIndex) {
      if (index === categoryIndex) {
        let fadedItem = closure_3.activeItem;
      }
      obj.style = fadedItem;
      obj.handlePressCategory = callback2;
      obj.locked = result;
      return tmp5(tmp6, obj);
    }
    fadedItem = closure_3.fadedItem;
  }, items3);
  obj = { hostName: "soundboard-footer", children: null };
  obj = { style: null, children: null };
  const items4 = [tmp.container, { paddingBottom: categoryIndex(listRef[23])().bottom }, style];
  obj.style = items4;
  const items5 = [
    closure_10(categoryIndex(listRef[25]), { style: ref.absoluteFill }),
    closure_10(closure_14, {
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
  obj.children = items5;
  obj.children = closure_11(ref, obj);
  return closure_10(guildId(listRef[24]).Portal, obj);
});