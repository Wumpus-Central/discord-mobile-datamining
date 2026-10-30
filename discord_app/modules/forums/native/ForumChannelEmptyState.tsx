// === Module 14326: ForumChannelEmptyState ===

// Module 14326 (ForumChannelEmptyState)
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import shared from "shared" /* 5016 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import _modDef14327 from "module_14327" /* 14327 */;
import _modDef14328 from "module_14328" /* 14328 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let closure_6 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, image: { width: 120, height: 80 }, title: { textAlign: "center", marginTop: 16, marginHorizontal: 20 }, subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 20 } });
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
    let tmp4Result = _modDef14327;
  } else {
    tmp4Result = _modDef14328;
  }
  const items1 = [React4(tmp9, { source: tmp4Result, style: tmp.image }), , ];
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
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