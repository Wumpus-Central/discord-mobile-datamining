// discord_app/modules/app_launcher/hooks/useFilterAndSortToOnlyFrecentCommands.tsx
import react from "../../../../_runtime/00019_react.js";
import ApplicationCommandFrecencyStore from "../../application_commands/ApplicationCommandFrecencyStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useFilterAndSortToOnlyFrecentCommands.tsx");

export default function useFilterAndSortToOnlyFrecentCommands(commands) {
  commands = commands.commands;
  let length = commands.limit;
  const context = commands.context;
  if (length === undefined) {
    length = commands.length;
  }
  const obj = commands(length[2]);
  const commandContext = obj.useCommandContext(context);
  const obj2 = commands(length[3]);
  const topCommands = obj2.useTopCommands(commandContext);
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
