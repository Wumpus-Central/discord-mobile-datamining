// discord_app/modules/messages/native/emoji/ExpressionGuildDetails.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import guild_GuildUtils from "../../../guild/GuildUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GuildBadgeDefault = tmp8(5977);
require = fn;
const View = fn(17).View;
let closure_4 = fn(5972).ExpressionSourceGuildRecord;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { guildDetailsContainer: { flexDirection: "column" }, guildDetailsContent: { flexDirection: "row", marginTop: 8, alignItems: "center" }, guildIcon: null, guildNameAndOnlineMembers: null, guildNameWrapper: null, guildPartnerIcon: null, guildDescriptionSection: null, dotSeparator: null, joinGuildButton: null };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm, marginRight: 12 };
obj2.guildIcon = size;
obj2.guildNameAndOnlineMembers = { flexDirection: "column" };
obj2.guildNameWrapper = { flexDirection: "row", alignItems: "center", marginRight: 32 };
obj2.guildPartnerIcon = { marginRight: 8 };
obj2.guildDescriptionSection = { flexDirection: "row", alignItems: "center", marginTop: 4 };
const size1 = { width: 4, height: 4, borderRadius: nativeDefault.radii.xs, marginRight: 8, marginLeft: 8, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.dotSeparator = size1;
obj2.joinGuildButton = { borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, paddingHorizontal: 4, paddingBottom: 2 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = require("c").c(49);
  guild = guild.guild;
  ({ title, hasJoinedGuild } = guild);
  const showingJoinGuildCta = guild.showingJoinGuildCta;
  const tmp4 = closure_8();
  closure_4 = tmp4;
  if (cResult[0] !== guild) {
    const fromGuildType = closure_4.createFromGuildType(guild);
    _require = fromGuildType;
    const isDiscoverableResult = fromGuildType.isDiscoverable();
    cResult[0] = guild;
    cResult[1] = fromGuildType;
    cResult[2] = isDiscoverableResult;
    let tmp6 = isDiscoverableResult;
  } else {
    _require = cResult[1];
    tmp6 = cResult[2];
  }
  closure_5 = tmp6;
  if (!tmp6) {
    if (!hasJoinedGuild) {
      if (cResult[6] === guild.icon) {
        if (cResult[7] === guild.id) {
          let tmp9 = cResult[8];
        }
        if (cResult[9] === tmp9) {
          if (cResult[12] === tmp5.presenceCount) {
            if (cResult[13] === guild.id) {
              if (cResult[14] === hasJoinedGuild) {
                if (cResult[15] === showingJoinGuildCta) {
                  if (cResult[16] === tmp4.dotSeparator) {
                    if (cResult[17] === tmp4.joinGuildButton) {
                      let tmp19 = cResult[18];
                    }
                    closure_6 = tmp19;
                    class S {
                      constructor() {
                        tmp3 = jsx;
                        tmp4 = closure_0;
                        tmp5 = closure_2;
                        tmp = jsxs;
                        tmp2 = Fragment;
                        obj = { variant: "text-xs/medium", color: "text-default", children: null };
                        intl = closure_0(closure_2[12]).intl;
                        obj1 = { membersOnline: closure_0.presenceCount };
                        obj.children = intl.format(closure_0(closure_2[12]).t["LC+S+m"], obj1);
                        items = [, , ];
                        items[0] = jsx(closure_0(closure_2[11]).Text, obj);
                        obj8 = { style: closure_4.dotSeparator };
                        tmp6 = closure_4;
                        items[1] = jsx(View, obj8);
                        if (!hasJoinedGuild) {
                          tmp7 = showingJoinGuildCta;
                          if (!showingJoinGuildCta) {
                            obj9 = { style: null, onPress: null, children: null };
                            obj9.style = tmp6.joinGuildButton;
                            obj9.onPress = function onPress() { ... };
                            obj10 = { variant: "text-xs/medium", color: "text-default", children: null };
                            intl2 = tmp4(tmp5[12]).intl;
                            obj10.children = intl2.string(tmp4(tmp5[12]).t.riu2R5);
                            obj9.children = tmp3(tmp4(tmp5[11]).Text, obj10);
                            tmp3Result = tmp3(tmp4(tmp5[13]).PressableOpacity, obj9);
                          }
                          obj11 = { children: null };
                          items[2] = tmp3Result;
                          obj11.children = items;
                          return tmp(tmp2, obj11);
                        }
                        obj12 = { variant: "text-xs/medium", color: "text-default", children: null };
                        intl3 = tmp4(tmp5[12]).intl;
                        obj12.children = intl3.string(tmp4(tmp5[12]).t.inyJqO);
                        tmp3Result = tmp3(tmp4(tmp5[11]).Text, obj12);
                        return;
                      }
                    }
                    class A {
                      constructor() {
                        tmp = jsx;
                        obj = { style: closure_4.guildDescriptionSection, children: null };
                        if (closure_5) {
                          tmp3 = closure_0;
                          tmp4 = null;
                          if (null != closure_0.presenceCount) {
                            tmp6 = closure_6;
                            tmpResult = closure_6();
                          }
                          obj.children = tmpResult;
                          return tmp(tmp2, obj);
                        }
                        obj1 = { variant: "text-xs/medium", color: "text-default", children: null };
                        intl = closure_0(closure_2[12]).intl;
                        obj1.children = intl.string(closure_0(closure_2[12]).t.H29mx4);
                        tmpResult = tmp(closure_0(closure_2[11]).Text, obj1);
                        return;
                      }
                    }
                    cResult[19] = tmp5.presenceCount;
                    cResult[20] = tmp6;
                    cResult[21] = tmp19;
                    cResult[22] = tmp4.guildDescriptionSection;
                    cResult[23] = A;
                  }
                }
              }
            }
          }
          class S {
            constructor() {
              tmp3 = jsx;
              tmp4 = closure_0;
              tmp5 = closure_2;
              tmp = jsxs;
              tmp2 = Fragment;
              obj = { variant: "text-xs/medium", color: "text-default", children: null };
              intl = closure_0(closure_2[12]).intl;
              obj1 = { membersOnline: closure_0.presenceCount };
              obj.children = intl.format(closure_0(closure_2[12]).t["LC+S+m"], obj1);
              items = [, , ];
              items[0] = jsx(closure_0(closure_2[11]).Text, obj);
              obj8 = { style: closure_4.dotSeparator };
              tmp6 = closure_4;
              items[1] = jsx(View, obj8);
              if (!hasJoinedGuild) {
                tmp7 = showingJoinGuildCta;
                if (!showingJoinGuildCta) {
                  obj9 = { style: null, onPress: null, children: null };
                  obj9.style = tmp6.joinGuildButton;
                  obj9.onPress = function onPress() { ... };
                  obj10 = { variant: "text-xs/medium", color: "text-default", children: null };
                  intl2 = tmp4(tmp5[12]).intl;
                  obj10.children = intl2.string(tmp4(tmp5[12]).t.riu2R5);
                  obj9.children = tmp3(tmp4(tmp5[11]).Text, obj10);
                  tmp3Result = tmp3(tmp4(tmp5[13]).PressableOpacity, obj9);
                }
                obj11 = { children: null };
                items[2] = tmp3Result;
                obj11.children = items;
                return tmp(tmp2, obj11);
              }
              obj12 = { variant: "text-xs/medium", color: "text-default", children: null };
              intl3 = tmp4(tmp5[12]).intl;
              obj12.children = intl3.string(tmp4(tmp5[12]).t.inyJqO);
              tmp3Result = tmp3(tmp4(tmp5[11]).Text, obj12);
              return;
            }
          }
          cResult[12] = tmp5.presenceCount;
          cResult[13] = guild.id;
          cResult[14] = hasJoinedGuild;
          cResult[15] = showingJoinGuildCta;
          cResult[16] = tmp4.dotSeparator;
          cResult[17] = tmp4.joinGuildButton;
          cResult[18] = S;
          tmp19 = S;
        }
        let obj2 = { style: tmp4.guildIcon, source: tmp9 };
        const tmp14 = closure_5(guild(hasJoinedGuild[10]), obj2);
        cResult[9] = tmp9;
        cResult[10] = tmp4.guildIcon;
        cResult[11] = tmp14;
      }
      ({ id: tmp11[0], icon: tmp11[1] } = guild);
      const guildIconSource = obj3.getGuildIconSource(tmp11);
      cResult[6] = guild.icon;
      cResult[7] = guild.id;
      cResult[8] = guildIconSource;
      tmp9 = guildIconSource;
    }
  }
  if (cResult[3] === tmp5) {
  }
  let obj4 = { style: tmp4.guildIcon, guild: tmp5, size: null, animate: true };
  let obj = require("c");
  const tmp = _require;
  obj4.size = tmp(hasJoinedGuild[8]).GuildIconSizes.XLARGE;
  const tmp17 = closure_5(guild(hasJoinedGuild[8]), obj4);
  cResult[3] = tmp5;
  cResult[4] = tmp4.guildIcon;
  cResult[5] = tmp17;
  const tmp16 = guild(hasJoinedGuild[8]);
}) : ((guild) => {
  guild = guild.guild;
  const hasJoinedGuild = guild.hasJoinedGuild;
  ({ title, showingJoinGuildCta } = guild);
  const tmp = closure_8();
  const fromGuildType = closure_4.createFromGuildType(guild);
  const isDiscoverableResult = fromGuildType.isDiscoverable();
  if (!isDiscoverableResult) {
    if (!hasJoinedGuild) {
      let stringResult = dependencyMap;
      ({ id: obj3.id, icon: obj3.icon } = guild);
      const guildIconSource = AvatarUtilsDefault.getGuildIconSource({ id: null, icon: null, canAnimate: true, size: 32 });
      const obj4 = { style: tmp.guildIcon, source: guildIconSource };
      let tmp7 = closure_5(FastImageDefault, obj4);
      let tmp9 = closure_5;
      const obj = { id: null, icon: null, canAnimate: true, size: 32 };
    }
    const obj5 = { style: tmp.guildDetailsContainer, children: null };
    const obj6 = { variant: "eyebrow", color: "text-default", children: title };
    const items = [tmp9(guild(4886).Text, obj6), ];
    const obj7 = { style: tmp.guildDetailsContent, children: null };
    const items1 = [tmp7, ];
    const obj8 = { style: tmp.guildNameAndOnlineMembers, children: null };
    const obj9 = { style: tmp.guildNameWrapper, children: null };
    const obj10 = { guild, style: tmp.guildPartnerIcon, size: guild(1188).Icon.Sizes.REFRESH_SMALL_16, disableColor: true };
    const items2 = [tmp9(GuildBadgeDefault, obj10), ];
    const obj11 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: guild.name };
    items2[1] = tmp9(guild(4886).Text, obj11);
    obj9.children = items2;
    const items3 = [closure_7(View, obj9), ];
    const obj12 = { style: tmp.guildDescriptionSection, children: null };
    if (isDiscoverableResult) {
      if (null != fromGuildType.presenceCount) {
        const obj13 = { variant: "text-xs/medium", color: "text-default", children: null };
        const intl2 = tmp13(1126).intl;
        const obj14 = { membersOnline: fromGuildType.presenceCount };
        obj13.children = intl2.format(tmp13(1126).t["LC+S+m"], obj14);
        const items4 = [tmp9(tmp13(4886).Text, obj13), , ];
        const obj15 = { style: tmp.dotSeparator };
        items4[1] = tmp9(View, obj15);
        if (!hasJoinedGuild) {
          if (!showingJoinGuildCta) {
            const obj16 = {
              style: tmp.joinGuildButton,
              onPress() {
                          return guild_GuildUtils.handleJoinGuild(guild.id);
                        },
              children: null
            };
            const obj17 = { variant: "text-xs/medium", color: "text-default", children: null };
            const intl3 = tmp13(1126).intl;
            obj17.children = intl3.string(tmp13(1126).t.riu2R5);
            obj16.children = tmp9(tmp13(4886).Text, obj17);
            let tmp9Result = tmp9(tmp13(5909).PressableOpacity, obj16);
          }
          const obj18 = { children: null };
          items4[2] = tmp9Result;
          obj18.children = items4;
          closure_7(closure_6, obj18);
        }
        const obj19 = { variant: "text-xs/medium", color: "text-default", children: null };
        const intl4 = tmp13(1126).intl;
        stringResult = intl4.string(tmp13(1126).t.inyJqO);
        obj19.children = stringResult;
        tmp9Result = tmp9(tmp13(4886).Text, obj19);
      }
    }
    const obj20 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl = tmp13(1126).intl;
    obj20.children = intl.string(guild(1126).t.H29mx4);
    obj12.children = tmp9(guild(4886).Text, obj20);
    items3[1] = tmp9(View, obj12);
    obj8.children = items3;
    items1[1] = closure_7(View, obj8);
    obj7.children = items1;
    items[1] = closure_7(View, obj7);
    obj5.children = items;
    return closure_7(View, obj5);
  }
  const obj21 = { style: tmp.guildIcon, guild: fromGuildType, size: guild(5971).GuildIconSizes.XLARGE, animate: true };
  tmp7 = closure_5(GuildIconDefault, obj21);
  stringResult = dependencyMap;
  tmp9 = closure_5;
});
size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/emoji/ExpressionGuildDetails.tsx");

export default tmp4;
export const ExpressionGuildDetails = tmp4;