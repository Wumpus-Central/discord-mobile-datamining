// === Module 11186: tryUpdateSubscriptionForHereMention ===

// Module 11186 (tryUpdateSubscriptionForHereMention)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import getMemberListId from "getMemberListId";

const require = arg1;
let c6 = "@here";
const result = require("getMemberListId").fileFinishedImporting("modules/channel_text_area/ChatInputContentCallbacks.tsx");

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
        require(6075) /* subscribeMembers */.subscribeChannel(guild_id, id, require(6062) /* reset */.DEFAULT_RANGES);
        flag = true;
        const obj = require(6075) /* subscribeMembers */;
      }
      tmp7 = flag;
    }
    tmp3 = tmp7;
  }
  return tmp3;
};
export const useHereMentionCallback = function useHereMentionCallback(arg0, arg1, arg2) {
  let closure_0 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  let tmp = importDefault(6185)();
  const callback = tmp;
  let tmp2 = callback(first.useState(false), 2);
  first = tmp2[0];
  let getMemberListId = tmp2[1];
  const items = [tmp, arg1, arg2];
  const memo = first.useMemo(() => callback(table[6]).debounce((arr) => {
    const groups = outer1_5.getProps(closure_1, closure_2).groups;
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
      if (!(arr.length < 5 || arr.length > _slicedToArray)) {
        let flag = -1 !== arr.indexOf(outer1_6);
        if (flag) {
          outer1_0(outer1_2[3]).subscribeChannel(closure_1, closure_2, outer1_0(outer1_2[4]).DEFAULT_RANGES);
          flag = true;
          const obj = outer1_0(outer1_2[3]);
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