// discord_app/modules/guild_home/native/components/GuildFeedBanner.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import GuildPopoutActionCreators from "../../../guild_profile/GuildPopoutActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildPopoutStore from "../../../guild_profile/GuildPopoutStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const GuildFeedConstants = fn(16504);
const GUILD_FEED_CARD_MARGIN_HORIZONTAL = GuildFeedConstants.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
let closure_9 = GuildFeedConstants.GUILD_FEED_MIN_BANNER_HEIGHT;
const GuildFeatures = fn(1085).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4890);
let obj = {
  avatar: null,
  container: null,
  description: null,
  textContainer: null,
  content: null,
  icon: null,
  headerContainer: null,
  headerBorder: null,
  guildIconContainer: null,
  dotOnline: null,
  publicInfo: null,
  publicIcon: null,
  memberInfo: null,
  title: null,
};
let size = { borderRadius: nativeDefault.radii.lg, height: 64, width: 64 };
obj.avatar = size;
obj.container = { paddingBottom: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.description = { marginTop: 4 };
obj.textContainer = { marginTop: GUILD_FEED_CARD_MARGIN_HORIZONTAL, alignItems: "center", flexDirection: "row" };
obj.content = { width: "100%" };
obj.icon = { marginLeft: 8 };
let obj3 = { paddingBottom: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.headerContainer = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj4 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.headerBorder = {
  borderTopRightRadius: nativeDefault.radii.lg,
  borderTopLeftRadius: nativeDefault.radii.lg,
  marginTop: -16,
};
let obj5 = {
  borderTopRightRadius: nativeDefault.radii.lg,
  borderTopLeftRadius: nativeDefault.radii.lg,
  marginTop: -16,
};
obj.guildIconContainer = {
  padding: 4,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let size1 = {
  width: 4,
  height: 4,
  borderRadius: nativeDefault.radii.xs,
  marginRight: 4,
  backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
};
obj.dotOnline = size1;
obj.publicInfo = { flexDirection: "row", alignItems: "center", marginRight: 12 };
obj.publicIcon = { marginRight: 4, width: 14, height: 14 };
obj.memberInfo = { marginTop: 4, flexDirection: "row", alignItems: "center" };
obj.title = { maxWidth: "90%" };
let closure_13 = createStyles.createStyles(obj);
const __initData = {
  code: "function GuildFeedBannerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const __initData2 = {
  code: "function GuildFeedBannerTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      const cResult = guild(576).c(73);
      guild = guild.guild;
      ({ description, hideMemberCount } = guild);
      const tmp4 = closure_13();
      const obj = guild(576);
      const sharedValue = guild(4612).useSharedValue(0);
      let obj2 = guild(4612);
      const fn = function u() {
        return { opacity: sharedValue.get() };
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 10872399645496;
      fn.__initData = __initData;
      const animatedStyle = guild(4612).useAnimatedStyle(fn);
      const bound = Math.max(0.22 * sharedValue(1484)().height, closure_9);
      const tmp9 = sharedValue(4791)();
      if (cResult[0] !== guild.id) {
        const fn2 = function s() {
          const guildForPopout = GuildPopoutActionCreators.fetchGuildForPopout(guild.id);
        };
        cResult[0] = guild.id;
        cResult[1] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] !== guild) {
        const items = [guild];
        cResult[2] = guild;
        cResult[3] = items;
        let tmp11 = items;
      } else {
        tmp11 = cResult[3];
      }
      const effect = noop.useEffect(tmp10, tmp11);
      if (cResult[4] === guild.banner) {
        if (cResult[5] === guild.features) {
          if (cResult[6] === guild.id) {
            let tmp14 = cResult[7];
          }
          let tmp18 = tmp14;
          if (null != guild) {
            tmp18 = tmp14;
            if (null != guild.homeHeader) {
              if (cResult[8] === guild.homeHeader) {
              }
              ({ id: obj8.id, homeHeader: obj8.homeHeader } = guild);
              const guildHomeHeaderSource = tmp7(1402).getGuildHomeHeaderSource({ id: null, homeHeader: null });
              cResult[8] = guild.homeHeader;
              cResult[9] = guild.id;
              cResult[10] = guildHomeHeaderSource;
              const obj4 = { id: null, homeHeader: null };
              const tmp7Result = tmp7(1402);
            }
          }
          const name = guild.name;
          if (description == null) {
            description = guild.description;
          }
          if (cResult[11] !== guild) {
            const guildBadgeSource = tmp(5977).getGuildBadgeSource(guild);
            cResult[11] = guild;
            cResult[12] = guildBadgeSource;
            let tmp22 = guildBadgeSource;
            const tmpResult = tmp(5977);
          } else {
            tmp22 = cResult[12];
          }
          if (cResult[13] !== sharedValue) {
            const fn3 = function k() {
              const result = sharedValue.set(timing.withTiming(1, timingPresets.timingSlow));
            };
            cResult[13] = sharedValue;
            cResult[14] = fn3;
            let tmp24 = fn3;
          } else {
            tmp24 = cResult[14];
          }
          const _Symbol = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [GuildPopoutStore];
            cResult[15] = items1;
            let tmp25 = items1;
          } else {
            tmp25 = cResult[15];
          }
          if (cResult[16] !== guild.id) {
            const fn4 = function z() {
              return { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
            };
            cResult[16] = guild.id;
            cResult[17] = fn4;
            let tmp27 = fn4;
          } else {
            tmp27 = cResult[17];
          }
          if (cResult[18] !== guild) {
            const items2 = [guild];
            cResult[18] = guild;
            cResult[19] = items2;
            let tmp28 = items2;
          } else {
            tmp28 = cResult[19];
          }
          const discoverableGuild = tmp(504).useStateFromStoresObject(tmp25, tmp27, tmp28).discoverableGuild;
          const tmpResult5 = tmp(504);
          const tmp29 = tmp7(6433)();
          ({ width, height } = tmp7(1484)());
          const tmp30 = tmp7(1484)();
          const _Math = Math;
          const drawerWidth = tmp(11144).useDrawerWidth();
          const bound1 = Math.min(width, height);
          if (tmp29) {
            const _Math2 = Math;
            const _Math3 = Math;
            let bound2 = Math.min(Math.max(width, height) - drawerWidth, bound1);
          } else {
            bound2 = bound1 - 2 * GUILD_FEED_CARD_MARGIN_HORIZONTAL;
          }
          if (cResult[20] === bound) {
            if (cResult[21] === tmp18) {
              if (cResult[22] === tmp24) {
                if (cResult[23] === animatedStyle) {
                  if (cResult[24] === tmp9) {
                    if (cResult[26] === tmp4.headerBorder) {
                      if (cResult[27] === tmp4.headerContainer) {
                        let tmp41 = cResult[28];
                      }
                      if (cResult[29] !== bound2) {
                        const obj5 = { width: bound2, marginTop: -32 };
                        cResult[29] = bound2;
                        cResult[30] = obj5;
                        let tmp42 = obj5;
                      } else {
                        tmp42 = cResult[30];
                      }
                      if (cResult[31] === tmp4.content) {
                        if (cResult[32] === tmp42) {
                          let tmp43 = cResult[33];
                        }
                        if (cResult[34] === guild) {
                          if (cResult[35] === tmp4.avatar) {
                            let tmp44 = cResult[36];
                          }
                          if (cResult[37] === tmp4.guildIconContainer) {
                            if (cResult[38] === tmp44) {
                              let tmp48 = cResult[39];
                            }
                            if (cResult[40] === name) {
                              if (cResult[41] === tmp4.title) {
                                let tmp52 = cResult[42];
                              }
                              if (cResult[43] === tmp22) {
                                if (cResult[44] === tmp4.icon) {
                                  let tmp55 = cResult[45];
                                }
                                if (cResult[46] === tmp4.textContainer) {
                                  if (cResult[47] === tmp52) {
                                    if (cResult[48] === tmp55) {
                                      let tmp58 = cResult[49];
                                    }
                                    if (cResult[50] === description) {
                                      if (cResult[51] === tmp4.description) {
                                        let tmp62 = cResult[52];
                                      }
                                      if (cResult[53] === discoverableGuild) {
                                        if (cResult[54] === hideMemberCount) {
                                          if (cResult[55] === tmp4.dotOnline) {
                                            if (cResult[56] === tmp4.memberInfo) {
                                              if (cResult[57] === tmp4.publicIcon) {
                                                if (cResult[58] === tmp4.publicInfo) {
                                                  let tmp65 = cResult[59];
                                                }
                                                if (cResult[60] === tmp43) {
                                                  if (cResult[61] === tmp48) {
                                                    if (cResult[62] === tmp58) {
                                                      if (cResult[63] === tmp62) {
                                                        if (cResult[64] === tmp65) {
                                                          let tmp74 = cResult[65];
                                                        }
                                                        if (cResult[66] === tmp41) {
                                                          if (cResult[67] === tmp74) {
                                                            let tmp78 = cResult[68];
                                                          }
                                                          if (cResult[69] === tmp4.container) {
                                                            if (cResult[70] === tmp35) {
                                                              if (cResult[71] === tmp78) {
                                                                let tmp82 = cResult[72];
                                                              }
                                                              return tmp82;
                                                            }
                                                          }
                                                          const obj7 = { style: tmp4.container, children: null };
                                                          const items3 = [tmp35, tmp78];
                                                          obj7.children = items3;
                                                          const tmp85 = closure_12(closure_4, obj7);
                                                          cResult[69] = tmp4.container;
                                                          cResult[70] = tmp35;
                                                          cResult[71] = tmp78;
                                                          cResult[72] = tmp85;
                                                          tmp82 = tmp85;
                                                        }
                                                        const obj9 = { style: tmp41, children: tmp74 };
                                                        const tmp81 = closure_11(closure_4, obj9);
                                                        cResult[66] = tmp41;
                                                        cResult[67] = tmp74;
                                                        cResult[68] = tmp81;
                                                        tmp78 = tmp81;
                                                      }
                                                    }
                                                  }
                                                }
                                                const obj10 = { style: tmp43, children: null };
                                                const items4 = [tmp48, tmp58, tmp62, tmp65];
                                                obj10.children = items4;
                                                const tmp77 = closure_12(closure_4, obj10);
                                                cResult[60] = tmp43;
                                                cResult[61] = tmp48;
                                                cResult[62] = tmp58;
                                                cResult[63] = tmp62;
                                                cResult[64] = tmp65;
                                                cResult[65] = tmp77;
                                                tmp74 = tmp77;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let tmp67Result4 = null != discoverableGuild && !hideMemberCount;
                                      if (tmp67Result4) {
                                        const obj11 = { style: tmp4.memberInfo, children: null };
                                        const features2 = discoverableGuild.features;
                                        let tmp67Result = null;
                                        if (features2.has(GuildFeatures.DISCOVERABLE)) {
                                          const obj12 = {
                                            style: tmp4.publicInfo,
                                            accessibilityRole: "button",
                                            onPress() {
                                              const obj2 = {
                                                key: "DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO",
                                                content: null,
                                              };
                                              const intl = guild(1126).intl;
                                              obj2.content = intl.string(guild(1126).t.O8lDI2);
                                              sharedValue(4568).open(obj2);
                                            },
                                            children: null,
                                          };
                                          const obj13 = { style: tmp4.publicIcon, source: tmp7(16507) };
                                          const items5 = [closure_11(tmp(1188).Icon, obj13)];
                                          const obj14 = {
                                            variant: "text-xs/medium",
                                            color: "text-default",
                                            children: null,
                                          };
                                          let intl = tmp(1126).intl;
                                          obj14.children = intl.string(tmp(1126).t["B/vjCu"]);
                                          items5[1] = closure_11(tmp(4886).Text, obj14);
                                          obj12.children = items5;
                                          tmp67Result = closure_12(tmp(5909).PressableOpacity, obj12);
                                        }
                                        const items6 = [tmp67Result];
                                        let tmp67Result3 = null;
                                        if (null != discoverableGuild.presenceCount) {
                                          tmp67Result3 = null;
                                          if (null != discoverableGuild.memberCount) {
                                            const obj15 = { children: null };
                                            const obj16 = { style: tmp4.dotOnline };
                                            const items7 = [closure_11(closure_4, obj16)];
                                            const obj17 = {
                                              variant: "text-xs/medium",
                                              color: "text-default",
                                              children: null,
                                            };
                                            const intl2 = tmp(1126).intl;
                                            ({ presenceCount: obj31.online, memberCount: obj31.offline } =
                                              discoverableGuild);
                                            obj17.children = intl2.format(tmp(1126).t.QCNv6P, {
                                              online: null,
                                              offline: null,
                                            });
                                            items7[1] = closure_11(tmp(4886).Text, obj17);
                                            obj15.children = items7;
                                            tmp67Result3 = closure_12(noop.Fragment, obj15);
                                            const obj18 = { online: null, offline: null };
                                          }
                                        }
                                        items6[1] = tmp67Result3;
                                        obj11.children = items6;
                                        tmp67Result4 = closure_12(closure_4, obj11);
                                      }
                                      cResult[53] = discoverableGuild;
                                      cResult[54] = hideMemberCount;
                                      cResult[55] = tmp4.dotOnline;
                                      cResult[56] = tmp4.memberInfo;
                                      cResult[57] = tmp4.publicIcon;
                                      cResult[58] = tmp4.publicInfo;
                                      cResult[59] = tmp67Result4;
                                      tmp65 = tmp67Result4;
                                    }
                                    let tmp63 = null;
                                    if (null != description) {
                                      const obj19 = {
                                        style: tmp4.description,
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: description,
                                      };
                                      tmp63 = closure_11(tmp(4886).Text, obj19);
                                    }
                                    cResult[50] = description;
                                    cResult[51] = tmp4.description;
                                    cResult[52] = tmp63;
                                    tmp62 = tmp63;
                                  }
                                }
                                const obj20 = { style: tmp4.textContainer, children: null };
                                const items8 = [tmp52, tmp55];
                                obj20.children = items8;
                                const tmp61 = closure_12(closure_4, obj20);
                                cResult[46] = tmp4.textContainer;
                                cResult[47] = tmp52;
                                cResult[48] = tmp55;
                                cResult[49] = tmp61;
                                tmp58 = tmp61;
                              }
                              let tmp56 = null;
                              if (null != tmp22) {
                                const obj21 = { style: tmp4.icon, source: tmp22, disableColor: true };
                                tmp56 = closure_11(tmp(1188).Icon, obj21);
                              }
                              cResult[43] = tmp22;
                              cResult[44] = tmp4.icon;
                              cResult[45] = tmp56;
                              tmp55 = tmp56;
                            }
                            const obj22 = {
                              lineClamp: 1,
                              variant: "heading-xl/extrabold",
                              color: "mobile-text-heading-primary",
                              style: tmp4.title,
                              children: name,
                            };
                            const tmp54 = closure_11(tmp(4886).Text, obj22);
                            cResult[40] = name;
                            cResult[41] = tmp4.title;
                            cResult[42] = tmp54;
                            tmp52 = tmp54;
                          }
                          const obj23 = { style: tmp4.guildIconContainer, children: tmp44 };
                          const tmp51 = closure_11(closure_4, obj23);
                          cResult[37] = tmp4.guildIconContainer;
                          cResult[38] = tmp44;
                          cResult[39] = tmp51;
                          tmp48 = tmp51;
                        }
                        const obj24 = {
                          style: tmp4.avatar,
                          guild,
                          size: tmp(5971).GuildIconSizes.XLARGE,
                          animate: true,
                        };
                        const tmp47 = closure_11(tmp7(5971), obj24);
                        cResult[34] = guild;
                        cResult[35] = tmp4.avatar;
                        cResult[36] = tmp47;
                        tmp44 = tmp47;
                        const tmp7Result4 = tmp7(5971);
                      }
                      const items9 = [tmp4.content, tmp42];
                      cResult[31] = tmp4.content;
                      cResult[32] = tmp42;
                      cResult[33] = items9;
                      tmp43 = items9;
                    }
                    const items10 = [,];
                    ({ headerContainer: arr6[0], headerBorder: arr6[1] } = tmp4);
                    cResult[26] = tmp4.headerBorder;
                    cResult[27] = tmp4.headerContainer;
                    cResult[28] = items10;
                    tmp41 = items10;
                  }
                }
              }
            }
          }
          if (null != tmp18) {
            const obj25 = { style: null, source: null, onLoad: null };
            const size = { height: bound, width: "100%" };
            const items11 = [size, animatedStyle];
            obj25.style = items11;
            obj25.source = tmp18;
            obj25.onLoad = tmp24;
            let obj26 = obj25;
          } else {
            obj26 = { style: null, source: null, onLoad: null };
            const size1 = { height: bound, width: "100%" };
            const items12 = [size1, animatedStyle];
            obj26.style = items12;
            if (tmpResult7.isThemeDark(tmp9)) {
              let tmp7Result5 = tmp7(16505);
            } else {
              tmp7Result5 = tmp7(16506);
            }
            obj26.source = tmp7Result5;
            obj26.onLoad = tmp24;
            tmpResult7 = tmp(4729);
          }
          const tmp36Result = closure_11(closure_5, obj26);
          cResult[20] = bound;
          cResult[21] = tmp18;
          cResult[22] = tmp24;
          cResult[23] = animatedStyle;
          cResult[24] = tmp9;
          cResult[25] = tmp36Result;
          const tmpResult6 = tmp(11144);
        }
      }
      const features = guild.features;
      let hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
      if (hasItem) {
        hasItem = !tmp(1369).isAndroid();
        const tmpResult8 = tmp(1369);
      }
      let guildBannerSource = null;
      if (null != guild.banner) {
        ({ id: obj6.id, banner: obj6.banner } = guild);
        guildBannerSource = tmp7(1402).getGuildBannerSource({ id: null, banner: null }, hasItem);
        const obj27 = { id: null, banner: null };
        const tmp7Result6 = tmp7(1402);
      }
      cResult[4] = guild.banner;
      cResult[5] = guild.features;
      cResult[6] = guild.id;
      cResult[7] = guildBannerSource;
      tmp14 = guildBannerSource;
      const obj3 = guild(4612);
    }
  : (guild) => {
      guild = guild.guild;
      let description = guild.description;
      dependencyMap = undefined;
      let width;
      let height;
      let drawerWidth;
      ({ hideDescription, hideMemberCount } = guild);
      const tmp = closure_13();
      const sharedValue = guild(4612).useSharedValue(0);
      let obj = guild(4612);
      const fn = function x() {
        return { opacity: sharedValue.get() };
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 1869475832859;
      fn.__initData = __initData2;
      const animatedStyle = guild(4612).useAnimatedStyle(fn);
      let bound = Math.max(0.22 * sharedValue(1484)().height, closure_9);
      const items = [guild];
      let obj2 = guild(4612);
      const effect = width.useEffect(() => {
        const guildForPopout = GuildPopoutActionCreators.fetchGuildForPopout(guild.id);
      }, items);
      const items1 = [guild];
      const memo = width.useMemo(() => {
        const features = guild.features;
        let hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
        if (hasItem) {
          hasItem = !PlatformUtils.isAndroid();
        }
        let guildBannerSource = null;
        if (null != guild.banner) {
          ({ id: obj3.id, banner: obj3.banner } = guild);
          guildBannerSource = AvatarUtilsDefault.getGuildBannerSource({ id: null, banner: null }, hasItem);
          const obj7 = { id: null, banner: null };
        }
        let guildHomeHeaderSource = guildBannerSource;
        if (null != guild) {
          guildHomeHeaderSource = guildBannerSource;
          if (null != guild.homeHeader) {
            ({ id: obj5.id, homeHeader: obj5.homeHeader } = guild);
            guildHomeHeaderSource = AvatarUtilsDefault.getGuildHomeHeaderSource({ id: null, homeHeader: null });
            const obj8 = { id: null, homeHeader: null };
          }
        }
        return guildHomeHeaderSource;
      }, items1);
      if (description == null) {
        description = guild.description;
      }
      function handleLoad() {
        const result = sharedValue.set(timing.withTiming(1, timingPresets.timingSlow));
      }
      const tmp8 = sharedValue(4791)();
      const guildBadgeSource = guild(5977).getGuildBadgeSource(guild);
      const tmp2Result = guild(5977);
      const items2 = [GuildPopoutStore];
      const items3 = [guild];
      const discoverableGuild = guild(504).useStateFromStoresObject(
        items2,
        () => ({ discoverableGuild: GuildPopoutStore.getGuild(guild.id) }),
        items3,
      ).discoverableGuild;
      const tmp12 = sharedValue(6433)();
      dependencyMap = tmp12;
      const size = tmp6(1484)();
      width = size.width;
      height = size.height;
      const tmp2Result4 = guild(504);
      drawerWidth = guild(11144).useDrawerWidth();
      const items4 = [width, height, tmp12, drawerWidth];
      let obj4 = { style: tmp.container, children: null };
      const memo1 = obj3.useMemo(() => {
        const bound = Math.min(width, height);
        if (closure_2) {
          const _Math = Math;
          const _Math2 = Math;
          return Math.min(Math.max(width, height) - drawerWidth, bound);
        } else {
          return bound - 2 * GUILD_FEED_CARD_MARGIN_HORIZONTAL;
        }
      }, items4);
      if (null != memo) {
        const obj5 = { style: null, source: null, onLoad: null };
        const size1 = { height: bound, width: "100%" };
        const items5 = [size1, animatedStyle];
        obj5.style = items5;
        obj5.source = memo;
        obj5.onLoad = handleLoad;
        let obj6 = obj5;
      } else {
        obj6 = { style: null, source: null, onLoad: null };
        const size2 = { height: bound, width: "100%" };
        const items6 = [size2, animatedStyle];
        obj6.style = items6;
        if (tmp2Result6.isThemeDark(tmp8)) {
          let tmp6Result = tmp6(16505);
        } else {
          tmp6Result = tmp6(16506);
        }
        obj6.source = tmp6Result;
        obj6.onLoad = handleLoad;
        tmp2Result6 = tmp2(4729);
      }
      const items7 = [closure_11(drawerWidth, obj6)];
      let obj7 = { style: null, children: null };
      const items8 = [,];
      ({ headerContainer: arr9[0], headerBorder: arr9[1] } = tmp);
      obj7.style = items8;
      let obj8 = { style: null, children: null };
      const items9 = [tmp.content, { width: memo1, marginTop: -32 }];
      obj8.style = items9;
      const obj9 = { style: tmp.guildIconContainer, children: null };
      const obj10 = { style: tmp.avatar, guild, size: null, animate: true };
      const tmp2Result5 = guild(11144);
      obj10.size = guild(5971).GuildIconSizes.XLARGE;
      obj9.children = closure_11(sharedValue(5971), obj10);
      const items10 = [closure_11(height, obj9), , ,];
      const obj11 = { style: tmp.textContainer, children: null };
      const items11 = [
        closure_11(guild(4886).Text, {
          lineClamp: 1,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          style: tmp.title,
          children: guild.name,
        }),
      ];
      let tmp17Result = null;
      if (null != guildBadgeSource) {
        const obj13 = { style: tmp.icon, source: guildBadgeSource, disableColor: true };
        tmp17Result = closure_11(tmp2(1188).Icon, obj13);
      }
      items11[1] = tmp17Result;
      obj11.children = items11;
      items10[1] = closure_12(height, obj11);
      let tmp17Result2 = null;
      if (null != description) {
        const obj14 = {
          style: tmp.description,
          variant: "text-sm/medium",
          color: "text-default",
          children: description,
        };
        tmp17Result2 = closure_11(tmp2(4886).Text, obj14);
      }
      items10[2] = tmp17Result2;
      let tmp15Result4 = null != discoverableGuild && !hideMemberCount;
      if (tmp15Result4) {
        const obj15 = { style: tmp.memberInfo, children: null };
        let features = discoverableGuild.features;
        let tmp15Result = null;
        if (features.has(GuildFeatures.DISCOVERABLE)) {
          const obj16 = {
            style: tmp.publicInfo,
            accessibilityRole: "button",
            onPress() {
              const obj2 = { key: "DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO", content: null };
              const intl = guild(1126).intl;
              obj2.content = intl.string(guild(1126).t.O8lDI2);
              sharedValue(4568).open(obj2);
            },
            children: null,
          };
          const obj17 = { style: tmp.publicIcon, source: tmp6(16507) };
          const items12 = [closure_11(tmp2(1188).Icon, obj17)];
          const obj18 = { variant: "text-xs/medium", color: "text-default", children: null };
          let intl = tmp2(1126).intl;
          obj18.children = intl.string(tmp2(1126).t["B/vjCu"]);
          items12[1] = closure_11(tmp2(4886).Text, obj18);
          obj16.children = items12;
          tmp15Result = closure_12(tmp2(5909).PressableOpacity, obj16);
        }
        const items13 = [tmp15Result];
        let tmp15Result3 = null;
        if (null != discoverableGuild.presenceCount) {
          tmp15Result3 = null;
          if (null != discoverableGuild.memberCount) {
            const obj19 = { children: null };
            const obj20 = { style: tmp.dotOnline };
            const items14 = [closure_11(tmp16, obj20)];
            const obj21 = { variant: "text-xs/medium", color: "text-default", children: null };
            const intl2 = tmp2(1126).intl;
            ({ presenceCount: obj28.online, memberCount: obj28.offline } = discoverableGuild);
            obj21.children = intl2.format(tmp2(1126).t.QCNv6P, { online: null, offline: null });
            items14[1] = closure_11(tmp2(4886).Text, obj21);
            obj19.children = items14;
            tmp15Result3 = closure_12(obj3.Fragment, obj19);
            const obj22 = { online: null, offline: null };
          }
        }
        items13[1] = tmp15Result3;
        obj15.children = items13;
        tmp15Result4 = closure_12(tmp16, obj15);
      }
      items10[3] = tmp15Result4;
      obj8.children = items10;
      obj7.children = closure_12(height, obj8);
      items7[1] = closure_11(height, obj7);
      obj4.children = items7;
      return closure_12(height, obj4);
    };
ReactCompilerGating = fn(558);
let obj6 = {
  padding: 4,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_home/native/components/GuildFeedBanner.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guildId) => {
        const cResult = guildId(576).c(8);
        guildId = guildId.guildId;
        ({ description, hideDescription, hideMemberCount } = guildId);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== guildId) {
          const fn = function o() {
            return GuildStore.getGuild(guildId);
          };
          cResult[1] = guildId;
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const obj = guildId(576);
        const stateFromStores = guildId(504).useStateFromStores(first, tmp6);
        if (null == stateFromStores) {
          return null;
        } else {
          if (cResult[3] === description) {
            if (cResult[4] === stateFromStores) {
              if (cResult[5] === hideDescription) {
              }
            }
          }
          const obj2 = { guild: stateFromStores, description, hideDescription, hideMemberCount };
          const tmp11 = closure_11(closure_16, obj2);
          cResult[3] = description;
          cResult[4] = stateFromStores;
          cResult[5] = hideDescription;
          cResult[6] = hideMemberCount;
          cResult[7] = tmp11;
        }
        const tmpResult = guildId(504);
      }
    : (guildId) => {
        guildId = guildId.guildId;
        ({ description, hideDescription, hideMemberCount } = guildId);
        const items = [GuildStore];
        const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
        let tmp2 = null;
        if (null != stateFromStores) {
          const obj2 = { guild: stateFromStores, description, hideDescription, hideMemberCount };
          tmp2 = closure_11(closure_16, obj2);
        }
        return tmp2;
      },
);
