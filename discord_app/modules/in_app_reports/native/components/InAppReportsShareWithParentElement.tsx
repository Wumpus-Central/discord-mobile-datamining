// === Module 13210: InAppReportsShareWithParentElement ===

// Module 13210 (InAppReportsShareWithParentElement)
import FamilyCenterActionCreators from "FamilyCenterActionCreators" /* 7784 */;
import InAppReportsUpsellsTableRowDefault from "InAppReportsUpsellsTableRow" /* 13209 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShareWithParentElement.tsx");

export default function _default(parents) {
  parents = parents.parents;
  const tmp = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp[1];
  [][0] = parents;
  if (0 === parents.length) {
    return null;
  } else {
    const intl3 = parents(1115).intl;
    let obj2 = { count: parents.length, parent1: parents[0].username, parent2: null, parent3: null };
    let username;
    if (parents[1] != null) {
      username = tmp17.username;
    }
    obj2.parent2 = username;
    let username1;
    if (parents[2] != null) {
      username1 = tmp4.username;
    }
    obj2.parent3 = username1;
    let obj = { title: intl3.formatToPlainString(parents(1115).t.HqyWeO, obj2), disabledTitle: null, icon: null, description: null, disabled: null, onPress: null };
    const formatToPlainStringResult = intl3.formatToPlainString(parents(1115).t.HqyWeO, obj2);
    let intl = tmp15(1115).intl;
    const obj3 = { count: parents.length, parent1: parents[0].username, parent2: null, parent3: null };
    let username2;
    if (parents[1] != null) {
      username2 = tmp10.username;
    }
    obj3.parent2 = username2;
    let username3;
    if (parents[2] != null) {
      username3 = tmp12.username;
    }
    obj3.parent3 = username3;
    obj.disabledTitle = intl.formatToPlainString(parents(1115).t.BlAMme, obj3);
    obj.icon = jsx(parents(13211).ShareIcon, {});
    const intl2 = tmp15(1115).intl;
    obj.description = intl2.string(parents(1115).t["5l/hlt"]);
    obj.disabled = tmp[0];
    obj.onPress = tmp2;
    return jsx(InAppReportsUpsellsTableRowDefault, { title: intl3.formatToPlainString(parents(1115).t.HqyWeO, obj2), disabledTitle: null, icon: null, description: null, disabled: null, onPress: null });
  }
};