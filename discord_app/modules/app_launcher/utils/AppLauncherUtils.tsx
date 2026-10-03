// === Module 8794: AppLauncherUtils ===

// Module 8794 (AppLauncherUtils)
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import Server from "Server" /* 1985 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2016 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7030 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8514 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8726 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8932 */;
import getPlatformDefault from "getPlatform" /* 8933 */;
import ApplicationInstallUtils from "ApplicationInstallUtils" /* 8941 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 8795 */;
import ApplicationRecord from "ApplicationRecord" /* 2009 */;
import AppLauncherStore from "AppLauncherStore" /* 8931 */;

const require = globalThis.__r;

require = fn;
function getShelfBadgeTypeIfActive(application) {
  let tmp2 = null;
  if (application.id !== BuiltInSectionId.BUILT_IN) {
    let result = application.id !== tmp.BUILT_IN;
    if (result) {
      result = EmbeddedSurfaceUtils.supportsEmbeddedSurface(application, EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
    }
    tmp2 = null;
  }
  let tmp8;
  if (tmp2 != null) {
    const obj2 = PlatformUtils;
    tmp8 = tmp2.client_platform_config[getPlatformDefault(undefined, obj2.getOS(obj2))];
  }
  const timestamp = Date.now();
  let label_until;
  if (tmp8 != null) {
    label_until = tmp8.label_until;
  }
  if (null != label_until) {
    const _Date = Date;
    if (timestamp < Date.parse(tmp8.label_until)) {
      let label_from;
      if (tmp8 != null) {
        label_from = tmp8.label_from;
      }
      if (null != label_from) {
        const _Date2 = Date;
        if (timestamp > Date.parse(tmp8.label_from)) {
          let label_type;
          if (tmp8 != null) {
            label_type = tmp8.label_type;
          }
          if (label_type == null) {
            label_type = Server.EmbeddedActivityLabelTypes.NONE;
          }
          let NONE = label_type;
        }
        return NONE;
      }
    }
  }
  NONE = Server.EmbeddedActivityLabelTypes.NONE;
}
let closure_3 = ["fakeAppIconURL"];
const ApplicationFlags = fn(1085).ApplicationFlags;
const BuiltInSectionId = fn(5788).BuiltInSectionId;
const MessageSendLocation = fn(4883).MessageSendLocation;
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/utils/AppLauncherUtils.tsx");

export const FAKE_BUILT_IN_APP = { id: BuiltInSectionId.BUILT_IN };
export const isRealApplication = function isRealApplication(application) {
  return application.id !== BuiltInSectionId.BUILT_IN;
};
export const getSectionName = function getSectionName(FAKE_BUILT_IN_APP) {
  if (FAKE_BUILT_IN_APP.id !== BuiltInSectionId.BUILT_IN) {
    let name = FAKE_BUILT_IN_APP.name;
  } else {
    const intl = util.intl;
    name = intl.string(util.t.UB2gG2);
  }
  return name;
};
export const getSectionDescription = function getSectionDescription(application) {
  if (application.id !== BuiltInSectionId.BUILT_IN) {
    let description = application.description;
  } else {
    const intl = util.intl;
    description = intl.string(util.t.X9fusn);
  }
  return description;
};
export const isActivityApp = function isActivityApp(application) {
  let result = application.id !== BuiltInSectionId.BUILT_IN;
  if (result) {
    result = EmbeddedSurfaceUtils.supportsEmbeddedSurface(application, EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
  }
  return result;
};
export const isPartnerApplication = function isPartnerApplication(application) {
  let hasApplicationFlagResult = application.id !== BuiltInSectionId.BUILT_IN;
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.PARTNER);
  }
  return hasApplicationFlagResult;
};
export const isPromotedApplication = function isPromotedApplication(FAKE_BUILT_IN_APP2) {
  let hasApplicationFlagResult = FAKE_BUILT_IN_APP2.id !== BuiltInSectionId.BUILT_IN;
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(FAKE_BUILT_IN_APP2, ApplicationFlags.PROMOTED);
  }
  return hasApplicationFlagResult;
};
export { getShelfBadgeTypeIfActive };
export const getShelfBadgeNameIfActive = function getShelfBadgeNameIfActive(application) {
  const tmp = getShelfBadgeTypeIfActive(application);
  if (Server.EmbeddedActivityLabelTypes.NEW === tmp) {
    return "New";
  } else if (Server.EmbeddedActivityLabelTypes.UPDATED === tmp) {
    return "Updated";
  } else {
    return "";
  }
};
export const getEmbeddedActivityConfig = function getEmbeddedActivityConfig(id) {
  let tmp2 = null;
  if (id.id !== BuiltInSectionId.BUILT_IN) {
    let result = id.id !== tmp.BUILT_IN;
    if (result) {
      result = EmbeddedSurfaceUtils.supportsEmbeddedSurface(id, EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
    }
    tmp2 = null;
  }
  return tmp2;
};
export const executeAppLauncherCommand = function executeAppLauncherCommand(arg0) {
  ({ command: closure_0, optionValues: importDefault, context } = arg0);
  ({ commandTargetId: closure_3, maxSizeCallback: _objectWithoutProperties, sectionName: asyncGeneratorStep, commandOrigin } = arg0);
  if (commandOrigin === undefined) {
    commandOrigin = require("ApplicationCommandTypes").CommandOrigin.APPLICATION_LAUNCHER;
  }
  const channel = context.channel;
  _require = asyncGeneratorStep(async () => {
    if (commandOrigin === 2) {
      commandOrigin = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        commandOrigin = 2;
        if (0 === sectionName) {
          if (arg0 === 1) {
            commandOrigin = 3;
            throw value;
          } else if (arg0 === 2) {
            commandOrigin = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            context = tmp3;
            const optionValues = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            let maxSizeCallback = 1;
            const obj5 = { command: tts, optionValues, context, commandTargetId, maxSizeCallback, commandOrigin, sectionName, source: fn.entrypoint() };
            sectionName = 2;
            commandOrigin = 1;
            const obj6 = { value: require("executeCommand")(obj5), done: false };
            return obj6;
          }
        } else if (1 === tmp7) {
          maxSizeCallback = 0;
          closure_129_2 = commandTargetId;
          const obj7 = { title: null, body: null, confirmText: null, onConfirm: null, isDismissable: false };
          const intl = closure_0(context[8]).intl;
          obj7.title = intl.string(closure_0(context[8]).t["aHO//m"]);
          const intl2 = closure_0(context[8]).intl;
          obj7.body = intl2.string(closure_0(context[8]).t.kuzKHK);
          const intl3 = closure_0(context[8]).intl;
          obj7.confirmText = intl3.string(closure_0(context[8]).t["5911Lb"]);
          obj7.onConfirm = function onConfirm() {
            return closure_1_8();
          };
          require("AlertActionCreators").show(obj7);
          throw closure_129_2;
        } else if (arg0 === 1) {
          commandOrigin = 3;
          throw value;
        } else if (arg0 === 2) {
          maxSizeCallback = 0;
          commandOrigin = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_129_0 = value;
          if (tts.inputType === closure_0(context[15]).ApplicationCommandInputType.BUILT_IN_TEXT) {
            if (null != closure_129_0) {
              if (null != context.channel) {
                closure_129_1 = require("MessageParser").parse(channel, closure_129_0.content);
                tts = closure_129_0.tts;
                if (tts == null) {
                  tts = false;
                }
                closure_129_1.tts = tts;
                const obj = require("MessageActionCreators");
                const obj10 = { location: constants.APP_COMMAND };
                obj.sendMessage(context.channel.id, closure_129_1, true, obj10);
                const obj9 = require("MessageParser");
              }
            }
          }
          maxSizeCallback = 0;
          commandOrigin = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp39) {
        commandTargetId = tmp39;
        if (tmp4 === maxSizeCallback) {
          commandOrigin = tmp2;
          throw tmp39;
        } else {
          sectionName = tmp;
        }
      }
    }
  });
  const fn = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return fn();
};
export const getApplicationDetails = function getApplicationDetails(id) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let fakeAppIconURL = obj.fakeAppIconURL;
  const tmp2 = _objectWithoutProperties(obj, closure_3);
  if (id.id !== BuiltInSectionId.BUILT_IN) {
    const obj2 = { iconURL: null, name: null, description: null };
    const obj8 = {};
    const merged = Object.assign(tmp2);
    ({ id: obj5.id, icon: obj5.icon } = id);
    obj2.iconURL = AvatarUtilsDefault.getApplicationIconURL(obj8);
    ({ name: obj3.name, description: obj3.description } = id);
    let obj9 = obj2;
  } else {
    if (fakeAppIconURL == null) {
      fakeAppIconURL = null;
    }
    obj9 = { iconURL: fakeAppIconURL, name: null, description: null };
    const intl = util.intl;
    obj9.name = intl.string(util.t.UB2gG2);
    const intl2 = util.intl;
    obj9.description = intl2.string(util.t.X9fusn);
  }
  return obj9;
};
export const isApplicationMonetizedWithIAP = function isApplicationMonetizedWithIAP(application) {
  if (application.id === BuiltInSectionId.BUILT_IN) {
    return tmp;
  }
};
export const isApplicationAdSupported = function isApplicationAdSupported(application) {
  let tmp2 = null;
  if (application.id !== BuiltInSectionId.BUILT_IN) {
    let result = application.id !== tmp.BUILT_IN;
    if (result) {
      result = EmbeddedSurfaceUtils.supportsEmbeddedSurface(application, EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
    }
    tmp2 = null;
  }
  return null != tmp2 && tmp2.displays_advertisements;
};
export const appLauncherShowsRecommendations = function appLauncherShowsRecommendations(entrypoint) {
  return entrypoint === AppLauncherTypes.AppLauncherEntrypoint.TEXT;
};
export const formatPrimaryEntryPointCommandName = function formatPrimaryEntryPointCommandName(displayName) {
  let str = "";
  if (null != displayName) {
    const charAtResult = displayName.charAt(0);
    const sum = displayName.charAt(0).toLocaleUpperCase() + displayName.slice(1);
    str = sum.replaceAll("_", " ");
    const toLocaleUpperCaseResult = displayName.charAt(0).toLocaleUpperCase();
  }
  return str;
};
export const ensureRecommendationSectionsOnlyContainActivities = function ensureRecommendationSectionsOnlyContainActivities(stateFromStores) {
  const items = [];
  const iter = stateFromStores[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let prop = nextResult.application_directory_collection_items;
    let tmp2 = nextResult;
    let found = prop.filter((type) => {
      let tmp3 = type.type === require("ApplicationDirectoryCollectionItemType").ApplicationDirectoryCollectionItemType.APPLICATION;
      if (tmp3) {
        const application = type.application;
        let result = application.id !== constants.BUILT_IN;
        if (result) {
          result = require("EmbeddedSurfaceUtils").supportsEmbeddedSurface(application, require("EmbeddedSurfaceType").EmbeddedSurfaceType.MAIN);
          const tmpResult = require("EmbeddedSurfaceUtils");
        }
        tmp3 = result;
      }
      return tmp3;
    });
    if (0 !== found.length) {
      let obj = {};
      let merged = Object.assign(tmp2);
      obj.application_directory_collection_items = tmp3;
      let arr = items.push(obj);
    }
    continue;
  }
  return items;
};
export const getInstallAppPropsFromProfileApplication = function getInstallAppPropsFromProfileApplication(application) {
  return { applicationId: application.id, customInstallUrl: application.customInstallUrl, installParams: application.installParams, integrationTypesConfig: application.integrationTypesConfig };
};
export const getInstallAppProps = function getInstallAppProps(application) {
  const obj = { applicationId: application.id, customInstallUrl: null, installParams: null, integrationTypesConfig: null };
  if (application instanceof ApplicationRecord) {
    ({ customInstallUrl: obj.customInstallUrl, installParams: obj.installParams, integrationTypesConfig: obj.integrationTypesConfig } = application);
    let tmp = obj;
  } else {
    ({ custom_install_url: obj.customInstallUrl, install_params: obj.installParams, integration_types_config: obj.integrationTypesConfig } = application);
    tmp = obj;
  }
  return tmp;
};
export const isAppAvailableInAppLauncher = function isAppAvailableInAppLauncher(id, arg1) {
  let guildState = null;
  if (null != arg1) {
    guildState = ApplicationCommandIndexStore.getGuildState(arg1);
  }
  let result = null != guildState;
  if (result) {
    result = ApplicationCommandUtils.hasCommandIndexForApp(id.id, guildState);
  }
  return ApplicationInstallUtils.isAppUserInstallable(id) || result;
};