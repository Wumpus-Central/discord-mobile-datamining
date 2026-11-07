// === Module 18959: UnavailableNotice ===

// Module 18959 (UnavailableNotice)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5751 */;
import FastImageDefault from "FastImage" /* 5842 */;
import _modDef18626 from "module_18626" /* 18626 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5140);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, brightTitle: null, unavailableContainer: null, unavailableInfo: null, unavailableDescription: null, joinCtaTitle: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.brightTitle = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.unavailableContainer = { justifyContent: "center" };
obj2.unavailableInfo = { alignItems: "center", justifyContent: "center" };
obj2.unavailableDescription = { marginTop: 8, marginHorizontal: 16, textAlign: "center" };
obj2.joinCtaTitle = { alignSelf: "center", marginTop: 16, paddingHorizontal: 24, textAlign: "center" };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/UnavailableNotice.tsx");

export default function UnavailableNotice(brightTitle) {
  brightTitle = brightTitle.brightTitle;
  ({ title, description } = brightTitle);
  const tmp = closure_6();
  const obj = { style: null, children: null };
  items = [, ];
  ({ container: arr[0], unavailableContainer: arr[1] } = tmp);
  obj.style = items;
  const obj2 = { style: tmp.unavailableInfo, children: null };
  const obj3 = { source: _modDef18626 };
  const items1 = [React4(FastImageDefault, obj3), , ];
  const items2 = [tmp.joinCtaTitle, ];
  if (brightTitle) {
    brightTitle = tmp.brightTitle;
  }
  items2[1] = brightTitle;
  items1[1] = React4(Text_Text.Text, { variant: "heading-lg/semibold", color: "text-default", style: items2, children: title });
  items1[2] = React4(Text_Text.Text, { style: tmp.unavailableDescription, variant: "body-sm/medium", color: "text-default", children: description });
  obj2.children = items1;
  obj.children = hasOwnProperty(View, obj2);
  return React4(View, obj);
};