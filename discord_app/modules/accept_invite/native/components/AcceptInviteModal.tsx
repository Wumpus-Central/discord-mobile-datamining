// discord_app/modules/accept_invite/native/components/AcceptInviteModal.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { CreateGuildModalStates } from "../../../create_guild/native/CreateGuildConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/accept_invite/native/components/AcceptInviteModal.tsx");

export default function AcceptInviteModal(arg0) {
  const _require = arg0;
  const effect = React.useEffect(() => () => {}, []);
  const items = [arg0];
  return jsx(require("../../../../design/components/Navigator/native/Navigator.native.tsx").Navigator, {
    screens: React.useMemo(() => {
      let obj = {};
      obj = {
        fullscreen: true,
        headerShown: false,
        impressionName: lib(closure_1_2[3]).ImpressionNames.INVITE_ACCEPT,
        impressionProperties: null,
        render: null,
      };
      obj = {
        deeplink_attempt_id: lib.deeplinkAttemptId,
        invite_code: lib(closure_1_2[4]).parseInviteCodeFromInviteKey(lib.code),
      };
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
    initialRouteName: CreateGuildModalStates.ACCEPT_INVITE,
  });
}
