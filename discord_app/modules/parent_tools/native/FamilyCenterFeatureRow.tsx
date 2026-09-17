// === Module 15009: FamilyCenterFeatureRow ===

// Module 15009 (FamilyCenterFeatureRow)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2397 from "module_2397" /* 2397 */;
import Text_Text from "Text/Text" /* 4636 */;
import Stack_Stack from "Stack/Stack" /* 5060 */;
import TableRow from "TableRow" /* 5693 */;
import TableRowGroup from "TableRowGroup" /* 5775 */;
import EyeIcon from "EyeIcon" /* 7082 */;
import _modDef10012 from "module_10012" /* 10012 */;
import useAgeSpecificText from "useAgeSpecificText" /* 12071 */;
import _modDef12528 from "module_12528" /* 12528 */;
import QrCodeIcon from "QrCodeIcon" /* 15006 */;
import _modDef15010 from "module_15010" /* 15010 */;
import ChatCheckIcon from "ChatCheckIcon" /* 15011 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4640);
let obj2 = { tableGroup: { marginTop: 20, marginBottom: nativeDefault.space.PX_24 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterFeatureRow.tsx");

export default function FamilyCenterFeatureRows() {
  const tmp = closure_6();
  const intl = util.intl;
  const obj = useAgeSpecificText;
  const intl2 = util.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(_modDef2397.qITXhY), intl2.string(_modDef2397.bmhCnL));
  const stringResult = intl.string(_modDef2397.qITXhY);
  const intl3 = util.intl;
  const obj2 = useAgeSpecificText;
  const intl4 = util.intl;
  const ageSpecificText1 = obj2.useAgeSpecificText(intl3.string(_modDef2397.t7SkFy), intl4.string(_modDef2397["68zfxD"]));
  const stringResult1 = intl3.string(_modDef2397.t7SkFy);
  const intl5 = util.intl;
  const obj3 = useAgeSpecificText;
  const intl6 = util.intl;
  const obj4 = { icon: null, IconComponent: null, header: null, description: null };
  const ageSpecificText2 = obj3.useAgeSpecificText(intl5.string(_modDef2397["+pi4Yt"]), intl6.string(_modDef2397["1xPTwE"]));
  obj4.icon = _modDef15010;
  obj4.IconComponent = ChatCheckIcon.ChatCheckIcon;
  const intl7 = util.intl;
  obj4.header = intl7.string(_modDef2397["001l3m"]);
  obj4.description = ageSpecificText;
  const items = [obj4, , ];
  const obj5 = { icon: _modDef12528, IconComponent: EyeIcon.EyeIcon, header: null, description: null };
  const intl8 = util.intl;
  obj5.header = intl8.string(_modDef2397.yipAeP);
  obj5.description = ageSpecificText1;
  items[1] = obj5;
  const obj6 = { icon: _modDef10012, IconComponent: QrCodeIcon.QrCodeIcon, header: null, description: null };
  const intl9 = util.intl;
  obj6.header = intl9.string(_modDef2397.hhOuMe);
  obj6.description = ageSpecificText2;
  items[2] = obj6;
  const obj7 = { style: tmp.tableGroup, children: null };
  const obj8 = { spacing: 8, children: null };
  const obj9 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl10 = util.intl;
  obj9.children = intl10.string(_modDef2397["6JkHSg"]);
  const items1 = [React4(Text_Text.Text, obj9), ];
  const stringResult2 = intl5.string(_modDef2397["+pi4Yt"]);
  items1[1] = React4(TableRowGroup.TableRowGroup, {
    hasIcons: true,
    children: items.map((header) => {
      header = header.header;
      ({ description, icon, IconComponent } = header);
      return closure_1_4(TableRow.TableRow, { label: header, subLabel: description, icon: closure_1_4(TableRow.TableRow.Icon, { source: icon, IconComponent }) }, header);
    })
  });
  obj8.children = items1;
  obj7.children = hasOwnProperty(Stack_Stack.Stack, obj8);
  return React4(View, obj7);
};