// === Module 12448: RedesignContactSyncDiscoverabilityFooter ===

// Module 12448 (RedesignContactSyncDiscoverabilityFooter)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import combinedDefault from "combined" /* 1994 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6000 */;
import TableSwitchRow from "TableSwitchRow" /* 6001 */;

const HelpdeskArticles = ME.HelpdeskArticles;
const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx");

export default function RedesignContactSyncDiscoverabilityFooter(arg0) {
  ({ discoverabilityEnabled, onValueChanged } = arg0);
  let obj = { hasIcons: false, helperText: null, children: null };
  const intl = getSystemLocale.intl;
  obj = { helpdeskUrl: combinedDefault.getArticleURL(HelpdeskArticles.CONTACT_SYNC) };
  obj[1] = intl.format(getSystemLocale.t.zopgpe, obj);
  obj = { label: null, onValueChange: null, value: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t.a5QL24);
  obj[1] = onValueChanged;
  obj[2] = discoverabilityEnabled;
  obj[2] = jsx(TableSwitchRow.TableSwitchRow, { label: null, onValueChange: null, value: null });
  return jsx(TableRowGroupTitle.TableRowGroup, { label: null, onValueChange: null, value: null });
};