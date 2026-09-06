// === Module 12321: directory_channels/GuildDirectoryUtils ===

// Module 12321 (directory_channels/GuildDirectoryUtils)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_6 = async function _onAddDirectoryGuildEntry() {
  await closure_130_2(closure_130_3[3]).addDirectoryGuildEntry(closure_129_0, closure_129_2.id, closure_129_3, closure_129_4);
  closure_129_5();
  closure_130_2(closure_130_3[3]);
  closure_130_1(closure_130_3[4]).openLazy({
    importer() {
      return closure_0(paths[6])(paths[5], paths.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guild = guild;
          obj.directoryGuildName = directoryGuildName;
          return closure_3_5(closure_0, obj);
        };
      });
    }
  });
  await "HermesInternal";
  closure_1 = tmp2;
  ({ directoryChannelId: closure_129_0, directoryGuildName: closure_129_1, guild: closure_129_2, description: closure_129_3, category: closure_129_4, onClose: closure_129_5 } = closure_0);
  return "PX_16";
};
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/GuildDirectoryUtils.tsx");

export const onAddDirectoryGuildEntry = function onAddDirectoryGuildEntry() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};