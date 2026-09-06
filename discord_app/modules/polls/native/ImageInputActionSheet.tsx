// === Module 12227: ImageInputActionSheet ===

// Module 12227 (ImageInputActionSheet)
import nativeDefault from "native" /* 576 */;
import EditPollCreationImageAltTextModalActionCreators from "EditPollCreationImageAltTextModalActionCreators" /* 12228 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_5 = fn(7829).POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { emojiContainer: { flexDirection: "row", alignItems: "center", marginHorizontal: 24 }, emojiIcon: null };
createStyles = { marginRight: 12, borderRadius: nativeDefault.radii.sm };
createStyles.emojiIcon = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
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
    let emoji;
    if (image != null) {
      emoji = image.emoji;
    }
    tmp4 = null != emoji;
  }
  closure_6 = noop.useCallback(() => {
    channelId(answer[7]).dismissKeyboard();
    const obj = channelId(answer[7]);
    index(answer[8]).hideActionSheet(closure_1_5);
  }, []);
  let tmp6Result = tmp4;
  if (tmp4) {
    let obj = { style: tmp.emojiContainer, children: null };
    obj = { style: tmp.emojiIcon, children: tmp3.renderImage };
    const items = [closure_6(View, obj), ];
    const image2 = answer.image;
    let name;
    if (image2 != null) {
      emoji = image2.emoji;
      if (emoji != null) {
        name = emoji.name;
      }
    }
    obj = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
    const _HermesInternal = HermesInternal;
    obj.children = ":" + name + ":";
    items[1] = closure_6(tmp7(tmp2[10]).Text, obj);
    obj.children = items;
    tmp6Result = tmp6(View, obj);
  }
  const items1 = [tmp6Result, closure_6(channelId(answer[11]).Spacer, { size: 21 }), ];
  const intl = tmp7(tmp2[13]).intl;
  const string = intl.string;
  const t = tmp7(tmp2[13]).t;
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
    const obj2 = { label: null, onPress: null };
    const intl2 = tmp7(tmp2[13]).intl;
    obj2.label = intl2.string(tmp7(tmp2[13]).t.w7x2t4);
    obj2.onPress = function onPress() {
      closure_6();
      const obj = { channelId, answer, index, onSave, imageSize: 40 };
      const result = obj.openEditPollCreationImageAltTextModal(obj);
    };
    tmp13Result = tmp13(tmp7(tmp2[12]).ActionSheetRow, obj2);
  }
  items2[1] = tmp13Result;
  tmp13Result = null;
  if (tmp4) {
    const obj3 = { label: null, onPress: null };
    const intl3 = tmp7(tmp2[13]).intl;
    obj3.label = intl3.string(tmp7(tmp2[13]).t.IhMxgu);
    obj3.onPress = function onPress() {
      View(index);
      closure_6();
    };
    tmp13Result = tmp13(tmp7(tmp2[12]).ActionSheetRow, obj3);
  }
  const obj4 = { startExpanded: true, children: null };
  items2[2] = tmp13Result;
  items1[2] = closure_7(channelId(answer[12]).ActionSheetRow.Group, { hasIcons: false, children: items2 });
  obj4.children = items1;
  return closure_7(channelId(answer[9]).ActionSheet, obj4);
};