// discord_app/modules/main_tabs_v2/native/friends/components/ShowAllRow.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import Button from "../../../../../design/void/native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import TableRowInner from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import AvatarDuoPile from "../../../../../design/components/Pile/native/AvatarDuoPile.native.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { labelContainer: { flexDirection: "row", alignItems: "center" }, showAllText: null };
createCacheKey = { marginLeft: ThemesDefault.space.PX_12 };
createCacheKey[1] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ShowAllRow.tsx");

export default function ShowAllRow(users) {
  users = users.users;
  ({ onPress, count } = users);
  const tmp = callback3();
  let obj = { onPress, end: true, height: "100%", label: null, trailing: null };
  obj = { style: tmp.labelContainer, children: null };
  obj = { size: Button.AvatarSizes.XSMALL_20, "aria-label": "", children: null };
  const substr = users.slice(0, 2);
  obj[2] = substr.map((getAvatarSource) =>
    callback2(
      callback(1178).Avatar,
      {
        source: getAvatarSource.getAvatarSource(
          null,
          false,
          callback(1178).AVATAR_SIZE_MAP[callback(undefined, 1178).AvatarSizes.XSMALL],
        ),
        size: callback(1178).AvatarSizes.XSMALL_20,
      },
      arg1,
    ),
  );
  const items = [callback(AvatarDuoPile.AvatarDuoPile, obj)];
  obj1 = { style: tmp.showAllText, variant: "text-md/semibold", color: "text-brand", children: null };
  const intl = getSystemLocale.intl;
  obj1[3] = intl.format(getSystemLocale.t.NrzztX, { count });
  items[1] = callback(Text.Text, obj1);
  obj[1] = items;
  obj[3] = callback2(View, obj);
  obj[4] = callback(TableRowInner.TableRow.Arrow, {});
  return callback(TableRowInner.TableRow, obj);
}
