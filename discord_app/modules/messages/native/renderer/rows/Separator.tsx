// discord_app/modules/messages/native/renderer/rows/Separator.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import RowGeneratorConstants from "../RowGeneratorConstants.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

({ RowType: c2, SeparatorType: c3 } = RowGeneratorConstants);
let closure_4 = createStyles.createNativeStyleProperties({
  dayColor: nativeDefault.colors.TEXT_MUTED,
  unreadTextColor: nativeDefault.colors.MOBILE_CHAT_NEW_MESSAGE_TEXT,
  unreadBorderColor: nativeDefault.colors.MOBILE_CHAT_NEW_MESSAGE_BORDER,
  summaryColor: nativeDefault.colors.TEXT_BRAND,
});
const result = size.fileFinishedImporting("modules/messages/native/renderer/rows/Separator.tsx");

export const generateSeparatorRowData = function generateSeparatorRowData(text, theme) {
  ({ rowType, changeType } = text);
  const tmp = closure_4(theme);
  if (constants2.DAY === rowType) {
    const obj2 = { type: constants.SEPARATOR, id: rowType, color: tmp.dayColor, text: text.text, changeType };
    return obj2;
  } else if (constants2.UNREAD === rowType) {
    const obj4 = {
      type: constants.SEPARATOR,
      id: rowType,
      color: null,
      borderColor: null,
      changeType: null,
      text: null,
    };
    ({ unreadTextColor: obj3.color, unreadBorderColor: obj3.borderColor } = tmp);
    obj4.changeType = changeType;
    obj4.text = text.text;
    return obj4;
  } else if (constants2.SUMMARY === rowType) {
    const summary = text.summary;
    const obj7 = {
      type: constants.SEPARATOR,
      id: rowType,
      color: tmp.summaryColor,
      text: summary.topic,
      summary,
      isBeforeContent: text.isBeforeContent,
      changeType,
    };
    return obj7;
  } else {
    GlobalUtils.assertNever(rowType);
  }
};
