// discord_app/modules/forums/native/ForumChannelEmptyState.tsx
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import shared from "../../../design/shared.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef14365 from "../../../../_runtime/metro/14365__.js";
import _modDef14366 from "../../../../_runtime/metro/14366__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
let closure_6 = createStyles.createStyles({
  container: { flex: 1, alignSelf: "stretch", justifyContent: "center", alignItems: "center" },
  image: { width: 120, height: 80 },
  title: { textAlign: "center", marginTop: 16, marginHorizontal: 20 },
  subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 20 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumChannelEmptyState.tsx");

export default noop.memo(function ForumChannelEmptyState(topViewHeight) {
  let num = topViewHeight.topViewHeight;
  if (num === undefined) {
    num = 0;
  }
  const tagFilter = topViewHeight.tagFilter;
  const tmp = closure_6();
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: null, children: null };
  const items = [tmp.container, { marginBottom: rect.bottom + rect.top + num }];
  obj2.style = items;
  const obj = shared;
  const tmp9 = FastImageDefault;
  if (obj3.isThemeLight(obj.useThemeContext().theme)) {
    let tmp4Result = _modDef14365;
  } else {
    tmp4Result = _modDef14366;
  }
  const items1 = [React4(tmp9, { source: tmp4Result, style: tmp.image }), ,];
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
  items1[1] = React4(Text_Text.Text, obj5);
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
  items1[2] = React4(Text_Text.Text, obj7);
  obj2.children = items1;
  return hasOwnProperty(View, obj2);
});
