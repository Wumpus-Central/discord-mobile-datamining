// discord_app/modules/icymi/native/ItemDetailsActionSheet.tsx
import "set";
import { View } from "TableRowGroupTitle";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import filterStaffGuild from "filterStaffGuild";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { ActionSheet } from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { computeChannelName } from "../../channel/useChannelName.tsx";
import { useDesignToggle } from "../../devtools/design_toggles/useDesignToggle.tsx";

let c9;
let error;
let metroImportAll;
const require = arg1;
({ jsx: error, Fragment: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { divider: null };
createCacheKey = { height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/icymi/native/ItemDetailsActionSheet.tsx");

export default function ItemDetailsActionSheet(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ guildId: require, channelId: importDefault, id: dependencyMap } = arg0);
  let obj = initialize;
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(closure_1));
  let obj1 = initialize;
  const items1 = [createGuildRecordFromRust];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_5.getGuild(closure_0));
  let obj2 = initialize;
  const items2 = [filterStaffGuild];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let dehydratedItem = null;
    if (null != closure_2) {
      dehydratedItem = outer1_6.getDehydratedItem(tmp);
    }
    return dehydratedItem;
  });
  const tmp5 = importDefault;
  const tmp6 = computeChannelName(stateFromStores, true);
  if (null != stateFromStores1) {
    obj = { guild: null, size: null };
    obj[0] = stateFromStores1;
    obj[1] = tmp(5661).GuildIconSizes.LARGE;
    let tmp9 = callback(tmp5(5661), obj);
    const tmp5Result = tmp5(5661);
  } else if (null != stateFromStores) {
    obj = { size: null, channel: null };
    obj[0] = tmp(1297).AvatarSizes.LARGE;
    obj[1] = stateFromStores;
    tmp9 = callback(tmp(1297).Avatar, obj);
  }
  let result = null != stateFromStores;
  const tmp8 = useDesignToggle("show_icymi_debug_scores");
  if (result) {
    result = null != stateFromStores1;
  }
  if (result) {
    result = tmp(8834).isChannelCustomScoreEligible(stateFromStores);
    const tmpResult = tmp(8834);
  }
  obj1 = { icon: tmp9, title: tmp6, subtitle: null };
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    str = "";
  }
  obj2 = { showGradient: true, startExpanded: true, header: tmp16(tmp(10112).ActionSheetIconHeader, obj1), children: null };
  obj1[2] = str;
  let tmp16Result = result;
  if (result) {
    const obj3 = { channel: null, guild: null };
    obj3[0] = stateFromStores;
    obj3[1] = stateFromStores1;
    tmp16Result = tmp16(tmp(15448).ChannelScoreSettings, obj3);
  }
  const items3 = [tmp16Result, , ];
  let tmp15Result = null != stateFromStores2 && null != stateFromStores1;
  if (tmp15Result) {
    if (result) {
      const obj4 = { style: null };
      obj4[0] = tmp13.divider;
      result = tmp16(View, obj4);
    }
    const obj5 = { children: null };
    const items4 = [result, ];
    const obj6 = { guild: null };
    obj6[0] = stateFromStores1;
    items4[1] = tmp16(tmp(15448).GuildScoreSettings, obj6);
    obj5[0] = items4;
    tmp15Result = tmp15(closure_8, obj5);
    const tmp19 = closure_8;
  }
  items3[1] = tmp15Result;
  tmp16Result = null;
  if (null != stateFromStores2) {
    tmp16Result = null;
    if (tmp8) {
      const obj7 = { title: "Debug details", hasIcons: false, children: null };
      const obj8 = { label: null, subLabel: null };
      obj8[0] = `Total Score: ${tmp7.score}`;
      const _JSON = JSON;
      obj8[1] = JSON.stringify(stateFromStores2.score_components);
      obj7[2] = tmp16(tmp(5315).TableRow, obj8);
      tmp16Result = tmp16(tmp(5649).TableRowGroup, obj7);
    }
  }
  items3[2] = tmp16Result;
  obj2[3] = items3;
  return closure_9(ActionSheet.ActionSheet, obj2);
};