// === Module 12010: EditAttachmentActionSheet ===

// Module 12010 (EditAttachmentActionSheet)
import util from "util" /* 1115 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4534 */;
import Text_Text from "Text/Text" /* 4823 */;
import Stack_Stack from "Stack/Stack" /* 5269 */;
import components_Button_Button from "components/Button/Button" /* 5271 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5907 */;
import TextArea from "TextArea" /* 7416 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7480 */;
import ActionSheet from "ActionSheet" /* 7528 */;
import useBottomSheetRef from "useBottomSheetRef" /* 8514 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MessageStore from "MessageStore" /* 5047 */;

require = fn;
let closure_7 = fn(4820).LEGACY_SPOILER_ATTACHMENT_PREFIX;
const MessageAttachmentFlags = fn(1074).MessageAttachmentFlags;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/long_press/EditAttachmentActionSheet.tsx");

export default function EditAttachmentActionSheet(arg0) {
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
  closure_9 = async function _handleSave(BottomSheetTitleHeader) {
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
        return { value: "HermesInternal", done: null };
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
                  const obj5 = { value: v2(_undefined[12]).patchMessageAttachments(message.channel_id, message.id, mapped), done: false };
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
  const tmp5 = attachment(8612)(attachment);
  [tmp17, c7] = first1(first2.useState(), 2);
  let intl = util.intl;
  let stringResult = intl.string(util.t.Y8ujqr);
  let obj3 = { ref: bottomSheetRef, startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: null, header: null, children: null };
  const intl2 = util.intl;
  obj3.dismissAccessibilityLabel = "" + intl2.string(util.t.Xvtztt) + ": " + stringResult;
  obj3.header = closure_9(BottomSheetTitleHeader2.BottomSheetTitleHeader, { title: stringResult });
  let obj4 = { spacing: attachment(576).space.PX_16, children: null };
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
};