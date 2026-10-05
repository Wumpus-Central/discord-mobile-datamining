// discord_app/modules/guild_tag/native/VoiceGuildTag.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GuildTagConstants from "../GuildTagConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import PlatformUtils_mod from "../../../utils/PlatformUtils.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let userId;

let hasOwnProperty;
let metroRequire;
let num2;
let obj2;
const View = react_native.View;
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let PlatformUtils = PlatformUtils_mod;
let num = 10;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
let createStyles = createStyles_mod;
let obj = { gapContainer: { height: num }, tagContainer: obj2, tag: { lineHeight: num2 } };
obj2 = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: 4,
  paddingHorizontal: 4,
  marginVertical: (num - 16) / 2,
  height: 16,
  gap: 2,
};
createStyles = createStyles.createStyles;
num2 = 16;
PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isAndroid()) {
  num2 = 13;
}
let closure_7 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let first;
      let guildId;
      let items2;
      let obj3;
      let tag;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp7;
      let tmp8;
      const obj = userId(576);
      const cResult = obj.c(20);
      userId = userId.userId;
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== userId) {
        const fn = function y() {
          return UserStore.getUser(userId);
        };
        const items1 = [userId];
        cResult[1] = userId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = userId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
      let primaryGuild;
      const tmp10 = cResult[4];
      if (stateFromStores != null) {
        primaryGuild = stateFromStores.primaryGuild;
      }
      if (tmp10 !== primaryGuild) {
        const _Symbol = Symbol;
        let primaryGuild1;
        const forResult = Symbol.for("react.early_return_sentinel");
        const getUserPrimaryGuild = userId(7836).getUserPrimaryGuild;
        userId(7836);
        if (stateFromStores != null) {
          primaryGuild1 = stateFromStores.primaryGuild;
        }
        const userPrimaryGuild = getUserPrimaryGuild(primaryGuild1);
        ({ tag, guildId } = userPrimaryGuild);
        let tmp20 = null;
        let guildTagBadgeUrl;
        if (null != guildId) {
          tmp20 = null;
          if (null != tag) {
            const tmpResult4 = userId(7836);
            guildTagBadgeUrl = tmpResult4.getGuildTagBadgeUrl(guildId, tmp19, GuildTagBadgeSize.SIZE_12);
            tmp20 = forResult;
          }
        }
        let primaryGuild2;
        if (stateFromStores != null) {
          primaryGuild2 = stateFromStores.primaryGuild;
        }
        cResult[4] = primaryGuild2;
        cResult[5] = guildTagBadgeUrl;
        cResult[6] = tmp20;
        cResult[7] = tag;
        tmp14 = tag;
        tmp13 = tmp20;
        tmp12 = guildTagBadgeUrl;
      } else {
        tmp12 = cResult[5];
        tmp13 = cResult[6];
        tmp14 = cResult[7];
      }
      if (tmp13 !== Symbol.for("react.early_return_sentinel")) {
        return tmp13;
      } else {
        let tmp24;
        if (cResult[8] !== tmp12) {
          const obj2 = { source: obj3, size: GuildTagBadgeSize.SIZE_12 };
          obj3 = { uri: tmp12 };
          const tmp27 = closure_5(userId(9395).GuildTagBadge, obj2);
          cResult[8] = tmp12;
          cResult[9] = tmp27;
          tmp24 = tmp27;
        } else {
          tmp24 = cResult[9];
        }
        if (cResult[10] === tmp4.tag) {
          let tmp28;
          if (cResult[11] === tmp14) {
            tmp28 = cResult[12];
          }
          if (cResult[13] === tmp4.tagContainer) {
            if (cResult[14] === tmp24) {
              let tmp31;
              if (cResult[15] === tmp28) {
                tmp31 = cResult[16];
              }
              if (cResult[17] === tmp4.gapContainer) {
                let tmp35;
                if (cResult[18] === tmp31) {
                  tmp35 = cResult[19];
                }
                return tmp35;
              }
              const obj4 = { style: tmp4.gapContainer, children: tmp31 };
              const tmp38 = closure_5(View, obj4);
              cResult[17] = tmp4.gapContainer;
              cResult[18] = tmp31;
              cResult[19] = tmp38;
              tmp35 = tmp38;
            }
          }
          const obj5 = { style: tmp4.tagContainer, children: items2 };
          items2 = [tmp24, tmp28];
          const tmp34 = closure_6(View, obj5);
          cResult[13] = tmp4.tagContainer;
          cResult[14] = tmp24;
          cResult[15] = tmp28;
          cResult[16] = tmp34;
          tmp31 = tmp34;
        }
        const obj6 = { variant: "text-xs/semibold", color: "text-default", style: tmp4.tag, children: tmp14 };
        const tmp30 = closure_5(userId(4886).Text, obj6);
        cResult[10] = tmp4.tag;
        cResult[11] = tmp14;
        cResult[12] = tmp30;
        tmp28 = tmp30;
      }
    }
  : (userId) => {
      let guildId;
      let items2;
      let obj3;
      let obj5;
      let tag;
      userId = userId.userId;
      const tmp = closure_7();
      const items = [UserStore];
      const items1 = [userId];
      const obj = userId(504);
      const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId), items1);
      let primaryGuild;
      const getUserPrimaryGuild = userId(7836).getUserPrimaryGuild;
      userId(7836);
      if (stateFromStores != null) {
        primaryGuild = stateFromStores.primaryGuild;
      }
      const userPrimaryGuild = getUserPrimaryGuild(primaryGuild);
      ({ tag, guildId } = userPrimaryGuild);
      if (null != guildId) {
        if (null != tag) {
          const obj2 = { style: tmp.gapContainer, children: closure_6(View, obj3) };
          obj3 = { style: tmp.tagContainer, children: items2 };
          const tmp2Result = userId(7836);
          const guildTagBadgeUrl = tmp2Result.getGuildTagBadgeUrl(guildId, tmp8, GuildTagBadgeSize.SIZE_12);
          const obj4 = { source: obj5, size: GuildTagBadgeSize.SIZE_12 };
          obj5 = { uri: guildTagBadgeUrl };
          items2 = [closure_5(userId(9395).GuildTagBadge, obj4)];
          const obj6 = { variant: "text-xs/semibold", color: "text-default", style: tmp.tag, children: tag };
          items2[1] = closure_5(userId(4886).Text, obj6);
          return closure_5(View, obj2);
        }
      }
      return null;
    };
const result = size.fileFinishedImporting("modules/guild_tag/native/VoiceGuildTag.tsx");

export default tmp5;
