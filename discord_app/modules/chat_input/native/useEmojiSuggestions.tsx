// discord_app/modules/chat_input/native/useEmojiSuggestions.tsx
import AutocompleteUtilsDefault from "../../../utils/AutocompleteUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";

const require = fn;
function findWordSpan(text, selectionStart, selectionEnd) {
  if (selectionStart !== selectionEnd) {
    const obj2 = {
      query: text.slice(selectionStart, selectionEnd),
      queryStart: selectionStart,
      queryEnd: selectionEnd,
    };
    return obj2;
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
          const obj = { query: match2[1], queryStart: match2.index, queryEnd: selectionStart };
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
    const obj3 = { query: str + str2, queryStart: selectionStart - str.length, queryEnd: selectionStart + str2.length };
    return obj3;
  }
}
const LoadState = fn(5629).LoadState;
const EMOJI_SENTINEL = fn(5169).EMOJI_SENTINEL;
const EmojiIntention = fn(1375).EmojiIntention;
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
  const minUnlockedEmojis = channel.minUnlockedEmojis;
  closure_10 = undefined;
  const items = [maxCount];
  const stateFromStores = channel(selectionStart[5]).useStateFromStores(items, () => maxCount.loadState);
  const items1 = [channel, stateFromStores, enabled, maxCount, minUnlockedEmojis, selectionEnd, selectionStart, text];
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
          const obj3 = { query: tmp3.query, channel, intention: EmojiIntention.CHAT, maxCount };
          const emojis = AutocompleteUtilsDefault.queryEmojiResults(obj3).emojis;
          if (emojis.unlocked.length < minUnlockedEmojis) {
            let obj = closure_10;
          } else {
            obj = { unlockedEmojis: null, lockedEmojis: null, queryStart: null, queryEnd: null };
            ({ unlocked: obj.unlockedEmojis, locked: obj.lockedEmojis } = emojis);
            ({ queryStart: obj.queryStart, queryEnd: obj.queryEnd } = tmp3);
          }
          return obj;
        }
      }
    }
    return closure_10;
  }, items1);
  let tmp3 = closure_10;
  let obj = channel(selectionStart[5]);
  [tmp5, tmp6] = selectionEnd(enabled.useState(closure_10), 2);
  c9 = tmp6;
  closure_10 = tmp7;
  enabled.useRef(null);
  let tmp8 = enabled;
  if (enabled) {
    tmp8 = "" !== text;
  }
  if (!tmp8) {
    tmp8 = tmp5 === tmp3;
  }
  if (!tmp8) {
    tmp6(tmp3);
  }
  const items2 = [enabled, text, memo, memo.unlockedEmojis.length > 0 || memo.lockedEmojis.length > 0];
  const effect = obj2.useEffect(() => {
    if (enabled) {
      if ("" !== closure_1) {
        if (closure_10) {
          let num = ref.current;
          if (num == null) {
            num = -Infinity;
          }
          const _Math = Math;
          const _Date = Date;
          const sum = num + 500;
          const _setTimeout = setTimeout;
          const timeout = setTimeout(
            () => {
              ref.current = Date.now();
              _undefined(memo);
            },
            Math.max(0, sum - Date.now()),
          );
          return () => clearTimeout(closure_0);
        }
      }
    }
    ref.current = null;
  }, items2);
  const items3 = [text, selectionStart, selectionEnd];
  const callback = obj2.useCallback(() => {
    closure_11.current = null;
    _undefined(closure_10);
  }, []);
  const memo1 = obj2.useMemo(() => {
    let tmp3 = findWordSpan(text, selectionStart, selectionEnd);
    if (tmp3 == null) {
      const obj = { queryStart: selectionStart, queryEnd: selectionEnd };
      tmp3 = obj;
    }
    return tmp3;
  }, items3);
  if (enabled) {
    tmp3 = tmp5;
  }
  return {
    unlockedEmojis: tmp3.unlockedEmojis,
    lockedEmojis: tmp3.lockedEmojis,
    queryStart: memo1.queryStart,
    queryEnd: memo1.queryEnd,
    clear: callback,
  };
}
