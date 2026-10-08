// discord_app/modules/stickers/native/StickerPickerCategories.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import StickersTypes from "../StickersTypes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
const View = fn(17).View;
let useStickerPickerStore = fn(9712).useStickerPickerStore;
const Constants = fn(1085);
({
  AnalyticEvents: closure_8,
  AnalyticsPages: closure_9,
  CATEGORY_ICON_RIPPLE_CONFIG: c10,
  CATEGORY_ICON_SIZE,
} = Constants);
const EXPRESSION_FOOTER_HEIGHT = Constants.EXPRESSION_FOOTER_HEIGHT;
const NODE_SIZE = Constants.NODE_SIZE;
const ExpressionPickerViewType = fn(1241).ExpressionPickerViewType;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5090);
let obj = {
  list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT },
  item: {
    height: EXPRESSION_FOOTER_HEIGHT,
    width: EXPRESSION_FOOTER_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  itemInner: null,
  fadedItem: { opacity: 0.5 },
  activeItem: { opacity: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE },
  guildIcon: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 },
  guildItemPlaceholder: null,
  lockContainer: null,
  lock: null,
};
let size = {
  justifyContent: "center",
  alignItems: "center",
  height: NODE_SIZE,
  width: NODE_SIZE,
  borderRadius: NODE_SIZE / 2,
};
obj.itemInner = size;
let obj3 = { opacity: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.guildItemPlaceholder = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
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
let closure_16 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_17 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function StickerCategoryItem(category) {
        const cResult = category(index[11]).c(38);
        category = category.category;
        const onPressCategory = category.onPressCategory;
        index = category.index;
        ({ isActive: guildItemPlaceholder, locked } = category);
        let tmp4 = closure_16();
        const AnimateStickers = category(index[12]).AnimateStickers;
        const setting = AnimateStickers.useSetting();
        if (cResult[0] !== setting) {
          const shouldAnimateStickerResult = tmp(tmp2[13]).shouldAnimateSticker(setting, false);
          cResult[0] = setting;
          cResult[1] = shouldAnimateStickerResult;
          let tmp6 = shouldAnimateStickerResult;
          const tmpResult = tmp(tmp2[13]);
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] === category.id) {
          if (cResult[3] === category.type) {
            let tmp8 = cResult[4];
          }
          user = tmp8;
          if (cResult[5] === category.id) {
            if (cResult[6] === category.type) {
              let id;
              if (tmp8 != null) {
                id = tmp8.id;
              }
              if (cResult[7] === id) {
                if (cResult[8] === index) {
                  if (cResult[11] !== guildItemPlaceholder) {
                    let obj2 = { selected: guildItemPlaceholder };
                    cResult[11] = guildItemPlaceholder;
                    cResult[12] = obj2;
                    let tmp16 = obj2;
                  } else {
                    tmp16 = cResult[12];
                  }
                  const tmp18 = guildItemPlaceholder ? tmp4.activeItem : tmp4.fadedItem;
                  if (cResult[13] === tmp4.itemInner) {
                    if (cResult[14] === tmp18) {
                      let tmp19 = cResult[15];
                    }
                    if (cResult[16] === tmp6) {
                      if (cResult[17] === category) {
                        if (cResult[18] === tmp8) {
                          if (cResult[19] === guildItemPlaceholder) {
                            if (cResult[20] === tmp4.guildIcon) {
                              if (cResult[21] === tmp4.guildItemPlaceholder) {
                                if (cResult[23] === locked) {
                                  if (cResult[24] === tmp4.lock) {
                                    if (cResult[25] === tmp4.lockContainer) {
                                      let tmp33 = cResult[26];
                                    }
                                    if (cResult[27] === tmp33) {
                                      if (cResult[28] === tmp19) {
                                        if (cResult[29] === tmp20) {
                                          let tmp37 = cResult[30];
                                        }
                                        if (cResult[31] === category.name) {
                                          if (cResult[32] === tmp4.item) {
                                            if (cResult[33] === tmp37) {
                                              if (cResult[34] === tmp16) {
                                                if (cResult[35] === tmp41) {
                                                  if (cResult[36] === tmp17) {
                                                    let tmp42 = cResult[37];
                                                  }
                                                  return tmp42;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        let obj3 = {
                                          androidRippleConfig,
                                          accessibilityRole: "tab",
                                          accessibilityLabel: category.name,
                                          accessibilityState: tmp16,
                                          disabled: 0 === category.stickers.length,
                                          onPress: null,
                                          style: null,
                                          children: null,
                                        };
                                        class A {
                                          constructor() {
                                            tmp = category;
                                            tmp3 = closure_2;
                                            tmp2 = closure_0;
                                            tmp4 = category.type !== closure_0(closure_2[14]).StickerCategoryTypes.PACK;
                                            if (tmp4) {
                                              tmp4 = tmp.type !== tmp2(tmp3[14]).StickerCategoryTypes.GUILD;
                                            }
                                            if (!tmp4) {
                                              tmp5 = closure_1;
                                              obj = closure_1(tmp3[15]);
                                              tmp6 = AnalyticEvents;
                                              obj1 = {
                                                location: null,
                                                tab: null,
                                                sticker_pack_id: null,
                                                guild_id: null,
                                              };
                                              obj4 = { page: null };
                                              tmp7 = AnalyticsPages;
                                              obj4.page = AnalyticsPages.EXPRESSION_PICKER;
                                              obj1.location = obj4;
                                              tmp8 = ExpressionPickerViewType;
                                              obj1.tab = ExpressionPickerViewType.STICKER;
                                              obj1.sticker_pack_id = tmp.id;
                                              tmp9 = null;
                                              id = undefined;
                                              if (closure_3 != null) {
                                                id = closure_3.id;
                                              }
                                              obj1.guild_id = id;
                                              trackResult = obj.track(
                                                AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED,
                                                obj1,
                                              );
                                            }
                                            tmp12Result = undefined;
                                            if (onPressCategory != null) {
                                              tmp14 = index;
                                              tmp12Result = tmp12(index);
                                            }
                                            return tmp12Result;
                                          }
                                        }
                                        obj3.style = tmp4.item;
                                        obj3.children = tmp37;
                                        const tmp45 = closure_14(tmp(tmp2[21]).PressableOpacity, obj3);
                                        cResult[31] = category.name;
                                        cResult[32] = tmp4.item;
                                        cResult[33] = tmp37;
                                        cResult[34] = tmp16;
                                        cResult[35] = 0 === category.stickers.length;
                                        cResult[36] = tmp17;
                                        cResult[37] = tmp45;
                                        tmp42 = tmp45;
                                      }
                                    }
                                    const obj4 = { style: tmp19, children: null };
                                    const items = [tmp20, tmp33];
                                    obj4.children = items;
                                    class A {
                                      constructor() {
                                        tmp = category;
                                        tmp3 = closure_2;
                                        tmp2 = closure_0;
                                        tmp4 = category.type !== closure_0(closure_2[14]).StickerCategoryTypes.PACK;
                                        if (tmp4) {
                                          tmp4 = tmp.type !== tmp2(tmp3[14]).StickerCategoryTypes.GUILD;
                                        }
                                        if (!tmp4) {
                                          tmp5 = closure_1;
                                          obj = closure_1(tmp3[15]);
                                          tmp6 = AnalyticEvents;
                                          obj1 = { location: null, tab: null, sticker_pack_id: null, guild_id: null };
                                          obj4 = { page: null };
                                          tmp7 = AnalyticsPages;
                                          obj4.page = AnalyticsPages.EXPRESSION_PICKER;
                                          obj1.location = obj4;
                                          tmp8 = ExpressionPickerViewType;
                                          obj1.tab = ExpressionPickerViewType.STICKER;
                                          obj1.sticker_pack_id = tmp.id;
                                          tmp9 = null;
                                          id = undefined;
                                          if (closure_3 != null) {
                                            id = closure_3.id;
                                          }
                                          obj1.guild_id = id;
                                          trackResult = obj.track(
                                            AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED,
                                            obj1,
                                          );
                                        }
                                        tmp12Result = undefined;
                                        if (onPressCategory != null) {
                                          tmp14 = index;
                                          tmp12Result = tmp12(index);
                                        }
                                        return tmp12Result;
                                      }
                                    }
                                    cResult[27] = tmp33;
                                    cResult[28] = tmp19;
                                    cResult[29] = tmp20;
                                    cResult[30] = tmp40;
                                    tmp37 = tmp40;
                                  }
                                }
                                let tmp34 = locked;
                                if (locked) {
                                  const obj5 = { style: tmp4.lockContainer, children: null };
                                  const obj6 = { style: tmp4.lock };
                                  obj5.children = closure_14(tmp(tmp2[20]).LockIcon, obj6);
                                  tmp34 = closure_14(View, obj5);
                                }
                                cResult[23] = locked;
                                cResult[24] = tmp4.lock;
                                cResult[25] = tmp4.lockContainer;
                                class A {
                                  constructor() {
                                    tmp = category;
                                    tmp3 = closure_2;
                                    tmp2 = closure_0;
                                    tmp4 = category.type !== closure_0(closure_2[14]).StickerCategoryTypes.PACK;
                                    if (tmp4) {
                                      tmp4 = tmp.type !== tmp2(tmp3[14]).StickerCategoryTypes.GUILD;
                                    }
                                    if (!tmp4) {
                                      tmp5 = closure_1;
                                      obj = closure_1(tmp3[15]);
                                      tmp6 = AnalyticEvents;
                                      obj1 = { location: null, tab: null, sticker_pack_id: null, guild_id: null };
                                      obj4 = { page: null };
                                      tmp7 = AnalyticsPages;
                                      obj4.page = AnalyticsPages.EXPRESSION_PICKER;
                                      obj1.location = obj4;
                                      tmp8 = ExpressionPickerViewType;
                                      obj1.tab = ExpressionPickerViewType.STICKER;
                                      obj1.sticker_pack_id = tmp.id;
                                      tmp9 = null;
                                      id = undefined;
                                      if (closure_3 != null) {
                                        id = closure_3.id;
                                      }
                                      obj1.guild_id = id;
                                      trackResult = obj.track(AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, obj1);
                                    }
                                    tmp12Result = undefined;
                                    if (onPressCategory != null) {
                                      tmp14 = index;
                                      tmp12Result = tmp12(index);
                                    }
                                    return tmp12Result;
                                  }
                                }
                                cResult[26] = tmp34;
                                tmp33 = tmp34;
                              }
                            }
                          }
                        }
                      }
                    }
                    if (null != category.icon) {
                      const obj7 = {
                        style: tmp4.guildIcon,
                        disableColor: category.type === tmp(tmp2[14]).StickerCategoryTypes.PACK,
                        source: tmp(tmp2[17]).makeSource(category.icon),
                      };
                      let tmp22Result = closure_14(tmp(tmp2[16]).Icon, obj7);
                      const tmpResult2 = tmp(tmp2[17]);
                    } else if (category.type === tmp(tmp2[14]).StickerCategoryTypes.GUILD) {
                      const obj8 = {
                        guild: tmp8,
                        loadingStyle: tmp4.guildItemPlaceholder,
                        size: tmp(tmp2[18]).GuildIconSizes.XSMALL,
                        style: tmp4.guildIcon,
                      };
                      tmp22Result = closure_14(onPressCategory(tmp2[18]), obj8);
                      const tmp30 = onPressCategory(tmp2[18]);
                    } else {
                      if ("previewSticker" in category) {
                        if (null != category.previewSticker) {
                          let previewSticker = category.previewSticker;
                        }
                        const obj9 = { sticker: previewSticker, animated: null, size: null };
                        let tmp25 = tmp6;
                        if (tmp6) {
                          tmp25 = guildItemPlaceholder;
                        }
                        obj9.animated = tmp25;
                        obj9.size = CATEGORY_ICON_SIZE;
                        tmp22Result = closure_14(tmp24, obj9);
                      }
                      previewSticker = category.stickers[0];
                    }
                    cResult[16] = tmp6;
                    cResult[17] = category;
                    cResult[18] = tmp8;
                    class A {
                      constructor() {
                        tmp = category;
                        tmp3 = closure_2;
                        tmp2 = closure_0;
                        tmp4 = category.type !== closure_0(closure_2[14]).StickerCategoryTypes.PACK;
                        if (tmp4) {
                          tmp4 = tmp.type !== tmp2(tmp3[14]).StickerCategoryTypes.GUILD;
                        }
                        if (!tmp4) {
                          tmp5 = closure_1;
                          obj = closure_1(tmp3[15]);
                          tmp6 = AnalyticEvents;
                          obj1 = { location: null, tab: null, sticker_pack_id: null, guild_id: null };
                          obj4 = { page: null };
                          tmp7 = AnalyticsPages;
                          obj4.page = AnalyticsPages.EXPRESSION_PICKER;
                          obj1.location = obj4;
                          tmp8 = ExpressionPickerViewType;
                          obj1.tab = ExpressionPickerViewType.STICKER;
                          obj1.sticker_pack_id = tmp.id;
                          tmp9 = null;
                          id = undefined;
                          if (closure_3 != null) {
                            id = closure_3.id;
                          }
                          obj1.guild_id = id;
                          trackResult = obj.track(AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, obj1);
                        }
                        tmp12Result = undefined;
                        if (onPressCategory != null) {
                          tmp14 = index;
                          tmp12Result = tmp12(index);
                        }
                        return tmp12Result;
                      }
                    }
                    cResult[19] = guildItemPlaceholder;
                    ({ guildIcon: tmp3[20], guildItemPlaceholder } = tmp4);
                    cResult[21] = guildItemPlaceholder;
                    cResult[22] = tmp22Result;
                  }
                  const items1 = [tmp4.itemInner];
                  class A {
                    constructor() {
                      tmp = category;
                      tmp3 = closure_2;
                      tmp2 = closure_0;
                      tmp4 = category.type !== closure_0(closure_2[14]).StickerCategoryTypes.PACK;
                      if (tmp4) {
                        tmp4 = tmp.type !== tmp2(tmp3[14]).StickerCategoryTypes.GUILD;
                      }
                      if (!tmp4) {
                        tmp5 = closure_1;
                        obj = closure_1(tmp3[15]);
                        tmp6 = AnalyticEvents;
                        obj1 = { location: null, tab: null, sticker_pack_id: null, guild_id: null };
                        obj4 = { page: null };
                        tmp7 = AnalyticsPages;
                        obj4.page = AnalyticsPages.EXPRESSION_PICKER;
                        obj1.location = obj4;
                        tmp8 = ExpressionPickerViewType;
                        obj1.tab = ExpressionPickerViewType.STICKER;
                        obj1.sticker_pack_id = tmp.id;
                        tmp9 = null;
                        id = undefined;
                        if (closure_3 != null) {
                          id = closure_3.id;
                        }
                        obj1.guild_id = id;
                        trackResult = obj.track(AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, obj1);
                      }
                      tmp12Result = undefined;
                      if (onPressCategory != null) {
                        tmp14 = index;
                        tmp12Result = tmp12(index);
                      }
                      return tmp12Result;
                    }
                  }
                  cResult[13] = tmp4.itemInner;
                  cResult[14] = tmp18;
                  cResult[15] = items1;
                  tmp19 = items1;
                }
              }
            }
          }
          cResult[5] = category.id;
          cResult[6] = category.type;
          let id1;
          if (tmp8 != null) {
            id1 = tmp8.id;
          }
          class A {
            constructor() {
              tmp = category;
              tmp3 = closure_2;
              tmp2 = closure_0;
              tmp4 = category.type !== closure_0(closure_2[14]).StickerCategoryTypes.PACK;
              if (tmp4) {
                tmp4 = tmp.type !== tmp2(tmp3[14]).StickerCategoryTypes.GUILD;
              }
              if (!tmp4) {
                tmp5 = closure_1;
                obj = closure_1(tmp3[15]);
                tmp6 = AnalyticEvents;
                obj1 = { location: null, tab: null, sticker_pack_id: null, guild_id: null };
                obj4 = { page: null };
                tmp7 = AnalyticsPages;
                obj4.page = AnalyticsPages.EXPRESSION_PICKER;
                obj1.location = obj4;
                tmp8 = ExpressionPickerViewType;
                obj1.tab = ExpressionPickerViewType.STICKER;
                obj1.sticker_pack_id = tmp.id;
                tmp9 = null;
                id = undefined;
                if (closure_3 != null) {
                  id = closure_3.id;
                }
                obj1.guild_id = id;
                trackResult = obj.track(AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, obj1);
              }
              tmp12Result = undefined;
              if (onPressCategory != null) {
                tmp14 = index;
                tmp12Result = tmp12(index);
              }
              return tmp12Result;
            }
          }
          cResult[7] = id1;
          cResult[8] = index;
          cResult[9] = onPressCategory;
          cResult[10] = A;
        }
        guild = null;
        if (category.type === category(index[14]).StickerCategoryTypes.GUILD) {
          guild = GuildStore.getGuild(category.id);
        }
        cResult[2] = category.id;
        cResult[3] = category.type;
        cResult[4] = guild;
        tmp8 = guild;
        let obj = category(index[11]);
      }
    : function StickerCategoryItem(category) {
        category = category.category;
        const onPressCategory = category.onPressCategory;
        const index = category.index;
        ({ isActive, locked } = category);
        const tmp = closure_16();
        const AnimateStickers = category(index[12]).AnimateStickers;
        const setting = AnimateStickers.useSetting();
        let shouldAnimateStickerResult = category(index[13]).shouldAnimateSticker(setting, false);
        guild = null;
        if (category.type === category(index[14]).StickerCategoryTypes.GUILD) {
          guild = GuildStore.getGuild(category.id);
        }
        const items = [category, guild, index, onPressCategory];
        const callback = noop.useCallback(() => {
          let tmp4 = category.type !== StickersTypes.StickerCategoryTypes.PACK;
          if (tmp4) {
            tmp4 = category.type !== StickersTypes.StickerCategoryTypes.GUILD;
          }
          if (!tmp4) {
            const obj2 = { location: null, tab: null, sticker_pack_id: null, guild_id: null };
            const obj3 = { page: options.EXPRESSION_PICKER };
            obj2.location = obj3;
            obj2.tab = ExpressionPickerViewType.STICKER;
            obj2.sticker_pack_id = category.id;
            let id;
            if (guild != null) {
              id = guild.id;
            }
            obj2.guild_id = id;
            AnalyticsUtilsDefault.track(closure_2_8.EXPRESSION_PICKER_CATEGORY_SELECTED, obj2);
          }
          let tmp12Result;
          if (onPressCategory != null) {
            tmp12Result = tmp12(index);
          }
          return tmp12Result;
        }, items);
        let obj2 = {
          androidRippleConfig,
          accessibilityRole: "tab",
          accessibilityLabel: category.name,
          accessibilityState: { selected: isActive },
          disabled: 0 === category.stickers.length,
          onPress: null,
          style: null,
          children: null,
        };
        let tmp10;
        if (category.stickers.length > 0) {
          tmp10 = callback;
        }
        obj2.onPress = tmp10;
        obj2.style = tmp.item;
        const items1 = [tmp.itemInner];
        let obj3 = { style: items1, children: null };
        items1[1] = isActive ? tmp.activeItem : tmp.fadedItem;
        if (null != category.icon) {
          const obj4 = {
            style: tmp.guildIcon,
            disableColor: category.type === tmp2(tmp3[14]).StickerCategoryTypes.PACK,
            source: tmp2(tmp3[17]).makeSource(category.icon),
          };
          let tmp9Result = closure_14(tmp2(tmp3[16]).Icon, obj4);
          const tmp2Result = tmp2(tmp3[17]);
        } else if (category.type === tmp2(tmp3[14]).StickerCategoryTypes.GUILD) {
          const obj5 = {
            guild,
            loadingStyle: tmp.guildItemPlaceholder,
            size: tmp2(tmp3[18]).GuildIconSizes.XSMALL,
            style: tmp.guildIcon,
          };
          tmp9Result = closure_14(onPressCategory(tmp3[18]), obj5);
          const tmp18 = onPressCategory(tmp3[18]);
        } else {
          if ("previewSticker" in category) {
            if (null != category.previewSticker) {
              let previewSticker = category.previewSticker;
            }
            const obj6 = { sticker: previewSticker, animated: null, size: null };
            if (shouldAnimateStickerResult) {
              shouldAnimateStickerResult = isActive;
            }
            obj6.animated = shouldAnimateStickerResult;
            obj6.size = CATEGORY_ICON_SIZE;
            tmp9Result = closure_14(tmp14, obj6);
          }
          previewSticker = category.stickers[0];
        }
        const items2 = [tmp9Result];
        if (locked) {
          const obj7 = { style: tmp.lockContainer, children: null };
          const obj8 = { style: tmp.lock };
          obj7.children = closure_14(tmp2(tmp3[20]).LockIcon, obj8);
          locked = closure_14(View, obj7);
        }
        items2[1] = locked;
        obj3.children = items2;
        obj2.children = closure_15(View, obj3);
        return closure_14(category(index[21]).PressableOpacity, obj2);
      },
);
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerCategories.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (categories) => {
      const cResult = categories(576).c(44);
      categories = categories.categories;
      const categoryIndex = categories.categoryIndex;
      closure_16();
      dependencyMap = first.useRef(undefined);
      const ref = first.useRef(null);
      if (cResult[0] !== categories.length) {
        const items = [categories.length];
        cResult[0] = categories.length;
        cResult[1] = items;
      }
      const tmp5 = ref(first.useState(null), 2);
      first = tmp5[0];
      closure_5 = tmp5[1];
      const tmp7 = ref(first.useState(false), 2);
      const first1 = tmp7[0];
      useStickerPickerStore = tmp7[1];
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(arg0) {
            return categories.setPackToScrollTo;
          }
        }
        cResult[2] = T;
      } else {
        class T {
          constructor(arg0) {
            return categories.setPackToScrollTo;
          }
        }
      }
      const tmp10 = useStickerPickerStore(T);
      closure_8 = tmp10;
      if (cResult[3] !== categories) {
        class T {
          constructor(arg0) {
            return categories.setPackToScrollTo;
          }
        }
        const items1 = [categories];
        cResult[3] = categories;
        cResult[4] = tmp13;
        cResult[5] = items1;
        let tmp12 = items1;
      } else {
        class T {
          constructor(arg0) {
            return categories.setPackToScrollTo;
          }
        }
        tmp12 = cResult[5];
      }
      const effect = obj2.useEffect(tmp13, tmp12);
      if (cResult[6] !== categoryIndex) {
        class D {
          constructor() {
            tmp = closure_2;
            if (null != closure_2.current) {
              if (null != closure_3.current) {
                tmp4 = EXPRESSION_FOOTER_HEIGHT;
                result = categoryIndex * EXPRESSION_FOOTER_HEIGHT;
                tmp6 = result > tmp.current.end;
                tmp3 = categoryIndex;
                if (!tmp6) {
                  tmp6 = result < tmp.current.start;
                }
                if (tmp6) {
                  current = tmp2.current;
                  obj = { section: 0, item: null, animated: false };
                  obj.item = tmp3;
                  scrollToLocationResult = current.scrollToLocation(obj);
                }
              }
            }
            return;
          }
        }
        const items2 = [categoryIndex];
        cResult[6] = categoryIndex;
        cResult[7] = D;
        cResult[8] = items2;
        let tmp16 = items2;
      } else {
        class D {
          constructor() {
            tmp = closure_2;
            if (null != closure_2.current) {
              if (null != closure_3.current) {
                tmp4 = EXPRESSION_FOOTER_HEIGHT;
                result = categoryIndex * EXPRESSION_FOOTER_HEIGHT;
                tmp6 = result > tmp.current.end;
                tmp3 = categoryIndex;
                if (!tmp6) {
                  tmp6 = result < tmp.current.start;
                }
                if (tmp6) {
                  current = tmp2.current;
                  obj = { section: 0, item: null, animated: false };
                  obj.item = tmp3;
                  scrollToLocationResult = current.scrollToLocation(obj);
                }
              }
            }
            return;
          }
        }
        tmp16 = cResult[8];
      }
      const effect1 = obj2.useEffect(D, tmp16);
      if (cResult[9] === first) {
        class D {
          constructor() {
            tmp = closure_2;
            if (null != closure_2.current) {
              if (null != closure_3.current) {
                tmp4 = EXPRESSION_FOOTER_HEIGHT;
                result = categoryIndex * EXPRESSION_FOOTER_HEIGHT;
                tmp6 = result > tmp.current.end;
                tmp3 = categoryIndex;
                if (!tmp6) {
                  tmp6 = result < tmp.current.start;
                }
                if (tmp6) {
                  current = tmp2.current;
                  obj = { section: 0, item: null, animated: false };
                  obj.item = tmp3;
                  scrollToLocationResult = current.scrollToLocation(obj);
                }
              }
            }
            return;
          }
        }
        if (cResult[12] !== H) {
          class D {
            constructor() {
              tmp = closure_2;
              if (null != closure_2.current) {
                if (null != closure_3.current) {
                  tmp4 = EXPRESSION_FOOTER_HEIGHT;
                  result = categoryIndex * EXPRESSION_FOOTER_HEIGHT;
                  tmp6 = result > tmp.current.end;
                  tmp3 = categoryIndex;
                  if (!tmp6) {
                    tmp6 = result < tmp.current.start;
                  }
                  if (tmp6) {
                    current = tmp2.current;
                    obj = { section: 0, item: null, animated: false };
                    obj.item = tmp3;
                    scrollToLocationResult = current.scrollToLocation(obj);
                  }
                }
              }
              return;
            }
          }
          cResult[12] = H;
          class F {
            constructor(arg0) {
              tmp = closure_8(categories[categories].id);
              obj = closure_0(closure_2[22]);
              result = obj.triggerHapticFeedback(closure_1(closure_2[23]).IMPACT_LIGHT);
              return;
            }
          }
        } else {
          class D {
            constructor() {
              tmp = closure_2;
              if (null != closure_2.current) {
                if (null != closure_3.current) {
                  tmp4 = EXPRESSION_FOOTER_HEIGHT;
                  result = categoryIndex * EXPRESSION_FOOTER_HEIGHT;
                  tmp6 = result > tmp.current.end;
                  tmp3 = categoryIndex;
                  if (!tmp6) {
                    tmp6 = result < tmp.current.start;
                  }
                  if (tmp6) {
                    current = tmp2.current;
                    obj = { section: 0, item: null, animated: false };
                    obj.item = tmp3;
                    scrollToLocationResult = current.scrollToLocation(obj);
                  }
                }
              }
              return;
            }
          }
        }
        if (cResult[14] === categories) {
          class D {
            constructor() {
              tmp = closure_2;
              if (null != closure_2.current) {
                if (null != closure_3.current) {
                  tmp4 = EXPRESSION_FOOTER_HEIGHT;
                  result = categoryIndex * EXPRESSION_FOOTER_HEIGHT;
                  tmp6 = result > tmp.current.end;
                  tmp3 = categoryIndex;
                  if (!tmp6) {
                    tmp6 = result < tmp.current.start;
                  }
                  if (tmp6) {
                    current = tmp2.current;
                    obj = { section: 0, item: null, animated: false };
                    obj.item = tmp3;
                    scrollToLocationResult = current.scrollToLocation(obj);
                  }
                }
              }
              return;
            }
          }
          androidRippleConfig = F;
          if (cResult[17] === first) {
            class D {
              constructor() {
                tmp = closure_2;
                if (null != closure_2.current) {
                  if (null != closure_3.current) {
                    tmp4 = EXPRESSION_FOOTER_HEIGHT;
                    result = categoryIndex * EXPRESSION_FOOTER_HEIGHT;
                    tmp6 = result > tmp.current.end;
                    tmp3 = categoryIndex;
                    if (!tmp6) {
                      tmp6 = result < tmp.current.start;
                    }
                    if (tmp6) {
                      current = tmp2.current;
                      obj = { section: 0, item: null, animated: false };
                      obj.item = tmp3;
                      scrollToLocationResult = current.scrollToLocation(obj);
                    }
                  }
                }
                return;
              }
            }
            if (cResult[20] !== H) {
              class Z {
                constructor(arg0) {
                  if (null == closure_2.current) {
                    tmp2 = categories;
                    obj = { start: 0, end: null };
                    obj.end = categories.nativeEvent.layout.width;
                    tmp.current = obj;
                    tmp3 = closure_9;
                    tmp4 = closure_9();
                  }
                  return;
                }
              }
              cResult[20] = H;
              class V {
                constructor() {
                  if (null != closure_4) {
                    tmp2 = closure_10;
                    tmp3 = closure_10(tmp);
                    tmp4 = closure_7;
                    flag = false;
                    tmp5 = closure_7(false);
                  }
                  return;
                }
              }
              class F {
                constructor(arg0) {
                  tmp = closure_8(categories[categories].id);
                  obj = closure_0(closure_2[22]);
                  result = obj.triggerHapticFeedback(closure_1(closure_2[23]).IMPACT_LIGHT);
                  return;
                }
              }
            } else {
              class Z {
                constructor(arg0) {
                  if (null == closure_2.current) {
                    tmp2 = categories;
                    obj = { start: 0, end: null };
                    obj.end = categories.nativeEvent.layout.width;
                    tmp.current = obj;
                    tmp3 = closure_9;
                    tmp4 = closure_9();
                  }
                  return;
                }
              }
            }
            if (cResult[22] === categories) {
              class Z {
                constructor(arg0) {
                  if (null == closure_2.current) {
                    tmp2 = categories;
                    obj = { start: 0, end: null };
                    obj.end = categories.nativeEvent.layout.width;
                    tmp.current = obj;
                    tmp3 = closure_9;
                    tmp4 = closure_9();
                  }
                  return;
                }
              }
            }
            class V {
              constructor() {
                if (null != closure_4) {
                  tmp2 = closure_10;
                  tmp3 = closure_10(tmp);
                  tmp4 = closure_7;
                  flag = false;
                  tmp5 = closure_7(false);
                }
                return;
              }
            }
            class F {
              constructor(arg0) {
                tmp = closure_8(categories[categories].id);
                obj = closure_0(closure_2[22]);
                result = obj.triggerHapticFeedback(closure_1(closure_2[23]).IMPACT_LIGHT);
                return;
              }
            }
            cResult[22] = categories;
            cResult[23] = categoryIndex;
            cResult[24] = F;
            cResult[25] = tmp25;
          }
          class V {
            constructor() {
              if (null != closure_4) {
                tmp2 = closure_10;
                tmp3 = closure_10(tmp);
                tmp4 = closure_7;
                flag = false;
                tmp5 = closure_7(false);
              }
              return;
            }
          }
          class F {
            constructor(arg0) {
              tmp = closure_8(categories[categories].id);
              obj = closure_0(closure_2[22]);
              result = obj.triggerHapticFeedback(closure_1(closure_2[23]).IMPACT_LIGHT);
              return;
            }
          }
          cResult[17] = first;
          cResult[18] = F;
          cResult[19] = V;
        }
        class F {
          constructor(arg0) {
            tmp = closure_8(categories[categories].id);
            obj = closure_0(closure_2[22]);
            result = obj.triggerHapticFeedback(closure_1(closure_2[23]).IMPACT_LIGHT);
            return;
          }
        }
        cResult[14] = categories;
        cResult[15] = tmp10;
        cResult[16] = F;
      }
      class H {
        constructor() {
          tmp2 = null != closure_4;
          tmp = closure_4;
          if (tmp2) {
            tmp3 = closure_2;
            tmp2 = null != closure_2.current;
          }
          if (tmp2) {
            tmp6 = closure_2;
            tmp7 = closure_6;
            num = 0;
            tmp4 = closure_7;
            result = tmp * EXPRESSION_FOOTER_HEIGHT;
            if (!closure_6) {
              num = EXPRESSION_FOOTER_HEIGHT;
            }
            tmp4Result = tmp4(result > closure_2.current.end - num);
          }
          return;
        }
      }
      cResult[9] = first;
      cResult[10] = first1;
      cResult[11] = H;
      let obj = categories(576);
    }
  : (categories) => {
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
      const tmp4 = ref(first.useState(null), 2);
      first = tmp4[0];
      closure_5 = tmp4[1];
      let tmp6 = ref(first.useState(false), 2);
      const first1 = tmp6[0];
      useStickerPickerStore = tmp6[1];
      const tmp8 = useStickerPickerStore((setPackToScrollTo) => setPackToScrollTo.setPackToScrollTo);
      closure_8 = tmp8;
      const items1 = [categories];
      const effect = first.useEffect(() => {
        const findIndexResult = categories.findIndex(
          (type) => type.type === categories(closure_1_2[14]).StickerCategoryTypes.PACK,
        );
        if (findIndexResult >= 0) {
          closure_5(findIndexResult);
        }
      }, items1);
      const items2 = [categoryIndex];
      const effect1 = first.useEffect(() => {
        if (null != closure_2.current) {
          if (null != ref.current) {
            const result = categoryIndex * EXPRESSION_FOOTER_HEIGHT;
            let tmp6 = result > closure_2.current.end;
            if (!tmp6) {
              tmp6 = result < closure_2.current.start;
            }
            if (tmp6) {
              const current = tmp2.current;
              const obj = { section: 0, item: categoryIndex, animated: false };
              current.scrollToLocation(obj);
            }
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
        closure_2.current = {
          start: nativeEvent.nativeEvent.contentOffset.x,
          end: nativeEvent.nativeEvent.contentOffset.x + nativeEvent.nativeEvent.layoutMeasurement.width,
        };
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
      const callback5 = first.useCallback(
        (arg0, index) =>
          state(closure_17, {
            category: categories[index],
            index,
            isActive: index === categoryIndex,
            locked: categories[index].isNitroLocked,
            onPressCategory: callback2,
          }),
        items8,
      );
      let obj = { portalHostName: "expression-footer", style: categories.style, children: null };
      const tmp17 = categoryIndex;
      const tmp19 = categoryIndex(9509)();
      const items9 = [
        closure_14(categoryIndex(6735), {
          estimatedListSize: "windowSize",
          horizontal: true,
          itemSize: EXPRESSION_FOOTER_HEIGHT,
          keyboardShouldPersistTaps: "always",
          listId: ExpressionPickerViewType.STICKER,
          onLayout: callback4,
          onScroll: callback1,
          placeholderConfig: tmp19,
          ref,
          scrollReporting: "callbacks",
          sections: memo,
          renderItem: callback5,
          showsHorizontalScrollIndicator: false,
          style: tmp.list,
        }),
      ];
      let tmp22Result = null != first && first1;
      if (tmp22Result) {
        const obj3 = { onPress: callback3, accessibilityRole: "button", accessibilityLabel: null, children: null };
        const intl = categories(1126).intl;
        obj3.accessibilityLabel = intl.string(categories(1126).t.rzCcjK);
        const obj4 = { style: null, children: null };
        const items10 = [,];
        ({ item: arr11[0], fadedItem: arr11[1] } = tmp);
        obj4.style = items10;
        const obj5 = { style: tmp.guildIcon, source: tmp17(9748) };
        obj4.children = closure_14(categories(1200).Icon, obj5);
        obj3.children = closure_14(closure_5, obj4);
        tmp22Result = closure_14(categories(6189).PressableOpacity, obj3);
      }
      items9[1] = tmp22Result;
      obj.children = items9;
      return closure_15(categoryIndex(9510), obj);
    };
