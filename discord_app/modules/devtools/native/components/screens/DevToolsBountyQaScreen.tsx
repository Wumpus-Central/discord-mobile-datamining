// === Module 15773: DevToolsBountyQaScreen ===

// Module 15773 (DevToolsBountyQaScreen)
import nativeDefault from "native" /* 587 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import AdCreativeType from "AdCreativeType" /* 5984 */;
import QuestActionCreators from "QuestActionCreators" /* 9537 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7376 */;

const require = globalThis.__r;

require = fn;
function toast(content, key) {
  ToastActionCreatorsDefault.open({ content, key });
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let items = [{ value: "15", label: "Last 15 minutes" }, { value: "60", label: "Last hour" }, { value: "1440", label: "Last 24 hours" }];
const createStyles = fn(5090);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, content: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.content = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBountyQaScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DevToolsBountyQaScreen() {
  const cResult = require("c").c(39);
  const tmp4 = closure_11();
  let obj = require("c");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [AdDeliveryStore];
    const fn = function h() {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      value = deliveryAdDecisionByPlacement.get(closure_0(5980).AdPlacement.MOBILE_HOME_DOCK_AREA);
      let creative;
      if (value != null) {
        creative = value.creative;
      }
      const deliveredBounty = closure_0(7377).getDeliveredBounty(creative);
      let id;
      if (deliveredBounty != null) {
        id = deliveredBounty.id;
      }
      if (id == null) {
        id = null;
      }
      return id;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmp5 = str(1630)();
  const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp7);
  _require = stateFromStores;
  str = "15";
  let str2 = "15";
  if (null != stateFromStores) {
    str2 = "most_recent";
  }
  let num3 = 2;
  const tmp12 = _slicedToArray(noop.useState(str2), 2);
  const first = tmp12[0];
  if ("most_recent" !== first) {
    str = first;
  }
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === tmp10) {
      if (cResult[5] === stateFromStores) {
        if (cResult[6] === str) {
          let tmp14 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          function handleRefreshOrganicServe() {
            const questToDeliver = closure_0(9537).fetchQuestToDeliver(closure_0(5980).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
            const obj = closure_0(9537);
            str(4766).open({ content: "Refreshing dock serve", key: "bounty-qa-refresh" });
          }
          cResult[8] = handleRefreshOrganicServe;
          let tmp16 = handleRefreshOrganicServe;
        } else {
          tmp16 = cResult[8];
        }
        if (cResult[9] !== stateFromStores) {
          function handleResetSeen() {
            if (null != closure_0) {
              items = [tmp];
              QuestActionCreators.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
              ToastActionCreatorsDefault.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
            } else {
              ToastActionCreatorsDefault.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
            }
          }
          cResult[9] = stateFromStores;
          cResult[10] = handleResetSeen;
          let tmp17 = handleResetSeen;
        } else {
          tmp17 = cResult[10];
        }
        const sum = tmp4.content.padding + tmp5.bottom;
        if (cResult[11] !== sum) {
          let obj2 = { paddingBottom: sum };
          cResult[11] = sum;
          cResult[12] = obj2;
          let tmp19 = obj2;
        } else {
          tmp19 = cResult[12];
        }
        if (cResult[13] === tmp4.content) {
          if (cResult[14] === tmp19) {
            let tmp20 = cResult[15];
          }
          let str4 = "No dock bounty in memory (app kill or refresh). Use a lookback window.";
          if (tmp10) {
            const _HermesInternal2 = HermesInternal;
            str4 = "Last dock bounty still in memory: " + stateFromStores + ".";
          }
          if (cResult[16] !== str4) {
            let obj3 = { variant: "text-sm/medium", color: "text-muted", children: str4 };
            const tmp23 = closure_8(tmp(5086).Text, obj3);
            cResult[16] = str4;
            cResult[17] = tmp23;
            let tmp21 = tmp23;
          } else {
            tmp21 = cResult[17];
          }
          if (cResult[18] !== arr2) {
            const mapped = arr2.map((value) => {
              value = value.value;
              ({ label, subLabel } = value);
              return closure_1_8(closure_0(6264).TableRadioRow, { value, label, subLabel }, value);
            });
            cResult[18] = arr2;
            cResult[19] = mapped;
            let tmp24 = mapped;
          } else {
            tmp24 = cResult[19];
          }
          if (cResult[20] === str) {
            if (cResult[21] === tmp24) {
              let tmp26 = cResult[22];
            }
            const _Symbol2 = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp31 = closure_8(tmp(15188).UndoIcon, {});
              cResult[23] = tmp31;
              let tmp29 = tmp31;
            } else {
              tmp29 = cResult[23];
            }
            if (cResult[24] !== tmp14) {
              const obj4 = { label: "Reset and re-serve", subLabel: "Clears serve, dismiss, claim, and impression for the selected scope, then asks the dock for a new decision.", icon: tmp29, onPress: tmp14 };
              const tmp34 = closure_8(tmp(6184).TableRow, obj4);
              cResult[24] = tmp14;
              cResult[25] = tmp34;
              let tmp32 = tmp34;
            } else {
              tmp32 = cResult[25];
            }
            const _Symbol3 = Symbol;
            if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
              let obj5 = { label: "Refresh Organic Serve", subLabel: "Re-runs the dock decision without clearing delivery state. Use to confirm a cooldown still blocks.", icon: closure_8(tmp(15186).RedoIcon, {}), onPress: tmp16 };
              const tmp37 = closure_8(tmp(6184).TableRow, obj5);
              cResult[26] = tmp37;
              let tmp35 = tmp37;
            } else {
              tmp35 = cResult[26];
            }
            if (cResult[27] === tmp17) {
              if (cResult[28] === tmp10) {
                let tmp38 = cResult[29];
              }
              if (cResult[30] === tmp32) {
                if (cResult[31] === tmp38) {
                  let tmp41 = cResult[32];
                }
                if (cResult[33] === tmp4.container) {
                  if (cResult[34] === tmp21) {
                    if (cResult[35] === tmp26) {
                      if (cResult[36] === tmp41) {
                        if (cResult[37] === tmp20) {
                          let tmp44 = cResult[38];
                        }
                        return tmp44;
                      }
                    }
                  }
                }
                const obj6 = { style: tmp4.container, contentContainerStyle: tmp20, children: null };
                const items1 = [tmp21, tmp26, tmp41];
                obj6.children = items1;
                const tmp47 = closure_9(ScrollView, obj6);
                cResult[33] = tmp4.container;
                cResult[34] = tmp21;
                cResult[35] = tmp26;
                cResult[36] = tmp41;
                cResult[37] = tmp20;
                cResult[38] = tmp47;
                tmp44 = tmp47;
              }
              let obj7 = { title: "Dock QA", hasIcons: true, children: null };
              const items2 = [tmp32, tmp35, tmp38];
              obj7.children = items2;
              const tmp43 = closure_9(tmp(6267).TableRowGroup, obj7);
              cResult[30] = tmp32;
              cResult[31] = tmp38;
              cResult[32] = tmp43;
              tmp41 = tmp43;
            }
            let tmp39 = null;
            if (tmp10) {
              let obj8 = { label: "Reset Seen", subLabel: "Clears the Quest Home NEW pill for the last dock bounty. Does not restore the dock.", icon: closure_8(tmp(6643).EyeIcon, {}), onPress: tmp17 };
              tmp39 = closure_8(tmp(6184).TableRow, obj8);
            }
            cResult[27] = tmp17;
            cResult[28] = tmp10;
            cResult[29] = tmp39;
            tmp38 = tmp39;
          }
          let obj9 = { title: "Reset scope", description: "Used by Reset and re-serve. Refresh Organic Serve ignores this.", value: str, onChange: tmp12[1], hasIcons: false, children: tmp24 };
          const tmp28 = closure_8(tmp(6265).TableRadioGroup, obj9);
          cResult[20] = str;
          cResult[21] = tmp24;
          cResult[22] = tmp28;
          tmp26 = tmp28;
        }
        const items3 = [tmp4.content, tmp19];
        cResult[13] = tmp4.content;
        cResult[14] = tmp19;
        cResult[15] = items3;
        tmp20 = items3;
      }
      _require = asyncGeneratorStep(async () => {
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
            return { value: "IconComponent", done: null };
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
                c2 = 1;
                if ("most_recent" === c1) {
                  if (null == tmp3) {
                    toast("No dock bounty in memory. Pick a lookback window.", "bounty-qa-missing-id");
                    c2 = 0;
                    c3 = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    c1 = 3;
                    c3 = 1;
                    const obj7 = { value: tmp3(11155).resetCreativePreviewDeliveryState(tmp22, tmp3(5980).AdPlacement.MOBILE_HOME_DOCK_AREA), done: false };
                    return obj7;
                  }
                } else {
                  const _Number = Number;
                  const NumberResult = Number(tmp37);
                  c1 = 2;
                  c3 = 1;
                  const obj8 = { value: tmp3(11155).resetPreviewDeliveryStateLookback(NumberResult), done: false };
                  return obj8;
                }
              }
            } else {
              if (1 === tmp7) {
                c2 = 0;
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
                  c2 = 0;
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
                const questToDeliver = tmp3(9537).fetchQuestToDeliver(tmp3(5980).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
                toast("Reset delivery state and refreshing dock", "bounty-qa-reset-and-refresh");
                c2 = 0;
                const obj2 = tmp3(9537);
              }
              c2 = 0;
              c3 = 3;
              const obj9 = { value, done: true };
              return obj9;
            }
          } catch (tmp29) {
            if (tmp4 === c2) {
              c3 = tmp2;
              throw tmp29;
            } else {
              c1 = tmp;
            }
          }
        }
      });
      function handleResetAndRefresh() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[5] = stateFromStores;
      cResult[6] = str;
      cResult[7] = handleResetAndRefresh;
      tmp14 = handleResetAndRefresh;
    }
  }
  if (null != stateFromStores) {
    const obj10 = { value: "most_recent", label: "Most recent", subLabel: null };
    const _HermesInternal = HermesInternal;
    obj10.subLabel = "Creative " + stateFromStores;
    const items4 = [obj10];
    let items5 = items4;
  } else {
    items5 = [];
  }
  const items6 = [...items];
  cResult[num3] = stateFromStores;
  cResult[3] = null != stateFromStores;
  num3 = 4;
  cResult[4] = items6;
  const tmpResult = require("initialize");
}) : (function DevToolsBountyQaScreen() {
  dependencyMap = async function _handleResetAndRefresh2() {
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
        return { value: "IconComponent", done: null };
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
                return { value: "IconComponent", done: null };
              } else {
                c1 = 3;
                c3 = 1;
                const obj7 = { value: tmp3(11155).resetCreativePreviewDeliveryState(tmp22, tmp3(5980).AdPlacement.MOBILE_HOME_DOCK_AREA), done: false };
                return obj7;
              }
            } else {
              const _Number = Number;
              const NumberResult = Number(tmp37);
              c1 = 2;
              c3 = 1;
              const obj8 = { value: tmp3(11155).resetPreviewDeliveryStateLookback(NumberResult), done: false };
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
            const questToDeliver = tmp3(9537).fetchQuestToDeliver(tmp3(5980).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
            toast("Reset delivery state and refreshing dock", "bounty-qa-reset-and-refresh");
            dependencyMap = 0;
            const obj2 = tmp3(9537);
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
  const tmp3 = str(1630)();
  items = [AdDeliveryStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
    const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
    value = deliveryAdDecisionByPlacement.get(stateFromStores(5980).AdPlacement.MOBILE_HOME_DOCK_AREA);
    let creative;
    if (value != null) {
      creative = value.creative;
    }
    const deliveredBounty = stateFromStores(7377).getDeliveredBounty(creative);
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
  const items5 = [closure_8(stateFromStores(5086).Text, { variant: "text-sm/medium", color: "text-muted", children: str4 }), , ];
  let obj = stateFromStores(504);
  items5[1] = closure_8(stateFromStores(6265).TableRadioGroup, {
    title: "Reset scope",
    description: "Used by Reset and re-serve. Refresh Organic Serve ignores this.",
    value: str,
    onChange: tmp8[1],
    hasIcons: false,
    children: items3.map((value) => {
      value = value.value;
      ({ label, subLabel } = value);
      return closure_1_8(stateFromStores(6264).TableRadioRow, { value, label, subLabel }, value);
    })
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
      return closure_1_8(stateFromStores(6264).TableRadioRow, { value, label, subLabel }, value);
    })
  };
  const items6 = [
    closure_8(stateFromStores(6184).TableRow, {
      label: "Reset and re-serve",
      subLabel: "Clears serve, dismiss, claim, and impression for the selected scope, then asks the dock for a new decision.",
      icon: closure_8(stateFromStores(15188).UndoIcon, {}),
      onPress: function handleResetAndRefresh() {
        const self = this;
        const apply = closure_2.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
    }),
  ,

  ];
  let obj5 = {
    label: "Reset and re-serve",
    subLabel: "Clears serve, dismiss, claim, and impression for the selected scope, then asks the dock for a new decision.",
    icon: closure_8(stateFromStores(15188).UndoIcon, {}),
    onPress: function handleResetAndRefresh() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
  };
  items6[1] = closure_8(stateFromStores(6184).TableRow, {
    label: "Refresh Organic Serve",
    subLabel: "Re-runs the dock decision without clearing delivery state. Use to confirm a cooldown still blocks.",
    icon: closure_8(stateFromStores(15186).RedoIcon, {}),
    onPress: function handleRefreshOrganicServe() {
      const questToDeliver = stateFromStores(9537).fetchQuestToDeliver(stateFromStores(5980).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
      const obj = stateFromStores(9537);
      str(4766).open({ content: "Refreshing dock serve", key: "bounty-qa-refresh" });
    }
  });
  let tmp13Result = null;
  if (null != stateFromStores) {
    let obj7 = {
      label: "Reset Seen",
      subLabel: "Clears the Quest Home NEW pill for the last dock bounty. Does not restore the dock.",
      icon: closure_8(tmp4(6643).EyeIcon, {}),
      onPress: function handleResetSeen() {
          if (null != stateFromStores) {
            items = [tmp];
            QuestActionCreators.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
            ToastActionCreatorsDefault.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
          } else {
            ToastActionCreatorsDefault.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
          }
        }
    };
    tmp13Result = closure_8(tmp4(6184).TableRow, obj7);
  }
  items6[2] = tmp13Result;
  items5[2] = closure_9(stateFromStores(6267).TableRowGroup, { title: "Dock QA", hasIcons: true, children: items6 });
  obj3.children = items5;
  return closure_9(ScrollView, obj3);
});