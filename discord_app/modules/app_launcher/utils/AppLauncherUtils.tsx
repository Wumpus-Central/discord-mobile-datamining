import _objectWithoutProperties from "_objectWithoutProperties";
import ME from "ME";
import getIndexKey from "getIndexKey";
import createExecutable from "createExecutable";
import handleDismissWithDismissed from "handleDismissWithDismissed";
import { ApplicationFlags } from "ME";
import { BuiltInSectionId } from "TRUE_OPTION_NAME";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

const require = arg1;
function getShelfBadgeTypeIfActive(application) {
  let tmp2 = null;
  if (application.id !== BuiltInSectionId.BUILT_IN) {
    let hasApplicationFlagResult = application.id !== tmp.BUILT_IN;
    if (hasApplicationFlagResult) {
      hasApplicationFlagResult = require(5696) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      const obj = require(5696) /* getApplicationFlags */;
    }
    tmp2 = null;
  }
  let tmp9;
  if (tmp2 != null) {
    const obj2 = require(500) /* set */;
    tmp9 = tmp2.client_platform_config[importDefault(8022)(undefined, obj2.getOS(obj2))];
    const tmp12 = importDefault(8022);
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
            label_type = require(1906) /* PermissionOverwriteType */.EmbeddedActivityLabelTypes.NONE;
          }
          let NONE = label_type;
        }
        return NONE;
      }
    }
  }
  NONE = require(1906) /* PermissionOverwriteType */.EmbeddedActivityLabelTypes.NONE;
}
let closure_3 = ["fakeAppIconURL"];
let result = require("getIndexKey").fileFinishedImporting("modules/app_launcher/utils/AppLauncherUtils.tsx");

