// discord_app/modules/waterwheels/interest/native/InterestGamePicker.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2406 from "../../WaterwheelsUntranslated.messages.js";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import useGame2 from "../../../games/hooks/useGame.tsx";
import GameAutocompleteUtils from "../../../games/autocomplete/GameAutocompleteUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GameStore from "../../../games/GameStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({
  Pressable: hasOwnProperty,
  ScrollView: metroRequire,
  StyleSheet: closure_7,
  View: closure_8,
} = get_ActivityIndicator);
const InterestGamePickerConstants = fn(19445);
({ GRID_COLUMNS: c10, GRID_GAP } = InterestGamePickerConstants);
({ MAX_SELECTIONS: closure_12, MIN_SELECTIONS: map1, SCREEN_HORIZONTAL_PADDING } = InterestGamePickerConstants);
({ THUMBNAIL_HIT_SLOP: closure_15, THUMBNAIL_WIDTH } = InterestGamePickerConstants);
let TILE_ASPECT_RATIO = InterestGamePickerConstants.TILE_ASPECT_RATIO;
({ FOOTER_BORDER_WIDTH, FOOTER_BOTTOM_PADDING, FOOTER_THUMBNAIL_GAP, SELECTED_BORDER_WIDTH, THUMBNAIL_ASPECT_RATIO } =
  InterestGamePickerConstants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5005);
