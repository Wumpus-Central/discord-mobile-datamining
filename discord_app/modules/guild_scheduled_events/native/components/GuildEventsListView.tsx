// === Module 9806: GuildEventsListView ===

// Module 9806 (GuildEventsListView)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import GuildEventsNoContentDefault from "GuildEventsNoContent" /* 9807 */;
import GuildEventCardDefault from "GuildEventCard" /* 9808 */;
import noop from "module_19" /* 19 */;

const require = fn;
function FormSeparator() {
  obj = { style: obj.spacer };
  return <React3 style={obj.spacer} />;
}
get_ActivityIndicator = fn(17);
({ View: c3, FlatList: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let styles = { spacer: null, container: null };
let size = { height: nativeDefault.space.PX_16, width: "100%" };
styles.spacer = size;
styles = { paddingHorizontal: nativeDefault.space.PX_16 };
styles.container = styles;
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListView.tsx");

export default function GuildEventsListView(lastAckedId) {
  ({ events, guild } = lastAckedId);
  ({ onPressEvent: importDefault, onCloseAction } = lastAckedId);
  lastAckedId = lastAckedId.lastAckedId;
  if (0 === events.length) {
    obj = { children: null };
    obj = { onClose: onCloseAction, guild };
    obj.children = jsx(require("GuildEventsNoContent"), { onClose: onCloseAction, guild });
    return jsx(guild(onCloseAction[5]).BottomSheetView, { onClose: onCloseAction, guild });
  } else {
    if (lastAckedId.inActionSheet) {
      let BottomSheetFlatList = guild(onCloseAction[5]).BottomSheetFlatList;
    } else {
      BottomSheetFlatList = closure_4;
    }
    obj = { data: events, style: null, keyExtractor: null, renderItem: null, ItemSeparatorComponent: null, initialNumToRender: 5, ListEmptyComponent: null, contentContainerStyle: null };
    obj.style = obj.container;
    obj.keyExtractor = function keyExtractor(id) {
      return id.id;
    };
    obj.renderItem = function renderItem(item) {
      item = item.item;
      obj = { event: item, onCloseAction, onPress, isNew: null };
      let tmp6 = null != lastAckedId;
      if (tmp6) {
        tmp6 = SnowflakeUtilsDefault.compare(item.id, tmp5) > 0;
        const tmp2Result = SnowflakeUtilsDefault;
      }
      obj.isNew = tmp6;
      return jsx(GuildEventCardDefault, { event: item, onCloseAction, onPress, isNew: null });
    };
    obj.ItemSeparatorComponent = FormSeparator;
    obj.ListEmptyComponent = function ListEmptyComponent() {
      return jsx(GuildEventsNoContentDefault, { onClose: onCloseAction, guild });
    };
    const obj1 = { paddingBottom: require("native").space.PX_16 + tmp3 };
    obj.contentContainerStyle = obj1;
    return <BottomSheetFlatList data={events} style={null} keyExtractor={null} renderItem={null} ItemSeparatorComponent={null} initialNumToRender={5} ListEmptyComponent={null} contentContainerStyle={null} />;
  }
};
export { styles };