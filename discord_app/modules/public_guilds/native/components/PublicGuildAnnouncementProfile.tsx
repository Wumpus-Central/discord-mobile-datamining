// === Module 10773: PublicGuildAnnouncementProfile ===

// Module 10773 (PublicGuildAnnouncementProfile)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6839 */;
import PublicGuildsUtils from "PublicGuildsUtils" /* 8063 */;
import _modDef10774 from "module_10774" /* 10774 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { content: { padding: 16 }, avatar: null, nameWrapper: null, headerText: null, description: null };
let size = { borderRadius: nativeDefault.radii.lg, height: 80, width: 80, marginVertical: 16 };
obj2.avatar = size;
obj2.nameWrapper = { flexDirection: "row", alignItems: "center" };
obj2.headerText = { marginLeft: 8 };
obj2.description = { marginTop: 8 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/PublicGuildAnnouncementProfile.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PublicGuildAnnouncementProfile() {
  const cResult = c.c(22);
  const tmp4 = closure_6();
  ({ content, avatar } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const publicSystemMessageAvatar = PublicGuildsUtils.getPublicSystemMessageAvatar();
    cResult[0] = publicSystemMessageAvatar;
    let first = publicSystemMessageAvatar;
    const tmpResult = PublicGuildsUtils;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.avatar) {
    const obj2 = { style: avatar, source: first };
    const tmp10 = React4(FastImageDefault, obj2);
    cResult[1] = tmp4.avatar;
    cResult[2] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { source: _modDef10774, disableColor: true };
    const tmp14 = React4(native.Icon, obj3);
    cResult[3] = tmp14;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.xfAlNx);
    cResult[4] = stringResult;
    let tmp15 = stringResult;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== tmp4.headerText) {
    const obj4 = { style: tmp4.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp15 };
    const tmp19 = React4(Text_Text.Text, obj4);
    cResult[5] = tmp4.headerText;
    cResult[6] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === tmp4.nameWrapper) {
    if (cResult[8] === tmp17) {
      let tmp20 = cResult[9];
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t.BUZ0sl);
      cResult[10] = stringResult1;
      let tmp22 = stringResult1;
    } else {
      tmp22 = cResult[10];
    }
    if (cResult[11] !== tmp4.description) {
      const obj5 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp22 };
      const tmp26 = React4(Text_Text.Text, obj5);
      cResult[11] = tmp4.description;
      cResult[12] = tmp26;
      let tmp24 = tmp26;
    } else {
      tmp24 = cResult[12];
    }
    const _Symbol2 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = util.intl;
      const stringResult2 = intl3.string(util.t.w5beJH);
      cResult[13] = stringResult2;
      let tmp27 = stringResult2;
    } else {
      tmp27 = cResult[13];
    }
    if (cResult[14] !== tmp4.description) {
      const obj6 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp27 };
      const tmp31 = React4(Text_Text.Text, obj6);
      cResult[14] = tmp4.description;
      cResult[15] = tmp31;
      let tmp29 = tmp31;
    } else {
      tmp29 = cResult[15];
    }
    if (cResult[16] === tmp4.content) {
      if (cResult[17] === tmp24) {
        if (cResult[18] === tmp29) {
          if (cResult[19] === tmp7) {
            if (cResult[20] === tmp20) {
              let tmp32 = cResult[21];
            }
            return tmp32;
          }
        }
      }
    }
    const obj7 = { startExpanded: true, children: null };
    const obj8 = { style: content, children: null };
    const items = [tmp7, tmp20, tmp24, tmp29];
    obj8.children = items;
    obj7.children = hasOwnProperty(View, obj8);
    const tmp36 = React4(Sheet_BottomSheet.BottomSheet, obj7);
    cResult[16] = tmp4.content;
    cResult[17] = tmp24;
    cResult[18] = tmp29;
    cResult[19] = tmp7;
    cResult[20] = tmp20;
    cResult[21] = tmp36;
    tmp32 = tmp36;
  }
  const obj9 = { style: tmp4.nameWrapper, children: null };
  const items1 = [tmp11, tmp17];
  obj9.children = items1;
  const tmp21 = hasOwnProperty(View, obj9);
  cResult[7] = tmp4.nameWrapper;
  cResult[8] = tmp17;
  cResult[9] = tmp21;
  tmp20 = tmp21;
}) : (function PublicGuildAnnouncementProfile() {
  const tmp = closure_6();
  const obj = { startExpanded: true, children: null };
  const obj2 = { style: tmp.content, children: null };
  const obj3 = { style: tmp.avatar, source: null };
  const tmp2 = FastImageDefault;
  obj3.source = PublicGuildsUtils.getPublicSystemMessageAvatar();
  const items = [React4(tmp2, obj3), , , ];
  const obj5 = { style: tmp.nameWrapper, children: null };
  const items1 = [React4(native.Icon, { source: _modDef10774, disableColor: true }), ];
  const obj7 = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj7.children = intl.string(util.t.xfAlNx);
  items1[1] = React4(Text_Text.Text, obj7);
  obj5.children = items1;
  items[1] = hasOwnProperty(View, obj5);
  const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj8.children = intl2.string(util.t.BUZ0sl);
  items[2] = React4(Text_Text.Text, obj8);
  const obj9 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = util.intl;
  obj9.children = intl3.string(util.t.w5beJH);
  items[3] = React4(Text_Text.Text, obj9);
  obj2.children = items;
  obj.children = hasOwnProperty(View, obj2);
  return React4(Sheet_BottomSheet.BottomSheet, obj);
});