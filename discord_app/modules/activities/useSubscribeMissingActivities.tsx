// discord_app/modules/activities/useSubscribeMissingActivities.tsx
import PresenceSubscriptionsActionCreators from "../presence_subscriptions/PresenceSubscriptionsActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import PresenceSubscriptionsStore from "../presence_subscriptions/PresenceSubscriptionsStore.tsx";
import PresenceStore from "../../stores/PresenceStore.tsx";

require = fn;
let closure_6 = [];
let closure_7 = [];
let closure_8 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useSubscribeMissingActivities.tsx");

export default function useSubscribeMissingActivities(arg0, arg1) {
  closure_129_0 = arg0;
  closure_129_1 = arg1;
  let items = [arg0, arg1];
  let tmp = _slicedToArray(
    noop.useMemo(() => {
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
    }, items),
    2,
  );
  const first = tmp[0];
  closure_129_2 = first;
  let items1 = [PresenceStore];
  const items2 = [first];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items1,
    () => {
      const items = [];
      const item = _slicedToArray.forEach((author) => {
        if (
          null !=
          PresenceStore.findActivity(
            author.author.id,
            (application_id) => {
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
            },
            null,
            true,
          )
        ) {
          items.push(author.id);
        }
      });
      return items;
    },
    items2,
  );
  closure_129_3 = stateFromStoresArray;
  const items3 = [first, stateFromStoresArray];
  const items4 = [
    tmp[1],
    noop.useMemo(() => {
      closure_0 = noop;
      if (0 === _slicedToArray.length) {
        let items = closure_6;
      } else {
        items = [];
        const item = _slicedToArray.forEach((application) => {
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
                const obj = {
                  userId: application.author.id,
                  applicationId: id,
                  partyId: party_id,
                  messageId: null,
                  channelId: null,
                  inviteTime: null,
                };
                ({ id: obj.messageId, channel_id: obj.channelId } = application);
                obj.inviteTime = timestamp.getTime();
                items.push(obj);
              }
            }
          }
        });
      }
      return items;
    }, items3),
  ];
  let tmp4 = _slicedToArray(items4, 2);
  _require = tmp5;
  const items5 = [tmp4[1]];
  const effect = noop.useEffect(() => {
    for (const item10006 of closure_0) {
      let tmp = item10006;
      if (!PresenceSubscriptionsStore.isSubscribed(item10006)) {
        let obj = PresenceSubscriptionsActionCreators;
        let subscription = obj.subscribe(tmp);
      }
      continue;
    }
  }, items5);
  const items6 = [tmp4[0], tmp4[1]];
  return items6;
}
