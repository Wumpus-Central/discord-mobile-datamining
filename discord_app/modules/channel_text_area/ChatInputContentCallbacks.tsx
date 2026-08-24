// === Module 11166: tryUpdateSubscriptionForHereMention ===

// Module 11166 (tryUpdateSubscriptionForHereMention)
import reset from "reset" /* 7264 */;
import subscribeMembers from "subscribeMembers" /* 7276 */;
import useMessageMaxLengthDefault from "useMessageMaxLength" /* 8462 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "getMemberListId" /* 7249 */;

require = arg1;
let c6 = "@here";
const result = require("set").fileFinishedImporting("modules/channel_text_area/ChatInputContentCallbacks.tsx");

export const tryUpdateSubscriptionForHereMention = function tryUpdateSubscriptionForHereMention(arr, maxMessageLength, guild_id, id) {
  const groups = props.getProps(guild_id, id).groups;
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
        subscribeMembers.subscribeChannel(guild_id, id, reset.DEFAULT_RANGES);
        flag = true;
        const obj = subscribeMembers;
      }
      tmp7 = flag;
    }
    tmp3 = tmp7;
  }
  return tmp3;
};
export const useHereMentionCallback = function useHereMentionCallback(arg0, arg1, arg2) {
  closure_0 = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  let tmp = useMessageMaxLengthDefault();
  const callback = tmp;
  let tmp2 = callback(first.useState(false), 2);
  first = tmp2[0];
  closure_5 = tmp2[1];
  const items = [tmp, arg1, arg2];
  const memo = first.useMemo(() => callback(table[6]).debounce((arr) => {
    const groups = closure_1_5.getProps(closure_1, closure_2).groups;
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
        let flag = -1 !== arr.indexOf(closure_1_6);
        if (flag) {
          closure_1_0(closure_1_2[3]).subscribeChannel(closure_1, closure_2, closure_1_0(closure_1_2[4]).DEFAULT_RANGES);
          flag = true;
          const obj = closure_1_0(closure_1_2[3]);
        }
        tmp9 = flag;
      }
      tmp6 = tmp9;
    }
    if (tmp6) {
      callback(true);
    }
  }, 200, { maxWait: 500 }), items);
  const items1 = [first, memo, arg0, arg1, arg2];
  const effect = first.useEffect(() => {
    const groups = props.getProps(closure_1, closure_2).groups;
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
            closure_0.removeListener("text-changed", closure_6);
            closure_6.cancel();
          };
        }
      }
    }
  }, items1);
};