// === Module 10422: useHorizontalAutocompleteResults ===

// Module 10422 (useHorizontalAutocompleteResults)
import AutocompleteOptions from "AutocompleteOptions" /* 10423 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1074);
({ AutoCompleteResultTypes: closure_4, ChannelTypes: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/hooks/useHorizontalAutocompleteResults.tsx");

export const useHorizontalAutocompleteResults = function useHorizontalAutocompleteResults(channel) {
  channel = channel.channel;
  const selection = channel.selection;
  const text = channel.text;
  _slicedToArray = text;
  let first;
  let tmp = _slicedToArray(first.useState([]), 2);
  first = tmp[0];
  closure_4 = tmp[1];
  let items = [channel];
  const memo = first.useMemo(() => AutocompleteOptions.getAutocompleteOptions(channel, false, false), items);
  let obj = { text, selectionStart: selection.start, selectionEnd: selection.end };
  let tmp4 = _slicedToArray(first.useState(obj), 2);
  const first1 = tmp4[0];
  const text2 = first1.text;
  const selectionStart = first1.selectionStart;
  const selectionEnd = first1.selectionEnd;
  closure_9 = tmp4[1];
  const items1 = [text, selection];
  const effect = first.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_9({ text, selectionStart: selection.start, selectionEnd: selection.end });
    }, 16);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  const items2 = [selectionStart, selectionEnd, text2, memo];
  const memo1 = first.useMemo(() => {
    let tmp = selectionStart;
    closure_2 = selectionStart;
    if (null != text2) {
      if (0 !== text2.trim().length) {
        while (true) {
          let obj = channel(selection[4]);
          let tmp5 = tmp14;
          let found = tmp15;
          if (!obj.isAutocompleteSeparatingBoundary(text2, tmp)) {
            let diff = tmp - 1;
            closure_2 = diff;
            tmp14 = tmp5;
            tmp15 = found;
            tmp = diff;
            let tmp11 = tmp5;
            let tmp12 = found;
            let tmp10 = diff;
            if (diff < 0) {
              break;
            }
          } else {
            let tmp7 = selectionEnd;
            if (selectionEnd == null) {
              tmp7 = tmp;
            }
            let substr = text2.slice(tmp, tmp7);
            closure_0 = substr[0];
            let str2 = substr.slice(1);
            let formatted = str2.toLowerCase();
            let _Object = Object;
            let keys = Object.keys(memo);
            found = keys.find((item) => {
              let matchesResult = undefined !== closure_0;
              if (matchesResult) {
                matchesResult = undefined !== formatted;
              }
              if (matchesResult) {
                matchesResult = obj.matches(closure_0, formatted, diff);
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
          obj = { query: tmp11, autocompleteType: tmp12, autocompleteSelectionStart: tmp10, queryOptions: null };
          obj = { includeEmojiPremiumUpsell: false, channelTypes: null };
          let items = [, , , ];
          ({ GUILD_FORUM: arr4[0], GUILD_MEDIA: arr4[1], GUILD_TEXT: arr4[2], GUILD_ANNOUNCEMENT: arr4[3] } = memo);
          obj.channelTypes = items;
          obj.queryOptions = obj;
          return obj;
        }
      }
    }
    return { query: null, autocompleteType: null, autocompleteSelectionStart: null };
  }, items2);
  const autocompleteType = memo1.autocompleteType;
  const query = memo1.query;
  const queryOptions = memo1.queryOptions;
  const items3 = [autocompleteType, query, queryOptions, memo];
  const callback = first.useCallback((arg0) => {
    if (null != autocompleteType) {
      if (null != query) {
        closure_4(memo[tmp].queryResults(tmp2, queryOptions, arg0));
      }
    }
    closure_4([]);
  }, items3);
  const items4 = [autocompleteType, callback, memo];
  const effect1 = first.useEffect(() => {
    let tmp2 = null;
    if (null != autocompleteType) {
      let stores;
      if (memo != null) {
        stores = memo[tmp].stores;
      }
      tmp2 = stores;
    }
    if (null != tmp2) {
      const batchedStoreListener = new channel(selection[5]).BatchedStoreListener(tmp2, () => callback(false));
      batchedStoreListener.attach("useHorizontalAutocompleteResults");
      return () => batchedStoreListener.detach();
    }
  }, items4);
  const items5 = [callback];
  const effect2 = first.useEffect(() => {
    callback(true);
  }, items5);
  obj = { results: null, autocompleteSelectionStart: memo1.autocompleteSelectionStart, query };
  const items6 = [first];
  obj.results = first.useMemo(() => first.filter((type) => {
    type = type.type;
    return type === constants.USER || type === constants.ROLE || type === constants.CHANNEL || type === constants.EMOJI;
  }), items6);
  return obj;
};