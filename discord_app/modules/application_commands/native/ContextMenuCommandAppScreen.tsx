// === Module 16685: ContextMenuCommandAppScreen ===

// Module 16685 (ContextMenuCommandAppScreen)
import ThemesDefault from "Themes" /* 709 */;
import closure_2 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

createCacheKey = { list: null };
createCacheKey = { marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/application_commands/native/ContextMenuCommandAppScreen.tsx");

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
    return closure_1_3(section(commands[6]), {
      item: commands[arg1],
      onPress() {
        return closure_1_2(closure_0);
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