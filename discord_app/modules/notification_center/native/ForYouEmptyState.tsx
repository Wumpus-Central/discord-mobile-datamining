// discord_app/modules/notification_center/native/ForYouEmptyState.tsx
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import native from "../../../design/assets/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({
  image: { marginBottom: 16 },
  container: { paddingHorizontal: 48, alignItems: "center", justifyContent: "center" },
  headerText: { fontSize: 18, marginTop: 16, marginBottom: 8 },
  text: { textAlign: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouEmptyState.tsx");

export const ForYouEmptyState = function ForYouEmptyState(height) {
  const tmp = closure_5();
  let obj = { style: null, children: null };
  const items = [tmp.container, { height: height.height }];
  obj.style = items;
  obj = { style: tmp.image, children: React3(native.MailboxSpotIllustration, { scale: 0.75 }) };
  const items1 = [React3(View, obj), ,];
  obj = {
    accessibilityRole: "header",
    color: "mobile-text-heading-primary",
    variant: "heading-md/bold",
    style: null,
    children: null,
  };
  const items2 = [,];
  ({ text: arr3[0], headerText: arr3[1] } = tmp);
  obj.style = items2;
  const intl = util.intl;
  obj.children = intl.string(util.t.MwjTvn);
  items1[1] = React3(Text_Text.Text, obj);
  const obj1 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
  const intl2 = util.intl;
  obj1.children = intl2.string(util.t.AKBgPy);
  items1[2] = React3(Text_Text.Text, obj1);
  obj.children = items1;
  return React4(View, obj);
};
