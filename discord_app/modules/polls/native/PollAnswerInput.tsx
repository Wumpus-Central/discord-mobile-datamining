// === Module 12225: PollAnswerInput ===

// Module 12225 (PollAnswerInput)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import PollsUtils from "PollsUtils" /* 7761 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9307 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 11121 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

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
  const tmp3 = answerIndex(upload[9])(channelId, localCreationAnswerId, image, imageSize, emojiSize);
  upload = tmp3.upload;
  const setUploadSize = tmp3.setUploadSize;
  const items = [image, upload, answerIndex];
  const items1 = [setUploadSize];
  const memo = setUploadSize.useMemo(() => {
    let emoji;
    if (image != null) {
      emoji = image.emoji;
    }
    if (null != emoji) {
      const intl3 = util.intl;
      let obj = { imageName: image.emoji.name, answerNumber: answerIndex + 1 };
      return intl3.formatToPlainString(util.t.vcC7Qn, obj);
    } else if (null != upload) {
      let str = upload.item.filename;
      if (str == null) {
        str = "";
      }
      const intl2 = util.intl;
      obj = { imageName: PollsUtils.filterOutUUID(str), answerNumber: answerIndex + 1 };
      return intl2.formatToPlainString(util.t.vcC7Qn, obj);
    } else {
      const intl = util.intl;
      obj = { answerNumber: answerIndex + 1 };
      return intl.formatToPlainString(util.t.ieNrxk, obj);
    }
  }, items);
  let tmp6 = null != upload;
  const callback = setUploadSize.useCallback((nativeEvent) => {
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
  const items2 = [openImageInputActionSheet.containerStyle, null != upload && closure_15().uploadContainer];
  obj.style = items2;
  if (tmp6) {
    obj = { children: tmp3.renderImage };
    let tmp9Result = closure_12(closure_6, obj);
  } else {
    obj = { source: openImageInputActionSheet.iconSrc };
    tmp9Result = closure_12(image(tmp2[13]).Icon, obj);
  }
  obj.children = tmp9Result;
  return closure_12(image(upload[12]).PressableOpacity, obj);
}
get_ActivityIndicator = fn(17);
({ Keyboard: closure_4, TouchableOpacity: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const DraftType = fn(4901).DraftType;
const PollsConstants = fn(7829);
({ MAX_POLL_ANSWER_LENGTH: closure_9, POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY: c10 } = PollsConstants);
const EmojiIntention = fn(1374).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let createStyles = { defaultContainer: { flexDirection: "row", alignItems: "center" }, defaultImageAndTextContainer: null, cannotRemove: null, defaultImageContainer: null, pollAnswerTextInput: null, defaultRemoveButtonContainer: null, uploadContainer: null, errorInput: null };
createStyles = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, flex: 1, overflow: "hidden" };
createStyles.defaultImageAndTextContainer = createStyles;
createStyles.cannotRemove = { marginRight: 30 };
createStyles.defaultImageContainer = { width: 60, height: 48, justifyContent: "center", alignItems: "center" };
createStyles.pollAnswerTextInput = { flex: 1, paddingStart: 0 };
createStyles.defaultRemoveButtonContainer = { paddingLeft: 6, height: 48, justifyContent: "center", color: nativeDefault.colors.TEXT_MUTED };
createStyles.uploadContainer = { alignItems: "flex-start" };
let obj1 = { paddingLeft: 6, height: 48, justifyContent: "center", color: nativeDefault.colors.TEXT_MUTED };
createStyles.errorInput = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/native/PollAnswerInput.tsx");

export default function PollAnswerInput(answer) {
  answer = answer.answer;
  const index = answer.index;
  const channelId = answer.channelId;
  ({ onAnswerTextChange: noop, onAnswerEmojiSelect: closure_4, canRemoveAnswer, onRemoveAnswer: closure_5, onRemoveAnswerImage: closure_6, error } = answer);
  function openExpressionPicker() {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      React4.dismiss();
      const obj = {
        channel,
        onPressEmoji(arg0) {
            closure_1_4(arg0, index);
          },
        pickerIntention: EmojiIntention.POLLS
      };
      const result = obj.openEmojiPickerActionSheet(obj);
    }
  }
  function handleSaveAltText(description) {
    const obj = { description };
    obj.update(channelId, answer.localCreationAnswerId, DraftType.Poll, obj);
  }
  ({ inputRef, onSubmitEditing } = answer);
  const tmp = closure_15();
  const localCreationAnswerId = answer.localCreationAnswerId;
  let tmp6Result = null != error;
  if (tmp6Result) {
    tmp6Result = error.length > 0;
  }
  const items = [tmp.defaultContainer, ];
  let cannotRemove = !canRemoveAnswer;
  if (!canRemoveAnswer) {
    cannotRemove = tmp.cannotRemove;
  }
  let obj = { style: items, children: null };
  items[1] = cannotRemove;
  const items1 = [tmp.defaultImageAndTextContainer, ];
  let errorInput = tmp6Result;
  if (tmp6Result) {
    errorInput = tmp.errorInput;
  }
  obj = { style: items1, children: null };
  items1[1] = errorInput;
  obj = {
    channelId,
    localCreationAnswerId,
    image: answer.image,
    openExpressionPicker,
    openImageInputActionSheet() {
      const obj = { channelId, index, answer, onSaveAltText: handleSaveAltText, onRemoveAnswerImage, openExpressionPicker };
      obj.openLazy(asyncRequireImpl(12227, dependencyMap.paths), closure_2_10, obj);
    },
    iconSrc: index(channelId[19]),
    containerStyle: tmp.defaultImageContainer,
    imageSize: 48,
    answerIndex: index
  };
  const items2 = [closure_12(ImageInput, obj), ];
  const obj1 = { ref: inputRef, textAlignVertical: "center", showTopContainer: false, showBorder: false, placeholder: null, onChange: null, onSubmitEditing: null, blurOnSubmit: false, style: null, textContentType: "none", accessibilityLabel: null, accessibilityHint: null, maxLength: null, returnKeyType: "next", required: true, autoCorrect: true, "aria-invalid": null };
  const intl = answer(channelId[10]).intl;
  obj1.placeholder = intl.string(answer(channelId[10]).t.NNHVlv);
  obj1.onChange = function onChange(text) {
    return noop({ text, index, localCreationAnswerId });
  };
  obj1.onSubmitEditing = onSubmitEditing;
  obj1.style = tmp.pollAnswerTextInput;
  const intl2 = answer(channelId[10]).intl;
  obj1.accessibilityLabel = intl2.formatToPlainString(answer(channelId[10]).t["3+V8G9"], { answerNumber: index + 1 });
  let formatToPlainStringResult;
  if (tmp6Result) {
    const intl3 = tmp9(tmp8[10]).intl;
    const obj3 = { errorMessage: error };
    formatToPlainStringResult = intl3.formatToPlainString(tmp9(tmp8[10]).t.jnq5Ho, obj3);
  }
  obj1.accessibilityHint = formatToPlainStringResult;
  obj1.maxLength = handleSaveAltText;
  obj1["aria-invalid"] = error;
  items2[1] = closure_12(answer(channelId[20]).FormInput, obj1);
  obj.children = items2;
  const items3 = [closure_13(onRemoveAnswerImage, obj), ];
  if (canRemoveAnswer) {
    const obj4 = {
      onPress() {
          return closure_1_5(index);
        },
      accessibilityRole: "button",
      style: tmp.defaultRemoveButtonContainer,
      accessibilityLabel: null,
      children: null
    };
    const intl4 = tmp9(tmp8[10]).intl;
    const obj5 = { answerNumber: index + 1 };
    obj4.accessibilityLabel = intl4.formatToPlainString(tmp9(tmp8[10]).t["22fjEc"], obj5);
    const obj6 = { size: tmp9(tmp8[13]).Icon.Sizes.MEDIUM, source: tmp7(tmp8[21]), color: tmp.defaultRemoveButtonContainer.color };
    obj4.children = closure_12(tmp9(tmp8[13]).Icon, obj6);
    canRemoveAnswer = closure_12(closure_5, obj4);
  }
  items3[1] = canRemoveAnswer;
  obj.children = items3;
  const children = [closure_13(onRemoveAnswerImage, obj), ];
  if (tmp6Result) {
    const obj7 = { message: error };
    tmp6Result = closure_12(tmp7(tmp8[22]), obj7);
  }
  children[1] = tmp6Result;
  return closure_13(closure_14, { children });
};