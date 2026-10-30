// discord_app/modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx
import SearchableSelectActionComponentUtils from "../../SearchableSelectActionComponentUtils.tsx";
import MentionableSelectOptionParts from "MentionableSelectOptionParts.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx",
);

export default function MentionableSelectComponentActionSheet(selectionActionComponent) {
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const channelId = selectionActionComponent.channelId;
  const guildId = selectionActionComponent.guildId;
  GuildStore = undefined;
  ({ labelComponent, containerId, onSubmit, allowEmpty } = selectionActionComponent);
  const guild = GuildStore.getGuild(guildId);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  GuildStore = channelId(guildId[3])(id, selectionActionComponent(tmp3[4]).MIN_REREQUEST_TIME);
  const items = [selectionActionComponent, channelId];
  const callback = guild.useCallback(
    (query) => SearchableSelectActionComponentUtils.queryMentionables(selectionActionComponent.type, query, channelId),
    items,
  );
  const tmp7 = channelId(guildId[5])({
    selectActionComponent: selectionActionComponent,
    containerId,
    guildId,
    queryOptions: callback,
    onSubmit,
  });
  const selectedOptions = tmp7.selectedOptions;
  const items1 = [guild, guildId];
  ({ options, isSelected, onPressOptionItem, submitSelection, setQuery } = tmp7);
  const callback1 = guild.useCallback(
    (type) => MentionableSelectOptionParts.renderMentionableOptionIcon(type, guild, guildId),
    items1,
  );
  const obj = {
    onPressOptionItem,
    renderIcon: callback1,
    renderDescription: null,
    renderOptionSuffix: null,
    selectionActionComponent: null,
    labelComponent: null,
    options: null,
    selectedCount: null,
    selectedOptions: null,
    isSelected: null,
    submitSelection: null,
    onQueryChange: null,
    itemAccessibilityLabel: null,
    channelId: null,
    allowEmpty: null,
  };
  const tmp4 = channelId(guildId[3]);
  obj.renderDescription = selectionActionComponent(guildId[6]).renderMentionableOptionDescription;
  obj.renderOptionSuffix = function renderOptionSuffix(type) {
    return MentionableSelectOptionParts.renderMentionableOptionSuffix(type, guild, closure_4);
  };
  obj.selectionActionComponent = selectionActionComponent;
  obj.labelComponent = labelComponent;
  obj.options = options;
  obj.selectedCount = selectedOptions.length;
  obj.selectedOptions = selectedOptions;
  obj.isSelected = isSelected;
  obj.submitSelection = submitSelection;
  obj.onQueryChange = setQuery;
  obj.itemAccessibilityLabel = selectionActionComponent(guildId[6]).mentionableOptionAccessibilityLabel;
  obj.channelId = channelId;
  obj.allowEmpty = allowEmpty;
  return jsx(channelId(guildId[7]), {
    onPressOptionItem,
    renderIcon: callback1,
    renderDescription: null,
    renderOptionSuffix: null,
    selectionActionComponent: null,
    labelComponent: null,
    options: null,
    selectedCount: null,
    selectedOptions: null,
    isSelected: null,
    submitSelection: null,
    onQueryChange: null,
    itemAccessibilityLabel: null,
    channelId: null,
    allowEmpty: null,
  });
}
