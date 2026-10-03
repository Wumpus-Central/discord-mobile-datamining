// === Module 11856: ImageInputActionSheet ===

// Module 11856 (ImageInputActionSheet)
import nativeDefault from "native" /* 587 */;
import EditPollCreationImageAltTextModalActionCreators from "EditPollCreationImageAltTextModalActionCreators" /* 11857 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let closure_5 = fn(7457).POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 40;
const createStyles = fn(4890);
let obj2 = { emojiContainer: { flexDirection: "row", alignItems: "center", marginHorizontal: 24 }, emojiIcon: { marginRight: 12, borderRadius: nativeDefault.radii.sm } };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginRight: 12, borderRadius: nativeDefault.radii.sm };
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/native/ImageInputActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(answer[7]).c(31);
  channelId = channelId.channelId;
  const index = channelId.index;
  answer = channelId.answer;
  const onSaveAltText = channelId.onSaveAltText;
  const onRemoveAnswerImage = channelId.onRemoveAnswerImage;
  const openExpressionPicker = channelId.openExpressionPicker;
  const tmp4 = closure_9();
  let obj = channelId(answer[7]);
  ({ renderImage, upload } = index(answer[8])(channelId, answer.localCreationAnswerId, answer.image, c8, c8));
  let tmp6 = null != upload;
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
      channelId(answer[9]).dismissKeyboard();
      const obj = channelId(answer[9]);
      index(answer[10]).hideActionSheet(openExpressionPicker);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const image2 = answer.image;
  let name;
  if (image2 != null) {
    const emoji = image2.emoji;
    if (emoji != null) {
      name = emoji.name;
    }
  }
  if (cResult[1] === name) {
    if (cResult[2] === tmp6) {
      if (cResult[3] === renderImage) {
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp22 = first(tmp(tmp2[12]).Spacer, { size: 21 });
          cResult[6] = tmp22;
        }
        if (cResult[7] !== tmp6) {
          const intl = tmp(tmp2[13]).intl;
          const string = intl.string;
          let CZeRhU = tmp(tmp2[13]).t;
          if (tmp6) {
            CZeRhU = CZeRhU.CZeRhU;
            let stringResult = string(CZeRhU);
          } else {
            stringResult = string(CZeRhU.dzcU1Q);
          }
          cResult[7] = tmp6;
          cResult[8] = stringResult;
        } else {
          if (cResult[9] !== openExpressionPicker) {
            class T {
              constructor() {
                tmp = closure_6();
                tmp2 = openExpressionPicker();
                return;
              }
            }
            cResult[9] = openExpressionPicker;
            cResult[10] = T;
          } else {
            class T {
              constructor() {
                tmp = closure_6();
                tmp2 = openExpressionPicker();
                return;
              }
            }
          }
          if (cResult[11] === cResult[8]) {
            class T {
              constructor() {
                tmp = closure_6();
                tmp2 = openExpressionPicker();
                return;
              }
            }
            if (cResult[14] === answer) {
              class T {
                constructor() {
                  tmp = closure_6();
                  tmp2 = openExpressionPicker();
                  return;
                }
              }
            }
            let tmp31 = null;
            if (null != upload) {
              class T {
                constructor() {
                  tmp = closure_6();
                  tmp2 = openExpressionPicker();
                  return;
                }
              }
              const obj2 = { label: null, onPress: null };
              const intl2 = tmp(tmp2[13]).intl;
              obj2.label = intl2.string(tmp(tmp2[13]).t.w7x2t4);
              obj2.onPress = function onPress() {
                first();
                const result = EditPollCreationImageAltTextModalActionCreators.openEditPollCreationImageAltTextModal({ channelId, answer, index, onSave: onSaveAltText, imageSize });
              };
              tmp31 = first(tmp(tmp2[14]).ActionSheetRow, obj2);
            }
            cResult[14] = answer;
            cResult[15] = channelId;
            cResult[16] = index;
            cResult[17] = onSaveAltText;
            cResult[18] = upload;
            cResult[19] = tmp31;
          }
          const obj3 = { label: cResult[8], onPress: T };
          const tmp29 = first(tmp(tmp2[14]).ActionSheetRow, obj3);
          cResult[11] = cResult[8];
          cResult[12] = T;
          cResult[13] = tmp29;
        }
      }
    }
  }
  let tmp12Result = tmp6;
  if (tmp6) {
    class T {
      constructor() {
        tmp = closure_6();
        tmp2 = openExpressionPicker();
        return;
      }
    }
    tmp14[0] = tmp4.emojiContainer;
    const obj4 = { style: tmp4.emojiIcon, children: renderImage };
    const items = [first(onRemoveAnswerImage, obj4), ];
    if (answer.image != null) {
      class T {
        constructor() {
          tmp = closure_6();
          tmp2 = openExpressionPicker();
          return;
        }
      }
      if (tmp17 != null) {
        class T {
          constructor() {
            tmp = closure_6();
            tmp2 = openExpressionPicker();
            return;
          }
        }
      }
    }
    const obj5 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
    const _HermesInternal = HermesInternal;
    obj5.children = ":" + undefined + ":";
    items[1] = first(tmp(tmp2[11]).Text, obj5);
    tmp14[1] = items;
    tmp12Result = closure_7(onRemoveAnswerImage, tmp14);
  }
  if (answer.image != null) {
    class T {
      constructor() {
        tmp = closure_6();
        tmp2 = openExpressionPicker();
        return;
      }
    }
    if (tmp19 != null) {
      class T {
        constructor() {
          tmp = closure_6();
          tmp2 = openExpressionPicker();
          return;
        }
      }
    }
  }
  cResult[1] = undefined;
  cResult[2] = tmp6;
  cResult[3] = renderImage;
  cResult[4] = tmp4;
  cResult[5] = tmp12Result;
  const tmp5 = index(answer[8])(channelId, answer.localCreationAnswerId, answer.image, c8, c8);
}) : ((channelId) => {
  channelId = channelId.channelId;
  ({ index: importDefault, answer } = channelId);
  ({ onSaveAltText: noop, onRemoveAnswerImage: View, openExpressionPicker: closure_5 } = channelId);
  closure_6 = undefined;
  const tmp = closure_9();
  const tmp3 = require("useRenderPollAnswerImage")(channelId, answer.localCreationAnswerId, answer.image, c8, c8);
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
    channelId(answer[9]).dismissKeyboard();
    const obj = channelId(answer[9]);
    index(answer[10]).hideActionSheet(closure_1_5);
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
    items[1] = closure_6(tmp7(answer[11]).Text, obj3);
    obj.children = items;
    tmp6Result = closure_7(View, obj);
  }
  const items1 = [tmp6Result, closure_6(channelId(answer[12]).Spacer, { size: 21 }), ];
  const intl = tmp7(answer[13]).intl;
  const string = intl.string;
  const t = tmp7(answer[13]).t;
  if (tmp4) {
    let stringResult = string(t.CZeRhU);
  } else {
    stringResult = string(t.dzcU1Q);
  }
  const items2 = [
    closure_6(channelId(answer[14]).ActionSheetRow, {
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
      const result = EditPollCreationImageAltTextModalActionCreators.openEditPollCreationImageAltTextModal({ channelId, answer, index, onSave, imageSize });
    };
    tmp13Result = tmp13(tmp7(answer[14]).ActionSheetRow, obj5);
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
    tmp13Result2 = tmp13(tmp7(answer[14]).ActionSheetRow, obj6);
  }
  const obj7 = { startExpanded: true, children: null };
  items2[2] = tmp13Result2;
  items1[2] = closure_7(channelId(answer[14]).ActionSheetRow.Group, { hasIcons: false, children: items2 });
  obj7.children = items1;
  return closure_7(channelId(answer[16]).ActionSheet, obj7);
});