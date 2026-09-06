// discord_app/modules/interaction_components/native/actions/SearchableSelectActionComponent.tsx
import Server from "../../../../flow/Server.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import SearchableSelectActionComponentUtils from "../../SearchableSelectActionComponentUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/interaction_components/native/actions/SearchableSelectActionComponent.tsx",
);

export default function SearchableSelectActionComponent(defaultValues) {
  _require = defaultValues;
  let obj = require("InteractionComponentUtils");
  const selectPlaceholder = obj.getSelectPlaceholder(defaultValues);
  let obj1 = require("ComponentStateContext");
  const componentStateContext = obj1.useComponentStateContext();
  let modal;
  if (componentStateContext != null) {
    modal = componentStateContext.modal;
  }
  guild_id(customId[5])(
    null != modal,
    "SearchableSelectActionComponent must be rendered inside a modal ComponentStateContext",
  );
  let channelId;
  let tmp4Result = tmp4(tmp2[5]);
  if (componentStateContext != null) {
    channelId = componentStateContext.channelId;
  }
  tmp4Result(null != channelId, "SearchableSelectActionComponent must be used inside a channel");
  const channel = ChannelStore.getChannel(componentStateContext.channelId);
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  const items = [defaultValues.defaultValues, guild_id];
  let memo = obj.useMemo(() => {
    let snowflakeSelectDefaultValues = SearchableSelectActionComponentUtils.getSnowflakeSelectDefaultValues(
      defaultValues.defaultValues,
      guild_id,
    );
    if (snowflakeSelectDefaultValues == null) {
      snowflakeSelectDefaultValues = [];
    }
    return snowflakeSelectDefaultValues;
  }, items);
  let tmp13;
  if (memo.length > 0) {
    obj = { type: defaultValues.type, selectedOptions: memo };
    tmp13 = obj;
  }
  const componentState = componentStateContext.useComponentState(defaultValues, tmp13);
  const state = componentState.state;
  customId = componentStateContext.modal.customId;
  let type;
  ({ visualState, executeStateUpdate } = componentState);
  if (state != null) {
    type = state.type;
  }
  if (type !== require("Server").ComponentType.USER_SELECT) {
    let type1;
    if (state != null) {
      type1 = state.type;
    }
    if (type1 !== tmp(tmp2[7]).ComponentType.ROLE_SELECT) {
      let type2;
      if (state != null) {
        type2 = state.type;
      }
      if (type2 !== tmp(tmp2[7]).ComponentType.MENTIONABLE_SELECT) {
        let type3;
        if (state != null) {
          type3 = state.type;
        }
      }
      const parents = componentStateContext.getParents(defaultValues);
      let first;
      if (parents != null) {
        first = parents[0];
      }
      let type4;
      if (first != null) {
        type4 = first.type;
      }
      let tmp22;
      if (type4 === tmp(tmp2[7]).ComponentType.LABEL) {
        tmp22 = first;
      }
      obj = {
        channelId: componentStateContext.channelId,
        guildId: guild_id,
        containerId: customId,
        onSubmit: executeStateUpdate,
        labelComponent: tmp22,
        allowEmpty: null,
      };
      let tmpResult = tmp(tmp2[3]);
      obj.allowEmpty = tmpResult.canSelectBeEmpty(defaultValues, "modal");
      obj1 = { model: null, onTap: null };
      const obj2 = {};
      tmp4Result = tmp4(tmp2[8]);
      let merged = Object.assign(defaultValues);
      obj2.placeholder = selectPlaceholder;
      obj2.state = visualState;
      tmpResult = tmp(tmp2[9]);
      obj2.selectedOptions = tmpResult.transformSearchableSelectOptions(memo, guild_id);
      obj1.model = obj2;
      obj1.onTap = function onTap() {
        if (defaultValues.type === Server.ComponentType.CHANNEL_SELECT) {
          const _HermesInternal2 = HermesInternal;
          const obj3 = ActionSheetActionCreatorsDefault;
          obj = { selectionActionComponent: defaultValues };
          const combined = "ChannelSelectComponentActionSheet:" + customId;
          const merged = Object.assign(obj);
          obj3.openLazy(asyncRequireImpl(11827, dependencyMap.paths), combined, obj);
          const tmp14 = asyncRequireImpl(11827, dependencyMap.paths);
        } else {
          const _HermesInternal = HermesInternal;
          obj = { selectionActionComponent: defaultValues };
          const combined1 = "MentionableSelectComponentActionSheet:" + customId;
          const merged1 = Object.assign(obj);
          obj.openLazy(asyncRequireImpl(11823, dependencyMap.paths), combined1, obj);
          const tmp5 = asyncRequireImpl(11823, dependencyMap.paths);
        }
      };
      return <tmp4Result model={null} onTap={null} />;
    }
  }
  memo = state.selectedOptions;
  let tmp5 = guild_id(customId[5]);
}
