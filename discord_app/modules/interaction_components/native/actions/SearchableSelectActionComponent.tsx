// === Module 15608: SearchableSelectActionComponent ===

// Module 15608 (SearchableSelectActionComponent)
import Fragment from "Fragment" /* 21 */;
import Server from "Server" /* 1985 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import SearchableSelectActionComponentUtils from "SearchableSelectActionComponentUtils" /* 7814 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/SearchableSelectActionComponent.tsx");

export default function SearchableSelectActionComponent(type) {
  let customId;
  let executeStateUpdate;
  let guild_id;
  let obj4;
  let tmpResult;
  let tmpResult2;
  let visualState;
  _require = type;
  type = type.type;
  let obj = require("InteractionComponentUtils");
  const selectPlaceholder = obj.getSelectPlaceholder(type);
  let obj2 = require("ComponentStateContext");
  const componentStateContext = obj2.useComponentStateContext();
  let modal;
  const tmp5 = guild_id(customId[5]);
  if (componentStateContext != null) {
    modal = componentStateContext.modal;
  }
  tmp5(null != modal, "SearchableSelectActionComponent must be rendered inside a modal ComponentStateContext");
  let channelId;
  const tmp4Result = guild_id(customId[5]);
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
  const items = [type.defaultValues, guild_id];
  let memo = obj4.useMemo(() => {
    const obj = SearchableSelectActionComponentUtils;
    let snowflakeSelectDefaultValues = obj.getSnowflakeSelectDefaultValues(type.defaultValues, guild_id);
    if (snowflakeSelectDefaultValues == null) {
      snowflakeSelectDefaultValues = [];
    }
    return snowflakeSelectDefaultValues;
  }, items);
  let tmp13;
  const useComponentState = componentStateContext.useComponentState;
  if (memo.length > 0) {
    tmp13 = { type, selectedOptions: memo };
    const obj3 = { type, selectedOptions: memo };
  }
  const componentState = useComponentState(type, tmp13);
  const state = componentState.state;
  customId = componentStateContext.modal.customId;
  let type1;
  ({ visualState, executeStateUpdate } = componentState);
  if (state != null) {
    type1 = state.type;
  }
  if (type1 !== require("Server").ComponentType.USER_SELECT) {
    let type2;
    if (state != null) {
      type2 = state.type;
    }
    if (type2 !== require("Server").ComponentType.ROLE_SELECT) {
      let type3;
      if (state != null) {
        type3 = state.type;
      }
      if (type3 !== require("Server").ComponentType.MENTIONABLE_SELECT) {
        let type4;
        if (state != null) {
          type4 = state.type;
        }
      }
      const parents = componentStateContext.getParents(type);
      let first;
      if (parents != null) {
        first = parents[0];
      }
      let type5;
      if (first != null) {
        type5 = first.type;
      }
      let tmp22;
      if (type5 === require("Server").ComponentType.LABEL) {
        tmp22 = first;
      }
      obj4 = { channelId: componentStateContext.channelId, guildId: guild_id, containerId: customId, onSubmit: executeStateUpdate, labelComponent: tmp22, allowEmpty: tmpResult.canSelectBeEmpty(type, "modal") };
      tmpResult = require("InteractionComponentUtils");
      const obj6 = { placeholder: selectPlaceholder, state: visualState, selectedOptions: tmpResult2.transformSearchableSelectOptions(memo, guild_id) };
      guild_id(customId[8]);
      let merged = Object.assign(type);
      tmpResult2 = require("NativeSearchableSelectActionComponentUtils");
      return <tmp4Result2 model={obj6} onTap={function onTap() {
        if (type.type === Server.ComponentType.CHANNEL_SELECT) {
          const openLazy2 = ActionSheetActionCreatorsDefault.openLazy;
          const _HermesInternal2 = HermesInternal;
          ActionSheetActionCreatorsDefault;
          const obj2 = { selectionActionComponent: type };
          const tmp16 = asyncRequire(11450, dependencyMap.paths);
          const combined = "ChannelSelectComponentActionSheet:" + customId;
          const merged = Object.assign(obj4);
          openLazy2(tmp16, combined, obj2);
        } else {
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          const _HermesInternal = HermesInternal;
          ActionSheetActionCreatorsDefault;
          const obj = { selectionActionComponent: type };
          const tmp6 = asyncRequire(11446, dependencyMap.paths);
          const combined1 = "MentionableSelectComponentActionSheet:" + customId;
          const merged1 = Object.assign(obj4);
          openLazy(tmp6, combined1, obj);
        }
      }} />;
    }
  }
  memo = state.selectedOptions;
};