// discord_app/modules/conjure/share/native/useConjureProjectLinkEmbeds.tsx
import conjureProjectLinkCard2 from "conjureProjectLinkCard.tsx";
import loadConjureSharedProjectDefault from "../loadConjureSharedProject.tsx";
import conjureMessageAuthors from "../../chat/conjureMessageAuthors.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";
import ConjureSharedProjectStore from "../ConjureSharedProjectStore.tsx";

const require = globalThis.__r;

require = fn;
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
        if (type === map(memo1[7]).CodedLinkType.CONJURE_PROJECT) {
          let tmp2Result = map(memo1[8]);
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
  const items3 = [stateFromStores1];
  const items4 = [channelId];
  stateFromStores1 = require("initialize").useStateFromStores(
    items3,
    () => {
      const channel = ChannelStore.getChannel(channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      return guild_id;
    },
    items4,
  );
  const items5 = [stateFromStores1, channelId];
  const memo2 = stateFromStores.useMemo(() => ({ guildId: stateFromStores1, channelId }), items5);
  let obj2 = require("initialize");
  const items6 = [
    ConjureSharedProjectStore,
    channelId,
    ConjureProjectStore,
    UserStore,
    require("ApexExperiment").ApexExperimentStore,
    stateFromStores1,
    memo2,
  ];
  const items7 = [memo1, memo2];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items6,
    () => {
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
    },
    items7,
  );
  const items8 = [memo1, stateFromStoresObject, memo2, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null != stateFromStores) {
      const iter = memo1[Symbol.iterator]();
      while (iter !== undefined) {
        ({ applicationId, ticket } = nextResult);
        let tmp6 = loadConjureSharedProjectDefault(applicationId, ticket);
        let obj = conjureProjectLinkCard2;
        let conjureProjectLinkCard = obj.readConjureProjectLinkCard(applicationId, ticket, memo2);
        let tmp10 = conjureProjectLinkCard;
        let type;
        if (conjureProjectLinkCard != null) {
          type = conjureProjectLinkCard.type;
        }
        let tmp12 = "ready" === type;
        if (tmp12) {
          tmp12 = null == tmp10.creatorName;
        }
        if (tmp12) {
          let tmp7Result = conjureMessageAuthors;
          let messageAuthor = tmp7Result.requestMessageAuthor(tmp10.ownerId);
        }
        continue;
      }
      nextResult = iter.next();
    }
  }, items8);
  return stateFromStoresObject;
}
