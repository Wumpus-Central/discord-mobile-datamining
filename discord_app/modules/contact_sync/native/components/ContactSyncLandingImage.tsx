// discord_app/modules/contact_sync/native/components/ContactSyncLandingImage.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/11957_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/11958_registerAsset.js";

let c3;
let c4;
let c5;
let closure_6;
let obj1;
({ Image: obj1, View: c3 } = get_ActivityIndicator);
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ leftContainer: { zIndex: 2, height: 106, width: 102, position: "absolute" }, landingImageLeft: { left: 58, top: -92 }, rightContainer: { position: "absolute", height: 113, width: 103 }, landingImageRight: { left: 134, top: -99 } });
const result = require("jsxProd").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingImage.tsx");

export default function ContactSyncLandingImage() {
  const tmp = callback3();
  let obj = { children: null };
  obj = { style: tmp.leftContainer, children: null };
  obj = { resizeMode: "contain", style: tmp.landingImageLeft, source: registerAsset };
  obj[1] = callback(closure_2, obj);
  const items = [callback(closure_3, obj), ];
  const obj1 = { style: tmp.rightContainer, children: null };
  obj1[1] = callback(closure_2, { resizeMode: "contain", style: tmp.landingImageRight, source: registerAsset });
  items[1] = callback(closure_3, obj1);
  obj[0] = items;
  return callback2(closure_5, obj);
};