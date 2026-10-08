// === Module 16950: ConjurePlanTypeTags ===

// Module 16950 (ConjurePlanTypeTags)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5086 */;
import conjurePlanTags from "conjurePlanTags" /* 16953 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { automod: fn(10386).ShieldIcon, overlay: fn(9117).GameControllerIcon, widget: fn(16951).WidgetsIcon, activity: fn(8209).AppsIcon, commands: fn(11230).SlashBoxIcon, chat_bot: fn(8174).ChatIcon, bot: fn(12825).RobotIcon };
const createStyles = fn(5090);
let obj3 = { tags: { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_4, columnGap: nativeDefault.space.PX_12 }, tag: null };
const obj4 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_4, columnGap: nativeDefault.space.PX_12 };
obj3.tag = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
const obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanTypeTags.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanTypeTags(tags) {
  const cResult = require("c").c(8);
  tags = tags.tags;
  const tmp2 = closure_7();
  _require = tmp2;
  if (cResult[0] === tmp2.tag) {
    if (cResult[1] === tags) {
      if (cResult[5] === tmp2.tags) {
        if (cResult[6] === tmp4) {
          let tmp7 = cResult[7];
        }
        return tmp7;
      }
      const obj2 = { style: tmp3, children: cResult[2] };
      const tmp10 = closure_4(View, obj2);
      cResult[5] = tmp2.tags;
      cResult[6] = cResult[2];
      cResult[7] = tmp10;
      tmp7 = tmp10;
    }
  }
  if (cResult[3] !== tmp2.tag) {
    const fn = function p(id) {
      obj = { style: tag.tag, children: null };
      const items = [React4(obj[id], { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE }), ];
      const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: null };
      const intl = util.intl;
      obj3.children = intl.string(conjurePlanTags.CONJURE_PLAN_TAG_LABELS[id]);
      items[1] = React4(Text_Text.Text, obj3);
      obj.children = items;
      return hasOwnProperty(View, obj, id);
    };
    cResult[3] = tmp2.tag;
    cResult[4] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[4];
  }
  const mapped = tags.map(tmp5);
  cResult[0] = tmp2.tag;
  cResult[1] = tags;
  cResult[2] = mapped;
  obj = require("c");
}) : (function ConjurePlanTypeTags(tags) {
  tags = tags.tags;
  const tmp = closure_7();
  const tag = tmp;
  return closure_4(View, {
    style: tmp.tags,
    children: tags.map((item) => {
      obj = { style: tag.tag, children: null };
      const items = [React4(obj[item], { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE }), ];
      const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: null };
      const intl = util.intl;
      obj3.children = intl.string(conjurePlanTags.CONJURE_PLAN_TAG_LABELS[item]);
      items[1] = React4(Text_Text.Text, obj3);
      obj.children = items;
      return hasOwnProperty(View, obj, item);
    })
  });
});