// === Module 11622: ApplicationCommandList ===

// Module 11622 (ApplicationCommandList)
import noop from "noop";
import { FlatList } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_7 = 3 * require("AUTOCOMPLETE_ROW_HEIGHT").AUTOCOMPLETE_ROW_HEIGHT;
const result = require("AUTOCOMPLETE_ROW_HEIGHT").fileFinishedImporting("modules/application_commands/native/ApplicationCommandList.tsx");

export default function ApplicationCommandList(channel) {
  let ItemSeparatorComponent;
  let getItemLayout;
  let query;
  let style;
  channel = channel.channel;
  const onPressCommandItem = channel.onPressCommandItem;
  const onCommandsChange = channel.onCommandsChange;
  let commands;
  let sections;
  let scrollDown;
  ({ style, query, ItemSeparatorComponent, getItemLayout } = channel);
  let obj = onCommandsChange(commands[4]);
  obj = { text: query, commandTypes: null };
  const items = [channel(commands[5]).ApplicationCommandType.CHAT];
  obj[1] = items;
  obj = { placeholderCount: 3, limit: 7, scoreMethod: channel(commands[6]).ScoreMethod.COMMAND_OR_APPLICATION };
  query = obj.useQuery({ channel, type: "channel" }, obj, obj);
  commands = query.commands;
  sections = query.sections;
  scrollDown = query.scrollDown;
  const items1 = [sections, channel.guild_id, onPressCommandItem];
  let length;
  const callback = sections.useCallback((item) => {
    item = item.item;
    let found;
    if (item.inputType === channel(commands[7]).ApplicationCommandInputType.PLACEHOLDER) {
      return outer1_6(onPressCommandItem(tmp[8]), {});
    } else {
      found = undefined;
      if (sections != null) {
        found = sections.find((id) => id.id === item.applicationId);
      }
      const obj = { command: null, section: null, onPress: null, guildId: null, highlighted: null };
      obj[0] = item;
      obj[1] = found;
      obj[2] = function onPress() {
        return found(item, found);
      };
      obj[3] = item.guild_id;
      obj[4] = 0 === item.index;
      return outer1_6(onPressCommandItem(tmp[9]), obj);
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
    if (nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >= nativeEvent.contentSize.height - outer1_7) {
      scrollDown();
    }
  }, items3)} />;
};