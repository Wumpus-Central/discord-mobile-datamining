// === Module 11827: ChannelSelectComponentActionSheet ===

// Module 11827 (ChannelSelectComponentActionSheet)
import native from "native" /* 1178 */;
import SearchableSelectActionComponentUtils from "SearchableSelectActionComponentUtils" /* 8120 */;
import NativeSearchableSelectActionComponentUtils from "NativeSearchableSelectActionComponentUtils" /* 8122 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx");

export default function ChannelSelectComponentActionSheet(guildId) {
  ({ selectionActionComponent, channelId } = guildId);
  guildId = guildId.guildId;
  noop = undefined;
  const channelTypes = selectionActionComponent.channelTypes;
  const items = [channelId, channelTypes];
  ({ labelComponent, containerId, onSubmit, allowEmpty } = guildId);
  const callback = noop.useCallback((arg0) => SearchableSelectActionComponentUtils.queryChannels(arg0, channelId, channelTypes), items);
  const tmp2 = guildId(channelTypes[5])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
  ({ selectedOptions, submitSelection: c3 } = tmp2);
  ({ options, isSelected, onPressOptionItem, setQuery } = tmp2);
  return jsx(guildId(channelTypes[6]), {
    onPressOptionItem,
    renderIcon(value) {
      channel = ChannelStore.getChannel(value.value);
      if (null == channel) {
        return null;
      } else {
        const guild = GuildStore.getGuild(guildId);
        let obj = NativeSearchableSelectActionComponentUtils;
        const channelIconData = obj.getChannelIconData(channel, guild);
        let tmp8 = null != channelIconData;
        if (tmp8) {
          obj = { source: channelIconData };
          tmp8 = jsx(native.Icon, { source: channelIconData });
        }
        return tmp8;
      }
    },
    selectionActionComponent,
    labelComponent,
    options,
    selectedCount: selectedOptions.length,
    selectedOptions,
    isSelected,
    submitSelection() {
      return _undefined();
    },
    onQueryChange: setQuery,
    itemAccessibilityLabel(value) {
      channel = channel.getChannel(value.value);
      if (null != channel) {
        const obj = { channel };
        return guildId(channelTypes[9])(obj);
      }
    },
    channelId,
    allowEmpty
  });
};