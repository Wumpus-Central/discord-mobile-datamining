// discord_app/modules/parent_tools/native/FamilyCenterDataConfirmation.tsx
import util from "../../../intl/index.native.tsx";
import _modDef2396 from "../FamilyCenter.messages.js";
import UserPlusIcon from "../../../design/components/Icon/native/redesign/generated/UserPlusIcon.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import ForumIcon from "../../../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import SettingsIcon from "../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import FlagIcon from "../../../design/components/Icon/native/redesign/generated/FlagIcon.tsx";
import ServerIcon from "../../../design/components/Icon/native/redesign/generated/ServerIcon.tsx";
import GiftIcon from "../../../design/components/Icon/native/redesign/generated/GiftIcon.tsx";
import useAgeSpecificText from "../hooks/useAgeSpecificText.tsx";
import PhoneIcon from "../../../design/components/Icon/native/redesign/generated/PhoneIcon.tsx";
import CreditCardIcon from "../../../design/components/Icon/native/redesign/generated/CreditCardIcon.tsx";
import PiggyBankIcon from "../../../design/components/Icon/native/redesign/generated/PiggyBankIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function RowGroup(children) {
  const rows = children.rows;
  let obj = { spacing: 8, children: null };
  const items = [
    React3(Text_Text.Text, {
      accessibilityRole: "header",
      variant: "text-sm/semibold",
      color: "text-muted",
      children: children.title,
    }),
  ];
  obj = {
    hasIcons: true,
    children: rows.map((header) => {
      header = header.header;
      ({ description, IconComponent, negative } = header);
      const obj = { label: header, subLabel: description, icon: null };
      let str = "default";
      if (true === negative) {
        str = "text-status-dnd";
      }
      obj.icon = closure_1_3(TableRow.TableRow.Icon, { variant: str, IconComponent });
      return closure_1_3(TableRow.TableRow, obj, header);
    }),
  };
  items[1] = React3(TableRowGroup.TableRowGroup, obj);
  obj.children = items;
  return React4(Stack_Stack.Stack, obj);
}
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterDataConfirmation.tsx");

