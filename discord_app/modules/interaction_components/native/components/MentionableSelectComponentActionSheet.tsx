// === Module 14017: MentionableSelectComponentActionSheet ===

// Module 14017 (MentionableSelectComponentActionSheet)
import SearchableSelectActionComponentUtils from "SearchableSelectActionComponentUtils" /* 13135 */;
import MentionableSelectOptionParts from "MentionableSelectOptionParts" /* 13137 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 5155 */;
import GuildStore from "GuildStore" /* 5114 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx");

export default function MentionableSelectComponentActionSheet(selectionActionComponent) {
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const channelId = selectionActionComponent.channelId;
  const guildId = selectionActionComponent.guildId;
  let memberVersion;
  GuildStore = undefined;
  let options;
  ({ labelComponent, containerId, onSubmit, allowEmpty } = selectionActionComponent);
  guild = GuildStore.getGuild(guildId);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  memberVersion = channelId(guildId[4])(id, selectionActionComponent(tmp3[5]).MIN_REREQUEST_TIME);
  const tmp4 = channelId(guildId[4]);
  items = [memberVersion];
  const stateFromStores = selectionActionComponent(guildId[6]).useStateFromStores(items, () => memberVersion.getMemberVersion());
  const tmp7 = channelId(guildId[7])();
  GuildStore = tmp7;
  let items1 = [selectionActionComponent, channelId, stateFromStores, tmp7];
  const callback = guild.useCallback((query) => {
    const obj = SearchableSelectActionComponentUtils;
    return obj.queryMentionables(selectionActionComponent.type, query, channelId, { request: closure_5(query) });
  }, items1);
  const tmp9 = channelId(guildId[8])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
  options = tmp9.options;
  const selectedOptions = tmp9.selectedOptions;
  const items2 = [options];
  ({ isSelected, onPressOptionItem, submitSelection, setQuery } = tmp9);
  const memo = guild.useMemo(() => options.flatMap((type) => {
    if (type.type === selectionActionComponent(guildId[9]).SelectOptionType.USER) {
      items = [type.value];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }), items2);
  channelId(guildId[10])(guildId, memo);
  const items3 = [guild, guildId];
  const callback1 = guild.useCallback((type) => MentionableSelectOptionParts.renderMentionableOptionIcon(type, guild, guildId), items3);
  const obj2 = { onPressOptionItem, renderIcon: callback1, renderDescription: null, renderOptionSuffix: null, selectionActionComponent: null, labelComponent: null, options: null, selectedCount: null, selectedOptions: null, isSelected: null, submitSelection: null, onQueryChange: null, itemAccessibilityLabel: null, channelId: null, allowEmpty: null };
  let obj = selectionActionComponent(guildId[6]);
  obj2.renderDescription = selectionActionComponent(guildId[11]).renderMentionableOptionDescription;
  obj2.renderOptionSuffix = function renderOptionSuffix(type) {
    return MentionableSelectOptionParts.renderMentionableOptionSuffix(type, guild, closure_4);
  };
  obj2.selectionActionComponent = selectionActionComponent;
  obj2.labelComponent = labelComponent;
  obj2.options = options;
  obj2.selectedCount = selectedOptions.length;
  obj2.selectedOptions = selectedOptions;
  obj2.isSelected = isSelected;
  obj2.submitSelection = submitSelection;
  obj2.onQueryChange = setQuery;
  obj2.itemAccessibilityLabel = selectionActionComponent(guildId[11]).mentionableOptionAccessibilityLabel;
  obj2.channelId = channelId;
  obj2.allowEmpty = allowEmpty;
  return options(channelId(guildId[12]), obj2);
};