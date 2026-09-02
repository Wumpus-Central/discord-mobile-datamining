// === Module 9201: ExpressionGuildDetails ===

// Module 9201 (ExpressionGuildDetails)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import getAvatarURLDefault from "getAvatarURL" /* 1430 */;
import preloadDefault from "preload" /* 5501 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 6012 */;
import getGuildBadgeSourceDefault from "getGuildBadgeSource" /* 7682 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ExpressionSourceGuildRecord as closure_4 } from "getEmojiSourceData" /* 6013 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { guildDetailsContainer: { flexDirection: "column" }, guildDetailsContent: { flexDirection: "row", marginTop: 8, alignItems: "center" }, guildIcon: null, guildNameAndOnlineMembers: null, guildNameWrapper: null, guildPartnerIcon: null, guildDescriptionSection: null, dotSeparator: null, joinGuildButton: null };
createCacheKey = { width: 40, height: 40, borderRadius: ThemesDefault.radii.sm, marginRight: 12 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { flexDirection: "column" };
createCacheKey[4] = { flexDirection: "row", alignItems: "center", marginRight: 32 };
createCacheKey[5] = { marginRight: 8 };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", marginTop: 4 };
createCacheKey[7] = { width: 4, height: 4, borderRadius: ThemesDefault.radii.xs, marginRight: 8, marginLeft: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
let obj1 = { width: 4, height: 4, borderRadius: ThemesDefault.radii.xs, marginRight: 8, marginLeft: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[8] = { borderRadius: ThemesDefault.radii.sm, borderColor: ThemesDefault.colors.BORDER_STRONG, borderWidth: 1, paddingHorizontal: 4, paddingBottom: 2 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
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
        obj2 = require("getAvatarURL");
        obj = { id: null, icon: null, canAnimate: true, size: 32 };
        ({ id: obj3[0], icon: obj3[1] } = guild);
        tmp6 = jsx;
        guildIconSource = obj2.getGuildIconSource(obj);
        obj1 = { style: null, source: null };
        obj1[0] = tmp.guildIcon;
        obj1[1] = guildIconSource;
        tmp7 = jsx(require("preload"), obj1);
        tmp8 = closure_1;
        tmp9 = jsx;
      }
      tmp11 = jsxs;
      tmp12 = View;
      obj2 = { style: null, children: null };
      obj2[0] = tmp.guildDetailsContainer;
      tmp13 = guild;
      obj3 = { variant: "eyebrow", color: "text-default", children: null };
      obj3[2] = title;
      items = [, ];
      items[0] = tmp9(require("Text").Text, obj3);
      obj4 = { style: null, children: null };
      obj4[0] = tmp.guildDetailsContent;
      items1 = [, ];
      items1[0] = tmp7;
      obj5 = { style: null, children: null };
      obj5[0] = tmp.guildNameAndOnlineMembers;
      obj6 = { style: null, children: null };
      obj6[0] = tmp.guildNameWrapper;
      obj7 = { guild: null, style: null, size: null, disableColor: true };
      obj7[0] = guild;
      obj7[1] = tmp.guildPartnerIcon;
      tmp8Result = require("getGuildBadgeSource");
      obj7[2] = require("Button").Icon.Sizes.REFRESH_SMALL_16;
      items2 = [, ];
      items2[0] = tmp9(tmp8Result, obj7);
      obj8 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
      obj8[2] = guild.name;
      items2[1] = tmp9(require("Text").Text, obj8);
      obj6[1] = items2;
      items3 = [, ];
      items3[0] = jsxs(View, obj6);
      obj9 = { style: null, children: null };
      obj9[0] = tmp.guildDescriptionSection;
      if (isDiscoverableResult) {
        tmp15 = null;
        if (null != fromGuildType.presenceCount) {
          tmp16 = Fragment;
          obj10 = { variant: "text-xs/medium", color: "text-default", children: null };
          intl2 = require("getSystemLocale").intl;
          obj11 = { membersOnline: null };
          obj11[0] = fromGuildType.presenceCount;
          obj10[2] = intl2.format(require("getSystemLocale").t["LC+S+m"], obj11);
          items4 = [, , ];
          items4[0] = tmp9(require("Text").Text, obj10);
          obj12 = { style: null };
          obj12[0] = tmp.dotSeparator;
          items4[1] = tmp9(tmp12, obj12);
          if (!hasJoinedGuild) {
            if (!showingJoinGuildCta) {
              obj13 = { style: null, onPress: null, children: null };
              obj13[0] = tmp.joinGuildButton;
              obj13[1] = function onPress() {
                return guild(closure_1_2[12]).handleJoinGuild(guild.id);
              };
              obj14 = { variant: "text-xs/medium", color: "text-default", children: null };
              intl3 = require("getSystemLocale").intl;
              obj14[2] = intl3.string(require("getSystemLocale").t.riu2R5);
              obj13[2] = tmp9(require("Text").Text, obj14);
              tmp9Result = tmp9(require("PressableBase").PressableOpacity, obj13);
            }
            obj15 = { children: null };
            items4[2] = tmp9Result;
            obj15[0] = items4;
            tmp11Result = tmp11(tmp16, obj15);
          }
          obj16 = { variant: "text-xs/medium", color: "text-default", children: null };
          intl4 = require("getSystemLocale").intl;
          stringResult = intl4.string(require("getSystemLocale").t.inyJqO);
          obj16[2] = stringResult;
          tmp9Result = tmp9(require("Text").Text, obj16);
        }
      }
      obj17 = { variant: "text-xs/medium", color: "text-default", children: null };
      intl = require("getSystemLocale").intl;
      obj17[2] = intl.string(require("getSystemLocale").t.H29mx4);
      obj9[1] = tmp9(require("Text").Text, obj17);
      items3[1] = tmp9(tmp12, obj9);
      obj5[1] = items3;
      items1[1] = tmp11(tmp12, obj5);
      obj4[1] = items1;
      items[1] = tmp11(tmp12, obj4);
      obj2[1] = items;
      return tmp11(tmp12, obj2);
    }
    obj18 = { style: tmp.guildIcon, guild: fromGuildType, size: null, animate: true };
    tmp10 = require("GuildIconSizes");
    obj18[2] = require("GuildIconSizes").GuildIconSizes.XLARGE;
    tmp7 = jsx(tmp10, obj18);
    tmp8 = closure_1;
    stringResult = closure_2;
    tmp9 = jsx;
    return;
  }
}
let obj2 = { borderRadius: ThemesDefault.radii.sm, borderColor: ThemesDefault.colors.BORDER_STRONG, borderWidth: 1, paddingHorizontal: 4, paddingBottom: 2 };
const result = require("set").fileFinishedImporting("modules/messages/native/emoji/ExpressionGuildDetails.tsx");

export default ExpressionGuildDetails;
export { ExpressionGuildDetails };