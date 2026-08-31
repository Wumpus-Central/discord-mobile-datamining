// === Module 11761: ImageInputAnswerActionSheet ===

// Module 11761 (ImageInputAnswerActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY as closure_5 } from "POLL_ATTACHMENT_FOLDER" /* 7541 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { emojiContainer: { flexDirection: "row", alignItems: "center", marginHorizontal: 24 }, emojiIcon: null };
createCacheKey = { marginRight: 12, borderRadius: ThemesDefault.radii.sm };
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/polls/native/ImageInputActionSheet.tsx");

export default function ImageInputAnswerActionSheet(channelId) {
  channelId = channelId.channelId;
  ({ index: importDefault, answer } = channelId);
  ({ onSaveAltText: closure_3, onRemoveAnswerImage: View, openExpressionPicker: closure_5 } = channelId);
  let callback;
  const tmp = callback2();
  const tmp3 = importDefault(answer[6])(channelId, answer.localCreationAnswerId, answer.image, 40, 40);
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
  callback = React.useCallback(() => {
    channelId(answer[7]).dismissKeyboard();
    const obj = channelId(answer[7]);
    callback(answer[8]).hideActionSheet(closure_5);
  }, []);
  let tmp6Result = tmp4;
  if (tmp4) {
    let obj = { style: null, children: null };
    obj[0] = tmp.emojiContainer;
    obj = { style: null, children: null };
    obj[0] = tmp.emojiIcon;
    obj[1] = tmp3.renderImage;
    const items = [callback(View, obj), ];
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
    obj[2] = ":" + name + ":";
    items[1] = callback(tmp7(tmp2[10]).Text, obj);
    obj[1] = items;
    tmp6Result = tmp6(View, obj);
    const tmp10 = callback;
    const tmp9 = View;
  }
  const items1 = [tmp6Result, callback(channelId(answer[11]).Spacer, { size: 21 }), ];
  const intl = tmp7(tmp2[13]).intl;
  const string = intl.string;
  const t = tmp7(tmp2[13]).t;
  if (tmp4) {
    let stringResult = string(t.CZeRhU);
  } else {
    stringResult = string(t.dzcU1Q);
  }
  const items2 = [
    callback(channelId(answer[12]).ActionSheetRow, {
      label: stringResult,
      onPress() {
        callback4();
        callback3();
      }
    }),
  ,

  ];
  let tmp13Result = null;
  if (null != upload) {
    const obj2 = { label: null, onPress: null };
    const intl2 = tmp7(tmp2[13]).intl;
    obj2[0] = intl2.string(tmp7(tmp2[13]).t.w7x2t4);
    obj2[1] = function onPress() {
      callback4();
      let obj = channelId(answer[14]);
      obj = { channelId, answer, index: closure_1, onSave: closure_3, imageSize: 40 };
      const result = obj.openEditPollCreationImageAltTextModal(obj);
    };
    tmp13Result = tmp13(tmp7(tmp2[12]).ActionSheetRow, obj2);
  }
  items2[1] = tmp13Result;
  tmp13Result = null;
  if (tmp4) {
    const obj3 = { label: null, onPress: null };
    const intl3 = tmp7(tmp2[13]).intl;
    obj3[0] = intl3.string(tmp7(tmp2[13]).t.IhMxgu);
    obj3[1] = function onPress() {
      callback2(closure_1);
      callback4();
    };
    tmp13Result = tmp13(tmp7(tmp2[12]).ActionSheetRow, obj3);
  }
  const obj4 = { startExpanded: true, children: null };
  items2[2] = tmp13Result;
  items1[2] = closure_7(channelId(answer[12]).ActionSheetRow.Group, { hasIcons: false, children: items2 });
  obj4[1] = items1;
  return closure_7(channelId(answer[9]).ActionSheet, obj4);
};