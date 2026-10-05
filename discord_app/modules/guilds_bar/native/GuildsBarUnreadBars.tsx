// discord_app/modules/guilds_bar/native/GuildsBarUnreadBars.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import debounceDefault from "../../../../_runtime/00551_debounce.js";
import react2 from "../../../../_runtime/00576_react.js";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import SortedGuildStore2 from "../../../stores/SortedGuildStore.tsx";
import FastList from "../../../lib/native/FastList.tsx";
import QuestHooks from "../../quests/native/QuestHooks.native.tsx";
import useYouBarTotalHeight2 from "../../main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import GuildsBarConstants from "GuildsBarConstants.tsx";
import YouBarConstants from "../../main_tabs_v2/native/you_bar/YouBarConstants.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const SortedGuildStore = SortedGuildStore2;
let fastList;

let GUILD_LIST_WIDTH;
let c10;
let closure_12;
let map1;
let unpackModuleId;
function checkNodeAndIterate(arg0) {
  let direction;
  let item;
  let node;
  let section;
  let selectedGuildId;
  let tmp4;
  let tmp5Result;
  let tmp6;
  ({ node, section, item, direction, selectedGuildId } = arg0);
  if (null != node) {
    if (node.type === GuildsNodeType.GUILD) {
      if (node.id !== selectedGuildId) {
        let tmp2;
        if (GuildReadStateStore.getMentionCount(node.id) > 0) {
          tmp2 = node;
        }
        if (null != tmp2) {
          const obj2 = { node: tmp2, section, item };
          if (section == null) {
            section = 0;
          }
          if (item == null) {
            item = 0;
          }
          return obj2;
        }
      }
    }
    let num4 = 0;
    if (1 !== direction) {
      num4 = node.children.length - 1;
    }
    if (0 <= num4) {
      if (num4 < node.children.length) {
        while (true) {
          tmp4 = num4;
          if (null != section) {
            tmp4 = section;
          }
          let obj = { node: node.children[num4], section: tmp4, item: tmp6, direction, selectedGuildId };
          tmp6 = undefined;
          if (null != section) {
            tmp6 = num4;
          }
          tmp5Result = checkNodeAndIterate(obj);
          if (null != tmp5Result) {
            break;
          } else {
            let sum = num4 + direction;
            if (sum >= 0) {
              num4 = sum;
            }
          }
        }
        let tmp10 = tmp5Result;
        if (node.type === GuildsNodeType.FOLDER) {
          tmp10 = tmp5Result;
          if (!node.expanded) {
            tmp10 = { node, section: tmp4 };
            const obj3 = { node, section: tmp4 };
          }
        }
        return tmp10;
      }
    }
  }
}
function findFirstOrLastMentionedItem(scrollPosValue, arg1, selectedGuildId, top, dependencyMap) {
  let getSectionItemFromPosition;
  let item2;
  let obj5;
  let obj7;
  let section;
  const guildsTree = SortedGuildStore.getGuildsTree();
  const root = guildsTree.root;
  ({ scrollPosValue, getSectionItemFromPosition } = scrollPosValue);
  const item = getSectionItemFromPosition(scrollPosValue.get() + dependencyMap).item;
  let layoutStart;
  if (item != null) {
    layoutStart = item.layoutStart;
  }
  if (layoutStart == null) {
    const scrollPosValue2 = scrollPosValue.scrollPosValue;
    layoutStart = scrollPosValue2.get();
  }
  const scrollPosValue3 = scrollPosValue.scrollPosValue;
  section = -1;
  item2 = -1;
  let flag = false;
  const items = scrollPosValue.state.items;
  const diff = scrollPosValue3.get() + scrollPosValue.containerSize - top - (closure_12 + map1);
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (nextResult.layoutStart >= layoutStart) {
      if (tmp4.type === FastList.FastListItemTypes.ITEM) {
        if (tmp4.layoutStart > diff) {
          iter.return();
          break;
        } else if (tmp4.section < constants.GUILDS) {
          if (arg1) {
            flag = true;
            iter.return();
            break;
          }
          break;
        } else {
          if (0 !== tmp4.layoutSize) {
            if (-1 === section) {
              ({ section, item: item2 } = tmp4);
            }
            let type = tmp4.type;
            if (FastList.FastListItemTypes.SECTION === type) {
              let node = guildsTree.getNode(tmp4.recyclerKey);
              let element = node;
              if (null != node) {
                if (element.type === GuildsNodeType.FOLDER) {
                  if (!element.expanded) {
                    let children = element.children;
                    for (const item10094 of children) {
                      if (item10094.type === GuildsNodeType.GUILD) {
                        if (GuildReadStateStore.getMentionCount(tmp24.id) > 0) {
                          flag = true;
                          obj2.return();
                          break;
                        }
                      }
                      continue;
                    }
                    continue;
                  }
                  continue;
                }
              }
              continue;
            } else {
              if (FastList.FastListItemTypes.ITEM === type) {
                let node1 = guildsTree.getNode(tmp4.recyclerKey);
                let tmp12 = node1;
                if (null != node1) {
                  if (tmp12.type === GuildsNodeType.GUILD) {
                    if (GuildReadStateStore.getMentionCount(tmp12.id) > 0) {
                      flag = true;
                      iter.return();
                      break;
                    }
                    break;
                  }
                }
                continue;
              } else {
                let type2 = tmp4.type;
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        if (flag) {
          return closure_17;
        } else {
          let tmp32;
          if (!arg1) {
            let obj = { node: root, direction: 1, selectedGuildId };
            tmp32 = checkNodeAndIterate(obj);
          }
          if (null != tmp32) {
            if (null == tmp32) {
              return closure_17;
            }
          }
          if (null == tmp32) {
            return closure_18;
          } else {
            let sum = tmp32.section + constants.GUILDS;
            if (sum >= section) {
              let tmp37;
              if (sum === section) {
                let num = tmp32.item;
                if (num == null) {
                  num = 0;
                }
              }
              let obj3 = { node: root, direction: -1, selectedGuildId };
              let tmp36 = checkNodeAndIterate(obj3);
              if (null != tmp36) {
                let obj4 = { beforeItem: "Array", afterItem: obj5 };
                obj5 = { section: tmp36.section + tmp50.GUILDS, row: tmp36.item, mention: true };
                tmp37 = obj4;
              } else {
                tmp37 = closure_17;
              }
              return tmp37;
            }
            let obj6 = { beforeItem: obj7, afterItem: "r" };
            obj7 = { section: sum, row: tmp32.item, mention: true };
            return obj6;
          }
        }
      }
    }
    continue;
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const GuildsNodeType = SortedGuildStore2.GuildsNodeType;
({ FastListRenderSections: c10, useGuildWrapperSize: unpackModuleId, GUILD_LIST_WIDTH } = GuildsBarConstants);
({ YOU_BAR_HEIGHT: closure_12, YOU_BAR_MARGIN: map1 } = YouBarConstants);
const jsx = Fragment.jsx;
let obj = { wrapper: { position: "absolute", top: 0, left: 0, bottom: 0, width: GUILD_LIST_WIDTH } };
let closure_15 = createStyles.createStyles(obj);
let closure_17 = { beforeItem: "Array", afterItem: "Set" };
let closure_18 = { beforeItem: { section: 0, row: 0, mention: true }, afterItem: "r" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react2;
      const cResult = obj.c(10);
      const tmp2 = closure_15();
      const top = useSafeAreaInsetsDefault().top;
      const obj2 = QuestHooks;
      const mobileQuestDockHeight = obj2.useMobileQuestDockHeight();
      let num = 8;
      const useYouBarTotalHeight = useYouBarTotalHeight2.useYouBarTotalHeight;
      useYouBarTotalHeight2;
      if (mobileQuestDockHeight > 0) {
        num = 0;
      }
      const youBarTotalHeight = useYouBarTotalHeight(num);
      const sum = mobileQuestDockHeight + youBarTotalHeight;
      if (cResult[0] === sum) {
        let tmp7;
        if (cResult[1] === top) {
          tmp7 = cResult[2];
        }
        if (cResult[3] === tmp2.wrapper) {
          let tmp8;
          if (cResult[4] === tmp7) {
            tmp8 = cResult[5];
          }
          const sum1 = mobileQuestDockHeight + 4 + youBarTotalHeight;
          if (cResult[6] === tmp8) {
            if (cResult[7] === sum1) {
              let tmp10;
              if (cResult[8] === top) {
                tmp10 = cResult[9];
              }
              return tmp10;
            }
          }
          const obj3 = { style: tmp8, paddingStart: top, paddingEnd: sum1 };
          cResult[6] = tmp8;
          cResult[7] = sum1;
          cResult[8] = top;
          cResult[9] = obj3;
          tmp10 = obj3;
        }
        const items = [tmp2.wrapper, tmp7];
        cResult[3] = tmp2.wrapper;
        cResult[4] = tmp7;
        cResult[5] = items;
        tmp8 = items;
      }
      const rect = { top, bottom: sum };
      cResult[0] = sum;
      cResult[1] = top;
      cResult[2] = rect;
      tmp7 = rect;
    }
  : () => {
      const tmp = closure_15();
      let closure_0 = tmp;
      const top = useSafeAreaInsetsDefault().top;
      let obj = QuestHooks;
      const mobileQuestDockHeight = obj.useMobileQuestDockHeight();
      let num = 8;
      const useYouBarTotalHeight = useYouBarTotalHeight2.useYouBarTotalHeight;
      useYouBarTotalHeight2;
      if (mobileQuestDockHeight > 0) {
        num = 0;
      }
      const youBarTotalHeight = useYouBarTotalHeight(num);
      let items = [tmp.wrapper, top, mobileQuestDockHeight, youBarTotalHeight];
      return react.useMemo(() => {
        let items;
        const obj = { style: items, paddingStart: top, paddingEnd: mobileQuestDockHeight + 4 + youBarTotalHeight };
        items = [wrapper.wrapper];
        const rect = { top, bottom: mobileQuestDockHeight + youBarTotalHeight };
        items[1] = rect;
        return obj;
      }, items);
    };
const __initData = {
  code: "function GuildsBarUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}",
};
const __initData2 = {
  code: "function GuildsBarUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}",
};
const __initData3 = {
  code: "function GuildsBarUnreadBarsTsx3(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}",
};
const __initData4 = {
  code: "function GuildsBarUnreadBarsTsx4(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}",
};
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (fastList) => {
        let afterItem;
        let beforeItem;
        let closure_4;
        let paddingStart;
        let style;
        let tmp9;
        let top;
        let obj = fastList(576);
        const cResult = obj.c(22);
        fastList = fastList.fastList;
        let tmp4 = top;
        top = top(1618)().top;
        const result = closure_11() / 2;
        dependencyMap = result;
        if (cResult[0] === fastList) {
          if (cResult[1] === result) {
            let tmp6;
            if (cResult[2] === top) {
              tmp6 = cResult[3];
            }
            const tmp8 = _slicedToArray(react.useState(tmp6), 2);
            [tmp9, _slicedToArray] = tmp8;
            ({ beforeItem, afterItem } = tmp9);
            const obj2 = react;
            if (cResult[4] === fastList) {
              if (cResult[5] === result) {
                let tmp10;
                let tmp13;
                let tmp12;
                if (cResult[6] === top) {
                  tmp10 = cResult[7];
                }
                react = tmp10;
                if (cResult[8] !== tmp10) {
                  const fn2 = function w() {
                    const items = [GuildReadStateStore, SelectedGuildStore, SortedGuildStore];
                    const batchedStoreListener = new get_initialized.BatchedStoreListener(items, closure_4);
                    batchedStoreListener.attach("guild-mention-bars");
                    return () => {
                      batchedStoreListener.detach();
                    };
                  };
                  let items = [tmp10];
                  cResult[8] = tmp10;
                  cResult[9] = fn2;
                  class C {
                    constructor() {
                      return scrollPosValue.get();
                    }
                  }
                  cResult[10] = items;
                  tmp13 = items;
                  tmp12 = fn2;
                } else {
                  tmp12 = cResult[9];
                  tmp13 = cResult[10];
                }
                const effect = obj2.useEffect(tmp12, tmp13);
                const scrollPosValue = fastList.scrollPosValue;
                const tmpResult = fastList(4612);
                class C {
                  constructor() {
                    return scrollPosValue.get();
                  }
                }
                const obj3 = { scrollPosValue };
                C.__closure = obj3;
                C.__workletHash = 16367582542434;
                C.__initData = __initData;
                class B {
                  constructor(arg0, arg1) {
                    if (arg0 !== arg1) {
                      const obj = ReanimatedRexport;
                      obj.runOnJS(closure_4)();
                    }
                  }
                }
                const useAnimatedReaction = tmpResult.useAnimatedReaction;
                B.__closure = { runOnJS: fastList(4612).runOnJS, debouncedUpdate: tmp10 };
                B.__workletHash = 13727289405147;
                B.__initData = __initData2;
                const obj4 = { runOnJS: fastList(4612).runOnJS, debouncedUpdate: tmp10 };
                const animatedReaction = useAnimatedReaction(C, B);
                const tmp20 = closure_20();
                ({ style, paddingStart } = tmp20);
                const paddingEnd = tmp20.paddingEnd;
                if (cResult[11] === fastList) {
                  if (cResult[12] === paddingEnd) {
                    let tmp21;
                    if (cResult[13] === paddingStart) {
                      tmp21 = cResult[14];
                    }
                    if (cResult[15] === afterItem) {
                      if (cResult[16] === beforeItem) {
                        let tmp22;
                        if (cResult[17] === tmp21) {
                          tmp22 = cResult[18];
                        }
                        if (cResult[19] === style) {
                          let tmp25;
                          if (cResult[20] === tmp22) {
                            tmp25 = cResult[21];
                          }
                          return tmp25;
                        }
                        class C {
                          constructor() {
                            return scrollPosValue.get();
                          }
                        }
                        cResult[19] = style;
                        cResult[20] = tmp22;
                        cResult[21] = tmp28;
                        tmp25 = tmp28;
                      }
                    }
                    class C {
                      constructor() {
                        return scrollPosValue.get();
                      }
                    }
                    cResult[15] = afterItem;
                    cResult[16] = beforeItem;
                    cResult[17] = tmp21;
                    class B {
                      constructor(arg0, arg1) {
                        if (arg0 !== arg1) {
                          const obj = ReanimatedRexport;
                          obj.runOnJS(closure_4)();
                        }
                      }
                    }
                    tmp22 = tmp24;
                  }
                }
                const fn3 = function x(arg0) {
                  const scrollToLocation = fastList.scrollToLocation;
                  const obj = { paddingStart, paddingEnd, orientation: "visible" };
                  const merged = Object.assign(arg0);
                  scrollToLocation(obj);
                };
                cResult[11] = fastList;
                cResult[12] = paddingEnd;
                cResult[13] = paddingStart;
                cResult[14] = fn3;
                tmp21 = fn3;
              }
            }
            const tmp11 = tmp4(551)(() => {
              const tmp3 = GuildReadStateStore.getPrivateChannelMentionCount() > 0;
              let guildId = SelectedGuildStore.getGuildId();
              if (guildId == null) {
                guildId = null;
              }
              let closure_0 = findFirstOrLastMentionedItem(fastList, tmp3, guildId, top, dependencyMap);
              _slicedToArray((afterItem) => {
                let tmp4;
                if (afterItem === afterItem) {
                  tmp4 = afterItem;
                } else {
                  tmp4 = afterItem;
                  if (top(closure_2_2[17])(afterItem.afterItem, afterItem.afterItem)) {
                    tmp4 = afterItem;
                  }
                }
                return tmp4;
              });
            }, 100);
            cResult[4] = fastList;
            cResult[5] = result;
            cResult[6] = top;
            cResult[7] = tmp11;
            tmp10 = tmp11;
          }
        }
        const fn = function f() {
          const tmp3 = GuildReadStateStore.getPrivateChannelMentionCount() > 0;
          let guildId = SelectedGuildStore.getGuildId();
          if (guildId == null) {
            guildId = null;
          }
          return findFirstOrLastMentionedItem(fastList, tmp3, guildId, top, dependencyMap);
        };
        cResult[0] = fastList;
        cResult[1] = result;
        cResult[2] = top;
        cResult[3] = fn;
        tmp6 = fn;
      }
    : (fastList) => {
        let afterItem;
        let beforeItem;
        let c2;
        let c3;
        let tmp3;
        const f123844 = () => {
          const tmp3 = GuildReadStateStore.getPrivateChannelMentionCount() > 0;
          let guildId = SelectedGuildStore.getGuildId();
          if (guildId == null) {
            guildId = null;
          }
          return findFirstOrLastMentionedItem(fastList, tmp3, guildId, top, c2);
        };
        fastList = fastList.fastList;
        let top;
        _slicedToArray = undefined;
        let memo;
        let paddingStart;
        let paddingEnd;
        top = top(1618)().top;
        const result = closure_11() / 2;
        dependencyMap = result;
        [tmp3, c3] = memo.useState(f123844);
        let items = [fastList, top, result];
        ({ beforeItem, afterItem } = tmp3);
        _slicedToArray(memo.useState(f123844), 2);
        memo = memo.useMemo(
          () =>
            debounceDefault(() => {
              const tmp3 = paddingStart.getPrivateChannelMentionCount() > 0;
              let guildId = paddingEnd.getGuildId();
              if (guildId == null) {
                guildId = null;
              }
              let closure_0 = findFirstOrLastMentionedItem(fastList, tmp3, guildId, top, closure_1_2);
              closure_1_3((afterItem) => {
                let tmp4;
                if (afterItem === afterItem) {
                  tmp4 = afterItem;
                } else {
                  tmp4 = afterItem;
                  if (closure_2_1(closure_2_2[17])(afterItem.afterItem, afterItem.afterItem)) {
                    tmp4 = afterItem;
                  }
                }
                return tmp4;
              });
            }, 100),
          items,
        );
        const items1 = [memo];
        const effect = memo.useEffect(() => {
          const items = [GuildReadStateStore, SelectedGuildStore, SortedGuildStore];
          const batchedStoreListener = new get_initialized.BatchedStoreListener(items, memo);
          batchedStoreListener.attach("guild-mention-bars");
          return () => {
            batchedStoreListener.detach();
          };
        }, items1);
        const scrollPosValue = fastList.scrollPosValue;
        let obj = fastList(4612);
        class M {
          constructor() {
            return scrollPosValue.get();
          }
        }
        M.__closure = { scrollPosValue };
        M.__workletHash = 263168135840;
        M.__initData = __initData3;
        class O {
          constructor(arg0, arg1) {
            if (arg0 !== arg1) {
              const obj = ReanimatedRexport;
              obj.runOnJS(memo)();
            }
          }
        }
        O.__closure = { runOnJS: fastList(4612).runOnJS, debouncedUpdate: memo };
        O.__workletHash = 3399641848221;
        O.__initData = __initData4;
        ({ runOnJS: fastList(4612).runOnJS, debouncedUpdate: memo });
        const animatedReaction = obj.useAnimatedReaction(M, O);
        const tmp7 = closure_20();
        paddingStart = tmp7.paddingStart;
        paddingEnd = tmp7.paddingEnd;
        const items2 = [fastList, paddingStart, paddingEnd];
        const callback = memo.useCallback((arg0) => {
          const scrollToLocation = fastList.scrollToLocation;
          const obj = { paddingStart, paddingEnd, orientation: "visible" };
          const merged = Object.assign(arg0);
          scrollToLocation(obj);
        }, items2);
        return (
          <scrollPosValue
            style={tmp7.style}
            collapsable={false}
            pointerEvents="box-none"
            testID="guilds-bar-unread-bars"
          >
            {null}
          </scrollPosValue>
        );
      },
);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarUnreadBars.tsx");

export default memoResult;
