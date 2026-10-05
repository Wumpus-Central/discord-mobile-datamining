// === Module 11818: OptionalCommandOptionList ===

// Module 11818 (OptionalCommandOptionList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import TableRow2 from "TableRow" /* 5993 */;
import TableRowGroup2 from "TableRowGroup" /* 6074 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let style;

const View = react_native.View;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let onSelectOption;
  let options;
  const obj = onSelectOption(576);
  const cResult = obj.c(10);
  ({ options, onSelectOption } = style);
  style = style.style;
  if (0 === options.length) {
    return null;
  } else {
    let tmp5;
    if (cResult[0] === onSelectOption) {
      let tmp4;
      let tmp7;
      if (cResult[1] === options) {
        tmp4 = cResult[2];
      }
      if (cResult[5] !== tmp4) {
        const tmp9 = jsx(onSelectOption(6074).TableRowGroup, { hasIcons: false, children: tmp4 });
        cResult[5] = tmp4;
        cResult[6] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[6];
      }
      if (cResult[7] === style) {
        let tmp10;
        if (cResult[8] === tmp7) {
          tmp10 = cResult[9];
        }
        return tmp10;
      }
      const tmp13 = <View style={style} collapsable={false}>{tmp7}</View>;
      cResult[7] = style;
      cResult[8] = tmp7;
      cResult[9] = tmp13;
      tmp10 = tmp13;
    }
    if (cResult[3] !== onSelectOption) {
      const fn = function o(displayName) {
        let intl;
        let closure_0 = displayName;
        const TableRow = onSelectOption(dependencyMap[5]).TableRow;
        ({
          accessibilityRole: "none",
          variant: "tertiary",
          size: "sm",
          shrink: true,
          text: intl.string(onSelectOption(dependencyMap[7]).t.OYkgVk),
          onPress() {
            return onSelectOption(displayName);
          }
        });
        const Button = onSelectOption(dependencyMap[6]).Button;
        intl = onSelectOption(dependencyMap[7]).intl;
        return <TableRow key={displayName.name} onPress={function onPress() {
          return onSelectOption(displayName);
        }} label={displayName.displayName} subLabel={displayName.displayDescription} trailing={null} />;
      };
      cResult[3] = onSelectOption;
      cResult[4] = fn;
      tmp5 = fn;
    } else {
      tmp5 = cResult[4];
    }
    const mapped = options.map(tmp5);
    cResult[0] = onSelectOption;
    cResult[1] = options;
    cResult[2] = mapped;
    tmp4 = mapped;
  }
}) : ((arg0) => {
  let options;
  ({ options, onSelectOption: require } = arg0);
  let tmp2 = null;
  if (0 !== options.length) {
    const obj2 = {
      hasIcons: false,
      children: options.map((displayName) => {
          let intl;
          require = displayName;
          const TableRow = TableRow2.TableRow;
          ({
            accessibilityRole: "none",
            variant: "tertiary",
            size: "sm",
            shrink: true,
            text: intl.string(intl2.t.OYkgVk),
            onPress() {
              return require(displayName);
            }
          });
          const Button = components_Button_Button.Button;
          intl = intl2.intl;
          return <TableRow key={displayName.name} onPress={function onPress() {
            return require(displayName);
          }} label={displayName.displayName} subLabel={displayName.displayDescription} trailing={null} />;
        })
    };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    tmp2 = <View style={tmp} collapsable={false}>{null}</View>;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/OptionalCommandOptionList.tsx");

export default tmp3;