// discord_app/modules/display_name_styles/DisplayNameStylesFontOrder.tsx
import c from "../../../_runtime/00576_c.js";
import HexagonCampaignPerkAvailability from "../hexagon_campaign/HexagonCampaignPerkAvailability.tsx";
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const DisplayNameStylesConstants = fn(1407);
({ FLYWHEEL_FONTS, HEXAGON_CAMPAIGN_FONTS: c3 } = DisplayNameStylesConstants);
const HexagonCampaignConstants = fn(5029);
({ HexagonCampaignPerk: closure_4, HexagonCampaignPerkAvailability: hasOwnProperty } = HexagonCampaignConstants);
let items = [
  fn(1409).DisplayNameFont.DEFAULT,
  fn(1409).DisplayNameFont.ZILLA_SLAB,
  fn(1409).DisplayNameFont.CHERRY_BOMB,
  fn(1409).DisplayNameFont.CHICLE,
  fn(1409).DisplayNameFont.MUSEO_MODERNO,
  fn(1409).DisplayNameFont.NEO_CASTEL,
  fn(1409).DisplayNameFont.PIXELIFY,
  fn(1409).DisplayNameFont.SINISTRE,
];
const items1 = [...FLYWHEEL_FONTS];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export const useVisibleFontOrder = ReactCompilerGating.isReactCompilerEnabled()
  ? function useVisibleFontOrder(arg0) {
      const cResult = c.c(5);
      if (cResult[0] !== arg0) {
        let obj2 = arg0;
        if (undefined === arg0) {
          obj2 = {};
        }
        cResult[0] = arg0;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const includeCampaignFonts = tmp4.includeCampaignFonts;
      let tmp5 = undefined !== includeCampaignFonts && includeCampaignFonts;
      const isDisplayNameStylesFlywheelSettersEnabled =
        DisplayNameStylesFlywheelExperiment.useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
      HexagonCampaignPerkAvailability;
      if (tmp5) {
        tmp5 = tmp8 !== constants.HIDDEN;
      }
      const tmp10 = isDisplayNameStylesFlywheelSettersEnabled ? items1 : items;
      if (cResult[2] === tmp10) {
        if (cResult[3] === tmp5) {
          let tmp11 = cResult[4];
        }
        return tmp11;
      }
      let tmp12 = tmp10;
      if (tmp5) {
        items = [];
        HermesBuiltin.arraySpread(React3, HermesBuiltin.arraySpread(tmp10, 0));
        tmp12 = items;
      }
      cResult[2] = tmp10;
      cResult[3] = tmp5;
      cResult[4] = tmp12;
      tmp11 = tmp12;
      const tmpResult = DisplayNameStylesFlywheelExperiment;
    }
  : function useVisibleFontOrder() {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let flag = obj.includeCampaignFonts;
      if (flag === undefined) {
        flag = false;
      }
      let isDisplayNameStylesFlywheelSettersEnabled;
      flag = undefined;
      isDisplayNameStylesFlywheelSettersEnabled = isDisplayNameStylesFlywheelSettersEnabled(
        flag[6],
      ).useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
      isDisplayNameStylesFlywheelSettersEnabled(flag[7]);
      if (flag) {
        flag = tmp3 !== constants.HIDDEN;
      }
      items = [isDisplayNameStylesFlywheelSettersEnabled, flag];
      return noop.useMemo(() => {
        const tmp = isDisplayNameStylesFlywheelSettersEnabled ? items1 : items;
        let tmp2 = tmp;
        if (flag) {
          items = [];
          HermesBuiltin.arraySpread(React3, HermesBuiltin.arraySpread(tmp, 0));
          tmp2 = items;
        }
        return tmp2;
      }, items);
    };
