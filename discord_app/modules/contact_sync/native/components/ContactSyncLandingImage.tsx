// discord_app/modules/contact_sync/native/components/ContactSyncLandingImage.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import registerAssetDefault from "../../../../../_runtime/12464_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/12465_registerAsset.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

noopAll;
({ Image: obj1, View: c3 } = get_ActivityIndicator);
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({
  leftContainer: { zIndex: 2, height: 106, width: 102, position: "absolute" },
  landingImageLeft: { left: 58, top: -92 },
  rightContainer: { position: "absolute", height: 113, width: 103 },
  landingImageRight: { left: 134, top: -99 },
});
const result = require("set").fileFinishedImporting(
  "modules/contact_sync/native/components/ContactSyncLandingImage.tsx",
);

export default function ContactSyncLandingImage() {
  const tmp = callback3();
  let obj = { children: null };
  obj = { style: tmp.leftContainer, children: null };
  obj = { resizeMode: "contain", style: tmp.landingImageLeft, source: registerAssetDefault };
  obj[1] = callback(closure_2, obj);
  const items = [callback(closure_3, obj)];
  obj1 = {
    style: tmp.rightContainer,
    children: callback(closure_2, {
      resizeMode: "contain",
      style: tmp.landingImageRight,
      source: registerAssetDefault2,
    }),
  };
  items[1] = callback(closure_3, obj1);
  obj[0] = items;
  return callback2(closure_5, obj);
}
