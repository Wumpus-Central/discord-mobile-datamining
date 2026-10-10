// === Module 17151: ConjurePlanTypeTags ===

// Module 17151 (ConjurePlanTypeTags)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import conjurePlanTags from "conjurePlanTags" /* 17143 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = {};
obj[fn(6946).ConjureSupportedSurface.APP_CHANNEL] = fn(8233).AppsIcon;
obj[fn(6946).ConjureSupportedSurface.VOICE_CHANNEL] = fn(8228).VoiceNormalIcon;
obj[fn(6946).ConjureSupportedSurface.ACTIVITY] = fn(17152).ActivitiesIcon;
obj[fn(6946).ConjureSupportedSurface.OVERLAY] = fn(9211).GameControllerIcon;
obj[fn(6946).ConjureSupportedSurface.PROFILE_WIDGET] = fn(17154).WidgetsIcon;
obj[fn(6946).ConjureSupportedSurface.AUTOMOD] = fn(10408).ShieldIcon;
obj[fn(6946).ConjureSupportedSurface.BOT] = fn(11433).RobotIcon;
obj[fn(6946).ConjureSupportedSurface.APPLICATION_COMMANDS] = fn(10619).SlashBoxIcon;
const createStyles = fn(5092);
let obj3 = { tags: { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_4, columnGap: nativeDefault.space.PX_12 }, tag: null };
const obj4 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_4, columnGap: nativeDefault.space.PX_12 };
obj3.tag = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
const obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanTypeTags.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanTypeTags(tags) {
  const cResult = require("c").c(9);
  tags = tags.tags;
  const tmp2 = closure_7();
  _require = tmp2;
  if (cResult[0] === tmp2.tag) {
    if (cResult[1] === tags) {
      if (cResult[6] === tmp2.tags) {
        if (cResult[7] === tmp4) {
          let tmp7 = cResult[8];
        }
        return tmp7;
      }
      const obj2 = { style: tmp3, children: cResult[2] };
      const tmp10 = closure_4(View, obj2);
      cResult[6] = tmp2.tags;
      cResult[7] = cResult[2];
      cResult[8] = tmp10;
      tmp7 = tmp10;
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p(arg0) {
      return arg0 in obj;
    };
    cResult[3] = fn;
    let tag = fn;
  } else {
    tag = cResult[3];
  }
  if (cResult[4] !== tmp2.tag) {
    class S {
      constructor(arg0) {
        obj = { style: closure_0.tag, children: null };
        obj1 = { size: "xs", color: closure_1(closure_2[13]).colors.TEXT_SUBTLE };
        items = [, ];
        items[0] = jsx(closure_6[tags], obj1);
        obj4 = { variant: "text-sm/medium", color: "text-subtle", children: null };
        intl = closure_0(closure_2[17]).intl;
        obj4.children = intl.string(closure_0(closure_2[18]).CONJURE_PLAN_SURFACE_LABELS[tags]);
        items[1] = jsx(closure_0(closure_2[16]).Text, obj4);
        obj.children = items;
        return jsxs(View, obj, tags);
      }
    }
    cResult[4] = tmp2.tag;
    cResult[5] = S;
  } else {
    class S {
      constructor(arg0) {
        obj = { style: closure_0.tag, children: null };
        obj1 = { size: "xs", color: closure_1(closure_2[13]).colors.TEXT_SUBTLE };
        items = [, ];
        items[0] = jsx(closure_6[tags], obj1);
        obj4 = { variant: "text-sm/medium", color: "text-subtle", children: null };
        intl = closure_0(closure_2[17]).intl;
        obj4.children = intl.string(closure_0(closure_2[18]).CONJURE_PLAN_SURFACE_LABELS[tags]);
        items[1] = jsx(closure_0(closure_2[16]).Text, obj4);
        obj.children = items;
        return jsxs(View, obj, tags);
      }
    }
  }
  const found = tags.filter(tag);
  const mapped = found.map(S);
  tag = tmp2.tag;
  cResult[0] = tag;
  cResult[1] = tags;
  cResult[2] = mapped;
  obj = require("c");
}) : (function ConjurePlanTypeTags(tags) {
  tags = tags.tags;
  const tmp = closure_7();
  const tag = tmp;
  obj = { style: tmp.tags, children: null };
  const found = tags.filter((item) => item in obj);
  obj.children = found.map((item) => {
    obj = { style: tag.tag, children: null };
    const items = [React4(obj[item], { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE }), ];
    const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    const intl = util.intl;
    obj3.children = intl.string(conjurePlanTags.CONJURE_PLAN_SURFACE_LABELS[item]);
    items[1] = React4(Text_Text.Text, obj3);
    obj.children = items;
    return hasOwnProperty(View, obj, item);
  });
  return closure_4(View, obj);
});