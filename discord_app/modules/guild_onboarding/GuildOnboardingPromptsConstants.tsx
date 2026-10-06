// === Module 6603: GuildOnboardingPromptsConstants ===

// Module 6603 (GuildOnboardingPromptsConstants)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef1342 from "module_1342" /* 1342 */;
import StringUtils from "StringUtils" /* 2018 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import size from "module_2" /* 2 */;

function serverPromptToClientPrompt(id) {
  let options;
  let obj = {
    id: id.id,
    options: options.map((id) => {
      let str;
      const obj = { id: id.id, channelIds: id.channel_ids, roleIds: id.role_ids, emoji: id.emoji, title: id.title, description: str };
      str = id.description;
      if (str == null) {
        str = "";
      }
      return obj;
    }),
    title: id.title,
    singleSelect: id.single_select,
    disabled: id.disabled,
    required: id.required,
    inOnboarding: id.in_onboarding,
    type: id.type
  };
  options = id.options;
  return obj;
}
function validateOnboardingConnection(connection_type) {
  const items = [];
  connection_type = connection_type.connection_type;
  if (obj2.APPLICATION === connection_type) {
    const obj3 = StringUtils;
    if (obj3.isNullOrEmpty(connection_type.application_id)) {
      items.push("Application ID is required for application connections");
    }
    const tmp9Result = StringUtils;
    if (!tmp9Result.isNullOrEmpty(connection_type.provider_id)) {
      items.push("Platform ID not allowed for application connections");
    }
  } else if (tmp.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
    const obj = StringUtils;
    if (obj.isNullOrEmpty(connection_type.provider_id)) {
      items.push("Platform ID is required for platform connections");
    } else if (!closure_11.includes(connection_type.provider_id)) {
      items.push("Invalid platform ID");
    }
    const tmp3Result = StringUtils;
    if (!tmp3Result.isNullOrEmpty(connection_type.application_id)) {
      items.push("Application ID not allowed for platform connections");
    }
  } else {
    const connection_type2 = connection_type.connection_type;
    items.push("Invalid connection type");
    return items;
  }
  const tmp13 = null != connection_type.description && connection_type.description.length > 100;
  if (tmp13) {
    items.push("Description must be 100 characters or less");
  }
  return items;
}
let closure_3 = ["id"];
let closure_4 = ["id"];
const PlatformTypes = Constants.PlatformTypes;
const OnboardingPromptType = { MULTIPLE_CHOICE: 0, [0]: "MULTIPLE_CHOICE", DROPDOWN: 1, [1]: "DROPDOWN" };
let obj2 = { APPLICATION: 0, [0]: "APPLICATION", PROVIDER_CONNECTED_ACCOUNT: 1, [1]: "PROVIDER_CONNECTED_ACCOUNT" };
let items = [, , , , , , , ];
({ PLAYSTATION_STAGING: arr[0], CONTACTS: arr[1], DOMAIN: arr[2], TWITTER_LEGACY: arr[3], MASTODON: arr[4], INSTAGRAM: arr[5], LEAGUE_OF_LEGENDS: arr[6], SKYPE: arr[7] } = PlatformTypes);
let set = new Set(items);
const values = Object.values(PlatformTypes);
let closure_11 = values.filter((item) => !set.has(item));
const result = size.fileFinishedImporting("modules/guild_onboarding/GuildOnboardingPromptsConstants.tsx");

