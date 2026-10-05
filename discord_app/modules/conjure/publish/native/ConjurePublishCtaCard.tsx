// discord_app/modules/conjure/publish/native/ConjurePublishCtaCard.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import useConjurePublishActionDefault from "../useConjurePublishAction.tsx";
import conjurePublishCard from "../conjurePublishCard.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let publish;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (publish) => {
      let first;
      let intl;
      let items1;
      let items2;
      let items3;
      let tmp6;
      let tmp8;
      let tmpResult2;
      const tmp = publish;
      const obj = publish(576);
      const cResult = obj.c(20);
      publish = publish.publish;
      const guildId = publish.guildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function o() {
          let guild = null;
          if (null != guildId) {
            guild = GuildStore.getGuild(tmp);
          }
          return guild;
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== publish) {
        const fn2 = function p() {
          return publish.run("card");
        };
        cResult[3] = publish;
        cResult[4] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === publish.disabled) {
        if (cResult[6] === publish.label) {
          if (cResult[7] === publish.publishing) {
            let tmp9;
            let tmp11;
            if (cResult[8] === tmp8) {
              tmp9 = cResult[9];
            }
            if (cResult[10] !== stateFromStores) {
              let tmp12 = null;
              if (null != stateFromStores) {
                const obj2 = { direction: "horizontal", spacing: 4, align: "center", children: items1 };
                const Stack = tmp(5593).Stack;
                const obj3 = {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: intl.string(guildId(3723)["+HGTlC"]),
                };
                const Text = tmp(4886).Text;
                intl = tmp(1126).intl;
                items1 = [closure_4(Text, obj3), ,];
                const obj4 = { guild: stateFromStores, size: tmp(5971).GuildIconSizes.XXSMALL };
                const tmp16 = guildId(5971);
                items1[1] = closure_4(tmp16, obj4);
                const obj5 = {
                  variant: "text-sm/medium",
                  color: "text-default",
                  lineClamp: 1,
                  children: tmpResult2.publishCardServerName(stateFromStores.name),
                };
                const Text2 = tmp(4886).Text;
                tmpResult2 = tmp(16703);
                items1[2] = closure_4(Text2, obj5);
                tmp12 = closure_5(Stack, obj2);
              }
              cResult[10] = stateFromStores;
              cResult[11] = tmp12;
              tmp11 = tmp12;
            } else {
              tmp11 = cResult[11];
            }
            if (cResult[12] === tmp9) {
              let tmp17;
              let tmp20;
              if (cResult[13] === tmp11) {
                tmp17 = cResult[14];
              }
              if (cResult[15] !== publish.disabledReason) {
                let tmp21 = null;
                if (null != publish.disabledReason) {
                  const obj6 = { variant: "text-sm/normal", color: "text-muted", children: publish.disabledReason };
                  tmp21 = closure_4(tmp(4886).Text, obj6);
                }
                cResult[15] = publish.disabledReason;
                cResult[16] = tmp21;
                tmp20 = tmp21;
              } else {
                tmp20 = cResult[16];
              }
              if (cResult[17] === tmp17) {
                let tmp23;
                if (cResult[18] === tmp20) {
                  tmp23 = cResult[19];
                }
                return tmp23;
              }
              const obj7 = { direction: "vertical", spacing: 8, children: items2 };
              items2 = [tmp17, tmp20];
              const tmp25 = closure_5(tmp(5593).Stack, obj7);
              cResult[17] = tmp17;
              cResult[18] = tmp20;
              cResult[19] = tmp25;
              tmp23 = tmp25;
            }
            const obj8 = { direction: "horizontal", spacing: 8, align: "center", children: items3 };
            items3 = [tmp9, tmp11];
            const tmp19 = closure_5(tmp(5593).Stack, obj8);
            cResult[12] = tmp9;
            cResult[13] = tmp11;
            cResult[14] = tmp19;
            tmp17 = tmp19;
          }
        }
      }
      const obj9 = {
        text: publish.label,
        variant: "primary",
        size: "sm",
        loading: publish.publishing,
        disabled: publish.disabled,
        onPress: tmp8,
      };
      const tmp10 = closure_4(tmp(5594).Button, obj9);
      cResult[5] = publish.disabled;
      cResult[6] = publish.label;
      cResult[7] = publish.publishing;
      cResult[8] = tmp8;
      cResult[9] = tmp10;
      tmp9 = tmp10;
    }
  : (publish) => {
      let intl;
      let items2;
      let tmpResult;
      publish = publish.publish;
      const guildId = publish.guildId;
      const tmp = publish;
      const items = [GuildStore];
      const obj = publish(504);
      const stateFromStores = obj.useStateFromStores(items, () => {
        let guild = null;
        if (null != guildId) {
          guild = GuildStore.getGuild(tmp);
        }
        return guild;
      });
      const Stack = publish(5593).Stack;
      const Stack2 = publish(5593).Stack;
      const items1 = [,];
      const obj2 = {
        text: publish.label,
        variant: "primary",
        size: "sm",
        loading: publish.publishing,
        disabled: publish.disabled,
        onPress() {
          return publish.run("card");
        },
      };
      items1[0] = closure_4(publish(5594).Button, obj2);
      let tmp4Result = null;
      if (null != stateFromStores) {
        const obj3 = { direction: "horizontal", spacing: 4, align: "center", children: items2 };
        const Stack3 = tmp(5593).Stack;
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(guildId(3723)["+HGTlC"]) };
        const Text = tmp(4886).Text;
        intl = tmp(1126).intl;
        items2 = [closure_4(Text, obj4), ,];
        const obj5 = { guild: stateFromStores, size: tmp(5971).GuildIconSizes.XXSMALL };
        const tmp8 = guildId(5971);
        items2[1] = closure_4(tmp8, obj5);
        const obj6 = {
          variant: "text-sm/medium",
          color: "text-default",
          lineClamp: 1,
          children: tmpResult.publishCardServerName(stateFromStores.name),
        };
        const Text2 = tmp(4886).Text;
        tmpResult = tmp(16703);
        items2[2] = closure_4(Text2, obj6);
        tmp4Result = closure_5(Stack3, obj3);
      }
      items1[1] = tmp4Result;
      const children = [closure_5(Stack2, { direction: "horizontal", spacing: 8, align: "center", children: items1 })];
      let tmp5Result = null;
      if (null != publish.disabledReason) {
        const obj7 = { variant: "text-sm/normal", color: "text-muted", children: publish.disabledReason };
        tmp5Result = closure_4(tmp(4886).Text, obj7);
      }
      children[1] = tmp5Result;
      return closure_5(Stack, { direction: "vertical", spacing: 8, children });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp4 = useConjurePublishActionDefault(projectId.projectId);
      if (cResult[0] !== tmp4) {
        let tmp7 = null;
        if (null != tmp4) {
          tmp7 = null;
          const tmpResult = conjurePublishCard;
          if (tmpResult.isConjurePublishCtaVisible(tmp4)) {
            const obj2 = { publish: tmp4 };
            tmp7 = React3(closure_6, obj2);
          }
        }
        cResult[0] = tmp4;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : (projectId) => {
      const tmp2 = useConjurePublishActionDefault(projectId.projectId);
      let tmp3 = null;
      if (null != tmp2) {
        tmp3 = null;
        const obj = conjurePublishCard;
        if (obj.isConjurePublishCtaVisible(tmp2)) {
          const obj2 = { publish: tmp2 };
          tmp3 = React3(closure_6, obj2);
        }
      }
      return tmp3;
    };
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishCtaCard.tsx");

export default tmp4;
