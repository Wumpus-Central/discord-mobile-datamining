// discord_app/modules/activities/useSubscribeMissingActivities.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import handleConnectionOpenOrResumed from "handleConnectionOpenOrResumed";
import sortActivity from "sortActivity";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
let closure_6 = [];
let closure_7 = [];
let closure_8 = [];
const result = require("handleConnectionOpenOrResumed").fileFinishedImporting("modules/activities/useSubscribeMissingActivities.tsx");

export default function useSubscribeMissingActivities(arg0, arg1) {
  let _require = arg0;
  const dependencyMap = arg1;
  let items = [arg0, arg1];
  let tmp = first(stateFromStoresArray.useMemo(() => {
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
      items1 = [outer1_8, outer1_7];
    }
    return items1;
  }, items), 2);
  first = tmp[0];
  let items1 = [sortActivity];
  const items2 = [first];
  stateFromStoresArray = _initialize.useStateFromStoresArray(items1, () => {
    let items = [];
    const item = first.forEach((author) => {
      const items = author;
      if (null != outer1_5.findActivity(author.author.id, (application_id) => {
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
  const items3 = [first, stateFromStoresArray];
  const items4 = [
    tmp[1],
    stateFromStoresArray.useMemo(() => {
      let closure_0 = stateFromStoresArray;
      if (0 === first.length) {
        let items = outer1_6;
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
                const obj = { userId: null, applicationId: null, partyId: null, messageId: null, channelId: null, inviteTime: null };
                obj[0] = application.author.id;
                obj[1] = id;
                obj[2] = party_id;
                ({ id: obj[3], channel_id: obj[4] } = application);
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
  let tmp4 = first(items4, 2);
  _require = tmp5;
  const items5 = [tmp4[1]];
  const effect = stateFromStoresArray.useEffect(() => {
    for (const item10006 of closure_0) {
      let tmp2 = outer1_4;
      let tmp = item10006;
      if (!outer1_4.isSubscribed(item10006)) {
        let tmp3 = callback;
        let tmp4 = _private;
        let obj = callback(_private[5]);
        let tmp5 = item10006;
        let subscription = obj.subscribe(tmp);
      }
      continue;
    }
  }, items5);
  const items6 = [tmp4[0], tmp4[1]];
  return items6;
};