// discord_app/modules/intelligence_layer/search/native/components/SmartSearchTip.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import _modDef3919 from "../../SmartSearch.messages.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function getCitationAuthors(citations) {
  const items = [];
  const set = new Set();
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
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let obj = {
  container: {
    marginHorizontal: nativeDefault.space.PX_16,
    marginTop: nativeDefault.space.PX_8,
    marginBottom: nativeDefault.space.PX_24,
  },
  header: null,
  titleContainer: null,
  title: null,
};
let obj3 = {
  marginHorizontal: nativeDefault.space.PX_16,
  marginTop: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_24,
};
obj.header = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_20,
};
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_20,
};
obj.titleContainer = { flex: 1, flexDirection: "row", gap: nativeDefault.space.PX_6 };
obj.title = { flexShrink: 1 };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj5 = { flex: 1, flexDirection: "row", gap: nativeDefault.space.PX_6 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchTip.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = guildId(576).c(22);
        ({ answerText, citations, guildId } = arg0);
        const tmp4 = closure_7();
        if (cResult[0] !== citations) {
          const tmp6 = getCitationAuthors(citations);
          cResult[0] = citations;
          cResult[1] = tmp6;
          let arr = tmp6;
        } else {
          arr = cResult[1];
        }
        ({ container, header, titleContainer, title } = tmp4);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = guildId(1126).intl;
          const stringResult = intl.string(_modDef3919.ydAwWi);
          cResult[2] = stringResult;
          let tmp7 = stringResult;
        } else {
          tmp7 = cResult[2];
        }
        if (cResult[3] !== tmp4.title) {
          const obj2 = {
            variant: "text-sm/semibold",
            color: "text-subtle",
            lineClamp: 1,
            style: title,
            accessibilityRole: "header",
            children: tmp7,
          };
          const tmp12 = closure_5(guildId(4892).Text, obj2);
          cResult[3] = tmp4.title;
          cResult[4] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: null };
          const intl2 = guildId(1126).intl;
          obj3.children = intl2.string(_modDef3919.QIdSmb);
          const tmp16 = closure_5(guildId(4892).Text, obj3);
          cResult[5] = tmp16;
          let tmp13 = tmp16;
        } else {
          tmp13 = cResult[5];
        }
        if (cResult[6] === tmp4.titleContainer) {
          if (cResult[7] === tmp10) {
            let tmp17 = cResult[8];
          }
          if (cResult[9] === arr) {
            if (cResult[10] === guildId) {
              let tmp19 = cResult[11];
            }
            if (cResult[12] === tmp4.header) {
              if (cResult[13] === tmp19) {
                if (cResult[14] === tmp17) {
                  let tmp22 = cResult[15];
                }
                if (cResult[16] !== answerText) {
                  const obj4 = { variant: "text-md/normal", color: "text-default", children: answerText };
                  const tmp28 = closure_5(guildId(4892).Text, obj4);
                  cResult[16] = answerText;
                  cResult[17] = tmp28;
                  let tmp26 = tmp28;
                } else {
                  tmp26 = cResult[17];
                }
                if (cResult[18] === tmp4.container) {
                  if (cResult[19] === tmp22) {
                    if (cResult[20] === tmp26) {
                      let tmp29 = cResult[21];
                    }
                    return tmp29;
                  }
                }
                const obj5 = { style: container, children: null };
                const items = [tmp22, tmp26];
                obj5.children = items;
                const tmp32 = closure_6(View, obj5);
                cResult[18] = tmp4.container;
                cResult[19] = tmp22;
                cResult[20] = tmp26;
                cResult[21] = tmp32;
                tmp29 = tmp32;
              }
            }
            const obj6 = { style: header, children: null };
            const items1 = [tmp17, tmp19];
            obj6.children = items1;
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
              children: null,
            };
            const substr = arr.slice(0, 3);
            obj7.children = substr.map((user) => {
              const obj = { user, size: native.AvatarSizes.XSMALL_20, guildId };
              return hasOwnProperty(native.Avatar, obj, user.id);
            });
            tmp20 = closure_5(guildId(12869).AvatarPile, obj7);
          }
          cResult[9] = arr;
          cResult[10] = guildId;
          cResult[11] = tmp20;
          tmp19 = tmp20;
        }
        const obj8 = { style: titleContainer, children: null };
        const items2 = [tmp10, tmp13];
        obj8.children = items2;
        const tmp18 = closure_6(View, obj8);
        cResult[6] = tmp4.titleContainer;
        cResult[7] = tmp10;
        cResult[8] = tmp18;
        tmp17 = tmp18;
        let obj = guildId(576);
      }
    : (children) => {
        const citations = children.citations;
        const guildId = children.guildId;
        const tmp = closure_7();
        const items = [citations];
        const memo = noop.useMemo(() => getCitationAuthors(citations), items);
        let obj = { style: tmp.container, children: null };
        const obj2 = { style: tmp.header, children: null };
        const obj3 = { style: tmp.titleContainer, children: null };
        const obj4 = {
          variant: "text-sm/semibold",
          color: "text-subtle",
          lineClamp: 1,
          style: tmp.title,
          accessibilityRole: "header",
          children: null,
        };
        const intl = citations(1126).intl;
        obj4.children = intl.string(guildId(3919).ydAwWi);
        const items1 = [closure_5(citations(4892).Text, obj4)];
        const obj5 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: null };
        const intl2 = citations(1126).intl;
        obj5.children = intl2.string(guildId(3919).QIdSmb);
        items1[1] = closure_5(citations(4892).Text, obj5);
        obj3.children = items1;
        const items2 = [closure_6(View, obj3)];
        let tmp4Result = memo.length > 0;
        if (tmp4Result) {
          const obj6 = {
            size: tmp5(1188).AvatarSizes.XSMALL_20,
            totalCount: memo.length,
            names: memo.map((username) => username.username),
            children: null,
          };
          const substr = memo.slice(0, 3);
          obj6.children = substr.map((user) => {
            const obj = { user, size: native.AvatarSizes.XSMALL_20, guildId };
            return hasOwnProperty(native.Avatar, obj, user.id);
          });
          tmp4Result = closure_5(tmp5(12869).AvatarPile, obj6);
        }
        items2[1] = tmp4Result;
        obj2.children = items2;
        const items3 = [
          closure_6(View, obj2),
          closure_5(citations(4892).Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: children.answerText,
          }),
        ];
        obj.children = items3;
        return closure_6(View, obj);
      },
);
