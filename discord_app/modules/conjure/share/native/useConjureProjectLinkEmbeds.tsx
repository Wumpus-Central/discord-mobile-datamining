// === Module 11849: useConjureProjectLinkEmbeds ===

// Module 11849 (useConjureProjectLinkEmbeds)
import conjureProjectLinkCard2 from "conjureProjectLinkCard" /* 11851 */;
import conjureSharedProjectHome from "conjureSharedProjectHome" /* 11854 */;
import loadConjureSharedProjectDefault from "loadConjureSharedProject" /* 11856 */;
import conjureMessageAuthors from "conjureMessageAuthors" /* 11857 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4795 */;
import ApplicationStore from "ApplicationStore" /* 2163 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import GuildMemberStore from "GuildMemberStore" /* 4706 */;
import GuildStore from "GuildStore" /* 4665 */;
import PermissionStore from "PermissionStore" /* 4726 */;
import UserStore from "UserStore" /* 1386 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6502 */;
import ConjureSharedProjectStore from "ConjureSharedProjectStore" /* 11850 */;

const require = globalThis.__r;

require = fn;
const ChannelLoader = fn(4643).ChannelLoader;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/share/native/useConjureProjectLinkEmbeds.tsx");

export default function useConjureProjectLinkEmbeds(channelId) {
  _require = channelId;
  items = [channelId];
  const memo = stateFromStores.useMemo(() => {
    const map = new Map();
    const item = channelId.forEach((item) => {
      const iter = item.getContentMessage().codedLinks[Symbol.iterator]();
      while (iter !== undefined) {
        ({ code, url, type } = nextResult);
        if (type === map(memo1[10]).CodedLinkType.CONJURE_PROJECT) {
          let tmp2Result = map(memo1[11]);
          let result = tmp2Result.conjureProjectLinkTicket(url);
          let str = result;
          let tmp6 = result;
          if (result == null) {
            str = "";
          }
          let _HermesInternal = HermesInternal;
          let obj = { applicationId: code, ticket: null };
          obj.ticket = tmp6;
          let result1 = map.set("" + code + "/" + str, obj);
        }
        continue;
      }
      nextResult = iter.next();
    }, null);
    items = [...map.values()];
    return JSON.stringify(items);
  }, items);
  const items1 = [memo];
  const memo1 = stateFromStores.useMemo(() => JSON.parse(memo), items1);
  const items2 = [UserStore];
  stateFromStores = require("initialize").useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (id == null) {
      id = null;
    }
    return id;
  });
  channelId = channelId.channelId;
  let obj = require("initialize");
  const items3 = [memo2];
  const items4 = [channelId];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    return guild_id;
  }, items4);
  const items5 = [stateFromStores1, channelId];
  memo2 = stateFromStores.useMemo(() => ({ guildId: stateFromStores1, channelId }), items5);
  let obj2 = require("initialize");
  const items6 = [channelId, ConjureSharedProjectStore, stateFromStores1, ConjureProjectStore, UserStore, require("ApexExperiment").ApexExperimentStore, memo2, GuildMemberStore, GuildStore, PermissionStore];
  const items7 = [memo1, memo2];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items6, () => {
    const obj = {};
    const iter = memo1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let applicationId = nextResult.applicationId;
      let obj2 = conjureProjectLinkCard2;
      let result = obj2.conjureProjectLinkCardKey(applicationId, nextResult.ticket, memo2);
      let tmp7 = obj[applicationId];
      if (null == tmp7) {
        let combined = result;
      } else {
        let _HermesInternal = HermesInternal;
        combined = "" + tmp8 + "\u0001" + result;
      }
      obj[applicationId] = combined;
      continue;
    }
    return obj;
  }, items7);
  const items8 = [memo1, stateFromStoresObject, memo2, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null != stateFromStores) {
      items = [];
      const iter = memo1[Symbol.iterator]();
      while (iter !== undefined) {
        ({ applicationId, ticket } = nextResult);
        let tmp8 = loadConjureSharedProjectDefault(applicationId, ticket);
        let obj = conjureProjectLinkCard2;
        let conjureProjectLinkCard = obj.readConjureProjectLinkCard(applicationId, ticket, memo2);
        let tmp12 = conjureProjectLinkCard;
        let type;
        if (conjureProjectLinkCard != null) {
          type = conjureProjectLinkCard.type;
        }
        let tmp14 = "ready" === type;
        if (tmp14) {
          tmp14 = null == tmp12.creator;
        }
        if (tmp14) {
          let tmp9Result = conjureMessageAuthors;
          let messageAuthor = tmp9Result.requestMessageAuthor(tmp12.ownerId);
        }
        let status = ConjureSharedProjectStore.getStatus(applicationId, ticket);
        let type1;
        let tmp22 = status;
        if (status != null) {
          type1 = status.type;
        }
        let project = null;
        if ("ready" === type1) {
          project = ConjureProjectStore.getProject(tmp22.projectId);
        }
        let sharedProjectHomeGuildId = null;
        if (null != project) {
          let tmp9Result2 = conjureSharedProjectHome;
          sharedProjectHomeGuildId = tmp9Result2.getSharedProjectHomeGuildId(tmp27);
        }
        if (null != sharedProjectHomeGuildId) {
          let arr = items.push(tmp30);
        }
        continue;
      }
      const guildIds = ChannelLoader.loadGuildIds(items);
      nextResult = iter.next();
    }
  }, items8);
  return stateFromStoresObject;
};