// discord_app/modules/guild_automod/native/getActionInfo.tsx
import CircleXIcon2 from "../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import TextIcon from "../../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import ClockWarningIcon from "../../../design/components/Icon/native/redesign/generated/ClockWarningIcon.tsx";
import Constants from "../Constants.tsx";
import ChatXIcon from "../../../design/components/Icon/native/redesign/generated/ChatXIcon.tsx";
import BaseActionInfo from "../BaseActionInfo.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AutomodActionType = Constants.AutomodActionType;
const result = size.fileFinishedImporting("modules/guild_automod/native/getActionInfo.tsx");

export const getActionInfo = function getActionInfo(actionType, action, triggerType) {
  let CircleXIcon;
  const obj = BaseActionInfo;
  const baseActionInfo = obj.getBaseActionInfo(actionType, action, triggerType);
  let tmp4 = null;
  if (null != baseActionInfo) {
    const obj2 = { icon: CircleXIcon };
    const merged = Object.assign(baseActionInfo);
    if (AutomodActionType.BLOCK_MESSAGE === actionType) {
      CircleXIcon = CircleXIcon2.CircleXIcon;
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
    tmp4 = obj2;
  }
  return tmp4;
};
