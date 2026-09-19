// discord_app/modules/accept_invite/native/components/AcceptInviteModal.tsx
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import InviteCodeUtils from "../../../instant_invite/InviteCodeUtils.tsx";
import AcceptInviteContainerDefault from "../../../create_guild/native/components/AcceptInviteContainer.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const CreateGuildModalStates = fn(7218).CreateGuildModalStates;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/components/AcceptInviteModal.tsx");

export default function AcceptInviteModal(arg0) {
  _require = arg0;
  const effect = noop.useEffect(() => () => {}, []);
  let obj = { screens: null, initialRouteName: CreateGuildModalStates.ACCEPT_INVITE };
  const items = [arg0];
  obj.screens = noop.useMemo(() => {
    let obj = {};
    const obj2 = {
      fullscreen: true,
      headerShown: false,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.INVITE_ACCEPT,
      impressionProperties: null,
      render: null,
    };
    const obj3 = {
      deeplink_attempt_id: closure_0.deeplinkAttemptId,
      invite_code: InviteCodeUtils.parseInviteCodeFromInviteKey(closure_0.code),
    };
    obj2.impressionProperties = obj3;
    obj2.render = function render() {
      const obj = {};
      const merged = Object.assign(closure_0);
      obj.onPressClose = closure_0(9017).clearDisplayedInvite;
      return jsx(AcceptInviteContainerDefault, {});
    };
    obj[CreateGuildModalStates.ACCEPT_INVITE] = obj2;
    return obj;
  }, items);
  return jsx(require("Navigator").Navigator, { screens: null, initialRouteName: CreateGuildModalStates.ACCEPT_INVITE });
}
