// discord_app/design/void/ThumbnailImage/native/ThumbnailImage.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import { Image as _default } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import obj132 from "../../../../utils/PlatformUtils.tsx";

noopAll;
if (obj132.isAndroid()) {
  _default = require("__INTERNAL_VIEW_CONFIG").default;
}
const result = obj132.fileFinishedImporting("design/void/ThumbnailImage/native/ThumbnailImage.tsx");

export default function LocalImageThumbnail(arg0) {
  const merged = Object.assign(arg0);
  return <_default />;
};