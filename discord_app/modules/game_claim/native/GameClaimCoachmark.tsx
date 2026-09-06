// === Module 16190: GameClaimCoachmark ===

// Module 16190 (GameClaimCoachmark)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import ButtonConstants from "ButtonConstants" /* 4980 */;
import Pressables from "Pressables" /* 5123 */;
import Card from "Card" /* 5607 */;
import XSmallIcon from "XSmallIcon" /* 5680 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 8580 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 8920 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10119 */;
import GameClaimCardStack from "GameClaimCardStack" /* 16191 */;
import UnclaimedGamesActionCreators from "UnclaimedGamesActionCreators" /* 16192 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const GameClaimCardStackDefault = GameClaimCardStack;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ GuildFeatures: hasOwnProperty, RelativeMarketingURLs: metroRequire } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_82 = nativeDefault.space.PX_8;
let closure_12 = 2 * nativeDefault.space.PX_12;
fn(4560);
let obj = { card: null, closeButton: null, centeredText: null, body: null, cta: null };
obj = { padding: nativeDefault.space.PX_12 };
obj.card = obj;
let size = { position: "absolute", top: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12, width: 24, height: 24, alignItems: "center", justifyContent: "center", zIndex: 1 };
obj.closeButton = size;
obj.centeredText = { textAlign: "center" };
const createStyles = { marginTop: nativeDefault.space.PX_4 };
obj.body = createStyles;
obj.cta = { marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj);
let obj2 = { marginTop: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_claim/native/GameClaimCoachmark.tsx");

export default noop.memo((arg0) => {
  ({ guild, markAsDismissed: require } = arg0);
  const tmp = closure_13();
  let obj = UnclaimedGamesActionCreators;
  let first = obj.useUnclaimedGameIdsForGuild(guild.id)[0];
  if (first == null) {
    first = null;
  }
  const intl = util.intl;
  const coverImageUrl = useGameNameAndCoverImageDefault(first, intl.string(util.t.VQq92a)).coverImageUrl;
  if (null == coverImageUrl) {
    return null;
  } else {
    const features = guild.features;
    const hasItem = features.has(constants.VERIFIED);
    const intl4 = util.intl;
    const string = intl4.string;
    const t = util.t;
    if (hasItem) {
      let stringResult = string(t.uUARXe);
    } else {
      stringResult = string(t["0Dx29f"]);
    }
    obj = { variant: "secondary", style: tmp.card, children: null };
    obj = {
      accessibilityRole: "button",
      onPress() {
          return require(ContentDismissActionType.USER_DISMISS);
        },
      style: tmp.closeButton,
      children: closure_8(XSmallIcon.XSmallIcon, { size: "sm", color: "text-default" })
    };
    const items = [closure_8(Pressables.PressableOpacity, obj), , , , ];
    let obj1 = { imageSrc: coverImageUrl };
    items[1] = closure_8(GameClaimCardStackDefault, obj1);
    const obj2 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp.centeredText, children: null };
    const intl2 = util.intl;
    const obj3 = { gameName: tmp8 };
    obj2.children = intl2.format(util.t.Q11WTQ, obj3);
    items[2] = closure_8(Text_Text.Text, obj2);
    const obj4 = { variant: "text-sm/normal", color: "text-overlay-light", style: null, children: null };
    const items1 = [, ];
    ({ body: arr2[0], centeredText: arr2[1] } = tmp);
    obj4.style = items1;
    obj4.children = stringResult;
    items[3] = closure_8(Text_Text.Text, obj4);
    const obj5 = { style: tmp.cta, children: null };
    const obj6 = { variant: "primary", size: "sm", text: null, icon: null, iconPosition: "end", onPress: null };
    const intl3 = util.intl;
    obj6.text = intl3.string(util.t["2u6ZlY"]);
    obj6.icon = closure_8(LinkExternalSmallIcon.LinkExternalSmallIcon, { size: "xs", color: "white" });
    obj6.onPress = asyncGeneratorStep(async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              require(constants2.TAKE_ACTION);
              let obj1 = v1(dependencyMap[20]);
              v1 = 1;
              c0 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.redirectDeveloperPortalWithHandoffToken(constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
              return obj1;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          c0 = tmp;
          throw tmp11;
        }
      }
    });
    obj5.children = closure_8(components_Button_Button.Button, obj6);
    items[4] = closure_8(View, obj5);
    obj.children = items;
    return closure_9(Card.Card, obj);
  }
  const tmp6Result = useGameNameAndCoverImageDefault(first, intl.string(util.t.VQq92a));
});
export const GAME_CLAIM_NOTICE_MARGIN_TOP = PX_8;
export const GAME_CLAIM_NOTICE_MARGIN_BOTTOM = PX_82;
export const getScaledGameClaimNoticeHeight = function getScaledGameClaimNoticeHeight(fontScale) {
  const sum = PX_8 + closure_12;
  const sum1 = sum + GameClaimCardStack.CARD_STACK_HEIGHT;
  const sum2 = sum1 + useScaledTextLineHeight.scaleTextLineHeight("text-md/medium", fontScale);
  const sum3 = sum2 + nativeDefault.space.PX_4;
  const result = 2 * useScaledTextLineHeight.scaleTextLineHeight("text-sm/normal", fontScale);
  const sum4 = sum3 + result + nativeDefault.space.PX_8;
  return sum4 + ButtonConstants.SMALL_BUTTON_HEIGHT + PX_82;
};