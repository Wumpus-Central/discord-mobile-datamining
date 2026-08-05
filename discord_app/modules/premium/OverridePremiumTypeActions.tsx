// discord_app/modules/premium/OverridePremiumTypeActions.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { dispatcher } from "../../Dispatcher.tsx";
import { createMessage } from "../messages/createMessage.tsx";

const require = arg1;
const result = require("createMessage").fileFinishedImporting("modules/premium/OverridePremiumTypeActions.tsx");

export const updateClientPremiumTypeOverride = function updateClientPremiumTypeOverride(premiumType, outer1_2) {
  let currentUser = outer1_2;
  let obj = dispatcher;
  obj = { type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType };
  obj.dispatch(obj);
  if (outer1_2 == null) {
    currentUser = currentUser.getCurrentUser();
  }
  if (null != currentUser) {
    let tmp2Result = tmp2(709);
    obj = { type: "UPDATE_CLIENT_PREMIUM_TYPE", user: null };
    obj[1] = currentUser;
    tmp2Result.dispatch(obj);
    tmp2Result = tmp2(709);
    const obj1 = { type: "CURRENT_USER_UPDATE", user: null };
    obj1[1] = createMessage.userRecordToServer(currentUser);
    tmp2Result.dispatch(obj1);
    const obj7 = createMessage;
  }
};
export const updateClientCreatedAtOverride = function updateClientCreatedAtOverride(createdAt) {
  let obj = dispatcher;
  obj = { type: "SET_CREATED_AT_OVERRIDE", createdAt };
  obj.dispatch(obj);
};