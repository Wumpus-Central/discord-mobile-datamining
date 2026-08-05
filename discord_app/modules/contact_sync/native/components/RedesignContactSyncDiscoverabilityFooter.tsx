// discord_app/modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx
import { HelpdeskArticles } from "ME";
import { jsx } from "jsxProd";

const result = require("TableRowGroupTitle").fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx");

export default function RedesignContactSyncDiscoverabilityFooter(arg0) {
  let discoverabilityEnabled;
  let onValueChanged;
  ({ discoverabilityEnabled, onValueChanged } = arg0);
  let obj = { hasIcons: false, helperText: null, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { helpdeskUrl: null };
  obj[0] = importDefault(1945).getArticleURL(HelpdeskArticles.CONTACT_SYNC);
  obj[1] = intl.format(require(1236) /* getSystemLocale */.t.zopgpe, obj);
  obj = { label: null, onValueChange: null, value: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl2.string(require(1236) /* getSystemLocale */.t.a5QL24);
  obj[1] = onValueChanged;
  obj[2] = discoverabilityEnabled;
  obj[2] = jsx(require(5650) /* TableSwitchRow */.TableSwitchRow, { label: null, onValueChange: null, value: null });
  return jsx(require(5649) /* TableRowGroupTitle */.TableRowGroup, { label: null, onValueChange: null, value: null });
};