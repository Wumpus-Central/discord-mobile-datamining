// === Module 15511: DevToolsBountyQaScreen ===

// Module 15511 (DevToolsBountyQaScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import AdCreativeType from "AdCreativeType" /* 5637 */;
import QuestActionCreators from "QuestActionCreators" /* 10007 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7197 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, c1, c3;

let c9;
let metroImportAll;
let obj2;
let obj3;
function toast(content, key) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { content, key };
  obj.open(obj2);
}
const ScrollView = react_native.ScrollView;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let items = [{ value: "15", label: "Last 15 minutes" }, { value: "60", label: "Last hour" }, { value: "1440", label: "Last 24 hours" }];
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items1;
  let items2;
  let stateFromStores;
  let str;
  let tmp14;
  let tmp6;
  let tmp7;
  const tmp = stateFromStores;
  let obj = stateFromStores(576);
  const cResult = obj.c(39);
  const tmp4 = closure_11();
  const tmp5 = str(1618)();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [AdDeliveryStore];
    const fn = function h() {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      const value = deliveryAdDecisionByPlacement.get(stateFromStores(dependencyMap[12]).AdPlacement.MOBILE_HOME_DOCK_AREA);
      let creative;
      const getDeliveredBounty = stateFromStores(dependencyMap[13]).getDeliveredBounty;
      stateFromStores(dependencyMap[13]);
      if (value != null) {
        creative = value.creative;
      }
      const deliveredBounty = getDeliveredBounty(creative);
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
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  str = "15";
  let str2 = "15";
  const useState = react.useState;
  if (null != stateFromStores) {
    str2 = "most_recent";
  }
  [first, tmp14] = useState(str2);
  if ("most_recent" !== first) {
    str = first;
  }
  if (cResult[2] === stateFromStores) {
    let tmp15;
    if (cResult[3] === null != stateFromStores) {
      tmp15 = cResult[4];
    }
    if (cResult[5] === stateFromStores) {
      let tmp18;
      if (cResult[6] === str) {
        tmp18 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            const obj = stateFromStores(dependencyMap[16]);
            const questToDeliver = obj.fetchQuestToDeliver(stateFromStores(dependencyMap[12]).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
            const obj2 = str(dependencyMap[8]);
            obj2.open({ content: "Refreshing dock serve", key: "bounty-qa-refresh" });
          }
        }
        cResult[8] = D;
      } else {
        class D {
          constructor() {
            const obj = stateFromStores(dependencyMap[16]);
            const questToDeliver = obj.fetchQuestToDeliver(stateFromStores(dependencyMap[12]).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
            const obj2 = str(dependencyMap[8]);
            obj2.open({ content: "Refreshing dock serve", key: "bounty-qa-refresh" });
          }
        }
      }
      if (cResult[9] !== stateFromStores) {
        class B {
          constructor() {
            if (null != stateFromStores) {
              items = [tmp];
              const obj2 = QuestActionCreators;
              obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
              const obj3 = ToastActionCreatorsDefault;
              obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
            } else {
              const obj = ToastActionCreatorsDefault;
              obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
            }
          }
        }
        cResult[9] = stateFromStores;
        cResult[10] = B;
      } else {
        class B {
          constructor() {
            if (null != stateFromStores) {
              items = [tmp];
              const obj2 = QuestActionCreators;
              obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
              const obj3 = ToastActionCreatorsDefault;
              obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
            } else {
              const obj = ToastActionCreatorsDefault;
              obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
            }
          }
        }
      }
      const sum = tmp4.content.padding + tmp5.bottom;
      const container = tmp4.container;
      if (cResult[11] !== sum) {
        class B {
          constructor() {
            if (null != stateFromStores) {
              items = [tmp];
              const obj2 = QuestActionCreators;
              obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
              const obj3 = ToastActionCreatorsDefault;
              obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
            } else {
              const obj = ToastActionCreatorsDefault;
              obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
            }
          }
        }
        tmp24[0] = sum;
        cResult[11] = sum;
        cResult[12] = tmp24;
      } else {
        class B {
          constructor() {
            if (null != stateFromStores) {
              items = [tmp];
              const obj2 = QuestActionCreators;
              obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
              const obj3 = ToastActionCreatorsDefault;
              obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
            } else {
              const obj = ToastActionCreatorsDefault;
              obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
            }
          }
        }
      }
      if (cResult[13] === tmp4.content) {
        let tmp26;
        class B {
          constructor() {
            if (null != stateFromStores) {
              items = [tmp];
              const obj2 = QuestActionCreators;
              obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
              const obj3 = ToastActionCreatorsDefault;
              obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
            } else {
              const obj = ToastActionCreatorsDefault;
              obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
            }
          }
        }
        let str4 = "No dock bounty in memory (app kill or refresh). Use a lookback window.";
        if (null != stateFromStores) {
          class B {
            constructor() {
              if (null != stateFromStores) {
                items = [tmp];
                const obj2 = QuestActionCreators;
                obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                const obj3 = ToastActionCreatorsDefault;
                obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
              } else {
                const obj = ToastActionCreatorsDefault;
                obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
              }
            }
          }
          str4 = "Last dock bounty still in memory: " + stateFromStores + ".";
        }
        if (cResult[16] !== str4) {
          class B {
            constructor() {
              if (null != stateFromStores) {
                items = [tmp];
                const obj2 = QuestActionCreators;
                obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                const obj3 = ToastActionCreatorsDefault;
                obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
              } else {
                const obj = ToastActionCreatorsDefault;
                obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
              }
            }
          }
          let obj2 = { variant: "text-sm/medium", color: "text-muted", children: str4 };
          const tmp27 = closure_8(tmp(4892).Text, obj2);
          cResult[16] = str4;
          cResult[17] = tmp27;
          tmp26 = tmp27;
        } else {
          class B {
            constructor() {
              if (null != stateFromStores) {
                items = [tmp];
                const obj2 = QuestActionCreators;
                obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                const obj3 = ToastActionCreatorsDefault;
                obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
              } else {
                const obj = ToastActionCreatorsDefault;
                obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
              }
            }
          }
        }
        if (cResult[18] !== tmp15) {
          class B {
            constructor() {
              if (null != stateFromStores) {
                items = [tmp];
                const obj2 = QuestActionCreators;
                obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                const obj3 = ToastActionCreatorsDefault;
                obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
              } else {
                const obj = ToastActionCreatorsDefault;
                obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
              }
            }
          }
          cResult[18] = tmp15;
          cResult[19] = tmp29;
        } else {
          class B {
            constructor() {
              if (null != stateFromStores) {
                items = [tmp];
                const obj2 = QuestActionCreators;
                obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                const obj3 = ToastActionCreatorsDefault;
                obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
              } else {
                const obj = ToastActionCreatorsDefault;
                obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
              }
            }
          }
        }
        if (cResult[20] === str) {
          let tmp33;
          let tmp37;
          class B {
            constructor() {
              if (null != stateFromStores) {
                items = [tmp];
                const obj2 = QuestActionCreators;
                obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                const obj3 = ToastActionCreatorsDefault;
                obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
              } else {
                const obj = ToastActionCreatorsDefault;
                obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            class B {
              constructor() {
                if (null != stateFromStores) {
                  items = [tmp];
                  const obj2 = QuestActionCreators;
                  obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                  const obj3 = ToastActionCreatorsDefault;
                  obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                } else {
                  const obj = ToastActionCreatorsDefault;
                  obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                }
              }
            }
            const tmp34 = closure_8(tmp(14926).UndoIcon, {});
            cResult[23] = tmp34;
            tmp33 = tmp34;
          } else {
            class B {
              constructor() {
                if (null != stateFromStores) {
                  items = [tmp];
                  const obj2 = QuestActionCreators;
                  obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                  const obj3 = ToastActionCreatorsDefault;
                  obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                } else {
                  const obj = ToastActionCreatorsDefault;
                  obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                }
              }
            }
          }
          if (cResult[24] !== tmp18) {
            class B {
              constructor() {
                if (null != stateFromStores) {
                  items = [tmp];
                  const obj2 = QuestActionCreators;
                  obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                  const obj3 = ToastActionCreatorsDefault;
                  obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                } else {
                  const obj = ToastActionCreatorsDefault;
                  obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                }
              }
            }
            let obj3 = { label: "Reset and re-serve", subLabel: "Clears serve, dismiss, claim, and impression for the selected scope, then asks the dock for a new decision.", icon: tmp33, onPress: tmp18 };
            cResult[24] = tmp18;
            cResult[25] = closure_8(tmp(6000).TableRow, obj3);
            const tmp36 = closure_8(tmp(6000).TableRow, obj3);
          } else {
            class B {
              constructor() {
                if (null != stateFromStores) {
                  items = [tmp];
                  const obj2 = QuestActionCreators;
                  obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                  const obj3 = ToastActionCreatorsDefault;
                  obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                } else {
                  const obj = ToastActionCreatorsDefault;
                  obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                }
              }
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
            class B {
              constructor() {
                if (null != stateFromStores) {
                  items = [tmp];
                  const obj2 = QuestActionCreators;
                  obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                  const obj3 = ToastActionCreatorsDefault;
                  obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                } else {
                  const obj = ToastActionCreatorsDefault;
                  obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                }
              }
            }
            let obj4 = { label: "Refresh Organic Serve", subLabel: "Re-runs the dock decision without clearing delivery state. Use to confirm a cooldown still blocks.", icon: closure_8(tmp(14924).RedoIcon, {}), onPress: D };
            const TableRow = tmp(6000).TableRow;
            const tmp38 = closure_8(TableRow, obj4);
            cResult[26] = tmp38;
            tmp37 = tmp38;
          } else {
            class B {
              constructor() {
                if (null != stateFromStores) {
                  items = [tmp];
                  const obj2 = QuestActionCreators;
                  obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                  const obj3 = ToastActionCreatorsDefault;
                  obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                } else {
                  const obj = ToastActionCreatorsDefault;
                  obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                }
              }
            }
          }
          if (cResult[27] === B) {
            class B {
              constructor() {
                if (null != stateFromStores) {
                  items = [tmp];
                  const obj2 = QuestActionCreators;
                  obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                  const obj3 = ToastActionCreatorsDefault;
                  obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                } else {
                  const obj = ToastActionCreatorsDefault;
                  obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                }
              }
            }
            if (cResult[30] === tmp35) {
              class B {
                constructor() {
                  if (null != stateFromStores) {
                    items = [tmp];
                    const obj2 = QuestActionCreators;
                    obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                    const obj3 = ToastActionCreatorsDefault;
                    obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                  } else {
                    const obj = ToastActionCreatorsDefault;
                    obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                  }
                }
              }
              if (cResult[33] === tmp4.container) {
                class B {
                  constructor() {
                    if (null != stateFromStores) {
                      items = [tmp];
                      const obj2 = QuestActionCreators;
                      obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                      const obj3 = ToastActionCreatorsDefault;
                      obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                    } else {
                      const obj = ToastActionCreatorsDefault;
                      obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                    }
                  }
                }
              }
              let obj5 = { style: container, contentContainerStyle: tmp25, children: items1 };
              items1 = [tmp26, tmp30, tmp41];
              cResult[33] = tmp4.container;
              cResult[34] = tmp26;
              cResult[35] = tmp30;
              cResult[36] = tmp41;
              cResult[37] = tmp25;
              cResult[38] = closure_9(ScrollView, obj5);
              const tmp47 = closure_9(ScrollView, obj5);
            }
            let obj6 = { title: "Dock QA", hasIcons: true, children: items2 };
            items2 = [tmp35, tmp37, tmp39];
            cResult[30] = tmp35;
            cResult[31] = tmp39;
            cResult[32] = closure_9(tmp(6081).TableRowGroup, obj6);
            const tmp43 = closure_9(tmp(6081).TableRowGroup, obj6);
          }
          let tmp40 = null;
          if (null != stateFromStores) {
            class B {
              constructor() {
                if (null != stateFromStores) {
                  items = [tmp];
                  const obj2 = QuestActionCreators;
                  obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
                  const obj3 = ToastActionCreatorsDefault;
                  obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                } else {
                  const obj = ToastActionCreatorsDefault;
                  obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                }
              }
            }
            let obj7 = { label: "Reset Seen", subLabel: "Clears the Quest Home NEW pill for the last dock bounty. Does not restore the dock.", icon: closure_8(tmp(6465).EyeIcon, {}), onPress: B };
            const TableRow2 = tmp(6000).TableRow;
            tmp40 = closure_8(TableRow2, obj7);
          }
          cResult[27] = B;
          cResult[28] = null != stateFromStores;
          cResult[29] = tmp40;
        }
        let obj8 = { title: "Reset scope", description: "Used by Reset and re-serve. Refresh Organic Serve ignores this.", value: str, onChange: tmp14, hasIcons: false, children: tmp29 };
        cResult[20] = str;
        cResult[21] = tmp29;
        cResult[22] = closure_8(tmp(6079).TableRadioGroup, obj8);
        const tmp32 = closure_8(tmp(6079).TableRadioGroup, obj8);
      }
      const items3 = [tmp4.content, tmp24];
      cResult[13] = tmp4.content;
      cResult[14] = tmp24;
      cResult[15] = items3;
    }
    _require = _asyncToGenerator(async () => {
      let obj4;
      let obj6;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c2;
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
                if (null == tmp) {
                  toast("No dock bounty in memory. Pick a lookback window.", "bounty-qa-missing-id");
                  c2 = 0;
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                } else {
                  c1 = 3;
                  c3 = 1;
                  const obj7 = { value: obj6.resetCreativePreviewDeliveryState(tmp19, tmp(dependencyMap[12]).AdPlacement.MOBILE_HOME_DOCK_AREA), done: false };
                  obj6 = tmp(dependencyMap[15]);
                  return obj7;
                }
              } else {
                const _Number = Number;
                const NumberResult = Number(tmp33);
                c1 = 2;
                c3 = 1;
                const obj8 = { value: obj4.resetPreviewDeliveryStateLookback(NumberResult), done: false };
                obj4 = tmp(dependencyMap[15]);
                return obj8;
              }
            }
          } else {
            if (1 === c1) {
              c2 = 0;
              toast("Failed to reset delivery state", "bounty-qa-reset-delivery-failed");
            } else {
              if (2 === c1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 0;
                  c3 = 3;
                  const obj9 = { value, done: true };
                  return obj9;
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
              const obj2 = tmp(dependencyMap[16]);
              const questToDeliver = obj2.fetchQuestToDeliver(tmp(dependencyMap[12]).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
              toast("Reset delivery state and refreshing dock", "bounty-qa-reset-and-refresh");
              c2 = 0;
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp26) {
          if (0 === c2) {
            c3 = 3;
            throw tmp26;
          } else {
            c1 = 1;
          }
        }
      }
    });
    function handleResetAndRefresh() {
      return closure_0(...arguments);
    }
    cResult[5] = stateFromStores;
    cResult[6] = str;
    cResult[7] = handleResetAndRefresh;
    tmp18 = handleResetAndRefresh;
  }
  if (null != stateFromStores) {
    class B {
      constructor() {
        if (null != stateFromStores) {
          items = [tmp];
          const obj2 = QuestActionCreators;
          obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
          const obj3 = ToastActionCreatorsDefault;
          obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
        } else {
          const obj = ToastActionCreatorsDefault;
          obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
        }
      }
    }
    const _HermesInternal = HermesInternal;
    tmp17[2] = "Creative " + stateFromStores;
    const items4 = [tmp17];
  } else {
    class B {
      constructor() {
        if (null != stateFromStores) {
          items = [tmp];
          const obj2 = QuestActionCreators;
          obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
          const obj3 = ToastActionCreatorsDefault;
          obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
        } else {
          const obj = ToastActionCreatorsDefault;
          obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
        }
      }
    }
  }
  const items5 = [...items];
  cResult[2] = stateFromStores;
  cResult[3] = null != stateFromStores;
  cResult[4] = items5;
  tmp15 = items5;
}) : (() => {
  let first;
  let items4;
  let items5;
  let stateFromStores;
  let str;
  let tmp10;
  let obj = function _handleResetAndRefresh2() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let obj4;
      let obj6;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c2;
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
              if ("most_recent" === str) {
                if (null == stateFromStores) {
                  closure_1_12("No dock bounty in memory. Pick a lookback window.", "bounty-qa-missing-id");
                  c2 = 0;
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                } else {
                  c1 = 3;
                  c3 = 1;
                  const obj7 = { value: obj6.resetCreativePreviewDeliveryState(tmp19, tmp(c2[12]).AdPlacement.MOBILE_HOME_DOCK_AREA), done: false };
                  obj6 = tmp(c2[15]);
                  return obj7;
                }
              } else {
                const _Number = Number;
                const NumberResult = Number(tmp33);
                c1 = 2;
                c3 = 1;
                const obj8 = { value: obj4.resetPreviewDeliveryStateLookback(NumberResult), done: false };
                obj4 = tmp(c2[15]);
                return obj8;
              }
            }
          } else {
            if (1 === c1) {
              c2 = 0;
              closure_1_12("Failed to reset delivery state", "bounty-qa-reset-delivery-failed");
            } else {
              if (2 === c1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 0;
                  c3 = 3;
                  const obj9 = { value, done: true };
                  return obj9;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c3 = 3;
                obj = { value, done: true };
                return obj;
              }
              const obj2 = tmp(c2[16]);
              const questToDeliver = obj2.fetchQuestToDeliver(tmp(c2[12]).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
              closure_1_12("Reset delivery state and refreshing dock", "bounty-qa-reset-and-refresh");
              c2 = 0;
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp26) {
          if (0 === c2) {
            c3 = 3;
            throw tmp26;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_11();
  const tmp2 = obj;
  const tmp3 = str(obj[11])();
  obj = stateFromStores(obj[14]);
  items = [AdDeliveryStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
    const value = deliveryAdDecisionByPlacement.get(stateFromStores(obj[12]).AdPlacement.MOBILE_HOME_DOCK_AREA);
    let creative;
    const getDeliveredBounty = stateFromStores(obj[13]).getDeliveredBounty;
    stateFromStores(obj[13]);
    if (value != null) {
      creative = value.creative;
    }
    const deliveredBounty = getDeliveredBounty(creative);
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
  const useState = react.useState;
  if (null != stateFromStores) {
    str2 = "most_recent";
  }
  [first, tmp10] = useState(str2);
  if ("most_recent" !== first) {
    str = first;
  }
  if (null != stateFromStores) {
    let obj2 = { value: "most_recent", label: "Most recent", subLabel: "Creative " + stateFromStores };
    const _HermesInternal = HermesInternal;
    const items1 = [obj2];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const items3 = [...items];
  let obj3 = { style: tmp.container, contentContainerStyle: items4, children: items5 };
  items4 = [tmp.content, { paddingBottom: tmp.content.padding + tmp3.bottom }];
  let str4 = "No dock bounty in memory (app kill or refresh). Use a lookback window.";
  const Text = tmp4(tmp2[18]).Text;
  if (null != stateFromStores) {
    const _HermesInternal2 = HermesInternal;
    str4 = "Last dock bounty still in memory: " + stateFromStores + ".";
  }
  items5 = [closure_8(Text, { variant: "text-sm/medium", color: "text-muted", children: str4 }), , ];
  let obj4 = {
    title: "Reset scope",
    description: "Used by Reset and re-serve. Refresh Organic Serve ignores this.",
    value: str,
    onChange: tmp10,
    hasIcons: false,
    children: items3.map((value) => {
      let label;
      let subLabel;
      value = value.value;
      ({ label, subLabel } = value);
      return closure_1_8(stateFromStores(obj[19]).TableRadioRow, { value, label, subLabel }, value);
    })
  };
  const TableRadioGroup = tmp4(tmp2[20]).TableRadioGroup;
  items5[1] = closure_8(TableRadioGroup, obj4);
  const TableRowGroup = tmp4(tmp2[25]).TableRowGroup;
  let obj5 = {
    label: "Reset and re-serve",
    subLabel: "Clears serve, dismiss, claim, and impression for the selected scope, then asks the dock for a new decision.",
    icon: closure_8(tmp4(tmp2[21]).UndoIcon, {}),
    onPress: function handleResetAndRefresh() {
      return obj(...arguments);
    }
  };
  const TableRow = tmp4(tmp2[22]).TableRow;
  const items6 = [closure_8(TableRow, obj5), , ];
  let obj6 = {
    label: "Refresh Organic Serve",
    subLabel: "Re-runs the dock decision without clearing delivery state. Use to confirm a cooldown still blocks.",
    icon: closure_8(tmp4(tmp2[23]).RedoIcon, {}),
    onPress: function handleRefreshOrganicServe() {
      obj = stateFromStores(obj[16]);
      const questToDeliver = obj.fetchQuestToDeliver(stateFromStores(obj[12]).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
      const obj2 = str(obj[8]);
      obj2.open({ content: "Refreshing dock serve", key: "bounty-qa-refresh" });
    }
  };
  const TableRow2 = tmp4(tmp2[22]).TableRow;
  items6[1] = closure_8(TableRow2, obj6);
  let tmp14Result = null;
  if (null != stateFromStores) {
    let obj7 = {
      label: "Reset Seen",
      subLabel: "Clears the Quest Home NEW pill for the last dock bounty. Does not restore the dock.",
      icon: closure_8(tmp4(tmp2[24]).EyeIcon, {}),
      onPress: function handleResetSeen() {
          if (null != stateFromStores) {
            items = [tmp];
            const obj2 = QuestActionCreators;
            obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
            const obj3 = ToastActionCreatorsDefault;
            obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
          } else {
            obj = ToastActionCreatorsDefault;
            obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
          }
        }
    };
    const TableRow3 = tmp4(tmp2[22]).TableRow;
    tmp14Result = closure_8(TableRow3, obj7);
  }
  items6[2] = tmp14Result;
  items5[2] = closure_9(TableRowGroup, { title: "Dock QA", hasIcons: true, children: items6 });
  return closure_9(ScrollView, obj3);
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBountyQaScreen.tsx");

export default tmp4;