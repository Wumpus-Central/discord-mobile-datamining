// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx");

export default function XboxLinkEducation(onClose) {
  let obj = require(10413) /* styles */;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  let obj1 = importDefault(1945);
  const articleURL = obj1.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  obj1 = { source: React.useMemo(() => ({ uri: callback(table[7]) }), []), style: callback3().image };
  const items = [callback(closure_4, obj1), , ];
  const obj2 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj2[3] = intl.string(require(1236) /* getSystemLocale */.t.jHytat);
  items[1] = callback(require(4281) /* Text */.Text, obj2);
  const obj3 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj3[3] = intl2.format(require(1236) /* getSystemLocale */.t.yhozpz, { helpdeskArticleUrl: articleURL });
  items[2] = callback(require(4281) /* Text */.Text, obj3);
  obj[1] = items;
  const items1 = [callback2(closure_5, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj5 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj6 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj6[2] = intl3.string(require(1236) /* getSystemLocale */.t.i4jeWR);
  obj6[3] = onClose.onClose;
  obj5[1] = callback(require(4695) /* Button */.Button, obj6);
  obj4[2] = callback(closure_5, obj5);
  items1[1] = callback(require(5272) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj4);
  obj[1] = items1;
  return callback2(closure_5, obj);
};