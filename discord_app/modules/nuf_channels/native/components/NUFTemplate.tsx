import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let obj1;
const require = arg1;
({ View: obj1, Image: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, title: null, description: null, image: null };
createCacheKey = { padding: 16, alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginBottom: 8 };
createCacheKey[2] = { textAlign: "center", lineHeight: 18, marginBottom: 24 };
createCacheKey[3] = { marginBottom: 24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplate.tsx");

export default function NUFActionSheetTemplate(arg0) {
  let CTALabel;
  let description;
  let imageSrc;
  let onCTAPress;
  let title;
  ({ title, description, imageSrc, onCTAPress, CTALabel } = arg0);
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const items = [callback(require(4189) /* Text */.Text, obj), , , ];
  obj = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
  items[1] = callback(require(4189) /* Text */.Text, obj);
  items[2] = callback(closure_3, { source: imageSrc, style: tmp.image });
  items[3] = callback(require(4604) /* Button */.Button, { text: CTALabel, size: "md", onPress: onCTAPress, grow: true });
  obj[1] = items;
  return callback2(closure_2, obj);
};