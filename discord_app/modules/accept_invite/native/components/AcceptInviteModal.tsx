// === Module 16143: AcceptInviteModal ===

// Module 16143 (AcceptInviteModal)
import noop from "noop";
import { CreateGuildModalStates } from "NUXGuildTemplatesAnalytics";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/accept_invite/native/components/AcceptInviteModal.tsx");

export default function AcceptInviteModal(arg0) {
  const _require = arg0;
  const effect = React.useEffect(() => () => {

  }, []);
  let obj = { screens: null, initialRouteName: null };
  const items = [arg0];
  obj[0] = React.useMemo(() => {
    let obj = {};
    obj = { fullscreen: true, headerShown: false, impressionName: lib(outer1_2[3]).ImpressionNames.INVITE_ACCEPT, impressionProperties: null, render: null };
    obj = { deeplink_attempt_id: lib.deeplinkAttemptId, invite_code: null };
    obj[1] = lib(outer1_2[4]).parseInviteCodeFromInviteKey(lib.code);
    obj[3] = obj;
    obj[4] = function render() {
      const obj = {};
      const merged = Object.assign(callback);
      obj.onPressClose = callback(outer1_2[6]).clearDisplayedInvite;
      return outer1_5(outer1_1(outer1_2[5]), obj);
    };
    obj[outer1_4.ACCEPT_INVITE] = obj;
    return obj;
  }, items);
  obj[1] = CreateGuildModalStates.ACCEPT_INVITE;
  return jsx(_require(5574).Navigator, { screens: null, initialRouteName: null });
};