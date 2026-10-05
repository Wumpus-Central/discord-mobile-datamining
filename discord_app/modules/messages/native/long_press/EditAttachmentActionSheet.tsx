// === Module 11304: EditAttachmentActionSheet ===

// Module 11304 (EditAttachmentActionSheet)
import Constants from "Constants" /* 1085 */;
import intl7 from "intl" /* 1126 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import MessageConstants from "MessageConstants" /* 4883 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import TableCheckboxRow2 from "TableCheckboxRow" /* 5990 */;
import TextArea2 from "TextArea" /* 6580 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6644 */;
import ActionSheet2 from "ActionSheet" /* 6701 */;
import useBottomSheetRef from "useBottomSheetRef" /* 7841 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import MessageStore from "MessageStore" /* 5110 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c3, dependencyMap, id;

let c10;
let c9;
let closure_7 = MessageConstants.LEGACY_SPOILER_ATTACHMENT_PREFIX;
let MessageAttachmentFlags = Constants.MessageAttachmentFlags;
({ jsx: c9, jsxs: c10 } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let bottomSheetClose;
  let bottomSheetRef;
  let closure_8;
  let first1;
  let first2;
  let items;
  let tmp25;
  let tmp5;
  let tmp8;
  const tmp = message;
  let obj = message(bottomSheetClose[8]);
  const cResult = obj.c(44);
  message = message.message;
  const attachment = message.attachment;
  let obj2 = message(bottomSheetClose[9]);
  const bottomSheetRef1 = obj2.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  if (cResult[0] !== attachment) {
    const tmp7 = attachment(bottomSheetClose[10])(attachment);
    cResult[0] = attachment;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== attachment.filename) {
    const filename = attachment.filename;
    const startsWithResult = filename.startsWith(closure_7);
    cResult[2] = attachment.filename;
    cResult[3] = startsWithResult;
    tmp8 = startsWithResult;
  } else {
    tmp8 = cResult[3];
  }
  let obj3 = first2;
  let str = attachment.description;
  const useState = first2.useState;
  if (str == null) {
    str = "";
  }
  const value = first1(useState(str), 2)[0];
  const tmp12 = first1(useState(str), 2);
  if (cResult[4] === attachment.flags) {
    let tmp15;
    let tmp27;
    let tmp29;
    if (cResult[5] === tmp8) {
      tmp15 = cResult[6];
    }
    const tmp11Result = first1(obj3.useState(tmp15), 2);
    first1 = tmp11Result[0];
    const tmp21 = tmp11Result[1];
    const tmp11Result3 = first1(obj3.useState(false), 2);
    first2 = tmp11Result3[0];
    let closure_6 = tmp11Result3[1];
    [tmp25, closure_7] = first1(obj3.useState(), 2);
    const _Symbol = Symbol;
    first1(obj3.useState(), 2);
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(bottomSheetClose[12]).intl;
      let stringResult = intl.string(tmp(bottomSheetClose[12]).t.Y8ujqr);
      cResult[7] = stringResult;
      tmp27 = stringResult;
    } else {
      tmp27 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function z() {
        const intl = intl7.intl;
        const stringResult = intl.string(intl7.t.fEptJP);
        closure_7(stringResult);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(stringResult);
      };
      cResult[8] = fn;
      tmp29 = fn;
    } else {
      tmp29 = cResult[8];
    }
    MessageAttachmentFlags = tmp29;
    if (cResult[9] === attachment.id) {
      if (cResult[10] === bottomSheetClose) {
        if (cResult[11] === value) {
          if (cResult[12] === message) {
            if (cResult[13] === first1) {
              let tmp30;
              let tmp32;
              let tmp34;
              let tmp37;
              let tmp41;
              let tmp40;
              if (cResult[14] === first2) {
                tmp30 = cResult[15];
              }
              const _Symbol3 = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = tmp(bottomSheetClose[12]).intl;
                const stringResult1 = intl2.string(tmp(bottomSheetClose[12]).t.Xvtztt);
                cResult[16] = stringResult1;
                tmp32 = stringResult1;
              } else {
                tmp32 = cResult[16];
              }
              const _Symbol4 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                let obj4 = { title: tmp27 };
                const tmp36 = closure_9(tmp(bottomSheetClose[15]).BottomSheetTitleHeader, obj4);
                cResult[17] = tmp36;
                tmp34 = tmp36;
              } else {
                tmp34 = cResult[17];
              }
              if (cResult[18] !== tmp5) {
                let obj5 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 2, children: tmp5 };
                const tmp39 = closure_9(tmp(bottomSheetClose[16]).Text, obj5);
                cResult[18] = tmp5;
                cResult[19] = tmp39;
                tmp37 = tmp39;
              } else {
                tmp37 = cResult[19];
              }
              const _Symbol5 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(bottomSheetClose[12]).intl;
                const stringResult2 = intl3.string(tmp(bottomSheetClose[12]).t.eOB2eR);
                const intl4 = tmp(bottomSheetClose[12]).intl;
                const stringResult3 = intl4.string(tmp(bottomSheetClose[12]).t.RNH1jn);
                cResult[20] = stringResult2;
                cResult[21] = stringResult3;
                tmp41 = stringResult3;
                tmp40 = stringResult2;
              } else {
                tmp40 = cResult[20];
                tmp41 = cResult[21];
              }
              if (cResult[22] === value) {
                let tmp44;
                let tmp47;
                if (cResult[23] === first2) {
                  tmp44 = cResult[24];
                }
                const _Symbol6 = Symbol;
                if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl5 = tmp(bottomSheetClose[12]).intl;
                  const stringResult4 = intl5.string(tmp(bottomSheetClose[12]).t["gsI+xC"]);
                  cResult[25] = stringResult4;
                  tmp47 = stringResult4;
                } else {
                  tmp47 = cResult[25];
                }
                if (cResult[26] === first1) {
                  let tmp50;
                  let tmp53;
                  let tmp56;
                  if (cResult[27] === (first2 || tmp8)) {
                    tmp50 = cResult[28];
                  }
                  if (cResult[29] !== tmp25) {
                    let tmp54 = null;
                    if (null != tmp25) {
                      const obj6 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp25 };
                      tmp54 = closure_9(tmp(bottomSheetClose[16]).Text, obj6);
                    }
                    cResult[29] = tmp25;
                    cResult[30] = tmp54;
                    tmp53 = tmp54;
                  } else {
                    tmp53 = cResult[30];
                  }
                  const _Symbol7 = Symbol;
                  if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl6 = tmp(bottomSheetClose[12]).intl;
                    const stringResult5 = intl6.string(tmp(bottomSheetClose[12]).t["TY+auE"]);
                    cResult[31] = stringResult5;
                    tmp56 = stringResult5;
                  } else {
                    tmp56 = cResult[31];
                  }
                  if (cResult[32] === tmp30) {
                    let tmp58;
                    if (cResult[33] === first2) {
                      tmp58 = cResult[34];
                    }
                    if (cResult[35] === tmp44) {
                      if (cResult[36] === tmp50) {
                        if (cResult[37] === tmp53) {
                          if (cResult[38] === tmp58) {
                            let tmp61;
                            if (cResult[39] === tmp37) {
                              tmp61 = cResult[40];
                            }
                            if (cResult[41] === bottomSheetRef) {
                              let tmp65;
                              if (cResult[42] === tmp61) {
                                tmp65 = cResult[43];
                              }
                              return tmp65;
                            }
                            const _HermesInternal = HermesInternal;
                            const obj7 = { ref: bottomSheetRef, startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: "" + tmp32 + ": " + tmp27, header: tmp34, children: tmp61 };
                            const ActionSheet = tmp(bottomSheetClose[22]).ActionSheet;
                            const tmp67 = closure_9(ActionSheet, obj7);
                            cResult[41] = bottomSheetRef;
                            cResult[42] = tmp61;
                            cResult[43] = tmp67;
                            tmp65 = tmp67;
                          }
                        }
                      }
                    }
                    const obj8 = { spacing: attachment(bottomSheetClose[21]).space.PX_16, children: items };
                    const Stack = tmp(bottomSheetClose[20]).Stack;
                    items = [tmp37, tmp44, tmp50, tmp53, tmp58];
                    const tmp64 = closure_10(Stack, obj8);
                    cResult[35] = tmp44;
                    cResult[36] = tmp50;
                    cResult[37] = tmp53;
                    cResult[38] = tmp58;
                    cResult[39] = tmp37;
                    cResult[40] = tmp64;
                    tmp61 = tmp64;
                  }
                  const obj9 = { variant: "primary", text: tmp56, onPress: tmp30, loading: first2, disabled: first2 };
                  const tmp60 = closure_9(tmp(bottomSheetClose[19]).Button, obj9);
                  cResult[32] = tmp30;
                  cResult[33] = first2;
                  cResult[34] = tmp60;
                  tmp58 = tmp60;
                }
                const obj10 = { start: true, end: true, label: tmp47, checked: first1, onPress: tmp21, disabled: first2 || tmp8 };
                const tmp52 = closure_9(tmp(bottomSheetClose[18]).TableCheckboxRow, obj10);
                cResult[26] = first1;
                cResult[27] = first2 || tmp8;
                cResult[28] = tmp52;
                tmp50 = tmp52;
              }
              const obj11 = { label: tmp40, placeholder: tmp41, value, onChange: tmp14, disabled: first2 };
              const tmp46 = closure_9(tmp(bottomSheetClose[17]).TextArea, obj11);
              cResult[22] = value;
              cResult[23] = first2;
              cResult[24] = tmp46;
              tmp44 = tmp46;
            }
          }
        }
      }
    }
    let closure_0 = value(function*() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let v0;
        try {
          c3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (!first2) {
              message = message.getMessage(tmp.channel_id, tmp.id);
              if (null != message) {
                const attachments = message.attachments;
                if (attachments.some((id) => id.id === user.id)) {
                  const attachments1 = message.attachments;
                  const mapped = attachments1.map((id) => {
                    let obj;
                    id = id.id;
                    if (id === user.id) {
                      obj = { id, description, is_spoiler };
                      const obj2 = { id, description, is_spoiler };
                    } else {
                      obj = { id };
                    }
                    return obj;
                  });
                  message(true);
                  closure_1_7(undefined);
                  v0 = 1;
                  let obj2 = attachment(bottomSheetClose[14]);
                  c1 = 2;
                  c3 = 1;
                  const obj5 = { value: obj2.patchMessageAttachments(message.channel_id, message.id, mapped), done: false };
                  return obj5;
                }
              }
              closure_1_8();
            }
          } else if (1 === tmp4) {
            v0 = 0;
            closure_1_8();
            message(false);
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            v0();
            v0 = 0;
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp25) {
          if (0 === v0) {
            c3 = 3;
            throw tmp25;
          } else {
            c1 = 1;
          }
        }
      }
    });
    function handleSave() {
      return closure_0(...arguments);
    }
    cResult[9] = attachment.id;
    cResult[10] = bottomSheetClose;
    cResult[11] = value;
    cResult[12] = message;
    cResult[13] = first1;
    cResult[14] = first2;
    cResult[15] = handleSave;
    tmp30 = handleSave;
  }
  let hasFlagResult = tmp8;
  if (!hasFlagResult) {
    let num5 = attachment.flags;
    const hasFlag = tmp(bottomSheetClose[11]).hasFlag;
    tmp(bottomSheetClose[11]);
    if (num5 == null) {
      num5 = 0;
    }
    hasFlagResult = hasFlag(num5, MessageAttachmentFlags.IS_SPOILER);
  }
  cResult[4] = attachment.flags;
  cResult[5] = tmp8;
  cResult[6] = hasFlagResult;
  tmp15 = hasFlagResult;
}) : ((arg0) => {
  let Stack;
  let _undefined;
  let attachment;
  let bottomSheetRef;
  let c2;
  let c7;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let obj4;
  let tmp20;
  ({ message: require, attachment } = arg0);
  dependencyMap = undefined;
  let value;
  let first1;
  let first2;
  let closure_6;
  c7 = undefined;
  function showError() {
    const intl = intl7.intl;
    const stringResult = intl.string(intl7.t.fEptJP);
    _undefined(stringResult);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(stringResult);
  }
  let obj = function _handleSave2() {
    obj = _asyncToGenerator(async () => {
      let message;
      let v1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_0 = tmp;
              if (!first2) {
                message = message.getMessage(require.channel_id, require.id);
                if (null != message) {
                  const attachments = message.attachments;
                  if (attachments.some((id) => id.id === user.id)) {
                    const attachments1 = message.attachments;
                    const mapped = attachments1.map((id) => {
                      id = id.id;
                      if (id === user.id) {
                        obj = { id, description, is_spoiler };
                        const obj2 = { id, description, is_spoiler };
                      } else {
                        obj = { id };
                      }
                      return obj;
                    });
                    closure_2_6(true);
                    _undefined(undefined);
                    c2 = 1;
                    let obj2 = v1(c2[14]);
                    v1 = 2;
                    c3 = 1;
                    const obj5 = { value: obj2.patchMessageAttachments(message.channel_id, message.id, mapped), done: false };
                    return obj5;
                  }
                }
                showError();
              }
            }
          } else if (1 === tmp4) {
            c2 = 0;
            closure_128_8();
            closure_128_6(false);
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_2();
            c2 = 0;
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp25) {
          if (0 === c2) {
            c3 = 3;
            throw tmp25;
          } else {
            v1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = useBottomSheetRef;
  const bottomSheetRef1 = obj.useBottomSheetRef();
  ({ bottomSheetClose: c2, bottomSheetRef } = bottomSheetRef1);
  const filename = attachment.filename;
  const tmp5 = attachment(7940)(attachment);
  const startsWithResult = filename.startsWith(c7);
  let obj2 = first2;
  let str = attachment.description;
  const useState = first2.useState;
  if (str == null) {
    str = "";
  }
  const tmp8 = first1(useState(str), 2);
  value = tmp8[0];
  let hasFlagResult = startsWithResult;
  const useState2 = obj2.useState;
  const tmp10 = tmp8[1];
  if (!startsWithResult) {
    let num = attachment.flags;
    const hasFlag = FlagUtils.hasFlag;
    FlagUtils;
    if (num == null) {
      num = 0;
    }
    hasFlagResult = hasFlag(num, showError.IS_SPOILER);
  }
  const tmp7Result = first1(useState2(hasFlagResult), 2);
  first1 = tmp7Result[0];
  const tmp16 = tmp7Result[1];
  const tmp7Result3 = first1(obj2.useState(false), 2);
  first2 = tmp7Result3[0];
  closure_6 = tmp7Result3[1];
  [tmp20, c7] = first1(obj2.useState(), 2);
  first1(obj2.useState(), 2);
  let intl = intl7.intl;
  let stringResult = intl.string(intl7.t.Y8ujqr);
  let obj3 = { ref: bottomSheetRef, startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: "" + intl2.string(intl7.t.Xvtztt) + ": " + stringResult, header: obj(BottomSheetTitleHeader2.BottomSheetTitleHeader, { title: stringResult }), children: closure_10(Stack, obj4) };
  const ActionSheet = ActionSheet2.ActionSheet;
  intl2 = intl7.intl;
  obj4 = { spacing: attachment(587).space.PX_16, children: items };
  Stack = Stack_Stack.Stack;
  items = [obj(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", lineClamp: 2, children: tmp5 }), , , , ];
  let obj5 = { label: intl3.string(intl7.t.eOB2eR), placeholder: intl4.string(intl7.t.RNH1jn), value, onChange: tmp10, disabled: first2 };
  const TextArea = TextArea2.TextArea;
  intl3 = intl7.intl;
  intl4 = intl7.intl;
  items[1] = obj(TextArea, obj5);
  const obj6 = { start: true, end: true, label: intl5.string(intl7.t["gsI+xC"]), checked: first1, onPress: tmp16, disabled: first2 || startsWithResult };
  const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
  intl5 = intl7.intl;
  items[2] = obj(TableCheckboxRow, obj6);
  let tmp22Result = null;
  if (null != tmp20) {
    const obj7 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp20 };
    tmp22Result = tmp22(Text_Text.Text, obj7);
  }
  items[3] = tmp22Result;
  const obj8 = {
    variant: "primary",
    text: intl6.string(intl7.t["TY+auE"]),
    onPress: function handleSave() {
      return obj(...arguments);
    },
    loading: first2,
    disabled: first2
  };
  const Button = components_Button_Button.Button;
  intl6 = intl7.intl;
  items[4] = obj(Button, obj8);
  return obj(ActionSheet, obj3);
});
const result = size.fileFinishedImporting("modules/messages/native/long_press/EditAttachmentActionSheet.tsx");

export default tmp3;