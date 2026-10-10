// discord_app/modules/application_commands/native/ContextMenuCommandItem.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Server from "../../../flow/Server.tsx";
import SendMessageIcon from "../../../design/components/Icon/native/redesign/generated/SendMessageIcon.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import application_commands_ApplicationCommandUtils from "ApplicationCommandUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { commandIcon: null, loadingIcon: null, loadingName: null };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg };
obj2.commandIcon = size;
obj2.loadingIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.loadingName = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  height: 24,
  borderRadius: nativeDefault.radii.md,
};
let closure_6 = createStyles.createStyles(obj2);
fn(558);
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  height: 24,
  borderRadius: nativeDefault.radii.md,
};
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ContextMenuCommandLoadingItem(arg0) {
      const cResult = c.c(11);
      ({ start, end } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { width: null };
        const _HermesInternal = HermesInternal;
        obj2.width = "" + _modDef12.random(60, 80) + "%";
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.loadingName) {
        const obj4 = { style: null };
        const items = [tmp4.loadingName, first];
        obj4.style = items;
        const tmp10 = <View style={null} />;
        cResult[1] = tmp4.loadingName;
        cResult[2] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === tmp4.commandIcon) {
        if (cResult[4] === tmp4.loadingIcon) {
          let tmp11 = cResult[5];
        }
        if (cResult[6] === end) {
          if (cResult[7] === start) {
            if (cResult[8] === tmp7) {
              if (cResult[9] === tmp11) {
                let tmp13 = cResult[10];
              }
              return tmp13;
            }
          }
        }
        const obj5 = { label: tmp7, icon: tmp11, start, end };
        const tmp15 = jsx(TableRow.TableRow, { label: tmp7, icon: tmp11, start, end });
        cResult[6] = end;
        cResult[7] = start;
        cResult[8] = tmp7;
        cResult[9] = tmp11;
        cResult[10] = tmp15;
        tmp13 = tmp15;
      }
      const obj6 = { style: null };
      const items1 = [,];
      ({ commandIcon: arr2[0], loadingIcon: arr2[1] } = tmp4);
      obj6.style = items1;
      const tmp12 = <View style={null} />;
      cResult[3] = tmp4.commandIcon;
      cResult[4] = tmp4.loadingIcon;
      cResult[5] = tmp12;
      tmp11 = tmp12;
    }
  : function ContextMenuCommandLoadingItem(arg0) {
      ({ start, end } = arg0);
      const tmp = closure_6();
      const obj = { label: null, icon: null, start: null, end: null };
      const obj2 = { style: null };
      const items = [tmp.loadingName];
      const obj3 = { width: "" + _modDef12.random(60, 80) + "%" };
      items[1] = obj3;
      obj2.style = items;
      obj.label = <View style={null} />;
      const obj5 = { style: null };
      const items1 = [,];
      ({ commandIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
      obj5.style = items1;
      obj.icon = <View style={null} />;
      obj.start = start;
      obj.end = end;
      return jsx(TableRow.TableRow, { label: null, icon: null, start: null, end: null });
    };
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ContextMenuCommandEmptyItem(arg0) {
      const cResult = c.c(8);
      ({ start, end } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.YSNlV2);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === tmp4.commandIcon) {
        if (cResult[2] === tmp4.loadingIcon) {
          let tmp7 = cResult[3];
        }
        if (cResult[4] === end) {
          if (cResult[5] === start) {
            if (cResult[6] === tmp7) {
              let tmp9 = cResult[7];
            }
            return tmp9;
          }
        }
        const obj2 = { label: first, icon: tmp7, start, end };
        const tmp11 = jsx(TableRow.TableRow, { label: first, icon: tmp7, start, end });
        cResult[4] = end;
        cResult[5] = start;
        cResult[6] = tmp7;
        cResult[7] = tmp11;
        tmp9 = tmp11;
      }
      const obj3 = { style: null };
      const items = [,];
      ({ commandIcon: arr[0], loadingIcon: arr[1] } = tmp4);
      obj3.style = items;
      const tmp8 = <View style={null} />;
      cResult[1] = tmp4.commandIcon;
      cResult[2] = tmp4.loadingIcon;
      cResult[3] = tmp8;
      tmp7 = tmp8;
    }
  : function ContextMenuCommandEmptyItem(arg0) {
      ({ start, end } = arg0);
      const obj = { label: null, icon: null, start: null, end: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.YSNlV2);
      const obj2 = { style: null };
      const items = [,];
      ({ commandIcon: arr[0], loadingIcon: arr[1] } = closure_6());
      obj2.style = items;
      obj.icon = <View style={null} />;
      obj.start = start;
      obj.end = end;
      return jsx(TableRow.TableRow, { label: null, icon: null, start: null, end: null });
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ContextMenuCommandAppItem(arg0) {
      const cResult = c.c(11);
      ({ section, onPress, start, end } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] !== section) {
        const applicationCommandsIconSource =
          application_commands_ApplicationCommandUtils.getApplicationCommandsIconSource(section);
        cResult[0] = section;
        cResult[1] = applicationCommandsIconSource;
        let tmp5 = applicationCommandsIconSource;
        const tmpResult = application_commands_ApplicationCommandUtils;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        if (cResult[3] === tmp4) {
          let tmp7 = cResult[4];
        }
        if (cResult[5] === end) {
          if (cResult[6] === onPress) {
            if (cResult[7] === section.name) {
              if (cResult[8] === start) {
                if (cResult[9] === tmp7) {
                  let tmp11 = cResult[10];
                }
                return tmp11;
              }
            }
          }
        }
        const obj2 = { onPress, label: section.name, icon: tmp7, start, end, arrow: true };
        const tmp13 = jsx(TableRow.TableRow, { onPress, label: section.name, icon: tmp7, start, end, arrow: true });
        cResult[5] = end;
        cResult[6] = onPress;
        cResult[7] = section.name;
        cResult[8] = start;
        cResult[9] = tmp7;
        cResult[10] = tmp13;
        tmp11 = tmp13;
      }
      let tmp8 = null != tmp5;
      if (tmp8) {
        const obj3 = { style: tmp4.commandIcon, source: tmp5 };
        tmp8 = jsx(FastImageDefault, { style: tmp4.commandIcon, source: tmp5 });
      }
      cResult[2] = tmp5;
      cResult[3] = tmp4;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : function ContextMenuCommandAppItem(section) {
      section = section.section;
      ({ onPress, start, end } = section);
      const tmp = closure_6();
      const applicationCommandsIconSource =
        application_commands_ApplicationCommandUtils.getApplicationCommandsIconSource(section);
      const obj2 = { onPress, label: section.name, icon: null, start: null, end: null, arrow: true };
      let tmp4Result = null != applicationCommandsIconSource;
      if (tmp4Result) {
        const obj3 = { style: tmp.commandIcon, source: applicationCommandsIconSource };
        tmp4Result = jsx(FastImageDefault, { style: tmp.commandIcon, source: applicationCommandsIconSource });
      }
      obj2.icon = tmp4Result;
      obj2.start = start;
      obj2.end = end;
      return jsx(TableRow.TableRow, { onPress, label: section.name, icon: null, start: null, end: null, arrow: true });
    };
size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ContextMenuCommandItem(arg0) {
      const cResult = c.c(16);
      ({ item, onPress, section, start, end } = arg0);
      const tmp4 = closure_6();
      const type = item.type;
      if (Server.ApplicationCommandType.MESSAGE !== type) {
        if (Server.ApplicationCommandType.USER !== type) {
          if (cResult[3] !== section) {
            const applicationCommandsIconSource =
              application_commands_ApplicationCommandUtils.getApplicationCommandsIconSource(section);
            cResult[3] = section;
            cResult[4] = applicationCommandsIconSource;
            let tmp12 = applicationCommandsIconSource;
            const tmpResult = application_commands_ApplicationCommandUtils;
          } else {
            tmp12 = cResult[4];
          }
          if (cResult[5] === tmp12) {
            if (cResult[6] === tmp4) {
              let tmp14 = cResult[7];
            }
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp22 = jsx(SendMessageIcon.SendMessageIcon, {});
              cResult[8] = tmp22;
              let tmp20 = tmp22;
            } else {
              tmp20 = cResult[8];
            }
            if (cResult[9] === undefined) {
              if (cResult[10] === end) {
                if (cResult[11] === item.displayName) {
                  if (cResult[12] === onPress) {
                    if (cResult[13] === start) {
                      if (cResult[14] === tmp14) {
                        let tmp23 = cResult[15];
                      }
                      return tmp23;
                    }
                  }
                }
              }
            }
            const obj2 = {
              accessibilityLabel: undefined,
              onPress,
              label: item.displayName,
              icon: tmp14,
              trailing: tmp20,
              start,
              end,
            };
            const tmp25 = jsx(TableRow.TableRow, {
              accessibilityLabel: undefined,
              onPress,
              label: item.displayName,
              icon: tmp14,
              trailing: tmp20,
              start,
              end,
            });
            cResult[9] = undefined;
            cResult[10] = end;
            cResult[11] = item.displayName;
            cResult[12] = onPress;
            cResult[13] = start;
            cResult[14] = tmp14;
            cResult[15] = tmp25;
            tmp23 = tmp25;
          }
          let tmp16 = null != tmp12;
          if (tmp16) {
            const obj3 = { style: tmp4.commandIcon, source: tmp12 };
            tmp16 = jsx(FastImageDefault, { style: tmp4.commandIcon, source: tmp12 });
          }
          cResult[5] = tmp12;
          cResult[6] = tmp4;
          cResult[7] = tmp16;
          tmp14 = tmp16;
        }
      }
      if (cResult[0] === item.displayName) {
        let name;
        if (section != null) {
          name = section.name;
        }
      }
      const intl = util.intl;
      let name1;
      if (section != null) {
        name1 = section.name;
      }
      const formatToPlainStringResult = intl.formatToPlainString(util.t.Pk4Mz3, {
        applicationName: name1,
        commandName: item.displayName,
      });
      cResult[0] = item.displayName;
      let name2;
      if (section != null) {
        name2 = section.name;
      }
      cResult[1] = name2;
      cResult[2] = formatToPlainStringResult;
      const obj4 = { applicationName: name1, commandName: item.displayName };
    }
  : function ContextMenuCommandItem(item) {
      item = item.item;
      const section = item.section;
      ({ onPress, start, end } = item);
      const items = [item];
      let name;
      if (section != null) {
        name = section.name;
      }
      items[1] = name;
      const memo = noop.useMemo(() => {
        const type = item.type;
        const intl = util.intl;
        let name;
        if (section != null) {
          name = section.name;
        }
        return intl.formatToPlainString(util.t.Pk4Mz3, { applicationName: name, commandName: item.displayName });
      }, items);
      const tmp = closure_6();
      const tmp5 = item;
      const applicationCommandsIconSource = item(11927).getApplicationCommandsIconSource(section);
      const obj2 = {
        accessibilityLabel: memo,
        onPress,
        label: item.displayName,
        icon: null,
        trailing: null,
        start: null,
        end: null,
      };
      let tmp8Result = null != applicationCommandsIconSource;
      if (tmp8Result) {
        const obj3 = { style: tmp.commandIcon, source: applicationCommandsIconSource };
        tmp8Result = jsx(section(6156), { style: tmp.commandIcon, source: applicationCommandsIconSource });
      }
      obj2.icon = tmp8Result;
      obj2.trailing = jsx(tmp5(5040).SendMessageIcon, {});
      obj2.start = start;
      obj2.end = end;
      return jsx(item(6179).TableRow, {
        accessibilityLabel: memo,
        onPress,
        label: item.displayName,
        icon: null,
        trailing: null,
        start: null,
        end: null,
      });
    };
export const ContextMenuCommandLoadingItem = tmp2;
export const ContextMenuCommandEmptyItem = tmp3;
export const ContextMenuCommandAppItem = tmp4;
