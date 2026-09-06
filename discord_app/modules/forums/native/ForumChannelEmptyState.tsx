// discord_app/modules/forums/native/ForumChannelEmptyState.tsx
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import shared from "../../../design/shared.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _modDef12767 from "../../../../_runtime/metro/12767__.js";
import _modDef12768 from "../../../../_runtime/metro/12768__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
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
  let obj = { style: null, children: null };
  const items = [tmp.container, { marginBottom: rect.bottom + rect.top + num }];
  obj.style = items;
  let obj2 = shared;
  if (obj2.isThemeLight(obj.useThemeContext().theme)) {
    let tmp4Result = _modDef12767;
  } else {
    tmp4Result = _modDef12768;
  }
  obj = { source: tmp4Result, style: tmp.image };
  const items1 = [hasOwnProperty(React4, obj), ,];
  const obj1 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  if (tagFilter.size > 0) {
    obj2 = { numTags: tagFilter.size };
    let formatToPlainStringResult = intl.formatToPlainString(util.t.lvPci0, obj2);
  } else {
    formatToPlainStringResult = intl.string(util.t.PwTMG0);
  }
  obj1.children = formatToPlainStringResult;
  items1[1] = hasOwnProperty(Text_Text.Text, obj1);
  const obj3 = { style: tmp.subtext, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = util.t;
  if (tagFilter.size > 0) {
    const obj4 = { numTags: tagFilter.size };
    let formatToPlainStringResult1 = formatToPlainString(t.AAeye1, obj4);
  } else {
    const obj5 = { channelName: topViewHeight.channelName };
    formatToPlainStringResult1 = formatToPlainString(t.YtsXFD, obj5);
  }
  obj3.children = formatToPlainStringResult1;
  items1[2] = hasOwnProperty(Text_Text.Text, obj3);
  obj.children = items1;
  return timestampProducer(React3, obj);
});
