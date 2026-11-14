// discord_app/modules/hexagon_campaign/native/HexagonCampaignExpiredPromoSheet.tsx
import _modDef4516 from "../HexagonCampaign.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ContentDismissActionType = fn(5152).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignExpiredPromoSheet.tsx");

export default function HexagonCampaignExpiredPromoSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  _require = markAsDismissed;
  importDefault = undefined;
  let callback;
  noop = undefined;
  const trackHexagonCampaignContentViewed = require("HexagonCampaignAnalytics").useTrackHexagonCampaignContentViewed(
    require("QuestTypes").QuestContent.AD_PERK_MODAL,
    require("HexagonCampaignAnalytics").HexagonCampaignContentSurface.EXPIRED_SHEET,
    true,
  );
  let obj = require("HexagonCampaignAnalytics");
  [tmp3, c1] = callback(noop.useState(false), 2);
  dependencyMap = noop.useRef(false);
  asyncGeneratorStep = noop.useRef(false);
  _require = asyncGeneratorStep(async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            _undefined = tmp7;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            if (!ref.current) {
              if (!tmp3.current) {
                tmp3.current = true;
                _undefined(true);
                closure_129_1 = false;
                ref = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: closure_0(tmp3[7]).restoreExpiredHexagonCampaignPerks([]), done: false };
                return obj5;
              }
            }
            c5 = 3;
            return { value: false, done: true };
          }
        } else {
          if (1 === tmp7) {
            ref = 0;
            closure_129_1 = false;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            ref = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_129_1 = value;
            ref = 0;
          }
          tmp3.current = false;
          _undefined(false);
          if (closure_129_1) {
            ref.current = true;
            closure_0(closure_129_0);
          }
          c5 = 3;
          const obj6 = { value: closure_129_1, done: true };
          return obj6;
        }
      } catch (tmp29) {
        if (tmp4 === ref) {
          c5 = tmp2;
          throw tmp29;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  items = [markAsDismissed];
  callback = noop.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  const tmp2 = callback(noop.useState(false), 2);
  const unmountEffect = require("useMountEffect").useUnmountEffect(() => {
    callback(ContentDismissActionType.AUTO_DISMISS);
  });
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (ref === 2) {
        ref = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          ref = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              ref = 3;
              throw value;
            } else if (arg0 === 2) {
              ref = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let current = ref2.current;
              if (!current) {
                current = ref.current;
              }
              if (current) {
                ref = 3;
              } else {
                v1 = 1;
                ref = 1;
                const obj4 = { value: callback(constants.TAKE_ACTION), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            ref = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (!value) {
              const obj5 = { text: null };
              const intl = tmp4(ref[10]).intl;
              obj5.text = intl.string(tmp4(ref[10]).t.F8FvUy);
              v1(ref[9]).open("HEXAGON_CAMPAIGN_RESTORE_ERROR", obj5);
              const obj = v1(ref[9]);
            }
          }
          ref = 3;
          const obj6 = { value, done: true };
          return obj6;
        } catch (tmp14) {
          ref = tmp;
          throw tmp14;
        }
      }
    }),
    items1,
  );
  const callback2 = noop.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items2);
  noop = noop.useCallback(() => {
    const obj = closure_0(17085);
    const result = obj.trackHexagonCampaignContentClicked({
      content: closure_0(5341).QuestContent.AD_PERK_MODAL,
      questContentCTA: closure_0(8834).QuestContentCTA.LEARN_MORE,
    });
    const obj2 = {
      content: closure_0(5341).QuestContent.AD_PERK_MODAL,
      questContentCTA: closure_0(8834).QuestContentCTA.LEARN_MORE,
    };
    const result1 = closure_0(17104).openHexagonCampaignLearnMore();
  }, []);
  let obj3 = {
    illustration: jsx(require("BundleAbstractUI").BundleAbstractUI, { accessible: false }),
    title: null,
    description: null,
    onDismiss: null,
    actions: null,
  };
  let intl = require("util").intl;
  obj3.title = intl.string(_modDef4516.bZTNDw);
  const intl2 = require("util").intl;
  obj3.description = intl2.format(_modDef4516.uL0TOA, {
    learnMoreHook(children, key) {
      return jsx(
        Text_Text.Text,
        { variant: "heading-md/medium", color: "text-link", accessibilityRole: "link", onPress, children },
        key,
      );
    },
  });
  obj3.onDismiss = callback2;
  let obj5 = { size: "lg", grow: true, text: null, loading: null, onPress: null };
  const intl3 = require("util").intl;
  obj5.text = intl3.string(require("util").t.i4jeWR);
  obj5.loading = tmp3;
  obj5.onPress = callback1;
  obj3.actions = jsx(require("components/Button/Button").Button, {
    size: "lg",
    grow: true,
    text: null,
    loading: null,
    onPress: null,
  });
  return jsx(require("PromoSheet").PromoSheet, {
    illustration: jsx(require("BundleAbstractUI").BundleAbstractUI, { accessible: false }),
    title: null,
    description: null,
    onDismiss: null,
    actions: null,
  });
}
