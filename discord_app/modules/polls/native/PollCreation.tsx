// discord_app/modules/polls/native/PollCreation.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import getAlertModalItemKey from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import TextInput from "../../../design/components/TextInput/native/TextInput.native.tsx";
import registerAssetDefault from "../../../../_runtime/11702_registerAsset.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import POLL_ATTACHMENT_FOLDER from "../PollsConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import set from "../../../utils/PlatformUtils.tsx";

require = arg1;
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
  obj1 = { variant: "secondary", text: null };
  const intl4 = getSystemLocale.intl;
  obj1[1] = intl4.string(getSystemLocale.t["2BR5R2"]);
  items[1] = callback(getAlertModalItemKey.AlertActionButton, obj1, "back");
  obj[0] = items;
  obj[2] = callback2(closure_10, obj);
  return callback(getAlertModalItemKey.AlertModal, obj);
}
function AddAnswerButton(onPress) {
  const tmp = callback3();
  let obj = { source: registerAssetDefault, size: Button.Icon.Sizes.LARGE, color: tmp.addAnswerIcon.color };
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
  const tmp = onChange(11703)()[selectedDuration];
  let obj = { label: null, accessibilityLabel: null, accessibilityHint: null, onPress: null, trailing: null, arrow: true };
  const intl = selectedDuration(1236).intl;
  obj[0] = intl.string(selectedDuration(1236).t.bGHzxb);
  const intl2 = selectedDuration(1236).intl;
  obj[1] = "" + intl2.string(selectedDuration(1236).t.bGHzxb) + " " + tmp;
  const intl3 = selectedDuration(1236).intl;
  obj[2] = intl3.string(selectedDuration(1236).t.A4PJ1o);
  obj[3] = function onPress() {
    let obj = selectedDuration(closure_1_2[18]);
    obj.dismissKeyboard();
    obj = { selectedDuration, onChange };
    onChange(closure_1_2[14]).openLazy(selectedDuration(closure_1_2[16])(closure_1_2[15], closure_1_2.paths), closure_1_8, obj);
  };
  obj[4] = callback(selectedDuration(4442).Text, { variant: "text-md/normal", color: "text-muted", children: tmp });
  return callback(selectedDuration(5564).TableRow, obj);
}
let c3 = importAllResult;
({ TouchableOpacity: c4, View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ MAX_POLL_QUESTION_LENGTH: error, POLL_CREATION_DURATION_ACTION_SHEET_KEY: closure_8 } = POLL_ATTACHMENT_FOLDER);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { viewPadding: { paddingHorizontal: 18 }, scrollContainer: { paddingVertical: 20, gap: 16 }, safeAreaContainer: null, header: null, actionButton: null, postButton: null, title: null, label: null, answerInputsContainer: null, addAnswerButtonDefault: null, addAnswerIcon: null, pollConfigSection: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
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
createCacheKey = { paddingVertical: num, paddingLeft: 14, marginRight: 30, display: "flex", flexDirection: "row", gap: 16, alignItems: "center", justifyContent: "flex-start", backgroundColor: ThemesDefault.colors.MESSAGE_BACKGROUND_HOVER, borderRadius: ThemesDefault.radii.lg };
obj[9] = createCacheKey;
obj[10] = { color: ThemesDefault.colors.TEXT_MUTED };
let obj2 = { color: ThemesDefault.colors.TEXT_MUTED };
obj[11] = { borderTopWidth: 1, borderColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
let closure_12 = createCacheKey.createStyles(obj);
let closure_14 = importAllResult.forwardRef((error, ref) => {
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
  channel = channel.channel;
  const onCancel = channel.onCancel;
  dependencyMap = undefined;
  let answers;
  c4 = undefined;
  allowMultiSelect = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  let callback;
  handleAddAnswer = undefined;
  c11 = undefined;
  let callback3;
  scheduledTimestamp = undefined;
  c14 = undefined;
  fieldErrors = undefined;
  shouldFocusOnInvalidField = undefined;
  let setShouldFocusOnInvalidField;
  closure_18 = undefined;
  let obj5;
  function handleCancelClose() {
    callback();
    channel(11700).closeCreatePollModal();
    const AccessibilityAnnouncer = channel(1351).AccessibilityAnnouncer;
    const intl = channel(1236).intl;
    AccessibilityAnnouncer.announce(intl.string(channel(1236).t["+G3oRq"]));
  }
  let obj = { type: channel(503).ImpressionTypes.VIEW, name: channel(503).ImpressionNames.POLL_EDITOR_VIEWED };
  onCancel(8832)(obj);
  const items = [onCancel];
  const effect = answers.useEffect(() => () => {
    if (!ref.current) {
      if (closure_1 != null) {
        tmp();
      }
    }
  }, items);
  const tmp7 = callback3();
  const insets = onCancel(5559)({ includeKeyboardHeight: true }).insets;
  obj1 = channel(7536);
  let canUseScheduledMessages = obj1.useCanUseScheduledMessages();
  dependencyMap = answers.useRef(false);
  callback = answers.useCallback((arg0) => {
    dependencyMap.current = true;
    let obj = channel(11700);
    obj.closeCreatePollModal();
    if (null == arg0) {
      obj = { key: "POLL_CREATED_SUCCESS", IconComponent: null, content: null };
      obj[1] = tmp(10368).PollsIcon;
      const intl = tmp(1236).intl;
      obj[2] = intl.string(tmp(1236).t.OPsckI);
      onCancel(4163).open(obj);
      const obj2 = onCancel(4163);
    }
  }, []);
  const callback1 = answers.useCallback((indexToRemove) => {
    const AccessibilityAnnouncer = channel(1351).AccessibilityAnnouncer;
    const intl = channel(1236).intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(channel(1236).t.BByGU4, { number: indexToRemove.indexToRemove + 1 }));
  }, []);
  const tmp11 = onCancel(11705)(channel, callback, callback1);
  answers = tmp11.answers;
  ({ question: c4, allowMultiSelect } = tmp11);
  ({ setAllowMultiSelect: c6, canAddMoreAnswers, canRemoveMoreAnswers: c7, handleAnswerTextChange: c8, handleEmojiSelect: c9, handleAddAnswer } = tmp11);
  ({ handleRemoveAnswer: c11, handleRemoveAnswerImage: c12, scheduledTimestamp } = tmp11);
  ({ setScheduledTimestamp: c14, fieldErrors } = tmp11);
  ({ createPollError, submitting, shouldFocusOnInvalidField } = tmp11);
  setShouldFocusOnInvalidField = tmp11.setShouldFocusOnInvalidField;
  ({ handleQuestionChange, handleSubmitPoll, duration, setDuration } = tmp11);
  let obj2 = channel(11710);
  closure_18 = obj2.useTrackPollCreationEvents(answers, allowMultiSelect).trackPollCreationCancelled;
  let obj3 = channel(5466);
  obj3.useNavigatorBackPressHandler(() => {
    let obj = channel(7452);
    if (obj.isPollCreationEmpty(c4, answers)) {
      callback();
      const AccessibilityAnnouncer = tmp(1351).AccessibilityAnnouncer;
      const intl = tmp(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(tmp(1236).t["+G3oRq"]));
      let flag = false;
    } else {
      obj = { onConfirm: null };
      obj[0] = handleCancelClose;
      tmp(4824).openAlert("poll-creation-unsaved-changes", _undefined2(scheduledTimestamp, obj));
      flag = true;
      const tmpResult = tmp(4824);
    }
    return flag;
  });
  obj = {
    onAddAnswer(arg0) {
      handleAddAnswer();
    }
  };
  obj5 = onCancel(11711)(obj);
  const items1 = [fieldErrors, obj5, setShouldFocusOnInvalidField, shouldFocusOnInvalidField];
  const effect1 = answers.useEffect(() => {
    const keys = Object.keys(fieldErrors);
    if (keys.length > 0) {
      const intl = channel(1236).intl;
      const obj = { numOfErrors: null };
      obj[0] = keys.length;
      const AccessibilityAnnouncer = channel(1351).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(intl.formatToPlainString(channel(1236).t.w8e4qF, obj));
      if (shouldFocusOnInvalidField) {
        obj5.focus(keys[0]);
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
    let obj = channel(7452);
    if (obj.isPollCreationEmpty(c4, answers)) {
      callback();
      let tmpResult = tmp(11700);
      tmpResult.closeCreatePollModal();
      const AccessibilityAnnouncer = tmp(1351).AccessibilityAnnouncer;
      const intl = tmp(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(tmp(1236).t["+G3oRq"]));
    } else {
      tmpResult = tmp(4824);
      obj = { onConfirm: null };
      obj[0] = handleCancelClose;
      tmpResult.openAlert("poll-creation-unsaved-changes", _undefined2(scheduledTimestamp, obj));
    }
  };
  obj2[2] = onCancel(5517);
  obj2[3] = tmp7.actionButton;
  const items3 = [callback(channel(6202).HeaderActionButton, obj2), , , ];
  obj3 = { accessibilityRole: "header", variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", style: tmp7.title, children: null };
  const intl2 = channel(1236).intl;
  obj3[4] = intl2.string(channel(1236).t.Flr51u);
  items3[1] = callback(channel(4442).Text, obj3);
  if (canUseScheduledMessages) {
    const obj4 = { accessibilityLabel: null, style: null, disabled: null, icon: null, onPress: null };
    const intl3 = tmp4(1236).intl;
    obj4[0] = intl3.string(tmp4(1236).t.rlf0tb);
    obj4[1] = tmp7.actionButton;
    obj4[2] = submitting;
    let TEXT_BRAND;
    if (null != scheduledTimestamp) {
      TEXT_BRAND = tmp(712).colors.TEXT_BRAND;
    }
    obj5 = { color: null };
    obj5[0] = TEXT_BRAND;
    obj4[3] = tmp14(tmp4(11712).CalendarPlusIcon, obj5);
    obj4[4] = function onPress() {
      let obj = channel(11714);
      obj = { onSelect: c14, currentTimestamp: scheduledTimestamp, onClear: null };
      let fn;
      if (null != scheduledTimestamp) {
        fn = () => callback(undefined);
      }
      obj[2] = fn;
      return obj.pickScheduledMessageTime(obj);
    };
    canUseScheduledMessages = tmp14(tmp4(6202).HeaderActionButton, obj4);
  }
  items3[2] = canUseScheduledMessages;
  const obj6 = { text: null, style: null, disabled: null, onPress: null };
  const intl4 = tmp4(1236).intl;
  obj6[0] = intl4.string(channel(1236).t.JOj8Zk);
  const items4 = [, ];
  ({ actionButton: arr6[0], postButton: arr6[1] } = tmp7);
  obj6[1] = items4;
  obj6[2] = submitting;
  obj6[3] = handleSubmitPoll;
  items3[3] = callback(channel(6202).HeaderActionButton, obj6);
  obj1[1] = items3;
  const items5 = [c11(allowMultiSelect, obj1), , ];
  const obj7 = { style: tmp7.viewPadding, contentContainerStyle: tmp7.scrollContainer, keyboardShouldPersistTaps: "handled", children: null };
  let tmp14Result = null != createPollError;
  if (tmp14Result) {
    let anyErrorMessage;
    if (createPollError != null) {
      anyErrorMessage = createPollError.getAnyErrorMessage();
    }
    const obj8 = { children: null };
    obj8[0] = anyErrorMessage;
    tmp14Result = tmp14(tmp(11726), obj8);
    let tmpResult = tmp(11726);
  }
  const items6 = [tmp14Result, , ];
  const obj9 = { ref: obj5.refWithKey("question"), onChange: handleQuestionChange, onSubmitEditing: obj5.focusNext, error: null };
  let question;
  if (fieldErrors != null) {
    question = fieldErrors.question;
  }
  obj9[3] = question;
  items6[1] = callback(c14, obj9);
  const obj10 = { style: tmp7.answerInputsContainer, children: null };
  const obj11 = { text: null, color: "text-subtle", style: null };
  const intl5 = tmp4(1236).intl;
  obj11[0] = intl5.string(channel(1236).t.oMBfeS);
  obj11[2] = tmp7.label;
  const items7 = [
    callback(channel(8309).FormLabel, obj11),
    answers.map((localCreationAnswerId) => {
      const obj = { inputRef: obj5.refWithKey("answer-" + localCreationAnswerId.localCreationAnswerId), answer: localCreationAnswerId, index: arg1, channelId: channel.id, onSubmitEditing: obj5.focusNext, onAnswerTextChange: c8, onAnswerEmojiSelect: c9, onRemoveAnswer: c11, onRemoveAnswerImage: c12, canRemoveAnswer: c7, error: null };
      let tmp4;
      if (fieldErrors != null) {
        const _HermesInternal = HermesInternal;
        tmp4 = tmp3["answer-" + localCreationAnswerId.localCreationAnswerId];
      }
      obj[10] = tmp4;
      return c9(onCancel(11728), obj, localCreationAnswerId.localCreationAnswerId);
    }),

  ];
  if (canAddMoreAnswers) {
    const obj12 = { onPress: null };
    obj12[0] = handleAddAnswer;
    canAddMoreAnswers = tmp14(fieldErrors, obj12);
  }
  const obj13 = { children: null };
  items7[2] = canAddMoreAnswers;
  obj10[1] = items7;
  items6[2] = c11(allowMultiSelect, obj10);
  obj7[3] = items6;
  items5[1] = c11(c6, obj7);
  const obj14 = { style: tmp7.pollConfigSection, children: null };
  const items8 = [callback(shouldFocusOnInvalidField, { selectedDuration: duration, onChange: setDuration }), ];
  const obj15 = { label: null, checked: null, onPress: null };
  const intl6 = tmp4(1236).intl;
  obj15[0] = intl6.string(channel(1236).t["Ux+iQU"]);
  obj15[1] = allowMultiSelect;
  obj15[2] = function onPress() {
    return _undefined(!allowMultiSelect);
  };
  items8[1] = callback(channel(7630).TableCheckboxRow, obj15);
  obj14[1] = items8;
  items5[2] = c11(allowMultiSelect, obj14);
  obj13[0] = items5;
  obj[1] = c11(handleAddAnswer, obj13);
  return callback(allowMultiSelect, obj);
};