// === Module 10109: ForLaterEmptyState ===

// Module 10109 (ForLaterEmptyState)
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
let error;
({ View: c3, Image: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ scrollView: { flex: 1 }, pageContainer: { flexGrow: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 32, paddingVertical: 16 }, container: { alignItems: "center", maxWidth: 311 }, image: { width: 140, height: 130 }, textContainer: { marginTop: 24, gap: 8 }, text: { textAlign: "center" } });
const result = require("createCacheKey").fileFinishedImporting("modules/saved_messages/native/ForLaterEmptyState.tsx");

export const ForLaterEmptyState = function ForLaterEmptyState(type) {
  type = type.type;
  const tmp = callback2();
  let obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer, children: null };
  obj = { style: tmp.container, children: null };
  obj = { source: importDefault(10110), style: tmp.image };
  const items = [callback(closure_4, obj), ];
  const obj1 = { style: tmp.textContainer, children: null };
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  if (type === require(9712) /* SavedMessageSortTypes */.SavedMessageSortTypes.REMINDER) {
    let erEf2g = tmp7(1236).t.AE4yja;
  } else {
    erEf2g = tmp7(1236).t.erEf2g;
  }
  obj2[3] = intl.string(erEf2g);
  const items1 = [callback(require(4251) /* Text */.Text, obj2), ];
  const obj3 = { variant: "text-sm/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = tmp7(1236).intl;
  if (type === require(9712) /* SavedMessageSortTypes */.SavedMessageSortTypes.REMINDER) {
    w1o_75 = tmp7(1236).t.iBFuNE;
  } else {
    w1o_75 = tmp7(1236).t["w1o+75"];
  }
  obj3[3] = intl2.string(w1o_75);
  items1[1] = callback(require(4251) /* Text */.Text, obj3);
  obj1[1] = items1;
  items[1] = closure_7(closure_3, obj1);
  obj[1] = items;
  obj[2] = closure_7(closure_3, obj);
  return callback(closure_5, obj);
};