// === Module 16287: GuildsBarPendingGuildFolder ===

// Module 16287 (GuildsBarPendingGuildFolder)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import HapticUtils from "HapticUtils" /* 4861 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import usePendingFolderGuildIdsDefault from "usePendingFolderGuildIds" /* 9429 */;
import GuildsBarFolderMenuItems from "GuildsBarFolderMenuItems" /* 16267 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 16274 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let id, importDefault, includes;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let accessibilityActions;
  let childNodes;
  let expanded;
  let first;
  let guildFolderMenuItems;
  let obj4;
  let onAccessibilityAction;
  let tmp12;
  let tmp7;
  let obj = id(guildFolderMenuItems[5]);
  const cResult = obj.c(28);
  id = id.id;
  ({ expanded, childNodes } = id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { disableSelectedColor: true, disableBGColor: false };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = id(guildFolderMenuItems[6]);
  tmpResult.useGuildsBarAnimatedWrapperStyles(first);
  const tmp6 = require("usePendingFolderGuildIds")();
  importDefault = tmp6;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    cResult[1] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    class A {
      constructor() {
        includes = includes.includes;
        let guildId = SelectedGuildStore.getGuildId();
        if (guildId == null) {
          guildId = EMPTY_STRING_SNOWFLAKE_ID;
        }
        return includes(guildId);
      }
    }
    cResult[2] = tmp6;
    cResult[3] = A;
  } else {
    class A {
      constructor() {
        includes = includes.includes;
        let guildId = SelectedGuildStore.getGuildId();
        if (guildId == null) {
          guildId = EMPTY_STRING_SNOWFLAKE_ID;
        }
        return includes(guildId);
      }
    }
  }
  const tmpResult3 = id(guildFolderMenuItems[8]);
  const stateFromStores = tmpResult3.useStateFromStores(tmp7, A);
  if (cResult[4] !== id) {
    class A {
      constructor() {
        includes = includes.includes;
        let guildId = SelectedGuildStore.getGuildId();
        if (guildId == null) {
          guildId = EMPTY_STRING_SNOWFLAKE_ID;
        }
        return includes(guildId);
      }
    }
    guildFolderMenuItems = obj5.getGuildFolderMenuItems(id);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(label) {
          return { name: label.label, label: label.label };
        }
      }
      cResult[7] = S;
    } else {
      class S {
        constructor(label) {
          return { name: label.label, label: label.label };
        }
      }
    }
    const mapped = guildFolderMenuItems.map(S);
    cResult[4] = id;
    cResult[5] = guildFolderMenuItems;
    cResult[6] = mapped;
    tmp12 = mapped;
  } else {
    class S {
      constructor(label) {
        return { name: label.label, label: label.label };
      }
    }
    guildFolderMenuItems = tmp11;
    tmp12 = cResult[6];
  }
  if (cResult[8] === tmp11) {
    class S {
      constructor(label) {
        return { name: label.label, label: label.label };
      }
    }
    ({ accessibilityActions, onAccessibilityAction } = obj4);
    const _HermesInternal = HermesInternal;
    const tmpResult4 = id(guildFolderMenuItems[10]);
    const sharedValue = tmpResult4.useSharedValue("" + id);
    if (cResult[11] !== id) {
      class S {
        constructor(label) {
          return { name: label.label, label: label.label };
        }
      }
      tmp17[0] = function onPress() {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        const obj2 = GuildActionCreatorsDefault;
        const result1 = obj2.toggleGuildFolderExpand(id);
      };
      cResult[11] = id;
      cResult[12] = tmp17;
    } else {
      class S {
        constructor(label) {
          return { name: label.label, label: label.label };
        }
      }
    }
    const _HermesInternal2 = HermesInternal;
    const combined = "" + id;
    const _Symbol2 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(label) {
          return { name: label.label, label: label.label };
        }
      }
      cResult[13] = obj8.string(id(guildFolderMenuItems[13]).t["scsU+l"]);
      const stringResult = obj8.string(id(guildFolderMenuItems[13]).t["scsU+l"]);
    } else {
      class S {
        constructor(label) {
          return { name: label.label, label: label.label };
        }
      }
    }
    if (cResult[14] === childNodes) {
      class S {
        constructor(label) {
          return { name: label.label, label: label.label };
        }
      }
    }
    let tmp22 = null;
    if (expanded) {
      class S {
        constructor(label) {
          return { name: label.label, label: label.label };
        }
      }
      tmp22 = jsx(tmp(tmp2[14]).GuildsBarGuildFolderBG, { folderId: id, totalItems: childNodes.length });
    }
    cResult[14] = childNodes;
    cResult[15] = expanded;
    cResult[16] = id;
    cResult[17] = tmp22;
  }
  obj4 = {
    accessibilityActions: tmp12,
    onAccessibilityAction(arg0) {
      let closure_0 = arg0;
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
  cResult[9] = tmp12;
  cResult[10] = obj4;
}) : ((id) => {
  let accessibilityActions;
  let childNodes;
  let expanded;
  let onAccessibilityAction;
  id = id.id;
  ({ expanded, childNodes } = id);
  let obj = id(16274);
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: false });
  importDefault = usePendingFolderGuildIdsDefault();
  let obj2 = id(504);
  const items = [SelectedGuildStore];
  const items1 = [id];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    includes = includes.includes;
    let guildId = SelectedGuildStore.getGuildId();
    if (guildId == null) {
      guildId = EMPTY_STRING_SNOWFLAKE_ID;
    }
    return includes(guildId);
  });
  const memo = react.useMemo(() => {
    const obj = GuildsBarFolderMenuItems;
    const guildFolderMenuItems = obj.getGuildFolderMenuItems(id);
    const obj2 = {
      accessibilityActions: guildFolderMenuItems.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        let closure_0 = arg0;
        const found = guildFolderMenuItems.find((label) => label.label === nativeEvent.nativeEvent.actionName);
        if (found != null) {
          const action = found.action;
          if (action != null) {
            action();
          }
        }
      }
    };
    return obj2;
  }, items1);
  ({ accessibilityActions, onAccessibilityAction } = memo);
  const items2 = [id];
  const obj3 = id(4618);
  const sharedValue = obj3.useSharedValue("" + id);
  const memo1 = react.useMemo(() => {
    let obj = {
      onPress() {
        const obj = id(dependencyMap[11]);
        const result = obj.triggerHapticFeedback(id(dependencyMap[11]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj2 = includes(dependencyMap[12]);
        const result1 = obj2.toggleGuildFolderExpand(closure_1_0);
      }
    };
    return obj;
  }, items2);
  GuildsBarAnimatedItemWrapperDefault;
  const intl = id(1126).intl;
  let tmp8Result = null;
  const tmp = id;
  if (expanded) {
    tmp8Result = jsx(tmp(16273).GuildsBarGuildFolderBG, { folderId: id, totalItems: childNodes.length });
  }
  return <tmp9 id={"" + id} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} selected={stateFromStores} unread={false} circle={false} styles={guildsBarAnimatedWrapperStyles} label={intl.string(id(1126).t["scsU+l"])} sharedId={sharedValue} cutouts="IconComponent" overState="a" preventClipping="сімвал" config={memo1} externalChildren={tmp8Result}>{"\u044D\u043B\u0435\u043C\u0435\u043D\u0442"}</tmp9>;
}));
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx");

export default memoResult;