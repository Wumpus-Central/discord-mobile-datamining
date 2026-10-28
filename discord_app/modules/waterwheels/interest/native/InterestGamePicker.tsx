// === Module 19209: InterestGamePicker ===

// Module 19209 (InterestGamePicker)
import nativeDefault from "native" /* 587 */;
import useGame2 from "useGame" /* 7443 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8617 */;
import InterestGameCoverDefault from "InterestGameCover" /* 19212 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameStore from "GameStore" /* 2019 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, ScrollView: metroRequire, StyleSheet: closure_7, View: closure_8 } = get_ActivityIndicator);
const InterestGamePickerConstants = fn(19210);
({ GRID_COLUMNS: c10, GRID_GAP } = InterestGamePickerConstants);
({ MAX_FOOTER_THUMBNAILS: closure_12, MAX_SELECTIONS: map1, MIN_SELECTIONS: closure_14, MIN_TOUCH_TARGET_SIZE, SCREEN_HORIZONTAL_PADDING } = InterestGamePickerConstants);
({ THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } = InterestGamePickerConstants);
const TILE_ASPECT_RATIO = InterestGamePickerConstants.TILE_ASPECT_RATIO;
({ FOOTER_BOTTOM_PADDING, FOOTER_THUMBNAIL_GAP, SELECTED_BORDER_WIDTH } = InterestGamePickerConstants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5004);
let obj2 = { screen: { flex: 1 }, body: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, header: null, headerSpacer: null, skipButton: null, content: null, intro: null, subtitle: null, search: null, grid: null, tile: null, selected: null, status: null, footer: null, footerContent: null, thumbnails: null, thumbnail: null, footerActions: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.header = { height: nativeDefault.space.PX_64, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj4 = { height: nativeDefault.space.PX_64, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.headerSpacer = { width: nativeDefault.space.PX_32 };
obj2.skipButton = { width: MIN_TOUCH_TARGET_SIZE, height: MIN_TOUCH_TARGET_SIZE, alignItems: "center", justifyContent: "center" };
let obj5 = { width: nativeDefault.space.PX_32 };
obj2.content = { paddingBottom: nativeDefault.space.PX_24 };
let obj6 = { paddingBottom: nativeDefault.space.PX_24 };
obj2.intro = { alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_12 };
obj2.subtitle = { textAlign: "center" };
let obj7 = { alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_12 };
obj2.search = { paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
obj2.grid = { flexDirection: "row", flexWrap: "wrap", gap: GRID_GAP, paddingHorizontal: SCREEN_HORIZONTAL_PADDING };
let obj8 = { paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
obj2.tile = { aspectRatio: TILE_ASPECT_RATIO, overflow: "hidden", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj9 = { aspectRatio: TILE_ASPECT_RATIO, overflow: "hidden", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.selected = { position: "absolute", inset: 0, borderWidth: SELECTED_BORDER_WIDTH, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj10 = { position: "absolute", inset: 0, borderWidth: SELECTED_BORDER_WIDTH, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.status = { alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_40 };
let obj11 = { alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_40 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
obj2.footer = { minHeight: nativeDefault.space.PX_80, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_12, paddingBottom: FOOTER_BOTTOM_PADDING, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.footerContent = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.thumbnails = { height: THUMBNAIL_HEIGHT, flexDirection: "row", gap: FOOTER_THUMBNAIL_GAP };
let size = { width: THUMBNAIL_WIDTH, height: THUMBNAIL_HEIGHT, overflow: "hidden", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.thumbnail = size;
let obj12 = { minHeight: nativeDefault.space.PX_80, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_12, paddingBottom: FOOTER_BOTTOM_PADDING, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.footerActions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
let closure_20 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj13 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function InterestGamePicker(catalog) {
  const cResult = catalog(onSkip[10]).c(204);
  catalog = catalog.catalog;
  ({ title, subtitle, initialSelection, minSelection, onContinue } = catalog);
  onSkip = catalog.onSkip;
  if (undefined === minSelection) {
    minSelection = closure_14;
  }
  let obj = catalog(onSkip[10]);
  _slicedToArray = closure_20();
  const result = (onContinue(tmp2[11])().width - 2 * SCREEN_HORIZONTAL_PADDING - GRID_GAP * (onSelect - 1)) / onSelect;
  noop = result;
  if (cResult[0] !== initialSelection) {
    let items = initialSelection;
    if (initialSelection == null) {
      items = [];
    }
    const _Array = Array;
    const _Set = Set;
    const set = new Set(items);
    const substr = Array.from(set).slice(0, closure_13);
    cResult[0] = initialSelection;
    cResult[1] = substr;
    let tmp6 = substr;
    const arr = Array.from(set);
  } else {
    tmp6 = cResult[1];
  }
  closure_5 = tmp6;
  if (cResult[2] !== tmp6) {
    class N {
      constructor() {
        return closure_5;
      }
    }
    cResult[2] = tmp6;
    cResult[3] = N;
  } else {
    class N {
      constructor() {
        return closure_5;
      }
    }
  }
  [first, closure_7] = noop.useState(N);
  const tmp4 = closure_20();
  noop.useRef(false);
  if (Number.isFinite(minSelection)) {
    class N {
      constructor() {
        return closure_5;
      }
    }
    const _Math = Math;
    const bound = Math.min(Math.max(minSelection, closure_14), closure_13);
  } else {
    class N {
      constructor() {
        return closure_5;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        return closure_5;
      }
    }
    tmp24[0] = tmp(tmp2[12]).GameSearchSurface.INTEREST_PICKER;
    tmp24[1] = tmp(tmp2[13]).GameSearchFilterGroup.DEFAULT;
    cResult[4] = tmp24;
  } else {
    class N {
      constructor() {
        return closure_5;
      }
    }
  }
  const tmp19 = _slicedToArray(noop.useState(""), 2);
  const debouncedGameAutocomplete = catalog(onSkip[14]).useDebouncedGameAutocomplete(tmp19[0], tmp24);
  ({ results, error, onSelect } = debouncedGameAutocomplete);
  if (cResult[5] !== results) {
    class N {
      constructor() {
        return closure_5;
      }
    }
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return closure_5;
        }
      }
      cResult[7] = tmp28;
    } else {
      class N {
        constructor() {
          return closure_5;
        }
      }
    }
    if (results == null) {
      class N {
        constructor() {
          return closure_5;
        }
      }
    }
    let found = results.filter(tmp(tmp2[15]).isGameAutocompleteResultAllowedInGameWidgets);
    const mapped = found.map(tmp28);
    cResult[5] = results;
    cResult[6] = mapped;
  } else {
    class N {
      constructor() {
        return closure_5;
      }
    }
  }
  if (cResult[8] === tmp26) {
    class N {
      constructor() {
        return closure_5;
      }
    }
  }
  let items1 = [...first];
  const tmpResult = catalog(onSkip[14]);
  const set1 = new Set(items1);
  cResult[8] = tmp26;
  cResult[9] = catalog;
  cResult[10] = first;
  cResult[11] = Array.from(new Set(items1));
  const arr2 = Array.from(new Set(items1));
}) : (function InterestGamePicker(catalog) {
  catalog = catalog.catalog;
  const initialSelection = catalog.initialSelection;
  let minSelection = catalog.minSelection;
  ({ title, subtitle } = catalog);
  if (minSelection === undefined) {
    minSelection = closure_14;
  }
  const onContinue = catalog.onContinue;
  const onSkip = catalog.onSkip;
  const onBack = catalog.onBack;
  let bound;
  let results;
  onSelect = undefined;
  closure_14 = undefined;
  closure_15 = undefined;
  let memo;
  let stateFromStores2;
  let memo2;
  let memo5;
  let memo6;
  let memo7;
  let callback;
  closure_23 = undefined;
  const tmp = memo6();
  noop = tmp;
  const width = (initialSelection(onContinue[11])().width - 2 * closure_15 - results * (bound - 1)) / bound;
  let items = [initialSelection];
  closure_6 = noop.useMemo(() => {
    let items = initialSelection;
    if (initialSelection == null) {
      items = [];
    }
    const set = new Set(items);
    return Array.from(new Set(items)).slice(0, map1);
  }, items);
  const tmp4 = onSkip(noop.useState(() => closure_6), 2);
  const first = tmp4[0];
  closure_8 = tmp4[1];
  const tmp6 = onSkip(noop.useState(""), 2);
  const ref = noop.useRef(false);
  if (Number.isFinite(minSelection)) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(minSelection, closure_14), memo);
  } else {
    bound = closure_14;
  }
  const obj2 = catalog(onContinue[14]);
  const debouncedGameAutocomplete = obj2.useDebouncedGameAutocomplete(str, { surface: catalog(onContinue[12]).GameSearchSurface.INTEREST_PICKER, filterGroup: catalog(onContinue[13]).GameSearchFilterGroup.DEFAULT });
  results = debouncedGameAutocomplete.results;
  ({ error, onSelect } = debouncedGameAutocomplete);
  let items1 = [results];
  memo = obj.useMemo(() => {
    let items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items1);
  let items2 = [memo, catalog, first];
  const memo1 = obj.useMemo(() => {
    const items = [...first];
    return Array.from(new Set(items));
  }, items2);
  const tmp14 = initialSelection(onContinue[16])(memo1);
  closure_14 = tmp14;
  const tmp15 = tmp6[0].trim().length > 0;
  let tmp16 = tmp15;
  if (tmp15) {
    tmp16 = null == error;
  }
  closure_15 = tmp16;
  let tmp18 = catalog;
  if (tmp16) {
    tmp18 = memo;
  }
  memo = tmp18;
  let obj3 = { surface: catalog(onContinue[12]).GameSearchSurface.INTEREST_PICKER, filterGroup: catalog(onContinue[13]).GameSearchFilterGroup.DEFAULT };
  const items3 = [ref];
  const items4 = [tmp18];
  const stateFromStores = catalog(onContinue[17]).useStateFromStores(items3, () => memo.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)), items4);
  const tmp10Result = catalog(onContinue[17]);
  const items5 = [ref];
  const items6 = [catalog];
  let stateFromStores1 = catalog(onContinue[17]).useStateFromStores(items5, () => catalog.some((item) => ref.didFetchingFail(item)), items6);
  const tmp10Result3 = catalog(onContinue[17]);
  const items7 = [ref];
  const items8 = [first];
  stateFromStores2 = catalog(onContinue[17]).useStateFromStores(items7, () => first.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)), items8);
  const items9 = [tmp14];
  memo2 = obj.useMemo(() => new Map(closure_14.map((id) => {
    const items = [id.id, id];
    return items;
  })), items9);
  const items10 = [catalog, memo2];
  const items11 = [memo, memo2];
  const memo3 = obj.useMemo(() => {
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
  }, items10);
  let memo4 = memo3;
  if (tmp16) {
    memo4 = obj.useMemo(() => {
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
    }, items11);
  }
  let isLoading = tmp15;
  if (tmp15) {
    isLoading = debouncedGameAutocomplete.isLoading;
  }
  if (!isLoading) {
    isLoading = stateFromStores;
  }
  let tmp24 = tmp15;
  if (tmp15) {
    tmp24 = !isLoading;
  }
  if (tmp24) {
    tmp24 = null == error;
  }
  if (tmp24) {
    tmp24 = 0 === memo4.length;
  }
  let tmp26 = !tmp15;
  if (!tmp15) {
    tmp26 = !isLoading;
  }
  if (tmp26) {
    tmp26 = 0 === memo4.length;
  }
  const items12 = [memo2, first];
  memo5 = obj.useMemo(() => {
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
  }, items12);
  const items13 = [memo5];
  memo6 = obj.useMemo(() => memo5.map((id) => id.id), items13);
  const substr = memo5.slice(-onSelect);
  const items14 = [stateFromStores2, memo6, first];
  memo7 = obj.useMemo(() => {
    const _Set = Set;
    if (stateFromStores2) {
      let _Set1 = new _Set();
    } else {
      _Set1 = new _Set(first.filter((item) => !memo6.includes(item)));
    }
    return _Set1;
  }, items14);
  const items15 = [memo7];
  callback = obj.useCallback((arg0) => {
    closure_0 = arg0;
    closure_8((arr) => {
      const filter = arr.filter;
      if (arr.includes(closure_0)) {
        return filter((arg0) => arg0 !== closure_1_0);
      } else {
        const found = filter((arg0) => !set.has(arg0));
        let tmp3 = arr;
        if (found.length < map1) {
          const items = [];
          items[HermesBuiltin.arraySpread(found, 0)] = closure_0;
          tmp3 = items;
        }
        return tmp3;
      }
    });
  }, items15);
  const items16 = [tmp16, callback, onSelect];
  closure_23 = obj.useCallback((arg0) => {
    if (closure_15) {
      onSelect(arg0);
    }
    callback(arg0);
  }, items16);
  const items17 = [bound, onContinue, memo6];
  const items18 = [onSkip, memo6];
  const callback1 = obj.useCallback(() => {
    let current = ref.current;
    if (!current) {
      current = memo6.length < bound;
    }
    if (!current) {
      ref.current = true;
      onContinue(memo6);
    }
  }, items17);
  const items19 = [catalog];
  const callback2 = obj.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onSkip(memo6);
    }
  }, items18);
  const obj4 = { style: tmp.screen, children: null };
  const obj5 = { style: tmp.body, children: null };
  const callback3 = obj.useCallback(() => {
    const useGame = useGame2.useGame;
    let items = [
      ...catalog.map((item) => {
        const items = [item];
        return items;
      })
    ];
    useGame.fetchMany.apply(items);
  }, items19);
  const obj6 = { style: tmp.header, children: null };
  if (null != onBack) {
    const obj7 = { accessibilityLabel: null, icon: null, onPress: null, size: "sm", variant: "tertiary" };
    const intl = tmp10(tmp3[20]).intl;
    obj7.accessibilityLabel = intl.string(tmp10(tmp3[20]).t["13/7kX"]);
    obj7.icon = tmp35(tmp10(tmp3[21]).ArrowLargeLeftIcon, { size: "sm" });
    obj7.onPress = onBack;
    let tmp35Result = tmp35(tmp10(tmp3[19]).IconButton, obj7);
  } else {
    const obj8 = { style: tmp.headerSpacer };
    tmp35Result = tmp35(tmp34, obj8);
  }
  const obj9 = { top: true, children: null };
  const items20 = [tmp35Result, ];
  const obj10 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
  const intl2 = tmp10(tmp3[20]).intl;
  obj10.accessibilityLabel = intl2.string(catalog(onContinue[20]).t["5Wxrcd"]);
  obj10.onPress = callback2;
  obj10.style = tmp.skipButton;
  const obj11 = { variant: "text-md/semibold", color: "text-brand", children: null };
  const intl3 = tmp10(tmp3[20]).intl;
  obj11.children = intl3.string(catalog(onContinue[20]).t["5Wxrcd"]);
  obj10.children = memo2(catalog(onContinue[22]).Text, obj11);
  items20[1] = memo2(width, obj10);
  obj6.children = items20;
  obj9.children = memo5(closure_8, obj6);
  const items21 = [memo2(catalog(onContinue[23]).SafeAreaPaddingView, obj9), ];
  const obj12 = { contentContainerStyle: tmp.content, keyboardShouldPersistTaps: "handled", children: null };
  const obj13 = { style: tmp.intro, children: null };
  const items22 = [memo2(catalog(onContinue[22]).Heading, { variant: "heading-xl/bold", color: "text-strong", children: title }), memo2(catalog(onContinue[22]).Text, { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: subtitle })];
  obj13.children = items22;
  const items23 = [memo5(closure_8, obj13), , , , , ];
  const obj15 = { style: tmp.search, children: null };
  const obj16 = { accessibilityLabel: null, onChange: null, placeholder: null };
  const intl4 = tmp10(tmp3[20]).intl;
  obj16.accessibilityLabel = intl4.string(initialSelection(onContinue[24])["8Xenq+"]);
  obj16.onChange = tmp6[1];
  const intl5 = tmp10(tmp3[20]).intl;
  obj16.placeholder = intl5.string(initialSelection(onContinue[24])["8Xenq+"]);
  obj15.children = memo2(catalog(onContinue[25]).SearchBar, obj16);
  items23[1] = memo2(closure_8, obj15);
  let tmp35Result3 = isLoading;
  if (isLoading) {
    const obj17 = { style: tmp.status, children: tmp35(tmp10(tmp3[26]).ActivityIndicator, {}) };
    tmp35Result3 = tmp35(tmp34, obj17);
  }
  items23[2] = tmp35Result3;
  let tmp33Result = tmp24;
  if (tmp24) {
    const obj18 = { style: tmp.status, children: null };
    const obj19 = { variant: "text-md/semibold", color: "text-strong", children: null };
    const intl6 = tmp10(tmp3[20]).intl;
    obj19.children = intl6.string(tmp2(tmp3[24]).w5cRz0);
    const items24 = [tmp35(tmp10(tmp3[22]).Text, obj19), ];
    const obj20 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl7 = tmp10(tmp3[20]).intl;
    obj20.children = intl7.string(tmp2(tmp3[24]).Khsqzs);
    items24[1] = tmp35(tmp10(tmp3[22]).Text, obj20);
    obj18.children = items24;
    tmp33Result = tmp33(tmp34, obj18);
  }
  items23[3] = tmp33Result;
  let tmp33Result2 = tmp26;
  if (tmp26) {
    const obj21 = { style: tmp.status, children: null };
    const intl8 = tmp10(tmp3[20]).intl;
    const tmp2Result = tmp2(tmp3[24]);
    const obj22 = { variant: "text-md/semibold", color: "text-strong", children: intl8.string(stateFromStores1 ? tmp2Result["+np3yH"] : tmp2Result.V7UsE0) };
    const items25 = [tmp35(tmp10(tmp3[22]).Text, obj22), , ];
    const intl9 = tmp10(tmp3[20]).intl;
    const tmp2Result2 = tmp2(tmp3[24]);
    const obj23 = { variant: "text-sm/normal", color: "text-muted", children: intl9.string(stateFromStores1 ? tmp2Result2.CjS26n : tmp2Result2.qx4Gb6) };
    items25[1] = tmp35(tmp10(tmp3[22]).Text, obj23);
    if (stateFromStores1) {
      const obj24 = { onPress: callback3, size: "sm", text: null, variant: "secondary" };
      const intl10 = tmp10(tmp3[20]).intl;
      obj24.text = intl10.string(tmp2(tmp3[24]).uGhymA);
      stateFromStores1 = tmp35(tmp10(tmp3[27]).Button, obj24);
    }
    items25[2] = stateFromStores1;
    obj21.children = items25;
    tmp33Result2 = tmp33(tmp34, obj21);
  }
  items23[4] = tmp33Result2;
  let tmp35Result4 = !isLoading;
  if (!isLoading) {
    tmp35Result4 = !tmp24;
  }
  if (tmp35Result4) {
    tmp35Result4 = !tmp26;
  }
  if (tmp35Result4) {
    const obj25 = {
      style: tmp.grid,
      children: memo4.map((accessibilityLabel) => {
          let hasItem = first.includes(accessibilityLabel.id);
          const obj = {
            accessibilityLabel: accessibilityLabel.name,
            accessibilityRole: "button",
            accessibilityState: { selected: hasItem },
            onPress() {
              return closure_23(accessibilityLabel.id);
            },
            style: null,
            children: null
          };
          const items = [closure_4.tile, ];
          const size = { width, height: width / stateFromStores2 };
          items[1] = size;
          obj.style = items;
          const items1 = [memo2(initialSelection(onContinue[28]), { game: accessibilityLabel, width }), ];
          if (hasItem) {
            const obj3 = { pointerEvents: "none", style: null };
            const items2 = [first.absoluteFillObject, closure_4.selected];
            obj3.style = items2;
            hasItem = memo2(closure_8, obj3);
          }
          items1[1] = hasItem;
          obj.children = items1;
          return memo5(width, obj, accessibilityLabel.id);
        })
    };
    tmp35Result4 = tmp35(tmp34, obj25);
  }
  items23[5] = tmp35Result4;
  obj12.children = items23;
  items21[1] = memo5(closure_6, obj12);
  obj5.children = items21;
  const items26 = [memo5(closure_8, obj5), ];
  const obj26 = { bottom: true, style: tmp.footer, children: null };
  const obj27 = { style: tmp.footerContent, children: null };
  const obj14 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: subtitle };
  const tmp10Result4 = catalog(onContinue[17]);
  const tmp27 = memo6.length >= bound;
  const items27 = [
    memo2(closure_8, {
      style: tmp.thumbnails,
      children: substr.map((game) => {
        const obj = { style: closure_4.thumbnail, children: collapsedCategories(InterestGameCoverDefault, { game, width: THUMBNAIL_WIDTH }) };
        return collapsedCategories(closure_2_8, obj, game.id);
      })
    }),

  ];
  const obj29 = { style: tmp.footerActions, children: null };
  const obj30 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl11 = tmp10(tmp3[20]).intl;
  obj30.children = intl11.format(initialSelection(onContinue[24]).v9v0uY, { count: memo6.length, max: memo });
  const items28 = [memo2(catalog(onContinue[22]).Text, obj30), ];
  const obj32 = { accessibilityLabel: null, disabled: null, icon: null, onPress: null, size: "lg", variant: "primary" };
  const intl12 = tmp10(tmp3[20]).intl;
  obj32.accessibilityLabel = intl12.string(catalog(onContinue[20]).t["3PatSz"]);
  obj32.disabled = !tmp27;
  obj32.icon = memo2(catalog(onContinue[29]).ArrowLargeRightIcon, { color: "white" });
  obj32.onPress = callback1;
  items28[1] = memo2(catalog(onContinue[19]).IconButton, obj32);
  obj29.children = items28;
  items27[1] = memo5(closure_8, obj29);
  obj27.children = items27;
  obj26.children = memo5(closure_8, obj27);
  items26[1] = memo2(catalog(onContinue[23]).SafeAreaPaddingView, obj26);
  obj4.children = items26;
  return memo5(closure_8, obj4);
});