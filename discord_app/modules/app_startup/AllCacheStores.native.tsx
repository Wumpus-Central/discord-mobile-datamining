// discord_app/modules/app_startup/AllCacheStores.native.tsx
import set from "../../../_runtime/00002_set.js";
import handleSelectedChannelStoreChanged from "../app_database/modules/messages/SaveableChannelsStore.tsx";
import isSubscriptionGated from "../channel/GatedChannelStore.tsx";
import reset from "../client_themes/ClientThemesBackgroundStore.tsx";
import getHash from "../experiments/ExperimentStore.tsx";
import getMemberSafetyPageStore from "../guild_mod_dash_member_safety/MemberSafetyStore.tsx";
import handleReset from "../guild_sidebar/ChannelListStore.tsx";
import snapshotSelectedGuildId from "../guild_themes/GuildThemeRuntimeStore.tsx";
import processChannel from "../message_request/MessageRequestStore.tsx";
import dropChannelIfEmpty from "../messages/EphemeralMessageStore.tsx";
import freshTeenActivityWithMap from "../parent_tools/FamilyCenterStore.tsx";
import guildHasCommunity from "../recent_channels/NewChannelsStore.tsx";
import processMessage from "../replies/ReferencedMessageStore.tsx";
import createUserWidgetFromServer from "../user_profile/UserProfileStore.tsx";
import _getSystemLocale from "../user_settings/LocaleStore.tsx";
import handleThemeChange from "../user_settings/ThemeStore.tsx";
import handleConnectionClosedOrResumed from "../user_settings/UserSettingsProtoStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import setIndex from "../../stores/GuildCategoryStore.tsx";
import comparator from "../../stores/GuildChannelStore.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import allGuildIds from "../../stores/GuildMembershipStore.tsx";
import updateGuildUnreadSentinel from "../../stores/GuildReadStateStore.tsx";
import createGuildRoleRecordFromRust from "../../stores/GuildRoleStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import reinjectEphemerals from "../../stores/MessageStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import generateOldThreadCutoff from "../../stores/ReadStateStore.tsx";
import insertUnsortedGuilds from "../../stores/SortedGuildStore.tsx";
import updateUserGuildSettingsInternal from "../../stores/UserGuildSettingsStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import handleCacheOrSocketLoaded from "../../stores/native/NUFStore.tsx";
import makeSortedChannel from "../../stores/views/PrivateChannelSortStore.tsx";

const result = set.fileFinishedImporting("modules/app_startup/AllCacheStores.native.tsx");

export default function noop() {

};