// discord_app/modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import MemberVerificationTypes from "../../MemberVerificationTypes.tsx";
import GuildJoinRequestActionCreatorsDefault from "../../GuildJoinRequestActionCreators.tsx";
import BaseChannelItemDefault from "../../../guild_sidebar/native/BaseChannelItem.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Constants = fn(1085);
({ GuildFeatures: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = fn(2058).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = {
  container: {
    marginVertical: fn(11697).CHANNEL_MARGIN_VERTICAL,
    marginHorizontal: 8,
    borderRadius: nativeDefault.radii.md,
  },
  badge: null,
  badgeText: null,
};
let obj3 = {
  marginVertical: fn(11697).CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: nativeDefault.radii.md,
};
obj2.badge = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_DEFAULT };
let obj4 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_DEFAULT };
obj2.badgeText = { color: nativeDefault.colors.BADGE_TEXT_DEFAULT };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.BADGE_TEXT_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = id(576).c(30);
      ({ guild, selected } = arg0);
      const tmp4 = closure_8();
      id = guild.id;
      let obj = id(576);
      let num = id(16140).useSubmittedGuildJoinRequestTotal({ guildId: id });
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
              const fn = function h() {
                router_utils.transitionTo(hasOwnProperty.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              };
              cResult[9] = id;
              cResult[10] = fn;
              let tmp12 = fn;
            } else {
              tmp12 = cResult[10];
            }
            const ChannelModes = tmp(12016).ChannelModes;
            const tmp13 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(tmp(1126).t["9Oq93m"]);
              cResult[11] = stringResult;
              let tmp15 = stringResult;
            } else {
              tmp15 = cResult[11];
            }
            if (cResult[12] !== selected) {
              const obj3 = { selected };
              cResult[12] = selected;
              cResult[13] = obj3;
              let tmp17 = obj3;
            } else {
              tmp17 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const stringResult1 = intl2.string(tmp(1126).t["9Oq93m"]);
              cResult[14] = stringResult1;
              let tmp18 = stringResult1;
            } else {
              tmp18 = cResult[14];
            }
            if (cResult[15] !== tmp13) {
              const obj4 = { name: tmp18, mode: tmp13 };
              const tmp23 = jsx(tmp(12016).BaseChannelName, { name: tmp18, mode: tmp13 });
              const obj5 = { mode: tmp13, IconComponent: tmp(5873).GroupIcon };
              const tmp24 = jsx(tmp(12016).BaseChannelIcon, { mode: tmp13, IconComponent: tmp(5873).GroupIcon });
              cResult[15] = tmp13;
              cResult[16] = tmp24;
              cResult[17] = tmp23;
              let tmp21 = tmp23;
              let tmp20 = tmp24;
            } else {
              tmp20 = cResult[16];
              tmp21 = cResult[17];
            }
            if (cResult[18] === num) {
              if (cResult[19] === tmp4.badge) {
                if (cResult[20] === tmp4.badgeText) {
                  let tmp25 = cResult[21];
                }
                if (cResult[22] === tmp13) {
                  if (cResult[23] === tmp12) {
                    if (cResult[24] === tmp4.container) {
                      if (cResult[25] === tmp20) {
                        if (cResult[26] === tmp25) {
                          if (cResult[27] === tmp17) {
                            if (cResult[28] === tmp21) {
                              let tmp28 = cResult[29];
                            }
                            return tmp28;
                          }
                        }
                      }
                    }
                  }
                }
                const obj7 = {
                  onPress: tmp12,
                  style: tmp4.container,
                  accessible: true,
                  accessibilityLabel: tmp15,
                  accessibilityState: tmp17,
                  mode: tmp13,
                  name: tmp21,
                  icon: tmp20,
                  channelInfo: tmp25,
                };
                const tmp31 = jsx(BaseChannelItemDefault, {
                  onPress: tmp12,
                  style: tmp4.container,
                  accessible: true,
                  accessibilityLabel: tmp15,
                  accessibilityState: tmp17,
                  mode: tmp13,
                  name: tmp21,
                  icon: tmp20,
                  channelInfo: tmp25,
                });
                cResult[22] = tmp13;
                cResult[23] = tmp12;
                cResult[24] = tmp4.container;
                cResult[25] = tmp20;
                class I {
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
                cResult[26] = tmp25;
                cResult[27] = tmp17;
                cResult[28] = tmp21;
                cResult[29] = tmp31;
                tmp28 = tmp31;
              }
            }
            let tmp26 = null;
            if (num > 0) {
              const obj12 = { style: null, textStyle: null, value: null };
              ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp4);
              obj12.value = num;
              tmp26 = jsx(tmp(1188).Badge, { style: null, textStyle: null, value: null });
            }
            class I {
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
            tmp25 = tmp26;
          }
        }
        const items = [guild.features, id, tmp5];
        cResult[5] = guild.features;
        cResult[6] = id;
        cResult[7] = tmp5;
        cResult[8] = items;
        tmp9 = items;
      }
      class I {
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
      cResult[4] = I;
      tmp8 = I;
      let obj2 = id(16140);
    }
  : (arg0) => {
      ({ guild, selected } = arg0);
      let hasItem;
      const tmp = closure_8();
      const id = guild.id;
      let num = id(16140).useSubmittedGuildJoinRequestTotal({ guildId: id });
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
      const ChannelModes = tmp2(12016).ChannelModes;
      const tmp7 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
      let obj2 = {
        onPress: callback,
        style: tmp.container,
        accessible: true,
        accessibilityLabel: null,
        accessibilityState: null,
        mode: null,
        name: null,
        icon: null,
        channelInfo: null,
      };
      let obj = id(16140);
      const intl = tmp2(1126).intl;
      obj2.accessibilityLabel = intl.string(id(1126).t["9Oq93m"]);
      obj2.accessibilityState = { selected };
      obj2.mode = tmp7;
      const obj3 = { name: null, mode: null };
      const intl2 = tmp2(1126).intl;
      obj3.name = intl2.string(id(1126).t["9Oq93m"]);
      obj3.mode = tmp7;
      obj2.name = jsx(id(12016).BaseChannelName, { name: null, mode: null });
      const tmp9 = hasItem(12016);
      obj2.icon = jsx(id(12016).BaseChannelIcon, { mode: tmp7, IconComponent: id(5873).GroupIcon });
      let tmp8Result = null;
      if (num > 0) {
        const obj9 = { style: null, textStyle: null, value: null };
        ({ badge: obj5.style, badgeText: obj5.textStyle } = tmp);
        obj9.value = num;
        tmp8Result = jsx(tmp2(1188).Badge, { style: null, textStyle: null, value: null });
      }
      obj2.channelInfo = tmp8Result;
      return (
        <tmp9
          onPress={callback}
          style={tmp.container}
          accessible
          accessibilityLabel={null}
          accessibilityState={null}
          mode={null}
          name={null}
          icon={null}
          channelInfo={null}
        />
      );
    };
