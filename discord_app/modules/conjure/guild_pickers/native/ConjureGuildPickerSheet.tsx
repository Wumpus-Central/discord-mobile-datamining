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
  channel: fn(6068).SelectOptionType.CHANNEL,
  role: fn(6068).SelectOptionType.ROLE,
  user: fn(6068).SelectOptionType.USER,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/guild_pickers/native/ConjureGuildPickerSheet.tsx");

export default function ConjureGuildPickerSheet(guildId) {
  guildId = guildId.guildId;
  const type = guildId.type;
  const maxPicks = guildId.maxPicks;
  const selected = guildId.selected;
  const onSubmit = guildId.onSubmit;
  GuildStore = undefined;
  closure_9 = undefined;
  let guild;
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
  const tmp5 = type(maxPicks[6])(guildId, { type, channel_filter: channelFilter });
  obj = onSubmit;
  const tmp = selected(onSubmit.useState(""), 2);
  let tmp7 = null;
  if ("user" === type) {
    tmp7 = guildId;
  }
  closure_9 = guildId(maxPicks[7]).useConjureMemberRequests(
    tmp7,
    selected.map((id) => id.id),
  );
  guild = GuildStore.getGuild(guildId);
  let tmp10 = null;
  const obj2 = guildId(maxPicks[7]);
  if ("role" === type) {
    tmp10 = guildId;
  }
  closure_11 = type(maxPicks[8])(tmp10, tmp6(tmp4[9]).MIN_REREQUEST_TIME);
  const tmp3Result = type(maxPicks[8]);
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
  obj3.renderDescription = guildId(maxPicks[11]).renderMentionableOptionDescription;
  obj3.renderOptionSuffix = function renderOptionSuffix(type) {
    return MentionableSelectOptionParts.renderMentionableOptionSuffix(type, guild, closure_11);
  };
  obj3.itemAccessibilityLabel = function accessibilityLabel(type) {
    if (type.type !== guildId(maxPicks[5]).SelectOptionType.CHANNEL) {
      return guildId(maxPicks[11]).mentionableOptionAccessibilityLabel(type);
    } else {
      const channel = toOption.getChannel(type.value);
      let tmp6;
      if (null != channel) {
        obj = { channel };
        tmp6 = type(maxPicks[15])(obj);
      }
      return tmp6;
    }
  };
  return selectedOptions(type(maxPicks[14]), obj3);
}
