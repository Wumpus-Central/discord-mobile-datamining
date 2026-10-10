// === Module 11669: ChatInputContentCallbacks ===

// Module 11669 (ChatInputContentCallbacks)
import _modDef12 from "module_12" /* 12 */;
import GuildChannelSubscriptions from "GuildChannelSubscriptions" /* 6983 */;
import GuildSubscriptionsActionCreators from "GuildSubscriptionsActionCreators" /* 7011 */;
import useMessageMaxLengthDefault from "useMessageMaxLength" /* 9259 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelMemberStore from "ChannelMemberStore" /* 6980 */;

const require = globalThis.__r;

require = fn;
let c6 = "@here";
const ReactCompilerGating = fn(558);
function tryUpdateSubscriptionForHereMention(arr, maxMessageLength, guild_id, id) {
  const groups = ChannelMemberStore.getProps(guild_id, id).groups;
  let tmp = groups.length > 1;
  if (!tmp) {
    let tmp2 = 1 === groups.length;
    if (tmp2) {
      tmp2 = "unknown" === groups[0].id;
    }
    tmp = !tmp2;
  }
  let tmp3 = tmp;
  if (!tmp3) {
    let tmp5 = arr.length < 5;
    if (!tmp5) {
      tmp5 = arr.length > maxMessageLength;
    }
    let tmp7 = !tmp5;
    if (!tmp5) {
      let flag = -1 !== arr.indexOf(c6);
      if (flag) {
        GuildSubscriptionsActionCreators.subscribeChannel(guild_id, id, GuildChannelSubscriptions.DEFAULT_RANGES);
        flag = true;
      }
      tmp7 = flag;
    }
    tmp3 = tmp7;
  }
  return tmp3;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_text_area/ChatInputContentCallbacks.tsx");

export { tryUpdateSubscriptionForHereMention };
export const useHereMentionCallback = ReactCompilerGating.isReactCompilerEnabled() ? (function useHereMentionCallback(arg0, arg1, arg2) {
  _require = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  const cResult = require("c").c(11);
  let tmp4 = useMessageMaxLengthDefault();
  _slicedToArray = tmp4;
  [first, closure_5] = first.useState(false);
  if (cResult[0] === arg2) {
    if (cResult[1] === arg1) {
      if (cResult[2] === tmp4) {
        let tmp7 = cResult[3];
      }
      closure_6 = tmp7;
      if (cResult[4] === arg2) {
        if (cResult[5] === arg0) {
          if (cResult[6] === arg1) {
            if (cResult[7] === tmp7) {
              if (cResult[8] === first) {
                let tmp9 = cResult[9];
                let tmp10 = cResult[10];
              }
              const effect = obj2.useEffect(tmp9, tmp10);
            }
          }
        }
      }
      const fn = function v() {
        const groups = ChannelMemberStore.getProps(closure_1, closure_2).groups;
        if (null != closure_1) {
          let tmp = groups.length > 1;
          if (!tmp) {
            let tmp2 = 1 === groups.length;
            if (tmp2) {
              tmp2 = "unknown" === groups[0].id;
            }
            tmp = !tmp2;
          }
          if (!tmp) {
            if (!first) {
              closure_0.addListener("text-changed", closure_6);
              return () => {
                closure_1_0.removeListener("text-changed", closure_1_6);
                closure_1_6.cancel();
              };
            }
          }
        }
      };
      const items = [first, tmp7, arg0, arg1, arg2];
      cResult[4] = arg2;
      cResult[5] = arg0;
      cResult[6] = arg1;
      cResult[7] = tmp7;
      cResult[8] = first;
      cResult[9] = fn;
      cResult[10] = items;
      tmp10 = items;
      tmp9 = fn;
    }
  }
  let obj = require("c");
  obj2 = first;
  const debounceResult = _modDef12.debounce((arr) => {
    const groups = ChannelMemberStore.getProps(closure_1, closure_2).groups;
    let tmp4 = groups.length > 1;
    if (!tmp4) {
      let tmp5 = 1 === groups.length;
      if (tmp5) {
        tmp5 = "unknown" === groups[0].id;
      }
      tmp4 = !tmp5;
    }
    let tmp6 = tmp4;
    if (!tmp6) {
      let tmp9 = !tmp8;
      if (!(arr.length < 5 || arr.length > closure_3)) {
        let flag = -1 !== arr.indexOf(c6);
        if (flag) {
          GuildSubscriptionsActionCreators.subscribeChannel(closure_1, closure_2, GuildChannelSubscriptions.DEFAULT_RANGES);
          flag = true;
        }
        tmp9 = flag;
      }
      tmp6 = tmp9;
    }
    if (tmp6) {
      closure_5(true);
    }
  }, 200, { maxWait: 500 });
  cResult[0] = arg2;
  cResult[1] = arg1;
  cResult[2] = tmp4;
  cResult[3] = debounceResult;
  tmp7 = debounceResult;
}) : (function useHereMentionCallback(arg0, arg1, arg2) {
  closure_0 = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  let tmp = useMessageMaxLengthDefault();
  _slicedToArray = tmp;
  [first, closure_5] = first.useState(false);
  const items = [tmp, arg1, arg2];
  const memo = first.useMemo(() => _modDef12.debounce((arr) => {
    const groups = props.getProps(closure_1_1, dependencyMap).groups;
    let tmp4 = groups.length > 1;
    if (!tmp4) {
      let tmp5 = 1 === groups.length;
      if (tmp5) {
        tmp5 = "unknown" === groups[0].id;
      }
      tmp4 = !tmp5;
    }
    let tmp6 = tmp4;
    if (!tmp6) {
      let tmp9 = !tmp8;
      if (!(arr.length < 5 || arr.length > closure_1_3)) {
        let flag = -1 !== arr.indexOf(memo);
        if (flag) {
          closure_0(7011).subscribeChannel(closure_1_1, dependencyMap, closure_0(6983).DEFAULT_RANGES);
          flag = true;
          const obj = closure_0(7011);
        }
        tmp9 = flag;
      }
      tmp6 = tmp9;
    }
    if (tmp6) {
      props(true);
    }
  }, 200, { maxWait: 500 }), items);
  const items1 = [first, memo, arg0, arg1, arg2];
  const effect = first.useEffect(() => {
    const groups = ChannelMemberStore.getProps(closure_1, closure_2).groups;
    if (null != closure_1) {
      let tmp = groups.length > 1;
      if (!tmp) {
        let tmp2 = 1 === groups.length;
        if (tmp2) {
          tmp2 = "unknown" === groups[0].id;
        }
        tmp = !tmp2;
      }
      if (!tmp) {
        if (!first) {
          closure_0.addListener("text-changed", memo);
          return () => {
            closure_1_0.removeListener("text-changed", memo);
            memo.cancel();
          };
        }
      }
    }
  }, items1);
});