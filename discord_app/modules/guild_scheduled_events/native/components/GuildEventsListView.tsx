// === Module 8328: FormSeparator ===

// Module 8328 (FormSeparator)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let c3;
let c4;
const require = arg1;
function FormSeparator() {
  obj = { style: obj.spacer };
  return <closure_3 style={obj.spacer} />;
}
({ View: c3, FlatList: c4 } = get_ActivityIndicator);
let obj = { spacer: null, container: null };
obj = { height: require("Themes").space.PX_16, width: "100%" };
obj[0] = obj;
obj = { paddingHorizontal: require("Themes").space.PX_16 };
obj[1] = obj;
const result = require("jsxProd").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListView.tsx");

export default function GuildEventsListView(lastAckedId) {
  let events;
  let guild;
  let importDefault;
  let onCloseAction;
  ({ events, guild } = lastAckedId);
  ({ onPressEvent: importDefault, onCloseAction } = lastAckedId);
  lastAckedId = lastAckedId.lastAckedId;
  if (0 === events.length) {
    let obj = { children: null };
    obj = { onClose: null, guild: null };
    obj[0] = onCloseAction;
    obj[1] = guild;
    obj[0] = jsx(tmp(tmp2[6]), { onClose: null, guild: null });
    return jsx(guild(tmp2[5]).BottomSheetView, { onClose: null, guild: null });
  } else {
    if (lastAckedId.inActionSheet) {
      let BottomSheetFlatList = guild(tmp2[5]).BottomSheetFlatList;
    } else {
      BottomSheetFlatList = closure_4;
    }
    obj = { data: null, style: null, keyExtractor: null, renderItem: null, ItemSeparatorComponent: null, initialNumToRender: 5, ListEmptyComponent: null, contentContainerStyle: null };
    obj[0] = events;
    obj[1] = obj.container;
    obj[2] = function keyExtractor(id) {
      return id.id;
    };
    obj[3] = function renderItem(item) {
      item = item.item;
      const obj = { event: item, onCloseAction, onPress: closure_1, isNew: null };
      let tmp6 = null != lastAckedId;
      if (tmp6) {
        tmp6 = outer1_1(onCloseAction[8]).compare(item.id, tmp5) > 0;
        const tmp2Result = outer1_1(onCloseAction[8]);
      }
      obj[3] = tmp6;
      return outer1_5(outer1_1(onCloseAction[7]), obj);
    };
    obj[4] = FormSeparator;
    obj[6] = function ListEmptyComponent() {
      return outer1_5(outer1_1(onCloseAction[6]), { onClose: onCloseAction, guild });
    };
    const obj1 = { paddingBottom: null };
    obj1[0] = tmp(tmp2[3]).space.PX_16 + tmp3;
    obj[7] = obj1;
    return <BottomSheetFlatList data={null} style={null} keyExtractor={null} renderItem={null} ItemSeparatorComponent={null} initialNumToRender={5} ListEmptyComponent={null} contentContainerStyle={null} />;
  }
};
export const styles = obj;