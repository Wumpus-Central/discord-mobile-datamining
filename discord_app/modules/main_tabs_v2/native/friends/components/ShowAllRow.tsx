// === Module 15988: ShowAllRow ===

// Module 15988 (ShowAllRow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4734 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import AvatarDuoPile from "AvatarDuoPile" /* 13541 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const createCacheKey = { marginLeft: ThemesDefault.space.PX_12 };
createCacheKey[1] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ShowAllRow.tsx");

export default function ShowAllRow(users) {
  users = users.users;
  ({ onPress, count } = users);
  const tmp = callback3();
  const obj = { size: Button.AvatarSizes.XSMALL_20, "aria-label": "", children: null };
  const substr = users.slice(0, 2);
  obj[2] = substr.map((item, index) => callback2(callback(1297).Avatar, { source: item.getAvatarSource(null, false, callback(1297).AVATAR_SIZE_MAP[callback(undefined, 1297).AvatarSizes.XSMALL]), size: callback(1297).AvatarSizes.XSMALL_20 }, index));
  const items = [callback(AvatarDuoPile.AvatarDuoPile, obj), ];
  obj1 = { style: tmp.showAllText, variant: "text-md/semibold", color: "text-brand", children: null };
  const intl = getSystemLocale.intl;
  obj1[3] = intl.format(getSystemLocale.t.NrzztX, { count });
  items[1] = callback(Text.Text, obj1);
  obj[1] = items;
  obj[3] = callback2(View, obj);
  obj[4] = callback(TableRowInner.TableRow.Arrow, {});
  return callback(TableRowInner.TableRow, obj);
};