export default function FamilyCenterDataConfirmation() {
  const intl = util.intl;
  const intl2 = util.intl;
  const stringResult = intl.string(_modDef2396.CI1Env);
  const intl3 = util.intl;
  const stringResult1 = intl2.string(_modDef2396["ksze+o"]);
  let obj = useAgeSpecificText;
  const intl4 = util.intl;
  const stringResult2 = intl3.string(_modDef2396["n73g+V"]);
  const intl5 = util.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl4.string(_modDef2396["5x3taM"]), intl5.string(_modDef2396.WZwGFX));
  let obj1 = useAgeSpecificText;
  const intl6 = util.intl;
  const stringResult3 = intl4.string(_modDef2396["5x3taM"]);
  const intl7 = util.intl;
  const ageSpecificText1 = obj1.useAgeSpecificText(intl6.string(_modDef2396.FcKkcr), intl7.string(_modDef2396.PQtDFk));
  let obj2 = useAgeSpecificText;
  const intl8 = util.intl;
  const stringResult4 = intl6.string(_modDef2396.FcKkcr);
  const intl9 = util.intl;
  const ageSpecificText2 = obj2.useAgeSpecificText(
    intl8.string(_modDef2396["dES/2r"]),
    intl9.string(_modDef2396.ep6mdN),
  );
  let obj3 = useAgeSpecificText;
  const intl10 = util.intl;
  const stringResult5 = intl8.string(_modDef2396["dES/2r"]);
  const intl11 = util.intl;
  const ageSpecificText3 = obj3.useAgeSpecificText(
    intl10.string(_modDef2396.GWPcQg),
    intl11.string(_modDef2396.yFnKIg),
  );
  let obj4 = useAgeSpecificText;
  const intl12 = util.intl;
  const stringResult6 = intl10.string(_modDef2396.GWPcQg);
  const intl13 = util.intl;
  const ageSpecificText4 = obj4.useAgeSpecificText(
    intl12.string(_modDef2396["30+sih"]),
    intl13.string(_modDef2396["0cuLn1"]),
  );
  let obj5 = useAgeSpecificText;
  const intl14 = util.intl;
  const stringResult7 = intl12.string(_modDef2396["30+sih"]);
  const intl15 = util.intl;
  const ageSpecificText5 = obj5.useAgeSpecificText(
    intl14.string(_modDef2396.tHTyRh),
    intl15.string(_modDef2396.TeNlMb),
  );
  let obj6 = useAgeSpecificText;
  const intl16 = util.intl;
  const stringResult8 = intl14.string(_modDef2396.tHTyRh);
  const intl17 = util.intl;
  const ageSpecificText6 = obj6.useAgeSpecificText(
    intl16.string(_modDef2396.PfveQ6),
    intl17.string(_modDef2396["f7ofm/"]),
  );
  let obj7 = useAgeSpecificText;
  const intl18 = util.intl;
  const stringResult9 = intl16.string(_modDef2396.PfveQ6);
  const intl19 = util.intl;
  const ageSpecificText7 = obj7.useAgeSpecificText(
    intl18.string(_modDef2396.MKeCj3),
    intl19.string(_modDef2396.HdcGGl),
  );
  let obj8 = useAgeSpecificText;
  const intl20 = util.intl;
  const stringResult10 = intl18.string(_modDef2396.MKeCj3);
  const intl21 = util.intl;
  const ageSpecificText8 = obj8.useAgeSpecificText(
    intl20.string(_modDef2396.wZejZr),
    intl21.string(_modDef2396.tdgcf1),
  );
  let obj9 = useAgeSpecificText;
  const intl22 = util.intl;
  const stringResult11 = intl20.string(_modDef2396.wZejZr);
  const intl23 = util.intl;
  const ageSpecificText9 = obj9.useAgeSpecificText(
    intl22.string(_modDef2396.ASf7XN),
    intl23.string(_modDef2396["82y87X"]),
  );
  let obj10 = useAgeSpecificText;
  const intl24 = util.intl;
  const stringResult12 = intl22.string(_modDef2396.ASf7XN);
  const intl25 = util.intl;
  obj = { header: null, description: null, IconComponent: null };
  const ageSpecificText10 = obj10.useAgeSpecificText(
    intl24.string(_modDef2396["0QDVFN"]),
    intl25.string(_modDef2396["1xBHHV"]),
  );
  const intl26 = util.intl;
  obj.header = intl26.string(_modDef2396["/zMYZX"]);
  obj.description = ageSpecificText;
  obj.IconComponent = UserPlusIcon.UserPlusIcon;
  const items = [obj, , , , , ,];
  obj = { header: null, description: null, IconComponent: null };
  const intl27 = util.intl;
  obj.header = intl27.string(_modDef2396["44NEx6"]);
  obj.description = ageSpecificText1;
  obj.IconComponent = ServerIcon.ServerIcon;
  items[1] = obj;
  obj1 = { header: null, description: null, IconComponent: null };
  const intl28 = util.intl;
  obj1.header = intl28.string(_modDef2396["Z3G+8h"]);
  const intl29 = util.intl;
  obj1.description = intl29.string(_modDef2396.KBgArX);
  obj1.IconComponent = ForumIcon.ForumIcon;
  items[2] = obj1;
  obj2 = { header: null, description: null, IconComponent: null };
  const intl30 = util.intl;
  obj2.header = intl30.string(_modDef2396.GNs2ZH);
  const intl31 = util.intl;
  obj2.description = intl31.string(_modDef2396.Ief2xc);
  obj2.IconComponent = PhoneIcon.PhoneIcon;
  items[3] = obj2;
  obj3 = { header: null, description: null, IconComponent: null };
  const intl32 = util.intl;
  obj3.header = intl32.string(_modDef2396.PjM3r5);
  obj3.description = ageSpecificText2;
  obj3.IconComponent = CreditCardIcon.CreditCardIcon;
  items[4] = obj3;
  obj4 = { header: null, description: null, IconComponent: null };
  const intl33 = util.intl;
  obj4.header = intl33.string(_modDef2396.Fv3n8L);
  obj4.description = ageSpecificText3;
  obj4.IconComponent = GiftIcon.GiftIcon;
  items[5] = obj4;
  obj5 = { header: ageSpecificText4, description: ageSpecificText5, IconComponent: FlagIcon.FlagIcon };
  items[6] = obj5;
  obj6 = { header: null, description: null, IconComponent: null };
  const intl34 = util.intl;
  obj6.header = intl34.string(_modDef2396.kyT6pZ);
  obj6.description = ageSpecificText6;
  obj6.IconComponent = ClockIcon.ClockIcon;
  const items1 = [obj6, ,];
  obj7 = { header: null, description: null, IconComponent: null };
  const intl35 = util.intl;
  obj7.header = intl35.string(_modDef2396["52ld7c"]);
  obj7.description = ageSpecificText7;
  obj7.IconComponent = PiggyBankIcon.PiggyBankIcon;
  items1[1] = obj7;
  obj8 = { header: null, description: null, IconComponent: null };
  const intl36 = util.intl;
  obj8.header = intl36.string(_modDef2396.UCuHM8);
  obj8.description = ageSpecificText8;
  obj8.IconComponent = SettingsIcon.SettingsIcon;
  items1[2] = obj8;
  obj9 = { spacing: 24, children: null };
  const items2 = [
    React3(RowGroup, { title: stringResult, rows: items }),
    React3(RowGroup, { title: stringResult1, rows: items1 }),
  ];
  obj10 = { title: stringResult2, rows: null };
  const stringResult13 = intl24.string(_modDef2396["0QDVFN"]);
  const items3 = [
    { header: ageSpecificText9, description: ageSpecificText10, IconComponent: XSmallIcon.XSmallIcon, negative: true },
  ];
  obj10.rows = items3;
  items2[2] = React3(RowGroup, obj10);
  obj9.children = items2;
  return React4(Stack_Stack.Stack, obj9);
}
