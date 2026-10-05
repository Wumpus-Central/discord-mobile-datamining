// === Module 16656: ConjureRepliedMessage ===

// Module 16656 (ConjureRepliedMessage)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import _modDef3723 from "module_3723" /* 3723 */;
import UserUtils from "UserUtils" /* 4722 */;
import Text_Text from "Text/Text" /* 4886 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 16544 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 16654 */;
import ConjureMessageAuthor from "ConjureMessageAuthor" /* 16657 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 16661 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const diff = ConjureNativeStatusLine.MESSAGE_EDGE_INSET + ConjureNativeStatusLine.MESSAGE_AVATAR_SIZE / 2 - 1;
const diff1 = ConjureNativeStatusLine.MESSAGE_CONTENT_INSET - 4 - diff;
let createStyles = createStyles_mod;
let obj = { root: obj2, spine: rect, avatar: { marginRight: 4 }, name: { flexShrink: 0, marginRight: 4, maxWidth: "40%" }, content: { flex: 1 } };
obj2 = { marginLeft: diff - ConjureNativeStatusLine.MESSAGE_CONTENT_INSET, paddingLeft: diff1 + 4, height: 20, flexDirection: "row", alignItems: "flex-start" };
createStyles = createStyles.createStyles;
rect = { position: "absolute", left: 0, top: 9, bottom: 0, width: diff1, borderTopWidth: 2, borderLeftWidth: 2, borderColor: nativeDefault.colors.SPINE_DEFAULT, borderTopLeftRadius: Math.round(0.25 * diff1) };
let closure_8 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let ConjureUserAvatar;
  let items;
  let items1;
  let obj10;
  let onJump;
  let replied;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(40);
  ({ replied, onJump } = arg0);
  const tmp4 = closure_8();
  const obj2 = ConjureMessageAuthor;
  const messageAuthorUser = obj2.useMessageAuthorUser(replied.userId);
  const obj3 = UserUtils;
  let str = obj3.useName(messageAuthorUser);
  if (str == null) {
    str = "";
  }
  if (cResult[0] !== replied.content) {
    const tmpResult = ConjureDesignFeedback;
    const result = tmpResult.parseConjureDesignRemark(replied.content);
    cResult[0] = replied.content;
    cResult[1] = result;
    tmp6 = result;
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
        let tmp9;
        let tmp10;
        let tmp11;
        let tmp12;
        let tmp13;
        let str2;
        let tmp14;
        let tmp18;
        if (cResult[5] === body) {
          tmp9 = cResult[6];
          tmp10 = cResult[7];
          tmp11 = cResult[8];
          tmp12 = cResult[9];
          tmp13 = cResult[10];
          str2 = cResult[11];
          tmp14 = cResult[12];
        }
        if (cResult[13] !== tmp4.spine) {
          const obj4 = { style: tmp4.spine };
          const tmp21 = metroRequire(hasOwnProperty, obj4);
          cResult[13] = tmp4.spine;
          cResult[14] = tmp21;
          tmp18 = tmp21;
        } else {
          tmp18 = cResult[14];
        }
        if (cResult[15] === replied.userId) {
          if (cResult[16] === tmp4.avatar) {
            let tmp22;
            if (cResult[17] === messageAuthorUser) {
              tmp22 = cResult[18];
            }
            if (cResult[19] === str) {
              let tmp26;
              let tmp29;
              if (cResult[20] === tmp4.name) {
                tmp26 = cResult[21];
              }
              if (cResult[22] !== tmp6) {
                let tmp30 = null;
                if (null != tmp6) {
                  const obj5 = { label: tmp6.label, variant: "text-xs/medium" };
                  tmp30 = metroRequire(ConjureSelectedMentionDefault, obj5);
                }
                cResult[22] = tmp6;
                cResult[23] = tmp30;
                tmp29 = tmp30;
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
                    let tmp33;
                    if (cResult[27] === str4) {
                      tmp33 = cResult[28];
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
                                      let tmp36;
                                      if (cResult[38] === tmp22) {
                                        tmp36 = cResult[39];
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
                    const obj6 = { style: tmp11, onPress: tmp12, disabled: tmp13, accessibilityRole: str2, accessibilityLabel: tmp14, children: items };
                    items = [tmp18, tmp22, tmp26, tmp33];
                    const tmp38 = metroImportDefault(tmp9, obj6);
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
              const obj7 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp4.content, lineClamp: 1, children: items1 };
              items1 = [tmp29, str4, tmp10];
              const tmp35 = metroImportDefault(Text_Text.Text, obj7);
              cResult[24] = tmp10;
              cResult[25] = tmp4.content;
              cResult[26] = tmp29;
              cResult[27] = str4;
              cResult[28] = tmp35;
              tmp33 = tmp35;
            }
            const obj8 = { variant: "text-xs/semibold", color: "text-default", style: tmp4.name, lineClamp: 1, children: str };
            const tmp28 = metroRequire(Text_Text.Text, obj8);
            cResult[19] = str;
            cResult[20] = tmp4.name;
            cResult[21] = tmp28;
            tmp26 = tmp28;
          }
        }
        let tmp23 = null;
        if (null != messageAuthorUser) {
          const obj9 = { style: tmp4.avatar, children: metroRequire(ConjureUserAvatar, obj10) };
          obj10 = { userId: replied.userId, size: native.AvatarSizes.SIZE_16 };
          ConjureUserAvatar = ConjureMessageAuthor.ConjureUserAvatar;
          tmp23 = metroRequire(hasOwnProperty, obj9);
        }
        cResult[15] = replied.userId;
        cResult[16] = tmp4.avatar;
        cResult[17] = messageAuthorUser;
        cResult[18] = tmp23;
        tmp22 = tmp23;
      }
    }
  }
  const str3 = body.replace(/\s+/g, " ");
  const trimmed = str3.trim();
  const root = tmp4.root;
  const intl = intl2.intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3723.K0046m, { name: str, content: trimmed });
  cResult[2] = str;
  cResult[3] = onJump;
  cResult[4] = tmp4.root;
  cResult[5] = body;
  cResult[6] = React3;
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
  tmp9 = React3;
}) : ((replied) => {
  let ConjureUserAvatar;
  let intl;
  let items1;
  let items2;
  let obj6;
  replied = replied.replied;
  const onJump = replied.onJump;
  const tmp = closure_8();
  let obj = replied(16657);
  const messageAuthorUser = obj.useMessageAuthorUser(replied.userId);
  const obj2 = replied(4722);
  let str = obj2.useName(messageAuthorUser);
  if (str == null) {
    str = "";
  }
  const items = [replied.content];
  const memo = react.useMemo(() => {
    const obj = ConjureDesignFeedback;
    return obj.parseConjureDesignRemark(replied.content);
  }, items);
  let body;
  if (memo != null) {
    body = memo.body;
  }
  if (body == null) {
    body = replied.content;
  }
  const str2 = body.replace(/\s+/g, " ");
  const trimmed = str2.trim();
  const obj3 = { style: tmp.root, onPress: onJump, disabled: null == onJump, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(_modDef3723.K0046m, { name: str, content: trimmed }), children: items1 };
  intl = tmp2(1126).intl;
  items1 = [, , , ];
  const obj4 = { style: tmp.spine };
  items1[0] = closure_6(closure_5, obj4);
  let tmp11Result = null;
  if (null != messageAuthorUser) {
    const obj5 = { style: tmp.avatar, children: closure_6(ConjureUserAvatar, obj6) };
    obj6 = { userId: replied.userId, size: replied(1188).AvatarSizes.SIZE_16 };
    ConjureUserAvatar = tmp2(16657).ConjureUserAvatar;
    tmp11Result = closure_6(closure_5, obj5);
  }
  items1[1] = tmp11Result;
  const obj7 = { variant: "text-xs/semibold", color: "text-default", style: tmp.name, lineClamp: 1, children: str };
  items1[2] = closure_6(replied(4886).Text, obj7);
  let tmp11Result2 = null;
  const obj8 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp.content, lineClamp: 1, children: items2 };
  const Text = tmp2(4886).Text;
  if (null != memo) {
    const obj9 = { label: memo.label, variant: "text-xs/medium" };
    tmp11Result2 = closure_6(ConjureSelectedMentionDefault, obj9);
  }
  items2 = [tmp11Result2, , ];
  let str3 = null;
  if (null != memo) {
    str3 = null;
    if ("" !== trimmed) {
      str3 = " ";
    }
  }
  items2[1] = str3;
  items2[2] = trimmed;
  items1[3] = closure_7(Text, obj8);
  return closure_7(closure_4, obj3);
});
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureRepliedMessage.tsx");

export default tmp7;
export const REPLY_PREVIEW_HEIGHT = 20;