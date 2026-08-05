// discord_app/modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx
import { HelpdeskArticles } from "ME";
import { jsx } from "jsxProd";
import { TableRowGroupTitle } from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { TableSwitchRow } from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { combined } from "../../../../utils/HelpdeskUtils.tsx";

const result = require("TableRowGroupTitle").fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx");

export default function RedesignContactSyncDiscoverabilityFooter(arg0) {
  let discoverabilityEnabled;
  let onValueChanged;
  ({ discoverabilityEnabled, onValueChanged } = arg0);
  let obj = { hasIcons: false, helperText: null, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj = { helpdeskUrl: null };
  obj[0] = combined.getArticleURL(HelpdeskArticles.CONTACT_SYNC);
  obj[1] = intl.format(getSystemLocale /* getSystemLocale */.t.zopgpe, obj);
  obj = { label: null, onValueChange: null, value: null };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl2.string(getSystemLocale /* getSystemLocale */.t.a5QL24);
  obj[1] = onValueChanged;
  obj[2] = discoverabilityEnabled;
  obj[2] = jsx(TableSwitchRow /* TableSwitchRow */.TableSwitchRow, { label: null, onValueChange: null, value: null });
  return jsx(TableRowGroupTitle /* TableRowGroupTitle */.TableRowGroup, { label: null, onValueChange: null, value: null });
};