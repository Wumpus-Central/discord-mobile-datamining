// === Module 16293: GuildsBarGuildFolder ===

// Module 16293 (GuildsBarGuildFolder)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import useToken from "useToken" /* 4262 */;
import native from "native" /* 4271 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import ColorUtils from "ColorUtils" /* 4409 */;
import spring from "spring" /* 4974 */;
import _modDef5031 from "module_5031" /* 5031 */;
import GuildIcon from "GuildIcon" /* 5584 */;
import FastImageDefault from "FastImage" /* 5587 */;
import NativeViewDefault from "NativeView" /* 5589 */;
import ListUtils from "ListUtils" /* 12619 */;
import GuildsBarFolderMenuItems from "GuildsBarFolderMenuItems" /* 16287 */;
import noop from "module_19" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7636 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;

const GuildIconDefault = GuildIcon;

require = fn;
function MiniGuildIcon(arg0) {
  ({ guildId: require, position, selected } = arg0);
  let obj = useToken;
  const tmp4 = closure_16(obj.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE));
  const items = [GuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => GuildStore.getGuild(_require));
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
  if (!selected) {
    prop = tmp4.guildPreviewIconUnselected;
  }
  obj = { style: items1, guild: stateFromStores, size: GuildIcon.GuildIconSizes.XXSMALL, selected };
  items1[1] = prop;
  items1[2] = guildPreview3;
  return closure_14(GuildIconDefault, obj, "" + selected);
}
function TransitionWrapper(children) {
  let flag = children.fromTop;
  if (flag === undefined) {
    flag = false;
  }
  const cleanUp = children.cleanUp;
  const state = children.state;
  let sharedValue;
  let obj = flag(state[11]);
  const token = obj.useToken(cleanUp(state[10]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp3 = cleanUp;
  const tmp5 = closure_16(token);
  let num = 0;
  if (state === flag(state[19]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = flag(state[18]).useSharedValue(num);
  const obj2 = flag(state[18]);
  let fn = function u() {
    let obj = { opacity: null, transform: null };
    let obj1 = spring;
    value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_1_2 === flag(state[19]).TransitionStates.YEETED;
      }
      if (tmp) {
        flag(state[18]).runOnJS(cleanUp)();
        const obj = flag(state[18]);
      }
    };
    obj = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 47605595424;
    fn.__initData = __initData;
    obj.opacity = obj1.withSpring(value, FOLDER_SPRING_PHYSICS, undefined, fn);
    let num = 1;
    if (1 === sharedValue.get()) {
      obj = { translateY: obj5.withSpring(0, FOLDER_SPRING_PHYSICS) };
      const items = [obj, ];
      if (num !== sharedValue.get()) {
        let num2 = 1.3;
        if (flag) {
          num2 = 0.3;
        }
        num = num2;
      }
      obj1 = { scale: spring.withSpring(num, FOLDER_SPRING_PHYSICS) };
      items[1] = obj1;
      obj.transform = items;
      return obj;
    }
    obj5 = spring;
  };
  obj = { withSpring: tmp(tmp2[14]).withSpring, visible: sharedValue, FOLDER_SPRING_PHYSICS, state, TransitionStates: tmp(tmp2[19]).TransitionStates, runOnJS: tmp(tmp2[18]).runOnJS, cleanUp, fromTop: flag, guildItemSize: token };
  fn.__closure = obj;
  fn.__workletHash = 14426547532118;
  fn.__initData = __initData2;
  let items = [state, sharedValue];
  const animatedStyle = flag(state[18]).useAnimatedStyle(fn);
  const effect = token.useEffect(() => {
    let num = 1;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  obj = { style: null, children: children.children };
  const items1 = [animatedStyle, tmp5.folderScaleContainer];
  obj.style = items1;
  return closure_14(tmp3(state[17]), obj);
}
function getItemKey(type) {
  return type.type;
}
function GuildFolderIcon(item) {
  item = item.item;
  let tmp = null;
  if ("icon" === item.type) {
    const obj = { source: _modDef5031, style: item.tintStyle };
    tmp = closure_1_14(FastImageDefault, obj);
  }
  return tmp;
}
function renderGuildFolderContent(arg0, type, state, cleanUp) {
  type = type.type;
  if ("icon" === type) {
    let obj = { fromTop: true, cleanUp, state, children: null };
    obj = { item: type };
    obj.children = closure_14(GuildFolderIcon, obj);
    return closure_14(TransitionWrapper, obj, arg0);
  } else if ("preview" === type) {
    obj = { cleanUp, state, children: null };
    const guilds = type.guilds;
    obj.children = guilds.map((guildId, index) => {
      let tmp = index;
      if (0 !== index) {
        tmp = index;
        if (1 !== index) {
          tmp = index;
          if (2 !== index) {
            tmp = index;
          }
        }
      }
      let tmp2 = null;
      if (null != guildId) {
        tmp2 = null;
        if (null != tmp) {
          const obj = { guildId, selected: guildId === type.selectedGuildId, position: tmp };
          tmp2 = closure_2_14(MiniGuildIcon, obj, guildId);
        }
      }
      return tmp2;
    });
    return closure_14(TransitionWrapper, obj, arg0);
  }
}
const GuildsNodeType = fn(5438).GuildsNodeType;
const GuildsBarDnDStore = fn(16284);
({ useItemDragState: closure_9, useFolderBGHeightOffset: c10 } = GuildsBarDnDStore);
const DEFAULT_FOLDER_COLOR = fn(16290).DEFAULT_FOLDER_COLOR;
const GuildsBarConstants = fn(16285);
({ TRANSITION_PHYSICS: closure_12, FOLDER_SPRING_PHYSICS: map1 } = GuildsBarConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4560);
let closure_16 = createStyles.createStyles(() => {
  let num = arg0;
  if (arg0 === undefined) {
    num = 48;
  }
  let num2 = arg1;
  if (arg1 === undefined) {
    num2 = 0;
  }
  let obj = { folderBackground: null, folderScaleContainer: null, guildPreviewIcon: null, guildPreviewIconUnselected: null, guildPreview0: null, guildPreview1: null, guildPreview2: null, guildPreview3: null, guildPreviewWrapper: null };
  const rect = { position: "absolute", top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, left: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_LEFT, backgroundColor: nativeDefault.colors.GUILD_FOLDER_BACKGROUND, borderTopLeftRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderTopRightRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderBottomLeftRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, width: num + num2 };
  obj.folderBackground = rect;
  obj.folderScaleContainer = { position: "absolute", top: 0, left: 0, width: num, height: num, justifyContent: "center", alignItems: "center" };
  obj = { position: "absolute", margin: nativeDefault.modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN };
  obj.guildPreviewIcon = obj;
  obj = { borderRadius: nativeDefault.radii.sm };
  obj.guildPreviewIconUnselected = obj;
  obj.guildPreview0 = { top: 0, left: 0 };
  obj.guildPreview1 = { top: 0, right: 0 };
  obj.guildPreview2 = { bottom: 0, left: 0 };
  obj.guildPreview3 = { bottom: 0, right: 0 };
  const size = { position: "absolute", width: num, height: num, opacity: nativeDefault.modules.mobile.GUILD_FOLDER_PREVIEW_OPACITY };
  obj.guildPreviewWrapper = size;
  return obj;
});
const __initData = { code: "function GuildsBarGuildFolderTsx1(values){const{withSpring,TRANSITION_PHYSICS}=this.__closure;return{animations:{height:withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight}};}" };
const memoResult = noop.memo(function FolderBGInner(color) {
  color = color.color;
  let token2;
  ({ folderId, totalItems } = color);
  let obj = color(4262);
  const token = obj.useToken(token2(576).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj1 = color(4262);
  const token1 = obj1.useToken(token2(576).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const obj3 = color(4262);
  const fn = function s(height) {
    let obj = { animations: null, initialValues: null };
    obj = { height: color(dependencyMap[14]).withSpring(height.targetHeight, TRANSITION_PHYSICS, "animate-always") };
    obj.animations = obj;
    obj.initialValues = { height: height.currentHeight };
    return obj;
  };
  obj = { withSpring: null, TRANSITION_PHYSICS: null };
  const tmp3 = closure_16(token, color(4262).useToken(token2(576).modules.mobile.GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET));
  obj.withSpring = color(4974).withSpring;
  obj.TRANSITION_PHYSICS = TRANSITION_PHYSICS;
  fn.__closure = obj;
  fn.__workletHash = 2519256682742;
  fn.__initData = __initData;
  const callback = noop.useCallback(fn, []);
  const tmp4 = closure_10(folderId);
  token2 = color(4262).useToken(token2(576).modules.mobile.GUILD_FOLDER_COLOR_OPACITY);
  const items = [color, token2];
  const memo = noop.useMemo(() => {
    if (null != color) {
      if (color !== DEFAULT_FOLDER_COLOR) {
        const obj = { backgroundColor: null };
        const obj2 = ColorUtils;
        obj.backgroundColor = obj2.hexWithOpacity(utils_ColorUtils.int2hex(color), token2);
        return obj;
      }
    }
  }, items);
  obj = { pointerEvents: "none", collapsable: false, layout: callback, style: null };
  const items1 = [tmp3.folderBackground, memo, ];
  obj1 = { height: token + token1 + (token + 2 * token1) * totalItems + tmp4 };
  items1[2] = obj1;
  obj.style = items1;
  return closure_14(token2(7073), obj);
});
const __initData2 = { code: "function GuildsBarGuildFolderTsx2(){const{withSpring,visible,FOLDER_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,fromTop,guildItemSize}=this.__closure;return{opacity:withSpring(visible.get(),FOLDER_SPRING_PHYSICS,undefined,function(finished){if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}),transform:[{translateY:withSpring(visible.get()===1?0:fromTop?-guildItemSize:guildItemSize,FOLDER_SPRING_PHYSICS)},{scale:withSpring(visible.get()===1?1:fromTop?0.3:1.3,FOLDER_SPRING_PHYSICS)}]};}" };
let closure_21 = { code: "function GuildsBarGuildFolderTsx3(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}" };
const __initData3 = { code: "function GuildsBarGuildFolderTsx4(values){const{dragDropInProgress,sharedId,id,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _id;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===\"\"+id&&!isDragTarget;sharedId.set(\"\"+((_id=id)!==null&&_id!==void 0?_id:null));return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildFolder.tsx");

export default noop.memo(function GuildsBarGuildFolder(id) {
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
  let selectedPreviewId;
  let obj = id(name[11]);
  let tmp4 = closure_16(obj.useToken(expanded(name[10]).modules.mobile.GUILD_BAR_ITEM_SIZE));
  const guildPreviewWrapper = tmp4;
  let obj1 = id(name[22]);
  let obj2 = id(name[12]);
  let items = [childNodes];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    if (expanded) {
      return { unread: false, mentionCount: 0, isMentionLowImportance: false };
    } else {
      const mutableGuildStates = GuildReadStateStore.getMutableGuildStates();
      return childNodes.reduce((mentionCount, id) => {
        if (null != id.id) {
          let num;
          if (dependencyMap[id.id] != null) {
            num = tmp5.highImportanceMentionCount;
          }
          if (num == null) {
            num = 0;
          }
          let num2;
          if (dependencyMap[id.id] != null) {
            num2 = tmp.lowImportanceMentionCount;
          }
          if (num2 == null) {
            num2 = 0;
          }
          mentionCount.mentionCount = mentionCount.mentionCount + num + num2;
          let flag = mentionCount.unread;
          if (!flag) {
            let unread;
            if (dependencyMap[id.id] != null) {
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
  let items1 = [guildPreviewWrapper, selectedPreviewId];
  let items2 = [expanded, id, childNodes];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items1, () => {
    let num = 0;
    const guildId = SelectedGuildStore.getGuildId();
    const iter = childNodes[Symbol.iterator]();
    while (iter !== undefined) {
      if (iter.next().id === guildId) {
        let tmp = guildId;
        iter.return();
        break;
      } else {
        let sum = num + 1;
        num = sum;
        if (4 <= sum) {
          iter.return();
          break;
        }
        break;
      }
      let flag = false;
      if (!expanded) {
        flag = false;
        if (null != guildId) {
          let guildsTree = SortedGuildStore.getGuildsTree();
          let node = guildsTree.getNode(guildId);
          let parentId;
          if (node != null) {
            parentId = node.parentId;
          }
          flag = parentId === id;
        }
      }
      let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
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
    let obj = utils_ColorUtils;
    let tmp = color;
    if (color == null) {
      tmp = DEFAULT_FOLDER_COLOR;
    }
    const int2hexResult = obj.int2hex(tmp);
    obj = { tintStyle: { tintColor: int2hexResult }, folderPreviewStyle: { backgroundColor: int2hexResult } };
    return obj;
  }, items5);
  const tintStyle = memo.tintStyle;
  const folderPreviewStyle = memo.folderPreviewStyle;
  const items6 = [id, foldersChanged];
  const items7 = [expanded, childNodes, tintStyle, selectedPreviewId];
  const memo1 = color.useMemo(() => ({
    onPress() {
      if (null != foldersChanged) {
        value = foldersChanged.get();
        const _HermesInternal = HermesInternal;
        if (value.has("" + closure_1_0)) {
          const _Set = Set;
          const set = new Set(foldersChanged.get());
          const _HermesInternal2 = HermesInternal;
          set.add("" + closure_1_0);
          const result = foldersChanged.set(set);
        }
      }
      const result1 = id(name[26]).triggerHapticFeedback(id(name[26]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj4 = id(name[26]);
      const result2 = expanded(name[27]).toggleGuildFolderExpand(closure_1_0);
      const obj5 = expanded(name[27]);
    }
  }), items6);
  const items8 = [expanded, tmp4.guildPreviewWrapper, folderPreviewStyle];
  const memo2 = color.useMemo(() => {
    if (expanded) {
      let obj = { type: "icon", tintStyle };
      const items = [obj];
      return items;
    } else {
      const items1 = [];
      const iter = childNodes[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult.type === GuildsNodeType.GUILD) {
          let arr = items1.push(tmp6.id);
          if (items1.length >= 4) {
            iter.return();
            break;
          }
          obj = { type: "preview", guilds: items1, selectedGuildId: selectedPreviewId };
          let items2 = [obj];
          return items2;
        }
        continue;
      }
    }
  }, items7);
  const callback = color.useCallback((arg0) => {
    const items = [guildPreviewWrapper.guildPreviewWrapper, ];
    let tmp4;
    if (!expanded) {
      tmp4 = folderPreviewStyle;
    }
    const obj = { children: null };
    items[1] = tmp4;
    const items1 = [closure_2_14(NativeViewDefault, { style: items }), arg0];
    obj.children = items1;
    return __initData(noop.Fragment, obj, "wrapper");
  }, items8);
  const tmp13 = folderPreviewStyle(id, flag);
  const isDragTarget = tmp13.isDragTarget;
  const dragDropInProgress = tmp13.dragDropInProgress;
  const items9 = [id];
  ({ dragState, overState, itemSize } = tmp13);
  const memo3 = color.useMemo(() => {
    let obj = GuildsBarFolderMenuItems;
    const guildFolderMenuItems = obj.getGuildFolderMenuItems(id);
    obj = {
      accessibilityActions: guildFolderMenuItems.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        const nativeEvent = arg0;
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
  let obj5 = id(name[12]);
  const sharedValue = id(name[18]).useSharedValue("" + id);
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
        tmp10 = closure_0;
        tmp11 = closure_2;
        obj = closure_0(closure_2[14]);
        tmp12 = TRANSITION_PHYSICS;
        str2 = "animate-always";
        targetOriginY = obj.withSpring(id.targetOriginY, TRANSITION_PHYSICS, "animate-always");
      } else {
        targetOriginY = id.targetOriginY;
      }
      obj = { originY: targetOriginY, height: null };
      if (value) {
        tmp13 = closure_0;
        tmp14 = closure_2;
        obj3 = closure_0(closure_2[14]);
        tmp15 = TRANSITION_PHYSICS;
        str3 = "animate-always";
        targetHeight = obj3.withSpring(id.targetHeight, TRANSITION_PHYSICS, "animate-always");
      } else {
        targetHeight = id.targetHeight;
      }
      obj1 = { animations: obj, initialValues: { originY: id.currentOriginY, height: id.currentHeight } };
      obj.height = targetHeight;
      return obj1;
    }
  }
  obj = { dragDropInProgress, sharedId: sharedValue, id, isDragTarget, withSpring: id(name[14]).withSpring, TRANSITION_PHYSICS: sharedValue };
  E.__closure = obj;
  E.__workletHash = 11967845900199;
  E.__initData = __initData3;
  const items10 = [id, sharedValue, isDragTarget, dragDropInProgress];
  const callback1 = color.useCallback(E, items10);
  obj = { id: null, draggedItemSize: null, accessibilityActions: null, onAccessibilityAction: null, selected: null, unread: null, circle: false, styles: null, label: null, isDragTarget: null, dragState: null, sharedId: null, cutouts: null, config: null, isDragPreview: null, overState: null, expanded: null, layout: null, externalChildren: null, expandedChildren: null, children: null };
  const obj6 = id(name[18]);
  obj.id = "" + id;
  obj.draggedItemSize = itemSize;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  obj.selected = stateFromStoresObject1.hasGuildSelected;
  let tmp19 = !expanded;
  if (!expanded) {
    tmp19 = unread;
  }
  obj.unread = tmp19;
  obj.styles = guildsBarAnimatedWrapperStyles;
  obj.label = obj5.useStateFromStores(items3, () => {
    if (null != name) {
      let obj = { count: 1, names: null, label: null };
      const items = [name];
      obj.names = items;
      obj.label = name;
      return obj;
    } else {
      const items1 = [];
      let num = 0;
      const obj4 = childNodes[Symbol.iterator]();
      while (obj4 !== undefined) {
        let guild = GuildStore.getGuild(tmp3.id);
        if (null != guild) {
          let arr = items1.push(tmp7.name);
        }
        let sum = num + 1;
        num = sum;
        if (3 <= sum) {
          obj4.return();
          break;
        }
        obj = { names: items1, count: childNodes.length, label: null };
        let obj2 = ListUtils;
        obj.label = obj2.getListSummaryLabel(items1, childNodes.length);
        return obj;
      }
    }
  }, items4, expanded(name[25])).label;
  obj.isDragTarget = isDragTarget;
  obj.dragState = dragState;
  obj.sharedId = sharedValue;
  obj.cutouts = cutouts;
  obj.config = memo1;
  obj.isDragPreview = flag;
  obj.overState = overState;
  obj.expanded = expanded;
  obj.layout = callback1;
  let tmp17Result = badge;
  if (expanded) {
    tmp17Result = badge;
    if (!flag) {
      obj1 = { color, folderId: id, totalItems: childNodes.length };
      tmp17Result = closure_14(closure_19, obj1);
    }
  }
  obj.externalChildren = tmp17Result;
  tmp17Result = undefined;
  if (!flag2) {
    obj2 = { folderId: id, expanded };
    tmp17Result = closure_14(tmp3(tmp2[30]), obj2);
  }
  obj.expandedChildren = tmp17Result;
  obj3 = { renderItem: renderGuildFolderContent, getItemKey, items: memo2, wrapChildren: callback };
  obj.children = closure_14(tmp(name[19]).TransitionGroup, obj3);
  return closure_14(expanded(name[22]), obj);
});
export const GuildsBarGuildFolderBG = memoResult;