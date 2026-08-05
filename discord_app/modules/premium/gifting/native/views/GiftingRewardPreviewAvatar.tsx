// discord_app/modules/premium/gifting/native/views/GiftingRewardPreviewAvatar.tsx
import "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import mergeGuildAvatar from "mergeGuildAvatar";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/premium/gifting/native/views/GiftingRewardPreviewAvatar.tsx");

export default function GiftingRewardPreviewAvatar(asset) {
  let obj = require("../../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [maybeApplyNoTextColorForLightCustomTheme];
  let tmp5;
  const stateFromStores1 = require("../../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  if (null != asset.asset) {
    obj = { asset: null };
    obj[0] = asset.asset;
    tmp5 = obj;
  }
  obj = { user: stateFromStores, guildId: "r", avatarDecoration: "ct", animate: null };
  obj[2] = tmp5;
  obj[3] = !stateFromStores1;
  const merged = Object.assign(asset);
  return jsx(require("../../../../../design/void/native.tsx") /* Button */.Avatar, { user: stateFromStores, guildId: "r", avatarDecoration: "ct", animate: null });
};