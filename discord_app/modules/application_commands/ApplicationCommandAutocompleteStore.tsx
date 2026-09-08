// === Module 7779: ApplicationCommandAutocompleteStore ===

// Module 7779 (ApplicationCommandAutocompleteStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Server from "Server" /* 1894 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 7780 */;

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
let PlatformUtils = fn(1115);
let closure_7 = PlatformUtils.isDesktop();
const Store = initializeDefault.Store;
class ApplicationCommandAutocompleteStore extends Store {
}
const prototype = ApplicationCommandAutocompleteStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ApplicationCommandStore);
};
prototype["getLastErrored"] = function getLastErrored(id) {
  let obj = map1;
  if (!map1.has(id)) {
    const activeCommand = ApplicationCommandStore.getActiveCommand(id);
    id = undefined;
    if (activeCommand != null) {
      id = activeCommand.id;
    }
    obj = { commandId: id, optionName: ApplicationCommandStore.getActiveOptionName(id), optionNameToAutocompleteQueries: null, optionNameToLastResults: null, optionNameToNonce: null, optionNameToLastQuery: null, lastErrored: false, lastResponseNonce: "call" };
    const _Map = Map;
    map = new Map();
    obj.optionNameToAutocompleteQueries = map;
    const _Map2 = Map;
    map1 = new Map();
    obj.optionNameToLastResults = map1;
    const _Map3 = Map;
    map2 = new Map();
    obj.optionNameToNonce = map2;
    const _Map4 = Map;
    const map3 = new Map();
    obj.optionNameToLastQuery = map3;
    const result = obj.set(id, obj);
  }
  return obj.get(id).lastErrored;
};
prototype["getAutocompleteChoices"] = function getAutocompleteChoices(id, name, query) {
  let obj = map1;
  if (!map1.has(id)) {
    const activeCommand = ApplicationCommandStore.getActiveCommand(id);
    id = undefined;
    if (activeCommand != null) {
      id = activeCommand.id;
    }
    obj = { commandId: id, optionName: ApplicationCommandStore.getActiveOptionName(id), optionNameToAutocompleteQueries: null, optionNameToLastResults: null, optionNameToNonce: null, optionNameToLastQuery: null, lastErrored: false, lastResponseNonce: "call" };
    const _Map = Map;
    map = new Map();
    obj.optionNameToAutocompleteQueries = map;
    const _Map2 = Map;
    map1 = new Map();
    obj.optionNameToLastResults = map1;
    const _Map3 = Map;
    map2 = new Map();
    obj.optionNameToNonce = map2;
    const _Map4 = Map;
    const map3 = new Map();
    obj.optionNameToLastQuery = map3;
    const result = obj.set(id, obj);
  }
  const optionNameToAutocompleteQueries = obj.get(id).optionNameToAutocompleteQueries;
  optionNameToAutocompleteQueries.get(name);
  value = undefined;
  if (value != null) {
    value = value.get(query);
  }
  return value;
};
prototype["getAutocompleteLastChoices"] = function getAutocompleteLastChoices(id, name) {
  let obj = map1;
  if (!map1.has(id)) {
    const activeCommand = ApplicationCommandStore.getActiveCommand(id);
    id = undefined;
    if (activeCommand != null) {
      id = activeCommand.id;
    }
    obj = { commandId: id, optionName: ApplicationCommandStore.getActiveOptionName(id), optionNameToAutocompleteQueries: null, optionNameToLastResults: null, optionNameToNonce: null, optionNameToLastQuery: null, lastErrored: false, lastResponseNonce: "call" };
    const _Map = Map;
    map = new Map();
    obj.optionNameToAutocompleteQueries = map;
    const _Map2 = Map;
    map1 = new Map();
    obj.optionNameToLastResults = map1;
    const _Map3 = Map;
    map2 = new Map();
    obj.optionNameToNonce = map2;
    const _Map4 = Map;
    const map3 = new Map();
    obj.optionNameToLastQuery = map3;
    const result = obj.set(id, obj);
  }
  return obj.get(id).optionNameToLastResults.get(name);
};
prototype["getLastResponseNonce"] = function getLastResponseNonce(id) {
  let obj = map1;
  if (!map1.has(id)) {
    const activeCommand = ApplicationCommandStore.getActiveCommand(id);
    id = undefined;
    if (activeCommand != null) {
      id = activeCommand.id;
    }
    obj = { commandId: id, optionName: ApplicationCommandStore.getActiveOptionName(id), optionNameToAutocompleteQueries: null, optionNameToLastResults: null, optionNameToNonce: null, optionNameToLastQuery: null, lastErrored: false, lastResponseNonce: "call" };
    const _Map = Map;
    map = new Map();
    obj.optionNameToAutocompleteQueries = map;
    const _Map2 = Map;
    map1 = new Map();
    obj.optionNameToLastResults = map1;
    const _Map3 = Map;
    map2 = new Map();
    obj.optionNameToNonce = map2;
    const _Map4 = Map;
    const map3 = new Map();
    obj.optionNameToLastQuery = map3;
    const result = obj.set(id, obj);
  }
  return obj.get(id).lastResponseNonce;
};
ApplicationCommandAutocompleteStore.displayName = "ApplicationCommandAutocompleteStore";
PlatformUtils = {
  CONNECTION_OPEN: handleInit,
  LOGOUT: handleInit,
  CHANNEL_SELECT: handleInit,
  APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function handleApplicationCommandAutocompleteRequest(arg0) {
    ({ nonce, channelId, query, name } = arg0);
    let obj = map1;
    if (!map1.has(channelId)) {
      const activeCommand = ApplicationCommandStore.getActiveCommand(channelId);
      let id;
      if (activeCommand != null) {
        id = activeCommand.id;
      }
      obj = { commandId: id, optionName: ApplicationCommandStore.getActiveOptionName(channelId), optionNameToAutocompleteQueries: null, optionNameToLastResults: null, optionNameToNonce: null, optionNameToLastQuery: null, lastErrored: false, lastResponseNonce: "call" };
      const _Map = Map;
      map = new Map();
      obj.optionNameToAutocompleteQueries = map;
      const _Map2 = Map;
      map1 = new Map();
      obj.optionNameToLastResults = map1;
      const _Map3 = Map;
      map2 = new Map();
      obj.optionNameToNonce = map2;
      const _Map4 = Map;
      const map3 = new Map();
      obj.optionNameToLastQuery = map3;
      const result = obj.set(channelId, obj);
    }
    value = obj.get(channelId);
    const optionNameToLastQuery = value.optionNameToLastQuery;
    if (optionNameToLastQuery.get(name) === query) {
      return false;
    } else {
      const optionNameToLastQuery2 = value.optionNameToLastQuery;
      const result1 = optionNameToLastQuery2.set(name, query);
      const optionNameToAutocompleteQueries = value.optionNameToAutocompleteQueries;
      value = optionNameToAutocompleteQueries.get(name);
      let value1;
      if (value != null) {
        value1 = value.get(query);
      }
      if (null != value1) {
        value.lastErrored = false;
        const result2 = value.optionNameToLastResults.set(name, value1);
        return true;
      } else {
        const optionNameToNonce2 = value.optionNameToNonce;
        value2 = optionNameToNonce2.get(name);
        if (null != value2) {
          map.delete(value2);
        }
        obj = { channelId, query, name };
        const result3 = map.set(nonce, obj);
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
    let obj = map;
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
        obj = { commandId: id, optionName: ApplicationCommandStore.getActiveOptionName(channelId), optionNameToAutocompleteQueries: null, optionNameToLastResults: null, optionNameToNonce: null, optionNameToLastQuery: null, lastErrored: false, lastResponseNonce: "call" };
        const _Map = Map;
        map = new Map();
        obj.optionNameToAutocompleteQueries = map;
        const _Map2 = Map;
        map1 = new Map();
        obj.optionNameToLastResults = map1;
        const _Map3 = Map;
        map2 = new Map();
        obj.optionNameToNonce = map2;
        const _Map4 = Map;
        const map3 = new Map();
        obj.optionNameToLastQuery = map3;
        const result = obj10.set(channelId, obj);
      }
      value = obj10.get(channelId);
      const optionNameToAutocompleteQueries = value.optionNameToAutocompleteQueries;
      if (null == optionNameToAutocompleteQueries.get(value.name)) {
        const optionNameToAutocompleteQueries2 = value.optionNameToAutocompleteQueries;
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
      const value1 = map2.get(nonce);
      let num = 0;
      if (null != value1) {
        const _Date = Date;
        const date = new Date();
        const time = date.getTime();
        num = time - value1.getTime();
      }
      obj = { duration_ms: num, error: false, num_options: mapped.length };
      AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, obj);
      map2.delete(nonce);
      const optionNameToAutocompleteQueries3 = value.optionNameToAutocompleteQueries;
      value2 = optionNameToAutocompleteQueries3.get(value.name);
      if (value2 != null) {
        const result2 = value2.set(value.query, mapped);
      }
      const optionNameToLastQuery = value.optionNameToLastQuery;
      if (optionNameToLastQuery.get(value.name) === value.query) {
        value.lastErrored = false;
        const result3 = value.optionNameToLastResults.set(value.name, mapped);
        const optionNameToLastResults = value.optionNameToLastResults;
      }
      value.lastResponseNonce = nonce;
      return true;
    }
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
        value = map2.get(nonce);
        let num = 0;
        if (null != value) {
          const _Date = Date;
          const date = new Date();
          const time = date.getTime();
          num = time - value.getTime();
        }
        let obj = { duration_ms: num, error: true };
        AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, obj);
        map2.delete(nonce);
        const channelId = value.channelId;
        if (!map1.has(channelId)) {
          const activeCommand = ApplicationCommandStore.getActiveCommand(channelId);
          let id;
          if (activeCommand != null) {
            id = activeCommand.id;
          }
          obj = { commandId: id, optionName: ApplicationCommandStore.getActiveOptionName(channelId), optionNameToAutocompleteQueries: null, optionNameToLastResults: null, optionNameToNonce: null, optionNameToLastQuery: null, lastErrored: false, lastResponseNonce: "call" };
          const _Map = Map;
          map = new Map();
          obj.optionNameToAutocompleteQueries = map;
          const _Map2 = Map;
          map1 = new Map();
          obj.optionNameToLastResults = map1;
          const _Map3 = Map;
          map2 = new Map();
          obj.optionNameToNonce = map2;
          const _Map4 = Map;
          const map3 = new Map();
          obj.optionNameToLastQuery = map3;
          const result = obj4.set(channelId, obj);
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
  }
};
const applicationCommandAutocompleteStore = new ApplicationCommandAutocompleteStore(DispatcherDefault, PlatformUtils);
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandAutocompleteStore.tsx");

export default applicationCommandAutocompleteStore;