// discord_app/modules/accept_invite/native/components/AcceptInviteModal.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import { CreateGuildModalStates } from "../../../create_guild/native/CreateGuildConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/accept_invite/native/components/AcceptInviteModal.tsx");

export default function AcceptInviteModal(arg0) {
  const _require = arg0;
  const effect = React.useEffect(() => () => {

  }, []);
  const items = [arg0];
  return jsx(require("../../../../design/components/Navigator/native/Navigator.native.tsx").Navigator, {
    screens: React.useMemo(() => {
      { fullscreen: true, headerShown: false, impressionName: lib(dependencyMap[3]).ImpressionNames.INVITE_ACCEPT, impressionProperties: null, render: null };
      let obj = { deeplink_attempt_id: lib.deeplinkAttemptId, invite_code: lib(dependencyMap[4]).parseInviteCodeFromInviteKey(lib.code) };
      obj[3] = obj;
      obj[4] = function render() {
        const obj = {};
        const merged = Object.assign(callback);
        obj.onPressClose = callback(closure_1_2[6]).clearDisplayedInvite;
        return closure_1_5(closure_1_1(closure_1_2[5]), obj);
      };
      obj[CreateGuildModalStates.ACCEPT_INVITE] = obj;
      return obj;
    }, items),
    initialRouteName: CreateGuildModalStates.ACCEPT_INVITE
  });
};