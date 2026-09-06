// === Module 12198: PollCreation ===

// Module 12198 (PollCreation)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4272 */;
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import AlertModal from "AlertModal" /* 4910 */;
import TextInput from "TextInput" /* 6606 */;
import PollsUtils from "PollsUtils" /* 7761 */;
import ScheduledMessageTypes from "ScheduledMessageTypes" /* 7847 */;
import PollsIcon from "PollsIcon" /* 10638 */;
import PollCreationModalActionCreators from "PollCreationModalActionCreators" /* 12197 */;
import _modDef12199 from "module_12199" /* 12199 */;
import ScheduledMessagesUtils from "ScheduledMessagesUtils" /* 12211 */;
import PollAnswerInputDefault from "PollAnswerInput" /* 12225 */;
import noop from "module_19" /* 19 */;

require = fn;
function UnsavedChangesAlertModal(onConfirm) {
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.HMrgcp);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t["Wxa/j8"]);
  obj = { children: null };
  obj = { text: null, onPress: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t.TzJA4g);
  obj.onPress = onConfirm.onConfirm;
  const items = [React7(AlertModal.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj1.text = intl4.string(util.t["2BR5R2"]);
  items[1] = React7(AlertModal.AlertActionButton, obj1, "back");
  obj.children = items;
  obj.actions = closure_1_11(closure_1_10, obj);
  return React7(AlertModal.AlertModal, obj);
}
function AddAnswerButton(onPress) {
  const tmp = closure_12();
  let obj = { source: _modDef12199, size: native.Icon.Sizes.LARGE, color: tmp.addAnswerIcon.color };
  obj = { onPress: onPress.onPress, style: tmp.addAnswerButtonDefault, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.B2Uvme);
  const items = [React7(native.Icon, obj), ];
  obj = { variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.B2Uvme);
  items[1] = React7(Text_Text.Text, obj);
  obj.children = items;
  return closure_1_11(React4, obj);
}
function PollDurationSelectionRow(selectedDuration) {
  selectedDuration = selectedDuration.selectedDuration;
  const onChange = selectedDuration.onChange;
  const tmp = onChange(12200)()[selectedDuration];
  let obj = { label: null, accessibilityLabel: null, accessibilityHint: null, onPress: null, trailing: null, arrow: true };
  const intl = selectedDuration(1114).intl;
  obj.label = intl.string(selectedDuration(1114).t.bGHzxb);
  const intl2 = selectedDuration(1114).intl;
  obj.accessibilityLabel = "" + intl2.string(selectedDuration(1114).t.bGHzxb) + " " + tmp;
  const intl3 = selectedDuration(1114).intl;
  obj.accessibilityHint = intl3.string(selectedDuration(1114).t.A4PJ1o);
  obj.onPress = function onPress() {
    let obj = ChatInputUtils;
    obj.dismissKeyboard();
    obj = { selectedDuration, onChange };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12201, dependencyMap.paths), React6, obj);
  };
  obj.trailing = closure_9(selectedDuration(4556).Text, { variant: "text-md/normal", color: "text-muted", children: tmp });
  return closure_9(selectedDuration(5605).TableRow, obj);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: closure_4, View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const PollsConstants = fn(7829);
