// discord_app/modules/guilds_bar/native/GuildsBarGuildFolder.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import NativeViewDefault from "../../core/native/NativeView.tsx";
import _modDef8747 from "../../../../_runtime/metro/08747__.js";
import ListUtils from "../../../utils/ListUtils.tsx";
import GuildsBarFolderMenuItems from "GuildsBarFolderMenuItems.tsx";
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper.tsx";
import useGuildsBarBottomRightBadgeDefault from "hooks/useGuildsBarBottomRightBadge.tsx";
import isGuildsBarGuildLabelEqualDefault from "utils/isGuildsBarGuildLabelEqual.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;

const _modDef1652 = tmp3(1652);
require = fn;
function MiniGuildIcon(arg0) {
  ({ guildId: require, position, selected } = arg0);
  const tmp4 = closure_19(useToken.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE));
  items = [GuildStore];
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
  const items1 = [tmp4.guildPreviewIcon, ,];
  let prop;
  if (!selected) {
    prop = tmp4.guildPreviewIconUnselected;
  }
  const tmp3Result = GuildIconDefault;
  items1[1] = prop;
  items1[2] = guildPreview3;
  return closure_17(
    tmp3Result,
    { style: items1, guild: stateFromStores, size: GuildIcon.GuildIconSizes.XXSMALL, selected },
    "" + selected,
  );
}
function TransitionWrapper(children) {
  let flag = children.fromTop;
  if (flag === undefined) {
    flag = false;
  }
  const cleanUp = children.cleanUp;
  _require = cleanUp;
  state = children.state;
  importDefault = state;
  noop = undefined;
  const token = require("useToken").useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const obj = require("useToken");
  const tmp5 = closure_19(token);
  items = [c4];
  const stateFromStores = require("initialize").useStateFromStores(items, () => _undefined5.useReducedMotion);
  dependencyMap = stateFromStores;
  let obj2 = require("initialize");
  if (state === require("native").TransitionStates.MOUNTED) {
    let num = 1;
  } else {
    num = 0;
  }
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(num);
  let obj3 = require("../../../../_runtime/metro/01652__.js");
  let items1 = [
    closure_24,
    require("spring/spring").withSpring,
    sharedValue,
    closure_16,
    closure_23,
    state,
    require("native").TransitionStates,
    require("../../../../_runtime/metro/01705__.js").scheduleOnRN,
    cleanUp,
    flag,
    token,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items1;
  class GuildsBarGuildFolderTsx3 {
    constructor() {
      tmp = closure_0;
      obj = closure_1;
      value = closure_1.get();
      tmp3 = closure_2;
      items = [, , , ,];
      items[0] = closure_3;
      items[1] = closure_4;
      items[2] = closure_5;
      items[3] = closure_6;
      items[4] = closure_7;
      closure_0 = undefined;
      closure_1 = undefined;
      closure_2 = undefined;
      closure_3 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
      obj1 = { opacity: null, transform: null };
      class GuildsBarGuildFolderTsx2 {
        constructor(arg0) {
          tmp = children;
          if (children) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp = closure_0 === closure_1.YEETED;
          }
          if (tmp) {
            tmp4 = closure_2;
            tmp5 = closure_3;
            tmp6 = closure_2(closure_3);
          }
          return;
        }
      }
      items1 = [, , ,];
      items1[0] = tmp5;
      items1[1] = tmp6;
      items1[2] = tmp7;
      items1[3] = tmp8;
      GuildsBarGuildFolderTsx2.__closure = items1;
      GuildsBarGuildFolderTsx2.__workletHash = 6478186376441;
      GuildsBarGuildFolderTsx2.__initData = tmp4;
      obj1.opacity = tmp(value, tmp3, undefined, GuildsBarGuildFolderTsx2);
      num = 1;
      if (1 === obj.get()) {
        obj5 = { translateY: null };
        obj5.translateY = tmp(0, tmp3);
        items2 = [,];
        items2[0] = obj5;
        if (num !== obj.get()) {
          tmp12 = closure_8;
          num2 = 1.3;
          if (closure_8) {
            num2 = 0.3;
          }
          num = num2;
        }
        obj6 = { scale: null };
        obj6.scale = tmp(num, tmp3);
        items2[1] = obj6;
        obj1.transform = items2;
        return obj1;
      } else {
        tmp9 = closure_8;
        tmp10 = closure_9;
        tmp11 = closure_8 ? -tmp10 : tmp10;
      }
      return;
    }
  }
  let items2 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  GuildsBarGuildFolderTsx3.__closure = items2;
  GuildsBarGuildFolderTsx3.__workletHash = 12641678463555;
  GuildsBarGuildFolderTsx3.__initData = tmp8;
  const items3 = [state, sharedValue, stateFromStores, cleanUp];
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(GuildsBarGuildFolderTsx3);
  const effect = noop.useEffect(() => {
    if (c2) {
      if (c1 === native.TransitionStates.YEETED) {
        _undefined();
      }
    }
    let num = 1;
    if (c1 === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = _undefined4.set(num);
  }, items3);
  let obj4 = { style: null, children: children.children };
  const items4 = [animatedStyle, tmp5.folderScaleContainer];
  obj4.style = items4;
  return closure_17(_modDef1652.View, obj4);
}
function getItemKey(type) {
  return type.type;
}
function GuildFolderIcon(item) {
  item = item.item;
  let tmp = null;
  if ("icon" === item.type) {
    const obj = { source: _modDef8747, style: item.tintStyle };
    tmp = closure_1_17(FastImageDefault, obj);
  }
  return tmp;
}
function renderGuildFolderContent(arg0, type, state, cleanUp) {
  type = type.type;
  if ("icon" === type) {
    const obj2 = { fromTop: true, cleanUp, state, children: null };
    const obj3 = { item: type };
    obj2.children = closure_17(GuildFolderIcon, obj3);
    return closure_17(TransitionWrapper, obj2, arg0);
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
          tmp2 = closure_2_17(MiniGuildIcon, obj, guildId);
        }
      }
      return tmp2;
    });
    return closure_17(TransitionWrapper, obj, arg0);
  }
}
const GuildsNodeType = fn(6907).GuildsNodeType;
const GuildsBarDnDStore = fn(18615);
({ useItemDragState: closure_10, useFolderBGHeightOffset: closure_11 } = GuildsBarDnDStore);
let GuildsBarConstants = fn(18620);
({
  DEFAULT_FOLDER_COLOR: closure_12,
  isDefaultFolderColor: map1,
  normalizeFolderColor: closure_14,
} = GuildsBarConstants);
GuildsBarConstants = fn(18612);
({ TRANSITION_PHYSICS: closure_15, FOLDER_SPRING_PHYSICS: closure_16 } = GuildsBarConstants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(5141);
let closure_19 = createStyles.createStyles(() => {
  let num = arg0;
  if (arg0 === undefined) {
    num = 48;
  }
  let num2 = arg1;
  if (arg1 === undefined) {
    num2 = 0;
  }
  const obj = {
    folderBackground: null,
    folderScaleContainer: null,
    guildPreviewIcon: null,
    guildPreviewIconUnselected: null,
    guildPreview0: null,
    guildPreview1: null,
    guildPreview2: null,
    guildPreview3: null,
    guildPreviewWrapper: null,
  };
  const rect = {
    position: "absolute",
    top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN,
    left: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_LEFT,
    backgroundColor: nativeDefault.colors.GUILD_FOLDER_BACKGROUND,
    borderTopLeftRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS,
    borderTopRightRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS,
    borderBottomLeftRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS,
    borderBottomRightRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS,
    width: num + num2,
  };
  obj.folderBackground = rect;
  obj.folderScaleContainer = {
    position: "absolute",
    top: 0,
    left: 0,
    width: num,
    height: num,
    justifyContent: "center",
    alignItems: "center",
  };
  obj.guildPreviewIcon = {
    position: "absolute",
    margin: nativeDefault.modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN,
  };
  const obj2 = { position: "absolute", margin: nativeDefault.modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN };
  obj.guildPreviewIconUnselected = { borderRadius: nativeDefault.radii.sm };
  obj.guildPreview0 = { top: 0, left: 0 };
  obj.guildPreview1 = { top: 0, right: 0 };
  obj.guildPreview2 = { bottom: 0, left: 0 };
  obj.guildPreview3 = { bottom: 0, right: 0 };
  obj.guildPreviewWrapper = { position: "absolute", width: num, height: num };
  return obj;
});
let closure_21 = {
  code: "(function GuildsBarGuildFolderTsx1(values){let[withSpring,TRANSITION_PHYSICS]=this.__closure;return{animations:{height:withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight}};})",
};
const memoResult = noop.memo(function FolderBGInner(color) {
  color = color.color;
  _require = color;
  let token2;
  ({ folderId, totalItems } = color);
  const token = require("useToken").useToken(token2(575).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj = require("useToken");
  let tmp = _require;
  const token1 = require("useToken").useToken(token2(575).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let obj2 = require("useToken");
  const obj3 = require("useToken");
  items = [closure_21, ,];
  const tmp6 = closure_19(
    token,
    require("useToken").useToken(token2(575).modules.mobile.GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET),
  );
  items[1] = require("spring/spring").withSpring;
  items[2] = closure_15;
  _require = undefined;
  token2 = undefined;
  [tmp8, tmp9, tmp10] = items;
  class GuildsBarGuildFolderTsx1 {
    constructor(arg0) {
      obj = { animations: null, initialValues: null };
      obj1 = { height: closure_0(color.targetHeight, closure_1, "animate-always") };
      obj.animations = obj1;
      obj.initialValues = { height: color.currentHeight };
      return obj;
    }
  }
  const items1 = [tmp9, tmp10];
  GuildsBarGuildFolderTsx1.__closure = items1;
  GuildsBarGuildFolderTsx1.__workletHash = 3223849263087;
  GuildsBarGuildFolderTsx1.__initData = tmp8;
  const callback = noop.useCallback(GuildsBarGuildFolderTsx1, []);
  const tmp7 = closure_11(folderId);
  token2 = tmp(5732).useToken(tmp3(575).modules.mobile.GUILD_FOLDER_COLOR_OPACITY);
  const items2 = [color, token2];
  const memo = noop.useMemo(() => {
    const tmp = gesture(c0);
    if (null != tmp) {
      const obj = { backgroundColor: null };
      const obj2 = ColorUtils;
      obj.backgroundColor = obj2.hexWithOpacity(utils_ColorUtils.int2hex(tmp), token2);
      return obj;
    }
  }, items2);
  const obj5 = { pointerEvents: "none", collapsable: false, layout: callback, style: null };
  const items3 = [tmp6.folderBackground, memo, { height: token + token1 + (token + 2 * token1) * totalItems + tmp7 }];
  obj5.style = items3;
  return closure_17(token2(1652).View, obj5);
});
let closure_23 = {
  code: "(function GuildsBarGuildFolderTsx2(finished){let[state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished&&state===TransitionStates.YEETED)scheduleOnRN(cleanUp);})",
};
let closure_24 = {
  code: "(function GuildsBarGuildFolderTsx3(){let[withSpring,visible,FOLDER_SPRING_PHYSICS,_worklet_6478186376441_init_data,state,TransitionStates,scheduleOnRN,cleanUp,fromTop,guildItemSize]=this.__closure;return{opacity:withSpring(visible.get(),FOLDER_SPRING_PHYSICS,undefined,function GuildsBarGuildFolderTsx2Factory([_worklet_6478186376441_init_data,state,TransitionStates,scheduleOnRN,cleanUp]){const GuildsBarGuildFolderTsx2=function(finished){if(finished&&state===TransitionStates.YEETED)scheduleOnRN(cleanUp);};GuildsBarGuildFolderTsx2.__closure=[state,TransitionStates,scheduleOnRN,cleanUp];GuildsBarGuildFolderTsx2.__workletHash=6478186376441;GuildsBarGuildFolderTsx2.__initData=_worklet_6478186376441_init_data;return GuildsBarGuildFolderTsx2;}([_worklet_6478186376441_init_data,state,TransitionStates,scheduleOnRN,cleanUp])),transform:[{translateY:withSpring(visible.get()===1?0:fromTop?-guildItemSize:guildItemSize,FOLDER_SPRING_PHYSICS)},{scale:withSpring(visible.get()===1?1:fromTop?0.3:1.3,FOLDER_SPRING_PHYSICS)}]};})",
};
let closure_29 = {
  code: "(function GuildsBarGuildFolderTsx4(values){let[dragDropInProgress,sharedId,id,isDragTarget,withSpring,TRANSITION_PHYSICS]=this.__closure;var _id;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===\"\"+id&&!isDragTarget;sharedId.set(\"\"+((_id=id)!==null&&_id!==void 0?_id:null));return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildFolder.tsx");

export default noop.memo(function GuildsBarGuildFolder(id) {
  id = id.id;
  _require = id;
  const expanded = id.expanded;
  importDefault = expanded;
  const name = id.name;
  dependencyMap = name;
  const color = id.color;
  noop = color;
  const childNodes = id.childNodes;
  c4 = childNodes;
  let flag = id.isDragPreview;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = id.hideExpandedChildren;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const foldersChanged = id.foldersChanged;
  c5 = foldersChanged;
  let selectedPreviewId;
  let token;
  let tmp4 = closure_19(require("useToken").useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE));
  const guildPreviewWrapper = tmp4;
  let obj = require("useToken");
  let tmp = _require;
  let obj2 = require("GuildsBarAnimatedItemWrapper");
  const guildsBarAnimatedWrapperStyles = require("GuildsBarAnimatedItemWrapper").useGuildsBarAnimatedWrapperStyles({
    disableSelectedColor: true,
    disableBGColor: true,
  });
  items = [c5];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    if (c1) {
      return { unread: false, mentionCount: 0, isMentionLowImportance: false };
    } else {
      const mutableGuildStates = GuildReadStateStore.getMutableGuildStates();
      return _undefined3.reduce(
        (mentionCount, id) => {
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
        },
        { unread: false, mentionCount: 0, isMentionLowImportance: true },
      );
    }
  });
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  let obj3 = require("initialize");
  let items1 = [selectedPreviewId, token];
  let items2 = [expanded, id, childNodes];
  const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(
    items1,
    () => {
      let num = 0;
      const guildId = SelectedGuildStore.getGuildId();
      const iter = _undefined3[Symbol.iterator]();
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
        if (!c1) {
          flag = false;
          if (null != guildId) {
            let guildsTree = SortedGuildStore.getGuildsTree();
            let node = guildsTree.getNode(guildId);
            let parentId;
            if (node != null) {
              parentId = node.parentId;
            }
            flag = parentId === c0;
          }
        }
        let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
        return obj;
      }
    },
    items2,
  );
  selectedPreviewId = stateFromStoresObject1.selectedPreviewId;
  let obj4 = require("initialize");
  ({ badge, cutouts } = useGuildsBarBottomRightBadgeDefault({ mentionCount, isMentionLowImportance }));
  let tmp8 = useGuildsBarBottomRightBadgeDefault({ mentionCount, isMentionLowImportance });
  const items3 = [guildPreviewWrapper];
  const items4 = [name, childNodes];
  let obj5 = require("initialize");
  token = require("useToken").useToken(nativeDefault.colors.GUILD_FOLDER_BACKGROUND);
  const obj6 = require("useToken");
  const token1 = require("useToken").useToken(nativeDefault.modules.mobile.GUILD_FOLDER_PREVIEW_OPACITY);
  const items5 = [color, token, token1];
  const memo = noop.useMemo(() => {
    let tmp4 = c3;
    if (c3 == null) {
      tmp4 = application_id;
    }
    const int2hexResult = utils_ColorUtils.int2hex(tmp4);
    const obj2 = { tintStyle: { tintColor: int2hexResult }, folderPreviewStyle: null };
    if (state(c3)) {
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
  const memo1 = noop.useMemo(
    () => ({
      onPress() {
        if (null != closure_1_5) {
          value = closure_1_5.get();
          const _HermesInternal = HermesInternal;
          if (value.has("" + _undefined)) {
            const _Set = Set;
            const set = new Set(closure_1_5.get());
            const _HermesInternal2 = HermesInternal;
            set.add("" + _undefined);
            const result = closure_1_5.set(set);
          }
        }
        const result1 = c0(5384).triggerHapticFeedback(c0(5384).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj4 = c0(5384);
        const result2 = c1(7037).toggleGuildFolderExpand(_undefined);
        const obj5 = c1(7037);
      },
    }),
    items6,
  );
  const items8 = [expanded, tmp4.guildPreviewWrapper, folderPreviewStyle];
  const memo2 = noop.useMemo(() => {
    if (c1) {
      const obj2 = { type: "icon", tintStyle };
      items = [obj2];
      return items;
    } else {
      const items1 = [];
      const iter = _undefined3[Symbol.iterator]();
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
  const callback = noop.useCallback((arg0) => {
    items = [guildPreviewWrapper.guildPreviewWrapper];
    let tmp4;
    if (!c1) {
      tmp4 = folderPreviewStyle;
    }
    const obj = { children: null };
    items[1] = tmp4;
    const items1 = [closure_2_17(NativeViewDefault, { style: items }), arg0];
    obj.children = items1;
    return collapsedCategories(noop.Fragment, obj, "wrapper");
  }, items8);
  const tmp16 = tintStyle(id, flag);
  ({ isDragTarget, dragDropInProgress } = tmp16);
  const items9 = [id];
  ({ dragState, overState, itemSize } = tmp16);
  const memo3 = noop.useMemo(() => {
    const guildFolderMenuItems = GuildsBarFolderMenuItems.getGuildFolderMenuItems(c0);
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
      },
    };
  }, items9);
  ({ accessibilityActions, onAccessibilityAction } = memo3);
  const obj7 = require("useToken");
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue("" + id);
  const items10 = [
    closure_29,
    dragDropInProgress,
    sharedValue,
    id,
    isDragTarget,
    require("spring/spring").withSpring,
    closure_15,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items10;
  class GuildsBarGuildFolderTsx4 {
    constructor(arg0) {
      value = closure_0.get();
      if (value) {
        tmp2 = closure_1;
        tmp4 = closure_2;
        tmp5 = globalThis;
        _HermesInternal = HermesInternal;
        str = "";
        value1 = closure_1.get();
        value = value1 === "" + closure_2;
      }
      if (value) {
        tmp6 = closure_3;
        value = !closure_3;
      }
      tmp8 = closure_2;
      tmp7 = closure_1;
      if (closure_2 == null) {
        tmp8 = null;
      }
      result = closure_1.set("" + tmp8);
      if (value) {
        tmp10 = closure_4;
        tmp11 = closure_5;
        str2 = "animate-always";
        targetOriginY = closure_4(id.targetOriginY, closure_5, "animate-always");
      } else {
        targetOriginY = id.targetOriginY;
      }
      obj = { originY: targetOriginY, height: null };
      if (value) {
        tmp12 = closure_4;
        tmp13 = closure_5;
        str3 = "animate-always";
        targetHeight = closure_4(id.targetHeight, closure_5, "animate-always");
      } else {
        targetHeight = id.targetHeight;
      }
      obj1 = { animations: obj, initialValues: { originY: id.currentOriginY, height: id.currentHeight } };
      obj.height = targetHeight;
      return obj1;
    }
  }
  const items11 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
  GuildsBarGuildFolderTsx4.__closure = items11;
  GuildsBarGuildFolderTsx4.__workletHash = 4596060370334;
  GuildsBarGuildFolderTsx4.__initData = tmp19;
  const items12 = [id, sharedValue, isDragTarget, dragDropInProgress];
  const callback1 = noop.useCallback(GuildsBarGuildFolderTsx4, items12);
  const obj9 = {
    id: null,
    draggedItemSize: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
    selected: null,
    unread: null,
    circle: false,
    styles: null,
    label: null,
    isDragTarget: null,
    dragState: null,
    sharedId: null,
    cutouts: null,
    config: null,
    isDragPreview: null,
    overState: null,
    preventClipping: true,
    expanded: null,
    layout: null,
    externalChildren: null,
    expandedChildren: null,
    children: null,
  };
  const obj8 = require("../../../../_runtime/metro/01652__.js");
  obj9.id = "" + id;
  obj9.draggedItemSize = itemSize;
  obj9.accessibilityActions = accessibilityActions;
  obj9.onAccessibilityAction = onAccessibilityAction;
  obj9.selected = stateFromStoresObject1.hasGuildSelected;
  let tmp29 = !expanded;
  if (!expanded) {
    tmp29 = unread;
  }
  obj9.unread = tmp29;
  obj9.styles = guildsBarAnimatedWrapperStyles;
  obj9.label = obj5.useStateFromStores(
    items3,
    () => {
      if (null != label) {
        const obj3 = { count: 1, names: null, label: null };
        items = [label];
        obj3.names = items;
        obj3.label = label;
        return obj3;
      } else {
        const items1 = [];
        let num = 0;
        const obj4 = _undefined3[Symbol.iterator]();
        while (obj4 !== undefined) {
          guild = GuildStore.getGuild(tmp3.id);
          if (null != guild) {
            let arr = items1.push(tmp7.name);
          }
          let sum = num + 1;
          num = sum;
          if (3 <= sum) {
            obj4.return();
            break;
          }
          let obj = { names: items1, count: _undefined3.length, label: null };
          let obj2 = ListUtils;
          obj.label = obj2.getListSummaryLabel(items1, _undefined3.length);
          return obj;
        }
      }
    },
    items4,
    isGuildsBarGuildLabelEqualDefault,
  ).label;
  obj9.isDragTarget = isDragTarget;
  obj9.dragState = dragState;
  obj9.sharedId = sharedValue;
  obj9.cutouts = cutouts;
  obj9.config = memo1;
  obj9.isDragPreview = flag;
  obj9.overState = overState;
  obj9.expanded = expanded;
  obj9.layout = callback1;
  let tmp27Result = badge;
  if (expanded) {
    tmp27Result = badge;
    if (!flag) {
      const obj10 = { color, folderId: id, totalItems: childNodes.length };
      tmp27Result = closure_17(closure_22, obj10);
    }
  }
  obj9.externalChildren = tmp27Result;
  let tmp27Result2;
  if (!flag2) {
    const obj11 = { folderId: id, expanded };
    tmp27Result2 = closure_17(tmp3(18635), obj11);
  }
  obj9.expandedChildren = tmp27Result2;
  obj9.children = closure_17(tmp(5207).TransitionGroup, {
    renderItem: renderGuildFolderContent,
    getItemKey,
    items: memo2,
    wrapChildren: callback,
  });
  return closure_17(GuildsBarAnimatedItemWrapperDefault, obj9);
});
export const GuildsBarGuildFolderBG = memoResult;
