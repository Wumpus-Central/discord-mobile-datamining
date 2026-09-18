// discord_app/modules/connections/native/ConnectionMetadataVanityItems.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import NumberUtils from "../../../utils/NumberUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ConnectionsUtils from "../ConnectionsUtils.tsx";
import _modDef11816 from "../../../../_runtime/metro/11816__.js";
import _modDef11817 from "../../../../_runtime/metro/11817__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function PaypalVanityTag(style) {
  const tmp = closure_8();
  const obj = { style: null, label: null, textStyle: null };
  const items = [tmp.paypalVerifiedTag, style.style];
  obj.style = items;
  const intl = util.intl;
  obj.label = intl.string(util.t.IhXLyx);
  obj.textStyle = tmp.paypalVerifiedTagText;
  return timestampProducer(VanityTag, obj, constants.PAYPAL_VERIFIED);
}
function VanityMetric(label) {
  label = label.label;
  ({ count, style, percent } = label);
  const tmp = closure_8();
  let str = "";
  const result = NumberUtils.shortenAndLocalizeNumber(count);
  if (percent) {
    str = "%";
  }
  const sum = result + str;
  if (typeof label === "string") {
    const intl = util.intl;
    const obj2 = { name: label, value: sum };
    let formatResult = intl.format(util.t.HLoinF, obj2);
  } else {
    const intl2 = util.intl;
    const obj3 = { value: sum };
    formatResult = intl2.format(label, obj3);
  }
  const obj4 = { variant: "text-xs/normal", color: "text-muted", style: null, children: formatResult };
  const items = [tmp.connectedAccountVanityMetadata, style];
  obj4.style = items;
  return timestampProducer(Text_Text.Text, obj4);
}
function VanityItem(style) {
  style = style.style;
  ({ label, imageSrc, imageAlt } = style);
  const tmp = closure_8();
  const obj = { style: null, children: null };
  const items = [, ,];
  ({ connectedAccountVanityMetadata: arr[0], connectedAccountVanityMetadataItem: arr[1] } = tmp);
  items[2] = style;
  obj.style = items;
  const items1 = [
    timestampProducer(native.Icon, {
      source: imageSrc,
      accessibilityLabel: imageAlt,
      style: tmp.connectedAccountVanityMetadataItemIcon,
      disableColor: true,
    }),
    timestampProducer(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", style, children: label }),
  ];
  obj.children = items1;
  return React5(View, obj);
}
function VanityTag(arg0) {
  ({ label, style, textStyle } = arg0);
  const obj = {
    style: null,
    children: timestampProducer(Text_Text.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      style: textStyle,
      children: label,
    }),
  };
  const items = [, ,];
  ({ connectedAccountVanityMetadata: arr[0], connectedAccountVanityMetadataTag: arr[1] } = closure_8());
  items[2] = style;
  obj.style = items;
  return timestampProducer(View, obj);
}
function VanityDate(arg0) {
  ({ date, label, locale, style } = arg0);
  const obj = { variant: "text-xs/normal", color: "text-muted", style: null, children: null };
  const items = [closure_8().connectedAccountVanityMetadata, style];
  obj.style = items;
  const intl = util.intl;
  const obj2 = { value: null, name: null };
  const tmp = closure_8();
  obj2.value = ConnectionsUtils.getCreatedAtDate(date, locale);
  obj2.name = label;
  obj.children = intl.format(util.t.HLoinF, obj2);
  return timestampProducer(Text_Text.Text, obj);
}
const View = fn(17).View;
const Constants = fn(5578);
({ MetadataFields: closure_4, MetadataItemTypes: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  connectedAccountVanityMetadata: { marginTop: 4, paddingRight: 8 },
  connectedAccountVanityMetadataItem: { flexDirection: "row", alignItems: "center" },
  connectedAccountVanityMetadataItemIcon: { height: 18, width: 18, marginRight: 8 },
  connectedAccountVanityMetadataTag: {
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    borderRadius: nativeDefault.radii.md,
    paddingHorizontal: 8,
    paddingVertical: 1,
    marginRight: 8,
  },
  paypalVerifiedTag: null,
  paypalVerifiedTagText: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  paddingHorizontal: 8,
  paddingVertical: 1,
  marginRight: 8,
};
obj2.paypalVerifiedTag = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
let obj4 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
obj2.paypalVerifiedTagText = { color: nativeDefault.colors.WHITE };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/connections/native/ConnectionMetadataVanityItems.tsx");

export const generateRedditMetadataItems = function generateRedditMetadataItems(metadata) {
  let num = metadata[constants.REDDIT_TOTAL_KARMA];
  if (num == null) {
    num = -1;
  }
  const items = [];
  const NumberResult = Number(num);
  if (NumberResult > -1) {
    const obj = { style: tmp, count: NumberResult, label: util.t.SbCNox };
    items.push(timestampProducer(VanityMetric, obj, constants.REDDIT_TOTAL_KARMA));
  }
  if ("1" === metadata[constants.REDDIT_GOLD]) {
    const obj2 = { style: tmp, label: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t["06rDHU"]);
    items.push(timestampProducer(VanityTag, obj2, constants.REDDIT_GOLD));
  }
  if ("1" === metadata[constants.REDDIT_MOD]) {
    const obj3 = { style: tmp, label: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t.oWM95M);
    items.push(timestampProducer(VanityTag, obj3, constants.REDDIT_MOD));
  }
  return items;
};
export const generateTwitterMetadataItems = function generateTwitterMetadataItems(metadata) {
  let num = metadata[constants.TWITTER_STATUSES_COUNT];
  if (num == null) {
    num = -1;
  }
  const NumberResult = Number(num);
  let num2 = metadata[constants.TWITTER_FOLLOWERS_COUNT];
  if (num2 == null) {
    num2 = -1;
  }
  const items = [];
  const NumberResult1 = Number(num2);
  if (NumberResult > -1) {
    const obj = { style: tmp, count: NumberResult, label: util.t.llwqqe };
    items.push(timestampProducer(VanityMetric, obj, constants.TWITTER_STATUSES_COUNT));
  }
  if (NumberResult1 > -1) {
    const obj2 = { style: tmp, count: NumberResult1, label: util.t.LMNOUQ };
    items.push(timestampProducer(VanityMetric, obj2, constants.TWITTER_FOLLOWERS_COUNT));
  }
  return items;
};
export const generateBlueskyMetadataItems = function generateBlueskyMetadataItems(arg0) {
  let num = arg0[constants.BLUESKY_STATUSES_COUNT];
  if (num == null) {
    num = -1;
  }
  const NumberResult = Number(num);
  let num2 = arg0[constants.BLUESKY_FOLLOWERS_COUNT];
  if (num2 == null) {
    num2 = -1;
  }
  const items = [];
  const NumberResult1 = Number(num2);
  if (NumberResult > -1) {
    const obj = { style: tmp, count: NumberResult, label: util.t.thA2ir };
    items.push(timestampProducer(VanityMetric, obj, constants.BLUESKY_STATUSES_COUNT));
  }
  if (NumberResult1 > -1) {
    const obj2 = { style: tmp, count: NumberResult1, label: util.t.RQath2 };
    items.push(timestampProducer(VanityMetric, obj2, constants.BLUESKY_FOLLOWERS_COUNT));
  }
  return items;
};
export const generateSteamMetadataItems = function generateSteamMetadataItems(metadata) {
  let num = metadata[constants.STEAM_GAME_COUNT];
  if (num == null) {
    num = -1;
  }
  const NumberResult = Number(num);
  let num2 = metadata[constants.STEAM_ITEM_COUNT_DOTA2];
  if (num2 == null) {
    num2 = -1;
  }
  const NumberResult1 = Number(num2);
  let num3 = metadata[constants.STEAM_ITEM_COUNT_TF2];
  if (num3 == null) {
    num3 = -1;
  }
  const items = [];
  const NumberResult2 = Number(num3);
  if (NumberResult > -1) {
    const obj = { style: tmp, count: NumberResult, label: util.t["ppXMu/"] };
    items.push(timestampProducer(VanityMetric, obj, constants.STEAM_GAME_COUNT));
  }
  if (NumberResult1 > -1) {
    const obj2 = { style: tmp, label: null, imageSrc: null, imageAlt: null };
    const intl = util.intl;
    const obj3 = { count: NumberResult1 };
    obj2.label = intl.format(util.t.Y88M5x, obj3);
    obj2.imageSrc = _modDef11816;
    const intl2 = util.intl;
    obj2.imageAlt = intl2.string(util.t.HKUEZo);
    items.push(timestampProducer(VanityItem, obj2, constants.STEAM_ITEM_COUNT_DOTA2));
  }
  if (NumberResult2 > -1) {
    const obj4 = { style: tmp, label: null, imageSrc: null, imageAlt: null };
    const intl3 = util.intl;
    const obj5 = { count: NumberResult2 };
    obj4.label = intl3.format(util.t.Y88M5x, obj5);
    obj4.imageSrc = _modDef11817;
    const intl4 = util.intl;
    obj4.imageAlt = intl4.string(util.t.C8p1Sh);
    items.push(timestampProducer(VanityItem, obj4, constants.STEAM_ITEM_COUNT_TF2));
  }
  return items;
};
export const generatePaypalMetadataItems = function generatePaypalMetadataItems(metadata) {
  const items = [];
  if ("1" === metadata[constants.PAYPAL_VERIFIED]) {
    const obj = { style: metadataItem };
    items.push(timestampProducer(PaypalVanityTag, obj));
  }
  return items;
};
export const generateEbayMetadataItems = function generateEbayMetadataItems(metadata) {
  let num = metadata[constants.EBAY_POSITIVE_FEEDBACK_PERCENTAGE];
  if (num == null) {
    num = -1;
  }
  const items = [];
  const NumberResult = Number(num);
  if (NumberResult > 0) {
    const obj = { style: tmp, count: NumberResult, label: util.t.YmL22d, percent: true };
    items.push(timestampProducer(VanityMetric, obj, constants.EBAY_POSITIVE_FEEDBACK_PERCENTAGE));
  }
  if ("1" === metadata[constants.EBAY_TOP_RATED_SELLER]) {
    const obj2 = { style: tmp, label: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t.TEEYwa);
    items.push(timestampProducer(VanityTag, obj2, constants.EBAY_TOP_RATED_SELLER));
  }
  return items;
};
export const generateTikTokMetadataItems = function generateTikTokMetadataItems(metadata) {
  let num = metadata[constants.TIKTOK_FOLLOWER_COUNT];
  if (num == null) {
    num = -1;
  }
  const NumberResult = Number(num);
  let num2 = metadata[constants.TIKTOK_FOLLOWING_COUNT];
  if (num2 == null) {
    num2 = -1;
  }
  const NumberResult1 = Number(num2);
  let num3 = metadata[constants.TIKTOK_LIKES_COUNT];
  if (num3 == null) {
    num3 = -1;
  }
  const items = [];
  const NumberResult2 = Number(num3);
  if (NumberResult > -1) {
    const obj = { style: tmp, count: NumberResult, label: util.t["Mpm/Bc"] };
    items.push(timestampProducer(VanityMetric, obj, constants.TIKTOK_FOLLOWER_COUNT));
  }
  if (NumberResult1 > -1) {
    const obj2 = { style: tmp, count: NumberResult1, label: util.t.ftf12v };
    items.push(timestampProducer(VanityMetric, obj2, constants.TIKTOK_FOLLOWING_COUNT));
  }
  if (NumberResult2 > -1) {
    const obj3 = { style: tmp, count: NumberResult2, label: util.t.Qwhe5j };
    items.push(timestampProducer(VanityMetric, obj3, constants.TIKTOK_LIKES_COUNT));
  }
  if ("1" === metadata[constants.TIKTOK_VERIFIED]) {
    const obj4 = { style: tmp, label: null };
    const intl = util.intl;
    obj4.label = intl.string(util.t.QHHwRR);
    items.push(timestampProducer(VanityTag, obj4, constants.TIKTOK_VERIFIED));
  }
  return items;
};
export const generateRoleConnectionMetadataItems = function generateRoleConnectionMetadataItems(
  applicationRoleConnection,
) {
  const items = [];
  const keys = Object.keys(applicationRoleConnection.metadata);
  if (null != applicationRoleConnection.application_metadata) {
    const _Object = Object;
    if (0 !== Object.keys(applicationRoleConnection.application_metadata).length) {
      if (0 !== keys.length) {
        const sortByResult = _modDef12.sortBy(keys, (arg0) => {
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
              if (constants2.BOOLEAN_NOT_EQUAL !== type) {
                if (constants2.DATETIME_GREATER_THAN_EQUAL !== type) {
                  if (constants2.DATETIME_LESS_THAN_EQUAL !== type) {
                    const obj = { style: tmp, count: null, label: null };
                    const _Number = Number;
                    obj.count = Number(tmp36);
                    obj.label = tmp8.name;
                    items.push(timestampProducer(VanityMetric, obj, tmp8.key));
                  }
                }
                const obj2 = { style: tmp, date: tmp36, locale, label: tmp8.name };
                items.push(timestampProducer(VanityDate, obj2, tmp8.key));
              }
            }
            let tmp22 = tmp8.type === constants2.BOOLEAN_EQUAL;
            if (tmp22) {
              tmp22 = "1" === tmp36;
            }
            if (!tmp22) {
              let tmp25 = tmp8.type === constants2.BOOLEAN_NOT_EQUAL;
              if (tmp25) {
                tmp25 = "1" !== tmp36;
              }
              tmp22 = tmp25;
            }
            if (tmp22) {
              const obj3 = { style: tmp, label: tmp8.name };
              items.push(timestampProducer(VanityTag, obj3, tmp8.key));
            }
          } catch (err) {}
        }
      }
    }
  }
  return items;
};
