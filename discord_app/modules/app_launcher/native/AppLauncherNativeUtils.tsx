// === Module 11665: AppLauncherNativeUtils ===

// Module 11665 (AppLauncherNativeUtils)
import Constants from "Constants" /* 1085 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import AssetRegistryDefault from "AssetRegistry" /* 1975 */;
import Server from "Server" /* 1985 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5788 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7030 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7034 */;
import ApplicationCommandActionCreatorsAll from "ApplicationCommandActionCreators" /* 7406 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8794 */;
import FrecencySection from "FrecencySection" /* 11666 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1489 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, onActivityItemSelected;

let metroImportAll;
let metroImportDefault;
({ APP_LAUNCHER_BUILT_IN_SECTION_ICON: metroImportDefault, AppLauncherRouteName: metroImportAll } = AppLauncherNativeConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(7);
  let obj2 = require("AppLauncherContext");
  const entrypoint = obj2.useAppLauncherContext().entrypoint;
  if (cResult[0] === entrypoint) {
    let tmp2;
    if (cResult[1] === arg0) {
      tmp2 = cResult[2];
    }
    if (cResult[3] === entrypoint) {
      if (cResult[4] === arg1) {
        let tmp4;
        if (cResult[5] === arg0) {
          tmp4 = cResult[6];
        }
        const effect = react.useEffect(tmp2, tmp4);
      }
    }
    const items = [arg0, arg1, entrypoint];
    cResult[3] = entrypoint;
    cResult[4] = arg1;
    cResult[5] = arg0;
    cResult[6] = items;
    tmp4 = items;
  }
  const fn = function c() {
    if (null != closure_0) {
      const obj2 = { type: tmp, source: entrypoint };
      const obj = AppAnalyticsUtils;
      obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, obj2);
    }
  };
  cResult[0] = entrypoint;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let obj = require("AppLauncherContext");
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  const items = [arg0, arg1, entrypoint];
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      const obj2 = { type: tmp, source: entrypoint };
      const obj = AppAnalyticsUtils;
      obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, obj2);
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onActivityItemSelected) => {
  let applicationId;
  let context;
  let entrypoint;
  let fetchesApplication;
  let launchingComponentId;
  let sectionName;
  const tmp = sectionName;
  let obj = sectionName(entrypoint[16]);
  const cResult = obj.c(23);
  ({ applicationId, context, sectionName } = onActivityItemSelected);
  onActivityItemSelected = onActivityItemSelected.onActivityItemSelected;
  const _location = onActivityItemSelected.location;
  entrypoint = onActivityItemSelected.entrypoint;
  ({ launchingComponentId, fetchesApplication } = onActivityItemSelected);
  const tmpResult = tmp(entrypoint[18]);
  const analyticsContext = tmpResult.useAnalyticsContext();
  if (cResult[0] === applicationId) {
    if (cResult[1] === context) {
      let tmp6;
      if (cResult[2] === (undefined === fetchesApplication || fetchesApplication)) {
        tmp6 = cResult[3];
      }
      const tmpResult5 = tmp(entrypoint[19]);
      const activityAction = tmpResult5.useActivityAction(tmp6);
      const tmpResult6 = tmp(entrypoint[20]);
      const getOrFetchApplication = tmpResult6.useGetOrFetchApplication(applicationId, tmp4);
      const tmpResult7 = tmp(entrypoint[17]);
      const entrypointParams = tmpResult7.useAppLauncherContext().entrypointParams;
      if (cResult[4] === activityAction) {
        if (cResult[5] === entrypoint) {
          if (cResult[6] === _location) {
            if (cResult[7] === onActivityItemSelected) {
              let tmp9;
              if (cResult[8] === sectionName) {
                tmp9 = cResult[9];
              }
              let customId;
              if (entrypointParams != null) {
                customId = entrypointParams.customId;
              }
              let referrerId;
              if (entrypointParams != null) {
                referrerId = entrypointParams.referrerId;
              }
              if (cResult[10] === analyticsContext.location) {
                if (cResult[11] === getOrFetchApplication) {
                  if (cResult[12] === context) {
                    if (cResult[13] === entrypoint) {
                      if (cResult[14] === (undefined === fetchesApplication || fetchesApplication)) {
                        if (cResult[15] === launchingComponentId) {
                          if (cResult[16] === sectionName) {
                            if (cResult[17] === tmp9) {
                              if (cResult[18] === customId) {
                                let tmp13;
                                let tmp16;
                                if (cResult[19] === referrerId) {
                                  tmp13 = cResult[20];
                                }
                                const tmpResult8 = tmp(entrypoint[19]);
                                const onActivityItemSelected1 = tmpResult8.useOnActivityItemSelected(tmp13);
                                if (cResult[21] !== onActivityItemSelected1) {
                                  let obj2 = {
                                    handleActivityItemSelected() {
                                                                      const obj = HapticUtils;
                                                                      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
                                                                      onActivityItemSelected1();
                                                                    }
                                  };
                                  cResult[21] = onActivityItemSelected1;
                                  cResult[22] = obj2;
                                  tmp16 = obj2;
                                } else {
                                  tmp16 = cResult[22];
                                }
                                return tmp16;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              let obj3 = { application: getOrFetchApplication, context, embeddedActivitiesManager: onActivityItemSelected(tmp2[21]), locationObject: analyticsContext.location, onActivityItemSelectedProp: tmp9, launchingComponentId, commandOrigin: tmp(tmp2[7]).CommandOrigin.APPLICATION_LAUNCHER, sectionName, source: entrypoint, fetchesApplication: undefined === fetchesApplication || fetchesApplication, customId, referrerId };
              cResult[10] = analyticsContext.location;
              cResult[11] = getOrFetchApplication;
              cResult[12] = context;
              cResult[13] = entrypoint;
              cResult[14] = undefined === fetchesApplication || fetchesApplication;
              cResult[15] = launchingComponentId;
              cResult[16] = sectionName;
              cResult[17] = tmp9;
              cResult[18] = customId;
              cResult[19] = referrerId;
              cResult[20] = obj3;
              tmp13 = obj3;
            }
          }
        }
      }
      const fn = function h(applicationId) {
        applicationId = applicationId.applicationId;
        if (onActivityItemSelected != null) {
          const obj = { applicationId };
          tmp(obj);
        }
        const obj2 = AppAnalyticsUtils;
        const obj3 = { location: _location, application_id: applicationId, section_name: sectionName, action: activityAction, source: entrypoint };
        obj2.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, obj3);
      };
      cResult[4] = activityAction;
      cResult[5] = entrypoint;
      cResult[6] = _location;
      cResult[7] = onActivityItemSelected;
      cResult[8] = sectionName;
      cResult[9] = fn;
      tmp9 = fn;
    }
  }
  const obj4 = { context, applicationId, fetchesApplication: undefined === fetchesApplication || fetchesApplication };
  cResult[0] = applicationId;
  cResult[1] = context;
  cResult[2] = undefined === fetchesApplication || fetchesApplication;
  cResult[3] = obj4;
  tmp6 = obj4;
}) : ((fetchesApplication) => {
  let _location;
  let applicationId;
  let context;
  let customId;
  let entrypoint;
  let referrerId;
  let sectionName;
  ({ applicationId, context, sectionName } = fetchesApplication);
  ({ onActivityItemSelected: importDefault, location: importAll, entrypoint } = fetchesApplication);
  let flag = fetchesApplication.fetchesApplication;
  const launchingComponentId = fetchesApplication.launchingComponentId;
  if (flag === undefined) {
    flag = true;
  }
  let closure_5;
  let obj = sectionName(entrypoint[18]);
  const analyticsContext = obj.useAnalyticsContext();
  let obj2 = sectionName(entrypoint[19]);
  const action = obj2.useActivityAction({ context, applicationId, fetchesApplication: flag });
  let obj3 = sectionName(entrypoint[20]);
  const getOrFetchApplication = obj3.useGetOrFetchApplication(applicationId, flag);
  const obj4 = sectionName(entrypoint[17]);
  const entrypointParams = obj4.useAppLauncherContext().entrypointParams;
  const tmp3 = sectionName(entrypoint[19]);
  const useOnActivityItemSelected = tmp3.useOnActivityItemSelected;
  const obj5 = {
    application: getOrFetchApplication,
    context,
    embeddedActivitiesManager: require("EmbeddedActivitiesNativeManager"),
    locationObject: analyticsContext.location,
    onActivityItemSelectedProp(applicationId) {
      applicationId = applicationId.applicationId;
      if (importDefault != null) {
        const obj = { applicationId };
        tmp(obj);
      }
      const obj2 = AppAnalyticsUtils;
      const obj3 = { location: importAll, application_id: applicationId, section_name: sectionName, action, source: entrypoint };
      obj2.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, obj3);
    },
    launchingComponentId,
    commandOrigin: sectionName(entrypoint[7]).CommandOrigin.APPLICATION_LAUNCHER,
    sectionName,
    source: entrypoint,
    fetchesApplication: flag,
    customId,
    referrerId
  };
  customId = undefined;
  if (entrypointParams != null) {
    customId = entrypointParams.customId;
  }
  referrerId = undefined;
  if (entrypointParams != null) {
    referrerId = entrypointParams.referrerId;
  }
  closure_5 = useOnActivityItemSelected(obj5);
  return {
    handleActivityItemSelected() {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      closure_5();
    }
  };
});
let result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNativeUtils.tsx");

export const handleApplicationSelected = function handleApplicationSelected(entrypoint) {
  let APP;
  let _location;
  let application;
  let context;
  let id;
  let installOnDemand;
  let navigates;
  let query;
  let searchResultsPosition;
  let sectionName;
  ({ application, navigation, sectionName, navigates } = entrypoint);
  ({ location: _location, context, installOnDemand, query, searchResultsPosition } = entrypoint);
  if (navigates === undefined) {
    navigates = true;
  }
  entrypoint = entrypoint.entrypoint;
  const obj = { location: _location, section: APP, application_id: id, section_name: sectionName, query, search_results_position: searchResultsPosition, source: entrypoint };
  const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
  const APPLICATION_COMMAND_SECTION_SELECTED = AnalyticEvents.APPLICATION_COMMAND_SECTION_SELECTED;
  AppAnalyticsUtils;
  if (application.id === BuiltInSectionId.BUILT_IN) {
    APP = ApplicationCommandTypes.ApplicationCommandTriggerSections.BUILT_IN;
  } else {
    APP = ApplicationCommandTypes.ApplicationCommandTriggerSections.APP;
  }
  id = application.id;
  if (id == null) {
    id = null;
  }
  trackWithMetadata(APPLICATION_COMMAND_SECTION_SELECTED, obj);
  if (navigates) {
    const obj2 = { application, context, installOnDemand, sectionName, entrypoint };
    navigation.navigate(metroImportAll.APPLICATION_VIEW, obj2);
  }
};
export const handleViewAllSelected = function handleViewAllSelected(arg0) {
  let _location;
  let applications;
  let commands;
  let context;
  let promotedApplicationIds;
  let sectionDescriptors;
  let sectionItemType;
  let sectionName;
  let sectionOverallPosition;
  let title;
  ({ navigation, sectionName, applications, sectionItemType, commands } = arg0);
  ({ location: _location, context, sectionOverallPosition, sectionDescriptors, title, promotedApplicationIds } = arg0);
  const obj = AppAnalyticsUtils;
  const obj2 = { section_name: sectionName, num: sectionItemType === FrecencySection.SectionItemType.APPS ? applications.length : commands.length };
  obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SECTION_VIEW_MORE, obj2);
  navigation.navigate(metroImportAll.APP_LIST_VIEW, { analyticsLocation: _location, context, sectionName, sectionOverallPosition, applications, sectionItemType, commands, sectionDescriptors, title, promotedApplicationIds });
};
export const handleApplicationCommandSelected = function handleApplicationCommandSelected(arg0) {
  let _location;
  let command;
  let context;
  let entrypoint;
  let installOnDemand;
  let obj2;
  let onCommandExecuted;
  let query;
  let searchResultsPosition;
  let section;
  let sectionDescriptors;
  let sectionName;
  ({ location: _location, context, command } = arg0);
  ({ section, sectionDescriptors, query, navigation, installOnDemand, sectionName, entrypoint } = arg0);
  ({ searchResultsPosition, onCommandExecuted } = arg0);
  const obj = { command, location: _location, triggerSection: obj2.getCommandTriggerSection(section), queryLength: query.length, sectionName, query, searchResultsPosition, source: entrypoint };
  const trackCommandSelected = ApplicationCommandUtils.trackCommandSelected;
  ApplicationCommandUtils;
  obj2 = ApplicationCommandUtils;
  trackCommandSelected(obj);
  if (command.type === Server.ApplicationCommandType.PRIMARY_ENTRY_POINT) {
    const obj4 = { application: section.application, context, installOnDemand, sectionName, entrypoint };
    navigation.navigate(metroImportAll.APPLICATION_VIEW, obj4);
  } else {
    let tmp6 = section;
    if (section.id === BuiltInSectionId.FRECENCY) {
      const found = sectionDescriptors.find((id) => id.id === command.applicationId);
      tmp6 = section;
      if (null != found) {
        tmp6 = found;
      }
    }
    if ("channel" === context.type) {
      const obj3 = ApplicationCommandActionCreatorsAll;
      const result = obj3.setAppLauncherActiveCommand(context.channel.id, command);
      const obj5 = { command, section: tmp6, context, installOnDemand, sectionName, analyticsLocation: _location, onCommandExecuted };
      navigation.navigate(metroImportAll.COMMAND_VIEW, obj5);
    }
  }
};
export const getInitialOptionValues = function getInitialOptionValues(option) {
  let choices1;
  let prefilledValues;
  let roles;
  option = option.option;
  ({ prefilledValues, roles } = option);
  let found;
  const guildId = option.guildId;
  if (prefilledValues != null) {
    found = prefilledValues.find((name) => name.name === option.name && name.type === tmp.type);
  }
  const type = option.type;
  if (Server.ApplicationCommandOptionType.BOOLEAN === type) {
    let items1;
    if (null != found) {
      const _String8 = String;
      const _Boolean = Boolean;
      const items = [{ type: "text", text: String(Boolean(found.value)) }];
      items1 = items;
      const obj2 = { type: "text", text: String(Boolean(found.value)) };
    } else {
      items1 = [{ type: "text", text: "false" }];
    }
    return items1;
  } else {
    if (Server.ApplicationCommandOptionType.STRING !== type) {
      if (Server.ApplicationCommandOptionType.INTEGER !== type) {
        if (Server.ApplicationCommandOptionType.NUMBER !== type) {
          if (Server.ApplicationCommandOptionType.CHANNEL === type) {
            if (null != found) {
              let items3;
              const _String5 = String;
              if (null != ChannelStore.getChannel(String(found.value))) {
                const _String6 = String;
                const items2 = [{ type: "channelMention", channelId: String(found.value) }];
                items3 = items2;
                const obj3 = { type: "channelMention", channelId: String(found.value) };
              }
              return items3;
            }
            items3 = [{ type: "text", text: "" }];
          } else if (Server.ApplicationCommandOptionType.USER === type) {
            if (null != found) {
              let items5;
              const _String3 = String;
              if (null != UserStore.getUser(String(found.value))) {
                const _String4 = String;
                const items4 = [{ type: "userMention", userId: String(found.value) }];
                items5 = items4;
                const obj4 = { type: "userMention", userId: String(found.value) };
              }
              return items5;
            }
            items5 = [{ type: "text", text: "" }];
          } else if (Server.ApplicationCommandOptionType.ROLE === type) {
            if (null != found) {
              if (typeof found.value === "string") {
                let items7;
                if (found.value in roles) {
                  const items6 = [{ type: "roleMention", roleId: found.value }];
                  items7 = items6;
                  const obj5 = { type: "roleMention", roleId: found.value };
                }
                return items7;
              }
            }
            items7 = [{ type: "text", text: "" }];
          } else if (Server.ApplicationCommandOptionType.MENTIONABLE === type) {
            if (null != found) {
              if (found.value === guildId) {
                const items8 = [{ type: "textMention", text: "@everyone" }];
                return items8;
              } else {
                if (typeof found.value === "string") {
                  if (found.value in roles) {
                    const items9 = [{ type: "roleMention", roleId: found.value }];
                    return items9;
                  }
                }
                const _String = String;
                if (null != UserStore.getUser(String(found.value))) {
                  const _String2 = String;
                  const items10 = [{ type: "userMention", userId: String(found.value) }];
                  const obj = { type: "userMention", userId: String(found.value) };
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
        const _String7 = String;
        const items13 = [{ type: "text", text: String(found.value) }];
        const obj7 = { type: "text", text: String(found.value) };
        return items13;
      } else {
        const choices = option.choices;
        if (choices.some((value) => value.value === found.value)) {
          const obj8 = { type: "text", text: choices1.find((value) => value.value === found.value).displayName };
          choices1 = option.choices;
          const items14 = [obj8];
          return items14;
        }
      }
    }
    const items15 = [{ type: "text", text: "" }];
    return items15;
  }
};
export const getAppLauncherIconSource = function getAppLauncherIconSource(application) {
  let applicationIconSource;
  if (null == application) {
    applicationIconSource = AssetRegistryDefault;
  } else {
    const obj = AppLauncherUtils;
    const isRealApplicationResult = obj.isRealApplication(application);
    const obj2 = AvatarUtilsDefault;
    if (isRealApplicationResult) {
      const obj4 = { id: null, icon: null, bot: null, botIconFirst: false };
      ({ id: obj3.id, icon: obj3.icon, bot: obj3.bot } = application);
      applicationIconSource = obj2.getApplicationIconSource(obj4);
    } else {
      applicationIconSource = obj2.makeSource(metroImportDefault);
    }
  }
  return applicationIconSource;
};
export const useLogAppLauncherEmptyStateView = tmp3;
export const useHandleActivityItemSelected = tmp4;