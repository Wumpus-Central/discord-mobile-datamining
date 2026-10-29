// === Module 18159: ConjureChannelRow ===

// Module 18159 (ConjureChannelRow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import MagicWandIcon from "MagicWandIcon" /* 12266 */;
import BaseChannelItem from "BaseChannelItem" /* 13740 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 14636 */;
import useConjureGuildUnreadSummaryDefault from "useConjureGuildUnreadSummary" /* 18160 */;
import ChannelBadgeDefault from "ChannelBadge" /* 18161 */;
import noop from "module_19" /* 19 */;

const BaseChannelItemDefault = BaseChannelItem;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5005);
let obj2 = { container: { marginVertical: fn(12046).CHANNEL_MARGIN_VERTICAL, marginHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md } };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginVertical: fn(12046).CHANNEL_MARGIN_VERTICAL, marginHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureChannelRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureChannelRow(selected) {
  const cResult = c.c(17);
  selected = selected.selected;
  const tmp4 = closure_4();
  ({ hasUnread, badgeCount } = useConjureGuildUnreadSummaryDefault(selected.guild.id));
  if (true === selected) {
    let SELECTED = BaseChannelItem.ChannelModes.SELECTED;
  } else {
    const ChannelModes = BaseChannelItem.ChannelModes;
    SELECTED = hasUnread ? ChannelModes.UNREAD_IMPORTANT : ChannelModes.DEFAULT;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(_modDef3864.uk6jhJ);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== selected) {
    const obj2 = { selected };
    cResult[1] = selected;
    cResult[2] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(_modDef3864.uk6jhJ);
    cResult[3] = stringResult1;
    let tmp10 = stringResult1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== SELECTED) {
    const obj3 = { name: tmp10, mode: SELECTED };
    const tmp15 = jsx(BaseChannelItem.BaseChannelName, { name: tmp10, mode: SELECTED });
    const obj4 = { mode: SELECTED, IconComponent: MagicWandIcon.MagicWandIcon };
    const tmp16 = jsx(BaseChannelItem.BaseChannelIcon, { mode: SELECTED, IconComponent: MagicWandIcon.MagicWandIcon });
    cResult[4] = SELECTED;
    cResult[5] = tmp15;
    cResult[6] = tmp16;
    let tmp13 = tmp16;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  if (cResult[7] !== badgeCount) {
    const obj5 = { mentionCount: badgeCount, isNewChannel: false };
    const tmp19 = jsx(ChannelBadgeDefault, { mentionCount: badgeCount, isNewChannel: false });
    cResult[7] = badgeCount;
    cResult[8] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] === SELECTED) {
    if (cResult[10] === hasUnread) {
      if (cResult[11] === tmp4.container) {
        if (cResult[12] === tmp9) {
          if (cResult[13] === tmp12) {
            if (cResult[14] === tmp13) {
              if (cResult[15] === tmp17) {
                let tmp20 = cResult[16];
              }
              return tmp20;
            }
          }
        }
      }
    }
  }
  const obj6 = { onPress: null, style: null, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, unread: null, name: null, icon: null, channelInfo: null };
  const tmp6 = useConjureGuildUnreadSummaryDefault(selected.guild.id);
  obj6.onPress = openConjureProjectsSheetDefault;
  obj6.style = tmp4.container;
  obj6.accessibilityLabel = first;
  obj6.accessibilityState = tmp9;
  obj6.mode = SELECTED;
  obj6.unread = hasUnread;
  obj6.name = tmp12;
  obj6.icon = tmp13;
  obj6.channelInfo = tmp17;
  const tmp22 = jsx(BaseChannelItemDefault, { onPress: null, style: null, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, unread: null, name: null, icon: null, channelInfo: null });
  cResult[9] = SELECTED;
  cResult[10] = hasUnread;
  cResult[11] = tmp4.container;
  cResult[12] = tmp9;
  cResult[13] = tmp12;
  cResult[14] = tmp13;
  cResult[15] = tmp17;
  cResult[16] = tmp22;
  tmp20 = tmp22;
  const tmp5Result = BaseChannelItemDefault;
}) : (function ConjureChannelRow(selected) {
  selected = selected.selected;
  const tmp4 = useConjureGuildUnreadSummaryDefault(selected.guild.id);
  const hasUnread = tmp4.hasUnread;
  if (true === selected) {
    let DEFAULT = BaseChannelItem.ChannelModes.SELECTED;
    let tmp6 = require;
  } else {
    const ChannelModes = BaseChannelItem.ChannelModes;
    if (hasUnread) {
      DEFAULT = ChannelModes.UNREAD_IMPORTANT;
      tmp6 = require;
    } else {
      DEFAULT = ChannelModes.DEFAULT;
      tmp6 = require;
    }
  }
  const obj = { onPress: null, style: null, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, unread: null, name: null, icon: null, channelInfo: null };
  const tmp = closure_4();
  obj.onPress = openConjureProjectsSheetDefault;
  obj.style = tmp.container;
  const intl = tmp6(1125).intl;
  obj.accessibilityLabel = intl.string(_modDef3864.uk6jhJ);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  obj.unread = hasUnread;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp6(1125).intl;
  obj2.name = intl2.string(_modDef3864.uk6jhJ);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp6(13740).BaseChannelName, { name: null, mode: null });
  const tmp2Result = BaseChannelItemDefault;
  obj.icon = jsx(tmp6(13740).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp6(12266).MagicWandIcon });
  obj.channelInfo = jsx(ChannelBadgeDefault, { mentionCount: tmp4.badgeCount, isNewChannel: false });
  return <tmp2Result onPress={null} style={null} accessible accessibilityLabel={null} accessibilityState={null} mode={null} unread={null} name={null} icon={null} channelInfo={null} />;
});