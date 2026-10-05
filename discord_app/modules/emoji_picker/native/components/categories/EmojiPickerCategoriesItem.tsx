// discord_app/modules/emoji_picker/native/components/categories/EmojiPickerCategoriesItem.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import EmojiPickerConstants from "../../../EmojiPickerConstants.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import Constants from "../../../../../Constants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let category;

let CATEGORY_ICON_SIZE;
let NODE_SIZE;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let size1;
let size2;
let View = react_native.View;
let EmojiCategoryTypes = EmojiPickerConstants.EmojiCategoryTypes;
({ CATEGORY_ICON_RIPPLE_CONFIG: metroImportDefault, CATEGORY_ICON_SIZE, NODE_SIZE } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  itemInner: size,
  fadedItem: obj2,
  activeItem: obj3,
  guildItem: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 },
  lockContainer: size1,
  lock: size2,
};
size = {
  justifyContent: "center",
  alignItems: "center",
  height: NODE_SIZE,
  width: NODE_SIZE,
  borderRadius: NODE_SIZE / 2,
};
obj2 = { backgroundColor: nativeDefault.colors.ICON_TRANSPARENT };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
size1 = {
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
size2 = { width: 7.5, height: 7.5, tintColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_10 = createStyles(obj);
const __initData = {
  code: "function EmojiPickerCategoriesItemTsx1(){const{withTiming,categoryIndexActive,index,timingStandard,styleColorActive,styleColorTransparent}=this.__closure;return{opacity:withTiming(categoryIndexActive.get()===index?1:0.5,timingStandard),backgroundColor:categoryIndexActive.get()===index?styleColorActive:styleColorTransparent};}",
};
const __initData2 = {
  code: "function EmojiPickerCategoriesItemTsx2(){const{categoryIndexActive,index}=this.__closure;return categoryIndexActive.get()===index;}",
};
const __initData3 = {
  code: "function EmojiPickerCategoriesItemTsx3(active,prev){const{runOnJS,setIsSelected}=this.__closure;if(active!==prev){runOnJS(setIsSelected)(active);}}",
};
const __initData4 = {
  code: "function EmojiPickerCategoriesItemTsx4(){const{withTiming,categoryIndexActive,index,timingStandard,styleColorActive,styleColorTransparent}=this.__closure;return{opacity:withTiming(categoryIndexActive.get()===index?1:0.5,timingStandard),backgroundColor:categoryIndexActive.get()===index?styleColorActive:styleColorTransparent};}",
};
const __initData5 = {
  code: "function EmojiPickerCategoriesItemTsx5(){const{categoryIndexActive,index}=this.__closure;return categoryIndexActive.get()===index;}",
};
const __initData6 = {
  code: "function EmojiPickerCategoriesItemTsx6(active,prev){const{runOnJS,setIsSelected}=this.__closure;if(active!==prev){runOnJS(setIsSelected)(active);}}",
};
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (category) => {
        let closure_6;
        let handlePressCategory;
        let items;
        let loadingStyle;
        let locked;
        let obj10;
        let style;
        let tmp10;
        let tmp11;
        let obj = category(handlePressCategory[9]);
        const cResult = obj.c(32);
        category = category.category;
        const categoryIndexActive = category.categoryIndexActive;
        handlePressCategory = category.handlePressCategory;
        const index = category.index;
        ({ loadingStyle, locked, style } = category);
        const tmp4 = closure_10();
        const backgroundColor = tmp4.activeItem.backgroundColor;
        const backgroundColor2 = tmp4.fadedItem.backgroundColor;
        let obj2 = category(handlePressCategory[10]);
        const fn = function u() {
          const withTiming = timing.withTiming;
          let num = 0.5;
          timing;
          if (categoryIndexActive.get() === index) {
            num = 1;
          }
          const obj2 = {
            opacity: withTiming(num, timingPresets.timingStandard),
            backgroundColor: categoryIndexActive.get() === index ? backgroundColor : backgroundColor2,
          };
          return obj2;
        };
        fn.__closure = {
          withTiming: category(handlePressCategory[11]).withTiming,
          categoryIndexActive,
          index,
          timingStandard: category(handlePressCategory[12]).timingStandard,
          styleColorActive: backgroundColor,
          styleColorTransparent: backgroundColor2,
        };
        fn.__workletHash = 3335518235623;
        fn.__initData = __initData;
        ({
          withTiming: category(handlePressCategory[11]).withTiming,
          categoryIndexActive,
          index,
          timingStandard: category(handlePressCategory[12]).timingStandard,
          styleColorActive: backgroundColor,
          styleColorTransparent: backgroundColor2,
        });
        const animatedStyle = obj2.useAnimatedStyle(fn);
        if (cResult[0] === categoryIndexActive) {
          let tmp6;
          if (cResult[1] === index) {
            tmp6 = cResult[2];
          }
          let num = 2;
          [tmp10, tmp11] = index(backgroundColor.useState(tmp6), 2);
          EmojiCategoryTypes = tmp11;
          index(backgroundColor.useState(tmp6), 2);
          const fn3 = function j() {
            return categoryIndexActive.get() === index;
          };
          const obj4 = { categoryIndexActive, index };
          fn3.__closure = obj4;
          fn3.__workletHash = 12996370114251;
          fn3.__initData = __initData2;
          const tmpResult = category(handlePressCategory[10]);
          class L {
            constructor(arg0, arg1) {
              if (arg0 !== arg1) {
                const obj = ReanimatedRexport;
                obj.runOnJS(EmojiCategoryTypes)(arg0);
              }
            }
          }
          const useAnimatedReaction = tmpResult.useAnimatedReaction;
          L.__closure = { runOnJS: category(handlePressCategory[10]).runOnJS, setIsSelected: tmp11 };
          L.__workletHash = 6056273557261;
          L.__initData = __initData3;
          const obj5 = { runOnJS: category(handlePressCategory[10]).runOnJS, setIsSelected: tmp11 };
          const animatedReaction = useAnimatedReaction(fn3, L);
          if (cResult[3] === category) {
            if (cResult[4] === handlePressCategory) {
              let tmp16;
              let name;
              let tmp18;
              if (cResult[5] === index) {
                tmp16 = cResult[6];
              }
              const tmp17 = EmojiCategoryTypes;
              if (category.type === EmojiCategoryTypes.GUILD) {
                name = category.guild.name;
              } else {
                name = category.name;
              }
              if (cResult[7] !== tmp10) {
                const obj6 = { selected: tmp10 };
                cResult[7] = tmp10;
                cResult[8] = obj6;
                tmp18 = obj6;
              } else {
                tmp18 = cResult[8];
              }
              if (cResult[9] === tmp4.itemInner) {
                let tmp19;
                let tmp23;
                if (cResult[10] === animatedStyle) {
                  tmp19 = cResult[11];
                }
                if (cResult[12] === category.guild) {
                  if (cResult[13] === category.id) {
                    if (cResult[14] === category.type) {
                      if (cResult[15] === loadingStyle) {
                        let tmp20;
                        if (cResult[16] === tmp4.guildItem) {
                          tmp20 = cResult[17];
                        }
                        if (cResult[18] === locked) {
                          if (cResult[19] === tmp4.lock) {
                            let tmp27;
                            if (cResult[20] === tmp4.lockContainer) {
                              tmp27 = cResult[21];
                            }
                            if (cResult[22] === tmp19) {
                              if (cResult[23] === tmp20) {
                                let tmp31;
                                if (cResult[24] === tmp27) {
                                  tmp31 = cResult[25];
                                }
                                if (cResult[26] === tmp16) {
                                  if (cResult[27] === style) {
                                    if (cResult[28] === name) {
                                      if (cResult[29] === tmp18) {
                                        let tmp35;
                                        if (cResult[30] === tmp31) {
                                          tmp35 = cResult[31];
                                        }
                                        return tmp35;
                                      }
                                    }
                                  }
                                }
                                const obj7 = {
                                  androidRippleConfig,
                                  style,
                                  onPress: tmp16,
                                  accessibilityRole: "tab",
                                  accessibilityLabel: name,
                                  accessibilityState: tmp18,
                                  children: tmp31,
                                };
                                const tmp38 = closure_8(category(handlePressCategory[16]).PressableOpacity, obj7);
                                cResult[26] = tmp16;
                                cResult[27] = style;
                                cResult[28] = name;
                                class L {
                                  constructor(arg0, arg1) {
                                    if (arg0 !== arg1) {
                                      const obj = ReanimatedRexport;
                                      obj.runOnJS(EmojiCategoryTypes)(arg0);
                                    }
                                  }
                                }
                                cResult[29] = tmp18;
                                cResult[30] = tmp31;
                                cResult[31] = tmp38;
                                tmp35 = tmp38;
                              }
                            }
                            const obj8 = { style: tmp19, children: items };
                            items = [tmp20, tmp27];
                            cResult[22] = tmp19;
                            cResult[23] = tmp20;
                            cResult[24] = tmp27;
                            const tmp34 = closure_9(categoryIndexActive(handlePressCategory[10]).View, obj8);
                            class L {
                              constructor(arg0, arg1) {
                                if (arg0 !== arg1) {
                                  const obj = ReanimatedRexport;
                                  obj.runOnJS(EmojiCategoryTypes)(arg0);
                                }
                              }
                            }
                            tmp31 = tmp34;
                          }
                        }
                        let tmp28 = locked;
                        if (tmp28) {
                          const obj9 = {
                            style: tmp4.lockContainer,
                            children: closure_8(category(handlePressCategory[15]).LockIcon, obj10),
                          };
                          obj10 = { style: tmp4.lock };
                          tmp28 = closure_8(backgroundColor2, obj9);
                        }
                        cResult[18] = locked;
                        cResult[19] = tmp4.lock;
                        cResult[20] = tmp4.lockContainer;
                        cResult[21] = tmp28;
                        tmp27 = tmp28;
                      }
                    }
                  }
                }
                if (category.type === tmp17.GUILD) {
                  const obj11 = {
                    guild: category.guild,
                    loadingStyle,
                    size: category(handlePressCategory[13]).GuildIconSizes.XSMALL,
                    style: tmp4.guildItem,
                  };
                  const tmp26 = categoryIndexActive(handlePressCategory[13]);
                  tmp23 = closure_8(tmp26, obj11);
                } else {
                  const obj12 = { id: category.id };
                  tmp23 = closure_8(categoryIndexActive(tmp2[14]), obj12);
                }
                cResult[12] = category.guild;
                cResult[13] = category.id;
                cResult[14] = category.type;
                cResult[15] = loadingStyle;
                cResult[16] = tmp4.guildItem;
                cResult[17] = tmp23;
                tmp20 = tmp23;
              }
              const items1 = [tmp4.itemInner, animatedStyle];
              cResult[9] = tmp4.itemInner;
              cResult[10] = animatedStyle;
              cResult[11] = items1;
              tmp19 = items1;
            }
          }
          class D {
            constructor() {
              return handlePressCategory(index, category);
            }
          }
          cResult[3] = category;
          cResult[4] = handlePressCategory;
          cResult[5] = index;
          cResult[6] = D;
          tmp16 = D;
        }
        const fn2 = function y() {
          return categoryIndexActive.get() === index;
        };
        cResult[0] = categoryIndexActive;
        cResult[1] = index;
        cResult[2] = fn2;
        tmp6 = fn2;
      }
    : (category) => {
        let closure_6;
        let items1;
        let items2;
        let loadingStyle;
        let name;
        let obj10;
        let obj6;
        let style;
        let tmp10Result;
        category = category.category;
        const categoryIndexActive = category.categoryIndexActive;
        const handlePressCategory = category.handlePressCategory;
        const index = category.index;
        let locked = category.locked;
        ({ loadingStyle, style } = category);
        const tmp = closure_10();
        const backgroundColor = tmp.activeItem.backgroundColor;
        const backgroundColor2 = tmp.fadedItem.backgroundColor;
        const tmp3 = handlePressCategory;
        let obj = category(handlePressCategory[10]);
        const fn = function p() {
          const withTiming = timing.withTiming;
          let num = 0.5;
          timing;
          if (categoryIndexActive.get() === index) {
            num = 1;
          }
          const obj2 = {
            opacity: withTiming(num, timingPresets.timingStandard),
            backgroundColor: categoryIndexActive.get() === index ? backgroundColor : backgroundColor2,
          };
          return obj2;
        };
        let obj2 = {
          withTiming: category(handlePressCategory[11]).withTiming,
          categoryIndexActive,
          index,
          timingStandard: category(handlePressCategory[12]).timingStandard,
          styleColorActive: backgroundColor,
          styleColorTransparent: backgroundColor2,
        };
        fn.__closure = obj2;
        fn.__workletHash = 15742913042626;
        fn.__initData = __initData4;
        const animatedStyle = obj.useAnimatedStyle(fn);
        const tmp5 = index(
          backgroundColor.useState(() => categoryIndexActive.get() === index),
          2,
        );
        EmojiCategoryTypes = tmp7;
        const first = tmp5[0];
        const fn2 = function f() {
          return categoryIndexActive.get() === index;
        };
        fn2.__closure = { categoryIndexActive, index };
        fn2.__workletHash = 5696781581292;
        fn2.__initData = __initData5;
        const obj3 = category(handlePressCategory[10]);
        class T {
          constructor(arg0, arg1) {
            if (arg0 !== arg1) {
              const obj = ReanimatedRexport;
              obj.runOnJS(closure_6)(arg0);
            }
          }
        }
        T.__closure = { runOnJS: category(handlePressCategory[10]).runOnJS, setIsSelected: tmp5[1] };
        T.__workletHash = 12572214271848;
        T.__initData = __initData6;
        ({ runOnJS: category(handlePressCategory[10]).runOnJS, setIsSelected: tmp5[1] });
        const animatedReaction = obj3.useAnimatedReaction(fn2, T);
        const items = [handlePressCategory, index, category];
        const callback = backgroundColor.useCallback(() => handlePressCategory(index, category), items);
        const obj5 = {
          androidRippleConfig,
          style,
          onPress: callback,
          accessibilityRole: "tab",
          accessibilityLabel: name,
          accessibilityState: { selected: first },
          children: closure_9(View, obj6),
        };
        const PressableOpacity = category(handlePressCategory[16]).PressableOpacity;
        const tmp11 = EmojiCategoryTypes;
        if (category.type === EmojiCategoryTypes.GUILD) {
          name = category.guild.name;
        } else {
          name = category.name;
        }
        obj6 = { style: items1, children: items2 };
        items1 = [tmp.itemInner, animatedStyle];
        View = categoryIndexActive(tmp3[10]).View;
        if (category.type === tmp11.GUILD) {
          const obj7 = {
            guild: category.guild,
            loadingStyle,
            size: category(tmp3[13]).GuildIconSizes.XSMALL,
            style: tmp.guildItem,
          };
          const tmp13Result = categoryIndexActive(tmp3[13]);
          tmp10Result = closure_8(tmp13Result, obj7);
        } else {
          const obj8 = { id: category.id };
          tmp10Result = closure_8(tmp13(tmp3[14]), obj8);
        }
        items2 = [tmp10Result];
        if (locked) {
          const obj9 = { style: tmp.lockContainer, children: closure_8(category(tmp3[15]).LockIcon, obj10) };
          obj10 = { style: tmp.lock };
          locked = closure_8(backgroundColor2, obj9);
        }
        items2[1] = locked;
        return closure_8(PressableOpacity, obj5);
      },
);
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/emoji_picker/native/components/categories/EmojiPickerCategoriesItem.tsx",
);

export default memoResult;
