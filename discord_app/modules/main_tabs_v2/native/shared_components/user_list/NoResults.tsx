// === Module 10651: NoResults ===

// Module 10651 (NoResults)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4441 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
({ View: obj1, ScrollView: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ headerContainer: { paddingHorizontal: 16 }, container: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16, paddingBottom: 16, paddingTop: 32 }, image: { marginBottom: 12 }, textContainer: { justifyContent: "center", alignItems: "center" }, text: { textAlign: "center", marginTop: 4 }, fullHeightContentContainer: { paddingBottom: 0, paddingTop: 0 }, fullHeightScrollContent: { flexGrow: 1 } });
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx");

export default function NoResults(illustration) {
  ({ subtitle, fullHeight } = illustration);
  ({ title, children, containerStyle } = illustration);
  if (fullHeight === undefined) {
    fullHeight = false;
  }
  illustration = illustration.illustration;
  const tmp = callback2();
  let obj = { style: items, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
  items = [tmp.headerContainer];
  let fullHeightScrollContent = fullHeight;
  if (fullHeight) {
    fullHeightScrollContent = tmp.fullHeightScrollContent;
  }
  obj[2] = fullHeightScrollContent;
  const items1 = [tmp.container, , ];
  if (fullHeight) {
    fullHeight = tmp.fullHeightContentContainer;
  }
  obj = { style: items1, children: null };
  items1[1] = fullHeight;
  items1[2] = containerStyle;
  let tmp5 = null != illustration;
  if (tmp5) {
    obj = { style: null, children: null };
    obj[0] = tmp.image;
    obj[1] = callback(illustration, {});
    tmp5 = callback(tmp4, obj);
  }
  const items2 = [tmp5, ];
  obj1 = { style: tmp.textContainer, children: null };
  const items3 = [callback(Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.text, children: title }), ];
  let tmp7Result = null;
  if (null != subtitle) {
    const obj3 = { variant: "text-xs/medium", color: "interactive-text-default", style: null, children: null };
    obj3[2] = tmp.text;
    obj3[3] = subtitle;
    tmp7Result = callback(Text.Text, obj3);
  }
  items3[1] = tmp7Result;
  obj1[1] = items3;
  items2[1] = closure_5(closure_2, obj1);
  obj[1] = items2;
  const items4 = [closure_5(closure_2, obj), children];
  obj[3] = items4;
  return closure_5(closure_3, obj);
};