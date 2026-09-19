// === Module 11898: PublicGuildAnnouncementProfile ===

// Module 11898 (PublicGuildAnnouncementProfile)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4752 */;
import FastImageDefault from "FastImage" /* 5799 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7390 */;
import PublicGuildsUtils from "PublicGuildsUtils" /* 8292 */;
import _modDef11899 from "module_11899" /* 11899 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
let obj2 = { content: { padding: 16 }, avatar: null, nameWrapper: null, headerText: null, description: null };
let size = { borderRadius: nativeDefault.radii.lg, height: 80, width: 80, marginVertical: 16 };
obj2.avatar = size;
obj2.nameWrapper = { flexDirection: "row", alignItems: "center" };
obj2.headerText = { marginLeft: 8 };
obj2.description = { marginTop: 8 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/PublicGuildAnnouncementProfile.tsx");

export default function PublicGuildAnnouncementProfile() {
  const tmp = closure_6();
  const obj = { startExpanded: true, children: null };
  const obj2 = { style: tmp.content, children: null };
  const obj3 = { style: tmp.avatar, source: null };
  const tmp2 = FastImageDefault;
  obj3.source = PublicGuildsUtils.getPublicSystemMessageAvatar();
  const items = [React4(tmp2, obj3), , , ];
  const obj5 = { style: tmp.nameWrapper, children: null };
  const items1 = [React4(native.Icon, { source: _modDef11899, disableColor: true }), ];
  const obj7 = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj7.children = intl.string(util.t.xfAlNx);
  items1[1] = React4(Text_Text.Text, obj7);
  obj5.children = items1;
  items[1] = hasOwnProperty(View, obj5);
  const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj8.children = intl2.string(util.t.BUZ0sl);
  items[2] = React4(Text_Text.Text, obj8);
  const obj9 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = util.intl;
  obj9.children = intl3.string(util.t.w5beJH);
  items[3] = React4(Text_Text.Text, obj9);
  obj2.children = items;
  obj.children = hasOwnProperty(View, obj2);
  return React4(Sheet_BottomSheet.BottomSheet, obj);
};