// discord_app/modules/app_launcher/utils/AppLauncherUtils.tsx
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import Server from "../../../flow/Server.tsx";
import ApplicationCommandUtils from "../../application_commands/ApplicationCommandUtils.tsx";
import ApplicationFlagUtils from "../../applications/utils/ApplicationFlagUtils.tsx";
import AppLauncherTypes from "../AppLauncherTypes.tsx";
import getPlatformDefault from "../../activities/utils/getPlatform.tsx";
import ApplicationInstallUtils from "../../applications/utils/ApplicationInstallUtils.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationCommandIndexStore from "../../application_commands/ApplicationCommandIndexStore.tsx";
import ApplicationRecord from "../../../records/ApplicationRecord.tsx";
import AppLauncherStore from "../AppLauncherStore.tsx";

require = fn;
function getShelfBadgeTypeIfActive(application) {
  let tmp2 = null;
  if (application.id !== BuiltInSectionId.BUILT_IN) {
    let hasApplicationFlagResult = application.id !== tmp.BUILT_IN;
    if (hasApplicationFlagResult) {
      hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
    }
    tmp2 = null;
  }
  let tmp9;
  if (tmp2 != null) {
    const obj2 = PlatformUtils;
    tmp9 = tmp2.client_platform_config[getPlatformDefault(undefined, obj2.getOS(obj2))];
  }
  const timestamp = Date.now();
  let label_until;
  if (tmp9 != null) {
    label_until = tmp9.label_until;
  }
  if (null != label_until) {
    const _Date = Date;
    if (timestamp < Date.parse(tmp9.label_until)) {
      let label_from;
      if (tmp9 != null) {
        label_from = tmp9.label_from;
      }
      if (null != label_from) {
        const _Date2 = Date;
        if (timestamp > Date.parse(tmp9.label_from)) {
          let label_type;
          if (tmp9 != null) {
            label_type = tmp9.label_type;
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
const ApplicationFlags = fn(1074).ApplicationFlags;
const BuiltInSectionId = fn(4999).BuiltInSectionId;
const MessageSendLocation = fn(4553).MessageSendLocation;
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
export const getSectionDescription = function getSectionDescription(FAKE_BUILT_IN_APP) {
  if (FAKE_BUILT_IN_APP.id !== BuiltInSectionId.BUILT_IN) {
    let description = FAKE_BUILT_IN_APP.description;
  } else {
    const intl = util.intl;
    description = intl.string(util.t.X9fusn);
  }
  return description;
};
export const isEmbeddedApp = function isEmbeddedApp(application) {
  let hasApplicationFlagResult = application.id !== BuiltInSectionId.BUILT_IN;
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
  }
  return hasApplicationFlagResult;
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
    let hasApplicationFlagResult = id.id !== tmp.BUILT_IN;
    if (hasApplicationFlagResult) {
      hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(id, ApplicationFlags.EMBEDDED);
    }
    tmp2 = null;
  }
  return tmp2;
};
export const executeAppLauncherCommand = function executeAppLauncherCommand(arg0) {
  ({ command: closure_0, optionValues: importDefault, context } = arg0);
  ({
    commandTargetId: closure_3,
    maxSizeCallback: _objectWithoutProperties,
    sectionName: asyncGeneratorStep,
    commandOrigin,
  } = arg0);
  if (commandOrigin === undefined) {
    commandOrigin = require("ApplicationCommandTypes").CommandOrigin.APPLICATION_LAUNCHER;
  }
  const channel = context.channel;
  _require = asyncGeneratorStep(async (arg0, value) => {
    if (commandOrigin === 2) {
      commandOrigin = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            context = tmp3;
            const optionValues = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            let maxSizeCallback = 1;
            const obj1 = {
              command: tts,
              optionValues,
              context,
              commandTargetId,
              maxSizeCallback,
              commandOrigin,
              sectionName,
              source: fn.entrypoint(),
            };
            sectionName = 2;
            commandOrigin = 1;
            const obj2 = { value: require("executeCommand")(obj1), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          maxSizeCallback = 0;
          closure_129_2 = commandTargetId;
          let obj3 = require("AlertActionCreators");
          obj3 = { title: null, body: null, confirmText: null, onConfirm: null };
          const intl = closure_0(context[8]).intl;
          obj3.title = intl.string(closure_0(context[8]).t["aHO//m"]);
          const intl2 = closure_0(context[8]).intl;
          obj3.body = intl2.string(closure_0(context[8]).t.kuzKHK);
          const intl3 = closure_0(context[8]).intl;
          obj3.confirmText = intl3.string(closure_0(context[8]).t["5911Lb"]);
          obj3.onConfirm = function onConfirm() {
            return closure_1_8();
          };
          obj3.show(obj3);
          throw closure_129_2;
        } else if (arg0 === 1) {
          commandOrigin = 3;
          throw value;
        } else if (arg0 === 2) {
          maxSizeCallback = 0;
          commandOrigin = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_129_0 = value;
          if (tts.inputType === closure_0(context[13]).ApplicationCommandInputType.BUILT_IN_TEXT) {
            if (null != closure_129_0) {
              if (null != context.channel) {
                closure_129_1 = require("MessageParser").parse(channel, closure_129_0.content);
                tts = closure_129_0.tts;
                if (tts == null) {
                  tts = false;
                }
                closure_129_1.tts = tts;
                obj = require("MessageActionCreators");
                const obj5 = { location: constants.APP_COMMAND };
                obj.sendMessage(context.channel.id, closure_129_1, true, obj5);
                const obj9 = require("MessageParser");
              }
            }
          }
          maxSizeCallback = 0;
          commandOrigin = 3;
          return { value: "HermesInternal", done: null };
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
  const fn = function () {
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
export const getApplicationDetails = function getApplicationDetails(id, guildMember) {
  let obj = guildMember;
  if (guildMember === undefined) {
    obj = {};
  }
  let fakeAppIconURL = obj.fakeAppIconURL;
  const tmp2 = _objectWithoutProperties(obj, closure_3);
  if (id.id !== BuiltInSectionId.BUILT_IN) {
    obj = { iconURL: null, name: null, description: null };
    obj = {};
    const merged = Object.assign(tmp2);
    ({ id: obj5.id, icon: obj5.icon } = id);
    obj.iconURL = AvatarUtilsDefault.getApplicationIconURL(obj);
    ({ name: obj3.name, description: obj3.description } = id);
    let obj1 = obj;
  } else {
    if (fakeAppIconURL == null) {
      fakeAppIconURL = null;
    }
    obj1 = { iconURL: fakeAppIconURL, name: null, description: null };
    const intl = util.intl;
    obj1.name = intl.string(util.t.UB2gG2);
    const intl2 = util.intl;
    obj1.description = intl2.string(util.t.X9fusn);
  }
  return obj1;
};
export const isApplicationMonetizedWithIAP = function isApplicationMonetizedWithIAP(application) {
  if (application.id === BuiltInSectionId.BUILT_IN) {
    return tmp;
  }
};
export const isApplicationAdSupported = function isApplicationAdSupported(application) {
  let tmp2 = null;
  if (application.id !== BuiltInSectionId.BUILT_IN) {
    let hasApplicationFlagResult = application.id !== tmp.BUILT_IN;
    if (hasApplicationFlagResult) {
      hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
    }
    tmp2 = null;
  }
  return null != tmp2 && tmp2.displays_advertisements;
};
export const appLauncherShowsRecommendations = function appLauncherShowsRecommendations(initialSearchQuery) {
  return initialSearchQuery === AppLauncherTypes.AppLauncherEntrypoint.TEXT;
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
export const ensureRecommendationSectionsOnlyContainActivities =
  function ensureRecommendationSectionsOnlyContainActivities(entrypoint) {
    const items = [];
    const iter = entrypoint[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let prop = nextResult.application_directory_collection_items;
      let tmp2 = nextResult;
      let found = prop.filter((type) => {
        let tmp3 =
          type.type ===
          require("ApplicationDirectoryCollectionItemType").ApplicationDirectoryCollectionItemType.APPLICATION;
        if (tmp3) {
          const application = type.application;
          let hasApplicationFlagResult = application.id !== constants2.BUILT_IN;
          if (hasApplicationFlagResult) {
            hasApplicationFlagResult = require("ApplicationFlagUtils").hasApplicationFlag(
              application,
              constants.EMBEDDED,
            );
            const tmpResult = require("ApplicationFlagUtils");
          }
          tmp3 = hasApplicationFlagResult;
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
  return {
    applicationId: application.id,
    customInstallUrl: application.customInstallUrl,
    installParams: application.installParams,
    integrationTypesConfig: application.integrationTypesConfig,
  };
};
export const getInstallAppProps = function getInstallAppProps(application) {
  const obj = {
    applicationId: application.id,
    customInstallUrl: null,
    installParams: null,
    integrationTypesConfig: null,
  };
  if (application instanceof ApplicationRecord) {
    ({
      customInstallUrl: obj.customInstallUrl,
      installParams: obj.installParams,
      integrationTypesConfig: obj.integrationTypesConfig,
    } = application);
    let tmp = obj;
  } else {
    ({
      custom_install_url: obj.customInstallUrl,
      install_params: obj.installParams,
      integration_types_config: obj.integrationTypesConfig,
    } = application);
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
