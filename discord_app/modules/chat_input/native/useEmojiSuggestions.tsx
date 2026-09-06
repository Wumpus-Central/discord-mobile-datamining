// === Module 12427: useEmojiSuggestions ===

// Module 12427 (useEmojiSuggestions)
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5442 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5459 */;

const require = fn;
function findWordSpan(text, selectionStart, selectionEnd) {
  if (selectionStart !== selectionEnd) {
    let obj = { query: text.slice(selectionStart, selectionEnd), queryStart: selectionStart, queryEnd: selectionEnd };
    return obj;
  } else {
    const substr = text.slice(0, selectionStart);
    const substr1 = text.slice(selectionStart);
    const match = /\S+$/.exec(substr);
    const match1 = /^\S+/.exec(substr1);
    if (null == match) {
      if (null == match1) {
        const match2 = re9.exec(substr);
        let tmp3 = null;
        if (null != match2) {
          obj = { query: match2[1], queryStart: match2.index, queryEnd: selectionStart };
          tmp3 = obj;
        }
        return tmp3;
      }
    }
    let str;
    if (match != null) {
      str = match[0];
    }
    if (str == null) {
      str = "";
    }
    let str2;
    if (match1 != null) {
      str2 = match1[0];
    }
    if (str2 == null) {
      str2 = "";
    }
    obj = { query: str + str2, queryStart: selectionStart - str.length, queryEnd: selectionStart + str2.length };
    return obj;
  }
}
const LoadState = fn(5459).LoadState;
const EMOJI_SENTINEL = fn(5000).EMOJI_SENTINEL;
const EmojiIntention = fn(1374).EmojiIntention;
const re9 = /(\S+)\s$/;
let closure_10 = { unlockedEmojis: [], lockedEmojis: [], queryStart: 0, queryEnd: 0 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/useEmojiSuggestions.tsx");

export default function useEmojiSuggestions(channel) {
  channel = channel.channel;
  const text = channel.text;
  importDefault = text;
  const selectionStart = channel.selectionStart;
  const selectionEnd = channel.selectionEnd;
  const enabled = channel.enabled;
  const maxCount = channel.maxCount;
  let obj = channel(selectionStart[5]);
  const items = [maxCount];
  const stateFromStores = obj.useStateFromStores(items, () => maxCount.loadState);
  const items1 = [channel, stateFromStores, enabled, maxCount, selectionEnd, selectionStart, text];
  const memo = enabled.useMemo(() => {
    if (enabled) {
      if (stateFromStores === LoadState.Loaded) {
        const tmp10 = findWordSpan(text, selectionStart, selectionEnd);
        let tmp3 = null;
        if (null != tmp10) {
          tmp3 = null;
          if (tmp10.query.length >= 3) {
            const query = tmp10.query;
            tmp3 = null;
            if (!query.startsWith(EMOJI_SENTINEL)) {
              tmp3 = tmp10;
            }
          }
        }
        if (null == tmp3) {
          return closure_10;
        } else {
          let obj = { query: tmp3.query, channel, intention: EmojiIntention.CHAT, maxCount };
          const emojis = AutocompleteUtilsDefault.queryEmojiResults(obj).emojis;
          if (0 === emojis.unlocked.length) {
            if (0 === emojis.locked.length) {
              obj = closure_10;
            }
            return obj;
          }
          obj = { unlockedEmojis: null, lockedEmojis: null, queryStart: null, queryEnd: null };
          ({ unlocked: obj.unlockedEmojis, locked: obj.lockedEmojis } = emojis);
          ({ queryStart: obj.queryStart, queryEnd: obj.queryEnd } = tmp3);
        }
      }
    }
    return closure_10;
  }, items1);
  let tmp3 = closure_10;
  [tmp5, tmp6] = selectionEnd(enabled.useState(closure_10), 2);
  c7 = tmp6;
  if (enabled) {
    if (tmp7) {
      if (tmp5 !== memo) {
        tmp6(memo);
      }
      const items2 = [text, selectionStart, selectionEnd];
      const callback = obj2.useCallback(() => {
        _undefined(closure_10);
      }, []);
      const memo1 = obj2.useMemo(() => {
        let tmp3 = findWordSpan(text, selectionStart, selectionEnd);
        if (tmp3 == null) {
          const obj = { queryStart: selectionStart, queryEnd: selectionEnd };
          tmp3 = obj;
        }
        return tmp3;
      }, items2);
      if (enabled) {
        tmp3 = tmp5;
      }
      obj = { unlockedEmojis: null, lockedEmojis: null, queryStart: null, queryEnd: null, clear: null };
      ({ unlockedEmojis: obj3.unlockedEmojis, lockedEmojis: obj3.lockedEmojis } = tmp3);
      ({ queryStart: obj3.queryStart, queryEnd: obj3.queryEnd } = memo1);
      obj.clear = callback;
      return obj;
    }
  }
  if (!enabled) {
    if (tmp5 !== tmp3) {
      tmp6(tmp3);
    }
  }
  if (tmp9) {
    tmp6(tmp3);
  }
};