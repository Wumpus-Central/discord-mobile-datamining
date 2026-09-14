// === Module 17416: AcceptInviteModal ===

// Module 17416 (AcceptInviteModal)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1248 */;
import InviteCodeUtils from "InviteCodeUtils" /* 4621 */;
import AcceptInviteContainerDefault from "AcceptInviteContainer" /* 12846 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const CreateGuildModalStates = fn(7081).CreateGuildModalStates;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/components/AcceptInviteModal.tsx");

export default function AcceptInviteModal(arg0) {
  _require = arg0;
  const effect = noop.useEffect(() => () => {

  }, []);
  let obj = { screens: null, initialRouteName: CreateGuildModalStates.ACCEPT_INVITE };
  const items = [arg0];
  obj.screens = noop.useMemo(() => {
    let obj = {};
    const obj2 = { fullscreen: true, headerShown: false, impressionName: discord_common_AnalyticsUtils.ImpressionNames.INVITE_ACCEPT, impressionProperties: null, render: null };
    const obj3 = { deeplink_attempt_id: closure_0.deeplinkAttemptId, invite_code: InviteCodeUtils.parseInviteCodeFromInviteKey(closure_0.code) };
    obj2.impressionProperties = obj3;
    obj2.render = function render() {
      const obj = {};
      const merged = Object.assign(closure_0);
      obj.onPressClose = closure_0(8864).clearDisplayedInvite;
      return jsx(AcceptInviteContainerDefault, {});
    };
    obj[CreateGuildModalStates.ACCEPT_INVITE] = obj2;
    return obj;
  }, items);
  return jsx(require("Navigator").Navigator, { screens: null, initialRouteName: CreateGuildModalStates.ACCEPT_INVITE });
};