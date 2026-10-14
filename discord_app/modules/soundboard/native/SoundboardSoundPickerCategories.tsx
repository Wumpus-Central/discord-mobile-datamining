// discord_app/modules/soundboard/native/SoundboardSoundPickerCategories.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import LegacyBaseButton from "../../../../_runtime/06339_LegacyBaseButton.js";
import SoundboardTypes from "../SoundboardTypes.tsx";
import LockIcon from "../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import TrophyIcon from "../../../design/components/Icon/native/redesign/generated/TrophyIcon.tsx";
import PremiumFeatureUpsellUtils from "../../premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx";
import _modDef9773 from "../../../../_runtime/metro/09773__.js";
import _modDef17875 from "../../../../_runtime/metro/17875__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
let closure_3 = ["ref"];
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const setSearchQuery = fn(17859).setSearchQuery;
const Constants = fn(1085);
({ CATEGORY_ICON_SIZE, EXPRESSION_FOOTER_HEIGHT } = Constants);
({ NODE_SIZE, NODE_MARGIN } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5096);
let obj = {
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderTopColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  },
  list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT },
  item: null,
  fadedItem: { opacity: 0.5 },
  activeItem: null,
  guildItem: null,
  keyboardItem: null,
  lockContainer: null,
  lock: null,
};
let size = {
  margin: NODE_MARGIN,
  height: NODE_SIZE,
  width: NODE_SIZE,
  borderRadius: NODE_SIZE / 2,
  alignItems: "center",
  justifyContent: "center",
};
obj.item = size;
let obj3 = {
  borderTopWidth: StyleSheet.hairlineWidth,
  paddingHorizontal: 8,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderTopColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj.activeItem = { opacity: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
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
let closure_14 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SoundCategoryItem(index) {
      const cResult = c.c(36);
      ({ category, handlePressCategory } = index);
      index = index.index;
      ({ style, locked } = index);
      const tmp5 = closure_14();
      const type = category.categoryInfo.type;
      if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
        let guildItem = category.categoryInfo.guild;
        if (cResult[0] === guildItem) {
        }
        const obj2 = { guild: guildItem, style: tmp5.guildItem };
        const tmp37 = __initData(GuildIconDefault, obj2);
        cResult[0] = guildItem;
        guildItem = tmp5.guildItem;
        cResult[1] = guildItem;
        cResult[2] = tmp37;
      } else {
        if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
          const _Symbol4 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl5 = util.intl;
            const stringResult = intl5.string(util.t.y3LQCG);
            cResult[3] = stringResult;
            let tmp30 = stringResult;
          } else {
            tmp30 = cResult[3];
          }
          let tmp12 = _modDef9773;
          let tmp11 = null;
          let tmp14 = tmp30;
          let tmp13 = null;
        } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
          const _Symbol3 = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = util.intl;
            const stringResult1 = intl4.string(util.t["+cGVV6"]);
            cResult[4] = stringResult1;
            let tmp24 = stringResult1;
          } else {
            tmp24 = cResult[4];
          }
          if (cResult[5] !== tmp5.keyboardItem) {
            const obj3 = { style: tmp5.keyboardItem };
            const tmp28 = __initData(ClockIcon.ClockIcon, obj3);
            cResult[5] = tmp5.keyboardItem;
            cResult[6] = tmp28;
            let tmp26 = tmp28;
          } else {
            tmp26 = cResult[6];
          }
          tmp12 = null;
          tmp11 = tmp26;
          tmp13 = null;
          tmp14 = tmp24;
        } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
          const _Symbol2 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = util.intl;
            const stringResult2 = intl3.string(util.t.Rtvk9X);
            cResult[7] = stringResult2;
            let tmp20 = stringResult2;
          } else {
            tmp20 = cResult[7];
          }
          tmp12 = _modDef17875;
          tmp11 = null;
          tmp14 = tmp20;
          tmp13 = null;
        } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = util.intl;
            const stringResult3 = intl2.string(util.t.sKt3xS);
            cResult[8] = stringResult3;
            let tmp16 = stringResult3;
          } else {
            tmp16 = cResult[8];
          }
          tmp12 = _modDef17875;
          tmp11 = null;
          tmp14 = tmp16;
          tmp13 = null;
        } else {
          tmp12 = null;
          tmp11 = null;
          tmp13 = null;
          tmp14 = null;
          if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
            if (cResult[9] !== category.categoryInfo.guild.name) {
              const intl = util.intl;
              const obj4 = { guildName: category.categoryInfo.guild.name };
              const formatToPlainStringResult = intl.formatToPlainString(util.t.GXs41w, obj4);
              cResult[9] = category.categoryInfo.guild.name;
              cResult[10] = formatToPlainStringResult;
              let tmp6 = formatToPlainStringResult;
            } else {
              tmp6 = cResult[10];
            }
            if (cResult[11] !== tmp5.keyboardItem) {
              const obj5 = { style: tmp5.keyboardItem };
              const tmp10 = __initData(TrophyIcon.TrophyIcon, obj5);
              cResult[11] = tmp5.keyboardItem;
              cResult[12] = tmp10;
              let tmp8 = tmp10;
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
          if (cResult[14] === index) {
            let tmp42 = cResult[15];
          }
          if (cResult[16] === style) {
            if (cResult[17] === tmp5.item) {
              let tmp43 = cResult[18];
            }
            if (cResult[19] === tmp11) {
              if (cResult[20] === tmp13) {
                if (cResult[21] === tmp12) {
                  if (cResult[22] === tmp5.keyboardItem) {
                    let tmp44 = cResult[23];
                  }
                  if (cResult[24] === tmp4) {
                    if (cResult[25] === tmp5.lock) {
                      if (cResult[26] === tmp5.lockContainer) {
                        let tmp48 = cResult[27];
                      }
                      if (cResult[28] === tmp43) {
                        if (cResult[29] === tmp44) {
                          if (cResult[30] === tmp48) {
                            let tmp52 = cResult[31];
                          }
                          if (cResult[32] === tmp14) {
                            if (cResult[33] === tmp42) {
                              if (cResult[34] === tmp52) {
                                let tmp56 = cResult[35];
                              }
                              return tmp56;
                            }
                          }
                          const obj6 = {
                            onPress: tmp42,
                            accessibilityRole: "button",
                            accessibilityLabel: tmp14,
                            children: tmp52,
                          };
                          const tmp58 = __initData(Pressables.PressableOpacity, obj6);
                          cResult[32] = tmp14;
                          cResult[33] = tmp42;
                          cResult[34] = tmp52;
                          cResult[35] = tmp58;
                          tmp56 = tmp58;
                        }
                      }
                      const obj7 = { style: tmp43, children: null };
                      const items = [tmp44, tmp48];
                      obj7.children = items;
                      const tmp55 = map1(View, obj7);
                      cResult[28] = tmp43;
                      cResult[29] = tmp44;
                      cResult[30] = tmp48;
                      cResult[31] = tmp55;
                      tmp52 = tmp55;
                    }
                  }
                  let tmp49 = tmp4;
                  if (tmp4) {
                    const obj8 = { style: tmp5.lockContainer, children: null };
                    const obj9 = { style: tmp5.lock };
                    obj8.children = __initData(LockIcon.LockIcon, obj9);
                    tmp49 = __initData(View, obj8);
                  }
                  cResult[24] = tmp4;
                  cResult[25] = tmp5.lock;
                  cResult[26] = tmp5.lockContainer;
                  cResult[27] = tmp49;
                  tmp48 = tmp49;
                }
              }
            }
            let tmp46 = tmp13;
            if (tmp13 == null) {
              tmp46 = tmp11;
            }
            if (tmp46 == null) {
              const obj10 = { style: tmp5.keyboardItem, source: tmp12 };
              tmp46 = __initData(native.Icon, obj10);
            }
            cResult[19] = tmp11;
            cResult[20] = tmp13;
            cResult[21] = tmp12;
            cResult[22] = tmp5.keyboardItem;
            cResult[23] = tmp46;
            tmp44 = tmp46;
          }
          const items1 = [tmp5.item, style];
          cResult[16] = style;
          cResult[17] = tmp5.item;
          cResult[18] = items1;
          tmp43 = items1;
        }
        const fn = function o() {
          return handlePressCategory(index);
        };
        cResult[13] = handlePressCategory;
        cResult[14] = index;
        cResult[15] = fn;
        tmp42 = fn;
      }
    }
  : function SoundCategoryItem(style) {
      ({ category, handlePressCategory: require, index: importDefault, locked } = style);
      if (locked === undefined) {
        locked = false;
      }
      const tmp = closure_14();
      const type = category.categoryInfo.type;
      if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
        guild = category.categoryInfo.guild;
        let name = guild.name;
        const obj2 = { guild, style: tmp.guildItem };
        let tmp14Result = __initData(GuildIconDefault, obj2);
        let tmp6 = null;
        let tmp7 = null;
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
        const intl4 = util.intl;
        name = intl4.string(util.t.y3LQCG);
        tmp6 = _modDef9773;
        tmp7 = null;
        tmp14Result = null;
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
        const intl3 = util.intl;
        name = intl3.string(util.t["+cGVV6"]);
        const obj = { style: tmp.keyboardItem };
        tmp7 = __initData(ClockIcon.ClockIcon, obj);
        tmp6 = null;
        tmp14Result = null;
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
        const intl2 = util.intl;
        name = intl2.string(util.t.Rtvk9X);
        tmp6 = _modDef17875;
        tmp7 = null;
        tmp14Result = null;
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
        const intl = util.intl;
        name = intl.string(util.t.sKt3xS);
        tmp6 = _modDef17875;
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
          tmp7 = __initData(TrophyIcon.TrophyIcon, obj4);
          tmp6 = null;
          tmp14Result = null;
        }
      }
      const obj5 = {
        onPress() {
          return _require(importDefault);
        },
        accessibilityRole: "button",
        accessibilityLabel: name,
        children: null,
      };
      const obj6 = { style: null, children: null };
      const items = [tmp.item, style.style];
      obj6.style = items;
      if (tmp14Result == null) {
        tmp14Result = tmp7;
      }
      if (tmp14Result == null) {
        const obj7 = { style: tmp.keyboardItem, source: tmp6 };
        tmp14Result = __initData(native.Icon, obj7);
      }
      const items1 = [tmp14Result];
      if (locked) {
        const obj8 = { style: tmp.lockContainer, children: null };
        const obj9 = { style: tmp.lock };
        obj8.children = __initData(LockIcon.LockIcon, obj9);
        locked = __initData(View, obj8);
      }
      items1[1] = locked;
      obj6.children = items1;
      obj5.children = map1(View, obj6);
      return __initData(Pressables.PressableOpacity, obj5);
    };
