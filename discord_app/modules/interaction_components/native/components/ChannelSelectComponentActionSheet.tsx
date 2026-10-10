// === Module 11382: ChannelSelectComponentActionSheet ===

// Module 11382 (ChannelSelectComponentActionSheet)
import native from "native" /* 1200 */;
import SearchableSelectActionComponentUtils from "SearchableSelectActionComponentUtils" /* 8257 */;
import NativeSearchableSelectActionComponentUtils from "NativeSearchableSelectActionComponentUtils" /* 8259 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelSelectComponentActionSheet(guildId) {
  const cResult = channelId(channelTypes[5]).c(26);
  ({ selectionActionComponent, labelComponent, channelId } = guildId);
  guildId = guildId.guildId;
  ({ containerId, onSubmit, allowEmpty } = guildId);
  channelTypes = selectionActionComponent.channelTypes;
  if (cResult[0] === channelId) {
    if (cResult[1] === channelTypes) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] === containerId) {
      if (cResult[4] === guildId) {
        if (cResult[5] === onSubmit) {
          if (cResult[6] === tmp3) {
            if (cResult[7] === selectionActionComponent) {
              let tmp4 = cResult[8];
            }
            const tmp6 = guildId(tmp[7])(tmp4);
            ({ options, selectedOptions, isSelected, onPressOptionItem, submitSelection } = tmp6);
            const setQuery = tmp6.setQuery;
            if (cResult[9] !== guildId) {
              function renderIcon(value) {
                channel = ChannelStore.getChannel(value.value);
                if (null == channel) {
                  return null;
                } else {
                  guild = GuildStore.getGuild(guildId);
                  const channelIconData = NativeSearchableSelectActionComponentUtils.getChannelIconData(channel, guild);
                  let tmp8 = null != channelIconData;
                  if (tmp8) {
                    const obj2 = { source: channelIconData };
                    tmp8 = jsx(native.Icon, { source: channelIconData });
                  }
                  return tmp8;
                }
              }
              cResult[9] = guildId;
              cResult[10] = renderIcon;
              let tmp7 = renderIcon;
            } else {
              tmp7 = cResult[10];
            }
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              function accessibilityLabel(value) {
                channel = channel.getChannel(value.value);
                if (null != channel) {
                  const obj = { channel };
                  return guildId(channelTypes[10])(obj);
                }
              }
              cResult[11] = accessibilityLabel;
              let tmp9 = accessibilityLabel;
            } else {
              tmp9 = cResult[11];
            }
            if (cResult[12] !== submitSelection) {
              const fn2 = function x() {
                return submitSelection();
              };
              cResult[12] = submitSelection;
              cResult[13] = fn2;
              let tmp10 = fn2;
            } else {
              tmp10 = cResult[13];
            }
            if (cResult[14] === allowEmpty) {
              if (cResult[15] === channelId) {
                if (cResult[16] === isSelected) {
                  if (cResult[17] === labelComponent) {
                    if (cResult[18] === onPressOptionItem) {
                      if (cResult[19] === options) {
                        if (cResult[20] === tmp7) {
                          if (cResult[21] === selectedOptions) {
                            if (cResult[22] === selectionActionComponent) {
                              if (cResult[23] === setQuery) {
                                if (cResult[24] === tmp10) {
                                  let tmp11 = cResult[25];
                                }
                                return tmp11;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            let obj2 = { onPressOptionItem, renderIcon: tmp7, selectionActionComponent, labelComponent, options, selectedCount: selectedOptions.length, selectedOptions, isSelected, submitSelection: tmp10, onQueryChange: setQuery, itemAccessibilityLabel: tmp9, channelId, allowEmpty };
            const tmp13 = jsx(guildId(tmp[11]), { onPressOptionItem, renderIcon: tmp7, selectionActionComponent, labelComponent, options, selectedCount: selectedOptions.length, selectedOptions, isSelected, submitSelection: tmp10, onQueryChange: setQuery, itemAccessibilityLabel: tmp9, channelId, allowEmpty });
            cResult[14] = allowEmpty;
            cResult[15] = channelId;
            cResult[16] = isSelected;
            cResult[17] = labelComponent;
            cResult[18] = onPressOptionItem;
            cResult[19] = options;
            cResult[20] = tmp7;
            cResult[21] = selectedOptions;
            cResult[22] = selectionActionComponent;
            cResult[23] = setQuery;
            cResult[24] = tmp10;
            cResult[25] = tmp13;
            tmp11 = tmp13;
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
    return SearchableSelectActionComponentUtils.queryChannels(query, channelId, channelTypes);
  };
  cResult[0] = channelId;
  cResult[1] = channelTypes;
  cResult[2] = fn;
  tmp3 = fn;
  let obj = channelId(channelTypes[5]);
}) : (function ChannelSelectComponentActionSheet(guildId) {
  ({ selectionActionComponent, channelId } = guildId);
  guildId = guildId.guildId;
  noop = undefined;
  const channelTypes = selectionActionComponent.channelTypes;
  const items = [channelId, channelTypes];
  ({ labelComponent, containerId, onSubmit, allowEmpty } = guildId);
  const callback = noop.useCallback((query) => SearchableSelectActionComponentUtils.queryChannels(query, channelId, channelTypes), items);
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
        guild = GuildStore.getGuild(guildId);
        const channelIconData = NativeSearchableSelectActionComponentUtils.getChannelIconData(channel, guild);
        let tmp8 = null != channelIconData;
        if (tmp8) {
          const obj2 = { source: channelIconData };
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
    itemAccessibilityLabel: function accessibilityLabel(value) {
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