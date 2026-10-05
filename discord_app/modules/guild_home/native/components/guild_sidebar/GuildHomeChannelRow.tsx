// === Module 16132: GuildHomeChannelRow ===

// Module 16132 (GuildHomeChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11697 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 12016 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let selected;

let obj2;
const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_7 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((selected) => {
  let id;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp5;
  let tmp7;
  let tmp9;
  let obj = id(576);
  const cResult = obj.c(16);
  selected = selected.selected;
  const guild = selected.guild;
  const tmp4 = closure_7();
  id = guild.id;
  if (cResult[0] !== id) {
    const fn = function s() {
      const obj = router_utils;
      obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.GUILD_HOME));
    };
    cResult[0] = id;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const ChannelModes = tmp(12016).ChannelModes;
  const tmp6 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  const container = tmp4.container;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(id(1126).t.VbpLyU);
    cResult[2] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== selected) {
    const obj2 = { selected };
    cResult[3] = selected;
    cResult[4] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(id(1126).t.VbpLyU);
    cResult[5] = stringResult1;
    tmp10 = stringResult1;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== tmp6) {
    const tmp15 = jsx(id(12016).BaseChannelName, { name: tmp10, mode: tmp6 });
    const BaseChannelIcon = tmp(12016).BaseChannelIcon;
    const tmp16 = <BaseChannelIcon mode={tmp6} IconComponent={id(13654).SignPostIcon} />;
    cResult[6] = tmp6;
    cResult[7] = tmp15;
    cResult[8] = tmp16;
    tmp13 = tmp16;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[7];
    tmp13 = cResult[8];
  }
  if (cResult[9] === tmp6) {
    if (cResult[10] === tmp5) {
      if (cResult[11] === tmp4.container) {
        if (cResult[12] === tmp9) {
          if (cResult[13] === tmp12) {
            let tmp17;
            if (cResult[14] === tmp13) {
              tmp17 = cResult[15];
            }
            return tmp17;
          }
        }
      }
    }
  }
  const tmp18 = jsx(BaseChannelItemDefault, { onPress: tmp5, style: container, accessible: true, accessibilityLabel: tmp7, accessibilityState: tmp9, mode: tmp6, name: tmp12, icon: tmp13 });
  cResult[9] = tmp6;
  cResult[10] = tmp5;
  cResult[11] = tmp4.container;
  cResult[12] = tmp9;
  cResult[13] = tmp12;
  cResult[14] = tmp13;
  cResult[15] = tmp18;
  tmp17 = tmp18;
}) : ((selected) => {
  let DEFAULT;
  let intl2;
  let tmp5;
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const tmp = closure_7();
  const callback = react.useCallback(() => {
    const obj = router_utils;
    obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.GUILD_HOME));
  }, items);
  const ChannelModes = id(12016).ChannelModes;
  if (selected) {
    DEFAULT = ChannelModes.SELECTED;
    tmp5 = tmp3;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp5 = tmp3;
  }
  BaseChannelItemDefault;
  const intl = tmp5(1126).intl;
  ({ name: intl2.string(tmp5(1126).t.VbpLyU), mode: DEFAULT });
  const BaseChannelName = tmp5(12016).BaseChannelName;
  intl2 = tmp5(1126).intl;
  ({ mode: DEFAULT, IconComponent: tmp5(13654).SignPostIcon });
  const BaseChannelIcon = tmp5(12016).BaseChannelIcon;
  return <tmp7 onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(tmp5(1126).t.VbpLyU)} accessibilityState={{ selected }} mode={DEFAULT} name={null} icon={null} />;
});
const result = size.fileFinishedImporting("modules/guild_home/native/components/guild_sidebar/GuildHomeChannelRow.tsx");

export default tmp2;