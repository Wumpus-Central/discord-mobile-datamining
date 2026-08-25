// discord_app/records/ApplicationRecord.tsx
import DISCORD_EPOCHDefault from "../utils/SnowflakeUtils.tsx";
import fromStringAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import getAvatarURLDefault from "../utils/AvatarUtils.tsx";
import toJSDefault from "../lib/Record.tsx";
import ApplicationOverlayMethodFlags from "../../discord_common/js/shared/shared-constants/ApplicationOverlayMethodFlags.tsx";
import closure_4 from "CompanyRecord.tsx";
import closure_5 from "UserRecord.tsx";
import items3 from "../modules/activities/Constants.tsx";
import { ApplicationTypes } from "../modules/applications/ApplicationConstants.tsx";
import { items } from "../modules/user_application_identity/UserApplicationIdentityConstants.tsx";

require = arg1;
function createExecutable(os) {
  const obj = { os: os.os, name: os.name };
  if (null != os.arguments) {
    obj.arguments = os.arguments;
  }
  let isLauncher = os.is_launcher;
  if (isLauncher == null) {
    isLauncher = os.isLauncher;
  }
  if (null != isLauncher) {
    obj.isLauncher = isLauncher;
  }
  return obj;
}
toJSDefault;
({ END_GAME_APPLICATION_ID, POKER_NIGHT_APPLICATION_ID } = items3);
let closure_7 = { [POKER_NIGHT_APPLICATION_ID]: 7, [END_GAME_APPLICATION_ID]: 12 };
let BasicApplicationRecord;
class BasicApplicationRecord extends tmp2 {
  constructor(arg0) {
    tmp = new BasicApplicationRecord(new.target, global, new.target);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp.id, name: tmp.name, icon: tmp.icon, splash: tmp.splash, primarySkuId: tmp.primarySkuId, thirdPartySkus } = global);
    if (thirdPartySkus == null) {
      thirdPartySkus = [];
    }
    tmp.thirdPartySkus = thirdPartySkus;
    ({ description: tmp.description, bot: tmp.bot, coverImage: tmp.coverImage, type: tmp.type, is_monetized } = global);
    if (is_monetized == null) {
      is_monetized = global.isMonetized;
    }
    tmp.isMonetized = is_monetized;
    isVerified = global.is_verified;
    if (isVerified == null) {
      isVerified = global.isVerified;
    }
    tmp.isVerified = isVerified;
    roleConnectionsVerificationUrl = global.role_connections_verification_url;
    if (roleConnectionsVerificationUrl == null) {
      roleConnectionsVerificationUrl = global.roleConnectionsVerificationUrl;
    }
    tmp.roleConnectionsVerificationUrl = roleConnectionsVerificationUrl;
    parentId = global.parent_id;
    if (parentId == null) {
      parentId = global.parentId;
    }
    tmp.parentId = parentId;
    _connectionEntrypointUrl = global.connection_entrypoint_url;
    if (_connectionEntrypointUrl == null) {
      _connectionEntrypointUrl = global._connectionEntrypointUrl;
    }
    tmp._connectionEntrypointUrl = _connectionEntrypointUrl;
    contentClassification = global.content_classification;
    if (contentClassification == null) {
      contentClassification = global.contentClassification;
    }
    tmp.contentClassification = contentClassification;
    return tmp;
  }
}
const prototype = BasicApplicationRecord.prototype;
BasicApplicationRecord["createFromServer"] = function createFromServer(bot) {
  const obj = {};
  const merged = Object.assign(bot);
  ({ cover_image: obj.coverImage, primary_sku_id: obj.primarySkuId } = bot);
  let tmp3 = null;
  if (null != bot.bot) {
    tmp3 = new closure_5(bot.bot);
  }
  obj.bot = tmp3;
  ({ third_party_skus: obj.thirdPartySkus, role_connections_verification_url: obj.roleConnectionsVerificationUrl, parent_id: obj.parentId, connection_entrypoint_url: obj._connectionEntrypointUrl, content_classification: obj.contentClassification } = bot);
  return new BasicApplicationRecord(obj);
};
Object.defineProperty(prototype, "connectionEntrypointUrl", {
  get: function connectionEntrypointUrl(arg0) {
    const obj = items /* items */.APPLICATION_IDENTITY_CONNECTIONS_WITH_OVERRIDE_ENTRYPOINT_URLS[this.id];
    let prop;
    if (obj != null) {
      prop = obj.connectionEntrypointUrlOverride;
    }
    if (null != prop) {
      if (obj.getMigrationExperimentEnabled("ApplicationRecord")) {
        let _connectionEntrypointUrl = obj.connectionEntrypointUrlOverride;
      }
      return _connectionEntrypointUrl;
    }
    _connectionEntrypointUrl = this._connectionEntrypointUrl;
  },
  set: undefined
});
prototype["getIconURL"] = function getIconURL(arg0, arg1) {
  let gameAssetURL = null;
  if (null != this.icon) {
    let obj = getAvatarURLDefault;
    obj = { id: null, hash: null, size: null, format: null };
    ({ id: obj2[0], icon: obj2[1] } = this);
    obj[2] = arg0;
    obj[3] = arg1;
    gameAssetURL = obj.getGameAssetURL(obj);
  }
  return gameAssetURL;
};
prototype["getIconSource"] = function getIconSource(arg0, arg1) {
  let gameAssetSource = null;
  if (null != this.icon) {
    let obj = getAvatarURLDefault;
    obj = { id: null, hash: null, size: null, format: null };
    ({ id: obj2[0], icon: obj2[1] } = this);
    obj[2] = arg0;
    obj[3] = arg1;
    gameAssetSource = obj.getGameAssetSource(obj);
  }
  return gameAssetSource;
};
prototype["getSplashURL"] = function getSplashURL(arg0, arg1) {
  let gameAssetURL = null;
  if (null != this.splash) {
    let obj = getAvatarURLDefault;
    obj = { id: null, hash: null, size: null, keepAspectRatio: true, format: null };
    ({ id: obj2[0], splash: obj2[1] } = this);
    obj[2] = arg0;
    obj[4] = arg1;
    gameAssetURL = obj.getGameAssetURL(obj);
  }
  return gameAssetURL;
};
prototype["getCoverImageURL"] = function getCoverImageURL(arg0) {
  let applicationIconURL = null;
  if (null != this.coverImage) {
    let obj = getAvatarURLDefault;
    obj = { id: null, icon: null, size: null, keepAspectRatio: true };
    ({ id: obj2[0], coverImage: obj2[1] } = this);
    obj[2] = arg0;
    applicationIconURL = obj.getApplicationIconURL(obj);
  }
  return applicationIconURL;
};
let ApplicationRecord;
class ApplicationRecord extends BasicApplicationRecord {
  constructor(arg0) {
    tmp3 = new ApplicationRecord(global, tmp2, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    flag = global.overlay;
    if (flag == null) {
      flag = false;
    }
    tmp3.overlay = flag;
    flag2 = global.overlayWarn;
    if (flag2 == null) {
      flag2 = false;
    }
    tmp3.overlayWarn = flag2;
    flag3 = global.overlayCompatibilityHook;
    if (flag3 == null) {
      flag3 = false;
    }
    tmp3.overlayCompatibilityHook = flag3;
    DEFAULT = global.overlayMethods;
    if (DEFAULT == null) {
      tmp4 = closure_0;
      tmp5 = closure_3;
      DEFAULT = require("ApplicationOverlayMethodFlags").ApplicationOverlayMethodFlags.DEFAULT;
    }
    tmp3.overlayMethods = DEFAULT;
    flag4 = global.hook;
    if (flag4 == null) {
      flag4 = true;
    }
    tmp3.hook = flag4;
    aliases = global.aliases;
    if (aliases == null) {
      aliases = [];
    }
    tmp3.aliases = aliases;
    publishers = global.publishers;
    if (publishers == null) {
      publishers = [];
    }
    tmp3.publishers = publishers;
    developers = global.developers;
    if (developers == null) {
      developers = [];
    }
    tmp3.developers = developers;
    ({ storeListingSkuId: tmp3.storeListingSkuId, guildId: tmp3.guildId, guild: tmp3.guild, executables } = global);
    if (executables == null) {
      executables = [];
    }
    tmp3.executables = executables.map(createExecutable);
    hashes = global.hashes;
    if (hashes == null) {
      hashes = [];
    }
    tmp3.hashes = hashes;
    ({ eulaId: tmp3.eulaId, slug: tmp3.slug } = global);
    obj = require("fromString");
    num = global.flags;
    if (num == null) {
      num = 0;
    }
    tmp3.flags = obj.deserialize(num);
    tags = global.tags;
    if (tags == null) {
      tags = [];
    }
    tmp3.tags = tags;
    ({ maxParticipants: tmp3.maxParticipants, embedded_activity_config } = global);
    if (embedded_activity_config == null) {
      embedded_activity_config = global.embeddedActivityConfig;
    }
    tmp3.embeddedActivityConfig = embedded_activity_config;
    ({ team: tmp3.team, integrationTypesConfig: tmp3.integrationTypesConfig, storefront_available: tmp3.storefront_available, termsOfServiceUrl: tmp3.termsOfServiceUrl, privacyPolicyUrl: tmp3.privacyPolicyUrl, is_discoverable } = global);
    if (is_discoverable == null) {
      is_discoverable = global.isDiscoverable;
    }
    tmp3.isDiscoverable = is_discoverable;
    customInstallUrl = global.custom_install_url;
    if (customInstallUrl == null) {
      customInstallUrl = global.customInstallUrl;
    }
    tmp3.customInstallUrl = customInstallUrl;
    installParams = global.install_params;
    if (installParams == null) {
      installParams = global.installParams;
    }
    tmp3.installParams = installParams;
    directoryEntry = global.directory_entry;
    if (directoryEntry == null) {
      directoryEntry = global.directoryEntry;
    }
    tmp3.directoryEntry = directoryEntry;
    ({ categories: tmp3.categories, linked_games } = global);
    mapped = undefined;
    if (linked_games != null) {
      mapped = linked_games.map((application) => {
        const obj = {};
        const merged = Object.assign(application);
        let fromServer;
        if (null != application.application) {
          fromServer = closure_10.createFromServer(application.application);
        }
        obj.application = fromServer;
        return obj;
      });
    }
    if (mapped == null) {
      mapped = global.linkedGames;
    }
    tmp3.linkedGames = mapped;
    deeplink_uri = global.deepLinkUri;
    if (deeplink_uri == null) {
      deeplink_uri = global.deeplink_uri;
    }
    tmp3.deepLinkUri = deeplink_uri;
    application_account_link_benefit_config = global.applicationAccountLinkBenefitConfig;
    if (application_account_link_benefit_config == null) {
      application_account_link_benefit_config = global.application_account_link_benefit_config;
    }
    tmp3.applicationAccountLinkBenefitConfig = application_account_link_benefit_config;
    parent_id = global.parentId;
    if (parent_id == null) {
      parent_id = global.parent_id;
    }
    tmp3.parentId = parent_id;
    return tmp3;
  }
}
const prototype2 = ApplicationRecord.prototype;
ApplicationRecord["createFromServer"] = function createFromServer(bot) {
  let obj = {};
  let merged = Object.assign(bot);
  ({ cover_image: obj.coverImage, primary_sku_id: obj.primarySkuId } = bot);
  let tmp3 = null;
  if (null != bot.bot) {
    tmp3 = new closure_5(bot.bot);
  }
  obj.bot = tmp3;
  ({ third_party_skus: obj.thirdPartySkus, role_connections_verification_url: obj.roleConnectionsVerificationUrl, overlay_warn: obj.overlayWarn, overlay_compatibility_hook: obj.overlayCompatibilityHook, overlay_methods } = bot);
  if (overlay_methods == null) {
    overlay_methods = ApplicationOverlayMethodFlags.ApplicationOverlayMethodFlags.DEFAULT;
  }
  obj.overlayMethods = overlay_methods;
  ({ hook: obj.hook, store_listing_sku_id: obj.storeListingSkuId, guild_id: obj.guildId, guild: obj.guild } = bot);
  if (null != bot.publishers) {
    const publishers = bot.publishers;
    let mapped = publishers.map(closure_4.createFromServer);
  } else {
    mapped = [];
  }
  obj.publishers = mapped;
  if (null != bot.developers) {
    const developers = bot.developers;
    let mapped1 = developers.map(closure_4.createFromServer);
  } else {
    mapped1 = [];
  }
  obj.developers = mapped1;
  ({ eula_id: obj.eulaId, slug: obj.slug } = bot);
  let num = bot.flags_new;
  if (num == null) {
    num = bot.flags;
  }
  if (num == null) {
    num = 0;
  }
  obj.flags = fromStringAll.deserialize(num);
  ({ max_participants: obj.maxParticipants, tags: obj.tags, embedded_activity_config: obj.embeddedActivityConfig } = bot);
  let fromEntriesResult;
  if (null != bot.integration_types_config) {
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(bot.integration_types_config);
    fromEntriesResult = Object.fromEntries(entries.map((arg0) => {
      [tmp, obj] = arg0;
      const items = [tmp, ];
      if (obj == null) {
        obj = {};
      }
      items[1] = { oauth2InstallParams: obj.oauth2_install_params };
      return items;
    }));
  }
  obj.integrationTypesConfig = fromEntriesResult;
  ({ terms_of_service_url: obj.termsOfServiceUrl, privacy_policy_url: obj.privacyPolicyUrl, is_discoverable: obj.isDiscoverable, directory_entry: obj.directoryEntry, categories: obj.categories, linked_games } = bot);
  let mapped2;
  if (linked_games != null) {
    mapped2 = linked_games.map((application) => {
      const obj = {};
      const merged = Object.assign(application);
      let fromServer;
      if (null != application.application) {
        fromServer = closure_10.createFromServer(application.application);
      }
      obj.application = fromServer;
      return obj;
    });
  }
  obj.linkedGames = mapped2;
  ({ deeplink_uri: obj.deepLinkUri, application_account_link_benefit_config: obj.applicationAccountLinkBenefitConfig, parent_id: obj.parentId } = bot);
  return new ApplicationRecord(obj);
};
prototype2["getCanonicalGameId"] = function getCanonicalGameId() {
  const self = this;
  if (this.type === ApplicationTypes.GAME) {
    let castResult = DISCORD_EPOCHDefault.cast(self.id);
    const obj = DISCORD_EPOCHDefault;
  } else {
    const linkedGames = self.linkedGames;
    castResult = undefined;
    if (linkedGames != null) {
      const found = linkedGames.find((application) => {
        application = application.application;
        let type;
        if (application != null) {
          type = application.type;
        }
        return type === constants.GAME;
      });
      if (found != null) {
        castResult = found.id;
      }
    }
    if (castResult == null) {
      castResult = null;
    }
  }
  return castResult;
};
prototype2["mergeFromApplicationUpdate"] = function mergeFromApplicationUpdate(id) {
  const self = this;
  id = id.id;
  if (id == null) {
    id = self.id;
  }
  let obj = { id, name: null, icon: null, splash: null, overlay: null, overlayWarn: null, overlayCompatibilityHook: null, overlayMethods: null, hook: null, aliases: null, publishers: null, developers: null, primarySkuId: null, storeListingSkuId: null, thirdPartySkus: null, guildId: null, guild: null, executables: null, hashes: null, description: null, eulaId: null, slug: null, coverImage: null, bot: null, flags: null, maxParticipants: null, tags: null, embeddedActivityConfig: null, type: null, team: null, roleConnectionsVerificationUrl: null, _connectionEntrypointUrl: null, integrationTypesConfig: null, isMonetized: null, storefront_available: null, termsOfServiceUrl: null, privacyPolicyUrl: null, isVerified: null, customInstallUrl: null, installParams: null, isDiscoverable: null, directoryEntry: null, categories: null, linkedGames: null, deepLinkUri: null, applicationAccountLinkBenefitConfig: null, contentClassification: null, parentId: null };
  let name = id.name;
  if (name == null) {
    name = self.name;
  }
  obj[1] = name;
  let icon = id.icon;
  if (icon == null) {
    icon = self.icon;
  }
  obj[2] = icon;
  let splash = id.splash;
  if (splash == null) {
    splash = self.splash;
  }
  obj[3] = splash;
  let overlay = id.overlay;
  if (overlay == null) {
    overlay = self.overlay;
  }
  obj[4] = overlay;
  let overlayWarn = id.overlayWarn;
  if (overlayWarn == null) {
    overlayWarn = self.overlayWarn;
  }
  obj[5] = overlayWarn;
  let overlayCompatibilityHook = id.overlayCompatibilityHook;
  if (overlayCompatibilityHook == null) {
    overlayCompatibilityHook = self.overlayCompatibilityHook;
  }
  obj[6] = overlayCompatibilityHook;
  let overlayMethods = id.overlayMethods;
  if (overlayMethods == null) {
    overlayMethods = self.overlayMethods;
  }
  obj[7] = overlayMethods;
  let hook = id.hook;
  if (hook == null) {
    hook = self.hook;
  }
  obj[8] = hook;
  let aliases = id.aliases;
  if (aliases == null) {
    aliases = self.aliases;
  }
  obj[9] = aliases;
  let publishers = id.publishers;
  if (publishers == null) {
    publishers = self.publishers;
  }
  obj[10] = publishers;
  let developers = id.developers;
  if (developers == null) {
    developers = self.developers;
  }
  obj[11] = developers;
  let primarySkuId = id.primarySkuId;
  if (primarySkuId == null) {
    primarySkuId = self.primarySkuId;
  }
  obj[12] = primarySkuId;
  let storeListingSkuId = id.storeListingSkuId;
  if (storeListingSkuId == null) {
    storeListingSkuId = self.storeListingSkuId;
  }
  obj[13] = storeListingSkuId;
  let thirdPartySkus = id.thirdPartySkus;
  if (thirdPartySkus == null) {
    thirdPartySkus = self.thirdPartySkus;
  }
  obj[14] = thirdPartySkus;
  let guildId = id.guildId;
  if (guildId == null) {
    guildId = self.guildId;
  }
  obj[15] = guildId;
  let guild = id.guild;
  if (guild == null) {
    guild = self.guild;
  }
  obj[16] = guild;
  let executables = id.executables;
  if (executables == null) {
    executables = self.executables;
  }
  obj[17] = executables;
  let hashes = id.hashes;
  if (hashes == null) {
    hashes = self.hashes;
  }
  obj[18] = hashes;
  let description = id.description;
  if (description == null) {
    description = self.description;
  }
  obj[19] = description;
  let eulaId = id.eulaId;
  if (eulaId == null) {
    eulaId = self.eulaId;
  }
  obj[20] = eulaId;
  let slug = id.slug;
  if (slug == null) {
    slug = self.slug;
  }
  obj[21] = slug;
  let coverImage = id.coverImage;
  if (coverImage == null) {
    coverImage = self.coverImage;
  }
  obj[22] = coverImage;
  let bot = id.bot;
  if (bot == null) {
    bot = self.bot;
  }
  obj[23] = bot;
  let flags = id.flags;
  if (flags == null) {
    flags = self.flags;
  }
  obj[24] = flags;
  let maxParticipants = id.maxParticipants;
  if (maxParticipants == null) {
    maxParticipants = self.maxParticipants;
  }
  obj[25] = maxParticipants;
  let tags = id.tags;
  if (tags == null) {
    tags = self.tags;
  }
  obj[26] = tags;
  let embeddedActivityConfig = id.embeddedActivityConfig;
  if (embeddedActivityConfig == null) {
    let tmp2;
    if (null != self.embeddedActivityConfig) {
      obj = {};
      let merged = Object.assign(self.embeddedActivityConfig);
      tmp2 = obj;
    }
    embeddedActivityConfig = tmp2;
  }
  obj[27] = embeddedActivityConfig;
  let type = id.type;
  if (type == null) {
    type = self.type;
  }
  obj[28] = type;
  let team = id.team;
  if (team == null) {
    team = self.team;
  }
  obj[29] = team;
  let roleConnectionsVerificationUrl = id.roleConnectionsVerificationUrl;
  if (roleConnectionsVerificationUrl == null) {
    roleConnectionsVerificationUrl = self.roleConnectionsVerificationUrl;
  }
  obj[30] = roleConnectionsVerificationUrl;
  let _connectionEntrypointUrl = id._connectionEntrypointUrl;
  if (_connectionEntrypointUrl == null) {
    _connectionEntrypointUrl = self._connectionEntrypointUrl;
  }
  obj[31] = _connectionEntrypointUrl;
  let integrationTypesConfig = id.integrationTypesConfig;
  if (integrationTypesConfig == null) {
    integrationTypesConfig = self.integrationTypesConfig;
  }
  obj[32] = integrationTypesConfig;
  let isMonetized = id.isMonetized;
  if (isMonetized == null) {
    isMonetized = self.isMonetized;
  }
  obj[33] = isMonetized;
  let storefront_available = id.storefront_available;
  if (storefront_available == null) {
    storefront_available = self.storefront_available;
  }
  obj[34] = storefront_available;
  let termsOfServiceUrl = id.termsOfServiceUrl;
  if (termsOfServiceUrl == null) {
    termsOfServiceUrl = self.termsOfServiceUrl;
  }
  obj[35] = termsOfServiceUrl;
  let privacyPolicyUrl = id.privacyPolicyUrl;
  if (privacyPolicyUrl == null) {
    privacyPolicyUrl = self.privacyPolicyUrl;
  }
  obj[36] = privacyPolicyUrl;
  let isVerified = id.isVerified;
  if (isVerified == null) {
    isVerified = self.isVerified;
  }
  obj[37] = isVerified;
  let customInstallUrl = id.customInstallUrl;
  if (customInstallUrl == null) {
    customInstallUrl = self.customInstallUrl;
  }
  obj[38] = customInstallUrl;
  let installParams = id.installParams;
  if (installParams == null) {
    installParams = self.installParams;
  }
  obj[39] = installParams;
  let isDiscoverable = id.isDiscoverable;
  if (isDiscoverable == null) {
    isDiscoverable = self.isDiscoverable;
  }
  obj[40] = isDiscoverable;
  let directoryEntry = id.directoryEntry;
  if (directoryEntry == null) {
    directoryEntry = self.directoryEntry;
  }
  obj[41] = directoryEntry;
  let categories = id.categories;
  if (categories == null) {
    categories = self.categories;
  }
  obj[42] = categories;
  let linkedGames = id.linkedGames;
  linkedGames = self.linkedGames;
  let tmp5 = linkedGames;
  if (null != linkedGames) {
    let mapped = linkedGames;
    if (null != linkedGames) {
      mapped = linkedGames.map((application) => {
        linkedGames = application;
        if (null != application.application) {
          return application;
        } else {
          const found = linkedGames.find((id) => id.id === application.id);
          application = undefined;
          if (found != null) {
            application = found.application;
          }
          let tmp4 = application;
          if (null != application) {
            const obj = {};
            const merged = Object.assign(application);
            obj.application = found.application;
            tmp4 = obj;
          }
          return tmp4;
        }
      });
    }
    tmp5 = mapped;
  }
  obj[43] = tmp5;
  let deepLinkUri = id.deepLinkUri;
  if (deepLinkUri == null) {
    deepLinkUri = self.deepLinkUri;
  }
  obj[44] = deepLinkUri;
  let applicationAccountLinkBenefitConfig = id.applicationAccountLinkBenefitConfig;
  if (applicationAccountLinkBenefitConfig == null) {
    applicationAccountLinkBenefitConfig = self.applicationAccountLinkBenefitConfig;
  }
  obj[45] = applicationAccountLinkBenefitConfig;
  let contentClassification = id.contentClassification;
  if (contentClassification == null) {
    contentClassification = self.contentClassification;
  }
  obj[46] = contentClassification;
  let parentId = id.parentId;
  if (parentId == null) {
    parentId = self.parentId;
  }
  obj[47] = parentId;
  return new ApplicationRecord(obj);
};
prototype2["getMaxParticipants"] = function getMaxParticipants() {
  let num = this.maxParticipants;
  if (num == null) {
    num = table[tmp.id];
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype2["supportsIntegrationTypes"] = function supportsIntegrationTypes() {
  const items = [...arguments];
  let integrationTypesConfig;
  integrationTypesConfig = this.integrationTypesConfig;
  return null != integrationTypesConfig && items.every((arg0) => arg0 in integrationTypesConfig);
};
Object.defineProperty(prototype2, "destinationSkuId", {
  get: function destinationSkuId() {
    const self = this;
    return null != this.storeListingSkuId ? self.storeListingSkuId : self.primarySkuId;
  },
  set: undefined
});
Object.defineProperty(prototype2, "supportsOutOfProcessOverlay", {
  get: function supportsOutOfProcessOverlay() {
    return ApplicationRecord.supportsOutOfProcessOverlay(this.overlayMethods);
  },
  set: undefined
});
ApplicationRecord["supportsOutOfProcessOverlay"] = function supportsOutOfProcessOverlay(arg0) {
  const OUT_OF_PROCESS = ApplicationOverlayMethodFlags.ApplicationOverlayMethodFlags.OUT_OF_PROCESS;
  return null != arg0 && (arg0 & OUT_OF_PROCESS) === OUT_OF_PROCESS;
};
const result = require("set").fileFinishedImporting("records/ApplicationRecord.tsx");

export default ApplicationRecord;
export { createExecutable };
export { BasicApplicationRecord };