// === Module 16092: BoostProgressBarCoachmark ===

// Module 16092 (BoostProgressBarCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1126 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import _modDef2525 from "module_2525" /* 2525 */;
import BoostThisServerRive from "BoostThisServerRive" /* 4660 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9247 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, guild;

const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ riveContainer: { width: 120, height: 80, alignSelf: "center" } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let riveContainer;
  let tmp5;
  let obj = guild(576);
  const cResult = obj.c(14);
  guild = guild.guild;
  const markAsDismissed = guild.markAsDismissed;
  const tmp4 = closure_7();
  dependencyMap = tmp4;
  if (cResult[0] !== markAsDismissed) {
    const fn = function u() {
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    };
    cResult[0] = markAsDismissed;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === guild.id) {
    let tmp6;
    let tmp9;
    let tmp8;
    let tmp14;
    if (cResult[3] === markAsDismissed) {
      tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(markAsDismissed(2525).uwV2dH);
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(markAsDismissed(2525).MIwlcR);
      cResult[5] = stringResult;
      cResult[6] = stringResult1;
      tmp9 = stringResult1;
      tmp8 = stringResult;
    } else {
      tmp8 = cResult[5];
      tmp9 = cResult[6];
    }
    if (cResult[7] !== tmp4.riveContainer) {
      class I {
        constructor() {
          return <View style={riveContainer.riveContainer}>{jsx(BoostThisServerRive.BoostThisServerRive, { stateMachine: "State Machine 1" })}</View>;
        }
      }
      cResult[7] = tmp4.riveContainer;
      cResult[8] = I;
    } else {
      class I {
        constructor() {
          return <View style={riveContainer.riveContainer}>{jsx(BoostThisServerRive.BoostThisServerRive, { stateMachine: "State Machine 1" })}</View>;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          return <View style={riveContainer.riveContainer}>{jsx(BoostThisServerRive.BoostThisServerRive, { stateMachine: "State Machine 1" })}</View>;
        }
      }
      const stringResult2 = obj2.string(guild(1126).t["0CJWP2"]);
      cResult[9] = stringResult2;
      tmp14 = stringResult2;
    } else {
      class I {
        constructor() {
          return <View style={riveContainer.riveContainer}>{jsx(BoostThisServerRive.BoostThisServerRive, { stateMachine: "State Machine 1" })}</View>;
        }
      }
    }
    if (cResult[10] === tmp6) {
      class I {
        constructor() {
          return <View style={riveContainer.riveContainer}>{jsx(BoostThisServerRive.BoostThisServerRive, { stateMachine: "State Machine 1" })}</View>;
        }
      }
    }
    const obj3 = { title: tmp8, description: tmp9, visible: true, position: "bottom", offsetY: 8, onDismiss: tmp5, renderImgComponent: I, buttonLabel: tmp14, buttonVariant: "primary", onButtonPress: tmp6 };
    cResult[10] = tmp6;
    cResult[11] = tmp5;
    cResult[12] = I;
    cResult[13] = obj3;
  }
  const fn2 = function p() {
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    const obj = GuildSettingsActionCreatorsDefault;
    obj.saveGuild(guild.id, { premiumProgressBarEnabled: true });
  };
  cResult[2] = guild.id;
  cResult[3] = markAsDismissed;
  cResult[4] = fn2;
  tmp6 = fn2;
}) : ((guild) => {
  let closure_2;
  guild = guild.guild;
  const markAsDismissed = guild.markAsDismissed;
  let onDismiss;
  const targetRef = guild.targetRef;
  const tmp = closure_7();
  dependencyMap = tmp;
  const items = [markAsDismissed];
  onDismiss = onDismiss.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items1 = [guild.id, markAsDismissed];
  const callback1 = onDismiss.useCallback(() => {
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    const obj = GuildSettingsActionCreatorsDefault;
    obj.saveGuild(guild.id, { premiumProgressBarEnabled: true });
  }, items1);
  const items2 = [onDismiss, callback1, tmp.riveContainer];
  const memo = onDismiss.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let riveContainer;
    const obj = {
      title: intl.string(_modDef2525.uwV2dH),
      description: intl2.string(_modDef2525.MIwlcR),
      visible: true,
      position: "bottom",
      offsetY: 8,
      onDismiss,
      renderImgComponent() {
        return <callback1 style={riveContainer.riveContainer}>{jsx(guild(riveContainer[10]).BoostThisServerRive, { stateMachine: "State Machine 1" })}</callback1>;
      },
      buttonLabel: intl3.string(intl4.t["0CJWP2"]),
      buttonVariant: "primary",
      onButtonPress: callback1
    };
    intl = intl4.intl;
    intl2 = intl4.intl;
    intl3 = intl4.intl;
    return obj;
  }, items2);
  let obj = guild(9882);
  const coachmark = obj.useCoachmark(targetRef, memo);
  return null;
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/BoostProgressBarCoachmark.tsx");

export default tmp2;