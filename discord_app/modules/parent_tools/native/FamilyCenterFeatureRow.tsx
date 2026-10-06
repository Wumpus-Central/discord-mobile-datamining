// === Module 14709: FamilyCenterFeatureRow ===

// Module 14709 (FamilyCenterFeatureRow)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl11 from "intl" /* 1126 */;
import _modDef2521 from "module_2521" /* 2521 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import TableRow2 from "TableRow" /* 6000 */;
import TableRowGroup2 from "TableRowGroup" /* 6081 */;
import EyeIcon from "EyeIcon" /* 6465 */;
import AssetRegistryDefault from "AssetRegistry" /* 9535 */;
import useAgeSpecificText4 from "useAgeSpecificText" /* 11544 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12028 */;
import QrCodeIcon from "QrCodeIcon" /* 14706 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14710 */;
import ChatCheckIcon from "ChatCheckIcon" /* 14711 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let header;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { tableGroup: obj2 };
obj2 = { marginTop: 20, marginBottom: nativeDefault.space.PX_24 };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl10;
  let items;
  let tmp11;
  let tmp12;
  let tmp17;
  let tmp18;
  let tmp23;
  let tmp26;
  let tmp28;
  let tmp31;
  let tmp33;
  let tmp36;
  let tmp5;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(25);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl11.intl;
    const stringResult = intl.string(_modDef2521.qITXhY);
    const intl2 = intl11.intl;
    const stringResult1 = intl2.string(_modDef2521.bmhCnL);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp5 = stringResult;
    tmp6 = stringResult1;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = useAgeSpecificText4;
  const ageSpecificText = tmpResult.useAgeSpecificText(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl11.intl;
    const stringResult2 = intl3.string(_modDef2521.t7SkFy);
    const intl4 = intl11.intl;
    const stringResult3 = intl4.string(_modDef2521["68zfxD"]);
    cResult[2] = stringResult2;
    cResult[3] = stringResult3;
    tmp12 = stringResult3;
    tmp11 = stringResult2;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult3 = useAgeSpecificText4;
  const ageSpecificText1 = tmpResult3.useAgeSpecificText(tmp11, tmp12);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = intl11.intl;
    const stringResult4 = intl5.string(_modDef2521["+pi4Yt"]);
    const intl6 = intl11.intl;
    const stringResult5 = intl6.string(_modDef2521["1xPTwE"]);
    cResult[4] = stringResult4;
    cResult[5] = stringResult5;
    tmp18 = stringResult5;
    tmp17 = stringResult4;
  } else {
    tmp17 = cResult[4];
    tmp18 = cResult[5];
  }
  const tmpResult4 = useAgeSpecificText4;
  const ageSpecificText2 = tmpResult4.useAgeSpecificText(tmp17, tmp18);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl7 = intl11.intl;
    const stringResult6 = intl7.string(_modDef2521["001l3m"]);
    cResult[6] = stringResult6;
    tmp23 = stringResult6;
  } else {
    tmp23 = cResult[6];
  }
  if (cResult[7] !== ageSpecificText) {
    const obj2 = { icon: AssetRegistryDefault3, IconComponent: ChatCheckIcon.ChatCheckIcon, header: tmp23, description: ageSpecificText };
    cResult[7] = ageSpecificText;
    cResult[8] = obj2;
    tmp26 = obj2;
  } else {
    tmp26 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl8 = intl11.intl;
    const stringResult7 = intl8.string(_modDef2521.yipAeP);
    cResult[9] = stringResult7;
    tmp28 = stringResult7;
  } else {
    tmp28 = cResult[9];
  }
  if (cResult[10] !== ageSpecificText1) {
    const obj3 = { icon: AssetRegistryDefault2, IconComponent: EyeIcon.EyeIcon, header: tmp28, description: ageSpecificText1 };
    cResult[10] = ageSpecificText1;
    cResult[11] = obj3;
    tmp31 = obj3;
  } else {
    tmp31 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const intl9 = intl11.intl;
    const stringResult8 = intl9.string(_modDef2521.hhOuMe);
    cResult[12] = stringResult8;
    tmp33 = stringResult8;
  } else {
    tmp33 = cResult[12];
  }
  if (cResult[13] !== ageSpecificText2) {
    const obj4 = { icon: AssetRegistryDefault, IconComponent: QrCodeIcon.QrCodeIcon, header: tmp33, description: ageSpecificText2 };
    cResult[13] = ageSpecificText2;
    cResult[14] = obj4;
    tmp36 = obj4;
  } else {
    tmp36 = cResult[14];
  }
  if (cResult[15] === tmp36) {
    if (cResult[16] === tmp26) {
      let arr;
      let tmp38;
      let tmp42;
      if (cResult[17] === tmp31) {
        arr = cResult[18];
      }
      const _Symbol = Symbol;
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-muted", children: intl10.string(_modDef2521["6JkHSg"]) };
        const Text = Text_Text.Text;
        intl10 = intl11.intl;
        const tmp41 = React3(Text, obj5);
        cResult[19] = tmp41;
        tmp38 = tmp41;
      } else {
        tmp38 = cResult[19];
      }
      if (cResult[20] !== arr) {
        const obj6 = { spacing: 8, children: items };
        items = [tmp38, ];
        const Stack = Stack_Stack.Stack;
        const obj7 = {
          hasIcons: true,
          children: arr.map((header) => {
                  let IconComponent;
                  let description;
                  let icon;
                  header = header.header;
                  ({ description, icon, IconComponent } = header);
                  const obj = { label: header, subLabel: description, icon: closure_1_4(TableRow2.TableRow.Icon, { source: icon, IconComponent }) };
                  const TableRow = TableRow2.TableRow;
                  return closure_1_4(TableRow, obj, header);
                })
        };
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        items[1] = React3(TableRowGroup, obj7);
        const tmp45 = hasOwnProperty(Stack, obj6);
        cResult[20] = arr;
        cResult[21] = tmp45;
        tmp42 = tmp45;
      } else {
        tmp42 = cResult[21];
      }
      if (cResult[22] === tmp4.tableGroup) {
        let tmp46;
        if (cResult[23] === tmp42) {
          tmp46 = cResult[24];
        }
        return tmp46;
      }
      const obj8 = { style: tmp4.tableGroup, children: tmp42 };
      const tmp49 = React3(View, obj8);
      cResult[22] = tmp4.tableGroup;
      cResult[23] = tmp42;
      cResult[24] = tmp49;
      tmp46 = tmp49;
    }
  }
  const items1 = [tmp26, tmp31, tmp36];
  cResult[15] = tmp36;
  cResult[16] = tmp26;
  cResult[17] = tmp31;
  cResult[18] = items1;
  arr = items1;
}) : (() => {
  let Stack;
  let intl10;
  let intl7;
  let intl8;
  let intl9;
  let items1;
  let obj5;
  const tmp = closure_6();
  const useAgeSpecificText = useAgeSpecificText4.useAgeSpecificText;
  useAgeSpecificText4;
  const intl = intl11.intl;
  const stringResult = intl.string(_modDef2521.qITXhY);
  const intl2 = intl11.intl;
  const ageSpecificText = useAgeSpecificText(stringResult, intl2.string(_modDef2521.bmhCnL));
  const useAgeSpecificText2 = useAgeSpecificText4.useAgeSpecificText;
  useAgeSpecificText4;
  const intl3 = intl11.intl;
  const stringResult1 = intl3.string(_modDef2521.t7SkFy);
  const intl4 = intl11.intl;
  const ageSpecificText2 = useAgeSpecificText2(stringResult1, intl4.string(_modDef2521["68zfxD"]));
  const useAgeSpecificText3 = useAgeSpecificText4.useAgeSpecificText;
  useAgeSpecificText4;
  const intl5 = intl11.intl;
  const stringResult2 = intl5.string(_modDef2521["+pi4Yt"]);
  const intl6 = intl11.intl;
  let obj = { icon: AssetRegistryDefault3, IconComponent: ChatCheckIcon.ChatCheckIcon, header: intl7.string(_modDef2521["001l3m"]), description: ageSpecificText };
  const ageSpecificText3 = useAgeSpecificText3(stringResult2, intl6.string(_modDef2521["1xPTwE"]));
  intl7 = intl11.intl;
  const items = [obj, , ];
  const obj2 = { icon: AssetRegistryDefault2, IconComponent: EyeIcon.EyeIcon, header: intl8.string(_modDef2521.yipAeP), description: ageSpecificText2 };
  intl8 = intl11.intl;
  items[1] = obj2;
  const obj3 = { icon: AssetRegistryDefault, IconComponent: QrCodeIcon.QrCodeIcon, header: intl9.string(_modDef2521.hhOuMe), description: ageSpecificText3 };
  intl9 = intl11.intl;
  items[2] = obj3;
  const obj4 = { style: tmp.tableGroup, children: hasOwnProperty(Stack, obj5) };
  obj5 = { spacing: 8, children: items1 };
  Stack = Stack_Stack.Stack;
  const obj6 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-muted", children: intl10.string(_modDef2521["6JkHSg"]) };
  const Text = Text_Text.Text;
  intl10 = intl11.intl;
  items1 = [React3(Text, obj6), ];
  const obj7 = {
    hasIcons: true,
    children: items.map((header) => {
      let IconComponent;
      let description;
      let icon;
      header = header.header;
      ({ description, icon, IconComponent } = header);
      const obj = { label: header, subLabel: description, icon: closure_1_4(TableRow2.TableRow.Icon, { source: icon, IconComponent }) };
      const TableRow = TableRow2.TableRow;
      return closure_1_4(TableRow, obj, header);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  items1[1] = React3(TableRowGroup, obj7);
  return React3(View, obj4);
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterFeatureRow.tsx");

export default tmp4;