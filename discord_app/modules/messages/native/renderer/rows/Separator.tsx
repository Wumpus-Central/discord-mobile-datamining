// === Module 13248: Separator ===

// Module 13248 (Separator)
import nativeDefault from "native" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7933 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

({ RowType: c2, SeparatorType: c3 } = RowGeneratorConstants);
let closure_4 = createStyles.createNativeStyleProperties({ dayColor: nativeDefault.colors.TEXT_MUTED, unreadTextColor: nativeDefault.colors.MOBILE_CHAT_NEW_MESSAGE_TEXT, unreadBorderColor: nativeDefault.colors.MOBILE_CHAT_NEW_MESSAGE_BORDER, summaryColor: nativeDefault.colors.TEXT_BRAND });
const result = size.fileFinishedImporting("modules/messages/native/renderer/rows/Separator.tsx");

export const generateSeparatorRowData = function generateSeparatorRowData(text, theme) {
  ({ rowType, changeType } = text);
  const tmp = closure_4(theme);
  if (constants2.DAY === rowType) {
    let obj = { type: constants.SEPARATOR, id: rowType, color: tmp.dayColor, text: text.text, changeType };
    return obj;
  } else if (tmp2.UNREAD === rowType) {
    obj = { type: constants.SEPARATOR, id: rowType, color: null, borderColor: null, changeType: null, text: null };
    ({ unreadTextColor: obj3.color, unreadBorderColor: obj3.borderColor } = tmp);
    obj.changeType = changeType;
    obj.text = text.text;
    return obj;
  } else if (tmp2.SUMMARY === rowType) {
    const summary = text.summary;
    const obj1 = { type: constants.SEPARATOR, id: rowType, color: tmp.summaryColor, text: summary.topic, summary, isBeforeContent: text.isBeforeContent, changeType };
    return obj1;
  } else {
    obj = GlobalUtils;
    obj.assertNever(rowType);
  }
};