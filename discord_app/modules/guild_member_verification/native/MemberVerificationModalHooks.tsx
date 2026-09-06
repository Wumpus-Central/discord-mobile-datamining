// discord_app/modules/guild_member_verification/native/MemberVerificationModalHooks.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import InitialMemberVerificationStore from "InitialMemberVerificationStore.tsx";

require = fn;
const setInitialVerification = fn(5575).setInitialVerification;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalHooks.tsx");

export const useSetInitialVerificationEffect = function useSetInitialVerificationEffect(guildId) {
  _require = guildId;
  const current = { initial: null, current: null };
  closure_129_0 = guildId;
  const items = [InitialMemberVerificationStore];
  const items1 = [guildId];
  current.initial = require("initialize").useStateFromStores(
    items,
    () => InitialMemberVerificationStore.getInitialVerificationState(closure_0),
    items1,
  );
  const obj2 = require("initialize");
  const items2 = [UserStore];
  current.current = require("initialize").useStateFromStoresObject(items2, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.verified;
    }
    if (flag == null) {
      flag = false;
    }
    const obj = {};
    obj[guildId(obj[4]).UserVerificationFieldPlatforms.EMAIL] = flag;
    let flag2;
    if (currentUser != null) {
      flag2 = currentUser.isPhoneVerified();
    }
    if (flag2 == null) {
      flag2 = false;
    }
    obj[guildId(obj[4]).UserVerificationFieldPlatforms.PHONE] = flag2;
    return obj;
  });
  noop = noop.useRef(current);
  const effect = noop.useEffect(() => {
    closure_2.current = current;
  });
  const items3 = [guildId];
  const effect1 = noop.useEffect(() => {
    if (null == ref.current.initial) {
      setInitialVerification(closure_0, tmp);
    }
  }, items3);
  return current.initial;
};
export const useUserVerificationState = function useUserVerificationState() {
  const items = [UserStore];
  return initialize.useStateFromStoresObject(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.verified;
    }
    if (flag == null) {
      flag = false;
    }
    const obj = {};
    obj[guildId(obj[4]).UserVerificationFieldPlatforms.EMAIL] = flag;
    let flag2;
    if (currentUser != null) {
      flag2 = currentUser.isPhoneVerified();
    }
    if (flag2 == null) {
      flag2 = false;
    }
    obj[guildId(obj[4]).UserVerificationFieldPlatforms.PHONE] = flag2;
    return obj;
  });
};
export const useInitialVerification = function useInitialVerification(id) {
  _require = id;
  const items = [InitialMemberVerificationStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(
    items,
    () => InitialMemberVerificationStore.getInitialVerificationState(closure_0),
    items1,
  );
};