({ MAX_POLL_QUESTION_LENGTH: closure_7, POLL_CREATION_DURATION_ACTION_SHEET_KEY: closure_8 } = PollsConstants);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
let createStyles = fn(4560);
let obj = { viewPadding: { paddingHorizontal: 18 }, scrollContainer: { paddingVertical: 20, gap: 16 }, safeAreaContainer: null, header: null, actionButton: null, postButton: null, title: null, label: null, answerInputsContainer: null, addAnswerButtonDefault: null, addAnswerIcon: null, pollConfigSection: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.safeAreaContainer = obj;
obj.header = { flexDirection: "row", paddingHorizontal: 18, paddingVertical: 10 };
obj.actionButton = { flex: 0, justifyContent: "flex-start", minWidth: 48, paddingHorizontal: 0, marginHorizontal: 0 };
obj.postButton = { justifyContent: "flex-end" };
obj.title = { textAlign: "center", flexGrow: 1 };
obj.label = { fontSize: 14 };
obj.answerInputsContainer = { marginVertical: 20, rowGap: 16 };
const PlatformUtils = fn(1115);
let num = 8;
if (PlatformUtils.isAndroid()) {
  num = 10;
}
createStyles = { paddingVertical: num, paddingLeft: 14, marginRight: 30, display: "flex", flexDirection: "row", gap: 16, alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.MESSAGE_BACKGROUND_HOVER, borderRadius: nativeDefault.radii.lg };
obj.addAnswerButtonDefault = createStyles;
obj.addAnswerIcon = { color: nativeDefault.colors.TEXT_MUTED };
let obj2 = { color: nativeDefault.colors.TEXT_MUTED };
obj.pollConfigSection = { borderTopWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
let closure_12 = createStyles.createStyles(obj);
let closure_14 = noop.forwardRef((error, ref) => {
  error = error.error;
  let tmp = null != error;
  ({ onChange, onSubmitEditing } = error);
  if (tmp) {
    tmp = error.length > 0;
  }
  let obj = { ref, textAlignVertical: "center", label: null, accessibilityHint: null, placeholder: null, onChange: null, isClearable: true, status: null, errorMessage: null, maxLength: null, returnKeyType: "next", blurOnSubmit: false, onSubmitEditing: null, textContentType: "none", autoFocus: true, autoCorrect: true };
  const intl = util.intl;
  obj.label = intl.string(util.t.WBiKnI);
  let formatToPlainStringResult;
  if (tmp) {
    const intl2 = util.intl;
    obj = { errorMessage: error };
    formatToPlainStringResult = intl2.formatToPlainString(util.t.jnq5Ho, obj);
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
  return React7(TextInput.TextInput, obj);
});
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
  let obj = { type: channel(1250).ImpressionTypes.VIEW, name: channel(1250).ImpressionNames.POLL_EDITOR_VIEWED };
  onCancel(8768)(obj);
  const items = [onCancel];
  const effect = answers.useEffect(() => () => {
    if (!ref.current) {
      if (onCancel != null) {
        tmp();
      }
    }
  }, items);
  const tmp7 = c12();
  const insets = onCancel(6981)({ includeKeyboardHeight: true }).insets;
  let obj1 = channel(7845);
  let canUseScheduledMessages = obj1.useCanUseScheduledMessages();
  dependencyMap = answers.useRef(false);
  const callback = answers.useCallback((arg0) => {
    closure_2.current = true;
    let obj = PollCreationModalActionCreators;
    obj.closeCreatePollModal();
    if (null == arg0) {
      obj = { key: "POLL_CREATED_SUCCESS", IconComponent: PollsIcon.PollsIcon, content: null };
      const intl = util.intl;
      obj.content = intl.string(util.t.OPsckI);
      ToastActionCreatorsDefault.open(obj);
    }
  }, []);
  const callback1 = answers.useCallback((indexToRemove) => {
    const AccessibilityAnnouncer = channel(4272).AccessibilityAnnouncer;
    const intl = channel(1114).intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(channel(1114).t.BByGU4, { number: indexToRemove.indexToRemove + 1 }));
  }, []);
  const tmp11 = onCancel(12202)(channel, callback, callback1);
  answers = tmp11.answers;
  ({ question: c4, allowMultiSelect } = tmp11);
  ({ setAllowMultiSelect: c6, canAddMoreAnswers, canRemoveMoreAnswers: c7, handleAnswerTextChange: c8, handleEmojiSelect: c9, handleAddAnswer } = tmp11);
  ({ handleRemoveAnswer: c11, handleRemoveAnswerImage: c12, scheduledTimestamp } = tmp11);
  ({ setScheduledTimestamp: c14, fieldErrors } = tmp11);
  ({ createPollError, submitting, shouldFocusOnInvalidField } = tmp11);
  const setShouldFocusOnInvalidField = tmp11.setShouldFocusOnInvalidField;
  ({ handleQuestionChange, handleSubmitPoll, duration, setDuration } = tmp11);
  let obj2 = channel(12207);
  closure_18 = obj2.useTrackPollCreationEvents(answers, allowMultiSelect).trackPollCreationCancelled;
  let obj3 = channel(5630);
  obj3.useNavigatorBackPressHandler(() => {
    let obj = PollsUtils;
    if (obj.isPollCreationEmpty(c4, answers)) {
      closure_18();
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t["+G3oRq"]));
      let flag = false;
    } else {
      obj = { onConfirm: handleCancelClose };
      useAlertStore.openAlert("poll-creation-unsaved-changes", React7(UnsavedChangesAlertModal, obj));
      flag = true;
      const tmpResult = useAlertStore;
    }
    return flag;
  });
  obj = {
    onAddAnswer() {
      handleAddAnswer();
    }
  };
  let obj5 = onCancel(12208)(obj);
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
  obj = { style: null, children: null };
  const items2 = [tmp7.safeAreaContainer, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  obj.style = items2;
  obj1 = { style: tmp7.header, children: null };
  obj2 = { accessibilityLabel: null, onPress: null, source: null, style: null };
  let intl = channel(1114).intl;
  obj2.accessibilityLabel = intl.string(channel(1114).t["ETE/oC"]);
  obj2.onPress = function onPress() {
    let obj = PollsUtils;
    if (obj.isPollCreationEmpty(c4, answers)) {
      closure_18();
      let tmpResult = PollCreationModalActionCreators;
      tmpResult.closeCreatePollModal();
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t["+G3oRq"]));
    } else {
      tmpResult = useAlertStore;
      obj = { onConfirm: handleCancelClose };
      tmpResult.openAlert("poll-creation-unsaved-changes", React7(UnsavedChangesAlertModal, obj));
    }
  };
  obj2.source = onCancel(5681);
  obj2.style = tmp7.actionButton;
  const items3 = [c9(channel(7377).HeaderActionButton, obj2), , , ];
  obj3 = { accessibilityRole: "header", variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", style: tmp7.title, children: null };
  const intl2 = channel(1114).intl;
  obj3.children = intl2.string(channel(1114).t.Flr51u);
  items3[1] = c9(channel(4556).Text, obj3);
  if (canUseScheduledMessages) {
    const obj4 = { accessibilityLabel: null, style: null, disabled: null, icon: null, onPress: null };
    const intl3 = tmp4(1114).intl;
    obj4.accessibilityLabel = intl3.string(tmp4(1114).t.rlf0tb);
    obj4.style = tmp7.actionButton;
    obj4.disabled = submitting;
    let TEXT_BRAND;
    if (null != scheduledTimestamp) {
      TEXT_BRAND = tmp(576).colors.TEXT_BRAND;
    }
    obj5 = { color: TEXT_BRAND };
    obj4.icon = tmp14(tmp4(12209).CalendarPlusIcon, obj5);
    obj4.onPress = function onPress() {
      const obj = { onSelect, currentTimestamp: scheduledTimestamp, onClear: null, entryPoint: null, channelId: null };
      let fn;
      if (null != scheduledTimestamp) {
        fn = () => onSelect(undefined);
      }
      obj.onClear = fn;
      obj.entryPoint = ScheduledMessageTypes.ScheduledMessageEntryPoint.POLL_CREATION;
      obj.channelId = channel.id;
      return obj.pickScheduledMessageTime(obj);
    };
    canUseScheduledMessages = tmp14(tmp4(7377).HeaderActionButton, obj4);
  }
  items3[2] = canUseScheduledMessages;
  const obj6 = { text: null, style: null, disabled: null, onPress: null };
  const intl4 = tmp4(1114).intl;
  obj6.text = intl4.string(channel(1114).t.JOj8Zk);
  const items4 = [, ];
  ({ actionButton: arr6[0], postButton: arr6[1] } = tmp7);
  obj6.style = items4;
  obj6.disabled = submitting;
  obj6.onPress = handleSubmitPoll;
  items3[3] = c9(channel(7377).HeaderActionButton, obj6);
  obj1.children = items3;
  const items5 = [c11(allowMultiSelect, obj1), , ];
  const obj7 = { style: tmp7.viewPadding, contentContainerStyle: tmp7.scrollContainer, keyboardShouldPersistTaps: "handled", children: null };
  let tmp14Result = null != createPollError;
  if (tmp14Result) {
    let anyErrorMessage;
    if (createPollError != null) {
      anyErrorMessage = createPollError.getAnyErrorMessage();
    }
    const obj8 = { children: anyErrorMessage };
    tmp14Result = tmp14(tmp(12223), obj8);
    let tmpResult = tmp(12223);
  }
  const items6 = [tmp14Result, , ];
  const obj9 = { ref: obj5.refWithKey("question"), onChange: handleQuestionChange, onSubmitEditing: obj5.focusNext, error: null };
  let question;
  if (fieldErrors != null) {
    question = fieldErrors.question;
  }
  obj9.error = question;
  items6[1] = c9(c14, obj9);
  const obj10 = { style: tmp7.answerInputsContainer, children: null };
  const obj11 = { text: null, color: "text-subtle", style: null };
  const intl5 = tmp4(1114).intl;
  obj11.text = intl5.string(channel(1114).t.oMBfeS);
  obj11.style = tmp7.label;
  const items7 = [
    c9(channel(8593).FormLabel, obj11),
    answers.map((localCreationAnswerId, index) => {
      const obj = { inputRef: obj5.refWithKey("answer-" + localCreationAnswerId.localCreationAnswerId), answer: localCreationAnswerId, index, channelId: channel.id, onSubmitEditing: obj5.focusNext, onAnswerTextChange, onAnswerEmojiSelect, onRemoveAnswer, onRemoveAnswerImage, canRemoveAnswer, error: null };
      let tmp4;
      if (fieldErrors != null) {
        const _HermesInternal = HermesInternal;
        tmp4 = tmp3["answer-" + localCreationAnswerId.localCreationAnswerId];
      }
      obj.error = tmp4;
      return React7(PollAnswerInputDefault, obj, localCreationAnswerId.localCreationAnswerId);
    }),

  ];
  if (canAddMoreAnswers) {
    const obj12 = { onPress: handleAddAnswer };
    canAddMoreAnswers = tmp14(fieldErrors, obj12);
  }
  const obj13 = { children: null };
  items7[2] = canAddMoreAnswers;
  obj10.children = items7;
  items6[2] = c11(allowMultiSelect, obj10);
  obj7.children = items6;
  items5[1] = c11(c6, obj7);
  const obj14 = { style: tmp7.pollConfigSection, children: null };
  const items8 = [c9(shouldFocusOnInvalidField, { selectedDuration: duration, onChange: setDuration }), ];
  const obj15 = { label: null, checked: null, onPress: null };
  const intl6 = tmp4(1114).intl;
  obj15.label = intl6.string(channel(1114).t["Ux+iQU"]);
  obj15.checked = allowMultiSelect;
  obj15.onPress = function onPress() {
    return _undefined(!allowMultiSelect);
  };
  items8[1] = c9(channel(5604).TableCheckboxRow, obj15);
  obj14.children = items8;
  items5[2] = c11(allowMultiSelect, obj14);
  obj13.children = items5;
  obj.children = c11(handleAddAnswer, obj13);
  return c9(allowMultiSelect, obj);
};