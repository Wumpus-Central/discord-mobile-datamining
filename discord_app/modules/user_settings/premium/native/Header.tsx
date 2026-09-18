// discord_app/modules/user_settings/premium/native/Header.tsx
import util from "../../../../intl/index.native.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef13672 from "../../../../../_runtime/metro/13672__.js";
import _modDef13673 from "../../../../../_runtime/metro/13673__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4722);
let closure_6 = createStyles.createStyles({
  container: { flexDirection: "column", alignItems: "center" },
  headerText: { marginTop: 16, marginBottom: 24 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/Header.tsx");

export default function Header(style) {
  const tmp = closure_6();
  const obj = { style: null, children: null };
  const items = [tmp.container, style.style];
  obj.style = items;
  const obj2 = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", source: null };
  const tmp4 = useThemeDefault();
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t.lpNrPu);
  const tmp8 = FastImageDefault;
  if (obj3.isThemeDark(tmp4)) {
    let tmp2Result = _modDef13672;
  } else {
    tmp2Result = _modDef13673;
  }
  obj2.source = tmp2Result;
  const items1 = [React4(tmp8, obj2)];
  const obj4 = {
    style: tmp.headerText,
    variant: "text-md/medium",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.SD5MJW);
  items1[1] = React4(Text_Text.Text, obj4);
  obj.children = items1;
  return hasOwnProperty(View, obj);
}
