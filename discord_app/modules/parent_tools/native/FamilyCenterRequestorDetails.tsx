import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1 }, avatar: null, detailsContainer: null };
createCacheKey = { borderRadius: null, backgroundColor: null };
createCacheKey[0] = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL] / 2;
createCacheKey[1] = require("Themes").colors.BACKGROUND_SURFACE_HIGH;
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingLeft: require("Themes").space.PX_12, paddingRight: require("Themes").space.PX_4, flexGrow: 1, flexShrink: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingLeft: require("Themes").space.PX_12, paddingRight: require("Themes").space.PX_4, flexGrow: 1, flexShrink: 1 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestorDetails.tsx");

export default function FamilyCenterRequestorDetails(otherUser) {
  otherUser = otherUser.otherUser;
  const tmp = createCacheKey();
  let obj = require(7247) /* useUserIdsForLinkStatus */;
  obj = { style: tmp.container, children: null };
  const linkTimestampText = obj.useLinkTimestampText(otherUser.id, otherUser.status);
  obj = { avatarStyle: tmp.avatar, user: otherUser, guildId: "HermesInternal", disablePlaceholder: null, avatarDecoration: "Warning" };
  obj[4] = otherUser.avatarDecoration;
  const items = [callback(require(1297) /* Button */.Avatar, obj), ];
  const obj1 = { style: tmp.detailsContainer, children: null };
  const items1 = [callback(importDefault(14009), { user: otherUser }), callback(require(4251) /* Text */.Text, { variant: "text-xs/semibold", color: "text-muted", children: linkTimestampText })];
  obj1[1] = items1;
  items[1] = callback2(View, obj1);
  obj[1] = items;
  return callback2(View, obj);
};