// discord_app/modules/messages/useMessageMaxLength.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import getPremiumPlanItemDefault from "../../utils/PremiumUtils.tsx";
import closure_3 from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";

require = arg1;
({ MAX_MESSAGE_LENGTH_PREMIUM: c4, MAX_MESSAGE_LENGTH: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/messages/useMessageMaxLength.tsx");

export default function useMessageMaxLength() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () =>
    callback(table[2]).canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_4 : closure_5,
  );
}
export const getMaxMessageLength = function getMaxMessageLength() {
  return getPremiumPlanItemDefault.canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_4 : closure_5;
};
