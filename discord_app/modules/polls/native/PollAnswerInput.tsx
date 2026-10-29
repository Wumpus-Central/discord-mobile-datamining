// === Module 12230: PollAnswerInput ===

// Module 12230 (PollAnswerInput)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import native from "native" /* 1199 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import Pressables from "Pressables" /* 6968 */;
import PollsUtils from "PollsUtils" /* 8338 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9731 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9891 */;
import useRenderPollAnswerImageDefault from "useRenderPollAnswerImage" /* 12231 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4857 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Keyboard: hasOwnProperty, TouchableOpacity: metroRequire, View: closure_7 } = get_ActivityIndicator);
const DraftType = fn(7689).DraftType;
const PollsConstants = fn(8365);
({ MAX_POLL_ANSWER_LENGTH: c10, POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY: closure_11 } = PollsConstants);
const EmojiIntention = fn(1392).EmojiIntention;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { defaultContainer: { flexDirection: "row", alignItems: "center" }, inputContainer: { flex: 1 }, cannotRemove: { marginRight: 36 }, defaultImageContainer: { width: 60, height: 48, justifyContent: "center", alignItems: "center" }, pollAnswerTextInput: { flex: 1, paddingStart: 0 }, defaultRemoveButtonContainer: { paddingLeft: nativeDefault.space.PX_12, height: 48, justifyContent: "center", color: nativeDefault.colors.TEXT_MUTED }, uploadContainer: { alignItems: "flex-start" } };
let closure_16 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function ImageInput(arg0) {
  const cResult = c.c(24);
  ({ channelId, localCreationAnswerId, image, iconSrc, openExpressionPicker, emojiSize, containerStyle, imageSize, answerIndex, openImageInputActionSheet } = arg0);
  let num = 24;
  if (undefined !== emojiSize) {
    num = emojiSize;
  }
  const tmp4 = closure_16();
  ({ renderImage, upload, setUploadSize } = useRenderPollAnswerImageDefault(channelId, localCreationAnswerId, image, imageSize, num));
  let emoji;
  if (image != null) {
    emoji = image.emoji;
  }
  if (null == emoji) {
    if (null == upload) {
      if (cResult[6] !== answerIndex) {
        const intl3 = util.intl;
        const obj2 = { answerNumber: answerIndex + 1 };
        const formatToPlainStringResult = intl3.formatToPlainString(util.t.ieNrxk, obj2);
        cResult[6] = answerIndex;
        cResult[7] = formatToPlainStringResult;
      }
    } else {
      let str = upload.item.filename;
      if (str == null) {
        str = "";
      }
      if (cResult[3] === answerIndex) {
        if (cResult[4] === str) {
          let tmp9 = cResult[5];
        }
        let tmp7 = tmp9;
      }
      const intl2 = util.intl;
      const obj3 = { imageName: PollsUtils.filterOutUUID(str), answerNumber: answerIndex + 1 };
      const formatToPlainStringResult1 = intl2.formatToPlainString(util.t.vcC7Qn, obj3);
      cResult[3] = answerIndex;
      cResult[4] = str;
      cResult[5] = formatToPlainStringResult1;
      tmp9 = formatToPlainStringResult1;
      const tmpResult = PollsUtils;
    }
  } else {
    if (cResult[0] === answerIndex) {
      if (cResult[1] === image.emoji.name) {
        tmp7 = cResult[2];
      }
    }
    const intl = util.intl;
    const obj4 = { imageName: image.emoji.name, answerNumber: answerIndex + 1 };
    const formatToPlainStringResult2 = intl.formatToPlainString(util.t.vcC7Qn, obj4);
    cResult[0] = answerIndex;
    cResult[1] = image.emoji.name;
    cResult[2] = formatToPlainStringResult2;
    tmp7 = formatToPlainStringResult2;
  }
  if (cResult[8] !== setUploadSize) {
    const fn = function _(nativeEvent) {
      setUploadSize(nativeEvent.nativeEvent.layout.width);
    };
    cResult[8] = setUploadSize;
    cResult[9] = fn;
  }
  let tmp15 = null != upload;
  if (!tmp15) {
    let emoji1;
    if (image != null) {
      emoji1 = image.emoji;
    }
    tmp15 = null != emoji1;
  }
  if (tmp15) {
    openExpressionPicker = openImageInputActionSheet;
  }
  if (cResult[10] === containerStyle) {
    if (cResult[11] === tmp19) {
      let tmp20 = cResult[12];
    }
    if (cResult[13] === tmp15) {
      if (cResult[14] === iconSrc) {
        if (cResult[15] === renderImage) {
          if (cResult[17] === openExpressionPicker) {
            if (cResult[18] === openImageInputActionSheet) {
              if (cResult[19] === tmp7) {
                if (cResult[20] === tmp18) {
                  if (cResult[21] === tmp20) {
                    if (cResult[22] === tmp21) {
                      let tmp26 = cResult[23];
                    }
                    return tmp26;
                  }
                }
              }
            }
          }
          const obj5 = { accessibilityRole: "button", accessibilityLabel: tmp7, onPress: openExpressionPicker, onLongPress: openImageInputActionSheet, onLayout: tmp18, style: tmp20, children: cResult[16] };
          const tmp28 = map1(Pressables.PressableOpacity, obj5);
          cResult[17] = openExpressionPicker;
          cResult[18] = openImageInputActionSheet;
          cResult[19] = tmp7;
          cResult[20] = tmp18;
          cResult[21] = tmp20;
          cResult[22] = cResult[16];
          cResult[23] = tmp28;
          tmp26 = tmp28;
        }
      }
    }
    if (tmp15) {
      const obj6 = { children: renderImage };
      let tmp22Result = map1(React5, obj6);
    } else {
      const obj7 = { source: iconSrc };
      tmp22Result = map1(native.Icon, obj7);
    }
    cResult[13] = tmp15;
    cResult[14] = iconSrc;
    cResult[15] = renderImage;
    cResult[16] = tmp22Result;
  }
  const items = [containerStyle, null != upload && tmp4.uploadContainer];
  cResult[10] = containerStyle;
  cResult[11] = null != upload && tmp4.uploadContainer;
  cResult[12] = items;
  tmp20 = items;
  const tmp5 = useRenderPollAnswerImageDefault(channelId, localCreationAnswerId, image, imageSize, num);
}) : (function ImageInput(openImageInputActionSheet) {
  ({ channelId, localCreationAnswerId, image } = openImageInputActionSheet);
  ({ openExpressionPicker, emojiSize } = openImageInputActionSheet);
  if (emojiSize === undefined) {
    emojiSize = 24;
  }
  ({ imageSize, answerIndex } = openImageInputActionSheet);
  openImageInputActionSheet = openImageInputActionSheet.openImageInputActionSheet;
  let upload;
  const tmp3 = answerIndex(upload[12])(channelId, localCreationAnswerId, image, imageSize, emojiSize);
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
    tmp9Result = closure_13(image(tmp2[15]).Icon, obj3);
  }
  obj.children = tmp9Result;
  return closure_13(image(upload[16]).PressableOpacity, obj);
});
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
    closure_13(closure_17, {
      channelId,
      localCreationAnswerId,
      image: answer.image,
      openExpressionPicker,
      openImageInputActionSheet() {
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12232, dependencyMap.paths), closure_2_11, { channelId, index, answer, onSaveAltText: handleSaveAltText, onRemoveAnswerImage, openExpressionPicker });
      },
      iconSrc: index(channelId[23]),
      containerStyle: tmp.defaultImageContainer,
      imageSize: 48,
      answerIndex: index
    }),

  ];
  const obj5 = { ref: inputRef, textAlignVertical: "center", showTopContainer: false, showBorder: false, placeholder: null, onChange: null, onSubmitEditing: null, onFocus: null, onBlur: null, blurOnSubmit: false, style: null, selectionColor: "ix", textContentType: "a", accessibilityLabel: "ix", accessibilityHint: "next", maxLength: "toCharArray$esjava$1", returnKeyType: "c", required: "Array", autoCorrect: "application", "aria-invalid": "parent" };
  const intl = tmp8(tmp9[13]).intl;
  obj5.placeholder = intl.string(answer(channelId[13]).t.NNHVlv);
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
  const intl2 = tmp8(tmp9[13]).intl;
  obj5.accessibilityLabel = intl2.formatToPlainString(answer(channelId[13]).t["3+V8G9"], { answerNumber: index + 1 });
  let formatToPlainStringResult;
  if (tmp7Result) {
    const intl3 = tmp8(tmp9[13]).intl;
    const obj7 = { errorMessage: error };
    formatToPlainStringResult = intl3.formatToPlainString(tmp8(tmp9[13]).t.jnq5Ho, obj7);
  }
  obj5.accessibilityHint = formatToPlainStringResult;
  obj5.maxLength = maxLength;
  obj5["aria-invalid"] = error;
  items1[1] = closure_13(answer(channelId[24]).FormInput, obj5);
  obj3.children = items1;
  obj2.children = closure_14(answer(channelId[19]).InputFieldContainer, obj3);
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
    const intl4 = tmp8(tmp9[13]).intl;
    const obj9 = { answerNumber: index + 1 };
    obj8.accessibilityLabel = intl4.formatToPlainString(tmp8(tmp9[13]).t["22fjEc"], obj9);
    const obj10 = { size: tmp8(tmp9[15]).Icon.Sizes.MEDIUM, source: tmp10(tmp9[25]), color: tmp.defaultRemoveButtonContainer.color };
    obj8.children = closure_13(tmp8(tmp9[15]).Icon, obj10);
    canRemoveAnswer = closure_13(onRemoveAnswerImage, obj8);
  }
  items2[1] = canRemoveAnswer;
  obj.children = items2;
  const children = [closure_14(localCreationAnswerId, obj), ];
  if (tmp7Result) {
    const obj11 = { message: error };
    tmp7Result = closure_13(tmp10(tmp9[26]), obj11);
  }
  children[1] = tmp7Result;
  return closure_14(closure_15, { children });
};