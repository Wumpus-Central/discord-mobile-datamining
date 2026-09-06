// discord_app/modules/main_tabs_v2/native/friends/components/ShowAllRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import AvatarDuoPile from "../../../../../design/components/Pile/native/AvatarDuoPile.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { labelContainer: { flexDirection: "row", alignItems: "center" }, showAllText: null };
createStyles = { marginLeft: nativeDefault.space.PX_12 };
createStyles.showAllText = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ShowAllRow.tsx");

export default function ShowAllRow(users) {
  users = users.users;
  ({ onPress, count } = users);
  const tmp = closure_5();
  let obj = { onPress, end: true, height: "100%", label: null, trailing: null };
  obj = { style: tmp.labelContainer, children: null };
  obj = { size: native.AvatarSizes.XSMALL_20, "aria-label": "", children: null };
  const substr = users.slice(0, 2);
  obj.children = substr.map((getAvatarSource, index) =>
    closure_1_3(
      native.Avatar,
      {
        source: getAvatarSource.getAvatarSource(null, false, native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL]),
        size: native.AvatarSizes.XSMALL_20,
      },
      index,
    ),
  );
  const items = [React3(AvatarDuoPile.AvatarDuoPile, obj)];
  const obj1 = { style: tmp.showAllText, variant: "text-md/semibold", color: "text-brand", children: null };
  const intl = util.intl;
  obj1.children = intl.format(util.t.NrzztX, { count });
  items[1] = React3(Text_Text.Text, obj1);
  obj.children = items;
  obj.label = React4(View, obj);
  obj.trailing = React3(TableRow.TableRow.Arrow, {});
  return React3(TableRow.TableRow, obj);
}
