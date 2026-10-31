// === Module 12424: PollAnswerInput ===

// Module 12424 (PollAnswerInput)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import PollsUtils from "PollsUtils" /* 8403 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9778 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9939 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;

require = fn;
function ImageInput(openImageInputActionSheet) {
  ({ channelId, localCreationAnswerId, image } = openImageInputActionSheet);
  ({ openExpressionPicker, emojiSize } = openImageInputActionSheet);
  if (emojiSize === undefined) {
    emojiSize = 24;
  }
  ({ imageSize, answerIndex } = openImageInputActionSheet);
  openImageInputActionSheet = openImageInputActionSheet.openImageInputActionSheet;
  let upload;
  const tmp3 = answerIndex(upload[10])(channelId, localCreationAnswerId, image, imageSize, emojiSize);
  upload = tmp3.upload;
  const setUploadSize = tmp3.setUploadSize;
  const items = [image, upload, answerIndex];
  const items1 = [setUploadSize];
  const memo = noop.useMemo(() => {
    let emoji;
    if (image != null) {
      emoji = image.emoji;
    }
    if (null != emoji) {
      const intl3 = util.intl;
      const obj2 = { imageName: image.emoji.name, answerNumber: answerIndex + 1 };
      return intl3.formatToPlainString(util.t.vcC7Qn, obj2);
    } else if (null != upload) {
      let str = upload.item.filename;
      if (str == null) {
        str = "";
      }
      const intl2 = util.intl;
      const obj4 = { imageName: PollsUtils.filterOutUUID(str), answerNumber: answerIndex + 1 };
      return intl2.formatToPlainString(util.t.vcC7Qn, obj4);
    } else {
      const intl = util.intl;
      const obj = { answerNumber: answerIndex + 1 };
      return intl.formatToPlainString(util.t.ieNrxk, obj);
    }
  }, items);
  let tmp6 = null != upload;
  const callback = noop.useCallback((nativeEvent) => {
    setUploadSize(nativeEvent.nativeEvent.layout.width);
  }, items1);
  if (!tmp6) {
    let emoji;
    if (image != null) {
      emoji = image.emoji;
    }
    tmp6 = null != emoji;
  }
  if (tmp6) {
    openExpressionPicker = openImageInputActionSheet;
  }
  let tmp8;
  if (!tmp6) {
    tmp8 = openImageInputActionSheet;
  }
  let obj = { accessibilityRole: "button", accessibilityLabel: memo, onPress: openExpressionPicker, onLongPress: tmp8, onLayout: null, style: null, children: null };
  let tmp11;
  if (null == imageSize) {
    tmp11 = callback;
  }
  obj.onLayout = tmp11;
  const items2 = [openImageInputActionSheet.containerStyle, null != upload && closure_16().uploadContainer];
  obj.style = items2;
  if (tmp6) {
    let obj2 = { children: tmp3.renderImage };
    let tmp9Result = closure_13(closure_7, obj2);
  } else {
    const obj3 = { source: openImageInputActionSheet.iconSrc };
    tmp9Result = closure_13(image(tmp2[14]).Icon, obj3);
  }
  obj.children = tmp9Result;
  return closure_13(image(upload[13]).PressableOpacity, obj);
}
get_ActivityIndicator = fn(17);
({ Keyboard: hasOwnProperty, TouchableOpacity: metroRequire, View: closure_7 } = get_ActivityIndicator);
const DraftType = fn(7701).DraftType;
const PollsConstants = fn(8406);
({ MAX_POLL_ANSWER_LENGTH: c10, POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY: closure_11 } = PollsConstants);
const EmojiIntention = fn(1386).EmojiIntention;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { defaultContainer: { flexDirection: "row", alignItems: "center" }, inputContainer: { flex: 1 }, cannotRemove: { marginRight: 36 }, defaultImageContainer: { width: 60, height: 48, justifyContent: "center", alignItems: "center" }, pollAnswerTextInput: { flex: 1, paddingStart: 0 }, defaultRemoveButtonContainer: { paddingLeft: nativeDefault.space.PX_12, height: 48, justifyContent: "center", color: nativeDefault.colors.TEXT_MUTED }, uploadContainer: { alignItems: "flex-start" } };
let closure_16 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/native/PollAnswerInput.tsx");

