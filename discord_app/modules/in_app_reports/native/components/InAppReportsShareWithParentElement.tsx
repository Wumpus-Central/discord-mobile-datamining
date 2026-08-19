// discord_app/modules/in_app_reports/native/components/InAppReportsShareWithParentElement.tsx
import InAppReportsUpsellsTableRowDefault from "InAppReportsUpsellsTableRow.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShareWithParentElement.tsx");

export default function _default(parents) {
  parents = parents.parents;
  const tmp = callback(React.useState(false), 2);
  importDefault = tmp[1];
  [][0] = parents;
  if (0 === parents.length) {
    return null;
  } else {
    const intl3 = parents(1236).intl;
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
    obj[0] = intl3.formatToPlainString(parents(1236).t.HqyWeO, obj);
    const formatToPlainStringResult = intl3.formatToPlainString(parents(1236).t.HqyWeO, obj);
    let intl = tmp15(1236).intl;
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
    obj[1] = intl.formatToPlainString(parents(1236).t.BlAMme, obj);
    obj[2] = jsx(parents(12047).ShareIcon, {});
    const intl2 = tmp15(1236).intl;
    obj[3] = intl2.string(parents(1236).t["5l/hlt"]);
    obj[4] = tmp[0];
    obj[5] = tmp2;
    return jsx(InAppReportsUpsellsTableRowDefault, { count: null, parent1: null, parent2: null, parent3: null });
  }
};