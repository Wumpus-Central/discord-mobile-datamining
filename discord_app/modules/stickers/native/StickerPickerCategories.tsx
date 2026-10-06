// discord_app/modules/stickers/native/StickerPickerCategories.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ExpressionPickerConstants from "../../expression_picker/ExpressionPickerConstants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import StickersTypes from "../StickersTypes.tsx";
import StickerPickerStore from "StickerPickerStore.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let androidRippleConfig,
  categories,
  category,
  dependencyMap,
  flag,
  obj1,
  scrollToLocationResult,
  tmp15,
  tmp3,
  tmp4Result,
  tmp9,
  trackResult,
  user;

let CATEGORY_ICON_SIZE;
let c10;
let c9;
let closure_14;
let closure_15;
let metroImportAll;
let obj2;
let obj3;
let size;
let size1;
let size2;
const View = react_native.View;
let useStickerPickerStore = StickerPickerStore.useStickerPickerStore;
({
  AnalyticEvents: metroImportAll,
  AnalyticsPages: c9,
  CATEGORY_ICON_RIPPLE_CONFIG: c10,
  CATEGORY_ICON_SIZE,
} = Constants);
const EXPRESSION_FOOTER_HEIGHT = Constants.EXPRESSION_FOOTER_HEIGHT;
const NODE_SIZE = Constants.NODE_SIZE;
const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT },
  item: {
    height: EXPRESSION_FOOTER_HEIGHT,
    width: EXPRESSION_FOOTER_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  itemInner: size,
  fadedItem: { opacity: 0.5 },
  activeItem: obj2,
  guildIcon: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 },
  guildItemPlaceholder: obj3,
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
obj2 = { opacity: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
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
let closure_16 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (category) => {
        let index;
        let isActive;
        let locked;
        let obj6;
        let tmp6;
        let tmpResult2;
        let obj = category(index[11]);
        const cResult = obj.c(38);
        category = category.category;
        const onPressCategory = category.onPressCategory;
        index = category.index;
        ({ isActive, locked } = category);
        let tmp4 = closure_16();
        const AnimateStickers = category(index[12]).AnimateStickers;
        const setting = AnimateStickers.useSetting();
        if (cResult[0] !== setting) {
          const tmpResult = category(index[13]);
          const shouldAnimateStickerResult = tmpResult.shouldAnimateSticker(setting, false);
          cResult[0] = setting;
          cResult[1] = shouldAnimateStickerResult;
          tmp6 = shouldAnimateStickerResult;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] === category.id) {
          let tmp8;
          if (cResult[3] === category.type) {
            tmp8 = cResult[4];
          }
          user = tmp8;
          if (cResult[5] === category.id) {
            if (cResult[6] === category.type) {
              let id;
              const tmp11 = cResult[7];
              if (tmp8 != null) {
                id = tmp8.id;
              }
              if (tmp11 === id) {
                if (cResult[8] === index) {
                  let tmp17;
                  if (cResult[11] !== isActive) {
                    let obj2 = { selected: isActive };
                    cResult[11] = isActive;
                    cResult[12] = obj2;
                    tmp17 = obj2;
                  } else {
                    tmp17 = cResult[12];
                  }
                  const tmp19 = isActive ? tmp4.activeItem : tmp4.fadedItem;
                  if (cResult[13] === tmp4.itemInner) {
                    let tmp20;
                    let tmp23Result;
                    if (cResult[14] === tmp19) {
                      tmp20 = cResult[15];
                    }
                    if (cResult[16] === tmp6) {
                      if (cResult[17] === category) {
                        if (cResult[18] === tmp8) {
                          if (cResult[19] === isActive) {
                            if (cResult[20] === tmp4.guildIcon) {
                              let tmp21;
                              if (cResult[21] === tmp4.guildItemPlaceholder) {
                                tmp21 = cResult[22];
                              }
                              if (cResult[23] === locked) {
                                if (cResult[24] === tmp4.lock) {
                                  let tmp32;
                                  if (cResult[25] === tmp4.lockContainer) {
                                    tmp32 = cResult[26];
                                  }
                                  if (cResult[27] === tmp32) {
                                    if (cResult[28] === tmp20) {
                                      let tmp36;
                                      if (cResult[29] === tmp21) {
                                        tmp36 = cResult[30];
                                      }
                                      if (cResult[31] === category.name) {
                                        if (cResult[32] === tmp4.item) {
                                          if (cResult[33] === tmp36) {
                                            if (cResult[34] === tmp17) {
                                              if ((cResult[35] === 0) === category.stickers.length) {
                                                let tmp41;
                                                if (cResult[36] === tmp18) {
                                                  tmp41 = cResult[37];
                                                }
                                                return tmp41;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      const obj3 = {
                                        androidRippleConfig,
                                        accessibilityRole: "tab",
                                        accessibilityLabel: category.name,
                                        accessibilityState: tmp17,
                                        disabled: 0 === category.stickers.length,
                                        onPress: null,
                                        style: tmp4.item,
                                        children: tmp36,
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
                                            tmp6 = closure_1(tmp3[15]);
                                            tmp7 = AnalyticEvents;
                                            obj = { location: null, tab: null, sticker_pack_id: null, guild_id: null };
                                            obj1 = { page: null };
                                            tmp8 = AnalyticsPages;
                                            obj1.page = AnalyticsPages.EXPRESSION_PICKER;
                                            obj.location = obj1;
                                            tmp9 = ExpressionPickerViewType;
                                            obj.tab = ExpressionPickerViewType.STICKER;
                                            obj.sticker_pack_id = tmp.id;
                                            tmp10 = null;
                                            id = undefined;
                                            track = tmp6.track;
                                            EXPRESSION_PICKER_CATEGORY_SELECTED =
                                              AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED;
                                            if (closure_3 != null) {
                                              id = closure_3.id;
                                            }
                                            obj.guild_id = id;
                                            trackResult = track(EXPRESSION_PICKER_CATEGORY_SELECTED, obj);
                                          }
                                          tmp13Result = undefined;
                                          if (onPressCategory != null) {
                                            tmp15 = index;
                                            tmp13Result = tmp13(index);
                                          }
                                          return tmp13Result;
                                        }
                                      }
                                      const tmp44 = closure_14(category(index[21]).PressableOpacity, obj3);
                                      cResult[31] = category.name;
                                      cResult[32] = tmp4.item;
                                      cResult[33] = tmp36;
                                      cResult[34] = tmp17;
                                      cResult[35] = 0 === category.stickers.length;
                                      cResult[36] = tmp18;
                                      cResult[37] = tmp44;
                                      tmp41 = tmp44;
                                    }
                                  }
                                  const items = [tmp21, tmp32];
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
                                        tmp6 = closure_1(tmp3[15]);
                                        tmp7 = AnalyticEvents;
                                        obj = { location: null, tab: null, sticker_pack_id: null, guild_id: null };
                                        obj1 = { page: null };
                                        tmp8 = AnalyticsPages;
                                        obj1.page = AnalyticsPages.EXPRESSION_PICKER;
                                        obj.location = obj1;
                                        tmp9 = ExpressionPickerViewType;
                                        obj.tab = ExpressionPickerViewType.STICKER;
                                        obj.sticker_pack_id = tmp.id;
                                        tmp10 = null;
                                        id = undefined;
                                        track = tmp6.track;
                                        EXPRESSION_PICKER_CATEGORY_SELECTED =
                                          AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED;
                                        if (closure_3 != null) {
                                          id = closure_3.id;
                                        }
                                        obj.guild_id = id;
                                        trackResult = track(EXPRESSION_PICKER_CATEGORY_SELECTED, obj);
                                      }
                                      tmp13Result = undefined;
                                      if (onPressCategory != null) {
                                        tmp15 = index;
                                        tmp13Result = tmp13(index);
                                      }
                                      return tmp13Result;
                                    }
                                  }
                                  cResult[27] = tmp32;
                                  cResult[28] = tmp20;
                                  cResult[29] = tmp21;
                                  cResult[30] = tmp39;
                                  tmp36 = tmp39;
                                }
                              }
                              let tmp33 = locked;
                              if (tmp33) {
                                const obj5 = {
                                  style: tmp4.lockContainer,
                                  children: closure_14(category(index[20]).LockIcon, obj6),
                                };
                                obj6 = { style: tmp4.lock };
                                tmp33 = closure_14(View, obj5);
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
                                    tmp6 = closure_1(tmp3[15]);
                                    tmp7 = AnalyticEvents;
                                    obj = { location: null, tab: null, sticker_pack_id: null, guild_id: null };
                                    obj1 = { page: null };
                                    tmp8 = AnalyticsPages;
                                    obj1.page = AnalyticsPages.EXPRESSION_PICKER;
                                    obj.location = obj1;
                                    tmp9 = ExpressionPickerViewType;
                                    obj.tab = ExpressionPickerViewType.STICKER;
                                    obj.sticker_pack_id = tmp.id;
                                    tmp10 = null;
                                    id = undefined;
                                    track = tmp6.track;
                                    EXPRESSION_PICKER_CATEGORY_SELECTED =
                                      AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED;
                                    if (closure_3 != null) {
                                      id = closure_3.id;
                                    }
                                    obj.guild_id = id;
                                    trackResult = track(EXPRESSION_PICKER_CATEGORY_SELECTED, obj);
                                  }
                                  tmp13Result = undefined;
                                  if (onPressCategory != null) {
                                    tmp15 = index;
                                    tmp13Result = tmp13(index);
                                  }
                                  return tmp13Result;
                                }
                              }
                              cResult[26] = tmp33;
                              tmp32 = tmp33;
                            }
                          }
                        }
                      }
                    }
                    if (null != category.icon) {
                      const obj7 = {
                        style: tmp4.guildIcon,
                        disableColor: category.type === category(index[14]).StickerCategoryTypes.PACK,
                        source: tmpResult2.makeSource(category.icon),
                      };
                      const Icon = tmp(tmp2[16]).Icon;
                      tmpResult2 = category(index[17]);
                      tmp23Result = closure_14(Icon, obj7);
                    } else if (category.type === category(index[14]).StickerCategoryTypes.GUILD) {
                      const obj8 = {
                        guild: tmp8,
                        loadingStyle: tmp4.guildItemPlaceholder,
                        size: category(index[18]).GuildIconSizes.XSMALL,
                        style: tmp4.guildIcon,
                      };
                      const tmp30 = onPressCategory(index[18]);
                      tmp23Result = closure_14(tmp30, obj8);
                    } else {
                      if ("previewSticker" in category) {
                        let previewSticker;
                        if (null != category.previewSticker) {
                          previewSticker = category.previewSticker;
                        }
                        const obj9 = { sticker: previewSticker, animated: tmp6 && isActive, size: CATEGORY_ICON_SIZE };
                        tmp23Result = closure_14(tmp25, obj9);
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
                          tmp6 = closure_1(tmp3[15]);
                          tmp7 = AnalyticEvents;
                          obj = { location: null, tab: null, sticker_pack_id: null, guild_id: null };
                          obj1 = { page: null };
                          tmp8 = AnalyticsPages;
                          obj1.page = AnalyticsPages.EXPRESSION_PICKER;
                          obj.location = obj1;
                          tmp9 = ExpressionPickerViewType;
                          obj.tab = ExpressionPickerViewType.STICKER;
                          obj.sticker_pack_id = tmp.id;
                          tmp10 = null;
                          id = undefined;
                          track = tmp6.track;
                          EXPRESSION_PICKER_CATEGORY_SELECTED = AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED;
                          if (closure_3 != null) {
                            id = closure_3.id;
                          }
                          obj.guild_id = id;
                          trackResult = track(EXPRESSION_PICKER_CATEGORY_SELECTED, obj);
                        }
                        tmp13Result = undefined;
                        if (onPressCategory != null) {
                          tmp15 = index;
                          tmp13Result = tmp13(index);
                        }
                        return tmp13Result;
                      }
                    }
                    cResult[19] = isActive;
                    cResult[20] = tmp4.guildIcon;
                    cResult[21] = tmp4.guildItemPlaceholder;
                    cResult[22] = tmp23Result;
                    tmp21 = tmp23Result;
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
                        tmp6 = closure_1(tmp3[15]);
                        tmp7 = AnalyticEvents;
                        obj = { location: null, tab: null, sticker_pack_id: null, guild_id: null };
                        obj1 = { page: null };
                        tmp8 = AnalyticsPages;
                        obj1.page = AnalyticsPages.EXPRESSION_PICKER;
                        obj.location = obj1;
                        tmp9 = ExpressionPickerViewType;
                        obj.tab = ExpressionPickerViewType.STICKER;
                        obj.sticker_pack_id = tmp.id;
                        tmp10 = null;
                        id = undefined;
                        track = tmp6.track;
                        EXPRESSION_PICKER_CATEGORY_SELECTED = AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED;
                        if (closure_3 != null) {
                          id = closure_3.id;
                        }
                        obj.guild_id = id;
                        trackResult = track(EXPRESSION_PICKER_CATEGORY_SELECTED, obj);
                      }
                      tmp13Result = undefined;
                      if (onPressCategory != null) {
                        tmp15 = index;
                        tmp13Result = tmp13(index);
                      }
                      return tmp13Result;
                    }
                  }
                  cResult[13] = tmp4.itemInner;
                  cResult[14] = tmp19;
                  cResult[15] = items1;
                  tmp20 = items1;
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
                tmp6 = closure_1(tmp3[15]);
                tmp7 = AnalyticEvents;
                obj = { location: null, tab: null, sticker_pack_id: null, guild_id: null };
                obj1 = { page: null };
                tmp8 = AnalyticsPages;
                obj1.page = AnalyticsPages.EXPRESSION_PICKER;
                obj.location = obj1;
                tmp9 = ExpressionPickerViewType;
                obj.tab = ExpressionPickerViewType.STICKER;
                obj.sticker_pack_id = tmp.id;
                tmp10 = null;
                id = undefined;
                track = tmp6.track;
                EXPRESSION_PICKER_CATEGORY_SELECTED = AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED;
                if (closure_3 != null) {
                  id = closure_3.id;
                }
                obj.guild_id = id;
                trackResult = track(EXPRESSION_PICKER_CATEGORY_SELECTED, obj);
              }
              tmp13Result = undefined;
              if (onPressCategory != null) {
                tmp15 = index;
                tmp13Result = tmp13(index);
              }
              return tmp13Result;
            }
          }
          cResult[7] = id1;
          cResult[8] = index;
          cResult[9] = onPressCategory;
          cResult[10] = A;
        }
        let guild = null;
        if (category.type === category(index[14]).StickerCategoryTypes.GUILD) {
          guild = GuildStore.getGuild(category.id);
        }
        cResult[2] = category.id;
        cResult[3] = category.type;
        cResult[4] = guild;
        tmp8 = guild;
      }
    : (category) => {
        let isActive;
        let items2;
        let locked;
        let obj3;
        let obj8;
        let tmp10;
        let tmp2Result;
        let tmp9Result;
        category = category.category;
        const onPressCategory = category.onPressCategory;
        const index = category.index;
        ({ isActive, locked } = category);
        const tmp = closure_16();
        const AnimateStickers = category(index[12]).AnimateStickers;
        const setting = AnimateStickers.useSetting();
        let obj = category(index[13]);
        let shouldAnimateStickerResult = obj.shouldAnimateSticker(setting, false);
        let guild = null;
        if (category.type === category(index[14]).StickerCategoryTypes.GUILD) {
          guild = GuildStore.getGuild(category.id);
        }
        const items = [category, guild, index, onPressCategory];
        const callback = react.useCallback(() => {
          let id;
          let obj2;
          const tmp4 =
            category.type !== StickersTypes.StickerCategoryTypes.PACK &&
            category.type !== StickersTypes.StickerCategoryTypes.GUILD;
          if (!tmp4) {
            const obj = {
              location: obj2,
              tab: ExpressionPickerViewType.STICKER,
              sticker_pack_id: category.id,
              guild_id: id,
            };
            id = undefined;
            obj2 = { page: React4.EXPRESSION_PICKER };
            const track = AnalyticsUtilsDefault.track;
            const EXPRESSION_PICKER_CATEGORY_SELECTED = metroImportAll.EXPRESSION_PICKER_CATEGORY_SELECTED;
            AnalyticsUtilsDefault;
            if (guild != null) {
              id = guild.id;
            }
            track(EXPRESSION_PICKER_CATEGORY_SELECTED, obj);
          }
          let tmp13Result;
          if (onPressCategory != null) {
            tmp13Result = tmp13(index);
          }
          return tmp13Result;
        }, items);
        let obj2 = {
          androidRippleConfig,
          accessibilityRole: "tab",
          accessibilityLabel: category.name,
          accessibilityState: { selected: isActive },
          disabled: 0 === category.stickers.length,
          onPress: tmp10,
          style: tmp.item,
          children: closure_15(View, obj3),
        };
        tmp10 = undefined;
        const PressableOpacity = tmp2(tmp3[21]).PressableOpacity;
        if (category.stickers.length > 0) {
          tmp10 = callback;
        }
        const items1 = [tmp.itemInner];
        obj3 = { style: items1, children: items2 };
        items1[1] = isActive ? tmp.activeItem : tmp.fadedItem;
        if (null != category.icon) {
          const obj4 = {
            style: tmp.guildIcon,
            disableColor: category.type === category(index[14]).StickerCategoryTypes.PACK,
            source: tmp2Result.makeSource(category.icon),
          };
          const Icon = tmp2(tmp3[16]).Icon;
          tmp2Result = category(index[17]);
          tmp9Result = closure_14(Icon, obj4);
        } else if (category.type === category(index[14]).StickerCategoryTypes.GUILD) {
          const obj5 = {
            guild,
            loadingStyle: tmp.guildItemPlaceholder,
            size: category(index[18]).GuildIconSizes.XSMALL,
            style: tmp.guildIcon,
          };
          const tmp18 = onPressCategory(index[18]);
          tmp9Result = closure_14(tmp18, obj5);
        } else {
          const tmp13 = onPressCategory;
          if ("previewSticker" in category) {
            let previewSticker;
            if (null != category.previewSticker) {
              previewSticker = category.previewSticker;
            }
            const obj6 = { sticker: previewSticker, animated: shouldAnimateStickerResult, size: CATEGORY_ICON_SIZE };
            if (shouldAnimateStickerResult) {
              shouldAnimateStickerResult = isActive;
            }
            tmp9Result = closure_14(tmp14, obj6);
          }
          previewSticker = category.stickers[0];
        }
        items2 = [tmp9Result];
        if (locked) {
          const obj7 = { style: tmp.lockContainer, children: closure_14(category(index[20]).LockIcon, obj8) };
          obj8 = { style: tmp.lock };
          locked = closure_14(View, obj7);
        }
        items2[1] = locked;
        return closure_14(PressableOpacity, obj2);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (categories) => {
      let closure_2;
      let closure_7;
      let closure_9;
      let first;
      let onPressCategory;
      let tmp12;
      let tmp16;
      let obj = categories(576);
      const cResult = obj.c(44);
      categories = categories.categories;
      const categoryIndex = categories.categoryIndex;
      let tmp2 = closure_16();
      dependencyMap = first.useRef(undefined);
      const ref = first.useRef(null);
      if (cResult[0] !== categories.length) {
        const items = [categories.length];
        let num = 0;
        cResult[0] = categories.length;
        cResult[1] = items;
      }
      const tmp5 = ref(obj2.useState(null), 2);
      first = tmp5[0];
      let closure_5 = tmp5[1];
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
      let closure_8 = tmp10;
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
        tmp12 = items1;
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
        tmp16 = items2;
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
            end = closure_2.current.end;
            if (!closure_6) {
              num = EXPRESSION_FOOTER_HEIGHT;
            }
            tmp4Result = tmp4(result > end - num);
          }
          return;
        }
      }
      cResult[9] = first;
      cResult[10] = first1;
      cResult[11] = H;
    }
  : (categories) => {
      let Icon;
      let closure_2;
      let closure_7;
      let intl;
      let items10;
      let items9;
      let obj4;
      let obj5;
      categories = categories.categories;
      const categoryIndex = categories.categoryIndex;
      let first;
      const style = categories.style;
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
      let closure_5 = tmp4[1];
      let tmp6 = ref(first.useState(false), 2);
      const first1 = tmp6[0];
      useStickerPickerStore = tmp6[1];
      const tmp8 = useStickerPickerStore((setPackToScrollTo) => setPackToScrollTo.setPackToScrollTo);
      let closure_8 = tmp8;
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
            const tmp6 = result > closure_2.current.end || result < closure_2.current.start;
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
        const tmp2 = null != first && null != closure_2.current;
        if (tmp2) {
          let num = 0;
          const result = first * EXPRESSION_FOOTER_HEIGHT;
          const end = closure_2.current.end;
          if (!first1) {
            num = EXPRESSION_FOOTER_HEIGHT;
          }
          closure_7(result > end - num);
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
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
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
      const callback5 = first.useCallback((arg0, index) => {
        const obj = {
          category: categories[index],
          index,
          isActive: index === categoryIndex,
          locked: categories[index].isNitroLocked,
          onPressCategory: callback2,
        };
        return authStore2(closure_17, obj);
      }, items8);
      let obj = { portalHostName: "expression-footer", style, children: items9 };
      items9 = [,];
      const obj2 = {
        estimatedListSize: "windowSize",
        horizontal: true,
        itemSize: EXPRESSION_FOOTER_HEIGHT,
        keyboardShouldPersistTaps: "always",
        listId: ExpressionPickerViewType.STICKER,
        onLayout: callback4,
        onScroll: callback1,
        placeholderConfig: categoryIndex(9980)(),
        ref,
        scrollReporting: "callbacks",
        sections: memo,
        renderItem: callback5,
        showsHorizontalScrollIndicator: false,
        style: tmp.list,
      };
      const tmp21 = categoryIndex(9981);
      items9[0] = closure_14(categoryIndex(6559), obj2);
      let tmp22Result = null != first && first1;
      const tmp17 = categoryIndex;
      if (tmp22Result) {
        const obj3 = {
          onPress: callback3,
          accessibilityRole: "button",
          accessibilityLabel: intl.string(categories(1126).t.rzCcjK),
          children: closure_14(closure_5, obj4),
        };
        const PressableOpacity = categories(5916).PressableOpacity;
        intl = categories(1126).intl;
        obj4 = { style: items10, children: closure_14(Icon, obj5) };
        items10 = [,];
        ({ item: arr11[0], fadedItem: arr11[1] } = tmp);
        obj5 = { style: tmp.guildIcon, source: tmp17(10162) };
        Icon = categories(1188).Icon;
        tmp22Result = closure_14(PressableOpacity, obj3);
      }
      items9[1] = tmp22Result;
      return closure_15(tmp21, obj);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerCategories.tsx");

export default tmp6;
