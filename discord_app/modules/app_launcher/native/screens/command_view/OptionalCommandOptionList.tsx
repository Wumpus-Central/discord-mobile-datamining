// === Module 12192: OptionalCommandOptionList ===

// Module 12192 (OptionalCommandOptionList)
import util from "util" /* 1114 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import TableRow from "TableRow" /* 5605 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import noop from "module_19" /* 19 */;

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
    obj = {
      hasIcons: false,
      children: options.map((displayName) => {
          closure_0 = displayName;
          let obj = {
            onPress() {
              return require(closure_0);
            },
            label: displayName.displayName,
            subLabel: displayName.displayDescription,
            trailing: null
          };
          obj = { accessibilityRole: "none", variant: "tertiary", size: "sm", shrink: true, text: null, onPress: null };
          const intl = util.intl;
          obj.text = intl.string(util.t.OYkgVk);
          obj.onPress = function onPress() {
            return require(closure_0);
          };
          obj.trailing = jsx(components_Button_Button.Button, { accessibilityRole: "none", variant: "tertiary", size: "sm", shrink: true, text: null, onPress: null });
          return jsx(TableRow.TableRow, { accessibilityRole: "none", variant: "tertiary", size: "sm", shrink: true, text: null, onPress: null }, displayName.name);
        })
    };
    obj.children = jsx(TableRowGroup.TableRowGroup, {
      hasIcons: false,
      children: options.map((displayName) => {
          closure_0 = displayName;
          let obj = {
            onPress() {
              return require(closure_0);
            },
            label: displayName.displayName,
            subLabel: displayName.displayDescription,
            trailing: null
          };
          obj = { accessibilityRole: "none", variant: "tertiary", size: "sm", shrink: true, text: null, onPress: null };
          const intl = util.intl;
          obj.text = intl.string(util.t.OYkgVk);
          obj.onPress = function onPress() {
            return require(closure_0);
          };
          obj.trailing = jsx(components_Button_Button.Button, { accessibilityRole: "none", variant: "tertiary", size: "sm", shrink: true, text: null, onPress: null });
          return jsx(TableRow.TableRow, { accessibilityRole: "none", variant: "tertiary", size: "sm", shrink: true, text: null, onPress: null }, displayName.name);
        })
    });
    tmp2 = <View hasIcons={false}>{options.map((displayName) => {
      closure_0 = displayName;
      let obj = {
        onPress() {
          return require(closure_0);
        },
        label: displayName.displayName,
        subLabel: displayName.displayDescription,
        trailing: null
      };
      obj = { accessibilityRole: "none", variant: "tertiary", size: "sm", shrink: true, text: null, onPress: null };
      const intl = util.intl;
      obj.text = intl.string(util.t.OYkgVk);
      obj.onPress = function onPress() {
        return require(closure_0);
      };
      obj.trailing = jsx(components_Button_Button.Button, { accessibilityRole: "none", variant: "tertiary", size: "sm", shrink: true, text: null, onPress: null });
      return jsx(TableRow.TableRow, { accessibilityRole: "none", variant: "tertiary", size: "sm", shrink: true, text: null, onPress: null }, displayName.name);
    })}</View>;
  }
  return tmp2;
};