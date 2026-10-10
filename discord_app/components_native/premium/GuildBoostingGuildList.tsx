// discord_app/components_native/premium/GuildBoostingGuildList.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import FastImageDefault from "../common/FastImage.tsx";
import GuildIconDefault from "../../modules/guild/native/GuildIcon.tsx";
import UserSettingsModalActionCreatorsDefault from "../../actions/UserSettingsModalActionCreators.tsx";
import transitionToGuild from "../../modules/routing/transitionToGuild.native.tsx";
import useGuildPowerupsBoostCountDefault from "../../modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx";
import TouchableHitBoxDefault from "../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import _modDef9785 from "../../../_runtime/metro/09785__.js";
import BoostedGuildTierProgressCircleDefault from "../../modules/premium/native/BoostedGuildTierProgressCircle.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import GuildStore from "../../stores/GuildStore.tsx";
import SortedGuildStore from "../../stores/SortedGuildStore.tsx";

require = fn;
const View = fn(17).View;
let closure_6 = fn(1085).NUMBER_OF_GUILDS_TO_RECOMMEND_BOOSTING;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  guildCard: {
    padding: 12,
    paddingLeft: 16,
    borderRadius: nativeDefault.radii.xs,
    marginBottom: 8,
    minHeight: 96,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  },
  guildIcon: { marginRight: 16 },
  guildCardDescription: { flex: 1 },
  subscriptionInfo: { flexDirection: "row", alignItems: "center" },
  premiumGuildImage: { width: 18, height: 12, marginLeft: -5 },
};
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildBoostingGuildListItem(guildId) {
      const cResult = guildId(576).c(33);
      guildId = guildId.guildId;
      const tmp4 = closure_9();
      const tmp6 = useThemeDefault();
      if (cResult[0] !== guildId) {
        function handleSelectGuild() {
          transitionToGuild.transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
          UserSettingsModalActionCreatorsDefault.close();
        }
        cResult[0] = guildId;
        cResult[1] = handleSelectGuild;
        let tmp7 = handleSelectGuild;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[2] = items;
        let tmp8 = items;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== guildId) {
        const fn = function b() {
          return GuildStore.getGuild(guildId);
        };
        cResult[3] = guildId;
        cResult[4] = fn;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[4];
      }
      let obj = guildId(576);
      const stateFromStores = guildId(504).useStateFromStores(tmp8, tmp10);
      let id;
      const tmpResult = guildId(504);
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const total = useGuildPowerupsBoostCountDefault(id).total;
      if (null == stateFromStores) {
        return null;
      } else {
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === tmp4.guildIcon) {
            let tmp14 = cResult[7];
          }
          if (cResult[8] !== stateFromStores.name) {
            const obj2 = { variant: "text-md/bold", children: stateFromStores.name };
            const tmp20 = closure_7(tmp(5088).Text, obj2);
            cResult[8] = stateFromStores.name;
            cResult[9] = tmp20;
            let tmp18 = tmp20;
          } else {
            tmp18 = cResult[9];
          }
          if (cResult[10] !== tmp4.premiumGuildImage) {
            const obj3 = {
              source: _modDef9785,
              style: tmp4.premiumGuildImage,
              resizeMode: "contain",
              resizeMethod: "resize",
            };
            const tmp24 = closure_7(FastImageDefault, obj3);
            cResult[10] = tmp4.premiumGuildImage;
            cResult[11] = tmp24;
            let tmp21 = tmp24;
            const tmp5Result3 = FastImageDefault;
          } else {
            tmp21 = cResult[11];
          }
          if (cResult[12] !== total) {
            const intl = tmp(1126).intl;
            const obj4 = { subscriberCount: total };
            const formatResult = intl.format(tmp(1126).t.If4iTS, obj4);
            cResult[12] = total;
            cResult[13] = formatResult;
            let tmp25 = formatResult;
          } else {
            tmp25 = cResult[13];
          }
          if (cResult[14] !== tmp25) {
            const obj5 = { variant: "text-xs/medium", children: tmp25 };
            const tmp29 = closure_7(tmp(5088).Text, obj5);
            cResult[14] = tmp25;
            cResult[15] = tmp29;
            let tmp27 = tmp29;
          } else {
            tmp27 = cResult[15];
          }
          if (cResult[16] === tmp4.subscriptionInfo) {
            if (cResult[17] === tmp27) {
              if (cResult[18] === tmp21) {
                let tmp30 = cResult[19];
              }
              if (cResult[20] === tmp4.guildCardDescription) {
                if (cResult[21] === tmp30) {
                  if (cResult[22] === tmp18) {
                    let tmp34 = cResult[23];
                  }
                  if (cResult[24] === stateFromStores) {
                    if (cResult[25] === tmp6) {
                      let tmp38 = cResult[26];
                    }
                    if (cResult[27] === tmp7) {
                      if (cResult[28] === tmp4.guildCard) {
                        if (cResult[29] === tmp34) {
                          if (cResult[30] === tmp38) {
                            if (cResult[31] === tmp14) {
                              let tmp41 = cResult[32];
                            }
                            return tmp41;
                          }
                        }
                      }
                    }
                    const obj6 = {
                      style: tmp44,
                      activeOpacity: 0.5,
                      accessibilityRole: "button",
                      onPress: tmp7,
                      children: null,
                    };
                    const items1 = [tmp14, tmp34, tmp38];
                    obj6.children = items1;
                    const tmp43 = closure_8(TouchableHitBoxDefault, obj6);
                    cResult[27] = tmp7;
                    cResult[28] = tmp4.guildCard;
                    cResult[29] = tmp34;
                    cResult[30] = tmp38;
                    cResult[31] = tmp14;
                    cResult[32] = tmp43;
                    tmp41 = tmp43;
                  }
                  const obj7 = { guild: stateFromStores, theme: tmp6 };
                  const tmp40 = closure_7(BoostedGuildTierProgressCircleDefault, obj7);
                  cResult[24] = stateFromStores;
                  cResult[25] = tmp6;
                  cResult[26] = tmp40;
                  tmp38 = tmp40;
                }
              }
              const obj8 = { style: tmp4.guildCardDescription, children: null };
              const items2 = [tmp18, tmp30];
              obj8.children = items2;
              const tmp37 = closure_8(View, obj8);
              cResult[20] = tmp4.guildCardDescription;
              cResult[21] = tmp30;
              cResult[22] = tmp18;
              cResult[23] = tmp37;
              tmp34 = tmp37;
            }
          }
          const obj9 = { style: tmp4.subscriptionInfo, children: null };
          const items3 = [tmp21, tmp27];
          obj9.children = items3;
          const tmp33 = closure_8(View, obj9);
          cResult[16] = tmp4.subscriptionInfo;
          cResult[17] = tmp27;
          cResult[18] = tmp21;
          cResult[19] = tmp33;
          tmp30 = tmp33;
        }
        const obj10 = {
          guild: stateFromStores,
          size: tmp(6158).GuildIconSizes.LARGE,
          style: tmp4.guildIcon,
          selected: false,
        };
        const tmp17 = closure_7(GuildIconDefault, obj10);
        cResult[5] = stateFromStores;
        cResult[6] = tmp4.guildIcon;
        cResult[7] = tmp17;
        tmp14 = tmp17;
        const tmp5Result4 = GuildIconDefault;
      }
      const tmp5Result = useGuildPowerupsBoostCountDefault;
    }
  : function GuildBoostingGuildListItem(guildId) {
      guildId = guildId.guildId;
      const tmp = closure_9();
      const tmp4 = useThemeDefault();
      const items = [GuildStore];
      const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
      useGuildPowerupsBoostCountDefault;
      if (stateFromStores != null) {
        const id = stateFromStores.id;
      }
      let tmp9 = null;
      if (null != stateFromStores) {
        const obj2 = {
          style: tmp.guildCard,
          activeOpacity: 0.5,
          accessibilityRole: "button",
          onPress: function handleSelectGuild() {
            transitionToGuild.transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
            UserSettingsModalActionCreatorsDefault.close();
          },
          children: null,
        };
        const obj3 = { guild: stateFromStores, size: null, style: null, selected: false };
        const tmp2Result = TouchableHitBoxDefault;
        obj3.size = tmp5(6158).GuildIconSizes.LARGE;
        obj3.style = tmp.guildIcon;
        const items1 = [closure_7(GuildIconDefault, obj3), ,];
        const obj4 = { style: tmp.guildCardDescription, children: null };
        const obj5 = { variant: "text-md/bold", children: stateFromStores.name };
        const items2 = [closure_7(tmp5(5088).Text, obj5)];
        const obj6 = { style: tmp.subscriptionInfo, children: null };
        const obj7 = { source: null, style: null, resizeMode: "contain", resizeMethod: "resize" };
        const tmp2Result3 = GuildIconDefault;
        obj7.source = _modDef9785;
        obj7.style = tmp.premiumGuildImage;
        const items3 = [closure_7(FastImageDefault, obj7)];
        const obj8 = { variant: "text-xs/medium", children: null };
        const intl = tmp5(1126).intl;
        const obj9 = { subscriberCount: tmp8 };
        obj8.children = intl.format(tmp5(1126).t.If4iTS, obj9);
        items3[1] = closure_7(tmp5(5088).Text, obj8);
        obj6.children = items3;
        items2[1] = closure_8(View, obj6);
        obj4.children = items2;
        items1[1] = closure_8(View, obj4);
        const obj10 = { guild: stateFromStores, theme: tmp4 };
        items1[2] = closure_7(BoostedGuildTierProgressCircleDefault, obj10);
        obj2.children = items1;
        tmp9 = closure_8(tmp2Result, obj2);
        const tmp2Result4 = FastImageDefault;
      }
      return tmp9;
    };
