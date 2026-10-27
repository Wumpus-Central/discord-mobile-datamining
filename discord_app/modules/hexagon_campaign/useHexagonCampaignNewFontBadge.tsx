// discord_app/modules/hexagon_campaign/useHexagonCampaignNewFontBadge.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import HexagonCampaignPerkAvailability from "HexagonCampaignPerkAvailability.tsx";
import HexagonActionCreators from "HexagonActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import DisplayNameStylesSeenStore from "../display_name_styles/DisplayNameStylesSeenStore.tsx";
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore.tsx";

const require = globalThis.__r;

require = fn;
const HexagonCampaignConstants = fn(4997);
({
  HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: hasOwnProperty,
  HexagonCampaignPerk: metroRequire,
  HexagonCampaignPerkAvailability: closure_7,
} = HexagonCampaignConstants);
fn(558);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHexagonCampaignHasVisitedDisplayNameStyles() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [HexagonCampaignPersistedStore];
        const fn = function s() {
          return HexagonCampaignPersistedStore.hasVisitedDisplayNameStyles;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : function useHexagonCampaignHasVisitedDisplayNameStyles() {
      const items = [HexagonCampaignPersistedStore];
      return initialize.useStateFromStores(items, () => HexagonCampaignPersistedStore.hasVisitedDisplayNameStyles);
    };
let closure_8 = tmp4;
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHexagonCampaignNewFontBadge(arg0) {
      const cResult = c.c(5);
      const hexagonCampaignPerkAvailability = HexagonCampaignPerkAvailability.useHexagonCampaignPerkAvailability(
        constants.DISPLAY_NAME_STYLE,
        arg0,
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DisplayNameStylesSeenStore];
        const fn = function o() {
          seenFonts = seenFonts.getSeenFonts();
          return seenFonts.has(closure_1_5);
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            obj = closure_1_0(closure_1_1[8]);
            result = obj.markDisplayNameStyleFontSeen(closure_1_5);
            return;
          }
        }
        cResult[2] = C;
      } else {
        class C {
          constructor() {
            obj = closure_1_0(closure_1_1[8]);
            result = obj.markDisplayNameStyleFontSeen(closure_1_5);
            return;
          }
        }
      }
      if (cResult[3] !== (hexagonCampaignPerkAvailability === constants2.SELECTABLE && !stateFromStores)) {
        class C {
          constructor() {
            obj = closure_1_0(closure_1_1[8]);
            result = obj.markDisplayNameStyleFontSeen(closure_1_5);
            return;
          }
        }
        tmp12[0] = tmp10;
        tmp12[1] = C;
        cResult[3] = tmp10;
        cResult[4] = tmp12;
      } else {
        class C {
          constructor() {
            obj = closure_1_0(closure_1_1[8]);
            result = obj.markDisplayNameStyleFontSeen(closure_1_5);
            return;
          }
        }
      }
      return tmp12;
    }
  : function useHexagonCampaignNewFontBadge(arg0) {
      let tmp =
        HexagonCampaignPerkAvailability.useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, arg0) ===
        constants2.SELECTABLE;
      const items = [DisplayNameStylesSeenStore];
      if (tmp) {
        tmp = !obj2.useStateFromStores(items, () => {
          seenFonts = seenFonts.getSeenFonts();
          return seenFonts.has(closure_1_5);
        });
      }
      obj2 = initialize;
      return {
        showCampaignFontBadge: tmp,
        dismissCampaignFontBadge: noop.useCallback(() => {
          const result = require("DisplayNameStylesActionCreators").markDisplayNameStyleFontSeen(closure_1_5);
        }, []),
      };
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/useHexagonCampaignNewFontBadge.tsx");

export const useHexagonCampaignNewFontBadge = tmp3;
export const useHexagonCampaignHasVisitedDisplayNameStyles = tmp4;
export const useMarkHexagonCampaignDisplayNameStylesVisited = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMarkHexagonCampaignDisplayNameStylesVisited(arg0) {
      const cResult = require("c").c(4);
      let obj = require("c");
      const tmp2 =
        require("HexagonCampaignPerkAvailability").useHexagonCampaignPerkAvailability(
          constants.DISPLAY_NAME_STYLE,
          arg0,
        ) === constants2.SELECTABLE;
      _require = tmp2;
      const tmp3 = closure_8();
      dependencyMap = tmp3;
      if (cResult[0] === tmp3) {
        if (cResult[1] === tmp2) {
          let tmp4 = cResult[2];
          let tmp5 = cResult[3];
        }
        const effect = noop.useEffect(tmp4, tmp5);
      }
      const fn = function t() {
        let tmp = closure_0;
        if (closure_0) {
          tmp = !closure_1;
        }
        if (tmp) {
          const result = HexagonActionCreators.markHexagonCampaignDisplayNameStylesVisited();
        }
      };
      const items = [tmp2, tmp3];
      cResult[0] = tmp3;
      cResult[1] = tmp2;
      cResult[2] = fn;
      cResult[3] = items;
      tmp5 = items;
      tmp4 = fn;
      const obj2 = require("HexagonCampaignPerkAvailability");
    }
  : function useMarkHexagonCampaignDisplayNameStylesVisited(arg0) {
      let tmp =
        require("HexagonCampaignPerkAvailability").useHexagonCampaignPerkAvailability(
          constants.DISPLAY_NAME_STYLE,
          arg0,
        ) === constants2.SELECTABLE;
      _require = tmp;
      const tmp2 = closure_8();
      dependencyMap = tmp2;
      const items = [tmp, tmp2];
      const effect = noop.useEffect(() => {
        let tmp = closure_0;
        if (closure_0) {
          tmp = !closure_1;
        }
        if (tmp) {
          const result = HexagonActionCreators.markHexagonCampaignDisplayNameStylesVisited();
        }
      }, items);
    };
