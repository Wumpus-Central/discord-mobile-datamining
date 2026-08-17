// discord_app/modules/app_startup/AllCacheStores.native.tsx
import set from "set" /* 2 */;
import handleSelectedChannelStoreChanged from "handleSelectedChannelStoreChanged" /* 5069 */;
import isSubscriptionGated from "isSubscriptionGated" /* 1981 */;
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled" /* 4195 */;
import reset from "reset" /* 1346 */;
import getHash from "getHash" /* 4288 */;
import getMemberSafetyPageStore from "getMemberSafetyPageStore" /* 5088 */;
import handleReset from "handleReset" /* 5250 */;
import snapshotSelectedGuildId from "snapshotSelectedGuildId" /* 4260 */;
import processChannel from "processChannel" /* 4799 */;
import dropChannelIfEmpty from "dropChannelIfEmpty" /* 4995 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;
import guildHasCommunity from "guildHasCommunity" /* 5276 */;
import processMessage from "processMessage" /* 5013 */;
import createUserWidgetFromServer from "createUserWidgetFromServer" /* 5365 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import setIndex from "setIndex" /* 5278 */;
import comparator from "comparator" /* 1980 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import allGuildIds from "allGuildIds" /* 1393 */;
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel" /* 5383 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;
import insertUnsortedGuilds from "insertUnsortedGuilds" /* 5078 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import handleCacheOrSocketLoaded from "handleCacheOrSocketLoaded" /* 5387 */;
import makeSortedChannel from "makeSortedChannel" /* 5388 */;

const result = set.fileFinishedImporting("modules/app_startup/AllCacheStores.native.tsx");

export default function noop() {

};