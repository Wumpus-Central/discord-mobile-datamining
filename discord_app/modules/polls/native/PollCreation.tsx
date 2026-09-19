// discord_app/modules/polls/native/PollCreation.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ChatInputUtils from "../../../utils/native/ChatInputUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useAlertStore from "../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import TextInput from "../../../design/components/TextInput/native/TextInput.native.tsx";
import PollsUtils from "../PollsUtils.tsx";
import ScheduledMessageTypes from "../../scheduled_messages/ScheduledMessageTypes.tsx";
import PollsIcon from "../../../design/components/Icon/native/redesign/generated/PollsIcon.tsx";
import PollCreationModalActionCreators from "PollCreationModalActionCreators.tsx";
import _modDef12450 from "../../../../_runtime/metro/12450__.js";
import ScheduledMessagesUtils from "../../scheduled_messages/native/ScheduledMessagesUtils.native.tsx";
import PollAnswerInputDefault from "PollAnswerInput.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
  const items = [React7(AlertModal.AlertActionButton, obj3, "confirm")];
  const obj4 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t["2BR5R2"]);
  items[1] = React7(AlertModal.AlertActionButton, obj4, "back");
  obj2.children = items;
  obj.actions = closure_1_11(closure_1_10, obj2);
  return React7(AlertModal.AlertModal, obj);
}
function AddAnswerButton(onPress) {
  const tmp = closure_12();
  const obj2 = {
    onPress: onPress.onPress,
    style: tmp.addAnswerButtonDefault,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null,
  };
  const obj = { source: _modDef12450, size: native.Icon.Sizes.LARGE, color: tmp.addAnswerIcon.color };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t.B2Uvme);
  const items = [
    React7(native.Icon, { source: _modDef12450, size: native.Icon.Sizes.LARGE, color: tmp.addAnswerIcon.color }),
  ];
  const obj3 = { variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.B2Uvme);
  items[1] = React7(Text_Text.Text, obj3);
  obj2.children = items;
  return closure_1_11(React4, obj2);
}
function PollDurationSelectionRow(selectedDuration) {
  selectedDuration = selectedDuration.selectedDuration;
  const onChange = selectedDuration.onChange;
  const tmp = onChange(12451)()[selectedDuration];
  let obj = {
    label: null,
    accessibilityLabel: null,
    accessibilityHint: null,
    onPress: null,
    trailing: null,
    arrow: true,
  };
  const intl = selectedDuration(1115).intl;
  obj.label = intl.string(selectedDuration(1115).t.bGHzxb);
  const intl2 = selectedDuration(1115).intl;
  obj.accessibilityLabel = "" + intl2.string(selectedDuration(1115).t.bGHzxb) + " " + tmp;
  const intl3 = selectedDuration(1115).intl;
  obj.accessibilityHint = intl3.string(selectedDuration(1115).t.A4PJ1o);
  obj.onPress = function onPress() {
    ChatInputUtils.dismissKeyboard();
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12452, dependencyMap.paths), React6, {
      selectedDuration,
      onChange,
    });
  };
  obj.trailing = closure_9(selectedDuration(4752).Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: tmp,
  });
  return closure_9(selectedDuration(5817).TableRow, obj);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: closure_4, View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const PollsConstants = fn(8069);
