// discord_app/modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import _mod1652 from "../../../../../../_runtime/metro/01652__.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import ClientThemesOverrides from "../../../../client_themes/native/ClientThemesOverrides.tsx";
import useFastestListTableRowPlaceholderConfig from "../../../../fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx";
import ThemedGradientDefault from "../../../../client_themes/native/ThemedGradient.tsx";
import UserRowDefault from "UserRow.tsx";
import GroupDMRowDefault from "GroupDMRow.tsx";
import ChannelRowDefault from "ChannelRow.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
function Placeholder(arg0) {
  ({ start, end } = arg0);
  const fastestListTableRowPlaceholderStyles =
    useFastestListTableRowPlaceholderConfig.useFastestListTableRowPlaceholderStyles();
  const obj2 = { end, start, label: null, icon: null, height: "100%" };
  const obj3 = { style: null };
  items = [
    fastestListTableRowPlaceholderStyles.placeholderUsername,
    _slicedToArray(
      noop.useState(() => ({ width: `${(10 + 80 * Math.random()) | 0}%` })),
      1,
    )[0],
  ];
  obj3.style = items;
  obj2.label = metroImportDefault(View, obj3);
  obj2.icon = metroImportDefault(View, { style: fastestListTableRowPlaceholderStyles.placeholderAvatar });
  return metroImportDefault(TableRow.TableRow, obj2);
}
function PlaceholderSection() {
  return metroImportDefault(View, {});
}
const View = fn(17).View;
const UsersFastListConstants = fn(10862);
const USERS_LIST_PADDING_BETWEEN_SECTIONS = UsersFastListConstants.USERS_LIST_PADDING_BETWEEN_SECTIONS;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5142);
let obj = {
  sectionHeader: { flex: 1, overflow: "hidden", top: -1 * UsersFastListConstants.USERS_LIST_SECTION_BOTTOM_PADDING },
  stickyHeader: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
  list: null,
  emptySection: null,
  section: null,
  interactiveSection: null,
  titlePressable: null,
  titleRow: null,
  badgeWrapper: null,
  badge: null,
};
let obj3 = { flex: 1, overflow: "hidden", top: -1 * UsersFastListConstants.USERS_LIST_SECTION_BOTTOM_PADDING };
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.list = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: 16 };
obj.emptySection = { paddingBottom: USERS_LIST_PADDING_BETWEEN_SECTIONS };
obj.section = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS,
  textTransform: "none",
};
let obj5 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: 16 };
obj.interactiveSection = { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS - nativeDefault.space.PX_8 };
let obj6 = { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS - nativeDefault.space.PX_8 };
obj.titlePressable = { paddingVertical: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8 };
let obj7 = { paddingVertical: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8 };
obj.titleRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.badgeWrapper = { height: "100%" };
const rect = { position: "absolute", left: nativeDefault.space.PX_4 + nativeDefault.space.PX_4 / 2, top: 5 };
obj.badge = rect;
let closure_10 = createStyles.createStyles(obj);
let closure_13 = {
  code: "(function UsersFastListTsx1(){let[scrollPosValue,stickyAt]=this.__closure;var _scrollPosValue;const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;})",
};
let closure_14 = {
  code: "(function UsersFastListTsx2(){let[isSticky,styles]=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:'transparent'};})",
};
let closure_15 = {
  code: "(function UsersFastListTsx3(){let[isSticky]=this.__closure;return{opacity:isSticky.get()?1:0};})",
};
let closure_16 = noop.memo(function UserSectionInner(arg0) {
  ({ title, colorOverride } = arg0);
  ({ actionTitle, badge, disableThemedGradient, titleLeading, onTitlePress } = arg0);
  let animatedStyle;
  ({ action, scrollPosValue, stickyAt, disableStickySections } = arg0);
  const tmp = closure_10();
  closure_2 = tmp;
  items = [colorOverride];
  const memo = noop.useMemo(() => {
    let tmp2 = null != c0;
    if (tmp2) {
      const obj = { color: tmp };
      tmp2 = obj;
    }
    return tmp2;
  }, items);
  const clientThemesOverride = ClientThemesOverrides.useClientThemesOverride();
  const items1 = [, , ,];
  ({ section: arr2[0], interactiveSection: arr2[1] } = tmp);
  items1[2] = onTitlePress;
  items1[3] = clientThemesOverride;
  const memo1 = noop.useMemo(() => {
    items = [closure_2.section, null != c1 && closure_2.interactiveSection, clientThemesOverride];
    return items;
  }, items1);
  const items2 = [closure_13, scrollPosValue, stickyAt];
  c0 = undefined;
  c1 = undefined;
  [tmp7, tmp8, tmp9] = items2;
  class UsersFastListTsx1 {
    constructor() {
      obj = closure_0;
      value = undefined;
      if (closure_0 != null) {
        value = obj.get();
      }
      tmp2 = null != value;
      if (tmp2) {
        tmp3 = closure_1;
        tmp2 = null != closure_1;
      }
      if (tmp2) {
        tmp4 = closure_1;
        tmp2 = value >= closure_1;
      }
      return tmp2;
    }
  }
  const items3 = [tmp8, tmp9];
  UsersFastListTsx1.__closure = items3;
  UsersFastListTsx1.__workletHash = 5651317094590;
  UsersFastListTsx1.__initData = tmp7;
  const derivedValue = _mod1652.useDerivedValue(UsersFastListTsx1);
  const items4 = [closure_14, derivedValue, tmp];
  c0 = undefined;
  c1 = undefined;
  [tmp11, tmp12, tmp13] = items4;
  class UsersFastListTsx2 {
    constructor() {
      backgroundColor = "transparent";
      if (closure_0.get()) {
        tmp = closure_1;
        backgroundColor = closure_1.stickyHeader.backgroundColor;
      }
      return { backgroundColor };
    }
  }
  const items5 = [tmp12, tmp13];
  UsersFastListTsx2.__closure = items5;
  UsersFastListTsx2.__workletHash = 3082250653169;
  UsersFastListTsx2.__initData = tmp11;
  animatedStyle = _mod1652.useAnimatedStyle(UsersFastListTsx2);
  const items6 = [tmp.sectionHeader, animatedStyle];
  const memo2 = noop.useMemo(() => {
    items = [closure_2.sectionHeader, animatedStyle];
    return items;
  }, items6);
  const tmp3Result = _mod1652;
  const items7 = [closure_15, derivedValue];
  c0 = undefined;
  [tmp16, tmp17] = items7;
  class UsersFastListTsx3 {
    constructor() {
      opacity = 0;
      if (closure_0.get()) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  const items8 = [tmp17];
  UsersFastListTsx3.__closure = items8;
  UsersFastListTsx3.__workletHash = 4870088856322;
  UsersFastListTsx3.__initData = tmp16;
  const animatedStyle1 = _mod1652.useAnimatedStyle(UsersFastListTsx3);
  if (null == title) {
    if (null == actionTitle) {
      const obj4 = { style: tmp.emptySection };
      return metroImportDefault(View, obj4);
    }
  }
  let formatToPlainStringResult;
  if (typeof title === "string") {
    if (obj18.test(title)) {
      const intl = util.intl;
      const obj5 = { title };
      formatToPlainStringResult = intl.formatToPlainString(util.t["4cB+rA"], obj5);
    }
    obj18 =
      /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])$/;
  }
  const obj6 = {
    maxFontSizeMultiplier: 2,
    accessibilityRole: "header",
    accessibilityLabel: formatToPlainStringResult,
    variant: "body-md/medium",
    color: "text-subtle",
    style: memo,
    children: null,
  };
  const items9 = [title];
  let tmp21 = null;
  if (null != badge) {
    const obj7 = { style: tmp.badgeWrapper, children: null };
    const obj8 = { style: tmp.badge, value: badge };
    obj7.children = metroImportDefault(native.Badge, obj8);
    tmp21 = metroImportDefault(View, obj7);
  }
  items9[1] = tmp21;
  obj6.children = items9;
  const tmp19Result = React5(Text_Text.Text, obj6);
  let tmp19Result4 = tmp19Result;
  if (null != titleLeading) {
    const obj9 = { style: tmp.titleRow, children: null };
    const items10 = [titleLeading, tmp19Result];
    obj9.children = items10;
    tmp19Result4 = React5(View, obj9);
  }
  let tmp27 = tmp19Result4;
  if (null != onTitlePress) {
    const obj10 = {
      accessibilityRole: "button",
      style: tmp.titlePressable,
      onPress: onTitlePress,
      children: tmp19Result4,
    };
    tmp27 = metroImportDefault(Pressables.PressableOpacity, obj10);
  }
  const obj11 = { style: memo1, children: null };
  const items11 = [tmp27];
  let tmp30 = null;
  if (null != actionTitle) {
    const obj12 = { onPress: action, children: null };
    const obj13 = { variant: "body-sm/semibold", color: "text-brand", children: actionTitle };
    obj12.children = metroImportDefault(Text_Text.Text, obj13);
    tmp30 = metroImportDefault(Pressables.PressableOpacity, obj12);
  }
  items11[1] = tmp30;
  obj11.children = items11;
  const tmp19Result5 = React5(View, obj11);
  let tmp19Result6 = tmp19Result5;
  if (!disableStickySections) {
    const obj14 = { style: memo2, children: null };
    let tmp35 = !disableThemedGradient;
    if (!disableThemedGradient) {
      const obj15 = {
        style: animatedStyle1,
        children: metroImportDefault(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: true }),
      };
      tmp35 = metroImportDefault(_modDef1652.View, obj15);
    }
    const items12 = [tmp35, tmp19Result5];
    obj14.children = items12;
    tmp19Result6 = React5(_modDef1652.View, obj14);
  }
  return tmp19Result6;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx");

export const UsersFastList = function UsersFastListInner(onSelectUser) {
  ({ sections, getItemProps } = onSelectUser);
  const getSectionProps = onSelectUser.getSectionProps;
  ({ getItemSize, keyExtractor, insetStart, insetEnd } = onSelectUser);
  if (insetEnd === undefined) {
    insetEnd = 0;
  }
  let flag = onSelectUser.disableBottomSafeZone;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = onSelectUser.disableStickySections;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const disableThemedGradient = onSelectUser.disableThemedGradient;
  const disableBackgroundOverlay = onSelectUser.disableBackgroundOverlay;
  ({ inActionSheet, listHeaderSize, onContentLengthChange, onScroll, onLayout, renderListHeader, listStyleOverride } =
    onSelectUser);
  closure_7 = undefined;
  let clientThemesOverride;
  let tmp = closure_10();
  const list = tmp;
  let num = 0;
  if (!flag) {
    num = getSectionProps(flag2[16])().bottom;
  }
  const sum = insetEnd + num;
  const tmp5 = getSectionProps(flag2[17])();
  const tmp6 = getSectionProps(flag2[18])();
  closure_7 = tmp6;
  clientThemesOverride = getItemProps(flag2[9]).useClientThemesOverride();
  items = [getSectionProps, flag2, disableThemedGradient];
  const callback = disableBackgroundOverlay.useCallback((arg0, arg1, scrollPosValue, stickyAt) => {
    const element = getSectionProps(arg0);
    let type;
    if (element != null) {
      type = element.type;
    }
    if ("placeholder" === type) {
      return metroImportDefault(PlaceholderSection, {});
    } else if ("section" === type) {
      const obj = {};
      const merged = Object.assign(element.props);
      obj.disableStickySections = flag2;
      obj.disableThemedGradient = disableThemedGradient;
      obj.scrollPosValue = scrollPosValue;
      obj.stickyAt = stickyAt;
      return metroImportDefault(closure_16, obj);
    } else {
      return null;
    }
  }, items);
  const items1 = [getItemProps];
  const callback1 = disableBackgroundOverlay.useCallback((flag2, arg1) => {
    const element = getItemProps(flag2, arg1);
    let type;
    if (element != null) {
      type = element.type;
    }
    if ("user" === type) {
      const obj2 = {};
      const merged = Object.assign(element.props);
      return metroImportDefault(UserRowDefault, obj2);
    } else if ("placeholder" === type) {
      const obj3 = {};
      const merged1 = Object.assign(element.props);
      return metroImportDefault(Placeholder, obj3);
    } else if ("gdm" === type) {
      const obj4 = {};
      const merged2 = Object.assign(element.props);
      return metroImportDefault(GroupDMRowDefault, obj4);
    } else if ("channel" === type) {
      const obj5 = {};
      const merged3 = Object.assign(element.props);
      return metroImportDefault(ChannelRowDefault, obj5);
    } else if ("custom" === type) {
      const obj = { children: element.component() };
      return metroImportDefault(React6, obj);
    } else {
      return null;
    }
  }, items1);
  const items2 = [getSectionProps, tmp6];
  const callback2 = disableBackgroundOverlay.useCallback((arg0) => {
    const element = getSectionProps(arg0);
    let type;
    if (element != null) {
      type = element.type;
    }
    if ("placeholder" === type) {
      return closure_7;
    } else if ("section" === type) {
      if (element.props.hideTitle) {
        return 0;
      }
    } else {
      return 0;
    }
  }, items2);
  const items3 = [tmp.list, disableBackgroundOverlay, clientThemesOverride, listStyleOverride];
  const memo = disableBackgroundOverlay.useMemo(() => {
    items = [list.list, ,];
    let tmp = disableBackgroundOverlay;
    if (disableBackgroundOverlay) {
      tmp = clientThemesOverride;
    }
    items[1] = tmp;
    items[2] = listStyleOverride;
    return items;
  }, items3);
  let obj = getItemProps(flag2[9]);
  const tmp12 = getSectionProps(flag2[7])();
  if ("legend" === tmp2Result.useConfig({ location: "Users List" }).list) {
    let obj2 = {
      sections,
      sectionHeaderIsSticky: !flag2,
      sectionHeaderSize: callback2,
      keyExtractor,
      ref,
      style: memo,
      itemSize: null,
      renderItem: null,
      renderListHeader: null,
      renderSectionHeader: null,
      insetStart: null,
      insetEnd: null,
      inActionSheet: null,
      onContentLengthChange: null,
      onScroll: null,
      onLayout: null,
      listHeaderSize: null,
    };
    if (getItemSize == null) {
      getItemSize = tmp5;
    }
    obj2.itemSize = getItemSize;
    obj2.renderItem = callback1;
    obj2.renderListHeader = renderListHeader;
    obj2.renderSectionHeader = callback;
    obj2.insetStart = insetStart;
    obj2.insetEnd = sum;
    obj2.inActionSheet = inActionSheet;
    obj2.onContentLengthChange = onContentLengthChange;
    obj2.onScroll = onScroll;
    obj2.onLayout = onLayout;
    obj2.listHeaderSize = listHeaderSize;
    let tmp13Result = closure_7(tmp2(tmp3[23]), obj2);
    const tmp2Result3 = tmp2(tmp3[23]);
  } else {
    let obj3 = {
      sections,
      sectionHeaderIsSticky: !flag2,
      sectionHeaderSize: callback2,
      estimatedListSize: "windowSize",
      keyExtractor,
      ref,
      style: memo,
      itemSize: null,
      renderItem: null,
      renderListHeader: null,
      renderSectionHeader: null,
      insetStart: null,
      insetEnd: null,
      keyboardDismissMode: "on-drag",
      keyboardShouldPersistTaps: "always",
      inActionSheet: null,
      onContentLengthChange: null,
      onScroll: null,
      onLayout: null,
      placeholderConfig: null,
      listId: "users-fast-list",
      listHeaderSize: null,
      listHeaderAlwaysMounted: true,
      scrollReporting: "callbacks",
      wrapChildren: true,
    };
    let tmp16 = getItemSize;
    if (getItemSize == null) {
      tmp16 = tmp5;
    }
    obj3.itemSize = tmp16;
    obj3.renderItem = callback1;
    obj3.renderListHeader = renderListHeader;
    obj3.renderSectionHeader = callback;
    obj3.insetStart = insetStart;
    obj3.insetEnd = sum;
    obj3.inActionSheet = inActionSheet;
    obj3.onContentLengthChange = onContentLengthChange;
    obj3.onScroll = onScroll;
    obj3.onLayout = onLayout;
    obj3.placeholderConfig = tmp12;
    obj3.listHeaderSize = listHeaderSize;
    tmp13Result = closure_7(tmp2(tmp3[24]), obj3);
    const tmp2Result4 = tmp2(tmp3[24]);
  }
  return tmp13Result;
};
