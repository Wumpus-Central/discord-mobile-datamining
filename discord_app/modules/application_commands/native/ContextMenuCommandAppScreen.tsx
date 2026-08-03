import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

createCacheKey = { list: null };
createCacheKey = { marginHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/application_commands/native/ContextMenuCommandAppScreen.tsx");

export default function ContextMenuCommandAppScreen(route) {
  const params = route.route.params;
  let section = params.section;
  const commands = params.commands;
  const onPressCommand = params.onPressCommand;
  let items = [commands.length];
  const items1 = [commands, onPressCommand, section];
  const memo = onPressCommand.useMemo(() => {
    const items = [commands.length];
    return items;
  }, items);
  const callback = onPressCommand.useCallback((arg0, arg1) => {
    const section = tmp;
    const diff = commands.length - 1;
    return outer1_3(section(commands[6]), {
      item: commands[arg1],
      onPress() {
        return outer1_2(closure_0);
      },
      section,
      start: 0 === arg1,
      end: arg1 === diff
    }, commands[arg1].id);
  }, items1);
  const tmp = section(commands[5])();
  const tmp4 = createCacheKey();
  return jsx(section(commands[7]), { style: createCacheKey().list, sections: memo, estimatedListSize: "windowSize", itemSize: tmp, insetEnd: section(commands[4])({ includeKeyboardHeight: true }).insets.bottom, renderItem: callback });
};