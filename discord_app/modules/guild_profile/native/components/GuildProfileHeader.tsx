// === Module 9402: GuildProfileHeader ===

// Module 9402 (GuildProfileHeader)
import nativeDefault from "native" /* 587 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2066 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import transitionToGuild from "transitionToGuild" /* 6845 */;
import BadgeCategory from "BadgeCategory" /* 8396 */;
import GuildTraits from "GuildTraits" /* 8397 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;

require = fn;
const View = fn(17).View;
const getBadgeTooltip = fn(9403).getBadgeTooltip;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { header: { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 }, avatarBackground: null, members: null, memberCount: null, dot: null, dotOnline: null, established: null, nameRow: null, guildName: null, guildIcon: null };
let size = { width: 86, height: 86, borderRadius: 28.666666666666668, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
obj2.avatarBackground = size;
obj2.members = { display: "flex", flexDirection: "row", gap: 8 };
obj2.memberCount = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 };
const size1 = { width: 8, height: 8, borderRadius: 4, backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
obj2.dot = size1;
const size2 = { width: 8, height: 8, borderRadius: 4, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj2.dotOnline = size2;
obj2.established = { display: "flex" };
obj2.nameRow = { marginTop: 4, display: "flex", flexDirection: "row", alignItems: "center" };
obj2.guildName = { flexShrink: 1 };
obj2.guildIcon = { marginLeft: 8, height: 24, width: 24 };
const styles = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((profile) => {
  const cResult = profile(stateFromStores1[10]).c(71);
  profile = profile.profile;
  const guildIconSource = profile.guildIconSource;
  let tmp4 = styles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function y() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = profile(stateFromStores1[10]);
  const stateFromStores = profile(stateFromStores1[11]).useStateFromStores(tmp5, tmp6);
  const tmpResult = profile(stateFromStores1[11]);
  const tmp9 = id;
  const tmpResult4 = profile(stateFromStores1[12]);
  const establishedDate = tmpResult4.getEstablishedDate(id(stateFromStores1[13]).extractTimestamp(profile.id), stateFromStores);
  if (cResult[2] !== profile) {
    let fromGuildProfileResult = tmp(tmp2[14]).fromGuildProfile(profile);
    cResult[2] = profile;
    cResult[3] = fromGuildProfileResult;
    const tmpResult5 = tmp(tmp2[14]);
  }
  if (cResult[4] !== profile) {
    class I {
      constructor() {
        tmp = closure_2;
        obj = closure_0(closure_2[14]);
        fromGuildProfileResult = obj.fromGuildProfile(profile);
        obj2 = closure_0(closure_2[15]);
        guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
        obj3 = closure_0(closure_2[16]);
        tmp4 = getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
        ({ tooltipTitle, tooltipSubtitle } = tmp4);
        tmp5 = null == tooltipTitle && null == tooltipSubtitle;
        if (!tmp5) {
          tmp6 = closure_1;
          obj4 = closure_1(tmp[17]);
          if (tooltipSubtitle == null) {
            tooltipSubtitle = tooltipTitle;
          }
          obj1 = { key: "guild-badge-tooltip", content: null };
          obj1.content = tooltipSubtitle;
          openResult = obj4.open(obj1);
        }
        return;
      }
    }
    cResult[4] = profile;
    cResult[5] = I;
  } else {
    class I {
      constructor() {
        tmp = closure_2;
        obj = closure_0(closure_2[14]);
        fromGuildProfileResult = obj.fromGuildProfile(profile);
        obj2 = closure_0(closure_2[15]);
        guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
        obj3 = closure_0(closure_2[16]);
        tmp4 = getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
        ({ tooltipTitle, tooltipSubtitle } = tmp4);
        tmp5 = null == tooltipTitle && null == tooltipSubtitle;
        if (!tmp5) {
          tmp6 = closure_1;
          obj4 = closure_1(tmp[17]);
          if (tooltipSubtitle == null) {
            tooltipSubtitle = tooltipTitle;
          }
          obj1 = { key: "guild-badge-tooltip", content: null };
          obj1.content = tooltipSubtitle;
          openResult = obj4.open(obj1);
        }
        return;
      }
    }
  }
  id = profile.id;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        tmp = closure_2;
        obj = closure_0(closure_2[14]);
        fromGuildProfileResult = obj.fromGuildProfile(profile);
        obj2 = closure_0(closure_2[15]);
        guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
        obj3 = closure_0(closure_2[16]);
        tmp4 = getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
        ({ tooltipTitle, tooltipSubtitle } = tmp4);
        tmp5 = null == tooltipTitle && null == tooltipSubtitle;
        if (!tmp5) {
          tmp6 = closure_1;
          obj4 = closure_1(tmp[17]);
          if (tooltipSubtitle == null) {
            tooltipSubtitle = tooltipTitle;
          }
          obj1 = { key: "guild-badge-tooltip", content: null };
          obj1.content = tooltipSubtitle;
          openResult = obj4.open(obj1);
        }
        return;
      }
    }
    const items1 = [GuildMemberStore, AuthenticationStore];
    cResult[6] = items1;
    const tmp14 = items1;
  } else {
    class I {
      constructor() {
        tmp = closure_2;
        obj = closure_0(closure_2[14]);
        fromGuildProfileResult = obj.fromGuildProfile(profile);
        obj2 = closure_0(closure_2[15]);
        guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
        obj3 = closure_0(closure_2[16]);
        tmp4 = getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
        ({ tooltipTitle, tooltipSubtitle } = tmp4);
        tmp5 = null == tooltipTitle && null == tooltipSubtitle;
        if (!tmp5) {
          tmp6 = closure_1;
          obj4 = closure_1(tmp[17]);
          if (tooltipSubtitle == null) {
            tooltipSubtitle = tooltipTitle;
          }
          obj1 = { key: "guild-badge-tooltip", content: null };
          obj1.content = tooltipSubtitle;
          openResult = obj4.open(obj1);
        }
        return;
      }
    }
  }
  if (cResult[7] !== id) {
    class I {
      constructor() {
        tmp = closure_2;
        obj = closure_0(closure_2[14]);
        fromGuildProfileResult = obj.fromGuildProfile(profile);
        obj2 = closure_0(closure_2[15]);
        guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
        obj3 = closure_0(closure_2[16]);
        tmp4 = getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
        ({ tooltipTitle, tooltipSubtitle } = tmp4);
        tmp5 = null == tooltipTitle && null == tooltipSubtitle;
        if (!tmp5) {
          tmp6 = closure_1;
          obj4 = closure_1(tmp[17]);
          if (tooltipSubtitle == null) {
            tooltipSubtitle = tooltipTitle;
          }
          obj1 = { key: "guild-badge-tooltip", content: null };
          obj1.content = tooltipSubtitle;
          openResult = obj4.open(obj1);
        }
        return;
      }
    }
    const items2 = [id];
    cResult[7] = id;
    cResult[8] = tmp18;
    cResult[9] = items2;
    let tmp17 = items2;
  } else {
    class I {
      constructor() {
        tmp = closure_2;
        obj = closure_0(closure_2[14]);
        fromGuildProfileResult = obj.fromGuildProfile(profile);
        obj2 = closure_0(closure_2[15]);
        guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
        obj3 = closure_0(closure_2[16]);
        tmp4 = getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
        ({ tooltipTitle, tooltipSubtitle } = tmp4);
        tmp5 = null == tooltipTitle && null == tooltipSubtitle;
        if (!tmp5) {
          tmp6 = closure_1;
          obj4 = closure_1(tmp[17]);
          if (tooltipSubtitle == null) {
            tooltipSubtitle = tooltipTitle;
          }
          obj1 = { key: "guild-badge-tooltip", content: null };
          obj1.content = tooltipSubtitle;
          openResult = obj4.open(obj1);
        }
        return;
      }
    }
    tmp17 = cResult[9];
  }
  let obj4 = id(stateFromStores1[13]);
  stateFromStores1 = profile(stateFromStores1[11]).useStateFromStores(tmp14, tmp18, tmp17);
  if (cResult[10] === id) {
    class I {
      constructor() {
        tmp = closure_2;
        obj = closure_0(closure_2[14]);
        fromGuildProfileResult = obj.fromGuildProfile(profile);
        obj2 = closure_0(closure_2[15]);
        guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
        obj3 = closure_0(closure_2[16]);
        tmp4 = getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
        ({ tooltipTitle, tooltipSubtitle } = tmp4);
        tmp5 = null == tooltipTitle && null == tooltipSubtitle;
        if (!tmp5) {
          tmp6 = closure_1;
          obj4 = closure_1(tmp[17]);
          if (tooltipSubtitle == null) {
            tooltipSubtitle = tooltipTitle;
          }
          obj1 = { key: "guild-badge-tooltip", content: null };
          obj1.content = tooltipSubtitle;
          openResult = obj4.open(obj1);
        }
        return;
      }
    }
    if (cResult[13] === guildIconSource) {
      class I {
        constructor() {
          tmp = closure_2;
          obj = closure_0(closure_2[14]);
          fromGuildProfileResult = obj.fromGuildProfile(profile);
          obj2 = closure_0(closure_2[15]);
          guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
          obj3 = closure_0(closure_2[16]);
          tmp4 = getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
          ({ tooltipTitle, tooltipSubtitle } = tmp4);
          tmp5 = null == tooltipTitle && null == tooltipSubtitle;
          if (!tmp5) {
            tmp6 = closure_1;
            obj4 = closure_1(tmp[17]);
            if (tooltipSubtitle == null) {
              tooltipSubtitle = tooltipTitle;
            }
            obj1 = { key: "guild-badge-tooltip", content: null };
            obj1.content = tooltipSubtitle;
            openResult = obj4.open(obj1);
          }
          return;
        }
      }
      if (cResult[16] === tmp4.avatarBackground) {
        class I {
          constructor() {
            tmp = closure_2;
            obj = closure_0(closure_2[14]);
            fromGuildProfileResult = obj.fromGuildProfile(profile);
            obj2 = closure_0(closure_2[15]);
            guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
            obj3 = closure_0(closure_2[16]);
            tmp4 = getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
            ({ tooltipTitle, tooltipSubtitle } = tmp4);
            tmp5 = null == tooltipTitle && null == tooltipSubtitle;
            if (!tmp5) {
              tmp6 = closure_1;
              obj4 = closure_1(tmp[17]);
              if (tooltipSubtitle == null) {
                tooltipSubtitle = tooltipTitle;
              }
              obj1 = { key: "guild-badge-tooltip", content: null };
              obj1.content = tooltipSubtitle;
              openResult = obj4.open(obj1);
            }
            return;
          }
        }
        if (stateFromStores1) {
          class I {
            constructor() {
              tmp = closure_2;
              obj = closure_0(closure_2[14]);
              fromGuildProfileResult = obj.fromGuildProfile(profile);
              obj2 = closure_0(closure_2[15]);
              guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
              obj3 = closure_0(closure_2[16]);
              tmp4 = getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
              ({ tooltipTitle, tooltipSubtitle } = tmp4);
              tmp5 = null == tooltipTitle && null == tooltipSubtitle;
              if (!tmp5) {
                tmp6 = closure_1;
                obj4 = closure_1(tmp[17]);
                if (tooltipSubtitle == null) {
                  tooltipSubtitle = tooltipTitle;
                }
                obj1 = { key: "guild-badge-tooltip", content: null };
                obj1.content = tooltipSubtitle;
                openResult = obj4.open(obj1);
              }
              return;
            }
          }
        }
        if (cResult[19] === profile.name) {
          class I {
            constructor() {
              tmp = closure_2;
              obj = closure_0(closure_2[14]);
              fromGuildProfileResult = obj.fromGuildProfile(profile);
              obj2 = closure_0(closure_2[15]);
              guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
              obj3 = closure_0(closure_2[16]);
              tmp4 = getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
              ({ tooltipTitle, tooltipSubtitle } = tmp4);
              tmp5 = null == tooltipTitle && null == tooltipSubtitle;
              if (!tmp5) {
                tmp6 = closure_1;
                obj4 = closure_1(tmp[17]);
                if (tooltipSubtitle == null) {
                  tooltipSubtitle = tooltipTitle;
                }
                obj1 = { key: "guild-badge-tooltip", content: null };
                obj1.content = tooltipSubtitle;
                openResult = obj4.open(obj1);
              }
              return;
            }
          }
        }
        let obj2 = { onPress: undefined, style: tmp4.guildName, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: profile.name };
        const tmp31 = closure_9(tmp(tmp2[21]).Text, obj2);
        cResult[19] = profile.name;
        cResult[20] = tmp4.guildName;
        cResult[21] = undefined;
        cResult[22] = tmp31;
      }
      let obj3 = { style: tmp4.avatarBackground, children: tmp21 };
      const tmp27 = closure_9(View, obj3);
      cResult[16] = tmp4.avatarBackground;
      cResult[17] = tmp21;
      cResult[18] = tmp27;
    }
    let obj5 = { icon: guildIconSource, size: tmp(tmp2[20]).GuildIconSizes.XXLARGE, animate: true, value: profile.name, selected: false };
    const tmp24 = closure_9(tmp9(tmp2[20]), obj5);
    cResult[13] = guildIconSource;
    cResult[14] = profile.name;
    cResult[15] = tmp24;
    const tmp9Result = tmp9(tmp2[20]);
  }
  class O {
    constructor() {
      if (closure_2) {
        tmp = closure_1;
        tmp2 = closure_2;
        obj = closure_1(closure_2[18]);
        tmp3 = id;
        tmp4 = globalThis;
        _HermesInternal = HermesInternal;
        str = "GuildProfileActionSheet:";
        hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + id);
        tmp6 = closure_0;
        obj2 = closure_0(closure_2[19]);
        transitionToGuildResult = obj2.transitionToGuild(id);
      }
      return;
    }
  }
  cResult[10] = id;
  cResult[11] = stateFromStores1;
  cResult[12] = O;
  const tmpResult6 = profile(stateFromStores1[11]);
}) : ((icon) => {
  const profile = icon.profile;
  let id;
  let stateFromStores1;
  const tmp = styles();
  const items = [LocaleStore];
  const stateFromStores = profile(stateFromStores1[11]).useStateFromStores(items, () => locale.locale);
  let obj = profile(stateFromStores1[11]);
  let obj2 = profile(stateFromStores1[12]);
  let tmp5 = id;
  const establishedDate = obj2.getEstablishedDate(id(stateFromStores1[13]).extractTimestamp(profile.id), stateFromStores);
  let obj3 = id(stateFromStores1[13]);
  const items1 = [profile];
  let obj4 = profile(stateFromStores1[14]);
  id = profile.id;
  const callback = noop.useCallback(() => {
    const fromGuildProfileResult = GuildRecordUtils.fromGuildProfile(profile);
    const guildTraits = GuildTraits.getGuildTraits(fromGuildProfileResult);
    ({ tooltipTitle, tooltipSubtitle } = getBadgeTooltip(BadgeCategory.getBadgeCategory(guildTraits), guildTraits.visibility));
    if (!tmp5) {
      if (tooltipSubtitle == null) {
        tooltipSubtitle = tooltipTitle;
      }
      const obj5 = { key: "guild-badge-tooltip", content: tooltipSubtitle };
      ToastActionCreatorsDefault.open(obj5);
    }
    const tmp4 = getBadgeTooltip(BadgeCategory.getBadgeCategory(guildTraits), guildTraits.visibility);
    tmp5 = null == tooltipTitle && null == tooltipSubtitle;
  }, items1);
  let fromGuildProfileResult = profile(stateFromStores1[14]).fromGuildProfile(profile);
  const items2 = [GuildMemberStore, AuthenticationStore];
  const items3 = [id];
  stateFromStores1 = profile(stateFromStores1[11]).useStateFromStores(items2, () => {
    const member = GuildMemberStore.getMember(id, AuthenticationStore.getId());
    let joinedAt;
    if (member != null) {
      joinedAt = member.joinedAt;
    }
    return null != joinedAt;
  }, items3);
  const items4 = [id, stateFromStores1];
  const obj6 = { style: tmp.header, children: null };
  const obj7 = { style: tmp.avatarBackground, children: null };
  const callback1 = noop.useCallback(() => {
    if (stateFromStores1) {
      const _HermesInternal = HermesInternal;
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + id);
      transitionToGuild.transitionToGuild(id);
    }
  }, items4);
  const obj8 = { icon: icon.guildIconSource, size: null, animate: true, value: null, selected: false };
  let obj5 = profile(stateFromStores1[11]);
  obj8.size = profile(stateFromStores1[20]).GuildIconSizes.XXLARGE;
  obj8.value = profile.name;
  obj7.children = closure_9(id(stateFromStores1[20]), obj8);
  const items5 = [closure_9(View, obj7), , , ];
  const obj9 = { style: tmp.nameRow, children: null };
  let tmp15;
  if (stateFromStores1) {
    tmp15 = callback1;
  }
  const items6 = [closure_9(profile(stateFromStores1[21]).Text, { onPress: tmp15, style: tmp.guildName, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: profile.name }), ];
  const obj11 = { onPress: callback, children: closure_9(tmp5(stateFromStores1[22]), { guild: fromGuildProfileResult, style: tmp.guildIcon }) };
  items6[1] = closure_9(profile(stateFromStores1[23]).PressableHighlight, obj11);
  obj9.children = items6;
  items5[1] = closure_10(View, obj9);
  const obj13 = { style: tmp.members, children: null };
  const obj14 = { style: tmp.memberCount, children: null };
  const items7 = [closure_9(View, { style: tmp.dotOnline }), ];
  const obj16 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl = tmp2(tmp3[24]).intl;
  obj16.children = intl.format(profile(stateFromStores1[24]).t["LC+S+m"], { membersOnline: profile.onlineCount });
  items7[1] = closure_9(profile(stateFromStores1[21]).Text, obj16);
  obj14.children = items7;
  const items8 = [closure_10(View, obj14), ];
  const obj18 = { style: tmp.memberCount, children: null };
  const items9 = [closure_9(View, { style: tmp.dot }), ];
  const obj20 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = tmp2(tmp3[24]).intl;
  obj20.children = intl2.format(profile(stateFromStores1[24]).t.zRl6XR, { count: profile.memberCount });
  items9[1] = closure_9(profile(stateFromStores1[21]).Text, obj20);
  obj18.children = items9;
  items8[1] = closure_10(View, obj18);
  obj13.children = items8;
  items5[2] = closure_10(View, obj13);
  const obj22 = { style: tmp.established, children: null };
  const obj23 = { variant: "text-md/medium", color: "text-muted", children: null };
  const intl3 = tmp2(tmp3[24]).intl;
  obj23.children = intl3.format(profile(stateFromStores1[24]).t.zb2Q56, { createdAtDate: establishedDate });
  obj22.children = closure_9(profile(stateFromStores1[21]).Text, obj23);
  items5[3] = closure_9(View, obj22);
  obj6.children = items5;
  return closure_10(View, obj6);
});
export const useStyles = styles;