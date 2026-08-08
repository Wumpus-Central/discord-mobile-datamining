// discord_app/modules/polls/native/PollCreation.tsx
import importAllResult from "trackImpression";
import get_ActivityIndicator from "TableRowInner";
import POLL_ATTACHMENT_FOLDER from "POLL_ATTACHMENT_FOLDER";
import jsxProd from "useSafeAreaInsetsKeyboardAware";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "POLL_ATTACHMENT_FOLDER";
import { registerAsset } from "../../../../_runtime/11583_registerAsset.js";
import { getAlertModalItemKey } from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { TextInput } from "../../../design/components/TextInput/native/TextInput.native.tsx";
import { Button } from "../../../design/void/native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c10;
let c4;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function UnsavedChangesAlertModal(onConfirm) {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.HMrgcp);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["Wxa/j8"]);
  obj = { children: null };
  obj = { text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.TzJA4g);
  obj[1] = onConfirm.onConfirm;
  const items = [callback(getAlertModalItemKey.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = getSystemLocale.intl;
  obj1[1] = intl4.string(getSystemLocale.t["2BR5R2"]);
  items[1] = callback(getAlertModalItemKey.AlertActionButton, obj1, "back");
  obj[0] = items;
  obj[2] = callback2(closure_10, obj);
  return callback(getAlertModalItemKey.AlertModal, obj);
}
function AddAnswerButton(onPress) {
  const tmp = callback3();
  let obj = { source: null, size: null, color: null };
  obj[0] = registerAsset;
  obj[1] = Button.Icon.Sizes.LARGE;
  obj[2] = tmp.addAnswerIcon.color;
  obj = { onPress: onPress.onPress, style: tmp.addAnswerButtonDefault, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.B2Uvme);
  const items = [callback(Button.Icon, obj), ];
  obj = { variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.B2Uvme);
  items[1] = callback(Text.Text, obj);
  obj[4] = items;
  return callback2(closure_4, obj);
}
function PollDurationSelectionRow(selectedDuration) {
  selectedDuration = selectedDuration.selectedDuration;
  const onChange = selectedDuration.onChange;
  const tmp = onChange(11584)()[selectedDuration];
  let obj = { label: null, accessibilityLabel: null, accessibilityHint: null, onPress: null, trailing: null, arrow: true };
  const intl = selectedDuration(1236).intl;
  obj[0] = intl.string(selectedDuration(1236).t.bGHzxb);
  const intl2 = selectedDuration(1236).intl;
  obj[1] = "" + intl2.string(selectedDuration(1236).t.bGHzxb) + " " + tmp;
  const intl3 = selectedDuration(1236).intl;
  obj[2] = intl3.string(selectedDuration(1236).t.A4PJ1o);
  obj[3] = function onPress() {
    let obj = selectedDuration(outer1_2[18]);
    obj.dismissKeyboard();
    obj = { selectedDuration, onChange };
    onChange(outer1_2[14]).openLazy(selectedDuration(outer1_2[16])(outer1_2[15], outer1_2.paths), outer1_8, obj);
  };
  obj[4] = callback(selectedDuration(4299).Text, { variant: "text-md/normal", color: "text-muted", children: tmp });
  return callback(selectedDuration(5374).TableRow, obj);
}
let c3 = importAllResult;
({ TouchableOpacity: c4, View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ MAX_POLL_QUESTION_LENGTH: error, POLL_CREATION_DURATION_ACTION_SHEET_KEY: metroImportAll } = POLL_ATTACHMENT_FOLDER);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { viewPadding: { paddingHorizontal: 18 }, scrollContainer: { paddingVertical: 20, gap: 16 }, safeAreaContainer: null, header: null, actionButton: null, postButton: null, title: null, label: null, answerInputsContainer: null, addAnswerButtonDefault: null, addAnswerIcon: null, pollConfigSection: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
obj[2] = obj;
obj[3] = { flexDirection: "row", paddingHorizontal: 18, paddingVertical: 10 };
obj[4] = { flex: 0, justifyContent: "flex-start", minWidth: 48, paddingHorizontal: 0, marginHorizontal: 0 };
obj[5] = { justifyContent: "flex-end" };
obj[6] = { textAlign: "center", flexGrow: 1 };
obj[7] = { fontSize: 14 };
obj[8] = { marginVertical: 20, rowGap: 16 };
let num = 8;
if (set.isAndroid()) {
  num = 10;
}
createCacheKey = { paddingVertical: num, paddingLeft: 14, marginRight: 30, display: "flex", flexDirection: "row", gap: 16, alignItems: "center", justifyContent: "flex-start", backgroundColor: require("Themes").colors.MESSAGE_BACKGROUND_HOVER, borderRadius: require("Themes").radii.lg };
obj[9] = createCacheKey;
obj[10] = { color: require("Themes").colors.TEXT_MUTED };
let obj2 = { color: require("Themes").colors.TEXT_MUTED };
obj[11] = { borderTopWidth: 1, borderColor: require("Themes").colors.INTERACTIVE_BACKGROUND_HOVER };
let closure_12 = createCacheKey.createStyles(obj);
let closure_14 = importAllResult.forwardRef((error, ref) => {
  let onChange;
  let onSubmitEditing;
  error = error.error;
  let tmp = null != error;
  ({ onChange, onSubmitEditing } = error);
  if (tmp) {
    tmp = error.length > 0;
  }
  let obj = { ref, textAlignVertical: "center", label: null, accessibilityLabel: null, accessibilityHint: null, placeholder: null, onChange: null, isClearable: true, status: null, errorMessage: null, maxLength: null, returnKeyType: "next", blurOnSubmit: false, onSubmitEditing: null, textContentType: "none", autoFocus: true, autoCorrect: true };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.WBiKnI);
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.string(getSystemLocale.t.WBiKnI);
  let formatToPlainStringResult;
  if (tmp) {
    const intl3 = tmp3(1236).intl;
    obj = { errorMessage: null };
    obj[0] = error;
    formatToPlainStringResult = intl3.formatToPlainString(tmp3(1236).t.jnq5Ho, obj);
  }
  obj[4] = formatToPlainStringResult;
  const intl4 = tmp3(1236).intl;
  obj[5] = intl4.string(getSystemLocale.t["/uQqJW"]);
  obj[6] = onChange;
  let str = "default";
  if (tmp) {
    str = "error";
  }
  obj[8] = str;
  obj[9] = error;
  obj[10] = closure_7;
  obj[13] = onSubmitEditing;
  return closure_9(TextInput.TextInput, obj);
});
const result = set.fileFinishedImporting("modules/polls/native/PollCreation.tsx");

export default function PollCreation(channel) {
  let allowMultiSelect;
  let c11;
  let c12;
  let c4;
  let c6;
  let c7;
  let c8;
  let c9;
  let canAddMoreAnswers;
  let createPollError;
  let duration;
  let fieldErrors;
  let handleAddAnswer;
  let handleQuestionChange;
  let handleSubmitPoll;
  let setDuration;
  let shouldFocusOnInvalidField;
  let submitting;
  channel = channel.channel;
  const onCancel = channel.onCancel;
  let dependencyMap;
  let answers;
  c4 = undefined;
  allowMultiSelect = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  let callback;
  handleAddAnswer = undefined;
  let callback2;
  let callback3;
  fieldErrors = undefined;
  shouldFocusOnInvalidField = undefined;
  let setShouldFocusOnInvalidField;
  let closure_16;
  let obj4;
  function handleCancelClose() {
    callback();
    channel(11581).closeCreatePollModal();
    const AccessibilityAnnouncer = channel(4014).AccessibilityAnnouncer;
    const intl = channel(1236).intl;
    AccessibilityAnnouncer.announce(intl.string(channel(1236).t["+G3oRq"]));
  }
  let obj = { type: null, name: null };
  obj[0] = channel(503).ImpressionTypes.VIEW;
  obj[1] = channel(503).ImpressionNames.POLL_EDITOR_VIEWED;
  onCancel(9349)(obj);
  const items = [onCancel];
  const effect = answers.useEffect(() => () => {
    if (!ref.current) {
      if (closure_1 != null) {
        tmp();
      }
    }
  }, items);
  const tmp7 = callback3();
  const insets = onCancel(5369)({ includeKeyboardHeight: true }).insets;
  dependencyMap = answers.useRef(false);
  callback = answers.useCallback(() => {
    dependencyMap.current = true;
    let obj = channel(11581);
    obj.closeCreatePollModal();
    obj = { key: "POLL_CREATED_SUCCESS", IconComponent: channel(10011).PollsIcon, content: null };
    const intl = channel(1236).intl;
    obj[2] = intl.string(channel(1236).t.OPsckI);
    onCancel(4002).open(obj);
  }, []);
  const callback1 = answers.useCallback((indexToRemove) => {
    const AccessibilityAnnouncer = channel(4014).AccessibilityAnnouncer;
    const intl = channel(1236).intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(channel(1236).t.BByGU4, { number: indexToRemove.indexToRemove + 1 }));
  }, []);
  const tmp10 = onCancel(11586)(channel, callback, callback1);
  answers = tmp10.answers;
  ({ question: c4, allowMultiSelect } = tmp10);
  ({ setAllowMultiSelect: c6, canAddMoreAnswers, canRemoveMoreAnswers: c7, handleAnswerTextChange: c8, handleEmojiSelect: c9, handleAddAnswer } = tmp10);
  ({ handleRemoveAnswer: c11, handleRemoveAnswerImage: c12, fieldErrors } = tmp10);
  ({ createPollError, shouldFocusOnInvalidField } = tmp10);
  setShouldFocusOnInvalidField = tmp10.setShouldFocusOnInvalidField;
  ({ handleQuestionChange, handleSubmitPoll, duration, setDuration, submitting } = tmp10);
  let obj1 = channel(11591);
  closure_16 = obj1.useTrackPollCreationEvents(answers, allowMultiSelect).trackPollCreationCancelled;
  let obj2 = channel(5276);
  obj2.useNavigatorBackPressHandler(() => {
    let obj = channel(7220);
    if (obj.isPollCreationEmpty(c4, answers)) {
      callback();
      const AccessibilityAnnouncer = tmp(4014).AccessibilityAnnouncer;
      const intl = tmp(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(tmp(1236).t["+G3oRq"]));
      let flag = false;
    } else {
      obj = { onConfirm: null };
      obj[0] = handleCancelClose;
      tmp(4644).openAlert("poll-creation-unsaved-changes", _undefined2(fieldErrors, obj));
      flag = true;
      const tmpResult = tmp(4644);
    }
    return flag;
  });
  obj = {
    onAddAnswer(arg0) {
      handleAddAnswer();
    }
  };
  obj4 = onCancel(11592)(obj);
  const items1 = [fieldErrors, obj4, setShouldFocusOnInvalidField, shouldFocusOnInvalidField];
  const effect1 = answers.useEffect(() => {
    const keys = Object.keys(fieldErrors);
    if (keys.length > 0) {
      const intl = channel(1236).intl;
      const obj = { numOfErrors: null };
      obj[0] = keys.length;
      const AccessibilityAnnouncer = channel(4014).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(intl.formatToPlainString(channel(1236).t.w8e4qF, obj));
      if (shouldFocusOnInvalidField) {
        obj4.focus(keys[0]);
        setShouldFocusOnInvalidField(false);
      }
      const formatToPlainStringResult = intl.formatToPlainString(channel(1236).t.w8e4qF, obj);
    }
  }, items1);
  obj = { style: items2, children: null };
  items2 = [tmp7.safeAreaContainer, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  obj1 = { style: tmp7.header, children: null };
  obj2 = { accessibilityLabel: null, onPress: null, source: null, style: null };
  let intl = channel(1236).intl;
  obj2[0] = intl.string(channel(1236).t["ETE/oC"]);
  obj2[1] = function onPress() {
    let obj = channel(7220);
    if (obj.isPollCreationEmpty(c4, answers)) {
      callback();
      let tmpResult = tmp(11581);
      tmpResult.closeCreatePollModal();
      const AccessibilityAnnouncer = tmp(4014).AccessibilityAnnouncer;
      const intl = tmp(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(tmp(1236).t["+G3oRq"]));
    } else {
      tmpResult = tmp(4644);
      obj = { onConfirm: null };
      obj[0] = handleCancelClose;
      tmpResult.openAlert("poll-creation-unsaved-changes", _undefined2(fieldErrors, obj));
    }
  };
  obj2[2] = onCancel(5327);
  obj2[3] = tmp7.actionButton;
  const items3 = [callback(channel(6008).HeaderActionButton, obj2), , ];
  const obj3 = { accessibilityRole: "header", variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", style: tmp7.title, children: null };
  const intl2 = channel(1236).intl;
  obj3[4] = intl2.string(channel(1236).t.Flr51u);
  items3[1] = callback(channel(4299).Text, obj3);
  obj4 = { text: null, style: null, disabled: null, onPress: null };
  const intl3 = channel(1236).intl;
  obj4[0] = intl3.string(channel(1236).t.JOj8Zk);
  const items4 = [, ];
  ({ actionButton: arr6[0], postButton: arr6[1] } = tmp7);
  obj4[1] = items4;
  obj4[2] = submitting;
  obj4[3] = handleSubmitPoll;
  items3[2] = callback(channel(6008).HeaderActionButton, obj4);
  obj1[1] = items3;
  const items5 = [callback2(allowMultiSelect, obj1), , ];
  const obj5 = { style: tmp7.viewPadding, contentContainerStyle: tmp7.scrollContainer, keyboardShouldPersistTaps: "handled", children: null };
  let tmp13Result = null != createPollError;
  if (tmp13Result) {
    let anyErrorMessage;
    if (createPollError != null) {
      anyErrorMessage = createPollError.getAnyErrorMessage();
    }
    const obj6 = { children: null };
    obj6[0] = anyErrorMessage;
    tmp13Result = tmp13(onCancel(11593), obj6);
    let tmpResult = onCancel(11593);
  }
  const items6 = [tmp13Result, , ];
  const obj7 = { ref: obj4.refWithKey("question"), onChange: handleQuestionChange, onSubmitEditing: obj4.focusNext, error: null };
  let question;
  if (fieldErrors != null) {
    question = fieldErrors.question;
  }
  obj7[3] = question;
  items6[1] = callback(shouldFocusOnInvalidField, obj7);
  const obj8 = { style: tmp7.answerInputsContainer, children: null };
  const obj9 = { text: null, color: "text-subtle", style: null };
  const intl4 = tmp4(1236).intl;
  obj9[0] = intl4.string(channel(1236).t.oMBfeS);
  obj9[2] = tmp7.label;
  const items7 = [
    callback(channel(7967).FormLabel, obj9),
    answers.map((localCreationAnswerId) => {
      const obj = { inputRef: null, answer: null, index: null, channelId: null, onSubmitEditing: null, onAnswerTextChange: null, onAnswerEmojiSelect: null, onRemoveAnswer: null, onRemoveAnswerImage: null, canRemoveAnswer: null, error: null };
      obj[0] = obj4.refWithKey("answer-" + localCreationAnswerId.localCreationAnswerId);
      obj[1] = localCreationAnswerId;
      obj[2] = arg1;
      obj[3] = channel.id;
      obj[4] = obj4.focusNext;
      obj[5] = c8;
      obj[6] = c9;
      obj[7] = c11;
      obj[8] = c12;
      obj[9] = c7;
      let tmp4;
      if (fieldErrors != null) {
        const _HermesInternal = HermesInternal;
        tmp4 = tmp3["answer-" + localCreationAnswerId.localCreationAnswerId];
      }
      obj[10] = tmp4;
      return c9(onCancel(11595), obj, localCreationAnswerId.localCreationAnswerId);
    }),

  ];
  if (canAddMoreAnswers) {
    const obj10 = { onPress: null };
    obj10[0] = handleAddAnswer;
    canAddMoreAnswers = tmp13(setShouldFocusOnInvalidField, obj10);
  }
  const obj11 = { children: null };
  items7[2] = canAddMoreAnswers;
  obj8[1] = items7;
  items6[2] = callback2(allowMultiSelect, obj8);
  obj5[3] = items6;
  items5[1] = callback2(c6, obj5);
  const obj12 = { style: tmp7.pollConfigSection, children: null };
  const items8 = [callback(closure_16, { selectedDuration: duration, onChange: setDuration }), ];
  const obj13 = { label: null, checked: null, onPress: null };
  const intl5 = tmp4(1236).intl;
  obj13[0] = intl5.string(channel(1236).t["Ux+iQU"]);
  obj13[1] = allowMultiSelect;
  obj13[2] = function onPress() {
    return _undefined(!allowMultiSelect);
  };
  items8[1] = callback(channel(8448).TableCheckboxRow, obj13);
  obj12[1] = items8;
  items5[2] = callback2(allowMultiSelect, obj12);
  obj11[0] = items5;
  obj[1] = callback2(handleAddAnswer, obj11);
  return callback(allowMultiSelect, obj);
};