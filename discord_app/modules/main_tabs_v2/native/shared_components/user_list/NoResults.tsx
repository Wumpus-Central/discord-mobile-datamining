// === Module 10994: NoResults ===

// Module 10994 (NoResults)
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ headerContainer: { paddingHorizontal: 16 }, container: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16, paddingBottom: 16, paddingTop: 32 }, image: { marginBottom: 12 }, textContainer: { justifyContent: "center", alignItems: "center" }, text: { textAlign: "center", marginTop: 4 }, fullHeightContentContainer: { paddingBottom: 0, paddingTop: 0 }, fullHeightScrollContent: { flexGrow: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx");

export default function NoResults(illustration) {
  ({ subtitle, fullHeight } = illustration);
  ({ title, children, containerStyle } = illustration);
  if (fullHeight === undefined) {
    fullHeight = false;
  }
  illustration = illustration.illustration;
  const tmp = closure_6();
  let obj = { style: null, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
  const items = [tmp.headerContainer];
  obj.style = items;
  let fullHeightScrollContent = fullHeight;
  if (fullHeight) {
    fullHeightScrollContent = tmp.fullHeightScrollContent;
  }
  obj.contentContainerStyle = fullHeightScrollContent;
  const items1 = [tmp.container, , ];
  if (fullHeight) {
    fullHeight = tmp.fullHeightContentContainer;
  }
  obj = { style: items1, children: null };
  items1[1] = fullHeight;
  items1[2] = containerStyle;
  let tmp5 = null != illustration;
  if (tmp5) {
    obj = { style: tmp.image, children: React4(illustration, {}) };
    tmp5 = React4(React2, obj);
  }
  const items2 = [tmp5, ];
  const obj1 = { style: tmp.textContainer, children: null };
  const items3 = [React4(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.text, children: title }), ];
  let tmp7Result = null;
  if (null != subtitle) {
    const obj3 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp.text, children: subtitle };
    tmp7Result = React4(Text_Text.Text, obj3);
  }
  items3[1] = tmp7Result;
  obj1.children = items3;
  items2[1] = hasOwnProperty(React2, obj1);
  obj.children = items2;
  const items4 = [hasOwnProperty(React2, obj), children];
  obj.children = items4;
  return hasOwnProperty(React3, obj);
};