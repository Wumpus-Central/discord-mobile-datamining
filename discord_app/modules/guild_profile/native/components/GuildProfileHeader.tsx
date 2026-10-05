// discord_app/modules/guild_profile/native/components/GuildProfileHeader.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildRecordUtils from "../../../../utils/GuildRecordUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import transitionToGuild from "../../../routing/transitionToGuild.native.tsx";
import BadgeCategory from "../../../guild_badge/BadgeCategory.tsx";
import GuildTraits from "../../../guild_badge/GuildTraits.tsx";
import GuildBadgeConstants from "../../../guild_badge/GuildBadgeConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import LocaleStore from "../../../user_settings/LocaleStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let profile;

let c10;
let c9;
let size;
let size1;
let size2;
const View = react_native.View;
const getBadgeTooltip = GuildBadgeConstants.getBadgeTooltip;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  header: { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 },
  avatarBackground: size,
  members: { display: "flex", flexDirection: "row", gap: 8 },
  memberCount: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 },
  dot: size1,
  dotOnline: size2,
  established: { display: "flex" },
  nameRow: { marginTop: 4, display: "flex", flexDirection: "row", alignItems: "center" },
  guildName: { flexShrink: 1 },
  guildIcon: { marginLeft: 8, height: 24, width: 24 },
};
size = {
  width: 86,
  height: 86,
  borderRadius: 28.666666666666668,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};
