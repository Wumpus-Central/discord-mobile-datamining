// discord_app/modules/guild_scheduled_events/native/components/GuildEventsListView.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildEventsNoContentDefault from "GuildEventsNoContent.tsx";
import GuildEventCardDefault from "GuildEventCard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
    obj.children = jsx(tmp(tmp2[6]), { onClose: onCloseAction, guild });
    return jsx(guild(tmp2[5]).BottomSheetView, { onClose: onCloseAction, guild });
  } else {
    if (lastAckedId.inActionSheet) {
      let BottomSheetFlatList = guild(tmp2[5]).BottomSheetFlatList;
    } else {
      BottomSheetFlatList = closure_4;
    }
    obj = {
      data: events,
      style: null,
      keyExtractor: null,
      renderItem: null,
      ItemSeparatorComponent: null,
      initialNumToRender: 5,
      ListEmptyComponent: null,
      contentContainerStyle: null,
    };
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
    const obj1 = { paddingBottom: tmp(tmp2[3]).space.PX_16 + tmp3 };
    obj.contentContainerStyle = obj1;
    return (
      <BottomSheetFlatList
        data={events}
        style={null}
        keyExtractor={null}
        renderItem={null}
        ItemSeparatorComponent={null}
        initialNumToRender={5}
        ListEmptyComponent={null}
        contentContainerStyle={null}
      />
    );
  }
}
export { styles };
