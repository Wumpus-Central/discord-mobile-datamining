// discord_app/modules/markup/MarkupRules.tsx
import intl2 from "../../intl/index.native.tsx";
import EnhancedRoleColorUtils from "../premium/enhanced_role_colors/EnhancedRoleColorUtils.tsx";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import UserUtilsDefault from "../../utils/UserUtils.tsx";
import NicknameUtilsDefault from "../../utils/NicknameUtils.tsx";
import ApplicationCommandConstants from "../application_commands/ApplicationCommandConstants.tsx";
import ChannelAutocompleteConstants from "../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import MarkupLinkRule from "MarkupLinkRule.tsx";
import useHasEnhancedRoleColors from "../premium/powerups/hooks/useHasEnhancedRoleColors.tsx";
import StaticRouteRendering from "StaticRouteRendering.tsx";
import MarkupTextRuleDefault from "MarkupTextRule.tsx";
import MarkupChannelMentionRuleDefault from "MarkupChannelMentionRule.tsx";
import MarkupAttachmentLinkRuleDefault from "MarkupAttachmentLinkRule.tsx";
import getSoundmojiASTFromString from "../premium/sounds/soundmoji/utils/getSoundmojiASTFromString.tsx";
import TimestampUtils from "TimestampUtils.tsx";
import MarkupHeadingRuleDefault from "MarkupHeadingRule.tsx";
import MarkupListRuleDefault from "MarkupListRule.tsx";
import MarkupSubtextRuleDefault from "MarkupSubtextRule.tsx";
import PlatformMarkupRulesDefault from "PlatformMarkupRules.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _toArray from "../../../_runtime/00729__toArray.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import module_1936_mod from "../../../_runtime/metro/01936__.js";
import combineMarkupRules_mod from "combineMarkupRules.tsx";
import module_12_mod from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const MarkupLinkRuleDefault = MarkupLinkRule;
const getSoundmojiASTFromStringDefault = getSoundmojiASTFromString;

