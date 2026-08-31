// === Module 15910: checkNodeAndIterate ===

// Module 15910 (checkNodeAndIterate)
import renderDefaultEmpty from "renderDefaultEmpty" /* 7763 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "updateGuildUnreadSentinel" /* 7349 */;
import closure_7 from "handleConnectionOpen" /* 4269 */;
import closure_8 from "insertUnsortedGuilds" /* 5349 */;
import { GuildsNodeType } from "insertUnsortedGuilds" /* 5349 */;
import GUILD_ITEM_SIZE from "GUILD_ITEM_SIZE" /* 15840 */;
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT" /* 14666 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
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
          let tmp3 = num4;
          tmp4 = num4;
          if (null != section) {
            tmp4 = section;
          }
          obj = { node: null, section: null, item: null, direction: null, selectedGuildId: null };
          obj[0] = node.children[num4];
          obj[1] = tmp4;
          let tmp6;
          let tmp5 = checkNodeAndIterate;
          if (null != section) {
            tmp6 = num4;
          }
          obj[2] = tmp6;
          obj[3] = direction;
          obj[4] = selectedGuildId;
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
function findFirstOrLastMentionedItem(scrollPosValue) {
  guildsTree = guildsTree.getGuildsTree();
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
  const diff = scrollPosValue3.get() + scrollPosValue.containerSize - arg3 - (closure_12 + closure_13);
  const iter = scrollPosValue.state.items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (nextResult.layoutStart >= layoutStart) {
      let tmp40 = nextResult;
      let tmp41 = require;
      let tmp42 = dependencyMap;
      if (tmp4.type === renderDefaultEmpty.FastListItemTypes.ITEM) {
        let tmp6 = nextResult;
        if (tmp4.layoutStart > diff) {
          let tmp30 = iter;
          iter.return();
          break;
        } else {
          let tmp43 = nextResult;
          let tmp44 = constants;
          let tmp45 = constants;
          if (tmp4.section < constants.GUILDS) {
            if (arg1) {
              flag = true;
              let tmp29 = iter;
              iter.return();
              break;
            }
            break;
          } else {
            let tmp46 = nextResult;
            if (0 !== tmp4.layoutSize) {
              let tmp47 = section;
              if (-1 === section) {
                let tmp7 = nextResult;
                ({ section, item: item2 } = tmp4);
              }
              let tmp8 = nextResult;
              let type = tmp4.type;
              if (tmp41(7763).FastListItemTypes.SECTION === type) {
                let tmp18 = nextResult;
                let node = guildsTree.getNode(tmp4.recyclerKey);
                let element = node;
                if (null != node) {
                  let tmp48 = node;
                  let tmp49 = GuildsNodeType;
                  if (element.type === GuildsNodeType.FOLDER) {
                    let tmp20 = node;
                    if (!element.expanded) {
                      let tmp21 = node;
                      let children = element.children;
                      let tmp22 = children;
                      let tmp23 = children;
                      for (const item10094 of children) {
                        let tmp25 = GuildsNodeType;
                        if (item10094.type === GuildsNodeType.GUILD) {
                          let tmp26 = store;
                          let tmp27 = item10094;
                          if (store.getMentionCount(tmp24.id) > 0) {
                            flag = true;
                            let tmp28 = obj1;
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
                if (tmp41(7763).FastListItemTypes.ITEM === type) {
                  let tmp10 = nextResult;
                  let node1 = guildsTree.getNode(tmp4.recyclerKey);
                  let tmp12 = node1;
                  if (null != node1) {
                    let tmp13 = node1;
                    let tmp14 = GuildsNodeType;
                    if (tmp12.type === GuildsNodeType.GUILD) {
                      let tmp15 = store;
                      let tmp16 = node1;
                      if (store.getMentionCount(tmp12.id) > 0) {
                        flag = true;
                        let tmp17 = iter;
                        iter.return();
                        break;
                      }
                      break;
                    }
                  }
                  continue;
                } else {
                  let tmp9 = nextResult;
                  let type2 = tmp4.type;
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
        }
        if (flag) {
          let tmp39 = closure_17;
          return closure_17;
        } else {
          let tmp31 = arg2;
          let tmp32;
          if (!arg1) {
            let tmp33 = checkNodeAndIterate;
            let obj = { node: null, direction: 1, selectedGuildId: null };
            obj[0] = root;
            obj[2] = arg2;
            tmp32 = checkNodeAndIterate(obj);
          }
          if (null != tmp32) {
            if (null == tmp32) {
              let tmp34 = closure_17;
              return closure_17;
            }
          }
          if (null == tmp32) {
            let tmp38 = closure_18;
            return closure_18;
          } else {
            let tmp51 = constants;
            let sum = tmp32.section + constants.GUILDS;
            let tmp53 = section;
            if (sum >= section) {
              if (sum === section) {
                let num = tmp32.item;
                if (num == null) {
                  num = 0;
                }
              }
              let tmp35 = checkNodeAndIterate;
              obj = { node: null, direction: -1, selectedGuildId: null };
              obj[0] = root;
              obj[2] = arg2;
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
            let obj3 = { beforeItem: null, afterItem: "Array" };
            let obj4 = { section: null, row: null, mention: true };
            obj4[0] = sum;
            obj4[1] = tmp32.item;
            obj3[0] = obj4;
            return obj3;
          }
        }
      } else {
        let tmp5 = nextResult;
      }
    }
    continue;
  }
}
let c4 = importAllResult;
({ FastListRenderSections: c10, useGuildWrapperSize: unpackModuleId, GUILD_LIST_WIDTH } = GUILD_ITEM_SIZE);
({ YOU_BAR_HEIGHT: closure_12, YOU_BAR_MARGIN: map1 } = CONNECTION_BANNER_HEIGHT);
let closure_15 = createCacheKey.createStyles({ wrapper: { position: "absolute", top: 0, left: 0, bottom: 0, width: GUILD_LIST_WIDTH } });
let closure_17 = { beforeItem: "cix", afterItem: "id" };
let closure_18 = { beforeItem: { section: 0, row: 0, mention: true }, afterItem: "Array" };
let closure_20 = { code: "function GuildsBarUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}" };
let closure_21 = { code: "function GuildsBarUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}" };
const memoResult = importAllResult.memo(function GuildsBarUnreadBars(fastList) {
  fastList = fastList.fastList;
  let _require = fastList;
  let top2;
  let mobileQuestDockHeight;
  youBarTotalHeight = undefined;
  let memo;
  let scrollPosValue;
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
    return closure_1_19(closure_0, paddingStart.getPrivateChannelMentionCount() > 0, guildId, top2, mobileQuestDockHeight);
  }), 2);
  let items = [fastList, top, result];
  ({ beforeItem, afterItem } = tmp5);
  memo = memo.useMemo(() => top2(mobileQuestDockHeight[14])(() => {
    let guildId = closure_1_7.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    closure_0 = closure_1_19(closure_0, closure_1_6.getPrivateChannelMentionCount() > 0, guildId, closure_1, closure_2);
    callback((afterItem) => {
      if (afterItem === closure_0) {
        let tmp4 = afterItem;
      } else {
        tmp4 = tmp;
        if (closure_1_1(closure_1_2[15])(afterItem.afterItem, tmp.afterItem)) {
          tmp4 = tmp;
        }
        const tmp2 = closure_1_1;
        const tmp3 = closure_1_2;
      }
      return tmp4;
    });
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
  scrollPosValue = fastList.scrollPosValue;
  const tmp = top2;
  let tmp2 = mobileQuestDockHeight;
  let tmp4 = youBarTotalHeight(memo.useState(() => {
    let guildId = paddingEnd.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    return closure_1_19(closure_0, paddingStart.getPrivateChannelMentionCount() > 0, guildId, top2, mobileQuestDockHeight);
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
  _require = undefined;
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
    let obj = { style: items, paddingStart: top2, paddingEnd: mobileQuestDockHeight + 4 + youBarTotalHeight };
    items = [lib.wrapper, ];
    obj = { top: top2, bottom: mobileQuestDockHeight + youBarTotalHeight };
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
let result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarUnreadBars.tsx");

export default memoResult;