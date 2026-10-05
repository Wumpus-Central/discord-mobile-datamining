// === Module 17246: SoundboardSoundPickerCategories ===

// Module 17246 (SoundboardSoundPickerCategories)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import ClockIcon from "ClockIcon" /* 4849 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4856 */;
import SoundboardTypes from "SoundboardTypes" /* 5805 */;
import LockIcon from "LockIcon" /* 5879 */;
import Pressables from "Pressables" /* 5909 */;
import GuildIconDefault from "GuildIcon" /* 5971 */;
import TrophyIcon from "TrophyIcon" /* 8364 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 9644 */;
import AssetRegistryDefault from "AssetRegistry" /* 10116 */;
import ExpressionPickerStore from "ExpressionPickerStore" /* 17228 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 17244 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_0, guildId, setImmediateResult;

let CATEGORY_ICON_SIZE;
let NODE_MARGIN;
let NODE_SIZE;
let c10;
let c9;
let forwardRef;
let hasOwnProperty;
let memo;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
let size2;
let unpackModuleId;
function getItemLayout(arg0, index) {
  return { length: React4, offset: React4 * index, index };
}
let react = react_mod;
const StyleSheet = react_native.StyleSheet;
({ View: hasOwnProperty, FlatList: metroRequire } = react_native);
const setSearchQuery = ExpressionPickerStore.setSearchQuery;
({ CATEGORY_ICON_SIZE, EXPRESSION_FOOTER_HEIGHT: c9, NODE_SIZE, NODE_MARGIN } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, item: size, fadedItem: { opacity: 0.5 }, activeItem: obj3, guildItem: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 }, keyboardItem: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE }, lockContainer: size1, lock: size2 };
obj2 = { borderTopWidth: StyleSheet.hairlineWidth, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
size = { margin: NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" };
obj3 = { opacity: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
size1 = { width: 12, height: 12, position: "absolute", bottom: 0, end: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
size2 = { width: 7.5, height: 7.5, tintColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((index) => {
  let category;
  let items;
  let locked;
  let obj9;
  let style;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  const obj = react2;
  const cResult = obj.c(36);
  ({ category, handlePressCategory } = index);
  index = index.index;
  ({ style, locked } = index);
  const tmp5 = closure_12();
  const type = category.categoryInfo.type;
  if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
    const guild = category.categoryInfo.guild;
    if (cResult[0] === guild) {
      let tmp34;
      if (cResult[1] === tmp5.guildItem) {
        tmp34 = cResult[2];
      }
      tmp12 = null;
      tmp13 = tmp34;
      tmp11 = null;
      tmp14 = tmp33;
    }
    const obj2 = { guild, style: tmp5.guildItem };
    const tmp37 = authStore(GuildIconDefault, obj2);
    cResult[0] = guild;
    cResult[1] = tmp5.guildItem;
    cResult[2] = tmp37;
    tmp34 = tmp37;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
    let tmp30;
    const _Symbol4 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = intl6.intl;
      const stringResult = intl5.string(intl6.t.y3LQCG);
      cResult[3] = stringResult;
      tmp30 = stringResult;
    } else {
      tmp30 = cResult[3];
    }
    tmp12 = AssetRegistryDefault;
    tmp11 = null;
    tmp14 = tmp30;
    tmp13 = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    let tmp24;
    let tmp26;
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = intl6.intl;
      const stringResult1 = intl4.string(intl6.t["+cGVV6"]);
      cResult[4] = stringResult1;
      tmp24 = stringResult1;
    } else {
      tmp24 = cResult[4];
    }
    if (cResult[5] !== tmp5.keyboardItem) {
      const obj3 = { style: tmp5.keyboardItem };
      const tmp28 = authStore(ClockIcon.ClockIcon, obj3);
      cResult[5] = tmp5.keyboardItem;
      cResult[6] = tmp28;
      tmp26 = tmp28;
    } else {
      tmp26 = cResult[6];
    }
    tmp12 = null;
    tmp11 = tmp26;
    tmp13 = null;
    tmp14 = tmp24;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
    let tmp20;
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = intl6.intl;
      const stringResult2 = intl3.string(intl6.t.Rtvk9X);
      cResult[7] = stringResult2;
      tmp20 = stringResult2;
    } else {
      tmp20 = cResult[7];
    }
    tmp12 = AssetRegistryDefault2;
    tmp11 = null;
    tmp14 = tmp20;
    tmp13 = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
    let tmp16;
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl6.intl;
      const stringResult3 = intl2.string(intl6.t.sKt3xS);
      cResult[8] = stringResult3;
      tmp16 = stringResult3;
    } else {
      tmp16 = cResult[8];
    }
    tmp12 = AssetRegistryDefault2;
    tmp11 = null;
    tmp14 = tmp16;
    tmp13 = null;
  } else {
    tmp12 = null;
    tmp11 = null;
    tmp13 = null;
    tmp14 = null;
    if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
      let tmp6;
      let tmp8;
      if (cResult[9] !== category.categoryInfo.guild.name) {
        const intl = intl6.intl;
        const obj4 = { guildName: category.categoryInfo.guild.name };
        const formatToPlainStringResult = intl.formatToPlainString(intl6.t.GXs41w, obj4);
        cResult[9] = category.categoryInfo.guild.name;
        cResult[10] = formatToPlainStringResult;
        tmp6 = formatToPlainStringResult;
      } else {
        tmp6 = cResult[10];
      }
      if (cResult[11] !== tmp5.keyboardItem) {
        const obj5 = { style: tmp5.keyboardItem };
        const tmp10 = authStore(TrophyIcon.TrophyIcon, obj5);
        cResult[11] = tmp5.keyboardItem;
        cResult[12] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[12];
      }
      tmp11 = tmp8;
      tmp12 = null;
      tmp13 = null;
      tmp14 = tmp6;
    }
  }
  if (cResult[13] === handlePressCategory) {
    let tmp38;
    if (cResult[14] === index) {
      tmp38 = cResult[15];
    }
    if (cResult[16] === style) {
      let tmp39;
      if (cResult[17] === tmp5.item) {
        tmp39 = cResult[18];
      }
      if (cResult[19] === tmp11) {
        if (cResult[20] === tmp13) {
          if (cResult[21] === tmp12) {
            let tmp40;
            if (cResult[22] === tmp5.keyboardItem) {
              tmp40 = cResult[23];
            }
            if (cResult[24] === (undefined !== locked && locked)) {
              if (cResult[25] === tmp5.lock) {
                let tmp44;
                if (cResult[26] === tmp5.lockContainer) {
                  tmp44 = cResult[27];
                }
                if (cResult[28] === tmp39) {
                  if (cResult[29] === tmp40) {
                    let tmp48;
                    if (cResult[30] === tmp44) {
                      tmp48 = cResult[31];
                    }
                    if (cResult[32] === tmp14) {
                      if (cResult[33] === tmp38) {
                        let tmp52;
                        if (cResult[34] === tmp48) {
                          tmp52 = cResult[35];
                        }
                        return tmp52;
                      }
                    }
                    const obj6 = { onPress: tmp38, accessibilityRole: "button", accessibilityLabel: tmp14, children: tmp48 };
                    const tmp54 = authStore(Pressables.PressableOpacity, obj6, tmp14);
                    cResult[32] = tmp14;
                    cResult[33] = tmp38;
                    cResult[34] = tmp48;
                    cResult[35] = tmp54;
                    tmp52 = tmp54;
                  }
                }
                const obj7 = { style: tmp39, children: items };
                items = [tmp40, tmp44];
                const tmp51 = unpackModuleId(hasOwnProperty, obj7);
                cResult[28] = tmp39;
                cResult[29] = tmp40;
                cResult[30] = tmp44;
                cResult[31] = tmp51;
                tmp48 = tmp51;
              }
            }
            let tmp45 = tmp4;
            if (tmp45) {
              const obj8 = { style: tmp5.lockContainer, children: authStore(LockIcon.LockIcon, obj9) };
              obj9 = { style: tmp5.lock };
              tmp45 = authStore(hasOwnProperty, obj8);
            }
            cResult[24] = undefined !== locked && locked;
            cResult[25] = tmp5.lock;
            cResult[26] = tmp5.lockContainer;
            cResult[27] = tmp45;
            tmp44 = tmp45;
          }
        }
      }
      let tmp42 = tmp13;
      if (tmp13 == null) {
        tmp42 = tmp11;
      }
      if (tmp42 == null) {
        const obj10 = { style: tmp5.keyboardItem, source: tmp12 };
        tmp42 = authStore(native.Icon, obj10);
      }
      cResult[19] = tmp11;
      cResult[20] = tmp13;
      cResult[21] = tmp12;
      cResult[22] = tmp5.keyboardItem;
      cResult[23] = tmp42;
      tmp40 = tmp42;
    }
    const items1 = [tmp5.item, style];
    cResult[16] = style;
    cResult[17] = tmp5.item;
    cResult[18] = items1;
    tmp39 = items1;
  }
  const fn = function o() {
    return handlePressCategory(index);
  };
  cResult[13] = handlePressCategory;
  cResult[14] = index;
  cResult[15] = fn;
  tmp38 = fn;
}) : ((style) => {
  let category;
  let closure_129_0;
  let closure_129_1;
  let items;
  let items1;
  let locked;
  let name;
  let obj6;
  let obj9;
  let tmp14Result;
  let tmp6;
  let tmp7;
  ({ category, handlePressCategory: closure_129_0, index: closure_129_1, locked } = style);
  style = style.style;
  if (locked === undefined) {
    locked = false;
  }
  const tmp = closure_12();
  const type = category.categoryInfo.type;
  if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
    const guild = category.categoryInfo.guild;
    name = guild.name;
    const obj2 = { guild, style: tmp.guildItem };
    tmp14Result = authStore(GuildIconDefault, obj2);
    tmp6 = null;
    tmp7 = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl4 = intl6.intl;
    name = intl4.string(intl6.t.y3LQCG);
    tmp6 = AssetRegistryDefault;
    tmp7 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl3 = intl6.intl;
    name = intl3.string(intl6.t["+cGVV6"]);
    const obj = { style: tmp.keyboardItem };
    tmp7 = authStore(ClockIcon.ClockIcon, obj);
    tmp6 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl2 = intl6.intl;
    name = intl2.string(intl6.t.Rtvk9X);
    tmp6 = AssetRegistryDefault2;
    tmp7 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
    const intl = intl6.intl;
    name = intl.string(intl6.t.sKt3xS);
    tmp6 = AssetRegistryDefault2;
    tmp7 = null;
    tmp14Result = null;
  } else {
    tmp6 = null;
    tmp7 = null;
    tmp14Result = null;
    name = null;
    if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
      const intl5 = intl6.intl;
      const obj3 = { guildName: category.categoryInfo.guild.name };
      name = intl5.formatToPlainString(intl6.t.GXs41w, obj3);
      const obj4 = { style: tmp.keyboardItem };
      tmp7 = authStore(TrophyIcon.TrophyIcon, obj4);
      tmp6 = null;
      tmp14Result = null;
    }
  }
  const obj5 = {
    onPress() {
      return closure_1_0(closure_1_1);
    },
    accessibilityRole: "button",
    accessibilityLabel: name,
    children: unpackModuleId(hasOwnProperty, obj6)
  };
  obj6 = { style: items, children: items1 };
  items = [tmp.item, style];
  const PressableOpacity = Pressables.PressableOpacity;
  if (tmp14Result == null) {
    tmp14Result = tmp7;
  }
  if (tmp14Result == null) {
    const obj7 = { style: tmp.keyboardItem, source: tmp6 };
    tmp14Result = authStore(native.Icon, obj7);
  }
  items1 = [tmp14Result, ];
  if (locked) {
    const obj8 = { style: tmp.lockContainer, children: authStore(LockIcon.LockIcon, obj9) };
    obj9 = { style: tmp.lock };
    locked = authStore(hasOwnProperty, obj8);
  }
  items1[1] = locked;
  return authStore(PressableOpacity, obj5, name);
});
({ memo, forwardRef } = react);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = memo(forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === arg0) {
    let tmp2;
    if (cResult[1] === ref) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const obj2 = { ref };
  const merged = Object.assign(arg0);
  const tmp4 = authStore(metroRequire, obj2);
  cResult[0] = arg0;
  cResult[1] = ref;
  cResult[2] = tmp4;
  tmp2 = tmp4;
}) : ((arg0, ref) => {
  const obj = { ref };
  const merged = Object.assign(arg0);
  return authStore(metroRequire, obj);
})));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let categories;
  let categoryIndex;
  let closure_3;
  let listRef;
  let stateFromStores;
  let style;
  let tmp12;
  let tmp13;
  let tmp6;
  let tmp7;
  const tmp = guildId;
  let obj = guildId(listRef[9]);
  const cResult = obj.c(31);
  guildId = guildId.guildId;
  ({ categories, categoryIndex } = guildId);
  ({ style, listRef } = guildId);
  const tmp4 = closure_12();
  react = tmp4;
  let obj2 = react;
  react.useRef(null);
  const ref = react.useRef(null);
  const ref2 = react.useRef(null);
  if (cResult[0] !== categoryIndex) {
    const fn = function c() {
      if (null != ref.current) {
        if (null != ref2.current) {
          if (null != ref.current) {
            const result = categoryIndex * React4;
            const tmp7 = result > tmp2.current || result < tmp.current;
            if (tmp7) {
              const current = tmp3.current;
              const obj = { offset: result };
              current.scrollToOffset(obj);
            }
          }
        }
      }
    };
    const items = [categoryIndex];
    cResult[0] = categoryIndex;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = obj2.useEffect(tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(nativeEvent) {
        ref.current = 0;
        ref2.current = nativeEvent.nativeEvent.layout.width;
      }
    }
    cResult[3] = S;
  } else {
    class S {
      constructor(nativeEvent) {
        ref.current = 0;
        ref2.current = nativeEvent.nativeEvent.layout.width;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const contentOffset = nativeEvent.contentOffset;
        ref.current = contentOffset.x;
        ref2.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
      }
    }
    cResult[4] = N;
  } else {
    class N {
      constructor(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const contentOffset = nativeEvent.contentOffset;
        ref.current = contentOffset.x;
        ref2.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
      }
    }
  }
  if (cResult[5] !== listRef) {
    class P {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = closure_7("");
        setImmediateResult = setImmediate(() => {
          let current1;
          if (listRef != null) {
            current1 = listRef.current;
          }
          if (null != current1) {
            const current = listRef.current;
            const obj = { section, item: 0 };
            current.scrollToLocation(obj);
            const obj2 = HapticUtils;
            const result = obj2.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          }
        });
        return;
      }
    }
    cResult[5] = listRef;
    cResult[6] = P;
  } else {
    class P {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = closure_7("");
        setImmediateResult = setImmediate(() => {
          let current1;
          if (listRef != null) {
            current1 = listRef.current;
          }
          if (null != current1) {
            const current = listRef.current;
            const obj = { section, item: 0 };
            current.scrollToLocation(obj);
            const obj2 = HapticUtils;
            const result = obj2.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          }
        });
        return;
      }
    }
  }
  P = tmp11;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = closure_7("");
        setImmediateResult = setImmediate(() => {
          let current1;
          if (listRef != null) {
            current1 = listRef.current;
          }
          if (null != current1) {
            const current = listRef.current;
            const obj = { section, item: 0 };
            current.scrollToLocation(obj);
            const obj2 = HapticUtils;
            const result = obj2.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          }
        });
        return;
      }
    }
    const items1 = [stateFromStores];
    class D {
      constructor() {
        const obj = categoryIndex(listRef[22]);
        return obj.canUseSoundboardEverywhere(stateFromStores.getCurrentUser());
      }
    }
    cResult[7] = items1;
    cResult[8] = D;
    tmp13 = D;
    tmp12 = items1;
  } else {
    class P {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = closure_7("");
        setImmediateResult = setImmediate(() => {
          let current1;
          if (listRef != null) {
            current1 = listRef.current;
          }
          if (null != current1) {
            const current = listRef.current;
            const obj = { section, item: 0 };
            current.scrollToLocation(obj);
            const obj2 = HapticUtils;
            const result = obj2.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          }
        });
        return;
      }
    }
    tmp13 = cResult[8];
  }
  const tmpResult = tmp(listRef[23]);
  stateFromStores = tmpResult.useStateFromStores(tmp12, tmp13);
  if (cResult[9] === stateFromStores) {
    class P {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = closure_7("");
        setImmediateResult = setImmediate(() => {
          let current1;
          if (listRef != null) {
            current1 = listRef.current;
          }
          if (null != current1) {
            const current = listRef.current;
            const obj = { section, item: 0 };
            current.scrollToLocation(obj);
            const obj2 = HapticUtils;
            const result = obj2.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          }
        });
        return;
      }
    }
  }
  class H {
    constructor(arg0) {
      let index;
      let item;
      ({ item, index } = arg0);
      let result = !stateFromStores;
      if (result) {
        const obj = PremiumFeatureUpsellUtils;
        result = obj.isSoundboardSectionNitroLocked(guildId, item.categoryInfo);
      }
      const obj2 = { category: item, index, style: null, handlePressCategory: null, locked: null };
      if (null != categoryIndex) {
        let fadedItem;
        if (index === categoryIndex) {
          fadedItem = closure_3.activeItem;
        }
        obj2.style = fadedItem;
        obj2.handlePressCategory = P;
        obj2.locked = result;
        return tmp5(tmp6, obj2);
      }
      fadedItem = closure_3.fadedItem;
    }
  }
  cResult[9] = stateFromStores;
  cResult[10] = categoryIndex;
  cResult[11] = guildId;
  cResult[12] = tmp11;
  cResult[13] = tmp4.activeItem;
  cResult[14] = tmp4.fadedItem;
  cResult[15] = H;
}) : ((guildId) => {
  let categories;
  let closure_3;
  let items4;
  let items5;
  let obj3;
  let obj6;
  let style;
  guildId = guildId.guildId;
  const categoryIndex = guildId.categoryIndex;
  const listRef = guildId.listRef;
  let stateFromStores;
  ({ categories, style } = guildId);
  const tmp = closure_12();
  react = tmp;
  react.useRef(null);
  const ref = react.useRef(null);
  const ref2 = react.useRef(null);
  const items = [categoryIndex];
  const effect = react.useEffect(() => {
    if (null != ref.current) {
      if (null != ref2.current) {
        if (null != ref.current) {
          const result = categoryIndex * React4;
          const tmp7 = result > tmp2.current || result < tmp.current;
          if (tmp7) {
            const current = tmp3.current;
            const obj = { offset: result };
            current.scrollToOffset(obj);
          }
        }
      }
    }
  }, items);
  const callback = react.useCallback((nativeEvent) => {
    ref.current = 0;
    ref2.current = nativeEvent.nativeEvent.layout.width;
  }, []);
  const items1 = [listRef];
  const callback1 = react.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const contentOffset = nativeEvent.contentOffset;
    ref.current = contentOffset.x;
    ref2.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
  }, []);
  const callback2 = react.useCallback((section) => {
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
        const obj2 = HapticUtils;
        const result = obj2.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      }
    });
  }, items1);
  let obj = guildId(listRef[23]);
  const items2 = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items2, () => {
    const obj = categoryIndex(listRef[22]);
    return obj.canUseSoundboardEverywhere(stateFromStores.getCurrentUser());
  });
  const items3 = [stateFromStores, guildId, callback2, categoryIndex, , ];
  ({ activeItem: arr4[4], fadedItem: arr4[5] } = tmp);
  const callback3 = react.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let result = !stateFromStores;
    if (result) {
      const obj = PremiumFeatureUpsellUtils;
      result = obj.isSoundboardSectionNitroLocked(guildId, item.categoryInfo);
    }
    const obj2 = { category: item, index, style: null, handlePressCategory: null, locked: null };
    if (null != categoryIndex) {
      let fadedItem;
      if (index === categoryIndex) {
        fadedItem = closure_3.activeItem;
      }
      obj2.style = fadedItem;
      obj2.handlePressCategory = callback2;
      obj2.locked = result;
      return tmp5(tmp6, obj2);
    }
    fadedItem = closure_3.fadedItem;
  }, items3);
  const bottom = categoryIndex(listRef[25])().bottom;
  const memo = react.useMemo(() => {
    const Gesture = guildId(listRef[26]).Gesture;
    const NativeResult = Gesture.Native();
    return NativeResult.disallowInterruption(true);
  }, []);
  let obj2 = { hostName: "soundboard-footer", children: closure_11(ref, obj3) };
  obj3 = { style: items4, children: items5 };
  items4 = [tmp.container, { paddingBottom: bottom }, style];
  const Portal = guildId(listRef[28]).Portal;
  items5 = [, ];
  const obj4 = { style: ref.absoluteFill };
  items5[0] = closure_10(categoryIndex(listRef[27]), obj4);
  const obj5 = { gesture: memo, children: closure_10(closure_14, obj6) };
  obj6 = {
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
  };
  const GestureDetector = guildId(listRef[26]).GestureDetector;
  items5[1] = closure_10(GestureDetector, obj5);
  return closure_10(Portal, obj2);
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerCategories.tsx");

export default memoResult;