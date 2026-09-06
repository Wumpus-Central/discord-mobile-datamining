// discord_app/modules/messages/native/emoji/ExpressionGuildDetails.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import guild_GuildUtils from "../../../guild/GuildUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GuildBadgeDefault = tmp8(5590);
require = fn;
const View = fn(17).View;
const React4 = fn(5585).ExpressionSourceGuildRecord;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
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
createStyles.guildIcon = size;
createStyles.guildNameAndOnlineMembers = { flexDirection: "column" };
createStyles.guildNameWrapper = { flexDirection: "row", alignItems: "center", marginRight: 32 };
createStyles.guildPartnerIcon = { marginRight: 8 };
createStyles.guildDescriptionSection = { flexDirection: "row", alignItems: "center", marginTop: 4 };
const size1 = {
  width: 4,
  height: 4,
  borderRadius: nativeDefault.radii.xs,
  marginRight: 8,
  marginLeft: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
createStyles.dotSeparator = size1;
createStyles = {
  borderRadius: nativeDefault.radii.sm,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderWidth: 1,
  paddingHorizontal: 4,
  paddingBottom: 2,
};
createStyles.joinGuildButton = createStyles;
const React6 = createStyles.createStyles(createStyles);
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
        obj = { id: null, icon: null, canAnimate: true, size: 32 };
        ({ id: obj3.id, icon: obj3.icon } = guild);
        tmp6 = jsx;
        guildIconSource = obj2.getGuildIconSource(obj);
        obj1 = { style: null, source: null };
        obj1.style = tmp.guildIcon;
        obj1.source = guildIconSource;
        tmp7 = jsx(closure_1(closure_2[8]), obj1);
        tmp8 = closure_1;
        tmp9 = jsx;
      }
      tmp11 = jsxs;
      tmp12 = View;
      obj2 = { style: null, children: null };
      obj2.style = tmp.guildDetailsContainer;
      tmp13 = guild;
      obj3 = { variant: "eyebrow", color: "text-default", children: null };
      obj3.children = title;
      items = [,];
      items[0] = tmp9(guild(stringResult[9]).Text, obj3);
      obj4 = { style: null, children: null };
      obj4.style = tmp.guildDetailsContent;
      items1 = [,];
      items1[0] = tmp7;
      obj5 = { style: null, children: null };
      obj5.style = tmp.guildNameAndOnlineMembers;
      obj6 = { style: null, children: null };
      obj6.style = tmp.guildNameWrapper;
      obj7 = { guild: null, style: null, size: null, disableColor: true };
      obj7.guild = guild;
      obj7.style = tmp.guildPartnerIcon;
      tmp8Result = tmp8(stringResult[13]);
      obj7.size = guild(stringResult[14]).Icon.Sizes.REFRESH_SMALL_16;
      items2 = [,];
      items2[0] = tmp9(tmp8Result, obj7);
      obj8 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
      obj8.children = guild.name;
      items2[1] = tmp9(guild(stringResult[9]).Text, obj8);
      obj6.children = items2;
      items3 = [,];
      items3[0] = jsxs(View, obj6);
      obj9 = { style: null, children: null };
      obj9.style = tmp.guildDescriptionSection;
      if (isDiscoverableResult) {
        tmp15 = null;
        if (null != fromGuildType.presenceCount) {
          tmp16 = Fragment;
          obj10 = { variant: "text-xs/medium", color: "text-default", children: null };
          intl2 = tmp13(stringResult[10]).intl;
          obj11 = { membersOnline: null };
          obj11.membersOnline = fromGuildType.presenceCount;
          obj10.children = intl2.format(tmp13(stringResult[10]).t["LC+S+m"], obj11);
          items4 = [, ,];
          items4[0] = tmp9(tmp13(stringResult[9]).Text, obj10);
          obj12 = { style: null };
          obj12.style = tmp.dotSeparator;
          items4[1] = tmp9(tmp12, obj12);
          if (!hasJoinedGuild) {
            if (!showingJoinGuildCta) {
              obj13 = { style: null, onPress: null, children: null };
              obj13.style = tmp.joinGuildButton;
              obj13.onPress = function onPress() {
                return guild_GuildUtils.handleJoinGuild(guild.id);
              };
              obj14 = { variant: "text-xs/medium", color: "text-default", children: null };
              intl3 = tmp13(stringResult[10]).intl;
              obj14.children = intl3.string(tmp13(stringResult[10]).t.riu2R5);
              obj13.children = tmp9(tmp13(stringResult[9]).Text, obj14);
              tmp9Result = tmp9(tmp13(stringResult[11]).PressableOpacity, obj13);
            }
            obj15 = { children: null };
            items4[2] = tmp9Result;
            obj15.children = items4;
            tmp11Result = tmp11(tmp16, obj15);
          }
          obj16 = { variant: "text-xs/medium", color: "text-default", children: null };
          intl4 = tmp13(stringResult[10]).intl;
          stringResult = intl4.string(tmp13(stringResult[10]).t.inyJqO);
          obj16.children = stringResult;
          tmp9Result = tmp9(tmp13(stringResult[9]).Text, obj16);
        }
      }
      obj17 = { variant: "text-xs/medium", color: "text-default", children: null };
      intl = tmp13(stringResult[10]).intl;
      obj17.children = intl.string(tmp13(stringResult[10]).t.H29mx4);
      obj9.children = tmp9(tmp13(stringResult[9]).Text, obj17);
      items3[1] = tmp9(tmp12, obj9);
      obj5.children = items3;
      items1[1] = tmp11(tmp12, obj5);
      obj4.children = items1;
      items[1] = tmp11(tmp12, obj4);
      obj2.children = items;
      return tmp11(tmp12, obj2);
    }
    obj18 = { style: tmp.guildIcon, guild: fromGuildType, size: null, animate: true };
    tmp10 = closure_1(closure_2[6]);
    obj18.size = guild(closure_2[6]).GuildIconSizes.XLARGE;
    tmp7 = jsx(tmp10, obj18);
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
