// discord_app/modules/application_commands/native/ApplicationCommandList.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
let closure_6 = 3 * fn(10205).AUTOCOMPLETE_ROW_HEIGHT;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandList.tsx");

export default function ApplicationCommandList(channel) {
  channel = channel.channel;
  const onPressCommandItem = channel.onPressCommandItem;
  const onCommandsChange = channel.onCommandsChange;
  let commands;
  ({ style, query, ItemSeparatorComponent } = channel);
  const obj2 = { text: query, commandTypes: null };
  const items = [channel(commands[4]).ApplicationCommandType.CHAT];
  obj2.commandTypes = items;
  let obj = onCommandsChange(commands[3]);
  const tmp = commands;
  const tmp2 = channel;
  const query1 = obj.useQuery({ channel, type: "channel" }, obj2, {
    placeholderCount: 3,
    limit: 7,
    scoreMethod: channel(commands[5]).ScoreMethod.COMMAND_OR_APPLICATION,
  });
  commands = query1.commands;
  const sections = query1.sections;
  const scrollDown = query1.scrollDown;
  const items1 = [sections, channel.guild_id, onPressCommandItem];
  let length;
  const callback = sections.useCallback((item) => {
    item = item.item;
    let found;
    if (item.inputType === channel(commands[6]).ApplicationCommandInputType.PLACEHOLDER) {
      return scrollDown(onPressCommandItem(commands[7]), {});
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
        highlighted: 0 === item.index,
      };
      return scrollDown(onPressCommandItem(commands[8]), obj);
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
  const callback1 = sections.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (
      nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >=
      nativeEvent.contentSize.height - closure_6
    ) {
      scrollDown();
    }
  }, items3);
  return scrollDown(tmp2(tmp[9]).FlashList, {
    style,
    keyExtractor(id) {
      return id.id;
    },
    data: commands,
    maintainVisibleContentPosition: { disabled: true },
    getItemType(inputType) {
      let str = "command";
      if (inputType.inputType === channel(commands[6]).ApplicationCommandInputType.PLACEHOLDER) {
        str = "placeholder";
      }
      return str;
    },
    renderItem: callback,
    ItemSeparatorComponent,
    onScroll: callback1,
  });
}
