// discord_app/modules/guild_scheduled_events/native/components/GuildEventsListView.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildEventsNoContentDefault from "GuildEventsNoContent.tsx";
import GuildEventCardDefault from "GuildEventCard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, FlatList: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const styles = { spacer: null, container: null };
let size = { height: nativeDefault.space.PX_16, width: "100%" };
styles.spacer = size;
styles.container = { paddingHorizontal: nativeDefault.space.PX_16 };
let ReactCompilerGating = fn(558);
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? function FormSeparator() {
      const obj = c;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { style: obj.spacer };
        const tmp6 = <React3 style={obj.spacer} />;
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function FormSeparator() {
      obj = { style: obj.spacer };
      return <React3 style={obj.spacer} />;
    };
ReactCompilerGating = fn(558);
let obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventsListView(onPressEvent) {
      let obj = guild(onCloseAction[5]);
      const cResult = obj.c(19);
      ({ events, guild } = onPressEvent);
      onPressEvent = onPressEvent.onPressEvent;
      onCloseAction = onPressEvent.onCloseAction;
      const lastAckedId = onPressEvent.lastAckedId;
      if (0 === events.length) {
        if (cResult[0] === guild) {
          if (cResult[1] === onCloseAction) {
            let tmp16 = cResult[2];
          }
          return tmp16;
        }
        const obj2 = { children: null };
        const obj3 = { onClose: onCloseAction, guild };
        obj2.children = jsx(tmp4(tmp2[8]), { onClose: onCloseAction, guild });
        const tmp18 = jsx(guild(tmp2[7]).BottomSheetView, { children: null });
        cResult[0] = guild;
        cResult[1] = onCloseAction;
        cResult[2] = tmp18;
        tmp16 = tmp18;
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
            if (onPressEvent.inActionSheet) {
              let BottomSheetFlatList = guild(tmp2[7]).BottomSheetFlatList;
            } else {
              BottomSheetFlatList = closure_4;
            }
            if (cResult[8] === guild) {
              if (cResult[9] === onCloseAction) {
                let tmp8 = cResult[10];
              }
              const sum = tmp4(tmp2[3]).space.PX_16 + tmp5;
              if (cResult[11] !== sum) {
                const obj4 = { paddingBottom: sum };
                class P {
                  constructor() {
                    obj = { onClose: onCloseAction, guild };
                    return jsx(closure_1(closure_2[8]), obj);
                  }
                }
                cResult[12] = obj4;
                class E {
                  constructor(arg0) {
                    item = onPressEvent.item;
                    tmp = jsx;
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = { event: item, onCloseAction, onPress: onPressEvent, isNew: null };
                    tmp6 = null != lastAckedId;
                    tmp4 = closure_1(closure_2[9]);
                    if (tmp6) {
                      tmp2Result = tmp2(tmp3[10]);
                      num = 0;
                      tmp6 = tmp2Result.compare(item.id, tmp5) > 0;
                    }
                    obj.isNew = tmp6;
                    return tmp(tmp4, obj);
                  }
                }
              }
              class P {
                constructor() {
                  obj = { onClose: onCloseAction, guild };
                  return jsx(closure_1(closure_2[8]), obj);
                }
              }
              const obj5 = {
                data: null,
                style: null,
                keyExtractor: null,
                renderItem: null,
                ItemSeparatorComponent: null,
                initialNumToRender: 5,
                ListEmptyComponent: null,
                contentContainerStyle: null,
              };
              class E {
                constructor(arg0) {
                  item = onPressEvent.item;
                  tmp = jsx;
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = { event: item, onCloseAction, onPress: onPressEvent, isNew: null };
                  tmp6 = null != lastAckedId;
                  tmp4 = closure_1(closure_2[9]);
                  if (tmp6) {
                    tmp2Result = tmp2(tmp3[10]);
                    num = 0;
                    tmp6 = tmp2Result.compare(item.id, tmp5) > 0;
                  }
                  obj.isNew = tmp6;
                  return tmp(tmp4, obj);
                }
              }
              obj5.style = obj.container;
              obj5.keyExtractor = tmp6;
              obj5.renderItem = tmp7;
              obj5.ItemSeparatorComponent = ItemSeparatorComponent;
              obj5.ListEmptyComponent = tmp8;
              obj5.contentContainerStyle = tmp10;
              const tmp15 = (
                <BottomSheetFlatList
                  data={null}
                  style={null}
                  keyExtractor={null}
                  renderItem={null}
                  ItemSeparatorComponent={null}
                  initialNumToRender={5}
                  ListEmptyComponent={null}
                  contentContainerStyle={null}
                />
              );
              cResult[13] = BottomSheetFlatList;
              cResult[14] = events;
              cResult[15] = tmp7;
              cResult[16] = tmp8;
              cResult[17] = tmp10;
              cResult[18] = tmp15;
            }
            class P {
              constructor() {
                obj = { onClose: onCloseAction, guild };
                return jsx(closure_1(closure_2[8]), obj);
              }
            }
            cResult[8] = guild;
            class E {
              constructor(arg0) {
                item = onPressEvent.item;
                tmp = jsx;
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = { event: item, onCloseAction, onPress: onPressEvent, isNew: null };
                tmp6 = null != lastAckedId;
                tmp4 = closure_1(closure_2[9]);
                if (tmp6) {
                  tmp2Result = tmp2(tmp3[10]);
                  num = 0;
                  tmp6 = tmp2Result.compare(item.id, tmp5) > 0;
                }
                obj.isNew = tmp6;
                return tmp(tmp4, obj);
              }
            }
            cResult[9] = onCloseAction;
            cResult[10] = P;
            tmp8 = P;
          }
        }
        class E {
          constructor(arg0) {
            item = onPressEvent.item;
            tmp = jsx;
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = { event: item, onCloseAction, onPress: onPressEvent, isNew: null };
            tmp6 = null != lastAckedId;
            tmp4 = closure_1(closure_2[9]);
            if (tmp6) {
              tmp2Result = tmp2(tmp3[10]);
              num = 0;
              tmp6 = tmp2Result.compare(item.id, tmp5) > 0;
            }
            obj.isNew = tmp6;
            return tmp(tmp4, obj);
          }
        }
        cResult[4] = lastAckedId;
        cResult[5] = onCloseAction;
        cResult[6] = onPressEvent;
        cResult[7] = E;
        tmp7 = E;
      }
    }
  : function GuildEventsListView(lastAckedId) {
      ({ events, guild } = lastAckedId);
      ({ onPressEvent: importDefault, onCloseAction } = lastAckedId);
      lastAckedId = lastAckedId.lastAckedId;
      if (0 === events.length) {
        const obj2 = { children: null };
        const obj3 = { onClose: onCloseAction, guild };
        obj2.children = jsx(require("GuildEventsNoContent"), { onClose: onCloseAction, guild });
        return jsx(guild(onCloseAction[7]).BottomSheetView, { children: null });
      } else {
        if (lastAckedId.inActionSheet) {
          let BottomSheetFlatList = guild(onCloseAction[7]).BottomSheetFlatList;
        } else {
          BottomSheetFlatList = closure_4;
        }
        let obj = {
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
    };
export { styles };
