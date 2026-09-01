// discord_app/modules/icymi/native/ItemDetailsActionSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import computeChannelNameDefault from "../../channel/useChannelName.tsx";
import useDesignToggleDefault from "../../devtools/design_toggles/useDesignToggle.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import GuildIconSizesDefault from "../../guild/native/GuildIcon.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../stores/ChannelStore.tsx";
import closure_5 from "../../../stores/GuildStore.tsx";
import closure_6 from "../ICYMIStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { divider: null };
createCacheKey = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[0] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/icymi/native/ItemDetailsActionSheet.tsx");

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
  const tmp5 = importDefault;
  const tmp6 = computeChannelNameDefault(stateFromStores, true);
  if (null != stateFromStores1) {
    obj = { guild: null, size: null };
    obj[0] = stateFromStores1;
    obj[1] = tmp(6004).GuildIconSizes.LARGE;
    let tmp9 = callback(GuildIconSizesDefault, obj);
    const tmp5Result = GuildIconSizesDefault;
  } else if (null != stateFromStores) {
    obj = { size: null, channel: null };
    obj[0] = tmp(1297).AvatarSizes.LARGE;
    obj[1] = stateFromStores;
    tmp9 = callback(tmp(1297).Avatar, obj);
  }
  let result = null != stateFromStores;
  const tmp8 = useDesignToggleDefault("show_icymi_debug_scores");
  if (result) {
    result = null != stateFromStores1;
  }
  if (result) {
    result = tmp(8621).isChannelCustomScoreEligible(stateFromStores);
    const tmpResult = tmp(8621);
  }
  obj1 = { icon: tmp9, title: tmp6, subtitle: null };
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    str = "";
  }
  obj2 = {
    showGradient: true,
    startExpanded: true,
    header: tmp16(tmp(10735).ActionSheetIconHeader, obj1),
    children: null,
  };
  obj1[2] = str;
  let tmp16Result = result;
  if (result) {
    const obj3 = { channel: null, guild: null };
    obj3[0] = stateFromStores;
    obj3[1] = stateFromStores1;
    tmp16Result = tmp16(tmp(16047).ChannelScoreSettings, obj3);
  }
  const items3 = [tmp16Result, ,];
  let tmp15Result = null != stateFromStores2 && null != stateFromStores1;
  if (tmp15Result) {
    if (result) {
      const obj4 = { style: null };
      obj4[0] = tmp13.divider;
      result = tmp16(View, obj4);
    }
    const obj5 = { children: null };
    const items4 = [result];
    const obj6 = { guild: null };
    obj6[0] = stateFromStores1;
    items4[1] = tmp16(tmp(16047).GuildScoreSettings, obj6);
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
      obj7[2] = tmp16(tmp(5599).TableRow, obj8);
      tmp16Result = tmp16(tmp(5992).TableRowGroup, obj7);
    }
  }
  items3[2] = tmp16Result;
  obj2[3] = items3;
  return closure_9(ActionSheet.ActionSheet, obj2);
}