export const MAX_PROMPT_TITLE_LENGTH = 100;
export const MAX_PROMPT_OPTION_TITLE_LENGTH = 50;
export const MAX_PROMPT_OPTION_DESCRIPTION_LENGTH = 100;
export const MAX_NUM_PROMPTS = 15;
export const MULTIPLE_CHOICE_MAX_NUM_OPTIONS = 12;
export const DROPDOWN_MAX_NUM_OPTIONS = 50;
export const MAX_DEFAULT_CHANNEL_IDS = 25;
export const MAX_NUMBER_OF_ONBOARDING_CONNECTIONS = 10;
export const MAX_CONNECTION_DESCRIPTION_LENGTH = 100;
export const MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING = 4;
export const NUM_DEFAULT_CHATTABLE_CHANNELS_MIN = 1;
export const ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD = 13;
export const GuildOnboardingTab = { CUSTOMIZE: 0, [0]: "CUSTOMIZE", BROWSE: 1, [1]: "BROWSE" };
export { OnboardingPromptType };
export const GuildOnboardingMode = { ONBOARDING_DEFAULT: 0, [0]: "ONBOARDING_DEFAULT", ONBOARDING_ADVANCED: 1, [1]: "ONBOARDING_ADVANCED" };
export const OnboardingConnectionType = obj2;
export const isDefaultPrompt = function isDefaultPrompt(options) {
  let intl;
  let obj;
  if (options.options.length > 0) {
    return false;
  } else {
    obj = { id: String(Date.now()), title: intl.string(intl2.t.vY91C9), options: [], singleSelect: false, required: false, inOnboarding: true, type: obj.MULTIPLE_CHOICE };
    const _String = String;
    const _Date = Date;
    intl = intl2.intl;
    const id = obj.id;
    const id2 = options.id;
    const tmp7 = _objectWithoutProperties(obj, closure_3);
    const tmp9 = _objectWithoutProperties(options, closure_4);
    return _modDef1342(tmp7, tmp9);
  }
};
export const getDefaultPrompt = function getDefaultPrompt() {
  let intl;
  let obj;
  obj = { id: String(Date.now()), title: intl.string(intl2.t.vY91C9), options: [], singleSelect: false, required: false, inOnboarding: true, type: obj.MULTIPLE_CHOICE };
  intl = intl2.intl;
  return obj;
};
export const getEmptyPrompt = function getEmptyPrompt(inOnboarding) {
  let obj;
  obj = { id: String(Date.now()), title: "", options: [], singleSelect: false, required: false, inOnboarding, type: obj.MULTIPLE_CHOICE };
  return obj;
};
export const clientPromptToServerPrompt = function clientPromptToServerPrompt(id) {
  let options;
  let obj = {
    id: id.id,
    options: options.map((id) => {
      let animated;
      let name;
      const obj = { id: id.id, channel_ids: id.channelIds, role_ids: id.roleIds, emoji: id.emoji, emoji_id: id, emoji_name: name, emoji_animated: animated, title: null, description: null };
      const emoji = id.emoji;
      id = undefined;
      if (emoji != null) {
        id = emoji.id;
      }
      const emoji2 = id.emoji;
      name = undefined;
      if (emoji2 != null) {
        name = emoji2.name;
      }
      const emoji3 = id.emoji;
      animated = undefined;
      if (emoji3 != null) {
        animated = emoji3.animated;
      }
      ({ title: obj.title, description: obj.description } = id);
      return obj;
    }),
    title: id.title,
    single_select: id.singleSelect,
    disabled: id.disabled,
    required: id.required,
    in_onboarding: id.inOnboarding,
    type: id.type
  };
  options = id.options;
  return obj;
};
export { serverPromptToClientPrompt };
export const serverApiResponseToClientState = function serverApiResponseToClientState(defaultChannelIds) {
  let connections;
  let onboarding_prompts_seen;
  let prompts;
  let prop;
  let prop1;
  let responses;
  const obj = { prompts: prompts.map(serverPromptToClientPrompt), defaultChannelIds: defaultChannelIds.default_channel_ids, responses, mode: null, enabled: null, onboardingPromptsSeen: onboarding_prompts_seen, onboardingResponsesSeen: prop, belowRequirements: null, connections, additionalConnections: prop1 };
  prompts = defaultChannelIds.prompts;
  responses = defaultChannelIds.responses;
  if (responses == null) {
    responses = [];
  }
  ({ mode: obj.mode, enabled: obj.enabled, onboarding_prompts_seen } = defaultChannelIds);
  if (onboarding_prompts_seen == null) {
    onboarding_prompts_seen = {};
  }
  prop = defaultChannelIds.onboarding_responses_seen;
  if (prop == null) {
    prop = {};
  }
  ({ below_requirements: obj.belowRequirements, connections } = defaultChannelIds);
  if (connections == null) {
    connections = [];
  }
  prop1 = defaultChannelIds.additional_connections;
  if (prop1 == null) {
    prop1 = [];
  }
  return obj;
};
export const isEmojiEmpty = function isEmojiEmpty(id) {
  let tmp = null == id;
  if (!tmp) {
    tmp = null == id.id && null == id.name;
  }
  return tmp;
};
export const EXCLUDED_ONBOARDING_PLATFORM_TYPES = set;
export const getConnectionIdentifier = function getConnectionIdentifier(connection_type) {
  let combined;
  if (connection_type.connection_type === obj2.APPLICATION) {
    const _HermesInternal2 = HermesInternal;
    combined = "app:" + connection_type.application_id;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "provider:" + connection_type.provider_id;
  }
  return combined;
};
export const parseConnectionIdentifier = function parseConnectionIdentifier(str) {
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp2, tmp3] = str.split(":");
  _slicedToArray(str.split(":"), 2);
  if ("app" === tmp2) {
    if (undefined !== tmp3) {
      if ("" !== tmp3) {
        obj2 = { type: obj2.APPLICATION, applicationId: tmp3 };
        tmp4 = obj2;
      }
      return tmp4;
    }
  }
  tmp4 = null;
  if ("provider" === tmp2) {
    tmp4 = null;
    if (undefined !== tmp3) {
      tmp4 = null;
      if ("" !== tmp3) {
        tmp4 = { type: obj2.PROVIDER_CONNECTED_ACCOUNT, providerId: tmp3 };
        const obj = { type: obj2.PROVIDER_CONNECTED_ACCOUNT, providerId: tmp3 };
      }
    }
  }
};
export { validateOnboardingConnection };
export const validateOnboardingConnections = function validateOnboardingConnections(arr) {
  let items = [];
  set = new Set();
  function _loop(arg0) {
    let combined;
    let closure_0 = arg0;
    const arr2 = items;
    items = [...validateOnboardingConnection(connection_type).map((item) => "Connection " + closure_0 + 1 + ": " + item)];
    validateOnboardingConnection(connection_type);
    items.push.apply(items);
    if (connection_type.connection_type === obj2.APPLICATION) {
      const _HermesInternal2 = HermesInternal;
      combined = "app:" + connection_type.application_id;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "provider:" + connection_type.provider_id;
    }
    if (set.has(combined)) {
      arr2.push("Duplicate connection configuration");
    }
    set.add(combined);
  }
  const entries = arr.entries();
  const tmp3 = entries[Symbol.iterator]();
  while (tmp3 !== undefined) {
    let tmp6 = _slicedToArray(tmp4, 2);
    let connection_type = tmp6[1];
    let _loopResult = _loop(tmp6[0]);
    continue;
  }
  return items;
};