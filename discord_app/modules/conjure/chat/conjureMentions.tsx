// === Module 12094: conjureMentions ===

// Module 12094 (conjureMentions)
import UserUtils from "UserUtils" /* 5021 */;
import conjureMessageAuthors from "conjureMessageAuthors" /* 12093 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1392 */;

const require = globalThis.__r;

require = fn;
function splitConjureMentions(text) {
  const items = [];
  let num = 0;
  const iter = text.matchAll(re4)[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let num2 = nextResult.index;
    if (num2 == null) {
      num2 = 0;
    }
    let tmp4 = num2;
    if (num2 > num) {
      let obj = { kind: "text", text: null };
      obj.text = text.slice(num, tmp4);
      let arr = items.push(obj);
    }
    let obj2 = { kind: "mention", userId: null };
    obj2.userId = tmp3[1];
    let arr4 = items.push(obj2);
    num = tmp4 + tmp3[0].length;
    continue;
  }
  if (num < text.length) {
    const obj3 = { kind: "text", text: text.slice(num) };
    items.push(obj3);
  }
  return items;
}
const re4 = /<@!?(\d+)>/g;
const re5 = /(^|\s)@([\w.]+)/g;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRequestConjureMentionedUsers(text) {
  const cResult = require("c").c(12);
  if (cResult[0] !== text) {
    let tmp5 = globalThis;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u(kind) {
        if ("mention" === kind.kind) {
          const items = [kind.userId];
          let items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      };
      cResult[2] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const set = new tmp5.Set(splitConjureMentions(text).flatMap(tmp6));
    tmp5 = set;
    cResult[0] = text;
    cResult[1] = set;
    const obj2 = splitConjureMentions(text);
  } else {
    if (cResult[3] !== cResult[1]) {
      let items = [];
      HermesBuiltin.arraySpread(tmp4, 0);
      cResult[3] = tmp4;
      cResult[4] = items;
      let tmp12 = items;
    } else {
      tmp12 = cResult[4];
    }
    _require = tmp12;
    if (cResult[5] !== tmp12) {
      const fn2 = function f() {
        for (const item10005 of closure_0) {
          let obj = conjureMessageAuthors;
          let messageAuthor = obj.requestMessageAuthor(item10005);
          continue;
        }
      };
      let items1 = [tmp12];
      cResult[5] = tmp12;
      cResult[6] = fn2;
      cResult[7] = items1;
      let tmp17 = items1;
      let tmp16 = fn2;
    } else {
      tmp16 = cResult[6];
      tmp17 = cResult[7];
    }
    const effect = noop.useEffect(tmp16, tmp17);
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [UserStore];
      cResult[8] = items2;
      let tmp21 = items2;
    } else {
      tmp21 = cResult[8];
    }
    if (cResult[9] !== tmp12) {
      const fn3 = function h() {
        return closure_0.filter((item) => null != user.getUser(item)).length;
      };
      const items3 = [tmp12];
      cResult[9] = tmp12;
      cResult[10] = fn3;
      cResult[11] = items3;
      let tmp24 = items3;
      let tmp23 = fn3;
    } else {
      tmp23 = cResult[10];
      tmp24 = cResult[11];
    }
    return tmp(504).useStateFromStores(tmp21, tmp23, tmp24);
  }
  let obj = require("c");
  tmp = _require;
}) : (function useRequestConjureMentionedUsers(arg0) {
  _require = arg0;
  let items = [arg0];
  const memo = noop.useMemo(() => {
    const obj = splitConjureMentions(closure_0);
    let items = [
      ...new Set(splitConjureMentions(closure_0).flatMap((kind) => {
        if ("mention" === kind.kind) {
          const items = [kind.userId];
          let items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }))
    ];
    return items;
  }, items);
  let items1 = [memo];
  const effect = noop.useEffect(() => {
    for (const item10005 of memo) {
      let obj = conjureMessageAuthors;
      let messageAuthor = obj.requestMessageAuthor(item10005);
      continue;
    }
  }, items1);
  const items2 = [UserStore];
  const items3 = [memo];
  return require("initialize").useStateFromStores(items2, () => memo.filter((item) => null != user.getUser(item)).length, items3);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/conjureMentions.tsx");

export const CONJURE_MAX_MENTION_SUGGESTIONS = 8;
export const findConjureMentionQuery = function findConjureMentionQuery(arr, end) {
  const match = /(?:^|\s)@([\w.]*)$/.exec(arr.slice(0, end));
  let tmp2 = null;
  if (null != match) {
    const obj2 = { start: end - match[1].length - 1, end, text: match[1] };
    tmp2 = obj2;
  }
  return tmp2;
};
export const filterConjureMentionCandidates = function filterConjureMentionCandidates(arr, text) {
  closure_0 = text.toLowerCase();
  const found = arr.filter((username) => {
    let someResult = "" === closure_0;
    if (!someResult) {
      const formatted = username.username.toLowerCase();
      someResult = formatted.startsWith(tmp);
    }
    if (!someResult) {
      const str2 = UserUtils.getName(username);
      const parts = UserUtils.getName(username).toLowerCase().split(/\s+/);
      someResult = parts.some((item) => item.startsWith(closure_0));
      const str3 = UserUtils.getName(username).toLowerCase();
    }
    return someResult;
  });
  return found.slice(0, 8);
};
export const insertConjureMention = function insertConjureMention(arr, start, username) {
  const combined = "@" + username.username + " ";
  const obj = { value: null, caret: null };
  const sum = arr.slice(0, start.start) + combined;
  obj.value = sum + arr.slice(start.end);
  obj.caret = start.start + combined.length;
  return obj;
};
export const encodeConjureMentions = function encodeConjureMentions(chat, arr) {
  if (0 === arr.length) {
    return chat;
  } else {
    const _Map = Map;
    return chat.replace(re5, (arg0, arg1, str) => {
      let combined = arg0;
      str = str.replace(/\.+$/, "");
      value = map.get(str.toLowerCase());
      if (null != value) {
        const _HermesInternal = HermesInternal;
        combined = "" + arg1 + "<@" + value + ">" + str.slice(str.length);
      }
      return combined;
    });
  }
};
export { splitConjureMentions };
export const useRequestConjureMentionedUsers = tmp2;
export const withConjureMentionNames = function withConjureMentionNames(body) {
  const f111828 = (arg0) => user.getUser(arg0);
  return body.replace(closure_4, (arg0, arg1) => {
    let combined = arg0;
    const tmp2 = f145765(arg1);
    if (null != tmp2) {
      const _HermesInternal = HermesInternal;
      combined = "@" + closure_0(dependencyMap[2]).getName(tmp2);
      const obj = closure_0(dependencyMap[2]);
    }
    return combined;
  });
};
export const useConjureMentionNames = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureMentionNames(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      const f145764 = (arg0) => user.getUser(arg0);
      return closure_0.replace(re4, (arg0, arg1) => {
        let combined = arg0;
        const tmp2 = f145765(arg1);
        if (null != tmp2) {
          const _HermesInternal = HermesInternal;
          combined = "@" + closure_0(dependencyMap[2]).getName(tmp2);
          const obj = closure_0(dependencyMap[2]);
        }
        return combined;
      });
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useConjureMentionNames(arg0) {
  _require = arg0;
  const items = [UserStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const f145765 = (arg0) => user.getUser(arg0);
    return closure_0.replace(re4, (arg0, arg1) => {
      let combined = arg0;
      const tmp2 = f145765(arg1);
      if (null != tmp2) {
        const _HermesInternal = HermesInternal;
        combined = "@" + closure_0(dependencyMap[2]).getName(tmp2);
        const obj = closure_0(dependencyMap[2]);
      }
      return combined;
    });
  }, items1);
});