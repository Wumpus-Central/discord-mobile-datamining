// discord_app/modules/guild_onboarding/GuildOnboardingPromptsConstants.tsx
import util from "../../intl/index.native.tsx";
import _modDef1332 from "../../../_runtime/metro/01332__.js";
import StringUtils from "../../utils/StringUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";

require = fn;
function serverPromptToClientPrompt(id) {
  obj = {
    id: id.id,
    options: null,
    title: id.title,
    singleSelect: id.single_select,
    disabled: id.disabled,
    required: id.required,
    inOnboarding: id.in_onboarding,
    type: id.type,
  };
  const options = id.options;
  obj.options = options.map((id) => {
    obj = {
      id: id.id,
      channelIds: id.channel_ids,
      roleIds: id.role_ids,
      emoji: id.emoji,
      title: id.title,
      description: null,
    };
    let str = id.description;
    if (str == null) {
      str = "";
    }
    obj.description = str;
    return obj;
  });
  return obj;
}
function validateOnboardingConnection(connection_type) {
  const items = [];
  connection_type = connection_type.connection_type;
  if (obj.APPLICATION === connection_type) {
    if (obj3.isNullOrEmpty(connection_type.application_id)) {
      items.push("Application ID is required for application connections");
    }
    obj3 = StringUtils;
    if (!tmp9Result.isNullOrEmpty(connection_type.provider_id)) {
      items.push("Platform ID not allowed for application connections");
    }
    tmp9Result = StringUtils;
  } else if (tmp.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
    obj = StringUtils;
    if (obj.isNullOrEmpty(connection_type.provider_id)) {
      items.push("Platform ID is required for platform connections");
    } else if (!closure_11.includes(connection_type.provider_id)) {
      items.push("Invalid platform ID");
    }
    if (!tmp3Result.isNullOrEmpty(connection_type.application_id)) {
      items.push("Application ID not allowed for platform connections");
    }
    tmp3Result = StringUtils;
  } else {
    const connection_type2 = connection_type.connection_type;
    items.push("Invalid connection type");
    return items;
  }
  let tmp13 = null != connection_type.description;
  if (tmp13) {
    tmp13 = connection_type.description.length > 100;
  }
  if (tmp13) {
    items.push("Description must be 100 characters or less");
  }
  return items;
}
let closure_3 = ["id"];
let closure_4 = ["id"];
const PlatformTypes = fn(1074).PlatformTypes;
let obj = { MULTIPLE_CHOICE: 0, [0]: "MULTIPLE_CHOICE", DROPDOWN: 1, [1]: "DROPDOWN" };
obj = { APPLICATION: 0, [0]: "APPLICATION", PROVIDER_CONNECTED_ACCOUNT: 1, [1]: "PROVIDER_CONNECTED_ACCOUNT" };
let items = [, , , , , , ,];
({
  PLAYSTATION_STAGING: arr[0],
  CONTACTS: arr[1],
  DOMAIN: arr[2],
  TWITTER_LEGACY: arr[3],
  MASTODON: arr[4],
  INSTAGRAM: arr[5],
  LEAGUE_OF_LEGENDS: arr[6],
  SKYPE: arr[7],
} = PlatformTypes);
const set = new Set(items);
const values = Object.values(PlatformTypes);
let closure_11 = values.filter((item) => !set.has(item));
const size = fn(2);
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
export const OnboardingPromptType = obj;
export const GuildOnboardingMode = {
  ONBOARDING_DEFAULT: 0,
  [0]: "ONBOARDING_DEFAULT",
  ONBOARDING_ADVANCED: 1,
  [1]: "ONBOARDING_ADVANCED",
};
export const OnboardingConnectionType = obj;
export const isDefaultPrompt = function isDefaultPrompt(options) {
  if (options.options.length > 0) {
    return false;
  } else {
    obj = {
      id: null,
      title: null,
      options: null,
      singleSelect: false,
      required: false,
      inOnboarding: true,
      type: null,
    };
    const _String = String;
    const _Date = Date;
    obj.id = String(Date.now());
    const intl = util.intl;
    obj.title = intl.string(util.t.vY91C9);
    obj.options = [];
    obj.type = obj.MULTIPLE_CHOICE;
    const id = obj.id;
    const id2 = options.id;
    const tmp7 = _objectWithoutProperties(obj, closure_3);
    return _modDef1332(tmp7, _objectWithoutProperties(options, closure_4));
  }
};
export const getDefaultPrompt = function getDefaultPrompt() {
  obj = {
    id: String(Date.now()),
    title: null,
    options: null,
    singleSelect: false,
    required: false,
    inOnboarding: true,
    type: null,
  };
  const intl = util.intl;
  obj.title = intl.string(util.t.vY91C9);
  obj.options = [];
  obj.type = obj.MULTIPLE_CHOICE;
  return obj;
};
export const getEmptyPrompt = function getEmptyPrompt(inOnboarding) {
  obj = {
    id: String(Date.now()),
    title: "",
    options: [],
    singleSelect: false,
    required: false,
    inOnboarding,
    type: obj.MULTIPLE_CHOICE,
  };
  return obj;
};
export const clientPromptToServerPrompt = function clientPromptToServerPrompt(id) {
  obj = {
    id: id.id,
    options: null,
    title: id.title,
    single_select: id.singleSelect,
    disabled: id.disabled,
    required: id.required,
    in_onboarding: id.inOnboarding,
    type: id.type,
  };
  const options = id.options;
  obj.options = options.map((id) => {
    obj = {
      id: id.id,
      channel_ids: id.channelIds,
      role_ids: id.roleIds,
      emoji: id.emoji,
      emoji_id: null,
      emoji_name: null,
      emoji_animated: null,
      title: null,
      description: null,
    };
    const emoji = id.emoji;
    id = undefined;
    if (emoji != null) {
      id = emoji.id;
    }
    obj.emoji_id = id;
    const emoji2 = id.emoji;
    let name;
    if (emoji2 != null) {
      name = emoji2.name;
    }
    obj.emoji_name = name;
    const emoji3 = id.emoji;
    let animated;
    if (emoji3 != null) {
      animated = emoji3.animated;
    }
    obj.emoji_animated = animated;
    ({ title: obj.title, description: obj.description } = id);
    return obj;
  });
  return obj;
};
export { serverPromptToClientPrompt };
export const serverApiResponseToClientState = function serverApiResponseToClientState(defaultChannelIds) {
  obj = {
    prompts: null,
    defaultChannelIds: defaultChannelIds.default_channel_ids,
    responses: null,
    mode: null,
    enabled: null,
    onboardingPromptsSeen: null,
    onboardingResponsesSeen: null,
    belowRequirements: null,
    connections: null,
    additionalConnections: null,
  };
  const prompts = defaultChannelIds.prompts;
  obj.prompts = prompts.map(serverPromptToClientPrompt);
  let responses = defaultChannelIds.responses;
  if (responses == null) {
    responses = [];
  }
  obj.responses = responses;
  ({ mode: obj.mode, enabled: obj.enabled, onboarding_prompts_seen } = defaultChannelIds);
  if (onboarding_prompts_seen == null) {
    onboarding_prompts_seen = {};
  }
  obj.onboardingPromptsSeen = onboarding_prompts_seen;
  let prop = defaultChannelIds.onboarding_responses_seen;
  if (prop == null) {
    prop = {};
  }
  obj.onboardingResponsesSeen = prop;
  ({ below_requirements: obj.belowRequirements, connections } = defaultChannelIds);
  if (connections == null) {
    connections = [];
  }
  obj.connections = connections;
  let prop1 = defaultChannelIds.additional_connections;
  if (prop1 == null) {
    prop1 = [];
  }
  obj.additionalConnections = prop1;
  return obj;
};
export const isEmojiEmpty = function isEmojiEmpty(id) {
  let tmp = null == id;
  if (!tmp) {
    tmp = null == id.id && null == id.name;
    const tmp2 = null == id.id && null == id.name;
  }
  return tmp;
};
export const EXCLUDED_ONBOARDING_PLATFORM_TYPES = set;
export const getConnectionIdentifier = function getConnectionIdentifier(connection_type) {
  if (connection_type.connection_type === obj.APPLICATION) {
    const _HermesInternal2 = HermesInternal;
    let combined = "app:" + connection_type.application_id;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "provider:" + connection_type.provider_id;
  }
  return combined;
};
export const parseConnectionIdentifier = function parseConnectionIdentifier(str) {
  [tmp2, tmp3] = _slicedToArray(str.split(":"), 2);
  if ("app" === tmp2) {
    if (undefined !== tmp3) {
      if ("" !== tmp3) {
        obj = { type: null, applicationId: null };
        obj.type = obj.APPLICATION;
        obj.applicationId = tmp3;
        let tmp4 = obj;
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
        obj = { type: null, providerId: null };
        obj.type = obj.PROVIDER_CONNECTED_ACCOUNT;
        obj.providerId = tmp3;
        tmp4 = obj;
      }
    }
  }
};
export { validateOnboardingConnection };
export const validateOnboardingConnections = function validateOnboardingConnections(arr) {
  let items = [];
  new Set();
  function _loop(arg0) {
    closure_0 = arg0;
    let arr = validateOnboardingConnection(connection_type);
    items = [...arr.map((item) => "Connection " + closure_0 + 1 + ": " + item)];
    items.push.apply(items);
    if (connection_type.connection_type === set.APPLICATION) {
      const _HermesInternal2 = HermesInternal;
      let combined = "app:" + connection_type.application_id;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "provider:" + connection_type.provider_id;
    }
    if (set.has(combined)) {
      arr = arr2.push("Duplicate connection configuration");
    }
    set.add(combined);
    arr2 = items;
  }
  const entries = arr.entries();
  while (tmp3 !== undefined) {
    let tmp6 = _slicedToArray(tmp4, 2);
    let connection_type = tmp6[1];
    let _loopResult = _loop(tmp6[0]);
    continue;
  }
  return items;
};
