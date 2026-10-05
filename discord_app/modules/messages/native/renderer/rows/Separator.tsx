// discord_app/modules/messages/native/renderer/rows/Separator.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import client_themes_ClientThemesUtils from "../../../../client_themes/native/ClientThemesUtils.tsx";
import RowGeneratorConstants from "../RowGeneratorConstants.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c2;
let c3;
({ RowType: c2, SeparatorType: c3 } = RowGeneratorConstants);
let obj = {
  dayColor: nativeDefault.colors.TEXT_MUTED,
  unreadTextColor: nativeDefault.colors.MOBILE_CHAT_NEW_MESSAGE_TEXT,
  unreadBorderColor: nativeDefault.colors.MOBILE_CHAT_NEW_MESSAGE_BORDER,
  summaryColor: nativeDefault.colors.TEXT_BRAND,
};
let closure_4 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/messages/native/renderer/rows/Separator.tsx");

export const generateSeparatorRowData = function generateSeparatorRowData(text, theme) {
  let changeType;
  let obj3;
  let rowType;
  ({ rowType, changeType } = text);
  const tmp = closure_4(theme);
  if (constants2.DAY === rowType) {
    return { type: constants.SEPARATOR, id: rowType, color: tmp.dayColor, text: text.text, changeType };
  } else if (constants2.UNREAD === rowType) {
    const obj4 = {
      type: constants.SEPARATOR,
      id: rowType,
      color: null,
      borderColor: null,
      changeType,
      text: text.text,
    };
    ({ unreadTextColor: obj5.color, unreadBorderColor: obj5.borderColor } = tmp);
    return obj4;
  } else if (constants2.SUMMARY === rowType) {
    const summary = text.summary;
    return {
      type: constants.SEPARATOR,
      id: rowType,
      color: tmp.summaryColor,
      text: summary.topic,
      summary,
      isBeforeContent: text.isBeforeContent,
      changeType,
    };
  } else if (constants2.CONVERSATION === rowType) {
    const conversationHeader = text.conversationHeader;
    const obj10 = {
      type: constants.SEPARATOR,
      id: rowType,
      text: conversationHeader.title,
      conversationHeader,
      isCustomTheme: obj3.isCustomThemeActive(),
      changeType,
    };
    obj3 = client_themes_ClientThemesUtils;
    return obj10;
  } else {
    const obj = GlobalUtils;
    obj.assertNever(rowType);
  }
};
