// discord_app/modules/stickers/native/StickerPackBanner.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getStickerExtensionFromFormatType from "../StickersUtils.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
({ Image: obj1, View: c3 } = get_ActivityIndicator);
const result = require("set").fileFinishedImporting("modules/stickers/native/StickerPackBanner.tsx");

export default function StickerPackBanner(arg0) {
  ({ containerStyle, style, stickerPack } = arg0);
  let obj = getStickerExtensionFromFormatType;
  const stickerPackBannerAssetUrl = obj.getStickerPackBannerAssetUrl(stickerPack, 1024);
  let tmp2 = null;
  if (null != stickerPackBannerAssetUrl) {
    obj = { style: null, children: null };
    obj[0] = containerStyle;
    obj = { source: null, style: null, resizeMode: "contain" };
    obj1 = { uri: null };
    obj1[0] = stickerPackBannerAssetUrl;
    obj[0] = obj1;
    obj[1] = style;
    obj[1] = <closure_2 source={null} style={null} resizeMode="contain" />;
    tmp2 = <closure_3 source={null} style={null} resizeMode="contain" />;
  }
  return tmp2;
};