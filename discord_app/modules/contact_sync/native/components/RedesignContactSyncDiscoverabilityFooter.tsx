// discord_app/modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting(
  "modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx",
);

export default function RedesignContactSyncDiscoverabilityFooter(arg0) {
  ({ discoverabilityEnabled, onValueChanged } = arg0);
  const obj = { hasIcons: false, helperText: null, children: null };
  const intl = util.intl;
  const obj2 = { helpdeskUrl: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.CONTACT_SYNC) };
  obj.helperText = intl.format(util.t.zopgpe, obj2);
  const obj4 = { label: null, onValueChange: null, value: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(util.t.a5QL24);
  obj4.onValueChange = onValueChanged;
  obj4.value = discoverabilityEnabled;
  obj.children = jsx(TableSwitchRow.TableSwitchRow, { label: null, onValueChange: null, value: null });
  return jsx(TableRowGroup.TableRowGroup, { hasIcons: false, helperText: null, children: null });
}
