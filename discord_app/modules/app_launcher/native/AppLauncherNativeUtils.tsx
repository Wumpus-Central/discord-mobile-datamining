// === Module 11623: handleApplicationSelected ===

// Module 11623 (handleApplicationSelected)
import getAvatarURLDefault from "getAvatarURL" /* 1431 */;
import registerAssetDefault from "registerAsset" /* 1901 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 4700 */;
import setActiveCommandAll from "setActiveCommand" /* 7522 */;
import getShelfBadgeTypeIfActive from "getShelfBadgeTypeIfActive" /* 8145 */;
import Placeholder from "Placeholder" /* 11624 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "ensureGuildLoaded" /* 1387 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1498 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { BuiltInSectionId } from "TRUE_OPTION_NAME" /* 4952 */;

require = arg1;
({ APP_LAUNCHER_BUILT_IN_SECTION_ICON: error, AppLauncherRouteName: closure_8 } = APP_LAUNCHER_BUILT_IN_SECTION_ICON);
let result = require("set").fileFinishedImporting("modules/app_launcher/native/AppLauncherNativeUtils.tsx");

export const handleApplicationSelected = function handleApplicationSelected(entrypoint) {
  ({ application, navigation, sectionName, navigates } = entrypoint);
  ({ location: _location, context, installOnDemand, query, searchResultsPosition } = entrypoint);
  if (navigates === undefined) {
    navigates = true;
  }
  entrypoint = entrypoint.entrypoint;
  let obj = collectGuildAnalyticsMetadata;
  obj = { location: _location, section: null, application_id: null, section_name: null, query: null, search_results_position: null, source: null };
  if (application.id === BuiltInSectionId.BUILT_IN) {
    let APP = tmp(7268).ApplicationCommandTriggerSections.BUILT_IN;
  } else {
    APP = tmp(7268).ApplicationCommandTriggerSections.APP;
  }
  obj[1] = APP;
  let id = application.id;
  if (id == null) {
    id = null;
  }
  obj[2] = id;
  obj[3] = sectionName;
  obj[4] = query;
  obj[5] = searchResultsPosition;
  obj[6] = entrypoint;
  obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_SECTION_SELECTED, obj);
  if (navigates) {
    obj = { application: null, context: null, installOnDemand: null, sectionName: null, entrypoint: null };
    obj[0] = application;
    obj[1] = context;
    obj[2] = installOnDemand;
    obj[3] = sectionName;
    obj[4] = entrypoint;
    navigation.navigate(constants.APPLICATION_VIEW, obj);
  }
};
export const handleViewAllSelected = function handleViewAllSelected(arg0) {
  ({ navigation, sectionName, applications, sectionItemType, commands } = arg0);
  ({ location: _location, context, sectionOverallPosition, sectionDescriptors, title, promotedApplicationIds } = arg0);
  let obj = collectGuildAnalyticsMetadata;
  obj = { section_name: sectionName, num: sectionItemType === Placeholder.SectionItemType.APPS ? applications.length : commands.length };
  obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SECTION_VIEW_MORE, obj);
  navigation.navigate(constants.APP_LIST_VIEW, { analyticsLocation: _location, context, sectionName, sectionOverallPosition, applications, sectionItemType, commands, sectionDescriptors, title, promotedApplicationIds });
};
export const handleApplicationCommandSelected = function handleApplicationCommandSelected(arg0) {
  ({ location: _location, context, command } = arg0);
  ({ section, sectionDescriptors, query, navigation, installOnDemand, sectionName, entrypoint } = arg0);
  ({ searchResultsPosition, onCommandExecuted } = arg0);
  let obj = command(7266);
  obj = { command, location: _location, triggerSection: command(7266).getCommandTriggerSection(section), queryLength: query.length, sectionName, query, searchResultsPosition, source: entrypoint };
  obj.trackCommandSelected(obj);
  if (command.type === command(1955).ApplicationCommandType.PRIMARY_ENTRY_POINT) {
    obj = { application: null, context: null, installOnDemand: null, sectionName: null, entrypoint: null };
    obj[0] = section.application;
    obj[1] = context;
    obj[2] = installOnDemand;
    obj[3] = sectionName;
    obj[4] = entrypoint;
    navigation.navigate(constants.APPLICATION_VIEW, obj);
  } else {
    let tmp5 = section;
    if (section.id === BuiltInSectionId.FRECENCY) {
      const found = sectionDescriptors.find((id) => id.id === command.applicationId);
      tmp5 = section;
      if (null != found) {
        tmp5 = found;
      }
    }
    if ("channel" === context.type) {
      const result = setActiveCommandAll.setAppLauncherActiveCommand(context.channel.id, command);
      obj1 = { command: null, section: null, context: null, installOnDemand: null, sectionName: null, analyticsLocation: null, onCommandExecuted: null };
      obj1[0] = command;
      obj1[1] = tmp5;
      obj1[2] = context;
      obj1[3] = installOnDemand;
      obj1[4] = sectionName;
      obj1[5] = _location;
      obj1[6] = onCommandExecuted;
      navigation.navigate(constants.COMMAND_VIEW, obj1);
      const obj4 = setActiveCommandAll;
    }
  }
};
export const getInitialOptionValues = function getInitialOptionValues(option) {
  option = option.option;
  ({ prefilledValues, roles } = option);
  let found;
  found = undefined;
  if (prefilledValues != null) {
    found = prefilledValues.find((name) => name.name === option.name && name.type === tmp.type);
  }
  const type = option.type;
  if (option(1955).ApplicationCommandOptionType.BOOLEAN === type) {
    if (null != found) {
      let obj = { type: "text", text: null };
      const _String8 = String;
      const _Boolean = Boolean;
      obj[1] = String(Boolean(found.value));
      const items = [obj];
      let items1 = items;
    } else {
      items1 = [{ type: "text", text: "false" }];
    }
    return items1;
  } else {
    if (tmp2(1955).ApplicationCommandOptionType.STRING !== type) {
      if (tmp2(1955).ApplicationCommandOptionType.INTEGER !== type) {
        if (tmp2(1955).ApplicationCommandOptionType.NUMBER !== type) {
          if (tmp2(1955).ApplicationCommandOptionType.CHANNEL === type) {
            if (null != found) {
              const _String5 = String;
              if (null != channel.getChannel(String(found.value))) {
                obj = { type: "channelMention", channelId: null };
                const _String6 = String;
                obj[1] = String(found.value);
                const items2 = [obj];
                let items3 = items2;
              }
              return items3;
            }
            items3 = [{ type: "text", text: "" }];
          } else if (tmp2(1955).ApplicationCommandOptionType.USER === type) {
            if (null != found) {
              const _String3 = String;
              if (null != authStore.getUser(String(found.value))) {
                obj1 = { type: "userMention", userId: null };
                const _String4 = String;
                obj1[1] = String(found.value);
                const items4 = [obj1];
                let items5 = items4;
              }
              return items5;
            }
            items5 = [{ type: "text", text: "" }];
          } else if (tmp2(1955).ApplicationCommandOptionType.ROLE === type) {
            if (null != found) {
              if (typeof found.value === "string") {
                if (found.value in roles) {
                  const obj2 = { type: "roleMention", roleId: null };
                  obj2[1] = found.value;
                  const items6 = [obj2];
                  let items7 = items6;
                }
                return items7;
              }
            }
            items7 = [{ type: "text", text: "" }];
          } else if (tmp2(1955).ApplicationCommandOptionType.MENTIONABLE === type) {
            if (null != found) {
              if (found.value === option.guildId) {
                const items8 = [{ type: "textMention", text: "@everyone" }];
                return items8;
              } else {
                if (typeof found.value === "string") {
                  if (found.value in roles) {
                    const obj3 = { type: "roleMention", roleId: null };
                    obj3[1] = found.value;
                    const items9 = [obj3];
                    return items9;
                  }
                }
                const _String = String;
                if (null != authStore.getUser(String(found.value))) {
                  obj = { type: "userMention", userId: null };
                  const _String2 = String;
                  obj[1] = String(found.value);
                  const items10 = [obj];
                  return items10;
                }
              }
            }
            const items11 = [{ type: "text", text: "" }];
            return items11;
          } else {
            const items12 = [{ type: "text", text: "" }];
            return items12;
          }
        }
      }
    }
    if (null != found) {
      if (null == option.choices) {
        const obj4 = { type: "text", text: null };
        const _String7 = String;
        obj4[1] = String(found.value);
        const items13 = [obj4];
        return items13;
      } else {
        let choices = option.choices;
        if (choices.some((value) => value.value === found.value)) {
          const obj5 = { type: "text", text: null };
          choices = option.choices;
          obj5[1] = choices.find((value) => value.value === found.value).displayName;
          const items14 = [obj5];
          return items14;
        }
      }
    }
    const items15 = [{ type: "text", text: "" }];
    return items15;
  }
};
export const getAppLauncherIconSource = function getAppLauncherIconSource(application) {
  if (null == application) {
    let applicationIconSource = registerAssetDefault;
  } else {
    let obj = getShelfBadgeTypeIfActive;
    const obj2 = getAvatarURLDefault;
    if (isRealApplicationResult) {
      obj = { id: null, icon: null, bot: null, botIconFirst: false };
      ({ id: obj3[0], icon: obj3[1], bot: obj3[2] } = application);
      applicationIconSource = obj2.getApplicationIconSource(obj);
    } else {
      applicationIconSource = obj2.makeSource(closure_7);
    }
    isRealApplicationResult = obj.isRealApplication(application);
  }
  return applicationIconSource;
};
export const useLogAppLauncherEmptyStateView = function useLogAppLauncherEmptyStateView(COMMAND_NOT_FOUND, query) {
  const _require = COMMAND_NOT_FOUND;
  const entrypoint = _require(9049).useAppLauncherContext().entrypoint;
  const items = [COMMAND_NOT_FOUND, query, entrypoint];
  const effect = React.useEffect(() => {
    if (null != COMMAND_NOT_FOUND) {
      let obj = COMMAND_NOT_FOUND(closure_1_3[6]);
      obj = { type: null, source: null };
      obj[0] = tmp;
      obj[1] = entrypoint;
      obj.trackWithMetadata(closure_1_9.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, obj);
    }
  }, items);
};
export const useHandleActivityItemSelected = function useHandleActivityItemSelected(fetchesApplication) {
  ({ applicationId, context, sectionName } = fetchesApplication);
  ({ onActivityItemSelected: importDefault, location: importAll, entrypoint } = fetchesApplication);
  let flag = fetchesApplication.fetchesApplication;
  if (flag === undefined) {
    flag = true;
  }
  closure_4 = undefined;
  closure_5 = undefined;
  let obj = sectionName(entrypoint[16]);
  const analyticsContext = obj.useAnalyticsContext();
  closure_4 = sectionName(entrypoint[17]).useActivityAction({ context, applicationId, fetchesApplication: flag });
  const obj2 = sectionName(entrypoint[17]);
  const getOrFetchApplication = sectionName(entrypoint[18]).useGetOrFetchApplication(applicationId, flag);
  const obj3 = sectionName(entrypoint[18]);
  const entrypointParams = sectionName(entrypoint[15]).useAppLauncherContext().entrypointParams;
  const obj4 = sectionName(entrypoint[15]);
  obj = {
    application: getOrFetchApplication,
    context,
    embeddedActivitiesManager: importDefault(entrypoint[19]),
    locationObject: analyticsContext.location,
    onActivityItemSelectedProp(applicationId) {
      applicationId = applicationId.applicationId;
      if (closure_1 != null) {
        let obj = { applicationId: null };
        obj[0] = applicationId;
        tmp(obj);
      }
      obj = { location: closure_2, application_id: applicationId, section_name: sectionName, action: closure_4, source: entrypoint };
      sectionName(entrypoint[6]).trackWithMetadata(closure_1_9.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, obj);
    },
    launchingComponentId: fetchesApplication.launchingComponentId,
    commandOrigin: sectionName(entrypoint[7]).CommandOrigin.APPLICATION_LAUNCHER,
    sectionName,
    source: entrypoint,
    fetchesApplication: flag,
    customId: null,
    referrerId: null
  };
  let customId;
  if (entrypointParams != null) {
    customId = entrypointParams.customId;
  }
  obj[10] = customId;
  let referrerId;
  if (entrypointParams != null) {
    referrerId = entrypointParams.referrerId;
  }
  obj[11] = referrerId;
  closure_5 = sectionName(entrypoint[17]).useOnActivityItemSelected(obj);
  obj = {
    handleActivityItemSelected() {
      const result = sectionName(entrypoint[20]).triggerHapticFeedback(sectionName(entrypoint[20]).HapticFeedbackTypes.IMPACT_MEDIUM);
      callback();
    }
  };
  return obj;
};