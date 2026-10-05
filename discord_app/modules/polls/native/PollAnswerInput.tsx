// discord_app/modules/polls/native/PollAnswerInput.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import DraftStore from "../../../stores/DraftStore.tsx";
import PollsUtils from "../PollsUtils.tsx";
import UploadAttachmentActionCreatorsDefault from "../../../actions/UploadAttachmentActionCreators.tsx";
import openEmojiPickerActionSheet from "../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import useRenderPollAnswerImageDefault from "useRenderPollAnswerImage.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import PollsConstants from "../PollsConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c10;
let c9;
let closure_12;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ Keyboard: closure_4, TouchableOpacity: hasOwnProperty, View: metroRequire } = react_native);
const DraftType = DraftStore.DraftType;
({ MAX_POLL_ANSWER_LENGTH: c9, POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY: c10 } = PollsConstants);
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  defaultContainer: { flexDirection: "row", alignItems: "center" },
  defaultImageAndTextContainer: obj2,
  cannotRemove: { marginRight: 30 },
  defaultImageContainer: { width: 60, height: 48, justifyContent: "center", alignItems: "center" },
  pollAnswerTextInput: { flex: 1, paddingStart: 0 },
  defaultRemoveButtonContainer: obj3,
  uploadContainer: { alignItems: "flex-start" },
  errorInput: obj4,
};
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  flex: 1,
  overflow: "hidden",
};
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: 6, height: 48, justifyContent: "center", color: nativeDefault.colors.TEXT_MUTED };
obj4 = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
let closure_15 = createStyles(obj);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let answerIndex;
      let channelId;
      let containerStyle;
      let emojiSize;
      let iconSrc;
      let image;
      let imageSize;
      let localCreationAnswerId;
      let openExpressionPicker;
      let openImageInputActionSheet;
      let renderImage;
      let setUploadSize;
      let tmp7;
      let tmpResult;
      let upload;
      const obj = react2;
      const cResult = obj.c(24);
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
      useRenderPollAnswerImageDefault(channelId, localCreationAnswerId, image, imageSize, num);
      if (image != null) {
        emoji = image.emoji;
      }
      if (null == emoji) {
        if (null == upload) {
          let tmp11;
          if (cResult[6] !== answerIndex) {
            const intl3 = intl5.intl;
            const obj2 = { answerNumber: answerIndex + 1 };
            const formatToPlainStringResult = intl3.formatToPlainString(intl5.t.ieNrxk, obj2);
            cResult[6] = answerIndex;
            cResult[7] = formatToPlainStringResult;
            tmp11 = formatToPlainStringResult;
          } else {
            tmp11 = cResult[7];
          }
          tmp7 = tmp11;
        } else {
          let str = upload.item.filename;
          if (str == null) {
            str = "";
          }
          if (cResult[3] === answerIndex) {
            let tmp9;
            if (cResult[4] === str) {
              tmp9 = cResult[5];
            }
            tmp7 = tmp9;
          }
          const intl2 = intl5.intl;
          const formatToPlainString = intl2.formatToPlainString;
          const obj3 = { imageName: tmpResult.filterOutUUID(str), answerNumber: answerIndex + 1 };
          const vcC7Qn = intl5.t.vcC7Qn;
          tmpResult = PollsUtils;
          const formatToPlainStringResult1 = formatToPlainString(vcC7Qn, obj3);
          cResult[3] = answerIndex;
          cResult[4] = str;
          cResult[5] = formatToPlainStringResult1;
          tmp9 = formatToPlainStringResult1;
        }
      } else {
        if (cResult[0] === answerIndex) {
          if (cResult[1] === image.emoji.name) {
            tmp7 = cResult[2];
          }
        }
        const intl = intl5.intl;
        const obj4 = { imageName: image.emoji.name, answerNumber: answerIndex + 1 };
        const formatToPlainStringResult2 = intl.formatToPlainString(intl5.t.vcC7Qn, obj4);
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
      let tmp14 = null != upload;
      if (!tmp14) {
        let emoji1;
        if (image != null) {
          emoji1 = image.emoji;
        }
        tmp14 = null != emoji1;
      }
      if (tmp14) {
        openExpressionPicker = openImageInputActionSheet;
      }
      if (cResult[10] === containerStyle) {
        let tmp19;
        let tmp21Result;
        if (cResult[11] === (null != upload && tmp4.uploadContainer)) {
          tmp19 = cResult[12];
        }
        if (cResult[13] === tmp14) {
          if (cResult[14] === iconSrc) {
            let tmp20;
            if (cResult[15] === renderImage) {
              tmp20 = cResult[16];
            }
            if (cResult[17] === openExpressionPicker) {
              if (cResult[18] === openImageInputActionSheet) {
                if (cResult[19] === tmp7) {
                  if (cResult[20] === tmp17) {
                    if (cResult[21] === tmp19) {
                      let tmp24;
                      if (cResult[22] === tmp20) {
                        tmp24 = cResult[23];
                      }
                      return tmp24;
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
              onLayout: tmp17,
              style: tmp19,
              children: tmp20,
            };
            const tmp26 = closure_12(Pressables.PressableOpacity, obj5);
            cResult[17] = openExpressionPicker;
            cResult[18] = openImageInputActionSheet;
            cResult[19] = tmp7;
            cResult[20] = tmp17;
            cResult[21] = tmp19;
            cResult[22] = tmp20;
            cResult[23] = tmp26;
            tmp24 = tmp26;
          }
        }
        if (tmp14) {
          const obj6 = { children: renderImage };
          tmp21Result = closure_12(metroRequire, obj6);
        } else {
          const obj7 = { source: iconSrc };
          tmp21Result = closure_12(native.Icon, obj7);
        }
        cResult[13] = tmp14;
        cResult[14] = iconSrc;
        cResult[15] = renderImage;
        cResult[16] = tmp21Result;
        tmp20 = tmp21Result;
      }
      const items = [containerStyle, null != upload && tmp4.uploadContainer];
      cResult[10] = containerStyle;
      cResult[11] = null != upload && tmp4.uploadContainer;
      cResult[12] = items;
      tmp19 = items;
    }
  : (iconSrc) => {
      let answerIndex;
      let channelId;
      let emojiSize;
      let image;
      let imageSize;
      let items2;
      let localCreationAnswerId;
      let openExpressionPicker;
      let tmp11;
      let tmp9Result;
      ({ channelId, localCreationAnswerId, image } = iconSrc);
      ({ openExpressionPicker, emojiSize } = iconSrc);
      iconSrc = iconSrc.iconSrc;
      if (emojiSize === undefined) {
        emojiSize = 24;
      }
      ({ imageSize, answerIndex } = iconSrc);
      const openImageInputActionSheet = iconSrc.openImageInputActionSheet;
      let upload;
      const containerStyle = iconSrc.containerStyle;
      const tmp = closure_15();
      const tmp3 = answerIndex(upload[11])(channelId, localCreationAnswerId, image, imageSize, emojiSize);
      upload = tmp3.upload;
      const setUploadSize = tmp3.setUploadSize;
      const items = [image, upload, answerIndex];
      const renderImage = tmp3.renderImage;
      const items1 = [setUploadSize];
      const memo = setUploadSize.useMemo(() => {
        let obj3;
        let emoji;
        if (image != null) {
          emoji = image.emoji;
        }
        if (null != emoji) {
          const intl3 = intl5.intl;
          const obj2 = { imageName: image.emoji.name, answerNumber: answerIndex + 1 };
          return intl3.formatToPlainString(intl5.t.vcC7Qn, obj2);
        } else if (null != upload) {
          let str = upload.item.filename;
          if (str == null) {
            str = "";
          }
          const intl2 = intl5.intl;
          const formatToPlainString = intl2.formatToPlainString;
          const obj4 = { imageName: obj3.filterOutUUID(str), answerNumber: answerIndex + 1 };
          const vcC7Qn = intl5.t.vcC7Qn;
          obj3 = PollsUtils;
          return formatToPlainString(vcC7Qn, obj4);
        } else {
          const intl = intl5.intl;
          const obj = { answerNumber: answerIndex + 1 };
          return intl.formatToPlainString(intl5.t.ieNrxk, obj);
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
        onLayout: tmp11,
        style: items2,
        children: tmp9Result,
      };
      tmp11 = undefined;
      const PressableOpacity = image(tmp2[15]).PressableOpacity;
      if (null == imageSize) {
        tmp11 = callback;
      }
      items2 = [containerStyle, null != upload && tmp.uploadContainer];
      if (tmp6) {
        let obj2 = { children: renderImage };
        tmp9Result = closure_12(closure_6, obj2);
      } else {
        let obj3 = { source: iconSrc };
        tmp9Result = closure_12(image(tmp2[14]).Icon, obj3);
      }
      return closure_12(PressableOpacity, obj);
    };
let result = size.fileFinishedImporting("modules/polls/native/PollAnswerInput.tsx");

export default function PollAnswerInput(answer) {
  let Icon;
  let canRemoveAnswer;
  let closure_4;
  let closure_5;
  let closure_6;
  let error;
  let formatToPlainStringResult;
  let inputRef;
  let intl;
  let intl2;
  let intl4;
  let items2;
  let items3;
  let obj5;
  let obj8;
  let obj9;
  let onSubmitEditing;
  answer = answer.answer;
  const index = answer.index;
  const channelId = answer.channelId;
  ({
    onAnswerTextChange: react,
    onAnswerEmojiSelect: closure_4,
    canRemoveAnswer,
    onRemoveAnswer: closure_5,
    onRemoveAnswerImage: closure_6,
    error,
  } = answer);
  function openExpressionPicker() {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      React3.dismiss();
      const obj2 = {
        channel,
        onPressEmoji(arg0) {
          closure_1_4(arg0, index);
        },
        pickerIntention: EmojiIntention.POLLS,
      };
      const obj = openEmojiPickerActionSheet;
      const result = obj.openEmojiPickerActionSheet(obj2);
    }
  }
  function handleSaveAltText(description) {
    const obj = UploadAttachmentActionCreatorsDefault;
    const obj2 = { description };
    obj.update(channelId, answer.localCreationAnswerId, DraftType.Poll, obj2);
  }
  ({ inputRef, onSubmitEditing } = answer);
  const tmp = closure_15();
  const localCreationAnswerId = answer.localCreationAnswerId;
  let tmp7Result = null != error;
  const image = answer.image;
  if (tmp7Result) {
    tmp7Result = error.length > 0;
  }
  const items = [tmp.defaultContainer];
  const cannotRemove = !canRemoveAnswer && tmp.cannotRemove;
  let obj = { style: items, children: items3 };
  items[1] = cannotRemove;
  const items1 = [tmp.defaultImageAndTextContainer];
  let obj2 = { style: items1, children: items2 };
  const tmp6 = tmp7Result && tmp.errorInput;
  items1[1] = tmp6;
  items2 = [,];
  const obj3 = {
    channelId,
    localCreationAnswerId,
    image,
    openExpressionPicker,
    openImageInputActionSheet() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = {
        channelId,
        index,
        answer,
        onSaveAltText: handleSaveAltText,
        onRemoveAnswerImage,
        openExpressionPicker,
      };
      obj.openLazy(asyncRequire(11856, dependencyMap.paths), authStore, obj2);
    },
    iconSrc: index(channelId[21]),
    containerStyle: tmp.defaultImageContainer,
    imageSize: 48,
    answerIndex: index,
  };
  items2[0] = closure_12(closure_16, obj3);
  const obj4 = {
    ref: inputRef,
    textAlignVertical: "center",
    showTopContainer: false,
    showBorder: false,
    placeholder: intl.string(answer(channelId[12]).t.NNHVlv),
    onChange(text) {
      const obj = { text, index, localCreationAnswerId };
      return react(obj);
    },
    onSubmitEditing,
    blurOnSubmit: false,
    style: tmp.pollAnswerTextInput,
    textContentType: "none",
    accessibilityLabel: intl2.formatToPlainString(answer(channelId[12]).t["3+V8G9"], obj5),
    accessibilityHint: formatToPlainStringResult,
    maxLength: handleSaveAltText,
    returnKeyType: "next",
    required: true,
    autoCorrect: true,
    "aria-invalid": error,
  };
  const FormInput = answer(channelId[22]).FormInput;
  intl = answer(channelId[12]).intl;
  intl2 = answer(channelId[12]).intl;
  formatToPlainStringResult = undefined;
  obj5 = { answerNumber: index + 1 };
  if (tmp7Result) {
    const intl3 = tmp10(tmp9[12]).intl;
    const obj6 = { errorMessage: error };
    formatToPlainStringResult = intl3.formatToPlainString(tmp10(tmp9[12]).t.jnq5Ho, obj6);
  }
  items2[1] = closure_12(FormInput, obj4);
  items3 = [closure_13(onRemoveAnswerImage, obj2)];
  if (canRemoveAnswer) {
    const obj7 = {
      onPress() {
        return closure_5(index);
      },
      accessibilityRole: "button",
      style: tmp.defaultRemoveButtonContainer,
      accessibilityLabel: intl4.formatToPlainString(answer(channelId[12]).t["22fjEc"], obj8),
      children: closure_12(Icon, obj9),
    };
    intl4 = tmp10(tmp9[12]).intl;
    obj8 = { answerNumber: index + 1 };
    obj9 = {
      size: answer(channelId[14]).Icon.Sizes.MEDIUM,
      source: index(channelId[23]),
      color: tmp.defaultRemoveButtonContainer.color,
    };
    Icon = tmp10(tmp9[14]).Icon;
    canRemoveAnswer = closure_12(closure_5, obj7);
  }
  items3[1] = canRemoveAnswer;
  const children = [closure_13(onRemoveAnswerImage, obj)];
  if (tmp7Result) {
    const obj10 = { message: error };
    tmp7Result = closure_12(tmp8(tmp9[24]), obj10);
  }
  children[1] = tmp7Result;
  return closure_13(closure_14, { children });
}
