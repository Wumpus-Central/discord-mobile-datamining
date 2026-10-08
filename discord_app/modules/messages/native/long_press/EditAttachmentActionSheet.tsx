// === Module 12807: EditAttachmentActionSheet ===

// Module 12807 (EditAttachmentActionSheet)
import util from "util" /* 1126 */;
import FlagUtils from "FlagUtils" /* 1402 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4788 */;
import Text_Text from "Text/Text" /* 5086 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import TableCheckboxRow from "TableCheckboxRow" /* 6181 */;
import TextArea from "TextArea" /* 6763 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6828 */;
import ActionSheet from "ActionSheet" /* 6885 */;
import useBottomSheetRef from "useBottomSheetRef" /* 8270 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MessageStore from "MessageStore" /* 5428 */;

const require = globalThis.__r;

require = fn;
let closure_7 = fn(5083).LEGACY_SPOILER_ATTACHMENT_PREFIX;
let MessageAttachmentFlags = fn(1085).MessageAttachmentFlags;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/long_press/EditAttachmentActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EditAttachmentActionSheet(message) {
  const cResult = require("c").c(44);
  message = message.message;
  _require = message;
  const attachment = message.attachment;
  let obj = require("c");
  const bottomSheetRef1 = require("useBottomSheetRef").useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  if (cResult[0] !== attachment) {
    const tmp7 = attachment(bottomSheetClose[10])(attachment);
    cResult[0] = attachment;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== attachment.filename) {
    const filename = attachment.filename;
    const startsWithResult = filename.startsWith(closure_7);
    cResult[2] = attachment.filename;
    cResult[3] = startsWithResult;
    let tmp8 = startsWithResult;
  } else {
    tmp8 = cResult[3];
  }
  let str = attachment.description;
  if (str == null) {
    str = "";
  }
  let obj2 = require("useBottomSheetRef");
  value = first1(first2.useState(str), 2)[0];
  if (cResult[4] === attachment.flags) {
    if (cResult[5] === tmp8) {
      let tmp15 = cResult[6];
    }
    const tmp11Result = tmp11(obj3.useState(tmp15), 2);
    first1 = tmp11Result[0];
    const tmp11Result3 = tmp11(obj3.useState(false), 2);
    first2 = tmp11Result3[0];
    closure_6 = tmp11Result3[1];
    [tmp23, closure_7] = tmp11(obj3.useState(), 2);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(bottomSheetClose[12]).intl;
      let stringResult = intl.string(tmp(bottomSheetClose[12]).t.Y8ujqr);
      cResult[7] = stringResult;
      let tmp25 = stringResult;
    } else {
      tmp25 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      function showError() {
        const intl = util.intl;
        const stringResult = intl.string(util.t.fEptJP);
        closure_1_7(stringResult);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(stringResult);
      }
      cResult[8] = showError;
      let tmp27 = showError;
    } else {
      tmp27 = cResult[8];
    }
    MessageAttachmentFlags = tmp27;
    if (cResult[9] === attachment.id) {
      if (cResult[10] === bottomSheetClose) {
        if (cResult[11] === value) {
          if (cResult[12] === message) {
            if (cResult[13] === first1) {
              if (cResult[14] === first2) {
                let tmp28 = cResult[15];
              }
              const _Symbol3 = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = tmp(bottomSheetClose[12]).intl;
                const stringResult1 = intl2.string(tmp(bottomSheetClose[12]).t.Xvtztt);
                cResult[16] = stringResult1;
                let tmp30 = stringResult1;
              } else {
                tmp30 = cResult[16];
              }
              const _Symbol4 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                let obj4 = { title: tmp25 };
                const tmp34 = closure_9(tmp(bottomSheetClose[15]).BottomSheetTitleHeader, obj4);
                cResult[17] = tmp34;
                let tmp32 = tmp34;
              } else {
                tmp32 = cResult[17];
              }
              if (cResult[18] !== tmp5) {
                let obj5 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 2, children: tmp5 };
                const tmp37 = closure_9(tmp(bottomSheetClose[16]).Text, obj5);
                cResult[18] = tmp5;
                cResult[19] = tmp37;
                let tmp35 = tmp37;
              } else {
                tmp35 = cResult[19];
              }
              const _Symbol5 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(bottomSheetClose[12]).intl;
                const stringResult2 = intl3.string(tmp(bottomSheetClose[12]).t.eOB2eR);
                const intl4 = tmp(bottomSheetClose[12]).intl;
                const stringResult3 = intl4.string(tmp(bottomSheetClose[12]).t.RNH1jn);
                cResult[20] = stringResult2;
                cResult[21] = stringResult3;
                let tmp39 = stringResult3;
                let tmp38 = stringResult2;
              } else {
                tmp38 = cResult[20];
                tmp39 = cResult[21];
              }
              if (cResult[22] === value) {
                if (cResult[23] === first2) {
                  let tmp42 = cResult[24];
                }
                const _Symbol6 = Symbol;
                if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl5 = tmp(bottomSheetClose[12]).intl;
                  const stringResult4 = intl5.string(tmp(bottomSheetClose[12]).t["gsI+xC"]);
                  cResult[25] = stringResult4;
                  let tmp45 = stringResult4;
                } else {
                  tmp45 = cResult[25];
                }
                let tmp47 = first2;
                if (!first2) {
                  tmp47 = tmp8;
                }
                if (cResult[26] === first1) {
                  if (cResult[27] === tmp47) {
                    let tmp48 = cResult[28];
                  }
                  if (cResult[29] !== tmp23) {
                    let tmp52 = null;
                    if (null != tmp23) {
                      const obj6 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp23 };
                      tmp52 = closure_9(tmp(bottomSheetClose[16]).Text, obj6);
                    }
                    cResult[29] = tmp23;
                    cResult[30] = tmp52;
                    let tmp51 = tmp52;
                  } else {
                    tmp51 = cResult[30];
                  }
                  const _Symbol7 = Symbol;
                  if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl6 = tmp(bottomSheetClose[12]).intl;
                    const stringResult5 = intl6.string(tmp(bottomSheetClose[12]).t["TY+auE"]);
                    cResult[31] = stringResult5;
                    let tmp54 = stringResult5;
                  } else {
                    tmp54 = cResult[31];
                  }
                  if (cResult[32] === tmp28) {
                    if (cResult[33] === first2) {
                      let tmp56 = cResult[34];
                    }
                    if (cResult[35] === tmp42) {
                      if (cResult[36] === tmp48) {
                        if (cResult[37] === tmp51) {
                          if (cResult[38] === tmp56) {
                            if (cResult[39] === tmp35) {
                              let tmp59 = cResult[40];
                            }
                            if (cResult[41] === bottomSheetRef) {
                              if (cResult[42] === tmp59) {
                                let tmp63 = cResult[43];
                              }
                              return tmp63;
                            }
                            const obj7 = { ref: bottomSheetRef, startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: null, header: null, children: null };
                            const _HermesInternal = HermesInternal;
                            obj7.dismissAccessibilityLabel = "" + tmp30 + ": " + tmp25;
                            obj7.header = tmp32;
                            obj7.children = tmp59;
                            const tmp65 = closure_9(tmp(bottomSheetClose[22]).ActionSheet, obj7);
                            cResult[41] = bottomSheetRef;
                            cResult[42] = tmp59;
                            cResult[43] = tmp65;
                            tmp63 = tmp65;
                          }
                        }
                      }
                    }
                    const obj8 = { spacing: attachment(bottomSheetClose[21]).space.PX_16, children: null };
                    const items = [tmp35, tmp42, tmp48, tmp51, tmp56];
                    obj8.children = items;
                    const tmp62 = closure_10(tmp(bottomSheetClose[20]).Stack, obj8);
                    cResult[35] = tmp42;
                    cResult[36] = tmp48;
                    cResult[37] = tmp51;
                    cResult[38] = tmp56;
                    cResult[39] = tmp35;
                    cResult[40] = tmp62;
                    tmp59 = tmp62;
                  }
                  const obj9 = { variant: "primary", text: tmp54, onPress: tmp28, loading: first2, disabled: first2 };
                  const tmp58 = closure_9(tmp(bottomSheetClose[19]).Button, obj9);
                  cResult[32] = tmp28;
                  cResult[33] = first2;
                  cResult[34] = tmp58;
                  tmp56 = tmp58;
                }
                const obj10 = { start: true, end: true, label: tmp45, checked: first1, onPress: tmp11Result[1], disabled: tmp47 };
                const tmp50 = closure_9(tmp(bottomSheetClose[18]).TableCheckboxRow, obj10);
                cResult[26] = first1;
                cResult[27] = tmp47;
                cResult[28] = tmp50;
                tmp48 = tmp50;
              }
              const obj11 = { label: tmp38, placeholder: tmp39, value, onChange: tmp14, disabled: first2 };
              const tmp44 = closure_9(tmp(bottomSheetClose[17]).TextArea, obj11);
              cResult[22] = value;
              cResult[23] = first2;
              cResult[24] = tmp44;
              tmp42 = tmp44;
            }
          }
        }
      }
    }
    _require = value(function*() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          if (0 === c1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (!first2) {
              message = message.getMessage(tmp3.channel_id, tmp3.id);
              if (null != message) {
                const attachments = message.attachments;
                if (attachments.some((id) => id.id === user.id)) {
                  const attachments1 = message.attachments;
                  const mapped = attachments1.map((id) => {
                    id = id.id;
                    if (id === user.id) {
                      const obj2 = { id, description, is_spoiler };
                      let obj = obj2;
                    } else {
                      obj = { id };
                    }
                    return obj;
                  });
                  message(true);
                  closure_1_7(undefined);
                  let v0 = 1;
                  c1 = 2;
                  c3 = 1;
                  const obj5 = { value: attachment(bottomSheetClose[14]).patchMessageAttachments(message.channel_id, message.id, mapped), done: false };
                  return obj5;
                }
              }
              closure_1_8();
            }
          } else {
            if (1 === tmp7) {
              v0 = 0;
              closure_1_8();
              message(false);
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              v0();
              v0 = 0;
            }
            v0 = 0;
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          }
          c3 = 3;
        } catch (tmp28) {
          if (tmp4 === v0) {
            c3 = tmp2;
            throw tmp28;
          } else {
            c1 = tmp;
          }
        }
      }
    });
    function handleSave() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[9] = attachment.id;
    cResult[10] = bottomSheetClose;
    cResult[11] = value;
    cResult[12] = message;
    cResult[13] = first1;
    cResult[14] = first2;
    cResult[15] = handleSave;
    tmp28 = handleSave;
    const tmp11Result4 = tmp11(obj3.useState(), 2);
  }
  let hasFlagResult = tmp8;
  if (!tmp8) {
    let num5 = attachment.flags;
    if (num5 == null) {
      num5 = 0;
    }
    hasFlagResult = tmp(bottomSheetClose[11]).hasFlag(num5, MessageAttachmentFlags.IS_SPOILER);
    const tmpResult = tmp(bottomSheetClose[11]);
  }
  cResult[4] = attachment.flags;
  cResult[5] = tmp8;
  cResult[6] = hasFlagResult;
  tmp15 = hasFlagResult;
  const tmp12 = first1(first2.useState(str), 2);
}) : (function EditAttachmentActionSheet(arg0) {
  ({ message: require, attachment } = arg0);
  dependencyMap = undefined;
  value = undefined;
  let first1;
  let first2;
  closure_6 = undefined;
  c7 = undefined;
  function showError() {
    const intl = util.intl;
    const stringResult = intl.string(util.t.fEptJP);
    _undefined(stringResult);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(stringResult);
  }
  closure_9 = async function _handleSave2(BottomSheetTitleHeader) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (BottomSheetTitleHeader === 1) {
        throw value;
      } else if (BottomSheetTitleHeader === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === v2) {
          if (BottomSheetTitleHeader === 1) {
            c3 = 3;
            throw value;
          } else if (BottomSheetTitleHeader === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp3;
            if (!first2) {
              message = message.getMessage(_require.channel_id, _require.id);
              if (null != message) {
                const attachments = message.attachments;
                if (attachments.some((id) => id.id === user.id)) {
                  const attachments1 = message.attachments;
                  const mapped = attachments1.map((id) => {
                    id = id.id;
                    if (id === user.id) {
                      const obj2 = { id, description, is_spoiler };
                      let obj = obj2;
                    } else {
                      obj = { id };
                    }
                    return obj;
                  });
                  MessageStore(true);
                  _undefined(undefined);
                  _undefined = 1;
                  v2 = 2;
                  c3 = 1;
                  const obj5 = { value: v2(_undefined[14]).patchMessageAttachments(message.channel_id, message.id, mapped), done: false };
                  return obj5;
                }
              }
              showError();
            }
          }
        } else {
          if (1 === tmp7) {
            _undefined = 0;
            closure_128_8();
            closure_128_6(false);
          } else if (BottomSheetTitleHeader === 1) {
            c3 = 3;
            throw value;
          } else if (BottomSheetTitleHeader !== 2) {
            closure_128_2();
            _undefined = 0;
          }
          _undefined = 0;
          c3 = 3;
          let obj = { value, done: true };
          return obj;
        }
        c3 = 3;
      } catch (tmp28) {
        if (tmp4 === _undefined) {
          c3 = tmp2;
          throw tmp28;
        } else {
          v2 = tmp;
        }
      }
    }
  };
  const bottomSheetRef1 = useBottomSheetRef.useBottomSheetRef();
  ({ bottomSheetClose: c2, bottomSheetRef } = bottomSheetRef1);
  const filename = attachment.filename;
  const startsWithResult = filename.startsWith(c7);
  let str = attachment.description;
  if (str == null) {
    str = "";
  }
  const tmp8 = first1(first2.useState(str), 2);
  value = tmp8[0];
  let hasFlagResult = startsWithResult;
  if (!startsWithResult) {
    let num = attachment.flags;
    if (num == null) {
      num = 0;
    }
    hasFlagResult = FlagUtils.hasFlag(num, showError.IS_SPOILER);
    const tmpResult = FlagUtils;
  }
  const tmp7Result = first1(first2.useState(hasFlagResult), 2);
  first1 = tmp7Result[0];
  const tmp7Result3 = first1(first2.useState(false), 2);
  first2 = tmp7Result3[0];
  closure_6 = tmp7Result3[1];
  const tmp5 = attachment(8369)(attachment);
  [tmp17, c7] = first1(first2.useState(), 2);
  let intl = util.intl;
  let stringResult = intl.string(util.t.Y8ujqr);
  let obj3 = { ref: bottomSheetRef, startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: null, header: null, children: null };
  const intl2 = util.intl;
  obj3.dismissAccessibilityLabel = "" + intl2.string(util.t.Xvtztt) + ": " + stringResult;
  obj3.header = closure_9(BottomSheetTitleHeader2.BottomSheetTitleHeader, { title: stringResult });
  let obj4 = { spacing: attachment(587).space.PX_16, children: null };
  const items = [closure_9(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", lineClamp: 2, children: tmp5 }), , , , ];
  let obj5 = { label: null, placeholder: null, value: null, onChange: null, disabled: null };
  const intl3 = util.intl;
  obj5.label = intl3.string(util.t.eOB2eR);
  const intl4 = util.intl;
  obj5.placeholder = intl4.string(util.t.RNH1jn);
  obj5.value = value;
  obj5.onChange = tmp8[1];
  obj5.disabled = first2;
  items[1] = closure_9(TextArea.TextArea, obj5);
  const obj6 = { start: true, end: true, label: null, checked: null, onPress: null, disabled: null };
  const intl5 = util.intl;
  obj6.label = intl5.string(util.t["gsI+xC"]);
  obj6.checked = first1;
  obj6.onPress = tmp7Result[1];
  let tmp21 = first2;
  if (!first2) {
    tmp21 = startsWithResult;
  }
  obj6.disabled = tmp21;
  items[2] = closure_9(TableCheckboxRow.TableCheckboxRow, obj6);
  let tmp19Result = null;
  if (null != tmp17) {
    const obj7 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp17 };
    tmp19Result = tmp19(Text_Text.Text, obj7);
  }
  items[3] = tmp19Result;
  const obj8 = { variant: "primary", text: null, onPress: null, loading: null, disabled: null };
  const intl6 = util.intl;
  obj8.text = intl6.string(util.t["TY+auE"]);
  obj8.onPress = function handleSave() {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj8.loading = first2;
  obj8.disabled = first2;
  items[4] = closure_9(components_Button_Button.Button, obj8);
  obj4.children = items;
  obj3.children = closure_10(Stack_Stack.Stack, obj4);
  return closure_9(ActionSheet.ActionSheet, obj3);
});