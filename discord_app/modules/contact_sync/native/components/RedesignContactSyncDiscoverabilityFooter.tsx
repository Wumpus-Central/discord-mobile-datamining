// discord_app/modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import TableRowGroup2 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableSwitchRow2 from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
      const tmp11 = (
        <TableRowGroup hasIcons={false} helperText={first}>
          {null}
        </TableRowGroup>
      );
      cResult[2] = discoverabilityEnabled;
      cResult[3] = onValueChanged;
      cResult[4] = tmp11;
      tmp10 = tmp11;
    }
  : (arg0) => {
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
      return (
        <TableRowGroup hasIcons={false} helperText={format(zopgpe, obj2)}>
          {null}
        </TableRowGroup>
      );
    };
const result = size.fileFinishedImporting(
  "modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx",
);

export default tmp2;
