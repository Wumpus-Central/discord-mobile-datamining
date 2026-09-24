// === Module 12534: OptionalCommandOptionList ===

// Module 12534 (OptionalCommandOptionList)
import util from "util" /* 1115 */;
import components_Button_Button from "components/Button/Button" /* 5273 */;
import TableRow from "TableRow" /* 5910 */;
import TableRowGroup from "TableRowGroup" /* 5992 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/OptionalCommandOptionList.tsx");

export default function OptionalCommandOptionList(arg0) {
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
            trailing: null
          };
          const obj2 = { accessibilityRole: "none", variant: "tertiary", size: "sm", shrink: true, text: null, onPress: null };
          const intl = util.intl;
          obj2.text = intl.string(util.t.OYkgVk);
          obj2.onPress = function onPress() {
            return require(closure_0);
          };
          obj.trailing = jsx(components_Button_Button.Button, { accessibilityRole: "none", variant: "tertiary", size: "sm", shrink: true, text: null, onPress: null });
          return jsx(TableRow.TableRow, {
            onPress() {
              return require(closure_0);
            },
            label: displayName.displayName,
            subLabel: displayName.displayDescription,
            trailing: null
          }, displayName.name);
        })
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
            trailing: null
          };
          const obj2 = { accessibilityRole: "none", variant: "tertiary", size: "sm", shrink: true, text: null, onPress: null };
          const intl = util.intl;
          obj2.text = intl.string(util.t.OYkgVk);
          obj2.onPress = function onPress() {
            return require(closure_0);
          };
          obj.trailing = jsx(components_Button_Button.Button, { accessibilityRole: "none", variant: "tertiary", size: "sm", shrink: true, text: null, onPress: null });
          return jsx(TableRow.TableRow, {
            onPress() {
              return require(closure_0);
            },
            label: displayName.displayName,
            subLabel: displayName.displayDescription,
            trailing: null
          }, displayName.name);
        })
    });
    tmp2 = <View style={tmp} collapsable={false}>{null}</View>;
  }
  return tmp2;
};