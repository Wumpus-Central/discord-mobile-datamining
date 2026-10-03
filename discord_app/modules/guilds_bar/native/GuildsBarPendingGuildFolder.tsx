// === Module 16243: GuildsBarPendingGuildFolder ===

// Module 16243 (GuildsBarPendingGuildFolder)
import HapticUtils from "HapticUtils" /* 4855 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import usePendingFolderGuildIdsDefault from "usePendingFolderGuildIds" /* 9415 */;
import GuildsBarFolderMenuItems from "GuildsBarFolderMenuItems" /* 16223 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 16230 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;

const require = globalThis.__r;

require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1085).EMPTY_STRING_SNOWFLAKE_ID;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  const cResult = id(guildFolderMenuItems[5]).c(28);
  id = id.id;
  ({ expanded, childNodes } = id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disableSelectedColor: true, disableBGColor: false };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = id(guildFolderMenuItems[5]);
  id(guildFolderMenuItems[6]).useGuildsBarAnimatedWrapperStyles(first);
  const tmp6 = require("usePendingFolderGuildIds")();
  importDefault = tmp6;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    cResult[1] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    class A {
      constructor() {
        tmp = closure_1;
        guildId = closure_4.getGuildId();
        if (guildId == null) {
          guildId = EMPTY_STRING_SNOWFLAKE_ID;
        }
        return closure_1.includes(guildId);
      }
    }
    cResult[2] = tmp6;
    cResult[3] = A;
  } else {
    class A {
      constructor() {
        tmp = closure_1;
        guildId = closure_4.getGuildId();
        if (guildId == null) {
          guildId = EMPTY_STRING_SNOWFLAKE_ID;
        }
        return closure_1.includes(guildId);
      }
    }
  }
  const tmpResult = id(guildFolderMenuItems[6]);
  const stateFromStores = id(guildFolderMenuItems[8]).useStateFromStores(tmp7, A);
  if (cResult[4] !== id) {
    class A {
      constructor() {
        tmp = closure_1;
        guildId = closure_4.getGuildId();
        if (guildId == null) {
          guildId = EMPTY_STRING_SNOWFLAKE_ID;
        }
        return closure_1.includes(guildId);
      }
    }
    guildFolderMenuItems = obj5.getGuildFolderMenuItems(id);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(arg0) {
          obj = { name: id.label, label: id.label };
          return obj;
        }
      }
      cResult[7] = S;
    } else {
      class S {
        constructor(arg0) {
          obj = { name: id.label, label: id.label };
          return obj;
        }
      }
    }
    const mapped = guildFolderMenuItems.map(S);
    cResult[4] = id;
    cResult[5] = guildFolderMenuItems;
    cResult[6] = mapped;
  } else {
    class S {
      constructor(arg0) {
        obj = { name: id.label, label: id.label };
        return obj;
      }
    }
    guildFolderMenuItems = tmp11;
    if (cResult[8] === tmp11) {
      class S {
        constructor(arg0) {
          obj = { name: id.label, label: id.label };
          return obj;
        }
      }
      ({ accessibilityActions, onAccessibilityAction } = tmp17);
      const _HermesInternal = HermesInternal;
      const sharedValue = tmp(tmp2[10]).useSharedValue("" + id);
      if (cResult[11] !== id) {
        class S {
          constructor(arg0) {
            obj = { name: id.label, label: id.label };
            return obj;
          }
        }
        tmp20[0] = function onPress() {
          const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          const result1 = GuildActionCreatorsDefault.toggleGuildFolderExpand(id);
        };
        cResult[11] = id;
        cResult[12] = tmp20;
      } else {
        class S {
          constructor(arg0) {
            obj = { name: id.label, label: id.label };
            return obj;
          }
        }
      }
      const _HermesInternal2 = HermesInternal;
      const combined = "" + id;
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0) {
            obj = { name: id.label, label: id.label };
            return obj;
          }
        }
        const stringResult = obj8.string(tmp(tmp2[13]).t["scsU+l"]);
        cResult[13] = stringResult;
      } else {
        class S {
          constructor(arg0) {
            obj = { name: id.label, label: id.label };
            return obj;
          }
        }
      }
      if (cResult[14] === childNodes) {
        class S {
          constructor(arg0) {
            obj = { name: id.label, label: id.label };
            return obj;
          }
        }
      }
      let tmp25 = null;
      if (expanded) {
        class S {
          constructor(arg0) {
            obj = { name: id.label, label: id.label };
            return obj;
          }
        }
        const obj3 = { folderId: id, totalItems: childNodes.length };
        tmp25 = jsx(tmp(tmp2[14]).GuildsBarGuildFolderBG, { folderId: id, totalItems: childNodes.length });
      }
      cResult[14] = childNodes;
      cResult[15] = expanded;
      cResult[16] = id;
      cResult[17] = tmp25;
      const tmpResult4 = tmp(tmp2[10]);
    }
    const obj4 = {
      accessibilityActions: cResult[6],
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
    cResult[8] = tmp11;
    cResult[9] = cResult[6];
    cResult[10] = obj4;
    tmp17 = obj4;
  }
  const tmpResult3 = id(guildFolderMenuItems[8]);
}) : ((id) => {
  id = id.id;
  ({ expanded, childNodes } = id);
  let obj = id(16230);
  importDefault = usePendingFolderGuildIdsDefault();
  const guildsBarAnimatedWrapperStyles = id(16230).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: false });
  const items = [SelectedGuildStore];
  const items1 = [id];
  const stateFromStores = id(504).useStateFromStores(items, () => {
    let guildId = SelectedGuildStore.getGuildId();
    if (guildId == null) {
      guildId = EMPTY_STRING_SNOWFLAKE_ID;
    }
    return closure_1.includes(guildId);
  });
  const memo = noop.useMemo(() => {
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
  }, items1);
  ({ accessibilityActions, onAccessibilityAction } = memo);
  const obj2 = id(504);
  const items2 = [id];
  const sharedValue = id(4612).useSharedValue("" + id);
  const memo1 = noop.useMemo(() => ({
    onPress() {
      const result = id(4855).triggerHapticFeedback(id(4855).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj = id(4855);
      const result1 = closure_1(5705).toggleGuildFolderExpand(closure_1_0);
    }
  }), items2);
  const obj4 = { id: null, accessibilityActions: null, onAccessibilityAction: null, selected: null, unread: false, circle: false, styles: null, label: null, sharedId: null, cutouts: "IconComponent", overState: "a", preventClipping: "statue_of_liberty", config: "tokyo_tower", externalChildren: "japanese_castle", children: "stadium" };
  const obj3 = id(4612);
  obj4.id = "" + id;
  obj4.accessibilityActions = accessibilityActions;
  obj4.onAccessibilityAction = onAccessibilityAction;
  obj4.selected = stateFromStores;
  obj4.styles = guildsBarAnimatedWrapperStyles;
  const intl = id(1126).intl;
  obj4.label = intl.string(id(1126).t["scsU+l"]);
  obj4.sharedId = sharedValue;
  obj4.config = memo1;
  let tmp8Result = null;
  if (expanded) {
    const obj5 = { folderId: id, totalItems: childNodes.length };
    tmp8Result = jsx(tmp(16229).GuildsBarGuildFolderBG, { folderId: id, totalItems: childNodes.length });
  }
  obj4.externalChildren = tmp8Result;
  obj4.children = jsx(id(12702).HourglassIcon, {});
  return jsx(GuildsBarAnimatedItemWrapperDefault, { id: null, accessibilityActions: null, onAccessibilityAction: null, selected: null, unread: false, circle: false, styles: null, label: null, sharedId: null, cutouts: "IconComponent", overState: "a", preventClipping: "statue_of_liberty", config: "tokyo_tower", externalChildren: "japanese_castle", children: "stadium" });
}));