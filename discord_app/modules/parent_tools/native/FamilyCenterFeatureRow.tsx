// discord_app/modules/parent_tools/native/FamilyCenterFeatureRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2396 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import EyeIcon from "../../../design/components/Icon/native/redesign/generated/EyeIcon.tsx";
import _modDef9861 from "../../../../_runtime/metro/09861__.js";
import useAgeSpecificText from "../hooks/useAgeSpecificText.tsx";
import _modDef12376 from "../../../../_runtime/metro/12376__.js";
import QrCodeIcon from "../../../design/components/Icon/native/redesign/generated/QrCodeIcon.tsx";
import _modDef14886 from "../../../../_runtime/metro/14886__.js";
import ChatCheckIcon from "../../../design/components/Icon/native/redesign/generated/ChatCheckIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { tableGroup: null };
createStyles = { marginTop: 20, marginBottom: nativeDefault.space.PX_24 };
createStyles.tableGroup = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterFeatureRow.tsx");

export default function FamilyCenterFeatureRows() {
  let obj = useAgeSpecificText;
  const intl = util.intl;
  const tmp = closure_6();
  const intl2 = util.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(_modDef2396.qITXhY), intl2.string(_modDef2396.bmhCnL));
  let obj1 = useAgeSpecificText;
  const intl3 = util.intl;
  const stringResult = intl.string(_modDef2396.qITXhY);
  const intl4 = util.intl;
  const ageSpecificText1 = obj1.useAgeSpecificText(
    intl3.string(_modDef2396.t7SkFy),
    intl4.string(_modDef2396["68zfxD"]),
  );
  let obj2 = useAgeSpecificText;
  const intl5 = util.intl;
  const stringResult1 = intl3.string(_modDef2396.t7SkFy);
  const intl6 = util.intl;
  obj = { icon: null, IconComponent: null, header: null, description: null };
  const ageSpecificText2 = obj2.useAgeSpecificText(
    intl5.string(_modDef2396["+pi4Yt"]),
    intl6.string(_modDef2396["1xPTwE"]),
  );
  obj.icon = _modDef14886;
  obj.IconComponent = ChatCheckIcon.ChatCheckIcon;
  const intl7 = util.intl;
  obj.header = intl7.string(_modDef2396["001l3m"]);
  obj.description = ageSpecificText;
  const items = [obj, ,];
  obj = { icon: _modDef12376, IconComponent: EyeIcon.EyeIcon, header: null, description: null };
  const intl8 = util.intl;
  obj.header = intl8.string(_modDef2396.yipAeP);
  obj.description = ageSpecificText1;
  items[1] = obj;
  obj1 = { icon: _modDef9861, IconComponent: QrCodeIcon.QrCodeIcon, header: null, description: null };
  const intl9 = util.intl;
  obj1.header = intl9.string(_modDef2396.hhOuMe);
  obj1.description = ageSpecificText2;
  items[2] = obj1;
  obj2 = { style: tmp.tableGroup, children: null };
  const obj3 = { spacing: 8, children: null };
  const obj4 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl10 = util.intl;
  obj4.children = intl10.string(_modDef2396["6JkHSg"]);
  const items1 = [React4(Text_Text.Text, obj4)];
  const stringResult2 = intl5.string(_modDef2396["+pi4Yt"]);
  items1[1] = React4(TableRowGroup.TableRowGroup, {
    hasIcons: true,
    children: items.map((header) => {
      header = header.header;
      ({ description, icon, IconComponent } = header);
      return closure_1_4(
        TableRow.TableRow,
        {
          label: header,
          subLabel: description,
          icon: closure_1_4(TableRow.TableRow.Icon, { source: icon, IconComponent }),
        },
        header,
      );
    }),
  });
  obj3.children = items1;
  obj2.children = hasOwnProperty(Stack_Stack.Stack, obj3);
  return React4(View, obj2);
}
