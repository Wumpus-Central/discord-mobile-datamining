// discord_app/modules/chat_input/native/useEmojiSuggestions.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../emojis/EmojiStore.tsx";
import { LoadState } from "../../emojis/EmojiStore.tsx";
import { EMOJI_SENTINEL } from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import { EmojiIntention } from "../../emojis/EmojiConstants.tsx";

const require = arg1;
function findWordSpan(arr) {
  if (arg1 !== arg2) {
    let obj = { query: null, queryStart: null, queryEnd: null };
    obj[0] = arr.slice(arg1, arg2);
    obj[1] = arg1;
    obj[2] = arg2;
    return obj;
  } else {
    const substr = arr.slice(0, arg1);
    const substr1 = arr.slice(arg1);
    const match = /\S+$/.exec(substr);
    const match1 = /^\S+/.exec(substr1);
    if (null == match) {
      if (null == match1) {
        const match2 = regex.exec(substr);
        let tmp3 = null;
        if (null != match2) {
          obj = { query: null, queryStart: null, queryEnd: null };
          obj[0] = match2[1];
          obj[1] = match2.index;
          obj[2] = arg1;
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
    obj = { query: null, queryStart: null, queryEnd: null };
    obj[0] = str + str2;
    obj[1] = arg1 - str.length;
    obj[2] = arg1 + str2.length;
    return obj;
  }
}
const re9 = /(\S+)\s$/;
let closure_10 = { unlockedEmojis: [], lockedEmojis: [], queryStart: 0, queryEnd: 0 };
const result = require("set").fileFinishedImporting("modules/chat_input/native/useEmojiSuggestions.tsx");

export default function useEmojiSuggestions(channel) {
  channel = channel.channel;
  const text = channel.text;
  importDefault = text;
  const selectionStart = channel.selectionStart;
  const selectionEnd = channel.selectionEnd;
  const enabled = channel.enabled;
  const maxCount = channel.maxCount;
  let stateFromStores;
  c7 = undefined;
  let obj = channel(selectionStart[5]);
  const items = [maxCount];
  stateFromStores = obj.useStateFromStores(items, () => maxCount.loadState);
  const items1 = [channel, stateFromStores, enabled, maxCount, selectionEnd, selectionStart, text];
  const memo = enabled.useMemo(() => {
    if (enabled) {
      if (stateFromStores === stateFromStores.Loaded) {
        const tmp10 = closure_1_11(closure_1, selectionStart, selectionEnd);
        let tmp3 = null;
        if (null != tmp10) {
          tmp3 = null;
          if (tmp10.query.length >= 3) {
            const query = tmp10.query;
            tmp3 = null;
            if (!query.startsWith(c7)) {
              tmp3 = tmp10;
            }
          }
        }
        if (null == tmp3) {
          return closure_1_10;
        } else {
          let obj = { query: null, channel: null, intention: null, maxCount: null };
          obj[0] = tmp3.query;
          obj[1] = channel;
          obj[2] = closure_1_8.CHAT;
          obj[3] = maxCount;
          const emojis = text(selectionStart[6]).queryEmojiResults(obj).emojis;
          if (0 === emojis.unlocked.length) {
            if (0 === emojis.locked.length) {
              obj = closure_1_10;
            }
            return obj;
          }
          obj = { unlockedEmojis: null, lockedEmojis: null, queryStart: null, queryEnd: null };
          ({ unlocked: obj[0], locked: obj[1] } = emojis);
          ({ queryStart: obj[2], queryEnd: obj[3] } = tmp3);
          const obj2 = text(selectionStart[6]);
        }
      }
    }
    return closure_1_10;
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
        _undefined(closure_1_10);
      }, []);
      const memo1 = obj2.useMemo(() => {
        let tmp3 = closure_1_11(closure_1, selectionStart, selectionEnd);
        if (tmp3 == null) {
          const obj = { queryStart: null, queryEnd: null };
          obj[0] = selectionStart;
          obj[1] = selectionEnd;
          tmp3 = obj;
        }
        return tmp3;
      }, items2);
      if (enabled) {
        tmp3 = tmp5;
      }
      obj = { unlockedEmojis: null, lockedEmojis: null, queryStart: null, queryEnd: null, clear: null };
      ({ unlockedEmojis: obj3[0], lockedEmojis: obj3[1] } = tmp3);
      ({ queryStart: obj3[2], queryEnd: obj3[3] } = memo1);
      obj[4] = callback;
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
}
