// === Module 12609: ConjureMentionText ===

// Module 12609 (ConjureMentionText)
import UserUtils from "UserUtils" /* 5063 */;
import ConjureFileMentionDefault from "ConjureFileMention" /* 12450 */;
import conjureMentions from "conjureMentions" /* 12599 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 12606 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
function ConjureUserMention(userId) {
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
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMentionText.tsx");

export default function ConjureMentionText(text) {
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
        text = hasOwnProperty(ConjureUserMention, obj, "" + index + "-" + kind.userId);
      }
      return text;
    })
  });
};