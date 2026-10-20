// === Module 12220: ConjureMentionText ===

// Module 12220 (ConjureMentionText)
import UserUtils from "UserUtils" /* 4994 */;
import conjureMentions from "conjureMentions" /* 12209 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 12216 */;
import ConjureFileMentionDefault from "ConjureFileMention" /* 12221 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1392 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureUserMention(userId) {
  const cResult = userId(576).c(7);
  userId = userId.userId;
  const variant = userId.variant;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function o() {
      return UserUtils.getName(UserStore.getUser(userId));
    };
    const items1 = [userId];
    cResult[1] = userId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = userId(576);
  let stateFromStores = userId(504).useStateFromStores(first, tmp6, tmp7);
  if (stateFromStores == null) {
    stateFromStores = userId;
  }
  const combined = "@" + stateFromStores;
  if (cResult[4] === combined) {
    if (cResult[5] === variant) {
      let tmp10 = cResult[6];
    }
    return tmp10;
  }
  const tmp11 = closure_5(ConjureSelectedMentionDefault, { label: combined, variant });
  cResult[4] = combined;
  cResult[5] = variant;
  cResult[6] = tmp11;
  tmp10 = tmp11;
  const tmpResult = userId(504);
}) : (function ConjureUserMention(userId) {
  userId = userId.userId;
  const items = [UserStore];
  const items1 = [userId];
  let stateFromStores = userId(504).useStateFromStores(items, () => UserUtils.getName(UserStore.getUser(userId)), items1);
  const obj = userId(504);
  if (stateFromStores == null) {
    stateFromStores = userId;
  }
  const tmp3 = ConjureSelectedMentionDefault;
  return closure_5(tmp3, { label: "@" + stateFromStores, variant: userId.variant });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMentionText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureMentionText(arg0) {
  const cResult = variant(576).c(9);
  ({ text, variant } = arg0);
  let obj = variant(576);
  const requestConjureMentionedUsers = variant(12209).useRequestConjureMentionedUsers(text);
  if (cResult[0] !== text) {
    const splitConjureMentionsResult = variant(12209).splitConjureMentions(text);
    cResult[0] = text;
    cResult[1] = splitConjureMentionsResult;
    let arr = splitConjureMentionsResult;
    const tmpResult = variant(12209);
  } else {
    arr = cResult[1];
  }
  if (cResult[2] === arr) {
    if (cResult[3] === variant) {
      if (cResult[7] !== cResult[4]) {
        const obj3 = { children: tmp6 };
        const tmp12 = closure_5(closure_6, obj3);
        cResult[7] = tmp6;
        cResult[8] = tmp12;
        let tmp9 = tmp12;
      } else {
        tmp9 = cResult[8];
      }
      return tmp9;
    }
  }
  if (cResult[5] !== variant) {
    const fn = function j(kind, arg1) {
      if ("text" === kind.kind) {
        let text = kind.text;
      } else if ("file" === kind.kind) {
        const obj2 = { attachmentId: kind.attachmentId, variant };
        const _HermesInternal2 = HermesInternal;
        text = hasOwnProperty(ConjureFileMentionDefault, obj2, "" + arg1 + "-" + kind.attachmentId);
      } else {
        const obj = { userId: kind.userId, variant };
        const _HermesInternal = HermesInternal;
        text = hasOwnProperty(closure_7, obj, "" + arg1 + "-" + kind.userId);
      }
      return text;
    };
    cResult[5] = variant;
    cResult[6] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[6];
  }
  const mapped = arr.map(tmp7);
  cResult[2] = arr;
  cResult[3] = variant;
  cResult[4] = mapped;
  let obj2 = variant(12209);
}) : (function ConjureMentionText(text) {
  text = text.text;
  require = text;
  const variant = text.variant;
  const requestConjureMentionedUsers = conjureMentions.useRequestConjureMentionedUsers(text);
  const items = [text];
  const memo = noop.useMemo(() => conjureMentions.splitConjureMentions(text), items);
  return closure_5(closure_6, {
    children: memo.map((kind, index) => {
      if ("text" === kind.kind) {
        text = kind.text;
      } else if ("file" === kind.kind) {
        const obj2 = { attachmentId: kind.attachmentId, variant };
        const _HermesInternal2 = HermesInternal;
        text = hasOwnProperty(ConjureFileMentionDefault, obj2, "" + index + "-" + kind.attachmentId);
      } else {
        const obj = { userId: kind.userId, variant };
        const _HermesInternal = HermesInternal;
        text = hasOwnProperty(closure_7, obj, "" + index + "-" + kind.userId);
      }
      return text;
    })
  });
});