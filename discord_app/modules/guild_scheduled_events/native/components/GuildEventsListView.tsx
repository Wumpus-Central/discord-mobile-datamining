// === Module 9061: GuildEventsListView ===

// Module 9061 (GuildEventsListView)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import GuildEventsNoContentDefault from "GuildEventsNoContent" /* 9062 */;
import GuildEventCardDefault from "GuildEventCard" /* 9063 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const styles = { spacer: null, container: null };
let size = { height: nativeDefault.space.PX_16, width: "100%" };
styles.spacer = size;
styles.container = { paddingHorizontal: nativeDefault.space.PX_16 };
let ReactCompilerGating = fn(558);
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function FormSeparator() {
  const obj = c;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: obj.spacer };
    const tmp6 = <View style={obj.spacer} />;
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function FormSeparator() {
  obj = { style: obj.spacer };
  return <View style={obj.spacer} />;
});
ReactCompilerGating = fn(558);
let obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventsListView(onPressEvent) {
  let obj = guild(onCloseAction[5]);
  const cResult = obj.c(19);
  ({ events, guild } = onPressEvent);
  onPressEvent = onPressEvent.onPressEvent;
  onCloseAction = onPressEvent.onCloseAction;
  const lastAckedId = onPressEvent.lastAckedId;
  if (0 === events.length) {
    if (cResult[0] === guild) {
      if (cResult[1] === onCloseAction) {
        let tmp18 = cResult[2];
      }
      return tmp18;
    }
    const obj2 = { children: null };
    const obj3 = { onClose: onCloseAction, guild };
    obj2.children = jsx(tmp4(tmp2[8]), { onClose: onCloseAction, guild });
    const tmp20 = jsx(guild(tmp2[7]).BottomSheetView, { children: null });
    cResult[0] = guild;
    cResult[1] = onCloseAction;
    cResult[2] = tmp20;
    tmp18 = tmp20;
  } else {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      function extractKey(id) {
        return id.id;
      }
      cResult[3] = extractKey;
      let tmp6 = extractKey;
    } else {
      tmp6 = cResult[3];
    }
    if (cResult[4] === lastAckedId) {
      if (cResult[5] === onCloseAction) {
        if (cResult[6] === onPressEvent) {
          let tmp7 = cResult[7];
        }
        const tmpResult = guild(tmp2[11]);
        const tmp9 = onPressEvent.inActionSheet ? tmpResult.BottomSheetFlashList : tmpResult.FlashList;
        if (cResult[8] === guild) {
          if (cResult[9] === onCloseAction) {
            let tmp10 = cResult[10];
          }
          const sum = tmp4(tmp2[3]).space.PX_16 + tmp5;
          if (cResult[11] !== sum) {
            const obj4 = { paddingBottom: sum };
            cResult[11] = sum;
            cResult[12] = obj4;
            let tmp12 = obj4;
          } else {
            tmp12 = cResult[12];
          }
          if (cResult[13] === tmp9) {
            if (cResult[14] === events) {
              if (cResult[15] === tmp7) {
                if (cResult[16] === tmp10) {
                  if (cResult[17] === tmp12) {
                    let tmp13 = cResult[18];
                  }
                  return tmp13;
                }
              }
            }
          }
          const obj5 = { data: events, style: obj.container, keyExtractor: tmp6, renderItem: tmp7, ItemSeparatorComponent, ListEmptyComponent: tmp10, contentContainerStyle: tmp12 };
          const tmp17 = <tmp9 data={events} style={obj.container} keyExtractor={tmp6} renderItem={tmp7} ItemSeparatorComponent={ItemSeparatorComponent} ListEmptyComponent={tmp10} contentContainerStyle={tmp12} />;
          cResult[13] = tmp9;
          cResult[14] = events;
          cResult[15] = tmp7;
          cResult[16] = tmp10;
          cResult[17] = tmp12;
          cResult[18] = tmp17;
          tmp13 = tmp17;
        }
        const fn2 = function w() {
          return jsx(GuildEventsNoContentDefault, { onClose: onCloseAction, guild });
        };
        cResult[8] = guild;
        cResult[9] = onCloseAction;
        cResult[10] = fn2;
        tmp10 = fn2;
      }
    }
    const fn = function _(item) {
      item = item.item;
      const obj = { event: item, onCloseAction, onPress: onPressEvent, isNew: null };
      let tmp6 = null != lastAckedId;
      if (tmp6) {
        tmp6 = SnowflakeUtilsDefault.compare(item.id, tmp5) > 0;
        const tmp2Result = SnowflakeUtilsDefault;
      }
      obj.isNew = tmp6;
      return jsx(GuildEventCardDefault, { event: item, onCloseAction, onPress: onPressEvent, isNew: null });
    };
    cResult[4] = lastAckedId;
    cResult[5] = onCloseAction;
    cResult[6] = onPressEvent;
    cResult[7] = fn;
    tmp7 = fn;
  }
}) : (function GuildEventsListView(lastAckedId) {
  ({ events, guild } = lastAckedId);
  ({ onPressEvent: importDefault, onCloseAction } = lastAckedId);
  lastAckedId = lastAckedId.lastAckedId;
  if (0 === events.length) {
    const obj2 = { children: null };
    const obj3 = { onClose: onCloseAction, guild };
    obj2.children = jsx(require("GuildEventsNoContent"), { onClose: onCloseAction, guild });
    return jsx(guild(onCloseAction[7]).BottomSheetView, { children: null });
  } else {
    const tmp11 = guild(onCloseAction[11]);
    let obj = { data: events, style: null, keyExtractor: null, renderItem: null, ItemSeparatorComponent: null, ListEmptyComponent: null, contentContainerStyle: null };
    obj.style = obj.container;
    obj.keyExtractor = function extractKey(id) {
      return id.id;
    };
    obj.renderItem = function renderItem(item) {
      item = item.item;
      const obj = { event: item, onCloseAction, onPress, isNew: null };
      let tmp6 = null != lastAckedId;
      if (tmp6) {
        tmp6 = SnowflakeUtilsDefault.compare(item.id, tmp5) > 0;
        const tmp2Result = SnowflakeUtilsDefault;
      }
      obj.isNew = tmp6;
      return jsx(GuildEventCardDefault, { event: item, onCloseAction, onPress, isNew: null });
    };
    obj.ItemSeparatorComponent = ItemSeparatorComponent;
    obj.ListEmptyComponent = function ListEmptyComponent() {
      return jsx(GuildEventsNoContentDefault, { onClose: onCloseAction, guild });
    };
    const obj4 = { paddingBottom: require("native").space.PX_16 + tmp3 };
    obj.contentContainerStyle = obj4;
    return jsx(lastAckedId.inActionSheet ? tmp11.BottomSheetFlashList : tmp11.FlashList, { data: events, style: null, keyExtractor: null, renderItem: null, ItemSeparatorComponent: null, ListEmptyComponent: null, contentContainerStyle: null });
  }
});
export { styles };