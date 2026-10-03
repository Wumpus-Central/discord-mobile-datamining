// === Module 15491: DevToolsBountyQaScreen ===

// Module 15491 (DevToolsBountyQaScreen)
import nativeDefault from "native" /* 587 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import QuestActionCreators from "QuestActionCreators" /* 9994 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7184 */;

const require = globalThis.__r;

require = fn;
function toast(content, key) {
  ToastActionCreatorsDefault.open({ content, key });
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let items = [{ value: "15", label: "Last 15 minutes" }, { value: "60", label: "Last hour" }, { value: "1440", label: "Last 24 hours" }];
const createStyles = fn(4890);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, content: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.content = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBountyQaScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(39);
  const tmp4 = closure_11();
  let obj = require("c");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [AdDeliveryStore];
    const fn = function h() {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      value = deliveryAdDecisionByPlacement.get(closure_0(5626).AdPlacement.MOBILE_HOME_DOCK_AREA);
      let creative;
      if (value != null) {
        creative = value.creative;
      }
      const deliveredBounty = closure_0(7185).getDeliveredBounty(creative);
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
  const tmp5 = str(1618)();
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
          let tmp17 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor() {
              obj = closure_0(closure_1_2[16]);
              questToDeliver = obj.fetchQuestToDeliver(closure_0(closure_1_2[12]).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
              obj2 = closure_1(closure_1_2[8]);
              openResult = obj2.open({ content: "Refreshing dock serve", key: "bounty-qa-refresh" });
              return;
            }
          }
          cResult[8] = D;
        } else {
          class D {
            constructor() {
              obj = closure_0(closure_1_2[16]);
              questToDeliver = obj.fetchQuestToDeliver(closure_0(closure_1_2[12]).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
              obj2 = closure_1(closure_1_2[8]);
              openResult = obj2.open({ content: "Refreshing dock serve", key: "bounty-qa-refresh" });
              return;
            }
          }
        }
        if (cResult[9] !== stateFromStores) {
          class B {
            constructor() {
              if (null != closure_0) {
                tmp5 = closure_0;
                tmp6 = closure_2;
                obj2 = closure_0(closure_2[16]);
                tmp7 = closure_2;
                items = [];
                items[0] = tmp;
                markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                tmp9 = closure_1;
                tmp10 = closure_2;
                obj3 = closure_1(closure_2[8]);
                openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
              } else {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[8]);
                openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
              }
              return;
            }
          }
          cResult[9] = stateFromStores;
          cResult[10] = B;
        } else {
          class B {
            constructor() {
              if (null != closure_0) {
                tmp5 = closure_0;
                tmp6 = closure_2;
                obj2 = closure_0(closure_2[16]);
                tmp7 = closure_2;
                items = [];
                items[0] = tmp;
                markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                tmp9 = closure_1;
                tmp10 = closure_2;
                obj3 = closure_1(closure_2[8]);
                openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
              } else {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[8]);
                openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
              }
              return;
            }
          }
        }
        const sum = tmp4.content.padding + tmp5.bottom;
        if (cResult[11] !== sum) {
          class B {
            constructor() {
              if (null != closure_0) {
                tmp5 = closure_0;
                tmp6 = closure_2;
                obj2 = closure_0(closure_2[16]);
                tmp7 = closure_2;
                items = [];
                items[0] = tmp;
                markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                tmp9 = closure_1;
                tmp10 = closure_2;
                obj3 = closure_1(closure_2[8]);
                openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
              } else {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[8]);
                openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
              }
              return;
            }
          }
          tmp23[0] = sum;
          cResult[11] = sum;
          cResult[12] = tmp23;
        } else {
          class B {
            constructor() {
              if (null != closure_0) {
                tmp5 = closure_0;
                tmp6 = closure_2;
                obj2 = closure_0(closure_2[16]);
                tmp7 = closure_2;
                items = [];
                items[0] = tmp;
                markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                tmp9 = closure_1;
                tmp10 = closure_2;
                obj3 = closure_1(closure_2[8]);
                openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
              } else {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[8]);
                openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
              }
              return;
            }
          }
        }
        if (cResult[13] === tmp4.content) {
          class B {
            constructor() {
              if (null != closure_0) {
                tmp5 = closure_0;
                tmp6 = closure_2;
                obj2 = closure_0(closure_2[16]);
                tmp7 = closure_2;
                items = [];
                items[0] = tmp;
                markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                tmp9 = closure_1;
                tmp10 = closure_2;
                obj3 = closure_1(closure_2[8]);
                openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
              } else {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[8]);
                openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
              }
              return;
            }
          }
          let str4 = "No dock bounty in memory (app kill or refresh). Use a lookback window.";
          if (tmp10) {
            class B {
              constructor() {
                if (null != closure_0) {
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  obj2 = closure_0(closure_2[16]);
                  tmp7 = closure_2;
                  items = [];
                  items[0] = tmp;
                  markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                  tmp9 = closure_1;
                  tmp10 = closure_2;
                  obj3 = closure_1(closure_2[8]);
                  openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                } else {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[8]);
                  openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                }
                return;
              }
            }
            str4 = "Last dock bounty still in memory: " + stateFromStores + ".";
          }
          if (cResult[16] !== str4) {
            class B {
              constructor() {
                if (null != closure_0) {
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  obj2 = closure_0(closure_2[16]);
                  tmp7 = closure_2;
                  items = [];
                  items[0] = tmp;
                  markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                  tmp9 = closure_1;
                  tmp10 = closure_2;
                  obj3 = closure_1(closure_2[8]);
                  openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                } else {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[8]);
                  openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                }
                return;
              }
            }
            let obj2 = { variant: "text-sm/medium", color: "text-muted", children: str4 };
            const tmp26 = closure_8(tmp(4886).Text, obj2);
            cResult[16] = str4;
            cResult[17] = tmp26;
          } else {
            class B {
              constructor() {
                if (null != closure_0) {
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  obj2 = closure_0(closure_2[16]);
                  tmp7 = closure_2;
                  items = [];
                  items[0] = tmp;
                  markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                  tmp9 = closure_1;
                  tmp10 = closure_2;
                  obj3 = closure_1(closure_2[8]);
                  openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                } else {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[8]);
                  openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                }
                return;
              }
            }
          }
          if (cResult[18] !== tmp14) {
            class B {
              constructor() {
                if (null != closure_0) {
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  obj2 = closure_0(closure_2[16]);
                  tmp7 = closure_2;
                  items = [];
                  items[0] = tmp;
                  markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                  tmp9 = closure_1;
                  tmp10 = closure_2;
                  obj3 = closure_1(closure_2[8]);
                  openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                } else {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[8]);
                  openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                }
                return;
              }
            }
            cResult[18] = tmp14;
            cResult[19] = tmp28;
          } else {
            class B {
              constructor() {
                if (null != closure_0) {
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  obj2 = closure_0(closure_2[16]);
                  tmp7 = closure_2;
                  items = [];
                  items[0] = tmp;
                  markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                  tmp9 = closure_1;
                  tmp10 = closure_2;
                  obj3 = closure_1(closure_2[8]);
                  openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                } else {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[8]);
                  openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                }
                return;
              }
            }
          }
          if (cResult[20] === str) {
            class B {
              constructor() {
                if (null != closure_0) {
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  obj2 = closure_0(closure_2[16]);
                  tmp7 = closure_2;
                  items = [];
                  items[0] = tmp;
                  markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                  tmp9 = closure_1;
                  tmp10 = closure_2;
                  obj3 = closure_1(closure_2[8]);
                  openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                } else {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[8]);
                  openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                }
                return;
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              class B {
                constructor() {
                  if (null != closure_0) {
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    obj2 = closure_0(closure_2[16]);
                    tmp7 = closure_2;
                    items = [];
                    items[0] = tmp;
                    markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                    tmp9 = closure_1;
                    tmp10 = closure_2;
                    obj3 = closure_1(closure_2[8]);
                    openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                  } else {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[8]);
                    openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                  }
                  return;
                }
              }
              const tmp33 = closure_8(tmp(14906).UndoIcon, {});
              cResult[23] = tmp33;
              const tmp32 = tmp33;
            } else {
              class B {
                constructor() {
                  if (null != closure_0) {
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    obj2 = closure_0(closure_2[16]);
                    tmp7 = closure_2;
                    items = [];
                    items[0] = tmp;
                    markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                    tmp9 = closure_1;
                    tmp10 = closure_2;
                    obj3 = closure_1(closure_2[8]);
                    openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                  } else {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[8]);
                    openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                  }
                  return;
                }
              }
            }
            if (cResult[24] !== tmp17) {
              class B {
                constructor() {
                  if (null != closure_0) {
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    obj2 = closure_0(closure_2[16]);
                    tmp7 = closure_2;
                    items = [];
                    items[0] = tmp;
                    markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                    tmp9 = closure_1;
                    tmp10 = closure_2;
                    obj3 = closure_1(closure_2[8]);
                    openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                  } else {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[8]);
                    openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                  }
                  return;
                }
              }
              let obj3 = { label: "Reset and re-serve", subLabel: "Clears serve, dismiss, claim, and impression for the selected scope, then asks the dock for a new decision.", icon: tmp32, onPress: tmp17 };
              const tmp35 = closure_8(tmp(5993).TableRow, obj3);
              cResult[24] = tmp17;
              cResult[25] = tmp35;
            } else {
              class B {
                constructor() {
                  if (null != closure_0) {
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    obj2 = closure_0(closure_2[16]);
                    tmp7 = closure_2;
                    items = [];
                    items[0] = tmp;
                    markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                    tmp9 = closure_1;
                    tmp10 = closure_2;
                    obj3 = closure_1(closure_2[8]);
                    openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                  } else {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[8]);
                    openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                  }
                  return;
                }
              }
            }
            const _Symbol3 = Symbol;
            if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
              class B {
                constructor() {
                  if (null != closure_0) {
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    obj2 = closure_0(closure_2[16]);
                    tmp7 = closure_2;
                    items = [];
                    items[0] = tmp;
                    markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                    tmp9 = closure_1;
                    tmp10 = closure_2;
                    obj3 = closure_1(closure_2[8]);
                    openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                  } else {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[8]);
                    openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                  }
                  return;
                }
              }
              const obj4 = { label: "Refresh Organic Serve", subLabel: "Re-runs the dock decision without clearing delivery state. Use to confirm a cooldown still blocks.", icon: closure_8(tmp(14904).RedoIcon, {}), onPress: D };
              const tmp37 = closure_8(tmp(5993).TableRow, obj4);
              cResult[26] = tmp37;
              const tmp36 = tmp37;
            } else {
              class B {
                constructor() {
                  if (null != closure_0) {
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    obj2 = closure_0(closure_2[16]);
                    tmp7 = closure_2;
                    items = [];
                    items[0] = tmp;
                    markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                    tmp9 = closure_1;
                    tmp10 = closure_2;
                    obj3 = closure_1(closure_2[8]);
                    openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                  } else {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[8]);
                    openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                  }
                  return;
                }
              }
            }
            if (cResult[27] === B) {
              class B {
                constructor() {
                  if (null != closure_0) {
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    obj2 = closure_0(closure_2[16]);
                    tmp7 = closure_2;
                    items = [];
                    items[0] = tmp;
                    markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                    tmp9 = closure_1;
                    tmp10 = closure_2;
                    obj3 = closure_1(closure_2[8]);
                    openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                  } else {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[8]);
                    openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                  }
                  return;
                }
              }
              if (cResult[30] === tmp34) {
                class B {
                  constructor() {
                    if (null != closure_0) {
                      tmp5 = closure_0;
                      tmp6 = closure_2;
                      obj2 = closure_0(closure_2[16]);
                      tmp7 = closure_2;
                      items = [];
                      items[0] = tmp;
                      markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                      tmp9 = closure_1;
                      tmp10 = closure_2;
                      obj3 = closure_1(closure_2[8]);
                      openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                    } else {
                      tmp2 = closure_1;
                      tmp3 = closure_2;
                      obj = closure_1(closure_2[8]);
                      openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                    }
                    return;
                  }
                }
                if (cResult[33] === tmp4.container) {
                  class B {
                    constructor() {
                      if (null != closure_0) {
                        tmp5 = closure_0;
                        tmp6 = closure_2;
                        obj2 = closure_0(closure_2[16]);
                        tmp7 = closure_2;
                        items = [];
                        items[0] = tmp;
                        markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                        tmp9 = closure_1;
                        tmp10 = closure_2;
                        obj3 = closure_1(closure_2[8]);
                        openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                      } else {
                        tmp2 = closure_1;
                        tmp3 = closure_2;
                        obj = closure_1(closure_2[8]);
                        openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                      }
                      return;
                    }
                  }
                }
                let obj5 = { style: tmp4.container, contentContainerStyle: tmp24, children: null };
                const items1 = [tmp25, tmp29, tmp40];
                obj5.children = items1;
                const tmp46 = closure_9(ScrollView, obj5);
                cResult[33] = tmp4.container;
                cResult[34] = tmp25;
                cResult[35] = tmp29;
                cResult[36] = tmp40;
                cResult[37] = tmp24;
                cResult[38] = tmp46;
              }
              const obj6 = { title: "Dock QA", hasIcons: true, children: null };
              const items2 = [tmp34, tmp36, tmp38];
              obj6.children = items2;
              const tmp42 = closure_9(tmp(6074).TableRowGroup, obj6);
              cResult[30] = tmp34;
              cResult[31] = tmp38;
              cResult[32] = tmp42;
            }
            let tmp39 = null;
            if (tmp10) {
              class B {
                constructor() {
                  if (null != closure_0) {
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    obj2 = closure_0(closure_2[16]);
                    tmp7 = closure_2;
                    items = [];
                    items[0] = tmp;
                    markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
                    tmp9 = closure_1;
                    tmp10 = closure_2;
                    obj3 = closure_1(closure_2[8]);
                    openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
                  } else {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[8]);
                    openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
                  }
                  return;
                }
              }
              let obj7 = { label: "Reset Seen", subLabel: "Clears the Quest Home NEW pill for the last dock bounty. Does not restore the dock.", icon: closure_8(tmp(6458).EyeIcon, {}), onPress: B };
              tmp39 = closure_8(tmp(5993).TableRow, obj7);
            }
            cResult[27] = B;
            cResult[28] = tmp10;
            cResult[29] = tmp39;
          }
          let obj8 = { title: "Reset scope", description: "Used by Reset and re-serve. Refresh Organic Serve ignores this.", value: str, onChange: tmp12[1], hasIcons: false, children: tmp28 };
          const tmp31 = closure_8(tmp(6072).TableRadioGroup, obj8);
          cResult[20] = str;
          cResult[21] = tmp28;
          cResult[22] = tmp31;
        }
        const items3 = [tmp4.content, tmp23];
        cResult[13] = tmp4.content;
        cResult[14] = tmp23;
        cResult[15] = items3;
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
            return { value: "IconComponent", done: "IconComponent" };
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
                    return { value: "IconComponent", done: "IconComponent" };
                  } else {
                    c1 = 3;
                    c3 = 1;
                    const obj7 = { value: tmp3(10949).resetCreativePreviewDeliveryState(tmp22, tmp3(5626).AdPlacement.MOBILE_HOME_DOCK_AREA), done: false };
                    return obj7;
                  }
                } else {
                  const _Number = Number;
                  const NumberResult = Number(tmp37);
                  c1 = 2;
                  c3 = 1;
                  const obj8 = { value: tmp3(10949).resetPreviewDeliveryStateLookback(NumberResult), done: false };
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
                const questToDeliver = tmp3(9994).fetchQuestToDeliver(tmp3(5626).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
                toast("Reset delivery state and refreshing dock", "bounty-qa-reset-and-refresh");
                c2 = 0;
                const obj2 = tmp3(9994);
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
      tmp17 = handleResetAndRefresh;
    }
  }
  if (null != stateFromStores) {
    class B {
      constructor() {
        if (null != closure_0) {
          tmp5 = closure_0;
          tmp6 = closure_2;
          obj2 = closure_0(closure_2[16]);
          tmp7 = closure_2;
          items = [];
          items[0] = tmp;
          markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
          tmp9 = closure_1;
          tmp10 = closure_2;
          obj3 = closure_1(closure_2[8]);
          openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
        } else {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[8]);
          openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
        }
        return;
      }
    }
    const _HermesInternal = HermesInternal;
    tmp16[2] = "Creative " + stateFromStores;
    const items4 = [tmp16];
  } else {
    class B {
      constructor() {
        if (null != closure_0) {
          tmp5 = closure_0;
          tmp6 = closure_2;
          obj2 = closure_0(closure_2[16]);
          tmp7 = closure_2;
          items = [];
          items[0] = tmp;
          markAdContentUnseenResult = obj2.markAdContentUnseen(closure_0(closure_2[17]).AdCreativeType.BOUNTY, items);
          tmp9 = closure_1;
          tmp10 = closure_2;
          obj3 = closure_1(closure_2[8]);
          openResult = obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
        } else {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[8]);
          openResult1 = obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
        }
        return;
      }
    }
  }
  const items5 = [...items];
  cResult[num3] = stateFromStores;
  cResult[3] = null != stateFromStores;
  num3 = 4;
  cResult[4] = items5;
  const tmpResult = require("initialize");
}) : (() => {
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
        return { value: "IconComponent", done: "IconComponent" };
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
                return { value: "IconComponent", done: "IconComponent" };
              } else {
                c1 = 3;
                c3 = 1;
                const obj7 = { value: tmp3(10949).resetCreativePreviewDeliveryState(tmp22, tmp3(5626).AdPlacement.MOBILE_HOME_DOCK_AREA), done: false };
                return obj7;
              }
            } else {
              const _Number = Number;
              const NumberResult = Number(tmp37);
              c1 = 2;
              c3 = 1;
              const obj8 = { value: tmp3(10949).resetPreviewDeliveryStateLookback(NumberResult), done: false };
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
            const questToDeliver = tmp3(9994).fetchQuestToDeliver(tmp3(5626).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
            toast("Reset delivery state and refreshing dock", "bounty-qa-reset-and-refresh");
            dependencyMap = 0;
            const obj2 = tmp3(9994);
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
  const tmp3 = str(1618)();
  items = [AdDeliveryStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
    const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
    value = deliveryAdDecisionByPlacement.get(stateFromStores(5626).AdPlacement.MOBILE_HOME_DOCK_AREA);
    let creative;
    if (value != null) {
      creative = value.creative;
    }
    const deliveredBounty = stateFromStores(7185).getDeliveredBounty(creative);
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
  const items5 = [closure_8(stateFromStores(4886).Text, { variant: "text-sm/medium", color: "text-muted", children: str4 }), , ];
  let obj = stateFromStores(504);
  items5[1] = closure_8(stateFromStores(6072).TableRadioGroup, {
    title: "Reset scope",
    description: "Used by Reset and re-serve. Refresh Organic Serve ignores this.",
    value: str,
    onChange: tmp8[1],
    hasIcons: false,
    children: items3.map((value) => {
      value = value.value;
      ({ label, subLabel } = value);
      return closure_1_8(stateFromStores(6071).TableRadioRow, { value, label, subLabel }, value);
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
      return closure_1_8(stateFromStores(6071).TableRadioRow, { value, label, subLabel }, value);
    })
  };
  const items6 = [
    closure_8(stateFromStores(5993).TableRow, {
      label: "Reset and re-serve",
      subLabel: "Clears serve, dismiss, claim, and impression for the selected scope, then asks the dock for a new decision.",
      icon: closure_8(stateFromStores(14906).UndoIcon, {}),
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
    icon: closure_8(stateFromStores(14906).UndoIcon, {}),
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
  items6[1] = closure_8(stateFromStores(5993).TableRow, {
    label: "Refresh Organic Serve",
    subLabel: "Re-runs the dock decision without clearing delivery state. Use to confirm a cooldown still blocks.",
    icon: closure_8(stateFromStores(14904).RedoIcon, {}),
    onPress: function handleRefreshOrganicServe() {
      const questToDeliver = stateFromStores(9994).fetchQuestToDeliver(stateFromStores(5626).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
      const obj = stateFromStores(9994);
      str(4568).open({ content: "Refreshing dock serve", key: "bounty-qa-refresh" });
    }
  });
  let tmp13Result = null;
  if (null != stateFromStores) {
    let obj7 = {
      label: "Reset Seen",
      subLabel: "Clears the Quest Home NEW pill for the last dock bounty. Does not restore the dock.",
      icon: closure_8(tmp4(6458).EyeIcon, {}),
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
    tmp13Result = closure_8(tmp4(5993).TableRow, obj7);
  }
  items6[2] = tmp13Result;
  items5[2] = closure_9(stateFromStores(6074).TableRowGroup, { title: "Dock QA", hasIcons: true, children: items6 });
  obj3.children = items5;
  return closure_9(ScrollView, obj3);
});