// === Module 12822: Separator ===

// Module 12822 (Separator)
import nativeDefault from "native" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7375 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

({ RowType: c2, SeparatorType: c3 } = RowGeneratorConstants);
let closure_4 = createStyles.createNativeStyleProperties({ dayColor: nativeDefault.colors.TEXT_MUTED, unreadTextColor: nativeDefault.colors.MOBILE_CHAT_NEW_MESSAGE_TEXT, unreadBorderColor: nativeDefault.colors.MOBILE_CHAT_NEW_MESSAGE_BORDER, summaryColor: nativeDefault.colors.TEXT_BRAND });
const result = size.fileFinishedImporting("modules/messages/native/renderer/rows/Separator.tsx");

export const generateSeparatorRowData = function generateSeparatorRowData(text, theme) {
  ({ rowType, changeType } = text);
  const tmp = closure_4(theme);
  if (constants2.DAY === rowType) {
    const obj2 = { type: constants.SEPARATOR, id: rowType, color: tmp.dayColor, text: text.text, changeType };
    return obj2;
  } else if (constants2.UNREAD === rowType) {
    const obj4 = { type: constants.SEPARATOR, id: rowType, color: null, borderColor: null, changeType: null, text: null };
    ({ unreadTextColor: obj3.color, unreadBorderColor: obj3.borderColor } = tmp);
    obj4.changeType = changeType;
    obj4.text = text.text;
    return obj4;
  } else if (constants2.SUMMARY === rowType) {
    const summary = text.summary;
    const obj7 = { type: constants.SEPARATOR, id: rowType, color: tmp.summaryColor, text: summary.topic, summary, isBeforeContent: text.isBeforeContent, changeType };
    return obj7;
  } else {
    GlobalUtils.assertNever(rowType);
  }
};