ReactCompilerGating = fn(558);
let obj3 = {
  padding: 12,
  paddingLeft: 16,
  borderRadius: nativeDefault.radii.xs,
  marginBottom: 8,
  minHeight: 96,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingGuildList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildBoostingGuildList(arg0) {
      const cResult = c.c(9);
      ({ guildCount, style } = arg0);
      if (undefined === guildCount) {
        guildCount = closure_6;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SortedGuildStore];
        const fn = function c() {
          return flattenedGuildIds.getFlattenedGuildIds();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === guildCount) {
        if (cResult[3] === stateFromStores) {
          if (cResult[6] === style) {
            if (cResult[7] === tmp7) {
              let tmp10 = cResult[8];
            }
            return tmp10;
          }
          const obj2 = { style, children: cResult[4] };
          const tmp13 = React5(View, obj2);
          cResult[6] = style;
          cResult[7] = cResult[4];
          cResult[8] = tmp13;
          tmp10 = tmp13;
        }
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0) {
            obj = { guildId: arg0 };
            return closure_1_7(closure_1_10, obj, arg0);
          }
        }
        cResult[5] = S;
      } else {
        class S {
          constructor(arg0) {
            obj = { guildId: arg0 };
            return closure_1_7(closure_1_10, obj, arg0);
          }
        }
      }
      const substr = stateFromStores.slice(0, guildCount);
      const mapped = substr.map(S);
      cResult[2] = guildCount;
      cResult[3] = stateFromStores;
      cResult[4] = mapped;
      const tmpResult = initialize;
    }
  : function GuildBoostingGuildList(guildCount) {
      guildCount = guildCount.guildCount;
      if (guildCount === undefined) {
        guildCount = closure_6;
      }
      const items = [SortedGuildStore];
      const stateFromStores = initialize.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
      const obj2 = { style: guildCount.style, children: null };
      const substr = stateFromStores.slice(0, guildCount);
      obj2.children = substr.map((guildId) => closure_1_7(closure_1_10, { guildId }, guildId));
      return React5(View, obj2);
    };
