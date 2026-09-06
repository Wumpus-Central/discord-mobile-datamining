// === Module 7778: ApplicationCommandActionCreators ===

// Module 7778 (ApplicationCommandActionCreators)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import Server from "Server" /* 1894 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7523 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ApplicationCommandAutocompleteStore from "ApplicationCommandAutocompleteStore" /* 7779 */;

require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandActionCreators.tsx");

export const setActiveCommand = function setActiveCommand(command) {
  command = command.command;
  ({ channelId, section, location: _location, initialValues, triggerSection, queryLength, sectionName, query, searchResultsPosition, source, commandOrigin } = command);
  if (null != command) {
    _modDef38(command.inputType !== ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder");
  }
  DispatcherDefault.dispatch({ type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", channelId, command, section, initialValues, location: _location, triggerSection, queryLength, sectionName, query, searchResultsPosition, source, commandOrigin });
};
export const setPreferredCommandId = function setPreferredCommandId(channelId, commandId) {
  const obj = { type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId, commandId };
  obj.dispatch(obj);
};
export const updateOptionStates = function updateOptionStates(id, changedOptionStates) {
  const obj = { type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: id, changedOptionStates };
  obj.dispatch(obj);
};
export const updateOptionValidationStates = function updateOptionValidationStates(channelId, arg1) {
  const entries = Object.entries(arg1);
  const obj = {
    type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
    channelId,
    changedOptionStates: Object.fromEntries(entries.map((item) => {
      [tmp, tmp2] = item;
      const items = [tmp, { lastValidationResult: tmp2 }];
      return items;
    }))
  };
  obj.dispatch(obj);
};
export const updateChannelState = function updateChannelState(arg0) {
  ({ channelId, command, section, preferredCommandId, location: _location, changedOptionStates } = arg0);
  DispatcherDefault.dispatch({ type: "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", channelId, command, section, preferredCommandId, location: _location, changedOptionStates });
};
export const updateApplicationGuildCommandPermissions = function updateApplicationGuildCommandPermissions(arg0, arg1, arg2, permissions) {
  const HTTP = HTTPUtils.HTTP;
  const request = { body: { permissions }, url: Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(arg0, arg1, arg2), rejectWithError: false };
  return HTTP.put(request);
};
export const performAutocomplete = function performAutocomplete(applicationId, autocomplete, data) {
  _modDef38(null != autocomplete.autocomplete, "Missing autocomplete context");
  ({ query, name } = autocomplete.autocomplete);
  let obj = SnowflakeUtilsDefault;
  const fromTimestampResult = obj.fromTimestamp(Date.now());
  require = fromTimestampResult;
  if (null != autocomplete.channel) {
    obj = { type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", nonce: fromTimestampResult, channelId: autocomplete.channel.id, query, name };
    DispatcherDefault.dispatch(obj);
    if (null == ApplicationCommandAutocompleteStore.getAutocompleteChoices(autocomplete.channel.id, name, query)) {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.INTERACTIONS, body: null, timeout: 3000, rejectWithError: true };
      obj = { type: Server.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE, application_id: applicationId.applicationId, guild_id: null, channel_id: null, session_id: null, data: null, nonce: null };
      const guild = autocomplete.guild;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      obj.guild_id = id;
      obj.channel_id = autocomplete.channel.id;
      obj.session_id = AuthenticationStore.getSessionId();
      obj.data = data;
      obj.nonce = fromTimestampResult;
      request.body = obj;
      HTTP.post(request).catch(() => {
        const obj = { type: "INTERACTION_FAILURE", nonce: fromTimestampResult };
        obj.dispatch(obj);
      });
      const postResult = HTTP.post(request);
    }
    const tmpResult = DispatcherDefault;
  }
};
export const fetchCommand = function fetchCommand(guildId, channelId, commandId) {
  const obj = { type: "APPLICATION_COMMAND_FETCH", channelId, commandId, guildId };
  obj.dispatch(obj);
};
export const fetchCommands = function fetchCommands(guildId, channelId, commandIds) {
  const obj = { type: "APPLICATION_COMMANDS_FETCH", channelId, commandIds, guildId };
  obj.dispatch(obj);
};
export const fetchCommandsForApplication = function fetchCommandsForApplication(arg0) {
  ({ guildId, channelId, applicationId } = arg0);
  DispatcherDefault.dispatch({ type: "APPLICATION_COMMANDS_FETCH_FOR_APPLICATION", channelId, guildId, applicationId });
};
export const updateRegistry = function updateRegistry(commands, applications, channelId) {
  const obj = { type: "APPLICATION_COMMAND_REGISTRY_UPDATE", applications, commands, channelId };
  obj.dispatch(obj);
};
export const setAppLauncherActiveCommand = function setAppLauncherActiveCommand(id, command) {
  if (null != command) {
    _modDef38(command.inputType !== ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder");
  }
  const obj = { type: "APP_LAUNCHER_SET_ACTIVE_COMMAND", channelId: id, command };
  obj.dispatch(obj);
};