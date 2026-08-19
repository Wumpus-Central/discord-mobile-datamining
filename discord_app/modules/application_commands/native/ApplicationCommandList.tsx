// === Module 11573: ApplicationCommandList ===

// Module 11573 (ApplicationCommandList)
import noop from "noop" /* 19 */;
import { FlatList } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let closure_7 = 3 * require("AUTOCOMPLETE_ROW_HEIGHT").AUTOCOMPLETE_ROW_HEIGHT;
const result = require("obj132").fileFinishedImporting("modules/application_commands/native/ApplicationCommandList.tsx");

export default function ApplicationCommandList(channel) {
  channel = channel.channel;
  const onPressCommandItem = channel.onPressCommandItem;
  const onCommandsChange = channel.onCommandsChange;
  let commands;
  ({ style, query, ItemSeparatorComponent, getItemLayout } = channel);
  onCommandsChange(commands[4]);
  let obj = { text: query, commandTypes: null };
  const items = [channel(commands[5]).ApplicationCommandType.CHAT];
  obj[1] = items;
  obj = { placeholderCount: 3, limit: 7, scoreMethod: channel(commands[6]).ScoreMethod.COMMAND_OR_APPLICATION };
  query = obj.useQuery({ channel, type: "channel" }, obj, obj);
  commands = query.commands;
  const sections = query.sections;
  const scrollDown = query.scrollDown;
  const items1 = [sections, channel.guild_id, onPressCommandItem];
  let length;
  const callback = sections.useCallback((item) => {
    item = item.item;
    let found;
    if (item.inputType === channel(commands[7]).ApplicationCommandInputType.PLACEHOLDER) {
      return jsx(onPressCommandItem(commands[8]), {});
    } else {
      found = undefined;
      if (sections != null) {
        found = sections.find((item, index) => item.id === item.applicationId);
      }
      const obj = { command: null, section: null, onPress: null, guildId: null, highlighted: null };
      obj[0] = item;
      obj[1] = found;
      obj[2] = function onPress() {
        return found(item, found);
      };
      obj[3] = item.guild_id;
      obj[4] = 0 === item.index;
      return jsx(onPressCommandItem(commands[9]), { command: null, section: null, onPress: null, guildId: null, highlighted: null });
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
  return <scrollDown style={style} keyExtractor={function keyExtractor(id) {
    return id.id;
  }} data={commands} renderItem={callback} ItemSeparatorComponent={ItemSeparatorComponent} getItemLayout={getItemLayout} onScroll={sections.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >= nativeEvent.contentSize.height - closure_1_7) {
      scrollDown();
    }
  }, items3)} />;
};