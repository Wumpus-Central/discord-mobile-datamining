// === Module 18171: ConjureChangeList ===

// Module 18171 (ConjureChangeList)
import nativeDefault from "native" /* 575 */;
import _modDef4091 from "module_4091" /* 4091 */;
import Text_Text from "Text/Text" /* 5385 */;
import Stack_Stack from "Stack/Stack" /* 5810 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { bots: fn(12050).RobotIcon, channels: fn(7584).AppsIcon, test_app: fn(16881).BeakerIcon, profile_widget: fn(7728).IdCardIcon, overlay: fn(6920).GameControllerIcon, automod: fn(10013).ShieldIcon, collaboration: fn(6918).GroupIcon, only_you: fn(12232).UserIcon, location: fn(12200).MagicWandIcon, server: fn(12342).ServerIcon, settings: fn(10251).SettingsIcon };
const createStyles = fn(4794);
let obj3 = { box: { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, rowText: { flex: 1 } };
let closure_7 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/server_share/native/ConjureChangeList.tsx");

export default function ConjureChangeList(rows) {
  rows = rows.rows;
  const tmp = closure_7();
  _require = tmp;
  obj = { spacing: 8, children: null };
  const obj2 = { variant: "body-md/semibold", color: "text-strong", children: null };
  const intl = require("util").intl;
  obj2.children = intl.string(_modDef4091["kG/2e8"]);
  items = [closure_4(require("Text/Text").Text, obj2), ];
  const obj3 = {
    style: tmp.box,
    children: closure_4(require("Stack/Stack").Stack, {
      spacing: 8,
      children: rows.map((children) => {
        obj = { direction: "horizontal", spacing: 8, align: "flex-start", children: null };
        items = [React4(obj[children.key], { size: "sm", color: "text-subtle" }), React4(Text_Text.Text, { variant: "body-sm/medium", color: "text-subtle", style: rowText.rowText, children: children.text })];
        obj.children = items;
        return hasOwnProperty(Stack_Stack.Stack, obj, children.key);
      })
    })
  };
  items[1] = closure_4(View, obj3);
  obj.children = items;
  return closure_5(require("Stack/Stack").Stack, obj);
};