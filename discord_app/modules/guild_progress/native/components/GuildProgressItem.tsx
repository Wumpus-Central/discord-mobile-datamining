// === Module 12325: GuildProgressItem ===

// Module 12325 (GuildProgressItem)
import GuildProgressUtils from "GuildProgressUtils" /* 12207 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 12210 */;
import GuildProgressCircleDefault from "GuildProgressCircle" /* 12327 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_4 = createStyles.createStyles({ icon: { width: 32, height: 32 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProgressItem(guild) {
  const cResult = guild(completed[4]).c(13);
  guild = guild.guild;
  const tmp4 = closure_4();
  let obj = guild(completed[4]);
  const iOSCompletionStates = guild(completed[5]).useIOSCompletionStates(guild);
  const numFinished = iOSCompletionStates.numFinished;
  completed = iOSCompletionStates.completed;
  const totalSteps = iOSCompletionStates.totalSteps;
  if (cResult[0] === completed) {
    if (cResult[1] === guild) {
      let tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { uri: numFinished(tmp2[7]) };
      cResult[3] = obj3;
      let tmp8 = obj3;
    } else {
      tmp8 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[8]).intl;
      const stringResult = intl.string(tmp(tmp2[8]).t["J2+r16"]);
      cResult[4] = stringResult;
      let tmp10 = stringResult;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] === numFinished) {
      if (cResult[6] === totalSteps) {
        let tmp12 = cResult[7];
      }
      if (cResult[8] === completed) {
        if (cResult[9] === tmp6) {
          if (cResult[10] === tmp4.icon) {
            if (cResult[11] === tmp12) {
              let tmp13 = cResult[12];
            }
            return tmp13;
          }
        }
      }
      const obj4 = { onPress: tmp6, source: tmp8, iconStyle: tmp4.icon, title: tmp10, isCompleted: completed, renderEndComponent: tmp12, fullWidth: true };
      const tmp16 = totalSteps(numFinished(tmp2[10]), obj4);
      cResult[8] = completed;
      cResult[9] = tmp6;
      cResult[10] = tmp4.icon;
      cResult[11] = tmp12;
      cResult[12] = tmp16;
      tmp13 = tmp16;
    }
    let fn;
    if (numFinished > 0) {
      if (numFinished < totalSteps) {
        fn = () => jsx(GuildProgressCircleDefault, { percent: 100 * numFinished / totalSteps, size: 32 });
      }
    }
    cResult[5] = numFinished;
    cResult[6] = totalSteps;
    cResult[7] = fn;
    tmp12 = fn;
  }
  function openGuildProgress() {
    if (!completed) {
      const progress = GuildProgressActionCreatorsDefault.createProgress(guild.id);
    }
    GuildProgressUtils.openActionSheet(guild);
  }
  cResult[0] = completed;
  cResult[1] = guild;
  cResult[2] = openGuildProgress;
  tmp6 = openGuildProgress;
}) : (function GuildProgressItem(guild) {
  guild = guild.guild;
  let completed;
  const tmp = closure_4();
  const iOSCompletionStates = guild(completed[5]).useIOSCompletionStates(guild);
  const numFinished = iOSCompletionStates.numFinished;
  completed = iOSCompletionStates.completed;
  const totalSteps = iOSCompletionStates.totalSteps;
  let obj2 = {
    onPress: function openGuildProgress() {
      if (!completed) {
        const progress = GuildProgressActionCreatorsDefault.createProgress(guild.id);
      }
      GuildProgressUtils.openActionSheet(guild);
    },
    source: null,
    iconStyle: null,
    title: null,
    isCompleted: null,
    renderEndComponent: null,
    fullWidth: true
  };
  const obj3 = { uri: null };
  let obj = guild(completed[5]);
  const tmp3 = totalSteps;
  obj3.uri = numFinished(completed[7]);
  obj2.source = obj3;
  obj2.iconStyle = tmp.icon;
  const intl = guild(completed[8]).intl;
  obj2.title = intl.string(guild(completed[8]).t["J2+r16"]);
  obj2.isCompleted = completed;
  let fn;
  if (numFinished > 0) {
    if (numFinished < totalSteps) {
      fn = () => jsx(GuildProgressCircleDefault, { percent: 100 * numFinished / totalSteps, size: 32 });
    }
  }
  obj2.renderEndComponent = fn;
  return tmp3(numFinished(completed[10]), obj2);
});