// === Module 17267: ConjureChannelRow ===

// Module 17267 (ConjureChannelRow)
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 12958 */;
import useConjureGuildUnreadSummaryDefault from "useConjureGuildUnreadSummary" /* 17268 */;
import ChannelBadgeDefault from "ChannelBadge" /* 17269 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1087).Routes;
const StaticChannelRoute = fn(2075).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(5153);
let obj2 = { container: { marginVertical: fn(11821).CHANNEL_MARGIN_VERTICAL, marginHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginVertical: fn(11821).CHANNEL_MARGIN_VERTICAL, marginHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureChannelRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureChannelRow(selected) {
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
  ({ hasUnread, badgeCount } = useConjureGuildUnreadSummaryDefault(id));
  if (true === selected) {
    let SELECTED = tmp(12958).ChannelModes.SELECTED;
  } else {
    const ChannelModes = tmp(12958).ChannelModes;
    SELECTED = hasUnread ? ChannelModes.UNREAD_IMPORTANT : ChannelModes.DEFAULT;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(_modDef3865.uk6jhJ);
    cResult[2] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
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
    const intl2 = tmp(1128).intl;
    const stringResult1 = intl2.string(_modDef3865.uk6jhJ);
    cResult[5] = stringResult1;
    let tmp11 = stringResult1;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== SELECTED) {
    const obj3 = { name: tmp11, mode: SELECTED };
    const tmp16 = jsx(tmp(12958).BaseChannelName, { name: tmp11, mode: SELECTED });
    const obj4 = { mode: SELECTED, IconComponent: tmp(12082).MagicWandIcon };
    const tmp17 = jsx(tmp(12958).BaseChannelIcon, { mode: SELECTED, IconComponent: tmp(12082).MagicWandIcon });
    cResult[6] = SELECTED;
    cResult[7] = tmp16;
    cResult[8] = tmp17;
    let tmp14 = tmp17;
    let tmp13 = tmp16;
  } else {
    tmp13 = cResult[7];
    tmp14 = cResult[8];
  }
  if (cResult[9] !== badgeCount) {
    const obj5 = { mentionCount: badgeCount, isNewChannel: false };
    const tmp20 = jsx(ChannelBadgeDefault, { mentionCount: badgeCount, isNewChannel: false });
    cResult[9] = badgeCount;
    cResult[10] = tmp20;
    let tmp18 = tmp20;
  } else {
    tmp18 = cResult[10];
  }
  if (cResult[11] === SELECTED) {
    if (cResult[12] === tmp5) {
      if (cResult[13] === hasUnread) {
        if (cResult[14] === tmp4.container) {
          if (cResult[15] === tmp10) {
            if (cResult[16] === tmp13) {
              if (cResult[17] === tmp14) {
                if (cResult[18] === tmp18) {
                  let tmp21 = cResult[19];
                }
                return tmp21;
              }
            }
          }
        }
      }
    }
  }
  const tmp22 = jsx(BaseChannelItemDefault, { onPress: tmp5, style: tmp4.container, accessible: true, accessibilityLabel: tmp8, accessibilityState: tmp10, mode: SELECTED, unread: hasUnread, name: tmp13, icon: tmp14, channelInfo: tmp18 });
  cResult[11] = SELECTED;
  cResult[12] = tmp5;
  cResult[13] = hasUnread;
  cResult[14] = tmp4.container;
  cResult[15] = tmp10;
  cResult[16] = tmp13;
  cResult[17] = tmp14;
  cResult[18] = tmp18;
  cResult[19] = tmp22;
  tmp21 = tmp22;
  const tmp7 = useConjureGuildUnreadSummaryDefault(id);
}) : (function ConjureChannelRow(selected) {
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.CONJURE));
  }, items);
  const tmp5 = useConjureGuildUnreadSummaryDefault(id);
  const hasUnread = tmp5.hasUnread;
  if (true === selected) {
    let DEFAULT = id(12958).ChannelModes.SELECTED;
    let tmp7 = id;
  } else {
    const ChannelModes = id(12958).ChannelModes;
    if (hasUnread) {
      DEFAULT = ChannelModes.UNREAD_IMPORTANT;
      tmp7 = tmp6;
    } else {
      DEFAULT = ChannelModes.DEFAULT;
      tmp7 = tmp6;
    }
  }
  const obj = { onPress: callback, style: closure_7().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, unread: null, name: null, icon: null, channelInfo: null };
  const tmp = closure_7();
  const intl = tmp7(1128).intl;
  obj.accessibilityLabel = intl.string(_modDef3865.uk6jhJ);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  obj.unread = hasUnread;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp7(1128).intl;
  obj2.name = intl2.string(_modDef3865.uk6jhJ);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp7(12958).BaseChannelName, { name: null, mode: null });
  const tmp3Result = BaseChannelItemDefault;
  obj.icon = jsx(tmp7(12958).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp7(12082).MagicWandIcon });
  obj.channelInfo = jsx(ChannelBadgeDefault, { mentionCount: tmp5.badgeCount, isNewChannel: false });
  return <tmp3Result onPress={callback} style={closure_7().container} accessible accessibilityLabel={null} accessibilityState={null} mode={null} unread={null} name={null} icon={null} channelInfo={null} />;
});