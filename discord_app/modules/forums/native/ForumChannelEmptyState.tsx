// discord_app/modules/forums/native/ForumChannelEmptyState.tsx
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import shared from "../../../design/shared.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _modDef13115 from "../../../../_runtime/metro/13115__.js";
import _modDef13116 from "../../../../_runtime/metro/13116__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let closure_7 = createStyles.createStyles({
  container: { flex: 1, alignSelf: "stretch", justifyContent: "center", alignItems: "center" },
  image: { width: 120, height: 80 },
  title: { textAlign: "center", marginTop: 16, marginHorizontal: 20 },
  subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 20 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumChannelEmptyState.tsx");

export default noop.memo((topViewHeight) => {
  let num = topViewHeight.topViewHeight;
  if (num === undefined) {
    num = 0;
  }
  const tagFilter = topViewHeight.tagFilter;
  const tmp = closure_7();
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: null, children: null };
  const items = [tmp.container, { marginBottom: rect.bottom + rect.top + num }];
  obj2.style = items;
  const obj = shared;
  if (obj3.isThemeLight(obj.useThemeContext().theme)) {
    let tmp4Result = _modDef13115;
  } else {
    tmp4Result = _modDef13116;
  }
  const items1 = [hasOwnProperty(React4, { source: tmp4Result, style: tmp.image }), ,];
  const obj5 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  if (tagFilter.size > 0) {
    const obj6 = { numTags: tagFilter.size };
    let formatToPlainStringResult = intl.formatToPlainString(util.t.lvPci0, obj6);
  } else {
    formatToPlainStringResult = intl.string(util.t.PwTMG0);
  }
  obj5.children = formatToPlainStringResult;
  items1[1] = hasOwnProperty(Text_Text.Text, obj5);
  const obj7 = { style: tmp.subtext, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = util.t;
  if (tagFilter.size > 0) {
    const obj8 = { numTags: tagFilter.size };
    let formatToPlainStringResult1 = formatToPlainString(t.AAeye1, obj8);
  } else {
    const obj9 = { channelName: topViewHeight.channelName };
    formatToPlainStringResult1 = formatToPlainString(t.YtsXFD, obj9);
  }
  obj7.children = formatToPlainStringResult1;
  items1[2] = hasOwnProperty(Text_Text.Text, obj7);
  obj2.children = items1;
  return timestampProducer(React3, obj2);
});
