// discord_app/modules/guild_onboarding/GuildOnboardingPromptsConstants.tsx
import isUndefinedOrNullDefault from "../../../_runtime/00656_isUndefinedOrNull.js";
import getSystemLocale from "../../intl/index.native.tsx";
import isNullOrEmpty from "../../utils/StringUtils.tsx";
import closure_5 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_6 from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import { PlatformTypes } from "../../Constants.tsx";
import set from "../../../_runtime/00002_set.js";

require = arg1;
function serverPromptToClientPrompt(id) {
  const options = id.options;
  return {
    id: id.id,
    options: options.map((id) => {
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
      obj[5] = str;
      return obj;
    }),
    title: id.title,
    singleSelect: id.single_select,
    disabled: id.disabled,
    required: id.required,
    inOnboarding: id.in_onboarding,
    type: id.type,
  };
}
function validateOnboardingConnection(connection_type) {
  const items = [];
  connection_type = connection_type.connection_type;
  if (obj.APPLICATION === connection_type) {
    if (obj3.isNullOrEmpty(connection_type.application_id)) {
      items.push("Application ID is required for application connections");
    }
    obj3 = isNullOrEmpty;
    const tmp9 = require;
    if (!tmp9Result.isNullOrEmpty(connection_type.provider_id)) {
      items.push("Platform ID not allowed for application connections");
    }
    tmp9Result = isNullOrEmpty;
  } else if (tmp.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
    obj = isNullOrEmpty;
    if (obj.isNullOrEmpty(connection_type.provider_id)) {
      items.push("Platform ID is required for platform connections");
    } else if (!closure_11.includes(connection_type.provider_id)) {
      items.push("Invalid platform ID");
    }
    if (!tmp3Result.isNullOrEmpty(connection_type.application_id)) {
      items.push("Application ID not allowed for platform connections");
    }
    const tmp3 = require;
    tmp3Result = isNullOrEmpty;
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
let set = new Set(items);
const values = Object.values(PlatformTypes);
let closure_11 = values.filter((arg0) => !set.has(arg0));
const result = set.fileFinishedImporting("modules/guild_onboarding/GuildOnboardingPromptsConstants.tsx");

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
    obj[0] = String(Date.now());
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t.vY91C9);
    obj[2] = [];
    obj[6] = obj.MULTIPLE_CHOICE;
    const id = obj.id;
    const id2 = options.id;
    const tmp7 = callback2(obj, closure_3);
    return isUndefinedOrNullDefault(tmp7, callback2(options, closure_4));
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
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.vY91C9);
  obj[2] = [];
  obj[6] = obj.MULTIPLE_CHOICE;
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
  const options = id.options;
  return {
    id: id.id,
    options: options.map((id) => {
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
      obj[4] = id;
      const emoji2 = id.emoji;
      let name;
      if (emoji2 != null) {
        name = emoji2.name;
      }
      obj[5] = name;
      const emoji3 = id.emoji;
      let animated;
      if (emoji3 != null) {
        animated = emoji3.animated;
      }
      obj[6] = animated;
      ({ title: obj[7], description: obj[8] } = id);
      return obj;
    }),
    title: id.title,
    single_select: id.singleSelect,
    disabled: id.disabled,
    required: id.required,
    in_onboarding: id.inOnboarding,
    type: id.type,
  };
};
export { serverPromptToClientPrompt };
export const serverApiResponseToClientState = function serverApiResponseToClientState(defaultChannelIds) {
  obj = {
    prompts: prompts.map(serverPromptToClientPrompt),
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
  prompts = defaultChannelIds.prompts;
  let responses = defaultChannelIds.responses;
  if (responses == null) {
    responses = [];
  }
  obj[2] = responses;
  ({ mode: obj[3], enabled: obj[4], onboarding_prompts_seen } = defaultChannelIds);
  if (onboarding_prompts_seen == null) {
    onboarding_prompts_seen = {};
  }
  obj[5] = onboarding_prompts_seen;
  let prop = defaultChannelIds.onboarding_responses_seen;
  if (prop == null) {
    prop = {};
  }
  obj[6] = prop;
  ({ below_requirements: obj[7], connections } = defaultChannelIds);
  if (connections == null) {
    connections = [];
  }
  obj[8] = connections;
  let prop1 = defaultChannelIds.additional_connections;
  if (prop1 == null) {
    prop1 = [];
  }
  obj[9] = prop1;
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
  [tmp2, tmp3] = callback(str.split(":"), 2);
  if ("app" === tmp2) {
    if (undefined !== tmp3) {
      if ("" !== tmp3) {
        obj = { type: null, applicationId: null };
        obj[0] = obj.APPLICATION;
        obj[1] = tmp3;
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
        obj[0] = obj.PROVIDER_CONNECTED_ACCOUNT;
        obj[1] = tmp3;
        tmp4 = obj;
      }
    }
  }
};
export { validateOnboardingConnection };
export const validateOnboardingConnections = function validateOnboardingConnections(arr) {
  let items = [];
  set = new Set();
  function _loop(arg0) {
    items = arg0;
    let arr = closure_1_12(connection_type);
    items = [...arr.map((arg0) => "Connection " + closure_0 + 1 + ": " + arg0)];
    items.push.apply(items);
    if (connection_type.connection_type === closure_1_8.APPLICATION) {
      const _HermesInternal2 = HermesInternal;
      let combined = "app:" + tmp.application_id;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "provider:" + tmp.provider_id;
    }
    if (set.has(combined)) {
      arr = items.push("Duplicate connection configuration");
    }
    set.add(combined);
  }
  const entries = arr.entries();
  while (tmp3 !== undefined) {
    let tmp5 = callback;
    let tmp6 = callback(tmp4, 2);
    closure_2 = tmp6[1];
    let _loopResult = _loop(tmp6[0]);
    continue;
  }
  return items;
};
