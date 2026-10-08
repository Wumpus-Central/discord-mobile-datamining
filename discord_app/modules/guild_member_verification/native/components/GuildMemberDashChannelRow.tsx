// === Module 16438: GuildMemberDashChannelRow ===

// Module 16438 (GuildMemberDashChannelRow)
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4902 */;
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6121 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1085);
({ GuildFeatures: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = fn(2070).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { container: { marginVertical: fn(11776).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md }, badge: null, badgeText: null };
let obj3 = { marginVertical: fn(11776).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
obj2.badge = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_DEFAULT };
const obj4 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_DEFAULT };
obj2.badgeText = { color: nativeDefault.colors.BADGE_TEXT_DEFAULT };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.BADGE_TEXT_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildMemberDashChannelRow(arg0) {
  const cResult = id(576).c(30);
  ({ guild, selected } = arg0);
  const tmp4 = closure_8();
  id = guild.id;
  let obj = id(576);
  let num = id(16439).useSubmittedGuildJoinRequestTotal({ guildId: id });
  if (num == null) {
    num = 0;
  }
  if (cResult[0] !== guild.features) {
    const features = guild.features;
    const hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    cResult[0] = guild.features;
    cResult[1] = hasItem;
    let tmp5 = hasItem;
  } else {
    tmp5 = cResult[1];
  }
  importDefault = tmp5;
  if (cResult[2] === id) {
    if (cResult[3] === tmp5) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === guild.features) {
      if (cResult[6] === id) {
        if (cResult[7] === tmp5) {
          let tmp9 = cResult[8];
        }
        const effect = noop.useEffect(tmp8, tmp9);
        if (cResult[9] !== id) {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
          cResult[9] = id;
          cResult[10] = I;
        } else {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
        }
        const ChannelModes = tmp(12104).ChannelModes;
        const tmp13 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
        const _Symbol = Symbol;
        const container = tmp4.container;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
          const stringResult = obj3.string(tmp(1126).t["9Oq93m"]);
          cResult[11] = stringResult;
        } else {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
        }
        if (cResult[12] !== selected) {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
          tmp18[0] = selected;
          cResult[12] = selected;
          cResult[13] = tmp18;
        } else {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
          const stringResult1 = obj4.string(tmp(1126).t["9Oq93m"]);
          cResult[14] = stringResult1;
          const tmp19 = stringResult1;
        } else {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
        }
        if (cResult[15] !== tmp13) {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
          const obj5 = { name: tmp19, mode: tmp13 };
          const tmp23 = jsx(tmp(12104).BaseChannelName, { name: tmp19, mode: tmp13 });
          const obj6 = { mode: tmp13, IconComponent: tmp(8192).GroupIcon };
          const tmp24 = jsx(tmp(12104).BaseChannelIcon, { mode: tmp13, IconComponent: tmp(8192).GroupIcon });
          cResult[15] = tmp13;
          cResult[16] = tmp24;
          cResult[17] = tmp23;
        } else {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
        }
        if (cResult[18] === num) {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
        }
        let tmp26 = null;
        if (num > 0) {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
          const obj10 = { style: null, textStyle: null, value: null };
          ({ badge: obj7.style, badgeText: obj7.textStyle } = tmp4);
          obj10.value = num;
          tmp26 = jsx(tmp(1200).Badge, { style: null, textStyle: null, value: null });
        }
        class R {
          constructor() {
            if (closure_1) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[10]);
              obj1 = { guildId: null, status: null };
              tmp3 = id;
              obj1.guildId = id;
              tmp4 = closure_0;
              obj1.status = closure_0(closure_2[11]).GuildJoinRequestApplicationStatuses.SUBMITTED;
              guildJoinRequests = obj.fetchGuildJoinRequests(obj1);
            }
            return;
          }
        }
        cResult[19] = tmp4.badge;
        cResult[20] = tmp4.badgeText;
        cResult[21] = tmp26;
      }
    }
    const items = [guild.features, id, tmp5];
    cResult[5] = guild.features;
    cResult[6] = id;
    cResult[7] = tmp5;
    cResult[8] = items;
    tmp9 = items;
  }
  class R {
    constructor() {
      if (closure_1) {
        tmp = closure_1;
        tmp2 = closure_2;
        obj = closure_1(closure_2[10]);
        obj1 = { guildId: null, status: null };
        tmp3 = id;
        obj1.guildId = id;
        tmp4 = closure_0;
        obj1.status = closure_0(closure_2[11]).GuildJoinRequestApplicationStatuses.SUBMITTED;
        guildJoinRequests = obj.fetchGuildJoinRequests(obj1);
      }
      return;
    }
  }
  cResult[2] = id;
  cResult[3] = tmp5;
  cResult[4] = R;
  tmp8 = R;
  let obj2 = id(16439);
}) : (function GuildMemberDashChannelRow(arg0) {
  ({ guild, selected } = arg0);
  let hasItem;
  const tmp = closure_8();
  const id = guild.id;
  let num = id(16439).useSubmittedGuildJoinRequestTotal({ guildId: id });
  if (num == null) {
    num = 0;
  }
  const features = guild.features;
  hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  const items = [guild.features, id, hasItem];
  const effect = noop.useEffect(() => {
    if (hasItem) {
      const obj2 = { guildId: id, status: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED };
      const guildJoinRequests = GuildJoinRequestActionCreatorsDefault.fetchGuildJoinRequests(obj2);
    }
  }, items);
  const items1 = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(hasOwnProperty.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
  }, items1);
  const ChannelModes = tmp2(12104).ChannelModes;
  const tmp7 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  let obj2 = { onPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null, channelInfo: null };
  let obj = id(16439);
  const intl = tmp2(1126).intl;
  obj2.accessibilityLabel = intl.string(id(1126).t["9Oq93m"]);
  obj2.accessibilityState = { selected };
  obj2.mode = tmp7;
  const obj3 = { name: null, mode: null };
  const intl2 = tmp2(1126).intl;
  obj3.name = intl2.string(id(1126).t["9Oq93m"]);
  obj3.mode = tmp7;
  obj2.name = jsx(id(12104).BaseChannelName, { name: null, mode: null });
  const tmp9 = hasItem(12104);
  obj2.icon = jsx(id(12104).BaseChannelIcon, { mode: tmp7, IconComponent: id(8192).GroupIcon });
  let tmp8Result = null;
  if (num > 0) {
    const obj9 = { style: null, textStyle: null, value: null };
    ({ badge: obj5.style, badgeText: obj5.textStyle } = tmp);
    obj9.value = num;
    tmp8Result = jsx(tmp2(1200).Badge, { style: null, textStyle: null, value: null });
  }
  obj2.channelInfo = tmp8Result;
  return <tmp9 onPress={callback} style={tmp.container} accessible accessibilityLabel={null} accessibilityState={null} mode={null} name={null} icon={null} channelInfo={null} />;
});