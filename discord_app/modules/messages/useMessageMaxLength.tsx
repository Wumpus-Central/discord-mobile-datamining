// discord_app/modules/messages/useMessageMaxLength.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { getPremiumPlanItem } from "../../utils/PremiumUtils.tsx";

let c4;
let c5;
const require = arg1;
({ MAX_MESSAGE_LENGTH_PREMIUM: c4, MAX_MESSAGE_LENGTH: c5 } = ME);
const result = require("getPremiumPlanItem").fileFinishedImporting("modules/messages/useMessageMaxLength.tsx");

export default function useMessageMaxLength() {
  const items = [mergeGuildAvatar];
  return initialize.useStateFromStores(items, () => callback(table[2]).canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_4 : closure_5);
};
export const getMaxMessageLength = function getMaxMessageLength() {
  return getPremiumPlanItem.canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_4 : closure_5;
};