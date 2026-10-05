// discord_app/modules/application_commands/native/ApplicationCommandList.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ApplicationCommandsConstants from "ApplicationCommandsConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let arr, closure_1, item, nativeEvent, tmp8, tmpResult;

const FlatList = react_native.FlatList;
const AUTOCOMPLETE_ROW_HEIGHT = ApplicationCommandsConstants.AUTOCOMPLETE_ROW_HEIGHT;
const jsx = Fragment.jsx;
let closure_7 = 3 * AUTOCOMPLETE_ROW_HEIGHT;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPressCommandItem) => {
      let ItemSeparatorComponent;
      let channel;
      let commands;
      let getItemLayout;
      let onCommandsChange;
      let query;
      let style;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      const obj = channel(commands[5]);
      const cResult = obj.c(26);
      ({ style, channel } = onPressCommandItem);
      onPressCommandItem = onPressCommandItem.onPressCommandItem;
      ({ query, ItemSeparatorComponent, getItemLayout, onCommandsChange } = onPressCommandItem);
      if (cResult[0] !== channel) {
        const obj2 = { channel, type: "channel" };
        let num = 0;
        cResult[0] = channel;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [channel(tmp2[6]).ApplicationCommandType.CHAT];
        cResult[2] = items;
        tmp5 = items;
      } else {
        tmp5 = cResult[2];
      }
      if (cResult[3] !== query) {
        const obj3 = { text: query, commandTypes: tmp5 };
        cResult[3] = query;
        cResult[4] = obj3;
        tmp6 = obj3;
      } else {
        tmp6 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {
          placeholderCount: 3,
          limit: 7,
          scoreMethod: channel(commands[7]).ScoreMethod.COMMAND_OR_APPLICATION,
        };
        cResult[5] = obj4;
        tmp7 = obj4;
      } else {
        tmp7 = cResult[5];
      }
      const obj5 = onCommandsChange(commands[8]);
      const query1 = obj5.useQuery(tmp4, tmp6, tmp7);
      commands = query1.commands;
      const sections = query1.sections;
      const scrollDown = query1.scrollDown;
      if (cResult[6] === channel.guild_id) {
        if (cResult[7] === onPressCommandItem) {
          let tmp9;
          if (cResult[8] === sections) {
            tmp9 = cResult[9];
          }
          let length;
          const tmp10 = cResult[10];
          if (commands != null) {
            length = commands.length;
          }
          if (tmp10 === length) {
            let tmp13;
            if (cResult[11] === onCommandsChange) {
              tmp13 = cResult[12];
            }
            let length1;
            if (commands != null) {
              length1 = commands.length;
            }
            if (cResult[13] === onCommandsChange) {
              let tmp16;
              if (cResult[14] === length1) {
                tmp16 = cResult[15];
              }
              const effect = sections.useEffect(tmp13, tmp16);
              if (cResult[16] !== scrollDown) {
                class D {
                  constructor(arg0) {
                    nativeEvent = onPressCommandItem.nativeEvent;
                    if (
                      nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >=
                      nativeEvent.contentSize.height - closure_7
                    ) {
                      tmp = scrollDown;
                      tmp2 = scrollDown();
                    }
                    return;
                  }
                }
                cResult[16] = scrollDown;
                cResult[17] = D;
              } else {
                class D {
                  constructor(arg0) {
                    nativeEvent = onPressCommandItem.nativeEvent;
                    if (
                      nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >=
                      nativeEvent.contentSize.height - closure_7
                    ) {
                      tmp = scrollDown;
                      tmp2 = scrollDown();
                    }
                    return;
                  }
                }
              }
              const _Symbol = Symbol;
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                class R {
                  constructor(arg0) {
                    return onPressCommandItem.id;
                  }
                }
                cResult[18] = R;
              } else {
                class R {
                  constructor(arg0) {
                    return onPressCommandItem.id;
                  }
                }
              }
              if (cResult[19] === ItemSeparatorComponent) {
                class R {
                  constructor(arg0) {
                    return onPressCommandItem.id;
                  }
                }
              }
              class P {
                constructor() {
                  if (onCommandsChange != null) {
                    num = undefined;
                    if (commands != null) {
                      num = commands.length;
                    }
                    if (num == null) {
                      num = 0;
                    }
                    tmpResult = tmp(num);
                  }
                  return;
                }
              }
              const tmp23 = (
                <scrollDown
                  style={style}
                  keyExtractor={R}
                  data={commands}
                  renderItem={tmp9}
                  ItemSeparatorComponent={ItemSeparatorComponent}
                  getItemLayout={getItemLayout}
                  onScroll={D}
                />
              );
              cResult[19] = ItemSeparatorComponent;
              cResult[20] = commands;
              cResult[21] = getItemLayout;
              cResult[22] = D;
              cResult[23] = tmp9;
              cResult[24] = style;
              cResult[25] = tmp23;
            }
            const items1 = [length1, onCommandsChange];
            class P {
              constructor() {
                if (onCommandsChange != null) {
                  num = undefined;
                  if (commands != null) {
                    num = commands.length;
                  }
                  if (num == null) {
                    num = 0;
                  }
                  tmpResult = tmp(num);
                }
                return;
              }
            }
            cResult[14] = length1;
            cResult[15] = items1;
            tmp16 = items1;
          }
          if (commands != null) {
            class R {
              constructor(arg0) {
                return onPressCommandItem.id;
              }
            }
          }
          class P {
            constructor() {
              if (onCommandsChange != null) {
                num = undefined;
                if (commands != null) {
                  num = commands.length;
                }
                if (num == null) {
                  num = 0;
                }
                tmpResult = tmp(num);
              }
              return;
            }
          }
          cResult[10] = undefined;
          cResult[11] = onCommandsChange;
          cResult[12] = P;
          tmp13 = P;
        }
      }
      class E {
        constructor(arg0) {
          item = onPressCommandItem.item;
          tmp = commands;
          index = onPressCommandItem.index;
          if (item.inputType === channel(commands[9]).ApplicationCommandInputType.PLACEHOLDER) {
            tmp7 = closure_1_6;
            tmp8 = onPressCommandItem;
            return closure_1_6(onPressCommandItem(tmp[10]), {});
          } else {
            arr = sections;
            tmp2 = null;
            found = undefined;
            if (sections != null) {
              found = arr.find(() => {
                /* body not rendered: F142097 */
              });
            }
            closure_1 = found;
            tmp4 = closure_1_6;
            tmp5 = onPressCommandItem;
            obj = { command: null, section: null, onPress: null, guildId: null, highlighted: null };
            obj.command = item;
            obj.section = found;
            obj.onPress = function onPress() {
              /* body not rendered: F142098 */
            };
            tmp6 = item;
            obj.guildId = item.guild_id;
            num = 0;
            obj.highlighted = 0 === index;
            return closure_1_6(onPressCommandItem(tmp[11]), obj);
          }
        }
      }
      cResult[6] = channel.guild_id;
      cResult[7] = onPressCommandItem;
      cResult[8] = sections;
      cResult[9] = E;
      tmp9 = E;
    }
  : (channel) => {
      let ItemSeparatorComponent;
      let getItemLayout;
      let items;
      let query;
      let style;
      channel = channel.channel;
      const onPressCommandItem = channel.onPressCommandItem;
      const onCommandsChange = channel.onCommandsChange;
      let commands;
      ({ style, query, ItemSeparatorComponent, getItemLayout } = channel);
      const tmp = onCommandsChange(commands[8]);
      const useQuery = tmp.useQuery;
      const obj = { text: query, commandTypes: items };
      items = [channel(commands[6]).ApplicationCommandType.CHAT];
      const obj2 = {
        placeholderCount: 3,
        limit: 7,
        scoreMethod: channel(commands[7]).ScoreMethod.COMMAND_OR_APPLICATION,
      };
      const query1 = useQuery({ channel, type: "channel" }, obj, obj2);
      commands = query1.commands;
      const sections = query1.sections;
      const scrollDown = query1.scrollDown;
      const items1 = [sections, channel.guild_id, onPressCommandItem];
      let length;
      const callback = sections.useCallback((item) => {
        item = item.item;
        let found;
        const index = item.index;
        if (item.inputType === channel(commands[9]).ApplicationCommandInputType.PLACEHOLDER) {
          return jsx(onPressCommandItem(commands[10]), {});
        } else {
          found = undefined;
          if (sections != null) {
            found = sections.find((id) => id.id === item.applicationId);
          }
          return jsx(onPressCommandItem(commands[11]), {
            command: item,
            section: found,
            onPress() {
              return onPressCommandItem(item, found);
            },
            guildId: item.guild_id,
            highlighted: 0 === index,
          });
        }
      }, items1);
      const useEffect = sections.useEffect;
      const obj3 = sections;
      if (commands != null) {
        length = commands.length;
      }
      const items2 = [length, onCommandsChange];
      const effect = useEffect(() => {
        if (onCommandsChange != null) {
          let num;
          if (commands != null) {
            num = commands.length;
          }
          if (num == null) {
            num = 0;
          }
          tmp(num);
        }
      }, items2);
      const items3 = [scrollDown];
      return (
        <scrollDown
          style={style}
          keyExtractor={function keyExtractor(id) {
            return id.id;
          }}
          data={commands}
          renderItem={callback}
          ItemSeparatorComponent={ItemSeparatorComponent}
          getItemLayout={getItemLayout}
          onScroll={obj3.useCallback((nativeEvent) => {
            nativeEvent = nativeEvent.nativeEvent;
            if (
              nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >=
              nativeEvent.contentSize.height - closure_7
            ) {
              scrollDown();
            }
          }, items3)}
        />
      );
    };
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandList.tsx");

export default tmp2;
