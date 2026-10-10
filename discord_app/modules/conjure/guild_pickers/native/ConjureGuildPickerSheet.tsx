// discord_app/modules/conjure/guild_pickers/native/ConjureGuildPickerSheet.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import InteractionComponentTypes from "../../../interaction_components/InteractionComponentTypes.tsx";
import TableRowIcon from "../../../../design/components/TableRow/native/TableRowIcon.native.tsx";
import utils_ChannelUtils from "../../../../utils/native/ChannelUtils.tsx";
import MentionableSelectOptionParts from "../../../interaction_components/native/components/MentionableSelectOptionParts.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const jsx = fn(21).jsx;
let obj = {
  channel: fn(5445).SelectOptionType.CHANNEL,
  role: fn(5445).SelectOptionType.ROLE,
  user: fn(5445).SelectOptionType.USER,
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/guild_pickers/native/ConjureGuildPickerSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureGuildPickerSheet(guildId) {
      const cResult = guildId(maxPicks[7]).c(54);
      guildId = guildId.guildId;
      const type = guildId.type;
      ({ channelFilter, title, maxPicks } = guildId);
      const selected = guildId.selected;
      const onSubmit = guildId.onSubmit;
      if (cResult[0] !== type) {
        function toOption(id) {
          obj = { type: obj[type], value: id.id, label: id.label };
          return obj;
        }
        cResult[0] = type;
        cResult[1] = toOption;
        let tmp4 = toOption;
      } else {
        tmp4 = cResult[1];
      }
      let channel = tmp4;
      obj = guildId(maxPicks[7]);
      const obj2 = onSubmit;
      const tmp5 = selected;
      [str, GuildStore] = selected(onSubmit.useState(""), 2);
      if (cResult[2] === selected) {
        if (cResult[3] === tmp4) {
          let tmp7 = cResult[4];
        }
        const tmp5Result = tmp5(obj2.useState(tmp7), 2);
        closure_7 = tmp5Result[0];
        closure_8 = tmp5Result[1];
        if (cResult[5] === channelFilter) {
          if (cResult[6] === type) {
            let tmp9 = cResult[7];
          }
          const tmp11 = type(maxPicks[8])(guildId, tmp9);
          if (cResult[8] !== selected) {
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              class P {
                constructor(arg0) {
                  return guildId.id;
                }
              }
              cResult[10] = P;
            } else {
              class P {
                constructor(arg0) {
                  return guildId.id;
                }
              }
            }
            const mapped = selected.map(P);
            cResult[8] = selected;
            cResult[9] = mapped;
          } else {
            class P {
              constructor(arg0) {
                return guildId.id;
              }
            }
            if ("user" === type) {
              class P {
                constructor(arg0) {
                  return guildId.id;
                }
              }
            }
            const conjureMemberRequests = tmp(maxPicks[9]).useConjureMemberRequests(tmp18, tmp12);
            if (cResult[11] !== guildId) {
              class P {
                constructor(arg0) {
                  return guildId.id;
                }
              }
              guild = GuildStore.getGuild(guildId);
              cResult[11] = guildId;
              cResult[12] = guild;
              const tmp20 = guild;
            } else {
              class P {
                constructor(arg0) {
                  return guildId.id;
                }
              }
            }
            guild = tmp20;
            const tmpResult = tmp(maxPicks[9]);
            if ("role" === type) {
              class P {
                constructor(arg0) {
                  return guildId.id;
                }
              }
            }
            const tmp10Result = tmp10(maxPicks[10]);
            closure_11 = tmp10(maxPicks[10])(null, tmp(maxPicks[11]).MIN_REREQUEST_TIME);
            if (cResult[13] === tmp11) {
              class P {
                constructor(arg0) {
                  return guildId.id;
                }
              }
            }
            const tmp10ResultResult = tmp10(maxPicks[10])(null, tmp(maxPicks[11]).MIN_REREQUEST_TIME);
            closure_12 = str.trim().toLowerCase();
            if (tmp11 == null) {
              class P {
                constructor(arg0) {
                  return guildId.id;
                }
              }
            }
            const found = tmp11.filter((label) => {
              let hasItem = "" === closure_12;
              if (!hasItem) {
                const formatted = label.label.toLowerCase();
                hasItem = formatted.includes(closure_12);
              }
              if (!hasItem) {
                let hasItem1;
                if (label.description != null) {
                  const formatted1 = str2.toLowerCase();
                  hasItem1 = formatted1.includes(closure_12);
                }
                hasItem = true === hasItem1;
              }
              return hasItem;
            });
            const mapped1 = found.map(tmp4);
            cResult[13] = tmp11;
            cResult[14] = str;
            class E {
              constructor() {
                return selected.map(closure_5);
              }
            }
            cResult[16] = mapped1;
            const str5 = str.trim();
          }
          tmp10 = type;
        }
        const obj3 = { type, channel_filter: channelFilter };
        cResult[5] = channelFilter;
        cResult[6] = type;
        cResult[7] = obj3;
        tmp9 = obj3;
      }
      class E {
        constructor() {
          return selected.map(closure_5);
        }
      }
      cResult[2] = selected;
      cResult[3] = tmp4;
      cResult[4] = E;
      tmp7 = E;
      let tmp6 = selected(onSubmit.useState(""), 2);
    }
  : function ConjureGuildPickerSheet(guildId) {
      guildId = guildId.guildId;
      const type = guildId.type;
      const maxPicks = guildId.maxPicks;
      const selected = guildId.selected;
      const onSubmit = guildId.onSubmit;
      GuildStore = undefined;
      closure_9 = undefined;
      guild = undefined;
      closure_11 = undefined;
      closure_12 = undefined;
      let set;
      function toOption(id) {
        obj = { type: obj[type], value: id.id, label: id.label };
        return obj;
      }
      ({ channelFilter, title } = guildId);
      [str, c6] = selected(onSubmit.useState(""), 2);
      const tmp2 = selected(
        onSubmit.useState(() => selected.map(toOption)),
        2,
      );
      const selectedOptions = tmp2[0];
      closure_8 = tmp2[1];
      const tmp5 = type(maxPicks[8])(guildId, { type, channel_filter: channelFilter });
      obj = onSubmit;
      const tmp = selected(onSubmit.useState(""), 2);
      let tmp7 = null;
      if ("user" === type) {
        tmp7 = guildId;
      }
      closure_9 = guildId(maxPicks[9]).useConjureMemberRequests(
        tmp7,
        selected.map((id) => id.id),
      );
      guild = GuildStore.getGuild(guildId);
      let tmp10 = null;
      const obj2 = guildId(maxPicks[9]);
      if ("role" === type) {
        tmp10 = guildId;
      }
      closure_11 = type(maxPicks[10])(tmp10, tmp6(tmp4[11]).MIN_REREQUEST_TIME);
      const tmp3Result = type(maxPicks[10]);
      closure_12 = str.trim().toLowerCase();
      let items = tmp5;
      if (tmp5 == null) {
        items = [];
      }
      const found = items.filter((label) => {
        let hasItem = "" === closure_12;
        if (!hasItem) {
          const formatted = label.label.toLowerCase();
          hasItem = formatted.includes(closure_12);
        }
        if (!hasItem) {
          let hasItem1;
          if (label.description != null) {
            const formatted1 = str2.toLowerCase();
            hasItem1 = formatted1.includes(closure_12);
          }
          hasItem = true === hasItem1;
        }
        return hasItem;
      });
      const mapped = found.map(toOption);
      set = new Set(selectedOptions.map((value) => value.value));
      let items1 = [guild, guildId];
      const callback = obj.useCallback((type) => {
        if (type.type !== InteractionComponentTypes.SelectOptionType.CHANNEL) {
          return MentionableSelectOptionParts.renderMentionableOptionIcon(type, guild, guildId);
        } else {
          const channel = ChannelStore.getChannel(type.value);
          let channelIconWithGuild = null;
          if (null != channel) {
            channelIconWithGuild = utils_ChannelUtils.getChannelIconWithGuild(channel, guild);
            const tmpResult2 = utils_ChannelUtils;
          }
          let tmp8 = null;
          if (null != channelIconWithGuild) {
            obj = { source: channelIconWithGuild };
            tmp8 = jsx(TableRowIcon.TableRowIcon, { source: channelIconWithGuild });
          }
          return tmp8;
        }
      }, items1);
      const obj3 = {
        selectionActionComponent: { placeholder: title, minValues: 0, maxValues: maxPicks },
        allowEmpty: true,
        options: mapped,
        selectedOptions,
        selectedCount: selectedOptions.length,
        isSelected(value) {
          return set.has(value.value);
        },
        onPressOptionItem: function press(arg0, value) {
          const hasItem = set.has(value.value);
          if (1 === maxPicks) {
            if (hasItem) {
              let items = [];
            } else {
              items = [value];
            }
            onSubmit(items.map((id) => ({ id: id.value, label: id.label })));
            ActionSheetActionCreatorsDefault.hideActionSheet();
          } else if (hasItem) {
            closure_8(first.filter((value) => value.value !== value.value));
          } else if (first.length < tmp2) {
            const items1 = [];
            items1[HermesBuiltin.arraySpread(first, 0)] = value;
            closure_8(items1);
          }
        },
        submitSelection() {
          onSubmit(first.map((id) => ({ id: id.value, label: id.label })));
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
        onQueryChange(ref) {
          _undefined(ref);
          closure_9(ref);
        },
        renderIcon: callback,
        renderDescription: null,
        renderOptionSuffix: null,
        itemAccessibilityLabel: null,
      };
      const str2 = str.trim();
      obj3.renderDescription = guildId(maxPicks[13]).renderMentionableOptionDescription;
      obj3.renderOptionSuffix = function renderOptionSuffix(type) {
        return MentionableSelectOptionParts.renderMentionableOptionSuffix(type, guild, closure_11);
      };
      obj3.itemAccessibilityLabel = function accessibilityLabel(type) {
        if (type.type !== guildId(maxPicks[5]).SelectOptionType.CHANNEL) {
          return guildId(maxPicks[13]).mentionableOptionAccessibilityLabel(type);
        } else {
          const channel = toOption.getChannel(type.value);
          let tmp6;
          if (null != channel) {
            obj = { channel };
            tmp6 = type(maxPicks[16])(obj);
          }
          return tmp6;
        }
      };
      return selectedOptions(type(maxPicks[17]), obj3);
    };
