// discord_app/modules/devtools/native/components/screens/DevToolsRevenuePlaygroundScreen.tsx
import useStateFromStores from "../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowArrow from "../../../../../design/components/TableRow/native/TableRowArrow.native.tsx";
import TableRowGroup from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import Sheet_showSimpleActionSheet from "../../../../../design/components/Sheet/native/showSimpleActionSheet.native.tsx";
import TableSwitchRow from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import BundleUpdaterDefault from "../../../../../lib/native/BundleUpdater.tsx";
import IAPUtils from "../../../../../utils/native/IAPUtils.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import PremiumGiftingIntentStore from "../../../../premium/gifting/PremiumGiftingIntentStore.tsx";
import UserAffinitiesV2Store from "../../../../user_affinities/UserAffinitiesV2Store.tsx";
import UserSettingsProtoStore from "../../../../user_settings/UserSettingsProtoStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import DevSettingsStore from "../../../dev_settings/DevSettingsStore.tsx";

require = fn;
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
  function renderDismissalRow(userId, hasItem, arg2, gen) {
    closure_0 = userId;
    const user = map.getUser(userId);
    let username;
    if (user != null) {
      username = user.username;
    }
    if (username == null) {
      let _HermesInternal = HermesInternal;
      username = "Unknown User (" + userId + ")";
    }
    value = map.get(userId);
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
    obj.subLabel = "" + arg2 + "Mobile: " + str5 + " \u00B7 Server: " + str4;
    let tmp8Result;
    if (tmp6) {
      tmp8Result = closure_1_17(closure_0(stateFromStores2[18]).TableRowArrow, {});
    }
    obj.trailing = tmp8Result;
    obj.disabled = first1;
    let fn;
    if (tmp6) {
      fn = () => {
        closure_10(
          () => {
            const HTTP = closure_0(stateFromStores2[15]).HTTP;
            if (null != closure_0) {
              const _HermesInternal2 = HermesInternal;
              let url = "" + closure_2_21 + "/" + closure_2_22 + "/" + closure_0;
            } else {
              const _HermesInternal = HermesInternal;
              url = "" + closure_2_21 + "/" + closure_2_22;
            }
            return HTTP.del({ url, rejectWithError: true });
          },
          "Cleared server dismissal for " + username + ".",
        );
      };
    }
    obj.onPress = fn;
    return closure_1_17(closure_0(stateFromStores2[17]).TableRow, obj, "" + gen + "-" + userId);
  }
  items = [PremiumGiftingIntentStore, map, closure_8];
  const stateFromStores = require("useStateFromStores").useStateFromStores(
    items,
    () => {
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
        obj.username = username;
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
        obj.affinity = str3;
        return obj;
      }
      let obj = { selected: uiStore.getDevToolTotalFriendAnniversaries(), highestAffinity: null, highAffinity: null };
      const highestAffinityFriendAnniversaries = uiStore.getHighestAffinityFriendAnniversaries();
      obj.highestAffinity = highestAffinityFriendAnniversaries.map(buildRow);
      const highAffinityFriendAnniversaries = uiStore.getHighAffinityFriendAnniversaries();
      obj.highAffinity = highAffinityFriendAnniversaries.map(buildRow);
      return obj;
    },
    [],
    require("useStateFromStores").statesWillNeverBeEqual,
  );
  ({ selected: closure_0, highestAffinity, highAffinity } = stateFromStores);
  let obj = require("useStateFromStores");
  const items1 = [PremiumGiftingIntentStore];
  let stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () =>
    uiStore.getMessageGiftIntentLastShownMap(),
  );
  let obj2 = require("useStateFromStores");
  const items2 = [map];
  stateFromStores2 = require("useStateFromStores").useStateFromStores(items2, () => {
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
  let obj3 = require("useStateFromStores");
  const items3 = [onPress];
  const stateFromStores3 = require("useStateFromStores").useStateFromStores(items3, () => {
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
  let obj4 = require("useStateFromStores");
  [arr5, _slicedToArray] = recipientUserId.useState([]);
  [recipientUserId, closure_6] = recipientUserId.useState(false);
  const tmp7 = _slicedToArray(recipientUserId.useState([]), 2);
  [tmp11, PremiumGiftingIntentStore] = recipientUserId.useState(false);
  const tmp12 = _slicedToArray(recipientUserId.useState(false), 2);
  closure_8 = tmp12[1];
  onPress = recipientUserId.useCallback(
    stateFromStores3(function* () {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              stateFromStores1 = tmp8;
              let body;
              closure_129_1 = undefined;
              uiStore(true);
              c4 = 2;
              const HTTP = closure_0(tmp4[15]).HTTP;
              c5 = 3;
              c6 = 1;
              const obj5 = {
                value: HTTP.get({ url: "/users/@me/gift-intent-dismissals", rejectWithError: true }),
                done: false,
              };
              return obj5;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            closure_130_7(false);
            throw closure_3;
          } else {
            if (2 === tmp8) {
              c4 = 1;
              closure_129_2 = closure_3;
              closure_129_1 = 403 === closure_129_2.status;
              closure_130_6(closure_129_1);
              if (closure_129_1) {
                closure_130_4([]);
              } else {
                const obj6 = { text: describeServerError(closure_129_2) };
                stateFromStores1(tmp4[16]).open("dev-tools-gift-intent-server", obj6);
                const obj2 = stateFromStores1(tmp4[16]);
              }
              c4 = 0;
              closure_130_7(false);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              body = value.body;
              const dismissals = body.dismissals;
              closure_0 = dismissals;
              if (dismissals == null) {
                closure_0 = [];
              }
              closure_130_4(closure_0);
              closure_130_6(false);
              c4 = 1;
            }
            c4 = 0;
            closure_130_7(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp52) {
          closure_3 = tmp52;
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp52;
          } else if (tmp2 === tmp54) {
            c5 = tmp2;
          } else {
            c5 = tmp;
          }
        }
      }
    }),
    [],
  );
  const items4 = [onPress, stateFromStores3];
  const effect = recipientUserId.useEffect(() => {
    callback();
  }, items4);
  _require = stateFromStores3(function* (arg0, arg1) {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp4;
            closure_2 = tmp6;
            closure_130_0 = closure_1;
            closure_1_8(true);
            c5 = 2;
            c6 = 3;
            c7 = 1;
            const obj5 = { value: closure_0(), done: false };
            return obj5;
          }
        } else if (1 === tmp9) {
          c5 = 0;
          closure_1_8(false);
          throw closure_4;
        } else {
          if (2 === tmp9) {
            c5 = 1;
            closure_130_1 = closure_4;
            const obj7 = { text: describeServerError(closure_130_1) };
            stateFromStores1(stateFromStores2[16]).open("dev-tools-gift-intent-server", obj7);
            c5 = 0;
            closure_1_8(false);
            c7 = 3;
            const obj6 = stateFromStores1(stateFromStores2[16]);
          } else if (3 === tmp9) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_1_8(false);
              c7 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              const obj9 = { text: closure_130_0 };
              stateFromStores1(stateFromStores2[16]).open("dev-tools-gift-intent-server", obj9);
              c6 = 4;
              c7 = 1;
              const obj10 = { value: onPress(), done: false };
              return obj10;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c5 = 1;
          }
          c5 = 0;
          closure_1_8(false);
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp44) {
        closure_4 = tmp44;
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
  });
  const items5 = [onPress];
  let channel = recipientUserId.useCallback(function () {
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
  const found = arr5.filter((intent_type) => intent_type.intent_type === FRIEND_ANNIVERSARY);
  map = new Map(
    found.map((target_id) => {
      items = [target_id.target_id, Number(target_id.dismissed_at_ms)];
      return items;
    }),
  );
  new Set(highestAffinity.map((userId) => userId.userId));
  const items6 = [...highAffinity];
  const tmp10 = _slicedToArray(recipientUserId.useState(false), 2);
  const arr = Array.from(
    new Map(
      items6.map((userId) => {
        items = [userId.userId, userId];
        return items;
      }),
    ).values(),
  );
  new Set(arr.map((userId) => userId.userId));
  const items7 = [...Object.keys(stateFromStores1), ...Array.from(map.keys())];
  map1 = new Map(
    items6.map((userId) => {
      items = [userId.userId, userId];
      return items;
    }),
  );
  const set2 = new Set(items7);
  const found1 = Array.from(new Set(items7)).filter((item) => !set1.has(item));
  const found2 = items.find((value) => value.value === closure_0);
  let str;
  if (found2 != null) {
    str = found2.label;
  }
  if (str == null) {
    str = "None";
  }
  let obj5 = { title: "Friend Anniversary", hasIcons: false, children: null };
  const arr2 = Array.from(new Set(items7));
  const items8 = [
    closure_17(require("TableRow").TableRow, {
      label: "Number of anniversaries",
      subLabel: "Current: " + str,
      trailing: closure_17(require("TableRowArrow").TableRowArrow, {}),
      onPress: function openCountPicker() {
        const obj = Sheet_showSimpleActionSheet;
        const result = obj.showSimpleActionSheet({
          key: "dev-tools-friend-anniversary-count",
          header: { title: "Anniversaries to generate" },
          options: items.map((item) => {
            ({ label, value } = item);
            closure_0 = value;
            let combined = label;
            if (value === closure_1_0) {
              const _HermesInternal = HermesInternal;
              combined = "" + label + "  (selected)";
            }
            return {
              label: combined,
              onPress() {
                stateFromStores1(stateFromStores2[13]).dispatch({
                  type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT",
                  total: value,
                });
              },
            };
          }),
          hasIcons: false,
        });
      },
    }),
    closure_17(require("TableRow").TableRow, {
      label: "Trigger Mobile FA message in current DM",
      subLabel: "Sends an ephemeral GIFTING_PROMPT into the selected channel",
      onPress: function triggerCardInCurrentDM() {
        const channelId = first1.getChannelId();
        if (null != channelId) {
          channel = channel.getChannel(channelId);
          recipientUserId = undefined;
          if (channel != null) {
            const recipients = channel.recipients;
            if (recipients != null) {
              recipientUserId = recipients[0];
            }
          }
          if (null != recipientUserId) {
            const obj4 = { giftIntentType: set1.FRIEND_ANNIVERSARY, recipientUserId };
            const result = stateFromStores1(stateFromStores2[21]).sendGiftingPromptSystemMessage(channelId, obj4);
            const obj3 = stateFromStores1(stateFromStores2[21]);
            stateFromStores1(stateFromStores2[16]).open("dev-tools-gift-intent-triggered", {
              text: "Friendship anniversary card sent.",
            });
            const obj5 = stateFromStores1(stateFromStores2[16]);
          } else {
            stateFromStores1(stateFromStores2[16]).open("dev-tools-gift-intent-no-recipient", {
              text: "Selected channel has no other recipient.",
            });
            const obj2 = stateFromStores1(stateFromStores2[16]);
          }
        } else {
          stateFromStores1(stateFromStores2[16]).open("dev-tools-gift-intent-no-channel", { text: "Open a DM first." });
          const obj = stateFromStores1(stateFromStores2[16]);
        }
      },
    }),
    arr.map((userId) => {
      userId = userId.userId;
      const hasItem = set.has(userId);
      return renderDismissalRow(userId, hasItem, "" + userId.affinity + " \u00B7 ", "gen");
    }),
  ];
  obj5.children = items8;
  const items9 = [closure_18(require("TableRowGroup").TableRowGroup, obj5), , ,];
  let tmp19Result = found1.length > 0;
  if (tmp19Result) {
    let obj8 = { children: null };
    let obj9 = { size: stateFromStores1(tmp2[23]).space.PX_16 };
    const items10 = [closure_17(tmp(tmp2[22]).Spacer, obj9)];
    let obj10 = {
      title: "Other Dismissals (not generated)",
      hasIcons: false,
      children: found1.map((item) => renderDismissalRow(item, false, "", "other")),
    };
    items10[1] = closure_17(tmp(tmp2[19]).TableRowGroup, obj10);
    obj8.children = items10;
    tmp19Result = closure_18(closure_19, obj8);
  }
  items9[1] = tmp19Result;
  let obj6 = {
    label: "Number of anniversaries",
    subLabel: "Current: " + str,
    trailing: closure_17(require("TableRowArrow").TableRowArrow, {}),
    onPress: function openCountPicker() {
      const obj = Sheet_showSimpleActionSheet;
      const result = obj.showSimpleActionSheet({
        key: "dev-tools-friend-anniversary-count",
        header: { title: "Anniversaries to generate" },
        options: items.map((item) => {
          ({ label, value } = item);
          closure_0 = value;
          let combined = label;
          if (value === closure_1_0) {
            const _HermesInternal = HermesInternal;
            combined = "" + label + "  (selected)";
          }
          return {
            label: combined,
            onPress() {
              stateFromStores1(stateFromStores2[13]).dispatch({
                type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT",
                total: value,
              });
            },
          };
        }),
        hasIcons: false,
      });
    },
  };
  let obj7 = {
    label: "Trigger Mobile FA message in current DM",
    subLabel: "Sends an ephemeral GIFTING_PROMPT into the selected channel",
    onPress: function triggerCardInCurrentDM() {
      const channelId = first1.getChannelId();
      if (null != channelId) {
        channel = channel.getChannel(channelId);
        recipientUserId = undefined;
        if (channel != null) {
          const recipients = channel.recipients;
          if (recipients != null) {
            recipientUserId = recipients[0];
          }
        }
        if (null != recipientUserId) {
          const obj4 = { giftIntentType: set1.FRIEND_ANNIVERSARY, recipientUserId };
          const result = stateFromStores1(stateFromStores2[21]).sendGiftingPromptSystemMessage(channelId, obj4);
          const obj3 = stateFromStores1(stateFromStores2[21]);
          stateFromStores1(stateFromStores2[16]).open("dev-tools-gift-intent-triggered", {
            text: "Friendship anniversary card sent.",
          });
          const obj5 = stateFromStores1(stateFromStores2[16]);
        } else {
          stateFromStores1(stateFromStores2[16]).open("dev-tools-gift-intent-no-recipient", {
            text: "Selected channel has no other recipient.",
          });
          const obj2 = stateFromStores1(stateFromStores2[16]);
        }
      } else {
        stateFromStores1(stateFromStores2[16]).open("dev-tools-gift-intent-no-channel", { text: "Open a DM first." });
        const obj = stateFromStores1(stateFromStores2[16]);
      }
    },
  };
  items9[2] = closure_17(require("native").Spacer, { size: stateFromStores1(stateFromStores2[23]).space.PX_16 });
  let str2 = "ok";
  if (recipientUserId) {
    str2 = "not enrolled (calls 403)";
  }
  let str3 = "no";
  if (stateFromStores2) {
    str3 = "yes";
  }
  const obj11 = { size: stateFromStores1(stateFromStores2[23]).space.PX_16 };
  const items11 = [
    closure_17(require("TableRow").TableRow, {
      label: "Eligibility",
      subLabel: "Experiment: " + str2 + " \u00B7 Staff: " + str3,
    }),
    ,
    ,
    ,
    ,
    ,
  ];
  let str4 = "never";
  if (null != stateFromStores3) {
    let _Date = Date;
    let text = `${obj15.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} `;
    str4 = `${obj15.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} ${obj15.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`;
    let date = new Date(stateFromStores3);
  }
  items11[1] = closure_17(require("TableRow").TableRow, { label: "Server last recorded dismissal", subLabel: str4 });
  items11[2] = closure_17(require("TableRow").TableRow, {
    label: "Reconcile now",
    subLabel: "Fetch + merge server dismissals into the local store",
    disabled: first1,
    onPress: function handleReconcileNow() {
      channel(() => {
        let num = stateFromStores3;
        if (stateFromStores3 == null) {
          num = 0;
        }
        return closure_0(stateFromStores2[24]).fetchAndReconcileGiftIntentDismissals(num);
      }, "Reconcile triggered.");
    },
  });
  items11[3] = closure_17(require("TableRow").TableRow, {
    label: "Refresh server dismissals",
    subLabel: "Re-fetch the per-friend server view above",
    disabled: first1,
    onPress,
  });
  const obj14 = {
    label: "Dismiss a generated anniversary on the server",
    subLabel: "POST a server dismissal for a generated friend",
    trailing: closure_17(require("TableRowArrow").TableRowArrow, {}),
    disabled: null,
    onPress: null,
  };
  let tmp29 = first1;
  if (!first1) {
    tmp29 = recipientUserId;
  }
  if (!tmp29) {
    tmp29 = 0 === arr.length;
  }
  obj14.disabled = tmp29;
  obj14.onPress = function openSeedPicker() {
    const obj = Sheet_showSimpleActionSheet;
    const result = obj.showSimpleActionSheet({
      key: "dev-tools-gift-intent-seed",
      header: { title: "Dismiss a generated anniversary on the server" },
      options: arr.map((label) => ({
        label: label.username,
        onPress() {
          return channel(
            () => {
              const HTTP = closure_3_0(stateFromStores2[15]).HTTP;
              const request = {
                url: "/users/@me/gift-intents/dismiss",
                body: { intent_type, target_id: userId.userId },
                rejectWithError: true,
              };
              return HTTP.post(request);
            },
            "Dismissed " + label.username + " on the server.",
          );
        },
      })),
      hasIcons: false,
    });
  };
  items11[4] = closure_17(require("TableRow").TableRow, obj14);
  if (!first1) {
    first1 = !stateFromStores2;
  }
  if (!first1) {
    first1 = recipientUserId;
  }
  if (!first1) {
    first1 = 0 === map.size;
  }
  const obj16 = { children: null };
  const obj17 = { title: "Backend Dismissal Sync", hasIcons: false, children: null };
  items11[5] = closure_17(require("TableRow").TableRow, {
    variant: "danger",
    label: "Clear all server dismissals (staff)",
    subLabel: "DELETE every server dismissal for this user",
    disabled: first1,
    onPress: function handleClearAllServerDismissals() {
      channel(() => {
        const HTTP = closure_1_0(stateFromStores2[15]).HTTP;
        return HTTP.del({ url: "" + closure_1_21 + "/" + closure_1_22, rejectWithError: true });
      }, "Cleared all server dismissals.");
    },
  });
  items11[6] = closure_17(require("TableRow").TableRow, {
    variant: "danger",
    label: "Reset local message cooldown",
    subLabel: "Clears messageGiftIntentLastShownMap on this device",
    onPress: function handleResetLocalCooldown() {
      stateFromStores1(stateFromStores2[13]).dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
      const obj = stateFromStores1(stateFromStores2[13]);
      stateFromStores1(stateFromStores2[16]).open("dev-tools-gift-intent-local", {
        text: "Cleared local message cooldown.",
      });
    },
  });
  obj17.children = items11;
  items9[3] = closure_18(require("TableRowGroup").TableRowGroup, obj17);
  obj16.children = items9;
  return closure_18(closure_19, obj16);
}
function TrialOfferSheetExample() {
  premiumTrialOffer = premiumTrialOffer(7169).usePremiumTrialOffer();
  let obj2 = {
    label: "Trial Offer Nitro Basic",
    subLabel: "No trial offer in store",
    disabled: null == premiumTrialOffer,
    onPress() {
      if (null != premiumTrialOffer) {
        const obj2 = {
          fallbackPremiumType: tmp,
          userTrialOffer: tmp2,
          markAsDismissed() {},
        };
        ActionSheetActionCreatorsDefault.openLazy(
          asyncRequireImpl(16034, dependencyMap.paths),
          "PremiumTrialOfferActionSheet",
          obj2,
        );
      }
    },
  };
  items = [closure_17(premiumTrialOffer(6179).TableRow, obj2)];
  const obj3 = { title: "Trial Offers", hasIcons: false, children: null };
  items[1] = closure_17(premiumTrialOffer(6179).TableRow, {
    label: "Trial Offer Nitro",
    subLabel: "No trial offer in store",
    disabled: null == premiumTrialOffer,
    onPress() {
      if (null != premiumTrialOffer) {
        const obj2 = {
          fallbackPremiumType: tmp,
          userTrialOffer: tmp2,
          markAsDismissed() {},
        };
        ActionSheetActionCreatorsDefault.openLazy(
          asyncRequireImpl(16034, dependencyMap.paths),
          "PremiumTrialOfferActionSheet",
          obj2,
        );
      }
    },
  });
  obj3.children = items;
  return closure_18(premiumTrialOffer(6264).TableRowGroup, obj3);
}
function PaymentFlowTest() {
  const obj = {
    title: "Payment Flow Test",
    hasIcons: false,
    children: constants(TableRow.TableRow, {
      label: "Test Payment Flow",
      onPress() {
        require("ModalActionCreators").pushLazy(require("asyncRequireImpl")(paths[37], paths.paths));
      },
      trailing: constants(TableRowArrow.TableRowArrow, {}),
    }),
  };
  return constants(TableRowGroup.TableRowGroup, obj);
}
function Orbs() {
  const obj = {
    title: "Orbs",
    hasIcons: false,
    children: constants(TableRow.TableRow, {
      label: "Test Orbs Flow",
      onPress() {
        require("ModalActionCreators").pushLazy(require("asyncRequireImpl")(paths[38], paths.paths));
      },
      trailing: constants(TableRowArrow.TableRowArrow, {}),
    }),
  };
  return constants(TableRowGroup.TableRowGroup, obj);
}
function RevenueSmokeTests() {
  const obj = {
    title: "Revenue Smoke Tests",
    hasIcons: false,
    children: constants(TableRow.TableRow, {
      label: "Test all purchasing flows",
      onPress() {
        require("ModalActionCreators").pushLazy(require("asyncRequireImpl")(paths[39], paths.paths));
      },
      trailing: constants(TableRowArrow.TableRowArrow, {}),
    }),
  };
  return constants(TableRowGroup.TableRowGroup, obj);
}
function GuildPowerups() {
  const obj = {
    title: "Guild Powerups",
    hasIcons: false,
    children: constants(TableRow.TableRow, {
      label: "Guild Powerups",
      onPress() {
        require("ModalActionCreators").pushLazy(require("asyncRequireImpl")(paths[40], paths.paths));
      },
      trailing: constants(TableRowArrow.TableRowArrow, {}),
    }),
  };
  return constants(TableRowGroup.TableRowGroup, obj);
}
function GuildTagBadges() {
  const obj = {
    title: "Guild Tag Badges",
    hasIcons: false,
    children: constants(TableRow.TableRow, {
      label: "Badge gallery",
      subLabel: "Preview all native badge kinds across sizes and tints",
      onPress() {
        require("ModalActionCreators").pushLazy(require("asyncRequireImpl")(paths[41], paths.paths));
      },
      trailing: constants(TableRowArrow.TableRowArrow, {}),
    }),
  };
  return constants(TableRowGroup.TableRowGroup, obj);
}
const ScrollView = fn(17).ScrollView;
const DevSettingsCategory = fn(5091).DevSettingsCategory;
const PremiumConstants = fn(1392);
({ GiftIntentType: closure_15, PremiumTypes: closure_16 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
let items = [
  { label: "None", value: null },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "25", value: 25 },
];
let c21 = "/users/@me/gift-intents/dismissals";
const FRIEND_ANNIVERSARY = "FRIEND_ANNIVERSARY";
const createStyles = fn(5092);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, scrollContainer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.scrollContainer = { padding: nativeDefault.space.PX_16 };
let closure_25 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumToggles() {
      const cResult = c.c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [DevSettingsStore];
        const fn = function n() {
          return DevSettingsStore.allByCategory(constants.PREMIUM).filter(
            (item) => "force_mock_iap" !== closure_1_4(item, 1)[0],
          );
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp4 = items;
        tmp5 = fn;
        tmp6 = items1;
      } else {
        [tmp4, tmp5, tmp6] = cResult;
      }
      const stateFromStores = useStateFromStores.useStateFromStores(
        tmp4,
        tmp5,
        tmp6,
        useStateFromStores.statesWillNeverBeEqual,
      );
      if (cResult[3] !== stateFromStores) {
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function u(arg0) {
            const tmp = closure_4(arg0, 3);
            const subLabel = tmp[0];
            return closure_17(
              subLabel(6895).TableSwitchRow,
              {
                label: tmp[2].label,
                subLabel,
                value: tmp[1],
                onValueChange(flag) {
                  return require("DevSettingsActions").toggle(first, flag);
                },
              },
              subLabel,
            );
          };
          cResult[5] = fn2;
          let tmp9 = fn2;
        } else {
          tmp9 = cResult[5];
        }
        const mapped = stateFromStores.map(tmp9);
        cResult[3] = stateFromStores;
        cResult[4] = mapped;
      } else {
        if (cResult[6] !== cResult[4]) {
          const obj2 = { title: "Premium Toggles", hasIcons: false, children: tmp8 };
          const tmp14 = constants(TableRowGroup.TableRowGroup, obj2);
          cResult[6] = tmp8;
          cResult[7] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[7];
        }
        return tmp12;
      }
      const tmpResult = useStateFromStores;
    }
  : function PremiumToggles() {
      items = [DevSettingsStore];
      const stateFromStores = useStateFromStores.useStateFromStores(
        items,
        () =>
          DevSettingsStore.allByCategory(constants.PREMIUM).filter((item) => {
            [tmp] = item;
            return "force_mock_iap" !== tmp;
          }),
        [],
        useStateFromStores.statesWillNeverBeEqual,
      );
      return constants(TableRowGroup.TableRowGroup, {
        title: "Premium Toggles",
        hasIcons: false,
        children: stateFromStores.map((item) => {
          [tmp, tmp2] = item;
          return closure_17(
            closure_0(6895).TableSwitchRow,
            {
              label: tmp3,
              subLabel: tmp,
              value: tmp2,
              onValueChange(flag) {
                return require("DevSettingsActions").toggle(closure_1_0, flag);
              },
            },
            tmp,
          );
        }),
      });
    };
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ForceMockIAP() {
      const cResult = c.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [DevSettingsStore];
        const fn = function s() {
          return DevSettingsStore.get("force_mock_iap");
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = useStateFromStores.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let result = IAPUtils.shouldMockIAPForceEnable();
        cResult[2] = result;
        let tmp8 = result;
        const tmpResult2 = IAPUtils;
      } else {
        tmp8 = cResult[2];
      }
      let tmp10 = tmp8;
      if (!tmp8) {
        tmp10 = stateFromStores;
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function c(flag) {
          require("DevSettingsActions").toggle("force_mock_iap", flag);
          DevSettingsStore.persist();
          const obj = require("DevSettingsActions");
          const result = BundleUpdaterDefault.checkForUpdateAndReload();
        };
        cResult[3] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] !== tmp10) {
        let str = "Replaces StoreKit with hardcoded fixture data. App will restart when toggled.";
        if (tmp8) {
          str = "Forced on - the current device can't fetch real StoreKit products.";
        }
        const obj2 = { title: "iOS IAP Mock", hasIcons: false, children: null };
        const obj3 = {
          label: "Force mock IAP products",
          subLabel: str,
          value: tmp10,
          disabled: tmp8,
          onValueChange: tmp11,
        };
        obj2.children = constants(TableSwitchRow.TableSwitchRow, obj3);
        const tmp13Result = constants(TableRowGroup.TableRowGroup, obj2);
        cResult[4] = tmp10;
        cResult[5] = tmp13Result;
        let tmp12 = tmp13Result;
      } else {
        tmp12 = cResult[5];
      }
      return tmp12;
    }
  : function ForceMockIAP() {
      items = [DevSettingsStore];
      const stateFromStores = useStateFromStores.useStateFromStores(items, () =>
        DevSettingsStore.get("force_mock_iap"),
      );
      let result = IAPUtils.shouldMockIAPForceEnable();
      let str = "Replaces StoreKit with hardcoded fixture data. App will restart when toggled.";
      if (result) {
        str = "Forced on - the current device can't fetch real StoreKit products.";
      }
      const obj3 = {
        label: "Force mock IAP products",
        subLabel: str,
        value: null,
        disabled: null,
        onValueChange: null,
      };
      let tmp4 = result;
      if (!result) {
        tmp4 = stateFromStores;
      }
      obj3.value = tmp4;
      obj3.disabled = result;
      obj3.onValueChange = function onValueChange(flag) {
        require("DevSettingsActions").toggle("force_mock_iap", flag);
        DevSettingsStore.persist();
        const obj = require("DevSettingsActions");
        const result = BundleUpdaterDefault.checkForUpdateAndReload();
      };
      return constants(TableRowGroup.TableRowGroup, {
        title: "iOS IAP Mock",
        hasIcons: false,
        children: constants(TableSwitchRow.TableSwitchRow, obj3),
      });
    };
