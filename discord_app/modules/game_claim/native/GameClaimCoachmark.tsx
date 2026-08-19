// discord_app/modules/game_claim/native/GameClaimCoachmark.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import MINIMUM_HIT_AREA from "../../../design/components/Button/native/ButtonConstants.native.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import PressableCard from "../../../design/components/Card/native/Card.native.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import LinkExternalSmallIcon from "../../../design/components/Icon/native/redesign/generated/LinkExternalSmallIcon.tsx";
import map from "../../screen/native/useScaledTextLineHeight.android.tsx";
import useGameNameAndCoverImageDefault from "../../games/hooks/useGameNameAndCoverImage.tsx";
import importDefaultResult1 from "GameClaimCardStack.tsx";
import importDefaultResult1Default from "GameClaimCardStack.tsx";
import fetchUnclaimedGames from "../UnclaimedGamesActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../Constants.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = fn;
({ GuildFeatures: c5, RelativeMarketingURLs: closure_6 } = ME);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const PX_8 = ThemesDefault.space.PX_8;
const PX_82 = ThemesDefault.space.PX_8;
let closure_12 = 2 * ThemesDefault.space.PX_12;
let obj = { padding: ThemesDefault.space.PX_12 };
obj[0] = obj;
const createCacheKey = { position: "absolute", top: ThemesDefault.space.PX_12, right: ThemesDefault.space.PX_12, width: 24, height: 24, alignItems: "center", justifyContent: "center", zIndex: 1 };
obj[1] = createCacheKey;
obj[2] = { textAlign: "center" };
obj[3] = { marginTop: ThemesDefault.space.PX_4 };
obj[4] = { marginTop: ThemesDefault.space.PX_8 };
let closure_13 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  ({ guild, markAsDismissed: require } = arg0);
  const tmp = callback4();
  let obj = fetchUnclaimedGames;
  let first = obj.useUnclaimedGameIdsForGuild(guild.id)[0];
  if (first == null) {
    first = null;
  }
  const intl = getSystemLocale.intl;
  const coverImageUrl = useGameNameAndCoverImageDefault(first, intl.string(getSystemLocale.t.VQq92a)).coverImageUrl;
  if (null == coverImageUrl) {
    return null;
  } else {
    const features = guild.features;
    const hasItem = features.has(constants.VERIFIED);
    const intl4 = getSystemLocale.intl;
    const string = intl4.string;
    const t = getSystemLocale.t;
    if (hasItem) {
      let stringResult = string(t.uUARXe);
    } else {
      stringResult = string(t["0Dx29f"]);
    }
    obj = { variant: "secondary", style: null, children: null };
    obj[1] = tmp.card;
    obj = { accessibilityRole: "button", onPress: null, style: null, children: null };
    obj[1] = function onPress() {
      return callback(ContentDismissActionType.USER_DISMISS);
    };
    obj[2] = tmp.closeButton;
    obj[3] = callback2(XSmallIcon.XSmallIcon, { size: "sm", color: "text-default" });
    const items = [callback2(PressableBase.PressableOpacity, obj), , , , ];
    obj1 = { imageSrc: null };
    obj1[0] = coverImageUrl;
    items[1] = callback2(importDefaultResult1Default, obj1);
    const obj2 = { variant: "text-md/medium", color: "text-overlay-light", style: null, children: null };
    obj2[2] = tmp.centeredText;
    const intl2 = getSystemLocale.intl;
    const obj3 = { gameName: null };
    obj3[0] = tmp8;
    obj2[3] = intl2.format(getSystemLocale.t.Q11WTQ, obj3);
    items[2] = callback2(Text.Text, obj2);
    const obj4 = { variant: "text-sm/normal", color: "text-overlay-light", style: null, children: null };
    const items1 = [, ];
    ({ body: arr2[0], centeredText: arr2[1] } = tmp);
    obj4[2] = items1;
    obj4[3] = stringResult;
    items[3] = callback2(Text.Text, obj4);
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.cta;
    const obj6 = { variant: "primary", size: "sm", text: null, icon: null, iconPosition: "end", onPress: null };
    const intl3 = getSystemLocale.intl;
    obj6[2] = intl3.string(getSystemLocale.t["2u6ZlY"]);
    obj6[3] = callback2(LinkExternalSmallIcon.LinkExternalSmallIcon, { size: "xs", color: "white" });
    obj6[5] = callback(function*() {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              obj1[0] = obj1.redirectDeveloperPortalWithHandoffToken(closure_1_6.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp11) {
          v0 = tmp;
          throw tmp11;
        }
      }
    });
    obj5[1] = callback2(Button.Button, obj6);
    items[4] = callback2(View, obj5);
    obj[2] = items;
    return callback3(PressableCard.Card, obj);
  }
  const tmp6Result = useGameNameAndCoverImageDefault(first, intl.string(getSystemLocale.t.VQq92a));
});
let result = require("obj132").fileFinishedImporting("modules/game_claim/native/GameClaimCoachmark.tsx");

export default memoResult;
export const GAME_CLAIM_NOTICE_MARGIN_TOP = PX_8;
export const GAME_CLAIM_NOTICE_MARGIN_BOTTOM = PX_82;
export const getScaledGameClaimNoticeHeight = function getScaledGameClaimNoticeHeight(fontScale) {
  const sum = PX_8 + closure_12;
  const sum1 = sum + importDefaultResult1.CARD_STACK_HEIGHT;
  const sum2 = sum1 + map.scaleTextLineHeight("text-md/medium", fontScale);
  const sum3 = sum2 + ThemesDefault.space.PX_4;
  const result = 2 * map.scaleTextLineHeight("text-sm/normal", fontScale);
  const sum4 = sum3 + result + ThemesDefault.space.PX_8;
  return sum4 + MINIMUM_HIT_AREA.SMALL_BUTTON_HEIGHT + PX_82;
};