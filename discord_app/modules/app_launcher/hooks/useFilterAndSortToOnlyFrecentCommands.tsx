// === Module 11326: useFilterAndSortToOnlyFrecentCommands ===

// Module 11326 (useFilterAndSortToOnlyFrecentCommands)
import closure_2 from "noop" /* 19 */;
import closure_3 from "handleUserSettingsProtoStoreChange" /* 8450 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useFilterAndSortToOnlyFrecentCommands.tsx");

export default function useFilterAndSortToOnlyFrecentCommands(commands) {
  commands = commands.commands;
  let length = commands.limit;
  if (length === undefined) {
    length = commands.length;
  }
  let commandContext;
  let topCommands;
  let memo;
  commandContext = commands(length[2]).useCommandContext(commands.context);
  const obj = commands(length[2]);
  topCommands = commands(length[3]).useTopCommands(commandContext);
  const items = [commands];
  memo = commandContext.useMemo(() => commands.reduce((arg0, id) => {
    arg0[id.id] = id;
    return arg0;
  }, {}), items);
  const items1 = [topCommands, memo, commandContext, length];
  return commandContext.useMemo(() => {
    const mapped = topCommands.map((arg0) => table[arg0]);
    const found = mapped.filter((arg0) => null != arg0);
    const sorted = found.sort((arg0, arg1) => {
      const scoreWithoutLoadingLatest = closure_1_3.getScoreWithoutLoadingLatest(closure_2, arg0);
      return closure_1_3.getScoreWithoutLoadingLatest(closure_2, arg1) - scoreWithoutLoadingLatest;
    });
    return sorted.slice(0, length);
  }, items1);
};