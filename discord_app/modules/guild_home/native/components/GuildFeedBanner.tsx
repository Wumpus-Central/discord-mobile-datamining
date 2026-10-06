// discord_app/modules/guild_home/native/components/GuildFeedBanner.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import GuildPopoutActionCreators from "../../../guild_profile/GuildPopoutActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import GuildPopoutStore from "../../../guild_profile/GuildPopoutStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildFeedConstants from "../GuildFeedConstants.tsx";
import Fragment_mod from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, guild, guildId, set;

let closure_12;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
let unpackModuleId;
({ View: closure_4, Image: hasOwnProperty } = react_native);
const GUILD_FEED_CARD_MARGIN_HORIZONTAL = GuildFeedConstants.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
const GUILD_FEED_MIN_BANNER_HEIGHT = GuildFeedConstants.GUILD_FEED_MIN_BANNER_HEIGHT;
const GuildFeatures = Constants.GuildFeatures;
let Fragment = Fragment_mod;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  avatar: size,
  container: obj2,
  description: { marginTop: 4 },
  textContainer: { marginTop: GUILD_FEED_CARD_MARGIN_HORIZONTAL, alignItems: "center", flexDirection: "row" },
  content: { width: "100%" },
  icon: { marginLeft: 8 },
  headerContainer: obj3,
  headerBorder: obj4,
  guildIconContainer: obj5,
  dotOnline: size1,
  publicInfo: { flexDirection: "row", alignItems: "center", marginRight: 12 },
  publicIcon: { marginRight: 4, width: 14, height: 14 },
  memberInfo: { marginTop: 4, flexDirection: "row", alignItems: "center" },
  title: { maxWidth: "90%" },
};
size = { borderRadius: nativeDefault.radii.lg, height: 64, width: 64 };
createStyles = createStyles.createStyles;
obj2 = { paddingBottom: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj3 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { borderTopRightRadius: nativeDefault.radii.lg, borderTopLeftRadius: nativeDefault.radii.lg, marginTop: -16 };
obj5 = {
  padding: 4,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
size1 = {
  width: 4,
  height: 4,
  borderRadius: nativeDefault.radii.xs,
  marginRight: 4,
  backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
};
let closure_13 = createStyles(obj);
const __initData = {
  code: "function GuildFeedBannerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const __initData2 = {
  code: "function GuildFeedBannerTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let description;
      let height;
      let hideMemberCount;
      let intl;
      let intl2;
      let items11;
      let items12;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let obj18;
      let tmp10;
      let tmp11;
      let tmp7Result5;
      let width;
      const tmp = guild;
      let obj = guild(576);
      const cResult = obj.c(73);
      guild = guild.guild;
      ({ description, hideMemberCount } = guild);
      const hideDescription = guild.hideDescription;
      const tmp4 = closure_13();
      const obj2 = guild(4618);
      const sharedValue = obj2.useSharedValue(0);
      const fn = function u() {
        const obj = { opacity: sharedValue.get() };
        return obj;
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 10872399645496;
      fn.__initData = __initData;
      const obj3 = guild(4618);
      const animatedStyle = obj3.useAnimatedStyle(fn);
      const bound = Math.max(0.22 * sharedValue(1484)().height, GUILD_FEED_MIN_BANNER_HEIGHT);
      const tmp9 = sharedValue(4797)();
      if (cResult[0] !== guild.id) {
        const fn2 = function s() {
          const obj = GuildPopoutActionCreators;
          const guildForPopout = obj.fetchGuildForPopout(guild.id);
        };
        cResult[0] = guild.id;
        cResult[1] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] !== guild) {
        const items = [guild];
        cResult[2] = guild;
        cResult[3] = items;
        tmp11 = items;
      } else {
        tmp11 = cResult[3];
      }
      const effect = react.useEffect(tmp10, tmp11);
      if (cResult[4] === guild.banner) {
        if (cResult[5] === guild.features) {
          let tmp14;
          let tmp21;
          let tmp23;
          let tmp24;
          let tmp26;
          let tmp27;
          let bound2;
          let obj26;
          if (cResult[6] === guild.id) {
            tmp14 = cResult[7];
          }
          let tmp18 = tmp14;
          if (null != guild) {
            tmp18 = tmp14;
            if (null != guild.homeHeader) {
              if (cResult[8] === guild.homeHeader) {
                let tmp19;
                if (cResult[9] === guild.id) {
                  tmp19 = cResult[10];
                }
                tmp18 = tmp19;
              }
              const obj4 = { id: null, homeHeader: null };
              ({ id: obj8.id, homeHeader: obj8.homeHeader } = guild);
              const tmp7Result = sharedValue(1402);
              const guildHomeHeaderSource = tmp7Result.getGuildHomeHeaderSource(obj4);
              cResult[8] = guild.homeHeader;
              cResult[9] = guild.id;
              cResult[10] = guildHomeHeaderSource;
              tmp19 = guildHomeHeaderSource;
            }
          }
          const name = guild.name;
          if (description == null) {
            description = guild.description;
          }
          if (cResult[11] !== guild) {
            const tmpResult = tmp(5984);
            const guildBadgeSource = tmpResult.getGuildBadgeSource(guild);
            cResult[11] = guild;
            cResult[12] = guildBadgeSource;
            tmp21 = guildBadgeSource;
          } else {
            tmp21 = cResult[12];
          }
          if (cResult[13] !== sharedValue) {
            const fn3 = function k() {
              set = sharedValue.set;
              const obj = timing;
              const result = set(obj.withTiming(1, timingPresets.timingSlow));
            };
            cResult[13] = sharedValue;
            cResult[14] = fn3;
            tmp23 = fn3;
          } else {
            tmp23 = cResult[14];
          }
          const _Symbol = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [GuildPopoutStore];
            cResult[15] = items1;
            tmp24 = items1;
          } else {
            tmp24 = cResult[15];
          }
          if (cResult[16] !== guild.id) {
            const fn4 = function z() {
              const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
              return obj;
            };
            cResult[16] = guild.id;
            cResult[17] = fn4;
            tmp26 = fn4;
          } else {
            tmp26 = cResult[17];
          }
          if (cResult[18] !== guild) {
            const items2 = [guild];
            cResult[18] = guild;
            cResult[19] = items2;
            tmp27 = items2;
          } else {
            tmp27 = cResult[19];
          }
          const tmpResult5 = tmp(504);
          const discoverableGuild = tmpResult5.useStateFromStoresObject(tmp24, tmp26, tmp27).discoverableGuild;
          const tmp28 = sharedValue(6440)();
          ({ width, height } = sharedValue(1484)());
          sharedValue(1484)();
          const _Math = Math;
          const tmpResult6 = tmp(11157);
          const drawerWidth = tmpResult6.useDrawerWidth();
          const bound1 = Math.min(width, height);
          if (tmp28) {
            const _Math2 = Math;
            const _Math3 = Math;
            bound2 = Math.min(Math.max(width, height) - drawerWidth, bound1);
          } else {
            bound2 = bound1 - 2 * GUILD_FEED_CARD_MARGIN_HORIZONTAL;
          }
          if (cResult[20] === bound) {
            if (cResult[21] === tmp18) {
              if (cResult[22] === tmp23) {
                if (cResult[23] === animatedStyle) {
                  let tmp34;
                  if (cResult[24] === tmp9) {
                    tmp34 = cResult[25];
                  }
                  if (cResult[26] === tmp4.headerBorder) {
                    let tmp39;
                    let tmp40;
                    if (cResult[27] === tmp4.headerContainer) {
                      tmp39 = cResult[28];
                    }
                    if (cResult[29] !== bound2) {
                      const obj5 = { width: bound2, marginTop: -32 };
                      cResult[29] = bound2;
                      cResult[30] = obj5;
                      tmp40 = obj5;
                    } else {
                      tmp40 = cResult[30];
                    }
                    if (cResult[31] === tmp4.content) {
                      let tmp41;
                      if (cResult[32] === tmp40) {
                        tmp41 = cResult[33];
                      }
                      if (cResult[34] === guild) {
                        let tmp42;
                        if (cResult[35] === tmp4.avatar) {
                          tmp42 = cResult[36];
                        }
                        if (cResult[37] === tmp4.guildIconContainer) {
                          let tmp46;
                          if (cResult[38] === tmp42) {
                            tmp46 = cResult[39];
                          }
                          if (cResult[40] === name) {
                            let tmp50;
                            if (cResult[41] === tmp4.title) {
                              tmp50 = cResult[42];
                            }
                            if (cResult[43] === tmp21) {
                              let tmp53;
                              if (cResult[44] === tmp4.icon) {
                                tmp53 = cResult[45];
                              }
                              if (cResult[46] === tmp4.textContainer) {
                                if (cResult[47] === tmp50) {
                                  let tmp56;
                                  if (cResult[48] === tmp53) {
                                    tmp56 = cResult[49];
                                  }
                                  if (cResult[50] === description) {
                                    let tmp60;
                                    if (cResult[51] === tmp4.description) {
                                      tmp60 = cResult[52];
                                    }
                                    if (cResult[53] === discoverableGuild) {
                                      if (cResult[54] === hideMemberCount) {
                                        if (cResult[55] === tmp4.dotOnline) {
                                          if (cResult[56] === tmp4.memberInfo) {
                                            if (cResult[57] === tmp4.publicIcon) {
                                              let tmp63;
                                              if (cResult[58] === tmp4.publicInfo) {
                                                tmp63 = cResult[59];
                                              }
                                              if (cResult[60] === tmp41) {
                                                if (cResult[61] === tmp46) {
                                                  if (cResult[62] === tmp56) {
                                                    if (cResult[63] === tmp60) {
                                                      let tmp72;
                                                      if (cResult[64] === tmp63) {
                                                        tmp72 = cResult[65];
                                                      }
                                                      if (cResult[66] === tmp39) {
                                                        let tmp76;
                                                        if (cResult[67] === tmp72) {
                                                          tmp76 = cResult[68];
                                                        }
                                                        if (cResult[69] === tmp4.container) {
                                                          if (cResult[70] === tmp34) {
                                                            let tmp80;
                                                            if (cResult[71] === tmp76) {
                                                              tmp80 = cResult[72];
                                                            }
                                                            return tmp80;
                                                          }
                                                        }
                                                        const obj7 = { style: tmp4.container, children: items3 };
                                                        items3 = [tmp34, tmp76];
                                                        const tmp83 = closure_12(closure_4, obj7);
                                                        cResult[69] = tmp4.container;
                                                        cResult[70] = tmp34;
                                                        cResult[71] = tmp76;
                                                        cResult[72] = tmp83;
                                                        tmp80 = tmp83;
                                                      }
                                                      const obj9 = { style: tmp39, children: tmp72 };
                                                      const tmp79 = closure_11(closure_4, obj9);
                                                      cResult[66] = tmp39;
                                                      cResult[67] = tmp72;
                                                      cResult[68] = tmp79;
                                                      tmp76 = tmp79;
                                                    }
                                                  }
                                                }
                                              }
                                              const obj10 = { style: tmp41, children: items4 };
                                              items4 = [tmp46, tmp56, tmp60, tmp63];
                                              const tmp75 = closure_12(closure_4, obj10);
                                              cResult[60] = tmp41;
                                              cResult[61] = tmp46;
                                              cResult[62] = tmp56;
                                              cResult[63] = tmp60;
                                              cResult[64] = tmp63;
                                              cResult[65] = tmp75;
                                              tmp72 = tmp75;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    let tmp65Result4 = null != discoverableGuild && !hideMemberCount;
                                    if (tmp65Result4) {
                                      const features2 = discoverableGuild.features;
                                      let tmp65Result = null;
                                      const obj11 = { style: tmp4.memberInfo, children: items6 };
                                      if (features2.has(GuildFeatures.DISCOVERABLE)) {
                                        const obj12 = {
                                          style: tmp4.publicInfo,
                                          accessibilityRole: "button",
                                          onPress() {
                                            let intl;
                                            const obj = {
                                              key: "DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO",
                                              content: intl.string(guild(dependencyMap[31]).t.O8lDI2),
                                            };
                                            const open = sharedValue(dependencyMap[30]).open;
                                            sharedValue(dependencyMap[30]);
                                            intl = guild(dependencyMap[31]).intl;
                                            open(obj);
                                          },
                                          children: items5,
                                        };
                                        const PressableOpacity = tmp(5916).PressableOpacity;
                                        const obj13 = { style: tmp4.publicIcon, source: sharedValue(16551) };
                                        const Icon = tmp(1188).Icon;
                                        items5 = [closure_11(Icon, obj13)];
                                        const obj14 = {
                                          variant: "text-xs/medium",
                                          color: "text-default",
                                          children: intl.string(tmp(1126).t["B/vjCu"]),
                                        };
                                        const Text = tmp(4892).Text;
                                        intl = tmp(1126).intl;
                                        items5[1] = closure_11(Text, obj14);
                                        tmp65Result = closure_12(PressableOpacity, obj12);
                                      }
                                      items6 = [tmp65Result];
                                      let tmp65Result3 = null;
                                      if (null != discoverableGuild.presenceCount) {
                                        tmp65Result3 = null;
                                        if (null != discoverableGuild.memberCount) {
                                          const Fragment = react.Fragment;
                                          const obj15 = { children: items7 };
                                          const obj16 = { style: tmp4.dotOnline };
                                          items7 = [closure_11(closure_4, obj16)];
                                          const obj17 = {
                                            variant: "text-xs/medium",
                                            color: "text-default",
                                            children: intl2.format(tmp(1126).t.QCNv6P, obj18),
                                          };
                                          const Text2 = tmp(4892).Text;
                                          intl2 = tmp(1126).intl;
                                          obj18 = { online: null, offline: null };
                                          ({ presenceCount: obj31.online, memberCount: obj31.offline } =
                                            discoverableGuild);
                                          items7[1] = closure_11(Text2, obj17);
                                          tmp65Result3 = closure_12(Fragment, obj15);
                                        }
                                      }
                                      items6[1] = tmp65Result3;
                                      tmp65Result4 = closure_12(closure_4, obj11);
                                    }
                                    cResult[53] = discoverableGuild;
                                    cResult[54] = hideMemberCount;
                                    cResult[55] = tmp4.dotOnline;
                                    cResult[56] = tmp4.memberInfo;
                                    cResult[57] = tmp4.publicIcon;
                                    cResult[58] = tmp4.publicInfo;
                                    cResult[59] = tmp65Result4;
                                    tmp63 = tmp65Result4;
                                  }
                                  let tmp61 = null;
                                  if (null != description) {
                                    const obj19 = {
                                      style: tmp4.description,
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: description,
                                    };
                                    tmp61 = closure_11(tmp(4892).Text, obj19);
                                  }
                                  cResult[50] = description;
                                  cResult[51] = tmp4.description;
                                  cResult[52] = tmp61;
                                  tmp60 = tmp61;
                                }
                              }
                              const obj20 = { style: tmp4.textContainer, children: items8 };
                              items8 = [tmp50, tmp53];
                              const tmp59 = closure_12(closure_4, obj20);
                              cResult[46] = tmp4.textContainer;
                              cResult[47] = tmp50;
                              cResult[48] = tmp53;
                              cResult[49] = tmp59;
                              tmp56 = tmp59;
                            }
                            let tmp54 = null;
                            if (null != tmp21) {
                              const obj21 = { style: tmp4.icon, source: tmp21, disableColor: true };
                              tmp54 = closure_11(tmp(1188).Icon, obj21);
                            }
                            cResult[43] = tmp21;
                            cResult[44] = tmp4.icon;
                            cResult[45] = tmp54;
                            tmp53 = tmp54;
                          }
                          const obj22 = {
                            lineClamp: 1,
                            variant: "heading-xl/extrabold",
                            color: "mobile-text-heading-primary",
                            style: tmp4.title,
                            children: name,
                          };
                          const tmp52 = closure_11(tmp(4892).Text, obj22);
                          cResult[40] = name;
                          cResult[41] = tmp4.title;
                          cResult[42] = tmp52;
                          tmp50 = tmp52;
                        }
                        const obj23 = { style: tmp4.guildIconContainer, children: tmp42 };
                        const tmp49 = closure_11(closure_4, obj23);
                        cResult[37] = tmp4.guildIconContainer;
                        cResult[38] = tmp42;
                        cResult[39] = tmp49;
                        tmp46 = tmp49;
                      }
                      const obj24 = { style: tmp4.avatar, guild, size: tmp(5978).GuildIconSizes.XLARGE, animate: true };
                      const tmp7Result4 = sharedValue(5978);
                      const tmp45 = closure_11(tmp7Result4, obj24);
                      cResult[34] = guild;
                      cResult[35] = tmp4.avatar;
                      cResult[36] = tmp45;
                      tmp42 = tmp45;
                    }
                    const items9 = [tmp4.content, tmp40];
                    cResult[31] = tmp4.content;
                    cResult[32] = tmp40;
                    cResult[33] = items9;
                    tmp41 = items9;
                  }
                  const items10 = [,];
                  ({ headerContainer: arr6[0], headerBorder: arr6[1] } = tmp4);
                  cResult[26] = tmp4.headerBorder;
                  cResult[27] = tmp4.headerContainer;
                  cResult[28] = items10;
                  tmp39 = items10;
                }
              }
            }
          }
          if (null != tmp18) {
            size = { height: bound, width: "100%" };
            const obj25 = { style: items11, source: tmp18, onLoad: tmp23 };
            items11 = [size, animatedStyle];
            obj26 = obj25;
          } else {
            obj26 = { style: items12, source: tmp7Result5, onLoad: tmp23 };
            const size1 = { height: bound, width: "100%" };
            items12 = [size1, animatedStyle];
            const tmpResult7 = tmp(4735);
            if (tmpResult7.isThemeDark(tmp9)) {
              tmp7Result5 = tmp7(16549);
            } else {
              tmp7Result5 = tmp7(16550);
            }
          }
          const tmp35Result = closure_11(closure_5, obj26);
          cResult[20] = bound;
          cResult[21] = tmp18;
          cResult[22] = tmp23;
          cResult[23] = animatedStyle;
          cResult[24] = tmp9;
          cResult[25] = tmp35Result;
          tmp34 = tmp35Result;
        }
      }
      const features = guild.features;
      let hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
      if (hasItem) {
        const tmpResult8 = tmp(1369);
        hasItem = !tmpResult8.isAndroid();
      }
      let guildBannerSource = null;
      if (null != guild.banner) {
        const obj27 = { id: null, banner: null };
        ({ id: obj6.id, banner: obj6.banner } = guild);
        const tmp7Result6 = sharedValue(1402);
        guildBannerSource = tmp7Result6.getGuildBannerSource(obj27, hasItem);
      }
      cResult[4] = guild.banner;
      cResult[5] = guild.features;
      cResult[6] = guild.id;
      cResult[7] = guildBannerSource;
      tmp14 = guildBannerSource;
    }
  : (guild) => {
      let closure_2;
      let hideDescription;
      let hideMemberCount;
      let intl;
      let intl2;
      let items10;
      let items11;
      let items12;
      let items13;
      let items14;
      let items5;
      let items6;
      let items7;
      let items8;
      let items9;
      let obj10;
      let obj22;
      let obj6;
      let obj8;
      let tmp6Result;
      let tmp6Result2;
      guild = guild.guild;
      let description = guild.description;
      dependencyMap = undefined;
      let width;
      let height;
      let drawerWidth;
      ({ hideDescription, hideMemberCount } = guild);
      const tmp = closure_13();
      let obj = guild(4618);
      const sharedValue = obj.useSharedValue(0);
      let obj2 = guild(4618);
      const fn = function x() {
        const obj = { opacity: sharedValue.get() };
        return obj;
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 1869475832859;
      fn.__initData = __initData2;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      let bound = Math.max(0.22 * sharedValue(1484)().height, GUILD_FEED_MIN_BANNER_HEIGHT);
      const obj3 = width;
      const items = [guild];
      const tmp8 = sharedValue(4797)();
      const effect = width.useEffect(() => {
        const obj = GuildPopoutActionCreators;
        const guildForPopout = obj.fetchGuildForPopout(guild.id);
      }, items);
      const items1 = [guild];
      const memo = width.useMemo(() => {
        const features = guild.features;
        let hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
        if (hasItem) {
          const obj = PlatformUtils;
          hasItem = !obj.isAndroid();
        }
        let guildBannerSource = null;
        if (null != guild.banner) {
          const obj7 = { id: null, banner: null };
          ({ id: obj3.id, banner: obj3.banner } = guild);
          const obj2 = AvatarUtilsDefault;
          guildBannerSource = obj2.getGuildBannerSource(obj7, hasItem);
        }
        let guildHomeHeaderSource = guildBannerSource;
        if (null != guild) {
          guildHomeHeaderSource = guildBannerSource;
          if (null != guild.homeHeader) {
            const obj8 = { id: null, homeHeader: null };
            ({ id: obj5.id, homeHeader: obj5.homeHeader } = guild);
            const obj4 = AvatarUtilsDefault;
            guildHomeHeaderSource = obj4.getGuildHomeHeaderSource(obj8);
          }
        }
        return guildHomeHeaderSource;
      }, items1);
      const name = guild.name;
      if (description == null) {
        description = guild.description;
      }
      function handleLoad() {
        set = sharedValue.set;
        const obj = timing;
        const result = set(obj.withTiming(1, timingPresets.timingSlow));
      }
      const tmp2Result = guild(5984);
      const guildBadgeSource = tmp2Result.getGuildBadgeSource(guild);
      const items2 = [GuildPopoutStore];
      const items3 = [guild];
      const tmp2Result4 = guild(504);
      const discoverableGuild = tmp2Result4.useStateFromStoresObject(
        items2,
        () => {
          const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
          return obj;
        },
        items3,
      ).discoverableGuild;
      const tmp12 = sharedValue(6440)();
      dependencyMap = tmp12;
      size = tmp6(1484)();
      width = size.width;
      height = size.height;
      const tmp2Result5 = guild(11157);
      drawerWidth = tmp2Result5.useDrawerWidth();
      const items4 = [width, height, tmp12, drawerWidth];
      let obj4 = { style: tmp.container, children: items7 };
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
      const tmp18 = drawerWidth;
      if (null != memo) {
        const obj5 = { style: items5, source: memo, onLoad: handleLoad };
        const size1 = { height: bound, width: "100%" };
        items5 = [size1, animatedStyle];
        obj6 = obj5;
      } else {
        obj6 = { style: items6, source: tmp6Result, onLoad: handleLoad };
        const size2 = { height: bound, width: "100%" };
        items6 = [size2, animatedStyle];
        const tmp2Result6 = guild(4735);
        if (tmp2Result6.isThemeDark(tmp8)) {
          tmp6Result = tmp6(16549);
        } else {
          tmp6Result = tmp6(16550);
        }
      }
      items7 = [closure_11(tmp18, obj6)];
      let obj7 = { style: items8, children: closure_12(height, obj8) };
      items8 = [,];
      ({ headerContainer: arr9[0], headerBorder: arr9[1] } = tmp);
      obj8 = { style: items9, children: items10 };
      items9 = [tmp.content, { width: memo1, marginTop: -32 }];
      const obj9 = { style: tmp.guildIconContainer, children: closure_11(tmp6Result2, obj10) };
      obj10 = { style: tmp.avatar, guild, size: guild(5978).GuildIconSizes.XLARGE, animate: true };
      tmp6Result2 = sharedValue(5978);
      items10 = [closure_11(height, obj9), , ,];
      const obj11 = { style: tmp.textContainer, children: items11 };
      items11 = [,];
      const obj12 = {
        lineClamp: 1,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        style: tmp.title,
        children: name,
      };
      items11[0] = closure_11(guild(4892).Text, obj12);
      let tmp17Result = null;
      if (null != guildBadgeSource) {
        const obj13 = { style: tmp.icon, source: guildBadgeSource, disableColor: true };
        tmp17Result = closure_11(tmp2(1188).Icon, obj13);
      }
      items11[1] = tmp17Result;
      items10[1] = closure_12(height, obj11);
      let tmp17Result2 = null;
      if (null != description) {
        const obj14 = {
          style: tmp.description,
          variant: "text-sm/medium",
          color: "text-default",
          children: description,
        };
        tmp17Result2 = closure_11(tmp2(4892).Text, obj14);
      }
      items10[2] = tmp17Result2;
      let tmp15Result4 = null != discoverableGuild && !hideMemberCount;
      if (tmp15Result4) {
        let features = discoverableGuild.features;
        let tmp15Result = null;
        const obj15 = { style: tmp.memberInfo, children: items13 };
        if (features.has(GuildFeatures.DISCOVERABLE)) {
          const obj16 = {
            style: tmp.publicInfo,
            accessibilityRole: "button",
            onPress() {
              let intl;
              const obj = {
                key: "DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO",
                content: intl.string(guild(closure_2[31]).t.O8lDI2),
              };
              const open = sharedValue(closure_2[30]).open;
              sharedValue(closure_2[30]);
              intl = guild(closure_2[31]).intl;
              open(obj);
            },
            children: items12,
          };
          const PressableOpacity = tmp2(5916).PressableOpacity;
          const obj17 = { style: tmp.publicIcon, source: sharedValue(16551) };
          const Icon = tmp2(1188).Icon;
          items12 = [closure_11(Icon, obj17)];
          const obj18 = {
            variant: "text-xs/medium",
            color: "text-default",
            children: intl.string(guild(1126).t["B/vjCu"]),
          };
          const Text = tmp2(4892).Text;
          intl = tmp2(1126).intl;
          items12[1] = closure_11(Text, obj18);
          tmp15Result = closure_12(PressableOpacity, obj16);
        }
        items13 = [tmp15Result];
        let tmp15Result3 = null;
        if (null != discoverableGuild.presenceCount) {
          tmp15Result3 = null;
          if (null != discoverableGuild.memberCount) {
            const Fragment = obj3.Fragment;
            const obj19 = { children: items14 };
            const obj20 = { style: tmp.dotOnline };
            items14 = [closure_11(height, obj20)];
            const obj21 = {
              variant: "text-xs/medium",
              color: "text-default",
              children: intl2.format(guild(1126).t.QCNv6P, obj22),
            };
            const Text2 = tmp2(4892).Text;
            intl2 = tmp2(1126).intl;
            obj22 = { online: null, offline: null };
            ({ presenceCount: obj28.online, memberCount: obj28.offline } = discoverableGuild);
            items14[1] = closure_11(Text2, obj21);
            tmp15Result3 = closure_12(Fragment, obj19);
          }
        }
        items13[1] = tmp15Result3;
        tmp15Result4 = closure_12(tmp16, obj15);
      }
      items10[3] = tmp15Result4;
      items7[1] = closure_11(height, obj7);
      return closure_12(height, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guildId) => {
        let description;
        let first;
        let hideDescription;
        let hideMemberCount;
        let tmp6;
        const obj = guildId(576);
        const cResult = obj.c(8);
        const tmp = guildId;
        guildId = guildId.guildId;
        ({ description, hideDescription, hideMemberCount } = guildId);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== guildId) {
          const fn = function o() {
            return GuildStore.getGuild(guildId);
          };
          cResult[1] = guildId;
          cResult[2] = fn;
          tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const tmpResult = tmp(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
        let tmp8 = null;
        if (null != stateFromStores) {
          if (cResult[3] === description) {
            if (cResult[4] === stateFromStores) {
              if (cResult[5] === hideDescription) {
                let tmp9;
                if (cResult[6] === hideMemberCount) {
                  tmp9 = cResult[7];
                }
                tmp8 = tmp9;
              }
            }
          }
          const obj2 = { guild: stateFromStores, description, hideDescription, hideMemberCount };
          const tmp12 = closure_11(closure_16, obj2);
          cResult[3] = description;
          cResult[4] = stateFromStores;
          cResult[5] = hideDescription;
          cResult[6] = hideMemberCount;
          cResult[7] = tmp12;
          tmp9 = tmp12;
        }
        return tmp8;
      }
    : (guildId) => {
        let description;
        let hideDescription;
        let hideMemberCount;
        guildId = guildId.guildId;
        ({ description, hideDescription, hideMemberCount } = guildId);
        const items = [GuildStore];
        const obj = guildId(504);
        const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
        let tmp2 = null;
        if (null != stateFromStores) {
          const obj2 = { guild: stateFromStores, description, hideDescription, hideMemberCount };
          tmp2 = closure_11(closure_16, obj2);
        }
        return tmp2;
      },
);
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_home/native/components/GuildFeedBanner.tsx");

export default memoResult;
