// === Module 17076: ContextMenuCommandAppScreen ===

// Module 17076 (ContextMenuCommandAppScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { list: obj2 };
obj2 = { marginHorizontal: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  let first;
  let onPressCommand;
  let section;
  let tmp6;
  const tmp = onPressCommand;
  const obj = section(onPressCommand[5]);
  const cResult = obj.c(13);
  const params = route.route.params;
  section = params.section;
  const commands = params.commands;
  onPressCommand = params.onPressCommand;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = commands(tmp[6])(first).insets;
  const tmp5 = commands(tmp[7])();
  const tmp4 = commands;
  if (cResult[1] !== commands.length) {
    const items = [commands.length];
    cResult[1] = commands.length;
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === commands) {
    if (cResult[4] === onPressCommand) {
      let tmp7;
      if (cResult[5] === section) {
        tmp7 = cResult[6];
      }
      const tmp9 = closure_5();
      if (cResult[7] === insets.bottom) {
        if (cResult[8] === tmp5) {
          if (cResult[9] === tmp6) {
            if (cResult[10] === tmp7) {
              let tmp10;
              if (cResult[11] === tmp9.list) {
                tmp10 = cResult[12];
              }
              return tmp10;
            }
          }
        }
      }
      const tmp12 = jsx(tmp4(tmp[9]), { style: tmp9.list, sections: tmp6, estimatedListSize: "windowSize", itemSize: tmp5, insetEnd: insets.bottom, renderItem: tmp7 });
      cResult[7] = insets.bottom;
      cResult[8] = tmp5;
      cResult[9] = tmp6;
      cResult[10] = tmp7;
      cResult[11] = tmp9.list;
      cResult[12] = tmp12;
      tmp10 = tmp12;
    }
  }
  const fn = function _(arg0, arg1) {
    let closure_0;
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
  };
  cResult[3] = commands;
  cResult[4] = onPressCommand;
  cResult[5] = section;
  cResult[6] = fn;
  tmp7 = fn;
}) : ((route) => {
  const params = route.route.params;
  let section = params.section;
  const commands = params.commands;
  const onPressCommand = params.onPressCommand;
  const insets = commands(onPressCommand[6])({ includeKeyboardHeight: true }).insets;
  let items = [commands.length];
  const tmp = commands(onPressCommand[7])();
  const items1 = [commands, onPressCommand, section];
  const memo = react.useMemo(() => {
    const items = [commands.length];
    return items;
  }, items);
  const callback = react.useCallback((arg0, arg1) => {
    let closure_0;
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
  closure_5();
  return jsx(commands(onPressCommand[9]), { style: closure_5().list, sections: memo, estimatedListSize: "windowSize", itemSize: tmp, insetEnd: insets.bottom, renderItem: callback });
});
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandAppScreen.tsx");

export default tmp2;