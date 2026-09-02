// discord_app/modules/game_claim/native/GameClaimCoachmark.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import MINIMUM_HIT_AREA from "../../../design/components/Button/native/ButtonConstants.native.tsx";
import map from "../../screen/native/useScaledTextLineHeight.android.tsx";
import useGameNameAndCoverImageDefault from "../../games/hooks/useGameNameAndCoverImage.tsx";
import importDefaultResult1 from "GameClaimCardStack.tsx";
import importDefaultResult1Default from "GameClaimCardStack.tsx";
import fetchUnclaimedGames from "../UnclaimedGamesActionCreators.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../Constants.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = arg1;
({ GuildFeatures: c5, RelativeMarketingURLs: closure_6 } = ME);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const PX_8 = ThemesDefault.space.PX_8;
const PX_82 = ThemesDefault.space.PX_8;
let closure_12 = 2 * ThemesDefault.space.PX_12;
let obj = { card: null, closeButton: null, centeredText: null, body: null, cta: null };
obj = { padding: ThemesDefault.space.PX_12 };
obj[0] = obj;
createCacheKey = {
  position: "absolute",
  top: ThemesDefault.space.PX_12,
  right: ThemesDefault.space.PX_12,
  width: 24,
  height: 24,
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
};
obj[1] = createCacheKey;
obj[2] = { textAlign: "center" };
obj[3] = { marginTop: ThemesDefault.space.PX_4 };
let obj2 = { marginTop: ThemesDefault.space.PX_4 };
obj[4] = { marginTop: ThemesDefault.space.PX_8 };
let closure_13 = createCacheKey.createStyles(obj);
let obj3 = { marginTop: ThemesDefault.space.PX_8 };
const memoResult = importAllResult.memo((arg0) => {
  ({ guild, markAsDismissed: require } = arg0);
  const tmp = callback4();
  let obj = fetchUnclaimedGames;
  let first = obj.useUnclaimedGameIdsForGuild(guild.id)[0];
  if (first == null) {
    first = null;
  }
  const intl = tmp2(1233).intl;
  const tmp5 = importDefault;
  const tmp6 = useGameNameAndCoverImageDefault;
  const coverImageUrl = useGameNameAndCoverImageDefault(first, intl.string(getSystemLocale.t.VQq92a)).coverImageUrl;
  if (null == coverImageUrl) {
    return null;
  } else {
    const features = guild.features;
    const hasItem = features.has(constants.VERIFIED);
    const intl4 = tmp2(1233).intl;
    const string = intl4.string;
    const t = tmp2(1233).t;
    if (hasItem) {
      let stringResult = string(t.uUARXe);
    } else {
      stringResult = string(t["0Dx29f"]);
    }
    obj = { variant: "secondary", style: null, children: null };
    obj[1] = tmp.card;
    obj = { accessibilityRole: "button", onPress: null, style: null, children: null };
    obj[1] = function onPress() {
      return callback(closure_1_7.USER_DISMISS);
    };
    obj[2] = tmp.closeButton;
    obj[3] = callback2(tmp2(5559).XSmallIcon, { size: "sm", color: "text-default" });
    const items = [callback2(tmp2(5076).PressableOpacity, obj), , , ,];
    obj1 = { imageSrc: null };
    obj1[0] = coverImageUrl;
    items[1] = callback2(importDefaultResult1Default, obj1);
    const obj2 = { variant: "text-md/medium", color: "text-overlay-light", style: null, children: null };
    obj2[2] = tmp.centeredText;
    const intl2 = tmp2(1233).intl;
    const obj3 = { gameName: null };
    obj3[0] = tmp8;
    obj2[3] = intl2.format(tmp2(1233).t.Q11WTQ, obj3);
    items[2] = callback2(tmp2(4474).Text, obj2);
    const obj4 = { variant: "text-sm/normal", color: "text-overlay-light", style: null, children: null };
    const items1 = [,];
    ({ body: arr2[0], centeredText: arr2[1] } = tmp);
    obj4[2] = items1;
    obj4[3] = stringResult;
    items[3] = callback2(tmp2(4474).Text, obj4);
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.cta;
    const obj6 = { variant: "primary", size: "sm", text: null, icon: null, iconPosition: "end", onPress: null };
    const intl3 = tmp2(1233).intl;
    obj6[2] = intl3.string(tmp2(1233).t["2u6ZlY"]);
    obj6[3] = callback2(tmp2(8743).LinkExternalSmallIcon, { size: "xs", color: "white" });
    obj6[5] = callback(function* () {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === v02) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              v0(closure_1_7.TAKE_ACTION);
              obj1 = v02(closure_1_2[20]);
              v02 = 1;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.redirectDeveloperPortalWithHandoffToken(
                closure_1_6.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY,
              );
              return obj1;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          v0 = tmp;
          throw tmp11;
        }
      }
    });
    obj5[1] = callback2(tmp2(4928).Button, obj6);
    items[4] = callback2(View, obj5);
    obj[2] = items;
    return callback3(tmp2(5609).Card, obj);
  }
  const tmp6Result = useGameNameAndCoverImageDefault(first, intl.string(getSystemLocale.t.VQq92a));
});
let result = require("set").fileFinishedImporting("modules/game_claim/native/GameClaimCoachmark.tsx");

export default memoResult;
export const GAME_CLAIM_NOTICE_MARGIN_TOP = PX_8;
export const GAME_CLAIM_NOTICE_MARGIN_BOTTOM = PX_82;
export const getScaledGameClaimNoticeHeight = function getScaledGameClaimNoticeHeight(fontScale) {
  const sum = PX_8 + closure_12;
  const sum1 = sum + importDefaultResult1.CARD_STACK_HEIGHT;
  const sum2 = sum1 + map.scaleTextLineHeight("text-md/medium", fontScale);
  const sum3 = sum2 + ThemesDefault.space.PX_4;
  const obj = map;
  const result = 2 * map.scaleTextLineHeight("text-sm/normal", fontScale);
  const sum4 = sum3 + result + ThemesDefault.space.PX_8;
  return sum4 + MINIMUM_HIT_AREA.SMALL_BUTTON_HEIGHT + PX_82;
};
