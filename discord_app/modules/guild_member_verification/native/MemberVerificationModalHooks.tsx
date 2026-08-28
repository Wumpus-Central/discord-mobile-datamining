// === Module 7597: useSetInitialVerificationEffect ===

// Module 7597 (useSetInitialVerificationEffect)
import initialize from "initialize" /* 589 */;
import closure_2 from "noop" /* 19 */;
import closure_3 from "mergeGuildAvatar" /* 1923 */;
import closure_4 from "map" /* 7598 */;
import { setInitialVerification } from "map" /* 7598 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalHooks.tsx");

export const useSetInitialVerificationEffect = function useSetInitialVerificationEffect(guildId) {
  let _require = guildId;
  obj = { initial: _require(obj[3]).useStateFromStores(items, () => closure_1_4.getInitialVerificationState(closure_0), items1), current: null };
  _require = guildId;
  items = [closure_4];
  items1 = [guildId];
  const obj2 = _require(obj[3]);
  const items2 = [closure_3];
  obj[1] = _require(obj[3]).useStateFromStoresObject(items2, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.verified;
    }
    if (flag == null) {
      flag = false;
    }
    obj = {};
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
    closure_2.current = obj;
  });
  const items3 = [guildId];
  const effect1 = React.useEffect(() => {
    if (null == ref.current.initial) {
      closure_1_5(closure_0, tmp);
    }
  }, items3);
  return obj.initial;
};
export const useUserVerificationState = function useUserVerificationState() {
  const items = [closure_3];
  return initialize.useStateFromStoresObject(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.verified;
    }
    if (flag == null) {
      flag = false;
    }
    obj = {};
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
  const items = [closure_4];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => closure_1_4.getInitialVerificationState(closure_0), items1);
};