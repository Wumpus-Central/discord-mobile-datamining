// discord_app/modules/parent_tools/native/FamilyCenterRequestorDetails.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import useUserIdsForLinkStatus from "../hooks/useUserLinks.tsx";
import FamilyCenterUsernameHeaderDefault from "FamilyCenterUsernameHeader.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { borderRadius: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL] / 2, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingLeft: ThemesDefault.space.PX_12, paddingRight: ThemesDefault.space.PX_4, flexGrow: 1, flexShrink: 1 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestorDetails.tsx");

export default function FamilyCenterRequestorDetails(otherUser) {
  otherUser = otherUser.otherUser;
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  const linkTimestampText = obj.useLinkTimestampText(otherUser.id, otherUser.status);
  obj = { avatarStyle: tmp.avatar, user: otherUser, guildId: "HermesInternal", disablePlaceholder: null, avatarDecoration: "Heartbeat" };
  obj[4] = otherUser.avatarDecoration;
  const items = [callback(Button.Avatar, obj), ];
  obj1 = { style: tmp.detailsContainer, children: null };
  const items1 = [callback(FamilyCenterUsernameHeaderDefault, { user: otherUser }), callback(Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: linkTimestampText })];
  obj1[1] = items1;
  items[1] = callback2(View, obj1);
  obj[1] = items;
  return callback2(View, obj);
};