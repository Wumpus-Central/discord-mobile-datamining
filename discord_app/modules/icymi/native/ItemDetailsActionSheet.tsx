// === Module 16442: ItemDetailsActionSheet ===

// Module 16442 (ItemDetailsActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import useChannelNameDefault from "useChannelName" /* 5049 */;
import GuildIcon from "GuildIcon" /* 5978 */;
import TableRow2 from "TableRow" /* 6000 */;
import useDesignToggleDefault from "useDesignToggle" /* 6019 */;
import TableRowGroup2 from "TableRowGroup" /* 6081 */;
import ActionSheet2 from "ActionSheet" /* 6708 */;
import ICYMIUtils from "ICYMIUtils" /* 8038 */;
import ActionSheetIconHeader2 from "ActionSheetIconHeader" /* 10750 */;
import ICYMIContentSettingControl from "ICYMIContentSettingControl" /* 16443 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import ICYMIStore from "ICYMIStore" /* 8021 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let guildId;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let obj = { divider: obj2 };
obj2 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles.createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let id;
  let tmp10;
  let tmp14;
  let tmp19;
  let tmp6;
  let tmp8;
  const tmp = guildId;
  const obj = guildId(id[9]);
  const cResult = obj.c(37);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  id = guildId.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function _() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(id[10]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function f() {
      return GuildStore.getGuild(guildId);
    };
    cResult[4] = guildId;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult3 = tmp(id[10]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10);
  const tmp13 = channelId(id[11])(stateFromStores, true);
  const tmp12 = channelId;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ICYMIStore];
    cResult[6] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== id) {
    class C {
      constructor() {
        let dehydratedItem = null;
        if (null != id) {
          dehydratedItem = ICYMIStore.getDehydratedItem(tmp);
        }
        return dehydratedItem;
      }
    }
    cResult[7] = id;
    cResult[8] = C;
  } else {
    class C {
      constructor() {
        let dehydratedItem = null;
        if (null != id) {
          dehydratedItem = ICYMIStore.getDehydratedItem(tmp);
        }
        return dehydratedItem;
      }
    }
  }
  const tmpResult4 = tmp(id[10]);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp14, C);
  tmp12(id[12])("show_icymi_debug_scores");
  if (null != stateFromStores1) {
    class C {
      constructor() {
        let dehydratedItem = null;
        if (null != id) {
          dehydratedItem = ICYMIStore.getDehydratedItem(tmp);
        }
        return dehydratedItem;
      }
    }
    tmp19 = tmp21;
  } else {
    class C {
      constructor() {
        let dehydratedItem = null;
        if (null != id) {
          dehydratedItem = ICYMIStore.getDehydratedItem(tmp);
        }
        return dehydratedItem;
      }
    }
    if (null != stateFromStores) {
      class C {
        constructor() {
          let dehydratedItem = null;
          if (null != id) {
            dehydratedItem = ICYMIStore.getDehydratedItem(tmp);
          }
          return dehydratedItem;
        }
      }
      tmp19 = tmp20;
    }
  }
  closure_10();
  if (cResult[13] === stateFromStores) {
    class C {
      constructor() {
        let dehydratedItem = null;
        if (null != id) {
          dehydratedItem = ICYMIStore.getDehydratedItem(tmp);
        }
        return dehydratedItem;
      }
    }
    if (stateFromStores1 != null) {
      class C {
        constructor() {
          let dehydratedItem = null;
          if (null != id) {
            dehydratedItem = ICYMIStore.getDehydratedItem(tmp);
          }
          return dehydratedItem;
        }
      }
    }
    if (undefined == null) {
      class C {
        constructor() {
          let dehydratedItem = null;
          if (null != id) {
            dehydratedItem = ICYMIStore.getDehydratedItem(tmp);
          }
          return dehydratedItem;
        }
      }
    }
    if (cResult[16] === tmp13) {
      class C {
        constructor() {
          let dehydratedItem = null;
          if (null != id) {
            dehydratedItem = ICYMIStore.getDehydratedItem(tmp);
          }
          return dehydratedItem;
        }
      }
    }
    const obj2 = { icon: tmp19, title: tmp13, subtitle: undefined };
    cResult[16] = tmp13;
    cResult[17] = tmp19;
    cResult[18] = undefined;
    cResult[19] = closure_7(tmp(id[16]).ActionSheetIconHeader, obj2);
    const tmp27 = closure_7(tmp(id[16]).ActionSheetIconHeader, obj2);
  }
  let result = null != stateFromStores && null != stateFromStores1;
  if (result) {
    class C {
      constructor() {
        let dehydratedItem = null;
        if (null != id) {
          dehydratedItem = ICYMIStore.getDehydratedItem(tmp);
        }
        return dehydratedItem;
      }
    }
    result = obj5.isChannelCustomScoreEligible(stateFromStores);
  }
  cResult[13] = stateFromStores;
  cResult[14] = stateFromStores1;
  cResult[15] = result;
}) : ((arg0) => {
  let TableRow;
  let items3;
  let items4;
  let obj13;
  let str;
  let tmp9;
  ({ guildId: require, channelId: importDefault, id: dependencyMap } = arg0);
  const items = [ChannelStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(importDefault));
  const items1 = [GuildStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildStore.getGuild(require));
  const items2 = [ICYMIStore];
  const tmp6 = useChannelNameDefault(stateFromStores, true);
  const obj3 = get_initialized;
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let dehydratedItem = null;
    if (null != dependencyMap) {
      dehydratedItem = ICYMIStore.getDehydratedItem(tmp);
    }
    return dehydratedItem;
  });
  const tmp8 = useDesignToggleDefault("show_icymi_debug_scores");
  if (null != stateFromStores1) {
    const obj4 = { guild: stateFromStores1, size: GuildIcon.GuildIconSizes.LARGE };
    const tmp5Result = GuildIconDefault;
    tmp9 = closure_7(tmp5Result, obj4);
  } else if (null != stateFromStores) {
    const obj5 = { size: native.AvatarSizes.LARGE, channel: stateFromStores };
    const Avatar = native.Avatar;
    tmp9 = closure_7(Avatar, obj5);
  }
  let result = null != stateFromStores;
  const tmp13 = closure_10();
  if (result) {
    result = null != stateFromStores1;
  }
  if (result) {
    const tmpResult = ICYMIUtils;
    result = tmpResult.isChannelCustomScoreEligible(stateFromStores);
  }
  const ActionSheet = ActionSheet2.ActionSheet;
  const obj6 = { icon: tmp9, title: tmp6, subtitle: str };
  str = undefined;
  const ActionSheetIconHeader = ActionSheetIconHeader2.ActionSheetIconHeader;
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    str = "";
  }
  let tmp16Result = result;
  const obj7 = { showGradient: true, startExpanded: true, header: closure_7(ActionSheetIconHeader, obj6), children: items3 };
  if (tmp16Result) {
    const obj8 = { channel: stateFromStores, guild: stateFromStores1 };
    tmp16Result = closure_7(ICYMIContentSettingControl.ChannelScoreSettings, obj8);
  }
  items3 = [tmp16Result, , ];
  let tmp15Result = null != stateFromStores2 && null != stateFromStores1;
  if (tmp15Result) {
    if (result) {
      const obj9 = { style: tmp13.divider };
      result = closure_7(View, obj9);
    }
    const obj10 = { children: items4 };
    items4 = [result, ];
    const obj11 = { guild: stateFromStores1 };
    items4[1] = closure_7(ICYMIContentSettingControl.GuildScoreSettings, obj11);
    tmp15Result = closure_9(closure_8, obj10);
  }
  items3[1] = tmp15Result;
  let tmp16Result2 = null;
  if (null != stateFromStores2) {
    tmp16Result2 = null;
    if (tmp8) {
      const obj12 = { title: "Debug details", hasIcons: false, children: closure_7(TableRow, obj13) };
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      const _JSON = JSON;
      obj13 = { label: `Total Score: ${tmp7.score}`, subLabel: JSON.stringify(stateFromStores2.score_components) };
      TableRow = TableRow2.TableRow;
      tmp16Result2 = closure_7(TableRowGroup, obj12);
    }
  }
  items3[2] = tmp16Result2;
  return closure_9(ActionSheet, obj7);
});
let result = size.fileFinishedImporting("modules/icymi/native/ItemDetailsActionSheet.tsx");

export default tmp4;