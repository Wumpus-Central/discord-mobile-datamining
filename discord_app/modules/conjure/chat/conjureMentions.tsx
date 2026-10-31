// === Module 12634: conjureMentions ===

// Module 12634 (conjureMentions)
import _modDef3868 from "module_3868" /* 3868 */;
import UserUtils from "UserUtils" /* 5068 */;
import conjureMessageAuthors from "conjureMessageAuthors" /* 12633 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import ConjureStoredAttachmentStore from "ConjureStoredAttachmentStore" /* 12487 */;

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
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/conjureMentions.tsx");

export const CONJURE_MAX_MENTION_SUGGESTIONS = 8;
export const CONJURE_ANY_MENTION = tmp2;
export function findConjureMentionQuery(arr, end) {
  const match = /(?:^|\s)@([\w.-]*)$/.exec(arr.slice(0, end));
  let tmp2 = null;
  if (null != match) {
    const obj2 = { start: end - match[1].length - 1, end, text: match[1] };
    tmp2 = obj2;
  }
  return tmp2;
}
export function filterConjureMentionCandidates(arr, conjureStoredAttachments, text) {
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
  HermesBuiltin.arraySpread(substr1.map((file) => ({ kind: "file", file })), tmp);
  return items;
}
export { splitConjureMentions };
export function useRequestConjureMentionedUsers(text) {
  _require = text;
  let items = [text];
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
}
export function withConjureMentionNames(body) {
  const f102703 = (arg0) => user.getUser(arg0);
  const f102704 = (arg0) => attachment.getAttachment(arg0);
  return body.replace(closure_6, (arg0, arg1, arg2) => {
    if (null == arg1) {
      let str2 = arg2;
      if (arg2 == null) {
        str2 = "";
      }
      const tmp7Result = f127505(str2);
      let name;
      if (tmp7Result != null) {
        name = tmp7Result.name;
      }
      if (name == null) {
        const intl = closure_0(1113).intl;
        name = intl.string(_modDef3868.ff9Q4C);
      }
      const _HermesInternal2 = HermesInternal;
      return "@" + name;
    } else {
      let combined = arg0;
      const tmp3 = f127504(arg1);
      if (null != tmp3) {
        const _HermesInternal = HermesInternal;
        combined = "@" + closure_0(5068).getName(tmp3);
        const obj = closure_0(5068);
      }
      return combined;
    }
  });
}
export function useConjureMentionNames(trimmed) {
  _require = trimmed;
  const items = [UserStore, ConjureStoredAttachmentStore];
  const items1 = [trimmed];
  return require("initialize").useStateFromStores(items, () => {
    const f127504 = (arg0) => user.getUser(arg0);
    const f127505 = (arg0) => attachment.getAttachment(arg0);
    return trimmed.replace(re6, (arg0, arg1, arg2) => {
      if (null == arg1) {
        let str2 = arg2;
        if (arg2 == null) {
          str2 = "";
        }
        const tmp7Result = f127505(str2);
        let name;
        if (tmp7Result != null) {
          name = tmp7Result.name;
        }
        if (name == null) {
          const intl = closure_0(1113).intl;
          name = intl.string(_modDef3868.ff9Q4C);
        }
        const _HermesInternal2 = HermesInternal;
        return "@" + name;
      } else {
        let combined = arg0;
        const tmp3 = f127504(arg1);
        if (null != tmp3) {
          const _HermesInternal = HermesInternal;
          combined = "@" + closure_0(5068).getName(tmp3);
          const obj = closure_0(5068);
        }
        return combined;
      }
    });
  }, items1);
}