({ MAX_POLL_QUESTION_LENGTH: closure_7, POLL_CREATION_DURATION_ACTION_SHEET_KEY: closure_8 } = PollsConstants);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4756);
let obj = {
  viewPadding: { paddingHorizontal: 18 },
  scrollContainer: { paddingVertical: 20, gap: 16 },
  safeAreaContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 },
  header: { flexDirection: "row", paddingHorizontal: 18, paddingVertical: 10 },
  actionButton: { flex: 0, justifyContent: "flex-start", minWidth: 48, paddingHorizontal: 0, marginHorizontal: 0 },
  postButton: { justifyContent: "flex-end" },
  title: { textAlign: "center", flexGrow: 1 },
  label: { fontSize: 14 },
  answerInputsContainer: { marginVertical: 20, rowGap: 16 },
  addAnswerButtonDefault: null,
  addAnswerIcon: null,
  pollConfigSection: null,
};
const PlatformUtils = fn(1364);
let num = 8;
if (PlatformUtils.isAndroid()) {
  num = 10;
}
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.addAnswerButtonDefault = {
  paddingVertical: num,
  paddingLeft: 14,
  marginRight: 30,
  display: "flex",
  flexDirection: "row",
  gap: 16,
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: nativeDefault.colors.MESSAGE_BACKGROUND_HOVER,
  borderRadius: nativeDefault.radii.lg,
};
let obj4 = {
  paddingVertical: num,
  paddingLeft: 14,
  marginRight: 30,
  display: "flex",
  flexDirection: "row",
  gap: 16,
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: nativeDefault.colors.MESSAGE_BACKGROUND_HOVER,
  borderRadius: nativeDefault.radii.lg,
};
obj.addAnswerIcon = { color: nativeDefault.colors.TEXT_MUTED };
let obj6 = { color: nativeDefault.colors.TEXT_MUTED };
obj.pollConfigSection = { borderTopWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
let closure_12 = createStyles.createStyles(obj);
let closure_14 = noop.forwardRef((error, ref) => {
  error = error.error;
  let tmp = null != error;
  ({ onChange, onSubmitEditing } = error);
  if (tmp) {
    tmp = error.length > 0;
  }
  const obj = {
    ref,
    textAlignVertical: "center",
    label: null,
    accessibilityHint: null,
    placeholder: null,
    onChange: null,
    clearable: true,
    status: null,
    errorMessage: null,
    maxLength: null,
    returnKeyType: "next",
    blurOnSubmit: false,
    onSubmitEditing: null,
    textContentType: "none",
    autoFocus: true,
    autoCorrect: true,
  };
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
  let obj = { type: channel(1249).ImpressionTypes.VIEW, name: channel(1249).ImpressionNames.POLL_EDITOR_VIEWED };
  onCancel(9047)(obj);
  const items = [onCancel];
  const effect = answers.useEffect(
    () => () => {
      if (!ref.current) {
        if (onCancel != null) {
          tmp();
        }
      }
    },
    items,
  );
  const tmp7 = c12();
  const insets = onCancel(7221)({ includeKeyboardHeight: true }).insets;
  const tmp3 = onCancel(9047);
  let canUseScheduledMessages = channel(8086).useCanUseScheduledMessages();
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
    const AccessibilityAnnouncer = channel(4467).AccessibilityAnnouncer;
    const intl = channel(1115).intl;
    AccessibilityAnnouncer.announce(
      intl.formatToPlainString(channel(1115).t.BByGU4, { number: indexToRemove.indexToRemove + 1 }),
    );
  }, []);
  const tmp11 = onCancel(12453)(channel, callback, callback1);
  answers = tmp11.answers;
  ({ question: c4, allowMultiSelect } = tmp11);
  ({
    setAllowMultiSelect: c6,
    canAddMoreAnswers,
    canRemoveMoreAnswers: c7,
    handleAnswerTextChange: c8,
    handleEmojiSelect: c9,
    handleAddAnswer,
  } = tmp11);
  ({ handleRemoveAnswer: c11, handleRemoveAnswerImage: c12, scheduledTimestamp } = tmp11);
  ({ setScheduledTimestamp: c14, fieldErrors } = tmp11);
  ({ createPollError, submitting, shouldFocusOnInvalidField } = tmp11);
  const setShouldFocusOnInvalidField = tmp11.setShouldFocusOnInvalidField;
  ({ handleQuestionChange, handleSubmitPoll, duration, setDuration } = tmp11);
  let obj2 = channel(8086);
  closure_18 = channel(12458).useTrackPollCreationEvents(answers, allowMultiSelect).trackPollCreationCancelled;
  let obj3 = channel(12458);
  channel(5842).useNavigatorBackPressHandler(() => {
    if (obj.isPollCreationEmpty(c4, answers)) {
      closure_18();
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t["+G3oRq"]));
      let flag = false;
    } else {
      const obj2 = { onConfirm: handleCancelClose };
      useAlertStore.openAlert("poll-creation-unsaved-changes", React7(UnsavedChangesAlertModal, obj2));
      flag = true;
      const tmpResult = useAlertStore;
    }
    return flag;
  });
  const obj6 = onCancel(12459)({
    onAddAnswer() {
      handleAddAnswer();
    },
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
  let intl = channel(1115).intl;
  obj9.accessibilityLabel = intl.string(channel(1115).t["ETE/oC"]);
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
      useAlertStore.openAlert("poll-creation-unsaved-changes", React7(UnsavedChangesAlertModal, obj2));
      const tmpResult2 = useAlertStore;
    }
    obj = PollsUtils;
  };
  obj9.source = onCancel(5893);
  obj9.style = tmp7.actionButton;
  const items3 = [c9(channel(7617).HeaderActionButton, obj9), , ,];
  const obj10 = {
    accessibilityRole: "header",
    variant: "redesign/heading-18/bold",
    color: "mobile-text-heading-primary",
    style: tmp7.title,
    children: null,
  };
  const intl2 = channel(1115).intl;
  obj10.children = intl2.string(channel(1115).t.Flr51u);
  items3[1] = c9(channel(4752).Text, obj10);
  if (canUseScheduledMessages) {
    const obj11 = { accessibilityLabel: null, style: null, disabled: null, icon: null, onPress: null };
    const intl3 = tmp4(1115).intl;
    obj11.accessibilityLabel = intl3.string(tmp4(1115).t.rlf0tb);
    obj11.style = tmp7.actionButton;
    obj11.disabled = submitting;
    let TEXT_BRAND;
    if (null != scheduledTimestamp) {
      TEXT_BRAND = tmp(576).colors.TEXT_BRAND;
    }
    const obj12 = { color: TEXT_BRAND };
    obj11.icon = tmp14(tmp4(12460).CalendarPlusIcon, obj12);
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
    canUseScheduledMessages = tmp14(tmp4(7617).HeaderActionButton, obj11);
  }
  items3[2] = canUseScheduledMessages;
  const obj13 = { text: null, style: null, disabled: null, onPress: null };
  const intl4 = tmp4(1115).intl;
  obj13.text = intl4.string(channel(1115).t.JOj8Zk);
  const items4 = [,];
  ({ actionButton: arr6[0], postButton: arr6[1] } = tmp7);
  obj13.style = items4;
  obj13.disabled = submitting;
  obj13.onPress = handleSubmitPoll;
  items3[3] = c9(channel(7617).HeaderActionButton, obj13);
  obj8.children = items3;
  const items5 = [c11(allowMultiSelect, obj8), ,];
  const obj14 = {
    style: tmp7.viewPadding,
    contentContainerStyle: tmp7.scrollContainer,
    keyboardShouldPersistTaps: "handled",
    children: null,
  };
  let tmp14Result = null != createPollError;
  if (tmp14Result) {
    let anyErrorMessage;
    if (createPollError != null) {
      anyErrorMessage = createPollError.getAnyErrorMessage();
    }
    const obj15 = { children: anyErrorMessage };
    tmp14Result = tmp14(tmp(12474), obj15);
    let tmpResult = tmp(12474);
  }
  const items6 = [tmp14Result, ,];
  const obj16 = {
    ref: obj6.refWithKey("question"),
    onChange: handleQuestionChange,
    onSubmitEditing: obj6.focusNext,
    error: null,
  };
  let question;
  if (fieldErrors != null) {
    question = fieldErrors.question;
  }
  obj16.error = question;
  items6[1] = c9(c14, obj16);
  const obj17 = { style: tmp7.answerInputsContainer, children: null };
  const obj18 = { text: null, color: "text-subtle", style: null };
  const intl5 = tmp4(1115).intl;
  obj18.text = intl5.string(channel(1115).t.oMBfeS);
  obj18.style = tmp7.label;
  const items7 = [
    c9(channel(8870).FormLabel, obj18),
    answers.map((localCreationAnswerId, index) => {
      const obj = {
        inputRef: obj6.refWithKey("answer-" + localCreationAnswerId.localCreationAnswerId),
        answer: localCreationAnswerId,
        index,
        channelId: channel.id,
        onSubmitEditing: obj6.focusNext,
        onAnswerTextChange,
        onAnswerEmojiSelect,
        onRemoveAnswer,
        onRemoveAnswerImage,
        canRemoveAnswer,
        error: null,
      };
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
  const items8 = [c9(shouldFocusOnInvalidField, { selectedDuration: duration, onChange: setDuration })];
  const obj22 = { label: null, checked: null, onPress: null };
  const intl6 = tmp4(1115).intl;
  obj22.label = intl6.string(channel(1115).t["Ux+iQU"]);
  obj22.checked = allowMultiSelect;
  obj22.onPress = function onPress() {
    return _undefined(!allowMultiSelect);
  };
  items8[1] = c9(channel(5816).TableCheckboxRow, obj22);
  obj21.children = items8;
  items5[2] = c11(allowMultiSelect, obj21);
  obj20.children = items5;
  obj7.children = c11(handleAddAnswer, obj20);
  return c9(allowMultiSelect, obj7);
}
