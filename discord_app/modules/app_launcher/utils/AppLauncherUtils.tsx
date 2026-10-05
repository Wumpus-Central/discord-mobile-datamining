// discord_app/modules/app_launcher/utils/AppLauncherUtils.tsx
import Constants from "../../../Constants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import Server from "../../../flow/Server.tsx";
import EmbeddedSurfaceUtils from "../../applications/utils/EmbeddedSurfaceUtils.tsx";
import MessageConstants from "../../messages/MessageConstants.tsx";
import ApplicationCommandConstants from "../../application_commands/ApplicationCommandConstants.tsx";
import ApplicationCommandUtils from "../../application_commands/ApplicationCommandUtils.tsx";
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import ApplicationFlagUtils from "../../applications/utils/ApplicationFlagUtils.tsx";
import AppLauncherTypes from "../AppLauncherTypes.tsx";
import getPlatformDefault from "../../activities/utils/getPlatform.tsx";
import ApplicationDirectoryCollectionItemType from "../../../../discord_common/js/shared/shared-constants/ApplicationDirectoryCollectionItemType.tsx";
import ApplicationInstallUtils from "../../applications/utils/ApplicationInstallUtils.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import ApplicationCommandIndexStore from "../../application_commands/ApplicationCommandIndexStore.tsx";
import ApplicationRecord from "../../../records/ApplicationRecord.tsx";
import AppLauncherStore from "../AppLauncherStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

