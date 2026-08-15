// discord_app/modules/devtools/native/components/screens/DevToolsRevenuePlaygroundScreen.tsx
import recomputeAffinities from "recomputeAffinities";
import serializePurchaseResponse from "serializePurchaseResponse";
import TableRowGroupTitle from "TableRowGroupTitle";
import { ScrollView } from "TableRowInner";
import getCurrentTime from "getCurrentTime";
import closure_8 from "recomputeAffinities";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import getUserAgnosticState from "getUserAgnosticState";
import { DevSettingsCategory } from "getUserAgnosticState";
import GuildFeatures from "GuildFeatures";
import jsxProd from "trackInvite";
import createCacheKey from "createCacheKey";
import { defaultAreStatesEqual } from "../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { TableRowInner } from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import { TableRowArrow } from "../../../../../design/components/TableRow/native/TableRowArrow.native.tsx";
import { TableRowGroupTitle } from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { TableSwitchRow } from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import { Button } from "../../../../../design/void/native.tsx";
import { serializePurchaseResponse } from "../../../../../utils/native/IAPUtils.tsx";

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
const require = arg1;
function describeServerError(status) {
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  if (403 === status) {
    return "Forbidden (403): this account is likely not in the backend-persistence experiment; clearing also requires staff.";
  } else {
    const _Error = Error;
    if (status instanceof Error) {
      let message = status.message;
    } else {
      const _String = String;
      message = String(status);
    }
  }
}
function FriendAnniversary() {
  let arr5;
  let closure_0;
  let serializePurchaseResponse;
  let getCurrentTime;
  let highAffinity;
  let highestAffinity;
  let tmp11;
  function renderDismissalRow(userId, hasItem, arg2, gen) {
    const callback = userId;
    const user = map.getUser(userId);
    let username;
    if (user != null) {
      username = user.username;
    }
    if (username == null) {
      let _HermesInternal = HermesInternal;
      username = "Unknown User (" + userId + ")";
    }
    const value = map.get(userId);
    let tmp6 = null != value && stateFromStores2;
    if (tmp6) {
      tmp6 = !first;
    }
    let combined = username;
    if (hasItem) {
      let _HermesInternal2 = HermesInternal;
      combined = "\u2605 " + username;
    }
    const obj = { label: combined, subLabel: null, trailing: null, disabled: null, onPress: null };
    let str4 = "not dismissed";
    let str5 = "not dismissed";
    if (null != username[userId]) {
      const _Date = Date;
      const text = `${obj2.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} `;
      str5 = `${obj2.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} ${obj2.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`;
      const date = new Date(tmp4);
    }
    if (null != value) {
      const _Date2 = Date;
      const text1 = `${obj3.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} `;
      str4 = `${obj3.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} ${obj3.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`;
      const date1 = new Date(value);
    }
    obj[1] = "" + arg2 + "Mobile: " + str5 + " \u00B7 Server: " + str4;
    let tmp8Result;
    if (tmp6) {
      tmp8Result = tmp8(callback(stateFromStores2[18]).TableRowArrow, {});
    }
    obj[2] = tmp8Result;
    obj[3] = first1;
    let fn;
    if (tmp6) {
      fn = () => {
        outer1_10(() => {
          const HTTP = callback(outer1_2[15]).HTTP;
          if (null != callback) {
            const _HermesInternal2 = HermesInternal;
            let url = "" + outer1_21 + "/" + tmp + "/" + tmp2;
          } else {
            const _HermesInternal = HermesInternal;
            url = "" + outer1_21 + "/" + tmp;
          }
          return HTTP.del({ url, rejectWithError: true });
        }, "Cleared server dismissal for " + username + ".");
      };
    }
    obj[4] = fn;
    return outer1_17(callback(stateFromStores2[17]).TableRow, obj, "" + gen + "-" + userId);
  }
  let obj = _require(stateFromStores2[14]);
  let items = [getCurrentTime, map, closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    function buildRow(userId) {
      userAffinity = userAffinity.getUserAffinity(userId);
      const obj = { userId, username: null, affinity: null };
      user = user.getUser(userId);
      let username;
      if (user != null) {
        username = user.username;
      }
      if (username == null) {
        const _HermesInternal = HermesInternal;
        username = "Unknown User (" + userId + ")";
      }
      obj[1] = username;
      let dmProbability;
      if (userAffinity != null) {
        dmProbability = userAffinity.dmProbability;
      }
      let str3 = "N/A";
      if (null != dmProbability) {
        const result = 100 * userAffinity.dmProbability;
        const _HermesInternal2 = HermesInternal;
        str3 = "" + result.toFixed(3) + "%";
      }
      obj[2] = str3;
      return obj;
    }
    let obj = { selected: uiStore.getDevToolTotalFriendAnniversaries(), highestAffinity: null, highAffinity: null };
    const highestAffinityFriendAnniversaries = uiStore.getHighestAffinityFriendAnniversaries();
    obj[1] = highestAffinityFriendAnniversaries.map(buildRow);
    const highAffinityFriendAnniversaries = uiStore.getHighAffinityFriendAnniversaries();
    obj[2] = highAffinityFriendAnniversaries.map(buildRow);
    return obj;
  }, [], _require(stateFromStores2[14]).statesWillNeverBeEqual);
  ({ selected: closure_0, highestAffinity, highAffinity } = stateFromStores);
  let obj1 = _require(stateFromStores2[14]);
  const items1 = [getCurrentTime];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => uiStore.getMessageGiftIntentLastShownMap());
  let obj2 = _require(stateFromStores2[14]);
  const items2 = [map];
  stateFromStores2 = obj2.useStateFromStores(items2, () => {
    const currentUser = map.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  let obj3 = _require(stateFromStores2[14]);
  const items3 = [callback];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => {
    const userContent = callback.settings.userContent;
    let str;
    if (userContent != null) {
      str = userContent.lastGiftIntentDismissedAtMs;
    }
    if (str == null) {
      str = "0";
    }
    const NumberResult = Number(str);
    let tmp2 = null;
    if (!Number.isNaN(NumberResult)) {
      tmp2 = null;
      if (0 !== NumberResult) {
        tmp2 = NumberResult;
      }
    }
    return tmp2;
  });
  [arr5, serializePurchaseResponse] = callback(first.useState([]), 2);
  const tmp8 = callback(first.useState(false), 2);
  first = tmp8[0];
  let closure_6 = tmp8[1];
  const tmp7 = callback(first.useState([]), 2);
  [tmp11, getCurrentTime] = callback(first.useState(false), 2);
  const tmp12 = callback(first.useState(false), 2);
  closure_8 = tmp12[1];
  callback = first.useCallback(stateFromStores3(function*() {
    if (v02 === 2) {
      v02 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        v02 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v02 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let status = tmp4;
            let closure_1 = tmp8;
            let dismissals;
            closure_1 = undefined;
            outer1_7(true);
            let v0 = 2;
            const HTTP = outer1_0(outer1_2[15]).HTTP;
            c5 = 3;
            v02 = 1;
            let obj1 = { value: null, done: false };
            obj1[0] = HTTP.get({ url: "/users/@me/gift-intent-dismissals", rejectWithError: true });
            return obj1;
          }
        } else if (1 === tmp8) {
          v0 = 0;
          callback(false);
          throw recomputeAffinities;
        } else {
          if (2 === tmp8) {
            v0 = 1;
            status = recomputeAffinities;
            closure_1 = 403 === status.status;
            v02(closure_1);
            if (closure_1) {
              v0([]);
            } else {
              obj1 = outer1_1(outer1_2[16]);
              const obj2 = { key: "dev-tools-gift-intent-server", content: null };
              obj2[1] = outer1_23(status);
              obj1.open(obj2);
            }
            v0 = 0;
            callback(false);
            v02 = 3;
          } else if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            dismissals = arg1.body;
            dismissals = dismissals.dismissals;
            if (dismissals == null) {
              dismissals = [];
            }
            v0(dismissals);
            v02(false);
            v0 = 1;
            const tmp11 = v0;
          }
          v0 = 0;
          callback(false);
          v02 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp52) {
        recomputeAffinities = tmp52;
        if (tmp5 === v0) {
          v02 = tmp3;
          throw tmp52;
        } else if (tmp2 === tmp54) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  }), []);
  const items4 = [callback, stateFromStores3];
  const effect = first.useEffect(() => {
    callback();
  }, items4);
  _require = undefined;
  _require = stateFromStores3((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let recomputeAffinities = tmp4;
              let closure_2 = tmp6;
              const callback = closure_1;
              outer1_8(true);
              let c5 = 2;
              c6 = 3;
              c7 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = callback();
              return obj1;
            }
          } else if (1 === tmp9) {
            c5 = 0;
            outer1_8(false);
            throw serializePurchaseResponse;
          } else {
            if (2 === tmp9) {
              c5 = 1;
              closure_1 = serializePurchaseResponse;
              let obj5 = stateFromStores1(stateFromStores2[16]);
              const obj2 = { key: "dev-tools-gift-intent-server", content: null };
              obj2[1] = outer2_23(closure_1);
              obj5.open(obj2);
              c5 = 0;
              outer1_8(false);
              c7 = 3;
            } else if (3 === tmp9) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                outer1_8(false);
                c7 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                obj1 = stateFromStores1(stateFromStores2[16]);
                const obj4 = { key: "dev-tools-gift-intent-server", content: null };
                obj4[1] = callback;
                obj1.open(obj4);
                c6 = 4;
                c7 = 1;
                obj5 = { value: null, done: false };
                obj5[0] = outer1_9();
                return obj5;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c5 = 1;
            }
            c5 = 0;
            outer1_8(false);
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp44) {
          serializePurchaseResponse = tmp44;
          if (tmp5 === c5) {
            c7 = tmp3;
            throw tmp44;
          } else if (tmp2 === tmp46) {
            c6 = tmp2;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const items5 = [callback];
  let ensureGuildLoaded = first.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items5);
  if (!first1) {
    first1 = tmp12[0];
  }
  const found = arr5.filter((intent_type) => intent_type.intent_type === closure_22);
  map = new Map(found.map((target_id) => {
    const items = [target_id.target_id, Number(target_id.dismissed_at_ms)];
    return items;
  }));
  const set = new Set(highestAffinity.map((userId) => userId.userId));
  const items6 = [...highAffinity];
  const tmp10 = callback(first.useState(false), 2);
  let arr = Array.from(new Map(items6.map((userId) => {
    const items = [userId.userId, userId];
    return items;
  })).values());
  const set1 = new Set(arr.map((userId) => userId.userId));
  const items7 = [...Object.keys(stateFromStores1), ...Array.from(map.keys())];
  const map1 = new Map(items6.map((userId) => {
    const items = [userId.userId, userId];
    return items;
  }));
  arr = Array.from(new Set(items7));
  const found1 = arr.filter((arg0) => !set1.has(arg0));
  const found2 = items.find((value) => value.value === closure_0);
  let str;
  if (found2 != null) {
    str = found2.label;
  }
  if (str == null) {
    str = "None";
  }
  obj = { title: "Friend Anniversary", hasIcons: false, children: null };
  obj = { label: "Number of anniversaries", subLabel: null, trailing: null, onPress: null };
  obj[1] = "Current: " + str;
  obj[2] = callback2(_require(stateFromStores2[18]).TableRowArrow, {});
  obj[3] = function onPress() {
    let obj = callback(stateFromStores2[20]);
    obj = {
      key: "dev-tools-friend-anniversary-count",
      header: { title: "Anniversaries to generate" },
      options: outer1_20.map((arg0) => {
        let label;
        let value;
        ({ label, value } = arg0);
        let closure_0 = value;
        let combined = label;
        if (value === closure_0) {
          const _HermesInternal = HermesInternal;
          combined = "" + label + "  (selected)";
        }
        return {
          label: combined,
          onPress() {
            let obj = outer1_1(outer1_2[13]);
            obj = { type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: closure_0 };
            obj.dispatch(obj);
          }
        };
      }),
      hasIcons: false
    };
    const result = obj.showSimpleActionSheet(obj);
  };
  const items8 = [callback2(_require(stateFromStores2[17]).TableRow, obj), , ];
  obj1 = {
    label: "Trigger Mobile FA message in current DM",
    subLabel: "Sends an ephemeral GIFTING_PROMPT into the selected channel",
    onPress() {
      const channelId = first1.getChannelId();
      if (null != channelId) {
        channel = channel.getChannel(channelId);
        let first;
        if (channel != null) {
          const recipients = channel.recipients;
          if (recipients != null) {
            first = recipients[0];
          }
        }
        if (null != first) {
          let obj = { giftIntentType: null, recipientUserId: null };
          obj[0] = set1.FRIEND_ANNIVERSARY;
          obj[1] = first;
          const result = stateFromStores1(stateFromStores2[21]).sendGiftingPromptSystemMessage(channelId, obj);
          const obj3 = stateFromStores1(stateFromStores2[21]);
          stateFromStores1(stateFromStores2[16]).open({ key: "dev-tools-gift-intent-triggered", content: "Friendship anniversary card sent." });
          const obj5 = stateFromStores1(stateFromStores2[16]);
        } else {
          stateFromStores1(stateFromStores2[16]).open({ key: "dev-tools-gift-intent-no-recipient", content: "Selected channel has no other recipient." });
          const obj2 = stateFromStores1(stateFromStores2[16]);
        }
      } else {
        obj = stateFromStores1(stateFromStores2[16]);
        obj.open({ key: "dev-tools-gift-intent-no-channel", content: "Open a DM first." });
      }
    }
  };
  items8[1] = callback2(_require(stateFromStores2[17]).TableRow, obj1);
  items8[2] = arr.map((userId) => {
    userId = userId.userId;
    const hasItem = set.has(userId);
    return renderDismissalRow(userId, hasItem, "" + userId.affinity + " \u00B7 ", "gen");
  });
  obj[2] = items8;
  const items9 = [callback3(_require(stateFromStores2[19]).TableRowGroup, obj), , , ];
  let tmp19Result = found1.length > 0;
  if (tmp19Result) {
    obj2 = { children: null };
    obj3 = { size: null };
    obj3[0] = stateFromStores1(tmp2[23]).space.PX_16;
    const items10 = [tmp21(tmp(tmp2[22]).Spacer, obj3), ];
    let obj4 = { title: "Other Dismissals (not generated)", hasIcons: false, children: null };
    obj4[2] = found1.map((userId) => renderDismissalRow(userId, false, "", "other"));
    items10[1] = tmp21(tmp(tmp2[19]).TableRowGroup, obj4);
    obj2[0] = items10;
    tmp19Result = tmp19(tmp20, obj2);
  }
  items9[1] = tmp19Result;
  let obj5 = { size: null };
  obj5[0] = stateFromStores1(stateFromStores2[23]).space.PX_16;
  items9[2] = callback2(_require(stateFromStores2[22]).Spacer, obj5);
  let str2 = "ok";
  if (first) {
    str2 = "not enrolled (calls 403)";
  }
  let str3 = "no";
  if (stateFromStores2) {
    str3 = "yes";
  }
  const set2 = new Set(items7);
  const items11 = [callback2(_require(stateFromStores2[17]).TableRow, { label: "Eligibility", subLabel: "Experiment: " + str2 + " \u00B7 Staff: " + str3 }), , , , , , ];
  let str4 = "never";
  if (null != stateFromStores3) {
    let _Date = Date;
    let text = `${obj15.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} `;
    str4 = `${obj15.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} ${obj15.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`;
    let date = new Date(stateFromStores3);
  }
  items11[1] = callback2(_require(stateFromStores2[17]).TableRow, { label: "Server last recorded dismissal", subLabel: str4 });
  items11[2] = callback2(_require(stateFromStores2[17]).TableRow, {
    label: "Reconcile now",
    subLabel: "Fetch + merge server dismissals into the local store",
    disabled: first1,
    onPress() {
      channel(() => {
        let num = recomputeAffinities;
        if (recomputeAffinities == null) {
          num = 0;
        }
        return outer1_0(outer1_2[24]).fetchAndReconcileGiftIntentDismissals(num);
      }, "Reconcile triggered.");
    }
  });
  items11[3] = callback2(_require(stateFromStores2[17]).TableRow, { label: "Refresh server dismissals", subLabel: "Re-fetch the per-friend server view above", disabled: first1, onPress: callback });
  const obj8 = { label: "Dismiss a generated anniversary on the server", subLabel: "POST a server dismissal for a generated friend", trailing: null, disabled: null, onPress: null };
  obj8[2] = callback2(_require(stateFromStores2[18]).TableRowArrow, {});
  let tmp29 = first1;
  if (!first1) {
    tmp29 = first;
  }
  if (!tmp29) {
    tmp29 = 0 === arr.length;
  }
  obj8[3] = tmp29;
  obj8[4] = function onPress() {
    let obj = callback(stateFromStores2[20]);
    obj = {
      key: "dev-tools-gift-intent-seed",
      header: { title: "Dismiss a generated anniversary on the server" },
      options: arr.map((label) => {
        let closure_0 = label;
        return {
          label: label.username,
          onPress() {
            return outer1_10(() => {
              const HTTP = lib(outer2_2[15]).HTTP;
              const body = { intent_type: outer2_22, target_id: lib.userId };
              return HTTP.post({ url: "/users/@me/gift-intents/dismiss", body, rejectWithError: true });
            }, "Dismissed " + label.username + " on the server.");
          }
        };
      }),
      hasIcons: false
    };
    const result = obj.showSimpleActionSheet(obj);
  };
  items11[4] = callback2(_require(stateFromStores2[17]).TableRow, obj8);
  if (!first1) {
    first1 = !stateFromStores2;
  }
  if (!first1) {
    first1 = first;
  }
  if (!first1) {
    first1 = 0 === map.size;
  }
  const obj9 = { children: null };
  const obj10 = { title: "Backend Dismissal Sync", hasIcons: false, children: null };
  items11[5] = callback2(_require(stateFromStores2[17]).TableRow, {
    variant: "danger",
    label: "Clear all server dismissals (staff)",
    subLabel: "DELETE every server dismissal for this user",
    disabled: first1,
    onPress() {
      channel(() => {
        const HTTP = callback(table[15]).HTTP;
        return HTTP.del({ url: "" + closure_21 + "/" + closure_22, rejectWithError: true });
      }, "Cleared all server dismissals.");
    }
  });
  items11[6] = callback2(_require(stateFromStores2[17]).TableRow, {
    variant: "danger",
    label: "Reset local message cooldown",
    subLabel: "Clears messageGiftIntentLastShownMap on this device",
    onPress() {
      stateFromStores1(stateFromStores2[13]).dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
      const obj = stateFromStores1(stateFromStores2[13]);
      stateFromStores1(stateFromStores2[16]).open({ key: "dev-tools-gift-intent-local", content: "Cleared local message cooldown." });
    }
  });
  obj10[2] = items11;
  items9[3] = callback3(_require(stateFromStores2[19]).TableRowGroup, obj10);
  obj9[0] = items9;
  return callback3(closure_19, obj9);
}
function TrialOfferSheetExample() {
  let obj = premiumTrialOffer(7418);
  premiumTrialOffer = obj.usePremiumTrialOffer();
  obj = {
    label: "Trial Offer Nitro Basic",
    subLabel: str2,
    disabled: tmp7,
    onPress() {
      if (null != premiumTrialOffer) {
        let obj = outer1_1(outer1_2[27]);
        obj = { fallbackPremiumType: null, userTrialOffer: null, markAsDismissed: null };
        obj[0] = tmp;
        obj[1] = tmp2;
        obj[2] = function markAsDismissed() {

        };
        obj.openLazy(premiumTrialOffer(outer1_2[29])(outer1_2[28], outer1_2.paths), "PremiumTrialOfferActionSheet", obj);
      }
    }
  };
  const items = [closure_17(premiumTrialOffer(6291).TableRow, obj), ];
  obj = { title: "Trial Offers", hasIcons: false, children: null };
  items[1] = closure_17(premiumTrialOffer(6291).TableRow, {
    label: "Trial Offer Nitro",
    subLabel: "No trial offer in store",
    disabled: null == premiumTrialOffer,
    onPress() {
      if (null != premiumTrialOffer) {
        let obj = outer1_1(outer1_2[27]);
        obj = { fallbackPremiumType: null, userTrialOffer: null, markAsDismissed: null };
        obj[0] = tmp;
        obj[1] = tmp2;
        obj[2] = function markAsDismissed() {

        };
        obj.openLazy(premiumTrialOffer(outer1_2[29])(outer1_2[28], outer1_2.paths), "PremiumTrialOfferActionSheet", obj);
      }
    }
  });
  obj[2] = items;
  return closure_18(premiumTrialOffer(6286).TableRowGroup, obj);
}
function PremiumToggles() {
  let obj = defaultAreStatesEqual;
  const items = [getUserAgnosticState];
  const stateFromStores = obj.useStateFromStores(items, () => getUserAgnosticState.allByCategory(constants.PREMIUM).filter((arg0) => {
    let tmp;
    [tmp] = arg0;
    return "force_mock_iap" !== tmp;
  }), [], defaultAreStatesEqual.statesWillNeverBeEqual);
  obj = { title: "Premium Toggles", hasIcons: false, children: null };
  obj[2] = stateFromStores.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2, ] = arg0;
    return callback2(callback(table[30]).TableSwitchRow, {
      label: tmp3,
      subLabel: tmp,
      value: tmp2,
      onValueChange(arg0) {
        return outer1_0(outer1_2[31]).toggle(closure_0, arg0);
      }
    }, tmp);
  });
  return callback2(TableRowGroupTitle.TableRowGroup, obj);
}
function ForceMockIAP() {
  let obj = defaultAreStatesEqual;
  const items = [getUserAgnosticState];
  const stateFromStores = obj.useStateFromStores(items, () => getUserAgnosticState.get("force_mock_iap"));
  let result = serializePurchaseResponse.shouldMockIAPForceEnable();
  let str = "Replaces StoreKit with hardcoded fixture data. App will restart when toggled.";
  if (result) {
    str = "Forced on - the current device can't fetch real StoreKit products.";
  }
  obj = { label: "Force mock IAP products", subLabel: str, value: null, disabled: null, onValueChange: null };
  let tmp4 = result;
  if (!result) {
    tmp4 = stateFromStores;
  }
  obj = { title: "iOS IAP Mock", hasIcons: false, children: tmp3(TableSwitchRow.TableSwitchRow, obj) };
  obj[2] = tmp4;
  obj[3] = result;
  obj[4] = function onValueChange(arg0) {
    callback(15144).toggle("force_mock_iap", arg0);
    getUserAgnosticState.persist();
    const obj = callback(15144);
    const result = callback2(10970).checkForUpdateAndReload();
  };
  return closure_17(TableRowGroupTitle.TableRowGroup, obj);
}
function PaymentFlowTest() {
  let obj = { title: "Payment Flow Test", hasIcons: false, children: null };
  obj = {
    label: "Test Payment Flow",
    onPress() {
      callback2(paths[34]).pushLazy(callback(paths[29])(paths[35], paths.paths));
    },
    trailing: null
  };
  obj[2] = callback2(TableRowArrow.TableRowArrow, {});
  obj[2] = callback2(TableRowInner.TableRow, obj);
  return callback2(TableRowGroupTitle.TableRowGroup, obj);
}
function Orbs() {
  let obj = { title: "Orbs", hasIcons: false, children: null };
  obj = {
    label: "Test Orbs Flow",
    onPress() {
      callback2(paths[34]).pushLazy(callback(paths[29])(paths[36], paths.paths));
    },
    trailing: null
  };
  obj[2] = callback2(TableRowArrow.TableRowArrow, {});
  obj[2] = callback2(TableRowInner.TableRow, obj);
  return callback2(TableRowGroupTitle.TableRowGroup, obj);
}
function RevenueSmokeTests() {
  let obj = { title: "Revenue Smoke Tests", hasIcons: false, children: null };
  obj = {
    label: "Test all purchasing flows",
    onPress() {
      callback2(paths[34]).pushLazy(callback(paths[29])(paths[37], paths.paths));
    },
    trailing: null
  };
  obj[2] = callback2(TableRowArrow.TableRowArrow, {});
  obj[2] = callback2(TableRowInner.TableRow, obj);
  return callback2(TableRowGroupTitle.TableRowGroup, obj);
}
function GuildPowerups() {
  let obj = { title: "Guild Powerups", hasIcons: false, children: null };
  obj = {
    label: "Guild Powerups",
    onPress() {
      callback2(paths[34]).pushLazy(callback(paths[29])(paths[38], paths.paths));
    },
    trailing: null
  };
  obj[2] = callback2(TableRowArrow.TableRowArrow, {});
  obj[2] = callback2(TableRowInner.TableRow, obj);
  return callback2(TableRowGroupTitle.TableRowGroup, obj);
}
function GuildTagBadges() {
  let obj = { title: "Guild Tag Badges", hasIcons: false, children: null };
  obj = {
    label: "Badge gallery",
    subLabel: "Preview all native badge kinds across sizes and tints",
    onPress() {
      callback2(paths[34]).pushLazy(callback(paths[29])(paths[39], paths.paths));
    },
    trailing: null
  };
  obj[3] = callback2(TableRowArrow.TableRowArrow, {});
  obj[2] = callback2(TableRowInner.TableRow, obj);
  return callback2(TableRowGroupTitle.TableRowGroup, obj);
}
({ GiftIntentType: closure_15, PremiumTypes: closure_16 } = GuildFeatures);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
let items = [{ label: "None", value: null }, { label: "1", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 }, { label: "4", value: 4 }, { label: "5", value: 5 }, { label: "10", value: 10 }, { label: "25", value: 25 }];
let c21 = "/users/@me/gift-intents/dismissals";
const FRIEND_ANNIVERSARY = "FRIEND_ANNIVERSARY";
createCacheKey = { container: null, scrollContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { padding: require("Themes").space.PX_16 };
let result = require("noop").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsRevenuePlaygroundScreen.tsx");

export default function DevToolsRevenuePlaygroundScreen() {
  const tmp = createCacheKey();
  let obj = { style: tmp.container, contentContainerStyle: tmp.scrollContainer, children: null };
  const items = [callback2(TrialOfferSheetExample, {}), , , , , , , , , , , , , , , , ];
  obj = { size: null };
  obj[0] = Themes.space.PX_16;
  items[1] = callback2(Button.Spacer, obj);
  items[2] = callback2(PremiumToggles, {});
  obj = { size: null };
  obj[0] = Themes.space.PX_16;
  items[3] = callback2(Button.Spacer, obj);
  items[4] = callback2(ForceMockIAP, {});
  const obj1 = { size: null };
  obj1[0] = Themes.space.PX_16;
  items[5] = callback2(Button.Spacer, obj1);
  items[6] = callback2(PaymentFlowTest, {});
  const obj2 = { size: null };
  obj2[0] = Themes.space.PX_16;
  items[7] = callback2(Button.Spacer, obj2);
  items[8] = callback2(Orbs, {});
  const obj3 = { size: null };
  obj3[0] = Themes.space.PX_16;
  items[9] = callback2(Button.Spacer, obj3);
  items[10] = callback2(RevenueSmokeTests, {});
  const obj4 = { size: null };
  obj4[0] = Themes.space.PX_16;
  items[11] = callback2(Button.Spacer, obj4);
  items[12] = callback2(GuildPowerups, {});
  const obj5 = { size: null };
  obj5[0] = Themes.space.PX_16;
  items[13] = callback2(Button.Spacer, obj5);
  items[14] = callback2(GuildTagBadges, {});
  const obj6 = { size: null };
  obj6[0] = Themes.space.PX_16;
  items[15] = callback2(Button.Spacer, obj6);
  items[16] = callback2(FriendAnniversary, {});
  obj[2] = items;
  return callback3(ScrollView, obj);
};