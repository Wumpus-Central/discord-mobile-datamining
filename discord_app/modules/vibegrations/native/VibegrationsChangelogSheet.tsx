// discord_app/modules/vibegrations/native/VibegrationsChangelogSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef3714 from "../intl/VibegrationsUntranslated.messages.js";
import _modDef4416 from "../../../../_runtime/metro/04416__.js";
import DateUtils from "../../../utils/DateUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
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
  obj3.title = intl.string(_modDef3714.x07mpp);
  obj2.header = closure_4(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj3);
  const obj4 = { contentContainerStyle: null, scrollIndicatorInsets: null, children: null };
  let items = [tmp.entries];
  let obj = require("VibegrationsChangelog");
  items[1] = { paddingBottom: nativeDefault.space.PX_16 + bottom };
  obj4.contentContainerStyle = items;
  obj4.scrollIndicatorInsets = { bottom };
  obj4.children = result.map((children) => {
    const obj = { style: entry.entry, children: null };
    const items = [DateUtils.dateFormat(_modDef4416(children.date, "YYYY-MM-DD"), "LL")];
    let combined = null;
    if (obj3.isVibegrationsChangelogEntryExclusive(children)) {
      const intl = util.intl;
      const _HermesInternal = HermesInternal;
      combined = " \u00B7 " + intl.string(_modDef3714["CLX+p/"]);
    }
    items[1] = combined;
    const items1 = [
      hasOwnProperty(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: items }),
      React4(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: children.summary }),
    ];
    obj.children = items1;
    return hasOwnProperty(View, obj, "" + children.date + "-" + children.summary);
  });
  obj2.children = closure_4(require("BottomSheetModal").BottomSheetScrollView, obj4);
  return closure_4(require("ActionSheet").ActionSheet, obj2);
}
export const VIBEGRATIONS_CHANGELOG_SHEET_KEY = "VibegrationsChangelogSheet";
