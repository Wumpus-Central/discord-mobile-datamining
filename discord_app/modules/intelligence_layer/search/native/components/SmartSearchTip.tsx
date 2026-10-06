// === Module 16888: SmartSearchTip ===

// Module 16888 (SmartSearchTip)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import _modDef3919 from "module_3919" /* 3919 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
function getCitationAuthors(citations) {
  const items = [];
  set = new Set();
  const iter = citations[Symbol.iterator]();
  while (iter !== undefined) {
    let author = iter.next().message.author;
    let tmp = author;
    if (!set.has(author.id)) {
      let addResult = set.add(tmp.id);
      let arr = items.push(tmp);
    }
    continue;
  }
  return items;
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, titleContainer: obj4, title: { flexShrink: 1 } };
obj2 = { marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_20 };
obj4 = { flex: 1, flexDirection: "row", gap: nativeDefault.space.PX_6 };
let closure_7 = createStyles(obj);
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let answerText;
  let arr;
  let citations;
  let container;
  let guildId;
  let header;
  let intl2;
  let items;
  let items1;
  let items2;
  let substr;
  let title;
  let titleContainer;
  let tmp10;
  let tmp13;
  let tmp7;
  let obj = guildId(576);
  const cResult = obj.c(22);
  ({ answerText, citations, guildId } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== citations) {
    const tmp6 = getCitationAuthors(citations);
    cResult[0] = citations;
    cResult[1] = tmp6;
    arr = tmp6;
  } else {
    arr = cResult[1];
  }
  ({ container, header, titleContainer, title } = tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = guildId(1126).intl;
    const stringResult = intl.string(_modDef3919.ydAwWi);
    cResult[2] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp4.title) {
    const obj2 = { variant: "text-sm/semibold", color: "text-subtle", lineClamp: 1, style: title, accessibilityRole: "header", children: tmp7 };
    const tmp12 = closure_5(guildId(4892).Text, obj2);
    cResult[3] = tmp4.title;
    cResult[4] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: intl2.string(_modDef3919.QIdSmb) };
    const Text = guildId(4892).Text;
    intl2 = guildId(1126).intl;
    const tmp16 = closure_5(Text, obj3);
    cResult[5] = tmp16;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp4.titleContainer) {
    let tmp17;
    if (cResult[7] === tmp10) {
      tmp17 = cResult[8];
    }
    if (cResult[9] === arr) {
      let tmp19;
      if (cResult[10] === guildId) {
        tmp19 = cResult[11];
      }
      if (cResult[12] === tmp4.header) {
        if (cResult[13] === tmp19) {
          let tmp22;
          let tmp26;
          if (cResult[14] === tmp17) {
            tmp22 = cResult[15];
          }
          if (cResult[16] !== answerText) {
            const obj4 = { variant: "text-md/normal", color: "text-default", children: answerText };
            const tmp28 = closure_5(guildId(4892).Text, obj4);
            cResult[16] = answerText;
            cResult[17] = tmp28;
            tmp26 = tmp28;
          } else {
            tmp26 = cResult[17];
          }
          if (cResult[18] === tmp4.container) {
            if (cResult[19] === tmp22) {
              let tmp29;
              if (cResult[20] === tmp26) {
                tmp29 = cResult[21];
              }
              return tmp29;
            }
          }
          const obj5 = { style: container, children: items };
          items = [tmp22, tmp26];
          const tmp32 = closure_6(View, obj5);
          cResult[18] = tmp4.container;
          cResult[19] = tmp22;
          cResult[20] = tmp26;
          cResult[21] = tmp32;
          tmp29 = tmp32;
        }
      }
      const obj6 = { style: header, children: items1 };
      items1 = [tmp17, tmp19];
      const tmp25 = closure_6(View, obj6);
      cResult[12] = tmp4.header;
      cResult[13] = tmp19;
      cResult[14] = tmp17;
      cResult[15] = tmp25;
      tmp22 = tmp25;
    }
    let tmp20 = arr.length > 0;
    if (tmp20) {
      const obj7 = {
        size: guildId(1188).AvatarSizes.XSMALL_20,
        totalCount: arr.length,
        names: arr.map((username) => username.username),
        children: substr.map((user) => {
              const obj = { user, size: native.AvatarSizes.XSMALL_20, guildId };
              const Avatar = native.Avatar;
              return hasOwnProperty(Avatar, obj, user.id);
            })
      };
      const AvatarPile = guildId(12869).AvatarPile;
      substr = arr.slice(0, 3);
      tmp20 = closure_5(AvatarPile, obj7);
    }
    cResult[9] = arr;
    cResult[10] = guildId;
    cResult[11] = tmp20;
    tmp19 = tmp20;
  }
  const obj8 = { style: titleContainer, children: items2 };
  items2 = [tmp10, tmp13];
  const tmp18 = closure_6(View, obj8);
  cResult[6] = tmp4.titleContainer;
  cResult[7] = tmp10;
  cResult[8] = tmp18;
  tmp17 = tmp18;
}) : ((citations) => {
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let substr;
  citations = citations.citations;
  const guildId = citations.guildId;
  const answerText = citations.answerText;
  const tmp = closure_7();
  const items = [citations];
  const memo = react.useMemo(() => getCitationAuthors(citations), items);
  let obj = { style: tmp.container, children: items3 };
  const obj2 = { style: tmp.header, children: items2 };
  const obj3 = { style: tmp.titleContainer, children: items1 };
  const obj4 = { variant: "text-sm/semibold", color: "text-subtle", lineClamp: 1, style: tmp.title, accessibilityRole: "header", children: intl.string(guildId(3919).ydAwWi) };
  const Text = citations(4892).Text;
  intl = citations(1126).intl;
  items1 = [closure_5(Text, obj4), ];
  const obj5 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: intl2.string(guildId(3919).QIdSmb) };
  const Text2 = citations(4892).Text;
  intl2 = citations(1126).intl;
  items1[1] = closure_5(Text2, obj5);
  items2 = [closure_6(View, obj3), ];
  let tmp4Result = memo.length > 0;
  if (tmp4Result) {
    const obj6 = {
      size: citations(1188).AvatarSizes.XSMALL_20,
      totalCount: memo.length,
      names: memo.map((username) => username.username),
      children: substr.map((user) => {
          const obj = { user, size: native.AvatarSizes.XSMALL_20, guildId };
          const Avatar = native.Avatar;
          return hasOwnProperty(Avatar, obj, user.id);
        })
    };
    const AvatarPile = tmp5(12869).AvatarPile;
    substr = memo.slice(0, 3);
    tmp4Result = closure_5(AvatarPile, obj6);
  }
  items2[1] = tmp4Result;
  items3 = [closure_6(View, obj2), closure_5(citations(4892).Text, { variant: "text-md/normal", color: "text-default", children: answerText })];
  return closure_6(View, obj);
}));
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchTip.tsx");

export default memoResult;