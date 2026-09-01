// === Module 15792: SearchableDestinationListRow ===

// Module 15792 (SearchableDestinationListRow)
import noopAll from "noop" /* 19 */;
import sortByMatchScore from "sortByMatchScore" /* 9924 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/share/native/SearchableDestinationListRow.tsx");

export default function SearchableDestinationListRow(result) {
  result = result.result;
  require = result;
  const onPressDestination = result.onPressDestination;
  const merged = Object.assign(result, Object.create(null));
  ({ type, record } = result);
  if (type === sortByMatchScore.AutocompleterResultTypes.HEADER) {
    return null;
  } else {
    if (null != onPressDestination) {
      const fn = () => onPressDestination(result(closure_1_2[3]).getDestinationIdFromResult(closure_0));
    }
    if (tmp2(9924).AutocompleterResultTypes.USER === type) {
      let obj = {};
      const merged1 = Object.assign(merged);
      obj.user = record;
      let tmp2Result = tmp2(7406);
      obj.type = tmp2Result.getRelationshipType(record.id);
      obj.onPress = fn;
      return jsx(onPressDestination(10640), {});
    } else if (tmp2(9924).AutocompleterResultTypes.GROUP_DM === type) {
      obj = {};
      const merged2 = Object.assign(merged);
      obj.channel = record;
      obj.onPress = fn;
      return jsx(onPressDestination(10647), {});
    } else {
      if (tmp2(9924).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (tmp2(9924).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          tmp2Result = tmp2(1471);
          return tmp2Result.assertNever(type);
        }
      }
      obj1 = {};
      const merged3 = Object.assign(merged);
      obj1.channel = record;
      obj1.onPress = fn;
      return jsx(onPressDestination(10650), {});
    }
  }
};