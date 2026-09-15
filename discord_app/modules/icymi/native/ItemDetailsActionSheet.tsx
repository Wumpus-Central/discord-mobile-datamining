// discord_app/modules/icymi/native/ItemDetailsActionSheet.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import useChannelNameDefault from "../../channel/useChannelName.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import useDesignToggleDefault from "../../devtools/design_toggles/useDesignToggle.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ICYMIUtils from "../ICYMIUtils.tsx";
import ActionSheetIconHeader from "../../../design/components/Sheet/native/ActionSheetIconHeader.native.tsx";
import ICYMIContentSettingControl from "custom_scores/ICYMIContentSettingControl.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import ICYMIStore from "../ICYMIStore.tsx";

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { divider: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ItemDetailsActionSheet.tsx");

export default function ItemDetailsActionSheet(arg0) {
  ({ guildId: require, channelId: importDefault, id: dependencyMap } = arg0);
  const items = [ChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ChannelStore.getChannel(importDefault));
  const items1 = [GuildStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => GuildStore.getGuild(require));
  const tmp6 = useChannelNameDefault(stateFromStores, true);
  const items2 = [ICYMIStore];
  const stateFromStores2 = initialize.useStateFromStores(items2, () => {
    let dehydratedItem = null;
    if (null != dependencyMap) {
      dehydratedItem = ICYMIStore.getDehydratedItem(tmp);
    }
    return dehydratedItem;
  });
  if (null != stateFromStores1) {
    const obj4 = { guild: stateFromStores1, size: GuildIcon.GuildIconSizes.LARGE };
    let tmp9 = closure_7(GuildIconDefault, obj4);
    const tmp5Result = GuildIconDefault;
  } else if (null != stateFromStores) {
    const obj5 = { size: native.AvatarSizes.LARGE, channel: stateFromStores };
    tmp9 = closure_7(native.Avatar, obj5);
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
  const obj6 = { icon: tmp9, title: tmp6, subtitle: null };
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    str = "";
  }
  const obj7 = {
    showGradient: true,
    startExpanded: true,
    header: closure_7(ActionSheetIconHeader.ActionSheetIconHeader, obj6),
    children: null,
  };
  obj6.subtitle = str;
  let tmp16Result = result;
  if (result) {
    const obj8 = { channel: stateFromStores, guild: stateFromStores1 };
    tmp16Result = closure_7(ICYMIContentSettingControl.ChannelScoreSettings, obj8);
  }
  const items3 = [tmp16Result, ,];
  let tmp15Result = null != stateFromStores2 && null != stateFromStores1;
  if (tmp15Result) {
    if (result) {
      const obj9 = { style: tmp13.divider };
      result = closure_7(View, obj9);
    }
    const obj10 = { children: null };
    const items4 = [result];
    const obj11 = { guild: stateFromStores1 };
    items4[1] = closure_7(ICYMIContentSettingControl.GuildScoreSettings, obj11);
    obj10.children = items4;
    tmp15Result = closure_9(closure_8, obj10);
  }
  items3[1] = tmp15Result;
  let tmp16Result2 = null;
  if (null != stateFromStores2) {
    tmp16Result2 = null;
    if (tmp8) {
      const obj12 = { title: "Debug details", hasIcons: false, children: null };
      const obj13 = { label: `Total Score: ${tmp7.score}`, subLabel: null };
      const _JSON = JSON;
      obj13.subLabel = JSON.stringify(stateFromStores2.score_components);
      obj12.children = closure_7(TableRow.TableRow, obj13);
      tmp16Result2 = closure_7(TableRowGroup.TableRowGroup, obj12);
    }
  }
  items3[2] = tmp16Result2;
  obj7.children = items3;
  return closure_9(ActionSheet.ActionSheet, obj7);
}
