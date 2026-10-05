// discord_app/modules/share/native/SearchableDestinationList.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import RunAfterInteractionsUtils from "../../../utils/native/RunAfterInteractionsUtils.tsx";
import UserSearchUtils from "../../main_tabs_v2/UserSearchUtils.tsx";
import _mod9496 from "../../autocompleter/index.tsx";
import UserRowConstants from "../../main_tabs_v2/native/shared_components/user_list/UserRowConstants.tsx";
import formatResults from "../formatResults.tsx";
import roundToNearestPixelDefault from "../../voice_panel/native/utils/roundToNearestPixel.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let ref;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
({ View: hasOwnProperty, Keyboard: metroRequire } = react_native);
const NOOP = Constants.NOOP;
let UserRowModes = UserRowConstants.UserRowModes;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { searchBarContainer: obj2, noResults: obj3 };
obj2 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_12 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onSelectedDestinationChange) => {
      let autoFocusSearch;
      let channelFilter;
      let closure_8;
      let defaultNoResultsFound;
      let disableGradient;
      let disableSelection;
      let disableStickySections;
      let disabledDestinations;
      let getRowIsUnavailable;
      let hideSearchOnDefaultNoResults;
      let initialSelectedDestinations;
      let insetEnd;
      let insetStart;
      let onPress;
      let onPress2;
      let onSearchTextChange;
      let originDestination;
      let rowMode;
      let tmp9;
      let tmp2 = onSearchTextChange;
      let obj = getRowIsUnavailable(onSearchTextChange[9]);
      const cResult = obj.c(71);
      ({ initialSelectedDestinations, disabledDestinations, originDestination, channelFilter, getRowIsUnavailable } =
        onSelectedDestinationChange);
      onSelectedDestinationChange = onSelectedDestinationChange.onSelectedDestinationChange;
      onSearchTextChange = onSelectedDestinationChange.onSearchTextChange;
      ({
        rowMode,
        insetStart,
        insetEnd,
        autoFocusSearch,
        hideSearchOnDefaultNoResults,
        defaultNoResultsFound,
        disableGradient,
        disableStickySections,
        disableSelection,
      } = onSelectedDestinationChange);
      const disableLongPress = onSelectedDestinationChange.disableLongPress;
      if (undefined === rowMode) {
        rowMode = UserRowModes.NONE;
      }
      if (undefined === insetStart) {
        let tmp5 = onSelectedDestinationChange;
        insetStart = onSelectedDestinationChange(tmp2[7]).space.PX_8;
      }
      if (undefined === insetEnd) {
        let tmp6 = onSelectedDestinationChange;
        insetEnd = onSelectedDestinationChange(tmp2[7]).space.PX_12;
      }
      let tmp7 = closure_12();
      let obj2 = disableLongPress;
      ref = disableLongPress.useRef(null);
      if (cResult[0] !== initialSelectedDestinations) {
        let items = initialSelectedDestinations;
        if (initialSelectedDestinations == null) {
          items = [];
        }
        let num = 0;
        cResult[0] = initialSelectedDestinations;
        cResult[1] = items;
        tmp9 = items;
      } else {
        tmp9 = cResult[1];
      }
      const tmp11 = disableSelection(obj2.useState(tmp9), 2);
      const selectedDestinations = tmp11[0];
      UserRowModes = tmp11[1];
      if (cResult[2] === channelFilter) {
        if (cResult[3] === originDestination) {
          let tmp13;
          let tmp18;
          if (cResult[4] === selectedDestinations) {
            tmp13 = cResult[5];
          }
          const tmpResult = getRowIsUnavailable(tmp2[10]);
          const shareSearchResults = tmpResult.useShareSearchResults(tmp13);
          const results = shareSearchResults.results;
          const updateSearchText = shareSearchResults.updateSearchText;
          obj2.useRef("");
          [r10076, closure_12] = disableSelection(obj2.useState(false), 2);
          disableSelection(obj2.useState(false), 2);
          let closure_13 = obj2.useRef(null);
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            class Q {
              constructor() {
                return () => {
                  const current = ref.current;
                  if (current != null) {
                    current.cancel();
                  }
                };
              }
            }
            let items1 = [];
            cResult[6] = Q;
            cResult[7] = items1;
            tmp18 = items1;
          } else {
            class Q {
              constructor() {
                return () => {
                  const current = ref.current;
                  if (current != null) {
                    current.cancel();
                  }
                };
              }
            }
            tmp18 = cResult[7];
          }
          const effect = obj2.useEffect(Q, tmp18);
          if (cResult[8] === onSearchTextChange) {
            class Q {
              constructor() {
                return () => {
                  const current = ref.current;
                  if (current != null) {
                    current.cancel();
                  }
                };
              }
            }
            let closure_14 = Y;
            if (cResult[11] === Y) {
              class Q {
                constructor() {
                  return () => {
                    const current = ref.current;
                    if (current != null) {
                      current.cancel();
                    }
                  };
                }
              }
            }
            function ae() {
              onSelectedDestinationChange(first);
              const timerId = setTimeout(() => {
                ref.dismiss();
              }, 0);
              const timerId1 = setTimeout(() => {
                closure_1_14("", true);
              }, 50);
            }
            const items2 = [selectedDestinations, onSelectedDestinationChange, Y];
            cResult[11] = Y;
            cResult[12] = onSelectedDestinationChange;
            cResult[13] = selectedDestinations;
            cResult[14] = ae;
            cResult[15] = items2;
          }
          class Y {
            constructor(current, arg1) {
              const tmp = undefined !== arg1 && arg1;
              if (current !== ref.current) {
                ref.current = current;
                if (tmp) {
                  current = ref.current;
                  if (current != null) {
                    current.setText(current);
                  }
                }
                updateSearchText(current);
                if (onSearchTextChange != null) {
                  onSearchTextChange(current);
                }
                closure_12(current.trim().length > 0);
                const obj = RunAfterInteractionsUtils;
                closure_13.current = obj.runAfterInteractions(() => {
                  const current = ref.current;
                  if (current != null) {
                    current.scrollToTop(false);
                  }
                });
              }
            }
          }
          cResult[8] = onSearchTextChange;
          cResult[9] = updateSearchText;
          cResult[10] = Y;
        }
      }
      let obj3 = { selectedDestinations, originDestination, channelFilter, includeMissingDMs: true };
      cResult[2] = channelFilter;
      cResult[3] = originDestination;
      cResult[4] = selectedDestinations;
      cResult[5] = obj3;
      tmp13 = obj3;
    }
  : (getRowIsUnavailable) => {
      let SearchField;
      let _undefined;
      let c13;
      let channelFilter;
      let defaultNoResultsFound;
      let disableGradient;
      let disableSelection;
      let disabledDestinations;
      let initialSelectedDestinations;
      let intl;
      let intl2;
      let items10;
      let obj10;
      let obj7;
      let originDestination;
      let selectedDestinations;
      let tmp14;
      let tmp26Result;
      let tmp31Result;
      let tmp35;
      let tmp36;
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
        let tmp2 = getRowIsUnavailable;
        PX_8 = getRowIsUnavailable(onSelectedDestinationChange[7]).space.PX_8;
      }
      let PX_12 = getRowIsUnavailable.insetEnd;
      if (PX_12 === undefined) {
        let tmp5 = onSelectedDestinationChange;
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
      let closure_9;
      let results;
      let updateSearchText;
      ref = undefined;
      c13 = undefined;
      let closure_14;
      let onChange;
      let memo1;
      let memo2;
      let callback2;
      let callback3;
      let callback4;
      let ref1;
      let closure_22;
      let scaledTextLineHeight;
      const disableStickySections = getRowIsUnavailable.disableStickySections;
      let tmp6 = ref();
      let obj = NONE;
      ref = NONE.useRef(null);
      const useState = NONE.useState;
      if (initialSelectedDestinations == null) {
        initialSelectedDestinations = [];
      }
      const tmp8 = onSearchTextChange(useState(initialSelectedDestinations), 2);
      selectedDestinations = tmp8[0];
      closure_9 = tmp8[1];
      let obj2 = disabledDestinations(onSelectedDestinationChange[10]);
      const shareSearchResults = obj2.useShareSearchResults({
        selectedDestinations,
        originDestination,
        channelFilter,
        includeMissingDMs: true,
      });
      results = shareSearchResults.results;
      updateSearchText = shareSearchResults.updateSearchText;
      ref = obj.useRef("");
      [tmp14, c13] = onSearchTextChange(obj.useState(false), 2);
      onSearchTextChange(obj.useState(false), 2);
      closure_14 = obj.useRef(null);
      const effect = obj.useEffect(
        () => () => {
          const current = ref.current;
          if (current != null) {
            current.cancel();
          }
        },
        [],
      );
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
          const obj = RunAfterInteractionsUtils;
          closure_14.current = obj.runAfterInteractions(() => {
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
        let closure_0 = arg0;
        closure_9((arr) => {
          let items1;
          const findIndexResult = arr.findIndex((id) => id.id === id.id);
          if (-1 === findIndexResult) {
            if (disableSelection) {
              return arr;
            } else {
              const items = [id];
              HermesBuiltin.arraySpread(items, arr, 1);
              items1 = items;
            }
          } else {
            items1 = [];
            HermesBuiltin.arraySpread(items1, arr, 0);
            items1.splice(findIndexResult, 1);
          }
          return items1;
        });
      }, items5);
      const items6 = [callback2];
      callback3 = obj.useCallback((id) => {
        const obj = { type: "user", id: id.id };
        return callback2(obj);
      }, items6);
      const items7 = [callback2];
      callback4 = obj.useCallback((id) => {
        const obj = { type: "channel", id: id.id };
        return callback2(obj);
      }, items7);
      const items8 = [
        results,
        getRowIsUnavailable,
        memo2,
        memo1,
        disableSelection,
        disableLongPress,
        NONE,
        callback3,
        callback4,
      ];
      const callback5 = obj.useCallback((arg0, arg1) => {
        let label;
        let obj3;
        let obj4;
        let obj5;
        let record;
        let tmp15;
        let tmp2Result5;
        let type;
        ({ type, record } = results[arg1]);
        if (type !== _mod9496.AutocompleterResultTypes.HEADER) {
          const destinationKey = formatResults.destinationKey;
          formatResults;
          const tmp2Result4 = formatResults;
          const destinationKeyResult = destinationKey(tmp2Result4.getDestinationIdFromResult(results[arg1]));
          let tmp7;
          if (getRowIsUnavailable != null) {
            tmp7 = getRowIsUnavailable(record);
          }
          const hasItem = memo2.includes(destinationKeyResult);
          let tmp12 = disableSelection;
          const hasItem1 = memo1.includes(destinationKeyResult);
          if (disableSelection) {
            tmp12 = !hasItem;
          }
          if (!tmp12) {
            tmp12 = hasItem1;
          }
          if (!tmp12) {
            tmp12 = null != tmp7;
          }
          const obj = {
            disabled: tmp12,
            selected: hasItem,
            mode: NONE,
            subLabel: label,
            subLabelLineClamp: tmp15,
            start: 0 === arg1,
            end: arg1 === results.length - 1,
          };
          if (null != tmp7) {
            NONE = UserRowModes.NONE;
          }
          label = undefined;
          if (tmp7 != null) {
            label = tmp7.label;
          }
          tmp15 = undefined;
          if (null != tmp7) {
            let num = tmp7.lineClamp;
            if (num == null) {
              num = 1;
            }
            tmp15 = num;
          }
          let tmp17;
          if (disableLongPress) {
            tmp17 = { onLongPress: NOOP };
            const obj2 = { onLongPress: NOOP };
          }
          const merged = Object.assign(tmp17);
          if (_mod9496.AutocompleterResultTypes.USER === type) {
            const element = { type: "user", props: obj3 };
            obj3 = { user: record, type: tmp2Result5.getRelationshipType(record.id), onPress: callback3 };
            const merged1 = Object.assign(obj);
            tmp2Result5 = UserSearchUtils;
            return element;
          } else if (_mod9496.AutocompleterResultTypes.GROUP_DM === type) {
            const element1 = { type: "gdm", props: obj4 };
            obj4 = { channel: record, onPress: callback4 };
            const merged2 = Object.assign(obj);
            return element1;
          } else {
            if (_mod9496.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
              if (_mod9496.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
                const tmp2Result6 = GlobalUtils;
                return tmp2Result6.assertNever(type);
              }
            }
            const element2 = { type: "channel", props: obj5 };
            obj5 = { channel: record, onPress: callback4 };
            const merged3 = Object.assign(obj);
            return element2;
          }
        }
      }, items8);
      ref1 = obj.useRef(null);
      const tmp27 = getRowIsUnavailable(onSelectedDestinationChange[16])();
      closure_22 = tmp27;
      let obj4 = disabledDestinations(onSelectedDestinationChange[17]);
      scaledTextLineHeight = obj4.useScaledTextLineHeight("text-xs/medium");
      const items9 = [results, getRowIsUnavailable, tmp27, scaledTextLineHeight];
      const callback6 = obj.useCallback((arg0, arg1) => {
        let record;
        let type;
        ({ type, record } = results[arg1]);
        let tmp2;
        if (type !== _mod9496.AutocompleterResultTypes.HEADER) {
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
          let tmp6;
          if (tmp2 > 1) {
            tmp6 = roundToNearestPixelDefault(closure_22 + (tmp2 - 1) * scaledTextLineHeight);
          }
          return tmp6;
        }
        tmp6 = closure_22;
      }, items9);
      const someResult = memo.some((item) => item > 0);
      if (someResult) {
        let obj3 = {
          ref: ref1,
          sections: memo,
          getItemProps: callback5,
          getSectionProps: callback1,
          getItemSize: tmp36,
          insetStart: PX_8,
          insetEnd: PX_12,
          disableStickySections,
        };
        tmp36 = undefined;
        const UsersFastList = tmp10(tmp11[19]).UsersFastList;
        if (null != getRowIsUnavailable) {
          tmp36 = callback6;
        }
        tmp31Result = tmp31(UsersFastList, obj3);
        tmp35 = tmp31;
      } else {
        if (!tmp14) {
          let obj5;
          if (null != defaultNoResultsFound) {
            obj5 = { style: items10, children: defaultNoResultsFound };
            items10 = [tmp6.noResults];
          }
          tmp31Result = tmp31(tmp32, obj5);
          tmp35 = tmp31;
        }
        const obj6 = { style: tmp6.noResults, children: closure_9(tmp26Result, obj7) };
        obj7 = { title: intl.string(disabledDestinations(onSelectedDestinationChange[21]).t.V6nAfF) };
        tmp26Result = getRowIsUnavailable(onSelectedDestinationChange[20]);
        intl = tmp10(tmp11[21]).intl;
        obj5 = obj6;
      }
      let tmp35Result = !disableGradient;
      const tmp37 = updateSearchText;
      const tmp38 = results;
      if (!disableGradient) {
        tmp35Result = tmp35(tmp26(tmp11[22]), { absolute: true });
      }
      const items11 = [tmp35Result, ,];
      if (flag2) {
        let tmp35Result2;
        if (!someResult) {
          tmp35Result2 = null;
        }
        const obj8 = { children: items11 };
        items11[1] = tmp35Result2;
        items11[2] = tmp31Result;
        return tmp37(tmp38, obj8);
      }
      const obj9 = { style: tmp6.searchBarContainer, children: tmp35(SearchField, obj10) };
      obj10 = {
        ref,
        size: "md",
        onChange,
        autoFocus: flag,
        accessibilityLabel: intl2.string(disabledDestinations(onSelectedDestinationChange[21]).t.CaEER6),
      };
      SearchField = tmp10(tmp11[23]).SearchField;
      const tmp41 = disableSelection;
      if (flag) {
        flag = someResult;
      }
      intl2 = tmp10(tmp11[21]).intl;
      tmp35Result2 = tmp35(tmp41, obj9);
    };
const result = size.fileFinishedImporting("modules/share/native/SearchableDestinationList.tsx");

export default tmp5;
