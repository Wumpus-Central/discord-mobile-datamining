// === Module 7898: ApplicationCommandActionCreators ===

// Module 7898 (ApplicationCommandActionCreators)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import Server from "Server" /* 1895 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7637 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ApplicationCommandAutocompleteStore from "ApplicationCommandAutocompleteStore" /* 7899 */;

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
  DispatcherDefault.dispatch({ type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId, commandId });
};
export const updateOptionStates = function updateOptionStates(id, changedOptionStates) {
  DispatcherDefault.dispatch({ type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: id, changedOptionStates });
};
export const updateOptionValidationStates = function updateOptionValidationStates(channelId, arg1) {
  const entries = Object.entries(arg1);
  const fromEntriesResult = Object.fromEntries(entries.map((item) => {
    [tmp, tmp2] = item;
    const items = [tmp, { lastValidationResult: tmp2 }];
    return items;
  }));
  DispatcherDefault.dispatch({ type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId, changedOptionStates: fromEntriesResult });
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
  const fromTimestampResult = SnowflakeUtilsDefault.fromTimestamp(Date.now());
  require = fromTimestampResult;
  if (null != autocomplete.channel) {
    const obj2 = { type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", nonce: fromTimestampResult, channelId: autocomplete.channel.id, query, name };
    DispatcherDefault.dispatch(obj2);
    if (null == ApplicationCommandAutocompleteStore.getAutocompleteChoices(autocomplete.channel.id, name, query)) {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.INTERACTIONS, body: null, timeout: 3000, rejectWithError: true };
      const obj3 = { type: Server.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE, application_id: applicationId.applicationId, guild_id: null, channel_id: null, session_id: null, data: null, nonce: null };
      const guild = autocomplete.guild;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      obj3.guild_id = id;
      obj3.channel_id = autocomplete.channel.id;
      obj3.session_id = AuthenticationStore.getSessionId();
      obj3.data = data;
      obj3.nonce = fromTimestampResult;
      request.body = obj3;
      HTTP.post(request).catch(() => {
        DispatcherDefault.dispatch({ type: "INTERACTION_FAILURE", nonce: fromTimestampResult });
      });
      const postResult = HTTP.post(request);
    }
    const tmpResult = DispatcherDefault;
  }
};
export const fetchCommand = function fetchCommand(guildId, channelId, commandId) {
  DispatcherDefault.dispatch({ type: "APPLICATION_COMMAND_FETCH", channelId, commandId, guildId });
};
export const fetchCommands = function fetchCommands(guildId, channelId, commandIds) {
  DispatcherDefault.dispatch({ type: "APPLICATION_COMMANDS_FETCH", channelId, commandIds, guildId });
};
export const fetchCommandsForApplication = function fetchCommandsForApplication(arg0) {
  ({ guildId, channelId, applicationId } = arg0);
  DispatcherDefault.dispatch({ type: "APPLICATION_COMMANDS_FETCH_FOR_APPLICATION", channelId, guildId, applicationId });
};
export const updateRegistry = function updateRegistry(commands, applications, channelId) {
  DispatcherDefault.dispatch({ type: "APPLICATION_COMMAND_REGISTRY_UPDATE", applications, commands, channelId });
};
export const setAppLauncherActiveCommand = function setAppLauncherActiveCommand(id, command) {
  if (null != command) {
    _modDef38(command.inputType !== ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder");
  }
  DispatcherDefault.dispatch({ type: "APP_LAUNCHER_SET_ACTIVE_COMMAND", channelId: id, command });
  const obj2 = { type: "APP_LAUNCHER_SET_ACTIVE_COMMAND", channelId: id, command };
};