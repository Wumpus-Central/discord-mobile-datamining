// === Module 16178: GuildMemberDashChannelRow ===

// Module 16178 (GuildMemberDashChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4708 */;
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 5938 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11711 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 12031 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
({ GuildFeatures: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, badge: obj3, badgeText: obj4 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_DEFAULT };
obj4 = { color: nativeDefault.colors.BADGE_TEXT_DEFAULT };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_1;
  let guild;
  let id;
  let selected;
  let tmp5;
  let obj = id(576);
  const cResult = obj.c(30);
  ({ guild, selected } = arg0);
  const tmp4 = closure_8();
  id = guild.id;
  const obj2 = id(16179);
  let num = obj2.useSubmittedGuildJoinRequestTotal({ guildId: id });
  if (num == null) {
    num = 0;
  }
  if (cResult[0] !== guild.features) {
    const features = guild.features;
    const hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    cResult[0] = guild.features;
    cResult[1] = hasItem;
    tmp5 = hasItem;
  } else {
    tmp5 = cResult[1];
  }
  importDefault = tmp5;
  if (cResult[2] === id) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === guild.features) {
      if (cResult[6] === id) {
        let tmp9;
        let tmp12;
        let tmp15;
        let tmp17;
        let tmp18;
        let tmp21;
        let tmp20;
        if (cResult[7] === tmp5) {
          tmp9 = cResult[8];
        }
        const effect = react.useEffect(tmp8, tmp9);
        if (cResult[9] !== id) {
          const fn = function h() {
            const obj = router_utils;
            obj.transitionTo(hasOwnProperty.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
          };
          cResult[9] = id;
          cResult[10] = fn;
          tmp12 = fn;
        } else {
          tmp12 = cResult[10];
        }
        const ChannelModes = tmp(12031).ChannelModes;
        const tmp13 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
        const _Symbol = Symbol;
        const container = tmp4.container;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(id(1126).t["9Oq93m"]);
          cResult[11] = stringResult;
          tmp15 = stringResult;
        } else {
          tmp15 = cResult[11];
        }
        if (cResult[12] !== selected) {
          const obj3 = { selected };
          cResult[12] = selected;
          cResult[13] = obj3;
          tmp17 = obj3;
        } else {
          tmp17 = cResult[13];
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(id(1126).t["9Oq93m"]);
          cResult[14] = stringResult1;
          tmp18 = stringResult1;
        } else {
          tmp18 = cResult[14];
        }
        if (cResult[15] !== tmp13) {
          const tmp23 = jsx(id(12031).BaseChannelName, { name: tmp18, mode: tmp13 });
          const BaseChannelIcon = tmp(12031).BaseChannelIcon;
          const tmp24 = <BaseChannelIcon mode={tmp13} IconComponent={id(5880).GroupIcon} />;
          cResult[15] = tmp13;
          cResult[16] = tmp24;
          cResult[17] = tmp23;
          tmp21 = tmp23;
          tmp20 = tmp24;
        } else {
          tmp20 = cResult[16];
          tmp21 = cResult[17];
        }
        if (cResult[18] === num) {
          if (cResult[19] === tmp4.badge) {
            let tmp25;
            if (cResult[20] === tmp4.badgeText) {
              tmp25 = cResult[21];
            }
            if (cResult[22] === tmp13) {
              if (cResult[23] === tmp12) {
                if (cResult[24] === tmp4.container) {
                  if (cResult[25] === tmp20) {
                    if (cResult[26] === tmp25) {
                      if (cResult[27] === tmp17) {
                        let tmp28;
                        if (cResult[28] === tmp21) {
                          tmp28 = cResult[29];
                        }
                        return tmp28;
                      }
                    }
                  }
                }
              }
            }
            const tmp31 = jsx(BaseChannelItemDefault, { onPress: tmp12, style: container, accessible: true, accessibilityLabel: tmp15, accessibilityState: tmp17, mode: tmp13, name: tmp21, icon: tmp20, channelInfo: tmp25 });
            cResult[22] = tmp13;
            cResult[23] = tmp12;
            cResult[24] = tmp4.container;
            cResult[25] = tmp20;
            class I {
              constructor() {
                if (closure_1) {
                  const obj = { guildId: id, status: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED };
                  const fetchGuildJoinRequests = GuildJoinRequestActionCreatorsDefault.fetchGuildJoinRequests;
                  GuildJoinRequestActionCreatorsDefault;
                  const guildJoinRequests = fetchGuildJoinRequests(obj);
                }
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
          ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp4);
          tmp26 = jsx(tmp(1188).Badge, { style: null, textStyle: null, value: num });
        }
        class I {
          constructor() {
            if (closure_1) {
              const obj = { guildId: id, status: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED };
              const fetchGuildJoinRequests = GuildJoinRequestActionCreatorsDefault.fetchGuildJoinRequests;
              GuildJoinRequestActionCreatorsDefault;
              const guildJoinRequests = fetchGuildJoinRequests(obj);
            }
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
        const obj = { guildId: id, status: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED };
        const fetchGuildJoinRequests = GuildJoinRequestActionCreatorsDefault.fetchGuildJoinRequests;
        GuildJoinRequestActionCreatorsDefault;
        const guildJoinRequests = fetchGuildJoinRequests(obj);
      }
    }
  }
  cResult[2] = id;
  cResult[3] = tmp5;
  cResult[4] = I;
  tmp8 = I;
}) : ((arg0) => {
  let guild;
  let intl2;
  let selected;
  ({ guild, selected } = arg0);
  let hasItem;
  const tmp = closure_8();
  const id = guild.id;
  let obj = id(16179);
  let num = obj.useSubmittedGuildJoinRequestTotal({ guildId: id });
  if (num == null) {
    num = 0;
  }
  const features = guild.features;
  hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  const items = [guild.features, id, hasItem];
  const effect = react.useEffect(() => {
    if (hasItem) {
      const obj = { guildId: id, status: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED };
      const fetchGuildJoinRequests = GuildJoinRequestActionCreatorsDefault.fetchGuildJoinRequests;
      GuildJoinRequestActionCreatorsDefault;
      const guildJoinRequests = fetchGuildJoinRequests(obj);
    }
  }, items);
  const items1 = [id];
  const callback = react.useCallback(() => {
    const obj = router_utils;
    obj.transitionTo(hasOwnProperty.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
  }, items1);
  const ChannelModes = tmp2(12031).ChannelModes;
  const tmp7 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  hasItem(12031);
  const intl = tmp2(1126).intl;
  ({ name: intl2.string(id(1126).t["9Oq93m"]), mode: tmp7 });
  const BaseChannelName = tmp2(12031).BaseChannelName;
  intl2 = tmp2(1126).intl;
  ({ mode: tmp7, IconComponent: id(5880).GroupIcon });
  const BaseChannelIcon = tmp2(12031).BaseChannelIcon;
  let tmp8Result = null;
  if (num > 0) {
    ({ badge: obj5.style, badgeText: obj5.textStyle } = tmp);
    tmp8Result = jsx(tmp2(1188).Badge, { style: null, textStyle: null, value: num });
  }
  return <tmp9 onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(id(1126).t["9Oq93m"])} accessibilityState={{ selected }} mode={tmp7} name={null} icon={null} channelInfo={tmp8Result} />;
});
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx");

export default tmp4;