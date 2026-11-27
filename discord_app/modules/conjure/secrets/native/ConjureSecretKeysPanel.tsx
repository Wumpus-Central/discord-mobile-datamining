// === Module 18551: ConjureSecretKeysPanel ===

// Module 18551 (ConjureSecretKeysPanel)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import Text_Text from "Text/Text" /* 5634 */;
import LockIcon from "LockIcon" /* 7161 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5043);
let obj2 = { panel: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: null, iconTile: null, titles: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
let size = { alignItems: "center", justifyContent: "center", width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.iconTile = size;
const obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
obj2.titles = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/secrets/native/ConjureSecretKeysPanel.tsx");

export default function ConjureSecretKeysPanel(arg0) {
  ({ title, children } = arg0);
  const tmp = closure_6();
  const obj = { style: tmp.panel, children: null };
  const obj2 = { style: tmp.header, children: null };
  const obj3 = { style: tmp.iconTile, children: React4(LockIcon.LockIcon, { size: "sm", color: nativeDefault.colors.ICON_SUBTLE }) };
  items = [React4(View, obj3), ];
  const obj5 = { style: tmp.titles, children: null };
  const items1 = [React4(Text_Text.Heading, { variant: "heading-sm/semibold", children: title }), ];
  const obj6 = { variant: "body-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj6.children = intl.string(_modDef4245.jgDBJZ);
  items1[1] = React4(Text_Text.Text, obj6);
  obj5.children = items1;
  items[1] = hasOwnProperty(View, obj5);
  obj2.children = items;
  const items2 = [hasOwnProperty(View, obj2), children];
  obj.children = items2;
  return hasOwnProperty(View, obj);
};