ReactCompilerGating = fn(558);
let obj4 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsRevenuePlaygroundScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DevToolsRevenuePlaygroundScreen() {
      const cResult = c.c(20);
      const tmp4 = closure_25();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp24 = constants(TrialOfferSheetExample, {});
        const obj2 = { size: nativeDefault.space.PX_16 };
        const tmp26 = constants(native.Spacer, obj2);
        const tmp28 = constants(closure_27, {});
        const obj3 = { size: nativeDefault.space.PX_16 };
        const tmp29 = constants(native.Spacer, obj3);
        const tmp31 = constants(closure_28, {});
        const obj4 = { size: nativeDefault.space.PX_16 };
        const tmp32 = constants(native.Spacer, obj4);
        const tmp34 = constants(PaymentFlowTest, {});
        const obj5 = { size: nativeDefault.space.PX_16 };
        const tmp35 = constants(native.Spacer, obj5);
        const tmp37 = constants(Orbs, {});
        const obj6 = { size: nativeDefault.space.PX_16 };
        const tmp38 = constants(native.Spacer, obj6);
        const tmp40 = constants(RevenueSmokeTests, {});
        const obj7 = { size: nativeDefault.space.PX_16 };
        const tmp41 = constants(native.Spacer, obj7);
        const tmp43 = constants(GuildPowerups, {});
        const obj8 = { size: nativeDefault.space.PX_16 };
        const tmp44 = constants(native.Spacer, obj8);
        const tmp46 = constants(GuildTagBadges, {});
        const obj9 = { size: nativeDefault.space.PX_16 };
        const tmp47 = constants(native.Spacer, obj9);
        const tmp49 = constants(FriendAnniversary, {});
        cResult[0] = tmp24;
        cResult[1] = tmp26;
        cResult[2] = tmp40;
        cResult[3] = tmp41;
        cResult[4] = tmp43;
        cResult[5] = tmp44;
        cResult[6] = tmp46;
        cResult[7] = tmp47;
        cResult[8] = tmp49;
        cResult[9] = tmp28;
        cResult[10] = tmp29;
        cResult[11] = tmp31;
        cResult[12] = tmp32;
        cResult[13] = tmp34;
        cResult[14] = tmp35;
        cResult[15] = tmp37;
        cResult[16] = tmp38;
        tmp10 = tmp44;
        tmp11 = tmp46;
        tmp12 = tmp47;
        tmp13 = tmp49;
        tmp14 = tmp28;
        tmp15 = tmp29;
        tmp16 = tmp31;
        tmp17 = tmp32;
        tmp18 = tmp34;
        tmp19 = tmp35;
        tmp20 = tmp37;
        tmp21 = tmp38;
        tmp5 = tmp24;
        tmp6 = tmp26;
        tmp7 = tmp40;
        tmp8 = tmp41;
        tmp9 = tmp43;
      } else {
        [
          tmp5,
          tmp6,
          tmp7,
          tmp8,
          tmp9,
          tmp10,
          tmp11,
          tmp12,
          tmp13,
          tmp14,
          tmp15,
          tmp16,
          tmp17,
          tmp18,
          tmp19,
          tmp20,
          tmp21,
        ] = cResult;
      }
      if (cResult[17] === tmp4.container) {
        if (cResult[18] === tmp4.scrollContainer) {
          let tmp50 = cResult[19];
        }
        return tmp50;
      }
      const obj10 = { style: tmp4.container, contentContainerStyle: tmp4.scrollContainer, children: null };
      items = [
        tmp5,
        tmp6,
        tmp14,
        tmp15,
        tmp16,
        tmp17,
        tmp18,
        tmp19,
        tmp20,
        tmp21,
        tmp7,
        tmp8,
        tmp9,
        tmp10,
        tmp11,
        tmp12,
        tmp13,
      ];
      obj10.children = items;
      const tmp51 = collapsedCategories(ScrollView, obj10);
      cResult[17] = tmp4.container;
      cResult[18] = tmp4.scrollContainer;
      cResult[19] = tmp51;
      tmp50 = tmp51;
    }
  : function DevToolsRevenuePlaygroundScreen() {
      const tmp = closure_25();
      const obj = { style: tmp.container, contentContainerStyle: tmp.scrollContainer, children: null };
      items = [
        constants(TrialOfferSheetExample, {}),
        constants(native.Spacer, { size: nativeDefault.space.PX_16 }),
        constants(closure_27, {}),
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
      ];
      const obj2 = { size: nativeDefault.space.PX_16 };
      items[3] = constants(native.Spacer, { size: nativeDefault.space.PX_16 });
      items[4] = constants(closure_28, {});
      const obj3 = { size: nativeDefault.space.PX_16 };
      items[5] = constants(native.Spacer, { size: nativeDefault.space.PX_16 });
      items[6] = constants(PaymentFlowTest, {});
      const obj4 = { size: nativeDefault.space.PX_16 };
      items[7] = constants(native.Spacer, { size: nativeDefault.space.PX_16 });
      items[8] = constants(Orbs, {});
      const obj5 = { size: nativeDefault.space.PX_16 };
      items[9] = constants(native.Spacer, { size: nativeDefault.space.PX_16 });
      items[10] = constants(RevenueSmokeTests, {});
      const obj6 = { size: nativeDefault.space.PX_16 };
      items[11] = constants(native.Spacer, { size: nativeDefault.space.PX_16 });
      items[12] = constants(GuildPowerups, {});
      const obj7 = { size: nativeDefault.space.PX_16 };
      items[13] = constants(native.Spacer, { size: nativeDefault.space.PX_16 });
      items[14] = constants(GuildTagBadges, {});
      const obj8 = { size: nativeDefault.space.PX_16 };
      items[15] = constants(native.Spacer, { size: nativeDefault.space.PX_16 });
      items[16] = constants(FriendAnniversary, {});
      obj.children = items;
      return collapsedCategories(ScrollView, obj);
    };
