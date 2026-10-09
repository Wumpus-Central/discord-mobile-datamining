// discord_app/modules/app_launcher/native/screens/command_view/OptionalCommandOptionList.tsx
import util from "../../../../../intl/index.native.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/command_view/OptionalCommandOptionList.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function OptionalCommandOptionList(style) {
      const cResult = onSelectOption(576).c(10);
      ({ options, onSelectOption } = style);
      style = style.style;
      let num = 0;
      if (0 === options.length) {
        return null;
      } else {
        if (cResult[0] === onSelectOption) {
          if (cResult[1] === options) {
            if (cResult[5] !== cResult[2]) {
              let obj2 = { hasIcons: false, children: tmp4 };
              const tmp10 = jsx(onSelectOption(6269).TableRowGroup, { hasIcons: false, children: tmp4 });
              cResult[5] = tmp4;
              cResult[6] = tmp10;
              let tmp8 = tmp10;
            } else {
              tmp8 = cResult[6];
            }
            if (cResult[7] === style) {
              if (cResult[8] === tmp8) {
                let tmp11 = cResult[9];
              }
              return tmp11;
            }
            const obj3 = { style, collapsable: false, children: tmp8 };
            const tmp14 = (
              <View style={style} collapsable={false}>
                {tmp8}
              </View>
            );
            cResult[7] = style;
            cResult[8] = tmp8;
            cResult[9] = tmp14;
            tmp11 = tmp14;
          }
        }
        if (cResult[3] !== onSelectOption) {
          const fn = function o(displayName) {
            closure_0 = displayName;
            const obj = {
              onPress() {
                return onSelectOption(closure_0);
              },
              label: displayName.displayName,
              subLabel: displayName.displayDescription,
              trailing: null,
            };
            const obj2 = {
              accessibilityRole: "none",
              variant: "tertiary",
              size: "sm",
              shrink: true,
              text: null,
              onPress: null,
            };
            const intl = onSelectOption(1126).intl;
            obj2.text = intl.string(onSelectOption(1126).t.OYkgVk);
            obj2.onPress = function onPress() {
              return onSelectOption(closure_0);
            };
            obj.trailing = jsx(onSelectOption(5376).Button, {
              accessibilityRole: "none",
              variant: "tertiary",
              size: "sm",
              shrink: true,
              text: null,
              onPress: null,
            });
            return jsx(
              onSelectOption(6186).TableRow,
              {
                onPress() {
                  return onSelectOption(closure_0);
                },
                label: displayName.displayName,
                subLabel: displayName.displayDescription,
                trailing: null,
              },
              displayName.name,
            );
          };
          cResult[3] = onSelectOption;
          cResult[4] = fn;
          let tmp5 = fn;
        } else {
          tmp5 = cResult[4];
        }
        const mapped = options.map(tmp5);
        cResult[num] = onSelectOption;
        cResult[1] = options;
        num = 2;
        cResult[2] = mapped;
      }
      let obj = onSelectOption(576);
    }
  : function OptionalCommandOptionList(arg0) {
      ({ options, onSelectOption: require } = arg0);
      let tmp2 = null;
      if (0 !== options.length) {
        let obj = { style: tmp, collapsable: false, children: null };
        let obj2 = {
          hasIcons: false,
          children: options.map((displayName) => {
            closure_0 = displayName;
            const obj = {
              onPress() {
                return require(closure_0);
              },
              label: displayName.displayName,
              subLabel: displayName.displayDescription,
              trailing: null,
            };
            const obj2 = {
              accessibilityRole: "none",
              variant: "tertiary",
              size: "sm",
              shrink: true,
              text: null,
              onPress: null,
            };
            const intl = util.intl;
            obj2.text = intl.string(util.t.OYkgVk);
            obj2.onPress = function onPress() {
              return require(closure_0);
            };
            obj.trailing = jsx(components_Button_Button.Button, {
              accessibilityRole: "none",
              variant: "tertiary",
              size: "sm",
              shrink: true,
              text: null,
              onPress: null,
            });
            return jsx(
              TableRow.TableRow,
              {
                onPress() {
                  return require(closure_0);
                },
                label: displayName.displayName,
                subLabel: displayName.displayDescription,
                trailing: null,
              },
              displayName.name,
            );
          }),
        };
        obj.children = jsx(TableRowGroup.TableRowGroup, {
          hasIcons: false,
          children: options.map((displayName) => {
            closure_0 = displayName;
            const obj = {
              onPress() {
                return require(closure_0);
              },
              label: displayName.displayName,
              subLabel: displayName.displayDescription,
              trailing: null,
            };
            const obj2 = {
              accessibilityRole: "none",
              variant: "tertiary",
              size: "sm",
              shrink: true,
              text: null,
              onPress: null,
            };
            const intl = util.intl;
            obj2.text = intl.string(util.t.OYkgVk);
            obj2.onPress = function onPress() {
              return require(closure_0);
            };
            obj.trailing = jsx(components_Button_Button.Button, {
              accessibilityRole: "none",
              variant: "tertiary",
              size: "sm",
              shrink: true,
              text: null,
              onPress: null,
            });
            return jsx(
              TableRow.TableRow,
              {
                onPress() {
                  return require(closure_0);
                },
                label: displayName.displayName,
                subLabel: displayName.displayDescription,
                trailing: null,
              },
              displayName.name,
            );
          }),
        });
        tmp2 = (
          <View style={tmp} collapsable={false}>
            {null}
          </View>
        );
      }
      return tmp2;
    };
