// === Module 13532: Separator ===

// Module 13532 (Separator)
import nativeDefault from "native" /* 587 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4936 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7747 */;
import createStyles from "createStyles" /* 5092 */;
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
    ({ unreadTextColor: obj5.color, unreadBorderColor: obj5.borderColor } = tmp);
    obj4.changeType = changeType;
    obj4.text = text.text;
    return obj4;
  } else if (constants2.SUMMARY === rowType) {
    const summary = text.summary;
    const obj6 = { type: constants.SEPARATOR, id: rowType, color: tmp.summaryColor, text: summary.topic, summary, isBeforeContent: text.isBeforeContent, changeType };
    return obj6;
  } else if (constants2.CONVERSATION === rowType) {
    const conversationHeader = text.conversationHeader;
    const obj10 = { type: constants.SEPARATOR, id: rowType, text: conversationHeader.title, conversationHeader, isCustomTheme: client_themes_ClientThemesUtils.isCustomThemeActive(), changeType };
    return obj10;
  } else {
    GlobalUtils.assertNever(rowType);
  }
};