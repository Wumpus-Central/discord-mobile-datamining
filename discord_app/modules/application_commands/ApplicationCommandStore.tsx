// discord_app/modules/application_commands/ApplicationCommandStore.tsx
import _slicedToArray from "_slicedToArray";
import handlePermissionsChange from "handlePermissionsChange";
import handleConnectionOpen from "handleConnectionOpen";
import { Store } from "initialize";

let require = arg1;
function handleInit() {
  let closure_5 = {};
  return true;
}
function getOrCreateChannelState(channelId) {
  if (!(channelId in dependencyMap)) {
    const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: null, initialValues: null, commandOrigin: null };
    obj[4] = {};
    obj[5] = {};
    dependencyMap[channelId] = obj;
  }
  return dependencyMap[channelId];
}
function handleSetActiveCommand(arg0) {
  let _location;
  let channelId;
  let command;
  let commandOrigin;
  let initialValues;
  let query;
  let queryLength;
  let searchResultsPosition;
  let section;
  let sectionName;
  let source;
  let triggerSection;
  ({ channelId, command, initialValues, source, commandOrigin } = arg0);
  let obj;
  ({ section, location: _location, triggerSection, queryLength, sectionName, query, searchResultsPosition } = arg0);
  if (!(channelId in dependencyMap)) {
    obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: null, initialValues: null, commandOrigin: null };
    obj[4] = {};
    obj[5] = {};
    dependencyMap[channelId] = obj;
  }
  let id;
  if (command != null) {
    id = command.id;
  }
  const activeCommand = tmp2.activeCommand;
  let id1;
  if (activeCommand != null) {
    id1 = activeCommand.id;
  }
  if (id === id1) {
    return false;
  } else {
    tmp2.activeCommand = command;
    tmp2.activeCommandSection = section;
    tmp2.activeOptionName = null;
    tmp2.preferredCommandId = null;
    if (initialValues == null) {
      initialValues = {};
    }
    tmp2.initialValues = initialValues;
    if (commandOrigin == null) {
      commandOrigin = null;
    }
    tmp2.commandOrigin = commandOrigin;
    tmp2.source = source;
    obj = {};
    let options;
    if (command != null) {
      options = command.options;
    }
    if (null != options) {
      const options1 = command.options;
      const item = options1.forEach((name) => {
        obj[name.name] = { isActive: false, hasValue: false, lastValidationResult: null, optionValue: null };
      });
    }
    tmp2.optionStates = obj;
    if (null != command) {
      obj = { command: null, location: null, triggerSection: null, queryLength: null, sectionName: null, query: null, searchResultsPosition: null, source: null };
      obj[0] = command;
      obj[1] = _location;
      obj[2] = triggerSection;
      obj[3] = queryLength;
      obj[4] = sectionName;
      obj[5] = query;
      obj[6] = searchResultsPosition;
      obj[7] = source;
      obj(7050).trackCommandSelected(obj);
      const obj3 = obj(7050);
    }
    return true;
  }
}
function handleUpdateOptionStates(channelId) {
  const tmp = getOrCreateChannelState(channelId.channelId);
  let obj = {};
  const merged = Object.assign(tmp.optionStates);
  const entries = Object.entries(channelId.changedOptionStates);
  while (tmp4 !== undefined) {
    let tmp6 = callback;
    let tmp7 = callback(tmp5, 2);
    let first = tmp7[0];
    let tmp9 = first;
    let arr = tmp7[1];
    if (first in tmp.optionStates) {
      let tmp10 = arr;
      if (undefined !== arr.hasValue) {
        let tmp12 = arr;
        let hasValue = arr.hasValue;
      } else {
        let tmp11 = first;
        hasValue = obj[tmp9].hasValue;
      }
      let tmp13 = first;
      if (hasValue) {
        let arr2 = obj[tmp9];
        let tmp14 = arr;
        if (undefined !== arr.isActive) {
          let tmp16 = arr;
          let isActive = arr.isActive;
        } else {
          let tmp15 = arr2;
          isActive = arr2.isActive;
        }
        obj = { hasValue: true, isActive: null, lastValidationResult: null, optionValue: null, location: null, length: null };
        obj[1] = isActive;
        let tmp17 = arr;
        if (undefined !== arr.lastValidationResult) {
          let tmp19 = arr;
          let lastValidationResult = arr.lastValidationResult;
        } else {
          let tmp18 = arr2;
          lastValidationResult = arr2.lastValidationResult;
        }
        obj[2] = lastValidationResult;
        let tmp20 = arr;
        let optionValue = arr.optionValue;
        if (optionValue == null) {
          let tmp21 = arr2;
          optionValue = arr2.optionValue;
        }
        obj[3] = optionValue;
        let tmp22 = arr;
        let _location = arr.location;
        if (_location == null) {
          let tmp23 = arr2;
          _location = arr2.location;
        }
        obj[4] = _location;
        let tmp24 = arr;
        let length = arr.length;
        if (length == null) {
          let tmp25 = arr2;
          length = arr2.length;
        }
        obj[5] = length;
        obj[tmp9] = obj;
        let tmp26 = arr;
        if (undefined !== arr.isActive) {
          let tmp27 = arr;
          if (arr.isActive) {
            let tmp29 = null != tmp.activeOptionName;
            if (tmp29) {
              let tmp30 = first;
              tmp29 = tmp.activeOptionName !== tmp9;
            }
            if (tmp29) {
              obj = {};
              let tmp31 = obj;
              let merged1 = Object.assign(obj[tmp.activeOptionName]);
              obj[tmp.activeOptionName] = obj;
              obj[tmp.activeOptionName].isActive = false;
            }
            let tmp33 = first;
            tmp.activeOptionName = tmp9;
          } else {
            let tmp28 = first;
            if (tmp9 === tmp.activeOptionName) {
              tmp.activeOptionName = null;
            }
          }
        }
      } else {
        obj[tmp9] = { hasValue: false, isActive: false, lastValidationResult: null, optionValue: null, location: "r", length: "HermesInternal" };
        if (tmp.activeOptionName === tmp9) {
          tmp.activeOptionName = null;
        }
      }
    }
    continue;
  }
  tmp.optionStates = obj;
  return true;
}
let closure_5 = {};
class ApplicationCommandStore extends Store {
}
const prototype = ApplicationCommandStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(handlePermissionsChange, handleConnectionOpen);
  handlePermissionsChange.addChangeListener(() => {
    channelId = channelId.getChannelId();
    if (null == channelId) {
      let table = {};
      return true;
    } else {
      currentSidebarChannelId = currentSidebarChannelId.getCurrentSidebarChannelId(channelId);
      if (null != currentSidebarChannelId) {
        if (currentSidebarChannelId in table) {
          return false;
        }
      }
      const obj = {};
      if (channelId in table) {
        obj[channelId] = table[channelId];
        let tmp6 = obj;
      } else {
        tmp6 = obj;
      }
      table = tmp6;
    }
  });
};
prototype["getActiveCommand"] = function getActiveCommand(channelId) {
  if (!(channelId in dependencyMap)) {
    const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: null, initialValues: null, commandOrigin: null };
    obj[4] = {};
    obj[5] = {};
    dependencyMap[channelId] = obj;
  }
  return dependencyMap[channelId].activeCommand;
};
prototype["getActiveCommandSection"] = function getActiveCommandSection(id) {
  if (!(id in dependencyMap)) {
    const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: null, initialValues: null, commandOrigin: null };
    obj[4] = {};
    obj[5] = {};
    dependencyMap[id] = obj;
  }
  return dependencyMap[id].activeCommandSection;
};
prototype["getActiveOptionName"] = function getActiveOptionName(channelId) {
  if (!(channelId in dependencyMap)) {
    const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: null, initialValues: null, commandOrigin: null };
    obj[4] = {};
    obj[5] = {};
    dependencyMap[channelId] = obj;
  }
  return dependencyMap[channelId].activeOptionName;
};
prototype["getActiveOption"] = function getActiveOption(channelId) {
  if (!(channelId in dependencyMap)) {
    const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: null, initialValues: null, commandOrigin: null };
    obj[4] = {};
    obj[5] = {};
    dependencyMap[channelId] = obj;
  }
  const require = tmp2;
  const activeCommand = tmp2.activeCommand;
  let found;
  if (activeCommand != null) {
    const options = activeCommand.options;
    if (options != null) {
      found = options.find((name) => name.name === tmp2.activeOptionName);
    }
  }
  if (found == null) {
    found = null;
  }
  return found;
};
prototype["getPreferredCommandId"] = function getPreferredCommandId(arg0) {
  if (!(arg0 in dependencyMap)) {
    const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: null, initialValues: null, commandOrigin: null };
    obj[4] = {};
    obj[5] = {};
    dependencyMap[arg0] = obj;
  }
  return dependencyMap[arg0].preferredCommandId;
};
prototype["getOptionStates"] = function getOptionStates(id) {
  if (!(id in dependencyMap)) {
    const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: null, initialValues: null, commandOrigin: null };
    obj[4] = {};
    obj[5] = {};
    dependencyMap[id] = obj;
  }
  return dependencyMap[id].optionStates;
};
prototype["getOptionState"] = function getOptionState(arg0, arg1) {
  if (!(arg0 in dependencyMap)) {
    const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: null, initialValues: null, commandOrigin: null };
    obj[4] = {};
    obj[5] = {};
    dependencyMap[arg0] = obj;
  }
  return dependencyMap[arg0].optionStates[arg1];
};
prototype["getCommandOrigin"] = function getCommandOrigin(id) {
  if (!(id in dependencyMap)) {
    const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: null, initialValues: null, commandOrigin: null };
    obj[4] = {};
    obj[5] = {};
    dependencyMap[id] = obj;
  }
  return dependencyMap[id].commandOrigin;
};
prototype["getSource"] = function getSource(arg0) {
  if (!(arg0 in dependencyMap)) {
    const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: null, initialValues: null, commandOrigin: null };
    obj[4] = {};
    obj[5] = {};
    dependencyMap[arg0] = obj;
  }
  return dependencyMap[arg0].source;
};
prototype["getOption"] = function getOption(arg0) {
  let closure_0 = arg1;
  if (!(arg0 in dependencyMap)) {
    const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: null, initialValues: null, commandOrigin: null };
    obj[4] = {};
    obj[5] = {};
    dependencyMap[arg0] = obj;
  }
  const activeCommand = dependencyMap[arg0].activeCommand;
  let found;
  if (activeCommand != null) {
    const options = activeCommand.options;
    if (options != null) {
      found = options.find((name) => name.name === closure_0);
    }
  }
  return found;
};
prototype["getState"] = function getState(arg0) {
  if (!(arg0 in dependencyMap)) {
    let obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: null, initialValues: null, commandOrigin: null };
    obj[4] = {};
    obj[5] = {};
    dependencyMap[arg0] = obj;
  }
  obj = {};
  const merged = Object.assign(dependencyMap[arg0]);
  return obj;
};
ApplicationCommandStore.displayName = "ApplicationCommandStore";
const applicationCommandStore = new ApplicationCommandStore(require("dispatcher"), {
  CONNECTION_OPEN: handleInit,
  CHANNEL_SELECT: handleInit,
  LOGOUT: handleInit,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: handleSetActiveCommand,
  APPLICATION_COMMAND_SET_PREFERRED_COMMAND: function handleSetPreferredCommand(arg0) {
    let channelId;
    let commandId;
    ({ channelId, commandId } = arg0);
    if (!(channelId in dependencyMap)) {
      const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: null, initialValues: null, commandOrigin: null };
      obj[4] = {};
      obj[5] = {};
      dependencyMap[channelId] = obj;
    }
    let flag = commandId !== tmp2.preferredCommandId;
    if (flag) {
      let tmp4 = null !== tmp2.preferredCommandId;
      if (!tmp4) {
        const activeCommand = tmp2.activeCommand;
        let id;
        if (activeCommand != null) {
          id = activeCommand.id;
        }
        if (id == null) {
          id = null;
        }
        tmp4 = commandId !== id;
      }
      flag = tmp4;
    }
    if (flag) {
      tmp2.activeCommand = null;
      tmp2.activeOptionName = null;
      tmp2.preferredCommandId = commandId;
      tmp2.optionStates = {};
      flag = true;
    }
    return flag;
  },
  APPLICATION_COMMAND_UPDATE_OPTIONS: handleUpdateOptionStates,
  APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function handleUpdateChannelState(changedOptionStates) {
    let channelId;
    let preferredCommandId;
    ({ channelId, preferredCommandId } = changedOptionStates);
    let obj = { type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", channelId, command: changedOptionStates.command, section: changedOptionStates.section, location: changedOptionStates.location };
    let flag = handleSetActiveCommand(obj);
    if (!(channelId in dependencyMap)) {
      obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: null, initialValues: null, commandOrigin: null };
      obj[4] = {};
      obj[5] = {};
      dependencyMap[channelId] = obj;
    }
    let flag2 = preferredCommandId !== tmp2.preferredCommandId;
    if (flag2) {
      let tmp4 = null !== tmp2.preferredCommandId;
      if (!tmp4) {
        const activeCommand = tmp2.activeCommand;
        let id;
        if (activeCommand != null) {
          id = activeCommand.id;
        }
        if (id == null) {
          id = null;
        }
        tmp4 = preferredCommandId !== id;
      }
      flag2 = tmp4;
    }
    if (flag2) {
      tmp2.activeCommand = null;
      tmp2.activeOptionName = null;
      tmp2.preferredCommandId = preferredCommandId;
      tmp2.optionStates = {};
      flag2 = true;
    }
    handleUpdateOptionStates({ type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId, changedOptionStates: changedOptionStates.changedOptionStates });
    if (!flag) {
      flag = flag2;
    }
    if (!flag) {
      flag = true;
    }
    return flag;
  }
});
const result = require("handleConnectionOpen").fileFinishedImporting("modules/application_commands/ApplicationCommandStore.tsx");

export default applicationCommandStore;