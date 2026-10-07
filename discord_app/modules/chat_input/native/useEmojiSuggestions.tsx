// discord_app/modules/chat_input/native/useEmojiSuggestions.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import AutocompleteUtilsDefault from "../../../utils/AutocompleteUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";

require = fn;
function findWordSpan(text, selectionStart, selectionEnd) {
  if (selectionStart !== selectionEnd) {
    const obj2 = { query: text.slice(selectionStart, selectionEnd), queryStart: selectionStart, queryEnd: selectionEnd };
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
const LoadState = fn(5645).LoadState;
const EMOJI_SENTINEL = fn(5796).EMOJI_SENTINEL;
const EmojiIntention = fn(1380).EmojiIntention;
const re9 = /(\S+)\s$/;
let closure_10 = { unlockedEmojis: [], lockedEmojis: [], queryStart: 0, queryEnd: 0 };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/useEmojiSuggestions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let length = dependencyMap;
  const cResult = c.c(31);
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
    cResult[0] = items;
    cResult[1] = E;
    tmp3 = items;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp3, E);
  if (cResult[2] === channel) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === enabled) {
        if (cResult[5] === maxCount) {
          if (cResult[6] === minUnlockedEmojis) {
            if (cResult[7] === selectionEnd) {
              if (cResult[8] === selectionStart) {
                if (cResult[9] === text) {
                  dependencyMap = tmp7;
                  class E {
                    constructor() {
                      return closure_5.loadState;
                    }
                  }
                  [tmp17, tmp18] = noop.useState(closure_10);
                  _slicedToArray = tmp18;
                  const tmp19 = cResult[10].unlockedEmojis.length > 0 || cResult[10].lockedEmojis.length > 0;
                  noop = tmp19;
                  EmojiStore = obj6.useRef(null);
                  let tmp21 = enabled;
                  if (enabled) {
                    tmp21 = "" !== text;
                  }
                  if (!tmp21) {
                    tmp21 = tmp17 === tmp14;
                  }
                  if (!tmp21) {
                    tmp18(tmp14);
                  }
                  if (cResult[15] === enabled) {
                    if (cResult[16] === tmp7) {
                      if (cResult[17] === tmp19) {
                        if (cResult[18] === text) {
                          let tmp23 = cResult[19];
                          let tmp24 = cResult[20];
                        }
                        const effect = obj6.useEffect(tmp23, tmp24);
                        const _Symbol = Symbol;
                        class E {
                          constructor() {
                            return closure_5.loadState;
                          }
                        }
                        if (tmp26 === Symbol.for("react.memo_cache_sentinel")) {
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
                        const tmp29 = findWordSpan(text, selectionStart, selectionEnd);
                        if (tmp29 == null) {
                          class W {
                            constructor() {
                              closure_5.current = null;
                              tmp = closure_3(closure_10);
                              return;
                            }
                          }
                          tmp30[0] = selectionStart;
                          tmp30[1] = selectionEnd;
                          class E {
                            constructor() {
                              return closure_5.loadState;
                            }
                          }
                        }
                        cResult[22] = selectionEnd;
                        cResult[23] = selectionStart;
                        cResult[24] = text;
                        cResult[25] = tmp29;
                      }
                    }
                  }
                  class M {
                    constructor() {
                      if (enabled) {
                        tmp = closure_0;
                        str = "";
                        if ("" !== closure_0) {
                          tmp2 = closure_4;
                          if (closure_4) {
                            tmp3 = closure_5;
                            num = closure_5.current;
                            tmp4 = null;
                            if (num == null) {
                              num = -Infinity;
                            }
                            num2 = 500;
                            tmp6 = globalThis;
                            _Math = Math;
                            _Date = Date;
                            sum = num + 500;
                            num3 = 0;
                            _setTimeout = setTimeout;
                            closure_0 = setTimeout(() => { ... }, Math.max(0, sum - Date.now()));
                            return () => { ... };
                          }
                        }
                        return;
                      }
                      closure_5.current = null;
                      return;
                    }
                  }
                  const items1 = [enabled, text, cResult[10], tmp19];
                  cResult[15] = enabled;
                  cResult[16] = cResult[10];
                  cResult[17] = tmp19;
                  cResult[18] = text;
                  cResult[19] = M;
                  cResult[20] = items1;
                  tmp24 = items1;
                  tmp23 = M;
                  const tmp16 = _slicedToArray(noop.useState(closure_10), 2);
                }
              }
            }
          }
        }
      }
    }
  }
  if (!enabled) {
    class W {
      constructor() {
        closure_5.current = null;
        tmp = closure_3(closure_10);
        return;
      }
    }
    cResult[2] = channel;
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
    cResult[10] = tmp8;
  } else {
    class W {
      constructor() {
        closure_5.current = null;
        tmp = closure_3(closure_10);
        return;
      }
    }
  }
  const tmp9 = findWordSpan(text, selectionStart, selectionEnd);
  let tmp10 = null;
  if (null != tmp9) {
    class W {
      constructor() {
        closure_5.current = null;
        tmp = closure_3(closure_10);
        return;
      }
    }
    tmp10 = null;
    if (tmp9.query.length >= 3) {
      class W {
        constructor() {
          closure_5.current = null;
          tmp = closure_3(closure_10);
          return;
        }
      }
      tmp10 = null;
      class E {
        constructor() {
          return closure_5.loadState;
        }
      }
    }
  }
  if (null != tmp10) {
    class W {
      constructor() {
        closure_5.current = null;
        tmp = closure_3(closure_10);
        return;
      }
    }
    const obj2 = { query: null, channel: null, intention: null, maxCount: null };
    class E {
      constructor() {
        return closure_5.loadState;
      }
    }
    obj2.channel = channel;
    obj2.intention = EmojiIntention.CHAT;
    obj2.maxCount = maxCount;
    const emojis = enabled(5628).queryEmojiResults(obj2).emojis;
    length = emojis.unlocked.length;
    if (length < minUnlockedEmojis) {
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
      ({ queryStart: obj5.queryStart, queryEnd: obj5.queryEnd } = tmp10);
      cResult[11] = emojis.locked;
      cResult[12] = emojis.unlocked;
      cResult[13] = tmp10;
      cResult[14] = obj4;
      length = obj4;
    }
    const obj3 = enabled(5628);
  } else {
    class W {
      constructor() {
        closure_5.current = null;
        tmp = closure_3(closure_10);
        return;
      }
    }
  }
  const tmpResult = initialize;
}) : ((channel) => {
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
  const stateFromStores = channel(selectionStart[7]).useStateFromStores(items, () => maxCount.loadState);
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
  let obj = channel(selectionStart[7]);
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
  return { unlockedEmojis: tmp3.unlockedEmojis, lockedEmojis: tmp3.lockedEmojis, queryStart: memo1.queryStart, queryEnd: memo1.queryEnd, clear: callback };
});