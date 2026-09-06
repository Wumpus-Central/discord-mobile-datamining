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
    let obj = { type: constants.SEPARATOR, id: rowType, color: tmp.dayColor, text: text.text, changeType };
    return obj;
  } else if (constants2.UNREAD === rowType) {
    obj = { type: constants.SEPARATOR, id: rowType, color: null, borderColor: null, changeType: null, text: null };
    ({ unreadTextColor: obj3.color, unreadBorderColor: obj3.borderColor } = tmp);
    obj.changeType = changeType;
    obj.text = text.text;
    return obj;
  } else if (constants2.SUMMARY === rowType) {
    const summary = text.summary;
    const obj1 = {
      type: constants.SEPARATOR,
      id: rowType,
      color: tmp.summaryColor,
      text: summary.topic,
      summary,
      isBeforeContent: text.isBeforeContent,
      changeType,
    };
    return obj1;
  } else {
    obj = GlobalUtils;
    obj.assertNever(rowType);
  }
};
