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
  let obj = { hasIcons: false, helperText: null, children: null };
  const intl = util.intl;
  obj = { helpdeskUrl: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.CONTACT_SYNC) };
  obj.helperText = intl.format(util.t.zopgpe, obj);
  obj = { label: null, onValueChange: null, value: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t.a5QL24);
  obj.onValueChange = onValueChanged;
  obj.value = discoverabilityEnabled;
  obj.children = jsx(TableSwitchRow.TableSwitchRow, { label: null, onValueChange: null, value: null });
  return jsx(TableRowGroup.TableRowGroup, { label: null, onValueChange: null, value: null });
}
