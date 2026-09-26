// discord_app/modules/devtools/native/components/screens/DevToolsBountyQaScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ToastActionCreatorsDefault from "../../../../toast/native/ToastActionCreators.tsx";
import AdCreativeType from "../../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestActionCreators from "../../../../quests/QuestActionCreators.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AdDeliveryStore from "../../../../ads/AdDeliveryStore.tsx";

require = fn;
function toast(content, key) {
  ToastActionCreatorsDefault.open({ content, key });
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let items = [
  { value: "15", label: "Last 15 minutes" },
  { value: "60", label: "Last hour" },
  { value: "1440", label: "Last 24 hours" },
];
const createStyles = fn(4836);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, content: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.content = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBountyQaScreen.tsx");

export default function DevToolsBountyQaScreen() {
  dependencyMap = async function _handleResetAndRefresh() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            dependencyMap = 1;
            if ("most_recent" === str) {
              if (null == stateFromStores) {
                toast("No dock bounty in memory. Pick a lookback window.", "bounty-qa-missing-id");
                dependencyMap = 0;
                c3 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                c1 = 3;
                c3 = 1;
                const obj7 = {
                  value: tmp3(10744).resetCreativePreviewDeliveryState(
                    tmp22,
                    tmp3(5759).AdPlacement.MOBILE_HOME_DOCK_AREA,
                  ),
                  done: false,
                };
                return obj7;
              }
            } else {
              const _Number = Number;
              const NumberResult = Number(tmp37);
              c1 = 2;
              c3 = 1;
              const obj8 = { value: tmp3(10744).resetPreviewDeliveryStateLookback(NumberResult), done: false };
              return obj8;
            }
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            toast("Failed to reset delivery state", "bounty-qa-reset-delivery-failed");
            c3 = 3;
          } else {
            if (2 === tmp7) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            }
            const questToDeliver = tmp3(10683).fetchQuestToDeliver(
              tmp3(5759).AdPlacement.MOBILE_HOME_DOCK_AREA,
              "devTools-bountyQa",
            );
            toast("Reset delivery state and refreshing dock", "bounty-qa-reset-and-refresh");
            dependencyMap = 0;
            const obj2 = tmp3(10683);
          }
          dependencyMap = 0;
          c3 = 3;
          const obj9 = { value, done: true };
          return obj9;
        }
      } catch (tmp29) {
        if (tmp4 === dependencyMap) {
          c3 = tmp2;
          throw tmp29;
        } else {
          c1 = tmp;
        }
      }
    }
  };
  const tmp = closure_11();
  const tmp3 = str(1613)();
  items = [AdDeliveryStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
    const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
    value = deliveryAdDecisionByPlacement.get(stateFromStores(5759).AdPlacement.MOBILE_HOME_DOCK_AREA);
    let creative;
    if (value != null) {
      creative = value.creative;
    }
    const deliveredBounty = stateFromStores(7114).getDeliveredBounty(creative);
    let id;
    if (deliveredBounty != null) {
      id = deliveredBounty.id;
    }
    if (id == null) {
      id = null;
    }
    return id;
  });
  str = "15";
  let str2 = "15";
  if (null != stateFromStores) {
    str2 = "most_recent";
  }
  const tmp8 = _slicedToArray(noop.useState(str2), 2);
  const first = tmp8[0];
  if ("most_recent" !== first) {
    str = first;
  }
  if (null != stateFromStores) {
    let obj2 = { value: "most_recent", label: "Most recent", subLabel: null };
    const _HermesInternal = HermesInternal;
    obj2.subLabel = "Creative " + stateFromStores;
    const items1 = [obj2];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const items3 = [...items];
  let obj3 = { style: tmp.container, contentContainerStyle: null, children: null };
  const items4 = [tmp.content, { paddingBottom: tmp.content.padding + tmp3.bottom }];
  obj3.contentContainerStyle = items4;
  let str4 = "No dock bounty in memory (app kill or refresh). Use a lookback window.";
  if (null != stateFromStores) {
    const _HermesInternal2 = HermesInternal;
    str4 = "Last dock bounty still in memory: " + stateFromStores + ".";
  }
  const items5 = [
    closure_8(stateFromStores(4832).Text, { variant: "text-sm/medium", color: "text-muted", children: str4 }),
    ,
  ];
  let obj = stateFromStores(504);
  items5[1] = closure_8(stateFromStores(5997).TableRadioGroup, {
    title: "Reset scope",
    description: "Used by Reset and re-serve. Refresh Organic Serve ignores this.",
    value: str,
    onChange: tmp8[1],
    hasIcons: false,
    children: items3.map((value) => {
      value = value.value;
      ({ label, subLabel } = value);
      return closure_1_8(stateFromStores(6000).TableRadioRow, { value, label, subLabel }, value);
    }),
  });
  const obj4 = {
    title: "Reset scope",
    description: "Used by Reset and re-serve. Refresh Organic Serve ignores this.",
    value: str,
    onChange: tmp8[1],
    hasIcons: false,
    children: items3.map((value) => {
      value = value.value;
      ({ label, subLabel } = value);
      return closure_1_8(stateFromStores(6000).TableRadioRow, { value, label, subLabel }, value);
    }),
  };
  const items6 = [
    closure_8(stateFromStores(5917).TableRow, {
      label: "Reset and re-serve",
      subLabel:
        "Clears serve, dismiss, claim, and impression for the selected scope, then asks the dock for a new decision.",
      icon: closure_8(stateFromStores(14638).UndoIcon, {}),
      onPress: function handleResetAndRefresh() {
        const self = this;
        const apply = closure_2.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
    }),
    ,
  ];
  let obj5 = {
    label: "Reset and re-serve",
    subLabel:
      "Clears serve, dismiss, claim, and impression for the selected scope, then asks the dock for a new decision.",
    icon: closure_8(stateFromStores(14638).UndoIcon, {}),
    onPress: function handleResetAndRefresh() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
  };
  items6[1] = closure_8(stateFromStores(5917).TableRow, {
    label: "Refresh Organic Serve",
    subLabel: "Re-runs the dock decision without clearing delivery state. Use to confirm a cooldown still blocks.",
    icon: closure_8(stateFromStores(14636).RedoIcon, {}),
    onPress: function handleRefreshOrganicServe() {
      const questToDeliver = stateFromStores(10683).fetchQuestToDeliver(
        stateFromStores(5759).AdPlacement.MOBILE_HOME_DOCK_AREA,
        "devTools-bountyQa",
      );
      const obj = stateFromStores(10683);
      str(4528).open({ content: "Refreshing dock serve", key: "bounty-qa-refresh" });
    },
  });
  let tmp13Result = null;
  if (null != stateFromStores) {
    let obj7 = {
      label: "Reset Seen",
      subLabel: "Clears the Quest Home NEW pill for the last dock bounty. Does not restore the dock.",
      icon: closure_8(tmp4(6389).EyeIcon, {}),
      onPress: function handleResetSeen() {
        if (null != stateFromStores) {
          items = [tmp];
          QuestActionCreators.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
          ToastActionCreatorsDefault.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
        } else {
          ToastActionCreatorsDefault.open({
            content: "No dock bounty in memory to reset seen for.",
            key: "bounty-qa-missing-id",
          });
        }
      },
    };
    tmp13Result = closure_8(tmp4(5917).TableRow, obj7);
  }
  items6[2] = tmp13Result;
  items5[2] = closure_9(stateFromStores(5999).TableRowGroup, { title: "Dock QA", hasIcons: true, children: items6 });
  obj3.children = items5;
  return closure_9(ScrollView, obj3);
}
