// discord_app/modules/application_commands/ApplicationCommandActionCreators.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import Server from "../../flow/Server.tsx";
import ApplicationCommandUtils from "ApplicationCommandUtils.tsx";
import ApplicationCommandTypes from "ApplicationCommandTypes.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ApplicationCommandAutocompleteStore from "ApplicationCommandAutocompleteStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandActionCreators.tsx");

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
  ({
    channelId,
    section,
    location: _location,
    initialValues,
    triggerSection,
    queryLength,
    sectionName,
    query,
    searchResultsPosition,
    source,
    commandOrigin,
  } = command);
  if (null != command) {
    const tmp3 = _modDef38;
    tmp3(
      command.inputType !== ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER,
      "command should not be placeholder",
    );
  }
  const obj = DispatcherDefault;
  obj.dispatch({
    type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
    channelId,
    command,
    section,
    initialValues,
    location: _location,
    triggerSection,
    queryLength,
    sectionName,
    query,
    searchResultsPosition,
    source,
    commandOrigin,
  });
};
export const setPreferredCommandId = function setPreferredCommandId(channelId, commandId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId, commandId };
  obj.dispatch(obj2);
};
export const updateOptionStates = function updateOptionStates(id, changedOptionStates) {
  const obj = DispatcherDefault;
  const obj2 = { type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: id, changedOptionStates };
  obj.dispatch(obj2);
};
export const updateOptionValidationStates = function updateOptionValidationStates(channelId, arg1) {
  const entries = Object.entries(arg1);
  const fromEntriesResult = fromEntries(
    entries.map((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      const items = [tmp, { lastValidationResult: tmp2 }];
      return items;
    }),
  );
  const obj = DispatcherDefault;
  const obj2 = { type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId, changedOptionStates: fromEntriesResult };
  obj.dispatch(obj2);
};
export const updateChannelState = function updateChannelState(arg0) {
  let _location;
  let changedOptionStates;
  let channelId;
  let command;
  let preferredCommandId;
  let section;
  ({ channelId, command, section, preferredCommandId, location: _location, changedOptionStates } = arg0);
  const obj = DispatcherDefault;
  obj.dispatch({
    type: "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE",
    channelId,
    command,
    section,
    preferredCommandId,
    location: _location,
    changedOptionStates,
  });
};
export const updateApplicationGuildCommandPermissions = function updateApplicationGuildCommandPermissions(
  arg0,
  arg1,
  arg2,
  permissions,
) {
  let obj;
  const HTTP = HTTPUtils.HTTP;
  const request = {
    body: obj,
    url: Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(arg0, arg1, arg2),
    rejectWithError: false,
  };
  obj = { permissions };
  return HTTP.put(request);
};
export const performAutocomplete = function performAutocomplete(c0, c2, data) {
  let id;
  let name;
  let obj4;
  let query;
  _modDef38(null != dependencyMap.autocomplete, "Missing autocomplete context");
  ({ query, name } = dependencyMap.autocomplete);
  let str = "";
  let obj = ApplicationCommandUtils;
  let interactionOptions = obj.extractInteractionDataProps(data).interactionOptions;
  if (interactionOptions == null) {
    interactionOptions = [];
  }
  const iter = interactionOptions[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let iter2 = nextResult;
    let focused = "focused" in nextResult;
    if (focused) {
      focused = iter2.focused;
    }
    if (!focused) {
      let name2 = iter2.name;
      let _String = String;
      let _HermesInternal = HermesInternal;
      let str2 = "";
      let str3 = "=";
      let str4 = "\0";
      str = str + "" + name2 + "=" + String(iter2.value) + "\0";
    }
    continue;
  }
  let obj2 = SnowflakeUtilsDefault;
  const fromTimestampResult = obj2.fromTimestamp(Date.now());
  const require = fromTimestampResult;
  if (null != dependencyMap.channel) {
    const obj3 = {
      type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
      nonce: fromTimestampResult,
      channelId: dependencyMap.channel.id,
      query,
      name,
      contextKey: str,
    };
    const tmp7Result = DispatcherDefault;
    tmp7Result.dispatch(obj3);
    if (null == ApplicationCommandAutocompleteStore.getAutocompleteChoices(dependencyMap.channel.id, name, query)) {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.INTERACTIONS, body: obj4, timeout: 3000, rejectWithError: true };
      const post = HTTP.post;
      const guild = dependencyMap.guild;
      obj4 = {
        type: Server.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE,
        application_id: _require.applicationId,
        guild_id: id,
        channel_id: dependencyMap.channel.id,
        session_id: AuthenticationStore.getSessionId(),
        data,
        nonce: fromTimestampResult,
      };
      id = undefined;
      if (guild != null) {
        id = guild.id;
      }
      const postResult = post(request);
      postResult.catch(() => {
        const obj = DispatcherDefault;
        const obj2 = { type: "INTERACTION_FAILURE", nonce: require };
        obj.dispatch(obj2);
      });
    }
  }
};
export const fetchCommand = function fetchCommand(guildId, channelId, commandId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "APPLICATION_COMMAND_FETCH", channelId, commandId, guildId };
  obj.dispatch(obj2);
};
export const fetchCommands = function fetchCommands(guildId, channelId, commandIds) {
  const obj = DispatcherDefault;
  const obj2 = { type: "APPLICATION_COMMANDS_FETCH", channelId, commandIds, guildId };
  obj.dispatch(obj2);
};
export const fetchCommandsForApplication = function fetchCommandsForApplication(arg0) {
  let applicationId;
  let channelId;
  let guildId;
  ({ guildId, channelId, applicationId } = arg0);
  const obj = DispatcherDefault;
  obj.dispatch({ type: "APPLICATION_COMMANDS_FETCH_FOR_APPLICATION", channelId, guildId, applicationId });
};
export const updateRegistry = function updateRegistry(commands, applications, channelId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "APPLICATION_COMMAND_REGISTRY_UPDATE", applications, commands, channelId };
  obj.dispatch(obj2);
};
export const setAppLauncherActiveCommand = function setAppLauncherActiveCommand(id, command) {
  if (null != command) {
    const tmp3 = _modDef38;
    tmp3(
      command.inputType !== ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER,
      "command should not be placeholder",
    );
  }
  const obj = DispatcherDefault;
  const obj2 = { type: "APP_LAUNCHER_SET_ACTIVE_COMMAND", channelId: id, command };
  obj.dispatch(obj2);
};
