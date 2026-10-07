// discord_app/modules/app_launcher/hooks/useFilterAndSortToOnlyFrecentCommands.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationCommandFrecencyStore from "../../application_commands/ApplicationCommandFrecencyStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useFilterAndSortToOnlyFrecentCommands.tsx");

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
  const memo = commandContext.useMemo(
    () =>
      commands.reduce((acc, id) => {
        acc[id.id] = id;
        return acc;
      }, {}),
    items,
  );
  const items1 = [topCommands, memo, commandContext, length];
  return commandContext.useMemo(() => {
    const mapped = topCommands.map((item) => memo[item]);
    const found = mapped.filter((item) => null != item);
    const sorted = found.sort((arg0, arg1) => {
      const scoreWithoutLoadingLatest = topCommands.getScoreWithoutLoadingLatest(commandContext, arg0);
      return topCommands.getScoreWithoutLoadingLatest(commandContext, arg1) - scoreWithoutLoadingLatest;
    });
    return sorted.slice(0, length);
  }, items1);
}
