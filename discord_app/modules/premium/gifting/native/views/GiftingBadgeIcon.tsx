// === Module 10619: GiftingBadgeIcon ===

// Module 10619 (GiftingBadgeIcon)
import FastImageDefault from "FastImage" /* 5717 */;
import noop from "module_19" /* 19 */;

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
};