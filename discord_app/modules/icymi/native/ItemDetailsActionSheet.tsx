// === Module 15714: ItemDetailsActionSheet ===

// Module 15714 (ItemDetailsActionSheet)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import computeChannelNameDefault from "computeChannelName" /* 4984 */;
import useDesignToggleDefault from "useDesignToggle" /* 5295 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import ActionSheet from "ActionSheet" /* 7175 */;
import GuildIconSizes from "GuildIconSizes" /* 7188 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 7188 */;
import generateHydrationId from "generateHydrationId" /* 9056 */;
import ActionSheetIconHeader from "ActionSheetIconHeader" /* 10516 */;
import ContentSettingsControl from "ContentSettingsControl" /* 15715 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import filterStaffGuild from "filterStaffGuild" /* 9044 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
const createCacheKey = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[0] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/icymi/native/ItemDetailsActionSheet.tsx");

export default function ItemDetailsActionSheet(arg0) {
  ({ guildId: require, channelId: importDefault, id: dependencyMap } = arg0);
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getChannel(closure_1));
  obj1 = initialize;
  const items1 = [closure_5];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_5.getGuild(closure_0));
  let obj2 = initialize;
  const items2 = [closure_6];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let dehydratedItem = null;
    if (null != closure_2) {
      dehydratedItem = closure_1_6.getDehydratedItem(tmp);
    }
    return dehydratedItem;
  });
  const tmp6 = computeChannelNameDefault(stateFromStores, true);
  if (null != stateFromStores1) {
    obj = { guild: null, size: null };
    obj[0] = stateFromStores1;
    obj[1] = GuildIconSizes.GuildIconSizes.LARGE;
    let tmp9 = callback(GuildIconSizesDefault, obj);
    const tmp5Result = GuildIconSizesDefault;
  } else if (null != stateFromStores) {
    obj = { size: null, channel: null };
    obj[0] = Button.AvatarSizes.LARGE;
    obj[1] = stateFromStores;
    tmp9 = callback(Button.Avatar, obj);
  }
  let result = null != stateFromStores;
  const tmp8 = useDesignToggleDefault("show_icymi_debug_scores");
  if (result) {
    result = null != stateFromStores1;
  }
  if (result) {
    result = generateHydrationId.isChannelCustomScoreEligible(stateFromStores);
    const tmpResult = generateHydrationId;
  }
  obj1 = { icon: tmp9, title: tmp6, subtitle: null };
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    str = "";
  }
  obj2 = { showGradient: true, startExpanded: true, header: callback(ActionSheetIconHeader.ActionSheetIconHeader, obj1), children: null };
  obj1[2] = str;
  let tmp16Result = result;
  if (result) {
    const obj3 = { channel: null, guild: null };
    obj3[0] = stateFromStores;
    obj3[1] = stateFromStores1;
    tmp16Result = callback(ContentSettingsControl.ChannelScoreSettings, obj3);
  }
  const items3 = [tmp16Result, , ];
  let tmp15Result = null != stateFromStores2 && null != stateFromStores1;
  if (tmp15Result) {
    if (result) {
      const obj4 = { style: null };
      obj4[0] = tmp13.divider;
      result = callback(View, obj4);
    }
    const obj5 = { children: null };
    const items4 = [result, ];
    const obj6 = { guild: null };
    obj6[0] = stateFromStores1;
    items4[1] = callback(ContentSettingsControl.GuildScoreSettings, obj6);
    obj5[0] = items4;
    tmp15Result = callback(closure_8, obj5);
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
      obj7[2] = callback(TableRowInner.TableRow, obj8);
      tmp16Result = callback(TableRowGroupTitle.TableRowGroup, obj7);
    }
  }
  items3[2] = tmp16Result;
  obj2[3] = items3;
  return callback(ActionSheet.ActionSheet, obj2);
};