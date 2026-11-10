// discord_app/modules/conjure/chat/conjureMentions.tsx
import _modDef4028 from "../intl/ConjureUntranslated.messages.js";
import UserUtils from "../../../utils/UserUtils.tsx";
import conjureMessageAuthors from "conjureMessageAuthors.tsx";
import conjureFileMentions from "conjureFileMentions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import ConjureStoredAttachmentStore from "ConjureStoredAttachmentStore.tsx";

const require = globalThis.__r;

require = fn;
function splitConjureMentions(text) {
  items = [];
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
export function matchesConjureMentionQuery(username, formatted, nick) {
  closure_0 = formatted;
  let tmp = "" === formatted;
  if (!tmp) {
    formatted = username.username.toLowerCase();
    let someResult = formatted.startsWith(formatted);
    if (!someResult) {
      let str2 = nick;
      items = [UserUtils.getName(username)];
      if (nick == null) {
        str2 = "";
      }
      items[1] = str2;
      const str4 = items.join(" ");
      const parts = items.join(" ").toLowerCase().split(/\s+/);
      someResult = parts.some((item) => item.startsWith(closure_0));
      const str5 = items.join(" ").toLowerCase();
    }
    tmp = someResult;
  }
  return tmp;
}
export function filterConjureMentionCandidates(arr, conjureStoredAttachments, text) {
  const substr = arr.slice(0, 8);
  items = [...substr.map((user) => ({ kind: "user", user }))];
  const result = conjureFileMentions.filterConjureFileCandidates(conjureStoredAttachments, text);
  const substr1 = result.slice(0, 8);
  HermesBuiltin.arraySpread(
    substr1.map((file) => ({ kind: "file", file })),
    tmp,
  );
  return items;
}
export { splitConjureMentions };
export function useRequestConjureMentionedUsers(text) {
  _require = text;
  items = [text];
  const memo = noop.useMemo(() => {
    const obj = splitConjureMentions(closure_0);
    items = [
      ...new Set(
        splitConjureMentions(closure_0).flatMap((kind) => {
          if ("mention" === kind.kind) {
            items = [kind.userId];
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
}
export function withConjureMentionNames(body) {
  const f104604 = (arg0) => user.getUser(arg0);
  const f104605 = (arg0) => attachment.getAttachment(arg0);
  return body.replace(closure_6, (arg0, arg1, arg2) => {
    if (null == arg1) {
      let str2 = arg2;
      if (arg2 == null) {
        str2 = "";
      }
      const tmp7Result = f130279(str2);
      let name;
      if (tmp7Result != null) {
        name = tmp7Result.name;
      }
      if (name == null) {
        const intl = closure_0(1113).intl;
        name = intl.string(_modDef4028.ff9Q4C);
      }
      const _HermesInternal2 = HermesInternal;
      return "@" + name;
    } else {
      let combined = arg0;
      const tmp3 = f130278(arg1);
      if (null != tmp3) {
        const _HermesInternal = HermesInternal;
        combined = "@" + closure_0(5196).getName(tmp3);
        const obj = closure_0(5196);
      }
      return combined;
    }
  });
}
export function useConjureMentionNames(trimmed) {
  _require = trimmed;
  items = [UserStore, ConjureStoredAttachmentStore];
  const items1 = [trimmed];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const f130278 = (arg0) => user.getUser(arg0);
      const f130279 = (arg0) => attachment.getAttachment(arg0);
      return trimmed.replace(re6, (arg0, arg1, arg2) => {
        if (null == arg1) {
          let str2 = arg2;
          if (arg2 == null) {
            str2 = "";
          }
          const tmp7Result = f130279(str2);
          let name;
          if (tmp7Result != null) {
            name = tmp7Result.name;
          }
          if (name == null) {
            const intl = closure_0(1113).intl;
            name = intl.string(_modDef4028.ff9Q4C);
          }
          const _HermesInternal2 = HermesInternal;
          return "@" + name;
        } else {
          let combined = arg0;
          const tmp3 = f130278(arg1);
          if (null != tmp3) {
            const _HermesInternal = HermesInternal;
            combined = "@" + closure_0(5196).getName(tmp3);
            const obj = closure_0(5196);
          }
          return combined;
        }
      });
    },
    items1,
  );
}
