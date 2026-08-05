// discord_app/modules/messages/native/renderer/rows/Separator.tsx
import Changeset from "Changeset";
import createCacheKey from "createCacheKey";
import { isDiscordFrontendDevelopment } from "../../../../../utils/GlobalUtils.tsx";

let c3;
let obj1;
({ RowType: obj1, SeparatorType: c3 } = Changeset);
let closure_4 = createCacheKey.createNativeStyleProperties({ dayColor: require("Themes").colors.TEXT_MUTED, unreadTextColor: require("Themes").colors.MOBILE_CHAT_NEW_MESSAGE_TEXT, unreadBorderColor: require("Themes").colors.MOBILE_CHAT_NEW_MESSAGE_BORDER, summaryColor: require("Themes").colors.TEXT_BRAND });
let obj = { dayColor: require("Themes").colors.TEXT_MUTED, unreadTextColor: require("Themes").colors.MOBILE_CHAT_NEW_MESSAGE_TEXT, unreadBorderColor: require("Themes").colors.MOBILE_CHAT_NEW_MESSAGE_BORDER, summaryColor: require("Themes").colors.TEXT_BRAND };
const result = require("Themes").fileFinishedImporting("modules/messages/native/renderer/rows/Separator.tsx");

export const generateSeparatorRowData = function generateSeparatorRowData(text, theme) {
  let changeType;
  let rowType;
  ({ rowType, changeType } = text);
  const tmp = callback(theme);
  if (constants2.DAY === rowType) {
    let obj = { type: null, id: null, color: null, text: null, changeType: null };
    obj[0] = constants.SEPARATOR;
    obj[1] = rowType;
    obj[2] = tmp.dayColor;
    obj[3] = text.text;
    obj[4] = changeType;
    return obj;
  } else if (tmp2.UNREAD === rowType) {
    obj = { type: null, id: null, color: null, borderColor: null, changeType: null, text: null };
    obj[0] = constants.SEPARATOR;
    obj[1] = rowType;
    obj[2] = tmp.unreadTextColor;
    let unreadBorderColor;
    if (obj4.isMobileVisualRefreshEnabled("Separator")) {
      unreadBorderColor = tmp.unreadBorderColor;
    }
    obj[3] = unreadBorderColor;
    obj[4] = changeType;
    obj[5] = text.text;
    return obj;
  } else if (tmp2.SUMMARY === rowType) {
    const summary = text.summary;
    const obj1 = { type: null, id: null, color: null, text: null, summary: null, isBeforeContent: null, changeType: null };
    obj1[0] = constants.SEPARATOR;
    obj1[1] = rowType;
    obj1[2] = tmp.summaryColor;
    obj1[3] = summary.topic;
    obj1[4] = summary;
    obj1[5] = text.isBeforeContent;
    obj1[6] = changeType;
    return obj1;
  } else {
    obj = isDiscordFrontendDevelopment;
    obj.assertNever(rowType);
  }
};