// === Module 17136: AcceptInviteModal ===

// Module 17136 (AcceptInviteModal)
import closure_3 from "noop" /* 19 */;
import { CreateGuildModalStates } from "NUXGuildTemplatesAnalytics" /* 7765 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/accept_invite/native/components/AcceptInviteModal.tsx");

export default function AcceptInviteModal(arg0) {
  const _require = arg0;
  const effect = React.useEffect(() => () => {

  }, []);
  const items = [arg0];
  return jsx(_require(6017).Navigator, {
    screens: React.useMemo(() => {
      let obj = {};
      obj = { fullscreen: true, headerShown: false, impressionName: lib(closure_1_2[3]).ImpressionNames.INVITE_ACCEPT, impressionProperties: null, render: null };
      obj = { deeplink_attempt_id: lib.deeplinkAttemptId, invite_code: lib(closure_1_2[4]).parseInviteCodeFromInviteKey(lib.code) };
      obj[3] = obj;
      obj[4] = function render() {
        const obj = {};
        const merged = Object.assign(callback);
        obj.onPressClose = callback(closure_1_2[6]).clearDisplayedInvite;
        return closure_1_5(closure_1_1(closure_1_2[5]), obj);
      };
      obj[closure_1_4.ACCEPT_INVITE] = obj;
      return obj;
    }, items),
    initialRouteName: CreateGuildModalStates.ACCEPT_INVITE
  });
};