// === Module 12560: ImageInputActionSheet ===

// Module 12560 (ImageInputActionSheet)
import nativeDefault from "native" /* 576 */;
import EditPollCreationImageAltTextModalActionCreators from "EditPollCreationImageAltTextModalActionCreators" /* 12561 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let closure_5 = fn(8156).POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { emojiContainer: { flexDirection: "row", alignItems: "center", marginHorizontal: 24 }, emojiIcon: { marginRight: 12, borderRadius: nativeDefault.radii.sm } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/native/ImageInputActionSheet.tsx");

export default function ImageInputAnswerActionSheet(channelId) {
  channelId = channelId.channelId;
  ({ index: importDefault, answer } = channelId);
  ({ onSaveAltText: noop, onRemoveAnswerImage: View, openExpressionPicker: closure_5 } = channelId);
  closure_6 = undefined;
  const tmp = closure_8();
  const tmp3 = require("useRenderPollAnswerImage")(channelId, answer.localCreationAnswerId, answer.image, 40, 40);
  const upload = tmp3.upload;
  let tmp4 = null != upload;
  if (!tmp4) {
    const image = answer.image;
    let emoji1;
    if (image != null) {
      emoji1 = image.emoji;
    }
    tmp4 = null != emoji1;
  }
  closure_6 = noop.useCallback(() => {
    channelId(answer[7]).dismissKeyboard();
    const obj = channelId(answer[7]);
    index(answer[8]).hideActionSheet(closure_1_5);
  }, []);
  let tmp6Result = tmp4;
  if (tmp4) {
    let obj = { style: tmp.emojiContainer, children: null };
    const obj2 = { style: tmp.emojiIcon, children: tmp3.renderImage };
    const items = [closure_6(View, obj2), ];
    const image2 = answer.image;
    let name;
    if (image2 != null) {
      const emoji = image2.emoji;
      if (emoji != null) {
        name = emoji.name;
      }
    }
    const obj3 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
    const _HermesInternal = HermesInternal;
    obj3.children = ":" + name + ":";
    items[1] = closure_6(tmp7(answer[10]).Text, obj3);
    obj.children = items;
    tmp6Result = closure_7(View, obj);
  }
  const items1 = [tmp6Result, closure_6(channelId(answer[11]).Spacer, { size: 21 }), ];
  const intl = tmp7(answer[13]).intl;
  const string = intl.string;
  const t = tmp7(answer[13]).t;
  if (tmp4) {
    let stringResult = string(t.CZeRhU);
  } else {
    stringResult = string(t.dzcU1Q);
  }
  const items2 = [
    closure_6(channelId(answer[12]).ActionSheetRow, {
      label: stringResult,
      onPress() {
        closure_6();
        closure_1_5();
      }
    }),
  ,

  ];
  let tmp13Result = null;
  if (null != upload) {
    const obj5 = { label: null, onPress: null };
    const intl2 = tmp7(answer[13]).intl;
    obj5.label = intl2.string(tmp7(answer[13]).t.w7x2t4);
    obj5.onPress = function onPress() {
      closure_6();
      const result = EditPollCreationImageAltTextModalActionCreators.openEditPollCreationImageAltTextModal({ channelId, answer, index, onSave, imageSize: 40 });
    };
    tmp13Result = tmp13(tmp7(answer[12]).ActionSheetRow, obj5);
  }
  items2[1] = tmp13Result;
  let tmp13Result2 = null;
  if (tmp4) {
    const obj6 = { label: null, onPress: null };
    const intl3 = tmp7(answer[13]).intl;
    obj6.label = intl3.string(tmp7(answer[13]).t.IhMxgu);
    obj6.onPress = function onPress() {
      View(index);
      closure_6();
    };
    tmp13Result2 = tmp13(tmp7(answer[12]).ActionSheetRow, obj6);
  }
  const obj7 = { startExpanded: true, children: null };
  items2[2] = tmp13Result2;
  items1[2] = closure_7(channelId(answer[12]).ActionSheetRow.Group, { hasIcons: false, children: items2 });
  obj7.children = items1;
  return closure_7(channelId(answer[9]).ActionSheet, obj7);
};