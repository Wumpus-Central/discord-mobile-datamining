// === Module 12192: chat/ConjureRepliedMessage ===

// Module 12192 (chat/ConjureRepliedMessage)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import native from "native" /* 1202 */;
import _modDef3820 from "module_3820" /* 3820 */;
import UserUtils from "UserUtils" /* 4994 */;
import Text_Text from "Text/Text" /* 5195 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 11709 */;
import conjureMessageAuthors from "conjureMessageAuthors" /* 12193 */;
import conjureMentions from "conjureMentions" /* 12194 */;
import ConjureMessageAuthor from "ConjureMessageAuthor" /* 12196 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 12201 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const diff = fn(12182).MESSAGE_EDGE_INSET + fn(12182).MESSAGE_AVATAR_SIZE / 2 - 1;
const diff1 = fn(12182).MESSAGE_CONTENT_INSET - 4 - diff;
const createStyles = fn(4945);
let obj2 = { root: { marginLeft: diff - fn(12182).MESSAGE_CONTENT_INSET, paddingLeft: diff1 + 4, height: 20, flexDirection: "row", alignItems: "flex-start" }, spine: null, avatar: null, name: null, content: null };
const rect = { position: "absolute", left: 0, top: 9, bottom: 0, width: diff1, borderTopWidth: 2, borderLeftWidth: 2, borderColor: nativeDefault.colors.SPINE_DEFAULT, borderTopLeftRadius: Math.round(0.25 * diff1) };
obj2.spine = rect;
obj2.avatar = { marginRight: 4 };
obj2.name = { flexShrink: 0, marginRight: 4, maxWidth: "40%" };
obj2.content = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginLeft: diff - fn(12182).MESSAGE_CONTENT_INSET, paddingLeft: diff1 + 4, height: 20, flexDirection: "row", alignItems: "flex-start" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureRepliedMessage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRepliedMessage(arg0) {
  const cResult = c.c(32);
  ({ replied, onJump } = arg0);
  const tmp4 = closure_8();
  const messageAuthorUser = conjureMessageAuthors.useMessageAuthorUser(replied.userId);
  let str = UserUtils.useName(messageAuthorUser);
  if (str == null) {
    str = "";
  }
  if (cResult[0] !== replied.content) {
    const result = ConjureDesignFeedback.parseConjureDesignRemark(replied.content);
    cResult[0] = replied.content;
    cResult[1] = result;
    let tmp6 = result;
    const tmpResult = ConjureDesignFeedback;
  } else {
    tmp6 = cResult[1];
  }
  let body;
  if (tmp6 != null) {
    body = tmp6.body;
  }
  if (body == null) {
    body = replied.content;
  }
  if (cResult[2] !== body) {
    const trimmed = body.replace(/\s+/g, " ").trim();
    cResult[2] = body;
    cResult[3] = trimmed;
    let tmp9 = trimmed;
    const str3 = body.replace(/\s+/g, " ");
  } else {
    tmp9 = cResult[3];
  }
  const conjureMentionNames = conjureMentions.useConjureMentionNames(tmp9);
  if (cResult[4] === conjureMentionNames) {
    if (cResult[5] === str) {
      let tmp14 = cResult[6];
    }
    if (cResult[7] !== tmp4.spine) {
      const obj4 = { style: tmp4.spine };
      const tmp19 = timestampProducer(hasOwnProperty, obj4);
      cResult[7] = tmp4.spine;
      cResult[8] = tmp19;
      let tmp16 = tmp19;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] === replied.userId) {
      if (cResult[10] === tmp4.avatar) {
        if (cResult[11] === messageAuthorUser) {
          let tmp20 = cResult[12];
        }
        if (cResult[13] === str) {
          if (cResult[14] === tmp4.name) {
            let tmp24 = cResult[15];
          }
          if (cResult[16] !== tmp6) {
            let tmp28 = null;
            if (null != tmp6) {
              const obj5 = { label: tmp6.label, variant: "text-xs/medium" };
              tmp28 = timestampProducer(ConjureSelectedMentionDefault, obj5);
            }
            cResult[16] = tmp6;
            cResult[17] = tmp28;
            let tmp27 = tmp28;
          } else {
            tmp27 = cResult[17];
          }
          let str4 = null;
          if (null != tmp6) {
            str4 = null;
            if ("" !== conjureMentionNames) {
              str4 = " ";
            }
          }
          if (cResult[18] === conjureMentionNames) {
            if (cResult[19] === tmp4.content) {
              if (cResult[20] === tmp27) {
                if (cResult[21] === str4) {
                  let tmp31 = cResult[22];
                }
                if (cResult[23] === onJump) {
                  if (cResult[24] === tmp4.root) {
                    if (cResult[25] === tmp31) {
                      if (cResult[26] === tmp13) {
                        if (cResult[27] === tmp14) {
                          if (cResult[28] === tmp16) {
                            if (cResult[29] === tmp20) {
                              if (cResult[30] === tmp24) {
                                let tmp34 = cResult[31];
                              }
                              return tmp34;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                const obj6 = { style: tmp12, onPress: onJump, disabled: tmp13, accessibilityRole: "button", accessibilityLabel: tmp14, children: null };
                const items = [tmp16, tmp20, tmp24, tmp31];
                obj6.children = items;
                const tmp37 = React5(React4, obj6);
                cResult[23] = onJump;
                cResult[24] = tmp4.root;
                cResult[25] = tmp31;
                cResult[26] = tmp13;
                cResult[27] = tmp14;
                cResult[28] = tmp16;
                cResult[29] = tmp20;
                cResult[30] = tmp24;
                cResult[31] = tmp37;
                tmp34 = tmp37;
              }
            }
          }
          const obj7 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp4.content, lineClamp: 1, children: null };
          const items1 = [tmp27, str4, conjureMentionNames];
          obj7.children = items1;
          const tmp33 = React5(Text_Text.Text, obj7);
          cResult[18] = conjureMentionNames;
          cResult[19] = tmp4.content;
          cResult[20] = tmp27;
          cResult[21] = str4;
          cResult[22] = tmp33;
          tmp31 = tmp33;
        }
        const obj8 = { variant: "text-xs/semibold", color: "text-default", style: tmp4.name, lineClamp: 1, children: str };
        const tmp26 = timestampProducer(Text_Text.Text, obj8);
        cResult[13] = str;
        cResult[14] = tmp4.name;
        cResult[15] = tmp26;
        tmp24 = tmp26;
      }
    }
    let tmp21 = null;
    if (null != messageAuthorUser) {
      const obj9 = { style: tmp4.avatar, children: null };
      const obj10 = { userId: replied.userId, size: native.AvatarSizes.SIZE_16 };
      obj9.children = timestampProducer(ConjureMessageAuthor.ConjureUserAvatar, obj10);
      tmp21 = timestampProducer(hasOwnProperty, obj9);
    }
    cResult[9] = replied.userId;
    cResult[10] = tmp4.avatar;
    cResult[11] = messageAuthorUser;
    cResult[12] = tmp21;
    tmp20 = tmp21;
  }
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3820.K0046m, { name: str, content: conjureMentionNames });
  cResult[4] = conjureMentionNames;
  cResult[5] = str;
  cResult[6] = formatToPlainStringResult;
  tmp14 = formatToPlainStringResult;
  const tmpResult2 = conjureMentions;
}) : (function ConjureRepliedMessage(replied) {
  replied = replied.replied;
  const onJump = replied.onJump;
  const tmp = closure_8();
  const messageAuthorUser = replied(12193).useMessageAuthorUser(replied.userId);
  const obj = replied(12193);
  let str = replied(4994).useName(messageAuthorUser);
  if (str == null) {
    str = "";
  }
  const items = [replied.content];
  const memo = noop.useMemo(() => ConjureDesignFeedback.parseConjureDesignRemark(replied.content), items);
  const obj2 = replied(4994);
  let body;
  if (memo != null) {
    body = memo.body;
  }
  if (body == null) {
    body = replied.content;
  }
  const tmp2Result = replied(12194);
  const conjureMentionNames = tmp2Result.useConjureMentionNames(body.replace(/\s+/g, " ").trim());
  const obj3 = { style: tmp.root, onPress: onJump, disabled: null == onJump, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = tmp2(1128).intl;
  obj3.accessibilityLabel = intl.formatToPlainString(_modDef3820.K0046m, { name: str, content: conjureMentionNames });
  const items1 = [closure_6(closure_5, { style: tmp.spine }), , , ];
  let tmp11Result = null;
  if (null != messageAuthorUser) {
    const obj5 = { style: tmp.avatar, children: null };
    const obj6 = { userId: replied.userId, size: tmp2(1202).AvatarSizes.SIZE_16 };
    obj5.children = closure_6(tmp2(12196).ConjureUserAvatar, obj6);
    tmp11Result = closure_6(closure_5, obj5);
  }
  items1[1] = tmp11Result;
  items1[2] = closure_6(replied(5195).Text, { variant: "text-xs/semibold", color: "text-default", style: tmp.name, lineClamp: 1, children: str });
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
  items1[3] = closure_7(replied(5195).Text, obj8);
  obj3.children = items1;
  return closure_7(closure_4, obj3);
});
export const REPLY_PREVIEW_HEIGHT = 20;