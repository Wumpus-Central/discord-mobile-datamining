// discord_app/modules/application_commands/ApplicationCommandAutocompleteStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import Server from "../../flow/Server.tsx";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import ApplicationCommandStore from "ApplicationCommandStore.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set, set2;

function handleInit() {
  map.clear();
  map1.clear();
  return true;
}
function handleSetActiveCommand(arg0) {
  let channelId;
  let command;
  let id;
  ({ channelId, command } = arg0);
  if (command != null) {
    id = command.id;
  }
  const activeOptionName = ApplicationCommandStore.getActiveOptionName(channelId);
  const value = map1.get(channelId);
  let tmp3 = null != value;
  if (tmp3) {
    tmp3 = id !== value.commandId || activeOptionName !== value.optionName;
  }
  if (tmp3) {
    const tmp5 = null != id && id !== value.commandId;
    if (tmp5) {
      const optionNameToLastResults = value.optionNameToLastResults;
      optionNameToLastResults.clear();
      const optionNameToNonce = value.optionNameToNonce;
      optionNameToNonce.clear();
      const optionNameToLastQuery = value.optionNameToLastQuery;
      optionNameToLastQuery.clear();
      const optionNameToContextKey = value.optionNameToContextKey;
      optionNameToContextKey.clear();
      const optionNameToAutocompleteQueries = value.optionNameToAutocompleteQueries;
      optionNameToAutocompleteQueries.clear();
    }
    value.lastErrored = false;
    value.commandId = id;
    value.optionName = activeOptionName;
  }
}
const AnalyticEvents = Constants.AnalyticEvents;
let map = new Map();
let map1 = new Map();
let map2 = new Map();
let closure_7 = PlatformUtils.isDesktop();
const Store = get_initializedDefault.Store;
class ApplicationCommandAutocompleteStore extends Store {
  initialize() {
    this.waitFor(ApplicationCommandStore);
  }
  getLastErrored(id) {
    let map3;
    let map4;
    if (!map1.has(id)) {
      set = map1.set;
      const activeCommand = ApplicationCommandStore.getActiveCommand(id);
      id = undefined;
      if (activeCommand != null) {
        id = activeCommand.id;
      }
      const _Map = Map;
      const self = this;
      const self2 = this;
      const obj3 = {
        commandId: id,
        optionName: ApplicationCommandStore.getActiveOptionName(id),
        optionNameToAutocompleteQueries: map,
        optionNameToLastResults: map1,
        optionNameToNonce: map2,
        optionNameToLastQuery: map3,
        optionNameToContextKey: map4,
        lastErrored: false,
        lastResponseNonce: "applicationId",
      };
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map = new Map();
      map1 = new Map();
      const _Map3 = Map;
      const self5 = this;
      const self6 = this;
      const _Map4 = Map;
      const self7 = this;
      const self8 = this;
      map2 = new Map();
      const _Map5 = Map;
      const self9 = this;
      const self10 = this;
      map3 = new Map();
      map4 = new Map();
      const result = set(id, obj3);
    }
    return map1.get(id).lastErrored;
  }
  getAutocompleteChoices(id, name, query) {
    let map3;
    let map4;
    if (!map1.has(id)) {
      set = map1.set;
      const activeCommand = ApplicationCommandStore.getActiveCommand(id);
      id = undefined;
      if (activeCommand != null) {
        id = activeCommand.id;
      }
      const _Map = Map;
      const self = this;
      const self2 = this;
      const obj3 = {
        commandId: id,
        optionName: ApplicationCommandStore.getActiveOptionName(id),
        optionNameToAutocompleteQueries: map,
        optionNameToLastResults: map1,
        optionNameToNonce: map2,
        optionNameToLastQuery: map3,
        optionNameToContextKey: map4,
        lastErrored: false,
        lastResponseNonce: "applicationId",
      };
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map = new Map();
      map1 = new Map();
      const _Map3 = Map;
      const self5 = this;
      const self6 = this;
      const _Map4 = Map;
      const self7 = this;
      const self8 = this;
      map2 = new Map();
      const _Map5 = Map;
      const self9 = this;
      const self10 = this;
      map3 = new Map();
      map4 = new Map();
      const result = set(id, obj3);
    }
    const optionNameToAutocompleteQueries = obj.get(id).optionNameToAutocompleteQueries;
    const value = optionNameToAutocompleteQueries.get(name);
    let value2;
    if (value != null) {
      value2 = value.get(query);
    }
    return value2;
  }
  getAutocompleteLastChoices(id, name) {
    let map3;
    let map4;
    if (!map1.has(id)) {
      set = map1.set;
      const activeCommand = ApplicationCommandStore.getActiveCommand(id);
      id = undefined;
      if (activeCommand != null) {
        id = activeCommand.id;
      }
      const _Map = Map;
      const self = this;
      const self2 = this;
      const obj3 = {
        commandId: id,
        optionName: ApplicationCommandStore.getActiveOptionName(id),
        optionNameToAutocompleteQueries: map,
        optionNameToLastResults: map1,
        optionNameToNonce: map2,
        optionNameToLastQuery: map3,
        optionNameToContextKey: map4,
        lastErrored: false,
        lastResponseNonce: "applicationId",
      };
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map = new Map();
      map1 = new Map();
      const _Map3 = Map;
      const self5 = this;
      const self6 = this;
      const _Map4 = Map;
      const self7 = this;
      const self8 = this;
      map2 = new Map();
      const _Map5 = Map;
      const self9 = this;
      const self10 = this;
      map3 = new Map();
      map4 = new Map();
      const result = set(id, obj3);
    }
    const optionNameToLastResults = map1.get(id).optionNameToLastResults;
    return optionNameToLastResults.get(name);
  }
  getLastResponseNonce(id) {
    let map3;
    let map4;
    if (!map1.has(id)) {
      set = map1.set;
      const activeCommand = ApplicationCommandStore.getActiveCommand(id);
      id = undefined;
      if (activeCommand != null) {
        id = activeCommand.id;
      }
      const _Map = Map;
      const self = this;
      const self2 = this;
      const obj3 = {
        commandId: id,
        optionName: ApplicationCommandStore.getActiveOptionName(id),
        optionNameToAutocompleteQueries: map,
        optionNameToLastResults: map1,
        optionNameToNonce: map2,
        optionNameToLastQuery: map3,
        optionNameToContextKey: map4,
        lastErrored: false,
        lastResponseNonce: "applicationId",
      };
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map = new Map();
      map1 = new Map();
      const _Map3 = Map;
      const self5 = this;
      const self6 = this;
      const _Map4 = Map;
      const self7 = this;
      const self8 = this;
      map2 = new Map();
      const _Map5 = Map;
      const self9 = this;
      const self10 = this;
      map3 = new Map();
      map4 = new Map();
      const result = set(id, obj3);
    }
    return map1.get(id).lastResponseNonce;
  }
}
const prototype = ApplicationCommandAutocompleteStore.prototype;
ApplicationCommandAutocompleteStore.displayName = "ApplicationCommandAutocompleteStore";
let obj = {
  CONNECTION_OPEN: handleInit,
  LOGOUT: handleInit,
  CHANNEL_SELECT: handleInit,
  APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function handleApplicationCommandAutocompleteRequest(arg0) {
    let channelId;
    let contextKey;
    let map3;
    let map4;
    let name;
    let nonce;
    let query;
    ({ nonce, channelId, query, name, contextKey } = arg0);
    if (!map1.has(channelId)) {
      set = map1.set;
      const activeCommand = ApplicationCommandStore.getActiveCommand(channelId);
      let id;
      if (activeCommand != null) {
        id = activeCommand.id;
      }
      const _Map = Map;
      const self = this;
      const self2 = this;
      const obj3 = {
        commandId: id,
        optionName: ApplicationCommandStore.getActiveOptionName(channelId),
        optionNameToAutocompleteQueries: map,
        optionNameToLastResults: map1,
        optionNameToNonce: map2,
        optionNameToLastQuery: map3,
        optionNameToContextKey: map4,
        lastErrored: false,
        lastResponseNonce: "applicationId",
      };
      map = new Map();
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map1 = new Map();
      const _Map3 = Map;
      const self5 = this;
      const self6 = this;
      map2 = new Map();
      const _Map4 = Map;
      const self7 = this;
      const self8 = this;
      const _Map5 = Map;
      const self9 = this;
      const self10 = this;
      map3 = new Map();
      map4 = new Map();
      const result = set(channelId, obj3);
    }
    const value = obj.get(channelId);
    const optionNameToContextKey = value.optionNameToContextKey;
    if (optionNameToContextKey.get(name) !== contextKey) {
      const optionNameToContextKey2 = value.optionNameToContextKey;
      const result1 = optionNameToContextKey2.set(name, contextKey);
      const optionNameToAutocompleteQueries = value.optionNameToAutocompleteQueries;
      optionNameToAutocompleteQueries.delete(name);
      const optionNameToLastResults = value.optionNameToLastResults;
      optionNameToLastResults.delete(name);
      const optionNameToLastQuery = value.optionNameToLastQuery;
      optionNameToLastQuery.delete(name);
    }
    const optionNameToLastQuery2 = value.optionNameToLastQuery;
    if (optionNameToLastQuery2.get(name) === query) {
      return false;
    } else {
      const optionNameToLastQuery3 = value.optionNameToLastQuery;
      const result2 = optionNameToLastQuery3.set(name, query);
      const optionNameToAutocompleteQueries2 = value.optionNameToAutocompleteQueries;
      const value4 = optionNameToAutocompleteQueries2.get(name);
      let value5;
      if (value4 != null) {
        value5 = value4.get(query);
      }
      if (null != value5) {
        value.lastErrored = false;
        const optionNameToLastResults2 = value.optionNameToLastResults;
        const result3 = optionNameToLastResults2.set(name, value5);
        return true;
      } else {
        const optionNameToNonce2 = value.optionNameToNonce;
        const value6 = optionNameToNonce2.get(name);
        if (null != value6) {
          map.delete(value6);
        }
        const obj4 = { channelId, query, name };
        const result4 = map.set(nonce, obj4);
        const _Date = Date;
        const self11 = this;
        const self12 = this;
        set2 = map2.set;
        const date = new Date();
        set2(nonce, date);
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
    let choices;
    let map3;
    let map4;
    let nonce;
    ({ choices, nonce } = arg0);
    let closure_0;
    let obj = map;
    const value = map.get(nonce);
    if (null == value) {
      return false;
    } else {
      obj.delete(nonce);
      const channelId = value.channelId;
      if (!map1.has(channelId)) {
        set = map1.set;
        const activeCommand = ApplicationCommandStore.getActiveCommand(channelId);
        let id;
        if (activeCommand != null) {
          id = activeCommand.id;
        }
        const _Map = Map;
        const self = this;
        const self2 = this;
        const obj3 = {
          commandId: id,
          optionName: ApplicationCommandStore.getActiveOptionName(channelId),
          optionNameToAutocompleteQueries: map,
          optionNameToLastResults: map1,
          optionNameToNonce: map2,
          optionNameToLastQuery: map3,
          optionNameToContextKey: map4,
          lastErrored: false,
          lastResponseNonce: "applicationId",
        };
        map = new Map();
        const _Map2 = Map;
        const self3 = this;
        const self4 = this;
        map1 = new Map();
        const _Map3 = Map;
        const self5 = this;
        const self6 = this;
        map2 = new Map();
        const _Map4 = Map;
        const self7 = this;
        const self8 = this;
        const _Map5 = Map;
        const self9 = this;
        const self10 = this;
        map3 = new Map();
        map4 = new Map();
        const result = set(channelId, obj3);
      }
      const value4 = obj10.get(channelId);
      const optionNameToAutocompleteQueries = value4.optionNameToAutocompleteQueries;
      if (null == optionNameToAutocompleteQueries.get(value.name)) {
        const optionNameToAutocompleteQueries2 = value4.optionNameToAutocompleteQueries;
        const _Map6 = Map;
        const self11 = this;
        const self12 = this;
        const name = value.name;
        set2 = optionNameToAutocompleteQueries2.set;
        const map5 = new Map();
        set2(name, map5);
      }
      let tmp21 = closure_7;
      if (tmp21) {
        const activeOption = ApplicationCommandStore.getActiveOption(value.channelId);
        let type;
        if (activeOption != null) {
          type = activeOption.type;
        }
        tmp21 = type === Server.ApplicationCommandOptionType.INTEGER;
      }
      closure_0 = tmp21;
      let mapped;
      if (choices != null) {
        mapped = choices.map((item) => {
          let NumberResult;
          let name;
          let name_localized;
          let value;
          ({ value, name_localized, name } = item);
          if (name_localized == null) {
            name_localized = name;
          }
          const obj = { displayName: name_localized, name, value: NumberResult };
          NumberResult = value;
          if (closure_0) {
            const _Number = Number;
            NumberResult = Number(value);
          }
          return obj;
        });
      }
      if (mapped == null) {
        mapped = [];
      }
      const value5 = map2.get(nonce);
      let num = 0;
      const obj4 = map2;
      if (null != value5) {
        const _Date = Date;
        const self13 = this;
        const self14 = this;
        const date = new Date();
        const time = date.getTime();
        num = time - value5.getTime();
      }
      const obj5 = { duration_ms: num, error: false, num_options: mapped.length };
      const obj7 = AppAnalyticsUtils;
      obj7.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, obj5);
      obj4.delete(nonce);
      const optionNameToAutocompleteQueries3 = value4.optionNameToAutocompleteQueries;
      const value6 = optionNameToAutocompleteQueries3.get(value.name);
      if (value6 != null) {
        const result1 = value6.set(value.query, mapped);
      }
      const optionNameToLastQuery = value4.optionNameToLastQuery;
      if (optionNameToLastQuery.get(value.name) === value.query) {
        value4.lastErrored = false;
        const optionNameToLastResults = value4.optionNameToLastResults;
        const result2 = optionNameToLastResults.set(value.name, mapped);
      }
      value4.lastResponseNonce = nonce;
      return true;
    }
  },
  INTERACTION_FAILURE: function handleInteractionFailure(nonce) {
    let map3;
    let map4;
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      const value = map.get(nonce);
      const obj7 = map;
      if (null == value) {
        return false;
      } else {
        obj7.delete(nonce);
        const value2 = map2.get(nonce);
        let num = 0;
        const obj8 = map2;
        if (null != value2) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          const date = new Date();
          const time = date.getTime();
          num = time - value2.getTime();
        }
        const obj = { duration_ms: num, error: true };
        const obj2 = AppAnalyticsUtils;
        obj2.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, obj);
        obj8.delete(nonce);
        const channelId = value.channelId;
        if (!map1.has(channelId)) {
          set = map1.set;
          const activeCommand = ApplicationCommandStore.getActiveCommand(channelId);
          let id;
          if (activeCommand != null) {
            id = activeCommand.id;
          }
          const _Map = Map;
          const self3 = this;
          const self4 = this;
          const obj3 = {
            commandId: id,
            optionName: ApplicationCommandStore.getActiveOptionName(channelId),
            optionNameToAutocompleteQueries: map,
            optionNameToLastResults: map1,
            optionNameToNonce: map2,
            optionNameToLastQuery: map3,
            optionNameToContextKey: map4,
            lastErrored: false,
            lastResponseNonce: "applicationId",
          };
          map = new Map();
          const _Map2 = Map;
          const self5 = this;
          const self6 = this;
          map1 = new Map();
          const _Map3 = Map;
          const self7 = this;
          const self8 = this;
          map2 = new Map();
          const _Map4 = Map;
          const self9 = this;
          const self10 = this;
          const _Map5 = Map;
          const self11 = this;
          const self12 = this;
          map3 = new Map();
          map4 = new Map();
          const result = set(channelId, obj3);
        }
        map1.get(channelId).lastErrored = true;
        return true;
      }
    }
  },
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: handleSetActiveCommand,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: handleSetActiveCommand,
  APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function handleUpdateChannelState(arg0) {
    let channelId;
    let command;
    let id;
    ({ channelId, command } = arg0);
    if (command != null) {
      id = command.id;
    }
    const activeOptionName = ApplicationCommandStore.getActiveOptionName(channelId);
    const value = map1.get(channelId);
    let tmp3 = null != value;
    if (tmp3) {
      tmp3 = id !== value.commandId || activeOptionName !== value.optionName;
    }
    if (tmp3) {
      const tmp5 = null != id && id !== value.commandId;
      if (tmp5) {
        const optionNameToLastResults = value.optionNameToLastResults;
        optionNameToLastResults.clear();
        const optionNameToNonce = value.optionNameToNonce;
        optionNameToNonce.clear();
        const optionNameToLastQuery = value.optionNameToLastQuery;
        optionNameToLastQuery.clear();
        const optionNameToContextKey = value.optionNameToContextKey;
        optionNameToContextKey.clear();
        const optionNameToAutocompleteQueries = value.optionNameToAutocompleteQueries;
        optionNameToAutocompleteQueries.clear();
      }
      value.lastErrored = false;
      value.commandId = id;
      value.optionName = activeOptionName;
    }
  },
};
const applicationCommandAutocompleteStore = new ApplicationCommandAutocompleteStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandAutocompleteStore.tsx");

export default applicationCommandAutocompleteStore;
