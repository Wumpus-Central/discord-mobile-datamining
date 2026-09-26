// discord_app/modules/intelligence_layer/search/native/components/SmartSearchTip.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4836);
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
let obj5 = { flex: 1, flexDirection: "row", gap: nativeDefault.space.PX_6 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchTip.tsx");

export default noop.memo((children) => {
  const citations = children.citations;
  const guildId = children.guildId;
  let tmp = closure_7();
  let items = [citations];
  const memo = noop.useMemo(
    () =>
      (function getCitationAuthors(citations) {
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
      })(citations),
    items,
  );
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
  const intl = citations(1115).intl;
  obj4.children = intl.string(guildId(3877).Cy8fRZ);
  const items1 = [closure_5(citations(4832).Text, obj4)];
  const obj5 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: null };
  const intl2 = citations(1115).intl;
  obj5.children = intl2.string(guildId(3877).PDPJ33);
  items1[1] = closure_5(citations(4832).Text, obj5);
  obj3.children = items1;
  const items2 = [closure_6(View, obj3)];
  let tmp4Result = memo.length > 0;
  if (tmp4Result) {
    const obj6 = {
      size: tmp5(1177).AvatarSizes.XSMALL_20,
      totalCount: memo.length,
      names: memo.map((username) => username.username),
      children: null,
    };
    const substr = memo.slice(0, 3);
    obj6.children = substr.map((user) => {
      const obj = { user, size: native.AvatarSizes.XSMALL_20, guildId };
      return hasOwnProperty(native.Avatar, obj, user.id);
    });
    tmp4Result = closure_5(tmp5(12583).AvatarPile, obj6);
  }
  items2[1] = tmp4Result;
  obj2.children = items2;
  const items3 = [
    closure_6(View, obj2),
    closure_5(citations(4832).Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: children.answerText,
    }),
  ];
  obj.children = items3;
  return closure_6(View, obj);
});
