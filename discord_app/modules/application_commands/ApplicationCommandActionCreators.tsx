// discord_app/modules/application_commands/ApplicationCommandActionCreators.tsx
import fetchFingerprint from "fetchFingerprint";
import handleInit from "handleInit";
import { Endpoints } from "ME";
import { 00038__ } from "../../../_runtime/metro/00038__.js";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../Dispatcher.tsx";
import { PermissionOverwriteType } from "../../flow/Server.tsx";
import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";
import { ApplicationCommandSectionType } from "ApplicationCommandTypes.tsx";

let require = arg1;
const result = require("ME").fileFinishedImporting("modules/application_commands/ApplicationCommandActionCreators.tsx");

export const setActiveCommand = function setActiveCommand(command) {
  let _location;
  let channelId;
  let commandOrigin;
  let initialValues;
  let query;
  let queryLength;
  let searchResultsPosition;
  let section;
  let sectionName;
  let source;
  let triggerSection;
  command = command.command;
  ({ channelId, section, location: _location, initialValues, triggerSection, queryLength, sectionName, query, searchResultsPosition, source, commandOrigin } = command);
  if (null != command) {
    00038__(command.inputType !== ApplicationCommandSectionType /* ApplicationCommandSectionType */.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder");
    const tmp3 = 00038__;
  }
  dispatcher.dispatch({ type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", channelId, command, section, initialValues, location: _location, triggerSection, queryLength, sectionName, query, searchResultsPosition, source, commandOrigin });
};
export const setPreferredCommandId = function setPreferredCommandId(channelId, commandId) {
  let obj = dispatcher;
  obj = { type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId, commandId };
  obj.dispatch(obj);
};
export const updateOptionStates = function updateOptionStates(id, changedOptionStates) {
  let obj = dispatcher;
  obj = { type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: id, changedOptionStates };
  obj.dispatch(obj);
};
export const updateOptionValidationStates = function updateOptionValidationStates(channelId) {
  const entries = Object.entries(arg1);
  let obj = dispatcher;
  obj = {
    type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
    channelId,
    changedOptionStates: Object.fromEntries(entries.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const items = [tmp, { lastValidationResult: tmp2 }];
      return items;
    }))
  };
  obj.dispatch(obj);
};
export const updateChannelState = function updateChannelState(arg0) {
  let _location;
  let changedOptionStates;
  let channelId;
  let command;
  let preferredCommandId;
  let section;
  ({ channelId, command, section, preferredCommandId, location: _location, changedOptionStates } = arg0);
  dispatcher.dispatch({ type: "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", channelId, command, section, preferredCommandId, location: _location, changedOptionStates });
};
export const updateApplicationGuildCommandPermissions = function updateApplicationGuildCommandPermissions(arg0, arg1, arg2, permissions) {
  const HTTP = sendRequest /* sendRequest */.HTTP;
  obj = { body: obj, url: Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(arg0, arg1, arg2), rejectWithError: false };
  obj = { permissions };
  return HTTP.put(obj);
};
export const performAutocomplete = function performAutocomplete(c0, closure_2, arg2) {
  let name;
  let query;
  00038__(null != closure_2.autocomplete, "Missing autocomplete context");
  ({ query, name } = closure_2.autocomplete);
  let obj = DISCORD_EPOCH;
  const fromTimestampResult = obj.fromTimestamp(Date.now());
  const require = fromTimestampResult;
  if (null != closure_2.channel) {
    obj = { type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", nonce: null, channelId: null, query: null, name: null };
    obj[1] = fromTimestampResult;
    obj[2] = closure_2.channel.id;
    obj[3] = query;
    obj[4] = name;
    dispatcher.dispatch(obj);
    if (null == autocompleteChoices.getAutocompleteChoices(closure_2.channel.id, name, query)) {
      const HTTP = sendRequest /* sendRequest */.HTTP;
      obj = { url: null, body: null, timeout: 3000, rejectWithError: true };
      obj[0] = Endpoints.INTERACTIONS;
      const obj1 = { type: null, application_id: null, guild_id: null, channel_id: null, session_id: null, data: null, nonce: null };
      obj1[0] = PermissionOverwriteType /* PermissionOverwriteType */.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE;
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
        let obj = outer1_1(outer1_2[5]);
        obj = { type: "INTERACTION_FAILURE", nonce: closure_0 };
        obj.dispatch(obj);
      });
      const postResult = HTTP.post(obj);
    }
    const tmpResult = dispatcher;
  }
};
export const fetchCommand = function fetchCommand(guildId, channelId, commandId) {
  let obj = dispatcher;
  obj = { type: "APPLICATION_COMMAND_FETCH", channelId, commandId, guildId };
  obj.dispatch(obj);
};
export const fetchCommands = function fetchCommands(guildId, channelId, commandIds) {
  let obj = dispatcher;
  obj = { type: "APPLICATION_COMMANDS_FETCH", channelId, commandIds, guildId };
  obj.dispatch(obj);
};
export const fetchCommandsForApplication = function fetchCommandsForApplication(arg0) {
  let applicationId;
  let channelId;
  let guildId;
  ({ guildId, channelId, applicationId } = arg0);
  dispatcher.dispatch({ type: "APPLICATION_COMMANDS_FETCH_FOR_APPLICATION", channelId, guildId, applicationId });
};
export const updateRegistry = function updateRegistry(commands, applications, channelId) {
  let obj = dispatcher;
  obj = { type: "APPLICATION_COMMAND_REGISTRY_UPDATE", applications, commands, channelId };
  obj.dispatch(obj);
};
export const setAppLauncherActiveCommand = function setAppLauncherActiveCommand(id, command) {
  if (null != command) {
    00038__(command.inputType !== ApplicationCommandSectionType /* ApplicationCommandSectionType */.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder");
    const tmp3 = 00038__;
  }
  let obj = dispatcher;
  obj = { type: "APP_LAUNCHER_SET_ACTIVE_COMMAND", channelId: id, command };
  obj.dispatch(obj);
};