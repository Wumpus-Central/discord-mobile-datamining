// === Module 11727: AppLauncherNativeUtils ===

// Module 11727 (AppLauncherNativeUtils)
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import _modDef1988 from "module_1988" /* 1988 */;
import Server from "Server" /* 1998 */;
import HapticUtils from "HapticUtils" /* 5057 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5107 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7242 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7246 */;
import ApplicationCommandActionCreatorsAll from "ApplicationCommandActionCreators" /* 7919 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9246 */;
import FrecencySection from "FrecencySection" /* 11728 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const AppLauncherNativeConstants = fn(1502);
({ APP_LAUNCHER_BUILT_IN_SECTION_ICON: closure_7, AppLauncherRouteName: closure_8 } = AppLauncherNativeConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const BuiltInSectionId = fn(5403).BuiltInSectionId;
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useLogAppLauncherEmptyStateView(arg0, arg1) {
  _require = arg0;
  const cResult = require("c").c(7);
  let obj = require("c");
  const entrypoint = require("AppLauncherContext").useAppLauncherContext().entrypoint;
  if (cResult[0] === entrypoint) {
    if (cResult[1] === arg0) {
      let tmp2 = cResult[2];
    }
    if (cResult[3] === entrypoint) {
      if (cResult[4] === arg1) {
        if (cResult[5] === arg0) {
          let tmp4 = cResult[6];
        }
        const effect = noop.useEffect(tmp2, tmp4);
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
      AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, obj2);
    }
  };
  cResult[0] = entrypoint;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp2 = fn;
  let obj2 = require("AppLauncherContext");
}) : (function useLogAppLauncherEmptyStateView(arg0, arg1) {
  _require = arg0;
  const entrypoint = require("AppLauncherContext").useAppLauncherContext().entrypoint;
  const items = [arg0, arg1, entrypoint];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      const obj2 = { type: tmp, source: entrypoint };
      AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, obj2);
    }
  }, items);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNativeUtils.tsx");

export const handleApplicationSelected = function handleApplicationSelected(entrypoint) {
  ({ application, navigation, sectionName, navigates } = entrypoint);
  ({ location: _location, context, installOnDemand, query, searchResultsPosition } = entrypoint);
  if (navigates === undefined) {
    navigates = true;
  }
  entrypoint = entrypoint.entrypoint;
  const obj2 = { location: _location, section: null, application_id: null, section_name: null, query: null, search_results_position: null, source: null };
  if (application.id === BuiltInSectionId.BUILT_IN) {
    let APP = ApplicationCommandTypes.ApplicationCommandTriggerSections.BUILT_IN;
  } else {
    APP = ApplicationCommandTypes.ApplicationCommandTriggerSections.APP;
  }
  obj2.section = APP;
  let id = application.id;
  if (id == null) {
    id = null;
  }
  obj2.application_id = id;
  obj2.section_name = sectionName;
  obj2.query = query;
  obj2.search_results_position = searchResultsPosition;
  obj2.source = entrypoint;
  AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_SECTION_SELECTED, obj2);
  if (navigates) {
    const obj3 = { application, context, installOnDemand, sectionName, entrypoint };
    navigation.navigate(constants.APPLICATION_VIEW, obj3);
  }
};
export const handleViewAllSelected = function handleViewAllSelected(arg0) {
  ({ navigation, sectionName, applications, sectionItemType, commands } = arg0);
  ({ location: _location, context, sectionOverallPosition, sectionDescriptors, title, promotedApplicationIds } = arg0);
  const obj = AppAnalyticsUtils;
  obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SECTION_VIEW_MORE, { section_name: sectionName, num: sectionItemType === FrecencySection.SectionItemType.APPS ? applications.length : commands.length });
  navigation.navigate(constants.APP_LIST_VIEW, { analyticsLocation: _location, context, sectionName, sectionOverallPosition, applications, sectionItemType, commands, sectionDescriptors, title, promotedApplicationIds });
};
export const handleApplicationCommandSelected = function handleApplicationCommandSelected(arg0) {
  ({ location: _location, context, command } = arg0);
  ({ section, sectionDescriptors, query, navigation, installOnDemand, sectionName, entrypoint } = arg0);
  ({ searchResultsPosition, onCommandExecuted } = arg0);
  const obj2 = { command, location: _location, triggerSection: null, queryLength: null, sectionName: null, query: null, searchResultsPosition: null, source: null };
  const obj = ApplicationCommandUtils;
  obj2.triggerSection = ApplicationCommandUtils.getCommandTriggerSection(section);
  obj2.queryLength = query.length;
  obj2.sectionName = sectionName;
  obj2.query = query;
  obj2.searchResultsPosition = searchResultsPosition;
  obj2.source = entrypoint;
  obj.trackCommandSelected(obj2);
  if (command.type === Server.ApplicationCommandType.PRIMARY_ENTRY_POINT) {
    const obj5 = { application: section.application, context, installOnDemand, sectionName, entrypoint };
    navigation.navigate(constants.APPLICATION_VIEW, obj5);
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
      const obj6 = { command, section: tmp5, context, installOnDemand, sectionName, analyticsLocation: _location, onCommandExecuted };
      navigation.navigate(constants.COMMAND_VIEW, obj6);
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
      const obj2 = { type: "text", text: null };
      const _String8 = String;
      const _Boolean = Boolean;
      obj2.text = String(Boolean(found.value));
      const items = [obj2];
      let items1 = items;
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
              const _String5 = String;
              if (null != ChannelStore.getChannel(String(found.value))) {
                const obj3 = { type: "channelMention", channelId: null };
                const _String6 = String;
                obj3.channelId = String(found.value);
                const items2 = [obj3];
                let items3 = items2;
              }
              return items3;
            }
            items3 = [{ type: "text", text: "" }];
          } else if (Server.ApplicationCommandOptionType.USER === type) {
            if (null != found) {
              const _String3 = String;
              if (null != UserStore.getUser(String(found.value))) {
                const obj4 = { type: "userMention", userId: null };
                const _String4 = String;
                obj4.userId = String(found.value);
                const items4 = [obj4];
                let items5 = items4;
              }
              return items5;
            }
            items5 = [{ type: "text", text: "" }];
          } else if (Server.ApplicationCommandOptionType.ROLE === type) {
            if (null != found) {
              if (typeof found.value === "string") {
                if (found.value in roles) {
                  const obj5 = { type: "roleMention", roleId: found.value };
                  const items6 = [obj5];
                  let items7 = items6;
                }
                return items7;
              }
            }
            items7 = [{ type: "text", text: "" }];
          } else if (Server.ApplicationCommandOptionType.MENTIONABLE === type) {
            if (null != found) {
              if (found.value === option.guildId) {
                const items8 = [{ type: "textMention", text: "@everyone" }];
                return items8;
              } else {
                if (typeof found.value === "string") {
                  if (found.value in roles) {
                    const obj6 = { type: "roleMention", roleId: found.value };
                    const items9 = [obj6];
                    return items9;
                  }
                }
                const _String = String;
                if (null != UserStore.getUser(String(found.value))) {
                  const obj = { type: "userMention", userId: null };
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
        const obj7 = { type: "text", text: null };
        const _String7 = String;
        obj7.text = String(found.value);
        const items13 = [obj7];
        return items13;
      } else {
        const choices = option.choices;
        if (choices.some((value) => value.value === found.value)) {
          const obj8 = { type: "text", text: null };
          const choices1 = option.choices;
          obj8.text = choices1.find((value) => value.value === found.value).displayName;
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
  if (null == application) {
    let applicationIconSource = _modDef1988;
  } else {
    const obj2 = AvatarUtilsDefault;
    if (isRealApplicationResult) {
      ({ id: obj3.id, icon: obj3.icon, bot: obj3.bot } = application);
      applicationIconSource = obj2.getApplicationIconSource({ id: null, icon: null, bot: null, botIconFirst: false });
      const obj4 = { id: null, icon: null, bot: null, botIconFirst: false };
    } else {
      applicationIconSource = obj2.makeSource(React5);
    }
    isRealApplicationResult = AppLauncherUtils.isRealApplication(application);
  }
  return applicationIconSource;
};
export const useLogAppLauncherEmptyStateView = tmp3;
export const useHandleActivityItemSelected = ReactCompilerGating.isReactCompilerEnabled() ? (function useHandleActivityItemSelected(onActivityItemSelected) {
  const cResult = sectionName(entrypoint[16]).c(23);
  ({ applicationId, context, sectionName } = onActivityItemSelected);
  onActivityItemSelected = onActivityItemSelected.onActivityItemSelected;
  const _location = onActivityItemSelected.location;
  entrypoint = onActivityItemSelected.entrypoint;
  ({ launchingComponentId, fetchesApplication } = onActivityItemSelected);
  let obj = sectionName(entrypoint[16]);
  const analyticsContext = sectionName(entrypoint[18]).useAnalyticsContext();
  if (cResult[0] === applicationId) {
    if (cResult[1] === context) {
      if (cResult[2] === tmp4) {
        let tmp6 = cResult[3];
      }
      const activityAction = tmp(tmp2[19]).useActivityAction(tmp6);
      const tmpResult5 = tmp(tmp2[19]);
      const getOrFetchApplication = tmp(tmp2[20]).useGetOrFetchApplication(applicationId, tmp4);
      const tmpResult6 = tmp(tmp2[20]);
      const entrypointParams = tmp(tmp2[17]).useAppLauncherContext().entrypointParams;
      if (cResult[4] === activityAction) {
        if (cResult[5] === entrypoint) {
          if (cResult[6] === _location) {
            if (cResult[7] === onActivityItemSelected) {
              if (cResult[8] === sectionName) {
                let tmp9 = cResult[9];
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
                      if (cResult[14] === tmp4) {
                        if (cResult[15] === launchingComponentId) {
                          if (cResult[16] === sectionName) {
                            if (cResult[17] === tmp9) {
                              if (cResult[18] === customId) {
                                if (cResult[19] === referrerId) {
                                  let tmp13 = cResult[20];
                                }
                                const onActivityItemSelected1 = tmp(tmp2[19]).useOnActivityItemSelected(tmp13);
                                if (cResult[21] !== onActivityItemSelected1) {
                                  const obj2 = {
                                    handleActivityItemSelected() {
                                                                      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
                                                                      onActivityItemSelected1();
                                                                    }
                                  };
                                  cResult[21] = onActivityItemSelected1;
                                  cResult[22] = obj2;
                                  let tmp15 = obj2;
                                } else {
                                  tmp15 = cResult[22];
                                }
                                return tmp15;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj3 = { application: getOrFetchApplication, context, locationObject: analyticsContext.location, onActivityItemSelectedProp: tmp9, launchingComponentId, commandOrigin: tmp(tmp2[7]).CommandOrigin.APPLICATION_LAUNCHER, sectionName, source: entrypoint, fetchesApplication: tmp4, customId, referrerId };
              cResult[10] = analyticsContext.location;
              cResult[11] = getOrFetchApplication;
              cResult[12] = context;
              cResult[13] = entrypoint;
              cResult[14] = tmp4;
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
        AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, { location: _location, application_id: applicationId, section_name: sectionName, action: activityAction, source: entrypoint });
      };
      cResult[4] = activityAction;
      cResult[5] = entrypoint;
      cResult[6] = _location;
      cResult[7] = onActivityItemSelected;
      cResult[8] = sectionName;
      cResult[9] = fn;
      tmp9 = fn;
      const tmpResult7 = tmp(tmp2[17]);
    }
  }
  const obj4 = { context, applicationId, fetchesApplication: undefined === fetchesApplication || fetchesApplication };
  cResult[0] = applicationId;
  cResult[1] = context;
  cResult[2] = undefined === fetchesApplication || fetchesApplication;
  cResult[3] = obj4;
  tmp6 = obj4;
}) : (function useHandleActivityItemSelected(fetchesApplication) {
  ({ applicationId, context, sectionName } = fetchesApplication);
  ({ onActivityItemSelected: importDefault, location: importAll, entrypoint } = fetchesApplication);
  let flag = fetchesApplication.fetchesApplication;
  if (flag === undefined) {
    flag = true;
  }
  closure_5 = undefined;
  const analyticsContext = sectionName(entrypoint[18]).useAnalyticsContext();
  let obj = sectionName(entrypoint[18]);
  const action = sectionName(entrypoint[19]).useActivityAction({ context, applicationId, fetchesApplication: flag });
  const obj2 = sectionName(entrypoint[19]);
  const getOrFetchApplication = sectionName(entrypoint[20]).useGetOrFetchApplication(applicationId, flag);
  const obj3 = sectionName(entrypoint[20]);
  const entrypointParams = sectionName(entrypoint[17]).useAppLauncherContext().entrypointParams;
  const obj4 = sectionName(entrypoint[17]);
  const obj6 = {
    application: getOrFetchApplication,
    context,
    locationObject: analyticsContext.location,
    onActivityItemSelectedProp(applicationId) {
      applicationId = applicationId.applicationId;
      if (importDefault != null) {
        const obj = { applicationId };
        tmp(obj);
      }
      AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, { location: _location, application_id: applicationId, section_name: sectionName, action, source: entrypoint });
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
  obj6.customId = customId;
  let referrerId;
  if (entrypointParams != null) {
    referrerId = entrypointParams.referrerId;
  }
  obj6.referrerId = referrerId;
  closure_5 = sectionName(entrypoint[19]).useOnActivityItemSelected(obj6);
  return {
    handleActivityItemSelected() {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      closure_5();
    }
  };
});