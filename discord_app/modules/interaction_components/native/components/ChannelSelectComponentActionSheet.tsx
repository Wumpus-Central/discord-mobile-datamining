// === Module 11006: ChannelSelectComponentActionSheet ===

// Module 11006 (ChannelSelectComponentActionSheet)
import noop from "noop" /* 19 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx");

export default function ChannelSelectComponentActionSheet(guildId) {
  ({ selectionActionComponent, channelId } = guildId);
  guildId = guildId.guildId;
  let React;
  const channelTypes = selectionActionComponent.channelTypes;
  const items = [channelId, channelTypes];
  ({ labelComponent, containerId, onSubmit, allowEmpty } = guildId);
  const callback = React.useCallback((arg0) => channelId(channelTypes[4]).queryChannels(arg0, channelId, channelTypes), items);
  const tmp2 = guildId(channelTypes[5])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
  ({ selectedOptions, submitSelection: c3 } = tmp2);
  ({ options, isSelected, onPressOptionItem, setQuery } = tmp2);
  return jsx(guildId(channelTypes[6]), {
    onPressOptionItem,
    renderIcon(value) {
      const channel = closure_1_4.getChannel(value.value);
      if (null == channel) {
        return null;
      } else {
        const guild = closure_1_5.getGuild(guildId);
        let obj = channelId(channelTypes[7]);
        const channelIconData = obj.getChannelIconData(channel, guild);
        let tmp8 = null != channelIconData;
        if (tmp8) {
          obj = { source: null };
          obj[0] = channelIconData;
          tmp8 = jsx(channelId(channelTypes[8]).Icon, { source: null });
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
        const obj = { channel: null };
        obj[0] = channel;
        return guildId(channelTypes[9])(obj);
      }
    },
    channelId,
    allowEmpty
  });
};