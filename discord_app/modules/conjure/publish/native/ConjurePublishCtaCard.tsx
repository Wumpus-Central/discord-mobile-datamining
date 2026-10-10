// discord_app/modules/conjure/publish/native/ConjurePublishCtaCard.tsx
import c from "../../../../../_runtime/00576_c.js";
import useConjurePublishActionDefault from "../useConjurePublishAction.tsx";
import conjurePublishCard from "../conjurePublishCard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PublishCta(publish) {
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
                obj3.children = intl.string(guildId(3849)["+HGTlC"]);
                const items1 = [closure_4(tmp(5088).Text, obj3), ,];
                const obj4 = { guild: stateFromStores, size: tmp(6158).GuildIconSizes.XXSMALL };
                items1[1] = closure_4(guildId(6158), obj4);
                const obj5 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: null };
                const tmp16 = guildId(6158);
                obj5.children = tmp(17223).publishCardServerName(stateFromStores.name);
                items1[2] = closure_4(tmp(5088).Text, obj5);
                obj2.children = items1;
                tmp12 = closure_5(tmp(5377).Stack, obj2);
                const tmpResult2 = tmp(17223);
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
            const tmp19 = closure_5(tmp(5377).Stack, obj6);
            cResult[12] = tmp9;
            cResult[13] = tmp11;
            cResult[14] = tmp19;
            tmp17 = tmp19;
          }
        }
      }
      const tmp10 = closure_4(publish(5379).Button, {
        text: publish.label,
        variant: "primary",
        size: "sm",
        loading: publish.publishing,
        disabled: publish.disabled,
        onPress: tmp8,
      });
      cResult[5] = publish.disabled;
      cResult[6] = publish.label;
      cResult[7] = publish.publishing;
      cResult[8] = tmp8;
      cResult[9] = tmp10;
      tmp9 = tmp10;
      const obj7 = {
        text: publish.label,
        variant: "primary",
        size: "sm",
        loading: publish.publishing,
        disabled: publish.disabled,
        onPress: tmp8,
      };
      const tmpResult = publish(504);
    }
  : function PublishCta(publish) {
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
        closure_4(publish(5379).Button, {
          text: publish.label,
          variant: "primary",
          size: "sm",
          loading: publish.publishing,
          disabled: publish.disabled,
          onPress() {
            return publish.run("card");
          },
        }),
      ];
      let tmp4Result = null;
      if (null != stateFromStores) {
        const obj3 = { direction: "horizontal", spacing: 4, align: "center", children: null };
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl = tmp(1126).intl;
        obj4.children = intl.string(guildId(3849)["+HGTlC"]);
        const items2 = [closure_4(tmp(5088).Text, obj4), ,];
        const obj5 = { guild: stateFromStores, size: tmp(6158).GuildIconSizes.XXSMALL };
        items2[1] = closure_4(guildId(6158), obj5);
        const obj6 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: null };
        const tmp8 = guildId(6158);
        obj6.children = tmp(17223).publishCardServerName(stateFromStores.name);
        items2[2] = closure_4(tmp(5088).Text, obj6);
        obj3.children = items2;
        tmp4Result = closure_5(tmp(5377).Stack, obj3);
        const tmpResult = tmp(17223);
      }
      children[1] = tmp4Result;
      return closure_5(publish(5377).Stack, { direction: "horizontal", spacing: 8, align: "center", children });
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishCtaCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePublishCtaCard(projectId) {
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
    }
  : function ConjurePublishCtaCard(projectId) {
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
    };
