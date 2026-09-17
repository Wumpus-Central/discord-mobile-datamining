// === Module 16453: GuildsBarGuildFolder ===

// Module 16453 (GuildsBarGuildFolder)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import useToken from "useToken" /* 4341 */;
import native from "native" /* 4350 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import ColorUtils from "ColorUtils" /* 4489 */;
import spring from "spring" /* 5061 */;
import _modDef5118 from "module_5118" /* 5118 */;
import GuildIcon from "GuildIcon" /* 5672 */;
import FastImageDefault from "FastImage" /* 5675 */;
import NativeViewDefault from "NativeView" /* 5677 */;
import ListUtils from "ListUtils" /* 12770 */;
import GuildsBarFolderMenuItems from "GuildsBarFolderMenuItems" /* 16447 */;
import noop from "module_19" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7750 */;
import GuildStore from "GuildStore" /* 1980 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4461 */;
import SortedGuildStore from "SortedGuildStore" /* 5526 */;

const GuildIconDefault = GuildIcon;

require = fn;
function MiniGuildIcon(arg0) {
  ({ guildId: require, position, selected } = arg0);
  const tmp4 = closure_18(useToken.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE));
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
  const tmp3Result = GuildIconDefault;
  items1[1] = prop;
  items1[2] = guildPreview3;
  return closure_16(tmp3Result, { style: items1, guild: stateFromStores, size: GuildIcon.GuildIconSizes.XXSMALL, selected }, "" + selected);
}
function TransitionWrapper(children) {
  let flag = children.fromTop;
  if (flag === undefined) {
    flag = false;
  }
  const cleanUp = children.cleanUp;
  const state = children.state;
  let sharedValue;
  const token = flag(state[11]).useToken(cleanUp(state[10]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj = flag(state[11]);
  const tmp3 = cleanUp;
  const tmp5 = closure_18(token);
  let num = 0;
  if (state === flag(state[19]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = flag(state[18]).useSharedValue(num);
  let obj2 = flag(state[18]);
  let fn = function u() {
    let obj = { opacity: null, transform: null };
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
    const obj2 = spring;
    fn.__closure = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 47605595424;
    fn.__initData = __initData;
    obj.opacity = obj2.withSpring(value, FOLDER_SPRING_PHYSICS, undefined, fn);
    const obj4 = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    let num = 1;
    if (1 === sharedValue.get()) {
      const obj6 = { translateY: obj5.withSpring(0, FOLDER_SPRING_PHYSICS) };
      const items = [obj6, ];
      if (num !== sharedValue.get()) {
        let num2 = 1.3;
        if (flag) {
          num2 = 0.3;
        }
        num = num2;
      }
      const obj7 = { scale: spring.withSpring(num, FOLDER_SPRING_PHYSICS) };
      items[1] = obj7;
      obj.transform = items;
      return obj;
    }
    obj5 = spring;
  };
  const tmpResult = flag(state[18]);
  fn.__closure = { withSpring: flag(state[14]).withSpring, visible: sharedValue, FOLDER_SPRING_PHYSICS, state, TransitionStates: flag(state[19]).TransitionStates, runOnJS: flag(state[18]).runOnJS, cleanUp, fromTop: flag, guildItemSize: token };
  fn.__workletHash = 14426547532118;
  fn.__initData = __initData2;
  let items = [state, sharedValue];
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const effect = token.useEffect(() => {
    let num = 1;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  let obj4 = { style: null, children: children.children };
  const items1 = [animatedStyle, tmp5.folderScaleContainer];
  obj4.style = items1;
  return closure_16(tmp3(state[17]), obj4);
}
function getItemKey(type) {
  return type.type;
}
function GuildFolderIcon(item) {
  item = item.item;
  let tmp = null;
  if ("icon" === item.type) {
    const obj = { source: _modDef5118, style: item.tintStyle };
    tmp = value2(FastImageDefault, obj);
  }
  return tmp;
}
function renderGuildFolderContent(arg0, type, state, cleanUp) {
  type = type.type;
  if ("icon" === type) {
    const obj2 = { fromTop: true, cleanUp, state, children: null };
    const obj3 = { item: type };
    obj2.children = closure_16(GuildFolderIcon, obj3);
    return closure_16(TransitionWrapper, obj2, arg0);
  } else if ("preview" === type) {
    let obj = { cleanUp, state, children: null };
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
          tmp2 = value2(MiniGuildIcon, obj, guildId);
        }
      }
      return tmp2;
    });
    return closure_16(TransitionWrapper, obj, arg0);
  }
}
const GuildsNodeType = fn(5526).GuildsNodeType;
const GuildsBarDnDStore = fn(16445);
({ useItemDragState: closure_9, useFolderBGHeightOffset: c10 } = GuildsBarDnDStore);
let GuildsBarConstants = fn(16450);
({ DEFAULT_FOLDER_COLOR: closure_11, isDefaultFolderColor: closure_12, normalizeFolderColor: map1 } = GuildsBarConstants);
GuildsBarConstants = fn(16442);
({ TRANSITION_PHYSICS: closure_14, FOLDER_SPRING_PHYSICS: closure_15 } = GuildsBarConstants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4640);
let closure_18 = createStyles.createStyles(() => {
  let num = arg0;
  if (arg0 === undefined) {
    num = 48;
  }
  let num2 = arg1;
  if (arg1 === undefined) {
    num2 = 0;
  }
  const obj = { folderBackground: null, folderScaleContainer: null, guildPreviewIcon: null, guildPreviewIconUnselected: null, guildPreview0: null, guildPreview1: null, guildPreview2: null, guildPreview3: null, guildPreviewWrapper: null };
  const rect = { position: "absolute", top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, left: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_LEFT, backgroundColor: nativeDefault.colors.GUILD_FOLDER_BACKGROUND, borderTopLeftRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderTopRightRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderBottomLeftRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, width: num + num2 };
  obj.folderBackground = rect;
  obj.folderScaleContainer = { position: "absolute", top: 0, left: 0, width: num, height: num, justifyContent: "center", alignItems: "center" };
  obj.guildPreviewIcon = { position: "absolute", margin: nativeDefault.modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN };
  const obj2 = { position: "absolute", margin: nativeDefault.modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN };
  obj.guildPreviewIconUnselected = { borderRadius: nativeDefault.radii.sm };
  obj.guildPreview0 = { top: 0, left: 0 };
  obj.guildPreview1 = { top: 0, right: 0 };
  obj.guildPreview2 = { bottom: 0, left: 0 };
  obj.guildPreview3 = { bottom: 0, right: 0 };
  obj.guildPreviewWrapper = { position: "absolute", width: num, height: num };
  return obj;
});
const __initData = { code: "function GuildsBarGuildFolderTsx1(values){const{withSpring,TRANSITION_PHYSICS}=this.__closure;return{animations:{height:withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight}};}" };
const memoResult = noop.memo(function FolderBGInner(color) {
  color = color.color;
  let token2;
  ({ folderId, totalItems } = color);
  const token = color(4341).useToken(token2(576).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj = color(4341);
  const token1 = color(4341).useToken(token2(576).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let obj2 = color(4341);
  const obj3 = color(4341);
  const fn = function s(height) {
    const obj = { animations: null, initialValues: null };
    const obj2 = { height: color(dependencyMap[14]).withSpring(height.targetHeight, TRANSITION_PHYSICS, "animate-always") };
    obj.animations = obj2;
    obj.initialValues = { height: height.currentHeight };
    return obj;
  };
  const obj4 = { withSpring: null, TRANSITION_PHYSICS: null };
  const tmp3 = closure_18(token, color(4341).useToken(token2(576).modules.mobile.GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET));
  obj4.withSpring = color(5061).withSpring;
  obj4.TRANSITION_PHYSICS = TRANSITION_PHYSICS;
  fn.__closure = obj4;
  fn.__workletHash = 2519256682742;
  fn.__initData = __initData;
  const callback = noop.useCallback(fn, []);
  const tmp4 = closure_10(folderId);
  token2 = color(4341).useToken(token2(576).modules.mobile.GUILD_FOLDER_COLOR_OPACITY);
  const items = [color, token2];
  const memo = noop.useMemo(() => {
    const tmp = map1(color);
    if (null != tmp) {
      const obj = { backgroundColor: null };
      const obj2 = ColorUtils;
      obj.backgroundColor = obj2.hexWithOpacity(utils_ColorUtils.int2hex(tmp), token2);
      return obj;
    }
  }, items);
  const obj6 = { pointerEvents: "none", collapsable: false, layout: callback, style: null };
  const items1 = [tmp3.folderBackground, memo, { height: token + token1 + (token + 2 * token1) * totalItems + tmp4 }];
  obj6.style = items1;
  return closure_16(token2(7187), obj6);
});
const __initData2 = { code: "function GuildsBarGuildFolderTsx2(){const{withSpring,visible,FOLDER_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,fromTop,guildItemSize}=this.__closure;return{opacity:withSpring(visible.get(),FOLDER_SPRING_PHYSICS,undefined,function(finished){if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}),transform:[{translateY:withSpring(visible.get()===1?0:fromTop?-guildItemSize:guildItemSize,FOLDER_SPRING_PHYSICS)},{scale:withSpring(visible.get()===1?1:fromTop?0.3:1.3,FOLDER_SPRING_PHYSICS)}]};}" };
let closure_23 = { code: "function GuildsBarGuildFolderTsx3(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}" };
const __initData3 = { code: "function GuildsBarGuildFolderTsx4(values){const{dragDropInProgress,sharedId,id,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _id;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===\"\"+id&&!isDragTarget;sharedId.set(\"\"+((_id=id)!==null&&_id!==void 0?_id:null));return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}" };
const size = fn(2);
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
  let tmp4 = closure_18(id(name[11]).useToken(expanded(name[10]).modules.mobile.GUILD_BAR_ITEM_SIZE));
  const guildPreviewWrapper = tmp4;
  let obj = id(name[11]);
  let tmp = id;
  const tmp3 = expanded;
  let obj2 = id(name[22]);
  const guildsBarAnimatedWrapperStyles = id(name[22]).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  let items = [childNodes];
  const stateFromStoresObject = id(name[12]).useStateFromStoresObject(items, () => {
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
  const stateFromStoresObject1 = id(name[12]).useStateFromStoresObject(items1, () => {
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
  let obj4 = id(name[12]);
  ({ badge, cutouts } = expanded(name[23])({ mentionCount, isMentionLowImportance }));
  let tmp8 = expanded(name[23])({ mentionCount, isMentionLowImportance });
  const items3 = [foldersChanged];
  const items4 = [name, childNodes];
  let obj5 = id(name[12]);
  const token = id(name[11]).useToken(expanded(name[10]).colors.GUILD_FOLDER_BACKGROUND);
  const obj6 = id(name[11]);
  const token1 = id(name[11]).useToken(expanded(name[10]).modules.mobile.GUILD_FOLDER_PREVIEW_OPACITY);
  const items5 = [color, token, token1];
  const memo = color.useMemo(() => {
    let tmp4 = color;
    if (color == null) {
      tmp4 = closure_2_11;
    }
    const int2hexResult = utils_ColorUtils.int2hex(tmp4);
    const obj2 = { tintStyle: { tintColor: int2hexResult }, folderPreviewStyle: null };
    if (closure_2_12(color)) {
      let hexWithOpacityResult = token;
    } else {
      hexWithOpacityResult = ColorUtils.hexWithOpacity(int2hexResult, token1);
      const tmpResult = ColorUtils;
    }
    obj2.folderPreviewStyle = { backgroundColor: hexWithOpacityResult };
    return obj2;
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
      const obj2 = { type: "icon", tintStyle };
      const items = [obj2];
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
          let obj = { type: "preview", guilds: items1, selectedGuildId: selectedPreviewId };
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
    const items1 = [value2(NativeViewDefault, { style: items }), arg0];
    obj.children = items1;
    return closure_2_17(noop.Fragment, obj, "wrapper");
  }, items8);
  const tmp15 = token1(id, flag);
  const isDragTarget = tmp15.isDragTarget;
  const dragDropInProgress = tmp15.dragDropInProgress;
  const items9 = [id];
  ({ dragState, overState, itemSize } = tmp15);
  const memo3 = color.useMemo(() => {
    const guildFolderMenuItems = GuildsBarFolderMenuItems.getGuildFolderMenuItems(id);
    return {
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
  }, items9);
  ({ accessibilityActions, onAccessibilityAction } = memo3);
  const obj7 = id(name[11]);
  const sharedValue = id(name[18]).useSharedValue("" + id);
  class E {
    constructor(arg0) {
      value = dragDropInProgress.get();
      if (value) {
        tmp2 = closure_14;
        tmp4 = id;
        tmp5 = globalThis;
        _HermesInternal = HermesInternal;
        str = "";
        value1 = closure_14.get();
        value = value1 === "" + id;
      }
      if (value) {
        tmp6 = isDragTarget;
        value = !isDragTarget;
      }
      tmp8 = id;
      tmp7 = closure_14;
      if (id == null) {
        tmp8 = null;
      }
      result = closure_14.set("" + tmp8);
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
      obj1 = { originY: targetOriginY, height: null };
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
      obj5 = { animations: obj1, initialValues: { originY: id.currentOriginY, height: id.currentHeight } };
      obj1.height = targetHeight;
      return obj5;
    }
  }
  const obj8 = id(name[18]);
  E.__closure = { dragDropInProgress, sharedId: sharedValue, id, isDragTarget, withSpring: id(name[14]).withSpring, TRANSITION_PHYSICS: sharedValue };
  E.__workletHash = 11967845900199;
  E.__initData = __initData3;
  const items10 = [id, sharedValue, isDragTarget, dragDropInProgress];
  const callback1 = color.useCallback(E, items10);
  const obj10 = { id: null, draggedItemSize: null, accessibilityActions: null, onAccessibilityAction: null, selected: null, unread: null, circle: false, styles: null, label: null, isDragTarget: null, dragState: null, sharedId: null, cutouts: null, config: null, isDragPreview: null, overState: null, expanded: null, layout: null, externalChildren: null, expandedChildren: null, children: null };
  const obj9 = { dragDropInProgress, sharedId: sharedValue, id, isDragTarget, withSpring: id(name[14]).withSpring, TRANSITION_PHYSICS: sharedValue };
  obj10.id = "" + id;
  obj10.draggedItemSize = itemSize;
  obj10.accessibilityActions = accessibilityActions;
  obj10.onAccessibilityAction = onAccessibilityAction;
  obj10.selected = stateFromStoresObject1.hasGuildSelected;
  let tmp21 = !expanded;
  if (!expanded) {
    tmp21 = unread;
  }
  obj10.unread = tmp21;
  obj10.styles = guildsBarAnimatedWrapperStyles;
  obj10.label = obj5.useStateFromStores(items3, () => {
    if (null != name) {
      const obj3 = { count: 1, names: null, label: null };
      const items = [name];
      obj3.names = items;
      obj3.label = name;
      return obj3;
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
        let obj = { names: items1, count: childNodes.length, label: null };
        let obj2 = ListUtils;
        obj.label = obj2.getListSummaryLabel(items1, childNodes.length);
        return obj;
      }
    }
  }, items4, expanded(name[25])).label;
  obj10.isDragTarget = isDragTarget;
  obj10.dragState = dragState;
  obj10.sharedId = sharedValue;
  obj10.cutouts = cutouts;
  obj10.config = memo1;
  obj10.isDragPreview = flag;
  obj10.overState = overState;
  obj10.expanded = expanded;
  obj10.layout = callback1;
  let tmp19Result = badge;
  if (expanded) {
    tmp19Result = badge;
    if (!flag) {
      const obj11 = { color, folderId: id, totalItems: childNodes.length };
      tmp19Result = closure_16(closure_21, obj11);
    }
  }
  obj10.externalChildren = tmp19Result;
  let tmp19Result2;
  if (!flag2) {
    const obj12 = { folderId: id, expanded };
    tmp19Result2 = closure_16(tmp3(tmp2[30]), obj12);
  }
  obj10.expandedChildren = tmp19Result2;
  obj10.children = closure_16(tmp(name[19]).TransitionGroup, { renderItem: renderGuildFolderContent, getItemKey, items: memo2, wrapChildren: callback });
  return closure_16(expanded(name[22]), obj10);
});
export const GuildsBarGuildFolderBG = memoResult;