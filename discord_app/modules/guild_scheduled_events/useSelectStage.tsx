// === Module 9268: useSelectStage ===

// Module 9268 (useSelectStage)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3, c6, channel;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_2;
  let first;
  let items3;
  let stateFromStores;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp6;
  let voiceChannelId;
  const tmp = stateFromStores;
  let obj = stateFromStores(first[6]);
  const cResult = obj.c(11);
  const tmp2 = first;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedChannelStore];
    const fn = function s() {
      return voiceChannelId.getVoiceChannelId();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(tmp2[7]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5, tmp6);
  [first, _asyncToGenerator] = react.useState(stateFromStores);
  if (cResult[3] !== stateFromStores) {
    class S {
      constructor() {
        closure_0 = setTimeout(() => {
          closure_1_2(closure_0);
        }, 500);
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
    const items2 = [stateFromStores];
    cResult[3] = stateFromStores;
    cResult[4] = S;
    cResult[5] = items2;
    tmp12 = items2;
  } else {
    class S {
      constructor() {
        closure_0 = setTimeout(() => {
          closure_1_2(closure_0);
        }, 500);
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
    tmp12 = cResult[5];
  }
  const effect = react.useEffect(S, tmp12);
  if (cResult[6] !== first) {
    class S {
      constructor() {
        closure_0 = setTimeout(() => {
          closure_1_2(closure_0);
        }, 500);
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
    let closure_0 = _asyncToGenerator(async (arg0, arg1) => {
      let obj2;
      closure_0 = arg0;
      let closure_1 = arg1;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          c6 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              c5 = 1;
              if (closure_1 === closure_1) {
                channel = channel.getChannel(closure_1);
                if (null != channel) {
                  const obj4 = closure_0(first[8]);
                  obj4.navigateToStage(channel);
                  c5 = 0;
                  c6 = 3;
                  const obj6 = { value: undefined, done: true };
                  return obj6;
                }
              }
              tmp(closure_1);
              c3 = 2;
              c6 = 1;
              const obj7 = { value: obj2.connectOrLurkStage(closure_0, closure_1), done: false };
              obj2 = closure_0(first[8]);
              return obj7;
            }
          } else {
            if (1 === tmp4) {
              c5 = 0;
              tmp(null);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c5 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp18) {
          let closure_4 = tmp18;
          if (0 === c5) {
            c6 = 3;
            throw tmp18;
          } else {
            c3 = 1;
          }
        }
      }
    });
    const fn2 = function() {
      return closure_0(...arguments);
    };
    cResult[6] = first;
    cResult[7] = fn2;
  } else {
    class S {
      constructor() {
        closure_0 = setTimeout(() => {
          closure_1_2(closure_0);
        }, 500);
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
  }
  if (cResult[8] === tmp14) {
    class S {
      constructor() {
        closure_0 = setTimeout(() => {
          closure_1_2(closure_0);
        }, 500);
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
    return items3;
  }
  items3 = [first, tmp14];
  cResult[8] = tmp14;
  cResult[9] = first;
  cResult[10] = items3;
}) : (() => {
  let closure_2;
  let first;
  let stateFromStores;
  let voiceChannelId;
  let obj = stateFromStores(first[7]);
  const items = [SelectedChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId(), []);
  [first, _asyncToGenerator] = react.useState(stateFromStores);
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      closure_1_2(closure_0);
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, arg1) => {
    let obj2;
    closure_0 = arg0;
    let closure_1 = arg1;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        c6 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c5 = 1;
            if (closure_1 === closure_1) {
              channel = channel.getChannel(closure_1);
              if (null != channel) {
                const obj4 = closure_0(first[8]);
                obj4.navigateToStage(channel);
                c5 = 0;
                c6 = 3;
                const obj6 = { value: undefined, done: true };
                return obj6;
              }
            }
            tmp(closure_1);
            c3 = 2;
            c6 = 1;
            const obj7 = { value: obj2.connectOrLurkStage(closure_0, closure_1), done: false };
            obj2 = closure_0(first[8]);
            return obj7;
          }
        } else {
          if (1 === tmp4) {
            c5 = 0;
            tmp(null);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c5 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp18) {
        let closure_4 = tmp18;
        if (0 === c5) {
          c6 = 3;
          throw tmp18;
        } else {
          c3 = 1;
        }
      }
    }
  });
  const items2 = [first];
  const items3 = [
    first,
    useCallback(function() {
      return closure_0(...arguments);
    }, items2)
  ];
  return items3;
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useSelectStage.tsx");

export default tmp2;