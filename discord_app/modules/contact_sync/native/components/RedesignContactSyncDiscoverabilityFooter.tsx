// === Module 12350: RedesignContactSyncDiscoverabilityFooter ===

// Module 12350 (RedesignContactSyncDiscoverabilityFooter)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import TableRowGroup2 from "TableRowGroup" /* 6081 */;
import TableSwitchRow2 from "TableSwitchRow" /* 6705 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let discoverabilityEnabled;
  let first;
  let obj3;
  let onValueChanged;
  const obj = react;
  const cResult = obj.c(5);
  ({ discoverabilityEnabled, onValueChanged } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const format = intl.format;
    const obj2 = { helpdeskUrl: obj3.getArticleURL(HelpdeskArticles.CONTACT_SYNC) };
    const zopgpe = intl3.t.zopgpe;
    obj3 = HelpdeskUtilsDefault;
    const formatResult = format(zopgpe, obj2);
    cResult[0] = formatResult;
    first = formatResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl3.intl;
    const stringResult = intl2.string(intl3.t.a5QL24);
    cResult[1] = stringResult;
  }
  if (cResult[2] === discoverabilityEnabled) {
    let tmp10;
    if (cResult[3] === onValueChanged) {
      tmp10 = cResult[4];
    }
    return tmp10;
  }
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  const tmp11 = <TableRowGroup hasIcons={false} helperText={first}>{null}</TableRowGroup>;
  cResult[2] = discoverabilityEnabled;
  cResult[3] = onValueChanged;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : ((arg0) => {
  let discoverabilityEnabled;
  let intl2;
  let obj3;
  let onValueChanged;
  ({ discoverabilityEnabled, onValueChanged } = arg0);
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  const intl = intl3.intl;
  const format = intl.format;
  const obj2 = { helpdeskUrl: obj3.getArticleURL(HelpdeskArticles.CONTACT_SYNC) };
  const zopgpe = intl3.t.zopgpe;
  obj3 = HelpdeskUtilsDefault;
  ({ label: intl2.string(intl3.t.a5QL24), onValueChange: onValueChanged, value: discoverabilityEnabled });
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  intl2 = intl3.intl;
  return <TableRowGroup hasIcons={false} helperText={format(zopgpe, obj2)}>{null}</TableRowGroup>;
});
const result = size.fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx");

export default tmp2;