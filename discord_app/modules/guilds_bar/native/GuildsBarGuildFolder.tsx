// === Module 15884: MiniGuildIcon ===

// Module 15884 (MiniGuildIcon)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4197 */;
import registerAssetDefault from "registerAsset" /* 4984 */;
import preloadDefault from "preload" /* 5493 */;
import GuildIconSizes from "GuildIconSizes" /* 6004 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 6004 */;
import importAllResult from "noop" /* 19 */;
import closure_4 from "updateGuildUnreadSentinel" /* 7381 */;
import closure_5 from "createGuildRecordFromRust" /* 1909 */;
import closure_6 from "handleConnectionOpen" /* 4299 */;
import closure_7 from "insertUnsortedGuilds" /* 5381 */;
import { GuildsNodeType } from "insertUnsortedGuilds" /* 5381 */;
import withEqualityFn from "withEqualityFn" /* 15875 */;
import { DEFAULT_FOLDER_COLOR } from "DEFAULT_FOLDER_COLOR" /* 15881 */;
import GUILD_ITEM_SIZE from "GUILD_ITEM_SIZE" /* 15876 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function MiniGuildIcon(arg0) {
  ({ guildId: require, position, selected } = arg0);
  let obj = map;
  const tmp4 = callback3(obj.useToken(ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE));
  const items = [closure_5];
  const stateFromStores = initialize.useStateFromStores(items, () => closure_1_5.getGuild(closure_0));
  if (0 === position) {
    let guildPreview3 = tmp4.guildPreview0;
  } else if (1 === position) {
    guildPreview3 = tmp4.guildPreview1;
  } else if (2 === position) {
    guildPreview3 = tmp4.guildPreview2;
  } else if (3 === position) {
    guildPreview3 = tmp4.guildPreview3;
  }
  const items1 = [tmp4.guildPreviewIcon, , ];
  let prop;
  const obj2 = initialize;
  const tmp = require;
  const tmp3 = importDefault;
  const tmp6 = closure_14;
  if (!selected) {
    prop = tmp4.guildPreviewIconUnselected;
  }
  obj = { style: items1, guild: stateFromStores, size: GuildIconSizes.GuildIconSizes.XXSMALL, selected };
  items1[1] = prop;
  items1[2] = guildPreview3;
  return tmp6(GuildIconSizesDefault, obj, "" + selected);
}
function TransitionWrapper(children) {
  let flag = children.fromTop;
  if (flag === undefined) {
    flag = false;
  }
  const cleanUp = children.cleanUp;
  const state = children.state;
  let token;
  let sharedValue;
  let obj = flag(state[11]);
  token = obj.useToken(cleanUp(state[10]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp3 = cleanUp;
  const tmp5 = callback3(token);
  let num = 0;
  if (state === flag(state[19]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = flag(state[18]).useSharedValue(num);
  const obj2 = flag(state[18]);
  let fn = function u() {
    let obj = { opacity: null, transform: null };
    obj1 = flag(state[14]);
    const value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_2 === closure_1_0(closure_1_2[19]).TransitionStates.YEETED;
      }
      if (tmp) {
        closure_1_0(closure_1_2[18]).runOnJS(closure_1)();
        const obj = closure_1_0(closure_1_2[18]);
      }
    };
    obj = { state, TransitionStates: flag(state[19]).TransitionStates, runOnJS: flag(state[18]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 47605595424;
    fn.__initData = closure_1_21;
    obj[0] = obj1.withSpring(value, closure_1_13, undefined, fn);
    let num = 1;
    if (1 === sharedValue.get()) {
      obj = { translateY: null };
      obj[0] = obj5.withSpring(0, tmp4);
      const items = [obj, ];
      if (num !== sharedValue.get()) {
        let num2 = 1.3;
        if (flag) {
          num2 = 0.3;
        }
        num = num2;
      }
      obj1 = { scale: null };
      obj1[0] = flag(state[14]).withSpring(num, tmp4);
      items[1] = obj1;
      obj[1] = items;
      return obj;
    }
  };
  obj = { withSpring: tmp(tmp2[14]).withSpring, visible: sharedValue, FOLDER_SPRING_PHYSICS: closure_13, state, TransitionStates: tmp(tmp2[19]).TransitionStates, runOnJS: tmp(tmp2[18]).runOnJS, cleanUp, fromTop: flag, guildItemSize: token };
  fn.__closure = obj;
  fn.__workletHash = 14426547532118;
  fn.__initData = closure_20;
  let items = [state, sharedValue];
  const animatedStyle = flag(state[18]).useAnimatedStyle(fn);
  const effect = token.useEffect(() => {
    let num = 1;
    if (state === flag(state[19]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  const style = [animatedStyle, tmp5.folderScaleContainer];
  return callback2(tmp3(state[17]), { style, children: children.children });
}
function getItemKey(type) {
  return type.type;
}
function GuildFolderIcon(item) {
  item = item.item;
  let tmp = null;
  if ("icon" === item.type) {
    const obj = { source: null, style: null };
    obj[0] = registerAssetDefault;
    obj[1] = item.tintStyle;
    tmp = callback2(preloadDefault, obj);
    const tmp5 = preloadDefault;
  }
  return tmp;
}
function renderGuildFolderContent(arg0, type) {
  closure_0 = type;
  type = type.type;
  if ("icon" === type) {
    let obj = { fromTop: true, cleanUp: null, state: null, children: null };
    obj[1] = arg3;
    obj[2] = arg2;
    obj = { item: null };
    obj[0] = type;
    obj[3] = callback2(GuildFolderIcon, obj);
    return callback2(TransitionWrapper, obj, arg0);
  } else if ("preview" === type) {
    obj = { cleanUp: null, state: null, children: null };
    obj[0] = arg3;
    obj[1] = arg2;
    const guilds = type.guilds;
    obj[2] = guilds.map((arg0, arg1) => {
      let tmp = arg1;
      if (0 !== arg1) {
        tmp = arg1;
        if (1 !== arg1) {
          tmp = arg1;
          if (2 !== arg1) {
            tmp = arg1;
          }
        }
      }
      let tmp2 = null;
      if (null != arg0) {
        tmp2 = null;
        if (null != tmp) {
          const obj = { guildId: null, selected: null, position: null };
          obj[0] = arg0;
          obj[1] = arg0 === type.selectedGuildId;
          obj[2] = tmp;
          tmp2 = closure_1_14(closure_1_17, obj, arg0);
        }
      }
      return tmp2;
    });
    return callback2(TransitionWrapper, obj, arg0);
  }
}
let c3 = importAllResult;
({ useItemDragState: c9, useFolderBGHeightOffset: c10 } = withEqualityFn);
({ TRANSITION_PHYSICS: closure_12, FOLDER_SPRING_PHYSICS: map1 } = GUILD_ITEM_SIZE);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = createCacheKey.createStyles(() => {
  let num = arg0;
  if (arg0 === undefined) {
    num = 48;
  }
  let num2 = arg1;
  if (arg1 === undefined) {
    num2 = 0;
  }
  let obj = { folderBackground: null, folderScaleContainer: null, guildPreviewIcon: null, guildPreviewIconUnselected: null, guildPreview0: null, guildPreview1: null, guildPreview2: null, guildPreview3: null, guildPreviewWrapper: null };
  obj = { position: "absolute", top: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, left: ThemesDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_LEFT, backgroundColor: ThemesDefault.colors.GUILD_FOLDER_BACKGROUND, borderTopLeftRadius: ThemesDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderTopRightRadius: ThemesDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderBottomLeftRadius: ThemesDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderBottomRightRadius: ThemesDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, width: num + num2 };
  obj[0] = obj;
  obj[1] = { position: "absolute", top: 0, left: 0, width: num, height: num, justifyContent: "center", alignItems: "center" };
  obj = { position: "absolute", margin: ThemesDefault.modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN };
  obj[2] = obj;
  obj[3] = { borderRadius: ThemesDefault.radii.sm };
  obj[4] = { top: 0, left: 0 };
  obj[5] = { top: 0, right: 0 };
  obj[6] = { bottom: 0, left: 0 };
  obj[7] = { bottom: 0, right: 0 };
  obj1 = { borderRadius: ThemesDefault.radii.sm };
  obj[8] = { position: "absolute", width: num, height: num, opacity: ThemesDefault.modules.mobile.GUILD_FOLDER_PREVIEW_OPACITY };
  return obj;
});
let closure_18 = { code: "function GuildsBarGuildFolderTsx1(values){const{withSpring,TRANSITION_PHYSICS}=this.__closure;return{animations:{height:withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight}};}" };
const memoResult = importAllResult.memo(function FolderBGInner(color) {
  color = color.color;
  let token2;
  ({ folderId, totalItems } = color);
  let obj = color(4197);
  const token = obj.useToken(token2(712).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const token1 = color(4197).useToken(token2(712).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let obj2 = color(4197);
  const obj3 = color(4197);
  const fn = function s(height) {
    let obj = { animations: null, initialValues: null };
    obj = { height: color(table[14]).withSpring(height.targetHeight, closure_12, "animate-always") };
    obj[0] = obj;
    obj[1] = { height: height.currentHeight };
    return obj;
  };
  obj = { withSpring: null, TRANSITION_PHYSICS: null };
  const tmp3 = callback3(token, color(4197).useToken(token2(712).modules.mobile.GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET));
  obj[0] = color(4927).withSpring;
  obj[1] = closure_12;
  fn.__closure = obj;
  fn.__workletHash = 2519256682742;
  fn.__initData = closure_18;
  const layout = importAllResult.useCallback(fn, []);
  const tmp4 = callback(folderId);
  token2 = color(4197).useToken(token2(712).modules.mobile.GUILD_FOLDER_COLOR_OPACITY);
  const items = [color, token2];
  const memo = importAllResult.useMemo(() => {
    if (null != color) {
      if (tmp !== closure_1_11) {
        const obj = { backgroundColor: null };
        const obj2 = color(closure_1_2[15]);
        obj[0] = obj2.hexWithOpacity(color(closure_1_2[16]).int2hex(tmp), token2);
        return obj;
      }
    }
  }, items);
  const style = [tmp3.folderBackground, memo, ];
  obj = { height: token + token1 + (token + 2 * token1) * totalItems + tmp4 };
  style[2] = obj;
  return callback2(token2(7796), { pointerEvents: "none", collapsable: false, layout, style });
});
let closure_20 = { code: "function GuildsBarGuildFolderTsx2(){const{withSpring,visible,FOLDER_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,fromTop,guildItemSize}=this.__closure;return{opacity:withSpring(visible.get(),FOLDER_SPRING_PHYSICS,undefined,function(finished){if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}),transform:[{translateY:withSpring(visible.get()===1?0:fromTop?-guildItemSize:guildItemSize,FOLDER_SPRING_PHYSICS)},{scale:withSpring(visible.get()===1?1:fromTop?0.3:1.3,FOLDER_SPRING_PHYSICS)}]};}" };
let closure_21 = { code: "function GuildsBarGuildFolderTsx3(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}" };
let closure_26 = { code: "function GuildsBarGuildFolderTsx4(values){const{dragDropInProgress,sharedId,id,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _id;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===\"\"+id&&!isDragTarget;sharedId.set(\"\"+((_id=id)!==null&&_id!==void 0?_id:null));return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}" };
const memoResult1 = importAllResult.memo(function GuildsBarGuildFolder(id) {
  id = id.id;
  const expanded = id.expanded;
  const name = id.name;
  const color = id.color;
  const childNodes = id.childNodes;
  let flag = id.isDragPreview;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = id.hideExpandedChildren;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const foldersChanged = id.foldersChanged;
  closure_6 = undefined;
  let selectedPreviewId;
  let tintStyle;
  let folderPreviewStyle;
  let isDragTarget;
  let dragDropInProgress;
  let sharedValue;
  let obj = id(name[11]);
  let tmp4 = callback3(obj.useToken(expanded(name[10]).modules.mobile.GUILD_BAR_ITEM_SIZE));
  closure_6 = tmp4;
  obj1 = id(name[22]);
  let obj2 = id(name[12]);
  let items = [childNodes];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    if (expanded) {
      return { unread: false, mentionCount: 0, isMentionLowImportance: false };
    } else {
      const mutableGuildStates = childNodes.getMutableGuildStates();
      return childNodes.reduce((mentionCount, id) => {
        if (null != id.id) {
          let num;
          if (table[id.id] != null) {
            num = tmp5.highImportanceMentionCount;
          }
          if (num == null) {
            num = 0;
          }
          let num2;
          if (table[id.id] != null) {
            num2 = tmp.lowImportanceMentionCount;
          }
          if (num2 == null) {
            num2 = 0;
          }
          mentionCount.mentionCount = mentionCount.mentionCount + num + num2;
          let flag = mentionCount.unread;
          if (!flag) {
            let unread;
            if (tmp4[id.id] != null) {
              unread = tmp2.unread;
            }
            flag = unread;
          }
          if (flag == null) {
            flag = false;
          }
          mentionCount.unread = flag;
          let isMentionLowImportance = mentionCount.isMentionLowImportance;
          if (isMentionLowImportance) {
            isMentionLowImportance = 0 === num;
          }
          mentionCount.isMentionLowImportance = isMentionLowImportance;
        }
        return mentionCount;
      }, { unread: false, mentionCount: 0, isMentionLowImportance: true });
    }
  });
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  let obj3 = id(name[12]);
  let items1 = [closure_6, selectedPreviewId];
  let items2 = [expanded, id, childNodes];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items1, () => {
    let num = 0;
    guildId = guildId.getGuildId();
    const iter = childNodes[Symbol.iterator]();
    while (iter !== undefined) {
      if (iter.next().id === guildId) {
        let tmp = guildId;
        let tmp7 = iter;
        iter.return();
        break;
      } else {
        let tmp4 = num;
        let sum = num + 1;
        num = sum;
        if (4 <= sum) {
          let tmp6 = iter;
          iter.return();
          break;
        }
        break;
      }
      let tmp8 = expanded;
      let flag = false;
      if (!expanded) {
        let tmp9 = null;
        flag = false;
        if (null != guildId) {
          let tmp10 = selectedPreviewId;
          let guildsTree = selectedPreviewId.getGuildsTree();
          let node = guildsTree.getNode(guildId);
          let parentId;
          if (node != null) {
            parentId = node.parentId;
          }
          let tmp13 = id;
          flag = parentId === id;
        }
      }
      let obj = { selectedPreviewId: null, hasGuildSelected: null };
      obj[0] = tmp;
      obj[1] = flag;
      return obj;
    }
  }, items2);
  selectedPreviewId = stateFromStoresObject1.selectedPreviewId;
  const guildsBarAnimatedWrapperStyles = obj1.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  let tmp = id;
  const tmp3 = expanded;
  ({ badge, cutouts } = expanded(name[23])({ mentionCount, isMentionLowImportance }));
  let tmp8 = expanded(name[23])({ mentionCount, isMentionLowImportance });
  const items3 = [foldersChanged];
  const items4 = [name, childNodes];
  const items5 = [color];
  const memo = color.useMemo(() => {
    let tmp = color;
    if (color == null) {
      tmp = dragDropInProgress;
    }
    const tintColor = id(name[16]).int2hex(tmp);
    return { tintStyle: { tintColor }, folderPreviewStyle: { backgroundColor: tintColor } };
  }, items5);
  tintStyle = memo.tintStyle;
  folderPreviewStyle = memo.folderPreviewStyle;
  const items6 = [id, foldersChanged];
  const items7 = [expanded, childNodes, tintStyle, selectedPreviewId];
  const memo1 = color.useMemo(() => ({
    onPress() {
      if (null != closure_5) {
        const value = obj.get();
        const _HermesInternal = HermesInternal;
        if (value.has("" + closure_0)) {
          const _Set = Set;
          const set = new Set(obj.get());
          const _HermesInternal2 = HermesInternal;
          set.add("" + tmp);
          const result = obj.set(set);
        }
        tmp = closure_0;
      }
      const result1 = closure_1_0(closure_1_2[26]).triggerHapticFeedback(closure_1_0(closure_1_2[26]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj4 = closure_1_0(closure_1_2[26]);
      const result2 = closure_1_1(closure_1_2[27]).toggleGuildFolderExpand(closure_0);
    }
  }), items6);
  const items8 = [expanded, tmp4.guildPreviewWrapper, folderPreviewStyle];
  const memo2 = color.useMemo(() => {
    if (expanded) {
      let obj = { type: "icon", tintStyle: null };
      obj[1] = tintStyle;
      const items = [obj];
      return items;
    } else {
      const items1 = [];
      const iter = childNodes[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp7 = tintStyle;
        if (nextResult.type === tintStyle.GUILD) {
          let tmp8 = nextResult;
          let arr = items1.push(tmp6.id);
          if (items1.length >= 4) {
            let tmp10 = iter;
            iter.return();
            break;
          }
          obj = { type: "preview", guilds: null, selectedGuildId: null };
          obj[1] = items1;
          let tmp11 = selectedPreviewId;
          obj[2] = selectedPreviewId;
          let items2 = [obj];
          return items2;
        }
        continue;
      }
      const tmp = childNodes;
    }
  }, items7);
  const callback = color.useCallback((arg0) => {
    const items = [guildId.guildPreviewWrapper, ];
    let tmp4;
    if (!expanded) {
      tmp4 = folderPreviewStyle;
    }
    const obj = { children: null };
    items[1] = tmp4;
    const items1 = [closure_1_14(expanded(name[28]), { style: items }), arg0];
    obj[0] = items1;
    return closure_1_15(color.Fragment, obj, "wrapper");
  }, items8);
  let tmp13 = folderPreviewStyle(id, flag);
  isDragTarget = tmp13.isDragTarget;
  dragDropInProgress = tmp13.dragDropInProgress;
  const items9 = [id];
  ({ dragState, overState, itemSize } = tmp13);
  const memo3 = color.useMemo(() => {
    let obj = id(name[29]);
    guildFolderMenuItems = obj.getGuildFolderMenuItems(guildFolderMenuItems);
    obj = {
      accessibilityActions: guildFolderMenuItems.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        guildFolderMenuItems = arg0;
        const found = guildFolderMenuItems.find((label) => label.label === nativeEvent.nativeEvent.actionName);
        if (found != null) {
          const action = found.action;
          if (action != null) {
            action();
          }
        }
      }
    };
    return obj;
  }, items9);
  ({ accessibilityActions, onAccessibilityAction } = memo3);
  const obj5 = id(name[12]);
  sharedValue = id(name[18]).useSharedValue("" + id);
  class E {
    constructor(arg0) {
      value = dragDropInProgress.get();
      if (value) {
        tmp2 = closure_12;
        tmp4 = id;
        tmp5 = globalThis;
        _HermesInternal = HermesInternal;
        str = "";
        value1 = closure_12.get();
        value = value1 === "" + id;
      }
      if (value) {
        tmp6 = isDragTarget;
        value = !isDragTarget;
      }
      tmp8 = id;
      tmp7 = closure_12;
      if (id == null) {
        tmp8 = null;
      }
      result = closure_12.set("" + tmp8);
      if (value) {
        tmp10 = id;
        tmp11 = name;
        obj = id(name[14]);
        tmp12 = closure_12;
        str2 = "animate-always";
        targetOriginY = obj.withSpring(id.targetOriginY, closure_12, "animate-always");
      } else {
        targetOriginY = id.targetOriginY;
      }
      obj = { originY: targetOriginY, height: null };
      if (value) {
        tmp13 = id;
        tmp14 = name;
        obj3 = id(name[14]);
        tmp15 = closure_12;
        str3 = "animate-always";
        targetHeight = obj3.withSpring(id.targetHeight, closure_12, "animate-always");
      } else {
        targetHeight = id.targetHeight;
      }
      obj[1] = targetHeight;
      obj1 = { originY: id.currentOriginY, height: id.currentHeight };
      return { animations: obj, initialValues: obj1 };
    }
  }
  obj = { dragDropInProgress, sharedId: sharedValue, id, isDragTarget, withSpring: id(name[14]).withSpring, TRANSITION_PHYSICS: sharedValue };
  E.__closure = obj;
  E.__workletHash = 11967845900199;
  E.__initData = closure_26;
  const items10 = [id, sharedValue, isDragTarget, dragDropInProgress];
  const callback1 = color.useCallback(E, items10);
  obj = { id: null, draggedItemSize: null, accessibilityActions: null, onAccessibilityAction: null, selected: null, unread: null, circle: false, styles: null, label: null, isDragTarget: null, dragState: null, sharedId: null, cutouts: null, config: null, isDragPreview: null, overState: null, expanded: null, layout: null, externalChildren: null, expandedChildren: null, children: null };
  const obj6 = id(name[18]);
  obj[0] = "" + id;
  obj[1] = itemSize;
  obj[2] = accessibilityActions;
  obj[3] = onAccessibilityAction;
  obj[4] = stateFromStoresObject1.hasGuildSelected;
  let tmp19 = !expanded;
  if (!expanded) {
    tmp19 = unread;
  }
  obj[5] = tmp19;
  obj[7] = guildsBarAnimatedWrapperStyles;
  obj[8] = obj5.useStateFromStores(items3, () => {
    if (null != name) {
      let obj = { count: 1, names: null, label: null };
      const items = [tmp];
      obj[1] = items;
      obj[2] = tmp;
      return obj;
    } else {
      const items1 = [];
      let num = 0;
      const obj4 = childNodes[Symbol.iterator]();
      while (obj4 !== undefined) {
        let tmp5 = foldersChanged;
        let guild = foldersChanged.getGuild(tmp3.id);
        if (null != guild) {
          let tmp8 = guild;
          let arr = items1.push(tmp7.name);
        }
        let tmp10 = num;
        let sum = num + 1;
        num = sum;
        if (3 <= sum) {
          let tmp12 = obj4;
          obj4.return();
          break;
        }
        obj = { names: null, count: null, label: null };
        obj[0] = items1;
        let tmp13 = childNodes;
        obj[1] = childNodes.length;
        let tmp14 = id;
        let tmp15 = name;
        let obj2 = id(name[24]);
        obj[2] = obj2.getListSummaryLabel(items1, childNodes.length);
        return obj;
      }
      const tmp16 = childNodes;
    }
  }, items4, expanded(name[25])).label;
  obj[9] = isDragTarget;
  obj[10] = dragState;
  obj[11] = sharedValue;
  obj[12] = cutouts;
  obj[13] = memo1;
  obj[14] = flag;
  obj[15] = overState;
  obj[16] = expanded;
  obj[17] = callback1;
  let tmp17Result = badge;
  if (expanded) {
    tmp17Result = badge;
    if (!flag) {
      obj1 = { color: null, folderId: null, totalItems: null };
      obj1[0] = color;
      obj1[1] = id;
      obj1[2] = childNodes.length;
      tmp17Result = tmp17(closure_19, obj1);
    }
  }
  obj[18] = tmp17Result;
  tmp17Result = undefined;
  if (!flag2) {
    obj2 = { folderId: null, expanded: null };
    obj2[0] = id;
    obj2[1] = expanded;
    tmp17Result = tmp17(tmp3(tmp2[30]), obj2);
  }
  obj[19] = tmp17Result;
  obj3 = { renderItem: renderGuildFolderContent, getItemKey, items: memo2, wrapChildren: callback };
  obj[20] = closure_14(tmp(name[19]).TransitionGroup, obj3);
  return closure_14(expanded(name[22]), obj);
});
let result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildFolder.tsx");

export default memoResult1;
export const GuildsBarGuildFolderBG = memoResult;