// === Module 17049: ContextMenuCommandItem ===

// Module 17049 (ContextMenuCommandItem)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Server from "Server" /* 1985 */;
import SendMessageIcon from "SendMessageIcon" /* 4841 */;
import FastImageDefault from "FastImage" /* 5974 */;
import TableRow2 from "TableRow" /* 5993 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 11860 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let obj3;
let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { commandIcon: size, loadingIcon: obj2, loadingName: obj3 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 24, borderRadius: nativeDefault.radii.md };
let closure_6 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let end;
  let first;
  let obj3;
  let start;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(11);
  ({ start, end } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { width: "" + obj3.random(60, 80) + "%" };
    const _HermesInternal = HermesInternal;
    cResult[0] = obj2;
    first = obj2;
    obj3 = _modDef12;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.loadingName) {
    const items = [tmp4.loadingName, first];
    const tmp10 = <View style={items} />;
    cResult[1] = tmp4.loadingName;
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.commandIcon) {
    let tmp11;
    if (cResult[4] === tmp4.loadingIcon) {
      tmp11 = cResult[5];
    }
    if (cResult[6] === end) {
      if (cResult[7] === start) {
        if (cResult[8] === tmp7) {
          let tmp13;
          if (cResult[9] === tmp11) {
            tmp13 = cResult[10];
          }
          return tmp13;
        }
      }
    }
    const tmp15 = jsx(TableRow2.TableRow, { label: tmp7, icon: tmp11, start, end });
    cResult[6] = end;
    cResult[7] = start;
    cResult[8] = tmp7;
    cResult[9] = tmp11;
    cResult[10] = tmp15;
    tmp13 = tmp15;
  }
  const items1 = [, ];
  ({ commandIcon: arr2[0], loadingIcon: arr2[1] } = tmp4);
  const tmp12 = <View style={items1} />;
  cResult[3] = tmp4.commandIcon;
  cResult[4] = tmp4.loadingIcon;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let end;
  let obj4;
  let start;
  ({ start, end } = arg0);
  const tmp = closure_6();
  const items = [tmp.loadingName, ];
  const obj3 = { width: "" + obj4.random(60, 80) + "%" };
  const TableRow = TableRow2.TableRow;
  items[1] = obj3;
  const items1 = [, ];
  ({ commandIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
  obj4 = _modDef12;
  return <TableRow label={null} icon={null} start={start} end={end} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let end;
  let first;
  let start;
  const obj = react2;
  const cResult = obj.c(8);
  ({ start, end } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.YSNlV2);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp4.commandIcon) {
    let tmp7;
    if (cResult[2] === tmp4.loadingIcon) {
      tmp7 = cResult[3];
    }
    if (cResult[4] === end) {
      if (cResult[5] === start) {
        let tmp9;
        if (cResult[6] === tmp7) {
          tmp9 = cResult[7];
        }
        return tmp9;
      }
    }
    const tmp11 = jsx(TableRow2.TableRow, { label: first, icon: tmp7, start, end });
    cResult[4] = end;
    cResult[5] = start;
    cResult[6] = tmp7;
    cResult[7] = tmp11;
    tmp9 = tmp11;
  }
  const items = [, ];
  ({ commandIcon: arr[0], loadingIcon: arr[1] } = tmp4);
  const tmp8 = <View style={items} />;
  cResult[1] = tmp4.commandIcon;
  cResult[2] = tmp4.loadingIcon;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : ((arg0) => {
  let end;
  let start;
  ({ start, end } = arg0);
  const tmp = closure_6();
  const TableRow = TableRow2.TableRow;
  const intl = intl2.intl;
  const items = [, ];
  ({ commandIcon: arr[0], loadingIcon: arr[1] } = tmp);
  return <TableRow label={intl.string(intl2.t.YSNlV2)} icon={null} start={start} end={end} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let end;
  let onPress;
  let section;
  let start;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(11);
  ({ section, onPress, start, end } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] !== section) {
    const tmpResult = application_commands_ApplicationCommandUtils;
    const applicationCommandsIconSource = tmpResult.getApplicationCommandsIconSource(section);
    cResult[0] = section;
    cResult[1] = applicationCommandsIconSource;
    tmp5 = applicationCommandsIconSource;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    let tmp7;
    if (cResult[3] === tmp4) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === end) {
      if (cResult[6] === onPress) {
        if (cResult[7] === section.name) {
          if (cResult[8] === start) {
            let tmp11;
            if (cResult[9] === tmp7) {
              tmp11 = cResult[10];
            }
            return tmp11;
          }
        }
      }
    }
    const tmp13 = jsx(TableRow2.TableRow, { onPress, label: section.name, icon: tmp7, start, end, arrow: true });
    cResult[5] = end;
    cResult[6] = onPress;
    cResult[7] = section.name;
    cResult[8] = start;
    cResult[9] = tmp7;
    cResult[10] = tmp13;
    tmp11 = tmp13;
  }
  const tmp8 = null != tmp5 && jsx(FastImageDefault, { style: tmp4.commandIcon, source: tmp5 });
  cResult[2] = tmp5;
  cResult[3] = tmp4;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((section) => {
  let end;
  let onPress;
  let start;
  section = section.section;
  ({ onPress, start, end } = section);
  const tmp = closure_6();
  const obj = application_commands_ApplicationCommandUtils;
  const applicationCommandsIconSource = obj.getApplicationCommandsIconSource(section);
  let tmp4Result = null != applicationCommandsIconSource;
  const TableRow = TableRow2.TableRow;
  if (tmp4Result) {
    tmp4Result = jsx(FastImageDefault, { style: tmp.commandIcon, source: applicationCommandsIconSource });
  }
  return <TableRow onPress={onPress} label={section.name} icon={tmp4Result} start={start} end={end} arrow />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let end;
  let item;
  let onPress;
  let section;
  let start;
  let tmp14;
  const obj = react2;
  const cResult = obj.c(16);
  ({ item, onPress, section, start, end } = arg0);
  const tmp4 = closure_6();
  const type = item.type;
  if (Server.ApplicationCommandType.MESSAGE === type) {
    if (cResult[0] === item.displayName) {
      let name;
      if (section != null) {
        name = section.name;
      }
    }
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    let name1;
    const Pk4Mz3 = intl2.t.Pk4Mz3;
    if (section != null) {
      name1 = section.name;
    }
    const obj2 = { applicationName: name1, commandName: item.displayName };
    const formatToPlainStringResult = formatToPlainString(Pk4Mz3, obj2);
    cResult[0] = item.displayName;
    let name2;
    if (section != null) {
      name2 = section.name;
    }
    cResult[1] = name2;
    cResult[2] = formatToPlainStringResult;
  }
  if (cResult[3] !== section) {
    const tmpResult = application_commands_ApplicationCommandUtils;
    const applicationCommandsIconSource = tmpResult.getApplicationCommandsIconSource(section);
    cResult[3] = section;
    cResult[4] = applicationCommandsIconSource;
    tmp14 = applicationCommandsIconSource;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === tmp14) {
    let tmp16;
    let tmp21;
    if (cResult[6] === tmp4) {
      tmp16 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp23 = jsx(SendMessageIcon.SendMessageIcon, {});
      cResult[8] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[8];
    }
    if (cResult[9] === tmp5) {
      if (cResult[10] === end) {
        if (cResult[11] === item.displayName) {
          if (cResult[12] === onPress) {
            if (cResult[13] === start) {
              let tmp24;
              if (cResult[14] === tmp16) {
                tmp24 = cResult[15];
              }
              return tmp24;
            }
          }
        }
      }
    }
    const tmp26 = jsx(TableRow2.TableRow, { accessibilityLabel: tmp5, onPress, label: item.displayName, icon: tmp16, trailing: tmp21, start, end });
    cResult[9] = tmp5;
    cResult[10] = end;
    cResult[11] = item.displayName;
    cResult[12] = onPress;
    cResult[13] = start;
    cResult[14] = tmp16;
    cResult[15] = tmp26;
    tmp24 = tmp26;
  }
  const tmp17 = null != tmp14 && jsx(FastImageDefault, { style: tmp4.commandIcon, source: tmp14 });
  cResult[5] = tmp14;
  cResult[6] = tmp4;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : ((item) => {
  let end;
  let onPress;
  let start;
  item = item.item;
  const section = item.section;
  ({ onPress, start, end } = item);
  const items = [item, ];
  let name;
  const useMemo = react.useMemo;
  const tmp = closure_6();
  if (section != null) {
    name = section.name;
  }
  items[1] = name;
  const memo = useMemo(() => {
    const type = item.type;
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    let name;
    const Pk4Mz3 = intl2.t.Pk4Mz3;
    if (section != null) {
      name = section.name;
    }
    const obj = { applicationName: name, commandName: item.displayName };
    return formatToPlainString(Pk4Mz3, obj);
  }, items);
  let obj = item(11860);
  const applicationCommandsIconSource = obj.getApplicationCommandsIconSource(section);
  let tmp8Result = null != applicationCommandsIconSource;
  const TableRow = item(5993).TableRow;
  if (tmp8Result) {
    tmp8Result = jsx(section(5974), { style: tmp.commandIcon, source: applicationCommandsIconSource });
  }
  return <TableRow accessibilityLabel={memo} onPress={onPress} label={item.displayName} icon={tmp8Result} trailing={null} start={start} end={end} />;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandItem.tsx");

export default tmp6;
export const ContextMenuCommandLoadingItem = tmp3;
export const ContextMenuCommandEmptyItem = tmp4;
export const ContextMenuCommandAppItem = tmp5;