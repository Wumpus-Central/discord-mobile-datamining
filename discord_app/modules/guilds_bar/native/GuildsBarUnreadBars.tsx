// === Module 15617: checkNodeAndIterate ===

// Module 15617 (checkNodeAndIterate)
import renderDefaultEmpty from "renderDefaultEmpty" /* 8124 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel" /* 5383 */;
import handleConnectionOpen from "handleConnectionOpen" /* 4197 */;
import insertUnsortedGuilds from "insertUnsortedGuilds" /* 5078 */;
import { GuildsNodeType } from "insertUnsortedGuilds" /* 5078 */;
import GUILD_ITEM_SIZE from "GUILD_ITEM_SIZE" /* 15548 */;
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT" /* 14450 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function checkNodeAndIterate(arg0) {
  let tmp4;
  let tmp5Result;
  ({ node, section, item, direction, selectedGuildId } = arg0);
  if (null != node) {
    if (node.type === GuildsNodeType.GUILD) {
      if (node.id !== selectedGuildId) {
        let tmp2;
        if (store.getMentionCount(node.id) > 0) {
          tmp2 = node;
        }
        if (null != tmp2) {
          let obj = { node: null, section: null, item: null };
          obj[0] = tmp2;
          if (section == null) {
            section = 0;
          }
          obj[1] = section;
          if (item == null) {
            item = 0;
          }
          obj[2] = item;
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
          obj = { node: null, section: null, item: null, direction: null, selectedGuildId: null };
          obj[0] = node.children[num4];
          obj[1] = tmp4;
          let tmp6;
          if (null != section) {
            tmp6 = num4;
          }
          obj[2] = tmp6;
          obj[3] = direction;
          obj[4] = selectedGuildId;
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
            obj = { node: null, section: null };
            obj[0] = node;
            obj[1] = tmp4;
            tmp10 = obj;
          }
        }
        return tmp10;
      }
    }
  }
}
function findFirstOrLastMentionedItem(scrollPosValue, arg1, guildId, top2, mobileQuestDockHeight) {
  guildsTree = guildsTree.getGuildsTree();
  const root = guildsTree.root;
  ({ scrollPosValue, getSectionItemFromPosition } = scrollPosValue);
  const item = getSectionItemFromPosition(scrollPosValue.get() + mobileQuestDockHeight).item;
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
  const diff = scrollPosValue3.get() + scrollPosValue.containerSize - top2 - (closure_12 + closure_13);
  const iter = scrollPosValue.state.items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (nextResult.layoutStart >= layoutStart) {
      if (tmp4.type === renderDefaultEmpty.FastListItemTypes.ITEM) {
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
            if (renderDefaultEmpty.FastListItemTypes.SECTION === type) {
              let node = guildsTree.getNode(tmp4.recyclerKey);
              let element = node;
              if (null != node) {
                if (element.type === GuildsNodeType.FOLDER) {
                  if (!element.expanded) {
                    let children = element.children;
                    for (const item10094 of children) {
                      if (item10094.type === GuildsNodeType.GUILD) {
                        if (store.getMentionCount(tmp24.id) > 0) {
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
              if (renderDefaultEmpty.FastListItemTypes.ITEM === type) {
                let node1 = guildsTree.getNode(tmp4.recyclerKey);
                let tmp12 = node1;
                if (null != node1) {
                  if (tmp12.type === GuildsNodeType.GUILD) {
                    if (store.getMentionCount(tmp12.id) > 0) {
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
            let obj = { node: null, direction: 1, selectedGuildId: null };
            obj[0] = root;
            obj[2] = guildId;
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
              obj = { node: null, direction: -1, selectedGuildId: null };
              obj[0] = root;
              obj[2] = guildId;
              let tmp36 = checkNodeAndIterate(obj);
              if (null != tmp36) {
                obj1 = { beforeItem: "Array", afterItem: 0 };
                let obj2 = { section: null, row: null, mention: true };
                obj2[0] = tmp36.section + tmp50.GUILDS;
                obj2[1] = tmp36.item;
                obj1[1] = obj2;
                let tmp37 = obj1;
              } else {
                tmp37 = closure_17;
              }
              return tmp37;
            }
            let obj3 = { beforeItem: null, afterItem: "a" };
            let obj4 = { section: null, row: null, mention: true };
            obj4[0] = sum;
            obj4[1] = tmp32.item;
            obj3[0] = obj4;
            return obj3;
          }
        }
      }
    }
    continue;
  }
}
let c4 = importAllResult;
({ FastListRenderSections: c10, useGuildWrapperSize: unpackModuleId, GUILD_LIST_WIDTH } = GUILD_ITEM_SIZE);
({ YOU_BAR_HEIGHT: closure_12, YOU_BAR_MARGIN: map1 } = CONNECTION_BANNER_HEIGHT);
let closure_15 = createCacheKey.createStyles({ wrapper: { position: "absolute", top: 0, left: 0, bottom: 0, width: GUILD_LIST_WIDTH } });
let closure_17 = { beforeItem: "r", afterItem: "accessibilityRole" };
let closure_18 = { beforeItem: { section: 0, row: 0, mention: true }, afterItem: "a" };
let closure_20 = { code: "function GuildsBarUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}" };
let closure_21 = { code: "function GuildsBarUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}" };
const memoResult = importAllResult.memo(function GuildsBarUnreadBars(fastList) {
  fastList = fastList.fastList;
  let _require = fastList;
  let top2;
  let mobileQuestDockHeight;
  youBarTotalHeight = undefined;
  let memo;
  let paddingStart;
  let paddingEnd;
  const top = top2(mobileQuestDockHeight[11])().top;
  top2 = top;
  const result = callback() / 2;
  mobileQuestDockHeight = result;
  let obj = memo;
  [tmp5, youBarTotalHeight] = youBarTotalHeight(memo.useState(() => {
    let guildId = paddingEnd.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    return findFirstOrLastMentionedItem(closure_0, paddingStart.getPrivateChannelMentionCount() > 0, guildId, top2, mobileQuestDockHeight);
  }), 2);
  let items = [fastList, top, result];
  ({ beforeItem, afterItem } = tmp5);
  memo = memo.useMemo(() => top2(mobileQuestDockHeight[14])(() => {
    let guildId = paddingEnd.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    closure_0 = closure_1_19(closure_0, paddingStart.getPrivateChannelMentionCount() > 0, guildId, closure_1, closure_2);
    callback((afterItem) => {
      if (afterItem === afterItem) {
        let tmp4 = afterItem;
      } else {
        tmp4 = afterItem;
        if (closure_1_1(closure_1_2[15])(afterItem.afterItem, afterItem.afterItem)) {
          tmp4 = afterItem;
        }
      }
      return tmp4;
    });
    const tmp3 = paddingStart.getPrivateChannelMentionCount() > 0;
  }, 100), items);
  const items1 = [memo];
  const effect = memo.useEffect(() => {
    const items = [paddingStart, paddingEnd, closure_1_8];
    const batchedStoreListener = new lib(mobileQuestDockHeight[16]).BatchedStoreListener(items, memo);
    batchedStoreListener.attach("guild-mention-bars");
    return () => {
      batchedStoreListener.detach();
    };
  }, items1);
  const scrollPosValue = fastList.scrollPosValue;
  const tmp = top2;
  let tmp2 = mobileQuestDockHeight;
  let tmp4 = youBarTotalHeight(memo.useState(() => {
    let guildId = paddingEnd.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    return findFirstOrLastMentionedItem(closure_0, paddingStart.getPrivateChannelMentionCount() > 0, guildId, top2, mobileQuestDockHeight);
  }), 2);
  class D {
    constructor() {
      return scrollPosValue.get();
    }
  }
  D.__closure = { scrollPosValue };
  D.__workletHash = 16367582542434;
  D.__initData = closure_20;
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
  obj = { runOnJS: _require(mobileQuestDockHeight[17]).runOnJS, debouncedUpdate: memo };
  O.__closure = obj;
  O.__workletHash = 13727289405147;
  O.__initData = closure_21;
  const animatedReaction = _require(mobileQuestDockHeight[17]).useAnimatedReaction(D, O);
  top2 = undefined;
  mobileQuestDockHeight = undefined;
  youBarTotalHeight = undefined;
  const tmp9 = callback2();
  _require = tmp9;
  top2 = top2(mobileQuestDockHeight[11])().top;
  const obj2 = _require(mobileQuestDockHeight[17]);
  mobileQuestDockHeight = _require(mobileQuestDockHeight[12]).useMobileQuestDockHeight();
  const obj4 = _require(mobileQuestDockHeight[12]);
  let num = 8;
  if (mobileQuestDockHeight > 0) {
    num = 0;
  }
  youBarTotalHeight = _require(mobileQuestDockHeight[13]).useYouBarTotalHeight(num);
  const items2 = [tmp9.wrapper, top2, mobileQuestDockHeight, youBarTotalHeight];
  const memo1 = obj.useMemo(() => {
    const items = [lib.wrapper, ];
    const obj = { top: top2, bottom: mobileQuestDockHeight + youBarTotalHeight };
    items[1] = obj;
    return obj;
  }, items2);
  paddingStart = memo1.paddingStart;
  paddingEnd = memo1.paddingEnd;
  const items3 = [fastList, paddingStart, paddingEnd];
  obj = { style: memo1.style, collapsable: false, pointerEvents: "box-none", testID: "guilds-bar-unread-bars", children: null };
  callback = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.paddingStart = paddingStart;
    obj.paddingEnd = paddingEnd;
    obj.orientation = "visible";
    lib.scrollToLocation(obj);
  }, items3);
  obj[4] = jsx(tmp(tmp2[18]), { beforeItem, afterItem, scrollToLocation: callback, compact: true });
  return <scrollPosValue style={memo1.style} collapsable={false} pointerEvents="box-none" testID="guilds-bar-unread-bars">{null}</scrollPosValue>;
});
let result = require("obj132").fileFinishedImporting("modules/guilds_bar/native/GuildsBarUnreadBars.tsx");

export default memoResult;