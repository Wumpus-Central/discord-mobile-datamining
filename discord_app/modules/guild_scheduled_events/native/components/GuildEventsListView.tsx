// discord_app/modules/guild_scheduled_events/native/components/GuildEventsListView.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function FormSeparator() {
  obj = { style: obj.spacer };
  return <closure_3 style={obj.spacer} />;
}
noopAll;
({ View: c3, FlatList: c4 } = get_ActivityIndicator);
let obj = { spacer: null, container: null };
obj = { height: ThemesDefault.space.PX_16, width: "100%" };
obj[0] = obj;
obj = { paddingHorizontal: ThemesDefault.space.PX_16 };
obj[1] = obj;
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListView.tsx");

export default function GuildEventsListView(lastAckedId) {
  ({ events, guild } = lastAckedId);
  ({ onPressEvent: importDefault, onCloseAction } = lastAckedId);
  lastAckedId = lastAckedId.lastAckedId;
  if (0 === events.length) {
    obj = { children: null };
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
      obj = { event: item, onCloseAction, onPress: closure_1, isNew: null };
      let tmp6 = null != lastAckedId;
      if (tmp6) {
        tmp6 = closure_1_1(onCloseAction[8]).compare(item.id, tmp5) > 0;
        const tmp2Result = closure_1_1(onCloseAction[8]);
      }
      obj[3] = tmp6;
      return closure_1_5(closure_1_1(onCloseAction[7]), obj);
    };
    obj[4] = FormSeparator;
    obj[6] = function ListEmptyComponent() {
      return closure_1_5(closure_1_1(onCloseAction[6]), { onClose: onCloseAction, guild });
    };
    obj1 = { paddingBottom: null };
    obj1[0] = tmp(tmp2[3]).space.PX_16 + tmp3;
    obj[7] = obj1;
    return <BottomSheetFlatList data={null} style={null} keyExtractor={null} renderItem={null} ItemSeparatorComponent={null} initialNumToRender={5} ListEmptyComponent={null} contentContainerStyle={null} />;
  }
};
export const styles = obj;