// discord_app/modules/interaction_components/native/actions/SearchableSelectActionComponent.tsx
import Server from "../../../../flow/Server.tsx";
import asyncRequireImpl from "../../../../../_runtime/01981_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import SearchableSelectActionComponentUtils from "../../SearchableSelectActionComponentUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/interaction_components/native/actions/SearchableSelectActionComponent.tsx",
);

export default function SearchableSelectActionComponent(defaultValues) {
  _require = defaultValues;
  const selectPlaceholder = require("InteractionComponentUtils").getSelectPlaceholder(defaultValues);
  let obj = require("InteractionComponentUtils");
  const componentStateContext = require("ComponentStateContext").useComponentStateContext();
  let modal;
  let obj2 = require("ComponentStateContext");
  if (componentStateContext != null) {
    modal = componentStateContext.modal;
  }
  guild_id(customId[5])(
    null != modal,
    "SearchableSelectActionComponent must be rendered inside a modal ComponentStateContext",
  );
  let channelId;
  let tmp5 = guild_id(customId[5]);
  if (componentStateContext != null) {
    channelId = componentStateContext.channelId;
  }
  guild_id(customId[5])(null != channelId, "SearchableSelectActionComponent must be used inside a channel");
  const channel = ChannelStore.getChannel(componentStateContext.channelId);
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  const items = [defaultValues.defaultValues, guild_id];
  let memo = obj4.useMemo(() => {
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
    let obj3 = { type: defaultValues.type, selectedOptions: memo };
    tmp13 = obj3;
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
      obj4 = {
        channelId: componentStateContext.channelId,
        guildId: guild_id,
        containerId: customId,
        onSubmit: executeStateUpdate,
        labelComponent: tmp22,
        allowEmpty: tmp(tmp2[3]).canSelectBeEmpty(defaultValues, "modal"),
      };
      const obj5 = { model: null, onTap: null };
      const obj6 = {};
      const tmpResult = tmp(tmp2[3]);
      let merged = Object.assign(defaultValues);
      obj6.placeholder = selectPlaceholder;
      obj6.state = visualState;
      const tmp4Result2 = tmp4(tmp2[8]);
      obj6.selectedOptions = tmp(tmp2[9]).transformSearchableSelectOptions(memo, guild_id);
      obj5.model = obj6;
      obj5.onTap = function onTap() {
        if (defaultValues.type === Server.ComponentType.CHANNEL_SELECT) {
          const _HermesInternal2 = HermesInternal;
          const obj3 = ActionSheetActionCreatorsDefault;
          const obj2 = { selectionActionComponent: defaultValues };
          const combined = "ChannelSelectComponentActionSheet:" + customId;
          const merged = Object.assign(obj4);
          obj3.openLazy(asyncRequireImpl(11305, dependencyMap.paths), combined, obj2);
          const tmp14 = asyncRequireImpl(11305, dependencyMap.paths);
        } else {
          const _HermesInternal = HermesInternal;
          const obj = ActionSheetActionCreatorsDefault;
          obj4 = { selectionActionComponent: defaultValues };
          const combined1 = "MentionableSelectComponentActionSheet:" + customId;
          const merged1 = Object.assign(obj4);
          obj.openLazy(asyncRequireImpl(11301, dependencyMap.paths), combined1, obj4);
          const tmp5 = asyncRequireImpl(11301, dependencyMap.paths);
        }
      };
      return <tmp4Result2 model={null} onTap={null} />;
    }
  }
  memo = state.selectedOptions;
  const tmp4Result = guild_id(customId[5]);
}
