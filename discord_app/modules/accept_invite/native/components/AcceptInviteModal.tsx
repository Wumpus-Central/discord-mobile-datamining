// === Module 17442: AcceptInviteModal ===

// Module 17442 (AcceptInviteModal)
import Fragment from "Fragment" /* 21 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import InviteCodeUtils from "InviteCodeUtils" /* 4872 */;
import CreateGuildConstants from "CreateGuildConstants" /* 6468 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function render() {
  const obj = { onPressClose: closure_2_0(closure_2_2[6]).clearDisplayedInvite };
  const tmp = closure_2_1(closure_2_2[5]);
  const merged = Object.assign(closure_0);
  return closure_2_5(tmp, obj);
}
const CreateGuildModalStates = CreateGuildConstants.CreateGuildModalStates;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((deeplinkAttemptId) => {
  let obj4;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp9;
  let tmpResult;
  const obj = require("react");
  const cResult = obj.c(6);
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
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[2] !== deeplinkAttemptId) {
    _require = deeplinkAttemptId;
    const obj2 = {};
    const ACCEPT_INVITE = CreateGuildModalStates.ACCEPT_INVITE;
    const obj3 = { fullscreen: true, headerShown: false, impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.INVITE_ACCEPT, impressionProperties: obj4, render };
    obj4 = { deeplink_attempt_id: deeplinkAttemptId.deeplinkAttemptId, invite_code: tmpResult.parseInviteCodeFromInviteKey(deeplinkAttemptId.code) };
    obj2[ACCEPT_INVITE] = obj3;
    cResult[2] = deeplinkAttemptId;
    cResult[3] = obj2;
    tmp7 = obj2;
    tmpResult = require("InviteCodeUtils");
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== tmp7) {
    const tmp12 = jsx(require("Navigator").Navigator, { screens: tmp7, initialRouteName: CreateGuildModalStates.ACCEPT_INVITE });
    cResult[4] = tmp7;
    cResult[5] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[5];
  }
  return tmp9;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const effect = react.useEffect(() => () => {

  }, []);
  const items = [arg0];
  const Navigator = require("Navigator").Navigator;
  return <Navigator screens={react.useMemo(() => {
    let obj3;
    let obj4;
    let obj = {};
    const ACCEPT_INVITE = CreateGuildModalStates.ACCEPT_INVITE;
    const obj2 = { fullscreen: true, headerShown: false, impressionName: discord_common_AnalyticsUtils.ImpressionNames.INVITE_ACCEPT, impressionProperties: obj3, render };
    obj3 = { deeplink_attempt_id: closure_0.deeplinkAttemptId, invite_code: obj4.parseInviteCodeFromInviteKey(closure_0.code) };
    obj[ACCEPT_INVITE] = obj2;
    obj4 = InviteCodeUtils;
    return obj;
  }, items)} initialRouteName={CreateGuildModalStates.ACCEPT_INVITE} />;
});
const result = size.fileFinishedImporting("modules/accept_invite/native/components/AcceptInviteModal.tsx");

export default tmp2;