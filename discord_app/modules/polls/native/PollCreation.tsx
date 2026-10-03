// === Module 11828: PollCreation ===

// Module 11828 (PollCreation)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import ChatInputUtils from "ChatInputUtils" /* 4745 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import useAlertStore from "useAlertStore" /* 5709 */;
import AlertModal from "AlertModal" /* 5713 */;
import TextInput from "TextInput" /* 6098 */;
import PollsUtils from "PollsUtils" /* 7257 */;
import ScheduledMessageTypes from "ScheduledMessageTypes" /* 7477 */;
import PollsIcon from "PollsIcon" /* 10367 */;
import _modDef10979 from "module_10979" /* 10979 */;
import PollCreationModalActionCreators from "PollCreationModalActionCreators" /* 11827 */;
import ScheduledMessagesUtils from "ScheduledMessagesUtils" /* 11840 */;
import PollAnswerInputDefault from "PollAnswerInput" /* 11854 */;
import noop from "module_19" /* 19 */;

require = fn;
function PollDurationSelectionRow(selectedDuration) {
  selectedDuration = selectedDuration.selectedDuration;
  const onChange = selectedDuration.onChange;
  const tmp = onChange(11829)()[selectedDuration];
  let obj = { label: null, accessibilityLabel: null, accessibilityHint: null, onPress: null, trailing: null, arrow: true };
  const intl = selectedDuration(1126).intl;
  obj.label = intl.string(selectedDuration(1126).t.bGHzxb);
  const intl2 = selectedDuration(1126).intl;
  obj.accessibilityLabel = "" + intl2.string(selectedDuration(1126).t.bGHzxb) + " " + tmp;
  const intl3 = selectedDuration(1126).intl;
  obj.accessibilityHint = intl3.string(selectedDuration(1126).t.A4PJ1o);
  obj.onPress = function onPress() {
    ChatInputUtils.dismissKeyboard();
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11830, dependencyMap.paths), closure_2_8, { selectedDuration, onChange });
  };
  obj.trailing = closure_9(selectedDuration(4886).Text, { variant: "text-md/normal", color: "text-muted", children: tmp });
  return closure_9(selectedDuration(5993).TableRow, obj);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: closure_4, View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const PollsConstants = fn(7457);