ReactCompilerGating = fn(558);
const renderScrollComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? function SoundboardCategoryScrollView(ref) {
      const cResult = c.c(10);
      if (cResult[0] !== ref) {
        const tmp8 = _objectWithoutProperties(ref.ref, closure_3);
        cResult[0] = ref.ref;
        cResult[1] = tmp8;
        cResult[2] = ref.ref;
        let tmp5 = ref;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { disallowInterruption: true };
        cResult[3] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[3];
      }
      const nativeGesture = LegacyBaseButton.useNativeGesture(tmp9);
      if (cResult[4] === tmp4) {
        if (cResult[5] === tmp5) {
          let tmp11 = cResult[6];
        }
        if (cResult[7] === nativeGesture) {
          if (cResult[8] === tmp11) {
            let tmp14 = cResult[9];
          }
          return tmp14;
        }
        const obj3 = { gesture: nativeGesture, children: tmp11 };
        const tmp16 = __initData(LegacyBaseButton.GestureDetector, obj3);
        cResult[7] = nativeGesture;
        cResult[8] = tmp11;
        cResult[9] = tmp16;
        tmp14 = tmp16;
      }
      const obj4 = { ref: tmp5 };
      const merged = Object.assign(tmp4);
      obj4.nestedScrollEnabled = true;
      const tmp13 = __initData(timestampProducer, obj4);
      cResult[4] = tmp4;
      cResult[5] = tmp5;
      cResult[6] = tmp13;
      tmp11 = tmp13;
      const tmpResult = LegacyBaseButton;
    }
  : function SoundboardCategoryScrollView(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const nativeGesture = LegacyBaseButton.useNativeGesture({ disallowInterruption: true });
      const obj2 = { gesture: nativeGesture, children: null };
      const obj3 = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj3.nestedScrollEnabled = true;
      obj2.children = __initData(timestampProducer, obj3);
      return __initData(LegacyBaseButton.GestureDetector, obj2);
    };
