// discord_app/modules/forums/native/composer/horizontal_autocomplete/hooks/useHorizontalAutocompleteResults.tsx
import AutocompleteOptions from "../../../../../autocompleter/native/AutocompleteOptions.tsx";
import _slicedToArray_mod from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../../_runtime/00019_react.js";
import Constants from "../../../../../../Constants.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let type;

let closure_4;
let hasOwnProperty;
let _slicedToArray = _slicedToArray_mod;
({ AutoCompleteResultTypes: closure_4, ChannelTypes: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting(
  "modules/forums/native/composer/horizontal_autocomplete/hooks/useHorizontalAutocompleteResults.tsx",
);

export const useHorizontalAutocompleteResults = function useHorizontalAutocompleteResults(channel) {
  let closure_4;
  let closure_9;
  let first;
  let first1;
  let items6;
  channel = channel.channel;
  const selection = channel.selection;
  const text = channel.text;
  _slicedToArray = text;
  first = undefined;
  closure_4 = undefined;
  closure_9 = undefined;
  [first, closure_4] = first.useState([]);
  let items = [channel];
  const memo = first.useMemo(() => {
    const obj = AutocompleteOptions;
    return obj.getAutocompleteOptions(channel, false, false);
  }, items);
  let obj = { text, selectionStart: selection.start, selectionEnd: selection.end };
  [first1, closure_9] = first.useState(obj);
  const text2 = first1.text;
  const selectionStart = first1.selectionStart;
  const selectionEnd = first1.selectionEnd;
  const items1 = [text, selection];
  const effect = first.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const obj = { text, selectionStart: selection.start, selectionEnd: selection.end };
      closure_1_9(obj);
    }, 16);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  const items2 = [selectionStart, selectionEnd, text2, memo];
  const memo1 = first.useMemo(() => {
    let items;
    let obj3;
    let tmp14;
    let tmp15;
    let tmp = selectionStart;
    let closure_2 = selectionStart;
    if (null != text2) {
      if (0 !== text2.trim().length) {
        while (true) {
          let tmp11;
          let tmp12;
          let tmp10;
          let obj = channel(selection[4]);
          let tmp5 = tmp14;
          let found = tmp15;
          if (!obj.isAutocompleteSeparatingBoundary(text2, tmp)) {
            let diff = tmp - 1;
            closure_2 = diff;
            tmp14 = tmp5;
            tmp15 = found;
            tmp = diff;
            tmp11 = tmp5;
            tmp12 = found;
            tmp10 = diff;
            if (diff < 0) {
              break;
            }
          } else {
            let tmp7 = selectionEnd;
            let slice = text2.slice;
            if (selectionEnd == null) {
              tmp7 = tmp;
            }
            let substr = slice(tmp, tmp7);
            let closure_0 = substr[0];
            let str2 = substr.slice(1);
            let formatted = str2.toLowerCase();
            let _Object = Object;
            let keys = Object.keys(memo);
            found = keys.find((item) => {
              let matchesResult = undefined !== closure_0;
              const obj = memo[item];
              if (matchesResult) {
                matchesResult = undefined !== formatted;
              }
              if (matchesResult) {
                matchesResult = obj.matches(closure_0, formatted, closure_2);
              }
              return matchesResult;
            });
            tmp5 = formatted;
            tmp10 = tmp;
            tmp11 = formatted;
            tmp12 = found;
            if (null != found) {
              break;
            }
          }
          let obj2 = { query: tmp11, autocompleteType: tmp12, autocompleteSelectionStart: tmp10, queryOptions: obj3 };
          obj3 = { includeEmojiPremiumUpsell: false, channelTypes: items };
          items = [, , ,];
          ({ GUILD_FORUM: arr4[0], GUILD_MEDIA: arr4[1], GUILD_TEXT: arr4[2], GUILD_ANNOUNCEMENT: arr4[3] } = memo);
          return obj2;
        }
      }
    }
    return { query: null, autocompleteType: null, autocompleteSelectionStart: null };
  }, items2);
  const autocompleteType = memo1.autocompleteType;
  const query = memo1.query;
  const queryOptions = memo1.queryOptions;
  const items3 = [autocompleteType, query, queryOptions, memo];
  const autocompleteSelectionStart = memo1.autocompleteSelectionStart;
  const callback = first.useCallback((arg0) => {
    if (null != autocompleteType) {
      if (null != query) {
        const obj = memo[tmp];
        closure_4(obj.queryResults(tmp2, queryOptions, arg0));
      }
    }
    closure_4([]);
  }, items3);
  const items4 = [autocompleteType, callback, memo];
  const effect1 = first.useEffect(function () {
    let tmp2 = null;
    if (null != autocompleteType) {
      let stores;
      if (memo != null) {
        stores = memo[tmp].stores;
      }
      tmp2 = stores;
    }
    if (null != tmp2) {
      const self = this;
      const self2 = this;
      const batchedStoreListener = new channel(selection[5]).BatchedStoreListener(tmp2, () => callback(false));
      batchedStoreListener.attach("useHorizontalAutocompleteResults");
      return () => batchedStoreListener.detach();
    }
  }, items4);
  const items5 = [callback];
  const effect2 = first.useEffect(() => {
    callback(true);
  }, items5);
  let obj2 = {
    results: first.useMemo(
      () =>
        first.filter((type) => {
          type = type.type;
          return (
            type === constants.USER || type === constants.ROLE || type === constants.CHANNEL || type === constants.EMOJI
          );
        }),
      items6,
    ),
    autocompleteSelectionStart,
    query,
  };
  items6 = [first];
  return obj2;
};
