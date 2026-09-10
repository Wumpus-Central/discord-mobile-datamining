// === Module 12659: GuildProgressItem ===

// Module 12659 (GuildProgressItem)
import GuildProgressUtils from "GuildProgressUtils" /* 12544 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 12547 */;
import GuildProgressCircleDefault from "GuildProgressCircle" /* 12660 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4605);
let closure_4 = createStyles.createStyles({ icon: { width: 32, height: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressItem.tsx");

export default function GuildProgressItem(guild) {
  guild = guild.guild;
  let completed;
  let obj = guild(completed[3]);
  const iOSCompletionStates = obj.useIOSCompletionStates(guild);
  const numFinished = iOSCompletionStates.numFinished;
  completed = iOSCompletionStates.completed;
  const totalSteps = iOSCompletionStates.totalSteps;
  obj = {
    onPress() {
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
  obj = { uri: null };
  const tmp = closure_4();
  const tmp3 = totalSteps;
  obj.uri = numFinished(completed[6]);
  obj.source = obj;
  obj.iconStyle = tmp.icon;
  const intl = guild(completed[7]).intl;
  obj.title = intl.string(guild(completed[7]).t["J2+r16"]);
  obj.isCompleted = completed;
  let fn;
  if (numFinished > 0) {
    if (numFinished < totalSteps) {
      fn = () => jsx(GuildProgressCircleDefault, { percent: 100 * numFinished / totalSteps, size: 32 });
    }
  }
  obj.renderEndComponent = fn;
  return tmp3(numFinished(completed[4]), obj);
};