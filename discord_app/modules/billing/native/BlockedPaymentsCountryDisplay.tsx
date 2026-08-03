import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let closure_6;
let error;
const require = arg1;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { alignItems: "center" }, header: null, image: null };
createCacheKey = { fontSize: 20, fontWeight: "700", color: require("Themes").colors.TEXT_SUBTLE, marginBottom: 16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginTop: 38 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default function BlockedPaymentsCountryDisplay() {
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.vwMEHS);
  const items = [callback(require(1297) /* Button */.LegacyText, obj), , ];
  obj = { children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  const obj1 = { helpdeskArticle: null };
  const tmp4 = importDefault(4129)();
  const tmp5 = closure_7;
  const tmp6 = closure_3;
  const tmp7 = callback;
  obj1[0] = importDefault(1945).getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS);
  obj[0] = intl2.format(require(1236) /* getSystemLocale */.t.IHxEJU, obj1);
  items[1] = callback(require(1297) /* Button */.LegacyText, obj);
  const obj2 = { style: tmp.image, source: null };
  const obj5 = importDefault(1945);
  const tmp8 = closure_4;
  if (obj7.isThemeDark(tmp4)) {
    let tmp2Result = tmp2(6362);
  } else {
    tmp2Result = tmp2(6363);
  }
  obj2[1] = tmp2Result;
  items[2] = tmp7(tmp8, obj2);
  obj[1] = items;
  return tmp5(tmp6, obj);
};