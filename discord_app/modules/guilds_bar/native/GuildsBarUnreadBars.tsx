// discord_app/modules/guilds_bar/native/GuildsBarUnreadBars.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import debounceDefault from "../../../../_runtime/00551_debounce.js";
import FastList from "../../../lib/native/FastList.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";

const require = globalThis.__r;

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
function findFirstOrLastMentionedItem(scrollPosValue, arg1, selectedGuildId, top2, mobileQuestDockHeight) {
  const guildsTree = SortedGuildStore.getGuildsTree();
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
  const diff = scrollPosValue3.get() + scrollPosValue.containerSize - top2 - (application_id + state);
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
                let obj4 = { beforeItem: "Array", afterItem: 0 };
                let obj5 = { section: tmp36.section + tmp50.GUILDS, row: tmp36.item, mention: true };
                obj4.afterItem = obj5;
                let tmp37 = obj4;
              } else {
                tmp37 = closure_17;
              }
              return tmp37;
            }
            let obj6 = { beforeItem: null, afterItem: "a" };
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
const GuildsNodeType = fn(6907).GuildsNodeType;
const GuildsBarConstants = fn(18612);
({ FastListRenderSections: closure_10, useGuildWrapperSize: closure_11, GUILD_LIST_WIDTH } = GuildsBarConstants);
const YouBarConstants = fn(17322);
({ YOU_BAR_HEIGHT: closure_12, YOU_BAR_MARGIN: map1 } = YouBarConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let closure_15 = createStyles.createStyles({
  wrapper: { position: "absolute", top: 0, left: 0, bottom: 0, width: GUILD_LIST_WIDTH },
});
let closure_17 = { beforeItem: "Object", afterItem: "Array" };
let closure_18 = { beforeItem: { section: 0, row: 0, mention: true }, afterItem: "a" };
let closure_20 = {
  code: "(function GuildsBarUnreadBarsTsx1(){let[scrollPosValue]=this.__closure;return scrollPosValue.get();})",
};
let closure_21 = {
  code: "(function GuildsBarUnreadBarsTsx2(position,lastPosition){let[scheduleOnRN,debouncedUpdate]=this.__closure;if(position!==lastPosition){scheduleOnRN(debouncedUpdate);}})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarUnreadBars.tsx");

export default noop.memo(function GuildsBarUnreadBars(fastList) {
  fastList = fastList.fastList;
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
  [tmp5, youBarTotalHeight] = youBarTotalHeight(
    memo.useState(() => {
      guildId = SelectedGuildStore.getGuildId();
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
  items = [fastList, top, result];
  ({ beforeItem, afterItem } = tmp5);
  memo = memo.useMemo(
    () =>
      debounceDefault(() => {
        guildId = guildId.getGuildId();
        if (guildId == null) {
          guildId = null;
        }
        const afterItem = findFirstOrLastMentionedItem(
          closure_1_0,
          paddingEnd.getPrivateChannelMentionCount() > 0,
          guildId,
          top2,
          mobileQuestDockHeight,
        );
        youBarTotalHeight((afterItem) => {
          if (afterItem === afterItem) {
            let tmp4 = afterItem;
          } else {
            tmp4 = afterItem;
            if (top2(mobileQuestDockHeight[15])(afterItem.afterItem, afterItem.afterItem)) {
              tmp4 = afterItem;
            }
          }
          return tmp4;
        });
        const tmp3 = paddingEnd.getPrivateChannelMentionCount() > 0;
      }, 100),
    items,
  );
  const items1 = [memo];
  const effect = memo.useEffect(() => {
    items = [GuildReadStateStore, SelectedGuildStore, SortedGuildStore];
    const batchedStoreListener = new initialize.BatchedStoreListener(items, memo);
    batchedStoreListener.attach("guild-mention-bars");
    return () => {
      batchedStoreListener.detach();
    };
  }, items1);
  let tmp4 = youBarTotalHeight(
    memo.useState(() => {
      guildId = SelectedGuildStore.getGuildId();
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
  const items2 = [closure_20, fastList.scrollPosValue];
  _require = undefined;
  [tmp9, tmp10] = items2;
  class GuildsBarUnreadBarsTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items3 = [tmp10];
  GuildsBarUnreadBarsTsx1.__closure = items3;
  GuildsBarUnreadBarsTsx1.__workletHash = 8498913632251;
  GuildsBarUnreadBarsTsx1.__initData = tmp9;
  const items4 = [closure_21, require("../../../../_runtime/metro/01705__.js").scheduleOnRN, memo];
  _require = undefined;
  top2 = undefined;
  [tmp11, tmp12, tmp13] = items4;
  class GuildsBarUnreadBarsTsx2 {
    constructor(arg0, arg1) {
      if (fastList !== arg1) {
        tmp = closure_0;
        tmp2 = top;
        tmp3 = closure_0(top);
      }
      return;
    }
  }
  const items5 = [tmp12, tmp13];
  GuildsBarUnreadBarsTsx2.__closure = items5;
  GuildsBarUnreadBarsTsx2.__workletHash = 12582382943587;
  GuildsBarUnreadBarsTsx2.__initData = tmp11;
  const animatedReaction = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    GuildsBarUnreadBarsTsx1,
    GuildsBarUnreadBarsTsx2,
  );
  mobileQuestDockHeight = undefined;
  youBarTotalHeight = undefined;
  const tmp15 = closure_15();
  _require = tmp15;
  top2 = tmp(tmp2[11])().top;
  const obj2 = require("../../../../_runtime/metro/01652__.js");
  mobileQuestDockHeight = require("QuestHooks").useMobileQuestDockHeight();
  const tmp8Result = require("QuestHooks");
  let num = 8;
  if (mobileQuestDockHeight > 0) {
    num = 0;
  }
  youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight(num);
  const items6 = [tmp15.wrapper, top2, mobileQuestDockHeight, youBarTotalHeight];
  const memo1 = obj.useMemo(() => {
    const obj = { style: null, paddingStart: top2, paddingEnd: mobileQuestDockHeight + 4 + youBarTotalHeight };
    items = [closure_0.wrapper];
    const rect = { top: top2, bottom: mobileQuestDockHeight + youBarTotalHeight };
    items[1] = rect;
    obj.style = items;
    return obj;
  }, items6);
  paddingStart = memo1.paddingStart;
  paddingEnd = memo1.paddingEnd;
  const items7 = [fastList, paddingStart, paddingEnd];
  const obj3 = {
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
  }, items7);
  obj3.children = jsx(top2(mobileQuestDockHeight[19]), {
    beforeItem,
    afterItem,
    scrollToLocation: callback,
    compact: true,
  });
  return (
    <paddingStart style={memo1.style} collapsable={false} pointerEvents="box-none" testID="guilds-bar-unread-bars">
      {null}
    </paddingStart>
  );
});
