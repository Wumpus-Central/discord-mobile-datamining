// discord_app/modules/activities/useSubscribeMissingActivities.tsx
import react2 from "../../../_runtime/00576_react.js";
import PresenceSubscriptionsActionCreators from "../presence_subscriptions/PresenceSubscriptionsActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import PresenceSubscriptionsStore from "../presence_subscriptions/PresenceSubscriptionsStore.tsx";
import PresenceStore from "../../stores/PresenceStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let _require, application_id, dependencyMap;

const f106510 = (application) => {
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
};
const f106511 = (id) => id.id;
let closure_6 = [];
let closure_7 = [];
let closure_8 = [];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr, isPrivate) => {
      let first;
      let items5;
      let tmp = first;
      const obj = first(576);
      const cResult = obj.c(13);
      if (cResult[0] === isPrivate) {
        let tmp4;
        let tmp11;
        let tmp14;
        let tmp13;
        let items3;
        if (cResult[1] === arr) {
          tmp4 = cResult[2];
        }
        const tmp8 = _slicedToArray(tmp4, 2);
        first = tmp8[0];
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [PresenceStore];
          cResult[3] = items;
          tmp11 = items;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] !== first) {
          const fn = function v() {
            const items = [];
            const item = first.forEach((author) => {
              let closure_0 = author;
              if (
                null !=
                closure_2_5.findActivity(
                  author.author.id,
                  (application_id) => {
                    application = application.application;
                    let id;
                    application_id = application_id.application_id;
                    const tmp = application;
                    if (application != null) {
                      id = application.id;
                    }
                    let tmp3 = application_id === id;
                    if (tmp3) {
                      const party = application_id.party;
                      let id1;
                      if (party != null) {
                        id1 = party.id;
                      }
                      const activity = tmp.activity;
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
          };
          const items1 = [first];
          cResult[4] = first;
          cResult[5] = fn;
          cResult[6] = items1;
          tmp14 = items1;
          tmp13 = fn;
        } else {
          tmp13 = cResult[5];
          tmp14 = cResult[6];
        }
        const tmpResult = tmp(504);
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp11, tmp13, tmp14);
        if (cResult[7] === stateFromStoresArray) {
          let tmp16;
          if (cResult[8] === first) {
            tmp16 = cResult[9];
          }
          if (cResult[10] === tmp8[1]) {
            let tmp18;
            if (cResult[11] === tmp16) {
              tmp18 = cResult[12];
            }
            return tmp18;
          }
          const items2 = [tmp8[1], tmp16];
          cResult[10] = tmp8[1];
          cResult[11] = tmp16;
          cResult[12] = items2;
          tmp18 = items2;
        }
        if (0 === first.length) {
          items3 = closure_6;
        } else {
          items3 = [];
          let item = first.forEach((application) => {
            let id;
            let party_id;
            application = application.application;
            if (application != null) {
              id = application.id;
            }
            const activity = application.activity;
            if (activity != null) {
              party_id = activity.party_id;
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
                    inviteTime: timestamp.getTime(),
                  };
                  ({ id: obj.messageId, channel_id: obj.channelId } = application);
                  items.push(obj);
                }
              }
            }
          });
        }
        cResult[7] = stateFromStoresArray;
        cResult[8] = first;
        cResult[9] = items3;
        tmp16 = items3;
      }
      if (isPrivate.isPrivate()) {
        const found = arr.filter(f106510);
        const items4 = [found, found.map(f106511)];
        items5 = items4;
      } else {
        items5 = [closure_8, closure_7];
      }
      cResult[0] = isPrivate;
      cResult[1] = arr;
      cResult[2] = items5;
      tmp4 = items5;
    }
  : (arg0, arg1) => {
      let _private;
      let first;
      let stateFromStoresArray;
      _require = arg0;
      dependencyMap = arg1;
      let items = [arg0, arg1];
      let tmp = first(
        stateFromStoresArray.useMemo(() => {
          let items1;
          if (_private.isPrivate()) {
            const found = closure_0.filter(f106510);
            const items = [found, found.map(f106511)];
            items1 = items;
          } else {
            items1 = [closure_8, closure_7];
          }
          return items1;
        }, items),
        2,
      );
      first = tmp[0];
      let tmp3 = tmp[1];
      let obj = require("get initialized");
      let items1 = [PresenceStore];
      const items2 = [first];
      stateFromStoresArray = obj.useStateFromStoresArray(
        items1,
        () => {
          const items = [];
          const item = first.forEach((author) => {
            closure_0 = author;
            if (
              null !=
              closure_2_5.findActivity(
                author.author.id,
                (application_id) => {
                  application = application.application;
                  let id;
                  application_id = application_id.application_id;
                  const tmp = application;
                  if (application != null) {
                    id = application.id;
                  }
                  let tmp3 = application_id === id;
                  if (tmp3) {
                    const party = application_id.party;
                    let id1;
                    if (party != null) {
                      id1 = party.id;
                    }
                    const activity = tmp.activity;
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
      const items3 = [tmp3];
      const items4 = [first, stateFromStoresArray];
      items3[1] = stateFromStoresArray.useMemo(() => {
        let items;
        closure_0 = stateFromStoresArray;
        if (0 === first.length) {
          items = closure_6;
        } else {
          items = [];
          const item = first.forEach((application) => {
            let id;
            let party_id;
            application = application.application;
            if (application != null) {
              id = application.id;
            }
            const activity = application.activity;
            if (activity != null) {
              party_id = activity.party_id;
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
                    inviteTime: timestamp.getTime(),
                  };
                  ({ id: obj.messageId, channel_id: obj.channelId } = application);
                  items.push(obj);
                }
              }
            }
          });
        }
        return items;
      }, items4);
      return items3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp6;
      let obj = react2;
      const cResult = obj.c(6);
      [tmp3, tmp4] = closure_9(arg0, arg1);
      const require = tmp4;
      _slicedToArray(closure_9(arg0, arg1), 2);
      if (cResult[0] !== tmp4) {
        const fn = function o() {
          for (const item10006 of _require) {
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
        tmp6 = items;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = react.useEffect(tmp5, tmp6);
      if (cResult[3] === tmp3) {
        let tmp8;
        if (cResult[4] === tmp4) {
          tmp8 = cResult[5];
        }
        return tmp8;
      }
      const items1 = [tmp3, tmp4];
      cResult[3] = tmp3;
      cResult[4] = tmp4;
      cResult[5] = items1;
      tmp8 = items1;
    }
  : (arg0, arg1) => {
      const tmp = _slicedToArray(closure_9(arg0, arg1), 2);
      let closure_0 = tmp3;
      const items = [tmp[1]];
      const first = tmp[0];
      const effect = react.useEffect(() => {
        for (const item10006 of closure_0) {
          if (!PresenceSubscriptionsStore.isSubscribed(item10006)) {
            let obj = PresenceSubscriptionsActionCreators;
            let subscription = obj.subscribe(item10006);
          }
          continue;
        }
      }, items);
      const items1 = [first, tmp[1]];
      return items1;
    };
const result = size.fileFinishedImporting("modules/activities/useSubscribeMissingActivities.tsx");

export default tmp2;
