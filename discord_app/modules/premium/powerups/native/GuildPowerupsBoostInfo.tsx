// discord_app/modules/premium/powerups/native/GuildPowerupsBoostInfo.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildPowerupsConstants from "../constants/GuildPowerupsConstants.tsx";
import BoostGemIcon2 from "../../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import getGuildPowerupsBoostInfoText from "../utils/getGuildPowerupsBoostInfoText.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = {
  container: obj2,
  headerContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", display: "flex" },
};
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let count;
      let items;
      let items1;
      let type;
      const obj = react;
      const cResult = obj.c(21);
      ({ count, type } = arg0);
      const tmp4 = closure_7();
      const obj2 = ManaTypeConsolidationExperiment;
      const manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment("GuildPowerupsBoostInfo");
      if (cResult[0] === count) {
        let tmp6;
        let TEXT_MUTED;
        let tmp13;
        if (cResult[1] === type) {
          tmp6 = cResult[2];
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + count + ", " + tmp6;
        if (type === BoostInfoType.AVAILABLE) {
          TEXT_MUTED = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
        } else {
          TEXT_MUTED = nativeDefault.colors.TEXT_MUTED;
        }
        if (cResult[3] !== TEXT_MUTED) {
          const obj3 = { size: "sm", color: TEXT_MUTED };
          const tmp15 = hasOwnProperty(BoostGemIcon2.BoostGemIcon, obj3);
          cResult[3] = TEXT_MUTED;
          cResult[4] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[4];
        }
        let str3 = "text-lg/medium";
        if (manaTypeConsolidationExperiment) {
          str3 = "experimental/body-lg/semibold";
        }
        let str4 = "text-subtle";
        if (type === BoostInfoType.AVAILABLE) {
          str4 = "text-strong";
        }
        if (cResult[5] === count) {
          if (cResult[6] === str3) {
            let tmp16;
            if (cResult[7] === str4) {
              tmp16 = cResult[8];
            }
            if (cResult[9] === tmp4.headerContainer) {
              if (cResult[10] === tmp13) {
                let tmp19;
                if (cResult[11] === tmp16) {
                  tmp19 = cResult[12];
                }
                let str5 = "text-md/normal";
                if (manaTypeConsolidationExperiment) {
                  str5 = "text-sm/normal";
                }
                if (cResult[13] === tmp6) {
                  let tmp23;
                  if (cResult[14] === str5) {
                    tmp23 = cResult[15];
                  }
                  if (cResult[16] === tmp4.container) {
                    if (cResult[17] === tmp23) {
                      if (cResult[18] === combined) {
                        let tmp26;
                        if (cResult[19] === tmp19) {
                          tmp26 = cResult[20];
                        }
                        return tmp26;
                      }
                    }
                  }
                  const obj4 = {
                    style: tmp4.container,
                    accessible: true,
                    accessibilityLabel: combined,
                    children: items,
                  };
                  items = [tmp19, tmp23];
                  const tmp29 = metroRequire(View, obj4);
                  cResult[16] = tmp4.container;
                  cResult[17] = tmp23;
                  cResult[18] = combined;
                  cResult[19] = tmp19;
                  cResult[20] = tmp29;
                  tmp26 = tmp29;
                }
                const obj5 = {
                  variant: str5,
                  color: "text-subtle",
                  importantForAccessibility: "no-hide-descendants",
                  children: tmp6,
                };
                const tmp25 = hasOwnProperty(Text_Text.Text, obj5);
                cResult[13] = tmp6;
                cResult[14] = str5;
                cResult[15] = tmp25;
                tmp23 = tmp25;
              }
            }
            const obj6 = {
              style: tmp4.headerContainer,
              importantForAccessibility: "no-hide-descendants",
              accessible: false,
              children: items1,
            };
            items1 = [tmp13, tmp16];
            const tmp22 = metroRequire(View, obj6);
            cResult[9] = tmp4.headerContainer;
            cResult[10] = tmp13;
            cResult[11] = tmp16;
            cResult[12] = tmp22;
            tmp19 = tmp22;
          }
        }
        const obj7 = { variant: str3, color: str4, importantForAccessibility: "no-hide-descendants", children: count };
        const tmp18 = hasOwnProperty(Text_Text.Text, obj7);
        cResult[5] = count;
        cResult[6] = str3;
        cResult[7] = str4;
        cResult[8] = tmp18;
        tmp16 = tmp18;
      }
      const tmpResult = getGuildPowerupsBoostInfoText;
      const guildPowerupsBoostInfoText = tmpResult.getGuildPowerupsBoostInfoText(count, type);
      cResult[0] = count;
      cResult[1] = type;
      cResult[2] = guildPowerupsBoostInfoText;
      tmp6 = guildPowerupsBoostInfoText;
    }
  : (arg0) => {
      let TEXT_MUTED;
      let count;
      let items;
      let items1;
      let str2;
      let type;
      ({ count, type } = arg0);
      const tmp = closure_7();
      const obj = ManaTypeConsolidationExperiment;
      const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsBoostInfo");
      const obj2 = getGuildPowerupsBoostInfoText;
      const guildPowerupsBoostInfoText = obj2.getGuildPowerupsBoostInfoText(count, type);
      const obj3 = {
        style: tmp.container,
        accessible: true,
        accessibilityLabel: "" + count + ", " + guildPowerupsBoostInfoText,
        children: items1,
      };
      const obj4 = {
        style: tmp.headerContainer,
        importantForAccessibility: "no-hide-descendants",
        accessible: false,
        children: items,
      };
      const BoostGemIcon = BoostGemIcon2.BoostGemIcon;
      if (type === BoostInfoType.AVAILABLE) {
        TEXT_MUTED = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
      } else {
        TEXT_MUTED = nativeDefault.colors.TEXT_MUTED;
      }
      items = [hasOwnProperty(BoostGemIcon, { size: "sm", color: TEXT_MUTED })];
      let str = "text-lg/medium";
      const Text = Text_Text.Text;
      if (manaTypeConsolidationExperiment) {
        str = "experimental/body-lg/semibold";
      }
      const obj5 = { variant: str, color: str2, importantForAccessibility: "no-hide-descendants", children: count };
      str2 = "text-subtle";
      if (type === BoostInfoType.AVAILABLE) {
        str2 = "text-strong";
      }
      items[1] = hasOwnProperty(Text, obj5);
      items1 = [metroRequire(View, obj4)];
      let str3 = "text-md/normal";
      const Text2 = Text_Text.Text;
      if (manaTypeConsolidationExperiment) {
        str3 = "text-sm/normal";
      }
      items1[1] = hasOwnProperty(Text2, {
        variant: str3,
        color: "text-subtle",
        importantForAccessibility: "no-hide-descendants",
        children: guildPowerupsBoostInfoText,
      });
      return metroRequire(View, obj3);
    };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostInfo.tsx");

export default tmp3;
