// === Module 12940: ContactSyncLandingImage ===

// Module 12940 (ContactSyncLandingImage)
import _modDef12941 from "module_12941" /* 12941 */;
import _modDef12942 from "module_12942" /* 12942 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let closure_7 = createStyles.createStyles({ leftContainer: { zIndex: 2, height: 106, width: 102, position: "absolute" }, landingImageLeft: { left: 58, top: -92 }, rightContainer: { position: "absolute", height: 113, width: 103 }, landingImageRight: { left: 134, top: -99 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingImage.tsx");

export default function ContactSyncLandingImage() {
  const tmp = closure_7();
  const obj = { children: null };
  const obj2 = { style: tmp.leftContainer, children: React4(React2, { resizeMode: "contain", style: tmp.landingImageLeft, source: _modDef12941 }) };
  const items = [React4(React3, obj2), ];
  const obj4 = { style: tmp.rightContainer, children: null };
  const obj3 = { resizeMode: "contain", style: tmp.landingImageLeft, source: _modDef12941 };
  obj4.children = React4(React2, { resizeMode: "contain", style: tmp.landingImageRight, source: _modDef12942 });
  items[1] = React4(React3, obj4);
  obj.children = items;
  return timestampProducer(hasOwnProperty, obj);
};