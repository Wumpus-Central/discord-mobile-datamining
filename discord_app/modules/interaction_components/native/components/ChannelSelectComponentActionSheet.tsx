// discord_app/modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx
import native from "../../../../design/void/native.tsx";
import SearchableSelectActionComponentUtils from "../../SearchableSelectActionComponentUtils.tsx";
import NativeSearchableSelectActionComponentUtils from "../NativeSearchableSelectActionComponentUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
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
                  class O {
                    constructor(arg0) {
                      channel = closure_4.getChannel(guildId.value);
                      if (null == channel) {
                        return null;
                      } else {
                        tmp2 = closure_5;
                        tmp3 = guildId;
                        guild = closure_5.getGuild(guildId);
                        tmp5 = closure_0;
                        tmp6 = closure_2;
                        obj = closure_0(closure_2[8]);
                        channelIconData = obj.getChannelIconData(channel, guild);
                        tmp8 = null != channelIconData;
                        if (tmp8) {
                          tmp9 = jsx;
                          obj1 = { source: null };
                          obj1.source = channelIconData;
                          tmp8 = jsx(tmp5(tmp6[9]).Icon, obj1);
                        }
                        return tmp8;
                      }
                    }
                  }
                  cResult[9] = guildId;
                  cResult[10] = O;
                } else {
                  class O {
                    constructor(arg0) {
                      channel = closure_4.getChannel(guildId.value);
                      if (null == channel) {
                        return null;
                      } else {
                        tmp2 = closure_5;
                        tmp3 = guildId;
                        guild = closure_5.getGuild(guildId);
                        tmp5 = closure_0;
                        tmp6 = closure_2;
                        obj = closure_0(closure_2[8]);
                        channelIconData = obj.getChannelIconData(channel, guild);
                        tmp8 = null != channelIconData;
                        if (tmp8) {
                          tmp9 = jsx;
                          obj1 = { source: null };
                          obj1.source = channelIconData;
                          tmp8 = jsx(tmp5(tmp6[9]).Icon, obj1);
                        }
                        return tmp8;
                      }
                    }
                  }
                }
                const _Symbol = Symbol;
                if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                  class O {
                    constructor(arg0) {
                      channel = closure_4.getChannel(guildId.value);
                      if (null == channel) {
                        return null;
                      } else {
                        tmp2 = closure_5;
                        tmp3 = guildId;
                        guild = closure_5.getGuild(guildId);
                        tmp5 = closure_0;
                        tmp6 = closure_2;
                        obj = closure_0(closure_2[8]);
                        channelIconData = obj.getChannelIconData(channel, guild);
                        tmp8 = null != channelIconData;
                        if (tmp8) {
                          tmp9 = jsx;
                          obj1 = { source: null };
                          obj1.source = channelIconData;
                          tmp8 = jsx(tmp5(tmp6[9]).Icon, obj1);
                        }
                        return tmp8;
                      }
                    }
                  }
                  cResult[11] = tmp10;
                } else {
                  class O {
                    constructor(arg0) {
                      channel = closure_4.getChannel(guildId.value);
                      if (null == channel) {
                        return null;
                      } else {
                        tmp2 = closure_5;
                        tmp3 = guildId;
                        guild = closure_5.getGuild(guildId);
                        tmp5 = closure_0;
                        tmp6 = closure_2;
                        obj = closure_0(closure_2[8]);
                        channelIconData = obj.getChannelIconData(channel, guild);
                        tmp8 = null != channelIconData;
                        if (tmp8) {
                          tmp9 = jsx;
                          obj1 = { source: null };
                          obj1.source = channelIconData;
                          tmp8 = jsx(tmp5(tmp6[9]).Icon, obj1);
                        }
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
                let obj2 = {
                  onPressOptionItem,
                  renderIcon: O,
                  selectionActionComponent,
                  labelComponent,
                  options,
                  selectedCount: selectedOptions.length,
                  selectedOptions,
                  isSelected,
                  submitSelection: D,
                  onQueryChange: setQuery,
                  itemAccessibilityLabel: tmp10,
                  channelId,
                  allowEmpty,
                };
                const tmp14 = jsx(guildId(tmp[11]), {
                  onPressOptionItem,
                  renderIcon: O,
                  selectionActionComponent,
                  labelComponent,
                  options,
                  selectedCount: selectedOptions.length,
                  selectedOptions,
                  isSelected,
                  submitSelection: D,
                  onQueryChange: setQuery,
                  itemAccessibilityLabel: tmp10,
                  channelId,
                  allowEmpty,
                });
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
                cResult[25] = tmp14;
              }
            }
          }
        }
        const obj3 = {
          selectActionComponent: selectionActionComponent,
          containerId,
          guildId,
          queryOptions: tmp3,
          onSubmit,
        };
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
    }
  : (guildId) => {
      ({ selectionActionComponent, channelId } = guildId);
      guildId = guildId.guildId;
      noop = undefined;
      const channelTypes = selectionActionComponent.channelTypes;
      const items = [channelId, channelTypes];
      ({ labelComponent, containerId, onSubmit, allowEmpty } = guildId);
      const callback = noop.useCallback(
        (query) => SearchableSelectActionComponentUtils.queryChannels(query, channelId, channelTypes),
        items,
      );
      const tmp2 = guildId(channelTypes[7])({
        selectActionComponent: selectionActionComponent,
        containerId,
        guildId,
        queryOptions: callback,
        onSubmit,
      });
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
        itemAccessibilityLabel(value) {
          channel = channel.getChannel(value.value);
          if (null != channel) {
            const obj = { channel };
            return guildId(channelTypes[10])(obj);
          }
        },
        channelId,
        allowEmpty,
      });
    };
