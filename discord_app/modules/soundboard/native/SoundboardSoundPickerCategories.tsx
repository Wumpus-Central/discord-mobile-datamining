// discord_app/modules/soundboard/native/SoundboardSoundPickerCategories.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import SoundboardTypes from "../SoundboardTypes.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import PremiumFeatureUpsellUtils from "../../premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx";
import _modDef10391 from "../../../../_runtime/metro/10391__.js";
import _modDef17077 from "../../../../_runtime/metro/17077__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

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
  } else if (tmp2(5020).SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl4 = tmp2(1114).intl;
    name = intl4.string(tmp2(1114).t.y3LQCG);
    tmp6 = _modDef10391;
    tmp7 = null;
    tmp14Result = null;
  } else if (tmp2(5020).SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl3 = tmp2(1114).intl;
    name = intl3.string(tmp2(1114).t["+cGVV6"]);
    obj = { style: tmp.keyboardItem };
    tmp7 = closure_1_10(tmp2(4523).ClockIcon, obj);
    tmp6 = null;
    tmp14Result = null;
  } else if (tmp2(5020).SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl2 = tmp2(1114).intl;
    name = intl2.string(tmp2(1114).t.Rtvk9X);
    tmp6 = _modDef17077;
    tmp7 = null;
    tmp14Result = null;
  } else if (tmp2(5020).SoundboardSoundGridSectionType.SEARCH === type) {
    const intl = tmp2(1114).intl;
    name = intl.string(tmp2(1114).t.sKt3xS);
    tmp6 = _modDef17077;
    tmp7 = null;
    tmp14Result = null;
  } else {
    tmp6 = null;
    tmp7 = null;
    tmp14Result = null;
    name = null;
    if (tmp2(5020).SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
      const intl5 = tmp2(1114).intl;
      obj = { guildName: category.categoryInfo.guild.name };
      name = intl5.formatToPlainString(tmp2(1114).t.GXs41w, obj);
      const obj1 = { style: tmp.keyboardItem };
      tmp7 = closure_1_10(tmp2(8717).TrophyIcon, obj1);
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
    children: null,
  };
  const obj3 = { style: null, children: null };
  const items = [tmp.item, style.style];
  obj3.style = items;
  if (tmp14Result == null) {
    tmp14Result = tmp7;
  }
  if (tmp14Result == null) {
    const obj4 = { style: tmp.keyboardItem, source: tmp6 };
    tmp14Result = tmp14(tmp2(1178).Icon, obj4);
  }
  const items1 = [tmp14Result];
  if (locked) {
    const obj5 = { style: tmp.lockContainer, children: null };
    const obj6 = { style: tmp.lock };
    obj5.children = tmp14(tmp2(5095).LockIcon, obj6);
    locked = tmp14(tmp16, obj5);
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
let obj = {
  container: null,
  item: null,
  fadedItem: null,
  activeItem: null,
  guildItem: null,
  keyboardItem: null,
  lockContainer: null,
  lock: null,
};
obj = {
  borderTopWidth: StyleSheet.hairlineWidth,
  paddingHorizontal: 8,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderTopColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj.container = obj;
let size = {
  margin: NODE_MARGIN,
  height: NODE_SIZE,
  width: NODE_SIZE,
  borderRadius: NODE_SIZE / 2,
  alignItems: "center",
  justifyContent: "center",
};
obj.item = size;
obj.fadedItem = { opacity: 0.5 };
const createStyles = { opacity: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.activeItem = createStyles;
obj.guildItem = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 };
obj.keyboardItem = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE };
const size1 = {
  width: 12,
  height: 12,
  position: "absolute",
  bottom: 0,
  end: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
};
obj.lockContainer = size1;
const size2 = { width: 7.5, height: 7.5, tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj.lock = size2;
let closure_12 = createStyles.createStyles(obj);
let closure_14 = noop.memo(
  noop.forwardRef((arg0, ref) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.ref = ref;
    return closure_1_10(timestampProducer, obj);
  }),
);
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
        current = tmp.current;
      }
      if (null != current) {
        current = tmp.current;
        const obj = { section, item: 0 };
        current.scrollToLocation(obj);
        const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      }
    });
  }, items1);
  let obj = guildId(listRef[20]);
  const items2 = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items2, () =>
    categoryIndex(listRef[21]).canUseSoundboardEverywhere(stateFromStores.getCurrentUser()),
  );
  const items3 = [stateFromStores, guildId, callback2, categoryIndex, ,];
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
      showsHorizontalScrollIndicator: false,
    }),
  ];
  obj.children = items5;
  obj.children = closure_11(ref, obj);
  return closure_10(guildId(listRef[24]).Portal, obj);
});
