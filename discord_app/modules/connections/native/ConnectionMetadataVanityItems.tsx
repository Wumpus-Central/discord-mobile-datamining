// === Module 11395: PaypalVanityTag ===

// Module 11395 (PaypalVanityTag)
import applyDefault from "apply" /* 12 */;
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Button from "Button" /* 1296 */;
import shortenAndLocalizeNumber from "shortenAndLocalizeNumber" /* 1896 */;
import Text from "Text" /* 4474 */;
import officialApplicationIds from "officialApplicationIds" /* 5359 */;
import registerAssetDefault from "registerAsset" /* 11396 */;
import registerAssetDefault2 from "registerAsset" /* 11397 */;
import { View } from "get ActivityIndicator" /* 17 */;
import OperatorTypes from "OperatorTypes" /* 5360 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function PaypalVanityTag(style) {
  const tmp = callback3();
  const obj = { style: items, label: null, textStyle: null };
  items = [tmp.paypalVerifiedTag, style.style];
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.IhXLyx);
  obj[2] = tmp.paypalVerifiedTagText;
  return callback(VanityTag, obj, constants.PAYPAL_VERIFIED);
}
function VanityMetric(label) {
  label = label.label;
  ({ count, style, percent } = label);
  let obj = shortenAndLocalizeNumber;
  let str = "";
  const result = obj.shortenAndLocalizeNumber(count);
  if (percent) {
    str = "%";
  }
  const sum = result + str;
  if (typeof label === "string") {
    const intl = tmp2(1233).intl;
    obj = { name: null, value: null };
    obj[0] = label;
    obj[1] = sum;
    let children = intl.format(tmp2(1233).t.HLoinF, obj);
  } else {
    const intl2 = tmp2(1233).intl;
    obj = { value: null };
    obj[0] = sum;
    children = intl2.format(label, obj);
  }
  style = [callback3().connectedAccountVanityMetadata, ];
  style[1] = style;
  return callback(Text.Text, { variant: "text-xs/normal", color: "text-muted", style, children });
}
function VanityItem(style) {
  style = style.style;
  ({ label, imageSrc, imageAlt } = style);
  const tmp = callback3();
  let obj = { style: items, children: null };
  items = [, , ];
  ({ connectedAccountVanityMetadata: arr[0], connectedAccountVanityMetadataItem: arr[1] } = tmp);
  items[2] = style;
  obj = { source: imageSrc, accessibilityLabel: imageAlt, style: tmp.connectedAccountVanityMetadataItemIcon, disableColor: true };
  const items1 = [callback(Button.Icon, obj), callback(Text.Text, { variant: "text-xs/normal", color: "text-muted", style, children: label })];
  obj[1] = items1;
  return callback2(View, obj);
}
function VanityTag(arg0) {
  ({ label, style, textStyle } = arg0);
  const tmp = callback3();
  const items = [, , ];
  ({ connectedAccountVanityMetadata: arr[0], connectedAccountVanityMetadataTag: arr[1] } = tmp);
  items[2] = style;
  return callback(View, { style: items, children: callback(Text.Text, { variant: "text-xs/normal", color: "text-muted", style: textStyle, children: label }) });
}
function VanityDate(arg0) {
  ({ date, label, locale, style } = arg0);
  let obj = { variant: "text-xs/normal", color: "text-muted", style: items, children: null };
  items = [callback3().connectedAccountVanityMetadata, style];
  const intl = getSystemLocale.intl;
  obj = { value: null, name: null };
  const tmp = callback3();
  obj[0] = officialApplicationIds.getCreatedAtDate(date, locale);
  obj[1] = label;
  obj[3] = intl.format(getSystemLocale.t.HLoinF, obj);
  return callback(Text.Text, obj);
}
noopAll;
({ MetadataFields: c4, MetadataItemTypes: c5 } = OperatorTypes);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { connectedAccountVanityMetadata: { marginTop: 4, paddingRight: 8 }, connectedAccountVanityMetadataItem: { flexDirection: "row", alignItems: "center" }, connectedAccountVanityMetadataItemIcon: { height: 18, width: 18, marginRight: 8 }, connectedAccountVanityMetadataTag: null, paypalVerifiedTag: null, paypalVerifiedTagText: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.md, paddingHorizontal: 8, paddingVertical: 1, marginRight: 8 };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.STATUS_POSITIVE_BACKGROUND };
let obj1 = { backgroundColor: ThemesDefault.colors.STATUS_POSITIVE_BACKGROUND };
createCacheKey[5] = { color: ThemesDefault.colors.WHITE };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj2 = { color: ThemesDefault.colors.WHITE };
let result = require("set").fileFinishedImporting("modules/connections/native/ConnectionMetadataVanityItems.tsx");

export const generateRedditMetadataItems = function generateRedditMetadataItems(metadata, metadataItem) {
  let num = metadata[constants.REDDIT_TOTAL_KARMA];
  if (num == null) {
    num = -1;
  }
  const items = [];
  const NumberResult = Number(num);
  if (NumberResult > -1) {
    let obj = { style: null, count: null, label: null };
    obj[0] = tmp;
    obj[1] = NumberResult;
    obj[2] = getSystemLocale.t.SbCNox;
    items.push(callback(VanityMetric, obj, tmp2.REDDIT_TOTAL_KARMA));
  }
  if ("1" === metadata[constants.REDDIT_GOLD]) {
    obj = { style: null, label: null };
    obj[0] = tmp;
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t["06rDHU"]);
    items.push(callback(VanityTag, obj, tmp2.REDDIT_GOLD));
  }
  if ("1" === metadata[constants.REDDIT_MOD]) {
    obj = { style: null, label: null };
    obj[0] = tmp;
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.oWM95M);
    items.push(callback(VanityTag, obj, tmp2.REDDIT_MOD));
  }
  return items;
};
export const generateTwitterMetadataItems = function generateTwitterMetadataItems(metadata, metadataItem) {
  let num = metadata[constants.TWITTER_STATUSES_COUNT];
  if (num == null) {
    num = -1;
  }
  const NumberResult = Number(num);
  let num2 = metadata[tmp2.TWITTER_FOLLOWERS_COUNT];
  if (num2 == null) {
    num2 = -1;
  }
  const items = [];
  const NumberResult1 = Number(num2);
  if (NumberResult > -1) {
    let obj = { style: null, count: null, label: null };
    obj[0] = tmp;
    obj[1] = NumberResult;
    obj[2] = getSystemLocale.t.llwqqe;
    items.push(callback(VanityMetric, obj, tmp2.TWITTER_STATUSES_COUNT));
  }
  if (NumberResult1 > -1) {
    obj = { style: null, count: null, label: null };
    obj[0] = tmp;
    obj[1] = NumberResult1;
    obj[2] = getSystemLocale.t.LMNOUQ;
    items.push(callback(VanityMetric, obj, tmp2.TWITTER_FOLLOWERS_COUNT));
  }
  return items;
};
export const generateBlueskyMetadataItems = function generateBlueskyMetadataItems(arg0) {
  let num = arg0[constants.BLUESKY_STATUSES_COUNT];
  if (num == null) {
    num = -1;
  }
  const NumberResult = Number(num);
  let num2 = arg0[tmp2.BLUESKY_FOLLOWERS_COUNT];
  if (num2 == null) {
    num2 = -1;
  }
  const items = [];
  const NumberResult1 = Number(num2);
  if (NumberResult > -1) {
    let obj = { style: null, count: null, label: null };
    obj[0] = tmp;
    obj[1] = NumberResult;
    obj[2] = getSystemLocale.t.thA2ir;
    items.push(callback(VanityMetric, obj, tmp2.BLUESKY_STATUSES_COUNT));
  }
  if (NumberResult1 > -1) {
    obj = { style: null, count: null, label: null };
    obj[0] = tmp;
    obj[1] = NumberResult1;
    obj[2] = getSystemLocale.t.RQath2;
    items.push(callback(VanityMetric, obj, tmp2.BLUESKY_FOLLOWERS_COUNT));
  }
  return items;
};
export const generateSteamMetadataItems = function generateSteamMetadataItems(metadata, metadataItem) {
  let num = metadata[constants.STEAM_GAME_COUNT];
  if (num == null) {
    num = -1;
  }
  const NumberResult = Number(num);
  let num2 = metadata[tmp2.STEAM_ITEM_COUNT_DOTA2];
  if (num2 == null) {
    num2 = -1;
  }
  const NumberResult1 = Number(num2);
  let num3 = metadata[tmp2.STEAM_ITEM_COUNT_TF2];
  if (num3 == null) {
    num3 = -1;
  }
  const items = [];
  const NumberResult2 = Number(num3);
  if (NumberResult > -1) {
    let obj = { style: null, count: null, label: null };
    obj[0] = tmp;
    obj[1] = NumberResult;
    obj[2] = getSystemLocale.t["ppXMu/"];
    items.push(callback(VanityMetric, obj, tmp2.STEAM_GAME_COUNT));
  }
  if (NumberResult1 > -1) {
    obj = { style: null, label: null, imageSrc: null, imageAlt: null };
    obj[0] = tmp;
    const intl = getSystemLocale.intl;
    obj = { count: null };
    obj[0] = NumberResult1;
    obj[1] = intl.format(getSystemLocale.t.Y88M5x, obj);
    obj[2] = registerAssetDefault;
    const intl2 = getSystemLocale.intl;
    obj[3] = intl2.string(getSystemLocale.t.HKUEZo);
    items.push(callback(VanityItem, obj, tmp2.STEAM_ITEM_COUNT_DOTA2));
  }
  if (NumberResult2 > -1) {
    obj1 = { style: null, label: null, imageSrc: null, imageAlt: null };
    obj1[0] = tmp;
    const intl3 = getSystemLocale.intl;
    const obj2 = { count: null };
    obj2[0] = NumberResult2;
    obj1[1] = intl3.format(getSystemLocale.t.Y88M5x, obj2);
    obj1[2] = registerAssetDefault2;
    const intl4 = getSystemLocale.intl;
    obj1[3] = intl4.string(getSystemLocale.t.C8p1Sh);
    items.push(callback(VanityItem, obj1, tmp2.STEAM_ITEM_COUNT_TF2));
  }
  return items;
};
export const generatePaypalMetadataItems = function generatePaypalMetadataItems(metadata, metadataItem) {
  const items = [];
  if ("1" === metadata[constants.PAYPAL_VERIFIED]) {
    const obj = { style: null };
    obj[0] = metadataItem;
    items.push(callback(PaypalVanityTag, obj));
  }
  return items;
};
export const generateEbayMetadataItems = function generateEbayMetadataItems(metadata, metadataItem) {
  let num = metadata[constants.EBAY_POSITIVE_FEEDBACK_PERCENTAGE];
  if (num == null) {
    num = -1;
  }
  const items = [];
  const NumberResult = Number(num);
  if (NumberResult > 0) {
    let obj = { style: null, count: null, label: null, percent: true };
    obj[0] = tmp;
    obj[1] = NumberResult;
    obj[2] = getSystemLocale.t.YmL22d;
    items.push(callback(VanityMetric, obj, tmp2.EBAY_POSITIVE_FEEDBACK_PERCENTAGE));
  }
  if ("1" === metadata[constants.EBAY_TOP_RATED_SELLER]) {
    obj = { style: null, label: null };
    obj[0] = tmp;
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t.TEEYwa);
    items.push(callback(VanityTag, obj, tmp2.EBAY_TOP_RATED_SELLER));
  }
  return items;
};
export const generateTikTokMetadataItems = function generateTikTokMetadataItems(metadata, metadataItem) {
  let num = metadata[constants.TIKTOK_FOLLOWER_COUNT];
  if (num == null) {
    num = -1;
  }
  const NumberResult = Number(num);
  let num2 = metadata[tmp2.TIKTOK_FOLLOWING_COUNT];
  if (num2 == null) {
    num2 = -1;
  }
  const NumberResult1 = Number(num2);
  let num3 = metadata[tmp2.TIKTOK_LIKES_COUNT];
  if (num3 == null) {
    num3 = -1;
  }
  const items = [];
  const NumberResult2 = Number(num3);
  if (NumberResult > -1) {
    let obj = { style: null, count: null, label: null };
    obj[0] = tmp;
    obj[1] = NumberResult;
    obj[2] = getSystemLocale.t["Mpm/Bc"];
    items.push(callback(VanityMetric, obj, tmp2.TIKTOK_FOLLOWER_COUNT));
  }
  if (NumberResult1 > -1) {
    obj = { style: null, count: null, label: null };
    obj[0] = tmp;
    obj[1] = NumberResult1;
    obj[2] = getSystemLocale.t.ftf12v;
    items.push(callback(VanityMetric, obj, tmp2.TIKTOK_FOLLOWING_COUNT));
  }
  if (NumberResult2 > -1) {
    obj = { style: null, count: null, label: null };
    obj[0] = tmp;
    obj[1] = NumberResult2;
    obj[2] = getSystemLocale.t.Qwhe5j;
    items.push(callback(VanityMetric, obj, tmp2.TIKTOK_LIKES_COUNT));
  }
  if ("1" === metadata[constants.TIKTOK_VERIFIED]) {
    obj1 = { style: null, label: null };
    obj1[0] = tmp;
    const intl = getSystemLocale.intl;
    obj1[1] = intl.string(getSystemLocale.t.QHHwRR);
    items.push(callback(VanityTag, obj1, tmp2.TIKTOK_VERIFIED));
  }
  return items;
};
export const generateRoleConnectionMetadataItems = function generateRoleConnectionMetadataItems(applicationRoleConnection) {
  closure_0 = applicationRoleConnection;
  const items = [];
  const keys = Object.keys(applicationRoleConnection.metadata);
  if (null != applicationRoleConnection.application_metadata) {
    const _Object = Object;
    if (0 !== Object.keys(applicationRoleConnection.application_metadata).length) {
      if (0 !== keys.length) {
        const sortByResult = applyDefault.sortBy(keys, (arg0) => {
          const application_metadata = applicationRoleConnection.application_metadata;
          let name;
          if (application_metadata != null) {
            if (application_metadata[arg0] != null) {
              name = tmp3.name;
            }
          }
          return name;
        });
        const iter = sortByResult[Symbol.iterator]();
        const nextResult = iter.next();
        if (iter === undefined) {
          return items;
        } else if (null != applicationRoleConnection.application_metadata[nextResult]) {
          try {
            const type = tmp8.type;
            if (constants2.BOOLEAN_EQUAL !== type) {
              if (tmp10.BOOLEAN_NOT_EQUAL !== type) {
                if (tmp10.DATETIME_GREATER_THAN_EQUAL !== type) {
                  if (tmp10.DATETIME_LESS_THAN_EQUAL !== type) {
                    let obj = { style: null, count: null, label: null };
                    obj[0] = tmp;
                    const _Number = Number;
                    obj[1] = Number(tmp36);
                    obj[2] = tmp8.name;
                    items.push(callback(VanityMetric, obj, tmp8.key));
                  }
                }
                obj = { style: null, date: null, locale: null, label: null };
                obj[0] = tmp;
                obj[1] = tmp36;
                obj[2] = arg2;
                obj[3] = tmp8.name;
                items.push(callback(VanityDate, obj, tmp8.key));
              }
            }
            let tmp22 = tmp8.type === tmp10.BOOLEAN_EQUAL;
            if (tmp22) {
              tmp22 = "1" === tmp36;
            }
            if (!tmp22) {
              let tmp25 = tmp8.type === tmp10.BOOLEAN_NOT_EQUAL;
              if (tmp25) {
                tmp25 = "1" !== tmp36;
              }
              tmp22 = tmp25;
            }
            if (tmp22) {
              obj = { style: null, label: null };
              obj[0] = tmp;
              obj[1] = tmp8.name;
              items.push(callback(VanityTag, obj, tmp8.key));
            }
          } catch (err) {
          }
        }
        const obj4 = applyDefault;
      }
    }
  }
  return items;
};