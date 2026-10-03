// === Module 16044: VoiceGuildTag ===

// Module 16044 (VoiceGuildTag)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

const require = fn;
const View = fn(17).View;
const GuildTagBadgeSize = fn(7603).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let PlatformUtils = fn(1369);
let num = 10;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
const createStyles = fn(4890);
let obj3 = { gapContainer: { height: num }, tagContainer: { alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 4, paddingHorizontal: 4, marginVertical: (num - 16) / 2, height: 16, gap: 2 }, tag: null };
let num2 = 16;
PlatformUtils = fn(1369);
if (PlatformUtils.isAndroid()) {
  num2 = 13;
}
obj3.tag = { lineHeight: num2 };
let closure_7 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
let obj4 = { alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 4, paddingHorizontal: 4, marginVertical: (num - 16) / 2, height: 16, gap: 2 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/VoiceGuildTag.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(576).c(20);
  userId = userId.userId;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
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
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = userId(576);
  const stateFromStores = userId(504).useStateFromStores(first, tmp7, tmp8);
  let primaryGuild;
  if (stateFromStores != null) {
    primaryGuild = stateFromStores.primaryGuild;
  }
  if (cResult[4] !== primaryGuild) {
    const _Symbol = Symbol;
    const forResult = Symbol.for("react.early_return_sentinel");
    let primaryGuild1;
    if (stateFromStores != null) {
      primaryGuild1 = stateFromStores.primaryGuild;
    }
    const userPrimaryGuild = tmp(7836).getUserPrimaryGuild(primaryGuild1);
    ({ tag, guildId } = userPrimaryGuild);
    let tmp18 = null;
    let guildTagBadgeUrl;
    if (null != guildId) {
      tmp18 = null;
      if (null != tag) {
        guildTagBadgeUrl = tmp(7836).getGuildTagBadgeUrl(guildId, tmp17, GuildTagBadgeSize.SIZE_12);
        tmp18 = forResult;
        const tmpResult4 = tmp(7836);
      }
    }
    let primaryGuild2;
    if (stateFromStores != null) {
      primaryGuild2 = stateFromStores.primaryGuild;
    }
    cResult[4] = primaryGuild2;
    cResult[5] = guildTagBadgeUrl;
    cResult[6] = tmp18;
    cResult[7] = tag;
    let tmp13 = tag;
    let tmp12 = tmp18;
    let tmp11 = guildTagBadgeUrl;
    const tmpResult3 = tmp(7836);
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  if (tmp12 !== Symbol.for("react.early_return_sentinel")) {
    return tmp12;
  } else {
    if (cResult[8] !== tmp11) {
      const obj2 = { source: null, size: null };
      const obj3 = { uri: tmp11 };
      obj2.source = obj3;
      obj2.size = GuildTagBadgeSize.SIZE_12;
      const tmp25 = closure_5(tmp(9395).GuildTagBadge, obj2);
      cResult[8] = tmp11;
      cResult[9] = tmp25;
      let tmp22 = tmp25;
    } else {
      tmp22 = cResult[9];
    }
    if (cResult[10] === tmp4.tag) {
      if (cResult[11] === tmp13) {
        let tmp26 = cResult[12];
      }
      if (cResult[13] === tmp4.tagContainer) {
        if (cResult[14] === tmp22) {
          if (cResult[15] === tmp26) {
            let tmp29 = cResult[16];
          }
          if (cResult[17] === tmp4.gapContainer) {
            if (cResult[18] === tmp29) {
              let tmp33 = cResult[19];
            }
            return tmp33;
          }
          const obj4 = { style: tmp4.gapContainer, children: tmp29 };
          const tmp36 = closure_5(View, obj4);
          cResult[17] = tmp4.gapContainer;
          cResult[18] = tmp29;
          cResult[19] = tmp36;
          tmp33 = tmp36;
        }
      }
      const obj5 = { style: tmp4.tagContainer, children: null };
      const items2 = [tmp22, tmp26];
      obj5.children = items2;
      const tmp32 = closure_6(View, obj5);
      cResult[13] = tmp4.tagContainer;
      cResult[14] = tmp22;
      cResult[15] = tmp26;
      cResult[16] = tmp32;
      tmp29 = tmp32;
    }
    const obj6 = { variant: "text-xs/semibold", color: "text-default", style: tmp4.tag, children: tmp13 };
    const tmp28 = closure_5(tmp(4886).Text, obj6);
    cResult[10] = tmp4.tag;
    cResult[11] = tmp13;
    cResult[12] = tmp28;
    tmp26 = tmp28;
  }
  const tmpResult = userId(504);
}) : ((userId) => {
  userId = userId.userId;
  const tmp = closure_7();
  const items = [UserStore];
  const items1 = [userId];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const obj = userId(504);
  let primaryGuild;
  if (stateFromStores != null) {
    primaryGuild = stateFromStores.primaryGuild;
  }
  const userPrimaryGuild = userId(7836).getUserPrimaryGuild(primaryGuild);
  ({ tag, guildId } = userPrimaryGuild);
  if (null != guildId) {
    if (null != tag) {
      const obj3 = { style: tmp.gapContainer, children: null };
      const obj4 = { style: tmp.tagContainer, children: null };
      const guildTagBadgeUrl = tmp2(7836).getGuildTagBadgeUrl(guildId, tmp7, GuildTagBadgeSize.SIZE_12);
      const obj5 = { source: null, size: null };
      const obj6 = { uri: guildTagBadgeUrl };
      obj5.source = obj6;
      obj5.size = GuildTagBadgeSize.SIZE_12;
      const items2 = [closure_5(tmp2(9395).GuildTagBadge, obj5), ];
      const obj7 = { variant: "text-xs/semibold", color: "text-default", style: tmp.tag, children: tag };
      items2[1] = closure_5(tmp2(4886).Text, obj7);
      obj4.children = items2;
      obj3.children = closure_6(View, obj4);
      return closure_5(View, obj3);
    }
  }
  return null;
});