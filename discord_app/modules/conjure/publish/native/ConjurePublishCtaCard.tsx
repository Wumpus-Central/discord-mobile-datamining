// === Module 12396: ConjurePublishCtaCard ===

// Module 12396 (ConjurePublishCtaCard)
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import Text_Text from "Text/Text" /* 5216 */;
import Stack_Stack from "Stack/Stack" /* 5957 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 11772 */;
import conjurePublishCard from "conjurePublishCard" /* 12225 */;
import ConjureTipInlineCalloutDefault from "ConjureTipInlineCallout" /* 12397 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4843 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function PublishCta(publish) {
  const cResult = publish(576).c(15);
  publish = publish.publish;
  const guildId = publish.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function o() {
      guild = null;
      if (null != guildId) {
        guild = GuildStore.getGuild(tmp);
      }
      return guild;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = publish(576);
  const stateFromStores = publish(504).useStateFromStores(first, tmp6);
  if (cResult[3] !== publish) {
    const fn2 = function x() {
      return publish.run("card");
    };
    cResult[3] = publish;
    cResult[4] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === publish.disabled) {
    if (cResult[6] === publish.label) {
      if (cResult[7] === publish.publishing) {
        if (cResult[8] === tmp8) {
          let tmp9 = cResult[9];
        }
        if (cResult[10] !== stateFromStores) {
          let tmp12 = null;
          if (null != stateFromStores) {
            const obj2 = { direction: "horizontal", spacing: 4, align: "center", children: null };
            const obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
            const intl = tmp(1128).intl;
            obj3.children = intl.string(guildId(3830)["+HGTlC"]);
            const items1 = [closure_4(tmp(5216).Text, obj3), , ];
            const obj4 = { guild: stateFromStores, size: tmp(6862).GuildIconSizes.XXSMALL };
            items1[1] = closure_4(guildId(6862), obj4);
            const obj5 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: null };
            const tmp16 = guildId(6862);
            obj5.children = tmp(12225).publishCardServerName(stateFromStores.name);
            items1[2] = closure_4(tmp(5216).Text, obj5);
            obj2.children = items1;
            tmp12 = closure_5(tmp(5957).Stack, obj2);
            const tmpResult2 = tmp(12225);
          }
          cResult[10] = stateFromStores;
          cResult[11] = tmp12;
          let tmp11 = tmp12;
        } else {
          tmp11 = cResult[11];
        }
        if (cResult[12] === tmp9) {
          if (cResult[13] === tmp11) {
            let tmp17 = cResult[14];
          }
          return tmp17;
        }
        const obj6 = { direction: "horizontal", spacing: 8, align: "center", children: null };
        const items2 = [tmp9, tmp11];
        obj6.children = items2;
        const tmp19 = closure_5(tmp(5957).Stack, obj6);
        cResult[12] = tmp9;
        cResult[13] = tmp11;
        cResult[14] = tmp19;
        tmp17 = tmp19;
      }
    }
  }
  const tmp10 = closure_4(publish(5226).Button, { text: publish.label, variant: "primary", size: "sm", loading: publish.publishing, disabled: publish.disabled, onPress: tmp8 });
  cResult[5] = publish.disabled;
  cResult[6] = publish.label;
  cResult[7] = publish.publishing;
  cResult[8] = tmp8;
  cResult[9] = tmp10;
  tmp9 = tmp10;
  const obj7 = { text: publish.label, variant: "primary", size: "sm", loading: publish.publishing, disabled: publish.disabled, onPress: tmp8 };
  const tmpResult = publish(504);
}) : (function PublishCta(publish) {
  publish = publish.publish;
  const guildId = publish.guildId;
  const items = [GuildStore];
  const stateFromStores = publish(504).useStateFromStores(items, () => {
    guild = null;
    if (null != guildId) {
      guild = GuildStore.getGuild(tmp);
    }
    return guild;
  });
  const children = [
    closure_4(publish(5226).Button, {
      text: publish.label,
      variant: "primary",
      size: "sm",
      loading: publish.publishing,
      disabled: publish.disabled,
      onPress() {
        return publish.run("card");
      }
    }),

  ];
  let tmp4Result = null;
  if (null != stateFromStores) {
    const obj3 = { direction: "horizontal", spacing: 4, align: "center", children: null };
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl = tmp(1128).intl;
    obj4.children = intl.string(guildId(3830)["+HGTlC"]);
    const items2 = [closure_4(tmp(5216).Text, obj4), , ];
    const obj5 = { guild: stateFromStores, size: tmp(6862).GuildIconSizes.XXSMALL };
    items2[1] = closure_4(guildId(6862), obj5);
    const obj6 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: null };
    const tmp8 = guildId(6862);
    obj6.children = tmp(12225).publishCardServerName(stateFromStores.name);
    items2[2] = closure_4(tmp(5216).Text, obj6);
    obj3.children = items2;
    tmp4Result = closure_5(tmp(5957).Stack, obj3);
    const tmpResult = tmp(12225);
  }
  children[1] = tmp4Result;
  return closure_5(publish(5957).Stack, { direction: "horizontal", spacing: 8, align: "center", children });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishCtaCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishCtaCard(cta) {
  const cResult = c.c(3);
  cta = cta.cta;
  const tmp5 = useConjurePublishActionDefault(cta.projectId);
  if (cResult[0] === cta) {
    if (cResult[1] === tmp5) {
      let tmp6 = cResult[2];
    }
    return tmp6;
  }
  let tmp8Result4 = null;
  if (null != tmp5) {
    tmp8Result4 = null;
    if (tmpResult.isConjurePublishCtaVisible(tmp5, cta)) {
      let tmp8Result = null;
      if ("new_ui" === cta.reason) {
        const obj2 = { variant: "text-sm/normal", color: "text-default", children: null };
        const intl = util.intl;
        obj2.children = intl.string(_modDef3830["9ZqzLo"]);
        tmp8Result = React4(Text_Text.Text, obj2);
      }
      const items = [tmp8Result, , ];
      const obj3 = { publish: tmp5 };
      items[1] = React4(closure_6, obj3);
      let tmp8Result3 = null;
      if ("new_ui" !== cta.reason) {
        const obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
        const intl2 = util.intl;
        obj4.children = intl2.string(_modDef3830.SifbJM);
        tmp8Result3 = React4(Text_Text.Text, obj4);
      }
      const obj5 = { children: null };
      const obj6 = { spacing: 8, children: null };
      items[2] = tmp8Result3;
      obj6.children = items;
      obj5.children = hasOwnProperty(Stack_Stack.Stack, obj6);
      tmp8Result4 = React4(ConjureTipInlineCalloutDefault, obj5);
      const tmp4Result = ConjureTipInlineCalloutDefault;
    }
    tmpResult = conjurePublishCard;
  }
  cResult[0] = cta;
  cResult[1] = tmp5;
  cResult[2] = tmp8Result4;
  tmp6 = tmp8Result4;
}) : (function ConjurePublishCtaCard(cta) {
  cta = cta.cta;
  const tmp3 = useConjurePublishActionDefault(cta.projectId);
  let tmp6Result4 = null;
  if (null != tmp3) {
    tmp6Result4 = null;
    if (obj.isConjurePublishCtaVisible(tmp3, cta)) {
      let tmp6Result = null;
      if ("new_ui" === cta.reason) {
        const obj2 = { variant: "text-sm/normal", color: "text-default", children: null };
        const intl = util.intl;
        obj2.children = intl.string(_modDef3830["9ZqzLo"]);
        tmp6Result = React4(Text_Text.Text, obj2);
      }
      const items = [tmp6Result, , ];
      const obj3 = { publish: tmp3 };
      items[1] = React4(closure_6, obj3);
      let tmp6Result3 = null;
      if ("new_ui" !== cta.reason) {
        const obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
        const intl2 = util.intl;
        obj4.children = intl2.string(_modDef3830.SifbJM);
        tmp6Result3 = React4(Text_Text.Text, obj4);
      }
      const obj5 = { children: null };
      const obj6 = { spacing: 8, children: null };
      items[2] = tmp6Result3;
      obj6.children = items;
      obj5.children = hasOwnProperty(Stack_Stack.Stack, obj6);
      tmp6Result4 = React4(ConjureTipInlineCalloutDefault, obj5);
      const tmpResult = ConjureTipInlineCalloutDefault;
    }
    obj = conjurePublishCard;
  }
  return tmp6Result4;
});