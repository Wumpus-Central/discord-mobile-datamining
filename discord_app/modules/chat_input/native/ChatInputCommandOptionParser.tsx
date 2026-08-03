// === Module 11183: findGameMentionTokens ===

// Module 11183 (findGameMentionTokens)
import { Image } from "computeChannelName";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import getEmojiToGroupId from "getEmojiToGroupId";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";
import regExp from "regExp";
import { EmojiIntention } from "set";

let c10;
let c9;
let unpackModuleId;
function findGameMentionTokens(text, name, items) {
  let closure_0 = name;
  if (items === undefined) {
    items = [];
  }
  const arr2 = callback(name);
  const found = items.filter((arg0) => arg0 !== arr2);
  const mapped = found.map(callback);
  const obj = { token: arr2, locations: null };
  const items1 = [];
  let index = text.indexOf(arr2);
  if (-1 !== index) {
    do {
      closure_0 = text;
      let importDefault = index;
      let dependencyMap = arr2;
      let someResult = mapped.some((arg0) => {
        let startsWithResult = arg0.length > length.length;
        if (startsWithResult) {
          startsWithResult = arr2.startsWith(arg0, closure_1);
        }
        return startsWithResult;
      });
      let tmp3 = !someResult;
      let tmp4 = index;
      if (!someResult) {
        let arr = items1.push(index);
      }
      index = text.indexOf(arr2, index + arr2.length);
    } while (-1 !== index);
  }
  obj[1] = items1;
  return obj;
}
function buildGameMentionResult(id) {
  let uri = importDefault(4223)(id.id, id.icon, { size: 32 });
  const obj = { location: 0, length: callback(id.name).length, icon: null, iconSize: 16, iconCornerRadius: 4, iconSpacing: 4 };
  if (obj2.isNullOrEmpty(uri)) {
    uri = Image.resolveAssetSource(importDefault(6782)).uri;
  }
  obj[2] = uri;
  return obj;
}
({ GAME_MENTION_INPUT_PREFIX: c9, formatGameMentionRaw: c10, formatGameMentionToken: unpackModuleId } = regExp);
let tmp3 = /[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]((?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])+):/g;
const re14 = /:((?:[\0-\x08\x0E-\x1F!-9;-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+?(?:::skin-tone-[0-9])?):/g;
const re15 = /@((?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])(?:[\0-"\$-9;-\?A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)#([0-9]{4}))/g;
const re16 = /@([\.0-9_a-z]{2,32})/g;
const re17 = /@(((?:[\0-"\$-9;-\?A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){1,100}))(?![0-9A-Z_a-z]*#)/g;
const re18 = /#(((?:[\0-\x08\x0E-\x1F!"\$-9;-\?A-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+))/g;
const re19 = /^@(silent(?![^\s]))/;
const everyone = "everyone";
const here = "here";
const result = require("getEmojiToGroupId").fileFinishedImporting("modules/chat_input/native/ChatInputCommandOptionParser.tsx");

export const commandOptionRegex = tmp3;
export const getMatchedOptionsWithValue = (length2, activeCommand) => {
  let _location;
  let _location2;
  let tmp3;
  if (activeCommand != null) {
    activeCommand = activeCommand.activeCommand;
    if (activeCommand != null) {
      const options = activeCommand.options;
    }
  }
  activeCommand = undefined;
  if (activeCommand != null) {
    activeCommand = activeCommand.activeCommand;
  }
  if (null != activeCommand) {
    if (null != options) {
      const preferredOptionValues = activeCommand.preferredOptionValues;
      tmp3.lastIndex = 0;
      const items = [];
      const _Set = Set;
      const set = new Set();
      let match = tmp3.exec(length2);
      let tmp19 = null;
      let tmp20 = null;
      while (null != match) {
        let tmp2 = tmp19;
        tmp3 = match;
        let tmp4 = tmp19;
        if (match[0].length > 1) {
          let first = match[0];
          let num = 0;
          let tmp16 = tmp19;
          tmp4 = tmp19;
          if (0 < options.length) {
            do {
              let hasItem = set.has(num);
              let tmp6 = num;
              let tmp7 = tmp16;
              if (!hasItem) {
                hasItem = options[num].displayName !== tmp32;
              }
              let tmp8 = tmp16;
              if (!hasItem) {
                if (null != tmp16) {
                  let obj = { location: null, length: null, data: null };
                  ({ location: obj6[0], location: _location } = tmp16);
                  let index = match.index;
                  let displayName = tmp16.data.option.displayName;
                  let tmp9;
                  if (preferredOptionValues != null) {
                    tmp9 = preferredOptionValues[tmp16.data.option.name];
                  }
                  let diff = index - _location;
                  let startsWithResult = null != tmp9 && "" !== tmp9.displayText;
                  if (startsWithResult) {
                    let substr = length2.substring(_location + displayName.length + 1, index);
                    startsWithResult = substr.startsWith(tmp9.displayText);
                  }
                  if (startsWithResult) {
                    diff = displayName.length + 1 + tmp9.displayText.length;
                  }
                  obj[1] = diff;
                  obj[2] = tmp16.data;
                  let arr = items.push(obj);
                }
                obj = { location: null, length: null, data: null };
                obj[0] = match.index + 1;
                obj[1] = match[0].length - 1;
                let obj1 = { type: null, option: null };
                let tmp13 = require;
                let tmp14 = dependencyMap;
                obj1[0] = require(11184) /* addRule */.ChatInputParseResultDataType.COMMAND_OPTION;
                obj1[1] = options[num];
                obj[2] = obj1;
                let addResult = set.add(num);
                tmp8 = obj;
              }
              num = num + 1;
              tmp16 = tmp8;
              tmp4 = tmp8;
            } while (num < options.length);
          }
        }
        let tmp17 = tmp3;
        tmp3.lastIndex = match.index + 1;
        match = tmp3.exec(length2);
        tmp19 = tmp4;
        tmp20 = tmp4;
      }
      if (null != tmp20) {
        const obj2 = { location: null, length: null, data: null };
        ({ location: obj7[0], location: _location2 } = tmp20);
        const displayName1 = tmp20.data.option.displayName;
        let tmp21;
        if (preferredOptionValues != null) {
          tmp21 = preferredOptionValues[tmp20.data.option.name];
        }
        let diff1 = length - _location2;
        let startsWithResult1 = null != tmp21 && "" !== tmp21.displayText;
        if (startsWithResult1) {
          const substr1 = length2.substring(_location2 + displayName1.length + 1, length);
          startsWithResult1 = substr1.startsWith(tmp21.displayText);
        }
        if (startsWithResult1) {
          diff1 = displayName1.length + 1 + tmp21.displayText.length;
        }
        obj2[1] = diff1;
        obj2[2] = tmp20.data;
        items.push(obj2);
      }
      return items;
    }
  }
  return [];
};
export const getMatchedOptions = (arg0, activeCommand) => {
  if (activeCommand != null) {
    activeCommand = activeCommand.activeCommand;
    if (activeCommand != null) {
      const options = activeCommand.options;
    }
  }
  activeCommand = undefined;
  if (activeCommand != null) {
    activeCommand = activeCommand.activeCommand;
  }
  if (null != activeCommand) {
    if (null != options) {
      tmp3.lastIndex = 0;
      const items = [];
      const _Set = Set;
      const set = new Set();
      let match = tmp3.exec(arg0);
      if (null != match) {
        do {
          let tmp2 = match;
          if (match[0].length > 1) {
            let first = match[0];
            for (let num = 0; num < options.length; num = num + 1) {
              let hasItem = set.has(num);
              let tmp4 = num;
              if (!hasItem) {
                hasItem = options[num].displayName !== tmp18;
              }
              if (!hasItem) {
                let obj = { location: null, length: null, data: null };
                obj[0] = match.index + 1;
                obj[1] = match[0].length - 1;
                obj = { type: null, option: null };
                let tmp5 = require;
                let tmp6 = dependencyMap;
                obj[0] = require(11184) /* addRule */.ChatInputParseResultDataType.COMMAND_OPTION;
                obj[1] = options[num];
                obj[2] = obj;
                let arr = items.push(obj);
                let addResult = set.add(num);
              }
            }
          }
          let tmp9 = tmp3;
          tmp3.lastIndex = match.index + 1;
          match = tmp3.exec(arg0);
        } while (null != match);
      }
      return items;
    }
  }
  return [];
};
export const getTextBeforeFirstOption = (arr) => {
  tmp3.lastIndex = 0;
  const match = tmp3.exec(arr);
  const obj = { match, text: null };
  let substr = arr;
  if (null != match) {
    substr = arr.slice(0, tmp3.lastIndex - match[0].length);
  }
  obj[1] = substr;
  return obj;
};
export const getEmojiHighlightNodes = function getEmojiHighlightNodes(channel, arg1) {
  if (0 === arg1.length) {
    return [];
  } else {
    const items = [];
    let match = regex.exec(arg1);
    let tmp11 = null;
    while (null != match) {
      let disambiguatedEmojiContext = tmp11;
      let tmp = match;
      if (tmp11 == null) {
        let tmp2 = disambiguatedEmojiContext;
        disambiguatedEmojiContext = disambiguatedEmojiContext.getDisambiguatedEmojiContext(channel.getGuildId());
      }
      let str = match[1];
      let trimmed = str.trim();
      let byId = disambiguatedEmojiContext.getById(trimmed);
      if (byId == null) {
        byId = disambiguatedEmojiContext.getByName(trimmed);
      }
      if (null != byId) {
        let tmp5 = importDefault;
        let tmp6 = dependencyMap;
        let obj2 = importDefault(3838);
        let obj = { emoji: null, channel: null, intention: null };
        obj[0] = byId;
        obj[1] = channel;
        let tmp7 = EmojiIntention;
        obj[2] = EmojiIntention.CHAT;
        if (null === obj2.getEmojiUnavailableReason(obj)) {
          obj = { location: null, length: null };
          obj[0] = match.index;
          obj[1] = match[0].length;
          let arr = items.push(obj);
        }
      }
      let tmp9 = regex;
      match = regex.exec(arg1);
      tmp11 = disambiguatedEmojiContext;
    }
    return items;
  }
};
export const getUsernameHighlightNodes = function getUsernameHighlightNodes(channel, arg1) {
  const items = [];
  let obj = f86689(11185);
  const users = obj.getUsers(channel);
  f86689 = (arg0) => arg0;
  let match = regex2.exec(arg1);
  if (null != match) {
    do {
      let str = match[1];
      f86689 = str.trim();
      let tmp2 = match;
      if (null != users.find((text) => f86689(text.text) === f86689)) {
        obj = { location: null, length: null };
        obj[0] = match.index;
        obj[1] = match[0].length;
        let arr = items.push(obj);
      }
      match = obj2.exec(arg1);
    } while (null != match);
  }
  f86689 = (arg0) => arg0.split("#")[0];
  let match1 = regex3.exec(arg1);
  if (null != match1) {
    do {
      let str2 = match1[1];
      f86689 = str2.trim();
      let tmp5 = match1;
      if (null != users.find((text) => f86689(text.text) === f86689)) {
        obj = { location: null, length: null };
        obj[0] = match1.index;
        obj[1] = match1[0].length;
        arr = items.push(obj);
      }
      match1 = obj4.exec(arg1);
    } while (null != match1);
  }
  return items;
};
export { findGameMentionTokens };
export const serializeComposerGameMentions = function serializeComposerGameMentions(result, mentionGames) {
  let items = [];
  let values = mentionGames.values();
  for (const item10008 of values) {
    let arr = items.push(item10008.name);
    continue;
  }
  let closure_1 = result;
  function _loop2() {
    let arr = closure_1;
    name = name.name;
    let arr2 = name;
    arr2 = outer1_11(name);
    const found = arr2.filter((arg0) => arg0 !== arr2);
    const mapped = found.map(outer1_11);
    const items = [];
    let index = closure_1.indexOf(arr2);
    if (-1 !== index) {
      do {
        arr2 = arr;
        closure_1 = index;
        name = arr2;
        let someResult = mapped.some((arg0) => {
          let startsWithResult = arg0.length > length.length;
          if (startsWithResult) {
            startsWithResult = arr2.startsWith(arg0, closure_1);
          }
          return startsWithResult;
        });
        let tmp4 = !someResult;
        let tmp5 = index;
        if (!someResult) {
          arr = items.push(index);
        }
        index = arr.indexOf(arr2, index + arr2.length);
      } while (-1 !== index);
    }
    closure_1 = outer1_10(name.id);
    closure_1 = items.reduceRight((arr) => {
      const sum = arr.slice(0, arg1) + closure_1;
      return sum + arr.slice(arg1 + arr2.length);
    }, closure_1);
  }
  values = mentionGames.values();
  const iter = values[Symbol.iterator]();
  while (iter !== undefined) {
    let closure_2 = iter.next();
    let _loop2Result = _loop2();
    continue;
  }
  return closure_1;
};
export { buildGameMentionResult };
export const getGameHighlightNodes = function getGameHighlightNodes(mentionGames, text) {
  let icon;
  let iconCornerRadius;
  let iconSize;
  let iconSpacing;
  let length;
  const items = [];
  let values = mentionGames.values();
  for (const item10016 of values) {
    let arr = items.push(item10016.name);
    continue;
  }
  const items1 = [];
  values = mentionGames.values();
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp6 = findGameMentionTokens;
    let tmp5 = nextResult;
    let locations = findGameMentionTokens(text, nextResult.name, items).locations;
    if (0 !== locations.length) {
      let tmp15 = buildGameMentionResult;
      let tmp16 = nextResult;
      let tmp17 = buildGameMentionResult(tmp5);
      ({ length, icon, iconSize, iconCornerRadius, iconSpacing } = tmp17);
      let tmp18 = tmp7;
      let tmp8 = locations;
      for (const item10039 of locations) {
        let obj = { location: null, length: null, icon: null, iconSize: null, iconCornerRadius: null, iconSpacing: null };
        obj[0] = item10039;
        let tmp9 = length;
        obj[1] = length;
        let tmp10 = icon;
        obj[2] = icon;
        let tmp11 = iconSize;
        obj[3] = iconSize;
        let tmp12 = iconCornerRadius;
        obj[4] = iconCornerRadius;
        let tmp13 = iconSpacing;
        obj[5] = iconSpacing;
        arr = items1.push(obj);
        continue;
      }
    }
    continue;
  }
  return items1;
};
export const getGameMentionInputNodes = function getGameMentionInputNodes(arr) {
  const gameMentionsAutocompleteConfig = _require(9673).getGameMentionsAutocompleteConfig("game mention input highlight");
  if (gameMentionsAutocompleteConfig.enabled) {
    if (!gameMentionsAutocompleteConfig.combineMentionAutocomplete) {
      arr = closure_9;
      _require = closure_9;
      const items = [];
      let index = arr.indexOf(closure_9);
      if (-1 !== index) {
        do {
          let tmp4 = _require;
          let tmp5 = dependencyMap;
          let obj2 = _require(9590);
          let tmp6 = index;
          if (obj2.isWhitespaceSeparatingBoundary(arr, index)) {
            arr = items.push(index);
          }
          index = arr.indexOf(arr, index + arr.length);
        } while (-1 !== index);
      }
      return items.map((location) => ({ location, length: length.length }));
    }
  }
  return [];
};
export const getRoleHighlightNodes = (getGuildId) => {
  const items = [];
  if (getUncachedChannelPermissions.can(Permissions.MENTION_EVERYONE, getGuildId)) {
    const guildId = getGuildId.getGuildId();
    let closure_2 = {};
    if (null != guildId) {
      sortedRoles = sortedRoles.getSortedRoles(guildId);
    } else {
      sortedRoles = [];
    }
    sortedRoles[Symbol.iterator]();
  } else {
    return items;
  }
};
export const getSilentHighlightNodes = function getSilentHighlightNodes(arg0) {
  const items = [];
  const match = regex4.exec(arg0);
  if (null != match) {
    const obj = { location: null, length: null };
    obj[0] = match.index;
    obj[1] = match[0].length;
    items.push(obj);
  }
  return items;
};
export const getChannelHighlightNodes = function getChannelHighlightNodes(channel, arg1) {
  let _loop4Result;
  const _require = arg1;
  let items = [];
  const dependencyMap = _require(11185).getChannels(channel);
  let c3 = 0;
  function _loop4() {
    let arr = lib;
    const index = lib.indexOf("#", closure_3);
    closure_3 = index;
    if (index < 0) {
      return 1;
    } else {
      if ("\"" === arr[closure_3 + 1]) {
        const sum = closure_3 + 2;
        closure_3 = sum;
        let str2 = arr;
        if (sum < arr.length) {
          while (true) {
            let arr2 = lib;
            let tmp4 = closure_3;
            if ("\\" !== lib[closure_3]) {
              let tmp6 = closure_3;
              str2 = arr2;
              if ("\"" === arr2[closure_3]) {
                break;
              }
            } else {
              let tmp5 = closure_3;
              closure_3 = closure_3 + 1;
            }
            let tmp7 = closure_3;
            let sum1 = closure_3 + 1;
            closure_3 = sum1;
            str2 = arr2;
            if (sum1 >= arr2.length) {
              break;
            }
          }
        }
        let obj = lib(closure_2[17]);
        lib = obj.unescapeChannelName(str2.substring(tmp2 + 2, closure_3));
        if (null != closure_2.find((text) => text.text === closure_0)) {
          obj = { location: null, length: null };
          obj[0] = tmp2;
          obj[1] = closure_3 - tmp2 + 1;
          arr = items.push(obj);
        } else {
          closure_3 = tmp2 + 1;
        }
      } else {
        outer1_18.lastIndex = closure_3;
        const match = outer1_18.exec(arr);
        if (null != match) {
          items = match[1].trim();
          if (null != closure_2.find((text) => text.text === closure_1)) {
            obj = { location: null, length: null };
            obj[0] = match.index;
            obj[1] = match[0].length;
            arr = items.push(obj);
          }
          const str4 = match[1];
        }
      }
      closure_3 = closure_3 + 1;
    }
  }
  if (!_loop4()) {
    do {
      _loop4Result = _loop4();
    } while (!_loop4Result);
  }
  return items;
};