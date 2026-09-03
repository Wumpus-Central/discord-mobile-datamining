// === Module 13011: parents ===

// Module 13011 (parents)
import InAppReportsUpsellsTableRowDefault from "InAppReportsUpsellsTableRow" /* 13010 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShareWithParentElement.tsx");

export default function _default(parents) {
  parents = parents.parents;
  importDefault = undefined;
  const tmp = callback(React.useState(false), 2);
  importDefault = tmp[1];
  [][0] = parents;
  if (0 === parents.length) {
    return null;
  } else {
    const intl3 = parents(1233).intl;
    let obj = { count: null, parent1: null, parent2: null, parent3: null };
    obj[0] = parents.length;
    obj[1] = parents[0].username;
    let username;
    if (parents[1] != null) {
      username = tmp17.username;
    }
    obj[2] = username;
    let username1;
    if (parents[2] != null) {
      username1 = tmp4.username;
    }
    obj[3] = username1;
    obj = { title: null, disabledTitle: null, icon: null, description: null, disabled: null, onPress: null };
    obj[0] = intl3.formatToPlainString(parents(1233).t.HqyWeO, obj);
    const formatToPlainStringResult = intl3.formatToPlainString(parents(1233).t.HqyWeO, obj);
    let intl = tmp15(1233).intl;
    obj = { count: null, parent1: null, parent2: null, parent3: null };
    obj[0] = parents.length;
    obj[1] = parents[0].username;
    let username2;
    if (parents[1] != null) {
      username2 = tmp10.username;
    }
    obj[2] = username2;
    let username3;
    if (parents[2] != null) {
      username3 = tmp12.username;
    }
    obj[3] = username3;
    obj[1] = intl.formatToPlainString(parents(1233).t.BlAMme, obj);
    obj[2] = jsx(parents(13012).ShareIcon, {});
    const intl2 = tmp15(1233).intl;
    obj[3] = intl2.string(parents(1233).t["5l/hlt"]);
    obj[4] = tmp[0];
    obj[5] = tmp2;
    return jsx(InAppReportsUpsellsTableRowDefault, { count: null, parent1: null, parent2: null, parent3: null });
  }
};