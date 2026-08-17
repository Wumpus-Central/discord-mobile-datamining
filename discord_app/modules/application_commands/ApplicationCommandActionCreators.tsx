// discord_app/modules/application_commands/ApplicationCommandActionCreators.tsx
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import _modDef38 from "module_38" /* 38 */;
import sendRequest from "sendRequest" /* 530 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;
import ApplicationCommandSectionType from "ApplicationCommandSectionType" /* 5248 */;
import closure_3 from "fetchFingerprint" /* 1218 */;
import closure_4 from "handleInit" /* 7526 */;
import { Endpoints } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/application_commands/ApplicationCommandActionCreators.tsx");

export const setActiveCommand = function setActiveCommand(command) {
  command = command.command;
  ({ channelId, section, location: _location, initialValues, triggerSection, queryLength, sectionName, query, searchResultsPosition, source, commandOrigin } = command);
  if (null != command) {
    _modDef38(command.inputType !== ApplicationCommandSectionType.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder");
    const tmp3 = _modDef38;
  }
  dispatcherDefault.dispatch({ type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", channelId, command, section, initialValues, location: _location, triggerSection, queryLength, sectionName, query, searchResultsPosition, source, commandOrigin });
};
export const setPreferredCommandId = function setPreferredCommandId(channelId, commandId) {
  let obj = dispatcherDefault;
  obj = { type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId, commandId };
  obj.dispatch(obj);
};
export const updateOptionStates = function updateOptionStates(id, changedOptionStates) {
  let obj = dispatcherDefault;
  obj = { type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: id, changedOptionStates };
  obj.dispatch(obj);
};
export const updateOptionValidationStates = function updateOptionValidationStates(channelId) {
  const entries = Object.entries(arg1);
  let obj = dispatcherDefault;
  obj = {
    type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
    channelId,
    changedOptionStates: Object.fromEntries(entries.map((arg0) => {
      [tmp, tmp2] = arg0;
      const items = [tmp, { lastValidationResult: tmp2 }];
      return items;
    }))
  };
  obj.dispatch(obj);
};
export const updateChannelState = function updateChannelState(arg0) {
  ({ channelId, command, section, preferredCommandId, location: _location, changedOptionStates } = arg0);
  dispatcherDefault.dispatch({ type: "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", channelId, command, section, preferredCommandId, location: _location, changedOptionStates });
};
export const updateApplicationGuildCommandPermissions = function updateApplicationGuildCommandPermissions(arg0, arg1, arg2, permissions) {
  const HTTP = sendRequest.HTTP;
  obj = { body: obj, url: Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(arg0, arg1, arg2), rejectWithError: false };
  obj = { permissions };
  return HTTP.put(obj);
};
export const performAutocomplete = function performAutocomplete(c0, closure_2, arg2) {
  _modDef38(null != closure_2.autocomplete, "Missing autocomplete context");
  ({ query, name } = closure_2.autocomplete);
  let obj = DISCORD_EPOCHDefault;
  const fromTimestampResult = obj.fromTimestamp(Date.now());
  require = fromTimestampResult;
  if (null != closure_2.channel) {
    obj = { type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", nonce: null, channelId: null, query: null, name: null };
    obj[1] = fromTimestampResult;
    obj[2] = closure_2.channel.id;
    obj[3] = query;
    obj[4] = name;
    dispatcherDefault.dispatch(obj);
    if (null == autocompleteChoices.getAutocompleteChoices(closure_2.channel.id, name, query)) {
      const HTTP = sendRequest.HTTP;
      obj = { url: null, body: null, timeout: 3000, rejectWithError: true };
      obj[0] = Endpoints.INTERACTIONS;
      obj1 = { type: null, application_id: null, guild_id: null, channel_id: null, session_id: null, data: null, nonce: null };
      obj1[0] = PermissionOverwriteType.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE;
      obj1[1] = c0.applicationId;
      const guild = closure_2.guild;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      obj1[2] = id;
      obj1[3] = closure_2.channel.id;
      obj1[4] = sessionId.getSessionId();
      obj1[5] = arg2;
      obj1[6] = fromTimestampResult;
      obj[1] = obj1;
      HTTP.post(obj).catch(() => {
        let obj = closure_1_1(closure_1_2[5]);
        obj = { type: "INTERACTION_FAILURE", nonce: closure_0 };
        obj.dispatch(obj);
      });
      const postResult = HTTP.post(obj);
    }
    const tmpResult = dispatcherDefault;
  }
};
export const fetchCommand = function fetchCommand(guildId, channelId, commandId) {
  let obj = dispatcherDefault;
  obj = { type: "APPLICATION_COMMAND_FETCH", channelId, commandId, guildId };
  obj.dispatch(obj);
};
export const fetchCommands = function fetchCommands(guildId, channelId, commandIds) {
  let obj = dispatcherDefault;
  obj = { type: "APPLICATION_COMMANDS_FETCH", channelId, commandIds, guildId };
  obj.dispatch(obj);
};
export const fetchCommandsForApplication = function fetchCommandsForApplication(arg0) {
  ({ guildId, channelId, applicationId } = arg0);
  dispatcherDefault.dispatch({ type: "APPLICATION_COMMANDS_FETCH_FOR_APPLICATION", channelId, guildId, applicationId });
};
export const updateRegistry = function updateRegistry(commands, applications, channelId) {
  let obj = dispatcherDefault;
  obj = { type: "APPLICATION_COMMAND_REGISTRY_UPDATE", applications, commands, channelId };
  obj.dispatch(obj);
};
export const setAppLauncherActiveCommand = function setAppLauncherActiveCommand(id, command) {
  if (null != command) {
    _modDef38(command.inputType !== ApplicationCommandSectionType.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder");
    const tmp3 = _modDef38;
  }
  let obj = dispatcherDefault;
  obj = { type: "APP_LAUNCHER_SET_ACTIVE_COMMAND", channelId: id, command };
  obj.dispatch(obj);
};