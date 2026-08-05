// discord_app/modules/main_tabs_v2/native/friends/components/ShowAllRow.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { AvatarDuoPile } from "../../../../../design/components/Pile/native/AvatarDuoPile.native.tsx";
import { TableRowInner } from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { labelContainer: { flexDirection: "row", alignItems: "center" }, showAllText: null };
createCacheKey = { marginLeft: require("Themes").space.PX_12 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ShowAllRow.tsx");

export default function ShowAllRow(users) {
  let count;
  let onPress;
  users = users.users;
  ({ onPress, count } = users);
  const tmp = createCacheKey();
  let obj = { onPress, end: true, height: "100%", label: null, trailing: null };
  obj = { style: tmp.labelContainer, children: null };
  obj = { size: null, "aria-label": "", children: null };
  obj[0] = Button /* Button */.AvatarSizes.XSMALL_20;
  const substr = users.slice(0, 2);
  obj[2] = substr.map((getAvatarSource) => {
    const obj = { source: null, size: null };
    obj[0] = getAvatarSource.getAvatarSource(null, false, callback(1297).AVATAR_SIZE_MAP[callback(undefined, 1297).AvatarSizes.XSMALL]);
    obj[1] = callback(1297).AvatarSizes.XSMALL_20;
    return callback2(callback(1297).Avatar, obj, arg1);
  });
  const items = [callback(AvatarDuoPile /* AvatarDuoPile */.AvatarDuoPile, obj), ];
  const obj1 = { style: tmp.showAllText, variant: "text-md/semibold", color: "text-brand", children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj1[3] = intl.format(getSystemLocale /* getSystemLocale */.t.NrzztX, { count });
  items[1] = callback(Text /* Text */.Text, obj1);
  obj[1] = items;
  obj[3] = callback2(View, obj);
  obj[4] = callback(TableRowInner /* TableRowInner */.TableRow.Arrow, {});
  return callback(TableRowInner /* TableRowInner */.TableRow, obj);
};