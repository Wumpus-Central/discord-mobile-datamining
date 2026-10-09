// === Module 16510: BoostProgressBarCoachmark ===

// Module 16510 (BoostProgressBarCoachmark)
import util from "util" /* 1126 */;
import _modDef2597 from "module_2597" /* 2597 */;
import BoostThisServerRive from "BoostThisServerRive" /* 4859 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8621 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2061).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_7 = createStyles.createStyles({ riveContainer: { width: 120, height: 80, alignSelf: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/BoostProgressBarCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BoostProgressBarCoachmark(guild) {
  const cResult = guild(576).c(14);
  guild = guild.guild;
  const markAsDismissed = guild.markAsDismissed;
  const tmp4 = closure_7();
  dependencyMap = tmp4;
  if (cResult[0] !== markAsDismissed) {
    const fn = function c() {
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    };
    cResult[0] = markAsDismissed;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === guild.id) {
    if (cResult[3] === markAsDismissed) {
      let tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(markAsDismissed(2597).uwV2dH);
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(markAsDismissed(2597).MIwlcR);
      cResult[5] = stringResult;
      cResult[6] = stringResult1;
      let tmp9 = stringResult1;
      let tmp8 = stringResult;
    } else {
      tmp8 = cResult[5];
      tmp9 = cResult[6];
    }
    if (cResult[7] !== tmp4.riveContainer) {
      const fn3 = function _() {
        return <View style={riveContainer.riveContainer}>{jsx(BoostThisServerRive.BoostThisServerRive, { stateMachine: "State Machine 1" })}</View>;
      };
      cResult[7] = tmp4.riveContainer;
      cResult[8] = fn3;
      let tmp13 = fn3;
    } else {
      tmp13 = cResult[8];
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult2 = intl3.string(tmp(1126).t["0CJWP2"]);
      cResult[9] = stringResult2;
      let tmp14 = stringResult2;
    } else {
      tmp14 = cResult[9];
    }
    if (cResult[10] === tmp6) {
      if (cResult[11] === tmp5) {
        if (cResult[12] === tmp13) {
          let tmp16 = cResult[13];
        }
        const coachmark = tmp(9413).useCoachmark(guild.targetRef, tmp16);
        return null;
      }
    }
    const obj2 = { title: tmp8, description: tmp9, visible: true, position: "bottom", offsetY: 8, onDismiss: tmp5, renderImgComponent: tmp13, buttonLabel: tmp14, buttonVariant: "primary", onButtonPress: tmp6 };
    cResult[10] = tmp6;
    cResult[11] = tmp5;
    cResult[12] = tmp13;
    cResult[13] = obj2;
    tmp16 = obj2;
  }
  const fn2 = function p() {
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    GuildSettingsActionCreatorsDefault.saveGuild(guild.id, { premiumProgressBarEnabled: true });
  };
  cResult[2] = guild.id;
  cResult[3] = markAsDismissed;
  cResult[4] = fn2;
  tmp6 = fn2;
}) : (function BoostProgressBarCoachmark(guild) {
  guild = guild.guild;
  const markAsDismissed = guild.markAsDismissed;
  let onDismiss;
  const tmp = closure_7();
  dependencyMap = tmp;
  const items = [markAsDismissed];
  onDismiss = onDismiss.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items1 = [guild.id, markAsDismissed];
  const callback1 = onDismiss.useCallback(() => {
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    GuildSettingsActionCreatorsDefault.saveGuild(guild.id, { premiumProgressBarEnabled: true });
  }, items1);
  const items2 = [onDismiss, callback1, tmp.riveContainer];
  const memo = onDismiss.useMemo(() => {
    const obj = { title: null, description: null, visible: true, position: "bottom", offsetY: 8, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef2597.uwV2dH);
    const intl2 = util.intl;
    obj.description = intl2.string(_modDef2597.MIwlcR);
    obj.onDismiss = onDismiss;
    obj.renderImgComponent = function renderImgComponent() {
      return <callback1 style={riveContainer.riveContainer}>{jsx(guild(riveContainer[10]).BoostThisServerRive, { stateMachine: "State Machine 1" })}</callback1>;
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t["0CJWP2"]);
    obj.onButtonPress = callback1;
    return obj;
  }, items2);
  const coachmark = guild(9413).useCoachmark(guild.targetRef, memo);
  return null;
});