// === Module 16141: ConjureChannelRow ===

// Module 16141 (ConjureChannelRow)
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import _modDef3723 from "module_3723" /* 3723 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 12016 */;
import ChannelBadgeDefault from "ChannelBadge" /* 16145 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1085).Routes;
const StaticChannelRoute = fn(2058).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { container: { marginVertical: fn(11697).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginVertical: fn(11697).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureChannelRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((selected) => {
  const cResult = id(576).c(20);
  selected = selected.selected;
  const tmp4 = closure_7();
  id = selected.guild.id;
  if (cResult[0] !== id) {
    const fn = function s() {
      router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.CONJURE));
    };
    cResult[0] = id;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const obj = id(576);
  const conjureUnreadSummary = id(16142).useConjureUnreadSummary();
  ({ hasUnread, badgeCount } = conjureUnreadSummary);
  if (true === selected) {
    let SELECTED = tmp(12016).ChannelModes.SELECTED;
  } else {
    const ChannelModes = tmp(12016).ChannelModes;
    SELECTED = hasUnread ? ChannelModes.UNREAD_IMPORTANT : ChannelModes.DEFAULT;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(_modDef3723.uk6jhJ);
    cResult[2] = stringResult;
    let tmp7 = stringResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== selected) {
    const obj2 = { selected };
    cResult[3] = selected;
    cResult[4] = obj2;
    let tmp10 = obj2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(_modDef3723.uk6jhJ);
    cResult[5] = stringResult1;
    let tmp11 = stringResult1;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== SELECTED) {
    const obj3 = { name: tmp11, mode: SELECTED };
    const tmp17 = jsx(tmp(12016).BaseChannelName, { name: tmp11, mode: SELECTED });
    const obj4 = { mode: SELECTED, IconComponent: tmp(12500).MagicWandIcon };
    const tmp18 = jsx(tmp(12016).BaseChannelIcon, { mode: SELECTED, IconComponent: tmp(12500).MagicWandIcon });
    cResult[6] = SELECTED;
    cResult[7] = tmp17;
    cResult[8] = tmp18;
    let tmp15 = tmp18;
    let tmp14 = tmp17;
  } else {
    tmp14 = cResult[7];
    tmp15 = cResult[8];
  }
  if (cResult[9] !== badgeCount) {
    const obj5 = { mentionCount: badgeCount, isNewChannel: false };
    const tmp22 = jsx(ChannelBadgeDefault, { mentionCount: badgeCount, isNewChannel: false });
    cResult[9] = badgeCount;
    cResult[10] = tmp22;
    let tmp19 = tmp22;
  } else {
    tmp19 = cResult[10];
  }
  if (cResult[11] === SELECTED) {
    if (cResult[12] === tmp5) {
      if (cResult[13] === hasUnread) {
        if (cResult[14] === tmp4.container) {
          if (cResult[15] === tmp10) {
            if (cResult[16] === tmp14) {
              if (cResult[17] === tmp15) {
                if (cResult[18] === tmp19) {
                  let tmp23 = cResult[19];
                }
                return tmp23;
              }
            }
          }
        }
      }
    }
  }
  const tmp24 = jsx(BaseChannelItemDefault, { onPress: tmp5, style: tmp4.container, accessible: true, accessibilityLabel: tmp7, accessibilityState: tmp10, mode: SELECTED, unread: hasUnread, name: tmp14, icon: tmp15, channelInfo: tmp19 });
  cResult[11] = SELECTED;
  cResult[12] = tmp5;
  cResult[13] = hasUnread;
  cResult[14] = tmp4.container;
  cResult[15] = tmp10;
  cResult[16] = tmp14;
  cResult[17] = tmp15;
  cResult[18] = tmp19;
  cResult[19] = tmp24;
  tmp23 = tmp24;
  const tmpResult = id(16142);
}) : ((selected) => {
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.CONJURE));
  }, items);
  const tmp = closure_7();
  const conjureUnreadSummary = id(16142).useConjureUnreadSummary();
  const hasUnread = conjureUnreadSummary.hasUnread;
  if (true === selected) {
    let SELECTED = tmp3(12016).ChannelModes.SELECTED;
  } else {
    const ChannelModes = tmp3(12016).ChannelModes;
    SELECTED = hasUnread ? ChannelModes.UNREAD_IMPORTANT : ChannelModes.DEFAULT;
  }
  const obj2 = { onPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, unread: null, name: null, icon: null, channelInfo: null };
  const obj = id(16142);
  const intl = tmp3(1126).intl;
  obj2.accessibilityLabel = intl.string(_modDef3723.uk6jhJ);
  obj2.accessibilityState = { selected };
  obj2.mode = SELECTED;
  obj2.unread = hasUnread;
  const obj3 = { name: null, mode: null };
  const intl2 = tmp3(1126).intl;
  obj3.name = intl2.string(_modDef3723.uk6jhJ);
  obj3.mode = SELECTED;
  obj2.name = jsx(id(12016).BaseChannelName, { name: null, mode: null });
  obj2.icon = jsx(id(12016).BaseChannelIcon, { mode: SELECTED, IconComponent: id(12500).MagicWandIcon });
  obj2.channelInfo = jsx(ChannelBadgeDefault, { mentionCount: conjureUnreadSummary.badgeCount, isNewChannel: false });
  return <tmp6 onPress={callback} style={tmp.container} accessible accessibilityLabel={null} accessibilityState={null} mode={null} unread={null} name={null} icon={null} channelInfo={null} />;
});