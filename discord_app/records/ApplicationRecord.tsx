// discord_app/records/ApplicationRecord.tsx
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import BigFlagUtilsAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import AvatarUtilsDefault from "../utils/AvatarUtils.tsx";
import ApplicationOverlayMethodFlags from "../../discord_common/js/shared/shared-constants/ApplicationOverlayMethodFlags.tsx";
import Record from "../lib/Record.tsx";
import CompanyRecord from "CompanyRecord.tsx";
import UserRecord from "UserRecord.tsx";

require = fn;
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
const Constants = fn(1920);
({ END_GAME_APPLICATION_ID, POKER_NIGHT_APPLICATION_ID } = Constants);
const ApplicationTypes = fn(1350).ApplicationTypes;
let closure_7 = { [POKER_NIGHT_APPLICATION_ID]: 7, [END_GAME_APPLICATION_ID]: 12 };
let BasicApplicationRecord;
class BasicApplicationRecord extends tmp2 {
  constructor(arg0) {
    tmp3 = new BasicApplicationRecord(tmp2, new.target, new.target, tmp, global, BasicApplicationRecord);
    ({
      id: tmp3.id,
      name: tmp3.name,
      icon: tmp3.icon,
      splash: tmp3.splash,
      primarySkuId: tmp3.primarySkuId,
      thirdPartySkus,
    } = global);
    if (thirdPartySkus == null) {
      thirdPartySkus = [];
    }
    tmp3.thirdPartySkus = thirdPartySkus;
    ({
      description: tmp3.description,
      bot: tmp3.bot,
      coverImage: tmp3.coverImage,
      type: tmp3.type,
      is_monetized,
    } = global);
    if (is_monetized == null) {
      is_monetized = global.isMonetized;
    }
    tmp3.isMonetized = is_monetized;
    isVerified = global.is_verified;
    if (isVerified == null) {
      isVerified = global.isVerified;
    }
    tmp3.isVerified = isVerified;
    roleConnectionsVerificationUrl = global.role_connections_verification_url;
    if (roleConnectionsVerificationUrl == null) {
      roleConnectionsVerificationUrl = global.roleConnectionsVerificationUrl;
    }
    tmp3.roleConnectionsVerificationUrl = roleConnectionsVerificationUrl;
    parentId = global.parent_id;
    if (parentId == null) {
      parentId = global.parentId;
    }
    tmp3.parentId = parentId;
    _connectionEntrypointUrl = global.connection_entrypoint_url;
    if (_connectionEntrypointUrl == null) {
      _connectionEntrypointUrl = global._connectionEntrypointUrl;
    }
    tmp3._connectionEntrypointUrl = _connectionEntrypointUrl;
    contentClassification = global.content_classification;
    if (contentClassification == null) {
      contentClassification = global.contentClassification;
    }
    tmp3.contentClassification = contentClassification;
    deserializer = closure_2(closure_3[5]);
    num = global.flags;
    if (num == null) {
      num = 0;
    }
    tmp3.flags = deserializer.deserialize(num);
    return tmp3;
  }
}
const prototype = BasicApplicationRecord.prototype;
BasicApplicationRecord["createFromServer"] = function createFromServer(bot) {
  const obj = {};
  const merged = Object.assign(bot);
  ({ cover_image: obj.coverImage, primary_sku_id: obj.primarySkuId } = bot);
  let tmp3 = null;
  if (null != bot.bot) {
    tmp3 = new UserRecord(bot.bot);
  }
  obj.bot = tmp3;
  ({
    third_party_skus: obj.thirdPartySkus,
    role_connections_verification_url: obj.roleConnectionsVerificationUrl,
    parent_id: obj.parentId,
    connection_entrypoint_url: obj._connectionEntrypointUrl,
    content_classification: obj.contentClassification,
  } = bot);
  const deserializer = BigFlagUtilsAll;
  let num = bot.flags_new;
  if (num == null) {
    num = bot.flags;
  }
  if (num == null) {
    num = 0;
  }
  obj.flags = deserializer.deserialize(num);
  return new BasicApplicationRecord(obj);
};
Object.defineProperty(prototype, "connectionEntrypointUrl", {
  get: function connectionEntrypointUrl() {
    const obj = require("UserApplicationIdentityConstants")
      .APPLICATION_IDENTITY_CONNECTIONS_WITH_OVERRIDE_ENTRYPOINT_URLS[this.id];
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
  set: undefined,
});
prototype["getIconURL"] = function getIconURL(size, format) {
  let gameAssetURL = null;
  if (null != this.icon) {
    const obj = { id: null, hash: null, size: null, format: null };
    ({ id: obj2.id, icon: obj2.hash } = this);
    obj.size = size;
    obj.format = format;
    gameAssetURL = obj.getGameAssetURL(obj);
  }
  return gameAssetURL;
};
prototype["getIconSource"] = function getIconSource(size, format) {
  let gameAssetSource = null;
  if (null != this.icon) {
    const obj = { id: null, hash: null, size: null, format: null };
    ({ id: obj2.id, icon: obj2.hash } = this);
    obj.size = size;
    obj.format = format;
    gameAssetSource = obj.getGameAssetSource(obj);
  }
  return gameAssetSource;
};
prototype["getSplashURL"] = function getSplashURL(size, format) {
  let gameAssetURL = null;
  if (null != this.splash) {
    const obj = { id: null, hash: null, size: null, keepAspectRatio: true, format: null };
    ({ id: obj2.id, splash: obj2.hash } = this);
    obj.size = size;
    obj.format = format;
    gameAssetURL = obj.getGameAssetURL(obj);
  }
  return gameAssetURL;
};
prototype["getCoverImageURL"] = function getCoverImageURL(size) {
  let applicationIconURL = null;
  if (null != this.coverImage) {
    const obj = { id: null, icon: null, size: null, keepAspectRatio: true };
    ({ id: obj2.id, coverImage: obj2.icon } = this);
    obj.size = size;
    applicationIconURL = obj.getApplicationIconURL(obj);
  }
  return applicationIconURL;
};
let ApplicationRecord;
class ApplicationRecord extends BasicApplicationRecord {
  constructor(arg0) {
    tmp2 = new ApplicationRecord(global, tmp);
    flag = global.overlay;
    if (flag == null) {
      flag = false;
    }
    tmp2.overlay = flag;
    flag2 = global.overlayWarn;
    if (flag2 == null) {
      flag2 = false;
    }
    tmp2.overlayWarn = flag2;
    flag3 = global.overlayCompatibilityHook;
    if (flag3 == null) {
      flag3 = false;
    }
    tmp2.overlayCompatibilityHook = flag3;
    DEFAULT = global.overlayMethods;
    if (DEFAULT == null) {
      tmp3 = closure_0;
      tmp4 = closure_3;
      DEFAULT = closure_0(closure_3[8]).ApplicationOverlayMethodFlags.DEFAULT;
    }
    tmp2.overlayMethods = DEFAULT;
    flag4 = global.hook;
    if (flag4 == null) {
      flag4 = true;
    }
    tmp2.hook = flag4;
    aliases = global.aliases;
    if (aliases == null) {
      aliases = [];
    }
    tmp2.aliases = aliases;
    publishers = global.publishers;
    if (publishers == null) {
      publishers = [];
    }
    tmp2.publishers = publishers;
    developers = global.developers;
    if (developers == null) {
      developers = [];
    }
    tmp2.developers = developers;
    ({ storeListingSkuId: tmp2.storeListingSkuId, guildId: tmp2.guildId, guild: tmp2.guild, executables } = global);
    if (executables == null) {
      executables = [];
    }
    tmp2.executables = executables.map(createExecutable);
    hashes = global.hashes;
    if (hashes == null) {
      hashes = [];
    }
    tmp2.hashes = hashes;
    ({ eulaId: tmp2.eulaId, slug: tmp2.slug, tags } = global);
    if (tags == null) {
      tags = [];
    }
    tmp2.tags = tags;
    ({ maxParticipants: tmp2.maxParticipants, embedded_activity_config } = global);
    if (embedded_activity_config == null) {
      embedded_activity_config = global.embeddedActivityConfig;
    }
    tmp2.embeddedActivityConfig = embedded_activity_config;
    ({
      team: tmp2.team,
      integrationTypesConfig: tmp2.integrationTypesConfig,
      storefront_available: tmp2.storefront_available,
      termsOfServiceUrl: tmp2.termsOfServiceUrl,
      privacyPolicyUrl: tmp2.privacyPolicyUrl,
      is_discoverable,
    } = global);
    if (is_discoverable == null) {
      is_discoverable = global.isDiscoverable;
    }
    tmp2.isDiscoverable = is_discoverable;
    customInstallUrl = global.custom_install_url;
    if (customInstallUrl == null) {
      customInstallUrl = global.customInstallUrl;
    }
    tmp2.customInstallUrl = customInstallUrl;
    installParams = global.install_params;
    if (installParams == null) {
      installParams = global.installParams;
    }
    tmp2.installParams = installParams;
    directoryEntry = global.directory_entry;
    if (directoryEntry == null) {
      directoryEntry = global.directoryEntry;
    }
    tmp2.directoryEntry = directoryEntry;
    ({ categories: tmp2.categories, linked_games } = global);
    mapped = undefined;
    if (linked_games != null) {
      mapped = linked_games.map((application) => {
        const obj = {};
        const merged = Object.assign(application);
        let fromServer;
        if (null != application.application) {
          fromServer = ApplicationRecord.createFromServer(application.application);
        }
        obj.application = fromServer;
        return obj;
      });
    }
    if (mapped == null) {
      mapped = global.linkedGames;
    }
    tmp2.linkedGames = mapped;
    deeplink_uri = global.deepLinkUri;
    if (deeplink_uri == null) {
      deeplink_uri = global.deeplink_uri;
    }
    tmp2.deepLinkUri = deeplink_uri;
    application_account_link_benefit_config = global.applicationAccountLinkBenefitConfig;
    if (application_account_link_benefit_config == null) {
      application_account_link_benefit_config = global.application_account_link_benefit_config;
    }
    tmp2.applicationAccountLinkBenefitConfig = application_account_link_benefit_config;
    vibegrations_project_id = global.vibegrationsProjectId;
    if (vibegrations_project_id == null) {
      vibegrations_project_id = global.vibegrations_project_id;
    }
    tmp2.vibegrationsProjectId = vibegrations_project_id;
    parent_id = global.parentId;
    if (parent_id == null) {
      parent_id = global.parent_id;
    }
    tmp2.parentId = parent_id;
    return tmp2;
  }
}
const prototype2 = ApplicationRecord.prototype;
ApplicationRecord["createFromServer"] = function createFromServer(bot) {
  let obj = {};
  let merged = Object.assign(bot);
  ({ cover_image: obj.coverImage, primary_sku_id: obj.primarySkuId } = bot);
  let tmp3 = null;
  if (null != bot.bot) {
    tmp3 = new UserRecord(bot.bot);
  }
  obj.bot = tmp3;
  ({
    third_party_skus: obj.thirdPartySkus,
    role_connections_verification_url: obj.roleConnectionsVerificationUrl,
    overlay_warn: obj.overlayWarn,
    overlay_compatibility_hook: obj.overlayCompatibilityHook,
    overlay_methods,
  } = bot);
  if (overlay_methods == null) {
    overlay_methods = ApplicationOverlayMethodFlags.ApplicationOverlayMethodFlags.DEFAULT;
  }
  obj.overlayMethods = overlay_methods;
  ({ hook: obj.hook, store_listing_sku_id: obj.storeListingSkuId, guild_id: obj.guildId, guild: obj.guild } = bot);
  if (null != bot.publishers) {
    const publishers = bot.publishers;
    let mapped = publishers.map(CompanyRecord.createFromServer);
  } else {
    mapped = [];
  }
  obj.publishers = mapped;
  if (null != bot.developers) {
    const developers = bot.developers;
    let mapped1 = developers.map(CompanyRecord.createFromServer);
  } else {
    mapped1 = [];
  }
  obj.developers = mapped1;
  ({ eula_id: obj.eulaId, slug: obj.slug } = bot);
  const deserializer = BigFlagUtilsAll;
  let num = bot.flags_new;
  if (num == null) {
    num = bot.flags;
  }
  if (num == null) {
    num = 0;
  }
  obj.flags = deserializer.deserialize(num);
  ({
    max_participants: obj.maxParticipants,
    tags: obj.tags,
    embedded_activity_config: obj.embeddedActivityConfig,
  } = bot);
  let fromEntriesResult;
  if (null != bot.integration_types_config) {
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(bot.integration_types_config);
    fromEntriesResult = Object.fromEntries(
      entries.map((item) => {
        [tmp, obj] = item;
        const items = [tmp];
        if (obj == null) {
          obj = {};
        }
        items[1] = { oauth2InstallParams: obj.oauth2_install_params };
        return items;
      }),
    );
  }
  obj.integrationTypesConfig = fromEntriesResult;
  ({
    terms_of_service_url: obj.termsOfServiceUrl,
    privacy_policy_url: obj.privacyPolicyUrl,
    is_discoverable: obj.isDiscoverable,
    directory_entry: obj.directoryEntry,
    categories: obj.categories,
    linked_games,
  } = bot);
  let mapped2;
  if (linked_games != null) {
    mapped2 = linked_games.map((application) => {
      const obj = {};
      const merged = Object.assign(application);
      let fromServer;
      if (null != application.application) {
        fromServer = ApplicationRecord.createFromServer(application.application);
      }
      obj.application = fromServer;
      return obj;
    });
  }
  obj.linkedGames = mapped2;
  ({
    deeplink_uri: obj.deepLinkUri,
    application_account_link_benefit_config: obj.applicationAccountLinkBenefitConfig,
    vibegrations_project_id: obj.vibegrationsProjectId,
    parent_id: obj.parentId,
  } = bot);
  return new ApplicationRecord(obj);
};
prototype2["getCanonicalGameId"] = function getCanonicalGameId() {
  const self = this;
  if (this.type === ApplicationTypes.GAME) {
    let castResult = SnowflakeUtilsDefault.cast(self.id);
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
  let obj = {
    id,
    name: null,
    icon: null,
    splash: null,
    overlay: null,
    overlayWarn: null,
    overlayCompatibilityHook: null,
    overlayMethods: null,
    hook: null,
    aliases: null,
    publishers: null,
    developers: null,
    primarySkuId: null,
    storeListingSkuId: null,
    thirdPartySkus: null,
    guildId: null,
    guild: null,
    executables: null,
    hashes: null,
    description: null,
    eulaId: null,
    slug: null,
    coverImage: null,
    bot: null,
    flags: null,
    maxParticipants: null,
    tags: null,
    embeddedActivityConfig: null,
    type: null,
    team: null,
    roleConnectionsVerificationUrl: null,
    _connectionEntrypointUrl: null,
    integrationTypesConfig: null,
    isMonetized: null,
    storefront_available: null,
    termsOfServiceUrl: null,
    privacyPolicyUrl: null,
    isVerified: null,
    customInstallUrl: null,
    installParams: null,
    isDiscoverable: null,
    directoryEntry: null,
    categories: null,
    linkedGames: null,
    deepLinkUri: null,
    applicationAccountLinkBenefitConfig: null,
    vibegrationsProjectId: null,
    contentClassification: null,
    parentId: null,
  };
  let name = id.name;
  if (name == null) {
    name = self.name;
  }
  obj.name = name;
  let icon = id.icon;
  if (icon == null) {
    icon = self.icon;
  }
  obj.icon = icon;
  let splash = id.splash;
  if (splash == null) {
    splash = self.splash;
  }
  obj.splash = splash;
  let overlay = id.overlay;
  if (overlay == null) {
    overlay = self.overlay;
  }
  obj.overlay = overlay;
  let overlayWarn = id.overlayWarn;
  if (overlayWarn == null) {
    overlayWarn = self.overlayWarn;
  }
  obj.overlayWarn = overlayWarn;
  let overlayCompatibilityHook = id.overlayCompatibilityHook;
  if (overlayCompatibilityHook == null) {
    overlayCompatibilityHook = self.overlayCompatibilityHook;
  }
  obj.overlayCompatibilityHook = overlayCompatibilityHook;
  let overlayMethods = id.overlayMethods;
  if (overlayMethods == null) {
    overlayMethods = self.overlayMethods;
  }
  obj.overlayMethods = overlayMethods;
  let hook = id.hook;
  if (hook == null) {
    hook = self.hook;
  }
  obj.hook = hook;
  let aliases = id.aliases;
  if (aliases == null) {
    aliases = self.aliases;
  }
  obj.aliases = aliases;
  let publishers = id.publishers;
  if (publishers == null) {
    publishers = self.publishers;
  }
  obj.publishers = publishers;
  let developers = id.developers;
  if (developers == null) {
    developers = self.developers;
  }
  obj.developers = developers;
  let primarySkuId = id.primarySkuId;
  if (primarySkuId == null) {
    primarySkuId = self.primarySkuId;
  }
  obj.primarySkuId = primarySkuId;
  let storeListingSkuId = id.storeListingSkuId;
  if (storeListingSkuId == null) {
    storeListingSkuId = self.storeListingSkuId;
  }
  obj.storeListingSkuId = storeListingSkuId;
  let thirdPartySkus = id.thirdPartySkus;
  if (thirdPartySkus == null) {
    thirdPartySkus = self.thirdPartySkus;
  }
  obj.thirdPartySkus = thirdPartySkus;
  let guildId = id.guildId;
  if (guildId == null) {
    guildId = self.guildId;
  }
  obj.guildId = guildId;
  let guild = id.guild;
  if (guild == null) {
    guild = self.guild;
  }
  obj.guild = guild;
  let executables = id.executables;
  if (executables == null) {
    executables = self.executables;
  }
  obj.executables = executables;
  let hashes = id.hashes;
  if (hashes == null) {
    hashes = self.hashes;
  }
  obj.hashes = hashes;
  let description = id.description;
  if (description == null) {
    description = self.description;
  }
  obj.description = description;
  let eulaId = id.eulaId;
  if (eulaId == null) {
    eulaId = self.eulaId;
  }
  obj.eulaId = eulaId;
  let slug = id.slug;
  if (slug == null) {
    slug = self.slug;
  }
  obj.slug = slug;
  let coverImage = id.coverImage;
  if (coverImage == null) {
    coverImage = self.coverImage;
  }
  obj.coverImage = coverImage;
  let bot = id.bot;
  if (bot == null) {
    bot = self.bot;
  }
  obj.bot = bot;
  let flags = id.flags;
  if (flags == null) {
    flags = self.flags;
  }
  obj.flags = flags;
  let maxParticipants = id.maxParticipants;
  if (maxParticipants == null) {
    maxParticipants = self.maxParticipants;
  }
  obj.maxParticipants = maxParticipants;
  let tags = id.tags;
  if (tags == null) {
    tags = self.tags;
  }
  obj.tags = tags;
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
  obj.embeddedActivityConfig = embeddedActivityConfig;
  let type = id.type;
  if (type == null) {
    type = self.type;
  }
  obj.type = type;
  let team = id.team;
  if (team == null) {
    team = self.team;
  }
  obj.team = team;
  let roleConnectionsVerificationUrl = id.roleConnectionsVerificationUrl;
  if (roleConnectionsVerificationUrl == null) {
    roleConnectionsVerificationUrl = self.roleConnectionsVerificationUrl;
  }
  obj.roleConnectionsVerificationUrl = roleConnectionsVerificationUrl;
  let _connectionEntrypointUrl = id._connectionEntrypointUrl;
  if (_connectionEntrypointUrl == null) {
    _connectionEntrypointUrl = self._connectionEntrypointUrl;
  }
  obj._connectionEntrypointUrl = _connectionEntrypointUrl;
  let integrationTypesConfig = id.integrationTypesConfig;
  if (integrationTypesConfig == null) {
    integrationTypesConfig = self.integrationTypesConfig;
  }
  obj.integrationTypesConfig = integrationTypesConfig;
  let isMonetized = id.isMonetized;
  if (isMonetized == null) {
    isMonetized = self.isMonetized;
  }
  obj.isMonetized = isMonetized;
  let storefront_available = id.storefront_available;
  if (storefront_available == null) {
    storefront_available = self.storefront_available;
  }
  obj.storefront_available = storefront_available;
  let termsOfServiceUrl = id.termsOfServiceUrl;
  if (termsOfServiceUrl == null) {
    termsOfServiceUrl = self.termsOfServiceUrl;
  }
  obj.termsOfServiceUrl = termsOfServiceUrl;
  let privacyPolicyUrl = id.privacyPolicyUrl;
  if (privacyPolicyUrl == null) {
    privacyPolicyUrl = self.privacyPolicyUrl;
  }
  obj.privacyPolicyUrl = privacyPolicyUrl;
  let isVerified = id.isVerified;
  if (isVerified == null) {
    isVerified = self.isVerified;
  }
  obj.isVerified = isVerified;
  let customInstallUrl = id.customInstallUrl;
  if (customInstallUrl == null) {
    customInstallUrl = self.customInstallUrl;
  }
  obj.customInstallUrl = customInstallUrl;
  let installParams = id.installParams;
  if (installParams == null) {
    installParams = self.installParams;
  }
  obj.installParams = installParams;
  let isDiscoverable = id.isDiscoverable;
  if (isDiscoverable == null) {
    isDiscoverable = self.isDiscoverable;
  }
  obj.isDiscoverable = isDiscoverable;
  let directoryEntry = id.directoryEntry;
  if (directoryEntry == null) {
    directoryEntry = self.directoryEntry;
  }
  obj.directoryEntry = directoryEntry;
  let categories = id.categories;
  if (categories == null) {
    categories = self.categories;
  }
  obj.categories = categories;
  const linkedGames = self.linkedGames;
  let tmp5 = linkedGames;
  if (null != linkedGames) {
    let mapped = linkedGames;
    if (null != linkedGames) {
      mapped = linkedGames.map((application) => {
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
  obj.linkedGames = tmp5;
  let deepLinkUri = id.deepLinkUri;
  if (deepLinkUri == null) {
    deepLinkUri = self.deepLinkUri;
  }
  obj.deepLinkUri = deepLinkUri;
  let applicationAccountLinkBenefitConfig = id.applicationAccountLinkBenefitConfig;
  if (applicationAccountLinkBenefitConfig == null) {
    applicationAccountLinkBenefitConfig = self.applicationAccountLinkBenefitConfig;
  }
  obj.applicationAccountLinkBenefitConfig = applicationAccountLinkBenefitConfig;
  let vibegrationsProjectId = id.vibegrationsProjectId;
  if (vibegrationsProjectId == null) {
    vibegrationsProjectId = self.vibegrationsProjectId;
  }
  obj.vibegrationsProjectId = vibegrationsProjectId;
  let contentClassification = id.contentClassification;
  if (contentClassification == null) {
    contentClassification = self.contentClassification;
  }
  obj.contentClassification = contentClassification;
  let parentId = id.parentId;
  if (parentId == null) {
    parentId = self.parentId;
  }
  obj.parentId = parentId;
  return new ApplicationRecord(obj);
};
prototype2["getMaxParticipants"] = function getMaxParticipants() {
  let num = this.maxParticipants;
  if (num == null) {
    num = closure_7[tmp.id];
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype2["supportsIntegrationTypes"] = function supportsIntegrationTypes() {
  const items = [...arguments];
  const integrationTypesConfig = this.integrationTypesConfig;
  return null != integrationTypesConfig && items.every((item) => item in integrationTypesConfig);
};
Object.defineProperty(prototype2, "destinationSkuId", {
  get: function destinationSkuId() {
    const self = this;
    return null != this.storeListingSkuId ? self.storeListingSkuId : self.primarySkuId;
  },
  set: undefined,
});
Object.defineProperty(prototype2, "supportsOutOfProcessOverlay", {
  get: function supportsOutOfProcessOverlay() {
    return ApplicationRecord.supportsOutOfProcessOverlay(this.overlayMethods);
  },
  set: undefined,
});
ApplicationRecord["supportsOutOfProcessOverlay"] = function supportsOutOfProcessOverlay(arg0) {
  const OUT_OF_PROCESS = ApplicationOverlayMethodFlags.ApplicationOverlayMethodFlags.OUT_OF_PROCESS;
  return null != arg0 && (arg0 & OUT_OF_PROCESS) === OUT_OF_PROCESS;
};
const size = fn(2);
const result = size.fileFinishedImporting("records/ApplicationRecord.tsx");

export default ApplicationRecord;
export { createExecutable };
export { BasicApplicationRecord };
