// === Module 17979: AcceptInviteModal ===

// Module 17979 (AcceptInviteModal)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1273 */;
import InviteCodeUtils from "InviteCodeUtils" /* 5074 */;
import AcceptInviteContainerDefault from "AcceptInviteContainer" /* 12477 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const CreateGuildModalStates = fn(6661).CreateGuildModalStates;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/components/AcceptInviteModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AcceptInviteModal(deeplinkAttemptId) {
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      return () => {

      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[2] !== deeplinkAttemptId) {
    _require = deeplinkAttemptId;
    const obj2 = {};
    const obj3 = { fullscreen: true, headerShown: false, impressionName: tmp(1273).ImpressionNames.INVITE_ACCEPT, impressionProperties: null, render: null };
    const obj4 = { deeplink_attempt_id: deeplinkAttemptId.deeplinkAttemptId, invite_code: tmp(5074).parseInviteCodeFromInviteKey(deeplinkAttemptId.code) };
    obj3.impressionProperties = obj4;
    obj3.render = function render() {
      const obj = {};
      const merged = Object.assign(closure_0);
      obj.onPressClose = closure_0(8952).clearDisplayedInvite;
      return jsx(AcceptInviteContainerDefault, {});
    };
    obj2[CreateGuildModalStates.ACCEPT_INVITE] = obj3;
    cResult[2] = deeplinkAttemptId;
    cResult[3] = obj2;
    let tmp7 = obj2;
    const tmpResult = tmp(5074);
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== tmp7) {
    const obj5 = { screens: tmp7, initialRouteName: CreateGuildModalStates.ACCEPT_INVITE };
    const tmp12 = jsx(tmp(6687).Navigator, { screens: tmp7, initialRouteName: CreateGuildModalStates.ACCEPT_INVITE });
    cResult[4] = tmp7;
    cResult[5] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[5];
  }
  return tmp9;
}) : (function AcceptInviteModal(arg0) {
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
      obj.onPressClose = closure_0(8952).clearDisplayedInvite;
      return jsx(AcceptInviteContainerDefault, {});
    };
    obj[CreateGuildModalStates.ACCEPT_INVITE] = obj2;
    return obj;
  }, items);
  return jsx(require("Navigator").Navigator, { screens: null, initialRouteName: CreateGuildModalStates.ACCEPT_INVITE });
});