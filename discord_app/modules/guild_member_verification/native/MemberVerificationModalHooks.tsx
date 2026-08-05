// discord_app/modules/guild_member_verification/native/MemberVerificationModalHooks.tsx
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import map from "map";
import { setInitialVerification } from "map";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalHooks.tsx");

export const useSetInitialVerificationEffect = function useSetInitialVerificationEffect(guildId) {
  let _require = guildId;
  let obj = { initial: null, current: null };
  _require = guildId;
  const items = [map];
  const items1 = [guildId];
  obj[0] = _require(obj[3]).useStateFromStores(items, () => outer1_4.getInitialVerificationState(closure_0), items1);
  const obj2 = _require(obj[3]);
  const items2 = [mergeGuildAvatar];
  obj[1] = _require(obj[3]).useStateFromStoresObject(items2, () => {
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
  React = React.useRef(obj);
  const effect = React.useEffect(() => {
    noop.current = obj;
  });
  const items3 = [guildId];
  const effect1 = React.useEffect(() => {
    if (null == ref.current.initial) {
      outer1_5(closure_0, tmp);
    }
  }, items3);
  return obj.initial;
};
export const useUserVerificationState = function useUserVerificationState() {
  const items = [mergeGuildAvatar];
  return initialize /* initialize */.useStateFromStoresObject(items, () => {
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
  const _require = id;
  const items = [map];
  const items1 = [id];
  return _initialize.useStateFromStores(items, () => outer1_4.getInitialVerificationState(closure_0), items1);
};