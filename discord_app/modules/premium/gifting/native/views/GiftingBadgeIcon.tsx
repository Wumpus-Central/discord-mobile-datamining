// discord_app/modules/premium/gifting/native/views/GiftingBadgeIcon.tsx
import noop from "../../../../../../_runtime/metro/00019__.js";

const Image = fn(17).Image;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeIcon.tsx");

export default function GiftingBadgeIcon(uri) {
  const size = uri.size;
  const obj = { source: { uri: uri.icon }, style: null };
  const items = [{ width: size, height: size }, uri.style];
  obj.style = items;
  return <Image source={{ uri: uri.icon }} style={null} />;
}
