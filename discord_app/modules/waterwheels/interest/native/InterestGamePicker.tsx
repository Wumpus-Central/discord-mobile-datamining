// === Module 19507: InterestGamePicker ===

// Module 19507 (InterestGamePicker)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import _modDef2407 from "module_2407" /* 2407 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5018 */;
import useGame2 from "useGame" /* 7474 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8673 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameStore from "GameStore" /* 2015 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, ScrollView: metroRequire, StyleSheet: closure_7, View: closure_8 } = get_ActivityIndicator);
const InterestGamePickerConstants = fn(19508);
({ GRID_COLUMNS: c10, GRID_GAP } = InterestGamePickerConstants);
({ MAX_SELECTIONS: closure_12, MIN_SELECTIONS: map1, SCREEN_HORIZONTAL_PADDING } = InterestGamePickerConstants);
({ THUMBNAIL_HIT_SLOP: closure_15, THUMBNAIL_WIDTH } = InterestGamePickerConstants);
const TILE_ASPECT_RATIO = InterestGamePickerConstants.TILE_ASPECT_RATIO;
({ FOOTER_BORDER_WIDTH, FOOTER_BOTTOM_PADDING, FOOTER_THUMBNAIL_GAP, SELECTED_BORDER_WIDTH, THUMBNAIL_ASPECT_RATIO } = InterestGamePickerConstants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { screen: { flex: 1 }, body: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, header: null, content: null, intro: null, subtitle: null, search: null, grid: null, tile: null, selected: null, status: null, footer: null, footerContent: null, thumbnails: null, thumbnail: null, footerActions: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.header = { height: nativeDefault.space.PX_64, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" };
let obj4 = { height: nativeDefault.space.PX_64, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" };
obj2.content = { paddingBottom: nativeDefault.space.PX_24 };
let obj5 = { paddingBottom: nativeDefault.space.PX_24 };
obj2.intro = { alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_12 };
obj2.subtitle = { textAlign: "center" };
let obj6 = { alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_12 };
obj2.search = { paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
obj2.grid = { flexDirection: "row", flexWrap: "wrap", gap: GRID_GAP, paddingHorizontal: SCREEN_HORIZONTAL_PADDING };
let obj7 = { paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
obj2.tile = { aspectRatio: TILE_ASPECT_RATIO, overflow: "hidden", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj8 = { aspectRatio: TILE_ASPECT_RATIO, overflow: "hidden", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.selected = { position: "absolute", inset: 0, borderWidth: SELECTED_BORDER_WIDTH, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj9 = { position: "absolute", inset: 0, borderWidth: SELECTED_BORDER_WIDTH, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.status = { alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_40 };
let obj10 = { alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_40 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
obj2.footer = { minHeight: nativeDefault.space.PX_80, borderTopWidth: FOOTER_BORDER_WIDTH, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_12, paddingBottom: FOOTER_BOTTOM_PADDING, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj11 = { minHeight: nativeDefault.space.PX_80, borderTopWidth: FOOTER_BORDER_WIDTH, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_12, paddingBottom: FOOTER_BOTTOM_PADDING, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.footerContent = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 };
obj2.thumbnails = { flexShrink: 1, flexDirection: "row", gap: FOOTER_THUMBNAIL_GAP };
let obj12 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 };
obj2.thumbnail = { width: THUMBNAIL_WIDTH, flexShrink: 1, aspectRatio: THUMBNAIL_ASPECT_RATIO, overflow: "hidden", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj13 = { width: THUMBNAIL_WIDTH, flexShrink: 1, aspectRatio: THUMBNAIL_ASPECT_RATIO, overflow: "hidden", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.footerActions = { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
let closure_20 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default function InterestGamePicker(catalog) {
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
  const ref = noop.useRef(false);
  if (Number.isFinite(minSelection)) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(minSelection, closure_13), memo);
  } else {
    bound = closure_13;
  }
  let tmp2 = _slicedToArray(noop.useState(0), 2);
  const obj2 = catalog(onSkip[9]);
  const debouncedGameAutocomplete = obj2.useDebouncedGameAutocomplete(str, { surface: catalog(onSkip[10]).GameSearchSurface.INTEREST_PICKER, filterGroup: catalog(onSkip[11]).GameSearchFilterGroup.DEFAULT });
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
  const tmp17 = onContinue(onSkip[13])(memo1);
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
  let obj3 = { surface: catalog(onSkip[10]).GameSearchSurface.INTEREST_PICKER, filterGroup: catalog(onSkip[11]).GameSearchFilterGroup.DEFAULT };
  let items2 = [bound];
  const items3 = [tmp21];
  const stateFromStores = catalog(onSkip[14]).useStateFromStores(items2, () => memo.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)), items3);
  const tmp11Result = catalog(onSkip[14]);
  const items4 = [bound];
  const items5 = [catalog];
  let stateFromStores1 = catalog(onSkip[14]).useStateFromStores(items4, () => catalog.some((item) => bound.didFetchingFail(item)), items5);
  const items6 = [tmp17];
  memo2 = obj.useMemo(() => new Map(closure_13.map((id) => {
    const items = [id.id, id];
    return items;
  })), items6);
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
      AccessibilityAnnouncer.announce(intl.formatToPlainString(_modDef2407.v9v0uY, obj));
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
      })
    ];
    useGame.fetchMany.apply(items);
  }, items15);
  const obj6 = { top: true, children: null };
  const tmp11Result2 = catalog(onSkip[14]);
  const tmp28 = memo5.length >= bound;
  obj6.children = memo5(ref, { style: tmp.header, children: memo5(onContinue(onSkip[20]), { onPress: callback3 }) });
  const items16 = [memo5(catalog(onSkip[19]).SafeAreaPaddingView, obj6), ];
  const obj8 = { contentContainerStyle: tmp.content, keyboardShouldPersistTaps: "handled", children: null };
  const obj9 = { style: tmp.intro, children: null };
  const items17 = [memo5(catalog(onSkip[21]).Heading, { variant: "heading-xl/bold", color: "text-strong", children: title }), memo5(catalog(onSkip[21]).Text, { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: subtitle })];
  obj9.children = items17;
  const items18 = [length(ref, obj9), , , , , ];
  const obj11 = { style: tmp.search, children: null };
  const obj12 = { accessibilityLabel: null, onChange: null, placeholder: null };
  let intl = tmp11(tmp12[16]).intl;
  obj12.accessibilityLabel = intl.string(onContinue(onSkip[17])["8Xenq+"]);
  obj12.onChange = tmp6[1];
  const intl2 = tmp11(tmp12[16]).intl;
  obj12.placeholder = intl2.string(onContinue(onSkip[17])["8Xenq+"]);
  obj11.children = memo5(catalog(onSkip[22]).SearchBar, obj12);
  items18[1] = memo5(ref, obj11);
  let tmp37Result = isLoading;
  if (isLoading) {
    const obj13 = { style: tmp.status, children: null };
    const obj14 = { accessibilityLabel: null };
    const intl3 = tmp11(tmp12[16]).intl;
    obj14.accessibilityLabel = intl3.string(tmp11(tmp12[16]).t.ZTNur7);
    obj13.children = tmp37(tmp11(tmp12[23]).ActivityIndicator, obj14);
    tmp37Result = tmp37(tmp36, obj13);
  }
  items18[2] = tmp37Result;
  let tmp35Result = tmp25;
  if (tmp25) {
    const obj15 = { style: tmp.status, children: null };
    const obj16 = { variant: "text-md/semibold", color: "text-strong", children: null };
    const intl4 = tmp11(tmp12[16]).intl;
    obj16.children = intl4.string(tmp16(tmp12[17]).w5cRz0);
    const items19 = [tmp37(tmp11(tmp12[21]).Text, obj16), ];
    const obj17 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl5 = tmp11(tmp12[16]).intl;
    obj17.children = intl5.string(tmp16(tmp12[17]).Khsqzs);
    items19[1] = tmp37(tmp11(tmp12[21]).Text, obj17);
    obj15.children = items19;
    tmp35Result = tmp35(tmp36, obj15);
  }
  items18[3] = tmp35Result;
  let tmp35Result2 = tmp27;
  if (tmp27) {
    const obj18 = { style: tmp.status, children: null };
    const intl6 = tmp11(tmp12[16]).intl;
    const tmp16Result = tmp16(tmp12[17]);
    const obj19 = { variant: "text-md/semibold", color: "text-strong", children: intl6.string(stateFromStores1 ? tmp16Result["+np3yH"] : tmp16Result.V7UsE0) };
    const items20 = [tmp37(tmp11(tmp12[21]).Text, obj19), , ];
    const intl7 = tmp11(tmp12[16]).intl;
    const tmp16Result2 = tmp16(tmp12[17]);
    const obj20 = { variant: "text-sm/normal", color: "text-muted", children: intl7.string(stateFromStores1 ? tmp16Result2.CjS26n : tmp16Result2.qx4Gb6) };
    items20[1] = tmp37(tmp11(tmp12[21]).Text, obj20);
    if (stateFromStores1) {
      const obj21 = { onPress: callback4, size: "sm", text: null, variant: "secondary" };
      const intl8 = tmp11(tmp12[16]).intl;
      obj21.text = intl8.string(tmp16(tmp12[17]).uGhymA);
      stateFromStores1 = tmp37(tmp11(tmp12[24]).Button, obj21);
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
      children: rounded > 0 && memo3.map((accessibilityLabel) => {
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
            children: null
          };
          const items = [closure_3.tile, ];
          const size = { width: rounded, height: rounded / memo4 };
          items[1] = size;
          obj.style = items;
          const items1 = [memo5(onContinue(onSkip[25]), { game: accessibilityLabel, width: rounded }), ];
          if (hasItem) {
            const obj3 = { pointerEvents: "none", style: null };
            const items2 = [rounded.absoluteFillObject, closure_3.selected];
            obj3.style = items2;
            hasItem = memo5(closure_8, obj3);
          }
          items1[1] = hasItem;
          obj.children = items1;
          return length(first, obj, accessibilityLabel.id);
        })
    };
    tmp37Result2 = tmp37(tmp36, obj22);
    const tmp45 = rounded > 0 && memo3.map((accessibilityLabel) => {
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
        children: null
      };
      const items = [closure_3.tile, ];
      const size = { width: rounded, height: rounded / memo4 };
      items[1] = size;
      obj.style = items;
      const items1 = [memo5(onContinue(onSkip[25]), { game: accessibilityLabel, width: rounded }), ];
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
  const items21 = [length(ref, obj5), ];
  const obj23 = { bottom: true, style: tmp.footer, children: null };
  const obj24 = { style: tmp.footerContent, children: null };
  const obj10 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: subtitle };
  const obj7 = { style: tmp.header, children: memo5(onContinue(onSkip[20]), { onPress: callback3 }) };
  const items22 = [
    memo5(ref, {
      style: tmp.thumbnails,
      children: memo4.map((game) => {
        const obj = { accessibilityHint: null, accessibilityLabel: null, accessibilityRole: "button", hitSlop: null, onPress: null, style: null, children: null };
        const intl = catalog(onSkip[16]).intl;
        obj.accessibilityHint = intl.string(catalog(onSkip[16]).t.N86XcP);
        obj.accessibilityLabel = game.name;
        obj.hitSlop = memo;
        obj.onPress = function onPress() {
          return callback(game.id);
        };
        obj.style = closure_3.thumbnail;
        obj.children = memo5(onContinue(onSkip[25]), { game, width: memo2 });
        return memo5(first, obj, game.id);
      })
    }),

  ];
  const obj26 = { style: tmp.footerActions, children: null };
  const obj27 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl9 = tmp11(tmp12[16]).intl;
  obj27.children = intl9.format(onContinue(onSkip[17]).v9v0uY, { count: memo5.length, max: memo });
  const items23 = [memo5(catalog(onSkip[21]).Text, obj27), ];
  const obj29 = { accessibilityLabel: null, disabled: null, icon: null, onPress: null, size: "lg", variant: "primary" };
  const intl10 = tmp11(tmp12[16]).intl;
  obj29.accessibilityLabel = intl10.string(catalog(onSkip[16]).t["3PatSz"]);
  obj29.disabled = !tmp28;
  const obj25 = {
    style: tmp.thumbnails,
    children: memo4.map((game) => {
      const obj = { accessibilityHint: null, accessibilityLabel: null, accessibilityRole: "button", hitSlop: null, onPress: null, style: null, children: null };
      const intl = catalog(onSkip[16]).intl;
      obj.accessibilityHint = intl.string(catalog(onSkip[16]).t.N86XcP);
      obj.accessibilityLabel = game.name;
      obj.hitSlop = memo;
      obj.onPress = function onPress() {
        return callback(game.id);
      };
      obj.style = closure_3.thumbnail;
      obj.children = memo5(onContinue(onSkip[25]), { game, width: memo2 });
      return memo5(first, obj, game.id);
    })
  };
  const obj28 = { count: memo5.length, max: memo };
  obj29.icon = memo5(catalog(onSkip[27]).ArrowLargeRightIcon, { color: onContinue(onSkip[7]).colors.CONTROL_PRIMARY_TEXT_DEFAULT });
  obj29.onPress = callback2;
  items23[1] = memo5(catalog(onSkip[26]).IconButton, obj29);
  obj26.children = items23;
  items22[1] = length(ref, obj26);
  obj24.children = items22;
  obj23.children = length(ref, obj24);
  items21[1] = memo5(catalog(onSkip[19]).SafeAreaPaddingView, obj23);
  obj4.children = items21;
  return length(ref, obj4);
};