// discord_app/modules/premium/OverridePremiumTypeActions.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import createMessage from "../messages/createMessage.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/OverridePremiumTypeActions.tsx");

export const updateClientPremiumTypeOverride = function updateClientPremiumTypeOverride(premiumType, currentUser) {
  let obj = { type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType };
  obj.dispatch(obj);
  if (currentUser == null) {
    currentUser = UserStore.getCurrentUser();
  }
  if (null != currentUser) {
    let tmp2Result = tmp2(573);
    obj = { type: "UPDATE_CLIENT_PREMIUM_TYPE", user: currentUser };
    tmp2Result.dispatch(obj);
    tmp2Result = tmp2(573);
    const obj1 = { type: "CURRENT_USER_UPDATE", user: createMessage.userRecordToServer(currentUser) };
    tmp2Result.dispatch(obj1);
  }
};
export const updateClientCreatedAtOverride = function updateClientCreatedAtOverride(createdAt) {
  const obj = { type: "SET_CREATED_AT_OVERRIDE", createdAt };
  obj.dispatch(obj);
};