({ MAX_POLL_QUESTION_LENGTH: closure_7, POLL_CREATION_DURATION_ACTION_SHEET_KEY: closure_8 } = PollsConstants);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
let obj = { viewPadding: { paddingHorizontal: 18 }, scrollContainer: { paddingVertical: 20, gap: 16 }, safeAreaContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, header: { flexDirection: "row", paddingHorizontal: 18, paddingVertical: 10 }, actionButton: { flex: 0, justifyContent: "flex-start", minWidth: 48, paddingHorizontal: 0, marginHorizontal: 0 }, postButton: { justifyContent: "flex-end" }, title: { textAlign: "center", flexGrow: 1 }, label: { fontSize: 14 }, answerInputsContainer: { marginVertical: 20, rowGap: 16 }, addAnswerButtonDefault: null, addAnswerIcon: null, pollConfigSection: null };
const PlatformUtils = fn(1369);
let num = 8;
if (PlatformUtils.isAndroid()) {
  num = 10;
}
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.addAnswerButtonDefault = { paddingVertical: num, paddingLeft: 14, marginRight: 30, display: "flex", flexDirection: "row", gap: 16, alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.MESSAGE_BACKGROUND_HOVER, borderRadius: nativeDefault.radii.lg };
let obj4 = { paddingVertical: num, paddingLeft: 14, marginRight: 30, display: "flex", flexDirection: "row", gap: 16, alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.MESSAGE_BACKGROUND_HOVER, borderRadius: nativeDefault.radii.lg };
obj.addAnswerIcon = { color: nativeDefault.colors.TEXT_MUTED };
let obj6 = { color: nativeDefault.colors.TEXT_MUTED };
obj.pollConfigSection = { borderTopWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((onConfirm) => {
  const cResult = c.c(8);
  onConfirm = onConfirm.onConfirm;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.HMrgcp);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t["Wxa/j8"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const stringResult2 = intl3.string(util.t.TzJA4g);
    cResult[2] = stringResult2;
    let tmp8 = stringResult2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== onConfirm) {
    const obj2 = { text: tmp8, onPress: onConfirm };
    const tmp12 = options(AlertModal.AlertActionButton, obj2, "confirm");
    cResult[3] = onConfirm;
    cResult[4] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "secondary", text: null };
    const intl4 = util.intl;
    obj3.text = intl4.string(util.t["2BR5R2"]);
    const tmp15 = options(AlertModal.AlertActionButton, obj3, "back");
    cResult[5] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== tmp10) {
    const obj4 = { title: tmp4, content: tmp5, actions: null };
    const obj5 = { children: null };
    const items = [tmp10, tmp13];
    obj5.children = items;
    obj4.actions = closure_1_11(v65535, obj5);
    const tmp20 = options(AlertModal.AlertModal, obj4);
    cResult[6] = tmp10;
    cResult[7] = tmp20;
    let tmp16 = tmp20;
  } else {
    tmp16 = cResult[7];
  }
  return tmp16;
}) : ((onConfirm) => {
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
  const items = [options(AlertModal.AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t["2BR5R2"]);
  items[1] = options(AlertModal.AlertActionButton, obj4, "back");
  obj2.children = items;
  obj.actions = closure_1_11(v65535, obj2);
  return options(AlertModal.AlertModal, obj);
});
ReactCompilerGating = fn(558);
let closure_14 = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = c.c(12);
  ({ onChange, onSubmitEditing, error } = arg0);
  let tmp4 = null != error;
  if (tmp4) {
    tmp4 = error.length > 0;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.WBiKnI);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === error) {
    if (cResult[2] === tmp4) {
      let tmp7 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = util.intl;
      const stringResult1 = intl3.string(util.t["/uQqJW"]);
      cResult[4] = stringResult1;
      let tmp9 = stringResult1;
    } else {
      tmp9 = cResult[4];
    }
    let str = "default";
    if (tmp4) {
      str = "error";
    }
    if (cResult[5] === error) {
      if (cResult[6] === onChange) {
        if (cResult[7] === onSubmitEditing) {
          if (cResult[8] === ref) {
            if (cResult[9] === tmp7) {
              if (cResult[10] === str) {
                let tmp12 = cResult[11];
              }
              return tmp12;
            }
          }
        }
      }
    }
    const obj2 = { ref, textAlignVertical: "center", label: first, accessibilityHint: tmp7, placeholder: tmp9, onChange, clearable: true, status: str, errorMessage: error, maxLength, returnKeyType: "next", blurOnSubmit: false, onSubmitEditing, textContentType: "none", autoFocus: true, autoCorrect: true };
    const tmp15 = options(TextInput.TextInput, obj2);
    cResult[5] = error;
    cResult[6] = onChange;
    cResult[7] = onSubmitEditing;
    cResult[8] = ref;
    cResult[9] = tmp7;
    cResult[10] = str;
    cResult[11] = tmp15;
    tmp12 = tmp15;
  }
  let formatToPlainStringResult;
  if (tmp4) {
    const intl2 = util.intl;
    const obj3 = { errorMessage: error };
    formatToPlainStringResult = intl2.formatToPlainString(util.t.jnq5Ho, obj3);
  }
  cResult[1] = error;
  cResult[2] = tmp4;
  cResult[3] = formatToPlainStringResult;
  tmp7 = formatToPlainStringResult;
}) : ((error, ref) => {
  error = error.error;
  let tmp = null != error;
  ({ onChange, onSubmitEditing } = error);
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
  return options(TextInput.TextInput, obj);
}));
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  const cResult = c.c(8);
  onPress = onPress.onPress;
  const tmp4 = closure_12();
  const addAnswerButtonDefault = tmp4.addAnswerButtonDefault;
  if (cResult[0] !== tmp4.addAnswerIcon.color) {
    const obj2 = { source: _modDef10979, size: native.Icon.Sizes.LARGE, color: tmp4.addAnswerIcon.color };
    const tmp8 = options(native.Icon, obj2);
    cResult[0] = tmp4.addAnswerIcon.color;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.B2Uvme);
    cResult[2] = stringResult;
    let tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj3.children = intl2.string(util.t.B2Uvme);
    const tmp13 = options(Text_Text.Text, obj3);
    cResult[3] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === addAnswerButtonDefault) {
    if (cResult[5] === tmp5) {
      if (cResult[6] === onPress) {
        let tmp14 = cResult[7];
      }
      return tmp14;
    }
  }
  const obj4 = { onPress, style: addAnswerButtonDefault, accessibilityRole: "button", accessibilityLabel: tmp9, children: null };
  const items = [tmp5, tmp11];
  obj4.children = items;
  const tmp15 = closure_1_11(React4, obj4);
  cResult[4] = addAnswerButtonDefault;
  cResult[5] = tmp5;
  cResult[6] = onPress;
  cResult[7] = tmp15;
  tmp14 = tmp15;
}) : ((onPress) => {
  const tmp = closure_12();
  const obj2 = { onPress: onPress.onPress, style: tmp.addAnswerButtonDefault, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const obj = { source: _modDef10979, size: native.Icon.Sizes.LARGE, color: tmp.addAnswerIcon.color };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t.B2Uvme);
  const items = [options(native.Icon, { source: _modDef10979, size: native.Icon.Sizes.LARGE, color: tmp.addAnswerIcon.color }), ];
  const obj3 = { variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.B2Uvme);
  items[1] = options(Text_Text.Text, obj3);
  obj2.children = items;
  return closure_1_11(React4, obj2);
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
  let obj = { type: channel(1260).ImpressionTypes.VIEW, name: channel(1260).ImpressionNames.POLL_EDITOR_VIEWED };
  onCancel(8422)(obj);
  const items = [onCancel];
  const effect = answers.useEffect(() => () => {
    if (!ref.current) {
      if (onCancel != null) {
        tmp();
      }
    }
  }, items);
  const tmp7 = c12();
  const insets = onCancel(6471)({ includeKeyboardHeight: true }).insets;
  const tmp3 = onCancel(8422);
  let canUseScheduledMessages = channel(7475).useCanUseScheduledMessages();
  dependencyMap = answers.useRef(false);
  const callback = answers.useCallback((arg0) => {
    closure_2.current = true;
    PollCreationModalActionCreators.closeCreatePollModal();
    if (null == arg0) {
      const obj3 = { key: "POLL_CREATED_SUCCESS", IconComponent: PollsIcon.PollsIcon, content: null };
      const intl = util.intl;
      obj3.content = intl.string(util.t.OPsckI);
      ToastActionCreatorsDefault.open(obj3);
    }
  }, []);
  const callback1 = answers.useCallback((indexToRemove) => {
    const AccessibilityAnnouncer = channel(4590).AccessibilityAnnouncer;
    const intl = channel(1126).intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(channel(1126).t.BByGU4, { number: indexToRemove.indexToRemove + 1 }));
  }, []);
  const tmp11 = onCancel(11831)(channel, callback, callback1);
  answers = tmp11.answers;
  ({ question: c4, allowMultiSelect } = tmp11);
  ({ setAllowMultiSelect: c6, canAddMoreAnswers, canRemoveMoreAnswers: c7, handleAnswerTextChange: c8, handleEmojiSelect: c9, handleAddAnswer } = tmp11);
  ({ handleRemoveAnswer: c11, handleRemoveAnswerImage: c12, scheduledTimestamp } = tmp11);
  ({ setScheduledTimestamp: c14, fieldErrors } = tmp11);
  ({ createPollError, submitting, shouldFocusOnInvalidField } = tmp11);
  const setShouldFocusOnInvalidField = tmp11.setShouldFocusOnInvalidField;
  ({ handleQuestionChange, handleSubmitPoll, duration, setDuration } = tmp11);
  let obj2 = channel(7475);
  closure_18 = channel(11836).useTrackPollCreationEvents(answers, allowMultiSelect).trackPollCreationCancelled;
  let obj3 = channel(11836);
  channel(6016).useNavigatorBackPressHandler(() => {
    if (obj.isPollCreationEmpty(c4, answers)) {
      closure_18();
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t["+G3oRq"]));
      let flag = false;
    } else {
      const obj2 = { onConfirm: handleCancelClose };
      useAlertStore.openAlert("poll-creation-unsaved-changes", options(closure_13, obj2));
      flag = true;
      const tmpResult = useAlertStore;
    }
    return flag;
  });
  const obj6 = onCancel(11837)({
    onAddAnswer() {
      handleAddAnswer();
    }
  });
  const items1 = [fieldErrors, obj6, setShouldFocusOnInvalidField, shouldFocusOnInvalidField];
  const effect1 = answers.useEffect(() => {
    const keys = Object.keys(fieldErrors);
    if (keys.length > 0) {
      const intl = util.intl;
      const obj = { numOfErrors: keys.length };
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.w8e4qF, obj));
      if (shouldFocusOnInvalidField) {
        obj6.focus(keys[0]);
        setShouldFocusOnInvalidField(false);
      }
      const formatToPlainStringResult = intl.formatToPlainString(util.t.w8e4qF, obj);
    }
  }, items1);
  const obj7 = { style: null, children: null };
  const items2 = [tmp7.safeAreaContainer, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  obj7.style = items2;
  const obj8 = { style: tmp7.header, children: null };
  const obj9 = { accessibilityLabel: null, onPress: null, source: null, style: null };
  let intl = channel(1126).intl;
  obj9.accessibilityLabel = intl.string(channel(1126).t["ETE/oC"]);
  obj9.onPress = function onPress() {
    if (obj.isPollCreationEmpty(c4, answers)) {
      closure_18();
      PollCreationModalActionCreators.closeCreatePollModal();
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t["+G3oRq"]));
      const tmpResult = PollCreationModalActionCreators;
    } else {
      const obj2 = { onConfirm: handleCancelClose };
      useAlertStore.openAlert("poll-creation-unsaved-changes", options(closure_13, obj2));
      const tmpResult2 = useAlertStore;
    }
    obj = PollsUtils;
  };
  obj9.source = onCancel(6018);
  obj9.style = tmp7.actionButton;
  const items3 = [c9(channel(6880).HeaderActionButton, obj9), , , ];
  const obj10 = { accessibilityRole: "header", variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", style: tmp7.title, children: null };
  const intl2 = channel(1126).intl;
  obj10.children = intl2.string(channel(1126).t.Flr51u);
  items3[1] = c9(channel(4886).Text, obj10);
  if (canUseScheduledMessages) {
    const obj11 = { accessibilityLabel: null, style: null, disabled: null, icon: null, onPress: null };
    const intl3 = tmp4(1126).intl;
    obj11.accessibilityLabel = intl3.string(tmp4(1126).t.rlf0tb);
    obj11.style = tmp7.actionButton;
    obj11.disabled = submitting;
    let TEXT_BRAND;
    if (null != scheduledTimestamp) {
      TEXT_BRAND = tmp(587).colors.TEXT_BRAND;
    }
    const obj12 = { color: TEXT_BRAND };
    obj11.icon = tmp14(tmp4(11838).CalendarPlusIcon, obj12);
    obj11.onPress = function onPress() {
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
    canUseScheduledMessages = tmp14(tmp4(6880).HeaderActionButton, obj11);
  }
  items3[2] = canUseScheduledMessages;
  const obj13 = { text: null, style: null, disabled: null, onPress: null };
  const intl4 = tmp4(1126).intl;
  obj13.text = intl4.string(channel(1126).t.JOj8Zk);
  const items4 = [, ];
  ({ actionButton: arr6[0], postButton: arr6[1] } = tmp7);
  obj13.style = items4;
  obj13.disabled = submitting;
  obj13.onPress = handleSubmitPoll;
  items3[3] = c9(channel(6880).HeaderActionButton, obj13);
  obj8.children = items3;
  const items5 = [c11(allowMultiSelect, obj8), , ];
  const obj14 = { style: tmp7.viewPadding, contentContainerStyle: tmp7.scrollContainer, keyboardShouldPersistTaps: "handled", children: null };
  let tmp14Result = null != createPollError;
  if (tmp14Result) {
    let anyErrorMessage;
    if (createPollError != null) {
      anyErrorMessage = createPollError.getAnyErrorMessage();
    }
    const obj15 = { children: anyErrorMessage };
    tmp14Result = tmp14(tmp(11852), obj15);
    let tmpResult = tmp(11852);
  }
  const items6 = [tmp14Result, , ];
  const obj16 = { ref: obj6.refWithKey("question"), onChange: handleQuestionChange, onSubmitEditing: obj6.focusNext, error: null };
  let question;
  if (fieldErrors != null) {
    question = fieldErrors.question;
  }
  obj16.error = question;
  items6[1] = c9(c14, obj16);
  const obj17 = { style: tmp7.answerInputsContainer, children: null };
  const obj18 = { text: null, color: "text-subtle", style: null };
  const intl5 = tmp4(1126).intl;
  obj18.text = intl5.string(channel(1126).t.oMBfeS);
  obj18.style = tmp7.label;
  const items7 = [
    c9(channel(8895).FormLabel, obj18),
    answers.map((localCreationAnswerId, index) => {
      const obj = { inputRef: obj6.refWithKey("answer-" + localCreationAnswerId.localCreationAnswerId), answer: localCreationAnswerId, index, channelId: channel.id, onSubmitEditing: obj6.focusNext, onAnswerTextChange, onAnswerEmojiSelect, onRemoveAnswer, onRemoveAnswerImage, canRemoveAnswer, error: null };
      let tmp4;
      if (fieldErrors != null) {
        const _HermesInternal = HermesInternal;
        tmp4 = tmp3["answer-" + localCreationAnswerId.localCreationAnswerId];
      }
      obj.error = tmp4;
      return options(PollAnswerInputDefault, obj, localCreationAnswerId.localCreationAnswerId);
    }),

  ];
  if (canAddMoreAnswers) {
    const obj19 = { onPress: handleAddAnswer };
    canAddMoreAnswers = tmp14(fieldErrors, obj19);
  }
  const obj20 = { children: null };
  items7[2] = canAddMoreAnswers;
  obj17.children = items7;
  items6[2] = c11(allowMultiSelect, obj17);
  obj14.children = items6;
  items5[1] = c11(c6, obj14);
  const obj21 = { style: tmp7.pollConfigSection, children: null };
  const items8 = [c9(shouldFocusOnInvalidField, { selectedDuration: duration, onChange: setDuration }), ];
  const obj22 = { label: null, checked: null, onPress: null };
  const intl6 = tmp4(1126).intl;
  obj22.label = intl6.string(channel(1126).t["Ux+iQU"]);
  obj22.checked = allowMultiSelect;
  obj22.onPress = function onPress() {
    return _undefined(!allowMultiSelect);
  };
  items8[1] = c9(channel(5990).TableCheckboxRow, obj22);
  obj21.children = items8;
  items5[2] = c11(allowMultiSelect, obj21);
  obj20.children = items5;
  obj7.children = c11(handleAddAnswer, obj20);
  return c9(allowMultiSelect, obj7);
};