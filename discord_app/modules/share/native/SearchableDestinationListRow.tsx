// discord_app/modules/share/native/SearchableDestinationListRow.tsx
import sortByMatchScore from "../../autocompleter/index.tsx";
import formatResults from "../formatResults.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
    if (tmp2(10182).AutocompleterResultTypes.USER === type) {
      const obj = {};
      const merged1 = Object.assign(merged);
      obj.user = record;
      const tmp18 = onPressDestination(11218);
      obj.type = tmp2(7984).getRelationshipType(record.id);
      obj.onPress = fn;
      return <tmp18 />;
    } else if (tmp2(10182).AutocompleterResultTypes.GROUP_DM === type) {
      const obj2 = {};
      const merged2 = Object.assign(merged);
      obj2.channel = record;
      obj2.onPress = fn;
      return jsx(onPressDestination(11261), {});
    } else {
      if (tmp2(10182).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (tmp2(10182).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          return tmp2(1370).assertNever(type);
        }
      }
      const obj3 = {};
      const merged3 = Object.assign(merged);
      obj3.channel = record;
      obj3.onPress = fn;
      return jsx(onPressDestination(11264), {});
    }
  }
}
