// discord_app/modules/billing/native/BlockedPaymentsCountryDisplay.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: { alignItems: "center" }, header: null, image: null };
createStyles = { fontSize: 20, fontWeight: "700", color: nativeDefault.colors.TEXT_SUBTLE, marginBottom: 16 };
createStyles.header = createStyles;
createStyles.image = { marginTop: 38 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default function BlockedPaymentsCountryDisplay() {
  const tmp = closure_8();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.vwMEHS);
  const items = [timestampProducer(native.LegacyText, obj), ,];
  obj = { children: null };
  const intl2 = util.intl;
  const obj1 = { helpdeskArticle: null };
  const tmp4 = useThemeDefault();
  const tmp5 = React5;
  const tmp6 = React3;
  const tmp7 = timestampProducer;
  obj1.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS);
  obj.children = intl2.format(util.t.IHxEJU, obj1);
  items[1] = timestampProducer(native.LegacyText, obj);
  const obj2 = { style: tmp.image, source: null };
  const tmp8 = React4;
  if (obj7.isThemeDark(tmp4)) {
    let tmp2Result = tmp2(11436);
  } else {
    tmp2Result = tmp2(11437);
  }
  obj2.source = tmp2Result;
  items[2] = tmp7(tmp8, obj2);
  obj.children = items;
  return tmp5(tmp6, obj);
}
