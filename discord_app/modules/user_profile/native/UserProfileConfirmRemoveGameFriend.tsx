// discord_app/modules/user_profile/native/UserProfileConfirmRemoveGameFriend.tsx
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import PeopleUtilsDefault from "../../people/PeopleUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveGameFriend.tsx");

export default function UserProfileConfirmRemoveGameFriend(gameName) {
  ({ userDisplayName, userId } = gameName);
  const applicationId = gameName.applicationId;
  const items = [applicationId, userId];
  const callback = noop.useCallback(() => {
    let obj = UserProfileAnalyticsUtils;
    const result = obj.trackUserProfileAction({ action: "REMOVE_GAME_FRIEND" });
    obj = { userId, applicationId, location: "UserProfileConfirmRemoveGameFriend" };
    PeopleUtilsDefault.removeFriend(obj);
  }, items);
  let obj = { title: null, content: null, actions: null };
  const intl = userId(1114).intl;
  obj.title = intl.formatToPlainString(userId(1114).t.fBKKfq, { name: userDisplayName });
  const intl2 = userId(1114).intl;
  obj.content = intl2.formatToPlainString(userId(1114).t.dsU5bl, {
    name: userDisplayName,
    gameName: gameName.gameName,
  });
  obj = { children: null };
  obj = { variant: "destructive", text: null, onPress: null };
  const intl3 = userId(1114).intl;
  obj.text = intl3.string(userId(1114).t.RLcE6x);
  obj.onPress = callback;
  const items1 = [closure_4(userId(4910).AlertActionButton, obj, "confirm-remove")];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = userId(1114).intl;
  obj1.text = intl4.string(userId(1114).t["eN6+rI"]);
  items1[1] = closure_4(userId(4910).AlertActionButton, obj1, "nevermind");
  obj.children = items1;
  obj.actions = closure_5(userId(4910).AlertActions, obj);
  return closure_4(userId(4910).AlertModal, obj);
}
