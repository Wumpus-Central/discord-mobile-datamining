// discord_app/modules/guild_scheduled_events/native/components/GuildEventsListView.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildEventsNoContentDefault from "GuildEventsNoContent.tsx";
import GuildEventCardDefault from "GuildEventCard.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let onPressEvent;

let c3;
let closure_4;
let obj2;
let size;
({ View: c3, FlatList: closure_4 } = react_native);
const jsx = Fragment.jsx;
const styles = { spacer: size, container: obj2 };
size = { height: nativeDefault.space.PX_16, width: "100%" };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = <_false style={obj.spacer} />;
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let obj;
      obj = { style: obj.spacer };
      return <_false style={obj.spacer} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPressEvent) => {
      let events;
      let guild;
      let onCloseAction;
      const obj = guild(onCloseAction[5]);
      const cResult = obj.c(19);
      ({ events, guild } = onPressEvent);
      onPressEvent = onPressEvent.onPressEvent;
      onCloseAction = onPressEvent.onCloseAction;
      const lastAckedId = onPressEvent.lastAckedId;
      const tmp4 = onPressEvent;
      const inActionSheet = onPressEvent.inActionSheet;
      if (0 === events.length) {
        if (cResult[0] === guild) {
          let tmp16;
          if (cResult[1] === onCloseAction) {
            tmp16 = cResult[2];
          }
          return tmp16;
        }
        const BottomSheetView = guild(tmp2[7]).BottomSheetView;
        const tmp18 = <BottomSheetView>{null}</BottomSheetView>;
        cResult[0] = guild;
        cResult[1] = onCloseAction;
        cResult[2] = tmp18;
        tmp16 = tmp18;
      } else {
        let tmp6;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function u(id) {
            return id.id;
          };
          cResult[3] = fn;
          tmp6 = fn;
        } else {
          tmp6 = cResult[3];
        }
        if (cResult[4] === lastAckedId) {
          if (cResult[5] === onCloseAction) {
            let tmp7;
            let BottomSheetFlatList;
            if (cResult[6] === onPressEvent) {
              tmp7 = cResult[7];
            }
            if (inActionSheet) {
              BottomSheetFlatList = guild(tmp2[7]).BottomSheetFlatList;
            } else {
              BottomSheetFlatList = closure_4;
            }
            if (cResult[8] === guild) {
              let tmp8;
              if (cResult[9] === onCloseAction) {
                tmp8 = cResult[10];
              }
              const sum = tmp4(tmp2[3]).space.PX_16 + tmp5;
              if (cResult[11] !== sum) {
                const obj4 = { paddingBottom: sum };
                class A {
                  constructor() {
                    return jsx(GuildEventsNoContentDefault, { onClose: onCloseAction, guild });
                  }
                }
                cResult[12] = obj4;
                class E {
                  constructor(item) {
                    item = item.item;
                    let tmp6 = null != lastAckedId;
                    GuildEventCardDefault;
                    if (tmp6) {
                      const tmp2Result = SnowflakeUtilsDefault;
                      tmp6 = tmp2Result.compare(item.id, tmp5) > 0;
                    }
                    return <tmp4 event={item} onCloseAction={onCloseAction} onPress={onPressEvent} isNew={tmp6} />;
                  }
                }
              }
              class A {
                constructor() {
                  return jsx(GuildEventsNoContentDefault, { onClose: onCloseAction, guild });
                }
              }
              class E {
                constructor(item) {
                  item = item.item;
                  let tmp6 = null != lastAckedId;
                  GuildEventCardDefault;
                  if (tmp6) {
                    const tmp2Result = SnowflakeUtilsDefault;
                    tmp6 = tmp2Result.compare(item.id, tmp5) > 0;
                  }
                  return <tmp4 event={item} onCloseAction={onCloseAction} onPress={onPressEvent} isNew={tmp6} />;
                }
              }
              const tmp15 = (
                <BottomSheetFlatList
                  data={null}
                  style={obj.container}
                  keyExtractor={tmp6}
                  renderItem={tmp7}
                  ItemSeparatorComponent={ItemSeparatorComponent}
                  initialNumToRender={5}
                  ListEmptyComponent={tmp8}
                  contentContainerStyle={tmp10}
                />
              );
              cResult[13] = BottomSheetFlatList;
              cResult[14] = events;
              cResult[15] = tmp7;
              cResult[16] = tmp8;
              cResult[17] = tmp10;
              cResult[18] = tmp15;
            }
            class A {
              constructor() {
                return jsx(GuildEventsNoContentDefault, { onClose: onCloseAction, guild });
              }
            }
            cResult[8] = guild;
            class E {
              constructor(item) {
                item = item.item;
                let tmp6 = null != lastAckedId;
                GuildEventCardDefault;
                if (tmp6) {
                  const tmp2Result = SnowflakeUtilsDefault;
                  tmp6 = tmp2Result.compare(item.id, tmp5) > 0;
                }
                return <tmp4 event={item} onCloseAction={onCloseAction} onPress={onPressEvent} isNew={tmp6} />;
              }
            }
            cResult[9] = onCloseAction;
            cResult[10] = A;
            tmp8 = A;
          }
        }
        class E {
          constructor(item) {
            item = item.item;
            let tmp6 = null != lastAckedId;
            GuildEventCardDefault;
            if (tmp6) {
              const tmp2Result = SnowflakeUtilsDefault;
              tmp6 = tmp2Result.compare(item.id, tmp5) > 0;
            }
            return <tmp4 event={item} onCloseAction={onCloseAction} onPress={onPressEvent} isNew={tmp6} />;
          }
        }
        cResult[4] = lastAckedId;
        cResult[5] = onCloseAction;
        cResult[6] = onPressEvent;
        cResult[7] = E;
        tmp7 = E;
      }
    }
  : (lastAckedId) => {
      let events;
      let guild;
      let obj;
      let obj4;
      let onCloseAction;
      let onPress;
      function keyExtractor(id) {
        return id.id;
      }
      function renderItem(item) {
        item = item.item;
        let tmp6 = null != lastAckedId;
        GuildEventCardDefault;
        if (tmp6) {
          const tmp2Result = SnowflakeUtilsDefault;
          tmp6 = tmp2Result.compare(item.id, tmp5) > 0;
        }
        return <tmp4 event={item} onCloseAction={onCloseAction} onPress={importDefault} isNew={tmp6} />;
      }
      function ListEmptyComponent() {
        return jsx(GuildEventsNoContentDefault, { onClose: onCloseAction, guild });
      }
      ({ events, guild } = lastAckedId);
      ({ onPressEvent: importDefault, onCloseAction } = lastAckedId);
      lastAckedId = lastAckedId.lastAckedId;
      const inActionSheet = lastAckedId.inActionSheet;
      if (0 === events.length) {
        const BottomSheetView = guild(onCloseAction[7]).BottomSheetView;
        return <BottomSheetView>{null}</BottomSheetView>;
      } else {
        if (inActionSheet) {
          let BottomSheetFlatList = guild(onCloseAction[7]).BottomSheetFlatList;
        } else {
          BottomSheetFlatList = closure_4;
        }
        obj = {
          data: events,
          style: obj.container,
          keyExtractor,
          renderItem,
          ItemSeparatorComponent,
          initialNumToRender: 5,
          ListEmptyComponent,
          contentContainerStyle: obj4,
        };
        let tmp6 = obj;
        obj4 = { paddingBottom: require("native").space.PX_16 + tmp3 };
        return (
          <BottomSheetFlatList
            data={events}
            style={obj.container}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparatorComponent}
            initialNumToRender={5}
            ListEmptyComponent={ListEmptyComponent}
            contentContainerStyle={obj4}
          />
        );
      }
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListView.tsx");

export default tmp4;
export { styles };
