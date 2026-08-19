// === Module 10381: GiftingRewardPreviewAvatar ===

// Module 10381 (GiftingRewardPreviewAvatar)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import Button from "Button" /* 1297 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/premium/gifting/native/views/GiftingRewardPreviewAvatar.tsx");

export default function GiftingRewardPreviewAvatar(asset) {
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [closure_2];
  let tmp5;
  const stateFromStores1 = initialize.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  if (null != asset.asset) {
    obj = { asset: null };
    obj[0] = asset.asset;
    tmp5 = obj;
  }
  obj = { user: stateFromStores, guildId: "r", avatarDecoration: "ct", animate: null };
  obj[2] = tmp5;
  obj[3] = !stateFromStores1;
  const merged = Object.assign(asset);
  return jsx(Button.Avatar, { user: stateFromStores, guildId: "r", avatarDecoration: "ct", animate: null });
};