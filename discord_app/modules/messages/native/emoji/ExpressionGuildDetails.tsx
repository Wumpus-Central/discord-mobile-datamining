// discord_app/modules/messages/native/emoji/ExpressionGuildDetails.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import guild_GuildUtils from "../../../guild/GuildUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GuildBadgeDefault = tmp8(5760);
require = fn;
const View = fn(17).View;
const React4 = fn(5755).ExpressionSourceGuildRecord;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  guildDetailsContainer: { flexDirection: "column" },
  guildDetailsContent: { flexDirection: "row", marginTop: 8, alignItems: "center" },
  guildIcon: null,
  guildNameAndOnlineMembers: null,
  guildNameWrapper: null,
  guildPartnerIcon: null,
  guildDescriptionSection: null,
  dotSeparator: null,
  joinGuildButton: null,
};
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm, marginRight: 12 };
obj2.guildIcon = size;
obj2.guildNameAndOnlineMembers = { flexDirection: "column" };
obj2.guildNameWrapper = { flexDirection: "row", alignItems: "center", marginRight: 32 };
obj2.guildPartnerIcon = { marginRight: 8 };
obj2.guildDescriptionSection = { flexDirection: "row", alignItems: "center", marginTop: 4 };
const size1 = {
  width: 4,
  height: 4,
  borderRadius: nativeDefault.radii.xs,
  marginRight: 8,
  marginLeft: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.dotSeparator = size1;
obj2.joinGuildButton = {
  borderRadius: nativeDefault.radii.sm,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderWidth: 1,
  paddingHorizontal: 4,
  paddingBottom: 2,
};
const React6 = createStyles.createStyles(obj2);
class ExpressionGuildDetails {
  constructor(arg0) {
    guild = global.guild;
    hasJoinedGuild = global.hasJoinedGuild;
    ({ title, showingJoinGuildCta } = global);
    tmp = closure_8();
    fromGuildType = closure_4.createFromGuildType(guild);
    isDiscoverableResult = fromGuildType.isDiscoverable();
    if (!isDiscoverableResult) {
      if (!hasJoinedGuild) {
        tmp3 = closure_1;
        stringResult = closure_2;
        obj2 = closure_1(closure_2[7]);
        obj1 = { id: null, icon: null, canAnimate: true, size: 32 };
        ({ id: obj3.id, icon: obj3.icon } = guild);
        tmp6 = jsx;
        guildIconSource = obj2.getGuildIconSource(obj1);
        obj22 = { style: null, source: null };
        obj22.style = tmp.guildIcon;
        obj22.source = guildIconSource;
        tmp7 = jsx(closure_1(closure_2[8]), obj22);
        tmp8 = closure_1;
        tmp9 = jsx;
      }
      tmp11 = jsxs;
      tmp12 = View;
      obj23 = { style: null, children: null };
      obj23.style = tmp.guildDetailsContainer;
      tmp13 = guild;
      obj24 = { variant: "eyebrow", color: "text-default", children: null };
      obj24.children = title;
      items = [,];
      items[0] = tmp9(guild(stringResult[9]).Text, obj24);
      obj25 = { style: null, children: null };
      obj25.style = tmp.guildDetailsContent;
      items1 = [,];
      items1[0] = tmp7;
      obj26 = { style: null, children: null };
      obj26.style = tmp.guildNameAndOnlineMembers;
      obj27 = { style: null, children: null };
      obj27.style = tmp.guildNameWrapper;
      obj28 = { guild: null, style: null, size: null, disableColor: true };
      obj28.guild = guild;
      obj28.style = tmp.guildPartnerIcon;
      tmp8Result = tmp8(stringResult[13]);
      obj28.size = guild(stringResult[14]).Icon.Sizes.REFRESH_SMALL_16;
      items2 = [,];
      items2[0] = tmp9(tmp8Result, obj28);
      obj29 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
      obj29.children = guild.name;
      items2[1] = tmp9(guild(stringResult[9]).Text, obj29);
      obj27.children = items2;
      items3 = [,];
      items3[0] = jsxs(View, obj27);
      obj30 = { style: null, children: null };
      obj30.style = tmp.guildDescriptionSection;
      if (isDiscoverableResult) {
        tmp15 = null;
        if (null != fromGuildType.presenceCount) {
          tmp16 = Fragment;
          obj31 = { variant: "text-xs/medium", color: "text-default", children: null };
          intl2 = tmp13(stringResult[10]).intl;
          obj32 = { membersOnline: null };
          obj32.membersOnline = fromGuildType.presenceCount;
          obj31.children = intl2.format(tmp13(stringResult[10]).t["LC+S+m"], obj32);
          items4 = [, ,];
          items4[0] = tmp9(tmp13(stringResult[9]).Text, obj31);
          obj33 = { style: null };
          obj33.style = tmp.dotSeparator;
          items4[1] = tmp9(tmp12, obj33);
          if (!hasJoinedGuild) {
            if (!showingJoinGuildCta) {
              obj34 = { style: null, onPress: null, children: null };
              obj34.style = tmp.joinGuildButton;
              obj34.onPress = function onPress() {
                return guild_GuildUtils.handleJoinGuild(guild.id);
              };
              obj35 = { variant: "text-xs/medium", color: "text-default", children: null };
              intl3 = tmp13(stringResult[10]).intl;
              obj35.children = intl3.string(tmp13(stringResult[10]).t.riu2R5);
              obj34.children = tmp9(tmp13(stringResult[9]).Text, obj35);
              tmp9Result = tmp9(tmp13(stringResult[11]).PressableOpacity, obj34);
            }
            obj36 = { children: null };
            items4[2] = tmp9Result;
            obj36.children = items4;
            tmp11Result = tmp11(tmp16, obj36);
          }
          obj37 = { variant: "text-xs/medium", color: "text-default", children: null };
          intl4 = tmp13(stringResult[10]).intl;
          stringResult = intl4.string(tmp13(stringResult[10]).t.inyJqO);
          obj37.children = stringResult;
          tmp9Result = tmp9(tmp13(stringResult[9]).Text, obj37);
        }
      }
      obj38 = { variant: "text-xs/medium", color: "text-default", children: null };
      intl = tmp13(stringResult[10]).intl;
      obj38.children = intl.string(tmp13(stringResult[10]).t.H29mx4);
      obj30.children = tmp9(tmp13(stringResult[9]).Text, obj38);
      items3[1] = tmp9(tmp12, obj30);
      obj26.children = items3;
      items1[1] = tmp11(tmp12, obj26);
      obj25.children = items1;
      items[1] = tmp11(tmp12, obj25);
      obj23.children = items;
      return tmp11(tmp12, obj23);
    }
    obj39 = { style: tmp.guildIcon, guild: fromGuildType, size: null, animate: true };
    tmp10 = closure_1(closure_2[6]);
    obj39.size = guild(closure_2[6]).GuildIconSizes.XLARGE;
    tmp7 = jsx(tmp10, obj39);
    tmp8 = closure_1;
    stringResult = closure_2;
    tmp9 = jsx;
    return;
  }
}
size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/emoji/ExpressionGuildDetails.tsx");

export default ExpressionGuildDetails;
export { ExpressionGuildDetails };
