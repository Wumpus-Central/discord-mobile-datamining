// === Module 13441: PollCreation ===

// Module 13441 (PollCreation)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5252 */;
import ChatInputUtils from "ChatInputUtils" /* 5438 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import Text_Text from "Text/Text" /* 5866 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import useAlertStore from "useAlertStore" /* 6207 */;
import AlertModal from "AlertModal" /* 6211 */;
import TextInput from "TextInput" /* 7553 */;
import PollsUtils from "PollsUtils" /* 8795 */;
import ScheduledMessageTypes from "ScheduledMessageTypes" /* 8966 */;
import ScheduledMessagesUtils from "ScheduledMessagesUtils" /* 8982 */;
import PollsIcon from "PollsIcon" /* 11577 */;
import PollCreationModalActionCreators from "PollCreationModalActionCreators" /* 13440 */;
import _modDef13442 from "module_13442" /* 13442 */;
import PollAnswerInputDefault from "PollAnswerInput" /* 13456 */;
import noop from "module_19" /* 19 */;

require = fn;
function UnsavedChangesAlertModal(onConfirm) {
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.HMrgcp);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t["Wxa/j8"]);
  const obj2 = { children: null };
  const obj3 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.TzJA4g);
  obj3.onPress = onConfirm.onConfirm;
  items = [React6(AlertModal.AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t["2BR5R2"]);
  items[1] = React6(AlertModal.AlertActionButton, obj4, "back");
  obj2.children = items;
  obj.actions = closure_1_11(closure_1_10, obj2);
  return React6(AlertModal.AlertModal, obj);
}
function PollQuestionInput(error) {
  error = error.error;
  let tmp = null != error;
  ({ onChange, onSubmitEditing, ref } = error);
  if (tmp) {
    tmp = error.length > 0;
  }
  const obj = { ref, textAlignVertical: "center", label: null, accessibilityHint: null, placeholder: null, onChange: null, clearable: true, status: null, errorMessage: null, maxLength: null, returnKeyType: "next", blurOnSubmit: false, onSubmitEditing: null, textContentType: "none", autoFocus: true, autoCorrect: true };
  const intl = util.intl;
  obj.label = intl.string(util.t.WBiKnI);
  let formatToPlainStringResult;
  if (tmp) {
    const intl2 = util.intl;
    const obj2 = { errorMessage: error };
    formatToPlainStringResult = intl2.formatToPlainString(util.t.jnq5Ho, obj2);
  }
  obj.accessibilityHint = formatToPlainStringResult;
  const intl3 = util.intl;
  obj.placeholder = intl3.string(util.t["/uQqJW"]);
  obj.onChange = onChange;
  let str = "default";
  if (tmp) {
    str = "error";
  }
  obj.status = str;
  obj.errorMessage = error;
  obj.maxLength = maxLength;
  obj.onSubmitEditing = onSubmitEditing;
  return React6(TextInput.TextInput, obj);
}
function AddAnswerButton(onPress) {
  const tmp = closure_12();
  const obj2 = { onPress: onPress.onPress, style: tmp.addAnswerButtonDefault, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const obj = { source: _modDef13442, size: native.Icon.Sizes.LARGE, color: tmp.addAnswerIcon.color };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t.B2Uvme);
  items = [React6(native.Icon, { source: _modDef13442, size: native.Icon.Sizes.LARGE, color: tmp.addAnswerIcon.color }), ];
  const obj3 = { variant: "body-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.B2Uvme);
  items[1] = React6(Text_Text.Text, obj3);
  obj2.children = items;
  return closure_1_11(React4, obj2);
}
function PollDurationSelectionRow(selectedDuration) {
  selectedDuration = selectedDuration.selectedDuration;
  const onChange = selectedDuration.onChange;
  const tmp = onChange(13443)()[selectedDuration];
  let obj = { label: null, accessibilityLabel: null, accessibilityHint: null, onPress: null, trailing: null, arrow: true };
  const intl = selectedDuration(1113).intl;
  obj.label = intl.string(selectedDuration(1113).t.bGHzxb);
  const intl2 = selectedDuration(1113).intl;
  obj.accessibilityLabel = "" + intl2.string(selectedDuration(1113).t.bGHzxb) + " " + tmp;
  const intl3 = selectedDuration(1113).intl;
  obj.accessibilityHint = intl3.string(selectedDuration(1113).t.A4PJ1o);
  obj.onPress = function handlePollDurationPress() {
    ChatInputUtils.dismissKeyboard();
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13444, dependencyMap.paths), React5, { selectedDuration, onChange });
  };
  obj.trailing = closure_9(selectedDuration(5866).Text, { variant: "body-md/normal", color: "text-muted", children: tmp });
  return closure_9(selectedDuration(7379).TableRow, obj);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: closure_4, View: hasOwnProperty, ScrollView: closure_6 } = get_ActivityIndicator);
