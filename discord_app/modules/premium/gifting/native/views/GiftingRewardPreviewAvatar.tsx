// discord_app/modules/premium/gifting/native/views/GiftingRewardPreviewAvatar.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import Button from "../../../../../design/void/native.tsx";
import closure_2 from "../../../../a11y/AccessibilityStore.tsx";
import closure_3 from "../../../../../stores/UserStore.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

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
  obj = { user: stateFromStores, guildId: "r", avatarDecoration: false, animate: false };
  obj[2] = tmp5;
  obj[3] = !stateFromStores1;
  const merged = Object.assign(asset);
  return jsx(Button.Avatar, { user: stateFromStores, guildId: "r", avatarDecoration: false, animate: false });
};