export const FAKE_BUILT_IN_APP = { id: BuiltInSectionId.BUILT_IN };
export const isRealApplication = function isRealApplication(application) {
  return application.id !== BuiltInSectionId.BUILT_IN;
};
export const getSectionName = function getSectionName(FAKE_BUILT_IN_APP) {
  if (FAKE_BUILT_IN_APP.id !== BuiltInSectionId.BUILT_IN) {
    let name = FAKE_BUILT_IN_APP.name;
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    name = intl.string(require(1236) /* getSystemLocale */.t.UB2gG2);
  }
  return name;
};
export const getSectionDescription = function getSectionDescription(FAKE_BUILT_IN_APP) {
  if (FAKE_BUILT_IN_APP.id !== BuiltInSectionId.BUILT_IN) {
    let description = FAKE_BUILT_IN_APP.description;
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    description = intl.string(require(1236) /* getSystemLocale */.t.X9fusn);
  }
  return description;
};
export const isEmbeddedApp = function isEmbeddedApp(application) {
  let hasApplicationFlagResult = application.id !== BuiltInSectionId.BUILT_IN;
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = require(5696) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
    const obj = require(5696) /* getApplicationFlags */;
  }
  return hasApplicationFlagResult;
};
export const isPartnerApplication = function isPartnerApplication(application) {
  let hasApplicationFlagResult = application.id !== BuiltInSectionId.BUILT_IN;
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = require(5696) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.PARTNER);
    const obj = require(5696) /* getApplicationFlags */;
  }
  return hasApplicationFlagResult;
};
export const isPromotedApplication = function isPromotedApplication(FAKE_BUILT_IN_APP2) {
  let hasApplicationFlagResult = FAKE_BUILT_IN_APP2.id !== BuiltInSectionId.BUILT_IN;
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = require(5696) /* getApplicationFlags */.hasApplicationFlag(FAKE_BUILT_IN_APP2, ApplicationFlags.PROMOTED);
    const obj = require(5696) /* getApplicationFlags */;
  }
  return hasApplicationFlagResult;
};
export { getShelfBadgeTypeIfActive };
export const getShelfBadgeNameIfActive = function getShelfBadgeNameIfActive(application) {
  const tmp = getShelfBadgeTypeIfActive(application);
  if (require(1906) /* PermissionOverwriteType */.EmbeddedActivityLabelTypes.NEW === tmp) {
    return "New";
  } else if (tmp2(1906).EmbeddedActivityLabelTypes.UPDATED === tmp) {
    return "Updated";
  } else {
    return "";
  }
  tmp2 = require;
};
export const getEmbeddedActivityConfig = function getEmbeddedActivityConfig(id) {
  let tmp2 = null;
  if (id.id !== BuiltInSectionId.BUILT_IN) {
    let hasApplicationFlagResult = id.id !== tmp.BUILT_IN;
    if (hasApplicationFlagResult) {
      hasApplicationFlagResult = require(5696) /* getApplicationFlags */.hasApplicationFlag(id, ApplicationFlags.EMBEDDED);
      const obj = require(5696) /* getApplicationFlags */;
    }
    tmp2 = null;
  }
  return tmp2;
};
export const executeAppLauncherCommand = function executeAppLauncherCommand(arg0) {
  let closure_0;
  let closure_3;
  let _objectWithoutProperties;
  let ME;
  let commandOrigin;
  let context;
  let importDefault;
  ({ command: closure_0, optionValues: importDefault, context } = arg0);
  ({ commandTargetId: closure_3, maxSizeCallback: _objectWithoutProperties, sectionName: ME, commandOrigin } = arg0);
  if (commandOrigin === undefined) {
    commandOrigin = _require(context[13]).CommandOrigin.APPLICATION_LAUNCHER;
  }
  let channel;
  let fn;
  channel = context.channel;
  _require = undefined;
  _require = callback2(function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_2 = tmp3;
            let c1 = tmp7;
            let c0;
            c1 = undefined;
            let c4 = 1;
            const obj1 = { command: null, optionValues: null, context: null, commandTargetId: null, maxSizeCallback: null, commandOrigin: null, sectionName: null, source: null };
            obj1[0] = outer1_0;
            obj1[1] = outer1_1;
            obj1[2] = outer1_2;
            obj1[3] = outer1_3;
            obj1[4] = c4;
            obj1[5] = c6;
            obj1[6] = c5;
            obj1[7] = fn.entrypoint();
            c5 = 2;
            c6 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = outer2_1(context[14])(obj1);
            return obj2;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          outer1_2 = closure_3;
          let obj3 = outer2_1(context[17]);
          obj3 = { title: null, body: null, confirmText: null, onConfirm: null };
          const intl = callback(context[8]).intl;
          obj3[0] = intl.string(callback(context[8]).t["aHO//m"]);
          const intl2 = callback(context[8]).intl;
          obj3[1] = intl2.string(callback(context[8]).t.kuzKHK);
          const intl3 = callback(context[8]).intl;
          obj3[2] = intl3.string(callback(context[8]).t["5911Lb"]);
          obj3[3] = function onConfirm() {
            return callback();
          };
          obj3.show(obj3);
          throw outer1_2;
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          c0 = arg1;
          if (outer1_0.inputType === callback(context[13]).ApplicationCommandInputType.BUILT_IN_TEXT) {
            if (null != callback) {
              if (null != outer1_2.channel) {
                outer1_1 = outer2_1(context[15]).parse(outer1_7, outer1_0.content);
                const tts = outer1_0.tts;
                c0 = tts;
                if (tts == null) {
                  c0 = false;
                }
                outer1_1.tts = c0;
                obj = outer2_1(context[16]);
                const obj5 = { location: null };
                obj5[0] = outer2_11.APP_COMMAND;
                obj.sendMessage(outer1_2.channel.id, outer1_1, true, obj5);
                const obj9 = outer2_1(context[15]);
                const tmp63 = outer1_1;
              }
            }
          }
          c4 = 0;
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp39) {
        closure_3 = tmp39;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp39;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  fn = function() {
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
  const tmp2 = callback(obj, closure_3);
  if (id.id !== BuiltInSectionId.BUILT_IN) {
    obj = { iconURL: null, name: null, description: null };
    obj = {};
    const merged = Object.assign(tmp2);
    ({ id: obj5.id, icon: obj5.icon } = id);
    obj[0] = importDefault(1416).getApplicationIconURL(obj);
    ({ name: obj3[1], description: obj3[2] } = id);
    let obj1 = obj;
    const obj4 = importDefault(1416);
  } else {
    if (fakeAppIconURL == null) {
      fakeAppIconURL = null;
    }
    obj1 = { iconURL: null, name: null, description: null };
    obj1[0] = fakeAppIconURL;
    const intl = require(1236) /* getSystemLocale */.intl;
    obj1[1] = intl.string(require(1236) /* getSystemLocale */.t.UB2gG2);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj1[2] = intl2.string(require(1236) /* getSystemLocale */.t.X9fusn);
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
      hasApplicationFlagResult = require(5696) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      const obj = require(5696) /* getApplicationFlags */;
    }
    tmp2 = null;
  }
  return null != tmp2 && tmp2.displays_advertisements;
};
export const appLauncherShowsRecommendations = function appLauncherShowsRecommendations(entrypoint) {
  return entrypoint === require(8021) /* AppLauncherEntrypoint */.AppLauncherEntrypoint.TEXT;
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
export const ensureRecommendationSectionsOnlyContainActivities = function ensureRecommendationSectionsOnlyContainActivities(stateFromStores1) {
  const items = [];
  const iter = stateFromStores1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let prop = nextResult.application_directory_collection_items;
    let tmp2 = nextResult;
    let found = prop.filter((type) => {
      let tmp3 = type.type === callback(table[20]).ApplicationDirectoryCollectionItemType.APPLICATION;
      if (tmp3) {
        const application = type.application;
        let hasApplicationFlagResult = application.id !== constants2.BUILT_IN;
        if (hasApplicationFlagResult) {
          hasApplicationFlagResult = callback(table[9]).hasApplicationFlag(application, constants.EMBEDDED);
          const tmpResult = callback(table[9]);
        }
        tmp3 = hasApplicationFlagResult;
      }
      return tmp3;
    });
    if (0 !== found.length) {
      let obj = {};
      let tmp4 = nextResult;
      let tmp5 = obj;
      let merged = Object.assign(tmp2);
      let tmp7 = found;
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
  if (application instanceof createExecutable) {
    ({ customInstallUrl: obj[1], installParams: obj[2], integrationTypesConfig: obj[3] } = application);
    let tmp = obj;
  } else {
    ({ custom_install_url: obj[1], install_params: obj[2], integration_types_config: obj[3] } = application);
    tmp = obj;
  }
  return tmp;
};
export const isAppAvailableInAppLauncher = function isAppAvailableInAppLauncher(id) {
  let guildState = null;
  if (null != arg1) {
    guildState = guildState.getGuildState(arg1);
  }
  let result = null != guildState;
  if (result) {
    result = require(5707) /* buildCommand */.hasCommandIndexForApp(id.id, guildState);
    const obj = require(5707) /* buildCommand */;
  }
  const obj2 = require(8034) /* canInstallApplication */;
  return require(8034) /* canInstallApplication */.isAppUserInstallable(id) || result;
};