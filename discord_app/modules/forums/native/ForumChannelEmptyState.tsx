// === Module 11883: ? ===

// Module 11883
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flex: 1, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, image: { width: 120, height: 80 }, title: { textAlign: "center", marginTop: 16, marginHorizontal: 20 }, subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 20 } });
const memoResult = require("noop").memo((topViewHeight) => {
  let num = topViewHeight.topViewHeight;
  if (num === undefined) {
    num = 0;
  }
  const tagFilter = topViewHeight.tagFilter;
  const tmp = callback();
  let obj = require(4039) /* AccessibilityAnnouncer */;
  const rect = importDefault(1581)();
  obj = { style: items, children: null };
  items = [tmp.container, { marginBottom: rect.bottom + rect.top + num }];
  let obj2 = require(4039) /* AccessibilityAnnouncer */;
  if (obj2.isThemeLight(obj.useThemeContext().theme)) {
    let tmp4Result = tmp4(11884);
  } else {
    tmp4Result = tmp4(11885);
  }
  obj = { source: tmp4Result, style: tmp.image };
  const items1 = [closure_5(closure_4, obj), , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp2(1236).intl;
  if (tagFilter.size > 0) {
    obj2 = { numTags: null };
    obj2[0] = tagFilter.size;
    let formatToPlainStringResult = intl.formatToPlainString(tmp2(1236).t.lvPci0, obj2);
  } else {
    formatToPlainStringResult = intl.string(tmp2(1236).t.PwTMG0);
  }
  obj1[4] = formatToPlainStringResult;
  items1[1] = closure_5(require(4189) /* Text */.Text, obj1);
  const obj3 = { style: tmp.subtext, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp2(1236).intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = tmp2(1236).t;
  if (tagFilter.size > 0) {
    const obj4 = { numTags: null };
    obj4[0] = tagFilter.size;
    let formatToPlainStringResult1 = formatToPlainString(t.AAeye1, obj4);
  } else {
    const obj5 = { channelName: null };
    obj5[0] = topViewHeight.channelName;
    formatToPlainStringResult1 = formatToPlainString(t.YtsXFD, obj5);
  }
  obj3[3] = formatToPlainStringResult1;
  items1[2] = closure_5(require(4189) /* Text */.Text, obj3);
  obj[1] = items1;
  return closure_6(closure_3, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/forums/native/ForumChannelEmptyState.tsx");

export default memoResult;