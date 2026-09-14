// === Module 17190: SoundboardSoundPickerCategories ===

// Module 17190 (SoundboardSoundPickerCategories)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import ClockIcon from "ClockIcon" /* 4599 */;
import HapticUtils from "HapticUtils" /* 4604 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4605 */;
import SoundboardTypes from "SoundboardTypes" /* 5101 */;
import LockIcon from "LockIcon" /* 5176 */;
import Pressables from "Pressables" /* 5204 */;
import GuildIconDefault from "GuildIcon" /* 5665 */;
import TrophyIcon from "TrophyIcon" /* 8842 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 10095 */;
import _modDef10520 from "module_10520" /* 10520 */;
import _modDef17188 from "module_17188" /* 17188 */;
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
    const obj2 = { guild, style: tmp.guildItem };
    let tmp14Result = closure_1_10(GuildIconDefault, obj2);
    let tmp6 = null;
    let tmp7 = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl4 = util.intl;
    name = intl4.string(util.t.y3LQCG);
    tmp6 = _modDef10520;
    tmp7 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl3 = util.intl;
    name = intl3.string(util.t["+cGVV6"]);
    const obj = { style: tmp.keyboardItem };
    tmp7 = closure_1_10(ClockIcon.ClockIcon, obj);
    tmp6 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl2 = util.intl;
    name = intl2.string(util.t.Rtvk9X);
    tmp6 = _modDef17188;
    tmp7 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
    const intl = util.intl;
    name = intl.string(util.t.sKt3xS);
    tmp6 = _modDef17188;
    tmp7 = null;
    tmp14Result = null;
  } else {
    tmp6 = null;
    tmp7 = null;
    tmp14Result = null;
    name = null;
    if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
      const intl5 = util.intl;
      const obj3 = { guildName: category.categoryInfo.guild.name };
      name = intl5.formatToPlainString(util.t.GXs41w, obj3);
      const obj4 = { style: tmp.keyboardItem };
      tmp7 = closure_1_10(TrophyIcon.TrophyIcon, obj4);
      tmp6 = null;
      tmp14Result = null;
    }
  }
  const obj5 = {
    onPress() {
      return require(importDefault);
    },
    accessibilityRole: "button",
    accessibilityLabel: name,
    children: null
  };
  const obj6 = { style: null, children: null };
  const items = [tmp.item, style.style];
  obj6.style = items;
  if (tmp14Result == null) {
    tmp14Result = tmp7;
  }
  if (tmp14Result == null) {
    const obj7 = { style: tmp.keyboardItem, source: tmp6 };
    tmp14Result = closure_1_10(native.Icon, obj7);
  }
  const items1 = [tmp14Result, ];
  if (locked) {
    const obj8 = { style: tmp.lockContainer, children: null };
    const obj9 = { style: tmp.lock };
    obj8.children = closure_1_10(LockIcon.LockIcon, obj9);
    locked = closure_1_10(hasOwnProperty, obj8);
  }
  items1[1] = locked;
  obj6.children = items1;
  obj5.children = closure_1_11(hasOwnProperty, obj6);
  return closure_1_10(Pressables.PressableOpacity, obj5, name);
}
function getItemLayout(arg0, index) {
  return { length: React7, offset: React7 * index, index };
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ View: hasOwnProperty, FlatList: metroRequire } = get_ActivityIndicator);
const setSearchQuery = fn(17172).setSearchQuery;
const Constants = fn(1074);
({ CATEGORY_ICON_SIZE, EXPRESSION_FOOTER_HEIGHT: closure_9, NODE_SIZE, NODE_MARGIN } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4636);
let obj = { container: { borderTopWidth: StyleSheet.hairlineWidth, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, item: null, fadedItem: { opacity: 0.5 }, activeItem: null, guildItem: null, keyboardItem: null, lockContainer: null, lock: null };
let size = { margin: NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" };
obj.item = size;
let obj3 = { borderTopWidth: StyleSheet.hairlineWidth, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.activeItem = { opacity: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
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
let obj4 = { opacity: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
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
      let current1;
      if (listRef != null) {
        current1 = listRef.current;
      }
      if (null != current1) {
        const current = listRef.current;
        const obj = { section, item: 0 };
        current.scrollToLocation(obj);
        const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      }
    });
  }, items1);
  const items2 = [stateFromStores];
  stateFromStores = guildId(listRef[20]).useStateFromStores(items2, () => categoryIndex(listRef[21]).canUseSoundboardEverywhere(stateFromStores.getCurrentUser()));
  const items3 = [stateFromStores, guildId, callback2, categoryIndex, , ];
  ({ activeItem: arr4[4], fadedItem: arr4[5] } = tmp);
  const callback3 = noop.useCallback((arg0) => {
    ({ item, index } = arg0);
    let result = !stateFromStores;
    if (!stateFromStores) {
      result = PremiumFeatureUpsellUtils.isSoundboardSectionNitroLocked(guildId, item.categoryInfo);
    }
    const obj2 = { category: item, index, style: null, handlePressCategory: null, locked: null };
    if (null != categoryIndex) {
      if (index === categoryIndex) {
        let fadedItem = closure_3.activeItem;
      }
      obj2.style = fadedItem;
      obj2.handlePressCategory = callback2;
      obj2.locked = result;
      return tmp5(tmp6, obj2);
    }
    fadedItem = closure_3.fadedItem;
  }, items3);
  const memo = noop.useMemo(() => {
    const Gesture = guildId(listRef[24]).Gesture;
    return Gesture.Native().disallowInterruption(true);
  }, []);
  let obj2 = { hostName: "soundboard-footer", children: null };
  const obj3 = { style: null, children: null };
  const items4 = [tmp.container, { paddingBottom: categoryIndex(listRef[23])().bottom }, style];
  obj3.style = items4;
  const items5 = [closure_10(categoryIndex(listRef[26]), { style: ref.absoluteFill }), ];
  const obj5 = {
    gesture: memo,
    children: closure_10(closure_14, {
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
  };
  items5[1] = closure_10(guildId(listRef[24]).GestureDetector, obj5);
  obj3.children = items5;
  obj2.children = closure_11(ref, obj3);
  return closure_10(guildId(listRef[25]).Portal, obj2);
});