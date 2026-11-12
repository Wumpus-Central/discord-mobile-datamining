// === Module 15688: useConjureServerWidgetUpsell ===

// Module 15688 (useConjureServerWidgetUpsell)
import Storage3 from "Storage" /* 510 */;
import useConjureServerWidgetOffersDefault from "useConjureServerWidgetOffers" /* 15689 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5114 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;

const require = globalThis.__r;

require = fn;
const conjureServerWidgetUpsellDismissals = "conjureServerWidgetUpsellDismissals";
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_widgets/useConjureServerWidgetUpsell.tsx");

export function useConjureServerWidgetUpsellOffer(userId) {
  closure_0 = userId;
  const arr = useConjureServerWidgetOffersDefault();
  [importDefault, dependencyMap] = guildId(noop.useState(() => {
    const Storage = Storage3.Storage;
    value = Storage.get(conjureServerWidgetUpsellDismissals);
    items = undefined;
    if (value != null) {
      items = value[closure_0];
    }
    if (items == null) {
      items = [];
    }
    return items;
  }), 2);
  const found = arr.find((guildId) => !importDefault.includes(guildId.guildId));
  guildId = undefined;
  if (found != null) {
    guildId = found.guildId;
  }
  if (found != null) {
    const first = found.widgets[0];
  }
  items = [userId, guildId];
  let tmp6 = null;
  if (null != guildId) {
    tmp6 = null;
    if (null != first) {
      let obj = { guildId, widget: first, dismiss: tmp5 };
      tmp6 = obj;
    }
  }
  return tmp6;
}
export function useConjureServerWidgetUpsellDetails(userId, widget, guildId) {
  _require = guildId;
  const applicationId = widget.applicationId;
  items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  let obj = require("initialize");
  const getOrFetchApplication = require("useGetOrFetchApplications").useGetOrFetchApplication(applicationId);
  const obj2 = require("useGetOrFetchApplications");
  const items1 = [ConjureProjectStore];
  const items2 = [applicationId];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    const result = ConjureProjectStore.findProjectByApplicationId(applicationId);
    let owner_user_id;
    if (result != null) {
      owner_user_id = result.owner_user_id;
    }
    return owner_user_id;
  }, items2);
  const obj3 = require("initialize");
  const messageAuthorUser = require("conjureMessageAuthors").useMessageAuthorUser(stateFromStores1);
  const tmp5 = applicationId(12169)(userId, applicationId);
  dependencyMap = tmp5;
  [][0] = tmp5;
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp7 = null;
    if (null != getOrFetchApplication) {
      const obj5 = { guild: stateFromStores, application: getOrFetchApplication, creator: null, rendererProps: null };
      let tmp8 = null;
      if (null != stateFromStores1) {
        tmp8 = messageAuthorUser;
      }
      obj5.creator = tmp8;
      obj5.rendererProps = tmp6;
      tmp7 = obj5;
    }
  }
  return tmp7;
}