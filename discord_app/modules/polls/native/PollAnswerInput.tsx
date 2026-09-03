// === Module 12021: ImageInput ===

// Module 12021 (ImageInput)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "ensureGuildLoaded" /* 1386 */;
import { DraftType } from "handleChanged" /* 4855 */;
import POLL_ATTACHMENT_FOLDER from "POLL_ATTACHMENT_FOLDER" /* 7584 */;
import { EmojiIntention } from "set" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function ImageInput(openImageInputActionSheet) {
  ({ channelId, localCreationAnswerId, image } = openImageInputActionSheet);
  ({ openExpressionPicker, emojiSize } = openImageInputActionSheet);
  if (emojiSize === undefined) {
    emojiSize = 24;
  }
  ({ imageSize, answerIndex } = openImageInputActionSheet);
  openImageInputActionSheet = openImageInputActionSheet.openImageInputActionSheet;
  let upload;
  let setUploadSize;
  const tmp3 = answerIndex(upload[9])(channelId, localCreationAnswerId, image, imageSize, emojiSize);
  upload = tmp3.upload;
  setUploadSize = tmp3.setUploadSize;
  const items = [image, upload, answerIndex];
  const items1 = [setUploadSize];
  const memo = setUploadSize.useMemo(() => {
    let emoji;
    if (image != null) {
      emoji = tmp.emoji;
    }
    if (null != emoji) {
      const intl3 = image(upload[10]).intl;
      let obj = { imageName: null, answerNumber: null };
      obj[0] = tmp.emoji.name;
      obj[1] = answerIndex + 1;
      return intl3.formatToPlainString(image(upload[10]).t.vcC7Qn, obj);
    } else if (null != upload) {
      let str = upload.item.filename;
      if (str == null) {
        str = "";
      }
      const intl2 = image(upload[10]).intl;
      obj = { imageName: null, answerNumber: null };
      obj[0] = image(upload[11]).filterOutUUID(str);
      obj[1] = answerIndex + 1;
      return intl2.formatToPlainString(image(upload[10]).t.vcC7Qn, obj);
    } else {
      const intl = image(upload[10]).intl;
      obj = { answerNumber: null };
      obj[0] = answerIndex + 1;
      return intl.formatToPlainString(image(upload[10]).t.ieNrxk, obj);
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
  obj[4] = tmp11;
  const items2 = [openImageInputActionSheet.containerStyle, null != upload && callback2().uploadContainer];
  obj[5] = items2;
  if (tmp6) {
    obj = { children: null };
    obj[0] = tmp3.renderImage;
    let tmp9Result = tmp9(closure_6, obj);
  } else {
    obj = { source: null };
    obj[0] = openImageInputActionSheet.iconSrc;
    tmp9Result = tmp9(image(tmp2[13]).Icon, obj);
  }
  obj[6] = tmp9Result;
  return closure_12(image(upload[12]).PressableOpacity, obj);
}
({ Keyboard: c4, TouchableOpacity: c5, View: closure_6 } = get_ActivityIndicator);
({ MAX_POLL_ANSWER_LENGTH: c9, POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY: c10 } = POLL_ATTACHMENT_FOLDER);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
createCacheKey = { defaultContainer: { flexDirection: "row", alignItems: "center" }, defaultImageAndTextContainer: null, cannotRemove: null, defaultImageContainer: null, pollAnswerTextInput: null, defaultRemoveButtonContainer: null, uploadContainer: null, errorInput: null };
createCacheKey = { flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.lg, flex: 1, overflow: "hidden" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginRight: 30 };
createCacheKey[3] = { width: 60, height: 48, justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { flex: 1, paddingStart: 0 };
createCacheKey[5] = { paddingLeft: 6, height: 48, justifyContent: "center", color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[6] = { alignItems: "flex-start" };
let obj1 = { paddingLeft: 6, height: 48, justifyContent: "center", color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[7] = { borderColor: ThemesDefault.colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
const obj2 = { borderColor: ThemesDefault.colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
let result = require("set").fileFinishedImporting("modules/polls/native/PollAnswerInput.tsx");

export default function PollAnswerInput(answer) {
  answer = answer.answer;
  const index = answer.index;
  const channelId = answer.channelId;
  ({ onAnswerTextChange: closure_3, onAnswerEmojiSelect: closure_4, canRemoveAnswer, onRemoveAnswer: closure_5, onRemoveAnswerImage: closure_6, error } = answer);
  let localCreationAnswerId;
  function openExpressionPicker() {
    const channel = localCreationAnswerId.getChannel(channelId);
    if (null != channel) {
      closure_1_4.dismiss();
      let obj = answer(channelId[14]);
      obj = { channel: null, onPressEmoji: null, pickerIntention: null };
      obj[0] = channel;
      obj[1] = function onPressEmoji(arg0) {
        callback(arg0, closure_1);
      };
      obj[2] = closure_1_11.POLLS;
      const result = obj.openEmojiPickerActionSheet(obj);
    }
  }
  function handleSaveAltText(description) {
    let obj = index(channelId[15]);
    obj = { description };
    obj.update(channelId, answer.localCreationAnswerId, openExpressionPicker.Poll, obj);
  }
  ({ inputRef, onSubmitEditing } = answer);
  const tmp = callback2();
  localCreationAnswerId = answer.localCreationAnswerId;
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
      let obj = index(channelId[16]);
      obj = { channelId, index, answer, onSaveAltText: handleSaveAltText, onRemoveAnswerImage: closure_6, openExpressionPicker };
      obj.openLazy(answer(channelId[18])(channelId[17], channelId.paths), closure_1_10, obj);
    },
    iconSrc: index(channelId[19]),
    containerStyle: tmp.defaultImageContainer,
    imageSize: 48,
    answerIndex: index
  };
  const items2 = [callback(ImageInput, obj), ];
  obj1 = { ref: inputRef, textAlignVertical: "center", showTopContainer: false, showBorder: false, placeholder: null, onChange: null, onSubmitEditing: null, blurOnSubmit: false, style: null, textContentType: "none", accessibilityLabel: null, accessibilityHint: null, maxLength: null, returnKeyType: "next", required: true, autoCorrect: true, "aria-invalid": null };
  const intl = answer(channelId[10]).intl;
  obj1[4] = intl.string(answer(channelId[10]).t.NNHVlv);
  obj1[5] = function onChange(text) {
    return callback({ text, index, localCreationAnswerId });
  };
  obj1[6] = onSubmitEditing;
  obj1[8] = tmp.pollAnswerTextInput;
  const intl2 = answer(channelId[10]).intl;
  obj1[10] = intl2.formatToPlainString(answer(channelId[10]).t["3+V8G9"], { answerNumber: index + 1 });
  let formatToPlainStringResult;
  if (tmp6Result) {
    const intl3 = tmp9(tmp8[10]).intl;
    const obj3 = { errorMessage: null };
    obj3[0] = error;
    formatToPlainStringResult = intl3.formatToPlainString(tmp9(tmp8[10]).t.jnq5Ho, obj3);
  }
  obj1[11] = formatToPlainStringResult;
  obj1[12] = handleSaveAltText;
  obj1[16] = error;
  items2[1] = callback(answer(channelId[20]).FormInput, obj1);
  obj[1] = items2;
  const items3 = [closure_13(closure_6, obj), ];
  if (canRemoveAnswer) {
    const obj4 = { onPress: null, accessibilityRole: "button", style: null, accessibilityLabel: null, children: null };
    obj4[0] = function onPress() {
      return callback2(index);
    };
    obj4[2] = tmp.defaultRemoveButtonContainer;
    const intl4 = tmp9(tmp8[10]).intl;
    const obj5 = { answerNumber: null };
    obj5[0] = index + 1;
    obj4[3] = intl4.formatToPlainString(tmp9(tmp8[10]).t["22fjEc"], obj5);
    const obj6 = { size: null, source: null, color: null };
    obj6[0] = tmp9(tmp8[13]).Icon.Sizes.MEDIUM;
    obj6[1] = tmp7(tmp8[21]);
    obj6[2] = tmp.defaultRemoveButtonContainer.color;
    obj4[4] = tmp6(tmp9(tmp8[13]).Icon, obj6);
    canRemoveAnswer = tmp6(closure_5, obj4);
  }
  items3[1] = canRemoveAnswer;
  obj[1] = items3;
  const children = [closure_13(closure_6, obj), ];
  if (tmp6Result) {
    const obj7 = { message: null };
    obj7[0] = error;
    tmp6Result = tmp6(tmp7(tmp8[22]), obj7);
  }
  children[1] = tmp6Result;
  return closure_13(closure_14, { children });
};