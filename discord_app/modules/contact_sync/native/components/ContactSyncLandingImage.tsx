// === Module 12160: ContactSyncLandingImage ===

// Module 12160 (ContactSyncLandingImage)
import noopAll from "noop" /* 19 */;
import registerAssetDefault from "registerAsset" /* 12161 */;
import registerAssetDefault2 from "registerAsset" /* 12162 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

noopAll;
({ Image: obj1, View: c3 } = get_ActivityIndicator);
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ leftContainer: { zIndex: 2, height: 106, width: 102, position: "absolute" }, landingImageLeft: { left: 58, top: -92 }, rightContainer: { position: "absolute", height: 113, width: 103 }, landingImageRight: { left: 134, top: -99 } });
const result = require("set").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingImage.tsx");

export default function ContactSyncLandingImage() {
  const tmp = callback3();
  let obj = { children: null };
  obj = { style: tmp.leftContainer, children: null };
  obj = { resizeMode: "contain", style: tmp.landingImageLeft, source: registerAssetDefault };
  obj[1] = callback(closure_2, obj);
  const items = [callback(closure_3, obj), ];
  obj1 = { style: tmp.rightContainer, children: callback(closure_2, { resizeMode: "contain", style: tmp.landingImageRight, source: registerAssetDefault2 }) };
  items[1] = callback(closure_3, obj1);
  obj[0] = items;
  return callback2(closure_5, obj);
};