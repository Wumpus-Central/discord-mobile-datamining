// === Module 11859: RedesignContactSyncDiscoverabilityFooter ===

// Module 11859 (RedesignContactSyncDiscoverabilityFooter)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1993 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import TableSwitchRow from "TableSwitchRow" /* 7178 */;

const HelpdeskArticles = ME.HelpdeskArticles;
const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx");

export default function RedesignContactSyncDiscoverabilityFooter(arg0) {
  ({ discoverabilityEnabled, onValueChanged } = arg0);
  const intl = getSystemLocale.intl;
  let obj = { helpdeskUrl: combinedDefault.getArticleURL(HelpdeskArticles.CONTACT_SYNC) };
  obj[1] = intl.format(getSystemLocale.t.zopgpe, obj);
  obj = { label: null, onValueChange: null, value: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t.a5QL24);
  obj[1] = onValueChanged;
  obj[2] = discoverabilityEnabled;
  obj[2] = jsx(TableSwitchRow.TableSwitchRow, { label: null, onValueChange: null, value: null });
  return jsx(TableRowGroupTitle.TableRowGroup, { label: null, onValueChange: null, value: null });
};