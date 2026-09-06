// === Module 11995: ChatInputContentCallbacks ===

// Module 11995 (ChatInputContentCallbacks)
import _modDef12 from "module_12" /* 12 */;
import GuildChannelSubscriptions from "GuildChannelSubscriptions" /* 7286 */;
import GuildSubscriptionsActionCreators from "GuildSubscriptionsActionCreators" /* 7312 */;
import useMessageMaxLengthDefault from "useMessageMaxLength" /* 9304 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelMemberStore from "ChannelMemberStore" /* 7279 */;

require = fn;
let c6 = "@here";
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_text_area/ChatInputContentCallbacks.tsx");

export const tryUpdateSubscriptionForHereMention = function tryUpdateSubscriptionForHereMention(arr, maxMessageLength, guild_id, id) {
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
};
export const useHereMentionCallback = function useHereMentionCallback(arg0, arg1, arg2) {
  closure_0 = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  let tmp = useMessageMaxLengthDefault();
  _slicedToArray = tmp;
  let tmp2 = _slicedToArray(first.useState(false), 2);
  first = tmp2[0];
  closure_5 = tmp2[1];
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
          closure_0(7312).subscribeChannel(closure_1_1, dependencyMap, closure_0(7286).DEFAULT_RANGES);
          flag = true;
          const obj = closure_0(7312);
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
};