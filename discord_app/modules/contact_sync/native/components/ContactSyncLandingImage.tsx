// === Module 12782: ContactSyncLandingImage ===

// Module 12782 (ContactSyncLandingImage)
import _modDef12783 from "module_12783" /* 12783 */;
import _modDef12784 from "module_12784" /* 12784 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4606);
let closure_7 = createStyles.createStyles({ leftContainer: { zIndex: 2, height: 106, width: 102, position: "absolute" }, landingImageLeft: { left: 58, top: -92 }, rightContainer: { position: "absolute", height: 113, width: 103 }, landingImageRight: { left: 134, top: -99 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingImage.tsx");

export default function ContactSyncLandingImage() {
  const tmp = closure_7();
  let obj = { children: null };
  obj = { style: tmp.leftContainer, children: null };
  obj = { resizeMode: "contain", style: tmp.landingImageLeft, source: _modDef12783 };
  obj.children = React4(React2, obj);
  const items = [React4(React3, obj), ];
  const obj1 = { style: tmp.rightContainer, children: React4(React2, { resizeMode: "contain", style: tmp.landingImageRight, source: _modDef12784 }) };
  items[1] = React4(React3, obj1);
  obj.children = items;
  return timestampProducer(hasOwnProperty, obj);
};