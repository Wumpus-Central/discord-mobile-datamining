// discord_app/modules/premium/gifting/native/views/GiftingBadgeIcon.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import { Image } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

noopAll;
const result = require("set").fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeIcon.tsx");

export default function GiftingBadgeIcon(size) {
  size = size.size;
  const source = { uri: size.icon };
  const style = [{ width: size, height: size }, size.style];
  return <Image source={source} style={style} />;
};