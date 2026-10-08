// discord_app/modules/application_commands/native/ApplicationCommandList.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const FlatList = fn(17).FlatList;
const jsx = fn(21).jsx;
let closure_7 = 3 * fn(9668).AUTOCOMPLETE_ROW_HEIGHT;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ApplicationCommandList(onPressCommandItem) {
  const cResult = channel(commands[5]).c(26);
  ({ style, channel } = onPressCommandItem);
  onPressCommandItem = onPressCommandItem.onPressCommandItem;
  ({ query, ItemSeparatorComponent, getItemLayout, onCommandsChange } = onPressCommandItem);
  if (cResult[0] !== channel) {
    const obj2 = { channel, type: "channel" };
    cResult[0] = channel;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [channel(tmp2[6]).ApplicationCommandType.CHAT];
    cResult[2] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] !== query) {
    const obj3 = { text: query, commandTypes: tmp5 };
    cResult[3] = query;
    cResult[4] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { placeholderCount: 3, limit: 7, scoreMethod: channel(tmp2[7]).ScoreMethod.COMMAND_OR_APPLICATION };
    cResult[5] = obj4;
    let tmp7 = obj4;
  } else {
    tmp7 = cResult[5];
  }
  let obj = channel(commands[5]);
  const query1 = onCommandsChange(commands[8]).useQuery(tmp4, tmp6, tmp7);
  commands = query1.commands;
  const sections = query1.sections;
  const scrollDown = query1.scrollDown;
  if (cResult[6] === channel.guild_id) {
    if (cResult[7] === onPressCommandItem) {
      if (cResult[8] === sections) {
        let tmp9 = cResult[9];
      }
      let length;
      if (commands != null) {
        length = commands.length;
      }
      if (cResult[10] === length) {
        if (cResult[11] === onCommandsChange) {
          let tmp12 = cResult[12];
        }
        let length1;
        if (commands != null) {
          length1 = commands.length;
        }
        if (cResult[13] === onCommandsChange) {
          if (cResult[14] === length1) {
            let tmp15 = cResult[15];
          }
          const effect = sections.useEffect(tmp12, tmp15);
          if (cResult[16] !== scrollDown) {
            class D {
              constructor(arg0) {
                nativeEvent = onPressCommandItem.nativeEvent;
                if (nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >= nativeEvent.contentSize.height - closure_7) {
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
                if (nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >= nativeEvent.contentSize.height - closure_7) {
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
          const obj6 = { style, keyExtractor: R, data: commands, renderItem: tmp9, ItemSeparatorComponent, getItemLayout, onScroll: D };
          const tmp22 = <scrollDown style={style} keyExtractor={R} data={commands} renderItem={tmp9} ItemSeparatorComponent={ItemSeparatorComponent} getItemLayout={getItemLayout} onScroll={D} />;
          cResult[19] = ItemSeparatorComponent;
          cResult[20] = commands;
          cResult[21] = getItemLayout;
          cResult[22] = D;
          cResult[23] = tmp9;
          cResult[24] = style;
          cResult[25] = tmp22;
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
        tmp15 = items1;
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
      tmp12 = P;
    }
  }
  class T {
    constructor(arg0) {
      item = onPressCommandItem.item;
      tmp = commands;
      if (item.inputType === channel(commands[9]).ApplicationCommandInputType.PLACEHOLDER) {
        tmp7 = closure_1_6;
        tmp8 = onPressCommandItem;
        return closure_1_6(onPressCommandItem(tmp[10]), {});
      } else {
        arr = sections;
        tmp2 = null;
        found = undefined;
        if (sections != null) {
          found = arr.find(() => { ... });
        }
        closure_1 = found;
        tmp4 = closure_1_6;
        tmp5 = onPressCommandItem;
        obj = { command: null, section: null, onPress: null, guildId: null, highlighted: null };
        obj.command = item;
        obj.section = found;
        obj.onPress = function onPress() { ... };
        tmp6 = item;
        obj.guildId = item.guild_id;
        num = 0;
        obj.highlighted = 0 === onPressCommandItem.index;
        return closure_1_6(onPressCommandItem(tmp[11]), obj);
      }
    }
  }
  cResult[6] = channel.guild_id;
  cResult[7] = onPressCommandItem;
  cResult[8] = sections;
  cResult[9] = T;
  tmp9 = T;
  const obj5 = onCommandsChange(commands[8]);
}) : (function ApplicationCommandList(channel) {
  channel = channel.channel;
  const onPressCommandItem = channel.onPressCommandItem;
  const onCommandsChange = channel.onCommandsChange;
  let commands;
  ({ style, query, ItemSeparatorComponent, getItemLayout } = channel);
  const obj2 = { text: query, commandTypes: null };
  const items = [channel(commands[6]).ApplicationCommandType.CHAT];
  obj2.commandTypes = items;
  let obj = onCommandsChange(commands[8]);
  const query1 = obj.useQuery({ channel, type: "channel" }, obj2, { placeholderCount: 3, limit: 7, scoreMethod: channel(commands[7]).ScoreMethod.COMMAND_OR_APPLICATION });
  commands = query1.commands;
  const sections = query1.sections;
  const scrollDown = query1.scrollDown;
  const items1 = [sections, channel.guild_id, onPressCommandItem];
  let length;
  const callback = sections.useCallback((item) => {
    item = item.item;
    let found;
    if (item.inputType === channel(commands[9]).ApplicationCommandInputType.PLACEHOLDER) {
      return jsx(onPressCommandItem(commands[10]), {});
    } else {
      found = undefined;
      if (sections != null) {
        found = sections.find((id) => id.id === item.applicationId);
      }
      const obj = {
        command: item,
        section: found,
        onPress() {
            return onPressCommandItem(item, found);
          },
        guildId: item.guild_id,
        highlighted: 0 === item.index
      };
      return jsx(onPressCommandItem(commands[11]), {
        command: item,
        section: found,
        onPress() {
            return onPressCommandItem(item, found);
          },
        guildId: item.guild_id,
        highlighted: 0 === item.index
      });
    }
  }, items1);
  if (commands != null) {
    length = commands.length;
  }
  const items2 = [length, onCommandsChange];
  const effect = sections.useEffect(() => {
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
  const obj3 = { placeholderCount: 3, limit: 7, scoreMethod: channel(commands[7]).ScoreMethod.COMMAND_OR_APPLICATION };
  return <scrollDown style={style} keyExtractor={function keyExtractor(id) {
    return id.id;
  }} data={commands} renderItem={callback} ItemSeparatorComponent={ItemSeparatorComponent} getItemLayout={getItemLayout} onScroll={sections.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >= nativeEvent.contentSize.height - closure_7) {
      scrollDown();
    }
  }, items3)} />;
});