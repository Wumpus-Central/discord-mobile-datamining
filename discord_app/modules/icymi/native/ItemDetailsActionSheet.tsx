// === Module 16458: ItemDetailsActionSheet ===

// Module 16458 (ItemDetailsActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import useChannelNameDefault from "useChannelName" /* 4713 */;
import GuildIcon from "GuildIcon" /* 5584 */;
import TableRow from "TableRow" /* 5605 */;
import useDesignToggleDefault from "useDesignToggle" /* 5626 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import ActionSheet from "ActionSheet" /* 7198 */;
import ICYMIUtils from "ICYMIUtils" /* 8350 */;
import ActionSheetIconHeader from "ActionSheetIconHeader" /* 10998 */;
import ICYMIContentSettingControl from "ICYMIContentSettingControl" /* 16459 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import ICYMIStore from "ICYMIStore" /* 8335 */;

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { divider: null };
createStyles = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.divider = createStyles;
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ItemDetailsActionSheet.tsx");

export default function ItemDetailsActionSheet(arg0) {
  ({ guildId: require, channelId: importDefault, id: dependencyMap } = arg0);
  let obj = initialize;
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(importDefault));
  let obj1 = initialize;
  const items1 = [GuildStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => GuildStore.getGuild(require));
  let obj2 = initialize;
  const items2 = [ICYMIStore];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let dehydratedItem = null;
    if (null != dependencyMap) {
      dehydratedItem = ICYMIStore.getDehydratedItem(tmp);
    }
    return dehydratedItem;
  });
  const tmp6 = useChannelNameDefault(stateFromStores, true);
  if (null != stateFromStores1) {
    obj = { guild: stateFromStores1, size: GuildIcon.GuildIconSizes.LARGE };
    let tmp9 = closure_7(GuildIconDefault, obj);
    const tmp5Result = GuildIconDefault;
  } else if (null != stateFromStores) {
    obj = { size: native.AvatarSizes.LARGE, channel: stateFromStores };
    tmp9 = closure_7(native.Avatar, obj);
  }
  let result = null != stateFromStores;
  const tmp8 = useDesignToggleDefault("show_icymi_debug_scores");
  if (result) {
    result = null != stateFromStores1;
  }
  if (result) {
    result = ICYMIUtils.isChannelCustomScoreEligible(stateFromStores);
    const tmpResult = ICYMIUtils;
  }
  obj1 = { icon: tmp9, title: tmp6, subtitle: null };
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    str = "";
  }
  obj2 = { showGradient: true, startExpanded: true, header: closure_7(ActionSheetIconHeader.ActionSheetIconHeader, obj1), children: null };
  obj1.subtitle = str;
  let tmp16Result = result;
  if (result) {
    const obj3 = { channel: stateFromStores, guild: stateFromStores1 };
    tmp16Result = closure_7(ICYMIContentSettingControl.ChannelScoreSettings, obj3);
  }
  const items3 = [tmp16Result, , ];
  let tmp15Result = null != stateFromStores2 && null != stateFromStores1;
  if (tmp15Result) {
    if (result) {
      const obj4 = { style: tmp13.divider };
      result = closure_7(View, obj4);
    }
    const obj5 = { children: null };
    const items4 = [result, ];
    const obj6 = { guild: stateFromStores1 };
    items4[1] = closure_7(ICYMIContentSettingControl.GuildScoreSettings, obj6);
    obj5.children = items4;
    tmp15Result = closure_9(closure_8, obj5);
  }
  items3[1] = tmp15Result;
  tmp16Result = null;
  if (null != stateFromStores2) {
    tmp16Result = null;
    if (tmp8) {
      const obj7 = { title: "Debug details", hasIcons: false, children: null };
      const obj8 = { label: `Total Score: ${tmp7.score}`, subLabel: null };
      const _JSON = JSON;
      obj8.subLabel = JSON.stringify(stateFromStores2.score_components);
      obj7.children = closure_7(TableRow.TableRow, obj8);
      tmp16Result = closure_7(TableRowGroup.TableRowGroup, obj7);
    }
  }
  items3[2] = tmp16Result;
  obj2.children = items3;
  return closure_9(ActionSheet.ActionSheet, obj2);
};