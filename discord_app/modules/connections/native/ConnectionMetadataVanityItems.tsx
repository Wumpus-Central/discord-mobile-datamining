// === Module 11205: ConnectionMetadataVanityItems ===

// Module 11205 (ConnectionMetadataVanityItems)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import NumberUtils from "NumberUtils" /* 1888 */;
import Text_Text from "Text/Text" /* 4892 */;
import ConnectionsUtils from "ConnectionsUtils" /* 6685 */;
import AssetRegistryDefault from "AssetRegistry" /* 11206 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11207 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 6686 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let application_metadata;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ MetadataFields: closure_4, MetadataItemTypes: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { connectedAccountVanityMetadata: { marginTop: 4, paddingRight: 8 }, connectedAccountVanityMetadataItem: { flexDirection: "row", alignItems: "center" }, connectedAccountVanityMetadataItemIcon: { height: 18, width: 18, marginRight: 8 }, connectedAccountVanityMetadataTag: obj2, paypalVerifiedTag: obj3, paypalVerifiedTagText: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, paddingHorizontal: 8, paddingVertical: 1, marginRight: 8 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
obj4 = { color: nativeDefault.colors.WHITE };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const obj = react2;
  const cResult = obj.c(7);
  style = style.style;
  const tmp4 = closure_8();
  if (cResult[0] === style) {
    let tmp5;
    let tmp7;
    if (cResult[1] === tmp4.paypalVerifiedTag) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl5.intl;
      const stringResult = intl.string(intl5.t.IhXLyx);
      cResult[3] = stringResult;
      tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === tmp4.paypalVerifiedTagText) {
      let tmp9;
      if (cResult[5] === tmp5) {
        tmp9 = cResult[6];
      }
      return tmp9;
    }
    const obj2 = { style: tmp5, label: tmp7, textStyle: tmp4.paypalVerifiedTagText };
    const tmp13 = metroRequire(closure_12, obj2, constants.PAYPAL_VERIFIED);
    cResult[4] = tmp4.paypalVerifiedTagText;
    cResult[5] = tmp5;
    cResult[6] = tmp13;
    tmp9 = tmp13;
  }
  const items = [tmp4.paypalVerifiedTag, style];
  cResult[0] = style;
  cResult[1] = tmp4.paypalVerifiedTag;
  cResult[2] = items;
  tmp5 = items;
}) : ((style) => {
  let intl;
  let items;
  style = style.style;
  const tmp = closure_8();
  const obj = { style: items, label: intl.string(intl5.t.IhXLyx), textStyle: tmp.paypalVerifiedTagText };
  items = [tmp.paypalVerifiedTag, style];
  intl = intl5.intl;
  return metroRequire(closure_12, obj, constants.PAYPAL_VERIFIED);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let count;
  let label;
  let percent;
  let style;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(12);
  ({ label, style } = arg0);
  ({ count, percent } = arg0);
  const tmp4 = closure_8();
  let str = "";
  const obj2 = NumberUtils;
  const result = obj2.shortenAndLocalizeNumber(count);
  if (percent) {
    str = "%";
  }
  const sum = result + str;
  if (typeof label === "string") {
    if (cResult[0] === label) {
      let tmp9;
      if (cResult[1] === sum) {
        tmp9 = cResult[2];
      }
      tmp7 = tmp9;
    }
    const intl2 = intl5.intl;
    const obj3 = { name: label, value: sum };
    const formatResult = intl2.format(intl5.t.HLoinF, obj3);
    cResult[0] = label;
    cResult[1] = sum;
    cResult[2] = formatResult;
    tmp9 = formatResult;
  } else {
    if (cResult[3] === label) {
      if (cResult[4] === sum) {
        tmp7 = cResult[5];
      }
    }
    const intl = intl5.intl;
    const obj4 = { value: sum };
    const formatResult1 = intl.format(label, obj4);
    cResult[3] = label;
    cResult[4] = sum;
    cResult[5] = formatResult1;
    tmp7 = formatResult1;
  }
  if (cResult[6] === style) {
    let tmp11;
    if (cResult[7] === tmp4.connectedAccountVanityMetadata) {
      tmp11 = cResult[8];
    }
    if (cResult[9] === tmp11) {
      let tmp12;
      if (cResult[10] === tmp7) {
        tmp12 = cResult[11];
      }
      return tmp12;
    }
    const obj5 = { variant: "text-xs/normal", color: "text-muted", style: tmp11, children: tmp7 };
    const tmp14 = metroRequire(Text_Text.Text, obj5);
    cResult[9] = tmp11;
    cResult[10] = tmp7;
    cResult[11] = tmp14;
    tmp12 = tmp14;
  }
  const items = [tmp4.connectedAccountVanityMetadata, style];
  cResult[6] = style;
  cResult[7] = tmp4.connectedAccountVanityMetadata;
  cResult[8] = items;
  tmp11 = items;
}) : ((label) => {
  let count;
  let formatResult;
  let items;
  let percent;
  let style;
  label = label.label;
  ({ count, style, percent } = label);
  let str = "";
  const tmp = closure_8();
  const obj = NumberUtils;
  const result = obj.shortenAndLocalizeNumber(count);
  if (percent) {
    str = "%";
  }
  const sum = result + str;
  if (typeof label === "string") {
    const intl = intl5.intl;
    const obj2 = { name: label, value: sum };
    formatResult = intl.format(intl5.t.HLoinF, obj2);
  } else {
    const intl2 = intl5.intl;
    const obj3 = { value: sum };
    formatResult = intl2.format(label, obj3);
  }
  const obj4 = { variant: "text-xs/normal", color: "text-muted", style: items, children: formatResult };
  items = [tmp.connectedAccountVanityMetadata, style];
  return metroRequire(Text_Text.Text, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let imageAlt;
  let imageSrc;
  let items;
  let label;
  let style;
  const obj = react2;
  const cResult = obj.c(15);
  ({ label, imageSrc, imageAlt, style } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.connectedAccountVanityMetadata) {
      let tmp5;
      if (cResult[2] === tmp4.connectedAccountVanityMetadataItem) {
        tmp5 = cResult[3];
      }
      if (cResult[4] === imageAlt) {
        if (cResult[5] === imageSrc) {
          let tmp6;
          if (cResult[6] === tmp4.connectedAccountVanityMetadataItemIcon) {
            tmp6 = cResult[7];
          }
          if (cResult[8] === label) {
            let tmp9;
            if (cResult[9] === style) {
              tmp9 = cResult[10];
            }
            if (cResult[11] === tmp5) {
              if (cResult[12] === tmp6) {
                let tmp12;
                if (cResult[13] === tmp9) {
                  tmp12 = cResult[14];
                }
                return tmp12;
              }
            }
            const obj2 = { style: tmp5, children: items };
            items = [tmp6, tmp9];
            const tmp15 = metroImportDefault(View, obj2);
            cResult[11] = tmp5;
            cResult[12] = tmp6;
            cResult[13] = tmp9;
            cResult[14] = tmp15;
            tmp12 = tmp15;
          }
          const obj3 = { variant: "text-xs/normal", color: "text-muted", style, children: label };
          const tmp11 = metroRequire(Text_Text.Text, obj3);
          cResult[8] = label;
          cResult[9] = style;
          cResult[10] = tmp11;
          tmp9 = tmp11;
        }
      }
      const obj4 = { source: imageSrc, accessibilityLabel: imageAlt, style: tmp4.connectedAccountVanityMetadataItemIcon, disableColor: true };
      const tmp8 = metroRequire(native.Icon, obj4);
      cResult[4] = imageAlt;
      cResult[5] = imageSrc;
      cResult[6] = tmp4.connectedAccountVanityMetadataItemIcon;
      cResult[7] = tmp8;
      tmp6 = tmp8;
    }
  }
  const items1 = [, , ];
  ({ connectedAccountVanityMetadata: arr[0], connectedAccountVanityMetadataItem: arr[1] } = tmp4);
  items1[2] = style;
  cResult[0] = style;
  cResult[1] = tmp4.connectedAccountVanityMetadata;
  cResult[2] = tmp4.connectedAccountVanityMetadataItem;
  cResult[3] = items1;
  tmp5 = items1;
}) : ((style) => {
  let imageAlt;
  let imageSrc;
  let items;
  let items1;
  let label;
  style = style.style;
  ({ label, imageSrc, imageAlt } = style);
  const tmp = closure_8();
  const obj = { style: items, children: items1 };
  items = [, , ];
  ({ connectedAccountVanityMetadata: arr[0], connectedAccountVanityMetadataItem: arr[1] } = tmp);
  items[2] = style;
  items1 = [, ];
  const obj2 = { source: imageSrc, accessibilityLabel: imageAlt, style: tmp.connectedAccountVanityMetadataItemIcon, disableColor: true };
  items1[0] = metroRequire(native.Icon, obj2);
  items1[1] = metroRequire(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", style, children: label });
  return metroImportDefault(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let label;
  let style;
  let textStyle;
  const obj = react2;
  const cResult = obj.c(10);
  ({ label, style, textStyle } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.connectedAccountVanityMetadata) {
      let tmp5;
      if (cResult[2] === tmp4.connectedAccountVanityMetadataTag) {
        tmp5 = cResult[3];
      }
      if (cResult[4] === label) {
        let tmp6;
        if (cResult[5] === textStyle) {
          tmp6 = cResult[6];
        }
        if (cResult[7] === tmp5) {
          let tmp9;
          if (cResult[8] === tmp6) {
            tmp9 = cResult[9];
          }
          return tmp9;
        }
        const obj2 = { style: tmp5, children: tmp6 };
        const tmp12 = metroRequire(View, obj2);
        cResult[7] = tmp5;
        cResult[8] = tmp6;
        cResult[9] = tmp12;
        tmp9 = tmp12;
      }
      const obj3 = { variant: "text-xs/normal", color: "text-muted", style: textStyle, children: label };
      const tmp8 = metroRequire(Text_Text.Text, obj3);
      cResult[4] = label;
      cResult[5] = textStyle;
      cResult[6] = tmp8;
      tmp6 = tmp8;
    }
  }
  const items = [, , ];
  ({ connectedAccountVanityMetadata: arr[0], connectedAccountVanityMetadataTag: arr[1] } = tmp4);
  items[2] = style;
  cResult[0] = style;
  cResult[1] = tmp4.connectedAccountVanityMetadata;
  cResult[2] = tmp4.connectedAccountVanityMetadataTag;
  cResult[3] = items;
  tmp5 = items;
}) : ((arg0) => {
  let items;
  let label;
  let style;
  let textStyle;
  ({ label, style, textStyle } = arg0);
  const tmp = closure_8();
  const obj = { style: items, children: metroRequire(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", style: textStyle, children: label }) };
  items = [, , ];
  ({ connectedAccountVanityMetadata: arr[0], connectedAccountVanityMetadataTag: arr[1] } = tmp);
  items[2] = style;
  return metroRequire(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let date;
  let label;
  let locale;
  let style;
  let tmpResult;
  const obj = react2;
  const cResult = obj.c(10);
  ({ date, label, locale, style } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === style) {
    let tmp5;
    if (cResult[1] === tmp4.connectedAccountVanityMetadata) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === date) {
      if (cResult[4] === label) {
        let tmp6;
        if (cResult[5] === locale) {
          tmp6 = cResult[6];
        }
        if (cResult[7] === tmp5) {
          let tmp8;
          if (cResult[8] === tmp6) {
            tmp8 = cResult[9];
          }
          return tmp8;
        }
        const obj2 = { variant: "text-xs/normal", color: "text-muted", style: tmp5, children: tmp6 };
        const tmp10 = metroRequire(Text_Text.Text, obj2);
        cResult[7] = tmp5;
        cResult[8] = tmp6;
        cResult[9] = tmp10;
        tmp8 = tmp10;
      }
    }
    const intl = intl5.intl;
    const format = intl.format;
    const obj3 = { value: tmpResult.getCreatedAtDate(date, locale), name: label };
    const HLoinF = intl5.t.HLoinF;
    tmpResult = ConnectionsUtils;
    const formatResult = format(HLoinF, obj3);
    cResult[3] = date;
    cResult[4] = label;
    cResult[5] = locale;
    cResult[6] = formatResult;
    tmp6 = formatResult;
  }
  const items = [tmp4.connectedAccountVanityMetadata, style];
  cResult[0] = style;
  cResult[1] = tmp4.connectedAccountVanityMetadata;
  cResult[2] = items;
  tmp5 = items;
}) : ((arg0) => {
  let HLoinF;
  let date;
  let format;
  let items;
  let label;
  let locale;
  let obj2;
  let obj3;
  let style;
  ({ date, label, locale, style } = arg0);
  const obj = { variant: "text-xs/normal", color: "text-muted", style: items, children: format(HLoinF, obj2) };
  items = [closure_8().connectedAccountVanityMetadata, style];
  closure_8();
  const Text = Text_Text.Text;
  const intl = intl5.intl;
  format = intl.format;
  obj2 = { value: obj3.getCreatedAtDate(date, locale), name: label };
  HLoinF = intl5.t.HLoinF;
  obj3 = ConnectionsUtils;
  return metroRequire(Text, obj);
});
let result = size.fileFinishedImporting("modules/connections/native/ConnectionMetadataVanityItems.tsx");

export const generateRedditMetadataItems = function generateRedditMetadataItems(metadata) {
  let intl;
  let intl2;
  let num = metadata[constants.REDDIT_TOTAL_KARMA];
  const _Number = Number;
  if (num == null) {
    num = -1;
  }
  const items = [];
  const _NumberResult = _Number(num);
  const tmp4 = metadata[constants.REDDIT_GOLD];
  const tmp5 = metadata[constants.REDDIT_MOD];
  if (_NumberResult > -1) {
    const push = items.push;
    const obj = { style: metadataItem, count: _NumberResult, label: intl5.t.SbCNox };
    push(metroRequire(closure_10, obj, constants.REDDIT_TOTAL_KARMA));
  }
  if ("1" === tmp4) {
    const push2 = items.push;
    const obj2 = { style: metadataItem, label: intl.string(intl5.t["06rDHU"]) };
    intl = intl5.intl;
    push2(metroRequire(closure_12, obj2, constants.REDDIT_GOLD));
  }
  if ("1" === tmp5) {
    const push3 = items.push;
    const obj3 = { style: metadataItem, label: intl2.string(intl5.t.oWM95M) };
    intl2 = intl5.intl;
    push3(metroRequire(closure_12, obj3, constants.REDDIT_MOD));
  }
  return items;
};
export const generateTwitterMetadataItems = function generateTwitterMetadataItems(metadata) {
  let num = metadata[constants.TWITTER_STATUSES_COUNT];
  const _Number = Number;
  if (num == null) {
    num = -1;
  }
  const _NumberResult = _Number(num);
  let num2 = metadata[constants.TWITTER_FOLLOWERS_COUNT];
  const _Number2 = Number;
  if (num2 == null) {
    num2 = -1;
  }
  const items = [];
  const _Number2Result = _Number2(num2);
  if (_NumberResult > -1) {
    const push = items.push;
    const obj = { style: metadataItem, count: _NumberResult, label: intl5.t.llwqqe };
    push(metroRequire(closure_10, obj, constants.TWITTER_STATUSES_COUNT));
  }
  if (_Number2Result > -1) {
    const push2 = items.push;
    const obj2 = { style: metadataItem, count: _Number2Result, label: intl5.t.LMNOUQ };
    push2(metroRequire(closure_10, obj2, constants.TWITTER_FOLLOWERS_COUNT));
  }
  return items;
};
export const generateBlueskyMetadataItems = function generateBlueskyMetadataItems(arg0, style) {
  let num = arg0[constants.BLUESKY_STATUSES_COUNT];
  const _Number = Number;
  if (num == null) {
    num = -1;
  }
  const _NumberResult = _Number(num);
  let num2 = arg0[constants.BLUESKY_FOLLOWERS_COUNT];
  const _Number2 = Number;
  if (num2 == null) {
    num2 = -1;
  }
  const items = [];
  const _Number2Result = _Number2(num2);
  if (_NumberResult > -1) {
    const push = items.push;
    const obj = { style, count: _NumberResult, label: intl5.t.thA2ir };
    push(metroRequire(closure_10, obj, constants.BLUESKY_STATUSES_COUNT));
  }
  if (_Number2Result > -1) {
    const push2 = items.push;
    const obj2 = { style, count: _Number2Result, label: intl5.t.RQath2 };
    push2(metroRequire(closure_10, obj2, constants.BLUESKY_FOLLOWERS_COUNT));
  }
  return items;
};
export const generateSteamMetadataItems = function generateSteamMetadataItems(metadata) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj3;
  let obj5;
  let num = metadata[constants.STEAM_GAME_COUNT];
  const _Number = Number;
  if (num == null) {
    num = -1;
  }
  const _NumberResult = _Number(num);
  let num2 = metadata[constants.STEAM_ITEM_COUNT_DOTA2];
  const _Number2 = Number;
  if (num2 == null) {
    num2 = -1;
  }
  const _Number2Result = _Number2(num2);
  let num3 = metadata[constants.STEAM_ITEM_COUNT_TF2];
  const _Number3 = Number;
  if (num3 == null) {
    num3 = -1;
  }
  const items = [];
  const _Number3Result = _Number3(num3);
  if (_NumberResult > -1) {
    const push = items.push;
    const obj = { style: metadataItem, count: _NumberResult, label: intl5.t["ppXMu/"] };
    push(metroRequire(closure_10, obj, constants.STEAM_GAME_COUNT));
  }
  if (_Number2Result > -1) {
    const push2 = items.push;
    const obj2 = { style: metadataItem, label: intl.format(intl5.t.Y88M5x, obj3), imageSrc: AssetRegistryDefault, imageAlt: intl2.string(intl5.t.HKUEZo) };
    intl = intl5.intl;
    obj3 = { count: _Number2Result };
    intl2 = intl5.intl;
    push2(metroRequire(closure_11, obj2, constants.STEAM_ITEM_COUNT_DOTA2));
  }
  if (_Number3Result > -1) {
    const push3 = items.push;
    const obj4 = { style: metadataItem, label: intl3.format(intl5.t.Y88M5x, obj5), imageSrc: AssetRegistryDefault2, imageAlt: intl4.string(intl5.t.C8p1Sh) };
    intl3 = intl5.intl;
    obj5 = { count: _Number3Result };
    intl4 = intl5.intl;
    push3(metroRequire(closure_11, obj4, constants.STEAM_ITEM_COUNT_TF2));
  }
  return items;
};
export const generatePaypalMetadataItems = function generatePaypalMetadataItems(metadata) {
  const items = [];
  const tmp = metadataItem;
  if ("1" === metadata[constants.PAYPAL_VERIFIED]) {
    const obj = { style: tmp };
    items.push(metroRequire(closure_9, obj));
  }
  return items;
};
export const generateEbayMetadataItems = function generateEbayMetadataItems(metadata) {
  let intl;
  let num = metadata[constants.EBAY_POSITIVE_FEEDBACK_PERCENTAGE];
  const _Number = Number;
  if (num == null) {
    num = -1;
  }
  const items = [];
  const _NumberResult = _Number(num);
  const tmp4 = metadata[constants.EBAY_TOP_RATED_SELLER];
  if (_NumberResult > 0) {
    const push = items.push;
    const obj = { style: metadataItem, count: _NumberResult, label: intl5.t.YmL22d, percent: true };
    push(metroRequire(closure_10, obj, constants.EBAY_POSITIVE_FEEDBACK_PERCENTAGE));
  }
  if ("1" === tmp4) {
    const push2 = items.push;
    const obj2 = { style: metadataItem, label: intl.string(intl5.t.TEEYwa) };
    intl = intl5.intl;
    push2(metroRequire(closure_12, obj2, constants.EBAY_TOP_RATED_SELLER));
  }
  return items;
};
export const generateTikTokMetadataItems = function generateTikTokMetadataItems(metadata) {
  let intl;
  let num = metadata[constants.TIKTOK_FOLLOWER_COUNT];
  const _Number = Number;
  const tmp3 = metadata[constants.TIKTOK_VERIFIED];
  if (num == null) {
    num = -1;
  }
  const _NumberResult = _Number(num);
  let num2 = metadata[constants.TIKTOK_FOLLOWING_COUNT];
  const _Number2 = Number;
  if (num2 == null) {
    num2 = -1;
  }
  const _Number2Result = _Number2(num2);
  let num3 = metadata[constants.TIKTOK_LIKES_COUNT];
  const _Number3 = Number;
  if (num3 == null) {
    num3 = -1;
  }
  const items = [];
  const _Number3Result = _Number3(num3);
  if (_NumberResult > -1) {
    const push = items.push;
    const obj = { style: metadataItem, count: _NumberResult, label: intl5.t["Mpm/Bc"] };
    push(metroRequire(closure_10, obj, constants.TIKTOK_FOLLOWER_COUNT));
  }
  if (_Number2Result > -1) {
    const push2 = items.push;
    const obj2 = { style: metadataItem, count: _Number2Result, label: intl5.t.ftf12v };
    push2(metroRequire(closure_10, obj2, constants.TIKTOK_FOLLOWING_COUNT));
  }
  if (_Number3Result > -1) {
    const push3 = items.push;
    const obj3 = { style: metadataItem, count: _Number3Result, label: intl5.t.Qwhe5j };
    push3(metroRequire(closure_10, obj3, constants.TIKTOK_LIKES_COUNT));
  }
  if ("1" === tmp3) {
    const push4 = items.push;
    const obj4 = { style: metadataItem, label: intl.string(intl5.t.QHHwRR) };
    intl = intl5.intl;
    push4(metroRequire(closure_12, obj4, constants.TIKTOK_VERIFIED));
  }
  return items;
};
export const generateRoleConnectionMetadataItems = function generateRoleConnectionMetadataItems(applicationRoleConnection, style) {
  let closure_0 = applicationRoleConnection;
  const items = [];
  const keys = Object.keys(applicationRoleConnection.metadata);
  const tmp2 = arg2;
  if (null != applicationRoleConnection.application_metadata) {
    const _Object = Object;
    if (0 !== Object.keys(applicationRoleConnection.application_metadata).length) {
      if (0 !== keys.length) {
        const obj4 = _modDef12;
        const sortByResult = obj4.sortBy(keys, (arg0) => {
          application_metadata = application_metadata.application_metadata;
          let name;
          if (application_metadata != null) {
            if (application_metadata[arg0] != null) {
              name = tmp3.name;
            }
          }
          return name;
        });
        const iter = sortByResult[Symbol.iterator]();
        const tmp3 = sortByResult;
        const nextResult = iter.next();
        if (iter === undefined) {
          return items;
        } else if (null != applicationRoleConnection.application_metadata[nextResult]) {
          try {
            const type = tmp8.type;
            if (hasOwnProperty.BOOLEAN_EQUAL !== type) {
              if (hasOwnProperty.BOOLEAN_NOT_EQUAL !== type) {
                if (hasOwnProperty.DATETIME_GREATER_THAN_EQUAL !== type) {
                  if (hasOwnProperty.DATETIME_LESS_THAN_EQUAL !== type) {
                    const _Number = Number;
                    const push = items.push;
                    const obj = { style, count: Number(applicationRoleConnection.metadata[tmp6]), label: applicationRoleConnection.application_metadata[nextResult].name };
                    push(metroRequire(closure_10, obj, applicationRoleConnection.application_metadata[nextResult].key));
                  }
                }
                const obj2 = { style, date: applicationRoleConnection.metadata[tmp6], locale: tmp2, label: applicationRoleConnection.application_metadata[nextResult].name };
                items.push(metroRequire(closure_13, obj2, applicationRoleConnection.application_metadata[nextResult].key));
              }
            }
            let tmp22 = tmp8.type === hasOwnProperty.BOOLEAN_EQUAL && "1" === tmp36;
            if (!tmp22) {
              tmp22 = tmp8.type === hasOwnProperty.BOOLEAN_NOT_EQUAL && "1" !== tmp36;
              const tmp25 = tmp8.type === hasOwnProperty.BOOLEAN_NOT_EQUAL && "1" !== tmp36;
            }
            if (tmp22) {
              const obj3 = { style, label: applicationRoleConnection.application_metadata[nextResult].name };
              items.push(metroRequire(closure_12, obj3, applicationRoleConnection.application_metadata[nextResult].key));
            }
          } catch (err) {
          }
        }
      }
    }
  }
  return items;
};