export default function PollAnswerInput(answer) {
  answer = answer.answer;
  const index = answer.index;
  const channelId = answer.channelId;
  ({ onAnswerTextChange: _slicedToArray, onAnswerEmojiSelect: noop, canRemoveAnswer, onRemoveAnswer: closure_5, onRemoveAnswerImage: closure_6, error } = answer);
  function openExpressionPicker() {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      hasOwnProperty.dismiss();
      const obj2 = {
        channel,
        onPressEmoji(arg0) {
            closure_1_4(arg0, index);
          },
        pickerIntention: EmojiIntention.POLLS
      };
      const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet(obj2);
    }
  }
  function handleSaveAltText(description) {
    UploadAttachmentActionCreatorsDefault.update(channelId, answer.localCreationAnswerId, DraftType.Poll, { description });
  }
  ({ inputRef, onSubmitEditing } = answer);
  const tmp = closure_16();
  const localCreationAnswerId = answer.localCreationAnswerId;
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  maxLength = tmp2[1];
  let tmp7Result = null != error;
  if (tmp7Result) {
    tmp7Result = error.length > 0;
  }
  const items = [tmp.defaultContainer, ];
  let cannotRemove = !canRemoveAnswer;
  if (!canRemoveAnswer) {
    cannotRemove = tmp.cannotRemove;
  }
  let obj = { style: items, children: null };
  items[1] = cannotRemove;
  let obj2 = { style: tmp.inputContainer, children: null };
  const obj3 = { isFocused: tmp2[0], status: null, children: null };
  let str = "default";
  if (tmp7Result) {
    str = "error";
  }
  obj3.status = str;
  const items1 = [
    closure_13(ImageInput, {
      channelId,
      localCreationAnswerId,
      image: answer.image,
      openExpressionPicker,
      openImageInputActionSheet() {
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12426, dependencyMap.paths), closure_2_11, { channelId, index, answer, onSaveAltText: handleSaveAltText, onRemoveAnswerImage, openExpressionPicker });
      },
      iconSrc: index(channelId[21]),
      containerStyle: tmp.defaultImageContainer,
      imageSize: 48,
      answerIndex: index
    }),

  ];
  const obj5 = { ref: inputRef, textAlignVertical: "center", showTopContainer: false, showBorder: false, placeholder: null, onChange: null, onSubmitEditing: null, onFocus: null, onBlur: null, blurOnSubmit: false, style: null, selectionColor: "children", textContentType: false, accessibilityLabel: false, accessibilityHint: false, maxLength: false, returnKeyType: false, required: false, autoCorrect: false, "aria-invalid": false };
  const intl = tmp8(tmp9[11]).intl;
  obj5.placeholder = intl.string(answer(channelId[11]).t.NNHVlv);
  obj5.onChange = function onChange(text) {
    return _slicedToArray({ text, index, localCreationAnswerId });
  };
  obj5.onSubmitEditing = onSubmitEditing;
  obj5.onFocus = function onFocus() {
    return closure_10(true);
  };
  obj5.onBlur = function onBlur() {
    return closure_10(false);
  };
  obj5.style = tmp.pollAnswerTextInput;
  const intl2 = tmp8(tmp9[11]).intl;
  obj5.accessibilityLabel = intl2.formatToPlainString(answer(channelId[11]).t["3+V8G9"], { answerNumber: index + 1 });
  let formatToPlainStringResult;
  if (tmp7Result) {
    const intl3 = tmp8(tmp9[11]).intl;
    const obj7 = { errorMessage: error };
    formatToPlainStringResult = intl3.formatToPlainString(tmp8(tmp9[11]).t.jnq5Ho, obj7);
  }
  obj5.accessibilityHint = formatToPlainStringResult;
  obj5.maxLength = maxLength;
  obj5["aria-invalid"] = error;
  items1[1] = closure_13(answer(channelId[22]).FormInput, obj5);
  obj3.children = items1;
  obj2.children = closure_14(answer(channelId[17]).InputFieldContainer, obj3);
  const items2 = [closure_13(localCreationAnswerId, obj2), ];
  if (canRemoveAnswer) {
    const obj8 = {
      onPress() {
          return closure_1_5(index);
        },
      accessibilityRole: "button",
      style: tmp.defaultRemoveButtonContainer,
      accessibilityLabel: null,
      children: null
    };
    const intl4 = tmp8(tmp9[11]).intl;
    const obj9 = { answerNumber: index + 1 };
    obj8.accessibilityLabel = intl4.formatToPlainString(tmp8(tmp9[11]).t["22fjEc"], obj9);
    const obj10 = { size: tmp8(tmp9[14]).Icon.Sizes.MEDIUM, source: tmp10(tmp9[23]), color: tmp.defaultRemoveButtonContainer.color };
    obj8.children = closure_13(tmp8(tmp9[14]).Icon, obj10);
    canRemoveAnswer = closure_13(onRemoveAnswerImage, obj8);
  }
  items2[1] = canRemoveAnswer;
  obj.children = items2;
  const children = [closure_14(localCreationAnswerId, obj), ];
  if (tmp7Result) {
    const obj11 = { message: error };
    tmp7Result = closure_13(tmp10(tmp9[24]), obj11);
  }
  children[1] = tmp7Result;
  return closure_14(closure_15, { children });
};