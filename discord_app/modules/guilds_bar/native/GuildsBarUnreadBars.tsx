// discord_app/modules/guilds_bar/native/GuildsBarUnreadBars.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import debounceDefault from "../../../../_runtime/00551_debounce.js";
import c from "../../../../_runtime/00576_c.js";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import FastList from "../../../lib/native/FastList.tsx";
import QuestHooks from "../../quests/native/QuestHooks.native.tsx";
import useYouBarTotalHeight from "../../main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";

require = fn;
function checkNodeAndIterate(arg0) {
  let tmp4;
  let tmp5Result;
  ({ node, section, item, direction, selectedGuildId } = arg0);
  if (null != node) {
    if (node.type === GuildsNodeType.GUILD) {
      if (node.id !== selectedGuildId) {
        let tmp2;
        if (GuildReadStateStore.getMentionCount(node.id) > 0) {
          tmp2 = node;
        }
        if (null != tmp2) {
          const obj2 = { node: tmp2, section: null, item: null };
          if (section == null) {
            section = 0;
          }
          obj2.section = section;
          if (item == null) {
            item = 0;
          }
          obj2.item = item;
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
          let obj = { node: node.children[num4], section: tmp4, item: null, direction: null, selectedGuildId: null };
          let tmp6;
          if (null != section) {
            tmp6 = num4;
          }
          obj.item = tmp6;
          obj.direction = direction;
          obj.selectedGuildId = selectedGuildId;
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
            const obj3 = { node, section: tmp4 };
            tmp10 = obj3;
          }
        }
        return tmp10;
      }
    }
  }
}
function findFirstOrLastMentionedItem(scrollPosValue, arg1, selectedGuildId, top, c2) {
  const guildsTree = SortedGuildStore.getGuildsTree();
  const root = guildsTree.root;
  ({ scrollPosValue, getSectionItemFromPosition } = scrollPosValue);
  const item = getSectionItemFromPosition(scrollPosValue.get() + c2).item;
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
  const diff = scrollPosValue3.get() + scrollPosValue.containerSize - top - (__initData + map1);
  const iter = scrollPosValue.state.items[Symbol.iterator]();
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
              if (sum === section) {
                let num = tmp32.item;
                if (num == null) {
                  num = 0;
                }
              }
              let obj3 = { node: root, direction: -1, selectedGuildId };
              let tmp36 = checkNodeAndIterate(obj3);
              if (null != tmp36) {
                let obj4 = { beforeItem: "Array", afterItem: false };
                let obj5 = { section: tmp36.section + tmp50.GUILDS, row: tmp36.item, mention: true };
                obj4.afterItem = obj5;
                let tmp37 = obj4;
              } else {
                tmp37 = closure_17;
              }
              return tmp37;
            }
            let obj6 = { beforeItem: null, afterItem: "Array" };
            let obj7 = { section: sum, row: tmp32.item, mention: true };
            obj6.beforeItem = obj7;
            return obj6;
          }
        }
      }
    }
    continue;
  }
}
const View = fn(17).View;
const GuildsNodeType = fn(5963).GuildsNodeType;
const GuildsBarConstants = fn(16715);
({ FastListRenderSections: c10, useGuildWrapperSize: closure_11, GUILD_LIST_WIDTH } = GuildsBarConstants);
const YouBarConstants = fn(15350);
({ YOU_BAR_HEIGHT: closure_12, YOU_BAR_MARGIN: map1 } = YouBarConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_15 = createStyles.createStyles({
  wrapper: { position: "absolute", top: 0, left: 0, bottom: 0, width: GUILD_LIST_WIDTH },
});
let closure_17 = { beforeItem: "backgroundColor", afterItem: "IconComponent" };
let closure_18 = { beforeItem: { section: 0, row: 0, mention: true }, afterItem: "Array" };
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useUnreadBarWrapperStyles() {
      const cResult = c.c(10);
      const tmp2 = closure_15();
      const top = useSafeAreaInsetsDefault().top;
      const mobileQuestDockHeight = QuestHooks.useMobileQuestDockHeight();
      let num = 8;
      if (mobileQuestDockHeight > 0) {
        num = 0;
      }
      const youBarTotalHeight = useYouBarTotalHeight.useYouBarTotalHeight(num);
      const sum = mobileQuestDockHeight + youBarTotalHeight;
      if (cResult[0] === sum) {
        if (cResult[1] === top) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === tmp2.wrapper) {
          if (cResult[4] === tmp6) {
            let tmp7 = cResult[5];
          }
          const sum1 = mobileQuestDockHeight + 4 + youBarTotalHeight;
          if (cResult[6] === tmp7) {
            if (cResult[7] === sum1) {
              if (cResult[8] === top) {
                let tmp9 = cResult[9];
              }
              return tmp9;
            }
          }
          const obj4 = { style: tmp7, paddingStart: top, paddingEnd: sum1 };
          cResult[6] = tmp7;
          cResult[7] = sum1;
          cResult[8] = top;
          cResult[9] = obj4;
          tmp9 = obj4;
        }
        const items = [tmp2.wrapper, tmp6];
        cResult[3] = tmp2.wrapper;
        cResult[4] = tmp6;
        cResult[5] = items;
        tmp7 = items;
      }
      const rect = { top, bottom: sum };
      cResult[0] = sum;
      cResult[1] = top;
      cResult[2] = rect;
      tmp6 = rect;
    }
  : function useUnreadBarWrapperStyles() {
      const tmp = closure_15();
      const wrapper = tmp;
      const top = useSafeAreaInsetsDefault().top;
      const mobileQuestDockHeight = QuestHooks.useMobileQuestDockHeight();
      let num = 8;
      if (mobileQuestDockHeight > 0) {
        num = 0;
      }
      const youBarTotalHeight = useYouBarTotalHeight.useYouBarTotalHeight(num);
      let items = [tmp.wrapper, top, mobileQuestDockHeight, youBarTotalHeight];
      return noop.useMemo(() => {
        const obj = { style: null, paddingStart: top, paddingEnd: mobileQuestDockHeight + 4 + youBarTotalHeight };
        const items = [wrapper.wrapper];
        const rect = { top, bottom: mobileQuestDockHeight + youBarTotalHeight };
        items[1] = rect;
        obj.style = items;
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
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarUnreadBars.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GuildsBarUnreadBars(fastList) {
        const cResult = fastList(576).c(22);
        fastList = fastList.fastList;
        top = top(1631)().top;
        const result = closure_11() / 2;
        dependencyMap = result;
        if (cResult[0] === fastList) {
          if (cResult[1] === result) {
            if (cResult[2] === top) {
              let tmp6 = cResult[3];
            }
            [tmp9, _slicedToArray] = noop.useState(tmp6);
            ({ beforeItem, afterItem } = tmp9);
            if (cResult[4] === fastList) {
              if (cResult[5] === result) {
                if (cResult[6] === top) {
                  let tmp10 = cResult[7];
                }
                noop = tmp10;
                if (cResult[8] !== tmp10) {
                  class E {
                    constructor() {
                      items = [, ,];
                      items[0] = closure_6;
                      items[1] = closure_7;
                      items[2] = closure_8;
                      batchedStoreListener = new closure_0(closure_2[18]).BatchedStoreListener(items, closure_4);
                      closure_0 = batchedStoreListener;
                      attachResult = batchedStoreListener.attach("guild-mention-bars");
                      return () => {
                        batchedStoreListener.detach();
                      };
                    }
                  }
                  let items = [tmp10];
                  cResult[8] = tmp10;
                  cResult[9] = E;
                  class C {
                    constructor() {
                      return scrollPosValue.get();
                    }
                  }
                  cResult[10] = items;
                  let tmp13 = items;
                } else {
                  class E {
                    constructor() {
                      items = [, ,];
                      items[0] = closure_6;
                      items[1] = closure_7;
                      items[2] = closure_8;
                      batchedStoreListener = new closure_0(closure_2[18]).BatchedStoreListener(items, closure_4);
                      closure_0 = batchedStoreListener;
                      attachResult = batchedStoreListener.attach("guild-mention-bars");
                      return () => {
                        batchedStoreListener.detach();
                      };
                    }
                  }
                  tmp13 = cResult[10];
                }
                const effect = obj2.useEffect(E, tmp13);
                const scrollPosValue = fastList.scrollPosValue;
                class C {
                  constructor() {
                    return scrollPosValue.get();
                  }
                }
                const obj3 = { scrollPosValue };
                C.__closure = obj3;
                C.__workletHash = 16367582542434;
                C.__initData = __initData;
                const fn2 = function k(arg0, arg1) {
                  if (arg0 !== arg1) {
                    ReanimatedRexport.runOnJS(closure_4)();
                  }
                };
                const obj4 = { runOnJS: tmp(4850).runOnJS, debouncedUpdate: tmp10 };
                fn2.__closure = obj4;
                fn2.__workletHash = 13727289405147;
                fn2.__initData = __initData2;
                const animatedReaction = tmp(4850).useAnimatedReaction(C, fn2);
                const tmp19 = closure_20();
                ({ style, paddingStart } = tmp19);
                const paddingEnd = tmp19.paddingEnd;
                if (cResult[11] === fastList) {
                  class E {
                    constructor() {
                      items = [, ,];
                      items[0] = closure_6;
                      items[1] = closure_7;
                      items[2] = closure_8;
                      batchedStoreListener = new closure_0(closure_2[18]).BatchedStoreListener(items, closure_4);
                      closure_0 = batchedStoreListener;
                      attachResult = batchedStoreListener.attach("guild-mention-bars");
                      return () => {
                        batchedStoreListener.detach();
                      };
                    }
                  }
                }
                const fn3 = function x(arg0) {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj.paddingStart = paddingStart;
                  obj.paddingEnd = paddingEnd;
                  obj.orientation = "visible";
                  fastList.scrollToLocation(obj);
                };
                cResult[11] = fastList;
                cResult[12] = paddingEnd;
                cResult[13] = paddingStart;
                cResult[14] = fn3;
                const tmpResult = tmp(4850);
              }
            }
            const tmp11 = tmp4(551)(() => {
              let guildId = SelectedGuildStore.getGuildId();
              if (guildId == null) {
                guildId = null;
              }
              const afterItem = findFirstOrLastMentionedItem(
                fastList,
                GuildReadStateStore.getPrivateChannelMentionCount() > 0,
                guildId,
                top,
                result,
              );
              _slicedToArray((afterItem) => {
                if (afterItem === afterItem) {
                  let tmp4 = afterItem;
                } else {
                  tmp4 = afterItem;
                  if (top(result[17])(afterItem.afterItem, afterItem.afterItem)) {
                    tmp4 = afterItem;
                  }
                }
                return tmp4;
              });
              const tmp3 = GuildReadStateStore.getPrivateChannelMentionCount() > 0;
            }, 100);
            cResult[4] = fastList;
            cResult[5] = result;
            cResult[6] = top;
            cResult[7] = tmp11;
            tmp10 = tmp11;
            obj2 = noop;
            const tmp8 = _slicedToArray(noop.useState(tmp6), 2);
          }
        }
        const fn = function f() {
          let guildId = SelectedGuildStore.getGuildId();
          if (guildId == null) {
            guildId = null;
          }
          return findFirstOrLastMentionedItem(
            fastList,
            GuildReadStateStore.getPrivateChannelMentionCount() > 0,
            guildId,
            top,
            result,
          );
        };
        cResult[0] = fastList;
        cResult[1] = result;
        cResult[2] = top;
        cResult[3] = fn;
        tmp6 = fn;
        let obj = fastList(576);
        tmp4 = top;
      }
    : function GuildsBarUnreadBars(fastList) {
        fastList = fastList.fastList;
        let top;
        _slicedToArray = undefined;
        let memo;
        let paddingStart;
        let paddingEnd;
        top = top(1631)().top;
        const result = closure_11() / 2;
        dependencyMap = result;
        [tmp3, c3] = memo.useState(() => {
          let guildId = SelectedGuildStore.getGuildId();
          if (guildId == null) {
            guildId = null;
          }
          return findFirstOrLastMentionedItem(
            fastList,
            GuildReadStateStore.getPrivateChannelMentionCount() > 0,
            guildId,
            top,
            c2,
          );
        });
        let items = [fastList, top, result];
        ({ beforeItem, afterItem } = tmp3);
        memo = memo.useMemo(
          () =>
            debounceDefault(() => {
              let guildId = paddingEnd.getGuildId();
              if (guildId == null) {
                guildId = null;
              }
              const afterItem = findFirstOrLastMentionedItem(
                fastList,
                paddingStart.getPrivateChannelMentionCount() > 0,
                guildId,
                top,
                closure_1_2,
              );
              closure_1_3((afterItem) => {
                if (afterItem === afterItem) {
                  let tmp4 = afterItem;
                } else {
                  tmp4 = afterItem;
                  if (top(closure_2_2[17])(afterItem.afterItem, afterItem.afterItem)) {
                    tmp4 = afterItem;
                  }
                }
                return tmp4;
              });
              const tmp3 = paddingStart.getPrivateChannelMentionCount() > 0;
            }, 100),
          items,
        );
        const items1 = [memo];
        const effect = memo.useEffect(() => {
          const items = [GuildReadStateStore, SelectedGuildStore, SortedGuildStore];
          const batchedStoreListener = new initialize.BatchedStoreListener(items, memo);
          batchedStoreListener.attach("guild-mention-bars");
          return () => {
            batchedStoreListener.detach();
          };
        }, items1);
        const scrollPosValue = fastList.scrollPosValue;
        const tmp2 = _slicedToArray(
          memo.useState(() => {
            let guildId = SelectedGuildStore.getGuildId();
            if (guildId == null) {
              guildId = null;
            }
            return findFirstOrLastMentionedItem(
              fastList,
              GuildReadStateStore.getPrivateChannelMentionCount() > 0,
              guildId,
              top,
              c2,
            );
          }),
          2,
        );
        class B {
          constructor() {
            return scrollPosValue.get();
          }
        }
        B.__closure = { scrollPosValue };
        B.__workletHash = 263168135840;
        B.__initData = __initData3;
        class T {
          constructor(arg0, arg1) {
            if (fastList !== arg1) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[19]);
              tmp3 = closure_4;
              tmp4 = obj.runOnJS(closure_4)();
            }
            return;
          }
        }
        let obj = fastList(4850);
        T.__closure = { runOnJS: fastList(4850).runOnJS, debouncedUpdate: memo };
        T.__workletHash = 3399641848221;
        T.__initData = __initData4;
        const animatedReaction = obj.useAnimatedReaction(B, T);
        const tmp7 = closure_20();
        paddingStart = tmp7.paddingStart;
        paddingEnd = tmp7.paddingEnd;
        const items2 = [fastList, paddingStart, paddingEnd];
        const obj3 = {
          style: tmp7.style,
          collapsable: false,
          pointerEvents: "box-none",
          testID: "guilds-bar-unread-bars",
          children: null,
        };
        const callback = memo.useCallback((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.paddingStart = paddingStart;
          obj.paddingEnd = paddingEnd;
          obj.orientation = "visible";
          fastList.scrollToLocation(obj);
        }, items2);
        obj3.children = jsx(top(16789), { beforeItem, afterItem, scrollToLocation: callback, compact: true });
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
