// discord_app/modules/premium/gifting/native/views/GiftingBadgeIcon.tsx
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeIcon.tsx");

export default function GiftingBadgeIcon(size) {
  size = size.size;
  ({ icon, style } = size);
  const obj = { source: { uri: icon }, resizeMode: "contain", style: null };
  const items = [{ width: size, height: size }, style];
  obj.style = items;
  return jsx(FastImageDefault, { source: { uri: icon }, resizeMode: "contain", style: null });
}
