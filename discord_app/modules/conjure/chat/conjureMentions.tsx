// discord_app/modules/conjure/chat/conjureMentions.tsx
import _modDef3883 from "../intl/ConjureUntranslated.messages.js";
import UserUtils from "../../../utils/UserUtils.tsx";
import conjureMessageAuthors from "conjureMessageAuthors.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import ConjureStoredAttachmentStore from "ConjureStoredAttachmentStore.tsx";

const require = globalThis.__r;

require = fn;
function splitConjureMentions(text) {
  const items = [];
  let num = 0;
  const iter = text.matchAll(re6)[Symbol.iterator]();
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
    if (null != tmp3[1]) {
      let obj2 = { kind: "mention", userId: null };
      obj2.userId = tmp3[1];
      let obj3 = obj2;
    } else {
      obj3 = { kind: "file", attachmentId: null };
      obj3.attachmentId = tmp3[2];
    }
    let arr4 = items.push(obj3);
    num = tmp4 + tmp3[0].length;
    continue;
  }
  if (num < text.length) {
    const obj4 = { kind: "text", text: text.slice(num) };
    items.push(obj4);
  }
  return items;
}
let tmp2 = /<@!?(\d+)>|<file:(\d{16}-[a-z0-9]{6})>/g;
const re6 = tmp2;
fn(558);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useRequestConjureMentionedUsers(text) {
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
          class C {
            constructor() {
              return closure_0.filter((item) => null != user.getUser(item)).length;
            }
          }
          const items3 = [tmp12];
          cResult[9] = tmp12;
          cResult[10] = C;
          cResult[11] = items3;
          let tmp24 = items3;
        } else {
          class C {
            constructor() {
              return closure_0.filter((item) => null != user.getUser(item)).length;
            }
          }
          tmp24 = cResult[11];
        }
        return tmp(504).useStateFromStores(tmp21, C, tmp24);
      }
      let obj = require("c");
      tmp = _require;
    }
  : function useRequestConjureMentionedUsers(arg0) {
      _require = arg0;
      let items = [arg0];
      const memo = noop.useMemo(() => {
        const obj = splitConjureMentions(closure_0);
        let items = [
          ...new Set(
            splitConjureMentions(closure_0).flatMap((kind) => {
              if ("mention" === kind.kind) {
                const items = [kind.userId];
                let items1 = items;
              } else {
                items1 = [];
              }
              return items1;
            }),
          ),
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
      return require("initialize").useStateFromStores(
        items2,
        () => memo.filter((item) => null != user.getUser(item)).length,
        items3,
      );
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/conjureMentions.tsx");

export const CONJURE_MAX_MENTION_SUGGESTIONS = 8;
export const CONJURE_ANY_MENTION = tmp2;
export const findConjureMentionQuery = function findConjureMentionQuery(arr, end) {
  const match = /(?:^|\s)@([\w.-]*)$/.exec(arr.slice(0, end));
  let tmp2 = null;
  if (null != match) {
    const obj2 = { start: end - match[1].length - 1, end, text: match[1] };
    tmp2 = obj2;
  }
  return tmp2;
};
export const filterConjureMentionCandidates = function filterConjureMentionCandidates(
  arr,
  conjureStoredAttachments,
  text,
) {
  _require = text.toLowerCase();
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
  const substr = found.slice(0, 8);
  const items = [...substr.map((user) => ({ kind: "user", user }))];
  const result = require("conjureFileMentions").filterConjureFileCandidates(conjureStoredAttachments, text);
  const substr1 = result.slice(0, 8);
  HermesBuiltin.arraySpread(
    substr1.map((file) => ({ kind: "file", file })),
    tmp,
  );
  return items;
};
export { splitConjureMentions };
export const useRequestConjureMentionedUsers = tmp3;
export const withConjureMentionNames = function withConjureMentionNames(body) {
  const f112314 = (arg0) => user.getUser(arg0);
  const f112315 = (arg0) => attachment.getAttachment(arg0);
  return body.replace(closure_6, (arg0, arg1, arg2) => {
    if (null == arg1) {
      let str2 = arg2;
      if (arg2 == null) {
        str2 = "";
      }
      const tmp7Result = f146291(str2);
      let name;
      if (tmp7Result != null) {
        name = tmp7Result.name;
      }
      if (name == null) {
        const intl = closure_0(1128).intl;
        name = intl.string(_modDef3883.ff9Q4C);
      }
      const _HermesInternal2 = HermesInternal;
      return "@" + name;
    } else {
      let combined = arg0;
      const tmp3 = f146290(arg1);
      if (null != tmp3) {
        const _HermesInternal = HermesInternal;
        combined = "@" + closure_0(5057).getName(tmp3);
        const obj = closure_0(5057);
      }
      return combined;
    }
  });
};
export const useConjureMentionNames = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureMentionNames(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore, ConjureStoredAttachmentStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          const f146288 = (arg0) => user.getUser(arg0);
          const f146289 = (arg0) => attachment.getAttachment(arg0);
          return closure_0.replace(re6, (arg0, arg1, arg2) => {
            if (null == arg1) {
              let str2 = arg2;
              if (arg2 == null) {
                str2 = "";
              }
              const tmp7Result = f146291(str2);
              let name;
              if (tmp7Result != null) {
                name = tmp7Result.name;
              }
              if (name == null) {
                const intl = closure_0(1128).intl;
                name = intl.string(_modDef3883.ff9Q4C);
              }
              const _HermesInternal2 = HermesInternal;
              return "@" + name;
            } else {
              let combined = arg0;
              const tmp3 = f146290(arg1);
              if (null != tmp3) {
                const _HermesInternal = HermesInternal;
                combined = "@" + closure_0(5057).getName(tmp3);
                const obj = closure_0(5057);
              }
              return combined;
            }
          });
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp7, tmp8);
    }
  : function useConjureMentionNames(arg0) {
      _require = arg0;
      const items = [UserStore, ConjureStoredAttachmentStore];
      const items1 = [arg0];
      return require("initialize").useStateFromStores(
        items,
        () => {
          const f146290 = (arg0) => user.getUser(arg0);
          const f146291 = (arg0) => attachment.getAttachment(arg0);
          return closure_0.replace(re6, (arg0, arg1, arg2) => {
            if (null == arg1) {
              let str2 = arg2;
              if (arg2 == null) {
                str2 = "";
              }
              const tmp7Result = f146291(str2);
              let name;
              if (tmp7Result != null) {
                name = tmp7Result.name;
              }
              if (name == null) {
                const intl = closure_0(1128).intl;
                name = intl.string(_modDef3883.ff9Q4C);
              }
              const _HermesInternal2 = HermesInternal;
              return "@" + name;
            } else {
              let combined = arg0;
              const tmp3 = f146290(arg1);
              if (null != tmp3) {
                const _HermesInternal = HermesInternal;
                combined = "@" + closure_0(5057).getName(tmp3);
                const obj = closure_0(5057);
              }
              return combined;
            }
          });
        },
        items1,
      );
    };
