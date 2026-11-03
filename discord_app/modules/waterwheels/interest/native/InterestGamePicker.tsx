// discord_app/modules/waterwheels/interest/native/InterestGamePicker.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2537 from "../../WaterwheelsUntranslated.messages.js";
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
const InterestGamePickerConstants = fn(18576);
({ GRID_COLUMNS: closure_10, GRID_GAP } = InterestGamePickerConstants);
({ MAX_SELECTIONS: closure_12, MIN_SELECTIONS: map1, SCREEN_HORIZONTAL_PADDING } = InterestGamePickerConstants);
({ THUMBNAIL_HIT_SLOP: closure_15, THUMBNAIL_WIDTH } = InterestGamePickerConstants);
const TILE_ASPECT_RATIO = InterestGamePickerConstants.TILE_ASPECT_RATIO;
({ FOOTER_BORDER_WIDTH, FOOTER_BOTTOM_PADDING, FOOTER_THUMBNAIL_GAP, SELECTED_BORDER_WIDTH, THUMBNAIL_ASPECT_RATIO } =
  InterestGamePickerConstants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5141);
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
let size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default function InterestGamePicker(catalog) {
  catalog = catalog.catalog;
  let minSelection = catalog.minSelection;
  ({ title, subtitle } = catalog);
  if (minSelection === undefined) {
    minSelection = memo;
  }
  const onContinue = catalog.onContinue;
  const onSkip = catalog.onSkip;
  first = undefined;
  closure_5 = undefined;
  let bound;
  let results;
  onSelect = undefined;
  closure_11 = undefined;
  max = undefined;
  memo = undefined;
  let memo2;
  let rounded;
  let memo4;
  let memo5;
  let length;
  let ref2;
  let callback;
  closure_21 = undefined;
  const tmp = callback();
  _slicedToArray = tmp;
  [first, closure_5] = first.useState([]);
  const tmp4 = _slicedToArray(first.useState(""), 2);
  ref = first.useRef(false);
  if (Number.isFinite(minSelection)) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(minSelection, memo), max);
  } else {
    bound = memo;
  }
  const obj2 = catalog(onSkip[9]);
  const debouncedGameAutocomplete = obj2.useDebouncedGameAutocomplete(str, {
    surface: catalog(onSkip[10]).GameSearchSurface.INTEREST_PICKER,
    filterGroup: catalog(onSkip[11]).GameSearchFilterGroup.DEFAULT,
  });
  results = debouncedGameAutocomplete.results;
  ({ error, onSelect } = debouncedGameAutocomplete);
  items = [results];
  memo = obj.useMemo(() => {
    items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items);
  let items1 = [memo, catalog, first];
  const memo1 = obj.useMemo(() => {
    items = [...first];
    return Array.from(new Set(items));
  }, items1);
  const tmp14 = onContinue(onSkip[13])(memo1);
  closure_11 = tmp14;
  const tmp15 = tmp4[0].trim().length > 0;
  let tmp16 = tmp15;
  if (tmp15) {
    tmp16 = null == error;
  }
  max = tmp16;
  let tmp18 = catalog;
  if (tmp16) {
    tmp18 = memo;
  }
  memo = tmp18;
  let obj3 = {
    surface: catalog(onSkip[10]).GameSearchSurface.INTEREST_PICKER,
    filterGroup: catalog(onSkip[11]).GameSearchFilterGroup.DEFAULT,
  };
  let items2 = [onSelect];
  const items3 = [tmp18];
  const stateFromStores = catalog(onSkip[14]).useStateFromStores(
    items2,
    () => memo.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)),
    items3,
  );
  const tmp8Result = catalog(onSkip[14]);
  const items4 = [onSelect];
  const items5 = [catalog];
  let stateFromStores1 = catalog(onSkip[14]).useStateFromStores(
    items4,
    () => catalog.some((item) => onSelect.didFetchingFail(item)),
    items5,
  );
  const items6 = [tmp14];
  memo2 = obj.useMemo(
    () =>
      new Map(
        closure_11.map((id) => {
          items = [id.id, id];
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
          items = [value];
        }
        return items;
      }
      items = [];
    });
  }, items7);
  const items8 = [memo, memo2];
  if (tmp16) {
    memo3 = obj.useMemo(() => {
      closure_0 = memo2;
      return memo.flatMap((item) => {
        value = closure_0.get(item);
        if (null != value) {
          if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
            items = [value];
          }
          return items;
        }
        items = [];
      });
    }, items8);
  }
  let isLoading = tmp15;
  if (tmp15) {
    isLoading = debouncedGameAutocomplete.isLoading;
  }
  if (!isLoading) {
    isLoading = stateFromStores;
  }
  let tmp34Result = tmp15;
  if (tmp15) {
    tmp34Result = !isLoading;
  }
  if (tmp34Result) {
    tmp34Result = null == error;
  }
  if (tmp34Result) {
    tmp34Result = 0 === memo3.length;
  }
  let tmp34Result2 = !tmp15;
  if (!tmp15) {
    tmp34Result2 = !isLoading;
  }
  if (tmp34Result2) {
    tmp34Result2 = 0 === memo3.length;
  }
  let tmp36Result = !isLoading;
  if (!isLoading) {
    tmp36Result = !tmp34Result;
  }
  if (tmp36Result) {
    tmp36Result = !tmp34Result2;
  }
  const tmp26 = onContinue(onSkip[15])({ isMounted: tmp36Result });
  const width = tmp26.width;
  let num = 0;
  ({ ref, onLayout } = tmp26);
  if (undefined !== width) {
    num = width;
  }
  rounded = Math.floor((num - 2 * memo2 - closure_11 * (memo - 1)) / memo);
  const items9 = [memo2, first];
  memo4 = obj.useMemo(() => {
    closure_0 = memo2;
    return first.flatMap((item) => {
      value = closure_0.get(item);
      if (null != value) {
        if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
          items = [value];
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
      AccessibilityAnnouncer.announce(intl.formatToPlainString(_modDef2537.v9v0uY, obj));
    }
  }, items11);
  callback = obj.useCallback((arg0) => {
    closure_0 = arg0;
    closure_5((arr) => {
      if (arr.includes(closure_0)) {
        let found = arr.filter((item) => item !== closure_1_0);
      } else {
        found = arr;
        if (arr.length < closure_12) {
          items = [];
          items[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
          found = items;
        }
      }
      return found;
    });
  }, []);
  const items12 = [tmp16, callback, onSelect];
  closure_21 = obj.useCallback((arg0) => {
    if (closure_12) {
      onSelect(arg0);
    }
    callback(arg0);
  }, items12);
  const items13 = [bound, onContinue, memo5];
  const items14 = [onSkip, memo5];
  const callback1 = obj.useCallback(() => {
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
  const callback2 = obj.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onSkip(memo5);
    }
  }, items14);
  const obj4 = { style: tmp.screen, children: null };
  const obj5 = { style: tmp.body, children: null };
  const callback3 = obj.useCallback(() => {
    const useGame = useGame2.useGame;
    items = [
      ...catalog.map((item) => {
        items = [item];
        return items;
      }),
    ];
    useGame.fetchMany.apply(items);
  }, items15);
  const obj6 = { top: true, children: null };
  const tmp28 = memo5.length >= bound;
  const tmp8Result2 = catalog(onSkip[14]);
  obj6.children = length(results, {
    style: tmp.header,
    children: length(onContinue(onSkip[21]), { onPress: callback2 }),
  });
  const items16 = [length(catalog(onSkip[20]).SafeAreaPaddingView, obj6)];
  const obj8 = { contentContainerStyle: tmp.content, keyboardShouldPersistTaps: "handled", children: null };
  const obj9 = { style: tmp.intro, children: null };
  const items17 = [
    length(catalog(onSkip[22]).Heading, { variant: "heading-xl/semibold", color: "text-strong", children: title }),
    length(catalog(onSkip[22]).Text, {
      style: tmp.subtitle,
      variant: "text-sm/normal",
      color: "text-default",
      children: subtitle,
    }),
  ];
  obj9.children = items17;
  const items18 = [ref2(results, obj9), , , , ,];
  const obj11 = { style: tmp.search, children: null };
  const obj12 = { accessibilityLabel: null, onChange: null, placeholder: null };
  let intl = tmp8(tmp9[17]).intl;
  obj12.accessibilityLabel = intl.string(onContinue(onSkip[18])["8Xenq+"]);
  obj12.onChange = tmp4[1];
  const intl2 = tmp8(tmp9[17]).intl;
  obj12.placeholder = intl2.string(onContinue(onSkip[18])["8Xenq+"]);
  obj11.children = length(catalog(onSkip[23]).SearchBar, obj12);
  items18[1] = length(results, obj11);
  if (isLoading) {
    const obj13 = { style: tmp.status, children: null };
    const obj14 = { accessibilityLabel: null };
    const intl3 = tmp8(tmp9[17]).intl;
    obj14.accessibilityLabel = intl3.string(tmp8(tmp9[17]).t.ZTNur7);
    obj13.children = tmp36(tmp8(tmp9[24]).ActivityIndicator, obj14);
    isLoading = tmp36(tmp35, obj13);
  }
  items18[2] = isLoading;
  if (tmp34Result) {
    const obj15 = { style: tmp.status, children: null };
    const obj16 = { variant: "text-md/semibold", color: "text-strong", children: null };
    const intl4 = tmp8(tmp9[17]).intl;
    obj16.children = intl4.string(tmp13(tmp9[18]).w5cRz0);
    const items19 = [tmp36(tmp8(tmp9[22]).Text, obj16)];
    const obj17 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl5 = tmp8(tmp9[17]).intl;
    obj17.children = intl5.string(tmp13(tmp9[18]).Khsqzs);
    items19[1] = tmp36(tmp8(tmp9[22]).Text, obj17);
    obj15.children = items19;
    tmp34Result = tmp34(tmp35, obj15);
  }
  items18[3] = tmp34Result;
  if (tmp34Result2) {
    const obj18 = { style: tmp.status, children: null };
    const intl6 = tmp8(tmp9[17]).intl;
    const tmp13Result = tmp13(tmp9[18]);
    const obj19 = {
      variant: "text-md/semibold",
      color: "text-strong",
      children: intl6.string(stateFromStores1 ? tmp13Result["+np3yH"] : tmp13Result.V7UsE0),
    };
    const items20 = [tmp36(tmp8(tmp9[22]).Text, obj19), ,];
    const intl7 = tmp8(tmp9[17]).intl;
    const tmp13Result2 = tmp13(tmp9[18]);
    const obj20 = {
      variant: "text-sm/normal",
      color: "text-muted",
      children: intl7.string(stateFromStores1 ? tmp13Result2.CjS26n : tmp13Result2.qx4Gb6),
    };
    items20[1] = tmp36(tmp8(tmp9[22]).Text, obj20);
    if (stateFromStores1) {
      const obj21 = { onPress: callback3, size: "sm", text: null, variant: "secondary" };
      const intl8 = tmp8(tmp9[17]).intl;
      obj21.text = intl8.string(tmp13(tmp9[18]).uGhymA);
      stateFromStores1 = tmp36(tmp8(tmp9[25]).Button, obj21);
    }
    items20[2] = stateFromStores1;
    obj18.children = items20;
    tmp34Result2 = tmp34(tmp35, obj18);
  }
  items18[4] = tmp34Result2;
  if (tmp36Result) {
    const obj22 = {
      ref,
      onLayout,
      style: tmp.grid,
      children:
        rounded > 0 &&
        memo3.map((accessibilityLabel) => {
          let hasItem = first.includes(accessibilityLabel.id);
          let tmp2 = !hasItem;
          if (!hasItem) {
            tmp2 = memo5.length >= closure_12;
          }
          const obj = {
            accessibilityLabel: accessibilityLabel.name,
            accessibilityRole: "button",
            accessibilityState: { disabled: tmp2, selected: hasItem },
            disabled: tmp2,
            onPress() {
              return closure_21(accessibilityLabel.id);
            },
            style: null,
            children: null,
          };
          items = [closure_3.tile];
          const size = { width: rounded, height: rounded / memo5 };
          items[1] = size;
          obj.style = items;
          const items1 = [length(onContinue(onSkip[26]), { game: accessibilityLabel, width: rounded })];
          if (hasItem) {
            const obj3 = { pointerEvents: "none", style: null };
            const items2 = [bound.absoluteFillObject, closure_3.selected];
            obj3.style = items2;
            hasItem = length(results, obj3);
          }
          items1[1] = hasItem;
          obj.children = items1;
          return closure_19(closure_5, obj, accessibilityLabel.id);
        }),
    };
    tmp36Result = tmp36(tmp35, obj22);
    const tmp40 =
      rounded > 0 &&
      memo3.map((accessibilityLabel) => {
        let hasItem = first.includes(accessibilityLabel.id);
        let tmp2 = !hasItem;
        if (!hasItem) {
          tmp2 = memo5.length >= closure_12;
        }
        const obj = {
          accessibilityLabel: accessibilityLabel.name,
          accessibilityRole: "button",
          accessibilityState: { disabled: tmp2, selected: hasItem },
          disabled: tmp2,
          onPress() {
            return closure_21(accessibilityLabel.id);
          },
          style: null,
          children: null,
        };
        items = [closure_3.tile];
        const size = { width: rounded, height: rounded / memo5 };
        items[1] = size;
        obj.style = items;
        const items1 = [length(onContinue(onSkip[26]), { game: accessibilityLabel, width: rounded })];
        if (hasItem) {
          const obj3 = { pointerEvents: "none", style: null };
          const items2 = [bound.absoluteFillObject, closure_3.selected];
          obj3.style = items2;
          hasItem = length(results, obj3);
        }
        items1[1] = hasItem;
        obj.children = items1;
        return closure_19(closure_5, obj, accessibilityLabel.id);
      });
  }
  items18[5] = tmp36Result;
  obj8.children = items18;
  items16[1] = ref2(ref, obj8);
  obj5.children = items16;
  const items21 = [ref2(results, obj5)];
  const obj23 = { bottom: true, style: tmp.footer, children: null };
  const obj24 = { style: tmp.footerContent, children: null };
  const obj10 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: subtitle };
  const obj7 = { style: tmp.header, children: length(onContinue(onSkip[21]), { onPress: callback2 }) };
  const items22 = [
    length(results, {
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
        const intl = catalog(onSkip[17]).intl;
        obj.accessibilityHint = intl.string(catalog(onSkip[17]).t.N86XcP);
        obj.accessibilityLabel = game.name;
        obj.hitSlop = rounded;
        obj.onPress = function onPress() {
          return callback(game.id);
        };
        obj.style = closure_3.thumbnail;
        obj.children = length(onContinue(onSkip[26]), { game, width: memo4 });
        return length(closure_5, obj, game.id);
      }),
    }),
  ];
  const obj26 = { style: tmp.footerActions, children: null };
  const obj27 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl9 = tmp8(tmp9[17]).intl;
  obj27.children = intl9.format(onContinue(onSkip[18]).v9v0uY, { count: memo5.length, max });
  const items23 = [length(catalog(onSkip[22]).Text, obj27)];
  const obj29 = { accessibilityLabel: null, disabled: null, icon: null, onPress: null, size: "lg", variant: "primary" };
  const intl10 = tmp8(tmp9[17]).intl;
  obj29.accessibilityLabel = intl10.string(catalog(onSkip[17]).t["3PatSz"]);
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
      const intl = catalog(onSkip[17]).intl;
      obj.accessibilityHint = intl.string(catalog(onSkip[17]).t.N86XcP);
      obj.accessibilityLabel = game.name;
      obj.hitSlop = rounded;
      obj.onPress = function onPress() {
        return callback(game.id);
      };
      obj.style = closure_3.thumbnail;
      obj.children = length(onContinue(onSkip[26]), { game, width: memo4 });
      return length(closure_5, obj, game.id);
    }),
  };
  const obj28 = { count: memo5.length, max };
  obj29.icon = length(catalog(onSkip[28]).ArrowLargeRightIcon, {
    color: onContinue(onSkip[7]).colors.CONTROL_PRIMARY_TEXT_DEFAULT,
  });
  obj29.onPress = callback1;
  items23[1] = length(catalog(onSkip[27]).IconButton, obj29);
  obj26.children = items23;
  items22[1] = ref2(results, obj26);
  obj24.children = items22;
  obj23.children = ref2(results, obj24);
  items21[1] = length(catalog(onSkip[20]).SafeAreaPaddingView, obj23);
  obj4.children = items21;
  return ref2(results, obj4);
}
