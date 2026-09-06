// discord_app/modules/application_commands/native/ContextMenuCommandAppScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
fn(4560);
let createStyles = { list: null };
createStyles = { marginHorizontal: nativeDefault.space.PX_16 };
createStyles.list = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandAppScreen.tsx");

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
    section = tmp;
    const diff = commands.length - 1;
    return jsx(
      section(commands[6]),
      {
        item: commands[arg1],
        onPress() {
          return onPressCommand(closure_0);
        },
        section,
        start: 0 === arg1,
        end: arg1 === diff,
      },
      commands[arg1].id,
    );
  }, items1);
  const tmp = section(commands[5])();
  const tmp4 = closure_4();
  return jsx(section(commands[7]), {
    style: closure_4().list,
    sections: memo,
    estimatedListSize: "windowSize",
    itemSize: tmp,
    insetEnd: section(commands[4])({ includeKeyboardHeight: true }).insets.bottom,
    renderItem: callback,
  });
}
