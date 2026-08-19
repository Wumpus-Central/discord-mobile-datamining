// discord_app/modules/app_launcher/hooks/useFilterAndSortToOnlyFrecentCommands.tsx
import noop from "../../../../_runtime/00019_noop.js";
import handleUserSettingsProtoStoreChange from "../../application_commands/ApplicationCommandFrecencyStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/app_launcher/hooks/useFilterAndSortToOnlyFrecentCommands.tsx");

export default function useFilterAndSortToOnlyFrecentCommands(commands) {
  commands = commands.commands;
  let length = commands.limit;
  if (length === undefined) {
    length = commands.length;
  }
  const commandContext = commands(length[2]).useCommandContext(commands.context);
  const obj = commands(length[2]);
  const topCommands = commands(length[3]).useTopCommands(commandContext);
  const items = [commands];
  const memo = commandContext.useMemo(() => commands.reduce((acc, item, index) => {
    acc[item.id] = item;
    return acc;
  }, {}), items);
  const items1 = [topCommands, memo, commandContext, length];
  return commandContext.useMemo(() => {
    const mapped = topCommands.map((item, index) => table[item]);
    const found = mapped.filter((item, index) => null != item);
    const sorted = found.sort((arg0, arg1) => {
      const scoreWithoutLoadingLatest = topCommands.getScoreWithoutLoadingLatest(closure_2, arg0);
      return topCommands.getScoreWithoutLoadingLatest(closure_2, arg1) - scoreWithoutLoadingLatest;
    });
    return sorted.slice(0, length);
  }, items1);
};