createStyles = createStyles.createStyles;
size1 = { width: 8, height: 8, borderRadius: 4, backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
size2 = { width: 8, height: 8, borderRadius: 4, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
const styles = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (profile) => {
      let id;
      let locale;
      let stateFromStores1;
      let tmp15;
      let tmp18;
      let tmp5;
      let tmp6;
      let obj = profile(stateFromStores1[10]);
      const cResult = obj.c(71);
      profile = profile.profile;
      const guildIconSource = profile.guildIconSource;
      const tmp4 = styles();
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
      const tmpResult = profile(stateFromStores1[11]);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const getEstablishedDate = profile(stateFromStores1[12]).getEstablishedDate;
      profile(stateFromStores1[12]);
      let obj3 = id(tmp2[13]);
      const establishedDate = getEstablishedDate(obj3.extractTimestamp(profile.id), stateFromStores);
      const tmp10 = id;
      if (cResult[2] !== profile) {
        const tmpResult5 = profile(stateFromStores1[14]);
        let fromGuildProfileResult = tmpResult5.fromGuildProfile(profile);
        cResult[2] = profile;
        cResult[3] = fromGuildProfileResult;
      }
      if (cResult[4] !== profile) {
        class I {
          constructor() {
            let tooltipSubtitle;
            let tooltipTitle;
            const obj = GuildRecordUtils;
            const fromGuildProfileResult = obj.fromGuildProfile(profile);
            const obj2 = GuildTraits;
            const guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
            const obj3 = BadgeCategory;
            ({ tooltipTitle, tooltipSubtitle } = getBadgeTooltip(
              obj3.getBadgeCategory(guildTraits),
              guildTraits.visibility,
            ));
            getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
            const tmp5 = null == tooltipTitle && null == tooltipSubtitle;
            if (!tmp5) {
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              if (tooltipSubtitle == null) {
                tooltipSubtitle = tooltipTitle;
              }
              const obj4 = { key: "guild-badge-tooltip", content: tooltipSubtitle };
              open(obj4);
            }
          }
        }
        cResult[4] = profile;
        cResult[5] = I;
      } else {
        class I {
          constructor() {
            let tooltipSubtitle;
            let tooltipTitle;
            const obj = GuildRecordUtils;
            const fromGuildProfileResult = obj.fromGuildProfile(profile);
            const obj2 = GuildTraits;
            const guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
            const obj3 = BadgeCategory;
            ({ tooltipTitle, tooltipSubtitle } = getBadgeTooltip(
              obj3.getBadgeCategory(guildTraits),
              guildTraits.visibility,
            ));
            getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
            const tmp5 = null == tooltipTitle && null == tooltipSubtitle;
            if (!tmp5) {
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              if (tooltipSubtitle == null) {
                tooltipSubtitle = tooltipTitle;
              }
              const obj4 = { key: "guild-badge-tooltip", content: tooltipSubtitle };
              open(obj4);
            }
          }
        }
      }
      id = profile.id;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            let tooltipSubtitle;
            let tooltipTitle;
            const obj = GuildRecordUtils;
            const fromGuildProfileResult = obj.fromGuildProfile(profile);
            const obj2 = GuildTraits;
            const guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
            const obj3 = BadgeCategory;
            ({ tooltipTitle, tooltipSubtitle } = getBadgeTooltip(
              obj3.getBadgeCategory(guildTraits),
              guildTraits.visibility,
            ));
            getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
            const tmp5 = null == tooltipTitle && null == tooltipSubtitle;
            if (!tmp5) {
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              if (tooltipSubtitle == null) {
                tooltipSubtitle = tooltipTitle;
              }
              const obj4 = { key: "guild-badge-tooltip", content: tooltipSubtitle };
              open(obj4);
            }
          }
        }
        const items1 = [GuildMemberStore, AuthenticationStore];
        cResult[6] = items1;
        tmp15 = items1;
      } else {
        class I {
          constructor() {
            let tooltipSubtitle;
            let tooltipTitle;
            const obj = GuildRecordUtils;
            const fromGuildProfileResult = obj.fromGuildProfile(profile);
            const obj2 = GuildTraits;
            const guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
            const obj3 = BadgeCategory;
            ({ tooltipTitle, tooltipSubtitle } = getBadgeTooltip(
              obj3.getBadgeCategory(guildTraits),
              guildTraits.visibility,
            ));
            getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
            const tmp5 = null == tooltipTitle && null == tooltipSubtitle;
            if (!tmp5) {
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              if (tooltipSubtitle == null) {
                tooltipSubtitle = tooltipTitle;
              }
              const obj4 = { key: "guild-badge-tooltip", content: tooltipSubtitle };
              open(obj4);
            }
          }
        }
      }
      if (cResult[7] !== id) {
        class I {
          constructor() {
            let tooltipSubtitle;
            let tooltipTitle;
            const obj = GuildRecordUtils;
            const fromGuildProfileResult = obj.fromGuildProfile(profile);
            const obj2 = GuildTraits;
            const guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
            const obj3 = BadgeCategory;
            ({ tooltipTitle, tooltipSubtitle } = getBadgeTooltip(
              obj3.getBadgeCategory(guildTraits),
              guildTraits.visibility,
            ));
            getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
            const tmp5 = null == tooltipTitle && null == tooltipSubtitle;
            if (!tmp5) {
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              if (tooltipSubtitle == null) {
                tooltipSubtitle = tooltipTitle;
              }
              const obj4 = { key: "guild-badge-tooltip", content: tooltipSubtitle };
              open(obj4);
            }
          }
        }
        const items2 = [id];
        cResult[7] = id;
        cResult[8] = tmp19;
        cResult[9] = items2;
        tmp18 = items2;
      } else {
        class I {
          constructor() {
            let tooltipSubtitle;
            let tooltipTitle;
            const obj = GuildRecordUtils;
            const fromGuildProfileResult = obj.fromGuildProfile(profile);
            const obj2 = GuildTraits;
            const guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
            const obj3 = BadgeCategory;
            ({ tooltipTitle, tooltipSubtitle } = getBadgeTooltip(
              obj3.getBadgeCategory(guildTraits),
              guildTraits.visibility,
            ));
            getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
            const tmp5 = null == tooltipTitle && null == tooltipSubtitle;
            if (!tmp5) {
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              if (tooltipSubtitle == null) {
                tooltipSubtitle = tooltipTitle;
              }
              const obj4 = { key: "guild-badge-tooltip", content: tooltipSubtitle };
              open(obj4);
            }
          }
        }
        tmp18 = cResult[9];
      }
      const tmpResult6 = profile(stateFromStores1[11]);
      stateFromStores1 = tmpResult6.useStateFromStores(tmp15, tmp19, tmp18);
      if (cResult[10] === id) {
        class I {
          constructor() {
            let tooltipSubtitle;
            let tooltipTitle;
            const obj = GuildRecordUtils;
            const fromGuildProfileResult = obj.fromGuildProfile(profile);
            const obj2 = GuildTraits;
            const guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
            const obj3 = BadgeCategory;
            ({ tooltipTitle, tooltipSubtitle } = getBadgeTooltip(
              obj3.getBadgeCategory(guildTraits),
              guildTraits.visibility,
            ));
            getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
            const tmp5 = null == tooltipTitle && null == tooltipSubtitle;
            if (!tmp5) {
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              if (tooltipSubtitle == null) {
                tooltipSubtitle = tooltipTitle;
              }
              const obj4 = { key: "guild-badge-tooltip", content: tooltipSubtitle };
              open(obj4);
            }
          }
        }
        if (cResult[13] === guildIconSource) {
          class I {
            constructor() {
              let tooltipSubtitle;
              let tooltipTitle;
              const obj = GuildRecordUtils;
              const fromGuildProfileResult = obj.fromGuildProfile(profile);
              const obj2 = GuildTraits;
              const guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
              const obj3 = BadgeCategory;
              ({ tooltipTitle, tooltipSubtitle } = getBadgeTooltip(
                obj3.getBadgeCategory(guildTraits),
                guildTraits.visibility,
              ));
              getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
              const tmp5 = null == tooltipTitle && null == tooltipSubtitle;
              if (!tmp5) {
                const open = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                if (tooltipSubtitle == null) {
                  tooltipSubtitle = tooltipTitle;
                }
                const obj4 = { key: "guild-badge-tooltip", content: tooltipSubtitle };
                open(obj4);
              }
            }
          }
          if (cResult[16] === tmp4.avatarBackground) {
            class I {
              constructor() {
                let tooltipSubtitle;
                let tooltipTitle;
                const obj = GuildRecordUtils;
                const fromGuildProfileResult = obj.fromGuildProfile(profile);
                const obj2 = GuildTraits;
                const guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
                const obj3 = BadgeCategory;
                ({ tooltipTitle, tooltipSubtitle } = getBadgeTooltip(
                  obj3.getBadgeCategory(guildTraits),
                  guildTraits.visibility,
                ));
                getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
                const tmp5 = null == tooltipTitle && null == tooltipSubtitle;
                if (!tmp5) {
                  const open = ToastActionCreatorsDefault.open;
                  ToastActionCreatorsDefault;
                  if (tooltipSubtitle == null) {
                    tooltipSubtitle = tooltipTitle;
                  }
                  const obj4 = { key: "guild-badge-tooltip", content: tooltipSubtitle };
                  open(obj4);
                }
              }
            }
            if (stateFromStores1) {
              class I {
                constructor() {
                  let tooltipSubtitle;
                  let tooltipTitle;
                  const obj = GuildRecordUtils;
                  const fromGuildProfileResult = obj.fromGuildProfile(profile);
                  const obj2 = GuildTraits;
                  const guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
                  const obj3 = BadgeCategory;
                  ({ tooltipTitle, tooltipSubtitle } = getBadgeTooltip(
                    obj3.getBadgeCategory(guildTraits),
                    guildTraits.visibility,
                  ));
                  getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
                  const tmp5 = null == tooltipTitle && null == tooltipSubtitle;
                  if (!tmp5) {
                    const open = ToastActionCreatorsDefault.open;
                    ToastActionCreatorsDefault;
                    if (tooltipSubtitle == null) {
                      tooltipSubtitle = tooltipTitle;
                    }
                    const obj4 = { key: "guild-badge-tooltip", content: tooltipSubtitle };
                    open(obj4);
                  }
                }
              }
            }
            if (cResult[19] === profile.name) {
              class I {
                constructor() {
                  let tooltipSubtitle;
                  let tooltipTitle;
                  const obj = GuildRecordUtils;
                  const fromGuildProfileResult = obj.fromGuildProfile(profile);
                  const obj2 = GuildTraits;
                  const guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
                  const obj3 = BadgeCategory;
                  ({ tooltipTitle, tooltipSubtitle } = getBadgeTooltip(
                    obj3.getBadgeCategory(guildTraits),
                    guildTraits.visibility,
                  ));
                  getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
                  const tmp5 = null == tooltipTitle && null == tooltipSubtitle;
                  if (!tmp5) {
                    const open = ToastActionCreatorsDefault.open;
                    ToastActionCreatorsDefault;
                    if (tooltipSubtitle == null) {
                      tooltipSubtitle = tooltipTitle;
                    }
                    const obj4 = { key: "guild-badge-tooltip", content: tooltipSubtitle };
                    open(obj4);
                  }
                }
              }
            }
            let obj2 = {
              onPress: undefined,
              style: tmp4.guildName,
              accessibilityRole: "header",
              variant: "heading-xl/semibold",
              color: "mobile-text-heading-primary",
              lineClamp: 1,
              children: profile.name,
            };
            cResult[19] = profile.name;
            cResult[20] = tmp4.guildName;
            cResult[21] = undefined;
            cResult[22] = closure_9(profile(stateFromStores1[21]).Text, obj2);
            const tmp32 = closure_9(profile(stateFromStores1[21]).Text, obj2);
          }
          let obj4 = { style: tmp4.avatarBackground, children: tmp22 };
          cResult[16] = tmp4.avatarBackground;
          cResult[17] = tmp22;
          cResult[18] = closure_9(View, obj4);
          const tmp28 = closure_9(View, obj4);
        }
        const obj5 = {
          icon: guildIconSource,
          size: profile(stateFromStores1[20]).GuildIconSizes.XXLARGE,
          animate: true,
          value: profile.name,
          selected: false,
        };
        const tmp10Result = tmp10(stateFromStores1[20]);
        cResult[13] = guildIconSource;
        cResult[14] = profile.name;
        cResult[15] = closure_9(tmp10Result, obj5);
        const tmp25 = closure_9(tmp10Result, obj5);
      }
      class O {
        constructor() {
          if (stateFromStores1) {
            const _HermesInternal = HermesInternal;
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet("GuildProfileActionSheet:" + id);
            const obj2 = transitionToGuild;
            obj2.transitionToGuild(id);
          }
        }
      }
      cResult[10] = id;
      cResult[11] = stateFromStores1;
      cResult[12] = O;
    }
  : (profile) => {
      let Text4;
      let intl;
      let intl2;
      let intl3;
      let items5;
      let items6;
      let items7;
      let items8;
      let items9;
      let locale;
      let obj11;
      let obj16;
      let obj20;
      let obj22;
      let obj7;
      let tmp15;
      profile = profile.profile;
      let id;
      let stateFromStores1;
      const guildIconSource = profile.guildIconSource;
      const tmp = styles();
      let obj = profile(stateFromStores1[11]);
      const items = [LocaleStore];
      const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
      let tmp5 = profile(stateFromStores1[12]);
      const getEstablishedDate = tmp5.getEstablishedDate;
      let obj2 = id(stateFromStores1[13]);
      const establishedDate = getEstablishedDate(obj2.extractTimestamp(profile.id), stateFromStores);
      let obj3 = profile(stateFromStores1[14]);
      const items1 = [profile];
      let fromGuildProfileResult = obj3.fromGuildProfile(profile);
      const tmp6 = id;
      id = profile.id;
      const callback = react.useCallback(() => {
        let tooltipSubtitle;
        let tooltipTitle;
        const obj = GuildRecordUtils;
        const fromGuildProfileResult = obj.fromGuildProfile(profile);
        const obj2 = GuildTraits;
        const guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
        const obj3 = BadgeCategory;
        ({ tooltipTitle, tooltipSubtitle } = getBadgeTooltip(
          obj3.getBadgeCategory(guildTraits),
          guildTraits.visibility,
        ));
        getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
        const tmp5 = null == tooltipTitle && null == tooltipSubtitle;
        if (!tmp5) {
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          if (tooltipSubtitle == null) {
            tooltipSubtitle = tooltipTitle;
          }
          const obj4 = { key: "guild-badge-tooltip", content: tooltipSubtitle };
          open(obj4);
        }
      }, items1);
      let obj4 = profile(stateFromStores1[11]);
      const items2 = [GuildMemberStore, AuthenticationStore];
      const items3 = [id];
      stateFromStores1 = obj4.useStateFromStores(
        items2,
        () => {
          const member = GuildMemberStore.getMember(id, AuthenticationStore.getId());
          let joinedAt;
          if (member != null) {
            joinedAt = member.joinedAt;
          }
          return null != joinedAt;
        },
        items3,
      );
      const items4 = [id, stateFromStores1];
      const obj5 = { style: tmp.header, children: items5 };
      const obj6 = { style: tmp.avatarBackground, children: closure_9(tmp15, obj7) };
      const callback1 = react.useCallback(() => {
        if (stateFromStores1) {
          const _HermesInternal = HermesInternal;
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet("GuildProfileActionSheet:" + id);
          const obj2 = transitionToGuild;
          obj2.transitionToGuild(id);
        }
      }, items4);
      obj7 = {
        icon: guildIconSource,
        size: profile(stateFromStores1[20]).GuildIconSizes.XXLARGE,
        animate: true,
        value: profile.name,
        selected: false,
      };
      tmp15 = id(stateFromStores1[20]);
      items5 = [closure_9(View, obj6), , ,];
      let tmp16;
      const obj8 = { style: tmp.nameRow, children: items6 };
      const Text = profile(stateFromStores1[21]).Text;
      if (stateFromStores1) {
        tmp16 = callback1;
      }
      items6 = [,];
      const obj9 = {
        onPress: tmp16,
        style: tmp.guildName,
        accessibilityRole: "header",
        variant: "heading-xl/semibold",
        color: "mobile-text-heading-primary",
        lineClamp: 1,
        children: profile.name,
      };
      items6[0] = closure_9(Text, obj9);
      const obj10 = { onPress: callback, children: closure_9(tmp6(stateFromStores1[22]), obj11) };
      const PressableHighlight = tmp2(tmp3[23]).PressableHighlight;
      obj11 = { guild: fromGuildProfileResult, style: tmp.guildIcon };
      items6[1] = closure_9(PressableHighlight, obj10);
      items5[1] = closure_10(View, obj8);
      const obj13 = { style: tmp.memberCount, children: items7 };
      items7 = [,];
      const obj12 = { style: tmp.members, children: items8 };
      const obj14 = { style: tmp.dotOnline };
      items7[0] = closure_9(View, obj14);
      const obj15 = {
        variant: "text-md/medium",
        color: "text-default",
        children: intl.format(profile(stateFromStores1[24]).t["LC+S+m"], obj16),
      };
      const Text2 = tmp2(tmp3[21]).Text;
      intl = tmp2(tmp3[24]).intl;
      obj16 = { membersOnline: profile.onlineCount };
      items7[1] = closure_9(Text2, obj15);
      items8 = [closure_10(View, obj13)];
      const obj17 = { style: tmp.memberCount, children: items9 };
      items9 = [,];
      const obj18 = { style: tmp.dot };
      items9[0] = closure_9(View, obj18);
      const obj19 = {
        variant: "text-md/medium",
        color: "text-default",
        children: intl2.format(profile(stateFromStores1[24]).t.zRl6XR, obj20),
      };
      const Text3 = tmp2(tmp3[21]).Text;
      intl2 = tmp2(tmp3[24]).intl;
      obj20 = { count: profile.memberCount };
      items9[1] = closure_9(Text3, obj19);
      items8[1] = closure_10(View, obj17);
      items5[2] = closure_10(View, obj12);
      const obj21 = { style: tmp.established, children: closure_9(Text4, obj22) };
      obj22 = {
        variant: "text-md/medium",
        color: "text-muted",
        children: intl3.format(profile(stateFromStores1[24]).t.zb2Q56, { createdAtDate: establishedDate }),
      };
      Text4 = tmp2(tmp3[21]).Text;
      intl3 = tmp2(tmp3[24]).intl;
      items5[3] = closure_9(View, obj21);
      return closure_10(View, obj5);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileHeader.tsx");

export default tmp5;
export const useStyles = styles;
