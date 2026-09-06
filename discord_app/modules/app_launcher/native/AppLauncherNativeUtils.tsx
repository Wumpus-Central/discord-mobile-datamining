// discord_app/modules/app_launcher/native/AppLauncherNativeUtils.tsx
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import _modDef1884 from "../../../../_runtime/metro/01884__.js";
import Server from "../../../flow/Server.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import ApplicationCommandUtils from "../../application_commands/ApplicationCommandUtils.tsx";
import ApplicationCommandActionCreatorsAll from "../../application_commands/ApplicationCommandActionCreators.tsx";
import AppLauncherUtils from "../utils/AppLauncherUtils.tsx";
import FrecencySection from "screens/home/FrecencySection.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const AppLauncherNativeConstants = fn(1482);
({ APP_LAUNCHER_BUILT_IN_SECTION_ICON: closure_7, AppLauncherRouteName: closure_8 } = AppLauncherNativeConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const BuiltInSectionId = fn(4999).BuiltInSectionId;
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNativeUtils.tsx");

export const handleApplicationSelected = function handleApplicationSelected(entrypoint) {
  ({ application, navigation, sectionName, navigates } = entrypoint);
  ({ location: _location, context, installOnDemand, query, searchResultsPosition } = entrypoint);
  if (navigates === undefined) {
    navigates = true;
  }
  entrypoint = entrypoint.entrypoint;
  let obj = {
    location: _location,
    section: null,
    application_id: null,
    section_name: null,
    query: null,
    search_results_position: null,
    source: null,
  };
  if (application.id === BuiltInSectionId.BUILT_IN) {
    let APP = tmp(7523).ApplicationCommandTriggerSections.BUILT_IN;
  } else {
    APP = tmp(7523).ApplicationCommandTriggerSections.APP;
  }
  obj.section = APP;
  let id = application.id;
  if (id == null) {
    id = null;
  }
  obj.application_id = id;
  obj.section_name = sectionName;
  obj.query = query;
  obj.search_results_position = searchResultsPosition;
  obj.source = entrypoint;
  obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_SECTION_SELECTED, obj);
  if (navigates) {
    obj = { application, context, installOnDemand, sectionName, entrypoint };
    navigation.navigate(constants.APPLICATION_VIEW, obj);
  }
};
export const handleViewAllSelected = function handleViewAllSelected(arg0) {
  ({ navigation, sectionName, applications, sectionItemType, commands } = arg0);
  ({ location: _location, context, sectionOverallPosition, sectionDescriptors, title, promotedApplicationIds } = arg0);
  const obj = {
    section_name: sectionName,
    num: sectionItemType === FrecencySection.SectionItemType.APPS ? applications.length : commands.length,
  };
  obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SECTION_VIEW_MORE, obj);
  navigation.navigate(constants.APP_LIST_VIEW, {
    analyticsLocation: _location,
    context,
    sectionName,
    sectionOverallPosition,
    applications,
    sectionItemType,
    commands,
    sectionDescriptors,
    title,
    promotedApplicationIds,
  });
};
export const handleApplicationCommandSelected = function handleApplicationCommandSelected(arg0) {
  ({ location: _location, context, command } = arg0);
  ({ section, sectionDescriptors, query, navigation, installOnDemand, sectionName, entrypoint } = arg0);
  ({ searchResultsPosition, onCommandExecuted } = arg0);
  let obj = {
    command,
    location: _location,
    triggerSection: ApplicationCommandUtils.getCommandTriggerSection(section),
    queryLength: query.length,
    sectionName,
    query,
    searchResultsPosition,
    source: entrypoint,
  };
  obj.trackCommandSelected(obj);
  if (command.type === Server.ApplicationCommandType.PRIMARY_ENTRY_POINT) {
    obj = { application: section.application, context, installOnDemand, sectionName, entrypoint };
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
      const result = ApplicationCommandActionCreatorsAll.setAppLauncherActiveCommand(context.channel.id, command);
      const obj1 = {
        command,
        section: tmp5,
        context,
        installOnDemand,
        sectionName,
        analyticsLocation: _location,
        onCommandExecuted,
      };
      navigation.navigate(constants.COMMAND_VIEW, obj1);
    }
  }
};
export const getInitialOptionValues = function getInitialOptionValues(option) {
  option = option.option;
  ({ prefilledValues, roles } = option);
  let found;
  if (prefilledValues != null) {
    found = prefilledValues.find((name) => name.name === option.name && name.type === tmp.type);
  }
  const type = option.type;
  if (Server.ApplicationCommandOptionType.BOOLEAN === type) {
    if (null != found) {
      let obj = { type: "text", text: null };
      const _String8 = String;
      const _Boolean = Boolean;
      obj.text = String(Boolean(found.value));
      const items = [obj];
      let items1 = items;
    } else {
      items1 = [{ type: "text", text: "false" }];
    }
    return items1;
  } else {
    if (tmp2(1894).ApplicationCommandOptionType.STRING !== type) {
      if (tmp2(1894).ApplicationCommandOptionType.INTEGER !== type) {
        if (tmp2(1894).ApplicationCommandOptionType.NUMBER !== type) {
          if (tmp2(1894).ApplicationCommandOptionType.CHANNEL === type) {
            if (null != found) {
              const _String5 = String;
              if (null != ChannelStore.getChannel(String(found.value))) {
                obj = { type: "channelMention", channelId: null };
                const _String6 = String;
                obj.channelId = String(found.value);
                const items2 = [obj];
                let items3 = items2;
              }
              return items3;
            }
            items3 = [{ type: "text", text: "" }];
          } else if (tmp2(1894).ApplicationCommandOptionType.USER === type) {
            if (null != found) {
              const _String3 = String;
              if (null != UserStore.getUser(String(found.value))) {
                const obj1 = { type: "userMention", userId: null };
                const _String4 = String;
                obj1.userId = String(found.value);
                const items4 = [obj1];
                let items5 = items4;
              }
              return items5;
            }
            items5 = [{ type: "text", text: "" }];
          } else if (tmp2(1894).ApplicationCommandOptionType.ROLE === type) {
            if (null != found) {
              if (typeof found.value === "string") {
                if (found.value in roles) {
                  const obj2 = { type: "roleMention", roleId: found.value };
                  const items6 = [obj2];
                  let items7 = items6;
                }
                return items7;
              }
            }
            items7 = [{ type: "text", text: "" }];
          } else if (tmp2(1894).ApplicationCommandOptionType.MENTIONABLE === type) {
            if (null != found) {
              if (found.value === option.guildId) {
                const items8 = [{ type: "textMention", text: "@everyone" }];
                return items8;
              } else {
                if (typeof found.value === "string") {
                  if (found.value in roles) {
                    const obj3 = { type: "roleMention", roleId: found.value };
                    const items9 = [obj3];
                    return items9;
                  }
                }
                const _String = String;
                if (null != UserStore.getUser(String(found.value))) {
                  obj = { type: "userMention", userId: null };
                  const _String2 = String;
                  obj.userId = String(found.value);
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
        obj4.text = String(found.value);
        const items13 = [obj4];
        return items13;
      } else {
        let choices = option.choices;
        if (choices.some((value) => value.value === found.value)) {
          const obj5 = { type: "text", text: null };
          choices = option.choices;
          obj5.text = choices.find((value) => value.value === found.value).displayName;
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
    let applicationIconSource = _modDef1884;
  } else {
    let obj = AppLauncherUtils;
    const obj2 = AvatarUtilsDefault;
    if (isRealApplicationResult) {
      obj = { id: null, icon: null, bot: null, botIconFirst: false };
      ({ id: obj3.id, icon: obj3.icon, bot: obj3.bot } = application);
      applicationIconSource = obj2.getApplicationIconSource(obj);
    } else {
      applicationIconSource = obj2.makeSource(React5);
    }
    isRealApplicationResult = obj.isRealApplication(application);
  }
  return applicationIconSource;
};
export const useLogAppLauncherEmptyStateView = function useLogAppLauncherEmptyStateView(COMMAND_NOT_FOUND, query) {
  _require = COMMAND_NOT_FOUND;
  const entrypoint = require("AppLauncherContext").useAppLauncherContext().entrypoint;
  const items = [COMMAND_NOT_FOUND, query, entrypoint];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      const obj = { type: tmp, source: entrypoint };
      obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, obj);
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
  closure_5 = undefined;
  let obj = sectionName(entrypoint[16]);
  const analyticsContext = obj.useAnalyticsContext();
  const action = sectionName(entrypoint[17]).useActivityAction({ context, applicationId, fetchesApplication: flag });
  const obj2 = sectionName(entrypoint[17]);
  const getOrFetchApplication = sectionName(entrypoint[18]).useGetOrFetchApplication(applicationId, flag);
  const obj3 = sectionName(entrypoint[18]);
  const entrypointParams = sectionName(entrypoint[15]).useAppLauncherContext().entrypointParams;
  const obj4 = sectionName(entrypoint[15]);
  obj = {
    application: getOrFetchApplication,
    context,
    embeddedActivitiesManager: require("EmbeddedActivitiesNativeManager"),
    locationObject: analyticsContext.location,
    onActivityItemSelectedProp(applicationId) {
      applicationId = applicationId.applicationId;
      if (importDefault != null) {
        let obj = { applicationId };
        tmp(obj);
      }
      obj = {
        location: _location,
        application_id: applicationId,
        section_name: sectionName,
        action,
        source: entrypoint,
      };
      AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, obj);
    },
    launchingComponentId: fetchesApplication.launchingComponentId,
    commandOrigin: sectionName(entrypoint[7]).CommandOrigin.APPLICATION_LAUNCHER,
    sectionName,
    source: entrypoint,
    fetchesApplication: flag,
    customId: null,
    referrerId: null,
  };
  let customId;
  if (entrypointParams != null) {
    customId = entrypointParams.customId;
  }
  obj.customId = customId;
  let referrerId;
  if (entrypointParams != null) {
    referrerId = entrypointParams.referrerId;
  }
  obj.referrerId = referrerId;
  closure_5 = sectionName(entrypoint[17]).useOnActivityItemSelected(obj);
  obj = {
    handleActivityItemSelected() {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      closure_5();
    },
  };
  return obj;
};
