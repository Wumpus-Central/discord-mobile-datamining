// === Module 15168: SearchableSelectActionComponent ===

// Module 15168 (SearchableSelectActionComponent)
import closure_3 from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/interaction_components/native/actions/SearchableSelectActionComponent.tsx");

export default function SearchableSelectActionComponent(defaultValues) {
  const _require = defaultValues;
  let obj = _require(customId[3]);
  const selectPlaceholder = obj.getSelectPlaceholder(defaultValues);
  obj1 = _require(customId[4]);
  const componentStateContext = obj1.useComponentStateContext();
  let modal;
  if (componentStateContext != null) {
    modal = componentStateContext.modal;
  }
  guild_id(customId[5])(null != modal, "SearchableSelectActionComponent must be rendered inside a modal ComponentStateContext");
  let channelId;
  let tmp4Result = tmp4(tmp2[5]);
  if (componentStateContext != null) {
    channelId = componentStateContext.channelId;
  }
  tmp4Result(null != channelId, "SearchableSelectActionComponent must be used inside a channel");
  channel = channel.getChannel(componentStateContext.channelId);
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  const items = [defaultValues.defaultValues, guild_id];
  let memo = obj.useMemo(() => {
    let snowflakeSelectDefaultValues = defaultValues(customId[6]).getSnowflakeSelectDefaultValues(defaultValues.defaultValues, guild_id);
    if (snowflakeSelectDefaultValues == null) {
      snowflakeSelectDefaultValues = [];
    }
    return snowflakeSelectDefaultValues;
  }, items);
  let tmp13;
  if (memo.length > 0) {
    obj = { type: null, selectedOptions: null };
    obj[0] = defaultValues.type;
    obj[1] = memo;
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
  if (type !== _require(customId[7]).ComponentType.USER_SELECT) {
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
      obj = { channelId: null, guildId: null, containerId: null, onSubmit: null, labelComponent: null, allowEmpty: null };
      obj[0] = componentStateContext.channelId;
      obj[1] = guild_id;
      obj[2] = customId;
      obj[3] = executeStateUpdate;
      obj[4] = tmp22;
      let tmpResult = tmp(tmp2[3]);
      obj[5] = tmpResult.canSelectBeEmpty(defaultValues, "modal");
      obj1 = { model: null, onTap: null };
      const obj2 = {};
      tmp4Result = tmp4(tmp2[8]);
      let merged = Object.assign(defaultValues);
      obj2.placeholder = selectPlaceholder;
      obj2.state = visualState;
      tmpResult = tmp(tmp2[9]);
      obj2.selectedOptions = tmpResult.transformSearchableSelectOptions(memo, guild_id);
      obj1[0] = obj2;
      obj1[1] = function onTap() {
        if (defaultValues.type === defaultValues(customId[7]).ComponentType.CHANNEL_SELECT) {
          const _HermesInternal2 = HermesInternal;
          const obj3 = guild_id(tmp3[10]);
          obj = { selectionActionComponent: null };
          obj[0] = tmp;
          const combined = "ChannelSelectComponentActionSheet:" + customId;
          const merged = Object.assign(obj);
          obj3.openLazy(tmp2(tmp3[12])(tmp3[11], tmp3.paths), combined, obj);
          const tmp14 = tmp2(tmp3[12])(tmp3[11], tmp3.paths);
        } else {
          obj = guild_id(tmp3[10]);
          const _HermesInternal = HermesInternal;
          obj = { selectionActionComponent: null };
          obj[0] = tmp;
          const combined1 = "MentionableSelectComponentActionSheet:" + customId;
          const merged1 = Object.assign(obj);
          obj.openLazy(tmp2(tmp3[12])(tmp3[13], tmp3.paths), combined1, obj);
          const tmp5 = tmp2(tmp3[12])(tmp3[13], tmp3.paths);
        }
      };
      return <tmp4Result model={null} onTap={null} />;
    }
  }
  memo = state.selectedOptions;
};