let c10;
let c9;
let module_1936;
let obj2;
let obj21;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let unpackModuleId;
function match(arg0) {
  const obj = /^(¯\\_\(ツ\)_\/¯)/;
  return obj.exec(arg0);
}
function parse(content) {
  return { type: "text", content: content[1] };
}
const match2 = function match(arg0) {
  const obj = /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i;
  return obj.exec(arg0);
};
const parse2 = function parse(arg0, arg1, inQuote) {
  let str2;
  let str = arg0[1];
  if (str == null) {
    str = "";
  }
  const obj = { lang: str, content: str2, inQuote: inQuote.inQuote || inQuote.formatInline || false };
  str2 = arg0[2];
  if (str2 == null) {
    str2 = "";
  }
  return obj;
};
const match3 = function match(arg0) {
  const obj = /^<@&(\d+)>/;
  return obj.exec(arg0);
};
const parse3 = function parse(arg0, arg1, returnMentionIds) {
  let tmp;
  let tmp3;
  [, tmp] = arg0;
  if (returnMentionIds.returnMentionIds) {
    tmp3 = { type: "roleMention", id: tmp };
    const obj = { type: "roleMention", id: tmp };
  } else {
    tmp3 = hydrateRoleMention(tmp, returnMentionIds);
  }
  return tmp3;
};
const match4 = function match(arg0) {
  const obj = /^<@!?(\d+)>|^(@(?:everyone|here))/;
  const match = obj.exec(arg0);
  let tmp2 = null;
  if (null != match) {
    tmp2 = match;
  }
  return tmp2;
};
const parse4 = function parse(arg0, arg1, returnMentionIds) {
  let tmp2;
  if (returnMentionIds.returnMentionIds) {
    let obj3;
    if (null == arg0[1]) {
      obj3 = { type: "mention", text: arg0[0] };
      const obj2 = { type: "mention", text: arg0[0] };
    } else {
      obj3 = { type: "mention", id: arg0[1] };
    }
    tmp2 = obj3;
  } else {
    const obj = { fullMatch: null, id: null, everyoneOrHere: null };
    [obj.fullMatch, obj.id, obj.everyoneOrHere] = arg0;
    tmp2 = hydrateUserMention(obj, returnMentionIds);
  }
  return tmp2;
};
const match5 = function match(arg0, arg1, arg2) {
  let match;
  if (null == arg2) {
    const obj = /^(@silent(?![^\s]))/;
    match = obj.exec(arg0);
  } else {
    match = null;
  }
  return match;
};
const parse5 = function parse(content) {
  return { type: "silentPrefix", content: content[0] };
};
const match6 = function match(arg0) {
  const obj =
    /^<\/((?:(?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,32})(?: (?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,32})?(?: (?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,32})?):([0-9]+)>/;
  return obj.exec(arg0);
};
const parse6 = function parse(arg0, arg1, returnMentionIds) {
  let items1;
  let obj2;
  if (returnMentionIds.returnMentionIds) {
    obj2 = { type: "commandMention", id: arg0[2] };
    const obj = { type: "commandMention", id: arg0[2] };
  } else {
    const items = [];
    const arr = _toArray(arg0[1].split(" "));
    HermesBuiltin.arraySpread(items, arr.slice(1), 0);
    const mapped = items.map(f90903);
    const _HermesInternal = HermesInternal;
    obj2 = {
      type: "commandMention",
      channelId: returnMentionIds.channelId,
      commandId: arg0[2],
      commandName: arg0[1],
      commandKey: "" + arg0[2] + mapped.join(""),
      content: items1,
    };
    const _HermesInternal2 = HermesInternal;
    items1 = [{ type: "text", content: "" + arg0[1] }];
    const obj3 = { type: "text", content: "" + arg0[1] };
  }
  return obj2;
};
const match7 = function match(arg0, allowTimeMentionInput) {
  let match = null;
  if (allowTimeMentionInput.allowTimeMentionInput) {
    const obj = /^<@time:([^>]*)>/;
    match = obj.exec(arg0);
  }
  return match;
};
const parse7 = function parse(content) {
  return { type: "timestampMentionInput", content: content[1] };
};
const match8 = function match(arg0, allowGameMentions) {
  let match = null;
  if (allowGameMentions.allowGameMentions) {
    match = GAME_MENTION_RAW_RE.exec(arg0);
  }
  return match;
};
const parse8 = function parse(gameId) {
  return { type: "gameMention", gameId: gameId[1] };
};
const match9 = function match(arg0) {
  const EMOJI_NAME_RE = UnicodeEmojisDefault.EMOJI_NAME_RE;
  const match = EMOJI_NAME_RE.exec(arg0);
  let tmp4 = null;
  if (null != match) {
    tmp4 = null;
    const tmpResult = UnicodeEmojisDefault;
    if ("" !== tmpResult.convertNameToSurrogate(match[1])) {
      tmp4 = match;
    }
  }
  return tmp4;
};
const parse9 = function parse(arg0) {
  const obj = UnicodeEmojisDefault;
  let content = obj.convertNameToSurrogate(arg0[1]);
  if (null == content) {
    const _HermesInternal = HermesInternal;
    content = ":" + arg0[1] + ":";
  }
  return { type: "text", content };
};
const match10 = function match(arg0) {
  const soundmojiRawFormatRegex = getSoundmojiASTFromString.soundmojiRawFormatRegex;
  return soundmojiRawFormatRegex.exec(arg0);
};
const parse10 = function parse(arg0, arg1, arg2) {
  return getSoundmojiASTFromStringDefault(arg0, arg2);
};
const match11 = function match(arg0) {
  const obj = /^<a?:(\w+):(\d+)>/;
  return obj.exec(arg0);
};
const parse11 = function parse(arg0) {
  const obj = { type: "text", content: ":" + arg0[1] + ":" };
  return obj;
};
const match12 = function match(arg0) {
  const TIMESTAMP_REGEX = TimestampUtils.TIMESTAMP_REGEX;
  return TIMESTAMP_REGEX.exec(arg0);
};
const parse12 = function parse(arg0) {
  let tmp;
  let tmp2;
  let tmp3;
  [tmp, tmp2, tmp3] = arg0;
  const obj = TimestampUtils;
  let parseTimestampResult = obj.parseTimestamp(tmp2, tmp3);
  if (null == parseTimestampResult) {
    parseTimestampResult = { type: "text", content: tmp };
    const obj2 = { type: "text", content: tmp };
  } else {
    parseTimestampResult.type = "timestamp";
  }
  return parseTimestampResult;
};
const match13 = function match(arg0) {
  return regex2.exec(arg0);
};
const parse13 = function parse(arg0, fn, channelId) {
  const obj = { content: fn(arg0[1], channelId), channelId: channelId.channelId };
  return obj;
};
const match14 = function match(arg0) {
  return unpackModuleId.exec(arg0);
};
const parse14 = function parse(arg0, arg1, guildId) {
  const tmp = _slicedToArray(arg0, 3);
  return hydrateStaticRouteLink(tmp[1], tmp[2], guildId);
};
const f90903 = (item) => "" + SUB_COMMAND_KEY_SEPARATOR + item;
function parseLink(arg0) {
  let items;
  let obj3;
  const obj = MarkupLinkRule;
  const punycodeLinkResult = obj.punycodeLink(arg0[1]);
  if (null == punycodeLinkResult) {
    obj3 = { type: "text", content: arg0[1] };
    const obj2 = { type: "text", content: arg0[1] };
  } else {
    obj3 = { type: "link", content: items, target: punycodeLinkResult.target, title: "unicodeVersion" };
    items = [{ type: "text", content: punycodeLinkResult.displayTarget }];
    const obj4 = { type: "text", content: punycodeLinkResult.displayTarget };
  }
  return obj3;
}
function hydrateRoleMention(roleId, guildId) {
  let guild;
  let id1;
  let intl;
  let items;
  let secondary_color;
  let tertiary_color;
  let tmp11;
  if (null != guildId.guildId) {
    guild = GuildStore.getGuild(guildId.guildId);
  } else {
    guild = null;
    if (null != guildId.channelId) {
      const getGuild = GuildStore.getGuild;
      const channel = ChannelStore.getChannel(guildId.channelId);
      guildId = undefined;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      guild = getGuild(guildId);
    }
  }
  let role = null;
  if (null != guild) {
    role = GuildRoleStore.getRole(guild.id, roleId);
  }
  if (null == role) {
    const obj = { type: "text", content: "@" + intl.string(intl2.t["YV4F/n"]) };
    intl = intl2.intl;
    const _HermesInternal3 = HermesInternal;
    return obj;
  } else {
    let id;
    const getHasEnhancedRoleColorsForRole = useHasEnhancedRoleColors.getHasEnhancedRoleColorsForRole;
    useHasEnhancedRoleColors;
    if (guild != null) {
      id = guild.id;
    }
    let hasEnhancedRoleColorsForRole = getHasEnhancedRoleColorsForRole(id, role);
    if (hasEnhancedRoleColorsForRole) {
      const tmp19Result = EnhancedRoleColorUtils;
      hasEnhancedRoleColorsForRole = !tmp19Result.getIsDefaultErc(role);
    }
    const obj2 = {
      type: "mention",
      channelId: guildId.channelId,
      guildId: id1,
      roleId,
      roleColor: role.color,
      roleColors: tmp11,
      roleName: "@" + role.name,
      color: null,
      colorString: null,
      content: items,
    };
    id1 = null;
    if (null != guild) {
      id1 = guild.id;
    }
    tmp11 = null;
    if (hasEnhancedRoleColorsForRole) {
      const colors = role.colors;
      let primary_color;
      if (colors != null) {
        primary_color = colors.primary_color;
      }
      const colors2 = role.colors;
      const obj4 = { primaryColor: primary_color, secondaryColor: secondary_color, tertiaryColor: tertiary_color };
      secondary_color = undefined;
      if (colors2 != null) {
        secondary_color = colors2.secondary_color;
      }
      const colors3 = role.colors;
      tertiary_color = undefined;
      if (colors3 != null) {
        tertiary_color = colors3.tertiary_color;
      }
      tmp11 = obj4;
    }
    const _HermesInternal = HermesInternal;
    ({ color: obj3.color, colorString: obj3.colorString } = role);
    const _HermesInternal2 = HermesInternal;
    items = [{ type: "text", content: "@" + role.name }];
    const obj5 = { type: "text", content: "@" + role.name };
    return obj2;
  }
}
function hydrateUserMention(everyoneOrHere, channelId) {
  let fullMatch;
  let guildId;
  let id;
  let items;
  let tmp14;
  ({ fullMatch, id } = everyoneOrHere);
  everyoneOrHere = everyoneOrHere.everyoneOrHere;
  const str = UserStore.getUser(id);
  const channel = ChannelStore.getChannel(channelId.channelId);
  let tmp;
  let tmp2;
  if (null != str) {
    const id2 = str.id;
    let str1 = str.toString();
    if (null != channel) {
      const obj2 = NicknameUtilsDefault;
      let nickname = obj2.getNickname(channel.getGuildId(), channelId.channelId, str);
      if (nickname == null) {
        const tmp4Result = UserUtilsDefault;
        nickname = tmp4Result.getName(str);
      }
      str1 = nickname;
    }
    tmp2 = str1;
    tmp = id2;
  }
  const isMatch = null != id && regex.test(id.trim());
  let combined = fullMatch;
  if (isMatch) {
    combined = fullMatch;
    if (channelId.unknownUserMentionPlaceholder) {
      const intl = intl2.intl;
      const _HermesInternal = HermesInternal;
      combined = "@" + intl.string(intl2.t.sKdZ6U);
    }
  }
  const obj = {
    type: "mention",
    userId: tmp,
    channelId: channelId.channelId,
    viewingChannelId: channelId.viewingChannelId,
    guildId,
    parsedUserId: tmp14,
    roleName: everyoneOrHere,
    content: items,
  };
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  tmp14 = null;
  if (isMatch) {
    tmp14 = id;
  }
  if (null != tmp2) {
    const _HermesInternal2 = HermesInternal;
    combined = "@" + tmp2;
  }
  items = [{ type: "text", content: combined }];
  return obj;
}
function hydrateStaticRouteLink(id, itemId, guildId) {
  let guild;
  let guildId1;
  let items;
  let tmp12;
  let tmp13;
  const obj = StaticRouteRendering;
  const result = obj.staticRouteToTranslation(id);
  const staticRouteToItemString = StaticRouteRendering.staticRouteToItemString;
  StaticRouteRendering;
  if (null != guildId.guildId) {
    guild = GuildStore.getGuild(guildId.guildId);
  } else {
    guild = null;
    if (null != guildId.channelId) {
      const getGuild = GuildStore.getGuild;
      const channel = ChannelStore.getChannel(guildId.channelId);
      guildId = undefined;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      guild = getGuild(guildId);
    }
  }
  id = undefined;
  if (guild != null) {
    id = guild.id;
  }
  const result1 = staticRouteToItemString(GuildRoleStore, id, itemId, id);
  let str = "";
  if (null != result1) {
    const _HermesInternal = HermesInternal;
    str = " \u203A " + result1;
  }
  const obj2 = {
    type: "staticRouteLink",
    content: items,
    mainContent: tmp12,
    itemContent: tmp13,
    itemId,
    id,
    guildId: guildId1,
    channelId: id,
  };
  items = [];
  const obj3 = { type: "text", content: result + str };
  items[0] = obj3;
  tmp12 = null;
  if (null != result) {
    const items1 = [{ type: "text", content: result }];
    tmp12 = items1;
    const obj4 = { type: "text", content: result };
  }
  tmp13 = null;
  if (null != result1) {
    const items2 = [{ type: "text", content: result1 }];
    tmp13 = items2;
    const obj5 = { type: "text", content: result1 };
  }
  const channel1 = ChannelStore.getChannel(guildId.channelId);
  guildId1 = undefined;
  if (channel1 != null) {
    guildId1 = channel1.getGuildId();
  }
  return obj2;
}
({ ID_REGEX: c9, MARKDOWN_SPOILER_REGEXP: c10, MARKDOWN_STATIC_ROUTE_NAME_REGEXP: unpackModuleId } = Constants);
const SUB_COMMAND_KEY_SEPARATOR = ApplicationCommandConstants.SUB_COMMAND_KEY_SEPARATOR;
const GAME_MENTION_RAW_RE = ChannelAutocompleteConstants.GAME_MENTION_RAW_RE;
const re14 = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/;
const re15 = /^$|\n *$/;
const re16 = /^ *>>> ?/;
const re17 = /^ *> ?/gm;
const re18 = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
let obj = {
  newline: module_1936.defaultRules.newline,
  paragraph: module_1936.defaultRules.paragraph,
  escape: obj2,
  blockQuote: obj3,
  link: MarkupLinkRuleDefault,
  autolink: obj4,
  mailto: obj5,
  tel: obj6,
  url: obj7,
  strong: module_1936.defaultRules.strong,
  em: module_1936.defaultRules.em,
  u: module_1936.defaultRules.u,
  br: module_1936.defaultRules.br,
  text: MarkupTextRuleDefault,
  inlineCode: obj8,
  emoticon: { order: MarkupTextRuleDefault.order, requiredFirstCharacters: ["\u00AF"], match, parse },
  codeBlock: {
    order: module_1936.defaultRules.codeBlock.order,
    requiredFirstCharacters: ["`"],
    match: match2,
    parse: parse2,
  },
  roleMention: { order: MarkupTextRuleDefault.order, requiredFirstCharacters: ["<"], match: match3, parse: parse3 },
  mention: { order: MarkupTextRuleDefault.order, requiredFirstCharacters: ["<", "@"], match: match4, parse: parse4 },
  silentPrefix: { order: MarkupTextRuleDefault.order, requiredFirstCharacters: ["@"], match: match5, parse: parse5 },
  channelMention: MarkupChannelMentionRuleDefault.channelMention,
  channelOrMessageUrl: MarkupChannelMentionRuleDefault.channelOrMessageUrl,
  mediaPostLink: MarkupChannelMentionRuleDefault.mediaPostLink,
  attachmentLink: MarkupAttachmentLinkRuleDefault.attachmentLink,
  commandMention: {
    order: module_1936.defaultRules.text.order,
    requiredFirstCharacters: ["<"],
    match: match6,
    parse: parse6,
  },
  timestampMentionInput: {
    order: module_1936.defaultRules.text.order,
    requiredFirstCharacters: ["<"],
    match: match7,
    parse: parse7,
  },
  gameMention: {
    order: module_1936.defaultRules.text.order,
    requiredFirstCharacters: ["<"],
    match: match8,
    parse: parse8,
  },
  emoji: { order: MarkupTextRuleDefault.order, requiredFirstCharacters: [":"], match: match9, parse: parse9 },
  soundboard: { order: MarkupTextRuleDefault.order, requiredFirstCharacters: ["<"], match: match10, parse: parse10 },
  customEmoji: { order: MarkupTextRuleDefault.order, requiredFirstCharacters: ["<"], match: match11, parse: parse11 },
  timestamp: { order: MarkupTextRuleDefault.order - 1, requiredFirstCharacters: ["<"], match: match12, parse: parse12 },
  s: obj21,
  spoiler: { order: MarkupTextRuleDefault.order, requiredFirstCharacters: ["|"], match: match13, parse: parse13 },
  staticRouteLink: {
    order: MarkupTextRuleDefault.order,
    requiredFirstCharacters: ["<"],
    match: match14,
    parse: parse14,
  },
  heading: MarkupHeadingRuleDefault,
  list: MarkupListRuleDefault,
  subtext: MarkupSubtextRuleDefault,
};
obj2 = {
  match(arg0, allowEscape, arg2) {
    let match = null;
    if (false !== allowEscape.allowEscape) {
      const str = module_1936.defaultRules.escape;
      match = str.match(arg0, allowEscape, arg2);
    }
    return match;
  },
};
let merged = Object.assign(module_1936.defaultRules.escape);
obj3 = {
  requiredFirstCharacters: [" ", ">"],
  match(arg0, prevCapture) {
    prevCapture = prevCapture.prevCapture;
    if (!prevCapture.inQuote) {
      if (!prevCapture.nested) {
        if (null == prevCapture) {
          return re14.exec(arg0);
        } else {
          let match = null;
          if (re15.test(prevCapture[0])) {
            match = re14.exec(arg0);
          }
          return match;
        }
      }
    }
    return null;
  },
  parse(arg0, fn, inQuote) {
    const BooleanResult = Boolean(re16.exec(arg0[0]));
    let tmp2 = re16;
    if (!BooleanResult) {
      tmp2 = re17;
    }
    let flag = inQuote.inQuote;
    const replaced = str.replace(tmp2, "");
    if (!flag) {
      flag = false;
    }
    const tmp4 = inQuote.inline || false;
    inQuote.inQuote = true;
    if (!BooleanResult) {
      inQuote.inline = true;
    }
    const content = fn(replaced, inQuote);
    inQuote.inQuote = flag;
    inQuote.inline = tmp4;
    if (0 === content.length) {
      content.push({ type: "text", content: " " });
    }
    return { content, type: "blockQuote" };
  },
};
const merged1 = Object.assign(module_1936.defaultRules.blockQuote);
obj4 = { parse: parseLink };
const merged2 = Object.assign(module_1936.defaultRules.autolink);
obj5 = {
  match: module_1936.inlineRegex(/^<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>/),
  requiredFirstCharacters: ["<"],
  parse(arg0) {
    let items;
    let text = obj;
    const tmp = arg0[1];
    if (!arg0[1].startsWith("mailto:")) {
      text = `mailto:${obj}`;
    }
    const obj2 = { type: "link", content: items, target: text };
    items = [{ type: "text", content: tmp }];
    return obj2;
  },
};
const merged3 = Object.assign(module_1936.defaultRules.mailto);
module_1936 = module_1936_mod;
obj6 = {
  requiredFirstCharacters: ["<"],
  match: module_1936.inlineRegex(
    /^<((?:(?:tel|sms):\+?|\+)(?:(?:[0-9]|\([0-9]+\)))(?:[- .\/]?(?:[0-9]|\([0-9]+\)))+)>/,
  ),
  parse(arg0) {
    let items;
    const obj = arg0[1];
    const tmp = arg0[1];
    const replaced = obj.replaceAll(/[ \/]+/g, "-");
    let text = replaced;
    const startsWithResult = replaced.startsWith("tel:") || replaced.startsWith("sms:");
    if (!startsWithResult) {
      text = `tel:${obj2}`;
    }
    const obj3 = { type: "link", content: items, target: text };
    items = [{ type: "text", content: tmp }];
    return obj3;
  },
};
const merged4 = Object.assign(module_1936.defaultRules.mailto);
module_1936 = module_1936_mod;
obj7 = {
  requiredFirstCharacters: ["h", "s"],
  match(arg0, inline) {
    if (inline.inline) {
      const match = re18.exec(arg0);
      if (null != match) {
        const first = match[0];
        let diff = first.length - 1;
        let substr = first;
        if (0 <= diff) {
          let num2 = 0;
          substr = first;
          if (")" === first[diff]) {
            const index = first.indexOf("(", num2);
            while (-1 !== index) {
              let diff1 = diff - 1;
              substr = first;
              if (0 <= diff1) {
                diff = diff1;
                num2 = tmp7;
                substr = first;
              }
            }
            substr = first.slice(0, first.length - 1);
          }
        }
        match[1] = substr;
        match[0] = substr;
      }
      return match;
    } else {
      return null;
    }
  },
  parse: parseLink,
};
const merged5 = Object.assign(module_1936.defaultRules.url);
obj8 = {
  parse(arg0, fn, parseInlineCodeChildContent) {
    const inlineCode = module_1936.defaultRules.inlineCode;
    const parsed = inlineCode.parse(arg0, fn, parseInlineCodeChildContent);
    let tmp2 = parsed;
    if (true === parseInlineCodeChildContent.parseInlineCodeChildContent) {
      const obj = { validationChildContent: fn(parsed.content, parseInlineCodeChildContent) };
      const merged = Object.assign(parsed);
      tmp2 = obj;
    }
    return tmp2;
  },
};
const merged6 = Object.assign(module_1936.defaultRules.inlineCode);
({ order: MarkupTextRuleDefault.order, requiredFirstCharacters: ["\u00AF"], match, parse });
({ order: module_1936.defaultRules.codeBlock.order, requiredFirstCharacters: ["`"], match: match2, parse: parse2 });
({ order: MarkupTextRuleDefault.order, requiredFirstCharacters: ["<"], match: match3, parse: parse3 });
({ order: MarkupTextRuleDefault.order, requiredFirstCharacters: ["<", "@"], match: match4, parse: parse4 });
({ order: MarkupTextRuleDefault.order, requiredFirstCharacters: ["@"], match: match5, parse: parse5 });
({ order: module_1936.defaultRules.text.order, requiredFirstCharacters: ["<"], match: match6, parse: parse6 });
({ order: module_1936.defaultRules.text.order, requiredFirstCharacters: ["<"], match: match7, parse: parse7 });
({ order: module_1936.defaultRules.text.order, requiredFirstCharacters: ["<"], match: match8, parse: parse8 });
({ order: MarkupTextRuleDefault.order, requiredFirstCharacters: [":"], match: match9, parse: parse9 });
({ order: MarkupTextRuleDefault.order, requiredFirstCharacters: ["<"], match: match10, parse: parse10 });
({ order: MarkupTextRuleDefault.order, requiredFirstCharacters: ["<"], match: match11, parse: parse11 });
({ order: MarkupTextRuleDefault.order - 1, requiredFirstCharacters: ["<"], match: match12, parse: parse12 });
obj21 = {
  order: module_1936.defaultRules.u.order,
  requiredFirstCharacters: ["~"],
  match: module_1936.inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
  parse: module_1936.defaultRules.u.parse,
};
module_1936 = module_1936_mod;
({ order: MarkupTextRuleDefault.order, requiredFirstCharacters: ["|"], match: match13, parse: parse13 });
({ order: MarkupTextRuleDefault.order, requiredFirstCharacters: ["<"], match: match14, parse: parse14 });
let items = [obj];
let combineMarkupRules = combineMarkupRules_mod;
items[1] = PlatformMarkupRulesDefault;
const importDefaultResult3Result = combineMarkupRules(items);
let module_12 = module_12_mod;
const omitResult = module_12.omit(importDefaultResult3Result, [
  "inlineCode",
  "codeBlock",
  "br",
  "blockQuote",
  "subtext",
  "soundboard",
]);
module_12 = module_12_mod;
const omitResult1 = module_12.omit(importDefaultResult3Result, [
  "inlineCode",
  "codeBlock",
  "br",
  "blockQuote",
  "autolink",
  "url",
  "attachmentLink",
  "mention",
  "roleMention",
  "channelMention",
  "channelOrMessageUrl",
  "mediaPostLink",
  "subtext",
  "soundboard",
  "gameMention",
]);
module_12 = module_12_mod;
const omitResult2 = module_12.omit(importDefaultResult3Result, [
  "codeBlock",
  "br",
  "mention",
  "channel",
  "roleMention",
  "attachmentLink",
  "subtext",
  "soundboard",
  "gameMention",
]);
module_12 = module_12_mod;
let items1 = [importDefaultResult3Result];
const obj24 = {
  inlineCode: {
    match(arg0, arg1, arg2) {
      const str = importDefaultResult3Result.codeBlock;
      const match = str.match(arg0, arg1, arg2);
      if (null != match) {
        return match;
      } else {
        const str2 = importDefaultResult3Result.inlineCode;
        const match1 = str2.match(arg0, arg1, arg2);
        let tmp4;
        if (null != match1) {
          tmp4 = match1;
        }
        return tmp4;
      }
    },
  },
};
items1[1] = obj24;
const omitResult3 = module_12.omit(combineMarkupRules(items1), ["blockQuote", "codeBlock", "br"]);
module_12 = module_12_mod;
const omitResult4 = module_12.omit(importDefaultResult3Result, ["codeBlock", "br", "blockQuote"]);
module_12 = module_12_mod;
const omitResult5 = module_12.omit(importDefaultResult3Result, [
  "codeBlock",
  "br",
  "attachmentLink",
  "mention",
  "roleMention",
  "channel",
  "paragraph",
  "newline",
  "soundboard",
]);
module_12 = module_12_mod;
const omitResult6 = module_12.omit(importDefaultResult3Result, ["codeBlock", "blockQuote", "br"]);
module_12 = module_12_mod;
let items2 = [,];
const obj25 = {
  highlightWord: {
    order: -1,
    match(arr, parseDepth) {
      if (null != parseDepth.parseDepth) {
        if (parseDepth.parseDepth > 10) {
          return null;
        }
      }
      if (null != parseDepth.highlightWord) {
        if (0 !== parseDepth.highlightWord.length) {
          const index = arr.indexOf(parseDepth.highlightWord);
          if (-1 === index) {
            return null;
          } else {
            let tmp2 = 0 === arr.length;
            if (!tmp2) {
              let tmp = 0 === index;
              if (!tmp) {
                const str = arr.charAt(index - 1);
                tmp = "" === str.trim();
              }
              tmp2 = tmp;
            }
            let tmp3 = !tmp2;
            if (tmp2) {
              const sum = index + parseDepth.highlightWord.length;
              let tmp5 = sum === arr.length;
              if (!tmp5) {
                const str3 = arr.charAt(sum);
                tmp5 = "" === str3.trim();
              }
              tmp3 = !tmp5;
            }
            let tmp6 = index;
            let tmp7 = index;
            if (tmp3) {
              while (true) {
                let index1 = arr.indexOf(parseDepth.highlightWord, tmp6 + 1);
                let tmp9 = 0 === arr.length;
                if (!tmp9) {
                  let tmp10 = 0 === index1;
                  if (!tmp10) {
                    let str6 = arr.charAt(index1 - 1);
                    tmp10 = "" === str6.trim();
                  }
                  tmp9 = tmp10;
                }
                let tmp11 = !tmp9;
                if (tmp9) {
                  let sum1 = index1 + parseDepth.highlightWord.length;
                  let tmp13 = sum1 === arr.length;
                  if (!tmp13) {
                    let str7 = arr.charAt(sum1);
                    tmp13 = "" === str7.trim();
                  }
                  tmp11 = !tmp13;
                }
                tmp7 = index1;
                if (!tmp11) {
                  break;
                } else {
                  tmp6 = index1;
                  tmp7 = index1;
                  if (-1 === index1) {
                    break;
                  }
                }
              }
            }
            if (-1 === tmp7) {
              return null;
            } else {
              const substr = arr.substring(0, tmp7);
              const items = [
                arr,
                parseDepth.highlightWord,
                substr,
                arr.substring(tmp7 + parseDepth.highlightWord.length),
              ];
              return items;
            }
          }
        }
      }
      return null;
    },
    parse(arg0, arg1, arg2) {
      let num = module.parseDepth;
      if (num == null) {
        num = 0;
      }
      const obj = { parseDepth: num + 1 };
      const merged = Object.assign(module);
      const _module = require("ChannelStore");
      const _module1 = require("GuildRoleStore");
      const items = [..._module, obj2, ..._module1];
      return items;
    },
  },
};
items2[0] = obj25;
const omitResult7 = module_12.omit(importDefaultResult3Result, ["codeBlock", "br", "inlineCode"]);
combineMarkupRules = combineMarkupRules_mod;
module_12 = module_12_mod;
items2[1] = module_12.omit(importDefaultResult3Result, ["url"]);
const obj26 = {
  RULES: importDefaultResult3Result,
  CHANNEL_TOPIC_RULES: omitResult,
  VOICE_CHANNEL_STATUS_RULES: omitResult1,
  EMBED_TITLE_RULES: omitResult2,
  INLINE_REPLY_RULES: omitResult3,
  GUILD_VERIFICATION_FORM_RULES: omitResult4,
  GUILD_EVENT_RULES: omitResult6,
  PROFILE_BIO_RULES: omitResult5,
  AUTO_MODERATION_SYSTEM_MESSAGE_RULES: combineMarkupRules(items2),
  NATIVE_SEARCH_RESULT_LINK_RULES: omitResult7,
};
let result = size.fileFinishedImporting("modules/markup/MarkupRules.tsx");

export default obj26;
export { hydrateRoleMention };
export { hydrateUserMention };
export const hydrateCommandMention = function hydrateCommandMention(name, commandId, channelId) {
  let items1;
  const items = [..._toArray(name.split(" ")).slice(1)];
  _toArray(name.split(" "));
  const mapped = items.map(f90903);
  const obj = {
    type: "commandMention",
    channelId: channelId.channelId,
    commandId,
    commandName: name,
    commandKey: "" + commandId + mapped.join(""),
    content: items1,
  };
  items1 = [{ type: "text", content: "" + name }];
  ({ type: "text", content: "" + name });
  return obj;
};
export { hydrateStaticRouteLink };
