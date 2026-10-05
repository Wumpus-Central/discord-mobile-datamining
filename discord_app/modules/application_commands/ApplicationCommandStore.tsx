// === Module 7408: ApplicationCommandStore ===

// Module 7408 (ApplicationCommandStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7030 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6783 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import size from "module_2" /* 2 */;

let closure_5, currentSidebarChannelId;

function handleInit() {
  closure_5 = {};
  return true;
}
function getOrCreateChannelState(channelId) {
  if (!(channelId in closure_5)) {
    const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: {}, initialValues: {}, commandOrigin: null };
    closure_5[channelId] = obj;
  }
  return closure_5[channelId];
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
  let obj2;
  ({ section, location: _location, triggerSection, queryLength, sectionName, query, searchResultsPosition } = arg0);
  if (!(channelId in closure_5)) {
    const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: {}, initialValues: {}, commandOrigin: null };
    closure_5[channelId] = obj;
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
    closure_5[channelId].activeCommand = command;
    closure_5[channelId].activeCommandSection = section;
    closure_5[channelId].activeOptionName = null;
    closure_5[channelId].preferredCommandId = null;
    if (initialValues == null) {
      initialValues = {};
    }
    closure_5[channelId].initialValues = initialValues;
    if (commandOrigin == null) {
      commandOrigin = null;
    }
    closure_5[channelId].commandOrigin = commandOrigin;
    closure_5[channelId].source = source;
    obj2 = {};
    let options;
    if (command != null) {
      options = command.options;
    }
    if (null != options) {
      const options1 = command.options;
      const item = options1.forEach((name) => {
        obj2[name.name] = { isActive: false, hasValue: false, lastValidationResult: null, optionValue: null };
      });
    }
    closure_5[channelId].optionStates = obj2;
    if (null != command) {
      const obj4 = { command, location: _location, triggerSection, queryLength, sectionName, query, searchResultsPosition, source };
      const obj3 = ApplicationCommandUtils;
      obj3.trackCommandSelected(obj4);
    }
    return true;
  }
}
function handleUpdateOptionStates(changedOptionStates) {
  let _location;
  let arr;
  let first;
  let lastValidationResult;
  let length;
  let optionValue;
  changedOptionStates = changedOptionStates.changedOptionStates;
  const tmp = getOrCreateChannelState(changedOptionStates.channelId);
  const obj = {};
  const merged = Object.assign(tmp.optionStates);
  const entries = Object.entries(changedOptionStates);
  const tmp4 = entries[Symbol.iterator]();
  while (tmp4 !== undefined) {
    [first, arr] = tmp5;
    let tmp9 = first;
    if (first in tmp.optionStates) {
      let hasValue;
      if (undefined !== arr.hasValue) {
        hasValue = arr.hasValue;
      } else {
        hasValue = obj[tmp9].hasValue;
      }
      if (hasValue) {
        let isActive;
        let arr2 = obj[tmp9];
        if (undefined !== arr.isActive) {
          isActive = arr.isActive;
        } else {
          isActive = arr2.isActive;
        }
        let obj2 = { hasValue: true, isActive, lastValidationResult, optionValue, location: _location, length };
        if (undefined !== arr.lastValidationResult) {
          lastValidationResult = arr.lastValidationResult;
        } else {
          lastValidationResult = arr2.lastValidationResult;
        }
        optionValue = arr.optionValue;
        if (optionValue == null) {
          optionValue = arr2.optionValue;
        }
        _location = arr.location;
        if (_location == null) {
          _location = arr2.location;
        }
        length = arr.length;
        if (length == null) {
          length = arr2.length;
        }
        obj[tmp9] = obj2;
        if (undefined !== arr.isActive) {
          if (arr.isActive) {
            let tmp29 = null != tmp.activeOptionName;
            if (tmp29) {
              tmp29 = tmp.activeOptionName !== tmp9;
            }
            if (tmp29) {
              let obj3 = {};
              let activeOptionName = tmp.activeOptionName;
              let merged1 = Object.assign(obj[tmp.activeOptionName]);
              obj[activeOptionName] = obj3;
              obj[tmp.activeOptionName].isActive = false;
            }
            tmp.activeOptionName = tmp9;
          } else if (tmp9 === tmp.activeOptionName) {
            tmp.activeOptionName = null;
          }
        }
      } else {
        obj[tmp9] = { hasValue: false, isActive: false, lastValidationResult: null, optionValue: null, location: "r", length: "IconComponent" };
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
const hasOwnProperty = {};
const Store = get_initializedDefault.Store;
class ApplicationCommandStore extends Store {
  initialize() {
    this.waitFor(ChannelSectionStore, SelectedChannelStore);
    ChannelSectionStore.addChangeListener(() => {
      channelId = channelId.getChannelId();
      if (null == channelId) {
        obj = {};
        return true;
      } else {
        let tmp6;
        currentSidebarChannelId = currentSidebarChannelId.getCurrentSidebarChannelId(channelId);
        if (null != currentSidebarChannelId) {
          if (currentSidebarChannelId in obj) {
            return false;
          }
        }
        obj = {};
        if (channelId in obj) {
          obj[channelId] = obj[channelId];
          tmp6 = obj;
        } else {
          tmp6 = obj;
        }
        obj = tmp6;
      }
    });
  }
  getActiveCommand(channelId) {
    if (!(channelId in closure_5)) {
      const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: {}, initialValues: {}, commandOrigin: null };
      closure_5[channelId] = obj;
    }
    return closure_5[channelId].activeCommand;
  }
  getActiveCommandSection(id) {
    if (!(id in closure_5)) {
      const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: {}, initialValues: {}, commandOrigin: null };
      closure_5[id] = obj;
    }
    return closure_5[id].activeCommandSection;
  }
  getActiveOptionName(channelId) {
    if (!(channelId in closure_5)) {
      const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: {}, initialValues: {}, commandOrigin: null };
      closure_5[channelId] = obj;
    }
    return closure_5[channelId].activeOptionName;
  }
  getActiveOption(channelId) {
    if (!(channelId in closure_5)) {
      const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: {}, initialValues: {}, commandOrigin: null };
      closure_5[channelId] = obj;
    }
    let closure_0 = tmp2;
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
  }
  getPreferredCommandId(arg0) {
    if (!(arg0 in closure_5)) {
      const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: {}, initialValues: {}, commandOrigin: null };
      closure_5[arg0] = obj;
    }
    return closure_5[arg0].preferredCommandId;
  }
  getOptionStates(id) {
    if (!(id in closure_5)) {
      const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: {}, initialValues: {}, commandOrigin: null };
      closure_5[id] = obj;
    }
    return closure_5[id].optionStates;
  }
  getOptionState(arg0, arg1) {
    if (!(arg0 in closure_5)) {
      const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: {}, initialValues: {}, commandOrigin: null };
      closure_5[arg0] = obj;
    }
    return closure_5[arg0].optionStates[arg1];
  }
  getCommandOrigin(id) {
    if (!(id in closure_5)) {
      const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: {}, initialValues: {}, commandOrigin: null };
      closure_5[id] = obj;
    }
    return closure_5[id].commandOrigin;
  }
  getSource(arg0) {
    if (!(arg0 in closure_5)) {
      const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: {}, initialValues: {}, commandOrigin: null };
      closure_5[arg0] = obj;
    }
    return closure_5[arg0].source;
  }
  getOption(arg0, arg1) {
    let closure_0 = arg1;
    if (!(arg0 in closure_5)) {
      const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: {}, initialValues: {}, commandOrigin: null };
      closure_5[arg0] = obj;
    }
    const activeCommand = closure_5[arg0].activeCommand;
    let found;
    if (activeCommand != null) {
      const options = activeCommand.options;
      if (options != null) {
        found = options.find((name) => name.name === closure_0);
      }
    }
    return found;
  }
  getState(arg0) {
    if (!(arg0 in closure_5)) {
      const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: {}, initialValues: {}, commandOrigin: null };
      closure_5[arg0] = obj;
    }
    const obj2 = {};
    const merged = Object.assign(closure_5[arg0]);
    return obj2;
  }
}
const prototype = ApplicationCommandStore.prototype;
ApplicationCommandStore.displayName = "ApplicationCommandStore";
let obj = {
  CONNECTION_OPEN: handleInit,
  CHANNEL_SELECT: handleInit,
  LOGOUT: handleInit,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: handleSetActiveCommand,
  APPLICATION_COMMAND_SET_PREFERRED_COMMAND: function handleSetPreferredCommand(arg0) {
    let channelId;
    let commandId;
    ({ channelId, commandId } = arg0);
    if (!(channelId in closure_5)) {
      const obj = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: {}, initialValues: {}, commandOrigin: null };
      closure_5[channelId] = obj;
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
      closure_5[channelId].activeCommand = null;
      closure_5[channelId].activeOptionName = null;
      closure_5[channelId].preferredCommandId = commandId;
      closure_5[channelId].optionStates = {};
      flag = true;
    }
    return flag;
  },
  APPLICATION_COMMAND_UPDATE_OPTIONS: handleUpdateOptionStates,
  APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function handleUpdateChannelState(command) {
    let channelId;
    let preferredCommandId;
    ({ channelId, preferredCommandId } = command);
    const changedOptionStates = command.changedOptionStates;
    const obj = { type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", channelId, command: command.command, section: command.section, location: command.location };
    let flag = handleSetActiveCommand(obj);
    if (!(channelId in closure_5)) {
      const obj2 = { activeCommand: null, activeCommandSection: null, activeOptionName: null, preferredCommandId: null, optionStates: {}, initialValues: {}, commandOrigin: null };
      closure_5[channelId] = obj2;
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
      closure_5[channelId].activeCommand = null;
      closure_5[channelId].activeOptionName = null;
      closure_5[channelId].preferredCommandId = preferredCommandId;
      closure_5[channelId].optionStates = {};
      flag2 = true;
    }
    handleUpdateOptionStates({ type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId, changedOptionStates });
    if (!flag) {
      flag = flag2;
    }
    if (!flag) {
      flag = true;
    }
    return flag;
  }
};
const applicationCommandStore = new ApplicationCommandStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandStore.tsx");

export default applicationCommandStore;