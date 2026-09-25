// discord_app/modules/application_commands/ApplicationCommandAutocompleteStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Server from "../../flow/Server.tsx";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import ApplicationCommandStore from "ApplicationCommandStore.tsx";

require = fn;
function handleInit() {
  map.clear();
  map1.clear();
  return true;
}
function handleSetActiveCommand(arg0) {
  ({ channelId, command } = arg0);
  if (command != null) {
    const id = command.id;
  }
  const activeOptionName = ApplicationCommandStore.getActiveOptionName(channelId);
  value = map1.get(channelId);
  let tmp3 = null != value;
  if (tmp3) {
    tmp3 = id !== value.commandId || activeOptionName !== value.optionName;
    const tmp4 = id !== value.commandId || activeOptionName !== value.optionName;
  }
  if (tmp3) {
    if (tmp5) {
      value.optionNameToLastResults.clear();
      const optionNameToNonce = value.optionNameToNonce;
      optionNameToNonce.clear();
      const optionNameToLastQuery = value.optionNameToLastQuery;
      optionNameToLastQuery.clear();
      const optionNameToAutocompleteQueries = value.optionNameToAutocompleteQueries;
      optionNameToAutocompleteQueries.clear();
      const optionNameToLastResults = value.optionNameToLastResults;
    }
    value.lastErrored = false;
    value.commandId = id;
    value.optionName = activeOptionName;
    tmp5 = null != id && id !== value.commandId;
  }
}
const AnalyticEvents = fn(1074).AnalyticEvents;
let map = new Map();
let map1 = new Map();
let map2 = new Map();
const PlatformUtils = fn(1364);
let closure_7 = PlatformUtils.isDesktop();
const Store = initializeDefault.Store;
class ApplicationCommandAutocompleteStore extends Store {}
const prototype = ApplicationCommandAutocompleteStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ApplicationCommandStore);
};
prototype["getLastErrored"] = function getLastErrored(id) {
  if (!map1.has(id)) {
    const activeCommand = ApplicationCommandStore.getActiveCommand(id);
    id = undefined;
    if (activeCommand != null) {
      id = activeCommand.id;
    }
    const obj3 = {
      commandId: id,
      optionName: ApplicationCommandStore.getActiveOptionName(id),
      optionNameToAutocompleteQueries: null,
      optionNameToLastResults: null,
      optionNameToNonce: null,
      optionNameToLastQuery: null,
      lastErrored: false,
      lastResponseNonce: "channel",
    };
    const _Map = Map;
    map = new Map();
    obj3.optionNameToAutocompleteQueries = map;
    const _Map2 = Map;
    map1 = new Map();
    obj3.optionNameToLastResults = map1;
    const _Map3 = Map;
    map2 = new Map();
    obj3.optionNameToNonce = map2;
    const _Map4 = Map;
    const map3 = new Map();
    obj3.optionNameToLastQuery = map3;
    const result = obj.set(id, obj3);
  }
  return map1.get(id).lastErrored;
};
prototype["getAutocompleteChoices"] = function getAutocompleteChoices(id, name, query) {
  if (!map1.has(id)) {
    const activeCommand = ApplicationCommandStore.getActiveCommand(id);
    id = undefined;
    if (activeCommand != null) {
      id = activeCommand.id;
    }
    const obj3 = {
      commandId: id,
      optionName: ApplicationCommandStore.getActiveOptionName(id),
      optionNameToAutocompleteQueries: null,
      optionNameToLastResults: null,
      optionNameToNonce: null,
      optionNameToLastQuery: null,
      lastErrored: false,
      lastResponseNonce: "channel",
    };
    const _Map = Map;
    map = new Map();
    obj3.optionNameToAutocompleteQueries = map;
    const _Map2 = Map;
    map1 = new Map();
    obj3.optionNameToLastResults = map1;
    const _Map3 = Map;
    map2 = new Map();
    obj3.optionNameToNonce = map2;
    const _Map4 = Map;
    const map3 = new Map();
    obj3.optionNameToLastQuery = map3;
    const result = obj.set(id, obj3);
  }
  const optionNameToAutocompleteQueries = obj.get(id).optionNameToAutocompleteQueries;
  value = optionNameToAutocompleteQueries.get(name);
  value2 = undefined;
  if (value != null) {
    value2 = value.get(query);
  }
  return value2;
};
prototype["getAutocompleteLastChoices"] = function getAutocompleteLastChoices(id, name) {
  if (!map1.has(id)) {
    const activeCommand = ApplicationCommandStore.getActiveCommand(id);
    id = undefined;
    if (activeCommand != null) {
      id = activeCommand.id;
    }
    const obj3 = {
      commandId: id,
      optionName: ApplicationCommandStore.getActiveOptionName(id),
      optionNameToAutocompleteQueries: null,
      optionNameToLastResults: null,
      optionNameToNonce: null,
      optionNameToLastQuery: null,
      lastErrored: false,
      lastResponseNonce: "channel",
    };
    const _Map = Map;
    map = new Map();
    obj3.optionNameToAutocompleteQueries = map;
    const _Map2 = Map;
    map1 = new Map();
    obj3.optionNameToLastResults = map1;
    const _Map3 = Map;
    map2 = new Map();
    obj3.optionNameToNonce = map2;
    const _Map4 = Map;
    const map3 = new Map();
    obj3.optionNameToLastQuery = map3;
    const result = obj.set(id, obj3);
  }
  return map1.get(id).optionNameToLastResults.get(name);
};
prototype["getLastResponseNonce"] = function getLastResponseNonce(id) {
  if (!map1.has(id)) {
    const activeCommand = ApplicationCommandStore.getActiveCommand(id);
    id = undefined;
    if (activeCommand != null) {
      id = activeCommand.id;
    }
    const obj3 = {
      commandId: id,
      optionName: ApplicationCommandStore.getActiveOptionName(id),
      optionNameToAutocompleteQueries: null,
      optionNameToLastResults: null,
      optionNameToNonce: null,
      optionNameToLastQuery: null,
      lastErrored: false,
      lastResponseNonce: "channel",
    };
    const _Map = Map;
    map = new Map();
    obj3.optionNameToAutocompleteQueries = map;
    const _Map2 = Map;
    map1 = new Map();
    obj3.optionNameToLastResults = map1;
    const _Map3 = Map;
    map2 = new Map();
    obj3.optionNameToNonce = map2;
    const _Map4 = Map;
    const map3 = new Map();
    obj3.optionNameToLastQuery = map3;
    const result = obj.set(id, obj3);
  }
  return map1.get(id).lastResponseNonce;
};
ApplicationCommandAutocompleteStore.displayName = "ApplicationCommandAutocompleteStore";
const applicationCommandAutocompleteStore = new ApplicationCommandAutocompleteStore(DispatcherDefault, {
  CONNECTION_OPEN: handleInit,
  LOGOUT: handleInit,
  CHANNEL_SELECT: handleInit,
  APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function handleApplicationCommandAutocompleteRequest(arg0) {
    ({ nonce, channelId, query, name } = arg0);
    if (!map1.has(channelId)) {
      const activeCommand = ApplicationCommandStore.getActiveCommand(channelId);
      let id;
      if (activeCommand != null) {
        id = activeCommand.id;
      }
      const obj3 = {
        commandId: id,
        optionName: ApplicationCommandStore.getActiveOptionName(channelId),
        optionNameToAutocompleteQueries: null,
        optionNameToLastResults: null,
        optionNameToNonce: null,
        optionNameToLastQuery: null,
        lastErrored: false,
        lastResponseNonce: "channel",
      };
      const _Map = Map;
      map = new Map();
      obj3.optionNameToAutocompleteQueries = map;
      const _Map2 = Map;
      map1 = new Map();
      obj3.optionNameToLastResults = map1;
      const _Map3 = Map;
      map2 = new Map();
      obj3.optionNameToNonce = map2;
      const _Map4 = Map;
      const map3 = new Map();
      obj3.optionNameToLastQuery = map3;
      const result = obj.set(channelId, obj3);
    }
    value = obj.get(channelId);
    const optionNameToLastQuery = value.optionNameToLastQuery;
    if (optionNameToLastQuery.get(name) === query) {
      return false;
    } else {
      const optionNameToLastQuery2 = value.optionNameToLastQuery;
      const result1 = optionNameToLastQuery2.set(name, query);
      const optionNameToAutocompleteQueries = value.optionNameToAutocompleteQueries;
      const value4 = optionNameToAutocompleteQueries.get(name);
      let value5;
      if (value4 != null) {
        value5 = value4.get(query);
      }
      if (null != value5) {
        value.lastErrored = false;
        const result2 = value.optionNameToLastResults.set(name, value5);
        return true;
      } else {
        const optionNameToNonce2 = value.optionNameToNonce;
        const value6 = optionNameToNonce2.get(name);
        if (null != value6) {
          map.delete(value6);
        }
        const obj4 = { channelId, query, name };
        const result3 = map.set(nonce, obj4);
        const _Date = Date;
        const date = new Date();
        const result4 = map2.set(nonce, date);
        const optionNameToNonce = value.optionNameToNonce;
        const result5 = optionNameToNonce.set(name, nonce);
        let flag;
        if (value.lastErrored) {
          value.lastErrored = false;
          flag = true;
        }
        return flag;
      }
    }
  },
  APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function handleApplicationCommandAutocompleteResponse(arg0) {
    ({ choices, nonce } = arg0);
    closure_0 = undefined;
    value = map.get(nonce);
    if (null == value) {
      return false;
    } else {
      obj.delete(nonce);
      const channelId = value.channelId;
      if (!map1.has(channelId)) {
        const activeCommand = ApplicationCommandStore.getActiveCommand(channelId);
        let id;
        if (activeCommand != null) {
          id = activeCommand.id;
        }
        const obj3 = {
          commandId: id,
          optionName: ApplicationCommandStore.getActiveOptionName(channelId),
          optionNameToAutocompleteQueries: null,
          optionNameToLastResults: null,
          optionNameToNonce: null,
          optionNameToLastQuery: null,
          lastErrored: false,
          lastResponseNonce: "channel",
        };
        const _Map = Map;
        map = new Map();
        obj3.optionNameToAutocompleteQueries = map;
        const _Map2 = Map;
        map1 = new Map();
        obj3.optionNameToLastResults = map1;
        const _Map3 = Map;
        map2 = new Map();
        obj3.optionNameToNonce = map2;
        const _Map4 = Map;
        const map3 = new Map();
        obj3.optionNameToLastQuery = map3;
        const result = obj10.set(channelId, obj3);
      }
      const value4 = obj10.get(channelId);
      const optionNameToAutocompleteQueries = value4.optionNameToAutocompleteQueries;
      if (null == optionNameToAutocompleteQueries.get(value.name)) {
        const optionNameToAutocompleteQueries2 = value4.optionNameToAutocompleteQueries;
        const _Map5 = Map;
        const map4 = new Map();
        const result1 = optionNameToAutocompleteQueries2.set(value.name, map4);
      }
      let tmp29 = closure_7;
      if (closure_7) {
        const activeOption = ApplicationCommandStore.getActiveOption(value.channelId);
        let type;
        if (activeOption != null) {
          type = activeOption.type;
        }
        tmp29 = type === Server.ApplicationCommandOptionType.INTEGER;
      }
      closure_0 = tmp29;
      let mapped;
      if (choices != null) {
        mapped = choices.map((item) => {
          ({ value, name_localized, name } = item);
          if (name_localized == null) {
            name_localized = name;
          }
          const obj = { displayName: name_localized, name, value: null };
          let NumberResult = value;
          if (closure_0) {
            const _Number = Number;
            NumberResult = Number(value);
          }
          obj.value = NumberResult;
          return obj;
        });
      }
      if (mapped == null) {
        mapped = [];
      }
      const value5 = map2.get(nonce);
      let num = 0;
      if (null != value5) {
        const _Date = Date;
        const date = new Date();
        const time = date.getTime();
        num = time - value5.getTime();
      }
      const obj5 = { duration_ms: num, error: false, num_options: mapped.length };
      AppAnalyticsUtils.trackWithMetadata(
        AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE,
        obj5,
      );
      map2.delete(nonce);
      const optionNameToAutocompleteQueries3 = value4.optionNameToAutocompleteQueries;
      const value6 = optionNameToAutocompleteQueries3.get(value.name);
      if (value6 != null) {
        const result2 = value6.set(value.query, mapped);
      }
      const optionNameToLastQuery = value4.optionNameToLastQuery;
      if (optionNameToLastQuery.get(value.name) === value.query) {
        value4.lastErrored = false;
        const result3 = value4.optionNameToLastResults.set(value.name, mapped);
        const optionNameToLastResults = value4.optionNameToLastResults;
      }
      value4.lastResponseNonce = nonce;
      return true;
    }
    obj = map;
  },
  INTERACTION_FAILURE: function handleInteractionFailure(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      value = map.get(nonce);
      if (null == value) {
        return false;
      } else {
        obj7.delete(nonce);
        value2 = map2.get(nonce);
        let num = 0;
        if (null != value2) {
          const _Date = Date;
          const date = new Date();
          const time = date.getTime();
          num = time - value2.getTime();
        }
        const obj = { duration_ms: num, error: true };
        AppAnalyticsUtils.trackWithMetadata(
          AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE,
          obj,
        );
        map2.delete(nonce);
        const channelId = value.channelId;
        if (!map1.has(channelId)) {
          const activeCommand = ApplicationCommandStore.getActiveCommand(channelId);
          let id;
          if (activeCommand != null) {
            id = activeCommand.id;
          }
          const obj3 = {
            commandId: id,
            optionName: ApplicationCommandStore.getActiveOptionName(channelId),
            optionNameToAutocompleteQueries: null,
            optionNameToLastResults: null,
            optionNameToNonce: null,
            optionNameToLastQuery: null,
            lastErrored: false,
            lastResponseNonce: "channel",
          };
          const _Map = Map;
          map = new Map();
          obj3.optionNameToAutocompleteQueries = map;
          const _Map2 = Map;
          map1 = new Map();
          obj3.optionNameToLastResults = map1;
          const _Map3 = Map;
          map2 = new Map();
          obj3.optionNameToNonce = map2;
          const _Map4 = Map;
          const map3 = new Map();
          obj3.optionNameToLastQuery = map3;
          const result = obj4.set(channelId, obj3);
        }
        map1.get(channelId).lastErrored = true;
        return true;
      }
      obj7 = map;
    }
  },
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: handleSetActiveCommand,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: handleSetActiveCommand,
  APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function handleUpdateChannelState(arg0) {
    ({ channelId, command } = arg0);
    if (command != null) {
      const id = command.id;
    }
    const activeOptionName = ApplicationCommandStore.getActiveOptionName(channelId);
    value = map1.get(channelId);
    let tmp3 = null != value;
    if (tmp3) {
      tmp3 = id !== value.commandId || activeOptionName !== value.optionName;
      const tmp4 = id !== value.commandId || activeOptionName !== value.optionName;
    }
    if (tmp3) {
      if (tmp5) {
        value.optionNameToLastResults.clear();
        const optionNameToNonce = value.optionNameToNonce;
        optionNameToNonce.clear();
        const optionNameToLastQuery = value.optionNameToLastQuery;
        optionNameToLastQuery.clear();
        const optionNameToAutocompleteQueries = value.optionNameToAutocompleteQueries;
        optionNameToAutocompleteQueries.clear();
        const optionNameToLastResults = value.optionNameToLastResults;
      }
      value.lastErrored = false;
      value.commandId = id;
      value.optionName = activeOptionName;
      tmp5 = null != id && id !== value.commandId;
    }
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandAutocompleteStore.tsx");

export default applicationCommandAutocompleteStore;
