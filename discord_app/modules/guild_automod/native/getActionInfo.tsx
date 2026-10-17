// === Module 18706: getActionInfo ===

// Module 18706 (getActionInfo)
import CircleXIcon2 from "CircleXIcon" /* 6573 */;
import TextIcon from "TextIcon" /* 8480 */;
import ClockWarningIcon from "ClockWarningIcon" /* 12572 */;
import Constants from "Constants" /* 12581 */;
import ChatXIcon from "ChatXIcon" /* 13145 */;
import BaseActionInfo from "BaseActionInfo" /* 18707 */;
import size from "module_2" /* 2 */;

const AutomodActionType = Constants.AutomodActionType;
const result = size.fileFinishedImporting("modules/guild_automod/native/getActionInfo.tsx");

export const getActionInfo = function getActionInfo(actionType, action, triggerType) {
  const baseActionInfo = BaseActionInfo.getBaseActionInfo(actionType, action, triggerType);
  let tmp4 = null;
  if (null != baseActionInfo) {
    const obj2 = {};
    const merged = Object.assign(baseActionInfo);
    if (AutomodActionType.BLOCK_MESSAGE === actionType) {
      let CircleXIcon = CircleXIcon2.CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = TextIcon.TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = ClockWarningIcon.ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = ChatXIcon.ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = CircleXIcon2.CircleXIcon;
    }
    obj2.icon = CircleXIcon;
    tmp4 = obj2;
  }
  return tmp4;
};