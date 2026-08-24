// === Module 15199: updateClientPremiumTypeOverride ===

// Module 15199 (updateClientPremiumTypeOverride)
import dispatcherDefault from "dispatcher" /* 709 */;
import createMessage from "createMessage" /* 7538 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/OverridePremiumTypeActions.tsx");

export const updateClientPremiumTypeOverride = function updateClientPremiumTypeOverride(premiumType, closure_1_2) {
  let currentUser = closure_1_2;
  let obj = dispatcherDefault;
  obj = { type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType };
  obj.dispatch(obj);
  if (closure_1_2 == null) {
    currentUser = currentUser.getCurrentUser();
  }
  if (null != currentUser) {
    let tmp2Result = tmp2(709);
    obj = { type: "UPDATE_CLIENT_PREMIUM_TYPE", user: null };
    obj[1] = currentUser;
    tmp2Result.dispatch(obj);
    tmp2Result = tmp2(709);
    obj1 = { type: "CURRENT_USER_UPDATE", user: null };
    obj1[1] = createMessage.userRecordToServer(currentUser);
    tmp2Result.dispatch(obj1);
    const obj7 = createMessage;
  }
};
export const updateClientCreatedAtOverride = function updateClientCreatedAtOverride(createdAt) {
  let obj = dispatcherDefault;
  obj = { type: "SET_CREATED_AT_OVERRIDE", createdAt };
  obj.dispatch(obj);
};