import _slicedToArray from "_slicedToArray";
import getSystemLocale from "getSystemLocale";
import get_ActivityIndicator from "Placeholder";
import { NOOP } from "ME";
import { UserRowModes } from "UserRowModes";
import jsxProd from "SearchField";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let closure_6;
let unpackModuleId;
const require = arg1;
({ View: c5, Keyboard: closure_6 } = get_ActivityIndicator);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { searchBarContainer: null, noResults: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_8, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/share/native/SearchableDestinationList.tsx");

export default function SearchableDestinationList(getRowIsUnavailable) {
  let c13;
  let channelFilter;
  let defaultNoResultsFound;
  let disableGradient;
  let disableSelection;
  let disabledDestinations;
  let initialSelectedDestinations;
  let originDestination;
  let tmp14;
  ({ initialSelectedDestinations, disabledDestinations } = getRowIsUnavailable);
  getRowIsUnavailable = getRowIsUnavailable.getRowIsUnavailable;
  const onSelectedDestinationChange = getRowIsUnavailable.onSelectedDestinationChange;
  const onSearchTextChange = getRowIsUnavailable.onSearchTextChange;
  let NONE = getRowIsUnavailable.rowMode;
  ({ originDestination, channelFilter } = getRowIsUnavailable);
  if (NONE === undefined) {
    NONE = first.NONE;
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
  let ref;
  first = undefined;
  let closure_9;
  let results;
  let updateSearchText;
  let createCacheKey;
  c13 = undefined;
  let closure_14;
  let callback;
  let memo1;
  let memo2;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let ref1;
  let c23;
  let scaledTextLineHeight;
  let tmp6 = createCacheKey();
  let obj = NONE;
  ref = NONE.useRef(null);
  if (initialSelectedDestinations == null) {
    initialSelectedDestinations = [];
  }
  const tmp8 = onSearchTextChange(NONE.useState(initialSelectedDestinations), 2);
  first = tmp8[0];
  closure_9 = tmp8[1];
  let obj1 = disabledDestinations(onSelectedDestinationChange[8]);
  const shareSearchResults = obj1.useShareSearchResults({ selectedDestinations: first, originDestination, channelFilter, includeMissingDMs: true });
  results = shareSearchResults.results;
  updateSearchText = shareSearchResults.updateSearchText;
  createCacheKey = obj.useRef("");
  [tmp14, c13] = onSearchTextChange(obj.useState(false), 2);
  closure_14 = obj.useRef(null);
  const effect = obj.useEffect(() => () => {
    const current = ref.current;
    if (current != null) {
      current.cancel();
    }
  }, []);
  let items = [onSearchTextChange, updateSearchText];
  callback = obj.useCallback((current) => {
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
      closure_14.current = disabledDestinations(onSelectedDestinationChange[9]).runAfterInteractions(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToTop(false);
        }
      });
      const obj = disabledDestinations(onSelectedDestinationChange[9]);
    }
  }, items);
  let items1 = [first, onSelectedDestinationChange, callback];
  const effect1 = obj.useEffect(() => {
    onSelectedDestinationChange(first);
    const timerId = setTimeout(() => {
      closure_6.dismiss();
    }, 0);
    const timerId1 = setTimeout(() => {
      callback("", true);
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
      mapped = disabledDestinations.map(disabledDestinations(onSelectedDestinationChange[10]).destinationKey);
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  }, items3);
  const items4 = [first];
  memo2 = obj.useMemo(() => {
    let mapped;
    if (first != null) {
      mapped = first.map(disabledDestinations(onSelectedDestinationChange[10]).destinationKey);
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  }, items4);
  const items5 = [disableSelection];
  callback2 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    callback((arr) => {
      const findIndexResult = arr.findIndex((id) => id.id === id.id);
      if (-1 === findIndexResult) {
        if (outer1_5) {
          return arr;
        } else {
          const items = [closure_0];
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
  callback5 = obj.useCallback((arg0, arg1) => {
    let record;
    let type;
    ({ type, record } = results[arg1]);
    const diff = results.length - 1;
    if (type !== disabledDestinations(onSelectedDestinationChange[11]).AutocompleterResultTypes.HEADER) {
      if (type === tmp2(tmp3[11]).AutocompleterResultTypes.USER) {
        let tmp2Result = tmp2(tmp3[10]);
        let obj = { type: "user", id: null };
        obj[1] = record.id;
        let destinationKeyResult = tmp2Result.destinationKey(obj);
      } else {
        tmp2Result = tmp2(tmp3[10]);
        obj = { type: "channel", id: null };
        obj[1] = record.id;
        destinationKeyResult = tmp2Result.destinationKey(obj);
      }
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
      const obj1 = { disabled: null, selected: null, mode: null, subLabel: null, subLabelLineClamp: null, start: null, end: null };
      obj1[0] = tmp11;
      obj1[1] = hasItem;
      if (null != tmp6) {
        const NONE = first.NONE;
      }
      obj1[2] = NONE;
      let label;
      if (null != tmp6) {
        label = tmp6.label;
      }
      obj1[3] = label;
      let tmp14;
      if (null != tmp6) {
        let num = tmp6.lineClamp;
        if (num == null) {
          num = 1;
        }
        tmp14 = num;
      }
      obj1[4] = tmp14;
      obj1[5] = 0 === arg1;
      obj1[6] = arg1 === diff;
      if (tmp2(tmp3[11]).AutocompleterResultTypes.USER === type) {
        const obj2 = {};
        const merged = Object.assign(obj1);
        obj2.user = record;
        obj2.type = tmp2(tmp3[12]).getRelationshipType(record.id);
        obj2.onPress = callback3;
        let tmp40;
        if (disableLongPress) {
          const obj3 = { onLongPress: null };
          obj3[0] = ref;
          tmp40 = obj3;
        }
        const obj4 = { type: "user", props: null };
        const merged1 = Object.assign(tmp40);
        obj4[1] = obj2;
        return obj4;
      } else if (tmp2(tmp3[11]).AutocompleterResultTypes.GROUP_DM === type) {
        const obj5 = {};
        const merged2 = Object.assign(obj1);
        obj5.channel = record;
        obj5.onPress = callback4;
        let tmp30;
        if (disableLongPress) {
          const obj6 = { onLongPress: null };
          obj6[0] = ref;
          tmp30 = obj6;
        }
        const obj7 = { type: "gdm", props: null };
        const merged3 = Object.assign(tmp30);
        obj7[1] = obj5;
        return obj7;
      } else {
        if (tmp2(tmp3[11]).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
          if (tmp2(tmp3[11]).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
            return tmp2(tmp3[13]).assertNever(type);
          }
        }
        const obj8 = {};
        const merged4 = Object.assign(obj1);
        obj8.channel = record;
        obj8.onPress = callback4;
        let tmp20;
        if (disableLongPress) {
          const obj9 = { onLongPress: null };
          obj9[0] = ref;
          tmp20 = obj9;
        }
        const obj10 = { type: "channel", props: null };
        const merged5 = Object.assign(tmp20);
        obj10[1] = obj8;
        return obj10;
      }
    }
  }, items8);
  ref1 = obj.useRef(null);
  const tmp27 = getRowIsUnavailable(onSelectedDestinationChange[14])();
  c23 = tmp27;
  let obj3 = disabledDestinations(onSelectedDestinationChange[15]);
  scaledTextLineHeight = obj3.useScaledTextLineHeight("text-xs/medium");
  const items9 = [callback5, tmp27, scaledTextLineHeight];
  const callback6 = obj.useCallback((arg0, arg1) => {
    const element = callback5(arg0, arg1);
    let type;
    if (element != null) {
      type = element.type;
    }
    if ("user" !== type) {
      let type1;
      if (element != null) {
        type1 = element.type;
      }
      if ("gdm" !== type1) {
        let type2;
        if (element != null) {
          type2 = element.type;
        }
      }
      if (null != subLabelLineClamp) {
        if (subLabelLineClamp > 1) {
          let tmp4 = getRowIsUnavailable(onSelectedDestinationChange[16])(c23 + (subLabelLineClamp - 1) * scaledTextLineHeight);
        }
        return tmp4;
      }
      tmp4 = c23;
    }
    subLabelLineClamp = element.props.subLabelLineClamp;
  }, items9);
  const someResult = memo.some((arg0) => arg0 > 0);
  if (someResult) {
    obj = { ref: null, sections: null, getItemProps: null, getSectionProps: null, getItemSize: null, insetStart: null, insetEnd: null, disableStickySections: null };
    obj[0] = ref1;
    obj[1] = memo;
    obj[2] = callback5;
    obj[3] = callback1;
    let tmp36;
    if (null != getRowIsUnavailable) {
      tmp36 = callback6;
    }
    obj[4] = tmp36;
    obj[5] = PX_8;
    obj[6] = PX_12;
    obj[7] = getRowIsUnavailable.disableStickySections;
    let tmp31Result = tmp31(tmp10(tmp11[17]).UsersFastList, obj);
    let tmp35 = tmp31;
  } else {
    if (!tmp14) {
      if (null != defaultNoResultsFound) {
        obj = { style: null, children: null };
        const items10 = [tmp6.noResults];
        obj[0] = items10;
        obj[1] = defaultNoResultsFound;
      }
      tmp31Result = tmp31(tmp32, obj);
      tmp35 = tmp31;
    }
    obj1 = { style: null, children: null };
    obj1[0] = tmp6.noResults;
    let obj2 = { title: null };
    const intl = tmp10(tmp11[19]).intl;
    obj2[0] = intl.string(tmp10(tmp11[19]).t.V6nAfF);
    obj1[1] = tmp31(tmp26(tmp11[18]), obj2);
    obj = obj1;
    const tmp26Result = tmp26(tmp11[18]);
  }
  let tmp35Result = !disableGradient;
  if (!disableGradient) {
    tmp35Result = tmp35(tmp26(tmp11[20]), { absolute: true });
  }
  const items11 = [tmp35Result, , ];
  if (flag2) {
    if (!someResult) {
      tmp35Result = null;
    }
    obj3 = { children: null };
    items11[1] = tmp35Result;
    items11[2] = tmp31Result;
    obj3[0] = items11;
    return updateSearchText(results, obj3);
  }
  let obj4 = { style: tmp6.searchBarContainer, children: null };
  let obj5 = { ref, size: "md", onChange: callback, autoFocus: null, accessibilityLabel: null };
  if (flag) {
    flag = someResult;
  }
  obj5[3] = flag;
  const intl2 = tmp10(tmp11[19]).intl;
  obj5[4] = intl2.string(disabledDestinations(onSelectedDestinationChange[19]).t.CaEER6);
  obj4[1] = tmp35(disabledDestinations(onSelectedDestinationChange[21]).SearchField, obj5);
  tmp35Result = tmp35(disableSelection, obj4);
};