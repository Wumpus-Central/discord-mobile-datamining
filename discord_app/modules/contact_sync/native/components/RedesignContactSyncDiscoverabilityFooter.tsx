// === Module 12686: RedesignContactSyncDiscoverabilityFooter ===

// Module 12686 (RedesignContactSyncDiscoverabilityFooter)
import jsxProd from "jsxProd" /* 21 */;
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import TableSwitchRow from "TableSwitchRow" /* 7201 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx");

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
};