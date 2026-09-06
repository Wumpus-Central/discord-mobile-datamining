// === Module 10422: useHorizontalAutocompleteResults ===

// Module 10422 (useHorizontalAutocompleteResults)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import ME from "ME" /* 1074 */;

const require = arg1;
({ AutoCompleteResultTypes: c4, ChannelTypes: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/hooks/useHorizontalAutocompleteResults.tsx");

export const useHorizontalAutocompleteResults = function useHorizontalAutocompleteResults(channel) {
  channel = channel.channel;
  const selection = channel.selection;
  const text = channel.text;
  let callback = text;
  let first;
  closure_4 = undefined;
  let memo;
  let text2;
  let selectionStart;
  let selectionEnd;
  closure_9 = undefined;
  let autocompleteType;
  let query;
  let queryOptions;
  callback = undefined;
  let tmp = callback(first.useState([]), 2);
  first = tmp[0];
  closure_4 = tmp[1];
  let items = [channel];
  memo = first.useMemo(() => channel(selection[3]).getAutocompleteOptions(channel, false, false), items);
  let obj = { text, selectionStart: selection.start, selectionEnd: selection.end };
  let tmp4 = callback(first.useState(obj), 2);
  const first1 = tmp4[0];
  text2 = first1.text;
  selectionStart = first1.selectionStart;
  selectionEnd = first1.selectionEnd;
  closure_9 = tmp4[1];
  const items1 = [text, selection];
  const effect = first.useEffect(() => {
    const timeout = setTimeout(() => {
      callback({ text: closure_2, selectionStart: closure_1.start, selectionEnd: closure_1.end });
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
          let tmp2 = channel;
          let tmp3 = selection;
          let obj = channel(selection[4]);
          let arr = text2;
          let tmp4 = tmp;
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
            let substr = arr.slice(tmp, tmp7);
            closure_0 = substr[0];
            let str2 = substr.slice(1);
            let formatted = str2.toLowerCase();
            let _Object = Object;
            let tmp9 = memo;
            let keys = Object.keys(memo);
            found = keys.find((arg0) => {
              let matchesResult = undefined !== closure_0;
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
          obj = { query: null, autocompleteType: null, autocompleteSelectionStart: null, queryOptions: null };
          obj[0] = tmp11;
          obj[1] = tmp12;
          obj[2] = tmp10;
          obj = { includeEmojiPremiumUpsell: false, channelTypes: null };
          let tmp16 = memo;
          let items = [, , , ];
          ({ GUILD_FORUM: arr4[0], GUILD_MEDIA: arr4[1], GUILD_TEXT: arr4[2], GUILD_ANNOUNCEMENT: arr4[3] } = memo);
          obj[1] = items;
          obj[3] = obj;
          return obj;
        }
      }
    }
    return { query: null, autocompleteType: null, autocompleteSelectionStart: null };
  }, items2);
  autocompleteType = memo1.autocompleteType;
  query = memo1.query;
  queryOptions = memo1.queryOptions;
  const items3 = [autocompleteType, query, queryOptions, memo];
  callback = first.useCallback((arg0) => {
    if (null != autocompleteType) {
      if (null != query) {
        callback(memo[tmp].queryResults(tmp2, queryOptions, arg0));
        const obj = memo[tmp];
      }
    }
    callback([]);
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
  obj = {
    results: first.useMemo(() => first.filter((type) => {
      type = type.type;
      return type === constants.USER || type === constants.ROLE || type === constants.CHANNEL || type === constants.EMOJI;
    }), items6),
    autocompleteSelectionStart: memo1.autocompleteSelectionStart,
    query
  };
  items6 = [first];
  return obj;
};