// === Module 12263: GuildProgressItem ===

// Module 12263 (GuildProgressItem)
import Fragment from "Fragment" /* 21 */;
import GuildProgressUtils from "GuildProgressUtils" /* 12145 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 12148 */;
import GuildProgressCircleDefault from "GuildProgressCircle" /* 12265 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guild;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ icon: { width: 32, height: 32 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let completed;
  let obj = guild(completed[4]);
  const cResult = obj.c(13);
  guild = guild.guild;
  const tmp4 = closure_4();
  let obj2 = guild(completed[5]);
  const iOSCompletionStates = obj2.useIOSCompletionStates(guild);
  const numFinished = iOSCompletionStates.numFinished;
  completed = iOSCompletionStates.completed;
  const totalSteps = iOSCompletionStates.totalSteps;
  if (cResult[0] === completed) {
    let tmp6;
    let tmp8;
    let tmp10;
    if (cResult[1] === guild) {
      tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { uri: numFinished(completed[7]) };
      cResult[3] = obj3;
      tmp8 = obj3;
    } else {
      tmp8 = cResult[3];
    }
    const _Symbol2 = Symbol;
    const icon = tmp4.icon;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[8]).intl;
      const stringResult = intl.string(guild(completed[8]).t["J2+r16"]);
      cResult[4] = stringResult;
      tmp10 = stringResult;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] === numFinished) {
      let tmp12;
      if (cResult[6] === totalSteps) {
        tmp12 = cResult[7];
      }
      if (cResult[8] === completed) {
        if (cResult[9] === tmp6) {
          if (cResult[10] === tmp4.icon) {
            let tmp13;
            if (cResult[11] === tmp12) {
              tmp13 = cResult[12];
            }
            return tmp13;
          }
        }
      }
      const obj4 = { onPress: tmp6, source: tmp8, iconStyle: icon, title: tmp10, isCompleted: completed, renderEndComponent: tmp12, fullWidth: true };
      const tmp16 = totalSteps(numFinished(completed[10]), obj4);
      cResult[8] = completed;
      cResult[9] = tmp6;
      cResult[10] = tmp4.icon;
      cResult[11] = tmp12;
      cResult[12] = tmp16;
      tmp13 = tmp16;
    }
    let fn2;
    if (numFinished > 0) {
      if (numFinished < totalSteps) {
        fn2 = () => jsx(GuildProgressCircleDefault, { percent: 100 * numFinished / totalSteps, size: 32 });
      }
    }
    cResult[5] = numFinished;
    cResult[6] = totalSteps;
    cResult[7] = fn2;
    tmp12 = fn2;
  }
  const fn = function s() {
    if (!completed) {
      const obj = GuildProgressActionCreatorsDefault;
      const progress = obj.createProgress(guild.id);
    }
    const obj2 = GuildProgressUtils;
    obj2.openActionSheet(guild);
  };
  cResult[0] = completed;
  cResult[1] = guild;
  cResult[2] = fn;
  tmp6 = fn;
}) : ((guild) => {
  let fn;
  let intl;
  let obj3;
  guild = guild.guild;
  let completed;
  const tmp = closure_4();
  let obj = guild(completed[5]);
  const iOSCompletionStates = obj.useIOSCompletionStates(guild);
  const numFinished = iOSCompletionStates.numFinished;
  completed = iOSCompletionStates.completed;
  const totalSteps = iOSCompletionStates.totalSteps;
  let obj2 = {
    onPress() {
      if (!completed) {
        const obj = GuildProgressActionCreatorsDefault;
        const progress = obj.createProgress(guild.id);
      }
      const obj2 = GuildProgressUtils;
      obj2.openActionSheet(guild);
    },
    source: obj3,
    iconStyle: tmp.icon,
    title: intl.string(guild(completed[8]).t["J2+r16"]),
    isCompleted: completed,
    renderEndComponent: fn,
    fullWidth: true
  };
  obj3 = { uri: numFinished(completed[7]) };
  const tmp4 = numFinished(completed[10]);
  intl = guild(completed[8]).intl;
  fn = undefined;
  const tmp3 = totalSteps;
  if (numFinished > 0) {
    if (numFinished < totalSteps) {
      fn = () => jsx(GuildProgressCircleDefault, { percent: 100 * numFinished / totalSteps, size: 32 });
    }
  }
  return tmp3(tmp4, obj2);
});
const result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressItem.tsx");

export default tmp3;