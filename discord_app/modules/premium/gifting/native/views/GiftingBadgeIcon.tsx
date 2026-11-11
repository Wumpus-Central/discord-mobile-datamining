// === Module 11619: GiftingBadgeIcon ===

// Module 11619 (GiftingBadgeIcon)
import FastImageDefault from "FastImage" /* 5957 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeIcon.tsx");

export default function GiftingBadgeIcon(size) {
  size = size.size;
  ({ icon, style } = size);
  const obj = { source: { uri: icon }, resizeMode: "contain", style: null };
  items = [{ width: size, height: size }, style];
  obj.style = items;
  return jsx(FastImageDefault, { source: { uri: icon }, resizeMode: "contain", style: null });
};