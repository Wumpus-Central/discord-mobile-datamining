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
const View = fn(17).View;
const GuildFeedConstants = fn(16995);
const GUILD_FEED_CARD_MARGIN_HORIZONTAL = GuildFeedConstants.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
let closure_8 = GuildFeedConstants.GUILD_FEED_MIN_BANNER_HEIGHT;
const GuildFeatures = fn(1085).GuildFeatures;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5092);
let obj = {
  avatar: null,
  container: null,
  bannerImage: null,
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
obj.bannerImage = { width: "100%", height: "100%" };
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
const size1 = {
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
let closure_12 = createStyles.createStyles(obj);
const __initData = {
  code: "function GuildFeedBannerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const __initData2 = {
  code: "function GuildFeedBannerTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildFeedBanner(guild) {
      const cResult = guild(576).c(82);
      guild = guild.guild;
      ({ description, hideMemberCount } = guild);
      const tmp4 = closure_12();
      const obj = guild(576);
      const sharedValue = guild(4850).useSharedValue(0);
      let obj2 = guild(4850);
      const fn = function u() {
        return { opacity: sharedValue.get() };
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 10872399645496;
      fn.__initData = __initData;
      const animatedStyle = guild(4850).useAnimatedStyle(fn);
      const bound = Math.max(0.22 * sharedValue(1497)().height, closure_8);
      const tmp9 = sharedValue(5031)();
      if (cResult[0] !== guild.id) {
        const fn2 = function b() {
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
              const guildHomeHeaderSource = tmp7(1415).getGuildHomeHeaderSource({ id: null, homeHeader: null });
              cResult[8] = guild.homeHeader;
              cResult[9] = guild.id;
              cResult[10] = guildHomeHeaderSource;
              const obj4 = { id: null, homeHeader: null };
              const tmp7Result = tmp7(1415);
            }
          }
          const name = guild.name;
          if (description == null) {
            description = guild.description;
          }
          if (cResult[11] !== guild) {
            const guildBadgeSource = tmp(6162).getGuildBadgeSource(guild);
            cResult[11] = guild;
            cResult[12] = guildBadgeSource;
            let tmp22 = guildBadgeSource;
            const tmpResult = tmp(6162);
          } else {
            tmp22 = cResult[12];
          }
          if (cResult[13] !== sharedValue) {
            function handleLoad() {
              const result = sharedValue.set(timing.withTiming(1, timingPresets.timingSlow));
            }
            cResult[13] = sharedValue;
            cResult[14] = handleLoad;
            let tmp24 = handleLoad;
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
            const fn3 = function j() {
              return { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
            };
            cResult[16] = guild.id;
            cResult[17] = fn3;
            let tmp27 = fn3;
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
          const tmp29 = tmp7(6626)();
          ({ width, height } = tmp7(1497)());
          const tmp30 = tmp7(1497)();
          const _Math = Math;
          const drawerWidth = tmp(10679).useDrawerWidth();
          const bound1 = Math.min(width, height);
          if (tmp29) {
            const _Math2 = Math;
            const _Math3 = Math;
            let bound2 = Math.min(Math.max(width, height) - drawerWidth, bound1);
          } else {
            bound2 = bound1 - 2 * GUILD_FEED_CARD_MARGIN_HORIZONTAL;
          }
          if (cResult[20] !== bound) {
            const size = { height: bound, width: "100%" };
            cResult[20] = bound;
            cResult[21] = size;
            let tmp35 = size;
          } else {
            tmp35 = cResult[21];
          }
          if (cResult[22] === animatedStyle) {
            if (cResult[23] === tmp35) {
              let tmp36 = cResult[24];
            }
            if (cResult[25] === tmp18) {
              if (cResult[26] === tmp9) {
                let tmp37 = cResult[27];
              }
              if (cResult[28] === tmp24) {
                if (cResult[29] === tmp4.bannerImage) {
                  if (cResult[30] === tmp37) {
                    let tmp41 = cResult[31];
                  }
                  if (cResult[32] === tmp36) {
                    if (cResult[33] === tmp41) {
                      let tmp44 = cResult[34];
                    }
                    if (cResult[35] === tmp4.headerBorder) {
                      if (cResult[36] === tmp4.headerContainer) {
                        let tmp47 = cResult[37];
                      }
                      if (cResult[38] !== bound2) {
                        const obj5 = { width: bound2, marginTop: -32 };
                        cResult[38] = bound2;
                        cResult[39] = obj5;
                        let tmp48 = obj5;
                      } else {
                        tmp48 = cResult[39];
                      }
                      if (cResult[40] === tmp4.content) {
                        if (cResult[41] === tmp48) {
                          let tmp49 = cResult[42];
                        }
                        if (cResult[43] === guild) {
                          if (cResult[44] === tmp4.avatar) {
                            let tmp50 = cResult[45];
                          }
                          if (cResult[46] === tmp4.guildIconContainer) {
                            if (cResult[47] === tmp50) {
                              let tmp54 = cResult[48];
                            }
                            if (cResult[49] === name) {
                              if (cResult[50] === tmp4.title) {
                                let tmp58 = cResult[51];
                              }
                              if (cResult[52] === tmp22) {
                                if (cResult[53] === tmp4.icon) {
                                  let tmp61 = cResult[54];
                                }
                                if (cResult[55] === tmp4.textContainer) {
                                  if (cResult[56] === tmp58) {
                                    if (cResult[57] === tmp61) {
                                      let tmp64 = cResult[58];
                                    }
                                    if (cResult[59] === description) {
                                      if (cResult[60] === tmp4.description) {
                                        let tmp68 = cResult[61];
                                      }
                                      if (cResult[62] === discoverableGuild) {
                                        if (cResult[63] === hideMemberCount) {
                                          if (cResult[64] === tmp4.dotOnline) {
                                            if (cResult[65] === tmp4.memberInfo) {
                                              if (cResult[66] === tmp4.publicIcon) {
                                                if (cResult[67] === tmp4.publicInfo) {
                                                  let tmp71 = cResult[68];
                                                }
                                                if (cResult[69] === tmp49) {
                                                  if (cResult[70] === tmp54) {
                                                    if (cResult[71] === tmp64) {
                                                      if (cResult[72] === tmp68) {
                                                        if (cResult[73] === tmp71) {
                                                          let tmp80 = cResult[74];
                                                        }
                                                        if (cResult[75] === tmp47) {
                                                          if (cResult[76] === tmp80) {
                                                            let tmp84 = cResult[77];
                                                          }
                                                          if (cResult[78] === tmp4.container) {
                                                            if (cResult[79] === tmp44) {
                                                              if (cResult[80] === tmp84) {
                                                                let tmp88 = cResult[81];
                                                              }
                                                              return tmp88;
                                                            }
                                                          }
                                                          const obj7 = { style: tmp4.container, children: null };
                                                          const items3 = [tmp44, tmp84];
                                                          obj7.children = items3;
                                                          const tmp91 = closure_11(View, obj7);
                                                          cResult[78] = tmp4.container;
                                                          cResult[79] = tmp44;
                                                          cResult[80] = tmp84;
                                                          cResult[81] = tmp91;
                                                          tmp88 = tmp91;
                                                        }
                                                        const obj9 = { style: tmp47, children: tmp80 };
                                                        const tmp87 = closure_10(View, obj9);
                                                        cResult[75] = tmp47;
                                                        cResult[76] = tmp80;
                                                        cResult[77] = tmp87;
                                                        tmp84 = tmp87;
                                                      }
                                                    }
                                                  }
                                                }
                                                const obj10 = { style: tmp49, children: null };
                                                const items4 = [tmp54, tmp64, tmp68, tmp71];
                                                obj10.children = items4;
                                                const tmp83 = closure_11(View, obj10);
                                                cResult[69] = tmp49;
                                                cResult[70] = tmp54;
                                                cResult[71] = tmp64;
                                                cResult[72] = tmp68;
                                                cResult[73] = tmp71;
                                                cResult[74] = tmp83;
                                                tmp80 = tmp83;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let tmp73Result4 = null != discoverableGuild && !hideMemberCount;
                                      if (tmp73Result4) {
                                        const obj11 = { style: tmp4.memberInfo, children: null };
                                        const features2 = discoverableGuild.features;
                                        let tmp73Result = null;
                                        if (features2.has(GuildFeatures.DISCOVERABLE)) {
                                          const obj12 = {
                                            style: tmp4.publicInfo,
                                            accessibilityRole: "button",
                                            onPress() {
                                              const obj2 = { text: null };
                                              const intl = guild(1126).intl;
                                              obj2.text = intl.string(guild(1126).t.O8lDI2);
                                              sharedValue(4809).open("DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO", obj2);
                                            },
                                            children: null,
                                          };
                                          const obj13 = { style: tmp4.publicIcon, source: tmp7(16998) };
                                          const items5 = [closure_10(tmp(1200).Icon, obj13)];
                                          const obj14 = {
                                            variant: "text-xs/medium",
                                            color: "text-default",
                                            children: null,
                                          };
                                          let intl = tmp(1126).intl;
                                          obj14.children = intl.string(tmp(1126).t["B/vjCu"]);
                                          items5[1] = closure_10(tmp(5088).Text, obj14);
                                          obj12.children = items5;
                                          tmp73Result = closure_11(tmp(6184).PressableOpacity, obj12);
                                        }
                                        const items6 = [tmp73Result];
                                        let tmp73Result3 = null;
                                        if (null != discoverableGuild.presenceCount) {
                                          tmp73Result3 = null;
                                          if (null != discoverableGuild.memberCount) {
                                            const obj15 = { children: null };
                                            const obj16 = { style: tmp4.dotOnline };
                                            const items7 = [closure_10(View, obj16)];
                                            const obj17 = {
                                              variant: "text-xs/medium",
                                              color: "text-default",
                                              children: null,
                                            };
                                            const intl2 = tmp(1126).intl;
                                            ({ presenceCount: obj30.online, memberCount: obj30.offline } =
                                              discoverableGuild);
                                            obj17.children = intl2.format(tmp(1126).t.QCNv6P, {
                                              online: null,
                                              offline: null,
                                            });
                                            items7[1] = closure_10(tmp(5088).Text, obj17);
                                            obj15.children = items7;
                                            tmp73Result3 = closure_11(noop.Fragment, obj15);
                                            const obj18 = { online: null, offline: null };
                                          }
                                        }
                                        items6[1] = tmp73Result3;
                                        obj11.children = items6;
                                        tmp73Result4 = closure_11(View, obj11);
                                      }
                                      cResult[62] = discoverableGuild;
                                      cResult[63] = hideMemberCount;
                                      cResult[64] = tmp4.dotOnline;
                                      cResult[65] = tmp4.memberInfo;
                                      cResult[66] = tmp4.publicIcon;
                                      cResult[67] = tmp4.publicInfo;
                                      cResult[68] = tmp73Result4;
                                      tmp71 = tmp73Result4;
                                    }
                                    let tmp69 = null;
                                    if (null != description) {
                                      const obj19 = {
                                        style: tmp4.description,
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: description,
                                      };
                                      tmp69 = closure_10(tmp(5088).Text, obj19);
                                    }
                                    cResult[59] = description;
                                    cResult[60] = tmp4.description;
                                    cResult[61] = tmp69;
                                    tmp68 = tmp69;
                                  }
                                }
                                const obj20 = { style: tmp4.textContainer, children: null };
                                const items8 = [tmp58, tmp61];
                                obj20.children = items8;
                                const tmp67 = closure_11(View, obj20);
                                cResult[55] = tmp4.textContainer;
                                cResult[56] = tmp58;
                                cResult[57] = tmp61;
                                cResult[58] = tmp67;
                                tmp64 = tmp67;
                              }
                              let tmp62 = null;
                              if (null != tmp22) {
                                const obj21 = { style: tmp4.icon, source: tmp22, disableColor: true };
                                tmp62 = closure_10(tmp(1200).Icon, obj21);
                              }
                              cResult[52] = tmp22;
                              cResult[53] = tmp4.icon;
                              cResult[54] = tmp62;
                              tmp61 = tmp62;
                            }
                            const obj22 = {
                              lineClamp: 1,
                              variant: "heading-xl/extrabold",
                              color: "mobile-text-heading-primary",
                              style: tmp4.title,
                              children: name,
                            };
                            const tmp60 = closure_10(tmp(5088).Text, obj22);
                            cResult[49] = name;
                            cResult[50] = tmp4.title;
                            cResult[51] = tmp60;
                            tmp58 = tmp60;
                          }
                          const obj23 = { style: tmp4.guildIconContainer, children: tmp50 };
                          const tmp57 = closure_10(View, obj23);
                          cResult[46] = tmp4.guildIconContainer;
                          cResult[47] = tmp50;
                          cResult[48] = tmp57;
                          tmp54 = tmp57;
                        }
                        const obj24 = {
                          style: tmp4.avatar,
                          guild,
                          size: tmp(6158).GuildIconSizes.XLARGE,
                          animate: true,
                        };
                        const tmp53 = closure_10(tmp7(6158), obj24);
                        cResult[43] = guild;
                        cResult[44] = tmp4.avatar;
                        cResult[45] = tmp53;
                        tmp50 = tmp53;
                        const tmp7Result4 = tmp7(6158);
                      }
                      const items9 = [tmp4.content, tmp48];
                      cResult[40] = tmp4.content;
                      cResult[41] = tmp48;
                      cResult[42] = items9;
                      tmp49 = items9;
                    }
                    const items10 = [,];
                    ({ headerContainer: arr5[0], headerBorder: arr5[1] } = tmp4);
                    cResult[35] = tmp4.headerBorder;
                    cResult[36] = tmp4.headerContainer;
                    cResult[37] = items10;
                    tmp47 = items10;
                  }
                  const obj25 = { style: tmp36, children: tmp41 };
                  const tmp46 = closure_10(tmp7(4850).View, obj25);
                  cResult[32] = tmp36;
                  cResult[33] = tmp41;
                  cResult[34] = tmp46;
                  tmp44 = tmp46;
                }
              }
              const obj26 = { style: tmp4.bannerImage, source: tmp37, onLoad: tmp24 };
              const tmp43 = closure_10(tmp7(6156), obj26);
              cResult[28] = tmp24;
              cResult[29] = tmp4.bannerImage;
              cResult[30] = tmp37;
              cResult[31] = tmp43;
              tmp41 = tmp43;
            }
            if (tmp18 != null) {
              cResult[25] = tmp18;
              cResult[26] = tmp9;
              cResult[27] = tmp18;
              tmp37 = tmp18;
            } else {
              if (tmpResult7.isThemeDark(tmp9)) {
                let tmp7Result5 = tmp7(16996);
              } else {
                tmp7Result5 = tmp7(16997);
              }
              tmpResult7 = tmp(4969);
            }
          }
          const items11 = [tmp35, animatedStyle];
          cResult[22] = animatedStyle;
          cResult[23] = tmp35;
          cResult[24] = items11;
          tmp36 = items11;
          const tmpResult6 = tmp(10679);
        }
      }
      const features = guild.features;
      let hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
      if (hasItem) {
        hasItem = !tmp(1382).isAndroid();
        const tmpResult8 = tmp(1382);
      }
      let guildBannerSource = null;
      if (null != guild.banner) {
        ({ id: obj6.id, banner: obj6.banner } = guild);
        guildBannerSource = tmp7(1415).getGuildBannerSource({ id: null, banner: null }, hasItem);
        const obj27 = { id: null, banner: null };
        const tmp7Result6 = tmp7(1415);
      }
      cResult[4] = guild.banner;
      cResult[5] = guild.features;
      cResult[6] = guild.id;
      cResult[7] = guildBannerSource;
      tmp14 = guildBannerSource;
      const obj3 = guild(4850);
    }
  : function GuildFeedBanner(guild) {
      guild = guild.guild;
      let description = guild.description;
      dependencyMap = undefined;
      let width;
      let height;
      let drawerWidth;
      ({ hideDescription, hideMemberCount } = guild);
      const tmp = closure_12();
      const sharedValue = guild(4850).useSharedValue(0);
      let obj = guild(4850);
      const fn = function y() {
        return { opacity: sharedValue.get() };
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 1869475832859;
      fn.__initData = __initData2;
      const animatedStyle = guild(4850).useAnimatedStyle(fn);
      let bound = Math.max(0.22 * sharedValue(1497)().height, closure_8);
      const items = [guild];
      let obj2 = guild(4850);
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
      const tmp8 = sharedValue(5031)();
      const guildBadgeSource = guild(6162).getGuildBadgeSource(guild);
      const tmp2Result = guild(6162);
      const items2 = [drawerWidth];
      const items3 = [guild];
      const discoverableGuild = guild(504).useStateFromStoresObject(
        items2,
        () => ({ discoverableGuild: GuildPopoutStore.getGuild(guild.id) }),
        items3,
      ).discoverableGuild;
      const tmp12 = sharedValue(6626)();
      dependencyMap = tmp12;
      const size = tmp6(1497)();
      width = size.width;
      height = size.height;
      const tmp2Result4 = guild(504);
      drawerWidth = guild(10679).useDrawerWidth();
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
      const obj5 = { style: null, children: null };
      const items5 = [{ height: bound, width: "100%" }, animatedStyle];
      obj5.style = items5;
      const obj6 = { style: tmp.bannerImage, source: null, onLoad: null };
      if (memo != null) {
        obj6.source = memo;
        obj6.onLoad = function handleLoad() {
          const result = sharedValue.set(timing.withTiming(1, timingPresets.timingSlow));
        };
        obj5.children = closure_10(tmp18, obj6);
        const items6 = [closure_10(tmp6(4850).View, obj5)];
        let obj7 = { style: null, children: null };
        const items7 = [,];
        ({ headerContainer: arr8[0], headerBorder: arr8[1] } = tmp);
        obj7.style = items7;
        let obj8 = { style: null, children: null };
        const items8 = [tmp.content];
        const obj9 = { width: memo1, marginTop: -32 };
        items8[1] = obj9;
        obj8.style = items8;
        const obj10 = { style: tmp.guildIconContainer, children: null };
        const obj11 = { style: tmp.avatar, guild, size: tmp2(6158).GuildIconSizes.XLARGE, animate: true };
        obj10.children = closure_10(tmp6(6158), obj11);
        const items9 = [closure_10(tmp16, obj10), , ,];
        const obj12 = { style: tmp.textContainer, children: null };
        const obj13 = {
          lineClamp: 1,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          style: tmp.title,
          children: guild.name,
        };
        const items10 = [closure_10(tmp2(5088).Text, obj13)];
        let tmp17Result = null;
        if (null != guildBadgeSource) {
          const obj14 = { style: tmp.icon, source: guildBadgeSource, disableColor: true };
          tmp17Result = closure_10(tmp2(1200).Icon, obj14);
        }
        items10[1] = tmp17Result;
        obj12.children = items10;
        items9[1] = closure_11(tmp16, obj12);
        let tmp17Result2 = null;
        if (null != description) {
          const obj15 = {
            style: tmp.description,
            variant: "text-sm/medium",
            color: "text-default",
            children: description,
          };
          tmp17Result2 = closure_10(tmp2(5088).Text, obj15);
        }
        items9[2] = tmp17Result2;
        let tmp15Result4 = null != discoverableGuild && !hideMemberCount;
        if (tmp15Result4) {
          const obj16 = { style: tmp.memberInfo, children: null };
          let features = discoverableGuild.features;
          let tmp15Result = null;
          if (features.has(GuildFeatures.DISCOVERABLE)) {
            const obj17 = {
              style: tmp.publicInfo,
              accessibilityRole: "button",
              onPress() {
                const obj2 = { text: null };
                const intl = guild(1126).intl;
                obj2.text = intl.string(guild(1126).t.O8lDI2);
                sharedValue(4809).open("DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO", obj2);
              },
              children: null,
            };
            const obj18 = { style: tmp.publicIcon, source: tmp6(16998) };
            const items11 = [closure_10(tmp2(1200).Icon, obj18)];
            const obj19 = { variant: "text-xs/medium", color: "text-default", children: null };
            let intl = tmp2(1126).intl;
            obj19.children = intl.string(tmp2(1126).t["B/vjCu"]);
            items11[1] = closure_10(tmp2(5088).Text, obj19);
            obj17.children = items11;
            tmp15Result = closure_11(tmp2(6184).PressableOpacity, obj17);
          }
          const items12 = [tmp15Result];
          let tmp15Result3 = null;
          if (null != discoverableGuild.presenceCount) {
            tmp15Result3 = null;
            if (null != discoverableGuild.memberCount) {
              const obj20 = { children: null };
              const obj21 = { style: tmp.dotOnline };
              const items13 = [closure_10(tmp16, obj21)];
              const obj22 = { variant: "text-xs/medium", color: "text-default", children: null };
              const intl2 = tmp2(1126).intl;
              ({ presenceCount: obj27.online, memberCount: obj27.offline } = discoverableGuild);
              obj22.children = intl2.format(tmp2(1126).t.QCNv6P, { online: null, offline: null });
              items13[1] = closure_10(tmp2(5088).Text, obj22);
              obj20.children = items13;
              tmp15Result3 = closure_11(obj3.Fragment, obj20);
              const obj23 = { online: null, offline: null };
            }
          }
          items12[1] = tmp15Result3;
          obj16.children = items12;
          tmp15Result4 = closure_11(tmp16, obj16);
        }
        items9[3] = tmp15Result4;
        obj8.children = items9;
        obj7.children = closure_11(tmp16, obj8);
        items6[1] = closure_10(tmp16, obj7);
        obj4.children = items6;
        return closure_11(tmp16, obj4);
      } else {
        if (tmp2Result6.isThemeDark(tmp8)) {
          let tmp6Result2 = tmp6(16996);
        } else {
          tmp6Result2 = tmp6(16997);
        }
        tmp2Result6 = tmp2(4969);
      }
      const tmp2Result5 = guild(10679);
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
    ? function GuildFeedBannerContainer(guildId) {
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
          const tmp11 = closure_10(closure_15, obj2);
          cResult[3] = description;
          cResult[4] = stateFromStores;
          cResult[5] = hideDescription;
          cResult[6] = hideMemberCount;
          cResult[7] = tmp11;
        }
        const tmpResult = guildId(504);
      }
    : function GuildFeedBannerContainer(guildId) {
        guildId = guildId.guildId;
        ({ description, hideDescription, hideMemberCount } = guildId);
        const items = [GuildStore];
        const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
        let tmp2 = null;
        if (null != stateFromStores) {
          const obj2 = { guild: stateFromStores, description, hideDescription, hideMemberCount };
          tmp2 = closure_10(closure_15, obj2);
        }
        return tmp2;
      },
);
