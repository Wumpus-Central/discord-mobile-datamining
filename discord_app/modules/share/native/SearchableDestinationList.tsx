// === Module 11117: SearchableDestinationList ===

// Module 11117 (SearchableDestinationList)
import nativeDefault from "native" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 7141 */;
import UserSearchUtils from "UserSearchUtils" /* 7763 */;
import sortByMatchScore from "sortByMatchScore" /* 9965 */;
import formatResults from "formatResults" /* 11114 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11126 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Keyboard: metroRequire } = get_ActivityIndicator);
const NOOP = fn(1074).NOOP;
const UserRowModes = fn(10989).UserRowModes;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { searchBarContainer: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, noResults: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.noResults = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/SearchableDestinationList.tsx");

export default function SearchableDestinationList(getRowIsUnavailable) {
  ({ initialSelectedDestinations, disabledDestinations } = getRowIsUnavailable);
  getRowIsUnavailable = getRowIsUnavailable.getRowIsUnavailable;
  const onSelectedDestinationChange = getRowIsUnavailable.onSelectedDestinationChange;
  const onSearchTextChange = getRowIsUnavailable.onSearchTextChange;
  let NONE = getRowIsUnavailable.rowMode;
  ({ originDestination, channelFilter } = getRowIsUnavailable);
  if (NONE === undefined) {
    NONE = selectedDestinations.NONE;
  }
  let PX_8 = getRowIsUnavailable.insetStart;
  if (PX_8 === undefined) {
    PX_8 = getRowIsUnavailable(onSelectedDestinationChange[7]).space.PX_8;
  }
  let PX_12 = getRowIsUnavailable.insetEnd;
  if (PX_12 === undefined) {
    PX_12 = getRowIsUnavailable(onSelectedDestinationChange[7]).space.PX_12;
  }
  let flag = getRowIsUnavailable.autoFocusSearch;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = getRowIsUnavailable.hideSearchOnDefaultNoResults;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ defaultNoResultsFound, disableGradient, disableSelection } = getRowIsUnavailable);
  const disableLongPress = getRowIsUnavailable.disableLongPress;
  selectedDestinations = undefined;
  closure_9 = undefined;
  let results;
  let updateSearchText;
  let ref;
  c13 = undefined;
  closure_14 = undefined;
  let onChange;
  let memo1;
  let memo2;
  let callback2;
  let callback3;
  let callback4;
  let ref1;
  closure_22 = undefined;
  let scaledTextLineHeight;
  let tmp6 = ref();
  ref = NONE.useRef(null);
  if (initialSelectedDestinations == null) {
    initialSelectedDestinations = [];
  }
  const tmp8 = onSearchTextChange(NONE.useState(initialSelectedDestinations), 2);
  selectedDestinations = tmp8[0];
  closure_9 = tmp8[1];
  const shareSearchResults = disabledDestinations(onSelectedDestinationChange[8]).useShareSearchResults({ selectedDestinations, originDestination, channelFilter, includeMissingDMs: true });
  results = shareSearchResults.results;
  updateSearchText = shareSearchResults.updateSearchText;
  ref = obj.useRef("");
  let obj2 = disabledDestinations(onSelectedDestinationChange[8]);
  [tmp14, c13] = onSearchTextChange(NONE.useState(false), 2);
  closure_14 = obj.useRef(null);
  const effect = obj.useEffect(() => () => {
    const current = ref.current;
    if (current != null) {
      current.cancel();
    }
  }, []);
  let items = [onSearchTextChange, updateSearchText];
  onChange = obj.useCallback((current) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (current !== ref.current) {
      ref.current = current;
      if (flag) {
        current = ref.current;
        if (current != null) {
          current.setText(current);
        }
      }
      updateSearchText(current);
      if (onSearchTextChange != null) {
        onSearchTextChange(current);
      }
      _undefined(current.trim().length > 0);
      closure_14.current = RunAfterInteractionsUtils.runAfterInteractions(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToTop(false);
        }
      });
    }
  }, items);
  let items1 = [selectedDestinations, onSelectedDestinationChange, onChange];
  const effect1 = obj.useEffect(() => {
    onSelectedDestinationChange(first);
    const timerId = setTimeout(() => {
      disableLongPress.dismiss();
    }, 0);
    const timerId1 = setTimeout(() => {
      onChange("", true);
    }, 50);
  }, items1);
  const items2 = [results.length];
  const memo = obj.useMemo(() => {
    const items = [results.length];
    return items;
  }, items2);
  const items3 = [disabledDestinations];
  const callback1 = obj.useCallback(() => ({ type: "section", props: { hideTitle: true } }), []);
  memo1 = obj.useMemo(() => {
    let mapped;
    if (disabledDestinations != null) {
      mapped = disabledDestinations.map(formatResults.destinationKey);
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  }, items3);
  const items4 = [selectedDestinations];
  memo2 = obj.useMemo(() => {
    let mapped;
    if (first != null) {
      mapped = first.map(formatResults.destinationKey);
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  }, items4);
  const items5 = [disableSelection];
  callback2 = obj.useCallback((arg0) => {
    closure_0 = arg0;
    closure_9((arr) => {
      const findIndexResult = arr.findIndex((id) => id.id === id.id);
      if (-1 === findIndexResult) {
        if (disableSelection) {
          return arr;
        } else {
          const items = [id];
          HermesBuiltin.arraySpread(arr, 1);
          let items1 = items;
        }
      } else {
        items1 = [];
        HermesBuiltin.arraySpread(arr, 0);
        items1.splice(findIndexResult, 1);
      }
      return items1;
    });
  }, items5);
  const items6 = [callback2];
  callback3 = obj.useCallback((id) => callback2({ type: "user", id: id.id }), items6);
  const items7 = [callback2];
  callback4 = obj.useCallback((id) => callback2({ type: "channel", id: id.id }), items7);
  const items8 = [results, getRowIsUnavailable, memo2, memo1, disableSelection, disableLongPress, NONE, callback3, callback4];
  const callback5 = obj.useCallback((arg0, arg1) => {
    ({ type, record } = results[arg1]);
    if (type !== sortByMatchScore.AutocompleterResultTypes.HEADER) {
      const tmp2Result = formatResults;
      const destinationKeyResult = tmp2Result.destinationKey(formatResults.getDestinationIdFromResult(tmp));
      let tmp6;
      if (getRowIsUnavailable != null) {
        tmp6 = getRowIsUnavailable(record);
      }
      const hasItem = memo2.includes(destinationKeyResult);
      let tmp11 = disableSelection;
      const hasItem1 = memo1.includes(destinationKeyResult);
      if (disableSelection) {
        tmp11 = !hasItem;
      }
      if (!tmp11) {
        tmp11 = hasItem1;
      }
      if (!tmp11) {
        tmp11 = null != tmp6;
      }
      const obj = { disabled: tmp11, selected: hasItem, mode: null, subLabel: null, subLabelLineClamp: null, start: null, end: null };
      if (null != tmp6) {
        NONE = UserRowModes.NONE;
      }
      obj.mode = NONE;
      let label;
      if (tmp6 != null) {
        label = tmp6.label;
      }
      obj.subLabel = label;
      let tmp14;
      if (null != tmp6) {
        let num = tmp6.lineClamp;
        if (num == null) {
          num = 1;
        }
        tmp14 = num;
      }
      obj.subLabelLineClamp = tmp14;
      obj.start = 0 === arg1;
      obj.end = arg1 === results.length - 1;
      let tmp16;
      if (disableLongPress) {
        const obj2 = { onLongPress: NOOP };
        tmp16 = obj2;
      }
      const merged = Object.assign(tmp16);
      if (sortByMatchScore.AutocompleterResultTypes.USER === type) {
        const element = { type: "user", props: null };
        const obj3 = {};
        const merged1 = Object.assign(obj);
        obj3.user = record;
        obj3.type = UserSearchUtils.getRelationshipType(record.id);
        obj3.onPress = callback3;
        element.props = obj3;
        return element;
      } else if (sortByMatchScore.AutocompleterResultTypes.GROUP_DM === type) {
        const element1 = { type: "gdm", props: null };
        const obj4 = {};
        const merged2 = Object.assign(obj);
        obj4.channel = record;
        obj4.onPress = callback4;
        element1.props = obj4;
        return element1;
      } else {
        if (sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
          if (sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
            return GlobalUtils.assertNever(type);
          }
        }
        const element2 = { type: "channel", props: null };
        const obj5 = {};
        const merged3 = Object.assign(obj);
        obj5.channel = record;
        obj5.onPress = callback4;
        element2.props = obj5;
        return element2;
      }
      const tmp2Result4 = formatResults;
    }
  }, items8);
  ref1 = obj.useRef(null);
  const tmp27 = getRowIsUnavailable(onSelectedDestinationChange[14])();
  closure_22 = tmp27;
  const tmp13 = onSearchTextChange(NONE.useState(false), 2);
  scaledTextLineHeight = disabledDestinations(onSelectedDestinationChange[15]).useScaledTextLineHeight("text-xs/medium");
  const items9 = [results, getRowIsUnavailable, tmp27, scaledTextLineHeight];
  const callback6 = obj.useCallback((arg0, arg1) => {
    ({ type, record } = results[arg1]);
    let tmp2;
    if (type !== sortByMatchScore.AutocompleterResultTypes.HEADER) {
      let lineClamp;
      if (getRowIsUnavailable != null) {
        const tmp5 = getRowIsUnavailable(record);
        if (tmp5 != null) {
          lineClamp = tmp5.lineClamp;
        }
      }
      tmp2 = lineClamp;
    }
    if (null != tmp2) {
      if (tmp2 > 1) {
        let tmp6 = roundToNearestPixelDefault(closure_22 + (tmp2 - 1) * scaledTextLineHeight);
      }
      return tmp6;
    }
    tmp6 = closure_22;
  }, items9);
  const someResult = memo.some((item) => item > 0);
  if (someResult) {
    let obj3 = { ref: ref1, sections: memo, getItemProps: callback5, getSectionProps: callback1, getItemSize: null, insetStart: null, insetEnd: null, disableStickySections: null };
    let tmp36;
    if (null != getRowIsUnavailable) {
      tmp36 = callback6;
    }
    obj3.getItemSize = tmp36;
    obj3.insetStart = PX_8;
    obj3.insetEnd = PX_12;
    obj3.disableStickySections = getRowIsUnavailable.disableStickySections;
    let tmp31Result = tmp31(tmp10(tmp11[17]).UsersFastList, obj3);
    let tmp35 = tmp31;
  } else {
    if (!tmp14) {
      if (null != defaultNoResultsFound) {
        let obj5 = { style: null, children: null };
        const items10 = [tmp6.noResults];
        obj5.style = items10;
        obj5.children = defaultNoResultsFound;
      }
      tmp31Result = tmp31(tmp32, obj5);
      tmp35 = tmp31;
    }
    const obj6 = { style: tmp6.noResults, children: null };
    const obj7 = { title: null };
    const intl = tmp10(tmp11[19]).intl;
    obj7.title = intl.string(tmp10(tmp11[19]).t.V6nAfF);
    obj6.children = tmp31(tmp26(tmp11[18]), obj7);
    obj5 = obj6;
    const tmp26Result = tmp26(tmp11[18]);
  }
  let tmp35Result = !disableGradient;
  if (!disableGradient) {
    tmp35Result = tmp35(tmp26(tmp11[20]), { absolute: true });
  }
  const items11 = [tmp35Result, , ];
  if (flag2) {
    if (!someResult) {
      let tmp35Result2 = null;
    }
    const obj8 = { children: null };
    items11[1] = tmp35Result2;
    items11[2] = tmp31Result;
    obj8.children = items11;
    return updateSearchText(results, obj8);
  }
  const obj9 = { style: tmp6.searchBarContainer, children: null };
  const obj10 = { ref, size: "md", onChange, autoFocus: null, accessibilityLabel: null };
  if (flag) {
    flag = someResult;
  }
  obj10.autoFocus = flag;
  const intl2 = tmp10(tmp11[19]).intl;
  obj10.accessibilityLabel = intl2.string(disabledDestinations(onSelectedDestinationChange[19]).t.CaEER6);
  obj9.children = tmp35(disabledDestinations(onSelectedDestinationChange[21]).SearchField, obj10);
  tmp35Result2 = tmp35(disableSelection, obj9);
};