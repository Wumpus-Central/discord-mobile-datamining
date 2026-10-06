// === Module 11870: ImageInputActionSheet ===

// Module 11870 (ImageInputActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import PollsConstants from "PollsConstants" /* 7468 */;
import EditPollCreationImageAltTextModalActionCreators from "EditPollCreationImageAltTextModalActionCreators" /* 11871 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let channelId;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
let closure_5 = PollsConstants.POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 40;
let obj = { emojiContainer: { flexDirection: "row", alignItems: "center", marginHorizontal: 24 }, emojiIcon: obj2 };
obj2 = { marginRight: 12, borderRadius: nativeDefault.radii.sm };
let closure_9 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let answer;
  let first;
  let imageSize;
  let intl2;
  let renderImage;
  let upload;
  let obj = channelId(answer[7]);
  const cResult = obj.c(31);
  channelId = channelId.channelId;
  const index = channelId.index;
  answer = channelId.answer;
  const onSaveAltText = channelId.onSaveAltText;
  const onRemoveAnswerImage = channelId.onRemoveAnswerImage;
  const openExpressionPicker = channelId.openExpressionPicker;
  const tmp4 = closure_9();
  ({ renderImage, upload } = index(answer[8])(channelId, answer.localCreationAnswerId, answer.image, c8, c8));
  let tmp6 = null != upload;
  index(answer[8])(channelId, answer.localCreationAnswerId, answer.image, c8, c8);
  if (!tmp6) {
    const image = answer.image;
    let emoji1;
    if (image != null) {
      emoji1 = image.emoji;
    }
    tmp6 = null != emoji1;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const obj = channelId(answer[9]);
      obj.dismissKeyboard();
      const obj2 = index(answer[10]);
      obj2.hideActionSheet(openExpressionPicker);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const image2 = answer.image;
  let name;
  const tmp9 = cResult[1];
  if (image2 != null) {
    const emoji = image2.emoji;
    if (emoji != null) {
      name = emoji.name;
    }
  }
  if (tmp9 === name) {
    if (cResult[2] === tmp6) {
      if (cResult[3] === renderImage) {
        let tmp24;
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          cResult[6] = first(channelId(answer[12]).Spacer, { size: 21 });
          const tmp23 = first(channelId(answer[12]).Spacer, { size: 21 });
        }
        if (cResult[7] !== tmp6) {
          let stringResult;
          const intl = tmp(tmp2[13]).intl;
          const string = intl.string;
          const t = tmp(tmp2[13]).t;
          if (tmp6) {
            stringResult = string(t.CZeRhU);
          } else {
            stringResult = string(t.dzcU1Q);
          }
          cResult[7] = tmp6;
          cResult[8] = stringResult;
          tmp24 = stringResult;
        } else {
          tmp24 = cResult[8];
        }
        if (cResult[9] !== openExpressionPicker) {
          class T {
            constructor() {
              first();
              openExpressionPicker();
            }
          }
          cResult[9] = openExpressionPicker;
          cResult[10] = T;
        } else {
          class T {
            constructor() {
              first();
              openExpressionPicker();
            }
          }
        }
        if (cResult[11] === tmp24) {
          class T {
            constructor() {
              first();
              openExpressionPicker();
            }
          }
          if (cResult[14] === answer) {
            class T {
              constructor() {
                first();
                openExpressionPicker();
              }
            }
          }
          let tmp31 = null;
          if (null != upload) {
            class T {
              constructor() {
                first();
                openExpressionPicker();
              }
            }
            let obj2 = {
              label: intl2.string(tmp(tmp2[13]).t.w7x2t4),
              onPress() {
                          first();
                          const obj = EditPollCreationImageAltTextModalActionCreators;
                          const obj2 = { channelId, answer, index, onSave: onSaveAltText, imageSize };
                          const result = obj.openEditPollCreationImageAltTextModal(obj2);
                        }
            };
            const ActionSheetRow = tmp(tmp2[14]).ActionSheetRow;
            intl2 = tmp(tmp2[13]).intl;
            tmp31 = first(ActionSheetRow, obj2);
          }
          cResult[14] = answer;
          cResult[15] = channelId;
          cResult[16] = index;
          cResult[17] = onSaveAltText;
          cResult[18] = upload;
          cResult[19] = tmp31;
        }
        const obj3 = { label: tmp24, onPress: T };
        cResult[11] = tmp24;
        cResult[12] = T;
        cResult[13] = first(channelId(answer[14]).ActionSheetRow, obj3);
        const tmp29 = first(channelId(answer[14]).ActionSheetRow, obj3);
      }
    }
  }
  let tmp13Result = tmp6;
  if (tmp13Result) {
    class T {
      constructor() {
        first();
        openExpressionPicker();
      }
    }
    tmp15[0] = tmp4.emojiContainer;
    const obj4 = { style: tmp4.emojiIcon, children: renderImage };
    const items = [first(onRemoveAnswerImage, obj4), ];
    const image3 = answer.image;
    const Text = tmp(tmp2[11]).Text;
    const tmp14 = onRemoveAnswerImage;
    const tmp16 = first;
    if (image3 != null) {
      class T {
        constructor() {
          first();
          openExpressionPicker();
        }
      }
      if (tmp18 != null) {
        class T {
          constructor() {
            first();
            openExpressionPicker();
          }
        }
      }
    }
    const _HermesInternal = HermesInternal;
    const obj5 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: ":" + undefined + ":" };
    items[1] = tmp16(Text, obj5);
    tmp15[1] = items;
    tmp13Result = closure_7(tmp14, tmp15);
  }
  if (answer.image != null) {
    class T {
      constructor() {
        first();
        openExpressionPicker();
      }
    }
    if (tmp20 != null) {
      class T {
        constructor() {
          first();
          openExpressionPicker();
        }
      }
    }
  }
  cResult[1] = undefined;
  cResult[2] = tmp6;
  cResult[3] = renderImage;
  cResult[4] = tmp4;
  cResult[5] = tmp13Result;
}) : ((channelId) => {
  let answer;
  let imageSize;
  let index;
  let intl2;
  let intl3;
  let items;
  let onSave;
  let stringResult;
  channelId = channelId.channelId;
  ({ index: importDefault, answer } = channelId);
  ({ onSaveAltText: react, onRemoveAnswerImage: View, openExpressionPicker: closure_5 } = channelId);
  let closure_6;
  const tmp = closure_9();
  const tmp3 = require("useRenderPollAnswerImage")(channelId, answer.localCreationAnswerId, answer.image, c8, c8);
  const upload = tmp3.upload;
  let tmp4 = null != upload;
  const renderImage = tmp3.renderImage;
  if (!tmp4) {
    const image = answer.image;
    let emoji1;
    if (image != null) {
      emoji1 = image.emoji;
    }
    tmp4 = null != emoji1;
  }
  closure_6 = react.useCallback(() => {
    const obj = channelId(answer[9]);
    obj.dismissKeyboard();
    const obj2 = require("ActionSheetActionCreators");
    obj2.hideActionSheet(closure_5);
  }, []);
  let tmp6Result = tmp4;
  const ActionSheet = channelId(answer[16]).ActionSheet;
  if (tmp4) {
    let obj = { style: tmp.emojiContainer, children: items };
    let obj2 = { style: tmp.emojiIcon, children: renderImage };
    items = [closure_6(View, obj2), ];
    const image2 = answer.image;
    let name;
    const Text = tmp7(answer[11]).Text;
    const tmp10 = closure_6;
    if (image2 != null) {
      const emoji = image2.emoji;
      if (emoji != null) {
        name = emoji.name;
      }
    }
    const _HermesInternal = HermesInternal;
    const obj3 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: ":" + name + ":" };
    items[1] = tmp10(Text, obj3);
    tmp6Result = closure_7(View, obj);
  }
  const items1 = [tmp6Result, closure_6(channelId(answer[12]).Spacer, { size: 21 }), ];
  const Group = tmp7(answer[14]).ActionSheetRow.Group;
  const ActionSheetRow = tmp7(answer[14]).ActionSheetRow;
  const intl = tmp7(answer[13]).intl;
  const string = intl.string;
  const t = tmp7(answer[13]).t;
  if (tmp4) {
    stringResult = string(t.CZeRhU);
  } else {
    stringResult = string(t.dzcU1Q);
  }
  const items2 = [, , ];
  const obj4 = {
    label: stringResult,
    onPress() {
      closure_6();
      closure_5();
    }
  };
  items2[0] = closure_6(ActionSheetRow, obj4);
  let tmp13Result = null;
  if (null != upload) {
    const obj5 = {
      label: intl2.string(channelId(answer[13]).t.w7x2t4),
      onPress() {
          closure_6();
          const obj = EditPollCreationImageAltTextModalActionCreators;
          const obj2 = { channelId, answer, index: importDefault, onSave: react, imageSize };
          const result = obj.openEditPollCreationImageAltTextModal(obj2);
        }
    };
    const ActionSheetRow2 = tmp7(answer[14]).ActionSheetRow;
    intl2 = tmp7(answer[13]).intl;
    tmp13Result = tmp13(ActionSheetRow2, obj5);
  }
  items2[1] = tmp13Result;
  let tmp13Result2 = null;
  if (tmp4) {
    const obj6 = {
      label: intl3.string(channelId(answer[13]).t.IhMxgu),
      onPress() {
          View(importDefault);
          closure_6();
        }
    };
    const ActionSheetRow3 = tmp7(answer[14]).ActionSheetRow;
    intl3 = tmp7(answer[13]).intl;
    tmp13Result2 = tmp13(ActionSheetRow3, obj6);
  }
  const obj7 = { startExpanded: true, children: items1 };
  items2[2] = tmp13Result2;
  items1[2] = closure_7(Group, { hasIcons: false, children: items2 });
  return closure_7(ActionSheet, obj7);
});
let result = size.fileFinishedImporting("modules/polls/native/ImageInputActionSheet.tsx");

export default tmp3;