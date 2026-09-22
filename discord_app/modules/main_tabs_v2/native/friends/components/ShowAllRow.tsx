// === Module 17247: ShowAllRow ===

// Module 17247 (ShowAllRow)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4753 */;
import TableRow from "TableRow" /* 5824 */;
import AvatarDuoPile from "AvatarDuoPile" /* 14463 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { labelContainer: { flexDirection: "row", alignItems: "center" }, showAllText: { marginLeft: nativeDefault.space.PX_12 } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ShowAllRow.tsx");

export default function ShowAllRow(users) {
  users = users.users;
  ({ onPress, count } = users);
  const tmp = closure_5();
  const obj = { onPress, end: true, height: "100%", label: null, trailing: null };
  const obj2 = { style: tmp.labelContainer, children: null };
  const obj3 = { size: native.AvatarSizes.XSMALL_20, "aria-label": "", children: null };
  const substr = users.slice(0, 2);
  obj3.children = substr.map((getAvatarSource, index) => closure_1_3(native.Avatar, { source: getAvatarSource.getAvatarSource(null, false, native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL]), size: native.AvatarSizes.XSMALL_20 }, index));
  const items = [React3(AvatarDuoPile.AvatarDuoPile, obj3), ];
  const obj4 = { style: tmp.showAllText, variant: "text-md/semibold", color: "text-brand", children: null };
  const intl = util.intl;
  obj4.children = intl.format(util.t.NrzztX, { count });
  items[1] = React3(Text_Text.Text, obj4);
  obj2.children = items;
  obj.label = React4(View, obj2);
  obj.trailing = React3(TableRow.TableRow.Arrow, {});
  return React3(TableRow.TableRow, obj);
};