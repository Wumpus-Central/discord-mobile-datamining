// === Module 10375: useHorizontalAutocompleteResults ===

// Module 10375 (useHorizontalAutocompleteResults)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import ME from "ME" /* 676 */;

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
  const tmp4 = callback(first.useState(obj), 2);
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
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp = selectionStart;
    closure_2 = selectionStart;
    if (null != text2) {
      if (0 !== text2.trim().length) {
        while (true) {
          let tmp2 = channel;
          let tmp3 = selection;
          let WHITESPACE_RE = channel(selection[4]).WHITESPACE_RE;
          let arr = text2;
          let tmp5 = tmp;
          let tmp6 = tmp15;
          let found = tmp16;
          if (0 === tmp) {
            let tmp8 = selectionEnd;
            if (selectionEnd == null) {
              tmp8 = tmp;
            }
            let substr = arr.slice(tmp, tmp8);
            closure_0 = substr[0];
            let str2 = substr.slice(1);
            let formatted = str2.toLowerCase();
            let _Object = Object;
            let tmp10 = memo;
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
            tmp6 = formatted;
            tmp11 = tmp;
            tmp12 = formatted;
            tmp13 = found;
            if (null != found) {
              break;
            }
          }
          let diff = tmp - 1;
          closure_2 = diff;
          tmp15 = tmp6;
          tmp16 = found;
          tmp = diff;
          tmp12 = tmp6;
          tmp13 = found;
          tmp11 = diff;
          if (diff < 0) {
            break;
          }
        }
        let obj = { query: null, autocompleteType: null, autocompleteSelectionStart: null, queryOptions: null };
        obj[0] = tmp12;
        obj[1] = tmp13;
        obj[2] = tmp11;
        obj = { includeEmojiPremiumUpsell: false, channelTypes: null };
        const items = [, , , ];
        ({ GUILD_FORUM: arr4[0], GUILD_MEDIA: arr4[1], GUILD_TEXT: arr4[2], GUILD_ANNOUNCEMENT: arr4[3] } = memo);
        obj[1] = items;
        obj[3] = obj;
        return obj;
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