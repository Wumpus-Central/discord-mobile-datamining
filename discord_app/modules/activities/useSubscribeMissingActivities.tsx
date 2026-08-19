// === Module 10671: useSubscribeMissingActivities ===

// Module 10671 (useSubscribeMissingActivities)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import handleConnectionOpenOrResumed from "handleConnectionOpenOrResumed" /* 10672 */;
import sortActivity from "sortActivity" /* 4559 */;

const require = fn;
let closure_6 = [];
let closure_7 = [];
let closure_8 = [];
const result = require("obj132").fileFinishedImporting("modules/activities/useSubscribeMissingActivities.tsx");

export default function useSubscribeMissingActivities(arg0, arg1) {
  let _require = arg0;
  dependencyMap = arg1;
  let items = [arg0, arg1];
  const tmp = first(stateFromStoresArray.useMemo(() => {
    if (_private.isPrivate()) {
      const found = closure_0.filter((item, index) => {
        const application = item.application;
        let id;
        if (application != null) {
          id = application.id;
        }
        let tmp2 = null != id;
        if (tmp2) {
          const activity = item.activity;
          let party_id;
          if (activity != null) {
            party_id = activity.party_id;
          }
          tmp2 = null != party_id;
        }
        return tmp2;
      });
      const items = [found, found.map((item, index) => item.id)];
      let items1 = items;
    } else {
      items1 = [closure_1_8, closure_1_7];
    }
    return items1;
  }, items), 2);
  first = tmp[0];
  let items1 = [closure_5];
  const items2 = [first];
  stateFromStoresArray = _require(589).useStateFromStoresArray(items1, () => {
    let items = [];
    const item = first.forEach((item, index) => {
      items = item;
      if (null != closure_1_5.findActivity(item.author.id, (application_id) => {
        const application = item.application;
        let id;
        if (application != null) {
          id = application.id;
        }
        let tmp3 = application_id.application_id === id;
        if (tmp3) {
          const party = application_id.party;
          let id1;
          if (party != null) {
            id1 = party.id;
          }
          const activity = item.activity;
          let party_id;
          if (activity != null) {
            party_id = activity.party_id;
          }
          tmp3 = id1 === party_id;
        }
        return tmp3;
      }, null, true)) {
        items.push(item.id);
      }
    });
    return items;
  }, items2);
  const items3 = [first, stateFromStoresArray];
  const items4 = [
    tmp[1],
    stateFromStoresArray.useMemo(() => {
      closure_0 = stateFromStoresArray;
      if (0 === first.length) {
        let items = closure_1_6;
      } else {
        items = [];
        const item = first.forEach((item, index) => {
          const application = item.application;
          if (application != null) {
            const id = application.id;
          }
          const activity = item.activity;
          if (activity != null) {
            const party_id = activity.party_id;
          }
          if (!(item.id in closure_0)) {
            if (null != id) {
              if (null != party_id) {
                const timestamp = item.timestamp;
                const obj = { userId: null, applicationId: null, partyId: null, messageId: null, channelId: null, inviteTime: null };
                obj[0] = item.author.id;
                obj[1] = id;
                obj[2] = party_id;
                ({ id: obj[3], channel_id: obj[4] } = item);
                obj[5] = timestamp.getTime();
                items.push(obj);
              }
            }
          }
        });
      }
      return items;
    }, items3)
  ];
  const tmp4 = first(items4, 2);
  _require = tmp5;
  const items5 = [tmp4[1]];
  const effect = stateFromStoresArray.useEffect(() => {
    for (const item10006 of closure_0) {
      if (!closure_1_4.isSubscribed(item10006)) {
        let obj = callback(_private[5]);
        let subscription = obj.subscribe(item10006);
      }
      continue;
    }
  }, items5);
  const items6 = [tmp4[0], tmp4[1]];
  return items6;
};