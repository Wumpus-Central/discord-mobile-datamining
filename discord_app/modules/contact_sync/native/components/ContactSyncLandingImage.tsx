// === Module 12689: ContactSyncLandingImage ===

// Module 12689 (ContactSyncLandingImage)
import _modDef12690 from "module_12690" /* 12690 */;
import _modDef12691 from "module_12691" /* 12691 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ leftContainer: { zIndex: 2, height: 106, width: 102, position: "absolute" }, landingImageLeft: { left: 58, top: -92 }, rightContainer: { position: "absolute", height: 113, width: 103 }, landingImageRight: { left: 134, top: -99 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingImage.tsx");

export default function ContactSyncLandingImage() {
  const tmp = closure_7();
  let obj = { children: null };
  obj = { style: tmp.leftContainer, children: null };
  obj = { resizeMode: "contain", style: tmp.landingImageLeft, source: _modDef12690 };
  obj.children = React4(React2, obj);
  const items = [React4(React3, obj), ];
  const obj1 = { style: tmp.rightContainer, children: React4(React2, { resizeMode: "contain", style: tmp.landingImageRight, source: _modDef12691 }) };
  items[1] = React4(React3, obj1);
  obj.children = items;
  return timestampProducer(hasOwnProperty, obj);
};