let obj2 = {
  screen: { flex: 1 },
  body: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  header: null,
  content: null,
  intro: null,
  subtitle: null,
  search: null,
  grid: null,
  tile: null,
  selected: null,
  status: null,
  footer: null,
  footerContent: null,
  thumbnails: null,
  thumbnail: null,
  footerActions: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.header = {
  height: nativeDefault.space.PX_64,
  paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  paddingVertical: nativeDefault.space.PX_4,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
};
let obj4 = {
  height: nativeDefault.space.PX_64,
  paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  paddingVertical: nativeDefault.space.PX_4,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
};
obj2.content = { paddingBottom: nativeDefault.space.PX_24 };
let obj5 = { paddingBottom: nativeDefault.space.PX_24 };
obj2.intro = {
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  paddingTop: nativeDefault.space.PX_12,
};
obj2.subtitle = { textAlign: "center" };
let obj6 = {
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  paddingTop: nativeDefault.space.PX_12,
};
obj2.search = {
  paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_16,
};
obj2.grid = { flexDirection: "row", flexWrap: "wrap", gap: GRID_GAP, paddingHorizontal: SCREEN_HORIZONTAL_PADDING };
let obj7 = {
  paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_16,
};
obj2.tile = {
  aspectRatio: TILE_ASPECT_RATIO,
  overflow: "hidden",
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let obj8 = {
  aspectRatio: TILE_ASPECT_RATIO,
  overflow: "hidden",
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.selected = {
  position: "absolute",
  inset: 0,
  borderWidth: SELECTED_BORDER_WIDTH,
  borderRadius: nativeDefault.radii.sm,
  borderColor: nativeDefault.colors.BACKGROUND_BRAND,
};
let obj9 = {
  position: "absolute",
  inset: 0,
  borderWidth: SELECTED_BORDER_WIDTH,
  borderRadius: nativeDefault.radii.sm,
  borderColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj2.status = {
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  paddingTop: nativeDefault.space.PX_40,
};
let obj10 = {
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  paddingTop: nativeDefault.space.PX_40,
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
obj2.footer = {
  minHeight: nativeDefault.space.PX_80,
  borderTopWidth: FOOTER_BORDER_WIDTH,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: FOOTER_BOTTOM_PADDING,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
let obj11 = {
  minHeight: nativeDefault.space.PX_80,
  borderTopWidth: FOOTER_BORDER_WIDTH,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: FOOTER_BOTTOM_PADDING,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
obj2.footerContent = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_16,
};
obj2.thumbnails = { flexShrink: 1, flexDirection: "row", gap: FOOTER_THUMBNAIL_GAP };
let obj12 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_16,
};
obj2.thumbnail = {
  width: THUMBNAIL_WIDTH,
  flexShrink: 1,
  aspectRatio: THUMBNAIL_ASPECT_RATIO,
  overflow: "hidden",
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let obj13 = {
  width: THUMBNAIL_WIDTH,
  flexShrink: 1,
  aspectRatio: THUMBNAIL_ASPECT_RATIO,
  overflow: "hidden",
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.footerActions = { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
let closure_20 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj14 = { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function InterestGamePicker(catalog) {
      const cResult = catalog(onSkip[10]).c(136);
      catalog = catalog.catalog;
      ({ title, subtitle, minSelection, onContinue } = catalog);
      onSkip = catalog.onSkip;
      if (undefined === minSelection) {
        minSelection = arr13;
      }
      let obj = catalog(onSkip[10]);
      _slicedToArray = closure_20();
      const tmp6 = _slicedToArray(noop.useState(0), 2);
      noop = tmp6[1];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      [first1, closure_6] = noop.useState(first);
      const tmp4 = closure_20();
      const str = _slicedToArray(noop.useState(""), 2)[0];
      const rounded = Math.floor((tmp6[0] - 2 * length - closure_11 * (onSelect - 1)) / onSelect);
      noop.useRef(false);
      if (Number.isFinite(minSelection)) {
        const _Math = Math;
        const _Math2 = Math;
        let bound = Math.min(Math.max(minSelection, arr13), obj6);
      } else {
        bound = arr13;
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = {
          surface: tmp(tmp2[11]).GameSearchSurface.INTEREST_PICKER,
          filterGroup: tmp(tmp2[12]).GameSearchFilterGroup.DEFAULT,
        };
        cResult[1] = obj3;
        let tmp14 = obj3;
      } else {
        tmp14 = cResult[1];
      }
      const tmp5Result2 = _slicedToArray(noop.useState(""), 2);
      const debouncedGameAutocomplete = catalog(onSkip[13]).useDebouncedGameAutocomplete(str, tmp14);
      ({ results, error, onSelect } = debouncedGameAutocomplete);
      if (cResult[2] !== results) {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function $(id) {
            return id.id;
          };
          cResult[4] = fn;
          let tmp16 = fn;
        } else {
          tmp16 = cResult[4];
        }
        let items1 = results;
        if (results == null) {
          items1 = [];
        }
        let found = items1.filter(tmp(tmp2[14]).isGameAutocompleteResultAllowedInGameWidgets);
        const mapped = found.map(tmp16);
        cResult[2] = results;
        cResult[3] = mapped;
        obj6 = mapped;
      } else {
        obj6 = cResult[3];
      }
      if (cResult[5] === obj6) {
        if (cResult[6] === catalog) {
          if (cResult[7] === first1) {
            let tmp19 = cResult[8];
          }
          const arr5 = onContinue(tmp2[15])(tmp19);
          if (cResult[9] !== str) {
            const trimmed = str.trim();
            cResult[9] = str;
            cResult[10] = trimmed;
            let arr6 = trimmed;
          } else {
            arr6 = cResult[10];
          }
          let tmp25 = tmp24;
          if (arr6.length > 0) {
            tmp25 = null == error;
          }
          closure_11 = tmp25;
          let tmp27 = catalog;
          if (tmp25) {
            tmp27 = obj6;
          }
          obj6 = tmp27;
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            let items2 = [bound];
            cResult[11] = items2;
            let tmp28 = items2;
          } else {
            tmp28 = cResult[11];
          }
          if (cResult[12] !== tmp27) {
            function ue() {
              return obj6.some(
                (item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item),
              );
            }
            const items3 = [tmp27];
            cResult[12] = tmp27;
            cResult[13] = ue;
            cResult[14] = items3;
            let tmp31 = items3;
            let tmp30 = ue;
          } else {
            tmp30 = cResult[13];
            tmp31 = cResult[14];
          }
          const _Symbol3 = Symbol;
          const stateFromStores = tmp(tmp2[16]).useStateFromStores(tmp28, tmp30, tmp31);
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const items4 = [bound];
            cResult[15] = items4;
            let tmp33 = items4;
          } else {
            tmp33 = cResult[15];
          }
          if (cResult[16] !== catalog) {
            function fe() {
              return catalog.some((item) => bound.didFetchingFail(item));
            }
            const items5 = [catalog];
            cResult[16] = catalog;
            cResult[17] = fe;
            cResult[18] = items5;
            let tmp36 = items5;
            let tmp35 = fe;
          } else {
            tmp35 = cResult[17];
            tmp36 = cResult[18];
          }
          const tmpResult3 = tmp(tmp2[16]);
          const stateFromStores1 = tmp(tmp2[16]).useStateFromStores(tmp33, tmp35, tmp36);
          if (cResult[19] !== arr5) {
            const _Symbol4 = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              function ve(id) {
                const items = [id.id, id];
                return items;
              }
              cResult[21] = ve;
              let tmp39 = ve;
            } else {
              tmp39 = cResult[21];
            }
            const _Map = Map;
            const map = new Map(arr5.map(tmp39));
            cResult[19] = arr5;
            cResult[20] = map;
          } else {
            if (cResult[22] === catalog) {
              if (cResult[23] === tmp38) {
                let arr11 = cResult[24];
              }
              if (cResult[25] === obj6) {
                if (cResult[26] === tmp38) {
                  let tmp46 = cResult[27];
                }
                if (tmp25) {
                  arr11 = tmp46;
                }
                let isLoading = tmp24;
                if (tmp24) {
                  isLoading = debouncedGameAutocomplete.isLoading;
                }
                if (!isLoading) {
                  isLoading = stateFromStores;
                }
                let tmp48 = tmp24;
                if (tmp24) {
                  tmp48 = !isLoading;
                }
                if (tmp48) {
                  tmp48 = null == error;
                }
                if (tmp48) {
                  tmp48 = 0 === arr11.length;
                }
                let tmp50 = !tmp24;
                if (!tmp24) {
                  tmp50 = !isLoading;
                }
                if (tmp50) {
                  tmp50 = 0 === arr11.length;
                }
                if (cResult[28] === tmp38) {
                  if (cResult[29] === first1) {
                    let arr12 = cResult[30];
                  }
                  if (cResult[31] !== arr12) {
                    const _Symbol5 = Symbol;
                    if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                      function we(id) {
                        return id.id;
                      }
                      cResult[33] = we;
                      let tmp52 = we;
                    } else {
                      tmp52 = cResult[33];
                    }
                    const mapped1 = arr12.map(tmp52);
                    cResult[31] = arr12;
                    cResult[32] = mapped1;
                  } else {
                    obj2.useRef(cResult[32].length);
                    if (cResult[34] !== cResult[32].length) {
                      class Me {
                        constructor() {
                          tmp = length;
                          if (closure_15.current !== length) {
                            closure_15.current = tmp;
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            AccessibilityAnnouncer = closure_0(closure_2[17]).AccessibilityAnnouncer;
                            intl = closure_0(closure_2[18]).intl;
                            tmp4 = closure_1;
                            obj = { count: null, max: null };
                            obj.count = tmp;
                            tmp5 = MAX_SELECTIONS;
                            obj.max = MAX_SELECTIONS;
                            announceResult = AccessibilityAnnouncer.announce(
                              intl.formatToPlainString(closure_1(closure_2[19]).v9v0uY, obj),
                            );
                          }
                          return;
                        }
                      }
                      const items6 = [length];
                      cResult[34] = length;
                      cResult[35] = Me;
                      cResult[36] = items6;
                      let tmp57 = items6;
                    } else {
                      class Me {
                        constructor() {
                          tmp = length;
                          if (closure_15.current !== length) {
                            closure_15.current = tmp;
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            AccessibilityAnnouncer = closure_0(closure_2[17]).AccessibilityAnnouncer;
                            intl = closure_0(closure_2[18]).intl;
                            tmp4 = closure_1;
                            obj = { count: null, max: null };
                            obj.count = tmp;
                            tmp5 = MAX_SELECTIONS;
                            obj.max = MAX_SELECTIONS;
                            announceResult = AccessibilityAnnouncer.announce(
                              intl.formatToPlainString(closure_1(closure_2[19]).v9v0uY, obj),
                            );
                          }
                          return;
                        }
                      }
                      tmp57 = cResult[36];
                    }
                    const effect = obj2.useEffect(Me, tmp57);
                    const _Symbol6 = Symbol;
                    if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                      class Be {
                        constructor(arg0) {
                          closure_0 = catalog;
                          tmp = closure_6((arr) => {
                            if (arr.includes(closure_0)) {
                              let found = arr.filter((item) => item !== closure_1_0);
                            } else {
                              found = arr;
                              if (arr.length < obj6) {
                                const items = [];
                                items[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
                                found = items;
                              }
                            }
                            return found;
                          });
                          return;
                        }
                      }
                      cResult[37] = Be;
                      const tmp59 = Be;
                    } else {
                      class Be {
                        constructor(arg0) {
                          closure_0 = catalog;
                          tmp = closure_6((arr) => {
                            if (arr.includes(closure_0)) {
                              let found = arr.filter((item) => item !== closure_1_0);
                            } else {
                              found = arr;
                              if (arr.length < obj6) {
                                const items = [];
                                items[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
                                found = items;
                              }
                            }
                            return found;
                          });
                          return;
                        }
                      }
                    }
                    Be = tmp59;
                    if (cResult[38] === tmp25) {
                      class Be {
                        constructor(arg0) {
                          closure_0 = catalog;
                          tmp = closure_6((arr) => {
                            if (arr.includes(closure_0)) {
                              let found = arr.filter((item) => item !== closure_1_0);
                            } else {
                              found = arr;
                              if (arr.length < obj6) {
                                const items = [];
                                items[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
                                found = items;
                              }
                            }
                            return found;
                          });
                          return;
                        }
                      }
                      TILE_ASPECT_RATIO = Ue;
                      const _Symbol7 = Symbol;
                      if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                        class Be {
                          constructor(arg0) {
                            closure_0 = catalog;
                            tmp = closure_6((arr) => {
                              if (arr.includes(closure_0)) {
                                let found = arr.filter((item) => item !== closure_1_0);
                              } else {
                                found = arr;
                                if (arr.length < obj6) {
                                  const items = [];
                                  items[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
                                  found = items;
                                }
                              }
                              return found;
                            });
                            return;
                          }
                        }
                        cResult[41] = tmp62;
                      } else {
                        class Be {
                          constructor(arg0) {
                            closure_0 = catalog;
                            tmp = closure_6((arr) => {
                              if (arr.includes(closure_0)) {
                                let found = arr.filter((item) => item !== closure_1_0);
                              } else {
                                found = arr;
                                if (arr.length < obj6) {
                                  const items = [];
                                  items[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
                                  found = items;
                                }
                              }
                              return found;
                            });
                            return;
                          }
                        }
                      }
                      if (cResult[42] === bound) {
                        class Be {
                          constructor(arg0) {
                            closure_0 = catalog;
                            tmp = closure_6((arr) => {
                              if (arr.includes(closure_0)) {
                                let found = arr.filter((item) => item !== closure_1_0);
                              } else {
                                found = arr;
                                if (arr.length < obj6) {
                                  const items = [];
                                  items[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
                                  found = items;
                                }
                              }
                              return found;
                            });
                            return;
                          }
                        }
                      }
                      function je() {
                        let current = ref.current;
                        if (!current) {
                          current = arr13.length < bound;
                        }
                        if (!current) {
                          ref.current = true;
                          onContinue(arr13);
                        }
                      }
                      cResult[42] = bound;
                      cResult[43] = onContinue;
                      cResult[44] = arr13;
                      class Ue {
                        constructor(arg0) {
                          if (closure_11) {
                            tmp = onSelect;
                            tmp2 = onSelect(catalog);
                          }
                          tmp3 = closure_16(catalog);
                          return;
                        }
                      }
                      cResult[45] = je;
                    }
                    class Ue {
                      constructor(arg0) {
                        if (closure_11) {
                          tmp = onSelect;
                          tmp2 = onSelect(catalog);
                        }
                        tmp3 = closure_16(catalog);
                        return;
                      }
                    }
                    cResult[38] = tmp25;
                    cResult[39] = onSelect;
                    cResult[40] = Ue;
                  }
                }
                const flatMapResult = first1.flatMap((item) => {
                  value = closure_0.get(item);
                  if (null != value) {
                    if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
                      let items = [value];
                    }
                    return items;
                  }
                  items = [];
                });
                cResult[28] = tmp38;
                cResult[29] = first1;
                cResult[30] = flatMapResult;
                arr12 = flatMapResult;
              }
              closure_130_0 = tmp38;
              const flatMapResult1 = obj6.flatMap((item) => {
                value = closure_0.get(item);
                if (null != value) {
                  if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
                    let items = [value];
                  }
                  return items;
                }
                items = [];
              });
              cResult[25] = obj6;
              cResult[26] = tmp38;
              cResult[27] = flatMapResult1;
              tmp46 = flatMapResult1;
            }
            closure_129_0 = tmp38;
            const flatMapResult2 = catalog.flatMap((item) => {
              value = closure_0.get(item);
              if (null != value) {
                if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
                  let items = [value];
                }
                return items;
              }
              items = [];
            });
            cResult[22] = catalog;
            cResult[23] = cResult[20];
            cResult[24] = flatMapResult2;
            arr11 = flatMapResult2;
          }
          const tmpResult4 = tmp(tmp2[16]);
        }
      }
      const items7 = [...first1];
      const tmpResult = catalog(onSkip[13]);
      const arr = Array.from(new Set(items7));
      cResult[5] = obj6;
      cResult[6] = catalog;
      cResult[7] = first1;
      cResult[8] = arr;
      tmp19 = arr;
      const set = new Set(items7);
    }
  : function InterestGamePicker(catalog) {
      catalog = catalog.catalog;
      let minSelection = catalog.minSelection;
      ({ title, subtitle } = catalog);
      if (minSelection === undefined) {
        minSelection = closure_13;
      }
      const onContinue = catalog.onContinue;
      const onSkip = catalog.onSkip;
      noop = undefined;
      first = undefined;
      closure_6 = undefined;
      let bound;
      let results;
      onSelect = undefined;
      closure_13 = undefined;
      closure_14 = undefined;
      let memo;
      let memo2;
      let memo4;
      let memo5;
      let length;
      let ref2;
      let callback;
      closure_22 = undefined;
      const tmp = ref2();
      _slicedToArray = tmp;
      [tmp3, c4] = noop.useState(0);
      [first, closure_6] = noop.useState([]);
      const tmp6 = _slicedToArray(noop.useState(""), 2);
      const rounded = Math.floor((tmp3 - 2 * closure_14 - onSelect * (results - 1)) / results);
      ref = noop.useRef(false);
      if (Number.isFinite(minSelection)) {
        const _Math = Math;
        const _Math2 = Math;
        bound = Math.min(Math.max(minSelection, closure_13), memo);
      } else {
        bound = closure_13;
      }
      let tmp2 = _slicedToArray(noop.useState(0), 2);
      const obj2 = catalog(onSkip[13]);
      const debouncedGameAutocomplete = obj2.useDebouncedGameAutocomplete(str, {
        surface: catalog(onSkip[11]).GameSearchSurface.INTEREST_PICKER,
        filterGroup: catalog(onSkip[12]).GameSearchFilterGroup.DEFAULT,
      });
      results = debouncedGameAutocomplete.results;
      ({ error, onSelect } = debouncedGameAutocomplete);
      let items = [results];
      memo = obj.useMemo(() => {
        let items = results;
        if (results == null) {
          items = [];
        }
        const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
        return found.map((id) => id.id);
      }, items);
      let items1 = [memo, catalog, first];
      const memo1 = obj.useMemo(() => {
        const items = [...first];
        return Array.from(new Set(items));
      }, items1);
      const tmp17 = onContinue(onSkip[15])(memo1);
      closure_13 = tmp17;
      const tmp18 = tmp6[0].trim().length > 0;
      let tmp19 = tmp18;
      if (tmp18) {
        tmp19 = null == error;
      }
      closure_14 = tmp19;
      let tmp21 = catalog;
      if (tmp19) {
        tmp21 = memo;
      }
      memo = tmp21;
      let obj3 = {
        surface: catalog(onSkip[11]).GameSearchSurface.INTEREST_PICKER,
        filterGroup: catalog(onSkip[12]).GameSearchFilterGroup.DEFAULT,
      };
      let items2 = [bound];
      const items3 = [tmp21];
      const stateFromStores = catalog(onSkip[16]).useStateFromStores(
        items2,
        () => memo.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)),
        items3,
      );
      const tmp11Result = catalog(onSkip[16]);
      const items4 = [bound];
      const items5 = [catalog];
      let stateFromStores1 = catalog(onSkip[16]).useStateFromStores(
        items4,
        () => catalog.some((item) => bound.didFetchingFail(item)),
        items5,
      );
      const items6 = [tmp17];
      memo2 = obj.useMemo(
        () =>
          new Map(
            closure_13.map((id) => {
              const items = [id.id, id];
              return items;
            }),
          ),
        items6,
      );
      const items7 = [catalog, memo2];
      let memo3 = obj.useMemo(() => {
        closure_0 = memo2;
        return catalog.flatMap((item) => {
          value = closure_0.get(item);
          if (null != value) {
            if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
              let items = [value];
            }
            return items;
          }
          items = [];
        });
      }, items7);
      const items8 = [memo, memo2];
      if (tmp19) {
        memo3 = obj.useMemo(() => {
          closure_0 = memo2;
          return memo.flatMap((item) => {
            value = closure_0.get(item);
            if (null != value) {
              if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
                let items = [value];
              }
              return items;
            }
            items = [];
          });
        }, items8);
      }
      let isLoading = tmp18;
      if (tmp18) {
        isLoading = debouncedGameAutocomplete.isLoading;
      }
      if (!isLoading) {
        isLoading = stateFromStores;
      }
      let tmp25 = tmp18;
      if (tmp18) {
        tmp25 = !isLoading;
      }
      if (tmp25) {
        tmp25 = null == error;
      }
      if (tmp25) {
        tmp25 = 0 === memo3.length;
      }
      let tmp27 = !tmp18;
      if (!tmp18) {
        tmp27 = !isLoading;
      }
      if (tmp27) {
        tmp27 = 0 === memo3.length;
      }
      const items9 = [memo2, first];
      memo4 = obj.useMemo(() => {
        closure_0 = memo2;
        return first.flatMap((item) => {
          value = closure_0.get(item);
          if (null != value) {
            if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
              let items = [value];
            }
            return items;
          }
          items = [];
        });
      }, items9);
      const items10 = [memo4];
      memo5 = obj.useMemo(() => memo4.map((id) => id.id), items10);
      length = memo5.length;
      ref2 = obj.useRef(length);
      const items11 = [length];
      const effect = obj.useEffect(() => {
        if (ref2.current !== length) {
          ref2.current = length;
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          const intl = util.intl;
          const obj = { count: length, max };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(_modDef2406.v9v0uY, obj));
        }
      }, items11);
      callback = obj.useCallback((arg0) => {
        closure_0 = arg0;
        closure_6((arr) => {
          if (arr.includes(closure_0)) {
            let found = arr.filter((item) => item !== closure_1_0);
          } else {
            found = arr;
            if (arr.length < memo) {
              const items = [];
              items[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
              found = items;
            }
          }
          return found;
        });
      }, []);
      const items12 = [tmp19, callback, onSelect];
      closure_22 = obj.useCallback((arg0) => {
        if (closure_14) {
          onSelect(arg0);
        }
        callback(arg0);
      }, items12);
      const items13 = [bound, onContinue, memo5];
      const callback1 = obj.useCallback((nativeEvent) => {
        _undefined(nativeEvent.nativeEvent.layout.width);
      }, []);
      const items14 = [onSkip, memo5];
      const callback2 = obj.useCallback(() => {
        let current = ref.current;
        if (!current) {
          current = memo5.length < bound;
        }
        if (!current) {
          ref.current = true;
          onContinue(memo5);
        }
      }, items13);
      const items15 = [catalog];
      const callback3 = obj.useCallback(() => {
        if (!ref.current) {
          tmp.current = true;
          onSkip(memo5);
        }
      }, items14);
      const obj4 = { style: tmp.screen, children: null };
      const obj5 = { style: tmp.body, children: null };
      const callback4 = obj.useCallback(() => {
        const useGame = useGame2.useGame;
        let items = [
          ...catalog.map((item) => {
            const items = [item];
            return items;
          }),
        ];
        useGame.fetchMany.apply(items);
      }, items15);
      const obj6 = { top: true, children: null };
      const tmp11Result2 = catalog(onSkip[16]);
      const tmp28 = memo5.length >= bound;
      obj6.children = memo5(ref, {
        style: tmp.header,
        children: memo5(onContinue(onSkip[21]), { onPress: callback3 }),
      });
      const items16 = [memo5(catalog(onSkip[22]).SafeAreaPaddingView, obj6)];
      const obj8 = { contentContainerStyle: tmp.content, keyboardShouldPersistTaps: "handled", children: null };
      const obj9 = { style: tmp.intro, children: null };
      const items17 = [
        memo5(catalog(onSkip[23]).Heading, { variant: "heading-xl/bold", color: "text-strong", children: title }),
        memo5(catalog(onSkip[23]).Text, {
          style: tmp.subtitle,
          variant: "text-sm/normal",
          color: "text-default",
          children: subtitle,
        }),
      ];
      obj9.children = items17;
      const items18 = [length(ref, obj9), , , , ,];
      const obj11 = { style: tmp.search, children: null };
      const obj12 = { accessibilityLabel: null, onChange: null, placeholder: null };
      let intl = tmp11(tmp12[18]).intl;
      obj12.accessibilityLabel = intl.string(onContinue(onSkip[19])["8Xenq+"]);
      obj12.onChange = tmp6[1];
      const intl2 = tmp11(tmp12[18]).intl;
      obj12.placeholder = intl2.string(onContinue(onSkip[19])["8Xenq+"]);
      obj11.children = memo5(catalog(onSkip[24]).SearchBar, obj12);
      items18[1] = memo5(ref, obj11);
      let tmp37Result = isLoading;
      if (isLoading) {
        const obj13 = { style: tmp.status, children: null };
        const obj14 = { accessibilityLabel: null };
        const intl3 = tmp11(tmp12[18]).intl;
        obj14.accessibilityLabel = intl3.string(tmp11(tmp12[18]).t.ZTNur7);
        obj13.children = tmp37(tmp11(tmp12[25]).ActivityIndicator, obj14);
        tmp37Result = tmp37(tmp36, obj13);
      }
      items18[2] = tmp37Result;
      let tmp35Result = tmp25;
      if (tmp25) {
        const obj15 = { style: tmp.status, children: null };
        const obj16 = { variant: "text-md/semibold", color: "text-strong", children: null };
        const intl4 = tmp11(tmp12[18]).intl;
        obj16.children = intl4.string(tmp16(tmp12[19]).w5cRz0);
        const items19 = [tmp37(tmp11(tmp12[23]).Text, obj16)];
        const obj17 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl5 = tmp11(tmp12[18]).intl;
        obj17.children = intl5.string(tmp16(tmp12[19]).Khsqzs);
        items19[1] = tmp37(tmp11(tmp12[23]).Text, obj17);
        obj15.children = items19;
        tmp35Result = tmp35(tmp36, obj15);
      }
      items18[3] = tmp35Result;
      let tmp35Result2 = tmp27;
      if (tmp27) {
        const obj18 = { style: tmp.status, children: null };
        const intl6 = tmp11(tmp12[18]).intl;
        const tmp16Result = tmp16(tmp12[19]);
        const obj19 = {
          variant: "text-md/semibold",
          color: "text-strong",
          children: intl6.string(stateFromStores1 ? tmp16Result["+np3yH"] : tmp16Result.V7UsE0),
        };
        const items20 = [tmp37(tmp11(tmp12[23]).Text, obj19), ,];
        const intl7 = tmp11(tmp12[18]).intl;
        const tmp16Result2 = tmp16(tmp12[19]);
        const obj20 = {
          variant: "text-sm/normal",
          color: "text-muted",
          children: intl7.string(stateFromStores1 ? tmp16Result2.CjS26n : tmp16Result2.qx4Gb6),
        };
        items20[1] = tmp37(tmp11(tmp12[23]).Text, obj20);
        if (stateFromStores1) {
          const obj21 = { onPress: callback4, size: "sm", text: null, variant: "secondary" };
          const intl8 = tmp11(tmp12[18]).intl;
          obj21.text = intl8.string(tmp16(tmp12[19]).uGhymA);
          stateFromStores1 = tmp37(tmp11(tmp12[26]).Button, obj21);
        }
        items20[2] = stateFromStores1;
        obj18.children = items20;
        tmp35Result2 = tmp35(tmp36, obj18);
      }
      items18[4] = tmp35Result2;
      let tmp37Result2 = !isLoading;
      if (!isLoading) {
        tmp37Result2 = !tmp25;
      }
      if (tmp37Result2) {
        tmp37Result2 = !tmp27;
      }
      if (tmp37Result2) {
        const obj22 = {
          onLayout: callback1,
          style: tmp.grid,
          children:
            rounded > 0 &&
            memo3.map((accessibilityLabel) => {
              let hasItem = first.includes(accessibilityLabel.id);
              let tmp2 = !hasItem;
              if (!hasItem) {
                tmp2 = memo5.length >= memo;
              }
              const obj = {
                accessibilityLabel: accessibilityLabel.name,
                accessibilityRole: "button",
                accessibilityState: { disabled: tmp2, selected: hasItem },
                disabled: tmp2,
                onPress() {
                  return closure_22(accessibilityLabel.id);
                },
                style: null,
                children: null,
              };
              const items = [closure_3.tile];
              const size = { width: rounded, height: rounded / memo4 };
              items[1] = size;
              obj.style = items;
              const items1 = [memo5(onContinue(onSkip[27]), { game: accessibilityLabel, width: rounded })];
              if (hasItem) {
                const obj3 = { pointerEvents: "none", style: null };
                const items2 = [rounded.absoluteFillObject, closure_3.selected];
                obj3.style = items2;
                hasItem = memo5(closure_8, obj3);
              }
              items1[1] = hasItem;
              obj.children = items1;
              return length(first, obj, accessibilityLabel.id);
            }),
        };
        tmp37Result2 = tmp37(tmp36, obj22);
        const tmp45 =
          rounded > 0 &&
          memo3.map((accessibilityLabel) => {
            let hasItem = first.includes(accessibilityLabel.id);
            let tmp2 = !hasItem;
            if (!hasItem) {
              tmp2 = memo5.length >= memo;
            }
            const obj = {
              accessibilityLabel: accessibilityLabel.name,
              accessibilityRole: "button",
              accessibilityState: { disabled: tmp2, selected: hasItem },
              disabled: tmp2,
              onPress() {
                return closure_22(accessibilityLabel.id);
              },
              style: null,
              children: null,
            };
            const items = [closure_3.tile];
            const size = { width: rounded, height: rounded / memo4 };
            items[1] = size;
            obj.style = items;
            const items1 = [memo5(onContinue(onSkip[27]), { game: accessibilityLabel, width: rounded })];
            if (hasItem) {
              const obj3 = { pointerEvents: "none", style: null };
              const items2 = [rounded.absoluteFillObject, closure_3.selected];
              obj3.style = items2;
              hasItem = memo5(closure_8, obj3);
            }
            items1[1] = hasItem;
            obj.children = items1;
            return length(first, obj, accessibilityLabel.id);
          });
      }
      items18[5] = tmp37Result2;
      obj8.children = items18;
      items16[1] = length(closure_6, obj8);
      obj5.children = items16;
      const items21 = [length(ref, obj5)];
      const obj23 = { bottom: true, style: tmp.footer, children: null };
      const obj24 = { style: tmp.footerContent, children: null };
      const obj10 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: subtitle };
      const obj7 = { style: tmp.header, children: memo5(onContinue(onSkip[21]), { onPress: callback3 }) };
      const items22 = [
        memo5(ref, {
          style: tmp.thumbnails,
          children: memo4.map((game) => {
            const obj = {
              accessibilityHint: null,
              accessibilityLabel: null,
              accessibilityRole: "button",
              hitSlop: null,
              onPress: null,
              style: null,
              children: null,
            };
            const intl = catalog(onSkip[18]).intl;
            obj.accessibilityHint = intl.string(catalog(onSkip[18]).t.N86XcP);
            obj.accessibilityLabel = game.name;
            obj.hitSlop = memo;
            obj.onPress = function onPress() {
              return callback(game.id);
            };
            obj.style = closure_3.thumbnail;
            obj.children = memo5(onContinue(onSkip[27]), { game, width: memo2 });
            return memo5(first, obj, game.id);
          }),
        }),
      ];
      const obj26 = { style: tmp.footerActions, children: null };
      const obj27 = { variant: "text-sm/medium", color: "text-default", children: null };
      const intl9 = tmp11(tmp12[18]).intl;
      obj27.children = intl9.format(onContinue(onSkip[19]).v9v0uY, { count: memo5.length, max: memo });
      const items23 = [memo5(catalog(onSkip[23]).Text, obj27)];
      const obj29 = {
        accessibilityLabel: null,
        disabled: null,
        icon: null,
        onPress: null,
        size: "lg",
        variant: "primary",
      };
      const intl10 = tmp11(tmp12[18]).intl;
      obj29.accessibilityLabel = intl10.string(catalog(onSkip[18]).t["3PatSz"]);
      obj29.disabled = !tmp28;
      const obj25 = {
        style: tmp.thumbnails,
        children: memo4.map((game) => {
          const obj = {
            accessibilityHint: null,
            accessibilityLabel: null,
            accessibilityRole: "button",
            hitSlop: null,
            onPress: null,
            style: null,
            children: null,
          };
          const intl = catalog(onSkip[18]).intl;
          obj.accessibilityHint = intl.string(catalog(onSkip[18]).t.N86XcP);
          obj.accessibilityLabel = game.name;
          obj.hitSlop = memo;
          obj.onPress = function onPress() {
            return callback(game.id);
          };
          obj.style = closure_3.thumbnail;
          obj.children = memo5(onContinue(onSkip[27]), { game, width: memo2 });
          return memo5(first, obj, game.id);
        }),
      };
      const obj28 = { count: memo5.length, max: memo };
      obj29.icon = memo5(catalog(onSkip[28]).ArrowLargeRightIcon, {
        color: onContinue(onSkip[7]).colors.CONTROL_PRIMARY_TEXT_DEFAULT,
      });
      obj29.onPress = callback2;
      items23[1] = memo5(catalog(onSkip[29]).IconButton, obj29);
      obj26.children = items23;
      items22[1] = length(ref, obj26);
      obj24.children = items22;
      obj23.children = length(ref, obj24);
      items21[1] = memo5(catalog(onSkip[22]).SafeAreaPaddingView, obj23);
      obj4.children = items21;
      return length(ref, obj4);
    };
