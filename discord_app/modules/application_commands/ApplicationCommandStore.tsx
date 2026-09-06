// discord_app/modules/application_commands/ApplicationCommandStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ApplicationCommandUtils from "ApplicationCommandUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import ChannelSectionStore from "../../stores/ChannelSectionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

require = fn;
function handleInit() {
  closure_5 = {};
  return true;
}
function getOrCreateChannelState(channelId) {
  if (!(channelId in dependencyMap)) {
    const obj = {
      activeCommand: null,
      activeCommandSection: null,
      activeOptionName: null,
      preferredCommandId: null,
      optionStates: {},
      initialValues: {},
      commandOrigin: null,
    };
    dependencyMap[channelId] = obj;
  }
  return dependencyMap[channelId];
}
function handleSetActiveCommand(arg0) {
  ({ channelId, command, initialValues, source, commandOrigin } = arg0);
  let optionStates;
  ({ section, location: _location, triggerSection, queryLength, sectionName, query, searchResultsPosition } = arg0);
  if (!(channelId in dependencyMap)) {
    optionStates = {
      activeCommand: null,
      activeCommandSection: null,
      activeOptionName: null,
      preferredCommandId: null,
      optionStates: {},
      initialValues: {},
      commandOrigin: null,
    };
    dependencyMap[channelId] = optionStates;
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
    optionStates = {};
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
    tmp2.optionStates = optionStates;
    if (null != command) {
      optionStates = {
        command,
        location: _location,
        triggerSection,
        queryLength,
        sectionName,
        query,
        searchResultsPosition,
        source,
      };
      ApplicationCommandUtils.trackCommandSelected(optionStates);
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
    let tmp7 = _slicedToArray(tmp5, 2);
    let first = tmp7[0];
    let tmp9 = first;
    let arr = tmp7[1];
    if (first in tmp.optionStates) {
      if (undefined !== arr.hasValue) {
        let hasValue = arr.hasValue;
      } else {
        hasValue = obj[tmp9].hasValue;
      }
      if (hasValue) {
        let arr2 = obj[tmp9];
        if (undefined !== arr.isActive) {
          let isActive = arr.isActive;
        } else {
          isActive = arr2.isActive;
        }
        obj = { hasValue: true, isActive, lastValidationResult: null, optionValue: null, location: null, length: null };
        if (undefined !== arr.lastValidationResult) {
          let lastValidationResult = arr.lastValidationResult;
        } else {
          lastValidationResult = arr2.lastValidationResult;
        }
        obj.lastValidationResult = lastValidationResult;
        let optionValue = arr.optionValue;
        if (optionValue == null) {
          optionValue = arr2.optionValue;
        }
        obj.optionValue = optionValue;
        let _location = arr.location;
        if (_location == null) {
          _location = arr2.location;
        }
        obj.location = _location;
        let length = arr.length;
        if (length == null) {
          length = arr2.length;
        }
        obj.length = length;
        obj[tmp9] = obj;
        if (undefined !== arr.isActive) {
          if (arr.isActive) {
            let tmp29 = null != tmp.activeOptionName;
            if (tmp29) {
              tmp29 = tmp.activeOptionName !== tmp9;
            }
            if (tmp29) {
              obj = {};
              let merged1 = Object.assign(obj[tmp.activeOptionName]);
              obj[tmp.activeOptionName] = obj;
              obj[tmp.activeOptionName].isActive = false;
            }
            tmp.activeOptionName = tmp9;
          } else if (tmp9 === tmp.activeOptionName) {
            tmp.activeOptionName = null;
          }
        }
      } else {
        obj[tmp9] = {
          hasValue: false,
          isActive: false,
          lastValidationResult: null,
          optionValue: null,
          location: "r",
          length: "HermesInternal",
        };
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
const dependencyMap = {};
const Store = initializeDefault.Store;
class ApplicationCommandStore extends Store {}
const prototype = ApplicationCommandStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelSectionStore, SelectedChannelStore);
  ChannelSectionStore.addChangeListener(() => {
    channelId = channelId.getChannelId();
    if (null == channelId) {
      obj = {};
      return true;
    } else {
      currentSidebarChannelId = currentSidebarChannelId.getCurrentSidebarChannelId(channelId);
      if (null != currentSidebarChannelId) {
        if (currentSidebarChannelId in obj) {
          return false;
        }
      }
      obj = {};
      if (channelId in obj) {
        obj[channelId] = obj[channelId];
        let tmp6 = obj;
      } else {
        tmp6 = obj;
      }
      obj = tmp6;
    }
  });
};
prototype["getActiveCommand"] = function getActiveCommand(channelId) {
  if (!(channelId in dependencyMap)) {
    const obj = {
      activeCommand: null,
      activeCommandSection: null,
      activeOptionName: null,
      preferredCommandId: null,
      optionStates: {},
      initialValues: {},
      commandOrigin: null,
    };
    dependencyMap[channelId] = obj;
  }
  return dependencyMap[channelId].activeCommand;
};
prototype["getActiveCommandSection"] = function getActiveCommandSection(id) {
  if (!(id in dependencyMap)) {
    const obj = {
      activeCommand: null,
      activeCommandSection: null,
      activeOptionName: null,
      preferredCommandId: null,
      optionStates: {},
      initialValues: {},
      commandOrigin: null,
    };
    dependencyMap[id] = obj;
  }
  return dependencyMap[id].activeCommandSection;
};
prototype["getActiveOptionName"] = function getActiveOptionName(channelId) {
  if (!(channelId in dependencyMap)) {
    const obj = {
      activeCommand: null,
      activeCommandSection: null,
      activeOptionName: null,
      preferredCommandId: null,
      optionStates: {},
      initialValues: {},
      commandOrigin: null,
    };
    dependencyMap[channelId] = obj;
  }
  return dependencyMap[channelId].activeOptionName;
};
prototype["getActiveOption"] = function getActiveOption(channelId) {
  if (!(channelId in dependencyMap)) {
    const obj = {
      activeCommand: null,
      activeCommandSection: null,
      activeOptionName: null,
      preferredCommandId: null,
      optionStates: {},
      initialValues: {},
      commandOrigin: null,
    };
    dependencyMap[channelId] = obj;
  }
  const activeOptionName = tmp2;
  const activeCommand = tmp2.activeCommand;
  let found;
  if (activeCommand != null) {
    const options = activeCommand.options;
    if (options != null) {
      found = options.find((name) => name.name === activeOptionName.activeOptionName);
    }
  }
  if (found == null) {
    found = null;
  }
  return found;
};
prototype["getPreferredCommandId"] = function getPreferredCommandId(arg0) {
  if (!(arg0 in dependencyMap)) {
    const obj = {
      activeCommand: null,
      activeCommandSection: null,
      activeOptionName: null,
      preferredCommandId: null,
      optionStates: {},
      initialValues: {},
      commandOrigin: null,
    };
    dependencyMap[arg0] = obj;
  }
  return dependencyMap[arg0].preferredCommandId;
};
prototype["getOptionStates"] = function getOptionStates(id) {
  if (!(id in dependencyMap)) {
    const obj = {
      activeCommand: null,
      activeCommandSection: null,
      activeOptionName: null,
      preferredCommandId: null,
      optionStates: {},
      initialValues: {},
      commandOrigin: null,
    };
    dependencyMap[id] = obj;
  }
  return dependencyMap[id].optionStates;
};
prototype["getOptionState"] = function getOptionState(arg0, arg1) {
  if (!(arg0 in dependencyMap)) {
    const obj = {
      activeCommand: null,
      activeCommandSection: null,
      activeOptionName: null,
      preferredCommandId: null,
      optionStates: {},
      initialValues: {},
      commandOrigin: null,
    };
    dependencyMap[arg0] = obj;
  }
  return dependencyMap[arg0].optionStates[arg1];
};
prototype["getCommandOrigin"] = function getCommandOrigin(id) {
  if (!(id in dependencyMap)) {
    const obj = {
      activeCommand: null,
      activeCommandSection: null,
      activeOptionName: null,
      preferredCommandId: null,
      optionStates: {},
      initialValues: {},
      commandOrigin: null,
    };
    dependencyMap[id] = obj;
  }
  return dependencyMap[id].commandOrigin;
};
prototype["getSource"] = function getSource(arg0) {
  if (!(arg0 in dependencyMap)) {
    const obj = {
      activeCommand: null,
      activeCommandSection: null,
      activeOptionName: null,
      preferredCommandId: null,
      optionStates: {},
      initialValues: {},
      commandOrigin: null,
    };
    dependencyMap[arg0] = obj;
  }
  return dependencyMap[arg0].source;
};
prototype["getOption"] = function getOption(arg0, arg1) {
  closure_0 = arg1;
  if (!(arg0 in dependencyMap)) {
    const obj = {
      activeCommand: null,
      activeCommandSection: null,
      activeOptionName: null,
      preferredCommandId: null,
      optionStates: {},
      initialValues: {},
      commandOrigin: null,
    };
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
    let obj = {
      activeCommand: null,
      activeCommandSection: null,
      activeOptionName: null,
      preferredCommandId: null,
      optionStates: {},
      initialValues: {},
      commandOrigin: null,
    };
    dependencyMap[arg0] = obj;
  }
  obj = {};
  const merged = Object.assign(dependencyMap[arg0]);
  return obj;
};
ApplicationCommandStore.displayName = "ApplicationCommandStore";
const applicationCommandStore = new ApplicationCommandStore(DispatcherDefault, {
  CONNECTION_OPEN: handleInit,
  CHANNEL_SELECT: handleInit,
  LOGOUT: handleInit,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: handleSetActiveCommand,
  APPLICATION_COMMAND_SET_PREFERRED_COMMAND: function handleSetPreferredCommand(arg0) {
    ({ channelId, commandId } = arg0);
    if (!(channelId in dependencyMap)) {
      const obj = {
        activeCommand: null,
        activeCommandSection: null,
        activeOptionName: null,
        preferredCommandId: null,
        optionStates: {},
        initialValues: {},
        commandOrigin: null,
      };
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
    ({ channelId, preferredCommandId } = changedOptionStates);
    let obj = {
      type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
      channelId,
      command: changedOptionStates.command,
      section: changedOptionStates.section,
      location: changedOptionStates.location,
    };
    let flag = handleSetActiveCommand(obj);
    if (!(channelId in dependencyMap)) {
      obj = {
        activeCommand: null,
        activeCommandSection: null,
        activeOptionName: null,
        preferredCommandId: null,
        optionStates: {},
        initialValues: {},
        commandOrigin: null,
      };
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
    handleUpdateOptionStates({
      type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
      channelId,
      changedOptionStates: changedOptionStates.changedOptionStates,
    });
    if (!flag) {
      flag = flag2;
    }
    if (!flag) {
      flag = true;
    }
    return flag;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandStore.tsx");

export default applicationCommandStore;
