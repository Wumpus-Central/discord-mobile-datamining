// === Module 16752: ConjurePublishCtaCard ===

// Module 16752 (ConjurePublishCtaCard)
import c from "c" /* 576 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 16652 */;
import conjurePublishCard from "conjurePublishCard" /* 16724 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((publish) => {
  const cResult = publish(576).c(20);
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
    const fn2 = function p() {
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
            const intl = tmp(1126).intl;
            obj3.children = intl.string(guildId(3753)["+HGTlC"]);
            const items1 = [closure_4(tmp(4892).Text, obj3), , ];
            const obj4 = { guild: stateFromStores, size: tmp(5978).GuildIconSizes.XXSMALL };
            items1[1] = closure_4(guildId(5978), obj4);
            const obj5 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: null };
            const tmp16 = guildId(5978);
            obj5.children = tmp(16724).publishCardServerName(stateFromStores.name);
            items1[2] = closure_4(tmp(4892).Text, obj5);
            obj2.children = items1;
            tmp12 = closure_5(tmp(5600).Stack, obj2);
            const tmpResult2 = tmp(16724);
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
          if (cResult[15] !== publish.disabledReason) {
            let tmp21 = null;
            if (null != publish.disabledReason) {
              const obj6 = { variant: "text-sm/normal", color: "text-muted", children: publish.disabledReason };
              tmp21 = closure_4(tmp(4892).Text, obj6);
            }
            cResult[15] = publish.disabledReason;
            cResult[16] = tmp21;
            let tmp20 = tmp21;
          } else {
            tmp20 = cResult[16];
          }
          if (cResult[17] === tmp17) {
            if (cResult[18] === tmp20) {
              let tmp23 = cResult[19];
            }
            return tmp23;
          }
          const obj7 = { direction: "vertical", spacing: 8, children: null };
          const items2 = [tmp17, tmp20];
          obj7.children = items2;
          const tmp25 = closure_5(tmp(5600).Stack, obj7);
          cResult[17] = tmp17;
          cResult[18] = tmp20;
          cResult[19] = tmp25;
          tmp23 = tmp25;
        }
        const obj8 = { direction: "horizontal", spacing: 8, align: "center", children: null };
        const items3 = [tmp9, tmp11];
        obj8.children = items3;
        const tmp19 = closure_5(tmp(5600).Stack, obj8);
        cResult[12] = tmp9;
        cResult[13] = tmp11;
        cResult[14] = tmp19;
        tmp17 = tmp19;
      }
    }
  }
  const tmp10 = closure_4(publish(5601).Button, { text: publish.label, variant: "primary", size: "sm", loading: publish.publishing, disabled: publish.disabled, onPress: tmp8 });
  cResult[5] = publish.disabled;
  cResult[6] = publish.label;
  cResult[7] = publish.publishing;
  cResult[8] = tmp8;
  cResult[9] = tmp10;
  tmp9 = tmp10;
  const obj9 = { text: publish.label, variant: "primary", size: "sm", loading: publish.publishing, disabled: publish.disabled, onPress: tmp8 };
  const tmpResult = publish(504);
}) : ((publish) => {
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
  const items1 = [
    closure_4(publish(5601).Button, {
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
    const intl = tmp(1126).intl;
    obj4.children = intl.string(guildId(3753)["+HGTlC"]);
    const items2 = [closure_4(tmp(4892).Text, obj4), , ];
    const obj5 = { guild: stateFromStores, size: tmp(5978).GuildIconSizes.XXSMALL };
    items2[1] = closure_4(guildId(5978), obj5);
    const obj6 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: null };
    const tmp8 = guildId(5978);
    obj6.children = tmp(16724).publishCardServerName(stateFromStores.name);
    items2[2] = closure_4(tmp(4892).Text, obj6);
    obj3.children = items2;
    tmp4Result = closure_5(tmp(5600).Stack, obj3);
    const tmpResult = tmp(16724);
  }
  items1[1] = tmp4Result;
  const children = [closure_5(publish(5600).Stack, { direction: "horizontal", spacing: 8, align: "center", children: items1 }), ];
  let tmp5Result = null;
  if (null != publish.disabledReason) {
    const obj7 = { variant: "text-sm/normal", color: "text-muted", children: publish.disabledReason };
    tmp5Result = closure_4(tmp(4892).Text, obj7);
  }
  children[1] = tmp5Result;
  return closure_5(publish(5600).Stack, { direction: "vertical", spacing: 8, children });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishCtaCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = c.c(2);
  const tmp4 = useConjurePublishActionDefault(projectId.projectId);
  if (cResult[0] !== tmp4) {
    let tmp7 = null;
    if (null != tmp4) {
      tmp7 = null;
      if (tmpResult.isConjurePublishCtaVisible(tmp4)) {
        const obj2 = { publish: tmp4 };
        tmp7 = React4(closure_6, obj2);
      }
      tmpResult = conjurePublishCard;
    }
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : ((projectId) => {
  const tmp2 = useConjurePublishActionDefault(projectId.projectId);
  let tmp3 = null;
  if (null != tmp2) {
    tmp3 = null;
    if (obj.isConjurePublishCtaVisible(tmp2)) {
      const obj2 = { publish: tmp2 };
      tmp3 = React4(closure_6, obj2);
    }
    obj = conjurePublishCard;
  }
  return tmp3;
});