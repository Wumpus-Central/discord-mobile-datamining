// === Module 12192: OptionalCommandOptionList ===

// Module 12192 (OptionalCommandOptionList)
import noopAll from "noop" /* 19 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5687 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/command_view/OptionalCommandOptionList.tsx");

export default function OptionalCommandOptionList(arg0) {
  ({ options, onSelectOption: require } = arg0);
  let tmp2 = null;
  if (0 !== options.length) {
    let obj = { style: null, collapsable: false, children: null };
    obj[0] = tmp;
    obj = { hasIcons: false, children: null };
    obj[1] = options.map((displayName) => {
      closure_0 = displayName;
      let obj = {
        onPress() {
          return displayName(displayName);
        },
        label: displayName.displayName,
        subLabel: displayName.displayDescription,
        trailing: null
      };
      obj = { accessibilityRole: "none", variant: "tertiary", size: "sm", shrink: true, text: null, onPress: null };
      const intl = closure_1_0(closure_1_1[6]).intl;
      obj[4] = intl.string(closure_1_0(closure_1_1[6]).t.OYkgVk);
      obj[5] = function onPress() {
        return displayName(displayName);
      };
      obj[3] = closure_1_3(closure_1_0(closure_1_1[5]).Button, obj);
      return closure_1_3(closure_1_0(closure_1_1[4]).TableRow, obj, displayName.name);
    });
    obj[2] = jsx(TableRowGroupTitle.TableRowGroup, { hasIcons: false, children: null });
    tmp2 = <View hasIcons={false}>{null}</View>;
  }
  return tmp2;
};