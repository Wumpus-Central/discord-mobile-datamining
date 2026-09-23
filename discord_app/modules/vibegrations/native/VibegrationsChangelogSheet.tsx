// === Module 17025: VibegrationsChangelogSheet ===

// Module 17025 (VibegrationsChangelogSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import _modDef3712 from "module_3712" /* 3712 */;
import _modDef4414 from "module_4414" /* 4414 */;
import DateUtils from "DateUtils" /* 4505 */;
import Text_Text from "Text/Text" /* 4823 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4827);
let obj2 = { entries: { gap: nativeDefault.space.PX_12 }, entry: null };
let obj3 = { gap: nativeDefault.space.PX_12 };
obj2.entry = { gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsChangelogSheet.tsx");

export default function VibegrationsChangelogSheet() {
  const tmp = closure_6();
  _require = tmp;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const result = require("VibegrationsChangelog").allVibegrationsChangelog("mobile");
  let obj2 = { scrollable: true, header: null, children: null };
  const obj3 = { title: null };
  let intl = require("util").intl;
  obj3.title = intl.string(_modDef3712.x07mpp);
  obj2.header = closure_4(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj3);
  const obj4 = { contentContainerStyle: null, scrollIndicatorInsets: null, children: null };
  let items = [tmp.entries, ];
  let obj = require("VibegrationsChangelog");
  items[1] = { paddingBottom: nativeDefault.space.PX_16 + bottom };
  obj4.contentContainerStyle = items;
  obj4.scrollIndicatorInsets = { bottom };
  obj4.children = result.map((children) => {
    const obj = { style: entry.entry, children: null };
    const items = [DateUtils.dateFormat(_modDef4414(children.date, "YYYY-MM-DD"), "LL"), ];
    let combined = null;
    if (obj3.isVibegrationsChangelogEntryExclusive(children)) {
      const intl = util.intl;
      const _HermesInternal = HermesInternal;
      combined = " \u00B7 " + intl.string(_modDef3712["CLX+p/"]);
    }
    items[1] = combined;
    const items1 = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: items }), React4(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: children.summary })];
    obj.children = items1;
    return hasOwnProperty(View, obj, "" + children.date + "-" + children.summary);
  });
  obj2.children = closure_4(require("BottomSheetModal").BottomSheetScrollView, obj4);
  return closure_4(require("ActionSheet").ActionSheet, obj2);
};
export const VIBEGRATIONS_CHANGELOG_SHEET_KEY = "VibegrationsChangelogSheet";