// === Module 9162: PlayStationLinkSuccess ===

// Module 9162 (PlayStationLinkSuccess)
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkSuccess.tsx");

export const PlayStationLinkSuccess = function PlayStationLinkSuccess(onClose) {
  let obj = require(9124) /* styles */;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  const tmp = callback3();
  const items = [callback(closure_4, { source: React.useMemo(() => ({ uri: callback(table[5]) }), []), style: callback3().image }), , ];
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj2[3] = intl.string(require(1236) /* getSystemLocale */.t.e6SOl0);
  items[1] = callback(require(4251) /* Text */.Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj3[3] = intl2.string(require(1236) /* getSystemLocale */.t.QjAZAQ);
  items[2] = callback(require(4251) /* Text */.Text, obj3);
  obj[1] = items;
  const items1 = [callback2(closure_5, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj5 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj6 = { size: "md", text: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj6[1] = intl3.string(require(1236) /* getSystemLocale */.t.i4jeWR);
  obj6[2] = onClose.onClose;
  obj5[1] = callback(require(4666) /* Button */.Button, obj6);
  obj4[2] = callback(closure_5, obj5);
  items1[1] = callback(require(5243) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj4);
  obj[1] = items1;
  return callback2(closure_5, obj);
};