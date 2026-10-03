// discord_app/modules/polls/native/PollAnswerInput.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01987_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import PollsUtils from "../PollsUtils.tsx";
import UploadAttachmentActionCreatorsDefault from "../../../actions/UploadAttachmentActionCreators.tsx";
import openEmojiPickerActionSheet from "../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import useRenderPollAnswerImageDefault from "useRenderPollAnswerImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Keyboard: closure_4, TouchableOpacity: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const DraftType = fn(7031).DraftType;
const PollsConstants = fn(7457);
({ MAX_POLL_ANSWER_LENGTH: closure_9, POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY: c10 } = PollsConstants);
const EmojiIntention = fn(1380).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  defaultContainer: { flexDirection: "row", alignItems: "center" },
  defaultImageAndTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
    borderRadius: nativeDefault.radii.lg,
    flex: 1,
    overflow: "hidden",
  },
  cannotRemove: { marginRight: 30 },
  defaultImageContainer: { width: 60, height: 48, justifyContent: "center", alignItems: "center" },
  pollAnswerTextInput: { flex: 1, paddingStart: 0 },
  defaultRemoveButtonContainer: null,
  uploadContainer: null,
  errorInput: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  flex: 1,
  overflow: "hidden",
};
obj2.defaultRemoveButtonContainer = {
  paddingLeft: 6,
  height: 48,
  justifyContent: "center",
  color: nativeDefault.colors.TEXT_MUTED,
};
obj2.uploadContainer = { alignItems: "flex-start" };
let obj4 = { paddingLeft: 6, height: 48, justifyContent: "center", color: nativeDefault.colors.TEXT_MUTED };
obj2.errorInput = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
let closure_15 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(24);
      ({
        channelId,
        localCreationAnswerId,
        image,
        iconSrc,
        openExpressionPicker,
        emojiSize,
        containerStyle,
        imageSize,
        answerIndex,
        openImageInputActionSheet,
      } = arg0);
      let num = 24;
      if (undefined !== emojiSize) {
        num = emojiSize;
      }
      const tmp4 = closure_15();
      ({ renderImage, upload, setUploadSize } = useRenderPollAnswerImageDefault(
        channelId,
        localCreationAnswerId,
        image,
        imageSize,
        num,
      ));
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
              const obj5 = {
                accessibilityRole: "button",
                accessibilityLabel: tmp7,
                onPress: openExpressionPicker,
                onLongPress: openImageInputActionSheet,
                onLayout: tmp18,
                style: tmp20,
                children: cResult[16],
              };
              const tmp28 = __initData(Pressables.PressableOpacity, obj5);
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
          let tmp22Result = __initData(timestampProducer, obj6);
        } else {
          const obj7 = { source: iconSrc };
          tmp22Result = __initData(native.Icon, obj7);
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
    }
  : (openImageInputActionSheet) => {
      ({ channelId, localCreationAnswerId, image } = openImageInputActionSheet);
      ({ openExpressionPicker, emojiSize } = openImageInputActionSheet);
      if (emojiSize === undefined) {
        emojiSize = 24;
      }
      ({ imageSize, answerIndex } = openImageInputActionSheet);
      openImageInputActionSheet = openImageInputActionSheet.openImageInputActionSheet;
      let upload;
      const tmp3 = answerIndex(upload[11])(channelId, localCreationAnswerId, image, imageSize, emojiSize);
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
      let obj = {
        accessibilityRole: "button",
        accessibilityLabel: memo,
        onPress: openExpressionPicker,
        onLongPress: tmp8,
        onLayout: null,
        style: null,
        children: null,
      };
      let tmp11;
      if (null == imageSize) {
        tmp11 = callback;
      }
      obj.onLayout = tmp11;
      const items2 = [openImageInputActionSheet.containerStyle, null != upload && closure_15().uploadContainer];
      obj.style = items2;
      if (tmp6) {
        let obj2 = { children: tmp3.renderImage };
        let tmp9Result = closure_12(closure_6, obj2);
      } else {
        const obj3 = { source: openImageInputActionSheet.iconSrc };
        tmp9Result = closure_12(image(tmp2[14]).Icon, obj3);
      }
      obj.children = tmp9Result;
      return closure_12(image(upload[15]).PressableOpacity, obj);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/native/PollAnswerInput.tsx");

export default function PollAnswerInput(answer) {
  answer = answer.answer;
  const index = answer.index;
  const channelId = answer.channelId;
  ({
    onAnswerTextChange: noop,
    onAnswerEmojiSelect: closure_4,
    canRemoveAnswer,
    onRemoveAnswer: closure_5,
    onRemoveAnswerImage: closure_6,
    error,
  } = answer);
  function openExpressionPicker() {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      React4.dismiss();
      const obj2 = {
        channel,
        onPressEmoji(arg0) {
          closure_1_4(arg0, index);
        },
        pickerIntention: EmojiIntention.POLLS,
      };
      const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet(obj2);
    }
  }
  function handleSaveAltText(description) {
    UploadAttachmentActionCreatorsDefault.update(channelId, answer.localCreationAnswerId, DraftType.Poll, {
      description,
    });
  }
  ({ inputRef, onSubmitEditing } = answer);
  const tmp = closure_15();
  const localCreationAnswerId = answer.localCreationAnswerId;
  let tmp6Result = null != error;
  if (tmp6Result) {
    tmp6Result = error.length > 0;
  }
  const items = [tmp.defaultContainer];
  let cannotRemove = !canRemoveAnswer;
  if (!canRemoveAnswer) {
    cannotRemove = tmp.cannotRemove;
  }
  let obj = { style: items, children: null };
  items[1] = cannotRemove;
  const items1 = [tmp.defaultImageAndTextContainer];
  let errorInput = tmp6Result;
  if (tmp6Result) {
    errorInput = tmp.errorInput;
  }
  let obj2 = { style: items1, children: null };
  items1[1] = errorInput;
  const items2 = [
    closure_12(closure_16, {
      channelId,
      localCreationAnswerId,
      image: answer.image,
      openExpressionPicker,
      openImageInputActionSheet() {
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11856, dependencyMap.paths), v65535, {
          channelId,
          index,
          answer,
          onSaveAltText: handleSaveAltText,
          onRemoveAnswerImage,
          openExpressionPicker,
        });
      },
      iconSrc: index(channelId[21]),
      containerStyle: tmp.defaultImageContainer,
      imageSize: 48,
      answerIndex: index,
    }),
  ];
  const obj4 = {
    ref: inputRef,
    textAlignVertical: "center",
    showTopContainer: false,
    showBorder: false,
    placeholder: null,
    onChange: null,
    onSubmitEditing: null,
    blurOnSubmit: false,
    style: null,
    textContentType: "none",
    accessibilityLabel: null,
    accessibilityHint: null,
    maxLength: null,
    returnKeyType: "next",
    required: true,
    autoCorrect: true,
    "aria-invalid": null,
  };
  const intl = answer(channelId[12]).intl;
  obj4.placeholder = intl.string(answer(channelId[12]).t.NNHVlv);
  obj4.onChange = function onChange(text) {
    return noop({ text, index, localCreationAnswerId });
  };
  obj4.onSubmitEditing = onSubmitEditing;
  obj4.style = tmp.pollAnswerTextInput;
  const intl2 = answer(channelId[12]).intl;
  obj4.accessibilityLabel = intl2.formatToPlainString(answer(channelId[12]).t["3+V8G9"], { answerNumber: index + 1 });
  let formatToPlainStringResult;
  if (tmp6Result) {
    const intl3 = tmp9(tmp8[12]).intl;
    const obj6 = { errorMessage: error };
    formatToPlainStringResult = intl3.formatToPlainString(tmp9(tmp8[12]).t.jnq5Ho, obj6);
  }
  obj4.accessibilityHint = formatToPlainStringResult;
  obj4.maxLength = handleSaveAltText;
  obj4["aria-invalid"] = error;
  items2[1] = closure_12(answer(channelId[22]).FormInput, obj4);
  obj2.children = items2;
  const items3 = [closure_13(onRemoveAnswerImage, obj2)];
  if (canRemoveAnswer) {
    const obj7 = {
      onPress() {
        return closure_1_5(index);
      },
      accessibilityRole: "button",
      style: tmp.defaultRemoveButtonContainer,
      accessibilityLabel: null,
      children: null,
    };
    const intl4 = tmp9(tmp8[12]).intl;
    const obj8 = { answerNumber: index + 1 };
    obj7.accessibilityLabel = intl4.formatToPlainString(tmp9(tmp8[12]).t["22fjEc"], obj8);
    const obj9 = {
      size: tmp9(tmp8[14]).Icon.Sizes.MEDIUM,
      source: tmp7(tmp8[23]),
      color: tmp.defaultRemoveButtonContainer.color,
    };
    obj7.children = closure_12(tmp9(tmp8[14]).Icon, obj9);
    canRemoveAnswer = closure_12(closure_5, obj7);
  }
  items3[1] = canRemoveAnswer;
  obj.children = items3;
  const children = [closure_13(onRemoveAnswerImage, obj)];
  if (tmp6Result) {
    const obj10 = { message: error };
    tmp6Result = closure_12(tmp7(tmp8[24]), obj10);
  }
  children[1] = tmp6Result;
  return closure_13(closure_14, { children });
}
