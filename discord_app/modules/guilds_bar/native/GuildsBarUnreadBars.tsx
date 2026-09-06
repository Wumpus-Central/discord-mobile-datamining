// discord_app/modules/guilds_bar/native/GuildsBarUnreadBars.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import debounceDefault from "../../../../_runtime/00551_debounce.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import FastList from "../../../lib/native/FastList.tsx";
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
          let obj = { node: tmp2, section: null, item: null };
          if (section == null) {
            section = 0;
          }
          obj.section = section;
          if (item == null) {
            item = 0;
          }
          obj.item = item;
          return obj;
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
          obj = { node: node.children[num4], section: tmp4, item: null, direction: null, selectedGuildId: null };
          let tmp6;
          let tmp5 = checkNodeAndIterate;
          if (null != section) {
            tmp6 = num4;
          }
          obj.item = tmp6;
          obj.direction = direction;
          obj.selectedGuildId = selectedGuildId;
          tmp5Result = tmp5(obj);
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
            obj = { node, section: tmp4 };
            tmp10 = obj;
          }
        }
        return tmp10;
      }
    }
  }
}
function findFirstOrLastMentionedItem(scrollPosValue, arg1, selectedGuildId, arg3, arg4) {
  const guildsTree = SortedGuildStore.getGuildsTree();
  const root = guildsTree.root;
  ({ scrollPosValue, getSectionItemFromPosition } = scrollPosValue);
  const item = getSectionItemFromPosition(scrollPosValue.get() + arg4).item;
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
  const diff = scrollPosValue3.get() + scrollPosValue.containerSize - arg3 - (closure_1_12 + map1);
  const iter = scrollPosValue.state.items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (nextResult.layoutStart >= layoutStart) {
      let tmp41 = require;
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
            if (tmp41(7072).FastListItemTypes.SECTION === type) {
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
                          obj1.return();
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
              if (tmp41(7072).FastListItemTypes.ITEM === type) {
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
              obj = { node: root, direction: -1, selectedGuildId };
              let tmp36 = checkNodeAndIterate(obj);
              if (null != tmp36) {
                let obj1 = { beforeItem: "Array", afterItem: 0 };
                let obj2 = { section: tmp36.section + tmp50.GUILDS, row: tmp36.item, mention: true };
                obj1.afterItem = obj2;
                let tmp37 = obj1;
              } else {
                tmp37 = closure_17;
              }
              return tmp37;
            }
            let obj3 = { beforeItem: null, afterItem: "a" };
            let obj4 = { section: sum, row: tmp32.item, mention: true };
            obj3.beforeItem = obj4;
            return obj3;
          }
        }
      }
    }
    continue;
  }
}
const View = fn(17).View;
const GuildsNodeType = fn(5438).GuildsNodeType;
const GuildsBarConstants = fn(16285);
({ FastListRenderSections: c10, useGuildWrapperSize: closure_11, GUILD_LIST_WIDTH } = GuildsBarConstants);
const YouBarConstants = fn(15098);
({ YOU_BAR_HEIGHT: closure_12, YOU_BAR_MARGIN: map1 } = YouBarConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_15 = createStyles.createStyles({
  wrapper: { position: "absolute", top: 0, left: 0, bottom: 0, width: GUILD_LIST_WIDTH },
});
let closure_17 = { beforeItem: "hash", afterItem: "call" };
let closure_18 = { beforeItem: { section: 0, row: 0, mention: true }, afterItem: "a" };
const __initData = {
  code: "function GuildsBarUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}",
};
const __initData2 = {
  code: "function GuildsBarUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarUnreadBars.tsx");

export default noop.memo(function GuildsBarUnreadBars(fastList) {
  fastList = fastList.fastList;
  _require = fastList;
  let top2;
  let mobileQuestDockHeight;
  youBarTotalHeight = undefined;
  let memo;
  let paddingStart;
  let paddingEnd;
  const top = top2(mobileQuestDockHeight[11])().top;
  top2 = top;
  const result = closure_11() / 2;
  mobileQuestDockHeight = result;
  let obj = memo;
  [tmp5, youBarTotalHeight] = youBarTotalHeight(
    memo.useState(() => {
      let guildId = SelectedGuildStore.getGuildId();
      if (guildId == null) {
        guildId = null;
      }
      return findFirstOrLastMentionedItem(
        closure_0,
        GuildReadStateStore.getPrivateChannelMentionCount() > 0,
        guildId,
        top2,
        mobileQuestDockHeight,
      );
    }),
    2,
  );
  let items = [fastList, top, result];
  ({ beforeItem, afterItem } = tmp5);
  memo = memo.useMemo(
    () =>
      debounceDefault(() => {
        let guildId = paddingEnd.getGuildId();
        if (guildId == null) {
          guildId = null;
        }
        closure_0 = findFirstOrLastMentionedItem(
          closure_1_0,
          paddingStart.getPrivateChannelMentionCount() > 0,
          guildId,
          top2,
          mobileQuestDockHeight,
        );
        youBarTotalHeight((afterItem) => {
          if (afterItem === closure_0) {
            let tmp4 = afterItem;
          } else {
            tmp4 = tmp;
            if (top2(mobileQuestDockHeight[15])(afterItem.afterItem, tmp.afterItem)) {
              tmp4 = tmp;
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
    const batchedStoreListener = new initialize.BatchedStoreListener(items, memo);
    batchedStoreListener.attach("guild-mention-bars");
    return () => {
      batchedStoreListener.detach();
    };
  }, items1);
  const scrollPosValue = fastList.scrollPosValue;
  const tmp = top2;
  let tmp2 = mobileQuestDockHeight;
  let tmp4 = youBarTotalHeight(
    memo.useState(() => {
      let guildId = SelectedGuildStore.getGuildId();
      if (guildId == null) {
        guildId = null;
      }
      return findFirstOrLastMentionedItem(
        closure_0,
        GuildReadStateStore.getPrivateChannelMentionCount() > 0,
        guildId,
        top2,
        mobileQuestDockHeight,
      );
    }),
    2,
  );
  class D {
    constructor() {
      return scrollPosValue.get();
    }
  }
  D.__closure = { scrollPosValue };
  D.__workletHash = 16367582542434;
  D.__initData = __initData;
  class O {
    constructor(arg0, arg1) {
      if (fastList !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[17]);
        tmp3 = closure_4;
        tmp4 = obj.runOnJS(closure_4)();
      }
      return;
    }
  }
  obj = { runOnJS: require("ReanimatedRexport").runOnJS, debouncedUpdate: memo };
  O.__closure = obj;
  O.__workletHash = 13727289405147;
  O.__initData = __initData2;
  const animatedReaction = require("ReanimatedRexport").useAnimatedReaction(D, O);
  top2 = undefined;
  mobileQuestDockHeight = undefined;
  youBarTotalHeight = undefined;
  const tmp9 = closure_15();
  _require = tmp9;
  top2 = top2(mobileQuestDockHeight[11])().top;
  const obj2 = require("ReanimatedRexport");
  mobileQuestDockHeight = require("QuestHooks").useMobileQuestDockHeight();
  const obj4 = require("QuestHooks");
  let num = 8;
  if (mobileQuestDockHeight > 0) {
    num = 0;
  }
  youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight(num);
  const items2 = [tmp9.wrapper, top2, mobileQuestDockHeight, youBarTotalHeight];
  const memo1 = obj.useMemo(() => {
    const obj = { style: null, paddingStart: top2, paddingEnd: mobileQuestDockHeight + 4 + youBarTotalHeight };
    const items = [closure_0.wrapper];
    const rect = { top: top2, bottom: mobileQuestDockHeight + youBarTotalHeight };
    items[1] = rect;
    obj.style = items;
    return obj;
  }, items2);
  paddingStart = memo1.paddingStart;
  paddingEnd = memo1.paddingEnd;
  const items3 = [fastList, paddingStart, paddingEnd];
  obj = {
    style: memo1.style,
    collapsable: false,
    pointerEvents: "box-none",
    testID: "guilds-bar-unread-bars",
    children: null,
  };
  const callback = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.paddingStart = paddingStart;
    obj.paddingEnd = paddingEnd;
    obj.orientation = "visible";
    closure_0.scrollToLocation(obj);
  }, items3);
  obj.children = jsx(tmp(tmp2[18]), { beforeItem, afterItem, scrollToLocation: callback, compact: true });
  return (
    <scrollPosValue style={memo1.style} collapsable={false} pointerEvents="box-none" testID="guilds-bar-unread-bars">
      {null}
    </scrollPosValue>
  );
});
