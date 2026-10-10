// discord_app/modules/conjure/chat/native/ConjureRepliedMessage.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import _modDef3849 from "../../intl/ConjureUntranslated.messages.js";
import UserUtils from "../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ConjureDesignFeedback from "../../design_feedback/ConjureDesignFeedback.tsx";
import ConjureMessageAuthor from "ConjureMessageAuthor.tsx";
import ConjureSelectedMentionDefault from "ConjureSelectedMention.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const diff = fn(17131).MESSAGE_EDGE_INSET + fn(17131).MESSAGE_AVATAR_SIZE / 2 - 1;
const diff1 = fn(17131).MESSAGE_CONTENT_INSET - 4 - diff;
const createStyles = fn(5092);
let obj2 = {
  root: {
    marginLeft: diff - fn(17131).MESSAGE_CONTENT_INSET,
    paddingLeft: diff1 + 4,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  spine: null,
  avatar: null,
  name: null,
  content: null,
};
const rect = {
  position: "absolute",
  left: 0,
  top: 9,
  bottom: 0,
  width: diff1,
  borderTopWidth: 2,
  borderLeftWidth: 2,
  borderColor: nativeDefault.colors.SPINE_DEFAULT,
  borderTopLeftRadius: Math.round(0.25 * diff1),
};
obj2.spine = rect;
obj2.avatar = { marginRight: 4 };
obj2.name = { flexShrink: 0, marginRight: 4, maxWidth: "40%" };
obj2.content = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  marginLeft: diff - fn(17131).MESSAGE_CONTENT_INSET,
  paddingLeft: diff1 + 4,
  height: 20,
  flexDirection: "row",
  alignItems: "flex-start",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureRepliedMessage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureRepliedMessage(arg0) {
      const cResult = c.c(40);
      ({ replied, onJump } = arg0);
      const tmp4 = closure_8();
      const messageAuthorUser = ConjureMessageAuthor.useMessageAuthorUser(replied.userId);
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
      if (cResult[2] === str) {
        if (cResult[3] === onJump) {
          if (cResult[4] === tmp4.root) {
            if (cResult[5] === body) {
              let tmp9 = cResult[6];
              let tmp10 = cResult[7];
              let tmp11 = cResult[8];
              let tmp12 = cResult[9];
              let tmp13 = cResult[10];
              let str2 = cResult[11];
              let tmp14 = cResult[12];
            }
            if (cResult[13] !== tmp4.spine) {
              const obj4 = { style: tmp4.spine };
              const tmp21 = timestampProducer(hasOwnProperty, obj4);
              cResult[13] = tmp4.spine;
              cResult[14] = tmp21;
              let tmp18 = tmp21;
            } else {
              tmp18 = cResult[14];
            }
            if (cResult[15] === replied.userId) {
              if (cResult[16] === tmp4.avatar) {
                if (cResult[17] === messageAuthorUser) {
                  let tmp22 = cResult[18];
                }
                if (cResult[19] === str) {
                  if (cResult[20] === tmp4.name) {
                    let tmp26 = cResult[21];
                  }
                  if (cResult[22] !== tmp6) {
                    let tmp30 = null;
                    if (null != tmp6) {
                      const obj5 = { label: tmp6.label, variant: "text-xs/medium" };
                      tmp30 = timestampProducer(ConjureSelectedMentionDefault, obj5);
                    }
                    cResult[22] = tmp6;
                    cResult[23] = tmp30;
                    let tmp29 = tmp30;
                  } else {
                    tmp29 = cResult[23];
                  }
                  let str4 = null;
                  if (null != tmp6) {
                    str4 = null;
                    if ("" !== tmp10) {
                      str4 = " ";
                    }
                  }
                  if (cResult[24] === tmp10) {
                    if (cResult[25] === tmp4.content) {
                      if (cResult[26] === tmp29) {
                        if (cResult[27] === str4) {
                          let tmp33 = cResult[28];
                        }
                        if (cResult[29] === tmp9) {
                          if (cResult[30] === tmp26) {
                            if (cResult[31] === tmp33) {
                              if (cResult[32] === tmp11) {
                                if (cResult[33] === tmp12) {
                                  if (cResult[34] === tmp13) {
                                    if (cResult[35] === str2) {
                                      if (cResult[36] === tmp14) {
                                        if (cResult[37] === tmp18) {
                                          if (cResult[38] === tmp22) {
                                            let tmp36 = cResult[39];
                                          }
                                          return tmp36;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj6 = {
                          style: tmp11,
                          onPress: tmp12,
                          disabled: tmp13,
                          accessibilityRole: str2,
                          accessibilityLabel: tmp14,
                          children: null,
                        };
                        const items = [tmp18, tmp22, tmp26, tmp33];
                        obj6.children = items;
                        const tmp38 = React5(tmp9, obj6);
                        cResult[29] = tmp9;
                        cResult[30] = tmp26;
                        cResult[31] = tmp33;
                        cResult[32] = tmp11;
                        cResult[33] = tmp12;
                        cResult[34] = tmp13;
                        cResult[35] = str2;
                        cResult[36] = tmp14;
                        cResult[37] = tmp18;
                        cResult[38] = tmp22;
                        cResult[39] = tmp38;
                        tmp36 = tmp38;
                      }
                    }
                  }
                  const obj7 = {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    style: tmp4.content,
                    lineClamp: 1,
                    children: null,
                  };
                  const items1 = [tmp29, str4, tmp10];
                  obj7.children = items1;
                  const tmp35 = React5(Text_Text.Text, obj7);
                  cResult[24] = tmp10;
                  cResult[25] = tmp4.content;
                  cResult[26] = tmp29;
                  cResult[27] = str4;
                  cResult[28] = tmp35;
                  tmp33 = tmp35;
                }
                const obj8 = {
                  variant: "text-xs/semibold",
                  color: "text-default",
                  style: tmp4.name,
                  lineClamp: 1,
                  children: str,
                };
                const tmp28 = timestampProducer(Text_Text.Text, obj8);
                cResult[19] = str;
                cResult[20] = tmp4.name;
                cResult[21] = tmp28;
                tmp26 = tmp28;
              }
            }
            let tmp23 = null;
            if (null != messageAuthorUser) {
              const obj9 = { style: tmp4.avatar, children: null };
              const obj10 = { userId: replied.userId, size: native.AvatarSizes.SIZE_16 };
              obj9.children = timestampProducer(ConjureMessageAuthor.ConjureUserAvatar, obj10);
              tmp23 = timestampProducer(hasOwnProperty, obj9);
            }
            cResult[15] = replied.userId;
            cResult[16] = tmp4.avatar;
            cResult[17] = messageAuthorUser;
            cResult[18] = tmp23;
            tmp22 = tmp23;
          }
        }
      }
      const trimmed = body.replace(/\s+/g, " ").trim();
      const root = tmp4.root;
      const intl = util.intl;
      const formatToPlainStringResult = intl.formatToPlainString(_modDef3849.K0046m, { name: str, content: trimmed });
      cResult[2] = str;
      cResult[3] = onJump;
      cResult[4] = tmp4.root;
      cResult[5] = body;
      cResult[6] = React4;
      cResult[7] = trimmed;
      cResult[8] = root;
      cResult[9] = onJump;
      cResult[10] = null == onJump;
      cResult[11] = "button";
      cResult[12] = formatToPlainStringResult;
      tmp14 = formatToPlainStringResult;
      str2 = "button";
      tmp13 = tmp16;
      tmp12 = onJump;
      tmp11 = root;
      tmp10 = trimmed;
      tmp9 = React4;
      const str3 = body.replace(/\s+/g, " ");
    }
  : function ConjureRepliedMessage(replied) {
      replied = replied.replied;
      const onJump = replied.onJump;
      const tmp = closure_8();
      const messageAuthorUser = replied(17134).useMessageAuthorUser(replied.userId);
      const obj = replied(17134);
      let str = replied(4962).useName(messageAuthorUser);
      if (str == null) {
        str = "";
      }
      const items = [replied.content];
      const memo = noop.useMemo(() => ConjureDesignFeedback.parseConjureDesignRemark(replied.content), items);
      let body;
      if (memo != null) {
        body = memo.body;
      }
      if (body == null) {
        body = replied.content;
      }
      const obj2 = replied(4962);
      const trimmed = body.replace(/\s+/g, " ").trim();
      const obj3 = {
        style: tmp.root,
        onPress: onJump,
        disabled: null == onJump,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      const intl = tmp2(1126).intl;
      obj3.accessibilityLabel = intl.formatToPlainString(_modDef3849.K0046m, { name: str, content: trimmed });
      const items1 = [closure_6(closure_5, { style: tmp.spine }), , ,];
      let tmp11Result = null;
      if (null != messageAuthorUser) {
        const obj5 = { style: tmp.avatar, children: null };
        const obj6 = { userId: replied.userId, size: tmp2(1200).AvatarSizes.SIZE_16 };
        obj5.children = closure_6(tmp2(17134).ConjureUserAvatar, obj6);
        tmp11Result = closure_6(closure_5, obj5);
      }
      items1[1] = tmp11Result;
      items1[2] = closure_6(replied(5088).Text, {
        variant: "text-xs/semibold",
        color: "text-default",
        style: tmp.name,
        lineClamp: 1,
        children: str,
      });
      const obj8 = {
        variant: "text-xs/medium",
        color: "interactive-text-default",
        style: tmp.content,
        lineClamp: 1,
        children: null,
      };
      let tmp11Result2 = null;
      if (null != memo) {
        const obj9 = { label: memo.label, variant: "text-xs/medium" };
        tmp11Result2 = closure_6(ConjureSelectedMentionDefault, obj9);
      }
      const items2 = [tmp11Result2, ,];
      let str3 = null;
      if (null != memo) {
        str3 = null;
        if ("" !== trimmed) {
          str3 = " ";
        }
      }
      items2[1] = str3;
      items2[2] = trimmed;
      obj8.children = items2;
      items1[3] = closure_7(replied(5088).Text, obj8);
      obj3.children = items1;
      return closure_7(closure_4, obj3);
    };
export const REPLY_PREVIEW_HEIGHT = 20;