const PollsConstants = fn(8945);
({ MAX_POLL_QUESTION_LENGTH: metroImportDefault, POLL_CREATION_DURATION_ACTION_SHEET_KEY: closure_8 } = PollsConstants);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { viewPadding: { paddingHorizontal: 18 }, scrollContainer: { paddingVertical: 20, gap: 16 }, safeAreaContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, header: { flexDirection: "row", paddingHorizontal: 18, paddingVertical: 10 }, actionButton: { flex: 0, justifyContent: "flex-start", minWidth: 48, paddingHorizontal: 0, marginHorizontal: 0 }, postButton: { justifyContent: "flex-end" }, title: { textAlign: "center", flexGrow: 1 }, label: { fontSize: 14 }, answerInputsContainer: { marginVertical: 20, rowGap: 16 }, addAnswerButtonDefault: null, addAnswerIcon: null, pollConfigSection: null };
const PlatformUtils = fn(1377);
let num = 8;
if (PlatformUtils.isAndroid()) {
  num = 10;
}
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.addAnswerButtonDefault = { paddingVertical: num, paddingLeft: 14, marginRight: 36, display: "flex", flexDirection: "row", gap: 16, alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.MESSAGE_BACKGROUND_HOVER, borderRadius: nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG };
let obj5 = { paddingVertical: num, paddingLeft: 14, marginRight: 36, display: "flex", flexDirection: "row", gap: 16, alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.MESSAGE_BACKGROUND_HOVER, borderRadius: nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG };
obj2.addAnswerIcon = { color: nativeDefault.colors.TEXT_MUTED };
let obj6 = { color: nativeDefault.colors.TEXT_MUTED };
obj2.pollConfigSection = { borderTopWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/native/PollCreation.tsx");

export default function PollCreation(channel) {
  channel = channel.channel;
  const onCancel = channel.onCancel;
  let answers;
  c4 = undefined;
  allowMultiSelect = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  handleAddAnswer = undefined;
  c11 = undefined;
  c12 = undefined;
  scheduledTimestamp = undefined;
  c14 = undefined;
  fieldErrors = undefined;
  shouldFocusOnInvalidField = undefined;
  function handleCancelClose() {
    closure_18();
    PollCreationModalActionCreators.closeCreatePollModal();
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t["+G3oRq"]));
  }
  let obj = { type: channel(1260).ImpressionTypes.VIEW, name: channel(1260).ImpressionNames.POLL_EDITOR_VIEWED };
  onCancel(6275)(obj);
  items = [onCancel];
  const effect = answers.useEffect(() => () => {
    if (!ref.current) {
      if (onCancel != null) {
        tmp();
      }
    }
  }, items);
  const tmp7 = c12();
  const insets = onCancel(5850)({ includeKeyboardHeight: true }).insets;
  dependencyMap = answers.useRef(false);
  const callback = answers.useCallback((arg0) => {
    closure_2.current = true;
    PollCreationModalActionCreators.closeCreatePollModal();
    if (null == arg0) {
      const obj3 = { text: null, icon: null };
      const intl = util.intl;
      obj3.text = intl.string(util.t.OPsckI);
      obj3.icon = PollsIcon.PollsIcon;
      ToastActionCreatorsDefault.open("POLL_CREATED_SUCCESS", obj3);
    }
  }, []);
  const callback1 = answers.useCallback((indexToRemove) => {
    const AccessibilityAnnouncer = channel(5252).AccessibilityAnnouncer;
    const intl = channel(1113).intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(channel(1113).t.BByGU4, { number: indexToRemove.indexToRemove + 1 }));
  }, []);
  const tmp10 = onCancel(13445)(channel, callback, callback1);
  answers = tmp10.answers;
  ({ question: c4, allowMultiSelect } = tmp10);
  ({ setAllowMultiSelect: c6, canAddMoreAnswers, canRemoveMoreAnswers: c7, handleAnswerTextChange: c8, handleEmojiSelect: c9, handleAddAnswer } = tmp10);
  ({ handleRemoveAnswer: c11, handleRemoveAnswerImage: c12, scheduledTimestamp } = tmp10);
  ({ setScheduledTimestamp: c14, fieldErrors } = tmp10);
  ({ createPollError, submitting, shouldFocusOnInvalidField } = tmp10);
  const setShouldFocusOnInvalidField = tmp10.setShouldFocusOnInvalidField;
  ({ handleQuestionChange, handleSubmitPoll, duration, setDuration } = tmp10);
  const tmp3 = onCancel(6275);
  closure_18 = channel(13450).useTrackPollCreationEvents(answers, allowMultiSelect).trackPollCreationCancelled;
  let obj2 = channel(13450);
  channel(7433).useNavigatorBackPressHandler(() => {
    if (obj.isPollCreationEmpty(c4, answers)) {
      closure_18();
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t["+G3oRq"]));
      let flag = false;
    } else {
      const obj2 = { onConfirm: handleCancelClose };
      useAlertStore.openAlert("poll-creation-unsaved-changes", React6(UnsavedChangesAlertModal, obj2));
      flag = true;
      const tmpResult = useAlertStore;
    }
    return flag;
  });
  const obj5 = onCancel(13451)({
    onAddAnswer() {
      handleAddAnswer();
    }
  });
  const items1 = [fieldErrors, obj5, setShouldFocusOnInvalidField, shouldFocusOnInvalidField];
  const effect1 = answers.useEffect(() => {
    const keys = Object.keys(fieldErrors);
    if (keys.length > 0) {
      const intl = util.intl;
      const obj = { numOfErrors: keys.length };
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.w8e4qF, obj));
      if (shouldFocusOnInvalidField) {
        obj5.focus(keys[0]);
        setShouldFocusOnInvalidField(false);
      }
      const formatToPlainStringResult = intl.formatToPlainString(util.t.w8e4qF, obj);
    }
  }, items1);
  const obj6 = { style: null, children: null };
  const items2 = [tmp7.safeAreaContainer, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  obj6.style = items2;
  const obj7 = { style: tmp7.header, children: null };
  const obj8 = { accessibilityLabel: null, onPress: null, source: null, style: null };
  let intl = channel(1113).intl;
  obj8.accessibilityLabel = intl.string(channel(1113).t["ETE/oC"]);
  obj8.onPress = function handleCancel() {
    if (obj.isPollCreationEmpty(c4, answers)) {
      closure_18();
      PollCreationModalActionCreators.closeCreatePollModal();
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t["+G3oRq"]));
      const tmpResult = PollCreationModalActionCreators;
    } else {
      const obj2 = { onConfirm: handleCancelClose };
      useAlertStore.openAlert("poll-creation-unsaved-changes", React6(UnsavedChangesAlertModal, obj2));
      const tmpResult2 = useAlertStore;
    }
    obj = PollsUtils;
  };
  obj8.source = onCancel(7484);
  obj8.style = tmp7.actionButton;
  const items3 = [c9(channel(7363).HeaderActionButton, obj8), , , ];
  const obj9 = { accessibilityRole: "header", variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: tmp7.title, children: null };
  const intl2 = channel(1113).intl;
  obj9.children = intl2.string(channel(1113).t.Flr51u);
  items3[1] = c9(channel(5866).Text, obj9);
  const obj10 = { accessibilityLabel: null, style: null, disabled: null, icon: null, onPress: null };
  const intl3 = channel(1113).intl;
  obj10.accessibilityLabel = intl3.string(channel(1113).t.rlf0tb);
  obj10.style = tmp7.actionButton;
  obj10.disabled = submitting;
  let TEXT_BRAND;
  if (null != scheduledTimestamp) {
    TEXT_BRAND = tmp(575).colors.TEXT_BRAND;
  }
  obj10.icon = c9(channel(13452).CalendarPlusIcon, { color: TEXT_BRAND });
  obj10.onPress = function onPress() {
    const obj2 = { onSelect, currentTimestamp: scheduledTimestamp, onClear: null, entryPoint: null, channelId: null };
    let fn;
    if (null != scheduledTimestamp) {
      fn = () => onSelect(undefined);
    }
    obj2.onClear = fn;
    obj2.entryPoint = ScheduledMessageTypes.ScheduledMessageEntryPoint.POLL_CREATION;
    obj2.channelId = channel.id;
    return ScheduledMessagesUtils.pickScheduledMessageTime(obj2);
  };
  items3[2] = c9(channel(7363).HeaderActionButton, obj10);
  const obj11 = { text: null, style: null, disabled: null, onPress: null };
  const intl4 = tmp4(1113).intl;
  obj11.text = intl4.string(channel(1113).t.JOj8Zk);
  const items4 = [, ];
  ({ actionButton: arr6[0], postButton: arr6[1] } = tmp7);
  obj11.style = items4;
  obj11.disabled = submitting;
  obj11.onPress = handleSubmitPoll;
  items3[3] = c9(channel(7363).HeaderActionButton, obj11);
  obj7.children = items3;
  const items5 = [c11(allowMultiSelect, obj7), , ];
  const obj12 = { style: tmp7.viewPadding, contentContainerStyle: tmp7.scrollContainer, keyboardShouldPersistTaps: "handled", children: null };
  let tmp13Result = null != createPollError;
  if (tmp13Result) {
    let anyErrorMessage;
    if (createPollError != null) {
      anyErrorMessage = createPollError.getAnyErrorMessage();
    }
    const obj13 = { children: anyErrorMessage };
    tmp13Result = tmp13(tmp(13454), obj13);
    let tmpResult = tmp(13454);
  }
  const items6 = [tmp13Result, , ];
  const obj14 = { ref: obj5.refWithKey("question"), onChange: handleQuestionChange, onSubmitEditing: obj5.focusNext, error: null };
  let question;
  if (fieldErrors != null) {
    question = fieldErrors.question;
  }
  obj14.error = question;
  items6[1] = c9(c14, obj14);
  const obj15 = { style: tmp7.answerInputsContainer, children: null };
  const obj16 = { text: null, color: "text-subtle", style: null };
  const intl5 = tmp4(1113).intl;
  obj16.text = intl5.string(channel(1113).t.oMBfeS);
  obj16.style = tmp7.label;
  const items7 = [
    c9(channel(8041).FormLabel, obj16),
    answers.map((localCreationAnswerId, index) => {
      const obj = { inputRef: obj5.refWithKey("answer-" + localCreationAnswerId.localCreationAnswerId), answer: localCreationAnswerId, index, channelId: channel.id, onSubmitEditing: obj5.focusNext, onAnswerTextChange, onAnswerEmojiSelect, onRemoveAnswer, onRemoveAnswerImage, canRemoveAnswer, error: null };
      let tmp4;
      if (fieldErrors != null) {
        const _HermesInternal = HermesInternal;
        tmp4 = tmp3["answer-" + localCreationAnswerId.localCreationAnswerId];
      }
      obj.error = tmp4;
      return React6(PollAnswerInputDefault, obj, localCreationAnswerId.localCreationAnswerId);
    }),

  ];
  if (canAddMoreAnswers) {
    const obj17 = { onPress: handleAddAnswer };
    canAddMoreAnswers = tmp13(fieldErrors, obj17);
  }
  const obj18 = { children: null };
  items7[2] = canAddMoreAnswers;
  obj15.children = items7;
  items6[2] = c11(allowMultiSelect, obj15);
  obj12.children = items6;
  items5[1] = c11(c6, obj12);
  const obj19 = { style: tmp7.pollConfigSection, children: null };
  const items8 = [c9(shouldFocusOnInvalidField, { selectedDuration: duration, onChange: setDuration }), ];
  const obj20 = { label: null, checked: null, onPress: null };
  const intl6 = tmp4(1113).intl;
  obj20.label = intl6.string(channel(1113).t["Ux+iQU"]);
  obj20.checked = allowMultiSelect;
  obj20.onPress = function onPress() {
    return _undefined(!allowMultiSelect);
  };
  items8[1] = c9(channel(7667).TableCheckboxRow, obj20);
  obj19.children = items8;
  items5[2] = c11(allowMultiSelect, obj19);
  obj18.children = items5;
  obj6.children = c11(handleAddAnswer, obj18);
  return c9(allowMultiSelect, obj6);
};