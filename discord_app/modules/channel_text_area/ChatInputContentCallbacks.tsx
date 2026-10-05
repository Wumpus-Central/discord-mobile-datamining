// === Module 11609: ChatInputContentCallbacks ===

// Module 11609 (ChatInputContentCallbacks)
import GuildChannelSubscriptions from "GuildChannelSubscriptions" /* 6789 */;
import GuildSubscriptionsActionCreators from "GuildSubscriptionsActionCreators" /* 6815 */;
import useMessageMaxLengthDefault from "useMessageMaxLength" /* 8809 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelMemberStore from "ChannelMemberStore" /* 6782 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let tmp3;
const _modDef12 = tmp3(12);
let _slicedToArray = _slicedToArray_mod;
let c6 = "@here";
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_1;
  let closure_2;
  let closure_3;
  let first;
  _require = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  let tmp = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(11);
  let tmp4 = useMessageMaxLengthDefault();
  _slicedToArray = tmp4;
  let tmp5 = _slicedToArray(first.useState(false), 2);
  const obj2 = first;
  first = tmp5[0];
  let closure_5 = tmp5[1];
  if (cResult[0] === arg2) {
    if (cResult[1] === arg1) {
      let tmp7;
      if (cResult[2] === tmp4) {
        tmp7 = cResult[3];
      }
      let closure_6 = tmp7;
      if (cResult[4] === arg2) {
        if (cResult[5] === arg0) {
          if (cResult[6] === arg1) {
            if (cResult[7] === tmp7) {
              let tmp9;
              let tmp10;
              if (cResult[8] === first) {
                tmp9 = cResult[9];
                tmp10 = cResult[10];
              }
              const effect = obj2.useEffect(tmp9, tmp10);
            }
          }
        }
      }
      const fn = function y() {
        const groups = ChannelMemberStore.getProps(closure_1, closure_2).groups;
        if (null != closure_1) {
          let tmp = groups.length > 1;
          if (!tmp) {
            tmp = !(1 === groups.length && "unknown" === groups[0].id);
            const tmp2 = 1 === groups.length && "unknown" === groups[0].id;
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
  const tmp3Result = _modDef12;
  const debounceResult = tmp3Result.debounce((arr) => {
    const groups = ChannelMemberStore.getProps(closure_1, closure_2).groups;
    let tmp4 = groups.length > 1;
    if (!tmp4) {
      tmp4 = !(1 === groups.length && "unknown" === groups[0].id);
      const tmp5 = 1 === groups.length && "unknown" === groups[0].id;
    }
    let tmp6 = tmp4;
    if (!tmp6) {
      let tmp9 = !(arr.length < 5 || arr.length > closure_3);
      if (tmp9) {
        let flag = -1 !== arr.indexOf(c6);
        if (flag) {
          const obj = GuildSubscriptionsActionCreators;
          obj.subscribeChannel(closure_1, closure_2, GuildChannelSubscriptions.DEFAULT_RANGES);
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
}) : ((arg0, arg1, arg2) => {
  let closure_1;
  let closure_2;
  let closure_3;
  let closure_5;
  let first;
  let closure_0 = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  let tmp = useMessageMaxLengthDefault();
  _slicedToArray = tmp;
  [first, closure_5] = first.useState(false);
  const items = [tmp, arg1, arg2];
  const memo = first.useMemo(() => {
    let props;
    let obj = _modDef12;
    return obj.debounce((arr) => {
      const groups = props.getProps(closure_1_1, closure_1_2).groups;
      let tmp4 = groups.length > 1;
      if (!tmp4) {
        tmp4 = !(1 === groups.length && "unknown" === groups[0].id);
        const tmp5 = 1 === groups.length && "unknown" === groups[0].id;
      }
      let tmp6 = tmp4;
      if (!tmp6) {
        let tmp9 = !(arr.length < 5 || arr.length > closure_1_3);
        if (tmp9) {
          let flag = -1 !== arr.indexOf(memo);
          if (flag) {
            const obj = closure_0(closure_2[3]);
            obj.subscribeChannel(closure_1_1, closure_1_2, closure_0(closure_2[4]).DEFAULT_RANGES);
            flag = true;
          }
          tmp9 = flag;
        }
        tmp6 = tmp9;
      }
      if (tmp6) {
        props(true);
      }
    }, 200, { maxWait: 500 });
  }, items);
  const items1 = [first, memo, arg0, arg1, arg2];
  const effect = first.useEffect(() => {
    const groups = ChannelMemberStore.getProps(closure_1, closure_2).groups;
    if (null != closure_1) {
      let tmp = groups.length > 1;
      if (!tmp) {
        tmp = !(1 === groups.length && "unknown" === groups[0].id);
        const tmp2 = 1 === groups.length && "unknown" === groups[0].id;
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
function tryUpdateSubscriptionForHereMention(arr, maxMessageLength, guild_id, id) {
  const groups = ChannelMemberStore.getProps(guild_id, id).groups;
  let tmp = groups.length > 1;
  if (!tmp) {
    tmp = !(1 === groups.length && "unknown" === groups[0].id);
    const tmp2 = 1 === groups.length && "unknown" === groups[0].id;
  }
  let tmp3 = tmp;
  if (!tmp3) {
    let tmp7 = !(arr.length < 5 || arr.length > maxMessageLength);
    const tmp5 = arr.length < 5 || arr.length > maxMessageLength;
    if (tmp7) {
      let flag = -1 !== arr.indexOf(c6);
      if (flag) {
        const obj = GuildSubscriptionsActionCreators;
        obj.subscribeChannel(guild_id, id, GuildChannelSubscriptions.DEFAULT_RANGES);
        flag = true;
      }
      tmp7 = flag;
    }
    tmp3 = tmp7;
  }
  return tmp3;
}
const result = size.fileFinishedImporting("modules/channel_text_area/ChatInputContentCallbacks.tsx");

export { tryUpdateSubscriptionForHereMention };
export const useHereMentionCallback = tmp2;