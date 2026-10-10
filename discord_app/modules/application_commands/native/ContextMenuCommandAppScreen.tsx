// discord_app/modules/application_commands/native/ContextMenuCommandAppScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { list: { marginHorizontal: nativeDefault.space.PX_16 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandAppScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ContextMenuCommandAppScreen(route) {
  const cResult = section(onPressCommand[5]).c(13);
  const params = route.route.params;
  section = params.section;
  const commands = params.commands;
  onPressCommand = params.onPressCommand;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = commands(tmp[6])(first).insets;
  const tmp5 = commands(onPressCommand[7])();
  if (cResult[1] !== commands.length) {
    const items = [commands.length];
    cResult[1] = commands.length;
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === commands) {
    if (cResult[4] === onPressCommand) {
      if (cResult[5] === section) {
        let tmp7 = cResult[6];
      }
      const tmp9 = closure_5();
      if (cResult[7] === insets.bottom) {
        if (cResult[8] === tmp5) {
          if (cResult[9] === tmp6) {
            if (cResult[10] === tmp7) {
              if (cResult[11] === tmp9.list) {
                const tmp10 = cResult[12];
              }
              return tmp10;
            }
          }
        }
      }
      const obj3 = { style: tmp9.list, sections: tmp6, estimatedListSize: "windowSize", itemSize: tmp5, insetEnd: insets.bottom, renderItem: tmp7 };
      cResult[7] = insets.bottom;
      cResult[8] = tmp5;
      cResult[9] = tmp6;
      cResult[10] = tmp7;
      cResult[11] = tmp9.list;
      cResult[12] = jsx(tmp4(tmp[9]), { style: tmp9.list, sections: tmp6, estimatedListSize: "windowSize", itemSize: tmp5, insetEnd: insets.bottom, renderItem: tmp7 });
      class C {
        constructor(arg0, arg1) {
          tmp = commands[arg1];
          closure_0 = tmp;
          diff = commands.length - 1;
          obj = { item: tmp, onPress() { ... }, section: closure_0, start: 0 === arg1, end: arg1 === diff };
          return closure_1_4(commands(onPressCommand[8]), obj, tmp.id);
        }
      }
      const tmp12 = jsx(tmp4(tmp[9]), { style: tmp9.list, sections: tmp6, estimatedListSize: "windowSize", itemSize: tmp5, insetEnd: insets.bottom, renderItem: tmp7 });
    }
  }
  class C {
    constructor(arg0, arg1) {
      tmp = commands[arg1];
      closure_0 = tmp;
      diff = commands.length - 1;
      obj = { item: tmp, onPress() { ... }, section: closure_0, start: 0 === arg1, end: arg1 === diff };
      return closure_1_4(commands(onPressCommand[8]), obj, tmp.id);
    }
  }
  cResult[3] = commands;
  cResult[4] = onPressCommand;
  cResult[5] = section;
  cResult[6] = C;
  tmp7 = C;
  const obj = section(onPressCommand[5]);
  tmp4 = commands;
}) : (function ContextMenuCommandAppScreen(route) {
  const params = route.route.params;
  section = params.section;
  const commands = params.commands;
  const onPressCommand = params.onPressCommand;
  let items = [commands.length];
  const items1 = [commands, onPressCommand, section];
  const memo = noop.useMemo(() => {
    const items = [commands.length];
    return items;
  }, items);
  const callback = noop.useCallback((arg0, arg1) => {
    section = tmp;
    const diff = commands.length - 1;
    return jsx(commands(onPressCommand[8]), {
      item: commands[arg1],
      onPress() {
        return onPressCommand(closure_0);
      },
      section,
      start: 0 === arg1,
      end: arg1 === diff
    }, commands[arg1].id);
  }, items1);
  const tmp = commands(onPressCommand[7])();
  const tmp4 = closure_5();
  return jsx(commands(onPressCommand[9]), { style: closure_5().list, sections: memo, estimatedListSize: "windowSize", itemSize: tmp, insetEnd: commands(onPressCommand[6])({ includeKeyboardHeight: true }).insets.bottom, renderItem: callback });
});