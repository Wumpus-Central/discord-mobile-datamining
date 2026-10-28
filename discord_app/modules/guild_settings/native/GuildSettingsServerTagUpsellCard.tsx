// discord_app/modules/guild_settings/native/GuildSettingsServerTagUpsellCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Powerups from "../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import LinearGradientDefault from "../../../../_runtime/05294_LinearGradient.js";
import GuildPowerupsActionCreators from "../../premium/powerups/GuildPowerupsActionCreators.tsx";
import useGetGuildPowerupBannerImageDefault from "../../premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx";
import GuildPowerupsImageDefault from "../../premium/powerups/native/GuildPowerupsImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildPowerupsStore from "../../premium/powerups/GuildPowerupsStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ThemeTypes = fn(1084).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const colors = ["rgba(88, 101, 242, 0.3)", "rgba(22, 26, 138, 0.3)"];
const colors2 = ["rgba(151, 151, 159, 0.04)", "rgba(151, 151, 159, 0.04)"];
let c13 = "#29292D";
const createStyles = fn(5004);
let obj2 = {
  card: {
    borderRadius: nativeDefault.radii.xl,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    backgroundColor: "#29292D",
    overflow: "hidden",
    paddingHorizontal: nativeDefault.space.PX_24,
    paddingTop: nativeDefault.space.PX_20,
    paddingBottom: nativeDefault.space.PX_24,
  },
  imageContainer: { height: 104, justifyContent: "center" },
  textBlock: { alignItems: "center" },
  centerText: { textAlign: "center" },
  body: { maxWidth: 320 },
  backgroundLayer: StyleSheet.absoluteFillObject,
  powerupImage: { width: "92%" },
};
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  borderRadius: nativeDefault.radii.xl,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: "#29292D",
  overflow: "hidden",
  paddingHorizontal: nativeDefault.space.PX_24,
  paddingTop: nativeDefault.space.PX_20,
  paddingBottom: nativeDefault.space.PX_24,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagUpsellCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildSettingsServerTagUpsellCard(guildId) {
      const cResult = guildId(576).c(48);
      guildId = guildId.guildId;
      const tmp4 = closure_14();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildPowerupsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function u() {
          const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
          let tmp2;
          if (stateForGuild != null) {
            tmp2 = stateForGuild.allPowerups[Powerups.GUILD_POWERUP_TAG_SKU_ID];
          }
          return tmp2;
        };
        const items1 = [guildId];
        cResult[1] = guildId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      let obj = guildId(576);
      const stateFromStores = guildId(504).useStateFromStores(first, tmp7, tmp8);
      const tmp11 = useGetGuildPowerupBannerImageDefault(stateFromStores, true);
      if (cResult[4] !== guildId) {
        class E {
          constructor() {
            tmp = guildId;
            if (closure_5.shouldFetchCatalogForGuild(guildId)) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
            }
            return;
          }
        }
        const items2 = [guildId];
        cResult[4] = guildId;
        cResult[5] = E;
        cResult[6] = items2;
        let tmp13 = items2;
      } else {
        class E {
          constructor() {
            tmp = guildId;
            if (closure_5.shouldFetchCatalogForGuild(guildId)) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
            }
            return;
          }
        }
        tmp13 = cResult[6];
      }
      const effect = noop.useEffect(E, tmp13);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            tmp = guildId;
            if (closure_5.shouldFetchCatalogForGuild(guildId)) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
            }
            return;
          }
        }
        const items3 = ["rgba(41, 41, 45, 0)", c13];
        const items4 = [0, 0.7];
        const point = { x: 0.5, y: 0 };
        const point1 = { x: 0.5, y: 1 };
        cResult[7] = point1;
        cResult[8] = items3;
        cResult[9] = items4;
        cResult[10] = point;
        let tmp18 = point;
        let tmp17 = items4;
        let tmp16 = items3;
        const tmp15 = point1;
      } else {
        class E {
          constructor() {
            tmp = guildId;
            if (closure_5.shouldFetchCatalogForGuild(guildId)) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
            }
            return;
          }
        }
        tmp16 = cResult[8];
        tmp17 = cResult[9];
        tmp18 = cResult[10];
      }
      if (cResult[11] !== tmp4.backgroundLayer) {
        class E {
          constructor() {
            tmp = guildId;
            if (closure_5.shouldFetchCatalogForGuild(guildId)) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
            }
            return;
          }
        }
        const obj2 = {
          style: tmp4.backgroundLayer,
          colors: tmp16,
          locations: tmp17,
          start: tmp18,
          end: tmp15,
          pointerEvents: "none",
        };
        const tmp22 = closure_7(LinearGradientDefault, obj2);
        const obj3 = { style: tmp4.backgroundLayer, colors, start, end, pointerEvents: "none" };
        const tmp26 = closure_7(LinearGradientDefault, obj3);
        const obj4 = { style: tmp4.backgroundLayer, colors: colors2, start, end, pointerEvents: "none" };
        const tmp28 = closure_7(LinearGradientDefault, obj4);
        cResult[11] = tmp4.backgroundLayer;
        cResult[12] = tmp22;
        cResult[13] = tmp26;
        cResult[14] = tmp28;
      } else {
        class E {
          constructor() {
            tmp = guildId;
            if (closure_5.shouldFetchCatalogForGuild(guildId)) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
            }
            return;
          }
        }
      }
      if (cResult[15] === tmp11) {
        class E {
          constructor() {
            tmp = guildId;
            if (closure_5.shouldFetchCatalogForGuild(guildId)) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
            }
            return;
          }
        }
        if (cResult[18] === tmp4.imageContainer) {
          class E {
            constructor() {
              tmp = guildId;
              if (closure_5.shouldFetchCatalogForGuild(guildId)) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[12]);
                powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
              }
              return;
            }
          }
          const _Symbol = Symbol;
          ({ textBlock, centerText } = tmp4);
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor() {
                tmp = guildId;
                if (closure_5.shouldFetchCatalogForGuild(guildId)) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[12]);
                  powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
                }
                return;
              }
            }
            const stringResult = obj10.string(tmp(1125).t["2QmKZ2"]);
            cResult[21] = stringResult;
            const tmp35 = stringResult;
          } else {
            class E {
              constructor() {
                tmp = guildId;
                if (closure_5.shouldFetchCatalogForGuild(guildId)) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[12]);
                  powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
                }
                return;
              }
            }
          }
          if (cResult[22] !== tmp4.centerText) {
            class E {
              constructor() {
                tmp = guildId;
                if (closure_5.shouldFetchCatalogForGuild(guildId)) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[12]);
                  powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
                }
                return;
              }
            }
            const obj5 = { variant: "heading-xl/semibold", color: "text-strong", style: centerText, children: tmp35 };
            const tmp38 = closure_7(tmp(5270).Text, obj5);
            cResult[22] = tmp4.centerText;
            cResult[23] = tmp38;
          } else {
            class E {
              constructor() {
                tmp = guildId;
                if (closure_5.shouldFetchCatalogForGuild(guildId)) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[12]);
                  powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
                }
                return;
              }
            }
          }
          if (cResult[24] === tmp4.body) {
            class E {
              constructor() {
                tmp = guildId;
                if (closure_5.shouldFetchCatalogForGuild(guildId)) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[12]);
                  powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
                }
                return;
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              class E {
                constructor() {
                  tmp = guildId;
                  if (closure_5.shouldFetchCatalogForGuild(guildId)) {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    obj = closure_0(closure_2[12]);
                    powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
                  }
                  return;
                }
              }
              const stringResult1 = obj12.string(tmp(1125).t.Tg0fDm);
              cResult[27] = stringResult1;
              const tmp40 = stringResult1;
            } else {
              class E {
                constructor() {
                  tmp = guildId;
                  if (closure_5.shouldFetchCatalogForGuild(guildId)) {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    obj = closure_0(closure_2[12]);
                    powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
                  }
                  return;
                }
              }
            }
            if (cResult[28] !== tmp39) {
              class E {
                constructor() {
                  tmp = guildId;
                  if (closure_5.shouldFetchCatalogForGuild(guildId)) {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    obj = closure_0(closure_2[12]);
                    powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
                  }
                  return;
                }
              }
              const obj6 = { variant: "text-sm/medium", color: "text-subtle", style: tmp39, children: tmp40 };
              const tmp43 = closure_7(tmp(5270).Text, obj6);
              cResult[28] = tmp39;
              cResult[29] = tmp43;
            } else {
              class E {
                constructor() {
                  tmp = guildId;
                  if (closure_5.shouldFetchCatalogForGuild(guildId)) {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    obj = closure_0(closure_2[12]);
                    powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
                  }
                  return;
                }
              }
            }
            if (cResult[30] === tmp4.textBlock) {
              class E {
                constructor() {
                  tmp = guildId;
                  if (closure_5.shouldFetchCatalogForGuild(guildId)) {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    obj = closure_0(closure_2[12]);
                    powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
                  }
                  return;
                }
              }
            }
            const obj7 = { spacing: nativeDefault.space.PX_8, style: textBlock, children: null };
            const items5 = [tmp37, tmp42];
            obj7.children = items5;
            const tmp46 = closure_8(tmp(6013).Stack, obj7);
            cResult[30] = tmp4.textBlock;
            cResult[31] = tmp37;
            cResult[32] = tmp42;
            cResult[33] = tmp46;
          }
          const items6 = [,];
          ({ centerText: arr6[0], body: arr6[1] } = tmp4);
          cResult[24] = tmp4.body;
          cResult[25] = tmp4.centerText;
          cResult[26] = items6;
        }
        const obj8 = {
          style: tmp4.imageContainer,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children: tmp29,
        };
        const tmp34 = closure_7(closure_4, obj8);
        cResult[18] = tmp4.imageContainer;
        cResult[19] = tmp29;
        cResult[20] = tmp34;
      }
      let tmp30 = null != tmp11;
      if (tmp30) {
        class E {
          constructor() {
            tmp = guildId;
            if (closure_5.shouldFetchCatalogForGuild(guildId)) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
            }
            return;
          }
        }
        const obj9 = { imageUrl: tmp11, style: tmp4.powerupImage };
        tmp30 = closure_7(GuildPowerupsImageDefault, obj9);
      }
      cResult[15] = tmp11;
      cResult[16] = tmp4.powerupImage;
      cResult[17] = tmp30;
      const tmpResult = guildId(504);
    }
  : function GuildSettingsServerTagUpsellCard(guildId) {
      guildId = guildId.guildId;
      const tmp = closure_14();
      const items = [GuildPowerupsStore];
      const items1 = [guildId];
      const stateFromStores = guildId(504).useStateFromStores(
        items,
        () => {
          const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
          let tmp2;
          if (stateForGuild != null) {
            tmp2 = stateForGuild.allPowerups[Powerups.GUILD_POWERUP_TAG_SKU_ID];
          }
          return tmp2;
        },
        items1,
      );
      const tmp6 = useGetGuildPowerupBannerImageDefault(stateFromStores, true);
      const items2 = [guildId];
      const effect = noop.useEffect(() => {
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = GuildPowerupsActionCreators.fetchPowerupCatalogForGuild(guildId);
        }
      }, items2);
      const obj2 = { theme: ThemeTypes.DARK, children: null };
      const obj3 = { style: tmp.card, children: null };
      const obj4 = {
        style: tmp.backgroundLayer,
        colors: null,
        locations: [0, 0.7],
        start: { x: 0.5, y: 0 },
        end: { x: 0.5, y: 1 },
        pointerEvents: "none",
      };
      const items3 = ["rgba(41, 41, 45, 0)", c13];
      obj4.colors = items3;
      const items4 = [
        closure_7(LinearGradientDefault, obj4),
        closure_7(LinearGradientDefault, { style: tmp.backgroundLayer, colors, start, end, pointerEvents: "none" }),
        closure_7(LinearGradientDefault, {
          style: tmp.backgroundLayer,
          colors: colors2,
          start,
          end,
          pointerEvents: "none",
        }),
      ];
      const obj7 = { spacing: nativeDefault.space.PX_16, children: null };
      const obj8 = {
        style: tmp.imageContainer,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: null,
      };
      let tmp8Result = null != tmp6;
      if (tmp8Result) {
        const obj9 = { imageUrl: tmp6, style: tmp.powerupImage };
        tmp8Result = closure_7(GuildPowerupsImageDefault, obj9);
      }
      obj8.children = tmp8Result;
      const items5 = [closure_7(closure_4, obj8), ,];
      const obj10 = { spacing: nativeDefault.space.PX_8, style: tmp.textBlock, children: null };
      const obj11 = { variant: "heading-xl/semibold", color: "text-strong", style: tmp.centerText, children: null };
      const intl = tmp2(1125).intl;
      obj11.children = intl.string(guildId(1125).t["2QmKZ2"]);
      const items6 = [closure_7(guildId(5270).Text, obj11)];
      const obj12 = { variant: "text-sm/medium", color: "text-subtle", style: null, children: null };
      const items7 = [,];
      ({ centerText: arr8[0], body: arr8[1] } = tmp);
      obj12.style = items7;
      const intl2 = tmp2(1125).intl;
      obj12.children = intl2.string(guildId(1125).t.Tg0fDm);
      items6[1] = closure_7(guildId(5270).Text, obj12);
      obj10.children = items6;
      items5[1] = closure_8(guildId(6013).Stack, obj10);
      const obj13 = { variant: "primary", size: "lg", text: null, icon: null, iconPosition: "start", onPress: null };
      const intl3 = tmp2(1125).intl;
      obj13.text = intl3.string(guildId(1125).t.kMRDWs);
      obj13.icon = closure_7(guildId(17926).BoostTier2Icon, { color: "white" });
      obj13.onPress = guildId.onUnlockPress;
      items5[2] = closure_7(guildId(5280).Button, obj13);
      obj7.children = items5;
      items4[3] = closure_8(guildId(6013).Stack, obj7);
      obj3.children = items4;
      obj2.children = closure_8(closure_4, obj3);
      return closure_7(guildId(5070).ThemeContextProvider, obj2);
    };
