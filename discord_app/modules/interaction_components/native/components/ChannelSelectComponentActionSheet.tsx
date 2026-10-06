// === Module 11450: ChannelSelectComponentActionSheet ===

// Module 11450 (ChannelSelectComponentActionSheet)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1188 */;
import SearchableSelectActionComponentUtils from "SearchableSelectActionComponentUtils" /* 7814 */;
import NativeSearchableSelectActionComponentUtils from "NativeSearchableSelectActionComponentUtils" /* 7816 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel, guildId;

let react = react_mod;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let allowEmpty;
  let channelId;
  let channelTypes;
  let containerId;
  let isSelected;
  let labelComponent;
  let onPressOptionItem;
  let onSubmit;
  let options;
  let selectedOptions;
  let selectionActionComponent;
  let submitSelection;
  let obj = channelId(channelTypes[5]);
  const cResult = obj.c(26);
  ({ selectionActionComponent, labelComponent, channelId } = guildId);
  guildId = guildId.guildId;
  ({ containerId, onSubmit, allowEmpty } = guildId);
  channelTypes = selectionActionComponent.channelTypes;
  if (cResult[0] === channelId) {
    let tmp3;
    if (cResult[1] === channelTypes) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === containerId) {
      if (cResult[4] === guildId) {
        if (cResult[5] === onSubmit) {
          if (cResult[6] === tmp3) {
            let tmp4;
            if (cResult[7] === selectionActionComponent) {
              tmp4 = cResult[8];
            }
            const tmp6 = guildId(channelTypes[7])(tmp4);
            ({ options, selectedOptions, isSelected, onPressOptionItem, submitSelection } = tmp6);
            const setQuery = tmp6.setQuery;
            const tmp5 = guildId;
            if (cResult[9] !== guildId) {
              class O {
                constructor(value) {
                  channel = ChannelStore.getChannel(value.value);
                  if (null == channel) {
                    return null;
                  } else {
                    const guild = GuildStore.getGuild(guildId);
                    const obj = NativeSearchableSelectActionComponentUtils;
                    const channelIconData = obj.getChannelIconData(channel, guild);
                    const tmp8 = null != channelIconData && jsx(native.Icon, { source: channelIconData });
                    return tmp8;
                  }
                }
              }
              cResult[9] = guildId;
              cResult[10] = O;
            } else {
              class O {
                constructor(value) {
                  channel = ChannelStore.getChannel(value.value);
                  if (null == channel) {
                    return null;
                  } else {
                    const guild = GuildStore.getGuild(guildId);
                    const obj = NativeSearchableSelectActionComponentUtils;
                    const channelIconData = obj.getChannelIconData(channel, guild);
                    const tmp8 = null != channelIconData && jsx(native.Icon, { source: channelIconData });
                    return tmp8;
                  }
                }
              }
            }
            let tmp8 = globalThis;
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              class O {
                constructor(value) {
                  channel = ChannelStore.getChannel(value.value);
                  if (null == channel) {
                    return null;
                  } else {
                    const guild = GuildStore.getGuild(guildId);
                    const obj = NativeSearchableSelectActionComponentUtils;
                    const channelIconData = obj.getChannelIconData(channel, guild);
                    const tmp8 = null != channelIconData && jsx(native.Icon, { source: channelIconData });
                    return tmp8;
                  }
                }
              }
              cResult[11] = tmp10;
            } else {
              class O {
                constructor(value) {
                  channel = ChannelStore.getChannel(value.value);
                  if (null == channel) {
                    return null;
                  } else {
                    const guild = GuildStore.getGuild(guildId);
                    const obj = NativeSearchableSelectActionComponentUtils;
                    const channelIconData = obj.getChannelIconData(channel, guild);
                    const tmp8 = null != channelIconData && jsx(native.Icon, { source: channelIconData });
                    return tmp8;
                  }
                }
              }
            }
            if (cResult[12] !== submitSelection) {
              class D {
                constructor() {
                  return submitSelection();
                }
              }
              cResult[12] = submitSelection;
              cResult[13] = D;
            } else {
              class D {
                constructor() {
                  return submitSelection();
                }
              }
            }
            if (cResult[14] === allowEmpty) {
              class D {
                constructor() {
                  return submitSelection();
                }
              }
            }
            cResult[14] = allowEmpty;
            cResult[15] = channelId;
            cResult[16] = isSelected;
            cResult[17] = labelComponent;
            cResult[18] = onPressOptionItem;
            cResult[19] = options;
            cResult[20] = O;
            cResult[21] = selectedOptions;
            cResult[22] = selectionActionComponent;
            cResult[23] = setQuery;
            cResult[24] = D;
            cResult[25] = jsx(tmp5(channelTypes[11]), { onPressOptionItem, renderIcon: O, selectionActionComponent, labelComponent, options, selectedCount: selectedOptions.length, selectedOptions, isSelected, submitSelection: D, onQueryChange: setQuery, itemAccessibilityLabel: tmp10, channelId, allowEmpty });
            const tmp14 = jsx(tmp5(channelTypes[11]), { onPressOptionItem, renderIcon: O, selectionActionComponent, labelComponent, options, selectedCount: selectedOptions.length, selectedOptions, isSelected, submitSelection: D, onQueryChange: setQuery, itemAccessibilityLabel: tmp10, channelId, allowEmpty });
          }
        }
      }
    }
    const obj3 = { selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: tmp3, onSubmit };
    cResult[3] = containerId;
    cResult[4] = guildId;
    cResult[5] = onSubmit;
    cResult[6] = tmp3;
    cResult[7] = selectionActionComponent;
    cResult[8] = obj3;
    tmp4 = obj3;
  }
  const fn = function c(query) {
    const obj = SearchableSelectActionComponentUtils;
    return obj.queryChannels(query, channelId, channelTypes);
  };
  cResult[0] = channelId;
  cResult[1] = channelTypes;
  cResult[2] = fn;
  tmp3 = fn;
}) : ((guildId) => {
  let _undefined;
  let allowEmpty;
  let c3;
  let channelId;
  let containerId;
  let isSelected;
  let labelComponent;
  let onPressOptionItem;
  let onSubmit;
  let options;
  let selectedOptions;
  let selectionActionComponent;
  let setQuery;
  ({ selectionActionComponent, channelId } = guildId);
  guildId = guildId.guildId;
  react = undefined;
  const channelTypes = selectionActionComponent.channelTypes;
  const items = [channelId, channelTypes];
  ({ labelComponent, containerId, onSubmit, allowEmpty } = guildId);
  const callback = react.useCallback((query) => {
    const obj = SearchableSelectActionComponentUtils;
    return obj.queryChannels(query, channelId, channelTypes);
  }, items);
  const tmp2 = guildId(channelTypes[7])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
  ({ selectedOptions, submitSelection: c3 } = tmp2);
  ({ options, isSelected, onPressOptionItem, setQuery } = tmp2);
  return jsx(guildId(channelTypes[11]), {
    onPressOptionItem,
    renderIcon(value) {
      channel = ChannelStore.getChannel(value.value);
      if (null == channel) {
        return null;
      } else {
        const guild = GuildStore.getGuild(guildId);
        const obj = NativeSearchableSelectActionComponentUtils;
        const channelIconData = obj.getChannelIconData(channel, guild);
        const tmp8 = null != channelIconData && jsx(native.Icon, { source: channelIconData });
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
        return guildId(channelTypes[10])(obj);
      }
    },
    channelId,
    allowEmpty
  });
});
const result = size.fileFinishedImporting("modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx");

export default tmp2;