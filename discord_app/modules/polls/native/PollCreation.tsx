// === Module 11842: PollCreation ===

// Module 11842 (PollCreation)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4596 */;
import ChatInputUtils from "ChatInputUtils" /* 4751 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import useAlertStore from "useAlertStore" /* 5716 */;
import AlertModal2 from "AlertModal" /* 5720 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6105 */;
import PollsUtils from "PollsUtils" /* 7270 */;
import ScheduledMessageTypes from "ScheduledMessageTypes" /* 7488 */;
import PollsIcon from "PollsIcon" /* 10380 */;
import AssetRegistryDefault from "AssetRegistry" /* 10992 */;
import PollCreationModalActionCreators from "PollCreationModalActionCreators" /* 11841 */;
import ScheduledMessagesUtils from "ScheduledMessagesUtils" /* 11854 */;
import PollAnswerInputDefault from "PollAnswerInput" /* 11868 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PollsConstants from "PollsConstants" /* 7468 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, indexToRemove, onConfirm, onPress;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
function PollDurationSelectionRow(selectedDuration) {
  let intl;
  let intl2;
  let intl3;
  selectedDuration = selectedDuration.selectedDuration;
  const onChange = selectedDuration.onChange;
  const tmp = onChange(11843)()[selectedDuration];
  let obj = {
    label: intl.string(selectedDuration(1126).t.bGHzxb),
    accessibilityLabel: "" + intl2.string(selectedDuration(1126).t.bGHzxb) + " " + tmp,
    accessibilityHint: intl3.string(selectedDuration(1126).t.A4PJ1o),
    onPress() {
      const obj = ChatInputUtils;
      obj.dismissKeyboard();
      const obj2 = ActionSheetActionCreatorsDefault;
      const obj3 = { selectedDuration, onChange };
      obj2.openLazy(asyncRequire(11844, dependencyMap.paths), metroImportAll, obj3);
    },
    trailing: closure_9(selectedDuration(4892).Text, { variant: "text-md/normal", color: "text-muted", children: tmp }),
    arrow: true
  };
  const TableRow = selectedDuration(6000).TableRow;
  intl = selectedDuration(1126).intl;
  intl2 = selectedDuration(1126).intl;
  intl3 = selectedDuration(1126).intl;
  return closure_9(TableRow, obj);
}
({ TouchableOpacity: closure_4, View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ MAX_POLL_QUESTION_LENGTH: metroImportDefault, POLL_CREATION_DURATION_ACTION_SHEET_KEY: metroImportAll } = PollsConstants);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { viewPadding: { paddingHorizontal: 18 }, scrollContainer: { paddingVertical: 20, gap: 16 }, safeAreaContainer: obj2, header: { flexDirection: "row", paddingHorizontal: 18, paddingVertical: 10 }, actionButton: { flex: 0, justifyContent: "flex-start", minWidth: 48, paddingHorizontal: 0, marginHorizontal: 0 }, postButton: { justifyContent: "flex-end" }, title: { textAlign: "center", flexGrow: 1 }, label: { fontSize: 14 }, answerInputsContainer: { marginVertical: 20, rowGap: 16 }, addAnswerButtonDefault: obj3, addAnswerIcon: obj4, pollConfigSection: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
let num = 8;
if (PlatformUtils.isAndroid()) {
  num = 10;
}
obj3 = { paddingVertical: num, paddingLeft: 14, marginRight: 30, display: "flex", flexDirection: "row", gap: 16, alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.MESSAGE_BACKGROUND_HOVER, borderRadius: nativeDefault.radii.lg };
obj4 = { color: nativeDefault.colors.TEXT_MUTED };
obj5 = { borderTopWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((onConfirm) => {
  let intl4;
  let items;
  let obj5;
  let tmp10;
  let tmp13;
  let tmp16;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(8);
  onConfirm = onConfirm.onConfirm;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl7.intl;
    const stringResult = intl.string(intl7.t.HMrgcp);
    const intl2 = intl7.intl;
    const stringResult1 = intl2.string(intl7.t["Wxa/j8"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl7.intl;
    const stringResult2 = intl3.string(intl7.t.TzJA4g);
    cResult[2] = stringResult2;
    tmp8 = stringResult2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== onConfirm) {
    const obj2 = { text: tmp8, onPress: onConfirm };
    const tmp12 = React4(AlertModal2.AlertActionButton, obj2, "confirm");
    cResult[3] = onConfirm;
    cResult[4] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "secondary", text: intl4.string(intl7.t["2BR5R2"]) };
    const AlertActionButton = AlertModal2.AlertActionButton;
    intl4 = intl7.intl;
    const tmp15 = React4(AlertActionButton, obj3, "back");
    cResult[5] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== tmp10) {
    const obj4 = { title: tmp4, content: tmp5, actions: unpackModuleId(authStore, obj5) };
    obj5 = { children: items };
    items = [tmp10, tmp13];
    const AlertModal = AlertModal2.AlertModal;
    const tmp20 = React4(AlertModal, obj4);
    cResult[6] = tmp10;
    cResult[7] = tmp20;
    tmp16 = tmp20;
  } else {
    tmp16 = cResult[7];
  }
  return tmp16;
}) : ((onConfirm) => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  onConfirm = onConfirm.onConfirm;
  const obj = { title: intl.string(intl7.t.HMrgcp), content: intl2.string(intl7.t["Wxa/j8"]), actions: unpackModuleId(authStore, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl7.intl;
  intl2 = intl7.intl;
  obj2 = { children: items };
  const obj3 = { text: intl3.string(intl7.t.TzJA4g), onPress: onConfirm };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl7.intl;
  items = [React4(AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: intl4.string(intl7.t["2BR5R2"]) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl7.intl;
  items[1] = React4(AlertActionButton2, obj4, "back");
  return React4(AlertModal, obj);
});
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let error;
  let first;
  let onChange;
  let onSubmitEditing;
  const obj = react2;
  const cResult = obj.c(12);
  ({ onChange, onSubmitEditing, error } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl7.intl;
    const stringResult = intl.string(intl7.t.WBiKnI);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === error) {
    let tmp7;
    let tmp9;
    if (cResult[2] === (null != error && error.length > 0)) {
      tmp7 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = intl7.intl;
      const stringResult1 = intl3.string(intl7.t["/uQqJW"]);
      cResult[4] = stringResult1;
      tmp9 = stringResult1;
    } else {
      tmp9 = cResult[4];
    }
    let str = "default";
    if (null != error && error.length > 0) {
      str = "error";
    }
    if (cResult[5] === error) {
      if (cResult[6] === onChange) {
        if (cResult[7] === onSubmitEditing) {
          if (cResult[8] === ref) {
            if (cResult[9] === tmp7) {
              let tmp12;
              if (cResult[10] === str) {
                tmp12 = cResult[11];
              }
              return tmp12;
            }
          }
        }
      }
    }
    const obj2 = { ref, textAlignVertical: "center", label: first, accessibilityHint: tmp7, placeholder: tmp9, onChange, clearable: true, status: str, errorMessage: error, maxLength: metroImportDefault, returnKeyType: "next", blurOnSubmit: false, onSubmitEditing, textContentType: "none", autoFocus: true, autoCorrect: true };
    const tmp15 = React4(TextInput_TextInput.TextInput, obj2);
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
  if (null != error && error.length > 0) {
    const intl2 = intl7.intl;
    const obj3 = { errorMessage: error };
    formatToPlainStringResult = intl2.formatToPlainString(intl7.t.jnq5Ho, obj3);
  }
  cResult[1] = error;
  cResult[2] = null != error && error.length > 0;
  cResult[3] = formatToPlainStringResult;
  tmp7 = formatToPlainStringResult;
}) : ((error, ref) => {
  let formatToPlainStringResult;
  let intl;
  let intl3;
  let onChange;
  let onSubmitEditing;
  let str;
  error = error.error;
  let tmp = null != error;
  ({ onChange, onSubmitEditing } = error);
  if (tmp) {
    tmp = error.length > 0;
  }
  const obj = { ref, textAlignVertical: "center", label: intl.string(intl7.t.WBiKnI), accessibilityHint: formatToPlainStringResult, placeholder: intl3.string(intl7.t["/uQqJW"]), onChange, clearable: true, status: str, errorMessage: error, maxLength: metroImportDefault, returnKeyType: "next", blurOnSubmit: false, onSubmitEditing, textContentType: "none", autoFocus: true, autoCorrect: true };
  const TextInput = TextInput_TextInput.TextInput;
  intl = intl7.intl;
  formatToPlainStringResult = undefined;
  if (tmp) {
    const intl2 = intl7.intl;
    const obj2 = { errorMessage: error };
    formatToPlainStringResult = intl2.formatToPlainString(intl7.t.jnq5Ho, obj2);
  }
  intl3 = intl7.intl;
  str = "default";
  if (tmp) {
    str = "error";
  }
  return React4(TextInput, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let intl2;
  let items;
  let tmp11;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(8);
  onPress = onPress.onPress;
  const tmp4 = closure_12();
  const addAnswerButtonDefault = tmp4.addAnswerButtonDefault;
  if (cResult[0] !== tmp4.addAnswerIcon.color) {
    const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.LARGE, color: tmp4.addAnswerIcon.color };
    const Icon = native.Icon;
    const tmp8 = React4(Icon, obj2);
    cResult[0] = tmp4.addAnswerIcon.color;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl7.intl;
    const stringResult = intl.string(intl7.t.B2Uvme);
    cResult[2] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-md/medium", color: "text-muted", children: intl2.string(intl7.t.B2Uvme) };
    const Text = Text_Text.Text;
    intl2 = intl7.intl;
    const tmp13 = React4(Text, obj3);
    cResult[3] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === addAnswerButtonDefault) {
    if (cResult[5] === tmp5) {
      let tmp14;
      if (cResult[6] === onPress) {
        tmp14 = cResult[7];
      }
      return tmp14;
    }
  }
  const obj4 = { onPress, style: addAnswerButtonDefault, accessibilityRole: "button", accessibilityLabel: tmp9, children: items };
  items = [tmp5, tmp11];
  const tmp15 = unpackModuleId(React3, obj4);
  cResult[4] = addAnswerButtonDefault;
  cResult[5] = tmp5;
  cResult[6] = onPress;
  cResult[7] = tmp15;
  tmp14 = tmp15;
}) : ((onPress) => {
  let intl;
  let intl2;
  let items;
  onPress = onPress.onPress;
  const tmp = closure_12();
  const addAnswerButtonDefault = tmp.addAnswerButtonDefault;
  const obj = { source: AssetRegistryDefault, size: native.Icon.Sizes.LARGE, color: tmp.addAnswerIcon.color };
  const Icon = native.Icon;
  const obj2 = { onPress, style: addAnswerButtonDefault, accessibilityRole: "button", accessibilityLabel: intl.string(intl7.t.B2Uvme), children: items };
  const tmp2 = React4(Icon, obj);
  intl = intl7.intl;
  items = [tmp2, ];
  const obj3 = { variant: "text-md/medium", color: "text-muted", children: intl2.string(intl7.t.B2Uvme) };
  const Text = Text_Text.Text;
  intl2 = intl7.intl;
  items[1] = React4(Text, obj3);
  return unpackModuleId(React3, obj2);
});
const result = size.fileFinishedImporting("modules/polls/native/PollCreation.tsx");

export default function PollCreation(channel) {
  let CalendarPlusIcon;
  let _undefined;
  let allowMultiSelect;
  let c11;
  let c12;
  let c14;
  let c4;
  let c6;
  let c7;
  let c8;
  let c9;
  let canAddMoreAnswers;
  let canRemoveAnswer;
  let closure_2;
  let createPollError;
  let duration;
  let fieldErrors;
  let handleAddAnswer;
  let handleQuestionChange;
  let handleSubmitPoll;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items2;
  let items3;
  let items4;
  let items6;
  let items7;
  let items8;
  let obj12;
  let obj20;
  let onAnswerEmojiSelect;
  let onAnswerTextChange;
  let onRemoveAnswer;
  let onRemoveAnswerImage;
  let onSelect;
  let question;
  let scheduledTimestamp;
  let setDuration;
  let shouldFocusOnInvalidField;
  let submitting;
  let tmp17;
  channel = channel.channel;
  const onCancel = channel.onCancel;
  dependencyMap = undefined;
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
    const obj = PollCreationModalActionCreators;
    obj.closeCreatePollModal();
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl7.intl;
    announce(intl.string(intl7.t["+G3oRq"]));
  }
  const tmp = onCancel;
  let tmp2 = dependencyMap;
  let obj = { type: channel(1260).ImpressionTypes.VIEW, name: channel(1260).ImpressionNames.POLL_EDITOR_VIEWED };
  let tmp4 = channel;
  const tmp3 = onCancel(8455);
  tmp3(obj);
  const items = [onCancel];
  const effect = answers.useEffect(() => {
    let ref;
    return () => {
      if (!ref.current) {
        if (onCancel != null) {
          tmp();
        }
      }
    };
  }, items);
  const tmp7 = c12();
  const insets = onCancel(6478)({ includeKeyboardHeight: true }).insets;
  let obj2 = channel(7486);
  let canUseScheduledMessages = obj2.useCanUseScheduledMessages();
  dependencyMap = answers.useRef(false);
  const callback = answers.useCallback((arg0) => {
    let intl;
    closure_2.current = true;
    const obj = PollCreationModalActionCreators;
    obj.closeCreatePollModal();
    if (null == arg0) {
      const obj2 = { key: "POLL_CREATED_SUCCESS", IconComponent: PollsIcon.PollsIcon, content: intl.string(intl7.t.OPsckI) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl7.intl;
      open(obj2);
    }
  }, []);
  const callback1 = answers.useCallback((indexToRemove) => {
    indexToRemove = indexToRemove.indexToRemove;
    const AccessibilityAnnouncer = channel(closure_2[28]).AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = channel(closure_2[9]).intl;
    const obj = { number: indexToRemove + 1 };
    announce(intl.formatToPlainString(channel(closure_2[9]).t.BByGU4, obj));
  }, []);
  const tmp11 = onCancel(11845)(channel, callback, callback1);
  answers = tmp11.answers;
  ({ question: c4, allowMultiSelect } = tmp11);
  ({ setAllowMultiSelect: c6, canAddMoreAnswers, canRemoveMoreAnswers: c7, handleAnswerTextChange: c8, handleEmojiSelect: c9, handleAddAnswer } = tmp11);
  ({ handleRemoveAnswer: c11, handleRemoveAnswerImage: c12, scheduledTimestamp } = tmp11);
  ({ setScheduledTimestamp: c14, fieldErrors } = tmp11);
  ({ createPollError, submitting, shouldFocusOnInvalidField } = tmp11);
  const setShouldFocusOnInvalidField = tmp11.setShouldFocusOnInvalidField;
  ({ handleQuestionChange, handleSubmitPoll, duration, setDuration } = tmp11);
  const obj3 = channel(11850);
  let closure_18 = obj3.useTrackPollCreationEvents(answers, allowMultiSelect).trackPollCreationCancelled;
  const obj4 = channel(6023);
  obj4.useNavigatorBackPressHandler(() => {
    let flag;
    const obj = PollsUtils;
    if (obj.isPollCreationEmpty(c4, answers)) {
      closure_18();
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl7.intl;
      announce(intl.string(intl7.t["+G3oRq"]));
      flag = false;
    } else {
      const obj2 = { onConfirm: handleCancelClose };
      const tmpResult = useAlertStore;
      tmpResult.openAlert("poll-creation-unsaved-changes", React4(closure_13, obj2));
      flag = true;
    }
    return flag;
  });
  const obj5 = {
    onAddAnswer() {
      handleAddAnswer();
    }
  };
  const obj6 = onCancel(11851)(obj5);
  const items1 = [fieldErrors, obj6, setShouldFocusOnInvalidField, shouldFocusOnInvalidField];
  const effect1 = answers.useEffect(() => {
    const keys = Object.keys(fieldErrors);
    if (keys.length > 0) {
      const intl = intl7.intl;
      const obj = { numOfErrors: keys.length };
      const formatToPlainStringResult = intl.formatToPlainString(intl7.t.w8e4qF, obj);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(formatToPlainStringResult);
      if (shouldFocusOnInvalidField) {
        obj6.focus(keys[0]);
        setShouldFocusOnInvalidField(false);
      }
    }
  }, items1);
  const obj7 = { style: items2, children: c11(tmp17, obj20) };
  items2 = [tmp7.safeAreaContainer, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  const obj8 = { style: tmp7.header, children: items3 };
  const obj9 = {
    accessibilityLabel: intl.string(channel(1126).t["ETE/oC"]),
    onPress() {
      const obj = PollsUtils;
      if (obj.isPollCreationEmpty(c4, answers)) {
        closure_18();
        const tmpResult = PollCreationModalActionCreators;
        tmpResult.closeCreatePollModal();
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = intl7.intl;
        announce(intl.string(intl7.t["+G3oRq"]));
      } else {
        const obj2 = { onConfirm: handleCancelClose };
        const tmpResult2 = useAlertStore;
        tmpResult2.openAlert("poll-creation-unsaved-changes", React4(closure_13, obj2));
      }
    },
    source: onCancel(6025),
    style: tmp7.actionButton
  };
  const HeaderActionButton = channel(6890).HeaderActionButton;
  intl = channel(1126).intl;
  items3 = [c9(HeaderActionButton, obj9), , , ];
  const obj10 = { accessibilityRole: "header", variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", style: tmp7.title, children: intl2.string(channel(1126).t.Flr51u) };
  const Text = channel(4892).Text;
  intl2 = channel(1126).intl;
  items3[1] = c9(Text, obj10);
  tmp17 = handleAddAnswer;
  if (canUseScheduledMessages) {
    const obj11 = {
      accessibilityLabel: intl3.string(tmp4(1126).t.rlf0tb),
      style: tmp7.actionButton,
      disabled: submitting,
      icon: c9(CalendarPlusIcon, obj12),
      onPress() {
          let fn;
          const obj = { onSelect, currentTimestamp: scheduledTimestamp, onClear: fn, entryPoint: ScheduledMessageTypes.ScheduledMessageEntryPoint.POLL_CREATION, channelId: channel.id };
          fn = undefined;
          const pickScheduledMessageTime = ScheduledMessagesUtils.pickScheduledMessageTime;
          ScheduledMessagesUtils;
          if (null != scheduledTimestamp) {
            fn = () => onSelect(undefined);
          }
          return pickScheduledMessageTime(obj);
        }
    };
    const HeaderActionButton2 = tmp4(6890).HeaderActionButton;
    intl3 = tmp4(1126).intl;
    let TEXT_BRAND;
    CalendarPlusIcon = tmp4(11852).CalendarPlusIcon;
    if (null != scheduledTimestamp) {
      TEXT_BRAND = tmp(587).colors.TEXT_BRAND;
    }
    obj12 = { color: TEXT_BRAND };
    canUseScheduledMessages = tmp14(HeaderActionButton2, obj11);
  }
  items3[2] = canUseScheduledMessages;
  const obj13 = { text: intl4.string(tmp4(1126).t.JOj8Zk), style: items4, disabled: submitting, onPress: handleSubmitPoll };
  const HeaderActionButton3 = tmp4(6890).HeaderActionButton;
  intl4 = tmp4(1126).intl;
  items4 = [, ];
  ({ actionButton: arr6[0], postButton: arr6[1] } = tmp7);
  items3[3] = c9(HeaderActionButton3, obj13);
  const items5 = [c11(allowMultiSelect, obj8), , ];
  let tmp14Result = null != createPollError;
  const obj14 = { style: tmp7.viewPadding, contentContainerStyle: tmp7.scrollContainer, keyboardShouldPersistTaps: "handled", children: items6 };
  const tmp20 = c6;
  if (tmp14Result) {
    let anyErrorMessage;
    let tmpResult = tmp(11866);
    if (createPollError != null) {
      anyErrorMessage = createPollError.getAnyErrorMessage();
    }
    const obj15 = { children: anyErrorMessage };
    tmp14Result = tmp14(tmpResult, obj15);
  }
  items6 = [tmp14Result, , ];
  const obj16 = { ref: obj6.refWithKey("question"), onChange: handleQuestionChange, onSubmitEditing: obj6.focusNext, error: question };
  question = undefined;
  const tmp24 = c14;
  if (fieldErrors != null) {
    question = fieldErrors.question;
  }
  items6[1] = c9(tmp24, obj16);
  const obj17 = { style: tmp7.answerInputsContainer, children: items7 };
  const obj18 = { text: intl5.string(tmp4(1126).t.oMBfeS), color: "text-subtle", style: tmp7.label };
  const FormLabel = tmp4(8924).FormLabel;
  intl5 = tmp4(1126).intl;
  items7 = [
    c9(FormLabel, obj18),
    answers.map((localCreationAnswerId, index) => {
      let tmp4;
      const obj = { inputRef: obj6.refWithKey("answer-" + localCreationAnswerId.localCreationAnswerId), answer: localCreationAnswerId, index, channelId: channel.id, onSubmitEditing: obj6.focusNext, onAnswerTextChange, onAnswerEmojiSelect, onRemoveAnswer, onRemoveAnswerImage, canRemoveAnswer, error: tmp4 };
      tmp4 = undefined;
      const tmp2 = PollAnswerInputDefault;
      if (fieldErrors != null) {
        const _HermesInternal = HermesInternal;
        tmp4 = tmp3["answer-" + localCreationAnswerId.localCreationAnswerId];
      }
      return React4(tmp2, obj, localCreationAnswerId.localCreationAnswerId);
    }),

  ];
  if (canAddMoreAnswers) {
    const obj19 = { onPress: handleAddAnswer };
    canAddMoreAnswers = tmp14(fieldErrors, obj19);
  }
  obj20 = { children: items5 };
  items7[2] = canAddMoreAnswers;
  items6[2] = c11(allowMultiSelect, obj17);
  items5[1] = c11(tmp20, obj14);
  const obj21 = { style: tmp7.pollConfigSection, children: items8 };
  items8 = [c9(shouldFocusOnInvalidField, { selectedDuration: duration, onChange: setDuration }), ];
  const obj22 = {
    label: intl6.string(tmp4(1126).t["Ux+iQU"]),
    checked: allowMultiSelect,
    onPress() {
      return _undefined(!allowMultiSelect);
    }
  };
  const TableCheckboxRow = tmp4(5997).TableCheckboxRow;
  intl6 = tmp4(1126).intl;
  items8[1] = c9(TableCheckboxRow, obj22);
  items5[2] = c11(allowMultiSelect, obj21);
  return c9(allowMultiSelect, obj7);
};