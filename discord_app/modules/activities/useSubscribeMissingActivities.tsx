// === Module 10665: useSubscribeMissingActivities ===

// Module 10665 (useSubscribeMissingActivities)
import c from "c" /* 576 */;
import PresenceSubscriptionsActionCreators from "PresenceSubscriptionsActionCreators" /* 10668 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import PresenceSubscriptionsStore from "PresenceSubscriptionsStore" /* 10666 */;
import PresenceStore from "PresenceStore" /* 5108 */;

require = fn;
let closure_6 = [];
let closure_7 = [];
let closure_8 = [];
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMissingActivities(arr, isPrivate) {
  const cResult = stateFromStoresArray(items3[5]).c(13);
  if (cResult[0] === isPrivate) {
    if (cResult[1] === arr) {
      [first] = cResult[2];
      stateFromStoresArray = first;
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [PresenceStore];
        cResult[3] = items;
        let tmp10 = items;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== first) {
        const fn = function v() {
          const items = [];
          const item = stateFromStoresArray.forEach((author) => {
            if (null != PresenceStore.findActivity(author.author.id, (application_id) => {
              const application = author.application;
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
                const activity = author.activity;
                let party_id;
                if (activity != null) {
                  party_id = activity.party_id;
                }
                tmp3 = id1 === party_id;
              }
              return tmp3;
            }, null, true)) {
              items.push(author.id);
            }
          });
          return items;
        };
        const items1 = [first];
        cResult[4] = first;
        cResult[5] = fn;
        cResult[6] = items1;
        let tmp13 = items1;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[5];
        tmp13 = cResult[6];
      }
      stateFromStoresArray = tmp(tmp2[6]).useStateFromStoresArray(tmp10, tmp12, tmp13);
      if (cResult[7] === stateFromStoresArray) {
        if (cResult[8] === first) {
          if (cResult[10] === tmp8) {
            if (cResult[11] === tmp15) {
              let tmp18 = cResult[12];
            }
            return tmp18;
          }
          const items2 = [tmp8, cResult[9]];
          cResult[10] = tmp8;
          cResult[11] = cResult[9];
          cResult[12] = items2;
          tmp18 = items2;
        }
      }
      if (0 === first.length) {
        items3 = closure_6;
      } else {
        items3 = [];
        let item = first.forEach((application) => {
          application = application.application;
          if (application != null) {
            const id = application.id;
          }
          const activity = application.activity;
          if (activity != null) {
            const party_id = activity.party_id;
          }
          if (!(application.id in closure_0)) {
            if (null != id) {
              if (null != party_id) {
                const timestamp = application.timestamp;
                const obj = { userId: application.author.id, applicationId: id, partyId: party_id, messageId: null, channelId: null, inviteTime: null };
                ({ id: obj.messageId, channel_id: obj.channelId } = application);
                obj.inviteTime = timestamp.getTime();
                items.push(obj);
              }
            }
          }
        });
      }
      cResult[7] = stateFromStoresArray;
      cResult[8] = first;
      cResult[9] = items3;
      const tmpResult = tmp(tmp2[6]);
    }
  }
  if (isPrivate.isPrivate()) {
    const found = arr.filter((application) => {
      application = application.application;
      let id;
      if (application != null) {
        id = application.id;
      }
      let tmp2 = null != id;
      if (tmp2) {
        const activity = application.activity;
        let party_id;
        if (activity != null) {
          party_id = activity.party_id;
        }
        tmp2 = null != party_id;
      }
      return tmp2;
    });
    const items4 = [found, found.map((id) => id.id)];
    let items5 = items4;
  } else {
    items5 = [closure_8, closure_7];
  }
  cResult[0] = isPrivate;
  cResult[1] = arr;
  cResult[2] = items5;
  const obj = stateFromStoresArray(items3[5]);
  tmp = stateFromStoresArray;
  tmp2 = items3;
}) : (function useMissingActivities(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  let items = [arg0, arg1];
  const tmp = first(stateFromStoresArray.useMemo(() => {
    if (_private.isPrivate()) {
      const found = closure_0.filter((application) => {
        application = application.application;
        let id;
        if (application != null) {
          id = application.id;
        }
        let tmp2 = null != id;
        if (tmp2) {
          const activity = application.activity;
          let party_id;
          if (activity != null) {
            party_id = activity.party_id;
          }
          tmp2 = null != party_id;
        }
        return tmp2;
      });
      const items = [found, found.map((id) => id.id)];
      let items1 = items;
    } else {
      items1 = [closure_8, closure_7];
    }
    return items1;
  }, items), 2);
  first = tmp[0];
  let items1 = [PresenceStore];
  const items2 = [first];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    const items = [];
    const item = first.forEach((author) => {
      if (null != PresenceStore.findActivity(author.author.id, (application_id) => {
        const application = author.application;
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
          const activity = author.activity;
          let party_id;
          if (activity != null) {
            party_id = activity.party_id;
          }
          tmp3 = id1 === party_id;
        }
        return tmp3;
      }, null, true)) {
        items.push(author.id);
      }
    });
    return items;
  }, items2);
  const items3 = [tmp[1], ];
  const items4 = [first, stateFromStoresArray];
  items3[1] = stateFromStoresArray.useMemo(() => {
    closure_0 = stateFromStoresArray;
    if (0 === first.length) {
      let items = closure_6;
    } else {
      items = [];
      const item = first.forEach((application) => {
        application = application.application;
        if (application != null) {
          const id = application.id;
        }
        const activity = application.activity;
        if (activity != null) {
          const party_id = activity.party_id;
        }
        if (!(application.id in closure_0)) {
          if (null != id) {
            if (null != party_id) {
              const timestamp = application.timestamp;
              const obj = { userId: application.author.id, applicationId: id, partyId: party_id, messageId: null, channelId: null, inviteTime: null };
              ({ id: obj.messageId, channel_id: obj.channelId } = application);
              obj.inviteTime = timestamp.getTime();
              items.push(obj);
            }
          }
        }
      });
    }
    return items;
  }, items4);
  return items3;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useSubscribeMissingActivities.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useSubscribeMissingActivities(arg0, arg1) {
  const cResult = c.c(6);
  [tmp3, tmp4] = closure_9(arg0, arg1);
  const require = tmp4;
  if (cResult[0] !== tmp4) {
    const fn = function o() {
      for (const item10006 of closure_0) {
        if (!PresenceSubscriptionsStore.isSubscribed(item10006)) {
          let obj = PresenceSubscriptionsActionCreators;
          let subscription = obj.subscribe(item10006);
        }
        continue;
      }
    };
    const items = [tmp4];
    cResult[0] = tmp4;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  if (cResult[3] === tmp3) {
    if (cResult[4] === tmp4) {
      let tmp8 = cResult[5];
    }
    return tmp8;
  }
  const items1 = [tmp3, tmp4];
  cResult[3] = tmp3;
  cResult[4] = tmp4;
  cResult[5] = items1;
  tmp8 = items1;
}) : (function useSubscribeMissingActivities(arg0, arg1) {
  const tmp = _slicedToArray(closure_9(arg0, arg1), 2);
  closure_0 = tmp2;
  const items = [tmp[1]];
  const effect = noop.useEffect(() => {
    for (const item10006 of closure_0) {
      if (!PresenceSubscriptionsStore.isSubscribed(item10006)) {
        let obj = PresenceSubscriptionsActionCreators;
        let subscription = obj.subscribe(item10006);
      }
      continue;
    }
  }, items);
  const items1 = [tmp[0], tmp[1]];
  return items1;
});