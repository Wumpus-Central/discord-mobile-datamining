// === Module 11649: PublicGuildAnnouncementProfile ===

// Module 11649 (PublicGuildAnnouncementProfile)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import FastImageDefault from "FastImage" /* 5587 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import PublicGuildsUtils from "PublicGuildsUtils" /* 8034 */;
import _modDef11650 from "module_11650" /* 11650 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
const createStyles = { content: { padding: 16 }, avatar: null, nameWrapper: null, headerText: null, description: null };
let size = { borderRadius: nativeDefault.radii.lg, height: 80, width: 80, marginVertical: 16 };
createStyles.avatar = size;
createStyles.nameWrapper = { flexDirection: "row", alignItems: "center" };
createStyles.headerText = { marginLeft: 8 };
createStyles.description = { marginTop: 8 };
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/PublicGuildAnnouncementProfile.tsx");

export default function PublicGuildAnnouncementProfile() {
  const tmp = closure_6();
  let obj = { startExpanded: true, children: null };
  obj = { style: tmp.content, children: null };
  obj = { style: tmp.avatar, source: null };
  let obj3 = PublicGuildsUtils;
  obj.source = obj3.getPublicSystemMessageAvatar();
  const items = [React4(FastImageDefault, obj), , , ];
  const obj1 = { style: tmp.nameWrapper, children: null };
  const items1 = [React4(native.Icon, { source: _modDef11650, disableColor: true }), ];
  obj3 = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.xfAlNx);
  items1[1] = React4(Text_Text.Text, obj3);
  obj1.children = items1;
  items[1] = hasOwnProperty(View, obj1);
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.BUZ0sl);
  items[2] = React4(Text_Text.Text, obj4);
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = util.intl;
  obj5.children = intl3.string(util.t.w5beJH);
  items[3] = React4(Text_Text.Text, obj5);
  obj.children = items;
  obj.children = hasOwnProperty(View, obj);
  return React4(Sheet_BottomSheet.BottomSheet, obj);
};