function getShelfBadgeTypeIfActive(application) {
  let tmp2 = null;
  if (application.id !== BuiltInSectionId.BUILT_IN) {
    let result = application.id !== tmp.BUILT_IN;
    if (result) {
      const obj = EmbeddedSurfaceUtils;
      result = obj.supportsEmbeddedSurface(application, EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
    }
    tmp2 = null;
    if (result) {
      tmp2 =
        application instanceof ApplicationRecord
          ? application.embeddedActivityConfig
          : application.embedded_activity_config;
    }
  }
  let tmp7;
  if (tmp2 != null) {
    const client_platform_config = tmp2.client_platform_config;
    const tmp10 = getPlatformDefault;
    const obj2 = PlatformUtils;
    tmp7 = client_platform_config[tmp10(undefined, obj2.getOS(obj2))];
  }
  const timestamp = Date.now();
  let label_until;
  if (tmp7 != null) {
    label_until = tmp7.label_until;
  }
  if (null != label_until) {
    const _Date = Date;
    if (timestamp < Date.parse(tmp7.label_until)) {
      let label_from;
      if (tmp7 != null) {
        label_from = tmp7.label_from;
      }
      if (null != label_from) {
        let NONE;
        const _Date2 = Date;
        if (timestamp > Date.parse(tmp7.label_from)) {
          let label_type;
          if (tmp7 != null) {
            label_type = tmp7.label_type;
          }
          if (label_type == null) {
            label_type = Server.EmbeddedActivityLabelTypes.NONE;
          }
          NONE = label_type;
        }
        return NONE;
      }
    }
  }
  NONE = Server.EmbeddedActivityLabelTypes.NONE;
}
let closure_3 = ["fakeAppIconURL"];
const ApplicationFlags = Constants.ApplicationFlags;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
const MessageSendLocation = MessageConstants.MessageSendLocation;
let obj = { id: BuiltInSectionId.BUILT_IN };
let result = size.fileFinishedImporting("modules/app_launcher/utils/AppLauncherUtils.tsx");

export const FAKE_BUILT_IN_APP = obj;
export const isRealApplication = function isRealApplication(application) {
  return application.id !== BuiltInSectionId.BUILT_IN;
};
export const getSectionName = function getSectionName(FAKE_BUILT_IN_APP) {
  let name;
  if (FAKE_BUILT_IN_APP.id !== BuiltInSectionId.BUILT_IN) {
    name = FAKE_BUILT_IN_APP.name;
  } else {
    const intl = intl4.intl;
    name = intl.string(intl4.t.UB2gG2);
  }
  return name;
};
export const getSectionDescription = function getSectionDescription(application) {
  let description;
  if (application.id !== BuiltInSectionId.BUILT_IN) {
    description = application.description;
  } else {
    const intl = intl4.intl;
    description = intl.string(intl4.t.X9fusn);
  }
  return description;
};
export const isActivityApp = function isActivityApp(application) {
  let result = application.id !== BuiltInSectionId.BUILT_IN;
  if (result) {
    const obj = EmbeddedSurfaceUtils;
    result = obj.supportsEmbeddedSurface(application, EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
  }
  return result;
};
export const isPartnerApplication = function isPartnerApplication(application) {
  let hasApplicationFlagResult = application.id !== BuiltInSectionId.BUILT_IN;
  if (hasApplicationFlagResult) {
    const obj = ApplicationFlagUtils;
    hasApplicationFlagResult = obj.hasApplicationFlag(application, ApplicationFlags.PARTNER);
  }
  return hasApplicationFlagResult;
};
export const isPromotedApplication = function isPromotedApplication(FAKE_BUILT_IN_APP2) {
  let hasApplicationFlagResult = FAKE_BUILT_IN_APP2.id !== BuiltInSectionId.BUILT_IN;
  if (hasApplicationFlagResult) {
    const obj = ApplicationFlagUtils;
    hasApplicationFlagResult = obj.hasApplicationFlag(FAKE_BUILT_IN_APP2, ApplicationFlags.PROMOTED);
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
      const obj = EmbeddedSurfaceUtils;
      result = obj.supportsEmbeddedSurface(id, EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
    }
    tmp2 = null;
    if (result) {
      tmp2 = id instanceof ApplicationRecord ? id.embeddedActivityConfig : id.embedded_activity_config;
    }
  }
  return tmp2;
};
export const executeAppLauncherCommand = function executeAppLauncherCommand(arg0) {
  let commandOrigin;
  let context;
  ({ command: require, optionValues: importDefault, context } = arg0);
  ({
    commandTargetId: closure_3,
    maxSizeCallback: _objectWithoutProperties,
    sectionName: _asyncToGenerator,
    commandOrigin,
  } = arg0);
  if (commandOrigin === undefined) {
    commandOrigin = require("ApplicationCommandTypes").CommandOrigin.APPLICATION_LAUNCHER;
  }
  const channel = context.channel;
  let closure_0 = _asyncToGenerator(async () => {
    let commandTargetId;
    let intl;
    let intl2;
    let intl3;
    let sectionName;
    if (commandOrigin === 2) {
      commandOrigin = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let maxSizeCallback;
      try {
        let _false;
        let optionValues;
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
            context = tmp;
            _false = undefined;
            optionValues = undefined;
            maxSizeCallback = 1;
            const obj4 = {
              command: _false,
              optionValues,
              context,
              commandTargetId,
              maxSizeCallback,
              commandOrigin,
              sectionName,
              source: fn.entrypoint(),
            };
            const tmp63 = require("executeCommand");
            sectionName = 2;
            commandOrigin = 1;
            const obj5 = { value: tmp63(obj4), done: false };
            return obj5;
          }
        } else if (1 === sectionName) {
          maxSizeCallback = 0;
          context = commandTargetId;
          const obj6 = {
            title: intl.string(_false(context[8]).t["aHO//m"]),
            body: intl2.string(_false(context[8]).t.kuzKHK),
            confirmText: intl3.string(_false(context[8]).t["5911Lb"]),
            onConfirm() {
              return closure_1_8();
            },
            isDismissable: false,
          };
          const show = require("AlertActionCreators").show;
          const tmp22 = require("AlertActionCreators");
          intl = _false(context[8]).intl;
          intl2 = _false(context[8]).intl;
          intl3 = _false(context[8]).intl;
          show(obj6);
          throw context;
        } else if (arg0 === 1) {
          commandOrigin = 3;
          throw value;
        } else if (arg0 === 2) {
          maxSizeCallback = 0;
          commandOrigin = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          _false = value;
          if (_false.inputType === _false(context[15]).ApplicationCommandInputType.BUILT_IN_TEXT) {
            if (null != _false) {
              if (null != context.channel) {
                const obj8 = require("MessageParser");
                optionValues = obj8.parse(channel, _false.content);
                const tts = _false.tts;
                _false = tts;
                const tmp59 = optionValues;
                if (tts == null) {
                  _false = false;
                }
                tmp59.tts = _false;
                const obj = require("MessageActionCreators");
                const obj9 = { location: constants.APP_COMMAND };
                obj.sendMessage(context.channel.id, optionValues, true, obj9);
              }
            }
          }
          maxSizeCallback = 0;
          commandOrigin = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp37) {
        commandTargetId = tmp37;
        if (0 === maxSizeCallback) {
          commandOrigin = 3;
          throw tmp37;
        } else {
          sectionName = 1;
        }
      }
    }
  });
  const fn = function () {
    return closure_0(...arguments);
  };
  return fn();
};
export const getApplicationDetails = function getApplicationDetails(id) {
  let getApplicationIconURL;
  let intl;
  let intl2;
  let obj7;
  let obj8;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let fakeAppIconURL = obj.fakeAppIconURL;
  const tmp2 = _objectWithoutProperties(obj, closure_3);
  if (id.id !== BuiltInSectionId.BUILT_IN) {
    const obj2 = { iconURL: getApplicationIconURL(obj7), name: null, description: null };
    obj7 = {};
    getApplicationIconURL = AvatarUtilsDefault.getApplicationIconURL;
    AvatarUtilsDefault;
    const merged = Object.assign(tmp2);
    ({ id: obj4.id, icon: obj4.icon } = id);
    ({ name: obj3.name, description: obj3.description } = id);
    obj8 = obj2;
  } else {
    if (fakeAppIconURL == null) {
      fakeAppIconURL = null;
    }
    obj8 = { iconURL: fakeAppIconURL, name: intl.string(intl4.t.UB2gG2), description: intl2.string(intl4.t.X9fusn) };
    intl = intl4.intl;
    intl2 = intl4.intl;
  }
  return obj8;
};
export const isApplicationMonetizedWithIAP = function isApplicationMonetizedWithIAP(application) {
  return (
    application.id !== BuiltInSectionId.BUILT_IN &&
    (application instanceof ApplicationRecord ? application.isMonetized : application.is_monetized)
  );
};
export const isApplicationAdSupported = function isApplicationAdSupported(application) {
  let tmp2 = null;
  if (application.id !== BuiltInSectionId.BUILT_IN) {
    let result = application.id !== tmp.BUILT_IN;
    if (result) {
      const obj = EmbeddedSurfaceUtils;
      result = obj.supportsEmbeddedSurface(application, EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
    }
    tmp2 = null;
    if (result) {
      tmp2 =
        application instanceof ApplicationRecord
          ? application.embeddedActivityConfig
          : application.embedded_activity_config;
    }
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
    const toLocaleUpperCaseResult = charAtResult.toLocaleUpperCase();
    const sum = toLocaleUpperCaseResult + displayName.slice(1);
    str = sum.replaceAll("_", " ");
  }
  return str;
};
export const ensureRecommendationSectionsOnlyContainActivities =
  function ensureRecommendationSectionsOnlyContainActivities(stateFromStores) {
    let tmp3;
    const items = [];
    const iter = stateFromStores[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let prop = nextResult.application_directory_collection_items;
      let tmp2 = nextResult;
      let found = prop.filter((type) => {
        let tmp3 =
          type.type === ApplicationDirectoryCollectionItemType.ApplicationDirectoryCollectionItemType.APPLICATION;
        if (tmp3) {
          const application = type.application;
          let result = application.id !== constants.BUILT_IN;
          if (result) {
            const tmpResult = EmbeddedSurfaceUtils;
            result = tmpResult.supportsEmbeddedSurface(application, EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
          }
          tmp3 = result;
        }
        return tmp3;
      });
      if (0 !== found.length) {
        let obj = { application_directory_collection_items: tmp3 };
        let push = items.push;
        let merged = Object.assign(tmp2);
        let arr = push(obj);
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
  let tmp;
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
    tmp = obj;
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
    const obj = ApplicationCommandUtils;
    result = obj.hasCommandIndexForApp(id.id, guildState);
  }
  const obj2 = ApplicationInstallUtils;
  const tmp6 = obj2.isAppUserInstallable(id) || result;
  return tmp6;
};
