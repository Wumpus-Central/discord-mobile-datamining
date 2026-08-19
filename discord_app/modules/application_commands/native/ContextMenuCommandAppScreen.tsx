// === Module 16086: ContextMenuCommandAppScreen ===

// Module 16086 (ContextMenuCommandAppScreen)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const createCacheKey = { marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/application_commands/native/ContextMenuCommandAppScreen.tsx");

export default function ContextMenuCommandAppScreen(route) {
  const params = route.route.params;
  const section = params.section;
  const commands = params.commands;
  const onPressCommand = params.onPressCommand;
  let items = [commands.length];
  const items1 = [commands, onPressCommand, section];
  const memo = onPressCommand.useMemo(() => {
    const items = [commands.length];
    return items;
  }, items);
  const callback = onPressCommand.useCallback((arg0, arg1) => {
    closure_0 = tmp;
    const diff = commands.length - 1;
    return jsx(section(commands[6]), {
      item: commands[arg1],
      onPress() {
        return onPressCommand(closure_0);
      },
      section: closure_0,
      start: 0 === arg1,
      end: arg1 === diff
    }, commands[arg1].id);
  }, items1);
  const tmp = section(commands[5])();
  const tmp4 = callback();
  return jsx(section(commands[7]), { style: callback().list, sections: memo, estimatedListSize: "windowSize", itemSize: tmp, insetEnd: section(commands[4])({ includeKeyboardHeight: true }).insets.bottom, renderItem: callback });
};