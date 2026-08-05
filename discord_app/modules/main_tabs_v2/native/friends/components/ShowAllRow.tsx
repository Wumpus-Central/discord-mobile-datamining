// discord_app/modules/main_tabs_v2/native/friends/components/ShowAllRow.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

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
  obj[0] = require("../../../../../design/void/native.tsx") /* Button */.AvatarSizes.XSMALL_20;
  const substr = users.slice(0, 2);
  obj[2] = substr.map((getAvatarSource) => {
    const obj = { source: null, size: null };
    obj[0] = getAvatarSource.getAvatarSource(null, false, callback(1297).AVATAR_SIZE_MAP[callback(undefined, 1297).AvatarSizes.XSMALL]);
    obj[1] = callback(1297).AvatarSizes.XSMALL_20;
    return callback2(callback(1297).Avatar, obj, arg1);
  });
  const items = [callback(require("../../../../../design/components/Pile/native/AvatarDuoPile.native.tsx") /* AvatarDuoPile */.AvatarDuoPile, obj), ];
  const obj1 = { style: tmp.showAllText, variant: "text-md/semibold", color: "text-brand", children: null };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[3] = intl.format(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.NrzztX, { count });
  items[1] = callback(require("../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj1);
  obj[1] = items;
  obj[3] = callback2(View, obj);
  obj[4] = callback(require("../../../../../design/components/TableRow/native/TableRow.native.tsx") /* TableRowInner */.TableRow.Arrow, {});
  return callback(require("../../../../../design/components/TableRow/native/TableRow.native.tsx") /* TableRowInner */.TableRow, obj);
};