import closure_3 from "jsxProd";
import { View } from "Text";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import importAllResult from "LinkExternalSmallIcon";

let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
({ GuildFeatures: c5, RelativeMarketingURLs: closure_6 } = ME);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
const PX_8 = require("Themes").space.PX_8;
const PX_82 = require("Themes").space.PX_8;
let closure_12 = 2 * require("Themes").space.PX_12;
let obj = { card: null, closeButton: null, centeredText: null, body: null, cta: null };
obj = { padding: require("Themes").space.PX_12 };
obj[0] = obj;
createCacheKey = { position: "absolute", top: require("Themes").space.PX_12, right: require("Themes").space.PX_12, width: 24, height: 24, alignItems: "center", justifyContent: "center", zIndex: 1 };
obj[1] = createCacheKey;
obj[2] = { textAlign: "center" };
obj[3] = { marginTop: require("Themes").space.PX_4 };
let obj2 = { marginTop: require("Themes").space.PX_4 };
obj[4] = { marginTop: require("Themes").space.PX_8 };
let closure_13 = createCacheKey.createStyles(obj);
let obj3 = { marginTop: require("Themes").space.PX_8 };
const memoResult = importAllResult.memo((arg0) => {
  let guild;
  let require;
  ({ guild, markAsDismissed: require } = arg0);
  const tmp = callback4();
  let obj = require(15163) /* fetchUnclaimedGames */;
  let first = obj.useUnclaimedGameIdsForGuild(guild.id)[0];
  if (first == null) {
    first = null;
  }
  const intl = tmp2(1236).intl;
  const tmp5 = importDefault;
  const tmp6 = importDefault(12171);
  const coverImageUrl = importDefault(12171)(first, intl.string(require(1236) /* getSystemLocale */.t.VQq92a)).coverImageUrl;
  if (null == coverImageUrl) {
    return null;
  } else {
    const features = guild.features;
    const hasItem = features.has(constants.VERIFIED);
    const intl4 = tmp2(1236).intl;
    const string = intl4.string;
    const t = tmp2(1236).t;
    if (hasItem) {
      let stringResult = string(t.uUARXe);
    } else {
      stringResult = string(t["0Dx29f"]);
    }
    obj = { variant: "secondary", style: null, children: null };
    obj[1] = tmp.card;
    obj = { accessibilityRole: "button", onPress: null, style: null, children: null };
    obj[1] = function onPress() {
      return callback(outer1_7.USER_DISMISS);
    };
    obj[2] = tmp.closeButton;
    obj[3] = callback2(tmp2(5241).XSmallIcon, { size: "sm", color: "text-default" });
    const items = [callback2(tmp2(4783).PressableOpacity, obj), , , , ];
    let obj1 = { imageSrc: null };
    obj1[0] = coverImageUrl;
    items[1] = callback2(tmp5(15162), obj1);
    const obj2 = { variant: "text-md/medium", color: "text-overlay-light", style: null, children: null };
    obj2[2] = tmp.centeredText;
    const intl2 = tmp2(1236).intl;
    const obj3 = { gameName: null };
    obj3[0] = tmp8;
    obj2[3] = intl2.format(tmp2(1236).t.Q11WTQ, obj3);
    items[2] = callback2(tmp2(4251).Text, obj2);
    const obj4 = { variant: "text-sm/normal", color: "text-overlay-light", style: null, children: null };
    const items1 = [, ];
    ({ body: arr2[0], centeredText: arr2[1] } = tmp);
    obj4[2] = items1;
    obj4[3] = stringResult;
    items[3] = callback2(tmp2(4251).Text, obj4);
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.cta;
    const obj6 = { variant: "primary", size: "sm", text: null, icon: null, iconPosition: "end", onPress: null };
    const intl3 = tmp2(1236).intl;
    obj6[2] = intl3.string(tmp2(1236).t["2u6ZlY"]);
    obj6[3] = callback2(tmp2(7753).LinkExternalSmallIcon, { size: "xs", color: "white" });
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
              v0(outer1_7.TAKE_ACTION);
              let obj1 = v02(outer1_2[20]);
              v02 = 1;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.redirectDeveloperPortalWithHandoffToken(outer1_6.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
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
    obj5[1] = callback2(tmp2(4666).Button, obj6);
    items[4] = callback2(View, obj5);
    obj[2] = items;
    return callback3(tmp2(5288).Card, obj);
  }
  const tmp6Result = importDefault(12171)(first, intl.string(require(1236) /* getSystemLocale */.t.VQq92a));
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/game_claim/native/GameClaimCoachmark.tsx");

export default memoResult;
export const GAME_CLAIM_NOTICE_MARGIN_TOP = PX_8;
export const GAME_CLAIM_NOTICE_MARGIN_BOTTOM = PX_82;
export const getScaledGameClaimNoticeHeight = function getScaledGameClaimNoticeHeight(fontScale) {
  const sum = PX_8 + closure_12;
  const sum1 = sum + require(15162) /* importDefaultResult1 */.CARD_STACK_HEIGHT;
  const sum2 = sum1 + require(10068) /* map */.scaleTextLineHeight("text-md/medium", fontScale);
  const sum3 = sum2 + importDefault(712).space.PX_4;
  const obj = require(10068) /* map */;
  const result = 2 * require(10068) /* map */.scaleTextLineHeight("text-sm/normal", fontScale);
  const sum4 = sum3 + result + importDefault(712).space.PX_8;
  return sum4 + require(4670) /* MINIMUM_HIT_AREA */.SMALL_BUTTON_HEIGHT + PX_82;
};