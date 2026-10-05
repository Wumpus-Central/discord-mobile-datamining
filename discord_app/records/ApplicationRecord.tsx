// === Module 2009: ApplicationRecord ===

// Module 2009 (ApplicationRecord)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import ApplicationConstants from "ApplicationConstants" /* 1360 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import ApplicationOverlayMethodFlags from "ApplicationOverlayMethodFlags" /* 2015 */;
import Record from "Record" /* 1392 */;
import CompanyRecord from "CompanyRecord" /* 2010 */;
import UserRecord from "UserRecord" /* 1391 */;
import Constants from "Constants" /* 2011 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let application;

let END_GAME_APPLICATION_ID;
let POKER_NIGHT_APPLICATION_ID;
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
({ END_GAME_APPLICATION_ID, POKER_NIGHT_APPLICATION_ID } = Constants);
const ApplicationTypes = ApplicationConstants.ApplicationTypes;
const metroImportDefault = { [POKER_NIGHT_APPLICATION_ID]: 7, [END_GAME_APPLICATION_ID]: 12 };
class BasicApplicationRecord extends Record {
  constructor(isMonetized) {
    let is_monetized;
    let thirdPartySkus;
    const tmp3 = new BasicApplicationRecord(tmp2, new.target, this, tmp, isMonetized, BasicApplicationRecord);
    ({ id: tmp3.id, name: tmp3.name, icon: tmp3.icon, splash: tmp3.splash, primarySkuId: tmp3.primarySkuId, thirdPartySkus } = isMonetized);
    if (thirdPartySkus == null) {
      thirdPartySkus = [];
    }
    tmp3.thirdPartySkus = thirdPartySkus;
    ({ description: tmp3.description, bot: tmp3.bot, coverImage: tmp3.coverImage, type: tmp3.type, is_monetized } = isMonetized);
    if (is_monetized == null) {
      is_monetized = isMonetized.isMonetized;
    }
    tmp3.isMonetized = is_monetized;
    let isVerified = isMonetized.is_verified;
    if (isVerified == null) {
      isVerified = isMonetized.isVerified;
    }
    tmp3.isVerified = isVerified;
    let roleConnectionsVerificationUrl = isMonetized.role_connections_verification_url;
    if (roleConnectionsVerificationUrl == null) {
      roleConnectionsVerificationUrl = isMonetized.roleConnectionsVerificationUrl;
    }
    tmp3.roleConnectionsVerificationUrl = roleConnectionsVerificationUrl;
    let parentId = isMonetized.parent_id;
    if (parentId == null) {
      parentId = isMonetized.parentId;
    }
    tmp3.parentId = parentId;
    let _connectionEntrypointUrl = isMonetized.connection_entrypoint_url;
    if (_connectionEntrypointUrl == null) {
      _connectionEntrypointUrl = isMonetized._connectionEntrypointUrl;
    }
    tmp3._connectionEntrypointUrl = _connectionEntrypointUrl;
    let contentClassification = isMonetized.content_classification;
    if (contentClassification == null) {
      contentClassification = isMonetized.contentClassification;
    }
    tmp3.contentClassification = contentClassification;
    let num = isMonetized.flags;
    const deserialize = BigFlagUtilsAll.deserialize;
    BigFlagUtilsAll;
    if (num == null) {
      num = 0;
    }
    tmp3.flags = deserialize(num);
    return tmp3;
  }
  static createFromServer(bot) {
    let deserialize;
    let num;
    let tmp3;
    const obj = { bot: tmp3, flags: deserialize(num) };
    const merged = Object.assign(bot);
    ({ cover_image: obj.coverImage, primary_sku_id: obj.primarySkuId } = bot);
    tmp3 = null;
    if (null != bot.bot) {
      const self = this;
      const self2 = this;
      tmp3 = new UserRecord(bot.bot);
    }
    ({ third_party_skus: obj.thirdPartySkus, role_connections_verification_url: obj.roleConnectionsVerificationUrl, parent_id: obj.parentId, connection_entrypoint_url: obj._connectionEntrypointUrl, content_classification: obj.contentClassification } = bot);
    num = bot.flags_new;
    deserialize = BigFlagUtilsAll.deserialize;
    BigFlagUtilsAll;
    if (num == null) {
      num = bot.flags;
    }
    if (num == null) {
      num = 0;
    }
    return new BasicApplicationRecord(obj);
  }
  getIconURL(size, format) {
    let gameAssetURL = null;
    if (null != this.icon) {
      const obj3 = { id: null, hash: null, size, format };
      ({ id: obj2.id, icon: obj2.hash } = this);
      const obj = AvatarUtilsDefault;
      gameAssetURL = obj.getGameAssetURL(obj3);
    }
    return gameAssetURL;
  }
  getIconSource(size, format) {
    let gameAssetSource = null;
    if (null != this.icon) {
      const obj3 = { id: null, hash: null, size, format };
      ({ id: obj2.id, icon: obj2.hash } = this);
      const obj = AvatarUtilsDefault;
      gameAssetSource = obj.getGameAssetSource(obj3);
    }
    return gameAssetSource;
  }
  getSplashURL(size, format) {
    let gameAssetURL = null;
    if (null != this.splash) {
      const obj3 = { id: null, hash: null, size, keepAspectRatio: true, format };
      ({ id: obj2.id, splash: obj2.hash } = this);
      const obj = AvatarUtilsDefault;
      gameAssetURL = obj.getGameAssetURL(obj3);
    }
    return gameAssetURL;
  }
  getCoverImageURL(size) {
    let applicationIconURL = null;
    if (null != this.coverImage) {
      const obj3 = { id: null, icon: null, size, keepAspectRatio: true };
      ({ id: obj2.id, coverImage: obj2.icon } = this);
      const obj = AvatarUtilsDefault;
      applicationIconURL = obj.getApplicationIconURL(obj3);
    }
    return applicationIconURL;
  }
}
Object.defineProperty(BasicApplicationRecord.prototype, "connectionEntrypointUrl", {
  get: function connectionEntrypointUrl() {
    const obj = require("UserApplicationIdentityConstants").APPLICATION_IDENTITY_CONNECTIONS_WITH_OVERRIDE_ENTRYPOINT_URLS[this.id];
    let prop;
    if (obj != null) {
      prop = obj.connectionEntrypointUrlOverride;
    }
    if (null != prop) {
      let _connectionEntrypointUrl;
      if (obj.getMigrationExperimentEnabled("ApplicationRecord")) {
        _connectionEntrypointUrl = obj.connectionEntrypointUrlOverride;
      }
      return _connectionEntrypointUrl;
    }
    _connectionEntrypointUrl = this._connectionEntrypointUrl;
  },
  set: undefined
});
class ApplicationRecord extends BasicApplicationRecord {
  constructor(nextResult) {
    let embedded_activity_config;
    let executables;
    let is_discoverable;
    let linked_games;
    let tags;
    const tmp2 = new ApplicationRecord(nextResult, tmp);
    let flag = nextResult.overlay;
    if (flag == null) {
      flag = false;
    }
    tmp2.overlay = flag;
    let flag2 = nextResult.overlayWarn;
    if (flag2 == null) {
      flag2 = false;
    }
    tmp2.overlayWarn = flag2;
    let flag3 = nextResult.overlayCompatibilityHook;
    if (flag3 == null) {
      flag3 = false;
    }
    tmp2.overlayCompatibilityHook = flag3;
    let DEFAULT = nextResult.overlayMethods;
    if (DEFAULT == null) {
      DEFAULT = ApplicationOverlayMethodFlags.ApplicationOverlayMethodFlags.DEFAULT;
    }
    tmp2.overlayMethods = DEFAULT;
    let flag4 = nextResult.hook;
    if (flag4 == null) {
      flag4 = true;
    }
    tmp2.hook = flag4;
    let aliases = nextResult.aliases;
    if (aliases == null) {
      aliases = [];
    }
    tmp2.aliases = aliases;
    let publishers = nextResult.publishers;
    if (publishers == null) {
      publishers = [];
    }
    tmp2.publishers = publishers;
    let developers = nextResult.developers;
    if (developers == null) {
      developers = [];
    }
    tmp2.developers = developers;
    ({ storeListingSkuId: tmp2.storeListingSkuId, guildId: tmp2.guildId, guild: tmp2.guild, executables } = nextResult);
    if (executables == null) {
      executables = [];
    }
    tmp2.executables = executables.map(createExecutable);
    let hashes = nextResult.hashes;
    if (hashes == null) {
      hashes = [];
    }
    tmp2.hashes = hashes;
    ({ eulaId: tmp2.eulaId, slug: tmp2.slug, tags } = nextResult);
    if (tags == null) {
      tags = [];
    }
    tmp2.tags = tags;
    ({ maxParticipants: tmp2.maxParticipants, embedded_activity_config } = nextResult);
    if (embedded_activity_config == null) {
      embedded_activity_config = nextResult.embeddedActivityConfig;
    }
    tmp2.embeddedActivityConfig = embedded_activity_config;
    let embeddedSurfaces = nextResult.embedded_surfaces;
    if (embeddedSurfaces == null) {
      embeddedSurfaces = nextResult.embeddedSurfaces;
    }
    tmp2.embeddedSurfaces = embeddedSurfaces;
    ({ team: tmp2.team, integrationTypesConfig: tmp2.integrationTypesConfig, storefront_available: tmp2.storefront_available, termsOfServiceUrl: tmp2.termsOfServiceUrl, privacyPolicyUrl: tmp2.privacyPolicyUrl, is_discoverable } = nextResult);
    if (is_discoverable == null) {
      is_discoverable = nextResult.isDiscoverable;
    }
    tmp2.isDiscoverable = is_discoverable;
    let customInstallUrl = nextResult.custom_install_url;
    if (customInstallUrl == null) {
      customInstallUrl = nextResult.customInstallUrl;
    }
    tmp2.customInstallUrl = customInstallUrl;
    let installParams = nextResult.install_params;
    if (installParams == null) {
      installParams = nextResult.installParams;
    }
    tmp2.installParams = installParams;
    let directoryEntry = nextResult.directory_entry;
    if (directoryEntry == null) {
      directoryEntry = nextResult.directoryEntry;
    }
    tmp2.directoryEntry = directoryEntry;
    ({ categories: tmp2.categories, linked_games } = nextResult);
    let mapped;
    if (linked_games != null) {
      mapped = linked_games.map((application) => {
        let fromServer;
        const obj = { application: fromServer };
        const merged = Object.assign(application);
        fromServer = undefined;
        if (null != application.application) {
          fromServer = ApplicationRecord.createFromServer(application.application);
        }
        return obj;
      });
    }
    if (mapped == null) {
      mapped = nextResult.linkedGames;
    }
    tmp2.linkedGames = mapped;
    let deeplink_uri = nextResult.deepLinkUri;
    if (deeplink_uri == null) {
      deeplink_uri = nextResult.deeplink_uri;
    }
    tmp2.deepLinkUri = deeplink_uri;
    let application_account_link_benefit_config = nextResult.applicationAccountLinkBenefitConfig;
    if (application_account_link_benefit_config == null) {
      application_account_link_benefit_config = nextResult.application_account_link_benefit_config;
    }
    tmp2.applicationAccountLinkBenefitConfig = application_account_link_benefit_config;
    let vibegrations_project_id = nextResult.vibegrationsProjectId;
    if (vibegrations_project_id == null) {
      vibegrations_project_id = nextResult.vibegrations_project_id;
    }
    tmp2.vibegrationsProjectId = vibegrations_project_id;
    let parent_id = nextResult.parentId;
    if (parent_id == null) {
      parent_id = nextResult.parent_id;
    }
    tmp2.parentId = parent_id;
    return tmp2;
  }
  static createFromServer(bot) {
    let deserialize;
    let fromEntriesResult;
    let linked_games;
    let mapped;
    let mapped1;
    let mapped2;
    let num;
    let overlay_methods;
    let tmp3;
    let obj = { bot: tmp3, overlayMethods: overlay_methods, publishers: mapped, developers: mapped1, flags: deserialize(num), integrationTypesConfig: fromEntriesResult, linkedGames: mapped2 };
    let merged = Object.assign(bot);
    ({ cover_image: obj.coverImage, primary_sku_id: obj.primarySkuId } = bot);
    tmp3 = null;
    if (null != bot.bot) {
      const self = this;
      const self2 = this;
      tmp3 = new UserRecord(bot.bot);
    }
    ({ third_party_skus: obj.thirdPartySkus, role_connections_verification_url: obj.roleConnectionsVerificationUrl, overlay_warn: obj.overlayWarn, overlay_compatibility_hook: obj.overlayCompatibilityHook, overlay_methods } = bot);
    if (overlay_methods == null) {
      overlay_methods = ApplicationOverlayMethodFlags.ApplicationOverlayMethodFlags.DEFAULT;
    }
    ({ hook: obj.hook, store_listing_sku_id: obj.storeListingSkuId, guild_id: obj.guildId, guild: obj.guild } = bot);
    if (null != bot.publishers) {
      const publishers = bot.publishers;
      mapped = publishers.map(CompanyRecord.createFromServer);
    } else {
      mapped = [];
    }
    if (null != bot.developers) {
      const developers = bot.developers;
      mapped1 = developers.map(CompanyRecord.createFromServer);
    } else {
      mapped1 = [];
    }
    ({ eula_id: obj.eulaId, slug: obj.slug } = bot);
    num = bot.flags_new;
    deserialize = BigFlagUtilsAll.deserialize;
    BigFlagUtilsAll;
    if (num == null) {
      num = bot.flags;
    }
    if (num == null) {
      num = 0;
    }
    ({ max_participants: obj.maxParticipants, tags: obj.tags, embedded_activity_config: obj.embeddedActivityConfig, embedded_surfaces: obj.embeddedSurfaces } = bot);
    fromEntriesResult = undefined;
    if (null != bot.integration_types_config) {
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(bot.integration_types_config);
      fromEntriesResult = fromEntries(entries.map((item) => {
        let obj;
        let tmp;
        [tmp, obj] = item;
        const items = [tmp, ];
        if (obj == null) {
          obj = {};
        }
        items[1] = { oauth2InstallParams: obj.oauth2_install_params };
        return items;
      }));
    }
    ({ terms_of_service_url: obj.termsOfServiceUrl, privacy_policy_url: obj.privacyPolicyUrl, is_discoverable: obj.isDiscoverable, directory_entry: obj.directoryEntry, categories: obj.categories, linked_games } = bot);
    mapped2 = undefined;
    if (linked_games != null) {
      mapped2 = linked_games.map((application) => {
        let fromServer;
        const obj = { application: fromServer };
        const merged = Object.assign(application);
        fromServer = undefined;
        if (null != application.application) {
          fromServer = ApplicationRecord.createFromServer(application.application);
        }
        return obj;
      });
    }
    ({ deeplink_uri: obj.deepLinkUri, application_account_link_benefit_config: obj.applicationAccountLinkBenefitConfig, vibegrations_project_id: obj.vibegrationsProjectId, parent_id: obj.parentId } = bot);
    return new ApplicationRecord(obj);
  }
  getCanonicalGameId() {
    let castResult;
    const self = this;
    if (this.type === ApplicationTypes.GAME) {
      const obj = SnowflakeUtilsDefault;
      castResult = obj.cast(self.id);
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
  }
  mergeFromApplicationUpdate(id) {
    let _connectionEntrypointUrl;
    let aliases;
    let applicationAccountLinkBenefitConfig;
    let bot;
    let categories;
    let contentClassification;
    let coverImage;
    let customInstallUrl;
    let deepLinkUri;
    let description;
    let developers;
    let directoryEntry;
    let embeddedActivityConfig;
    let embeddedSurfaces;
    let eulaId;
    let executables;
    let flags;
    let guild;
    let guildId;
    let hashes;
    let hook;
    let icon;
    let installParams;
    let integrationTypesConfig;
    let isDiscoverable;
    let isMonetized;
    let isVerified;
    let maxParticipants;
    let name;
    let overlay;
    let overlayCompatibilityHook;
    let overlayMethods;
    let overlayWarn;
    let parentId;
    let primarySkuId;
    let privacyPolicyUrl;
    let publishers;
    let roleConnectionsVerificationUrl;
    let slug;
    let splash;
    let storeListingSkuId;
    let storefront_available;
    let tags;
    let team;
    let termsOfServiceUrl;
    let thirdPartySkus;
    let tmp5;
    let type;
    let vibegrationsProjectId;
    const self = this;
    id = id.id;
    if (id == null) {
      id = self.id;
    }
    let obj = { id, name, icon, splash, overlay, overlayWarn, overlayCompatibilityHook, overlayMethods, hook, aliases, publishers, developers, primarySkuId, storeListingSkuId, thirdPartySkus, guildId, guild, executables, hashes, description, eulaId, slug, coverImage, bot, flags, maxParticipants, tags, embeddedActivityConfig, embeddedSurfaces, type, team, roleConnectionsVerificationUrl, _connectionEntrypointUrl, integrationTypesConfig, isMonetized, storefront_available, termsOfServiceUrl, privacyPolicyUrl, isVerified, customInstallUrl, installParams, isDiscoverable, directoryEntry, categories, linkedGames: tmp5, deepLinkUri, applicationAccountLinkBenefitConfig, vibegrationsProjectId, contentClassification, parentId };
    name = id.name;
    if (name == null) {
      name = self.name;
    }
    icon = id.icon;
    if (icon == null) {
      icon = self.icon;
    }
    splash = id.splash;
    if (splash == null) {
      splash = self.splash;
    }
    overlay = id.overlay;
    if (overlay == null) {
      overlay = self.overlay;
    }
    overlayWarn = id.overlayWarn;
    if (overlayWarn == null) {
      overlayWarn = self.overlayWarn;
    }
    overlayCompatibilityHook = id.overlayCompatibilityHook;
    if (overlayCompatibilityHook == null) {
      overlayCompatibilityHook = self.overlayCompatibilityHook;
    }
    overlayMethods = id.overlayMethods;
    if (overlayMethods == null) {
      overlayMethods = self.overlayMethods;
    }
    hook = id.hook;
    if (hook == null) {
      hook = self.hook;
    }
    aliases = id.aliases;
    if (aliases == null) {
      aliases = self.aliases;
    }
    publishers = id.publishers;
    if (publishers == null) {
      publishers = self.publishers;
    }
    developers = id.developers;
    if (developers == null) {
      developers = self.developers;
    }
    primarySkuId = id.primarySkuId;
    if (primarySkuId == null) {
      primarySkuId = self.primarySkuId;
    }
    storeListingSkuId = id.storeListingSkuId;
    if (storeListingSkuId == null) {
      storeListingSkuId = self.storeListingSkuId;
    }
    thirdPartySkus = id.thirdPartySkus;
    if (thirdPartySkus == null) {
      thirdPartySkus = self.thirdPartySkus;
    }
    guildId = id.guildId;
    if (guildId == null) {
      guildId = self.guildId;
    }
    guild = id.guild;
    if (guild == null) {
      guild = self.guild;
    }
    executables = id.executables;
    if (executables == null) {
      executables = self.executables;
    }
    hashes = id.hashes;
    if (hashes == null) {
      hashes = self.hashes;
    }
    description = id.description;
    if (description == null) {
      description = self.description;
    }
    eulaId = id.eulaId;
    if (eulaId == null) {
      eulaId = self.eulaId;
    }
    slug = id.slug;
    if (slug == null) {
      slug = self.slug;
    }
    coverImage = id.coverImage;
    if (coverImage == null) {
      coverImage = self.coverImage;
    }
    bot = id.bot;
    if (bot == null) {
      bot = self.bot;
    }
    flags = id.flags;
    if (flags == null) {
      flags = self.flags;
    }
    maxParticipants = id.maxParticipants;
    if (maxParticipants == null) {
      maxParticipants = self.maxParticipants;
    }
    tags = id.tags;
    if (tags == null) {
      tags = self.tags;
    }
    embeddedActivityConfig = id.embeddedActivityConfig;
    if (embeddedActivityConfig == null) {
      let tmp2;
      if (null != self.embeddedActivityConfig) {
        const obj2 = {};
        let merged = Object.assign(self.embeddedActivityConfig);
        tmp2 = obj2;
      }
      embeddedActivityConfig = tmp2;
    }
    embeddedSurfaces = id.embeddedSurfaces;
    if (embeddedSurfaces == null) {
      embeddedSurfaces = self.embeddedSurfaces;
    }
    type = id.type;
    if (type == null) {
      type = self.type;
    }
    team = id.team;
    if (team == null) {
      team = self.team;
    }
    roleConnectionsVerificationUrl = id.roleConnectionsVerificationUrl;
    if (roleConnectionsVerificationUrl == null) {
      roleConnectionsVerificationUrl = self.roleConnectionsVerificationUrl;
    }
    _connectionEntrypointUrl = id._connectionEntrypointUrl;
    if (_connectionEntrypointUrl == null) {
      _connectionEntrypointUrl = self._connectionEntrypointUrl;
    }
    integrationTypesConfig = id.integrationTypesConfig;
    if (integrationTypesConfig == null) {
      integrationTypesConfig = self.integrationTypesConfig;
    }
    isMonetized = id.isMonetized;
    if (isMonetized == null) {
      isMonetized = self.isMonetized;
    }
    storefront_available = id.storefront_available;
    if (storefront_available == null) {
      storefront_available = self.storefront_available;
    }
    termsOfServiceUrl = id.termsOfServiceUrl;
    if (termsOfServiceUrl == null) {
      termsOfServiceUrl = self.termsOfServiceUrl;
    }
    privacyPolicyUrl = id.privacyPolicyUrl;
    if (privacyPolicyUrl == null) {
      privacyPolicyUrl = self.privacyPolicyUrl;
    }
    isVerified = id.isVerified;
    if (isVerified == null) {
      isVerified = self.isVerified;
    }
    customInstallUrl = id.customInstallUrl;
    if (customInstallUrl == null) {
      customInstallUrl = self.customInstallUrl;
    }
    installParams = id.installParams;
    if (installParams == null) {
      installParams = self.installParams;
    }
    isDiscoverable = id.isDiscoverable;
    if (isDiscoverable == null) {
      isDiscoverable = self.isDiscoverable;
    }
    directoryEntry = id.directoryEntry;
    if (directoryEntry == null) {
      directoryEntry = self.directoryEntry;
    }
    categories = id.categories;
    if (categories == null) {
      categories = self.categories;
    }
    const linkedGames1 = id.linkedGames;
    const linkedGames = self.linkedGames;
    tmp5 = linkedGames;
    if (null != linkedGames1) {
      let mapped = linkedGames1;
      if (null != linkedGames) {
        mapped = linkedGames1.map((application) => {
          let closure_0 = application;
          if (null != application.application) {
            return application;
          } else {
            const found = linkedGames.find((id) => id.id === id.id);
            application = undefined;
            if (found != null) {
              application = found.application;
            }
            let tmp4 = application;
            if (null != application) {
              const obj = { application: found.application };
              const merged = Object.assign(application);
              tmp4 = obj;
            }
            return tmp4;
          }
        });
      }
      tmp5 = mapped;
    }
    deepLinkUri = id.deepLinkUri;
    if (deepLinkUri == null) {
      deepLinkUri = self.deepLinkUri;
    }
    applicationAccountLinkBenefitConfig = id.applicationAccountLinkBenefitConfig;
    if (applicationAccountLinkBenefitConfig == null) {
      applicationAccountLinkBenefitConfig = self.applicationAccountLinkBenefitConfig;
    }
    vibegrationsProjectId = id.vibegrationsProjectId;
    if (vibegrationsProjectId == null) {
      vibegrationsProjectId = self.vibegrationsProjectId;
    }
    contentClassification = id.contentClassification;
    if (contentClassification == null) {
      contentClassification = self.contentClassification;
    }
    parentId = id.parentId;
    if (parentId == null) {
      parentId = self.parentId;
    }
    return new ApplicationRecord(obj);
  }
  getMaxParticipants() {
    let num = this.maxParticipants;
    if (num == null) {
      num = closure_7[tmp.id];
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
  supportsEmbeddedSurface(MAIN) {
    const obj = require("EmbeddedSurfaceUtils");
    return obj.supportsEmbeddedSurface(this, MAIN);
  }
  supportsIntegrationTypes() {
    const items = [...arguments];
    const integrationTypesConfig = this.integrationTypesConfig;
    const tmp = null != integrationTypesConfig && items.every((item) => item in integrationTypesConfig);
    return tmp;
  }
  static supportsOutOfProcessOverlay(arg0) {
    const OUT_OF_PROCESS = ApplicationOverlayMethodFlags.ApplicationOverlayMethodFlags.OUT_OF_PROCESS;
    return null != arg0 && (arg0 & OUT_OF_PROCESS) === OUT_OF_PROCESS;
  }
}
const prototype = ApplicationRecord.prototype;
Object.defineProperty(prototype, "isEmbedded", {
  get: function isEmbedded() {
    const obj = require("EmbeddedSurfaceUtils");
    return obj.isEmbeddedApplication(this);
  },
  set: undefined
});
Object.defineProperty(prototype, "destinationSkuId", {
  get: function destinationSkuId() {
    const self = this;
    return null != this.storeListingSkuId ? self.storeListingSkuId : self.primarySkuId;
  },
  set: undefined
});
Object.defineProperty(prototype, "supportsOutOfProcessOverlay", {
  get: function supportsOutOfProcessOverlay() {
    return ApplicationRecord.supportsOutOfProcessOverlay(this.overlayMethods);
  },
  set: undefined
});
const result = size.fileFinishedImporting("records/ApplicationRecord.tsx");

export default ApplicationRecord;
export { createExecutable };
export { BasicApplicationRecord };