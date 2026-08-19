// === Module 15135: updateClientPremiumTypeOverride ===

// Module 15135 (updateClientPremiumTypeOverride)
import dispatcherDefault from "dispatcher" /* 709 */;
import createMessage from "createMessage" /* 7500 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/OverridePremiumTypeActions.tsx");

export const updateClientPremiumTypeOverride = function updateClientPremiumTypeOverride(premiumType, closure_1_2) {
  let currentUser = dependencyMap;
  let obj = { type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType };
  obj.dispatch(obj);
  if (dependencyMap == null) {
    currentUser = currentUser.getCurrentUser();
  }
  if (null != currentUser) {
    let tmp2Result = dispatcherDefault;
    obj = { type: "UPDATE_CLIENT_PREMIUM_TYPE", user: null };
    obj[1] = currentUser;
    tmp2Result.dispatch(obj);
    tmp2Result = dispatcherDefault;
    obj1 = { type: "CURRENT_USER_UPDATE", user: null };
    obj1[1] = createMessage.userRecordToServer(currentUser);
    tmp2Result.dispatch(obj1);
  }
};
export const updateClientCreatedAtOverride = function updateClientCreatedAtOverride(createdAt) {
  const obj = { type: "SET_CREATED_AT_OVERRIDE", createdAt };
  obj.dispatch(obj);
};