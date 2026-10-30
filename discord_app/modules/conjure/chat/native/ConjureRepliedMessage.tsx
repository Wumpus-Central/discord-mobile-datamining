// === Module 12597: chat/ConjureRepliedMessage ===

// Module 12597 (chat/ConjureRepliedMessage)
import nativeDefault from "native" /* 575 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 12054 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 12606 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const diff = fn(12587).MESSAGE_EDGE_INSET + fn(12587).MESSAGE_AVATAR_SIZE / 2 - 1;
const diff1 = fn(12587).MESSAGE_CONTENT_INSET - 4 - diff;
const createStyles = fn(5009);
let obj2 = { root: { marginLeft: diff - fn(12587).MESSAGE_CONTENT_INSET, paddingLeft: diff1 + 4, height: 20, flexDirection: "row", alignItems: "flex-start" }, spine: null, avatar: null, name: null, content: null };
const rect = { position: "absolute", left: 0, top: 9, bottom: 0, width: diff1, borderTopWidth: 2, borderLeftWidth: 2, borderColor: nativeDefault.colors.SPINE_DEFAULT, borderTopLeftRadius: Math.round(0.25 * diff1) };
obj2.spine = rect;
obj2.avatar = { marginRight: 4 };
obj2.name = { flexShrink: 0, marginRight: 4, maxWidth: "40%" };
obj2.content = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureRepliedMessage.tsx");

export default function ConjureRepliedMessage(replied) {
  replied = replied.replied;
  const onJump = replied.onJump;
  const tmp = closure_8();
  const messageAuthorUser = replied(12598).useMessageAuthorUser(replied.userId);
  const obj = replied(12598);
  let str = replied(5063).useName(messageAuthorUser);
  if (str == null) {
    str = "";
  }
  const items = [replied.content];
  const memo = noop.useMemo(() => ConjureDesignFeedback.parseConjureDesignRemark(replied.content), items);
  const obj2 = replied(5063);
  let body;
  if (memo != null) {
    body = memo.body;
  }
  if (body == null) {
    body = replied.content;
  }
  const tmp2Result = replied(12599);
  const conjureMentionNames = tmp2Result.useConjureMentionNames(body.replace(/\s+/g, " ").trim());
  const obj3 = { style: tmp.root, onPress: onJump, disabled: null == onJump, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = tmp2(1114).intl;
  obj3.accessibilityLabel = intl.formatToPlainString(_modDef3865.K0046m, { name: str, content: conjureMentionNames });
  const items1 = [closure_6(closure_5, { style: tmp.spine }), , , ];
  let tmp11Result = null;
  if (null != messageAuthorUser) {
    const obj5 = { style: tmp.avatar, children: null };
    const obj6 = { userId: replied.userId, size: tmp2(1188).AvatarSizes.SIZE_16 };
    obj5.children = closure_6(tmp2(12600).ConjureUserAvatar, obj6);
    tmp11Result = closure_6(closure_5, obj5);
  }
  items1[1] = tmp11Result;
  items1[2] = closure_6(replied(5619).Text, { variant: "text-xs/semibold", color: "text-default", style: tmp.name, lineClamp: 1, children: str });
  const obj8 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp.content, lineClamp: 1, children: null };
  let tmp11Result2 = null;
  if (null != memo) {
    const obj9 = { label: memo.label, variant: "text-xs/medium" };
    tmp11Result2 = closure_6(ConjureSelectedMentionDefault, obj9);
  }
  const items2 = [tmp11Result2, , ];
  let str3 = null;
  if (null != memo) {
    str3 = null;
    if ("" !== conjureMentionNames) {
      str3 = " ";
    }
  }
  items2[1] = str3;
  items2[2] = conjureMentionNames;
  obj8.children = items2;
  items1[3] = closure_7(replied(5619).Text, obj8);
  obj3.children = items1;
  return closure_7(closure_4, obj3);
};
export const REPLY_PREVIEW_HEIGHT = 20;