ReactCompilerGating = fn(558);
let obj4 = { opacity: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerCategories.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SoundboardSoundPickerCategories(guildId) {
        const cResult = guildId(listRef[10]).c(32);
        guildId = guildId.guildId;
        ({ categories, categoryIndex } = guildId);
        ({ style, listRef } = guildId);
        const tmp4 = closure_14();
        closure_3 = tmp4;
        noop.useRef(null);
        noop = noop.useRef(null);
        noop.useRef(null);
        if (cResult[0] !== categoryIndex) {
          const fn = function o() {
            if (null != ref.current) {
              if (null != ref2.current) {
                if (null != ref.current) {
                  const result = categoryIndex * EXPRESSION_FOOTER_HEIGHT;
                  if (tmp7) {
                    const current = tmp3.current;
                    const obj = { offset: result };
                    current.scrollToOffset(obj);
                  }
                  tmp7 = result > tmp2.current || result < tmp.current;
                }
              }
            }
          };
          const items = [categoryIndex];
          cResult[0] = categoryIndex;
          cResult[1] = fn;
          cResult[2] = items;
          let tmp7 = items;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[1];
          tmp7 = cResult[2];
        }
        const effect = noop.useEffect(tmp6, tmp7);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function c(nativeEvent) {
            closure_5.current = 0;
            closure_6.current = nativeEvent.nativeEvent.layout.width;
          };
          cResult[3] = fn2;
        }
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function x(nativeEvent) {
            nativeEvent = nativeEvent.nativeEvent;
            const contentOffset = nativeEvent.contentOffset;
            closure_5.current = contentOffset.x;
            closure_6.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
          };
          cResult[4] = fn3;
        }
        if (cResult[5] !== listRef) {
          class N {
            constructor(arg0) {
              closure_0 = guildId;
              tmp = closure_1_9("");
              setImmediateResult = setImmediate(() => {
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
              return;
            }
          }
          cResult[5] = listRef;
          cResult[6] = N;
        } else {
          class N {
            constructor(arg0) {
              closure_0 = guildId;
              tmp = closure_1_9("");
              setImmediateResult = setImmediate(() => {
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
              return;
            }
          }
        }
        handlePressCategory = N;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor(arg0) {
              closure_0 = guildId;
              tmp = closure_1_9("");
              setImmediateResult = setImmediate(() => {
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
              return;
            }
          }
          const items1 = [UserStore];
          class U {
            constructor() {
              obj = categoryIndex(listRef[24]);
              return obj.canUseSoundboardEverywhere(closure_1_10.getCurrentUser());
            }
          }
          cResult[7] = items1;
          cResult[8] = U;
          let tmp13 = U;
          const tmp12 = items1;
        } else {
          class N {
            constructor(arg0) {
              closure_0 = guildId;
              tmp = closure_1_9("");
              setImmediateResult = setImmediate(() => {
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
              return;
            }
          }
          tmp13 = cResult[8];
        }
        let obj = guildId(listRef[10]);
        const stateFromStores = guildId(listRef[25]).useStateFromStores(tmp12, tmp13);
        if (cResult[9] === stateFromStores) {
          class N {
            constructor(arg0) {
              closure_0 = guildId;
              tmp = closure_1_9("");
              setImmediateResult = setImmediate(() => {
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
              return;
            }
          }
        }
        class H {
          constructor(arg0) {
            ({ item, index } = guildId);
            result = !closure_8;
            if (!closure_8) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[26]);
              tmp4 = guildId;
              result = obj.isSoundboardSectionNitroLocked(guildId, item.categoryInfo);
            }
            obj1 = { category: item, index, style: null, handlePressCategory: null, locked: null };
            if (null != categoryIndex) {
              if (index === categoryIndex) {
                tmp7 = closure_3;
                fadedItem = closure_3.activeItem;
              }
              obj1.style = fadedItem;
              tmp8 = closure_7;
              obj1.handlePressCategory = closure_7;
              obj1.locked = result;
              return tmp5(tmp6, obj1);
            }
            fadedItem = closure_3.fadedItem;
            return;
          }
        }
        cResult[9] = stateFromStores;
        cResult[10] = categoryIndex;
        cResult[11] = guildId;
        cResult[12] = N;
        cResult[13] = tmp4.activeItem;
        cResult[14] = tmp4.fadedItem;
        cResult[15] = H;
        const tmpResult = guildId(listRef[25]);
      }
    : function SoundboardSoundPickerCategories(guildId) {
        guildId = guildId.guildId;
        const categoryIndex = guildId.categoryIndex;
        const listRef = guildId.listRef;
        noop = undefined;
        ({ categories, style } = guildId);
        const tmp = closure_14();
        closure_3 = tmp;
        const ref = noop.useRef(null);
        noop = noop.useRef(null);
        noop.useRef(null);
        const items = [categoryIndex];
        const effect = noop.useEffect(() => {
          if (null != ref.current) {
            if (null != ref2.current) {
              if (null != ref.current) {
                const result = categoryIndex * EXPRESSION_FOOTER_HEIGHT;
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
          setSearchQuery("");
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
        const items2 = [UserStore];
        const stateFromStores = guildId(listRef[25]).useStateFromStores(items2, () =>
          categoryIndex(listRef[24]).canUseSoundboardEverywhere(currentUser.getCurrentUser()),
        );
        const items3 = [stateFromStores, guildId, callback2, categoryIndex, ,];
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
        let obj2 = { hostName: "soundboard-footer", children: null };
        const obj3 = { style: null, children: null };
        const items4 = [tmp.container, { paddingBottom: categoryIndex(listRef[27])().bottom }, style];
        obj3.style = items4;
        const items5 = [
          closure_12(categoryIndex(listRef[28]), { style: callback2.absoluteFill }),
          closure_12(guildId(listRef[29]).FlashList, {
            ref,
            style: tmp.list,
            onLayout: callback,
            onScroll: callback1,
            data: categories,
            extraData: categoryIndex,
            keyboardShouldPersistTaps: "always",
            horizontal: true,
            keyExtractor(key) {
              return String(key.key);
            },
            renderItem: callback3,
            renderScrollComponent,
            showsHorizontalScrollIndicator: false,
          }),
        ];
        obj3.children = items5;
        obj2.children = closure_13(stateFromStores, obj3);
        return closure_12(guildId(listRef[30]).Portal, obj2);
      },
);
