// === Module 12069: useEmojiSuggestions ===

// Module 12069 (useEmojiSuggestions)
import react2 from "react" /* 576 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5621 */;
import EmojiStore2 from "EmojiStore" /* 5638 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 5789 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const EmojiStore_mod = EmojiStore2;
let dependencyMap, importDefault, num2, num3, tmp7;

let tmp;
const get_initialized = tmp(504);
function findWordSpan(text, selectionStart, selectionEnd) {
  if (selectionStart !== selectionEnd) {
    const obj2 = { query: text.slice(selectionStart, selectionEnd), queryStart: selectionStart, queryEnd: selectionEnd };
    return obj2;
  } else {
    const substr = text.slice(0, selectionStart);
    const obj4 = /\S+$/;
    const substr1 = text.slice(selectionStart);
    const match = obj4.exec(substr);
    const obj5 = /^\S+/;
    const match1 = obj5.exec(substr1);
    if (null == match) {
      if (null == match1) {
        const match2 = re9.exec(substr);
        let tmp3 = null;
        if (null != match2) {
          tmp3 = { query: match2[1], queryStart: match2.index, queryEnd: selectionStart };
          const obj = { query: match2[1], queryStart: match2.index, queryEnd: selectionStart };
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
    return { query: str + str2, queryStart: selectionStart - str.length, queryEnd: selectionStart + str2.length };
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let EmojiStore = EmojiStore_mod;
const LoadState = EmojiStore2.LoadState;
const EMOJI_SENTINEL = ChannelAutocompleteConstants.EMOJI_SENTINEL;
const EmojiIntention = EmojiConstants.EmojiIntention;
const re9 = /(\S+)\s$/;
let closure_10 = { unlockedEmojis: [], lockedEmojis: [], queryStart: 0, queryEnd: 0 };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let closure_2;
  let closure_3;
  let closure_4;
  let enabled;
  let maxCount;
  let minUnlockedEmojis;
  let ref;
  let selectionEnd;
  let selectionStart;
  let text;
  let tmp18;
  let tmp19;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(31);
  ({ channel, text } = arg0);
  require = text;
  ({ selectionStart, selectionEnd, enabled } = arg0);
  ({ maxCount, minUnlockedEmojis } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmojiStore];
    class E {
      constructor() {
        return closure_5.loadState;
      }
    }
    let num = 0;
    cResult[0] = items;
    cResult[1] = E;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, E);
  if (cResult[2] === channel) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === enabled) {
        if (cResult[5] === maxCount) {
          if (cResult[6] === minUnlockedEmojis) {
            if (cResult[7] === selectionEnd) {
              if (cResult[8] === selectionStart) {
                dependencyMap = tmp8;
                class E {
                  constructor() {
                    return closure_5.loadState;
                  }
                }
                [tmp18, tmp19] = react.useState(closure_10);
                _slicedToArray(react.useState(closure_10), 2);
                _slicedToArray = tmp19;
                react = tmp20;
                EmojiStore = obj6.useRef(null);
                let tmp22 = enabled;
                if (tmp22) {
                  tmp22 = "" !== text;
                }
                if (!tmp22) {
                  tmp22 = tmp18 === tmp15;
                }
                if (!tmp22) {
                  tmp19(tmp15);
                }
                if (cResult[15] === enabled) {
                  if (cResult[16] === tmp8) {
                    if (cResult[17] === (tmp8.unlockedEmojis.length > 0 || tmp8.lockedEmojis.length > 0)) {
                      let tmp24;
                      let tmp25;
                      if (cResult[18] === text) {
                        tmp24 = cResult[19];
                        tmp25 = cResult[20];
                      }
                      const effect = obj6.useEffect(tmp24, tmp25);
                      const _Symbol = Symbol;
                      class E {
                        constructor() {
                          return closure_5.loadState;
                        }
                      }
                      if (tmp27 === Symbol.for("react.memo_cache_sentinel")) {
                        class W {
                          constructor() {
                            closure_5.current = null;
                            tmp = closure_3(closure_10);
                            return;
                          }
                        }
                        cResult[21] = W;
                        class E {
                          constructor() {
                            return closure_5.loadState;
                          }
                        }
                      } else {
                        class W {
                          constructor() {
                            closure_5.current = null;
                            tmp = closure_3(closure_10);
                            return;
                          }
                        }
                      }
                      if (cResult[22] === selectionEnd) {
                        class W {
                          constructor() {
                            closure_5.current = null;
                            tmp = closure_3(closure_10);
                            return;
                          }
                        }
                      }
                      const tmp30 = findWordSpan(text, selectionStart, selectionEnd);
                      if (tmp30 == null) {
                        class W {
                          constructor() {
                            closure_5.current = null;
                            tmp = closure_3(closure_10);
                            return;
                          }
                        }
                        tmp31[0] = selectionStart;
                        tmp31[1] = selectionEnd;
                        class E {
                          constructor() {
                            return closure_5.loadState;
                          }
                        }
                      }
                      cResult[22] = selectionEnd;
                      cResult[23] = selectionStart;
                      cResult[24] = text;
                      cResult[25] = tmp30;
                    }
                  }
                }
                class M {
                  constructor() {
                    tmp = enabled;
                    if (tmp) {
                      tmp2 = closure_0;
                      str = "";
                      if ("" !== closure_0) {
                        tmp3 = closure_4;
                        if (tmp3) {
                          tmp4 = closure_5;
                          num = closure_5.current;
                          tmp5 = null;
                          if (num == null) {
                            num = -Infinity;
                          }
                          num2 = 500;
                          tmp7 = globalThis;
                          _Math = Math;
                          _Date = Date;
                          sum = num + 500;
                          num3 = 0;
                          _setTimeout = setTimeout;
                          closure_0 = setTimeout(() => { /* body not rendered: F142194 */ }, Math.max(0, sum - Date.now()));
                          return () => { /* body not rendered: F142195 */ };
                        }
                      }
                      return;
                    }
                    closure_5.current = null;
                    return;
                  }
                }
                const items1 = [enabled, text, tmp8, tmp8.unlockedEmojis.length > 0 || tmp8.lockedEmojis.length > 0];
                cResult[15] = enabled;
                cResult[16] = tmp8;
                cResult[17] = tmp8.unlockedEmojis.length > 0 || tmp8.lockedEmojis.length > 0;
                cResult[18] = text;
                cResult[19] = M;
                cResult[20] = items1;
                tmp25 = items1;
                tmp24 = M;
              }
            }
          }
        }
      }
    }
  }
  if (enabled) {
    class W {
      constructor() {
        closure_5.current = null;
        tmp = closure_3(closure_10);
        return;
      }
    }
    if (stateFromStores === LoadState.Loaded) {
      class W {
        constructor() {
          closure_5.current = null;
          tmp = closure_3(closure_10);
          return;
        }
      }
      const tmp10 = findWordSpan(text, selectionStart, selectionEnd);
      class E {
        constructor() {
          return closure_5.loadState;
        }
      }
      let tmp11 = null;
      if (null != tmp10) {
        class W {
          constructor() {
            closure_5.current = null;
            tmp = closure_3(closure_10);
            return;
          }
        }
        tmp11 = null;
        if (tmp10.query.length >= 3) {
          class W {
            constructor() {
              closure_5.current = null;
              tmp = closure_3(closure_10);
              return;
            }
          }
          tmp11 = null;
          class E {
            constructor() {
              return closure_5.loadState;
            }
          }
        }
      }
      if (null != tmp11) {
        class W {
          constructor() {
            closure_5.current = null;
            tmp = closure_3(closure_10);
            return;
          }
        }
        const obj2 = { query: null, channel, intention: EmojiIntention.CHAT, maxCount };
        const obj3 = enabled(5621);
        class E {
          constructor() {
            return closure_5.loadState;
          }
        }
        const emojis = obj3.queryEmojiResults(obj2).emojis;
        if (emojis.unlocked.length < minUnlockedEmojis) {
          class W {
            constructor() {
              closure_5.current = null;
              tmp = closure_3(closure_10);
              return;
            }
          }
        } else {
          class W {
            constructor() {
              closure_5.current = null;
              tmp = closure_3(closure_10);
              return;
            }
          }
          const obj4 = { unlockedEmojis: emojis.unlocked, lockedEmojis: null, queryStart: null, queryEnd: null };
          class E {
            constructor() {
              return closure_5.loadState;
            }
          }
          ({ queryStart: obj5.queryStart, queryEnd: obj5.queryEnd } = tmp11);
          cResult[11] = emojis.locked;
          cResult[12] = emojis.unlocked;
          cResult[13] = tmp11;
          cResult[14] = obj4;
        }
      } else {
        class W {
          constructor() {
            closure_5.current = null;
            tmp = closure_3(closure_10);
            return;
          }
        }
      }
    }
    class E {
      constructor() {
        return closure_5.loadState;
      }
    }
    cResult[3] = stateFromStores;
    cResult[4] = enabled;
    cResult[5] = maxCount;
    cResult[6] = minUnlockedEmojis;
    cResult[7] = selectionEnd;
    cResult[8] = selectionStart;
    cResult[9] = text;
    cResult[10] = closure_10;
    class M {
      constructor() {
        tmp = enabled;
        if (tmp) {
          tmp2 = closure_0;
          str = "";
          if ("" !== closure_0) {
            tmp3 = closure_4;
            if (tmp3) {
              tmp4 = closure_5;
              num = closure_5.current;
              tmp5 = null;
              if (num == null) {
                num = -Infinity;
              }
              num2 = 500;
              tmp7 = globalThis;
              _Math = Math;
              _Date = Date;
              sum = num + 500;
              num3 = 0;
              _setTimeout = setTimeout;
              closure_0 = setTimeout(() => { /* body not rendered: F142194 */ }, Math.max(0, sum - Date.now()));
              return () => { /* body not rendered: F142195 */ };
            }
          }
          return;
        }
        closure_5.current = null;
        return;
      }
    }
  }
}) : ((channel) => {
  let _undefined;
  let tmp5;
  let tmp6;
  channel = channel.channel;
  const text = channel.text;
  importDefault = text;
  const selectionStart = channel.selectionStart;
  const selectionEnd = channel.selectionEnd;
  const enabled = channel.enabled;
  const maxCount = channel.maxCount;
  const minUnlockedEmojis = channel.minUnlockedEmojis;
  closure_10 = undefined;
  let obj = channel(selectionStart[7]);
  const items = [maxCount];
  const stateFromStores = obj.useStateFromStores(items, () => maxCount.loadState);
  let obj2 = enabled;
  const items1 = [channel, stateFromStores, enabled, maxCount, minUnlockedEmojis, selectionEnd, selectionStart, text];
  const memo = enabled.useMemo(() => {
    if (enabled) {
      if (stateFromStores === LoadState.Loaded) {
        const tmp11 = findWordSpan(importDefault, selectionStart, selectionEnd);
        let tmp4 = null;
        if (null != tmp11) {
          tmp4 = null;
          if (tmp11.query.length >= 3) {
            const query = tmp11.query;
            tmp4 = null;
            if (!query.startsWith(EMOJI_SENTINEL)) {
              tmp4 = tmp11;
            }
          }
        }
        if (null == tmp4) {
          return closure_10;
        } else {
          let obj;
          const obj3 = { query: tmp4.query, channel, intention: EmojiIntention.CHAT, maxCount };
          const obj2 = AutocompleteUtilsDefault;
          const emojis = obj2.queryEmojiResults(obj3).emojis;
          if (emojis.unlocked.length < minUnlockedEmojis) {
            obj = closure_10;
          } else {
            obj = { unlockedEmojis: null, lockedEmojis: null, queryStart: null, queryEnd: null };
            ({ unlocked: obj.unlockedEmojis, locked: obj.lockedEmojis } = emojis);
            ({ queryStart: obj.queryStart, queryEnd: obj.queryEnd } = tmp4);
          }
          return obj;
        }
      }
    }
    return closure_10;
  }, items1);
  let tmp3 = closure_10;
  let tmp4 = selectionEnd(enabled.useState(closure_10), 2);
  [tmp5, tmp6] = tmp4;
  let c9 = tmp6;
  closure_10 = tmp7;
  const ref = obj2.useRef(null);
  let tmp8 = enabled;
  if (tmp8) {
    tmp8 = "" !== text;
  }
  if (!tmp8) {
    tmp8 = tmp5 === tmp3;
  }
  if (!tmp8) {
    tmp6(tmp3);
  }
  const items2 = [enabled, text, memo, tmp7];
  const effect = obj2.useEffect(() => {
    let closure_0;
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
          const timeout = setTimeout(() => {
            ref.current = Date.now();
            _undefined(memo);
          }, Math.max(0, sum - Date.now()));
          return () => clearTimeout(closure_0);
        }
      }
    }
    ref.current = null;
  }, items2);
  const items3 = [text, selectionStart, selectionEnd];
  const callback = obj2.useCallback(() => {
    ref.current = null;
    _undefined(closure_10);
  }, []);
  const memo1 = obj2.useMemo(() => {
    let tmp3 = findWordSpan(importDefault, selectionStart, selectionEnd);
    if (tmp3 == null) {
      tmp3 = { queryStart: selectionStart, queryEnd: selectionEnd };
      const obj = { queryStart: selectionStart, queryEnd: selectionEnd };
    }
    return tmp3;
  }, items3);
  if (enabled) {
    tmp3 = tmp5;
  }
  let obj3 = { unlockedEmojis: tmp3.unlockedEmojis, lockedEmojis: tmp3.lockedEmojis, queryStart: memo1.queryStart, queryEnd: memo1.queryEnd, clear: callback };
  return obj3;
});
const result = size.fileFinishedImporting("modules/chat_input/native/useEmojiSuggestions.tsx");

export default tmp2;