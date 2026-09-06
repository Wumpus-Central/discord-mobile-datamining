// === Module 16203: SearchableDestinationListRow ===

// Module 16203 (SearchableDestinationListRow)
import sortByMatchScore from "sortByMatchScore" /* 9835 */;
import formatResults from "formatResults" /* 10981 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListRow.tsx");

export default function SearchableDestinationListRow(result) {
  result = result.result;
  require = result;
  const onPressDestination = result.onPressDestination;
  const merged = Object.assign(result, Object.assign({ result: 0, onPressDestination: 0 }));
  ({ type, record } = result);
  if (type === sortByMatchScore.AutocompleterResultTypes.HEADER) {
    return null;
  } else {
    if (null != onPressDestination) {
      const fn = () => onPressDestination(formatResults.getDestinationIdFromResult(result));
    }
    if (tmp2(9835).AutocompleterResultTypes.USER === type) {
      let obj = {};
      const merged1 = Object.assign(merged);
      obj.user = record;
      let tmp2Result = tmp2(7661);
      obj.type = tmp2Result.getRelationshipType(record.id);
      obj.onPress = fn;
      return jsx(onPressDestination(10868), {});
    } else if (tmp2(9835).AutocompleterResultTypes.GROUP_DM === type) {
      obj = {};
      const merged2 = Object.assign(merged);
      obj.channel = record;
      obj.onPress = fn;
      return jsx(onPressDestination(10909), {});
    } else {
      if (tmp2(9835).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (tmp2(9835).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          tmp2Result = tmp2(1369);
          return tmp2Result.assertNever(type);
        }
      }
      const obj1 = {};
      const merged3 = Object.assign(merged);
      obj1.channel = record;
      obj1.onPress = fn;
      return jsx(onPressDestination(10912), {});
    }
  }
};