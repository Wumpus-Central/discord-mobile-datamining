// === Module 8989: TwoWayLinkError ===

// Module 8989 (TwoWayLinkError)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ image: { width: 254, height: 127, marginBottom: 32 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkError.tsx");

export const TwoWayLinkError = function TwoWayLinkError(arg0) {
  let body;
  let onClose;
  let onRetry;
  let title;
  ({ onClose, title, body, onRetry } = arg0);
  let obj = require(8947) /* styles */;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  const tmp = callback3();
  const items = [callback(closure_3, { source: importDefault(8990), style: callback3().image }), callback(require(4189) /* Text */.Text, { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: title }), callback(require(4189) /* Text */.Text, { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: body })];
  obj[1] = items;
  const items1 = [callback2(closure_4, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj5 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: null };
  const obj6 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj6[2] = intl.string(require(1236) /* getSystemLocale */.t["5911Lb"]);
  obj6[3] = onRetry;
  const items2 = [callback(require(4604) /* Button */.Button, obj6), ];
  const obj7 = { size: "lg", variant: "secondary", text: null, onPress: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj7[2] = intl2.string(require(1236) /* getSystemLocale */.t["ETE/oC"]);
  obj7[3] = onClose;
  items2[1] = callback(require(4604) /* Button */.Button, obj7);
  obj5[3] = items2;
  obj4[2] = callback2(require(4602) /* Stack */.Stack, obj5);
  items1[1] = callback(require(5181) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj4);
  obj[1] = items1;
  return callback2(closure_4, obj);
};