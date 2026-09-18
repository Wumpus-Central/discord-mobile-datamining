// === Module 15903: OverridePremiumTypeActions ===

// Module 15903 (OverridePremiumTypeActions)
import DispatcherDefault from "Dispatcher" /* 573 */;
import createMessage from "createMessage" /* 7954 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/OverridePremiumTypeActions.tsx");

export const updateClientPremiumTypeOverride = function updateClientPremiumTypeOverride(premiumType, currentUser) {
  DispatcherDefault.dispatch({ type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType });
  if (currentUser == null) {
    currentUser = UserStore.getCurrentUser();
  }
  if (null != currentUser) {
    const obj3 = { type: "UPDATE_CLIENT_PREMIUM_TYPE", user: currentUser };
    DispatcherDefault.dispatch(obj3);
    const tmp2Result = DispatcherDefault;
    const obj4 = { type: "CURRENT_USER_UPDATE", user: null };
    const tmp2Result2 = DispatcherDefault;
    obj4.user = createMessage.userRecordToServer(currentUser);
    tmp2Result2.dispatch(obj4);
  }
  const obj2 = { type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType };
};
export const updateClientCreatedAtOverride = function updateClientCreatedAtOverride(createdAt) {
  DispatcherDefault.dispatch({ type: "SET_CREATED_AT_OVERRIDE", createdAt });
};